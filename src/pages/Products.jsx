// src/pages/TopSellingProducts.jsx
import React from 'react';

const Products = () => {
  // Mock ma'lumotlar
  const products = [
    { id: 1, name: "iPhone 15 pro max", image: "📱", sales: 156, category: "Mobile", price: "$40.00", revenue: "$6,240.00" },
    { id: 2, name: "White Danim Tshit M Size", image: "👕", sales: 139, category: "Cloths", price: "$15.00", revenue: "$2,085" },
    { id: 3, name: "David Beckham classic Blue Perfume", image: "🧴", sales: 125, category: "Perfume", price: "$16.00", revenue: "$1167.00" },
    { id: 4, name: "Samsung i-20 series smart watch", image: "⌚", sales: 167, category: "Watch", price: "$26.00", revenue: "$2262.00" },
    { id: 5, name: "Nykka Red lipstick", image: "💄", sales: 110, category: "Beauty", price: "$31.00", revenue: "$3319.00" },
    { id: 6, name: "iPhone 15 pro max", image: "📱", sales: 168, category: "Cloths", price: "$20.00", revenue: "$2402.00" },
    { id: 7, name: "White Danim Tshit M...", image: "👕", sales: 165, category: "Perfume", price: "$25.00", revenue: "$2552.00" },
  ];

  return (
    <div className="max-w-[1550px] ml-95 bg-gray-50 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Top Selling Products</h1>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm flex items-center space-x-1 hover:bg-gray-50">
          <span>Jun 2023</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14" />
          </svg>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PRODUCTS
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SELLS
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CATEGORY
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                TOTAL REVENUE
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{product.image}</span>
                    <span className="text-sm font-medium text-gray-900">{product.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    product.category === 'Mobile' ? 'bg-blue-100 text-blue-800' :
                    product.category === 'Cloths' ? 'bg-pink-100 text-pink-800' :
                    product.category === 'Perfume' ? 'bg-purple-100 text-purple-800' :
                    product.category === 'Watch' ? 'bg-indigo-100 text-indigo-800' :
                    product.category === 'Beauty' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product.revenue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;