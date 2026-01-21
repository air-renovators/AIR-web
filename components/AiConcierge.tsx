import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Mic, X, Send, Loader2, Sparkles, ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';

// Hook for audio recording
const useRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      chunks.current = [];

      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.current.push(e.data);
      };

      mediaRecorder.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Please allow microphone access to use voice features.");
    }
  };

  const stopRecording = (): Promise<Blob> => {
    return new Promise((resolve) => {
      if (!mediaRecorder.current) return;

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: 'audio/webm' });
        setIsRecording(false);
        resolve(blob);
      };

      mediaRecorder.current.stop();
      mediaRecorder.current.stream.getTracks().forEach(track => track.stop());
    });
  };

  return { isRecording, startRecording, stopRecording };
};

export const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Hi! Tell me about your biggest operational headache. I'll explain how we can automate it." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { isRecording, startRecording, stopRecording } = useRecorder();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isOpen]);

  // Helper to convert Blob to Base64
  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Remove data url prefix
        const base64Data = base64String.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const generateResponse = async (userText: string | null, audioBlob?: Blob) => {
    setIsLoading(true);
    
    // Add user message to UI immediately
    if (userText) {
        setMessages(prev => [...prev, { role: 'user', text: userText }]);
    } else if (audioBlob) {
        setMessages(prev => [...prev, { role: 'user', text: "🎤 (Processing Audio...)" }]);
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      let contents;
      // Use a stable model that supports text and reasoning. 
      // 'gemini-3-flash-preview' is the recommended model for basic text tasks and multimodal inputs.
      let modelName = 'gemini-3-flash-preview'; 

      if (audioBlob) {
        // Audio input handling
        const audioBase64 = await blobToBase64(audioBlob);
        
        contents = {
          parts: [
            { inlineData: { mimeType: 'audio/webm', data: audioBase64 } },
            { text: "Transcribe this audio. Then, acting as a senior automation consultant at 'AI Renovators', provide a 1-sentence solution to the user's problem and ask them to book a demo below to build it. Keep it punchy." }
          ]
        };
      } else {
        // Text only interaction
        contents = {
            parts: [{ text: `User says: "${userText}". You are a senior automation consultant at 'AI Renovators'. Provide a concise, high-value solution (max 2 sentences) to their problem using AI automation. Then urge them to schedule the discovery call below.` }]
        };
      }

      const response = await ai.models.generateContent({
        model: modelName,
        contents: contents,
      });

      const text = response.text;
      
      // If it was audio, replace the placeholder
      if (audioBlob) {
         setMessages(prev => {
             const newHist = [...prev];
             newHist[newHist.length - 1] = { role: 'user', text: "🎤 Audio Input" };
             return [...newHist, { role: 'model', text: text || "I couldn't quite hear that, could you try again?" }];
         });
      } else {
         setMessages(prev => [...prev, { role: 'model', text: text || "I'm having trouble thinking right now." }]);
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I hit a snag. Please try booking a demo directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    generateResponse(input);
    setInput("");
  };

  const handleMicClick = async () => {
    if (isRecording) {
      const audioBlob = await stopRecording();
      generateResponse(null, audioBlob);
    } else {
      startRecording();
    }
  };

  const handleBookDemoClick = () => {
      setIsOpen(false);
      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-white text-blue-600 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform duration-300 group animate-float"
        >
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
          <Sparkles size={28} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-blue-900/90 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask our AI Architect
          </span>
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] flex flex-col glass-card rounded-2xl shadow-2xl overflow-hidden border border-white/20 animate-fade-in-up bg-[#0055FF]/90 backdrop-blur-xl">
          {/* Header */}
          <div className="p-4 bg-white/10 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold text-white">AI Operations Architect</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white ml-auto rounded-tr-none'
                    : 'bg-white/10 text-blue-50 mr-auto rounded-tl-none border border-white/5'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-blue-200 text-xs ml-2">
                <Loader2 size={12} className="animate-spin" /> AI is analyzing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action */}
          {messages.length > 2 && (
             <div className="px-4 pb-2">
                <button 
                    onClick={handleBookDemoClick}
                    className="w-full py-2 bg-white text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                    Book Implementation Call <ArrowDown size={14} />
                </button>
             </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2 items-center">
            <button
              onClick={handleMicClick}
              className={`p-2 rounded-full transition-all duration-300 ${
                isRecording 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Mic size={20} />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isRecording ? "Listening..." : "Type or speak your problem..."}
              className="flex-1 bg-transparent border-none text-white placeholder-blue-200/50 focus:ring-0 text-sm"
              disabled={isRecording || isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="text-blue-300 hover:text-white disabled:opacity-50 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};