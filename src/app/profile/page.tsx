'use client'
import { useState } from 'react';
import Organization from './pages/Organization';
import ProfileNavbar from './Navbar';
import { Accordion, AccordionItem, Avatar, Button, Card, ScrollShadow } from '@nextui-org/react';
import MyTab from './Tabs';
import Image from 'next/image';
import OverView from './OverView';
import Persormence from './pages/Persormence';
import Summary from './pages/Summary';
import Job from './pages/Job';
import Absence from './pages/Absence';
import Personal from './pages/Personal';
import Compesation from './pages/Compesation';
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


  const Buttons_name = [
    'Summary',
    'Overview',
    'Job',
    'Compesation',
    'Personal',
    'Absence',
    'Persormence'
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
      <div className=' lg:hidden mt-20'>
        <MyTab />
      </div>
      <div className="flex mt-20">
        <div className="w-1/4 h-12 hidden lg:block">

          <Card className="w-full md:w-1/4 backdrop-blur-sm dark:bg-gradient-to-tr from-gray-900 to-gray-800 dark:text-white shadow-gray-900/20 shadow-2xl  p-4 fixed h-full">
            <div className="text-center mb-4">
              <div className="w-24 h-24 mx-auto mb-2">
              <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
              </div>
              <h2 className="text-xl font-bold">NOBITA KUMAR</h2>
              <p>Data Engineer</p>
              <Button className='mt-6' color="primary" href="#" variant="flat">
                Active
              </Button>
            </div>

            
            <div className="space-y-2" >
            <div className="flex mb-4">
              <Button className=' w-1/2 mr-2' color="primary" href="#" variant="flat">
                Email
              </Button>
              <Button className=' w-1/2 ml-2' color="primary" href="#" variant="flat">
                Team
              </Button>
              </div>
              <ScrollShadow hideScrollBar className=" h-[400px]">
                {
                  Buttons_name.map((e) => (
                    <div key={e} className=" flex flex-col rounded-lg shadow-sm">
                    <button 
                      key={e}
                      onClick={() => setActiveTab(e)}
                    type="button" className=" py-3 px-4 inline-flex items-center gap-x-2  text-md font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                      {e}
                    </button>
                  </div>
                  ))
                }

              <Accordion className='bg-red'>
                <AccordionItem key="1" aria-label="Accordion 1" className='bg-red' title="More (7)">
                  sdfcew
                </AccordionItem>
              </Accordion>
              </ScrollShadow>

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
          </Card>
        </div>
        <div className="sm:w-3/4  h-12 hidden lg:block">
          <section className="flex-1 p-4 ml-0 md:ml-1/4 mt-16 md:mt-0">
            {/* <nav className="flex flex-wrap space-x-4 mb-4">
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
            </nav> */}
            <div>
              {activeTab === 'Overview' && <div><OverView/></div>}
              {activeTab === 'Organization' && <div><Organization/></div>}
              {activeTab === 'Summary' && <div><Summary/></div>}
              {activeTab === 'Job' && <div><Job/></div>}
              {activeTab === 'Absence' && <div><Absence/></div>}
              {activeTab === 'Compesation' && <div><Compesation/></div>}
              {activeTab === 'Persormence' && <div><Persormence /></div>}
              {activeTab === 'Personal' && <div><Personal /></div>}
             
      
            </div>
          </section>
        </div>
      </div>
    </>

  );
}
