import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "628112995885";
const GREETING_MESSAGE = encodeURIComponent(
  "Hello, welcome to PT. Creative Products Indonesia.\nPlease let us know your product inquiry."
);

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChatClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${GREETING_MESSAGE}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 bg-card rounded-2xl shadow-large border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white">
                    PT. Creative Products Indonesia
                  </h4>
                  <p className="text-white/80 text-sm">Typically replies instantly</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 bg-[#ECE5DD]">
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-800">
                  Hello! 👋 Welcome to PT. Creative Products Indonesia. How can we help you today?
                </p>
                <span className="text-xs text-gray-500 mt-1 block text-right">Now</span>
              </div>
            </div>

            {/* CTA */}
            <div className="p-4 bg-card">
              <button
                onClick={handleChatClick}
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-large flex items-center justify-center transition-colors"
        aria-label="Open WhatsApp chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse animation ring */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
      )}
    </div>
  );
};
