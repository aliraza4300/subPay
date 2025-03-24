"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/early-signup-form.scss";
import Image from "next/image";

function EarlySignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      email: "",
      userType: "personal",
      termsAccepted: false,
    },
    mode: "onTouched", // Shows validation errors when the field is touched
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
      if (dataResponse.success) {
        setMessage("Email sent successfully!");
      } else {
        setMessage("Failed to send email.");
      }

      // clear form
      setValue("email", "");
      setValue("userType", "personal");
      setValue("termsAccepted", false);
    } catch (error) {
      setMessage("Error sending email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="early-signup-container">
      <div className="early-signup-inner">
        <h2 className="early-signup-title">
          Get Early Access <br /> Free to Join, with a Special Welcome Perk
        </h2>
        <p className="early-signup-text-1">9.981.230 People in line</p>
        <p className="early-signup-text-2">Tick-tock! Early access ends soon—Sign up now!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="early-signup-form">
          {/* Email Input */}
          <input
            type="email"
            className="early-signup-form-input"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            disabled={loading}
          />
          {/* {errors.email && <span className="error-message">{errors.email.message}</span>} */}
          <button type="submit" className="early-signup-form-button" disabled={loading}>
            Sign Up – It's Free!
          </button>
        </form>

        <p className="early-signup-text-3">Are you signing up for Personal or Business use?</p>

        {/* Radio Buttons */}
        <div className="early-signup-radio-btns-container">
          <div className="early-signup-radio-item">
            <input type="radio" {...register("userType")} id="early-signup-radio-1" value="personal" />
            <label htmlFor="early-signup-radio-1">Personal</label>
          </div>
          <div className="early-signup-radio-item">
            <input type="radio" {...register("userType")} id="early-signup-radio-2" value="business" />
            <label htmlFor="early-signup-radio-2">Business</label>
          </div>
        </div>

        {/* Terms & Conditions Checkbox */}
        <div className="early-signup-checkbox-container">
          <input
            type="checkbox"
            {...register("termsAccepted", { required: "You must accept the terms" })}
            id="early-signup-checkbox-1"
          />
          <label htmlFor="early-signup-checkbox-1">
            I confirm that I have read and accept the terms and conditions and privacy policy.
          </label>
        </div>
        {/* {errors.termsAccepted && <span className="error-message">{errors.termsAccepted.message}</span>} */}
      </div>
    </div>
  );
}

export default EarlySignUpForm;
