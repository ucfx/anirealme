"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUpIcon } from "lucide-react";

export default function GoTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-5 right-5 z-[999]"
        >
          <Button
            onClick={scrollToTop}
            size={"icon"}
            variant={"outline"}
            className="rounded-full w-12 h-12"
          >
            <ChevronUpIcon size={32} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
