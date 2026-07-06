import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bgImage from "../assets/img/ar.jpg";

import reviewOne from "../assets/img/Reviews/one.jpeg";
import reviewTwo from "../assets/img/Reviews/two.jpeg";
import reviewThree from "../assets/img/Reviews/three.jpeg";
import reviewFour from "../assets/img/Reviews/four.jpeg";

const reviews = [reviewOne, reviewTwo, reviewThree, reviewFour];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-overlay" />

      <div className="testimonial-wrap">
        <div className="testimonial-head">
          <span>Patient Experience</span>
          <h2>Real Stories. Real Recovery.</h2>
          
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ el: ".custom-swiper-pagination", clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={22}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <img src={review} alt={`Patient review ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-pagination" />
      </div>

      <style>{`
        .testimonial-section,
        .testimonial-section * {
          box-sizing: border-box;
        }

        .testimonial-section {
          position: relative;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          padding: 96px 0;
          overflow: hidden;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .testimonial-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(47,54,26,.86), rgba(88,98,59,.82)),
            radial-gradient(circle at 15% 20%, rgba(215,222,201,.12), transparent 34%);
        }

        .testimonial-wrap {
          position: relative;
          z-index: 2;
          width: min(92%, 1100px);
          margin: 0 auto;
        }

        .testimonial-head {
          max-width: 740px;
          margin: 0 auto 52px;
          text-align: center;
        }

        .testimonial-head span {
          display: inline-flex;
          align-items: center;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(215,222,201,.24);
          background: rgba(255,248,239,.08);
          color: #d7dec9;
          font-size: 12px;
          font-weight: 750;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .testimonial-head h2 {
          margin: 18px 0 0;
          color: #f5f7ef;
          font-size: clamp(2rem,4vw,3.35rem);
          line-height: 1.1;
          letter-spacing: -.035em;
          font-weight: 650;
        }

        .testimonial-head p {
          margin: 16px auto 0;
          max-width: 620px;
          color: #d7dec9;
          font-size: 15.5px;
          line-height: 1.75;
        }

        .review-card {
          background: rgba(255,248,239,.96);
          border-radius: 26px;
          padding: 14px;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(215,222,201,.24);
          box-shadow: 0 24px 70px rgba(0,0,0,.28);
        }

        .review-card img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 18px;
        }

        .custom-swiper-pagination {
          margin-top: 26px;
          text-align: center;
        }

        .custom-swiper-pagination .swiper-pagination-bullet {
          background: rgba(255,248,239,.65);
          opacity: 1;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #f5f7ef;
        }

        @media(max-width: 640px) {
          .testimonial-section {
            padding: 72px 0;
          }

          .testimonial-head {
            text-align: left;
            margin-bottom: 34px;
          }

          .review-card {
            height: 260px;
            border-radius: 22px;
          }
        }

        @media(max-width: 390px) {
          .review-card {
            height: 230px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;