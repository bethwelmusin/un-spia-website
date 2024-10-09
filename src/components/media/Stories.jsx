import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false
  };

  return (
    <>
    

      <div class=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <h2 class="text-lg font-semibold text-gray-800 p-4">
            Int'l Day of United Nations Peacekeepers (29 May) - UN Chief |
            United Nations
          </h2>
          <iframe
            class="w-full h-64 md:h-80 lg:h-64"
            src="https://www.youtube.com/embed/3_ahzIrHG-4"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <h2 class="text-lg font-semibold text-gray-800 p-4">
            UN Peacekeeping, a truly global partnership
          </h2>
          <iframe
            class="w-full h-64 md:h-80 lg:h-64"
            src="https://www.youtube.com/embed/iU0vFUZTdig"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <h2 class="text-lg font-semibold text-gray-800 p-4">
            UN Peacekeeping: A commitment to peace
          </h2>
          <iframe
            class="w-full h-64 md:h-80 lg:h-64"
            src="https://www.youtube.com/embed/st12PMiFg4Y"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <h2 class="text-lg font-semibold text-gray-800 p-4">
            Why is it important for UN Peacekeeping to consider the environment
          </h2>
          <iframe
            class="w-full h-64 md:h-80 lg:h-64"
            src="https://www.youtube.com/embed/30I07fEBJ3Y?si=am4Bo0TxZ-rN70DK"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <h2 class="text-lg font-semibold text-gray-800 p-4">
            Leaving a Positive Legacy: UN Peacekeeping Environmental Best
            Practices | United Nations
          </h2>
          <iframe
            class="w-full h-64 md:h-80 lg:h-64"
            src="https://www.youtube.com/embed/MhuGgX4jamY?si=04o1fDaBMV5uNpIT"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <h2 class="text-lg font-semibold text-gray-800 p-4">
            What is UN Peacekeeping doing to reduce the environmental footprint
            of its peacekeeping operations?
          </h2>
          <iframe
            class="w-full h-64 md:h-80 lg:h-64"
            src="https://www.youtube.com/embed/pfYvS1zoCmI?si=fHegSGJHRd0umf5v"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default About;
