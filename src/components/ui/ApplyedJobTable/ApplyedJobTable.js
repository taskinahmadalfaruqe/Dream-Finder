"use client";
import Link from "next/link";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function App() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>EDIT</TableColumn>
        <TableColumn>DELETE</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>
            <Link href='/'>
              <FaRegEdit />
            </Link>
          </TableCell>
          <TableCell>
            <Link href='/'>
              <FaRegTrashAlt />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
          <TableCell>
            <Link href='/'>
              <FaRegEdit />
            </Link>
          </TableCell>
          <TableCell>
            <Link href='/'>
              <FaRegTrashAlt />
            </Link>
          </TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>
            <Link href='/'>
              <FaRegEdit />
            </Link>
          </TableCell>
          <TableCell>
            <Link href='/'>
              <FaRegTrashAlt />
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}



