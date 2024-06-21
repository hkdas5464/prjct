import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import EmployeeProfile from './pages/EmployeeProfile'



export default function MyTab() {


    const newtabs = [
        'Organization',
        'Management',
        'Support Role',
        'Work History',
        'Service Date',
        'Documents',
      ];
    

  let tabs = [
    {
      id: "Organization",
      label: "Organization",
      tab:<EmployeeProfile/>
    },
    {
      id: "Management",
      label: "Management",
    },
    {
      id: "Support Role",
      label: "Support Role",
    }
    ,
    {
      id: "Work History",
      label: "Support Role",
    },
    {
      id: "Service Date",
      label: "Support Role",
    }
    ,
    {
      id: "Documents",
      label: "Documents",
    }
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs variant="underlined"  color={"primary"} aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
               {item.tab}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}
