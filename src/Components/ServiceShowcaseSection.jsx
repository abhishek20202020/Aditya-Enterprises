const ServicesImpact = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            क्यों चुनें <span className="text-[#ff6b4a]">Aditya Enterprises</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            हम गुणवत्ता, भरोसा और तेज़ सेवा के साथ आपके निर्माण कार्य को आसान बनाते हैं।
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* Quality */}
          <div className="group p-6 rounded-xl border hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ff6b4a]/10 text-[#ff6b4a] mb-4 group-hover:scale-110 transition">

              <svg 
  
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-6 h-6"
            >
            {/* Outer subtle shape */}
            <path d="M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0-18z" opacity="0.15"/>

            {/* Main check */}
            <path d="M7.5 12.5l3 3 6-6" />
            </svg>

            </div>

            <h3 className="font-semibold text-lg text-gray-800">
              High Quality
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              हम केवल बेहतरीन और भरोसेमंद निर्माण सामग्री प्रदान करते हैं।
            </p>
          </div>

          {/* Delivery */}
          <div className="group p-6 rounded-xl border hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1e3a8a]/10 text-[#1e3a8a] mb-4 group-hover:scale-110 transition">

              {/* Truck SVG */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                <path d="M3 7h13v10H3z"/>
                <path d="M16 10h3l2 3v4h-5z"/>
                <circle cx="7.5" cy="17.5" r="1.5"/>
                <circle cx="17.5" cy="17.5" r="1.5"/>
              </svg>

            </div>

            <h3 className="font-semibold text-lg text-gray-800">
              Fast Delivery
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              आपके ऑर्डर को समय पर और सुरक्षित तरीके से पहुँचाया जाता है।
            </p>
          </div>

          {/* Price */}
          <div className="group p-6 rounded-xl border hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500/10 text-green-600 mb-4 group-hover:scale-110 transition">

              {/* Rupee SVG */}
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6"
                >
                <path d="M6 3h12" />
                <path d="M6 7h12" />
                <path d="M6 11h6a4 4 0 1 0 0-8" />
                <path d="M6 11l7 10" />
                </svg>

            </div>

            <h3 className="font-semibold text-lg text-gray-800">
              Best Price
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              उचित दाम में बेहतरीन सामग्री उपलब्ध कराना हमारी प्राथमिकता है।
            </p>
          </div>

          {/* Trust */}
          <div className="group p-6 rounded-xl border hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/10 text-purple-600 mb-4 group-hover:scale-110 transition">

              {/* Handshake SVG - Clean & Professional */}
                        <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-6 h-6"
                    >
                    {/* Shield */}
                    <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                    
                    {/* Check */}
                    <path d="M9 12l2 2 4-4" />
                    </svg>

            </div>

            <h3 className="font-semibold text-lg text-gray-800">
              Trusted Service
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              वर्षों से ग्राहकों का भरोसा हमारे साथ जुड़ा हुआ है।
            </p>
          </div>

        </div>

        {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

            {/* CARD 1 */}
            <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
                
                <div className="flex justify-center mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-[#ff6b4a]">
                    {/* Users SVG */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M17 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M7 21v-2a4 4 0 0 1 3-3.87"/>
                    <circle cx="12" cy="7" r="4"/>
                    </svg>
                </div>
                </div>

                <h3 className="text-3xl font-bold text-[#ff6b4a]">500+</h3>
                <p className="text-gray-600 text-sm mt-1">Happy Customers</p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
                
                <div className="flex justify-center mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    {/* Clock SVG */}
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-6 h-6"
                    >
                    {/* Outer badge */}
                    <circle cx="12" cy="8" r="5" />

                    {/* Star inside */}
                    <path d="M12 5.5l1.2 2.5 2.8.4-2 2 0.5 2.8-2.5-1.3-2.5 1.3 0.5-2.8-2-2 2.8-.4L12 5.5z" />

                    {/* Ribbons */}
                    <path d="M9 13l-2 7 5-3 5 3-2-7" />
                    </svg>
                </div>
                </div>

                <h3 className="text-3xl font-bold text-[#ff6b4a]">5+</h3>
                <p className="text-gray-600 text-sm mt-1">Years Experience</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
                
                <div className="flex justify-center mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                    {/* Box SVG */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <path d="M3.3 7l8.7 5 8.7-5"/>
                    <path d="M12 22V12"/>
                    </svg>
                </div>
                </div>

                <h3 className="text-3xl font-bold text-[#ff6b4a]">1000+</h3>
                <p className="text-gray-600 text-sm mt-1">Products</p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1">
                
                <div className="flex justify-center mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    {/* Shield Check SVG */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"/>
                    <path d="M9 12l2 2 4-4"/>
                    </svg>
                </div>
                </div>

                <h3 className="text-3xl font-bold text-[#ff6b4a]">100%</h3>
                <p className="text-gray-600 text-sm mt-1">Trust</p>
            </div>

            </div>

      </div>

    </section>
  );
};

export default ServicesImpact;