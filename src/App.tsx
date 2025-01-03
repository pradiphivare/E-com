import React from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'Experience crystal-clear sound with our premium noise-cancelling headphones.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    price: 399.99,
    description: 'Stay connected with style. Features health tracking and notifications.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    price: 199.99,
    description: 'Protect your eyes with these stylish UV-blocking sunglasses.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
    category: 'Fashion'
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <section className="mb-16">
          <div className="relative h-[500px] rounded-2xl overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-transparent flex items-center">
              <div className="max-w-xl ml-12 text-white">
                <h1 className="text-5xl font-bold mb-4">Summer Collection</h1>
                <p className="text-xl mb-8">Discover our latest arrivals and trending products.</p>
                <button className="bg-white text-purple-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;