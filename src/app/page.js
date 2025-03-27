"use client";
import EarlySignUpForm from "@/components/EarlySignUpForm";
import "../styles/home-page.scss";
import Image from "next/image";
import img04 from "../../public/images/img-04.png";
import img06 from "../../public/images/img-06.png";
import icLock from "../../public/images/ic-lock.png";
import icPayment from "../../public/images/ic-payment.png";
import icSmartphone from "../../public/images/ic-smartphone.png";
import icSmartphone01 from "../../public/images/ic-smartphone01.png";
import icPhoneWHand from "../../public/images/ic-phoneWHand.svg";
import icPercentage from "../../public/images/ic-percentage.svg";
import icHolidayTourism from "../../public/images/ic-holiday-tourism.svg";
import icMoney from "../../public/images/ic-money.svg";
import icSecurity from "../../public/images/ic-security.svg";
import icSecurityProtectionShield from "../../public/images/ic-security-protection-shield.svg";
import icSecurityProtectionCardPayment from "../../public/images/ic-security-protection-card-payment.svg";
import icSecurityProtectionFingerprint from "../../public/images/ic-security-protection-fingerprint.svg";
import icSecurityProtectionHandShield from "../../public/images/ic-security-protection-hand-shield.svg";
import icShield from "../../public/images/ic-shield.png";
import icGlobe from "../../public/images/ic-globe.png";
import "../styles/global.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import ModalSignUpForm from "@/components/ModalSignUpForm";
import timeImage from "../../public/images/timer.svg";
import "../app/responsive.css";
import Timer from "@/components/Timer";
import useScreenSize from "./hooks/getScreenDimensions";

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollY } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usersCount, setUsersCount] = useState(0);
  const sections = [0, 1, 2, 3, 4, 5, 6]; // Updated number of sections
  const { width, height } = useScreenSize();

  useEffect(() => {
    async function getUsersCount() {
      try {
        const res = await fetch("/backend/api/users");
        const data = await res.json();
        console.log(data);
        setUsersCount(data.length || 0);
      } catch (error) {
        setStatus("Error connecting to DB");
      }
    }
    getUsersCount();
  }, []);

  const smoothProgress = useSpring(scrollY, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    let lastScrollTime = 0;
    const scrollThreshold = 50; // ms between scroll events

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime < scrollThreshold) return;
      lastScrollTime = now;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate the current section based on scroll position
      let sectionIndex = Math.floor(scrollPosition / windowHeight);

      // Special handling for the last section
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        sectionIndex = sections.length - 1;
      }

      if (sectionIndex >= 0 && sectionIndex < sections.length) {
        setCurrentSection(sectionIndex);
      }
    };

    // Add passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections.length]);

  return (
    <div className="sections-container">
      {isModalOpen && (
        <ModalSignUpForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          usersCount={usersCount}
        />
      )}
      <motion.main
        className="section home-page-container"
        initial={{ opacity: 0, y: 100, display: "none" }}
        animate={{
          opacity: currentSection === 0 ? 1 : 0,
          y: currentSection === 0 ? 0 : -100,
          display: currentSection === 0 ? "flex" : "none",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="home-page-inner">
          <div className="logo-container">
            <h2 className="logo-text">BrahmPay</h2>
          </div>
          <div className="top-container">
            <div className="top-container-inner">
              <div className="banner-text-container">
                <h1 className="banner-text">
                  Pay Like a Local, <br /> Anywhere in the World.
                </h1>
                <p className="banner-text-content">
                  No forex fees. No hidden charges. Just seamless currency{" "}
                  <br />
                  exchange—use rewards like a local
                </p>
              </div>
              <div
                className="banner-image-container"
                style={{
                  backgroundImage: "url('/gifs/video-1.gif')",
                }}
              ></div>
            </div>
          </div>
          <div className="bottom-container">
            <EarlySignUpForm usersCount={usersCount} />
          </div>
        </div>
      </motion.main>

      <motion.div
        className="section flex flex-col justify-between w-full h-full pb-[30px]"
        initial={{ opacity: 0, y: 100, display: "none" }}
        animate={{
          opacity: currentSection === 1 ? 1 : 0,
          y: currentSection === 1 ? 0 : -100,
          display: currentSection === 1 ? "flex" : "none",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between gap-2 flex-md-col">
          <div className="pt-20 pl-14 md-content flex-1 page-2-container">
            <h1 className="text-blue font-bold h1-heading lh-normal page-2-h1">
              Local Feature's
            </h1>
            <p className="text-blue font-bold p-paragraph lh-normal page-2-p">
              What you can do
            </p>
            <button
              className="btn btn-primary mt-8 cursor-pointer page-2-signup-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Sign Up Now
            </button>
          </div>
          <div className="relative flex-1">
            {/* <div className="shadow"></div> */}
            <div
              className="banner-image-container-4 page-2-image-container"
              style={{
                backgroundImage: "url('/gifs/video-2.gif')",
                // backgroundImage: "url('/images/globe.png')",
              }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="services-container">
            <motion.div
              className="service-item"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="service-item-title-container">
                <h2>Enhanced security</h2>
                <h2 id="hovered-text">
                  Incredibly secure, with 2-factor authentication and a
                  multi-signature wallet.
                  <br />
                  <br />
                  And protect your money with a multi-signature wallet.
                </h2>
              </div>
              <div className="service-item-inner">
                <Image
                  src={icLock}
                  alt=""
                  width="168.478px"
                  height="221.858px"
                  id="service-item-image"
                  style={{
                    width: "65%",
                    height: "65%",
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              className="service-item"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="service-item-title-container">
                <h2>
                  Local Payment <br /> Methods
                </h2>
                <h2 id="hovered-text">
                  Accept local payment methods like QR codes and bank transfers.
                  <br />
                  <br />
                  And protect your money with a multi-signature wallet.
                </h2>
              </div>
              <div className="service-item-inner">
                <Image
                  src={icPayment}
                  alt=""
                  width="168.352px"
                  height="221.024px"
                  id="service-item-image"
                  style={{
                    width: "65%",
                    height: "65%",
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              className="service-item"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="service-item-title-container">
                <h2>
                  One account <br /> Multiple currencies
                </h2>
                <h2 id="hovered-text">
                  Manage multiple currencies in one account, with real-time
                  exchange rates.
                  <br />
                  <br />
                  And protect your money with a multi-signature wallet.
                </h2>
              </div>
              <div className="service-item-inner">
                <Image
                  src={icSmartphone}
                  alt=""
                  width="165.142px"
                  height="221.858px"
                  id="service-item-image"
                  style={{
                    width: "50%",
                    height: "65%",
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              className="service-item"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="service-item-title-container">
                <h2>Offline payment</h2>
                <h2 id="hovered-text">
                  Pay offline with QR codes and NFC payments.
                  <br />
                  <br />
                  And protect your money with a multi-signature wallet.
                </h2>
              </div>
              <div className="service-item-inner">
                <Image
                  src={icSmartphone01}
                  alt=""
                  width="169.313px"
                  height="221.858px"
                  id="service-item-image"
                  style={{
                    width: "65%",
                    height: "65%",
                  }}
                />
              </div>
            </motion.div>
          </div>
          <div className="footer-page-2">
            <div className="footer-left">
              <h2 className="footer-people-count">{usersCount}</h2>
              <p className="footer-people-count-text">
                People Already <br />
                Signed Up
              </p>
            </div>
            <div className="footer-divider" />
            <div className="footer-right">
              <p className="footer-right-text">Early access ends soon</p>
              <div className="footer-timer">
                <Image
                  src={timeImage}
                  alt="timer"
                  width="49.311px"
                  height="49.311px"
                  id="timer-image"
                />
                <Timer />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="section bg-blue h-full"
        initial={{ opacity: 0, y: 100, display: "none" }}
        animate={{
          opacity: currentSection === 2 ? 1 : 0,
          y: currentSection === 2 ? 0 : -100,
          display: currentSection === 2 ? "flex" : "none",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between gap-2 flex-md-col min-h-full">
          <div className="pt-8 pl-14 md-content relative flex-1">
            <h1 className="text-white font-bold h1-signup-heading lh-normal page-3-h1">
              Sign up today <br />
              Join the waitlist
            </h1>
            <button
              className="btn btn-white mt-8 cursor-pointer page-3-signup-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Sign Up Now
            </button>

            <p className="p-signup text-white">
              Sign up today and unlock exclusive benefits! Experience more
              value, Chas back, and personalized content just for you Don't miss
              out—join us now!
            </p>

            <div className="ic-phoneWHand">
              <Image
                src={icPhoneWHand}
                alt=""
                width={241} // Set appropriate width
                height={272} // Set appropriate height
              />
            </div>
          </div>
          <div className="img-pt-signup flex-1 flex flex-col justify-between">
            <div className="relative flex-1" />
            <div
              className="banner-image-container page-3-image-container"
              style={{
                backgroundImage: "url('/gifs/video-4.gif')",
              }}
            ></div>

            <div className="services-inverted-container">
              <motion.div
                className="service-inverted-item"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="service-inverted-item-title-container">
                  <h2>Early access to discounted forex rates </h2>
                  <h2 id="hovered-text">
                    Incredibly secure, with 2-factor authentication and a
                    multi-signature wallet.
                  </h2>
                </div>
                <div className="service-inverted-item-inner">
                  <Image
                    src={icPercentage}
                    alt=""
                    width="118.129px"
                    height="110.802px"
                    id="service-item-image"
                  />
                </div>
              </motion.div>
              <motion.div
                className="service-inverted-item"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="service-inverted-item-title-container">
                  <h2>Luxury vacation</h2>
                  <h2 id="hovered-text">
                    Accept local payment methods like QR codes and bank
                    transfers.
                  </h2>
                </div>
                <div className="service-inverted-item-inner">
                  <Image
                    src={icHolidayTourism}
                    alt=""
                    width="202px"
                    height="265.199px"
                    id="service-item-image"
                  />
                </div>
              </motion.div>
              <motion.div
                className="service-inverted-item"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="service-inverted-item-title-container">
                  <h2>Refer your buddy and earn cashback once we are live.</h2>
                  <h2 id="hovered-text">
                    Manage multiple currencies in one account, with real-time
                    exchange rates.
                  </h2>
                </div>
                <div className="service-inverted-item-inner">
                  <Image
                    src={icMoney}
                    alt=""
                    width="118.129px"
                    height="118.129px"
                    id="service-item-image"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <p className="p-signup2 text-white page-3-footer-text page-3-p">
            Sign up today and unlock exclusive benefits! Experience more value,
            Chas back, and personalized content just for you Don't miss out—join
            us now!
          </p>
        </div>
      </motion.div>

      <motion.div
        className="section h-full flex justify-between flex-col"
        initial={{ opacity: 0, y: 100, display: "none" }}
        animate={{
          opacity: currentSection === 3 ? 1 : 0,
          y: currentSection === 3 ? 0 : 100,
          display: currentSection === 3 ? "flex" : "none",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mt-8">
          <h1 className="text-blue font-bold h1-signup-heading lh-normal">
            Borderless pay{" "}
          </h1>
          <p className="text-blue font-bold p-min-paragraph lh-normal">
            Send and receive money
          </p>
          <button
            className="btn btn-primary mt-8 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Sign Up Now
          </button>
        </div>

        <div className="flex gap-2 mt-8 md-borderless">
          <div className="flex-15">
            <Image
              src={img04}
              alt=""
              className="md:w-full max-h-390 object-fill"
              width={500} // Set appropriate width
              height={300} // Set appropriate height
            />
          </div>
          <div className="relative flex-1"></div>
          <div
            className="banner-image-container-2"
            style={{
              backgroundImage: "url('/gifs/video-3.gif')",
              // backgroundImage: "url('/images/globe.png')",
            }}
          ></div>
        </div>
      </motion.div>

      <motion.div
        className="section flex flex-col justify-between w-full h-full"
        initial={{ opacity: 0, y: 100, display: "none" }}
        animate={{
          opacity: currentSection === 4 ? 1 : 0,
          y: currentSection === 4 ? 0 : -100,
          display: currentSection === 4 ? "flex" : "none",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between gap-2 flex-md-col w-full">
          <div className="pt-20 pl-14 md-content flex-1">
            <h1 className="text-blue font-bold h1-signup-heading lh-normal page-5-heading">
              Military <br />
              Grade Security
            </h1>
            <p className="text-blue font-bold fs-6 lh-normal page-5-heading-text">
              Your Money, Your Rules. No One Else Can Touch It
            </p>
            <button
              className="btn btn-primary mt-8 cursor-pointer page-5-signup-button"
              onClick={() => setIsModalOpen(true)}
            >
              Sign Up Now
            </button>
          </div>
          <div className="relative flex-1 page-5-image-container" />
          <div
            className="banner-image-container-3"
            style={{
              backgroundImage: "url('/gifs/video-5.gif')",
            }}
          ></div>
        </div>
        {width > 768 ? (
          <div className="security-box-container">
            <div className="security-box-inner">
              <div className="security-box-left">
                <h1 className="security-box-h1">
                  Trust & security form start to finish
                </h1>
                <p className="security-box-p">
                  Your Money, Your Rules. No One Else Can Touch It
                </p>
                <div className="security-box-items-container">
                  <div className="security-box-item">
                    <div className="flex flex-col items-center">
                      <Image src={icSecurity} alt="" width={40} height={40} />
                      <h1 className="security-box-item-title">
                        security management
                      </h1>
                    </div>
                    <p className="security-box-item-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi facilisis
                    </p>
                  </div>
                  <div className="security-box-item">
                    <div className="flex flex-col items-center">
                      <Image
                        src={icSecurityProtectionShield}
                        alt=""
                        width={40}
                        height={40}
                      />
                      <h1 className="security-box-item-title">
                        security management
                      </h1>
                    </div>
                    <p className="security-box-item-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi facilisis
                    </p>
                  </div>
                  <div className="security-box-item">
                    <div className="flex flex-col items-center">
                      <Image
                        src={icSecurityProtectionCardPayment}
                        alt=""
                        width={40}
                        height={40}
                      />
                      <h1 className="security-box-item-title">
                        security management
                      </h1>
                    </div>
                    <p className="security-box-item-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi facilisis
                    </p>
                  </div>
                  <div className="security-box-item">
                    <div className="flex flex-col items-center">
                      <Image
                        src={icSecurityProtectionFingerprint}
                        alt=""
                        width={40}
                        height={40}
                      />
                      <h1 className="security-box-item-title">
                        security management
                      </h1>
                    </div>
                    <p className="security-box-item-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi facilisis
                    </p>
                  </div>
                  <div className="security-box-item">
                    <div className="flex flex-col items-center">
                      <Image
                        src={icSecurityProtectionHandShield}
                        alt=""
                        width={40}
                        height={40}
                      />
                      <h1 className="security-box-item-title">
                        security management
                      </h1>
                    </div>
                    <p className="security-box-item-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi facilisis
                    </p>
                  </div>
                </div>
              </div>
              <div className="security-box-right">
                <Image
                  src={icShield}
                  alt=""
                  width={500}
                  height={500}
                  id="security-box-right-image"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="security-box-container-mobile">
            <Image
              src={icShield}
              alt=""
              width={150}
              height={150}
              id="security-box-mobile"
            />
            <div className="security-box-inner-mobile">
              <h1 className="security-box-inner-mobile-h1">
                Trust & security form <br /> start to finish
              </h1>
              <p className="security-box-inner-mobile-p">
                Your Money, Your Rules. No One Else Can Touch It
              </p>
              <div className="security-box-inner-mobile-items">
                <div className="security-box-inner-mobile-item">
                  <Image src={icSecurity} alt="" width={30} height={30} />
                  <h1 className="security-box-inner-mobile-item-title">
                    security management
                  </h1>
                  <p className="security-box-inner-mobile-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi facilisis
                  </p>
                </div>
                <div className="security-box-inner-mobile-item">
                  <Image src={icSecurity} alt="" width={30} height={30} />
                  <h1 className="security-box-inner-mobile-item-title">
                    security management
                  </h1>
                  <p className="security-box-inner-mobile-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi facilisis
                  </p>
                </div>
                <div className="security-box-inner-mobile-item">
                  <Image src={icSecurity} alt="" width={30} height={30} />
                  <h1 className="security-box-inner-mobile-item-title">
                    security management
                  </h1>
                  <p className="security-box-inner-mobile-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi facilisis
                  </p>
                </div>
                <div className="security-box-inner-mobile-item">
                  <Image src={icSecurity} alt="" width={30} height={30} />
                  <h1 className="security-box-inner-mobile-item-title">
                    security management
                  </h1>
                  <p className="security-box-inner-mobile-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi facilisis
                  </p>
                </div>
                <div className="security-box-inner-mobile-item">
                  <Image src={icSecurity} alt="" width={30} height={30} />
                  <h1 className="security-box-inner-mobile-item-title">
                    security management
                  </h1>
                  <p className="security-box-inner-mobile-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi facilisis
                  </p>
                </div>
                <div className="security-box-inner-mobile-item">
                  <Image src={icSecurity} alt="" width={30} height={30} />
                  <h1 className="security-box-inner-mobile-item-title">
                    security management
                  </h1>
                  <p className="security-box-inner-mobile-item-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi facilisis
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      <motion.div
        className="section bg-blue flex flex-col justify-between w-full h-full"
        initial={{ opacity: 0, y: 100, display: "none" }}
        animate={{
          opacity: currentSection === 5 ? 1 : 0,
          y: currentSection === 5 ? 0 : 100,
          display: currentSection === 5 ? "flex" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: currentSection === 5 ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="page-6-container">
          <div className="page-6-left">
            <Image src={img06} alt="" width={500} height={300} />
          </div>
          <div className="page-6-right">
            <h1>
              {" "}
              Limitless Global <br /> Access
            </h1>
            <p>
              {" "}
              Sign Up in Seconds No Paperwork, <br /> No Hassle, Just Instant
              Access!
            </p>
            <button onClick={() => setIsModalOpen(true)}>Sign Up Now</button>
            <div className="ic-globe">
              <Image src={icGlobe} alt="" width="579px" height="636px" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.main
        className="section home-page-container"
        initial={{ opacity: 0, y: 100, display: "none" }}
        animate={{
          opacity: currentSection === 6 ? 1 : 0,
          y: currentSection === 6 ? 0 : -100,
          display: currentSection === 6 ? "flex" : "none",
        }}
        transition={{ duration: 0.5 }}
        style={{
          background: "#4169E1",
        }}
      >
        <div className="home-page-inner">
          <div className="page-7-text-container">
            <h1 className="page-7-h1">
              A New Way To <br /> Borderless pay
            </h1>
            <p className="page-7-p">
              Pay like a local No forex fee, No Hassle, Buy, Smile
            </p>
          </div>
          <div className="bottom-container">
            <EarlySignUpForm usersCount={usersCount} path="page_7" />
          </div>
        </div>
      </motion.main>
    </div>
  );
}
