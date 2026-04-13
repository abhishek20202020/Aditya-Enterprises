import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a2540] text-white pt-16 pb-8">

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Aditya Enterprises
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            आपके निर्माण का भरोसेमंद साथी। हम आपको बेहतरीन गुणवत्ता और सही दाम पर सभी निर्माण सामग्री उपलब्ध कराते हैं।
          </p>
        </div>

        {/* Divider Mobile */}
        <div className="border-t border-white/10 sm:hidden"></div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-[#ff6b4a] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#ff6b4a] transition">About Us</a></li>
            <li><a href="/products" className="hover:text-[#ff6b4a] transition">Products</a></li>
            <li><a href="/contact" className="hover:text-[#ff6b4a] transition">Contact</a></li>
          </ul>
        </div>

        {/* Divider Mobile */}
        <div className="border-t border-white/10 sm:hidden"></div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-sm text-gray-300">

            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <svg className="w-5 h-5 text-[#ff6b4a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M2.25 4.5c0-1.24 1.01-2.25 2.25-2.25h2.25c.62 0 1.18.36 1.44.91l1.2 2.4a1.5 1.5 0 01-.34 1.76l-1.27 1.27a11.25 11.25 0 005.66 5.66l1.27-1.27a1.5 1.5 0 011.76-.34l2.4 1.2c.55.26.91.82.91 1.44v2.25A2.25 2.25 0 0119.5 21.75h-.75C9.84 21.75 2.25 14.16 2.25 4.5z"/>
              </svg>

              <a href="tel:6204220757" className="hover:text-white block">
                6204220757 <br /> 9199857500
              </a>
            </div>

            {/* Location */}
            <div className="flex items-start justify-center md:justify-start gap-2">
              <svg className="w-5 h-5 text-[#ff6b4a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"/>
                <circle cx="12" cy="11" r="2.5"/>
              </svg>

              <p>
                Mahaveer Mandir, Pirari Pul, <br />
                Saran, Bihar - 841222
              </p>
            </div>

          </div>
        </div>

        {/* Divider Mobile */}
        <div className="border-t border-white/10 sm:hidden"></div>

        {/* Buttons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Reach Out to us</h3>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6204220757"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded-md hover:bg-green-600 transition w-full md:w-fit"
          >
            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  className="w-6 h-6"
>
  {/* Green Circle */}
  <circle cx="16" cy="16" r="16" fill="#25D366" />

  {/* White WhatsApp Shape */}
  <path
    fill="#fff"
    d="M16.003 5.333c-5.9 0-10.67 4.77-10.67 10.67 0 1.88.49 3.72 1.42 5.34L5.333 26.667l5.47-1.39a10.61 10.61 0 005.2 1.33h.003c5.9 0 10.67-4.77 10.67-10.67S21.903 5.333 16.003 5.333zm0 19.467h-.003a8.8 8.8 0 01-4.49-1.22l-.32-.19-3.24.82.87-3.16-.21-.33a8.82 8.82 0 01-1.36-4.74c0-4.86 3.94-8.8 8.8-8.8 2.35 0 4.56.92 6.22 2.58a8.74 8.74 0 012.58 6.22c0 4.86-3.94 8.8-8.8 8.8zm4.82-6.52c-.26-.13-1.54-.76-1.78-.84-.24-.09-.41-.13-.59.13-.18.26-.68.84-.84 1.01-.15.17-.3.2-.56.07-.26-.13-1.1-.41-2.1-1.3-.78-.7-1.3-1.56-1.45-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.59-1.42-.81-1.94-.21-.5-.42-.43-.59-.44h-.5c-.17 0-.45.06-.68.32-.24.26-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.75 4.37 3.86.61.26 1.09.42 1.46.54.61.2 1.17.17 1.61.1.49-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z"
  />
</svg>

            WhatsApp
          </a>

          {/* Store Locator */}
          <a
            href="https://www.google.com/maps?q=Mahaveer+Mandir+Pirari+Pul+Bihar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#ff6b4a] text-white px-5 py-3 rounded-md hover:bg-[#e55a3c] transition mt-3 w-full md:w-fit"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"/>
              <circle cx="12" cy="11" r="2.5"/>
            </svg>
            Store Locator
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Aditya Enterprises. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;