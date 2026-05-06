import brandsBg from "../assets/brands.png"; // apni image lagana
import { Link } from "react-router-dom";


const brands = [
  // Cement
  
  { name: "UltraTech Cement", img: "/brands/cement-1.jpg" },
  { name: "ACC Cement", img: "/brands/cements-2.jpg" },
  { name: "ACC Cement", img: "/brands/ambuja.jpg" },
  
  { name: "Birla Samrat", img: "/brands/Birla.jpg" },
  { name: "Birla Gold", img: "/brands/cement-4.jpg" },
  
  { name: "Panther Cement", img: "/brands/cement-5.jpg" },


  // Paints
  { name: "Asian Paints", img: "/brands/asian.jpg" },
  { name: "Opus Paints", img: "/brands/birla opus.jpg" },
  { name: "Berger Paints", img: "/brands/paint-2.jpg" },
  { name: "Nerolac Paints", img: "/brands/paint-3.jpg" },

  // Pipes
  { name: "Ashirvad Pipes", img: "/brands/pipes-1.jpg" },
  { name: "Astral Pipes", img: "/brands/pipes-2.jpg" },
  { name: "Supreme Pipes", img: "/brands/pipes-3.jpg" },
  { name: "Finolex Pipes", img: "/brands/pipes-4.jpg" },

  // Tiles
  { name: "Kajaria", img: "/brands/kajariya.jpg" },
  // { name: "Somany", img: "/brands/somany.png" },
  // { name: "Johnson Tiles", img: "/brands/johnson.png" },
  // { name: "Orientbell Tiles", img: "/brands/orientbell.png" },

  // Steel & Hardware
  { name: "Jindal Steel", img: "/brands/jindal-1.jpg" },
  { name: "Tata Tiscon", img: "/brands/tata-tiscon.jpg" },
  { name: "Magadh TMT", img: "/brands/magadh.jpg" },
  { name: "Kamdhenu", img: "/brands/kamdhenu.jpg" },
  { name: "Shyam Steel", img: "/brands/shyamsteel.jpg" },

  
];
const Brands = () => {
  return (
    <>
<section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background Image */}
      <img
        src={brandsBg}
        alt="brands"
        className="absolute  w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 fade-up">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          हमारे <span className="text-[#ff6b4a]">ब्रांड्स</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          हम केवल भरोसेमंद और उच्च गुणवत्ता वाले ब्रांड्स के साथ काम करते हैं
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">

          {/* Call Button */}
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

          {/* Contact Button */}
          <Link
            to="/contact"
            className="flex items-center gap-2 border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            {/* Icon */}
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
          </Link>

        </div>

        {/* Breadcrumb */}
        <p className="mt-5 text-sm text-gray-300">
          Home / Brands
        </p>

      </div>

</section>



<section className="py-16 bg-[#0a2540] text-white text-center">

  <div className="max-w-5xl mx-auto px-4">

    <h2 className="text-3xl md:text-4xl font-bold">
      हम सिर्फ भरोसेमंद ब्रांड्स ही क्यों रखते हैं?
    </h2>

    <p className="mt-4 text-gray-300">
      हमारे सभी ब्रांड्स गुणवत्ता, टिकाऊपन और भरोसे के लिए जाने जाते हैं।
      हम वही सामग्री देते हैं जो आपके निर्माण को मजबूत बनाए।
    </p>

  </div>

</section>



<section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-4 md:px-8">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
        Popular <span className="text-[#1e3a8a]">Brands</span>
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        हम केवल भरोसेमंद और उच्च गुणवत्ता वाले ब्रांड्स के साथ काम करते हैं
      </p>
    </div>

    {/* Brands Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

      {brands.map((brand, i) => (
        <div
          key={i}
          className="group relative border border-gray-200 rounded-2xl bg-white p-6 flex items-center justify-center overflow-hidden hover:shadow-2xl transition duration-300 min-h-[150px]"
        >

          {/* Logo */}
          <img
            src={brand.img}
            alt={brand.name}
            className="h-20 md:h-24 w-auto object-contain transition duration-300 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

            <p className="text-white text-sm md:text-base font-semibold text-center px-3">
              {brand.name}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>


<section className="py-16 bg-[#ff6b4a]">

  <div className="max-w-7xl mx-auto px-4 md:px-8">

    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-800 text-center">
      Brand Categories
    </h2>

    {/* Grid */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* Cement */}
      <div className="group p-6 border bg-white rounded-xl hover:shadow-lg transition text-center">
        
        <div className="flex justify-center mb-4 text-[#1e3a8a] group-hover:text-[#ff6b4a] transition">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </div>

        <h3 className="font-semibold text-lg mb-2">Cement Brands</h3>
        <p className="text-sm text-gray-600">
          UltraTech, ACC, Ambuja, Birla A1
        </p>

      </div>

      {/* Paint */}
      <div className="group p-6 border bg-white rounded-xl hover:shadow-lg transition text-center">

        <div className="flex justify-center mb-4 text-[#1e3a8a] group-hover:text-[#ff6b4a] transition">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M12 3v18M3 12h18" />
          </svg>
        </div>

        <h3 className="font-semibold text-lg mb-2">Paint Brands</h3>
        <p className="text-sm text-gray-600">
          Asian Paints, Birla Opus
        </p>

      </div>

      {/* Steel */}
      <div className="group p-6 border bg-white rounded-xl hover:shadow-lg transition text-center">

        <div className="flex justify-center mb-4 text-[#1e3a8a] group-hover:text-[#ff6b4a] transition">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4z" />
          </svg>
        </div>

        <h3 className="font-semibold text-lg mb-2">Steel Brands</h3>
        <p className="text-sm text-gray-600">
          Tata, Jindal, Vizag Steel
        </p>

      </div>

      {/* Pipes */}
      <div className="group p-6 border bg-white rounded-xl hover:shadow-lg transition text-center">

        <div className="flex justify-center mb-4 text-[#1e3a8a] group-hover:text-[#ff6b4a] transition">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M4 12h16" />
          </svg>
        </div>

        <h3 className="font-semibold text-lg mb-2">Pipe Brands</h3>
        <p className="text-sm text-gray-600">
          Supreme, Finolex, Ashirvad
        </p>

      </div>

      {/* Tiles */}
      <div className="group p-6 border bg-white rounded-xl hover:shadow-lg transition text-center">

        <div className="flex justify-center mb-4 text-[#1e3a8a] group-hover:text-[#ff6b4a] transition">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
          </svg>
        </div>

        <h3 className="font-semibold text-lg mb-2">Tiles Brands</h3>
        <p className="text-sm text-gray-600">
          Kajaria, Somany
        </p>

      </div>

      {/* Electrical */}
      <div className="group p-6 border bg-white rounded-xl hover:shadow-lg transition text-center">

        <div className="flex justify-center mb-4 text-[#1e3a8a] group-hover:text-[#ff6b4a] transition">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M13 3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h3 className="font-semibold text-lg mb-2">Electrical</h3>
        <p className="text-sm text-gray-600">
          Havells, Anchor, Polycab
        </p>

      </div>

    </div>

  </div>

</section>



<section className="py-16 bg-gray-100 text-center">

  <h2 className="text-3xl font-bold text-gray-800">
    सिर्फ ब्रांड नहीं, सेवा भी
  </h2>

  <p className="mt-4 text-gray-600">
    समय पर डिलीवरी और सही दाम के साथ
  </p>

</section>
    </>
  );
};

export default Brands;