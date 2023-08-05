import React from "react";
import {TransTable,HeadRow,HeadCell,TableRow,TableData} from "./transactions.style"

export const Tranactions = ({transactions}) => {
    return ( 
        <TransTable >
  <thead>
    <HeadRow>
      <HeadCell>Type</HeadCell>
      <HeadCell>Amount</HeadCell>
      <HeadCell>Currency</HeadCell>
    </HeadRow>
  </thead>

  <tbody>
    {transactions.map((transaction)=>(
        <TableRow id={transaction.id}>
        <TableData>{transaction.type}</TableData>
        <TableData>{transaction.amount}</TableData>
        <TableData>{transaction.currency}</TableData>
      </TableRow>
    ))}
  </tbody>
</TransTable>
    )
}