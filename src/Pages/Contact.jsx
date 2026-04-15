import contactBg from "../assets/contact.png"; 
import person from "../assets/person1.png"; // jo circular image hai
import { useState } from "react";
import contactImg from "../assets/conatact-side.png";

const ContactHero = () => {

const [status, setStatus] = useState("");
const [loading, setLoading] = useState(false);
const backend = import.meta.env.VITE_BACKEND_URL;
  return (
    <>
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a2540] text-white">

      {/* Background */}
      <img
        src={contactBg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a2540]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[#ff6b4a]/30 blur-2xl"></div>

            {/* Image */}
            <img
              src={person}
              alt="owner"
              className="relative w-52 h-52 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left fade-up">

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            हमसे <span className="text-[#ff6b4a]">संपर्क करें</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-gray-300 max-w-lg">
            सही दाम और बेहतरीन सामग्री के लिए अभी कॉल करें या हमारे स्टोर पर आएं
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">

            {/* Call */}
            <a
              href="tel:6204220757"
              className="flex items-center gap-2 bg-[#ff6b4a] px-5 py-3 rounded-md hover:bg-[#e55a3c] transition shadow-lg"
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

            {/* WhatsApp */}
            <a
              href="https://wa.me/6204220757"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white px-5 py-3 rounded-md hover:bg-white hover:text-black transition"
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

            {/* Store */}
            <a
              href="https://www.google.com/maps/place/ADITYA+ENTERPRISES/@25.8519751,84.9612428,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed4d36473e5e45:0xfd4d663faee9e7b0!8m2!3d25.8519751!4d84.9612428!16s%2Fg%2F11xf9x8107?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1e3a8a] px-5 py-3 rounded-md hover:bg-[#162d6b] transition"
            >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"/>
              <circle cx="12" cy="11" r="2.5"/>
            </svg>
            Store Locator
            </a>

          </div>

          {/* Breadcrumb */}
          <p className="mt-6 text-sm text-gray-400">
            Home / Contact
          </p>

        </div>

      </div>
</section>


<section className="py-20 bg-[#f8fafc]">

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Get in touch
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            हमसे संपर्क करें — हम आपको सही दाम और बेहतरीन निर्माण सामग्री देने के लिए हमेशा तैयार हैं।
          </p>

          {/* Divider */}
          <div className="mt-6 border-t"></div>

          {/* Address */}
          {/* CONTACT GRID */}
     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

  {/* ADDRESS */}
  <div className="flex items-start gap-3">
    <svg className="w-6 h-6 text-[#1e3a8a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"/>
      <circle cx="12" cy="11" r="2.5"/>
    </svg>

    <div>
      <h3 className="font-semibold text-lg text-gray-800">
        Aditya Enterprises
      </h3>
      <p className="text-gray-600 text-sm mt-1">
        Near Mahaveer Mandir, Pirari Pul <br />
        Saran, Bihar - 841222
      </p>
    </div>
  </div>

  {/* FOLLOW US */}
  <div className="flex items-start gap-4">
    <span className="text-lg font-semibold text-gray-800 mt-1">Follow Us:</span>

    {/* Instagram */}
    <a href="https://www.instagram.com/_singh_aditya___/" className="group">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:rotate-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5"
        >
          <rect
            width="20"
            height="20"
            x="2"
            y="2"
            rx="5"
            ry="5"
            stroke="white"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="white"
            strokeWidth="1.8"
          />
          <circle
            cx="17"
            cy="7"
            r="1.2"
            fill="white"
          />
        </svg>
      </div>
    </a>

    {/* Facebook */}
    <a href="#" className="group">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 shadow-lg transform transition duration-300 group-hover:scale-110 group-hover:-rotate-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-5 h-5"
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.14 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.14 22 17 22 12z"/>
        </svg>
      </div>
    </a>
  </div>

  {/* EMAIL */}
  <div className="flex items-start gap-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5 text-gray-700"
    >
      <path d="M3 7l9 6 9-6" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </svg>

    <div>
      <h4 className="font-medium text-gray-800">Email us</h4>
      <p className="text-sm text-gray-600">aditya@gmail.com</p>
    </div>
  </div>

  {/* CALL */}
  <div className="flex items-start gap-3">
    <svg className="w-6 h-6 text-[#ff6b4a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5.06 2h2a2 2 0 0 1 2 1.72c.12.86.37 1.7.72 2.5a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.57-1.23a2 2 0 0 1 2.11-.45c.8.35 1.64.6 2.5.72A2 2 0 0 1 22 16.92z"/>
    </svg>

    <div>
      <h4 className="font-medium text-gray-800">Call us</h4>
      <p className="text-sm text-gray-600">+91 6204220757,9199857500</p>
    </div>
  </div>

  

  </div>
  {/* OUR OTHER SHOP */}
            <div className="mt-12 w-full">

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* LEFT TEXT */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    Our Other Shop
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm">
                    Visit our second branch for more variety and better deals in construction materials.
                  </p>

                  <div className="mt-4 text-sm text-gray-700">
                     <span className="text-[#ff6b4a]">Raj Construction & Fertilizer</span> Sutihar Chowk,Near Post Office,
                    Saran, Bihar - 841222
                  </div>
                </div>

                {/* RIGHT BUTTON */}
                <a
                href="https://maps.app.goo.gl/n68zoStS7A6hTjFs9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#162d6b] transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"/>
                  <circle cx="12" cy="11" r="2.5"/>
                </svg>

                <span>View Location</span>
              </a>
              </div>

            </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <img
            src={contactImg}
            alt="contact"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />

          {/* Overlay Card */}
          <div className="absolute bottom-4 left-4 bg-black/60 text-white p-4 rounded-md backdrop-blur-sm">

            <h4 className="font-semibold">Opening hours</h4>
            <p className="text-sm mt-1">
              Mon - Sun: 7:00 AM - 9:00 PM <br />
             
            </p>

          </div>

        </div>

      </div>

</section>



{/* CONTACT FORM SECTION */}
<section className="mt-16 px-4 md:px-8">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">

    {/* LEFT - FORM */}
    <div className="bg-white p-6 md:p-10">

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Send Message
      </h2>

      <p className="text-gray-500 mt-2">
        Fill the form and we’ll contact you soon
      </p>

      {/* FORM */}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          setStatus("");

          const data = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            message: e.target.message.value,
          };

          try {
            const res = await fetch(`${backend}/contact`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            if (res.ok) {
              setStatus("success");
              e.target.reset();
            } else {
              setStatus("error");
            }
          } catch {
            setStatus("server");
          }

          setLoading(false);
        }}
        className="mt-6 space-y-5"
      >

        {/* NAME */}
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full border rounded-full px-5 py-3 focus:outline-none focus:border-[#ff6b4a]"
        />

        {/* PHONE */}
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full border rounded-full px-5 py-3 focus:outline-none focus:border-[#ff6b4a]"
        />

        {/* EMAIL */}
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          className="w-full border rounded-full px-5 py-3 focus:outline-none focus:border-[#ff6b4a]"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full border rounded-2xl px-5 py-3 focus:outline-none focus:border-[#ff6b4a]"
        ></textarea>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#ff6b4a] text-white py-3 rounded-full font-semibold shadow-md hover:bg-[#e55a3c] transition"
        >
          {loading ? "Sending..." : "Send Message 🚀"}
        </button>

        {/* RESPONSE */}
        {status === "success" && (
          <p className="text-green-600 text-center font-medium">
            ✅ Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-500 text-center font-medium">
            ❌ Failed to send message
          </p>
        )}

        {status === "server" && (
          <p className="text-yellow-500 text-center font-medium">
            ⚠️ Server error
          </p>
        )}

      </form>
    </div>

    {/* RIGHT - PRODUCTS */}
    <div className="bg-gradient-to-br from-[#d9564a] to-orange-500 text-white p-8 md:p-12 flex flex-col justify-center">

      <h3 className="text-2xl md:text-3xl font-bold">
        Our Products
      </h3>

      <p className="mt-3 text-white/80">
        We provide high-quality construction materials at the best price.
      </p>

      <ul className="mt-6 space-y-4">
        <li>✅ Cement (Ultratech, ACC)</li>
        <li>✅ Steel & TMT Bars</li>
        <li>✅ Bricks & Sand</li>
        <li>✅ Paints & Hardware</li>
        <li>✅ Pipes & Fittings</li>
      </ul>

      <div className="mt-8">
        <a
          href="/products"
          className="inline-block bg-white text-[#ff6b4a] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Explore Products
        </a>
      </div>

    </div>

  </div>
</section>

{/* STORE LOCATOR SECTION */}
<section className="mt-20 mb-10 px-4 md:px-8">

  <div className="max-w-7xl mx-auto bg-[#1e3a8a] text-white rounded-2xl overflow-hidden shadow-xl">

    <div className="grid md:grid-cols-2">

      {/* LEFT CONTENT */}
      <div className="p-8 md:p-12 flex flex-col justify-center">

        <h2 className="text-2xl md:text-4xl font-bold">
          Visit Our Store
        </h2>

        <p className="mt-4 text-gray-200">
          हमारे स्टोर पर आएं और बेहतरीन निर्माण सामग्री सही दाम पर प्राप्त करें। हम आपको quality और trust दोनों देते हैं।
        </p>

        {/* ADDRESS */}
        <div className="mt-6 flex items-start gap-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"/>
            <circle cx="12" cy="11" r="2.5"/>
          </svg>

          <p className="text-sm text-gray-200">
            Near Mahaveer Mandir, Pirari Pul <br />
            Saran, Bihar - 841222
          </p>
        </div>

        {/* BUTTON */}
        <a
          href="https://maps.app.goo.gl/AP2jsHK6PjLRcw527"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-white text-[#1e3a8a] px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"/>
            <circle cx="12" cy="11" r="2.5"/>
          </svg>
          Get Directions
        </a>

      </div>

      {/* RIGHT MAP */}
      <div className="h-[300px] md:h-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.531614127845!2d84.9612428!3d25.851975099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed4d36473e5e45%3A0xfd4d663faee9e7b0!2sADITYA%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1776248676868!5m2!1sen!2sin" className="w-full h-full border-0"
          loading="lazy"></iframe>
      </div>

    </div>

  </div>

</section>
    </>
  );
};

export default ContactHero;

 