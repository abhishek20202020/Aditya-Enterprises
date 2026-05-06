import galleryBg from "../assets/gallery.png"; // apni image lagana

const GalleryHero = () => {
  return (
    <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background Image (your collage image) */}
      <img
        src={galleryBg} // apna image path
        alt="gallery"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4">

        {/* Heading */}
        <h1 className="text-3xl md:text-6xl font-bold">
          हमारी <span className="text-[#ff6b4a]">गैलरी</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center mt-4">
          <div className="w-16 h-[2px] bg-gray-400"></div>
          <div className="w-2 h-2 bg-[#ff6b4a] rounded-full mx-2"></div>
          <div className="w-16 h-[2px] bg-gray-400"></div>
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          हमारे स्टोर, प्रोडक्ट्स और सेवाओं की असली झलक
        </p>

        {/* ICONS ROW */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm">

          {/* Icon 1 */}
          <div className="flex flex-col items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ff6b4a" strokeWidth="1.8" className="w-6 h-6">
              <path d="M4 7h3l2-2h6l2 2h3v12H4z"/>
              <circle cx="12" cy="13" r="3"/>
            </svg>
            <span className="text-gray-200">स्टोर की झलक</span>
          </div>

          {/* Icon 2 */}
          <div className="flex flex-col items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ff6b4a" strokeWidth="1.8" className="w-6 h-6">
              <path d="M3 7l9-4 9 4-9 4-9-4z"/>
              <path d="M3 17l9 4 9-4"/>
              <path d="M3 12l9 4 9-4"/>
            </svg>
            <span className="text-gray-200">प्रोडक्ट्स कलेक्शन</span>
          </div>

          {/* Icon 3 */}
          <div className="flex flex-col items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ff6b4a" strokeWidth="1.8" className="w-6 h-6">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
            </svg>
            <span className="text-gray-200">हमारा शोरूम</span>
          </div>

          {/* Icon 4 */}
          <div className="flex flex-col items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ff6b4a" strokeWidth="1.8" className="w-6 h-6">
              <circle cx="9" cy="7" r="4"/>
              <path d="M17 11v6"/>
              <path d="M21 17h-8"/>
              <path d="M5 21v-2a4 4 0 014-4h0"/>
            </svg>
            <span className="text-gray-200">हमारी टीम</span>
          </div>

        </div>

        {/* BUTTON */}
        <div className="mt-8">
          <button className="flex items-center gap-2 mx-auto border border-[#ff6b4a] px-6 py-2 rounded-md hover:bg-[#ff6b4a] transition">

            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8" cy="8" r="2"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>

            Gallery
          </button>
        </div>

      </div>

    </section>
  );
};

export default GalleryHero;