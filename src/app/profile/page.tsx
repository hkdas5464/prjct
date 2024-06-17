

'use client'
import { useState } from 'react';
import Head from 'next/head';
import Organization from './pages/Organization';
import ProfileNavbar from './Navbar';
export default function Profile() {
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

  const moreOptions = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
  ];

  const toggleMoreOptions = () => {
    setIsMoreVisible(!isMoreVisible);
  };

  return (

    <>
      <ProfileNavbar />
      <div className="flex mt-20">
        <div className="w-1/4 bg-gray-400 h-12">

          <aside className="w-full md:w-1/4 bg-blue-800 text-white p-4 fixed h-full">
            <div className="text-center mb-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-2"></div>
              <h2 className="text-xl font-bold">NOBITA KUMAR</h2>
              <p>Data Engineer</p>
              <span className="block mt-2 bg-green-500 text-white rounded-full px-4 py-1">
                ACTIVE
              </span>
            </div>
            <div className="space-y-2">
              <button className="w-full text-left p-2 bg-blue-700 rounded-md">
                Email
              </button>
              <button className="w-full text-left p-2 bg-blue-700 rounded-md">
                Team
              </button>
              <button
                onClick={toggleMoreOptions}
                className="w-full text-left p-2 bg-blue-700 rounded-md"
              >
                More(7)
              </button>
              {isMoreVisible && (
                <div className="space-y-2 mt-2">
                  {moreOptions.map((option, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-2 bg-blue-600 rounded-md"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
        <div className="w-3/4  h-12">

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
              {activeTab === 'Organization' && <div>Organization Content</div>}
              {activeTab === 'Management' && <div>Management Content</div>}
              {activeTab === 'Support Role' && <div>Support Role Content</div>}
              {activeTab === 'Work History' && <div>Work History Content</div>}
              {activeTab === 'Service Date' && <div>Service Date Content</div>}
              {activeTab === 'Documents' && <div><Organization /></div>}
            </div>
          </section>
        </div>
      </div>
    </>

  );
}
