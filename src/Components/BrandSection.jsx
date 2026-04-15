import { Link } from "react-router-dom";

const brands = [
  "/brands/ambuja.png",
  "/brands/asianpaints.png",
  "/brands/birla.png",
  "/brands/bondit.png",
  "/brands/centuryply.png",
  "/brands/godrej.png",
  "/brands/greenpanel.png",
];

const BrandsSection = () => {
  return (
    <section className="py-12 bg-[#ff6b4a] overflow-hidden w-full">

      {/* FULL WIDTH */}
      <div className="w-full">

        {/* Top */}
        <div className="flex justify-between items-center mb-6 px-4 md:px-10">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Brands
          </h2>

          <Link
            to="/brands"
            className="bg-[#1e3a8a] text-white px-3 md:px-4 py-2 rounded-md text-xs md:text-sm hover:bg-[#162d6b] transition"
          >
            View All
          </Link>
        </div>

        {/* Slider */}
        <div className="relative w-full overflow-hidden">

          <div className="flex gap-6 md:gap-10 animate-marquee px-2 md:px-6">

            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="min-w-[100px] md:min-w-[140px] h-[70px] md:h-[80px] bg-white rounded-md shadow-sm flex items-center justify-center hover:shadow-md transition"
              >
                <img
                  src={brand}
                  alt="brand"
                  className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Animation */}
      <style>
        {`
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

    </section>
  );
};

export default BrandsSection;