import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

interface ConfirmProps {
    addressList: Array<string>;
    tableData: Array<{ address: string; amount: number; id: number }>;
    delAddressList: (id: number) => void;
}
export default function ConfirmPage(props: ConfirmProps) {
    const { addressList, delAddressList } = props;

    const [tableData, setTableData] = useState<any>([]);

    const initArray = () => {
        let arr = addressList;
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push({
                id: i + 1,
                address: arr[i],
                amount: 1,
            });
        }
        setTableData(newArr);
    };
    useEffect(() => {
        initArray();
    }, [addressList]);
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
                                align="center"
                                sx={{
                                    borderTop: "1px solid #E0E0E0",
                                    borderLeft: "1px solid #E0E0E0",
                                    width: "30px",
                                }}
                            >
                                序号&nbsp;
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    borderRight: "1px solid #E0E0E0",
                                    borderTop: "1px solid #E0E0E0",
                                    borderLeft: "1px solid #E0E0E0",
                                }}
                            >
                                钱包地址&nbsp;
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    borderRight: "1px solid #E0E0E0",
                                    borderTop: "1px solid #E0E0E0",
                                }}
                            >
                                数量&nbsp;
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{
                                    borderTop: "1px solid #E0E0E0",
                                    borderRight: "1px solid #E0E0E0",
                                }}
                            >
                                操作&nbsp;
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map(
                            (
                                row: {
                                    id: number;
                                    address: string;
                                    amount: number;
                                },
                                index: number,
                            ) => (
                                <TableRow key={index}>
                                    <TableCell
                                        align="center"
                                        component="th"
                                        scope="row"
                                        sx={{
                                            borderLeft: "1px solid #E0E0E0",
                                        }}
                                    >
                                        {row.id}
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid #E0E0E0",
                                            borderLeft: "1px solid #E0E0E0",
                                        }}
                                    >
                                        {row.address}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid #E0E0E0",
                                        }}
                                    >
                                        {row.amount}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            borderRight: "1px solid #E0E0E0",
                                            width: "100px",
                                        }}
                                    >
                                        <div>
                                            <Button
                                                variant="contained"
                                                onClick={() => {
                                                    delAddressList(index);
                                                }}
                                                sx={{
                                                    background: "red",
                                                    "&:hover": {
                                                        background: "red",
                                                    },
                                                }}
                                            >
                                                删除
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ),
                        )}
                    </TableBody>
                </Table>
                {addressList.length === 0 && (
                    <div className="w-full  h-[200px] flex justify-center items-center">
                        <img src="/src/assets/nodata.png" alt="no data" className=" h-[100px]" />
                    </div>
                )}
            </div>
        </div>
    );
}
