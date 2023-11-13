"use client";

import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DialogDemo } from "@/components/dialog/page";

const initialData = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
];

function Home() {
  const [dataall, setDataAll] = useState(initialData);

  // const handleSave = (editedData) => {
  //   const newData = dataall.map((row) =>
  //     row.invoice === editedData.invoice ? editedData : row
  //   );
  //   setDataAll(newData);
  // };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="w-[100px]">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataall.map((rowDatacall) => (
            <TableRow key={rowDatacall.invoice}>
              <TableCell>{rowDatacall.invoice}</TableCell>
              <TableCell>{rowDatacall.paymentStatus}</TableCell>
              <TableCell>{rowDatacall.paymentMethod}</TableCell>
              <TableCell>{rowDatacall.totalAmount}</TableCell>
              <TableCell>
                <DialogDemo rowData={rowDatacall} onSave={(editedData) => {                  
                  const newData = dataall.map((row) =>
                    row.invoice === rowDatacall.invoice ? editedData : row
                  );
                  setDataAll(newData);
                  
                }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Home;
