"use client";


import React from "react";
import Image from 'next/image';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { MdBlock } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

export default function App() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>LOGO</TableColumn>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>LOCATION</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>
          <Image className="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU' height={70} width={70} alt="Profile image" />

          </TableCell>
          <TableCell>programming hero</TableCell>
          <TableCell>programminghero@gmail.com</TableCell>
          <TableCell>Dhaka</TableCell>
          <TableCell>
          <div className="flex item-center gap-3">
            <button  title="Block"><MdBlock className="text-3xl" /></button>
            <button  title="Delete"><FaTrashAlt className="text-xl text-red-400" /></button>
            </div>
          </TableCell>
          
        </TableRow>
        <TableRow key="2">
        <TableCell>
          <Image className="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU' height={70} width={70} alt="Profile image" />

          </TableCell>
          <TableCell>programming hero</TableCell>
          <TableCell>programminghero@gmail.com</TableCell>
          <TableCell>Dhaka</TableCell>
          <TableCell>
          <div className="flex item-center gap-3">
            <button  title="Block"><MdBlock className="text-3xl" /></button>
            <button  title="Delete"><FaTrashAlt className="text-xl text-red-400" /></button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow key="3">
        <TableCell>
          <Image className="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU' height={70} width={70} alt="Profile image" />

          </TableCell>
          <TableCell>programming hero</TableCell>
          <TableCell>programminghero@gmail.com</TableCell>
          <TableCell>Dhaka</TableCell>
          <TableCell>
          <div className="flex item-center gap-3">
            <button  title="Block"><MdBlock className="text-3xl" /></button>
            <button  title="Delete"><FaTrashAlt className="text-xl text-red-400" /></button>
            </div>
          </TableCell>
          
        </TableRow>
        <TableRow key="4">
        <TableCell>
          <Image className="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU' height={70} width={70} alt="Profile image" />

          </TableCell>
          <TableCell>programming hero</TableCell>
          <TableCell>programminghero@gmail.com</TableCell>
          <TableCell>Dhaka</TableCell>
          <TableCell>
          <div className="flex item-center gap-3">
            <button  title="Block"><MdBlock className="text-3xl" /></button>
            <button  title="Delete"><FaTrashAlt className="text-xl text-red-400" /></button>
            </div>
          </TableCell>
          
        </TableRow>
        <TableRow key="5">
        <TableCell>
          <Image className="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSBDUPuDbUF3wr7i-mzGixQ3DnAwgSObvNg&usqp=CAU' height={70} width={70} alt="Profile image" />

          </TableCell>
          <TableCell>programming hero</TableCell>
          <TableCell>programminghero@gmail.com</TableCell>
          <TableCell>Dhaka</TableCell>
          <TableCell>
          <div className="flex item-center gap-3">
            <button  title="Block"><MdBlock className="text-3xl" /></button>
            <button  title="Delete"><FaTrashAlt className="text-xl text-red-400" /></button>
            </div>
          </TableCell>
          
        </TableRow>
      </TableBody>
    </Table>
  );
}



