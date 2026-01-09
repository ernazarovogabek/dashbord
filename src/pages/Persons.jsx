export default function Persons() {
  return (
    <div className="max-w-[1550px] ml-95 bg-gray-50 py-4">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* ================= LEFT : REVENUE ================= */}
        <div className="bg-white rounded-2xl border p-5">
          {/* TOP */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2 text-sm">
              <button className="px-4 py-1 rounded-lg border bg-gray-100">
                Revenue
              </button>
              <button className="px-4 py-1 rounded-lg border">
                Orders
              </button>
              <button className="px-4 py-1 rounded-lg border">
                Customers
              </button>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded-lg text-sm">
                All Categories
              </button>
              <button className="px-3 py-1 border rounded-lg text-sm">
                Jun 2023
              </button>
            </div>
          </div>

          {/* TITLE */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-gray-900">Revenue</h2>
            <p className="text-sm text-gray-500">
              Total Revenue:{" "}
              <span className="font-semibold text-gray-900">$89,235.89</span>
            </p>
          </div>

          {/* CHART */}
          <div className="h-72 flex items-end gap-5 px-2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[180px]"></div>
              <span className="text-xs text-gray-500">Jan</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[260px]"></div>
              <span className="text-xs text-gray-500">Feb</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[220px]"></div>
              <span className="text-xs text-gray-500">Mar</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[80px]"></div>
              <span className="text-xs text-gray-500">Apr</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[140px]"></div>
              <span className="text-xs text-gray-500">May</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[240px]"></div>
              <span className="text-xs text-gray-500">Jun</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[150px]"></div>
              <span className="text-xs text-gray-500">Jul</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[210px]"></div>
              <span className="text-xs text-gray-500">Aug</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[150px]"></div>
              <span className="text-xs text-gray-500">Sep</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[230px]"></div>
              <span className="text-xs text-gray-500">Oct</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[160px]"></div>
              <span className="text-xs text-gray-500">Nov</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-6 bg-indigo-500 rounded-md h-[260px]"></div>
              <span className="text-xs text-gray-500">Dec</span>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">• 2023</p>
        </div>

        {/* ================= RIGHT : PERSONS ================= */}
        <div className="bg-white rounded-2xl border p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Persons</h2>
            <button className="px-3 py-1 border rounded-lg text-sm">
              Jun 2023
            </button>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="text-left py-2">NAME</th>
                  <th className="text-left py-2">EMAIL</th>
                  <th className="text-left py-2">CONTACT NUMBER</th>
                  <th className="text-left py-2">ROLE</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="py-3">Luisa Winters</td>
                  <td>Joneshighman@gmail.com</td>
                  <td>+1(671) 555-0110</td>
                  <td>Manager</td>
                </tr>

                <tr>
                  <td className="py-3">Syed Dean</td>
                  <td>Fisherman12@gmail.com</td>
                  <td>+1(671) 555-0110</td>
                  <td>Worker</td>
                </tr>

                <tr>
                  <td className="py-3">Hector Sheppard</td>
                  <td>Janecooper@gmail.com</td>
                  <td>+1(671) 555-0110</td>
                  <td>Manager</td>
                </tr>

                <tr>
                  <td className="py-3">Freya Perry</td>
                  <td>Savannahbae@yahoo.com</td>
                  <td>+1(671) 555-0110</td>
                  <td>Worker</td>
                </tr>

                <tr>
                  <td className="py-3">Ted Garza</td>
                  <td>Janecooper@gmail.com</td>
                  <td>+1(671) 555-0110</td>
                  <td>Manager</td>
                </tr>

                <tr>
                  <td className="py-3">Preston Woods</td>
                  <td>Fisherman12@gmail.com</td>
                  <td>+1(671) 555-0110</td>
                  <td>Worker</td>
                </tr>

                <tr>
                  <td className="py-3">Nikita Houston</td>
                  <td>Ester123@gmail.com</td>
                  <td>+1(671) 555-0110</td>
                  <td>Worker</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
