import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows: any = [];

interface ConfirmProps {
    addressList: Array<string>;
    tableData: Array<{ address: string; amount: number }>;
}
export default function ConfirmPage(props: ConfirmProps) {
    const { addressList, tableData } = props;
    console.log("addressList", tableData);

    function createData(address: string, amount: number) {
        return { address, amount };
    }
    useEffect(() => {
        for (let index = 0; index < addressList.length; index++) {
            // rows.push(createData(addressList[index].address, addressList[index].amount));
        }
    }, []);
    return (
        <div className="px-10 py-10">
            <div className="text-[#031a6e] text-[18px]">确认交易</div>
            {/* <div className="text-[#031a6e] text-[14px] mt-10">交易速度</div> */}

            <div className="text-[#031a6e] text-[14px] mt-10">地址列表</div>
            <div className="max-h-[300px]  overflow-auto mt-2">
                <Table
                    sx={{
                        minWidth: 650,
                    }}
                    stickyHeader
                >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align="left"
                                sx={{
                                    borderRight: "1px solid #E0E0E0",
                                    borderTop: "1px solid #E0E0E0",
                                    borderLeft: "1px solid #E0E0E0",
                                }}
                            >
                                钱包地址&nbsp;
                            </TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    borderRight: "1px solid #E0E0E0",
                                    borderTop: "1px solid #E0E0E0",
                                }}
                            >
                                数量&nbsp;
                            </TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    borderTop: "1px solid #E0E0E0",
                                }}
                            >
                                操作&nbsp;
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{
                                        borderRight: "1px solid #E0E0E0",
                                        borderLeft: "1px solid #E0E0E0",
                                    }}
                                >
                                    {row.address}
                                </TableCell>
                                <TableCell
                                    align="left"
                                    sx={{
                                        borderRight: "1px solid #E0E0E0",
                                    }}
                                >
                                    {row.amount}
                                </TableCell>
                                <TableCell align="left">
                                    <div>删除</div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
