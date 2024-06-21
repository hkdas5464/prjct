'use client'
import { useState } from 'react';
import Organization from './pages/Organization';
import ProfileNavbar from './Navbar';
import { Accordion, AccordionItem, Avatar, Button, Card } from '@nextui-org/react';
import MyTab from './Tabs';
import Image from 'next/image';
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
              <Button className=' w-full' color="primary" href="#" variant="flat">
                More (7)
              </Button>

              <Accordion className='bg-red'>
                <AccordionItem key="1" aria-label="Accordion 1" className='bg-red' title="More (7)">
                  sdfcew
                </AccordionItem>
              </Accordion>

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
