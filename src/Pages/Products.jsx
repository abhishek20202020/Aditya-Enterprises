import productBg from "../assets/product.png";
import { useState } from "react";
const ProductsHero = () => {

   const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Cement",
    "Sand",
    "Gitti",
    "Rod",
    "Pipes",
    "Paint",
    "Cylinder",
  ];

  const products = [
  // Cement
  { name: "UltraTech Cement", category: "Cement", img: "/img/cement1.jpg" },
  { name: "ACC Cement", category: "Cement", img: "/img/cement1.jpg" },
  { name: "Ambuja Cement", category: "Cement", img: "/img/cement1.jpg" },

  // Sand
  { name: "River Sand", category: "Sand", img: "/img/sand1.jpg" },
  { name: "Fine Sand", category: "Sand", img: "/img/sand2.jpg" },

  // Gitti
  { name: "20mm Gitti", category: "Gitti", img: "/img/gitti1.jpg" },
  { name: "10mm Gitti", category: "Gitti", img: "/img/gitti2.jpg" },

  // Rod
  { name: "TMT Rod 8mm", category: "Rod", img: "/img/rod1.jpg" },
  { name: "TMT Rod 10mm", category: "Rod", img: "/img/rod2.jpg" },
  { name: "TMT Rod 12mm", category: "Rod", img: "/img/rod3.jpg" },

  // Pipes
  { name: "PVC Pipe", category: "Pipes", img: "/img/pipe1.jpg" },
  { name: "Drain Pipe", category: "Pipes", img: "/img/pipe2.jpg" },

  // Paint
  { name: "Wall Paint", category: "Paint", img: "/img/paint1.jpg" },
  { name: "Primer", category: "Paint", img: "/img/paint2.jpg" },

  // Cylinder
  { name: "Gas Cylinder", category: "Cylinder", img: "/img/cylinder.jpg" },
];

  const filtered = products.filter((p) =>
    (active === "All" || p.category === active) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background Image */}
      <img
        src={productBg}
        alt="products"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 fade-up">

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Our <span className="text-[#ff6b4a]">Products</span>
        </h1>

        <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          सीमेंट, बालू, गिट्टी, सरिया, पाइप्स और पेंट — सभी निर्माण सामग्री एक ही जगह
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
          <a
            href="/contact"
            className="flex items-center gap-2 border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            {/* Message / Contact SVG */}
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
                d="M2.25 12.75v-1.5A2.25 2.25 0 014.5 9h15a2.25 2.25 0 012.25 2.25v1.5m-19.5 0v5.25A2.25 2.25 0 004.5 20.25h15a2.25 2.25 0 002.25-2.25v-5.25m-19.5 0h19.5"
              />
            </svg>

            Contact Us
          </a>

        </div>

        {/* Breadcrumb */}
        <p className="mt-5 text-sm text-gray-300">
          Home / Products
        </p>

      </div>

    </section>

<section className="py-16 bg-gray-50">

  <div className="max-w-7xl mx-auto px-4 md:px-8">

    {/* Top */}
    <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        {active} Products
      </h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:border-[#1e3a8a]"
      />

    </div>

    <div className="grid md:grid-cols-4 gap-8">

      {/* Sidebar */}
      <div className="bg-white p-5 rounded-xl shadow-sm">

        <h3 className="font-semibold text-lg mb-4 text-gray-800">
          Categories
        </h3>

        {/* Categories */}
        <ul className="space-y-2">
          {categories.map((cat, i) => (
            <li
              key={i}
              onClick={() => setActive(cat)}
              className={`cursor-pointer px-3 py-2 rounded-md transition ${
                active === cat
                  ? "bg-[#1e3a8a] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Image Preview */}
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          Popular Products
        </h4>

        <div className="grid grid-cols-3 gap-2">

          <img src="/img/cement1.jpg" className="h-16 object-cover rounded-md cursor-pointer hover:scale-105 transition" onClick={() => setActive("Cement")} />
          <img src="/img/rod1.jpg" className="h-16 object-cover rounded-md cursor-pointer hover:scale-105 transition" onClick={() => setActive("Rod")} />
          <img src="/img/pipe1.jpg" className="h-16 object-cover rounded-md cursor-pointer hover:scale-105 transition" onClick={() => setActive("Pipes")} />
          <img src="/img/paint1.jpg" className="h-16 object-cover rounded-md cursor-pointer hover:scale-105 transition" onClick={() => setActive("Paint")} />
          <img src="/img/gitti1.jpg" className="h-16 object-cover rounded-md cursor-pointer hover:scale-105 transition" onClick={() => setActive("Gitti")} />
          <img src="/img/cylinder.jpg" className="h-16 object-cover rounded-md cursor-pointer hover:scale-105 transition" onClick={() => setActive("Cylinder")} />

        </div>

      </div>

      {/* Products Grid */}
      <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">

        {filtered.length > 0 ? (
          filtered.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition p-3 group relative overflow-hidden"
            >

              {/* Badge */}
              {i % 3 === 0 && (
                <span className="absolute top-2 left-2 bg-[#ff6b4a] text-white text-xs px-2 py-1 rounded">
                  Best Seller
                </span>
              )}

              {/* Image */}
              <div className="overflow-hidden rounded-md">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Info */}
              <h3 className="mt-3 font-semibold text-gray-800">
                {item.name}
              </h3>

              <p className="text-xs text-gray-500">
                High quality material
              </p>

              {/* Buttons */}
              <div className="mt-3 flex gap-2">

                {/* Call */}
                <a
                  href="tel:6204220757"
                  className="flex-1 flex items-center justify-center gap-1 text-xs bg-[#1e3a8a] text-white py-2 rounded-md hover:bg-[#162d6b] transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M2.25 4.5c0-1.24 1.01-2.25 2.25-2.25h2.25c.62 0 1.18.36 1.44.91l1.2 2.4a1.5 1.5 0 01-.34 1.76l-1.27 1.27a11.25 11.25 0 005.66 5.66l1.27-1.27a1.5 1.5 0 011.76-.34l2.4 1.2c.55.26.91.82.91 1.44v2.25A2.25 2.25 0 0119.5 21.75h-.75C9.84 21.75 2.25 14.16 2.25 4.5z"/>
                  </svg>
                  Call
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/916204220757?text=Hi, I want ${item.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 text-xs border border-green-600 text-green-600 py-2 rounded-md hover:bg-green-600 hover:text-white transition"
                >
                  <svg viewBox="0 0 32 32" className="w-4 h-4 fill-current">
                    <path d="M16.001 2.667c-7.36..." />
                  </svg>
                  WhatsApp
                </a>

              </div>

            </div>
          ))
        ) : (
          <p className="text-gray-500">No products found</p>
        )}

      </div>

    </div>

  </div>

</section>
    </>
  );
};

export default ProductsHero;