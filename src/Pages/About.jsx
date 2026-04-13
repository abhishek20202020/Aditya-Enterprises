import aboutBg from "../assets/about.png"; // apni image lagana

const AboutHero = () => {
  return (
    <>
    <section className="relative h-[30vh] md:h-[53vh] flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background Image */}
      <img
        src={aboutBg}
        alt="about"
        className="absolute w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4">

        <h1 className="text-3xl md:text-5xl font-bold">
        About Us
        </h1>

        <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          Aditya Enterprises – आपके निर्माण का भरोसेमंद साथी, वर्षों से गुणवत्ता और विश्वास के साथ सेवा में।
        </p>

        {/* Breadcrumb */}
        <p className="mt-4 text-sm text-gray-300">
          Home / About Us
        </p>

      </div>

    </section>
    </>
  );
};

export default AboutHero;