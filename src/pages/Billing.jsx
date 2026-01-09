// src/pages/Billing.jsx
import React from 'react';

const Billing = () => {
  // Mock data for Orders
  const orders = [
    { id: "275936", products: [{ name: "iPhone 15 pro max", img: "📱" }], channel: "ebay", customer: "Gabriella...", total: "$400.00" },
    { id: "415368", products: [{ name: "White Danim Tshit M...", img: "👕" }], channel: "Walmart", customer: "Harris Sa...", total: "$151.00" },
    { id: "275063", products: [{ name: "David Beckham classic...", img: "👟" }], channel: "facebook", customer: "Lilia Ponce", total: "$167.00" },
    { id: "274778", products: [{ name: "Samsung i-20 series sm...", img: "📱" }], channel: "amazon", customer: "Rehan Ch...", total: "$262.00" },
    { id: "638032", products: [{ name: "Nykka Red lipstick", img: "💄" }], channel: "Etsy", customer: "Maxim Br...", total: "$319.00" },
  ];

  // Mock data for Transactions
  const transactions = [
    { id: "#123-456-7890", products: [{ name: "iPhone 15 pro max", img: "📱" }], channel: "ebay", customer: "Gabriella...", total: "$40" },
    { id: "#123-456-7890", products: [{ name: "White Danim Tshit M Size", img: "👕" }], channel: "Walmart", customer: "Harris Sa...", total: "$15" },
    { id: "#123-456-7890", products: [{ name: "David Beckham classic Blue...", img: "👟" }], channel: "facebook", customer: "Lilia Ponce", total: "$16" },
    { id: "#123-456-7890", products: [{ name: "Samsung i-20 series smart...", img: "📱" }], channel: "amazon", customer: "Rehan Ch...", total: "$26" },
    { id: "#123-456-7890", products: [{ name: "Nykka Red lipstick", img: "💄" }], channel: "Etsy", customer: "Maxim Br...", total: "$31" },
  ];

  return (
    <div className="max-w-[1550px] ml-95 bg-white py-4">
    

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
          </div>
          <div className="px-6 py-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER ID</th>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PRODUCTS</th>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CHANNEL</th>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER</th>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-900">{order.id}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        {order.products.map((p, i) => (
                          <div key={i} className="flex items-center space-x-1">
                            <span className="text-lg">{p.img}</span>
                            <span className="text-sm text-gray-600">x{p.quantity || 1}</span>
                            <span className="text-sm text-gray-800">{p.name}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        order.channel === 'ebay' ? 'bg-blue-100 text-blue-800' :
                        order.channel === 'Walmart' ? 'bg-green-100 text-green-800' :
                        order.channel === 'facebook' ? 'bg-blue-200 text-blue-800' :
                        order.channel === 'amazon' ? 'bg-orange-100 text-orange-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {order.channel}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(order.customer)}&background=random`}
                          alt={order.customer}
                        />
                        <span className="text-sm text-gray-800">{order.customer}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600 text-sm hover:underline">View 256 more orders →</a>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
          </div>
          <div className="px-6 py-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TRANSACTION ID</th>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PRODUCTS</th>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CHANNEL</th>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER</th>
                  <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((txn, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-900">{txn.id}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        {txn.products.map((p, i) => (
                          <div key={i} className="flex items-center space-x-1">
                            <span className="text-lg">{p.img}</span>
                            <span className="text-sm text-gray-600">x{p.quantity || 1}</span>
                            <span className="text-sm text-gray-800">{p.name}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        txn.channel === 'ebay' ? 'bg-blue-100 text-blue-800' :
                        txn.channel === 'Walmart' ? 'bg-green-100 text-green-800' :
                        txn.channel === 'facebook' ? 'bg-blue-200 text-blue-800' :
                        txn.channel === 'amazon' ? 'bg-orange-100 text-orange-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {txn.channel}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(txn.customer)}&background=random`}
                          alt={txn.customer}
                        />
                        <span className="text-sm text-gray-800">{txn.customer}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{txn.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600 text-sm hover:underline">View 256 more transactions →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;