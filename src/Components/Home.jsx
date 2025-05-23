import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React from "react";
import { Link } from "react-router";

const Home = () => {
  const sliderImages = [
    {
      id: 1,
      image: "https://i.ibb.co/jPGc9WTc/roommates-laying-bed-side-view-1.jpg",
      title: " Your Perfect Match Awaits",
      description: ` Tired of endless searching? Our smart matching system connects you
              with compatible roommates based on lifestyle, habits, and
              preferences. Find someone who truly gets you, whether you're an
              early bird or a night owl, a tidy minimalist or a creative
              chaos-lover.`,
    },
    {
      id: 2,
      image:
        "https://i.ibb.co/Fk3NB2kC/rear-view-female-roommates-relaxing-couch-1.jpg",
      title: "More Than Just a Room",
      description: `Discover homes, not just rooms. Browse listings with detailed
              descriptions of spaces, amenities, and neighborhood vibes. From
              cozy shared apartments to spacious houses, we help you find the
              perfect environment to thrive.`,
    },
    {
      id: 3,
      image: "https://i.ibb.co/fGzxyQdH/side-view-roommates-laying-bed-1.jpg",
      title: "Safe & Simple Connections",
      description: `Connect with confidence. Our platform prioritizes your safety with
              verified profiles and secure messaging. Finding your next roommate
              should be exciting, not stressful. We make the process
              straightforward and trustworthy.`,
    },
  ];
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-[800px] max-w-11/12 mx-auto"
      >
        {sliderImages.map((slide) => (
          <SwiperSlide className="rounded-xl overflow-hidden" key={slide.id}>
            <div
              className="relative h-full w-full  bg-no-repeat  bg-cover bg-center rounded-xl mt-4"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                <div className="text-center max-w-3xl px-4" data-aos="fade-up">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-2xl lg:text-3xl text-white mb-8">
                    {slide.description}
                  </p>
                  <Link>
                    <button className="bg-green-400 text-white px-8 py-3 rounded-full font-medium  transition duration-300">
                      Find Roommate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Home;
