import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button, } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Link from "next/link";


export default function App() {



    const request = [
        "Request Absence",
        "Correct My Absence",
        "Request Return from Leave of Absence"
    ]



    const view = [{
        type:"My Absence",
        link:"myabsence"
    },{
        type:"My Absence Balance",
        link:"myabsencebalance"
    }
    ]
    return (
        <div>
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">


                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-6">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h2 className="text-tiny text-blue-600/100 uppercase font-bold light:text-red-500">Requests</h2>
                    </CardHeader>
                    <div className="mt-20 grid p-4">
                        {request.map((e) => (
                            <Button key={e} color="primary" variant="bordered" className="mt-2" href="profile/pages/absence/myabsence">
                                {e}
                            </Button>

                        ))}
                    </div>
                </Card>


                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-6">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h2 className="text-tiny text-blue-600/100 uppercase font-bold">View</h2>
                    </CardHeader>
                    <div className="mt-20 grid p-4">
                        {view.map((e) => (
                            <Link href={"/profile/pages/absence/"+`${e.link}`}>

                                <Button key={e} color="primary" variant="bordered" className="mt-2">
                                    {e.type}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </Card>

                <Card isFooterBlurred className="w-full h-auto col-span-12 sm:col-span-12">
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <h2 className="text-wrap  uppercase font-bold text-blue-600/100">Available Balance as of Today</h2>
                    </CardHeader>
                    <div className="grid mt-14">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-center  text-blue-600/100 uppercase bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Available
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className=" border-b border-blue-600/100 dark:bg-gray-800 dark:border-gray-700 text-center">
                                        <th scope="row" className="px-6 py-4 font-medium text-blue-600/100 whitespace-nowrap dark:text-white">
                                            0 Days - Compensatory Leave
                                        </th>
                                    </tr>
                                    <tr className=" border-b border-blue-600/100 dark:bg-gray-800 text-center dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-blue-600/100 whitespace-nowrap dark:text-white">
                                            29 Days - Annual Leave
                                        </th>
                                    </tr>
                                    <tr className=" dark:bg-gray-800 text-center">
                                        <th scope="row" className="px-6 py-4 font-medium text-blue-600/100 whitespace-nowrap dark:text-white">
                                            6 Day - Annual Leave Carryover
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </Card>
            </div>


        </div>

    );
}
