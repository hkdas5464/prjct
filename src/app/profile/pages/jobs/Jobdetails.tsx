import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function Jobdetails() {
    return (
        <Table isStriped aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Employee ID</TableColumn>
                <TableColumn>XXXXX</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Supervisory Organization</TableCell>
                    <TableCell>XXXX</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Position</TableCell>
                    <TableCell>xxxx</TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell>Business Title</TableCell>
                    <TableCell>XXXX</TableCell>
                </TableRow>
                <TableRow key="4">
                    <TableCell>Job Profile</TableCell>
                    <TableCell>XXXX</TableCell>
                </TableRow>

                <TableRow key="5">
                    <TableCell>Employee Type</TableCell>
                    <TableCell>XXXXX</TableCell>
                </TableRow><TableRow key="6">
                    <TableCell>Time Type</TableCell>
                    <TableCell>XXXXXX</TableCell>
                </TableRow><TableRow key="7">
                    <TableCell>FTE</TableCell>
                    <TableCell>XXXXXX</TableCell>
                </TableRow><TableRow key="8">
                    <TableCell>Location</TableCell>
                    <TableCell>XXXXX</TableCell>
                </TableRow>
                <TableRow key="9">
                    <TableCell>Hire Date</TableCell>
                    <TableCell>XXXXX</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
