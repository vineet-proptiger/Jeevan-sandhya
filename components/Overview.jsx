'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage, overviewVideo } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
  <section
    id="overview"
    className="about_us about-us-section"
  >
    <style jsx>{`
      .about-us-section {
        box-sizing: border-box;
        padding: 70px 0px;
        position: relative;
        background: #F8F9FA;
        overflow: hidden;
      }
      .logoicon {
        width: 25%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.15;
        z-index: 0;
        pointer-events: none;
      }
      .icon_logo_anim {
        animation: logoAnim 20s linear infinite;
        width: 100%;
        height: auto;
      }
      @keyframes logoAnim {
        100% {
          transform: rotate(360deg);
        }
      }
      .inner-section {
        position: relative;
        z-index: 1;
        padding-right: 30px;
      }
      .heading {
        color: #1A2024;
        font-family: "Montserrat", sans-serif;
        font-size: 46px;
        font-weight: 500;
        line-height: 56px;
        text-transform: uppercase;
        letter-spacing: .02em;
        margin-bottom: 30px;
      }
      .about-us-section p {
        text-align: left;
        margin-bottom: 25px;
        color: #1A2024;
        font-family: "Poppins", sans-serif;
        font-size: 17px;
        line-height: 1.8;
      }
      .about-us-section p.boldp {
        margin-top: 35px;
        font-weight: 500;
        font-size: 19px;
        margin-bottom: 25px;
      }
      .about-us-section ul {
        padding-left: 0;
        list-style-type: none;
        margin-bottom: 45px;
        color: #1A2024;
        font-family: "Poppins", sans-serif;
        font-size: 17px;
        line-height: 1.8;
      }
      .about-us-section ul li {
        position: relative;
        padding-left: 24px;
        margin-bottom: 14px;
      }
      .about-us-section ul li:before {
        content: '';
        position: absolute;
        left: 0;
        top: 12px;
        width: 6px;
        height: 6px;
        background-color: #0E4429;
        border-radius: 50%;
      }
      .theme_btn1 {
        padding: 15px 32px;
        background: #0E4429;
        color: #FFF;
        line-height: 1;
        position: relative;
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
        display: inline-block;
        font-size: 15px;
        transition: all 0.3s ease;
        cursor: pointer;
        letter-spacing: 0.5px;
      }
      .theme_btn1:hover {
        background: #C59A3F;
        color: #ffffff;
      }
      .image_caption_wrap img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      @media (max-width: 991px) {
        .inner-section {
          padding-right: 0;
          margin-bottom: 40px;
        }
        .heading {
          font-size: 32px;
          line-height: 40px;
        }
        .logoicon {
          width: 50%;
        }
      }
    `}</style>

    <div className="container mx-auto px-4 sm:px-8 max-w-[1300px] relative z-10">
      <div className="flex flex-col lg:flex-row items-center">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-7/12 pr-0 lg:pr-8">
          <div className="inner-section" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-gray-900" data-aos="fade-up" data-aos-duration="1000" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '6px' }}>Brigade Jeevan Sandhya</h2>
            {/* Decorative Line */}
            <div className="flex items-center justify-start mt-1 mb-3" data-aos="fade-up" data-aos-duration="1000">
              <div className="w-16 h-[1px] bg-[#0E4429]"></div>
              <div className="w-2 h-2 rounded-full bg-[#0E4429] mx-3"></div>
              <div className="w-16 h-[1px] bg-[#0E4429]"></div>
            </div>
            <h3 className="text-[16px] sm:text-[18px] md:text-[22px] font-medium tracking-wide text-gray-600" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '24px' }}>Premium Residences in Talaghattapura, Bangalore</h3>
            
            <div style={isExpanded ? {} : { display: '-webkit-box', WebkitLineClamp: '7', WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '16px' }}>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" style={{ fontSize: '16px', fontFamily: '"Poppins", sans-serif', color: '#333', textAlign: 'justify', marginBottom: '12px', lineHeight: '1.8' }}>
                Brigade Jeevan Sandhya is an upcoming premium residential project by Brigade Group located on the rapidly developing Kanakapura Road, Bangalore. Spread across a 2-acre land parcel, the project offers spacious 3 and 4 BHK apartments with sizes ranging from 2,100 to 2,600 sq.ft. Designed for modern urban families, the development combines contemporary architecture, efficient layouts, and premium lifestyle features to create a comfortable and sophisticated living environment. With prices starting from ₹3 Crore onwards, Brigade Jeevan Sandhya caters to homebuyers seeking luxury homes in one of South Bangalore's most sought-after residential corridors.
              </p>
            </div>

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#C59A3F] font-bold mb-10 flex items-center gap-1 hover:text-[#A57C2B] transition-colors cursor-pointer"
              style={{ fontSize: '15px' }}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {/* Info Boxes */}
            <div 
              className="grid grid-cols-2 md:grid-cols-2 border border-[#C59A3F] rounded-2xl overflow-hidden bg-[#faf8f5]" 
              data-aos="fade-up" 
              data-aos-duration="1000" 
              data-aos-delay="200"
            >
              <div className="p-4 border-r border-[#C59A3F] flex flex-col md:flex-row items-start md:items-center justify-between md:justify-start md:gap-4">
                <span style={{ color: '#1A2024', fontSize: '14px', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Units:</span>
                <span style={{ color: '#C59A3F', fontSize: '16px', fontWeight: '700' }}>135</span>
              </div>
              <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between md:justify-start md:gap-4">
                <span style={{ color: '#1A2024', fontSize: '14px', fontWeight: '800', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Land Parcel:</span>
                <span style={{ color: '#C59A3F', fontSize: '16px', fontWeight: '700' }}>2 Acres</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-5/12 mt-10 lg:mt-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          <div className="image_caption_wrap relative overflow-hidden rounded-xl shadow-lg border border-[#C59A3F]/20 bg-white">
            <Image
              src={overviewImage}
              alt="Brigade Jeevan Sandhya - Tower Elevation"
              width={1500}
              height={1364}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-700 hover:scale-105"
              priority={true}
            />
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Overview
