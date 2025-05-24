import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/featured-posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
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
      <div className="max-w-7xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Posts</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post._id}>
              <div className="p-4 px-8  rounded-lg shadow hover:shadow-lg min-h-72 relative">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-600">{post.location}</p>
                <p className="text-green-600 font-bold">Rent: ${post.rent}</p>
                <p className="text-sm text-gray-500 mt-1">{post.description}</p>

                <p className="mt-2 text-sm">Room Type: {post.type}</p>
                <Link to={`details/${post._id}`}>
                  <button className="btn absolute right-8 bottom-8">
                    See More
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" py-12  ">
        <div className="max-w-6xl mx-auto px-4 my-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="p-6  rounded-xl shadow border border-white">
              <p className="">
                “liveMate helped me find the perfect roommate in under a week!”
              </p>
              <p className="mt-4 font-semibold">— Sarah, NYU</p>
            </div>
            <div className="p-6  rounded-xl shadow border border-white">
              <p className=" dark">
                “I was so nervous about moving to a new city, but this made it
                easy.”
              </p>
              <p className="mt-4 font-semibold">— Jamal, San Francisco</p>
            </div>
            <div className="p-6  rounded-xl shadow border border-white">
              <p className="">
                “Found someone with the same lifestyle and interests. Game
                changer.”
              </p>
              <p className="mt-4 font-semibold">— Aanya, Toronto</p>
            </div>
          </div>
        </div>
      </div>

      <FAQ></FAQ>
    </>
  );
};

export default Home;
