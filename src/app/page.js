"use client";
import EarlySignUpForm from "@/components/EarlySignUpForm";
import "../styles/home-page.scss";
import VideoBackground from "@/components/VideoBackground";
import Image from "next/image";
import img01 from "../../public/images/img-01.png";
import img02 from "../../public/images/img-02.png";
import img03 from "../../public/images/img-03.png";
import img04 from "../../public/images/img-04.png";
import img05 from "../../public/images/img-05.png";
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
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import ModalSignUpForm from "@/components/ModalSignUpForm";
import DBConnectionCheck from "@/components/DBConnectionCheck";
import timeImage from "../../public/images/timer.svg";
import "../app/responsive.css";

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollY } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usersCount, setUsersCount] = useState(0);
  const sections = [0, 1, 2, 3, 4, 5]; // Updated number of sections

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate the current section based on scroll position
      let sectionIndex = Math.floor(scrollPosition / windowHeight);

      // Special handling for the last section
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        sectionIndex = sections.length - 1;
      }

      if (
        sectionIndex !== currentSection &&
        sectionIndex >= 0 &&
        sectionIndex < sections.length
      ) {
        setCurrentSection(sectionIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection, sections.length]);

  const springConfig = { damping: 20, stiffness: 100 };
  const y = useSpring(scrollY, springConfig);

  // return <DBConnectionCheck />

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
          <div className="pt-20 pl-14 md-content flex-1">
            <h1 className="text-blue font-bold h1-heading lh-normal">
              Local Feature's
            </h1>
            <p className="text-blue font-bold p-paragraph lh-normal">
              what you can do
            </p>
            <button
              className="btn btn-primary mt-8 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Sign Up Now
            </button>
          </div>
          <div className="relative flex-1">
            {/* <div className="shadow"></div> */}
            <div
              className="banner-image-container-4"
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
              whileHover={{ scale: 1.05 }}
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
                />
              </div>
            </motion.div>
            <motion.div
              className="service-item"
              whileHover={{ scale: 1.05 }}
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
                />
              </div>
            </motion.div>
            <motion.div
              className="service-item"
              whileHover={{ scale: 1.05 }}
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
                />
              </div>
            </motion.div>
            <motion.div
              className="service-item"
              whileHover={{ scale: 1.05 }}
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
                />
              </div>
            </motion.div>
          </div>
          <div className="footer-page-2">
            <div className="footer-left">
              <h2 className="footer-people-count">812</h2>
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
                <h3 className="footer-timer-text">12.02.31</h3>
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
            <h1 className="text-white font-bold h1-signup-heading lh-normal">
              Sign up today <br />
              Join the waitlist
            </h1>
            <button
              className="btn btn-white mt-8 cursor-pointer"
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
              className="banner-image-container"
              style={{
                backgroundImage: "url('/gifs/video-4.gif')",
              }}
            ></div>

            <div className="services-inverted-container">
              <motion.div
                className="service-inverted-item"
                whileHover={{ scale: 1.05 }}
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
                whileHover={{ scale: 1.05 }}
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
                whileHover={{ scale: 1.05 }}
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

          <p className="p-signup2 text-white page-3-footer-text">
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
          <div className="relative flex-1 page-5-image-container">
            <div
              className="banner-image-container-3"
              style={{
                backgroundImage: "url('/gifs/video-5.gif')",
              }}
            ></div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="bg-blue security-box relative w-full">
            <div className="security-box-inner">
              <div className="left-security-box">
                <h3 className="h3-head text-white font-bold text-center">
                  Trust & security form start to finish
                </h3>
                <p className="fs-14 text-white font-600 text-center security-box-text-1">
                  Your Money, Your Rules. No One Else Can Touch It
                </p>
                <div className="security-subbox flex gap-8 items-center justify-center flex-wrap">
                  <div className="card flex flex-col gap-2 items-center">
                    <div className="flex flex-col gap-2 items-center">
                      <Image src={icSecurity} alt="" width={41} height={40} />
                      <h4 className="text-white font-600 fs-11">
                        security management
                      </h4>
                    </div>
                    <p className="text-white fs-7 mt-2 security-box-service-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi facilisis
                    </p>
                  </div>
                  <div className="card flex flex-col gap-2 items-center">
                    <div className="flex flex-col gap-2 items-center">
                      <Image
                        src={icSecurityProtectionShield}
                        alt=""
                        width={41}
                        height={40}
                      />
                      <h4 className="text-white font-600 fs-11">
                        security management
                      </h4>
                    </div>
                    <p className="text-white fs-7 mt-2 security-box-service-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi facilisis
                    </p>
                  </div>
                  <div className="card flex flex-col gap-2 items-center">
                    <div className="flex flex-col gap-2 items-center">
                      <Image
                        src={icSecurityProtectionCardPayment}
                        alt=""
                        width={41}
                        height={40}
                      />
                      <h4 className="text-white font-600 fs-11">
                        security management
                      </h4>
                    </div>
                    <p className="text-white fs-7 mt-2 security-box-service-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi facilisis
                    </p>
                  </div>
                  <div className="card flex flex-col gap-2 items-center">
                    <div className="flex flex-col gap-2 items-center">
                      <Image
                        src={icSecurityProtectionFingerprint}
                        alt=""
                        width={41}
                        height={40}
                      />
                      <h4 className="text-white font-600 fs-11">
                        security management
                      </h4>
                    </div>
                    <p className="text-white fs-7 mt-2 security-box-service-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi facilisis
                    </p>
                  </div>
                  <div className="card flex flex-col gap-2 items-center">
                    <div className="flex flex-col gap-2 items-center">
                      <Image
                        src={icSecurityProtectionHandShield}
                        alt=""
                        width={41}
                        height={40}
                      />
                      <h4 className="text-white font-600 fs-11">
                        security management
                      </h4>
                    </div>
                    <p className="text-white fs-7 mt-2 security-box-service-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi facilisis
                    </p>
                  </div>
                </div>
              </div>
              <div className="ic-shield">
                <Image src={icShield} alt="" width={486} height={516} />
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}
