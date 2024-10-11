import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto p-10 text-center bg-yellow-500 text-white">
        <h2 className="text-lg font-bold mb-4">
          Get Involved & Make a Difference
        </h2>
        <p className="text-md mb-8">
          Join us in making a positive impact in the lives of those who need it
          most. Whether you want to donate, volunteer, or partner with us, your
          contribution matters.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            to="/donate#donate"
            className="bg-white  hover:bg-blue-200 duration-200 text-black px-8 py-2 rounded-lg text-lg font-semibold"
          >
            Donate Now
          </Link>

          <Link
            to="/volunteer#volunteer"
            className="bg-white text-black border-2 border-white hover:bg-blue-200 hover:border-blue-200 hover:text-white duration-200 px-8 py-2 rounded-lg text-xl font-semibold"
          >
            Become a Volunteer
          </Link>

          <Link
            to="/contact-us"
            className="bg-white text-black border-2 border-white hover:bg-blue-200 hover:border-blue-600 hover:text-white duration-200 px-8 py-2 rounded-lg text-xl font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
