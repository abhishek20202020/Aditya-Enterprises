import serviceBg from "../assets/product.png"; // apni image lagana

const Services = () => {
  return (
    <>
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background */}
      <img
        src={serviceBg}
        alt="services"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 fade-up">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          हमारी <span className="text-[#ff6b4a]">सेवाएं</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          निर्माण सामग्री के साथ-साथ हम आपको तेज डिलीवरी और भरोसेमंद सेवा भी प्रदान करते हैं।
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">

          {/* Call */}
          <a
            href="tel:6204220757"
            className="flex items-center gap-2 bg-[#ff6b4a] px-6 py-2 rounded-md hover:bg-[#e55a3c] transition"
          >
            {/* Phone SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 4.5c0-1.24 1.01-2.25 2.25-2.25h2.25c.62 0 1.18.36 1.44.91l1.2 2.4a1.5 1.5 0 01-.34 1.76l-1.27 1.27a11.25 11.25 0 005.66 5.66l1.27-1.27a1.5 1.5 0 011.76-.34l2.4 1.2c.55.26.91.82.91 1.44v2.25A2.25 2.25 0 0119.5 21.75h-.75C9.84 21.75 2.25 14.16 2.25 4.5z"
              />
            </svg>
            Call Now
          </a>

          {/* Contact */}
          <a
            href="/contact"
            className="flex items-center gap-2 border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            {/* Service Icon */}
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M3 7l9 6 9-6" />
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                </svg>
            Contact Us
          </a>

        </div>

        {/* Breadcrumb */}
        <p className="mt-5 text-sm text-gray-300">
          Home / Services
        </p>

      </div>

    </section>



    </>
  );
};

export default Services;