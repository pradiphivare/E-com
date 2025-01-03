import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export function Navbar() {
  const { itemCount } = useCart();

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 mr-4 cursor-pointer hover:text-gray-900" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              LuxeCart
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}