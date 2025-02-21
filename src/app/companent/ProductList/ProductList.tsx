"use client";

import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
};

const PopularProducts = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    // En güncel 4 ürünü getirme
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        // Benzersiz ürünleri filtrele
        const uniqueProducts = data.filter(
          (item: ProductProps, index: number, self: ProductProps[]) =>
            index === self.findIndex((t) => t.id === item.id)
        );
        setProducts(uniqueProducts);
      });
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Popüler Ürünler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
