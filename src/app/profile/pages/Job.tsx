'use client'
import React, { useState } from 'react'
import Organization from './Organization';
import EmployeeProfile from './EmployeeProfile';
import Jobdetails from './jobs/Jobdetails';

function Jobs() {



  const [activeTab, setActiveTab] = useState('Job Details');
  const [isMoreVisible, setIsMoreVisible] = useState(false);
  const tabs = [
    'Job Details',
    'Employment Data',
    'Additional Data',
    'Work Aggregate',
 
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
        {activeTab === 'Job Details' && <div><Jobdetails /></div>}
        {activeTab === 'Employment Data' && <div><Organization /></div>}
        {activeTab === 'Additional Data' && <div><Organization /></div>}
        {activeTab === 'Work Aggregate' && <div><Organization /></div>}
      </div>
    </section>
  </div>
  )
}

export default Jobs