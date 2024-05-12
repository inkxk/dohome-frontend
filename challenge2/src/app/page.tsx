"use client";
import { useState, useEffect } from "react";
import Card from "@/components/card";
import { Product } from "@/types/Product"

export default function Page() {
  const [data, setData] = useState<Array<Product>>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="grid grid-cols-4 gap-8 px-36 py-24 mx-auto">
      {data.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
}
