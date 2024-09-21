import { useState, useEffect } from "react";
import Card from "./Card"; // import component card

export default function Products() {
  const url = "https://fakestoreapi.com/products"; // mengambil data api
  const [products, setProducts] = useState([]); // membuat state untuk menangani data

  // fungsi untuk mengambil data
  const getDataProducts = async () => {
    const response = await fetch(url); // setelah mengambil response dari api
    const dataProduct = await response.json(); // mengubah response menjadi json
    setProducts(dataProduct); // memasukan data dari api kedalam state
    console.log(dataProduct); // ngetes udh dpt apa belom
  };

  // fungsi untuk memanggil fungsi gedDataProducts saat komponen di render
  useEffect(() => {
    getDataProducts();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {/* melakukan maping arr products dengan alias product */}
        {products.map((product) => (
          <Card
            key={product.id} //  menangkap id dan id sebagai kunci
            title={product.title} // menangkap title
            description={product.description} // menangkap description
            image={product.image} // menangkap image
          />
        ))}
      </div>
    </>
  );
}
