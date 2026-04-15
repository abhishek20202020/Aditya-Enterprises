import React from "react";
import { Link } from "react-router-dom";
import cement from "../assets/cement.png";
import sand from "../assets/sand.jpg";
import gitti from "../assets/gitti.png";
import rod from "../assets/rod.jpg";
import pipes from "../assets/pipes.jpg";
import paint from "../assets/paints.jpeg";
import serviceImg from "../assets/service.png"; // apni real image lagana


import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";

import v1 from "../assets/v1.mp4";
import v2 from "../assets/v2.mp4";
import v3 from "../assets/v3.mp4";
import BrandsSection from "../Components/BrandSection";

const Hero = () => {
  return (
    <>
    {/* Hero section */}
<section className="relative w-full h-[90vh] overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source
          src="hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a2540]/80"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
          Building Materials <br /> You Can Trust
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Cement, Sand, Rod, Pipes & More — Everything for your construction needs in one place.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">

          {/* Contact Button */}
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-[#ff6b4a] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e55a3c] transition shadow-lg"
          >
            {/* Phone Icon */}
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

            Contact Us
          </Link>

          {/* Explore Products */}
          <Link
            to="/products"
            className="flex items-center gap-2 border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-[#0a2540] transition"
          >
            {/* Box / Product Icon */}
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
                d="M3 7.5l9-4.5 9 4.5-9 4.5-9-4.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5v9l9 4.5 9-4.5v-9"
              />
            </svg>

            Explore Products
          </Link>

        </div>
      </div>
</section>

<BrandsSection/>

    {/* Trust Section */}
<section className="py-16 bg-white">

  <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">

    {/* Heading */}
    <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
      क्यों चुनें <span className="text-[#1e3a8a]">Aditya Enterprises?</span>
    </h2>

    <p className="mt-3 text-gray-600">
      आपके निर्माण के लिए भरोसेमंद और किफायती समाधान
    </p>

    {/* Cards */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

      {/* Card 1 */}
      <div className="bg-[#f8fafc] p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
        <div className="flex justify-center mb-4">
          <svg className="w-8 h-8 text-[#1e3a8a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">भरोसेमंद सेवा</h3>
        <p className="mt-2 text-sm text-gray-600">हम वर्षों से ग्राहकों का भरोसा जीतते आ रहे हैं।</p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#f8fafc] p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
        <div className="flex justify-center mb-4">
          <svg className="w-8 h-8 text-[#1e3a8a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M12 8c-3 0-5 2-5 4s2 4 5 4 5-2 5-4-2-4-5-4z" />
            <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">सही दाम</h3>
        <p className="mt-2 text-sm text-gray-600">हम आपको बाजार के सबसे अच्छे दाम देते हैं।</p>
      </div>

      {/* Card 3 */}
      <div className="bg-[#f8fafc] p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
        <div className="flex justify-center mb-4">
          <svg className="w-8 h-8 text-[#1e3a8a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M3 7h13v10H3z" />
            <path d="M16 10h4l1 2v5h-5z" />
            <circle cx="7" cy="18" r="2" />
            <circle cx="17" cy="18" r="2" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">तेज डिलीवरी</h3>
        <p className="mt-2 text-sm text-gray-600">आपका सामान समय पर आपके पास पहुंचेगा।</p>
      </div>

      {/* Card 4 */}
      <div className="bg-[#f8fafc] p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
        <div className="flex justify-center mb-4">
          <svg className="w-8 h-8 text-[#1e3a8a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M3 7l9-4 9 4-9 4-9-4z" />
            <path d="M3 7v10l9 4 9-4V7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">सभी सामान उपलब्ध</h3>
        <p className="mt-2 text-sm text-gray-600">सीमेंट, बालू, गिट्टी, सरिया – सब एक ही जगह।</p>
      </div>

    </div>

  </div>
</section>

    {/* About Section */}
<section className="py-20 bg-[#0a2540] text-white">

  <div className="max-w-7xl mx-auto px-4 md:px-8">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-5xl font-bold">
        हमारे <span className="text-[#ff6b4a]">बारे में</span>
      </h2>
      <p className="mt-3 text-gray-300">
        भरोसे और गुणवत्ता के साथ आपकी सेवा में
      </p>
    </div>

    {/* Top Grid */}
    {/* Top Grid */}
<div className="grid md:grid-cols-2 gap-12 items-center">

  {/* Proprietor */}
  <div className="flex items-center gap-6">
    <img
      src={person1}
      alt="proprietor"
      className="w-32 h-32 object-cover rounded-full border-4 border-[#ff6b4a]"
    />

    <div>
      <h3 className="text-xl font-semibold">
        प्रोपराइटर - SHAILESH KUAMR SINGH
      </h3>

      {/* Call Button */}
      <a
        href="tel:9199857500"
        className="mt-2 inline-flex items-center gap-2 bg-[#ff6b4a] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#e55a3c] transition"
      >
        {/* Phone SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 4.5c0-1.24 1.01-2.25 2.25-2.25h2.25c.62 0 1.18.36 1.44.91l1.2 2.4a1.5 1.5 0 01-.34 1.76l-1.27 1.27a11.25 11.25 0 005.66 5.66l1.27-1.27a1.5 1.5 0 011.76-.34l2.4 1.2c.55.26.91.82.91 1.44v2.25A2.25 2.25 0 0119.5 21.75h-.75C9.84 21.75 2.25 14.16 2.25 4.5z"
          />
        </svg>

        Call Now
      </a>

      <p className="text-gray-300 mt-3 text-sm">
        हम कई वर्षों से निर्माण सामग्री उपलब्ध करा रहे हैं।
        हमारा लक्ष्य है सही दाम और अच्छी गुणवत्ता देना।
      </p>
    </div>
  </div>

  {/* Co-Proprietor */}
  <div className="flex items-center gap-6">
    <img
      src={person2}
      alt="co-proprietor"
      className="w-32 h-32 object-cover rounded-full border-4 border-[#ff6b4a]"
    />

    <div>
      <h3 className="text-xl font-semibold">
        को-प्रोपराइटर-ADITYA RAJ
      </h3>

      {/* Call Button */}
      <a
        href="tel:62024220757"
        className="mt-2 inline-flex items-center gap-2 bg-[#ff6b4a] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[#e55a3c] transition"
      >
        {/* Phone SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 4.5c0-1.24 1.01-2.25 2.25-2.25h2.25c.62 0 1.18.36 1.44.91l1.2 2.4a1.5 1.5 0 01-.34 1.76l-1.27 1.27a11.25 11.25 0 005.66 5.66l1.27-1.27a1.5 1.5 0 011.76-.34l2.4 1.2c.55.26.91.82.91 1.44v2.25A2.25 2.25 0 0119.5 21.75h-.75C9.84 21.75 2.25 14.16 2.25 4.5z"
          />
        </svg>

        Call Now
      </a>

      <p className="text-gray-300 mt-3 text-sm">
        हमारी टीम हमेशा आपकी मदद के लिए तैयार रहती है और सही सलाह देती है।
      </p>
    </div>
  </div>

</div>

    {/* Reel Style Video Grid */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">

      {[v1, v2, v3].map((video, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl shadow-lg aspect-[9/16]"
        >
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      ))}

    </div>

  </div>
</section>


{/* Premium Services Section */}
<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* Left Image */}
    <div className="relative">
      <img
        src={serviceImg}
        alt="services"
        className="rounded-xl shadow-lg w-full h-[400px] object-cover"
      />

      {/* Orange Overlay Box */}
      <div className="absolute -bottom-6 -left-6 bg-[#ff6b4a] text-white p-6 rounded-xl shadow-lg hidden md:block">
        <h3 className="text-xl font-bold">5+ साल का अनुभव</h3>
        <p className="text-sm mt-1">भरोसे के साथ सेवा</p>
      </div>
    </div>

    {/* Right Content */}
    <div>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
        हमारी <span className="text-[#ff6b4a]">सेवाएं</span>
      </h2>

      <p className="mt-4 text-gray-600">
        हम आपके निर्माण कार्य को आसान और तेज बनाने के लिए हर प्रकार की सुविधा प्रदान करते हैं।
      </p>

      {/* Points */}
      <div className="mt-8 space-y-6">

        {/* Item */}
        <div className="flex items-start gap-4">
          <div className="bg-[#ff6b4a]/10 p-3 rounded-lg">
            <svg className="w-6 h-6 text-[#ff6b4a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M3 7h13v10H3z" />
              <path d="M16 10h4l1 2v5h-5z" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="17" cy="18" r="2" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">घर तक डिलीवरी</h3>
            <p className="text-sm text-gray-600">आपका सामान सीधे साइट पर पहुंचाया जाता है।</p>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-4">
          <div className="bg-[#ff6b4a]/10 p-3 rounded-lg">
            <svg className="w-6 h-6 text-[#ff6b4a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M3 7l9-4 9 4-9 4-9-4z" />
              <path d="M3 7v10l9 4 9-4V7" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">थोक ऑर्डर</h3>
            <p className="text-sm text-gray-600">बड़े ऑर्डर पर बेहतर रेट और छूट।</p>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-4">
          <div className="bg-[#ff6b4a]/10 p-3 rounded-lg">
            <svg className="w-6 h-6 text-[#ff6b4a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14v7" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">कॉन्ट्रैक्टर सपोर्ट</h3>
            <p className="text-sm text-gray-600">ठेकेदारों के लिए विशेष सुविधा।</p>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-4">
          <div className="bg-[#ff6b4a]/10 p-3 rounded-lg">
            <svg className="w-6 h-6 text-[#ff6b4a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M13 3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">तेज सेवा</h3>
            <p className="text-sm text-gray-600">हर ऑर्डर समय पर पूरा किया जाता है।</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

{/* Products Section */}
<section className="py-16 bg-[#ff6b4a]">

  <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">

    {/* Heading */}
    <h2 className="text-2xl md:text-4xl font-bold text-white">
      हमारे <span className="text-[#0a2540]">प्रोडक्ट्स</span>
    </h2>

    <p className="mt-3 text-white/90">
      निर्माण के लिए सभी जरूरी सामग्री एक ही जगह उपलब्ध
    </p>

    {/* Cards */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {[
        { img: cement, title: "सीमेंट (Cement)", desc: "बेहतरीन क्वालिटी का सीमेंट उपलब्ध।" },
        { img: sand, title: "बालू (Sand)", desc: "निर्माण के लिए उच्च गुणवत्ता वाली बालू।" },
        { img: gitti, title: "गिट्टी (Gitti)", desc: "मजबूत निर्माण के लिए गिट्टी।" },
        { img: rod, title: "सरिया (TMT Rod)", desc: "टिकाऊ और मजबूत सरिया उपलब्ध।" },
        { img: pipes, title: "पाइप (Pipes)", desc: "PVC पाइप सभी साइज में।" },
        { img: paint, title: "पेंट (Paint)", desc: "घर के लिए सभी प्रकार के पेंट।" },
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
        >
          {/* Image */}
          <div className="h-44 overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-5 text-left">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#ff6b4a]">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>

    {/* Button */}
    <div className="mt-10">
      <a
        href="/products"
        className="inline-block bg-[#0a2540] text-white px-6 py-3 rounded-md font-medium hover:bg-black transition"
      >
        सभी प्रोडक्ट देखें →
      </a>
    </div>

  </div>
</section>
   

 


{/* Contact Section */}
<section className="py-20 bg-white">

  <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
      आज ही <span className="text-[#ff6b4a]">संपर्क करें</span>
    </h2>

    <p className="mt-4 text-gray-600">
      सही दाम और बेहतरीन क्वालिटी के लिए अभी कॉल करें या WhatsApp करें
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

      {/* Call Button */}
      <a
        href="tel:6204220757"
        className="flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-md font-medium hover:bg-[#162d6b] transition shadow"
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

        <span>
    Call Now <span className="font-semibold ml-1">6204220757,9199857500</span>
  </span>
      </a>

      {/* WhatsApp Button */}
      <a
  href="https://wa.me/6204220757"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 border border-green-600 text-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-600 hover:text-white transition group"
>
  {/* Animated Icon */}
  <span className="relative flex items-center justify-center">

    {/* Pulse Ring */}
    <span className="absolute inline-flex h-8 w-8 rounded-full bg-green-500 opacity-30 animate-ping"></span>

    {/* WhatsApp SVG */}
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

  </span>

  WhatsApp
</a>

    </div>

    {/* Address */}
    <div className="mt-12 flex justify-center">
  
  <div className="bg-[#f8fafc] border border-gray-200 rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition max-w-md w-full text-center">

    {/* Icon */}
    <div className="flex justify-center mb-3">
      <div className="bg-[#ff6b4a]/10 p-3 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
          className="w-6 h-6 text-[#ff6b4a]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"
          />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      </div>
    </div>

    {/* Title */}
    <h3 className="text-lg font-semibold text-gray-800">
      Aditya Enterprises
    </h3>

    {/* Address */}
    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
      Mahaveer Mandir, Pirari Pul, <br />
      Saran, Bihar - 841222
    </p>

  </div>

</div>

    {/* Map Button */}
    <div className="mt-6">
      <a
        href="https://www.google.com/maps?rlz=1C1ONGR_enIN1187IN1187&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5Mg4IAhBFGCcYOxiABBiKBTIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQgyMTYzajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KUVePkc2Te05MbDn6a4_Zk39&daddr=Mahaveer+Mandir,+Pirari+Near+Pirari+Pul,+Bihar+841222"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#1e3a8a] font-medium hover:underline"
      >
        {/* Location SVG */}
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
            d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"
          />
          <circle cx="12" cy="11" r="2.5" />
        </svg>

        Google Map पर देखें
      </a>
    </div>

  </div>
</section>


  {/*bannner*/}
<section className="relative py-24 bg-[#0a2540] overflow-hidden">

  {/* Animated Grid Background */}
  <div className="absolute inset-0 opacity-20">
    <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px] animate-[moveGrid_10s_linear_infinite]"></div>
  </div>

  {/* Glow Effect */}
  <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#ff6b4a] opacity-20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

  {/* Content */}
  <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center text-white">

    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
      आपके निर्माण का <br />
      <span className="text-[#ff6b4a]">सही साथी</span>
    </h2>

    <p className="mt-5 text-gray-300 max-w-2xl mx-auto">
      Aditya Enterprises के साथ पाए बेहतर क्वालिटी, सही दाम और तेज सेवा — आज ही संपर्क करें।
    </p>

    {/* CTA Buttons */}
    
  </div>

  {/* Animation Keyframes */}
  <style>
    {`
      @keyframes moveGrid {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 40px 40px;
        }
      }
    `}
  </style>

</section>

<section className="py-20 bg-[#f8fafc]">

  <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
      हमारा <span className="text-[#ff6b4a]">भरोसा</span>
    </h2>

    <p className="mt-4 text-gray-600">
      वर्षों से आपके क्षेत्र में विश्वास और गुणवत्ता के साथ सेवा
    </p>

    {/* Points */}
    <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">

      {/* Point 1 */}
      <div className="flex gap-4">
        <div className="bg-[#ff6b4a]/10 p-3 rounded-full">
          <svg className="w-6 h-6 text-[#ff6b4a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">भरोसेमंद सेवा</h3>
          <p className="text-sm text-gray-600 mt-1">
            हम अपने ग्राहकों को हमेशा सही और ईमानदार सेवा देते हैं।
          </p>
        </div>
      </div>

      {/* Point 2 */}
      <div className="flex gap-4">
        <div className="bg-[#ff6b4a]/10 p-3 rounded-full">
          <svg className="w-6 h-6 text-[#ff6b4a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M12 8c-3 0-5 2-5 4s2 4 5 4 5-2 5-4-2-4-5-4z" />
            <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">सही दाम</h3>
          <p className="text-sm text-gray-600 mt-1">
            बाजार के अनुसार उचित और किफायती दाम।
          </p>
        </div>
      </div>

      {/* Point 3 */}
      <div className="flex gap-4">
        <div className="bg-[#ff6b4a]/10 p-3 rounded-full">
          <svg className="w-6 h-6 text-[#ff6b4a]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M3 7h13v10H3z" />
            <path d="M16 10h4l1 2v5h-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">समय पर डिलीवरी</h3>
          <p className="text-sm text-gray-600 mt-1">
            आपका सामान समय पर आपके पास पहुंचेगा।
          </p>
        </div>
      </div>

    </div>

    {/* Bottom Line */}
    <div className="mt-12 bg-white border rounded-xl p-6 shadow-sm">
      <p className="text-gray-700 font-medium">
        “Aditya Enterprises — आपके निर्माण का भरोसेमंद साथी”
      </p>
    </div>

  </div>
</section>



    </>
  );
};

export default Hero;