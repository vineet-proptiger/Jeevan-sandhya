'use client'

const Highlights = () => {
  return (
    <section id="highlights" className="highlight_section">
      <style jsx>{`
        .highlight_section {
          position: relative;
          padding: 0;
          overflow: hidden;
        }
        
        .highlight_section .parallax {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-image: url('/images/highlights/highlight.webp');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
        }

        .highlight_section .container-fluid {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin: 0 auto;
        }

        .highlight_section .heading {
          color: #C59A3F;
          font-family: "Montserrat", sans-serif;
          font-size: 46px;
          font-weight: 500;
          line-height: 56px;
          text-transform: uppercase;
          letter-spacing: .02em;
          margin-bottom: 50px; /* Increased from 30px */
        }

        .highlight_section ul {
          padding-left: 0;
          list-style: none;
          margin: 0;
        }

        .highlight_section ul li {
          letter-spacing: 1px;
          font-weight: 400;
          font-size: 18px;
          line-height: 32px; /* Increased from 28px */
          margin-bottom: 28px; /* Increased from 20px */
          color: #F8F9FA;
          font-family: "Poppins", sans-serif;
          position: relative;
          padding-left: 50px; /* Increased from 44px */
        }

        .highlight_section ul li:before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0;
          color: #F8F9FA;
          font-size: 20px;
          font-weight: 300;
        }

        .box_left, .box_right {
          padding: 8% 8%; /* Increased top/bottom from 5% to 8% */
        }

        .box_right {
          border-left: 1px solid #ffffff3b;
        }

        @media (max-width: 991px) {
          .highlight_section .heading {
            font-size: 32px;
            line-height: 40px;
          }
          .box_left, .box_right {
            padding: 40px 20px;
          }
          .box_right {
            border-left: none;
            border-top: 1px solid #ffffff3b;
          }
          .highlight_section ul li {
            font-size: 16px;
            line-height: 26px;
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .icon-float {
          animation: iconFloat 3s ease-in-out infinite;
          display: inline-block;
        }

        .highlight-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
        }

        .highlight-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 35px -5px rgba(0, 0, 0, 0.16), 0 10px 10px -5px rgba(0, 0, 0, 0.06);
        }

        .gradient-blue {
          background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%);
        }

        .gradient-green {
          background: linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%);
        }

        .gradient-purple {
          background: linear-gradient(135deg, #f3e8ff 0%, #faf5ff 100%);
        }

        .gradient-amber {
          background: linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%);
        }

        .gradient-red {
          background: linear-gradient(135deg, #fee2e2 0%, #fef2f2 100%);
        }

        .gradient-indigo {
          background: linear-gradient(135deg, #e0e7ff 0%, #eef2ff 100%);
        }
      `}</style>

      {/* Parallax Background with fixed attachment for layer effect */}
      <div className="parallax"></div>

      <div className="container-fluid max-w-[1300px] mx-auto relative z-10 py-[70px]">
        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-[#C59A3F] text-center" data-aos="fade-up" data-aos-duration="1000" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '10px' }}>
          PROJECT HIGHLIGHTS & USPS
        </h2>
        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-3 mb-8" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-16 h-[1px] bg-[#0E4429]"></div>
          <div className="w-2 h-2 rounded-full bg-[#0E4429] mx-3"></div>
          <div className="w-16 h-[1px] bg-[#0E4429]"></div>
        </div>
        
        {/* 6 Highlights Cards Matching User Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                
          {/* Highlight 1: Premium Residences */}
          <div className="highlight-card gradient-blue p-6 sm:p-7 rounded-2xl" style={{ animation: '0.6s ease-out 0s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4">
                  <svg className="w-9 h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-800" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Premium 3 & 4 BHK Residences</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14px] leading-[1.65]">
                  Discover elegantly crafted homes by Brigade Group offering luxury, comfort, and premium finishes tailored for modern urban families.
              </p>
          </div>

          {/* Highlight 2: Spacious Units */}
          <div className="highlight-card gradient-green p-6 sm:p-7 rounded-2xl" style={{ animation: '0.6s ease-out 0.1s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4" style={{ animationDelay: '0.2s' }}>
                  <svg className="w-9 h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-800" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Spacious Units from 2100 sq.ft.</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14px] leading-[1.65]">
                  Experience grand living spaces starting from 2,100 sq.ft. onwards, thoughtfully designed to maximize natural light and ensure cross-ventilation.
              </p>
          </div>

          {/* Highlight 3: Trusted Developer */}
          <div className="highlight-card gradient-purple p-6 sm:p-7 rounded-2xl" style={{ animation: '0.6s ease-out 0.2s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4" style={{ animationDelay: '0.4s' }}>
                  <svg className="w-9 h-9 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.956 11.956 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-800" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Trusted Developer: Brigade Group</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14px] leading-[1.65]">
                  Built on a legacy of excellence and trust. Brigade Group brings decades of unmatched expertise in delivering landmark residential communities.
              </p>
          </div>

          {/* Highlight 4: New Launch */}
          <div className="highlight-card gradient-amber p-6 sm:p-7 rounded-2xl" style={{ animation: '0.6s ease-out 0s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4" style={{ animationDelay: '0.6s' }}>
                  <svg className="w-9 h-9 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-800" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>New Launch on Kanakapura Road</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14px] leading-[1.65]">
                  Be part of an exclusive pre-launch opportunity in one of South Bangalore's most rapidly developing and highly sought-after residential corridors.
              </p>
          </div>

          {/* Highlight 5: Expected Possession */}
          <div className="highlight-card gradient-red p-6 sm:p-7 rounded-2xl" style={{ animation: '0.6s ease-out 0.1s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4" style={{ animationDelay: '0.8s' }}>
                  <svg className="w-9 h-9 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-800" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Possession by December 2028</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14px] leading-[1.65]">
                  Stay assured with a clear timeline. The project is advancing smoothly towards timely delivery with expected handover scheduled for December 2028.
              </p>
          </div>

          {/* Highlight 6: Location Connectivity */}
          <div className="highlight-card gradient-indigo p-6 sm:p-7 rounded-2xl" style={{ animation: '0.6s ease-out 0.2s 1 normal both running fadeInScale' }}>
              <div className="icon-float mb-4" style={{ animationDelay: '1s' }}>
                  <svg className="w-9 h-9 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
              </div>
              <h3 className="text-[18px] sm:text-[19px] font-bold mb-2 text-gray-800" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif" }}>Unmatched Connectivity</h3>
              <p className="text-gray-600 text-[13.5px] sm:text-[14px] leading-[1.65]">
                  Enjoy seamless access to renowned educational institutions, world-class healthcare facilities, and major tech hubs—all just minutes away.
              </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Highlights
