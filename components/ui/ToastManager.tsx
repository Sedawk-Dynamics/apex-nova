"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle, XCircle, Info, X } from "lucide-react";
import clsx from "clsx";

type ToastType = "success" | "error" | "info";

interface ToastMessage {
  id: number;
  message: string;
  type: ToastType;
}

// Simple event bus for toasts
type ToastListener = (toast: ToastMessage) => void;
let listeners: ToastListener[] = [];
let nextId = 0;

export const showToast = (message: string, type: ToastType = "info") => {
  const toast = { id: nextId++, message, type };
  listeners.forEach((listener) => listener(toast));
};

export default function ToastManager() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const listener = (toast: ToastMessage) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 4000);
    };

    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="fixed bottom-24 right-6 z-[100] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            layout={!shouldReduceMotion}
            key={toast.id}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="bg-white rounded-xl shadow-xl p-4 flex flex-col pointer-events-auto border border-gray-100 overflow-hidden relative"
          >
            <div className="flex items-start gap-3 relative z-10 bg-white">
              {toast.type === "success" && <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />}
              {toast.type === "error" && <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />}
              {toast.type === "info" && <Info className="text-orange shrink-0 mt-0.5" size={20} />}
              <p className="text-gray-800 text-sm flex-1 leading-snug">{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
              >
                <X size={16} />
              </button>
            </div>
            {/* Timer Bar */}
            <div 
              className={clsx(
                "absolute bottom-0 left-0 h-1",
                toast.type === "success" ? "bg-green-500" : toast.type === "error" ? "bg-red-500" : "bg-orange"
              )}
              style={{
                width: "100%",
                animation: "timer-bar 4s linear forwards"
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes timer-bar {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}} />
    </div>
  );
}
