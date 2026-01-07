import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { RiSidebarUnfoldFill } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [accountName, setAccountName] = useState('TRUCK GREAR');
  const [email, setEmail] = useState('Jillali@Onechanneladmin.Com');
  const [phones, setPhones] = useState([
    { id: 1, country: 'US', number: '+1 344 434 4455' },
    { id: 2, country: 'US', number: '+1 344 434 4455' },
  ]);
  const [contactOwner, setContactOwner] = useState('Suchithkumar@Onechanneladmin.Com');
  const [companyType, setCompanyType] = useState('Partner');
  const [industry, setIndustry] = useState('Accounting');
  const [website, setWebsite] = useState('WWW.TRUCKGEAR.COM');
  const [employees, setEmployees] = useState(10);
  const [creditLimit, setCreditLimit] = useState(5000);
  const [availableCredit, setAvailableCredit] = useState(806.71);

  const handleRemovePhone = (id) => {
    setPhones(phones.filter(phone => phone.id !== id));
  };

  const handleAddPhone = () => {
    setPhones([...phones, { id: Date.now(), country: 'US', number: '' }]);
  };

  return (
    <>
      {/* TOGGLE ICON */}
       <div className="p-4">
        <RiSidebarUnfoldFill
          className="text-black size-6 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div> 

      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
           fixed top-0 left+1000 h-full w-[380px] mt-28 bg-white z-50
           transition-transform duration-300 ease-in-out
           ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-full p-4 border-r border-blue-200 shadow-lg overflow-y-auto">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-dashed border-blue-300">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                TG
              </div>
              <div>
                <h1 className="font-bold text-gray-800">Truck Grear</h1>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                  BUSINESS
                </span>
              </div>
            </div>

            {/* CLOSE ICON */}
             <RiSidebarUnfoldFill
              className="cursor-pointer size-5"
              onClick={() => setIsOpen(false)}
            /> 
          </div>

          {/* ACTIONS */}
          <div className="flex space-x-3 mb-4 border-b border-gray-200 pb-2">
            <Action icon={<MdEmail />} label="Email" />
            <Action icon={<FaPhone />} label="Call" />
            <Action icon={<AiFillMessage />} label="Message" />
            <Action icon={<FaCalendarAlt />} label="Calendar" />
          </div>

          {/* FORM */}
          <div className="space-y-4">
            <Input label="Account Name" value={accountName} setValue={setAccountName} />
            <Input label="Email" value={email} setValue={setEmail} type="email" />

            {/* PHONE */}
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              {phones.map((phone, index) => (
                <div key={phone.id} className="flex gap-2 mt-2">
                  <select
                    value={phone.country}
                    onChange={(e) => {
                      const copy = [...phones];
                      copy[index].country = e.target.value;
                      setPhones(copy);
                    }}
                    className="border rounded px-2"
                  >
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    <option value="DE">DE</option>
                  </select>

                  <input
                    value={phone.number}
                    onChange={(e) => {
                      const copy = [...phones];
                      copy[index].number = e.target.value;
                      setPhones(copy);
                    }}
                    className="flex-1 border rounded px-2"
                  />

                  <button
                    onClick={() => handleRemovePhone(phone.id)}
                    className="text-red-600 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                onClick={handleAddPhone}
                className="text-blue-600 text-sm mt-2"
              >
                + Add Phone
              </button>
            </div>

            <Select
              label="Contact Owner"
              value={contactOwner}
              setValue={setContactOwner}
              options={[
                "Suchithkumar@Onechanneladmin.Com",
                "john@company.com"
              ]}
            />

            <Select
              label="Company Type"
              value={companyType}
              setValue={setCompanyType}
              options={["Partner", "Vendor", "Customer"]}
            />

            <Select
              label="Industry"
              value={industry}
              setValue={setIndustry}
              options={["Accounting", "Technology", "Healthcare"]}
            />

            <Input label="Website" value={website} setValue={setWebsite} />
            <Input label="No. Of Employee" value={employees} setValue={setEmployees} type="number" />
            <Input label="Credit Limit" value={creditLimit} setValue={setCreditLimit} type="number" />
            <Input label="Available Credit" value={availableCredit} setValue={setAvailableCredit} type="number" />
          </div>
        </div>
      </div>
    </>
  );
};

/* ===== REUSABLE COMPONENTS ===== */

const Input = ({ label, value, setValue, type = "text" }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full border rounded px-3 py-2 mt-1"
    />
  </div>
);

const Select = ({ label, value, setValue, options }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full border rounded px-3 py-2 mt-1"
    >
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const Action = ({ icon, label }) => (
  <button className="flex flex-col items-center text-gray-600 hover:text-blue-600">
    <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
      {icon}
    </span>
    <span className="text-xs mt-1">{label}</span>
  </button>
);

export default Sidebar;







