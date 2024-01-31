"use client";
import Link from "next/link";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function App() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>COMPANY NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>APPLY DATE</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Harberd Ltd.</TableCell>
          <TableCell>Web Developer</TableCell>
          <TableCell>pending</TableCell>
          <TableCell>30/01/2024</TableCell>
          
        </TableRow>
        <TableRow key="2">
          <TableCell>Alfa Co. Ltd.</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>On the Way</TableCell>
          <TableCell>25/01/2024</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>BestDev Co.</TableCell>
          <TableCell>Junior Developer</TableCell>
          <TableCell>Responsed</TableCell>
          <TableCell>20/01/2024</TableCell>
          
        </TableRow>
      </TableBody>
    </Table>
  );
}



