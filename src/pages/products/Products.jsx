import { useEffect, useState } from "react";

import axiosInstance from "../../../config/axiosInsatance";
import Card from "../../components/card/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axiosInstance.get("/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <Card
          items={products}
          renderContent={(product) => (
            <>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-contain mb-2"
              />
              <h3 className="font-semibold text-sm">{product.title}</h3>
            </>
          )}
        />
      ) : (
        <p className="text-center text-gray-500">No products available</p>
      )}
    </div>
  );
};
export default Products;
