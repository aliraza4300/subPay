import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/modal-signup-form.scss";
import Image from "next/image";

function ModalSignUpForm({ isOpen = false, onClose = () => {} }) {
  if (!isOpen) return null;

  const {
    register,
    handleSubmit,
    formState: { errors },
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
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "dev.shahroze@gmail.com",
          subject: "Welcome to Our App!",
          text: "Hello, welcome to our platform!",
          html: `<p><strong>Hello</strong>, welcome to our platform!</p>
                <p>User type: ${data.userType}</p>
                <p>Email: ${data.email}</p>`,
        }),
      });

      const dataResponse = await response.json();
      if (dataResponse.success) {
        setMessage(
          "Thank you for signing up! You'll receive an email shortly."
        );
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
    <div className="modal-form-overlay" onClick={handleOverlayClick}>
      <div className="modal-signup-form-container">
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
          <p className="modal-form-text-1">9.981.230 People in line </p>

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
              <button
                type="submit"
                className="modal-form-button"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up Now"}
              </button>
            </div>

            {message && (
              <div
                className={
                  message.includes("Thank you")
                    ? "success-message"
                    : "error-message"
                }
              >
                {message}
              </div>
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
              <input
                type="checkbox"
                {...register("termsAccepted", {
                  required: "You must accept the terms",
                })}
                id="modal-form-checkbox-1"
                disabled={loading}
              />
              <label htmlFor="modal-form-checkbox-1">
                I confirm that I have read and accept the terms and conditions
                and privacy policy.
              </label>
              {errors.termsAccepted && (
                <p className="error-message">{errors.termsAccepted.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalSignUpForm;
