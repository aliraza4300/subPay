import EarlySignUpForm from "@/components/EarlySignUpForm";
import "../styles/home-page.scss";
import VideoBackground from "@/components/VideoBackground";
import Image from 'next/image';
import img01 from '../../public/images/img-01.png';
import img02 from '../../public/images/img-02.png';
import img03 from '../../public/images/img-03.png';
import img04 from '../../public/images/img-04.png';
import img05 from '../../public/images/img-05.png';
import icLock from '../../public/images/ic-lock.png';
import icPayment from '../../public/images/ic-payment.png';
import icSmartphone from '../../public/images/ic-smartphone.png';
import icSmartphone01 from '../../public/images/ic-smartphone01.png';
import icPhoneWHand from '../../public/images/ic-phoneWHand.svg';
import icPercentage from '../../public/images/ic-percentage.svg';
import icHolidayTourism from '../../public/images/ic-holiday-tourism.svg';
import icMoney from '../../public/images/ic-money.svg';
import icSecurity from '../../public/images/ic-security.svg';
import icSecurityProtectionShield from '../../public/images/ic-security-protection-shield.svg';
import icSecurityProtectionCardPayment from '../../public/images/ic-security-protection-card-payment.svg';
import icSecurityProtectionFingerprint from '../../public/images/ic-security-protection-fingerprint.svg';
import icSecurityProtectionHandShield from '../../public/images/ic-security-protection-hand-shield.svg';
import icShield from '../../public/images/ic-shield.png';


