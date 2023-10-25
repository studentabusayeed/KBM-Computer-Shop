'use client'
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Code, Chip, Avatar} from "@nextui-org/react";

export default function OrderTable() {
  const [selectedColor, setSelectedColor] = React.useState("success");

  return (
    <div>
      <Table 
        color={selectedColor}
        selectionMode="multiple" 
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>Order</TableColumn>
          <TableColumn>Quantity</TableColumn>
          <TableColumn>Statue</TableColumn>
          <TableColumn>Date</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell className="flex gap-5">
                
                   <Avatar 
            isBordered radius="md"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
            <span className="w-2/4 ">
            <p className="inline-block">2PCS Bicycle Car LED Neon Tire Wheel Gas Nozzle Valve Glow Stick Light For...</p>  <br />
            <Code color="warning" className="my-2">Order: #367h787h67546</Code>
            </span>
                
            </TableCell>
            <TableCell> <Chip size="sm">Qty: 1</Chip></TableCell>
            <TableCell> <Chip size="sm">Delivered</Chip></TableCell>
            <TableCell>21/05/2005</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell className="flex gap-5">
                
                   <Avatar 
            isBordered radius="md"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
            <span className="w-2/4 ">
            <p className="inline-block">2PCS Bicycle Car LED Neon Tire Wheel Gas Nozzle Valve Glow Stick Light For...</p>  <br />
            <Code color="warning" className="my-2">Order: #367h787h67546</Code>
            </span>
                
            </TableCell>
            <TableCell> <Chip size="sm">Qty: 1</Chip></TableCell>
            <TableCell> <Chip size="sm">Delivered</Chip></TableCell>
            <TableCell>21/05/2005</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell className="flex gap-5">
                
                   <Avatar 
            isBordered radius="md"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
            <span className="w-2/4 ">
            <p className="inline-block">2PCS Bicycle Car LED Neon Tire Wheel Gas Nozzle Valve Glow Stick Light For...</p>  <br />
            <Code color="warning" className="my-2">Order: #367h787h67546</Code>
            </span>
                
            </TableCell>
            <TableCell> <Chip size="sm">Qty: 1</Chip></TableCell>
            <TableCell> <Chip size="sm">Delivered</Chip></TableCell>
            <TableCell>21/05/2005</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="flex gap-5">
                
                   <Avatar 
            isBordered radius="md"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
            <span className="w-2/4 ">
            <p className="inline-block">2PCS Bicycle Car LED Neon Tire Wheel Gas Nozzle Valve Glow Stick Light For...</p>  <br />
            <Code color="warning" className="my-2">Order: #367h787h67546</Code>
            </span>
                
            </TableCell>
            <TableCell> <Chip size="sm">Qty: 1</Chip></TableCell>
            <TableCell> <Chip size="sm">Delivered</Chip></TableCell>
            <TableCell>21/05/2005</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell className="flex gap-5">
                
                   <Avatar 
            isBordered radius="md"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
            <span className="w-2/4 ">
            <p className="inline-block">2PCS Bicycle Car LED Neon Tire Wheel Gas Nozzle Valve Glow Stick Light For...</p>  <br />
            <Code color="warning" className="my-2">Order: #367h787h67546</Code>
            </span>
                
            </TableCell>
            <TableCell> <Chip size="sm">Qty: 1</Chip></TableCell>
            <TableCell> <Chip size="sm">Delivered</Chip></TableCell>
            <TableCell>21/05/2005</TableCell>
          </TableRow>
        
        </TableBody>
      </Table>
    </div>
  );
}
