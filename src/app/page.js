import EarlySignUpForm from "@/components/EarlySignUpForm";
import "../styles/home-page.scss";
import VideoBackground from "@/components/VideoBackground";

export default function HomePage() {
  return (
    <main className="home-page-container">
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
  );
}
