import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const answer = await fetch('https://fakestoreapi.com/products');
        const data = await answer.json();
        setProducts(data);
      } catch (error) {
        console.error('error:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Productst</h2>
      <div>
        {products.map((product:any) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
