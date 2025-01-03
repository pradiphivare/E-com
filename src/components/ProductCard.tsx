import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, items } = useCart();
  const cartItem = items.find(item => item.id === product.id);

  const handleAddToCart = () => {
    if (cartItem?.quantity >= 99) {
      alert('Maximum quantity reached for this item');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-purple-600">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartItem ? `Add More (${cartItem.quantity})` : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}