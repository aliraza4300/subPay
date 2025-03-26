import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/modal-signup-form.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { formatNumberWithCommas, getUserCountry } from "@/utils/common";

function ModalSignUpForm({ isOpen = false, onClose = () => {}, usersCount = 0 }) {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      email: "",
      userType: "personal",
      // termsAccepted: false,
    },
    mode: "onTouched", // Shows validation errors when the field is touched
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [userCountry, setUserCountry] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      const country = await getUserCountry();
      setUserCountry(country);
    };
    fetchCountry();
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/backend/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: data.email,
          subject: "Welcome to Our Service!",
          text: "Thank you for signing up. Let us know if you have questions.",
          html: "<p>Thank you for signing up. Let us know if you have questions.</p>",
          userType: data.userType,
        }),
      });

      const dataResponse = await response.json();
      if (dataResponse.message) {
        setMessage("Thank you for signing up! You'll receive an email shortly.");
        // Clear form
        setValue("email", "");
        setValue("userType", "personal");
        // setValue("termsAccepted", false);
        setTimeout(() => {
          onClose();
        }, 3000); // Close the modal after 3 seconds
      } else {
        setMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      setMessage("Error sending email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    // Only close if clicking directly on the overlay, not on the form itself
    if (e.target.className === "modal-form-overlay") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-form-overlay" 
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="modal-signup-form-container"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300, 
              duration: 0.4 
            }}
          >
            <div className="modal-form-inner">
              <Image
                src="/images/online-payment.png"
                alt="online-payment-img"
                id="online-payment-img"
                width={100}
                height={100}
              />
              <button className="modal-close-button" onClick={onClose}>
                ×
              </button>
              <h1 className="modal-form-title">
                Get Early Access — Free to Join, with a Special Welcome Perk
              </h1>
              <p className="modal-form-text-1">
                {formatNumberWithCommas(124056 + usersCount)} People in line
                {/* {userCountry && <span className="country-indicator"> from {userCountry}</span>} */}
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="modal-form-input-container">
                  <input
                    type="email"
                    placeholder="Email"
                    disabled={loading}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                  <motion.button
                    type="submit"
                    className="modal-form-button"
                    disabled={loading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {loading ? "Signing up..." : "Sign up Now"}
                  </motion.button>
                </div>

                {message && (
                  <motion.div
                    className={
                      message.includes("Thank you")
                        ? "success-message"
                        : "error-message"
                    }
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {message}
                  </motion.div>
                )}

                <p className="modal-form-text-3">
                  Are you signing up for Personal or Business use?
                </p>

                {/* Radio Buttons */}
                <div className="modal-form-radio-btns-container">
                  <div className="modal-form-radio-item">
                    <input
                      type="radio"
                      {...register("userType")}
                      id="modal-form-radio-1"
                      value="personal"
                      disabled={loading}
                      defaultChecked checked 
                    />
                    <label htmlFor="modal-form-radio-1">Personal</label>
                  </div>
                  <div className="modal-form-radio-item">
                    <input
                      type="radio"
                      {...register("userType")}
                      id="modal-form-radio-2"
                      value="business"
                      disabled={loading}
                    />
                    <label htmlFor="modal-form-radio-2">Business</label>
                  </div>
                </div>

                {/* Terms & Conditions Checkbox */}
                <div className="modal-form-checkbox-container">
                  {/* <input
                    type="checkbox"
                    {...register("termsAccepted", {
                      required: "You must accept the terms",
                    })}
                    id="modal-form-checkbox-1"
                    disabled={loading}
                  /> */}
                  <label htmlFor="modal-form-checkbox-1">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </label>
                  {/* {errors.termsAccepted && (
                    <p className="error-message">{errors.termsAccepted.message}</p>
                  )} */}
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalSignUpForm;
