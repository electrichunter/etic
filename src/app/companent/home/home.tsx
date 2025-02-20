"use client";
import "./home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl text-white font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Alışverişe Hoş Geldiniz!
          </motion.h1>
          <motion.p
            className="text-gray-200 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            En popüler ürünler ve harika fırsatlar sizi bekliyor.
          </motion.p>
          <motion.a
            href="#products"
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Alışverişe Başla
          </motion.a>
        </div>
      </section>

      {/* Kategori Kartları */}
      <section className="py-12 px-4">
        <h2 className="text-3xl text-center font-bold mb-8">Kategoriler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Elektronik", "Giyim", "Ev & Yaşam"].map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-48 bg-gray-300 flex justify-center items-center">
                <span className="text-2xl font-bold text-gray-600">{category}</span>
              </div>
              <div className="p-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                  İncele
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popüler Ürünler */}
      <section id="products" className="py-12 bg-gray-200">
        <h2 className="text-3xl text-center font-bold mb-8">Popüler Ürünler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
            <motion.div
              key={product}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="h-56 bg-gray-300 flex justify-center items-center">
                <span className="text-xl font-bold text-gray-600">Ürün {product}</span>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-800">Ürün Adı {product}</p>
                <p className="text-gray-600">₺{product * 100}</p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
                  Sepete Ekle
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
