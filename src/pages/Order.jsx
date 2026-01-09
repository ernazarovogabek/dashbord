


// import { Mail, MessageCircle, Truck, Clock, CheckCircle, XCircle } from "lucide-react";

// export default function Order() {
//   return (
//     <div>
//     <div className="w-full bg-gray-50 p-6">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//         {/* ================= ORDER STATUS ================= */}
//         <div className="bg-white rounded-2xl border p-5">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="font-semibold text-gray-900">Order Status</h2>
//             <div className="flex gap-2">
//               <button className="px-3 py-1 border rounded-lg text-sm">
//                 All Categories
//               </button>
//               <button className="px-3 py-1 border rounded-lg text-sm">
//                 2023
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

//             {/* LEFT STATUS */}
//             <div className="grid grid-cols-2 gap-6 text-sm">

//               <div className="flex gap-3">
//                 <div className="w-9 h-9 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
//                   <MessageCircle size={18} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500">All</p>
//                   <p className="font-semibold text-lg">50</p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <div className="w-9 h-9 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
//                   <Mail size={18} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500">New</p>
//                   <p className="font-semibold text-lg">50</p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <div className="w-9 h-9 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
//                   <Clock size={18} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Pending</p>
//                   <p className="font-semibold text-lg">50</p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
//                   <Truck size={18} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Dispatched</p>
//                   <p className="font-semibold text-lg">50</p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <div className="w-9 h-9 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
//                   <CheckCircle size={18} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Delivered</p>
//                   <p className="font-semibold text-lg">123</p>
//                 </div>
//               </div>

//               <div className="flex gap-3">
//                 <div className="w-9 h-9 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
//                   <XCircle size={18} />
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Cancelled</p>
//                   <p className="font-semibold text-lg">50</p>
//                 </div>
//               </div>

//             </div>

//             {/* RIGHT DONUT */}
//             <div className="flex justify-center">
//               <div className="relative w-40 h-40">
//                 <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
//                   <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="10" fill="none" />
//                   <circle cx="50" cy="50" r="40" stroke="#6366f1" strokeWidth="10" fill="none"
//                     strokeDasharray="50 200" />
//                   <circle cx="50" cy="50" r="40" stroke="#22c55e" strokeWidth="10" fill="none"
//                     strokeDasharray="50 200" strokeDashoffset="-50" />
//                   <circle cx="50" cy="50" r="40" stroke="#facc15" strokeWidth="10" fill="none"
//                     strokeDasharray="50 200" strokeDashoffset="-100" />
//                   <circle cx="50" cy="50" r="40" stroke="#fb923c" strokeWidth="10" fill="none"
//                     strokeDasharray="50 200" strokeDashoffset="-150" />
//                 </svg>

//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <span className="text-2xl font-bold">250</span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* ================= RECENT ACTIVITIES ================= */}
//          <div className="bg-white rounded-2xl border p-5">
// //           <div className="flex items-center justify-between mb-5">
// //             <h2 className="font-semibold">Recent Activities</h2>
// //             <div className="flex border rounded-lg overflow-hidden">
// //               <button className="px-4 py-1 text-sm bg-gray-100">Message</button>
// //               <button className="px-4 py-1 text-sm">Email</button>
// //             </div>
// //           </div>

// //           <div className="space-y-5 text-sm">

// //             <div>
// //               <p className="text-gray-400 mb-2">TODAY</p>

// //               <div className="flex gap-3 mb-3">
// //                 <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">
// //                   C
// //                 </div>
// //                 <p>
// //                   <span className="text-indigo-600 font-medium">Christian Wood</span>{" "}
// //                   Sent Message to{" "}
// //                   <span className="text-indigo-600">Nikita Houston</span>
// //                   <span className="text-gray-400"> · 1 min ago</span>
// //                 </p>
// //               </div>

// //               <div className="flex gap-3 mb-3">
// //                 <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
// //                   N
// //                 </div>
// //                 <p>
// //                   <span className="text-indigo-600 font-medium">Nikita Houston</span>{" "}
// //                   Replay your message "Hello"
// //                   <span className="text-gray-400"> · 1 min ago</span>
// //                 </p>
// //               </div>
// //             </div>

// //             <div>
// //               <p className="text-gray-400 mb-2">YESTERDAY</p>

// //               <div className="flex gap-3">
// //                 <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">
// //                   C
// //                 </div>
// //                 <p>
// //                   <span className="text-indigo-600 font-medium">Christian Wood</span>{" "}
// //                   Accept Order from Amazon
// //                   <span className="text-gray-400"> · 12:30PM</span>
// //                 </p>
// //               </div>
// //             </div>

