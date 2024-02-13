"use client";


import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function App() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>JOIN DATE</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Taskin </TableCell>
          <TableCell>taskin@gmail.com</TableCell>
          <TableCell>Premium</TableCell>
          <TableCell>30/01/2024</TableCell>
          
        </TableRow>
        <TableRow key="2">
          <TableCell>Khaleda Ferdous</TableCell>
          <TableCell>Khaleda@gmail.com</TableCell>
          <TableCell>Normal</TableCell>
          <TableCell>25/01/2024</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Siam Islam Sagor</TableCell>
          <TableCell>siam@gmail.com</TableCell>
          <TableCell>Normal</TableCell>
          <TableCell>20/01/2024</TableCell>
          
        </TableRow>
        <TableRow key="4">
          <TableCell>Halima Tus Sadia</TableCell>
          <TableCell>sadia@gmail.com</TableCell>
          <TableCell>Premium</TableCell>
          <TableCell>20/01/2024</TableCell>
          
        </TableRow>
        <TableRow key="5">
          <TableCell>Mostak moin</TableCell>
          <TableCell>moin@gmail.com</TableCell>
          <TableCell>Normal</TableCell>
          <TableCell>20/01/2024</TableCell>
          
        </TableRow>
      </TableBody>
    </Table>
  );
}



