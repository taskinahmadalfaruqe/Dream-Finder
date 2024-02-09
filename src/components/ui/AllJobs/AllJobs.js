"use client";


import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function App() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>POSITION</TableColumn>
        <TableColumn>COMPANY NAME</TableColumn>
        <TableColumn>VACANCY</TableColumn>
        <TableColumn>START DATE</TableColumn>
        <TableColumn>END DATE</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>React Developer </TableCell>
          <TableCell>Programming hero</TableCell>
          <TableCell>05</TableCell>
          <TableCell>30/01/2024</TableCell>
          <TableCell>30/02/2024</TableCell>
          
        </TableRow>
        <TableRow key="2">
        <TableCell>Fullstack Developer </TableCell>
          <TableCell>Programming hero</TableCell>
          <TableCell>05</TableCell>
          <TableCell>30/01/2024</TableCell>
          <TableCell>30/02/2024</TableCell>
        </TableRow>
        <TableRow key="3">
        <TableCell>Frontend developer </TableCell>
          <TableCell>spectrum</TableCell>
          <TableCell>06</TableCell>
          <TableCell>07/01/2024</TableCell>
          <TableCell>30/02/2024</TableCell>
          
        </TableRow>
        <TableRow key="4">
        <TableCell>Junior MERN developer </TableCell>
          <TableCell>Solutia</TableCell>
          <TableCell>02</TableCell>
          <TableCell>14/01/2024</TableCell>
          <TableCell>22/02/2024</TableCell>
          
        </TableRow>
        <TableRow key="5">
        <TableCell>Node Developer </TableCell>
          <TableCell>Team code Riders</TableCell>
          <TableCell>06</TableCell>
          <TableCell>20/01/2024</TableCell>
          <TableCell>10/02/2024</TableCell>
          
        </TableRow>
      </TableBody>
    </Table>
  );
}