export default function HomePage() {
  return (
    <>
    <main className="home-page-container hide">
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
                No forex fees. No hidden charges. Just seamless currency <br />
                exchange—use rewards like a local
              </p>
            </div>
            <div
              className="banner-image-container"
              style={{
                backgroundImage: "url('/gifs/video-1.gif')",
                // backgroundImage: "url('/images/globe.png')",
              }}
            >
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <EarlySignUpForm />
        </div>
      </div>
    </main>

    <div className="hide">

      <div className="flex justify-between gap-2 flex-md-col">
          <div className="pt-20 pl-14 md-content flex-1">
              <h1 className="text-blue font-bold h1-heading lh-normal">Local Feature's</h1>
              <p className="text-blue font-bold p-paragraph lh-normal">What you can do</p>
              <button className="btn btn-primary mt-8">Sign Up Now</button>
          </div>
          <div className="relative flex-1">
              <div className="shadow"></div>
              <Image 
                  src={img01} 
                  alt="" 
                  className="md:w-full"
                  width={500} // Set appropriate width
                  height={300} // Set appropriate height
              />
          </div>
      </div>

      <div className="flex gap-14 pl-14 md-card">
          <div className="blue-box">
              <p className="font-600 lh-14">Enhanced security</p>
              <div className="white-box flex items-center justify-center" >
                  <Image 
                      src={icLock}
                      alt=""
                      width={100} // Set appropriate width
                      height={100} // Set appropriate height
                  />
              </div>
          </div>
          <div className="blue-box">
              <p className="font-600 lh-14">Local Payment 
                  Methods</p>
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
              <p className="font-600 lh-14">One account
                  Multiple currencies</p>
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
                  <p className="text-white">People Already <br /> 
                      Signed Up</p>
              </div>
          </div>
          <div className="flex-1 flex justify-center ">
              <div className="flex items-center flex-col justify-center gap-2">
                  <p className="text-white">Early access ends soon</p>
                  <div className="flex items-center gap-2">
                      <img src="css/images/ic-clock.svg" alt="" />
                      <h3 className="h3-heading text-white">12.02.31</h3>
                  </div>

              </div>
          </div>
      </div>

    </div>

    <div className="bg-blue h-min-screen hide">
      <div className="flex justify-between gap-2 flex-md-col min-h-full">
          <div className="pt-8 pl-14 md-content relative flex-1">
              <h1 className="text-white font-bold h1-signup-heading lh-normal">Sign up today <br />
                  Join the waitlist</h1>
              <button className="btn btn-white mt-8">Sign Up Now</button>
              
              <p className="p-signup text-white">Sign up today and unlock exclusive benefits! Experience more value,
                  Chas back, and personalized content just for you
                Don't miss out—join us now!</p>
                
                
              <div className="ic-phoneWHand">
                <Image 
                    src={icPhoneWHand}
                    alt=""
                    width={241} // Set appropriate width
                    height={272} // Set appropriate height
                />
            </div>

          </div>
          <div className="relative img-pt-signup flex-1">
              <Image 
                  src={img02} 
                  alt="" 
                  className="md:w-full max-h-390 object-fill"
                  width={500} // Set appropriate width
                  height={300} // Set appropriate height
              />
             
              <div className="flex gap-2 md-signup-card items-start mt-8">
                  <div className="blue-box bg-white">
                      <p className="font-600 text-blue lh-14 min-h-60">Early access to 
                          discounted forex rates</p>
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
                      <p className="font-600 text-blue lh-14 min-h-60">Luxury vacation</p>
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
                      <p className="font-600 text-blue lh-14 min-h-60">Refer your buddy and 
                          earn cashback once we are live.</p>
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

          <p className="p-signup2 text-white">Sign up today and unlock exclusive benefits! Experience more value,
              Chas back, and personalized content just for you
            Don't miss out—join us now!</p>
      </div>
    </div>

    <div className="h-full flex justify-between flex-col hide">

        <div className="text-center mt-8">
            <h1 className="text-blue font-bold h1-signup-heading lh-normal">Borderless pay </h1>
            <p className="text-blue font-bold p-min-paragraph lh-normal">Send and receive money</p>
            <button className="btn btn-primary mt-8">Sign Up Now</button>
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
            <div className="flex-1">
              <Image 
                    src={img03} 
                    alt="" 
                    className="md:w-full max-h-390 object-fill"
                    width={500} // Set appropriate width
                    height={300} // Set appropriate height
                />
            </div>
        </div>
    </div>

    <div>
      <div className="flex justify-between gap-2 flex-md-col">
          <div className="pt-20 pl-14 md-content flex-1">
              <h1 className="text-blue font-bold h1-signup-heading lh-normal">Military <br />
                  Grade Security</h1>
              <p className="text-blue font-bold fs-6 lh-normal">Your Money, Your Rules. No One Else Can Touch It</p>
              <button className="btn btn-primary mt-8">Sign Up Now</button>
          </div>
          <div className="relative flex-1">
            <Image 
                src={img05} 
                alt="" 
                className="md:w-full max-h-390 object-fill"
                width={500} // Set appropriate width
                height={300} // Set appropriate height
            />
\          </div>
      </div>

      <div className="flex items-center justify-center ">
          <div className="bg-blue security-box relative">
              <div className="left-security-box">
                  <h3 className="h3-head text-white font-bold text-center">Trust & security form start to finish</h3>
                  <p className="fs-14 text-white font-600 text-center">Your Money, Your Rules. No One Else Can Touch It</p>
                  <div className="security-subbox flex gap-8 items-center justify-center flex-wrap">
                      <div className="card flex flex-col gap-2 items-center">
                          <div className="flex flex-col gap-2 items-center">
                            <Image 
                                src={icSecurity}
                                alt=""
                                width={41} // Set appropriate width
                                height={40} // Set appropriate height
                            />
                              <h4 className="text-white font-600 fs-11">security management</h4>
                          </div>
                          <p className="text-white fs-7 mt-2">Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit. Morbi facilisis</p>
                      </div>
                      <div className="card  flex flex-col gap-2 items-center">
                          <div className="flex flex-col gap-2 items-center">
                            <Image 
                                src={icSecurityProtectionShield}
                                alt=""
                                width={41} // Set appropriate width
                                height={40} // Set appropriate height
                            />
                              <h4 className="text-white font-600 fs-11">security management</h4>

                          </div>
                          <p className="text-white fs-7 mt-2">Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit. Morbi facilisis</p>
                      </div>
                      <div className="card  flex flex-col gap-2 items-center">
                          <div className="flex flex-col gap-2 items-center">
                            <Image 
                                src={icSecurityProtectionCardPayment}
                                alt=""
                                width={41} // Set appropriate width
                                height={40} // Set appropriate height
                            />
                              <h4 className="text-white font-600 fs-11">security management</h4>

                          </div>
                          <p className="text-white fs-7 mt-2">Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit. Morbi facilisis</p>
                      </div>
                      <div className="card  flex flex-col gap-2 items-center">
                          <div className="flex flex-col gap-2 items-center">
                          <Image 
                                src={icSecurityProtectionFingerprint}
                                alt=""
                                width={41} // Set appropriate width
                                height={40} // Set appropriate height
                            />
                              <h4 className="text-white font-600 fs-11">security management</h4>

                          </div>
                          <p className="text-white fs-7 mt-2">Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit. Morbi facilisis</p>
                      </div>
                      <div className="card  flex flex-col gap-2 items-center">
                          <div className="flex flex-col gap-2 items-center">
                            <Image 
                                src={icSecurityProtectionHandShield}
                                alt=""
                                width={41} // Set appropriate width
                                height={40} // Set appropriate height
                            />
                              <h4 className="text-white font-600 fs-11">security management</h4>

                          </div>
                          <p className="text-white fs-7 mt-2">Lorem ipsum dolor sit amet, consectetur 
                              adipiscing elit. Morbi facilisis</p>
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
    </div>


    </>

  );
}
