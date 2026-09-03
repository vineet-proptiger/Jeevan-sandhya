'use client'
import React from 'react'
import Image from 'next/image'

const Projects = ({ setIsOpen }) => {
  return (
    <section id="projects" className="projects-section">
      <style jsx>{`
        .projects-section {
          box-sizing: border-box;
          padding: 80px 0px;
          position: relative;
          background: #ffffff;
          overflow: hidden;
        }
        .heading {
          color: #1A2024;
          font-family: "Montserrat", sans-serif;
          font-size: 46px;
          font-weight: 600;
          line-height: 56px;
          text-transform: uppercase;
          letter-spacing: .03em;
          margin-bottom: 15px;
          text-align: center;
        }
        .subheading {
          color: #71717a;
          font-family: "Poppins", sans-serif;
          font-size: 17px;
          text-align: center;
          margin-bottom: 60px;
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        .project-card-wrap {
          display: flex;
          align-items: stretch;
          margin-bottom: 60px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 2, 66, 0.05);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .project-card-wrap:hover {
          box-shadow: 0 25px 60px rgba(0, 2, 66, 0.12);
          transform: translateY(-5px);
        }
        .project-img-container {
          position: relative;
          overflow: hidden;
          background: #1A2024;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .project-img {
          width: 100% !important;
          height: 100% !important;
          flex: 1 1 0%;
          object-fit: cover !important;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: block;
        }
        .project-card-wrap:hover .project-img {
          transform: scale(1.07);
        }
        .project-content-box {
          background: #f8f7fd;
          padding: 50px 45px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid rgba(0, 2, 66, 0.04);
          position: relative;
        }
        .project-title {
          color: #1A2024;
          font-family: "Montserrat", sans-serif;
          font-size: 26px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .04em;
          margin-bottom: 20px;
          position: relative;
        }
        .project-desc {
          color: #334155;
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 35px;
          text-align: justify;
        }
        .explore-btn {
          padding: 13px 32px;
          background: #ffffff;
          color: #1A2024;
          border: 2px solid #1A2024;
          line-height: 1;
          position: relative;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          letter-spacing: 1.5px;
          transition: all 0.35s ease;
          cursor: pointer;
          width: fit-content;
          border-radius: 4px;
        }
        .explore-btn:hover {
          background: #1A2024;
          color: #C59A3F;
          border-color: #1A2024;
          box-shadow: 0 8px 20px rgba(0, 2, 66, 0.25);
          transform: translateY(-2px);
        }
        @media (max-width: 991px) {
          .heading {
            font-size: 32px;
            line-height: 40px;
          }
          .subheading {
            font-size: 15px;
            margin-bottom: 40px;
          }
          .project-content-box {
            padding: 35px 25px;
          }
          .project-title {
            font-size: 22px;
          }
          .project-img-container {
            min-height: auto;
            aspect-ratio: 16 / 10;
            width: 100%;
            display: flex;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-8 max-w-[1300px] relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-semibold leading-tight uppercase tracking-wider text-gray-900 text-center" style={{ fontFamily: "var(--font-jost), Montserrat, sans-serif", marginBottom: '10px' }}>PROJECTS</h2>
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-2 mb-4">
            <div className="w-16 h-[1px] bg-[#0E4429]"></div>
            <div className="w-2 h-2 rounded-full bg-[#0E4429] mx-3"></div>
            <div className="w-16 h-[1px] bg-[#0E4429]"></div>
          </div>
          {/* <p className="subheading">
            Designed for Elevated Living <span className="text-[#C59A3F] mx-2 font-bold">•</span> Where nature meets modern comfort
          </p> */}
        </div>

        {/* Project 1: Brigade Jeevan Sandhya Residential */}
        <div className="project-card-wrap flex flex-col lg:flex-row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
          {/* Image Side (Left on Desktop) */}
          <div className="w-full lg:w-1/2 project-img-container">
            <Image
              src="/projects/daffodils-tower.jpg"
              alt="Brigade Jeevan Sandhya - Residential Towers"
              width={700}
              height={550}
              className="project-img"
              priority={true}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>

          {/* Text Side (Right on Desktop) */}
          <div className="w-full lg:w-1/2 project-content-box">
            <h3 className="project-title">Brigade Jeevan Sandhya - LUXURY LIVING</h3>
            <p className="project-desc">
              The residential phase of Brigade Jeevan Sandhya in Talaghattapura, Bangalore features iconic towers offering luxury 3 BHK and 4 BHK residences. Designed for low-density exclusivity with breathtaking panoramic views and abundant natural light, each apartment is crafted with top-tier specifications. Residents enjoy seamless access to a magnificently engineered clubhouse, landscaped community gardens, swimming pool, high-speed elevators, and premier sport facilities.
            </p>
            <button
              className="explore-btn"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              EXPLORE
            </button>
          </div>
        </div>

        {/* Project 2: Brigade Jeevan Sandhya Amenities */}
        <div className="project-card-wrap flex flex-col lg:flex-row-reverse mb-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          {/* Image Side (Right on Desktop) */}
          <div className="w-full lg:w-1/2 project-img-container">
            <Image
              src="/images/gallery/g4.webp"
              alt="Brigade Jeevan Sandhya - Premium Amenities"
              width={700}
              height={550}
              className="project-img"
              priority={true}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>

          {/* Text Side (Left on Desktop) */}
          <div className="w-full lg:w-1/2 project-content-box">
            <h3 className="project-title">Brigade Jeevan Sandhya - PREMIUM LIFESTYLE</h3>
            <p className="project-desc">
              Complementing the luxury residential towers is a world-class lifestyle precinct. Designed to elevate daily living, it features grand entrance lobbies, ample multi-level parking, exclusive wellness centers, and effortless connectivity to Talaghattapura and major IT hubs. Experience a harmonious blend of nature and modern convenience.
            </p>
            <button
              className="explore-btn"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              EXPLORE
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
