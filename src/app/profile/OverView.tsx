'use client'
import React, { useState } from 'react'
import Organization from './pages/Organization';
import EmployeeProfile from './pages/EmployeeProfile';

function OverView() {



  const [activeTab, setActiveTab] = useState('Organization');
  const [isMoreVisible, setIsMoreVisible] = useState(false);
  const tabs = [
    'Organization',
    'Management',
    'Support Role',
    'Work History',
    'Service Date',
    'Documents',
  ];


  const toggleMoreOptions = () => {
    setIsMoreVisible(!isMoreVisible);
  };


  return (
    <div className="sm:w-3/4  h-12 hidden lg:block">
    <section className="flex-1 p-4 ml-0 md:ml-1/4 mt-16 md:mt-0">
      <nav className="flex flex-wrap space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-md text-black ${activeTab === tab
              ? 'bg-white shadow'
              : 'bg-gray-200 hover:bg-gray-300'
              }`}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div>
        {activeTab === 'Organization' && <div><Organization /></div>}
        {activeTab === 'Management' && <div><Organization /></div>}
        {activeTab === 'Support Role' && <div><Organization /></div>}
        {activeTab === 'Work History' && <div><Organization /></div>}
        {activeTab === 'Service Date' && <div><Organization /></div>}
        {activeTab === 'Documents' && <div><EmployeeProfile /></div>}
      </div>
    </section>
  </div>
  )
}

export default OverView