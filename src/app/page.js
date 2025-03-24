import EarlySignUpForm from "@/components/EarlySignUpForm";
import "../styles/home-page.scss";
import VideoBackground from "@/components/VideoBackground";
import Image from 'next/image';
import img01 from '../../public/images/img-01.png';
import icLock from '../../public/images/ic-lock.png';
import icPayment from '../../public/images/ic-payment.png';
import icSmartphone from '../../public/images/ic-smartphone.png';
import icSmartphone01 from '../../public/images/ic-smartphone01.png';


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

    <div>

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

    </>

  );
}