// //           </div>
// //         </div>

//       </div>
//     </div>
 








//     </div>
//   )
// }

// export default Order












import { Mail, MessageCircle, Truck, Clock, CheckCircle, XCircle } from "lucide-react";

export default function Order() {
  return (
    <div className="max-w-[1550px] ml-95 bg-gray-50 py-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ================= ORDER STATUS ================= */}
        <div className="bg-white rounded-2xl border p-5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-gray-900">Order Status</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded-lg text-sm">
                All Categories
              </button>
              <button className="px-3 py-1 border rounded-lg text-sm">
                2023
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            <div className="grid grid-cols-2 gap-6 text-sm">

              <div className="flex gap-3">
                <div className="w-9 h-9 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-gray-500">All</p>
                  <p className="font-semibold text-lg">50</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-gray-500">New</p>
                  <p className="font-semibold text-lg">50</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-gray-500">Pending</p>
                  <p className="font-semibold text-lg">50</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <Truck size={18} />
                </div>
                <div>
                  <p className="text-gray-500">Dispatched</p>
                  <p className="font-semibold text-lg">50</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle size={18} />
                </div>
                <div>
                  <p className="text-gray-500">Delivered</p>
                  <p className="font-semibold text-lg">123</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-9 h-9 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                  <XCircle size={18} />
                </div>
                <div>
                  <p className="text-gray-500">Cancelled</p>
                  <p className="font-semibold text-lg">50</p>
                </div>
              </div>

            </div>

            {/* DONUT */}
            <div className="flex justify-center">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                  <circle cx="50" cy="50" r="40" stroke="#6366f1" strokeWidth="10" fill="none" strokeDasharray="50 200" />
                  <circle cx="50" cy="50" r="40" stroke="#22c55e" strokeWidth="10" fill="none" strokeDasharray="50 200" strokeDashoffset="-50" />
                  <circle cx="50" cy="50" r="40" stroke="#facc15" strokeWidth="10" fill="none" strokeDasharray="50 200" strokeDashoffset="-100" />
                  <circle cx="50" cy="50" r="40" stroke="#fb923c" strokeWidth="10" fill="none" strokeDasharray="50 200" strokeDashoffset="-150" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">250</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RECENT ACTIVITIES ================= */}
        {/* <div className="bg-white rounded-2xl border p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold">Recent Activities</h2>
            <div className="flex border rounded-lg overflow-hidden">
              <button className="px-4 py-1 text-sm bg-gray-100">Message</button>
              <button className="px-4 py-1 text-sm">Email</button>
            </div>
          </div>

          <div className="space-y-5 text-sm">
            <p className="text-gray-400">TODAY</p>
          </div>
        </div> */}



<div className="bg-white rounded-2xl border p-5">
           <div className="flex items-center justify-between mb-5">
             <h2 className="font-semibold">Recent Activities</h2>
             <div className="flex border rounded-lg overflow-hidden">
               <button className="px-4 py-1 text-sm bg-gray-100">Message</button>
              <button className="px-4 py-1 text-sm">Email</button>
             </div>
         </div>

           <div className="space-y-5 text-sm">

             <div>
               <p className="text-gray-400 mb-2">TODAY</p>

               <div className="flex gap-3 mb-3">
                 <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">
                   C
                 </div>
                 <p>
                   <span className="text-indigo-600 font-medium">Christian Wood</span>{" "}
                   Sent Message to{" "}
                   <span className="text-indigo-600">Nikita Houston</span>
                   <span className="text-gray-400"> · 1 min ago</span>
                 </p>
               </div>

               <div className="flex gap-3 mb-3">
                 <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                   N
                 </div>
                 <p>
                   <span className="text-indigo-600 font-medium">Nikita Houston</span>{" "}
                   Replay your message "Hello"
                   <span className="text-gray-400"> · 1 min ago</span>
                 </p>
               </div>
            </div>

             <div>
               <p className="text-gray-400 mb-2">YESTERDAY</p>

               <div className="flex gap-3">
                 <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">
                   C
                 </div>
                 <p>
                   <span className="text-indigo-600 font-medium">Christian Wood</span>{" "}
                 Accept Order from Amazon
                   <span className="text-gray-400"> · 12:30PM</span>
                </p>
               </div>
            </div>

           </div>
        </div>
      </div>
    </div>
  );
}
