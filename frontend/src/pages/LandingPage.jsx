import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from "react-icons/lu";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import main from "../assets/main.png";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";
import img5 from "../assets/img-6.jpg";


import { APP_FEATURES } from "../utils/data";
import Modal from '../components/Modal';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import { UserContext } from '../context/userContext';

const LandingPage = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  useEffect(() => {
    clearUser();
  }, []);

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full pl-3 min-h-[80vh] relative overflow-hidden flex items-center" style={{ background: 'var(--gradient-bg)' }}>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)] blur-[300px] opacity-20 z-0" />
        <div className="container mx-auto px-6 md:px-10 py-8 relative z-10">
          <header className="flex justify-between items-center mb-10">
            <div className="text-4xl font-bold text-[var(--color-text-main)]">
              Interview PrepMateAI
            </div>
            {!user && (
              <button className="btn-primary" onClick={() => setOpenAuthModal(true)}>
                Login / Sign Up
              </button>
            )}
          </header>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-3">
                <div
                  className="flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full border relative overflow-hidden"
                  style={{
                    color: 'var(--color-accent-dark)',
                    backgroundColor: 'var(--color-bg-main)',
                    borderColor: 'var(--color-accent)',
                    boxShadow: '0 0 12px rgba(0, 188, 212, 0.35)',
                  }}
                >
                  <LuSparkles className="animate-twinkle text-[var(--color-accent-dark)]" />
                  <span className="relative z-10">AI Powered</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm animate-glow z-0" />
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold mb-4 leading-snug text-[var(--color-text-main)]">
                Ace Interviews with <br />
                <span
                  className="text-transparent bg-clip-text font-bold animate-text-shine"
                  style={{
                    backgroundImage: 'linear-gradient(to right, var(--color-accent), var(--color-accent-dark))',
                  }}
                >
                  AI-Powered
                </span>{" "}
                Learning
              </h1>

              <p className="text-base sm:text-lg text-[var(--color-text-muted)] mb-6">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary" onClick={handleCTA}>
                  Get Started
                </button>
                {!user && (
                  <button
                    className="btn-primary"
                    onClick={() => setOpenAuthModal(true)}
                    style={{
                      backgroundImage: 'linear-gradient(to right, #00bcd4, #0097a7)',
                    }}
                  >
                    Login / Sign Up
                  </button>
                )}
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={main}
                alt="AI Interview"
                className="max-w-[400px] h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="w-full " style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-header text-[var(--color-footer-text)] text-center mb-10">
            Explore How It Looks
          </h2>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {[img1, img2, img3, img4, img5].map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.03] flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--color-card-bg)',
                    height: '200px',
                    width: '100%',
                  }}
                >
                  <img
                    src={image}
                    alt={`Preview ${index + 1}`}
                    className="max-h-full max-w-full object-cover transition-transform duration-500"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 relative" style={{ backgroundColor: 'var(--color-bg-main)' }}>
        <div className="absolute w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-30 top-[-100px] right-[-100px] z-0 animate-pulse" />
        <div className="relative container mx-auto px-6 md:px-10 z-10">
          <h2 className="section-header text-center text-[var(--color-text-main)] mb-8">
            Features That Make You Shine
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {APP_FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="group rounded-2xl p-6 bg-[var(--color-card-bg)] shadow-md border border-[var(--color-card-border)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_#00bcd455]"
              >
                <div className="flex items-center gap-2 mb-3 text-[var(--color-accent)]">
                  <LuSparkles className="text-xl animate-pulse" />
                  <h3 className="text-lg font-semibold text-[var(--color-text-main)]">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[var(--color-text-muted)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Footer */}
      <footer
        className="text-sm py-6 relative border-t mt-10"
        style={{
          backgroundColor: 'var(--color-footer-bg)',
          color: 'var(--color-footer-text)',
          borderColor: 'var(--color-accent)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_70%)] animate-glow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="font-medium">© {new Date().getFullYear()} Interview PrepMateAI. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>

        <div className="mt-4 text-xs text-center text-[var(--color-text-muted)]">
          Made by @palak & ritesh
        </div>
      </footer>

      {/* Auth Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
