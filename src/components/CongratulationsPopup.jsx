import React from "react";
import "../styles/congratulations-popup.styles.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function CongratulationsPopup({ isOpen = false, onClose = () => {} }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === "congratulations-popup-container") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="congratulations-popup-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleOverlayClick}
      >
        <motion.div 
          className="congratulations-popup-inner"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="congratulations-popup-h1-1">
            Welcome to Brahm<span className="text-2">Pay</span>
          </h1>
          <p className="congratulations-popup-p-1">
            You're on the waitlist! Get ready to pay like a local—anywhere in the
            world.
          </p>
          <h4 className="congratulations-popup-h4-1">You're First in Line</h4>
          <p className="congratulations-popup-p-2">
            Thanks for signing up early! We're putting the final touches on your
            all-in-one <br /> travel wallet. Be the first to get early access,
            updates, and exclusive perks
          </p>
          <Image
            src="/images/congratulation.png"
            alt="congratulations-popup-image"
            width="340"
            height="340"
            className="congratulations-popup-image"
          />
          <h4 className="congratulations-popup-h4-2">
            Early access ends soon! <br /> Invite 3 friends to unlock VIP perks
          </h4>
          <button className="congratulations-popup-invite-btn" onClick={onClose}>
            Invite Now & Earn
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CongratulationsPopup;
