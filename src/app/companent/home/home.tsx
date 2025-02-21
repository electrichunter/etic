"use client";
import "./home.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Product from "../ProductList/ProductList";

type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock: number;
};

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  // API'den ürünleri çek
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");  // DOĞRU YOL
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Ürünler çekilirken hata oluştu:", error);
      }
    };
    fetchProducts();
  }, []);

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

     {/* Popüler Ürünler */}
<section id="products" className="py-12 bg-gray-200">
  <h2 className="text-3xl text-center font-bold mb-8">Popüler Ürünler</h2>
   
  
  <Product   />
 

 
</section>

    </div>
  );
};

export default Home;
