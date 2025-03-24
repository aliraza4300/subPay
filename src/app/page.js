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

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollY } = useScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sections = [0, 1, 2, 3, 4, 5]; // Updated number of sections

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.min(
        Math.floor(scrollPosition / windowHeight),
        sections.length - 1
      );

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

  return (
    <div className="sections-container">
      {isModalOpen && (
        <ModalSignUpForm
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
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
                  // backgroundImage: "url('/images/globe.png')",
                }}
              ></div>
            </div>
          </div>
          <div className="bottom-container">
            <EarlySignUpForm />
          </div>
        </div>
      </motion.main>

      <motion.div
        className="section flex flex-col justify-between w-full h-full"
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
              What you can do
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
              className="banner-image-container"
              style={{
                backgroundImage: "url('/gifs/video-2.gif')",
                // backgroundImage: "url('/images/globe.png')",
              }}
            ></div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex gap-14 pl-14 md-card">
            <div className="blue-box">
              <p className="font-600 lh-14">Enhanced security</p>
              <div className="white-box flex items-center justify-center">
                <Image
                  src={icLock}
                  alt=""
                  width={100} // Set appropriate width
                  height={100} // Set appropriate height
                />
              </div>
            </div>
            <div className="blue-box">
              <p className="font-600 lh-14">Local Payment Methods</p>
              <div className="white-box flex items-center justify-center">
                <Image
                  src={icPayment}
                  alt=""
                  width={100} // Set appropriate width
                  height={100} // Set appropriate height
                />
              </div>
            </div>
            <div className="blue-box">
              <p className="font-600 lh-14">One account Multiple currencies</p>
              <div className="white-box flex items-center justify-center">
                <Image
                  src={icSmartphone}
                  alt=""
                  width={61} // Set appropriate width
                  height={92} // Set appropriate height
                />
              </div>
            </div>
            <div className="blue-box">
              <p className="font-600 lh-14">Offline payment</p>
              <div className="white-box flex items-center justify-center">
                <Image
                  src={icSmartphone01}
                  alt=""
                  width={100} // Set appropriate width
                  height={100} // Set appropriate height
                />
              </div>
            </div>
          </div>

          <div className="footer flex">
            <div className="flex-1 flex justify-center">
              <div className="flex items-center justify-center gap-2">
                <h2 className="text-white h2-heading">812</h2>
                <p className="text-white">
                  People Already <br />
                  Signed Up
                </p>
              </div>
            </div>
            <div className="flex-1 flex justify-center ">
              <div className="flex items-center flex-col justify-center gap-2">
                <p className="text-white">Early access ends soon</p>
                <div className="flex items-center gap-2">
                  <img src="/images/ic-clock.svg" alt="" />
                  <h3 className="h3-heading text-white">12.02.31</h3>
                </div>
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

            <div className="flex gap-2 md-signup-card items-start mt-8">
              <div className="blue-box bg-white">
                <p className="font-600 text-blue lh-14 min-h-60">
                  Early access to discounted forex rates
                </p>
                <div className="white-box bg-blue flex items-center justify-center">
                  <Image
                    src={icPercentage}
                    alt=""
                    width={100} // Set appropriate width
                    height={100} // Set appropriate height
                  />
                </div>
              </div>
              <div className="blue-box bg-white">
                <p className="font-600 text-blue lh-14 min-h-60">
                  Luxury vacation
                </p>
                <div className="white-box bg-blue flex items-center justify-center">
                  <Image
                    src={icHolidayTourism}
                    alt=""
                    width={100} // Set appropriate width
                    height={100} // Set appropriate height
                  />
                </div>
              </div>
              <div className="blue-box bg-white">
                <p className="font-600 text-blue lh-14 min-h-60">
                  Refer your buddy and earn cashback once we are live.
                </p>
                <div className="white-box bg-blue flex items-center justify-center">
                  <Image
                    src={icMoney}
                    alt=""
                    width={100} // Set appropriate width
                    height={100} // Set appropriate height
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="p-signup2 text-white">
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
        className="section hide"
        initial={{ opacity: 0, y: 100, display: "none" }}
        animate={{
          opacity: currentSection === 4 ? 1 : 0,
          y: currentSection === 4 ? 0 : 100,
          display: currentSection === 4 ? "block" : "none",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between gap-2 flex-md-col">
          <div className="pt-20 pl-14 md-content flex-1">
            <h1 className="text-blue font-bold h1-signup-heading lh-normal">
              Military <br />
              Grade Security
            </h1>
            <p className="text-blue font-bold fs-6 lh-normal">
              Your Money, Your Rules. No One Else Can Touch It
            </p>
            <button 
              className="btn btn-primary mt-8 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Sign Up Now
            </button>
          </div>
          <div className="relative flex-1">
            <Image
              src={img05}
              alt=""
              className="md:w-full max-h-390 object-fill"
              width={500} // Set appropriate width
              height={300} // Set appropriate height
            />
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <div className="bg-blue security-box relative">
            <div className="left-security-box">
              <h3 className="h3-head text-white font-bold text-center">
                Trust & security form start to finish
              </h3>
              <p className="fs-14 text-white font-600 text-center">
                Your Money, Your Rules. No One Else Can Touch It
              </p>
              <div className="security-subbox flex gap-8 items-center justify-center flex-wrap">
                <div className="card flex flex-col gap-2 items-center">
                  <div className="flex flex-col gap-2 items-center">
                    <Image
                      src={icSecurity}
                      alt=""
                      width={41} // Set appropriate width
                      height={40} // Set appropriate height
                    />
                    <h4 className="text-white font-600 fs-11">
                      security management
                    </h4>
                  </div>
                  <p className="text-white fs-7 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi facilisis
                  </p>
                </div>
                <div className="card  flex flex-col gap-2 items-center">
                  <div className="flex flex-col gap-2 items-center">
                    <Image
                      src={icSecurityProtectionShield}
                      alt=""
                      width={41} // Set appropriate width
                      height={40} // Set appropriate height
                    />
                    <h4 className="text-white font-600 fs-11">
                      security management
                    </h4>
                  </div>
                  <p className="text-white fs-7 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi facilisis
                  </p>
                </div>
                <div className="card  flex flex-col gap-2 items-center">
                  <div className="flex flex-col gap-2 items-center">
                    <Image
                      src={icSecurityProtectionCardPayment}
                      alt=""
                      width={41} // Set appropriate width
                      height={40} // Set appropriate height
                    />
                    <h4 className="text-white font-600 fs-11">
                      security management
                    </h4>
                  </div>
                  <p className="text-white fs-7 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi facilisis
                  </p>
                </div>
                <div className="card  flex flex-col gap-2 items-center">
                  <div className="flex flex-col gap-2 items-center">
                    <Image
                      src={icSecurityProtectionFingerprint}
                      alt=""
                      width={41} // Set appropriate width
                      height={40} // Set appropriate height
                    />
                    <h4 className="text-white font-600 fs-11">
                      security management
                    </h4>
                  </div>
                  <p className="text-white fs-7 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi facilisis
                  </p>
                </div>
                <div className="card  flex flex-col gap-2 items-center">
                  <div className="flex flex-col gap-2 items-center">
                    <Image
                      src={icSecurityProtectionHandShield}
                      alt=""
                      width={41} // Set appropriate width
                      height={40} // Set appropriate height
                    />
                    <h4 className="text-white font-600 fs-11">
                      security management
                    </h4>
                  </div>
                  <p className="text-white fs-7 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi facilisis
                  </p>
                </div>
              </div>
            </div>
            <div className="ic-shield">
              <Image
                src={icShield}
                alt=""
                width={486} // Set appropriate width
                height={516} // Set appropriate height
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="section bg-blue h-min-screen"
        initial={{ opacity: 0, y: 100, display: "none" }}
        animate={{
          opacity: currentSection === 5 ? 1 : 0,
          y: currentSection === 5 ? 0 : 100,
          display: currentSection === 5 ? "block" : "none",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between gap-2 flex-md-col pt-20 mob-space">
          <div className="relative flex-1">
            <Image
              src={img06}
              alt=""
              className="w-90 max-h-390 object-fill"
              width={500} // Set appropriate width
              height={300} // Set appropriate height
            />
          </div>
          <div className="pt-20 pl-14 md-content text-center flex-1">
            <h1 className="text-white font-bold h1-heading h1-mob-heading lh-normal lh-66">
              Limitless Global <br /> Access
            </h1>
            <p className="text-white fs-6 lh-normal mt-4 mt-mob-0">
              Sign Up in Seconds No Paperwork, <br />
              No Hassle, Just Instant Access!
            </p>
            <button 
              className="btn btn-white mt-8 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Sign Up Now
            </button>
          </div>
        </div>

        <div className="ic-globe">
          <Image
            src={icGlobe}
            alt=""
            className=""
            width={500} // Set appropriate width
            height={300} // Set appropriate height
          />
        </div>
      </motion.div>
    </div>
  );
}
