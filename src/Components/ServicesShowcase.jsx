import s1 from "../assets/g1.png";
import s2 from "../assets/g2.png";
import s3 from "../assets/g3.png";
import s4 from "../assets/g4.png";
import s5 from "../assets/g5.png";
import s6 from "../assets/g6.png";

const ServicesShowcase = () => {

  // Duplicate arrays for seamless loop
  const col1 = [s1, s2, s3, s4, s5];
  const col2 = [s3, s4, s5, s6, s2];
  const col3 = [s6, s2, s1, s3, s4];

  return (
    <section className="bg-[#0a2540] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            हमारी <span className="text-[#ff6b4a]">सेवाएं</span>
          </h2>

          <p className="mt-4 text-gray-300 max-w-lg">
            हम आपको निर्माण सामग्री, डिलीवरी और सलाह जैसी सेवाएं प्रदान करते हैं ताकि आपका काम आसान और तेज़ हो सके।
          </p>

          <ul className="mt-6 space-y-3 text-gray-200">
            <li>✔ Quality Materials Supply</li>
            <li>✔ Fast Delivery</li>
            <li>✔ Bulk Orders Available</li>
            <li>✔ Trusted Brands</li>
          </ul>
        </div>

        {/* RIGHT REELS */}
        <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">

          {/* Top Fade */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0a2540] to-transparent z-10"></div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0a2540] to-transparent z-10"></div>

          <div className="absolute inset-0 flex gap-4 justify-end">

            {/* COLUMN 1 */}
            <div className="flex flex-col gap-4 animate-up">
              {[...col1, ...col1].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-36 md:w-44 h-52 md:h-64 object-cover rounded-xl shadow-lg will-change-transform"
                />
              ))}
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-4 animate-down">
              {[...col2, ...col2].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-36 md:w-44 h-52 md:h-64 object-cover rounded-xl shadow-lg will-change-transform"
                />
              ))}
            </div>

            {/* COLUMN 3 */}
            <div className="flex flex-col gap-4 animate-upSlow">
              {[...col3, ...col3].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-36 md:w-44 h-52 md:h-64 object-cover rounded-xl shadow-lg will-change-transform"
                />
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* ANIMATIONS */}
      <style>
        {`
        .animate-up {
          animation: scrollUp 20s linear infinite;
        }

        .animate-down {
          animation: scrollDown 20s linear infinite;
        }

        .animate-upSlow {
          animation: scrollUp 28s linear infinite;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        `}
      </style>

    </section>
  );
};

export default ServicesShowcase;