"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/early-signup-form.scss";
import Image from "next/image";
import { formatNumberWithCommas, getUserCountry } from "@/utils/common";
import useScreenSize from "@/app/hooks/getScreenDimensions";
import { motion, AnimatePresence } from "framer-motion";
import CongratulationsPopup from "./CongratulationsPopup";

function EarlySignUpForm({ usersCount = 0, path = "" }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      userType: "personal",
    },
    mode: "onTouched",
  });

  const { width, height } = useScreenSize();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // const [userCountry, setUserCountry] = useState("");
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
    setValue("userType", "personal");
  }, []);

  // useEffect(() => {
  //   const fetchCountry = async () => {
  //     const country = await getUserCountry();
  //     setUserCountry(country);
  //   };
  //   fetchCountry();
  // }, []);

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
        setShowCongratulations(true);
        // Clear form
        setValue("email", "");
        setValue("userType", "personal");
      } else {
        setMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      setMessage("Error sending email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="early-signup-container">
      <form className="early-signup-inner" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="early-signup-title">
          Get Early Access <br /> Free to Join, with a Special Welcome Perk
        </h2>
        <p 
          className="early-signup-text-1"
          style= {{
            color: "page_7" ? "#A6D144" : ''
          }}
        >
          {formatNumberWithCommas(124056 + usersCount)} People in line
        </p>
        <p className="early-signup-text-2">Tick-tock! Early access ends soon—Sign up now!</p>

        <div 
          className="early-signup-form"
        >
          {/* Email Input */}
          <input
            type="email"
            className="early-signup-form-input"
            placeholder="Email"
            disabled={loading}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {/* {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )} */}
          <button 
            type="submit" 
            className="early-signup-form-button" 
            disabled={loading}
            style= {{
              backgroundColor: "page_7" ? "#A6D144" : ''
            }}
          >
            {loading ? "Signing up..." : path === "page_7" ? "Sign Up & Travel Worry-Free" : "Sign Up – It's Free!"}
          </button>
        </div>

        {/* {message && (
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
        )} */}

        <p className="early-signup-text-3">Are you signing up for Personal or Business use?</p>

        {/* Radio Buttons */}
        <div className="early-signup-radio-btns-container">
          <div className={`early-signup-radio-item ${path}`}>
            <input 
              type="radio" 
              id="early-signup-radio-1" 
              value="personal"
              {...register("userType")}
              disabled={loading}
            />
            <label htmlFor="early-signup-radio-1">Personal</label>
          </div>
          <div className="early-signup-radio-item">
            <input 
              type="radio" 
              id="early-signup-radio-2" 
              value="business" 
              {...register("userType")}
              disabled={loading}
            />
            <label htmlFor="early-signup-radio-2">Business</label>
          </div>
        </div>

        {/* Terms & Conditions Checkbox */}
        <div className="early-signup-checkbox-container">
          <label htmlFor="early-signup-checkbox-1">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </label>
        </div>
      </form>

      <CongratulationsPopup 
        isOpen={showCongratulations} 
        onClose={() => setShowCongratulations(false)} 
      />
    </div>
  );
}

export default EarlySignUpForm;
