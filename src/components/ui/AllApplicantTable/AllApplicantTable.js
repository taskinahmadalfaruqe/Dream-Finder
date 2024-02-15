"use client";


import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { FaTrashAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";


export default function App() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>JOIN DATE</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Taskin </TableCell>
          <TableCell>taskin@gmail.com</TableCell>
          <TableCell>Premium</TableCell>
          <TableCell>30/01/2024</TableCell>
          <TableCell>
          <div className="flex item-center gap-3">
            <button  title="Make Admin"><RiAdminFill className="text-3xl" /></button>
            <button  title="Delete"><FaTrashAlt className="text-xl text-red-400" /></button>
            </div>
          </TableCell>
          
        </TableRow>
        <TableRow key="2">
          <TableCell>Khaleda Ferdous</TableCell>
          <TableCell>Khaleda@gmail.com</TableCell>
          <TableCell>Normal</TableCell>
          <TableCell>25/01/2024</TableCell>
          <TableCell>
          <div className="flex item-center gap-3">
            <button  title="Make Admin"><RiAdminFill className="text-3xl" /></button>
            <button  title="Delete"><FaTrashAlt className="text-xl text-red-400" /></button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Siam Islam Sagor</TableCell>
          <TableCell>siam@gmail.com</TableCell>
          <TableCell>Normal</TableCell>
          <TableCell>20/01/2024</TableCell>
          <TableCell>
          <div className="flex item-center gap-3">
            <button  title="Make Admin"><RiAdminFill className="text-3xl" /></button>
            <button  title="Delete"><FaTrashAlt className="text-xl text-red-400" /></button>
            </div>
          </TableCell>
          
        </TableRow>
        <TableRow key="4">
          <TableCell>Halima Tus Sadia</TableCell>
          <TableCell>sadia@gmail.com</TableCell>
          <TableCell>Premium</TableCell>
          <TableCell>20/01/2024</TableCell>
          <TableCell>
          <div className="flex item-center gap-3">
            <button  title="Make Admin"><RiAdminFill className="text-3xl" /></button>
            <button  title="Delete"><FaTrashAlt className="text-xl text-red-400" /></button>
            </div>
          </TableCell>
          
        </TableRow>
        <TableRow key="5">
          <TableCell>Mostak moin</TableCell>
          <TableCell>moin@gmail.com</TableCell>
          <TableCell>Normal</TableCell>
          <TableCell>20/01/2024</TableCell>
          <TableCell>
          <div className="flex item-center gap-3">
            <button  title="Make Admin"><RiAdminFill className="text-3xl" /></button>
            <button  title="Delete"><FaTrashAlt className="text-xl text-red-400" /></button>
            </div>
          </TableCell>
          
        </TableRow>
      </TableBody>
    </Table>
  );
}



