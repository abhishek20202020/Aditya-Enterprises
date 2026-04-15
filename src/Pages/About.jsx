import aboutBg from "../assets/product.png"; // apni image lagana
import owner from "../assets/person1.png";
import coOwner from "../assets/person2.png";
import storyImg from "../assets/service.png"; // apni real shop image lagana

import g1 from "../assets/g2.png";
import g2 from "../assets/g12.jpg";
import g3 from "../assets/g7.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";
import g7 from "../assets/g10.png";
import g8 from "../assets/g9.png";

const AboutHero = () => {
  return (
    <>
 <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">

  {/* Background Image */}
  <img
    src={aboutBg}
    alt="about"
    className="absolute w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 px-4">

    {/* Heading */}
    <h1 className="text-3xl md:text-5xl font-bold fade-up">
      About <span className="text-[#ff6b4a]">us</span>
    </h1>

    {/* Subtitle */}
    <p className="mt-4 text-gray-200 max-w-xl mx-auto fade-up delay-1">
      Aditya Enterprises – आपके निर्माण का भरोसेमंद साथी, वर्षों से गुणवत्ता और विश्वास के साथ सेवा में।
    </p>

    {/* Breadcrumb */}
    <p className="mt-4 text-sm text-gray-300 fade-up delay-2">
      Home / About Us
    </p>

  </div>

</section>

<section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            हमारी <span className="text-[#ff6b4a]">टीम</span>
          </h2>
          <p className="mt-3 text-gray-600">
            आपके भरोसे के साथ काम करने वाले लोग
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Owner */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">

            <img
              src={owner}
              alt="owner"
              className="w-36 h-36 rounded-full object-cover border-4 border-[#ff6b4a]"
            />

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                प्रोपराइटर - Shailesh Kumar Singh
              </h3>

              {/* Call Button */}
              <a
                href="tel:6204220757"
                className="mt-2 inline-flex items-center gap-2 bg-[#ff6b4a] text-white px-4 py-1.5 rounded-md text-sm hover:bg-[#e55a3c] transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M2.25 4.5c0-1.24 1.01-2.25 2.25-2.25h2.25c.62 0 1.18.36 1.44.91l1.2 2.4a1.5 1.5 0 01-.34 1.76l-1.27 1.27a11.25 11.25 0 005.66 5.66l1.27-1.27a1.5 1.5 0 011.76-.34l2.4 1.2c.55.26.91.82.91 1.44v2.25A2.25 2.25 0 0119.5 21.75h-.75C9.84 21.75 2.25 14.16 2.25 4.5z"/>
                </svg>
                Call Now
              </a>

              <p className="text-gray-600 mt-3 text-sm">
                हम कई वर्षों से निर्माण सामग्री उपलब्ध करा रहे हैं और हमारा लक्ष्य है सही दाम और अच्छी गुणवत्ता देना।
              </p>
            </div>
          </div>

          {/* Co-Owner */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">

            <img
              src={coOwner}
              alt="co-owner"
              className="w-36 h-36 rounded-full object-cover border-4 border-[#0a2540]"
            />

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                को-प्रोपराइटर-Aditya Raj
              </h3>

              {/* Call Button */}
              <a
                href="tel:9199857500"
                className="mt-2 inline-flex items-center gap-2 bg-[#0a2540] text-white px-4 py-1.5 rounded-md text-sm hover:bg-black transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M2.25 4.5c0-1.24 1.01-2.25 2.25-2.25h2.25c.62 0 1.18.36 1.44.91l1.2 2.4a1.5 1.5 0 01-.34 1.76l-1.27 1.27a11.25 11.25 0 005.66 5.66l1.27-1.27a1.5 1.5 0 011.76-.34l2.4 1.2c.55.26.91.82.91 1.44v2.25A2.25 2.25 0 0119.5 21.75h-.75C9.84 21.75 2.25 14.16 2.25 4.5z"/>
                </svg>
                Call Now
              </a>

              <p className="text-gray-600 mt-3 text-sm">
                हमारी टीम हमेशा ग्राहकों की मदद के लिए तैयार रहती है और उन्हें सही सलाह देती है।
              </p>
            </div>
          </div>

        </div>

      </div>
</section>



<section className="py-20 bg-[#ff6b4a] text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            हमारी <span className="text-[#0a2540]">कहानी</span>
          </h2>

          <p className="mt-6 text-white/90 leading-relaxed">
            Aditya Enterprises की शुरुआत एक छोटे से व्यापार के रूप में हुई थी।
            हमारा उद्देश्य हमेशा से अपने ग्राहकों को सही दाम और बेहतरीन गुणवत्ता देना रहा है।
          </p>

          <p className="mt-4 text-white/90 leading-relaxed">
            आज हम अपने क्षेत्र में एक भरोसेमंद नाम बन चुके हैं और लगातार अपने ग्राहकों की जरूरतों को पूरा कर रहे हैं।
          </p>

          {/* Highlight Box */}
          <div className="mt-6 bg-[#0a2540] p-4 rounded-lg inline-block">
            <p className="text-sm font-medium">
              “हमारा लक्ष्य है – हर ग्राहक को संतुष्ट करना”
            </p>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative">

          <img
            src={storyImg}
            alt="story"
            className="rounded-xl shadow-lg w-full h-[350px] object-cover"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white text-[#0a2540] px-5 py-3 rounded-lg shadow-md hidden md:block">
            <h3 className="font-bold text-lg">5+ साल अनुभव</h3>
          </div>

        </div>

      </div>

</section>



<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-4 md:px-8">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
        हमारी <span className="text-[#1e3a8a]">गैलरी</span>
      </h2>
      <p className="mt-3 text-gray-600">
        हमारे काम और प्रोडक्ट्स की झलक
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {[
        { img: g1, title: "सीमेंट स्टॉक" },
        { img: g2, title: "बालू और गिट्टी" }, // ACTIVE
        { img: g3, title: "सरिया" },
        { img: g4, title: "पाइप्स" },
        { img: g5, title: "पेंट सेक्शन" },
        { img: g6, title: "हमारी दुकान" },
        { img: g7, title: "सिलेंडर" },
        { img: g8, title: "दुकान फ्रंट" },

        // 🔥 THIS WILL FILL EMPTY SPACE
        { type: "text" }

      ].map((item, index) => {

        // 🔥 TEXT TILE (GAP FILL)
        if (item.type === "text") {
          return (
            <div
              key={index}
              className="col-span-2 md:col-span-2 flex items-center justify-center bg-[#0a2540] text-white rounded-xl p-6 md:p-10"
            >
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold">
                  Aditya Enterprises
                </h3>

                <p className="text-sm mt-2 text-white/80">
                  सीमेंट, बालू, गिट्टी, सरिया, पाइप्स और पेंट — सब कुछ एक ही जगह
                </p>

                <p className="text-xs mt-3 text-white/70">
                  भरोसेमंद सेवा • सही दाम • समय पर डिलीवरी
                </p>

                <a
                  href="tel:6204220757"
                  className="inline-block mt-4 bg-[#ff6b4a] px-4 py-2 rounded-md text-sm hover:bg-[#e55a3c] transition"
                >
                  Contact Now
                </a>
              </div>
            </div>
          );
        }

        // 🖼️ NORMAL IMAGE CARD
        return (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition duration-300 ${
              index === 0 || index === 4 ? "md:row-span-2" : ""
            }`}
          >

            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div
              className={`absolute inset-0 flex items-center justify-center transition ${
                index === 1
                  ? "bg-[#1e3a8a]/70 opacity-100"
                  : "bg-[#1e3a8a]/70 opacity-0 group-hover:opacity-100"
              }`}
            >
              <p className="text-white font-semibold text-lg text-center px-2">
                {item.title}
              </p>
            </div>

          </div>
        );
      })}

    </div>

  </div>
</section>


<section className="relative py-24 bg-[#0a2540] text-white overflow-hidden">

  {/* Glow Effect */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-[#ff6b4a] opacity-20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

  <div className="relative max-w-5xl mx-auto px-4 text-center">

    {/* Big Heading */}
    <h2 className="text-3xl md:text-5xl font-bold leading-tight animate-fadeInUp">
      आपके सपनों के निर्माण में <br />
      <span className="text-[#ff6b4a]">
        हम आपके साथ हैं
      </span>
    </h2>

    {/* Sub Text */}
    <p className="mt-6 text-gray-300 max-w-2xl mx-auto animate-fadeInUp delay-200">
      Aditya Enterprises के साथ पाए बेहतरीन गुणवत्ता, सही दाम और भरोसेमंद सेवा।
    </p>

    {/* CTA */}
    <a
      href="tel:6204220757"
      className="inline-block mt-8 bg-[#ff6b4a] px-6 py-3 rounded-md font-medium hover:bg-[#e55a3c] transition animate-fadeInUp delay-300"
    >
      अभी संपर्क करें
    </a>

  </div>

  {/* Animation CSS */}
  <style>
    {`
      .animate-fadeInUp {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 1s ease forwards;
      }

      .animate-fadeInUp.delay-200 {
        animation-delay: 0.2s;
      }

      .animate-fadeInUp.delay-300 {
        animation-delay: 0.4s;
      }

      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>

</section>
  


<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* Left Big Text */}
    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
        क्यों <span className="text-[#1e3a8a]">Aditya Enterprises</span>?
      </h2>

      <p className="mt-5 text-gray-600 leading-relaxed">
        हम वर्षों से अपने क्षेत्र में ग्राहकों को बेहतरीन निर्माण सामग्री उपलब्ध करा रहे हैं।
        हमारा लक्ष्य हमेशा से गुणवत्ता और भरोसा बनाए रखना है।
      </p>

      {/* Highlight */}
      <div className="mt-6 border-l-4 border-[#ff6b4a] pl-4">
        <p className="text-gray-700 font-medium">
          “सही दाम, सही सामान — यही हमारी पहचान”
        </p>
      </div>
    </div>

    {/* Right Points */}
    <div className="space-y-6">

      {/* Item */}
      <div className="flex gap-4 items-start">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e3a8a] text-white font-bold">
          01
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">भरोसेमंद सेवा</h3>
          <p className="text-sm text-gray-600 mt-1">
            हम अपने ग्राहकों को हमेशा सही और ईमानदार सेवा देते हैं।
          </p>
        </div>
      </div>

      {/* Item */}
      <div className="flex gap-4 items-start">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e3a8a] text-white font-bold">
          02
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">सही दाम</h3>
          <p className="text-sm text-gray-600 mt-1">
            बाजार के अनुसार उचित और किफायती दाम।
          </p>
        </div>
      </div>

      {/* Item */}
      <div className="flex gap-4 items-start">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e3a8a] text-white font-bold">
          03
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">समय पर डिलीवरी</h3>
          <p className="text-sm text-gray-600 mt-1">
            आपका सामान समय पर आपके पास पहुंचेगा।
          </p>
        </div>
      </div>

    </div>

  </div>
  

</section>


    </>
  );
};

export default AboutHero;