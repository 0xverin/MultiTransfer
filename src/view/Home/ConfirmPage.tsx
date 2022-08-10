import { useTransfer } from "@/hooks/useContract";
import useTokenBalance from "@/hooks/useTokenBalance";
import { formatBalance } from "@/utils/format";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
interface ConfirmProps {
    addressList: Array<string>;
    tableData: Array<{ address: string; amount: number; id: number }>;
    delAddressList: (id: number) => void;
    sendValue: number;
    token: any;
    tokenList: Array<any>;
}
export default function ConfirmPage(props: ConfirmProps) {
    const { addressList, delAddressList, sendValue, token, tokenList } = props;
    const tokenBalance = useTokenBalance(token.address);
    const nativeBalance = useTokenBalance("");
    const TransferInstance = useTransfer();
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
        console.log(TransferInstance);
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
            <div className="text-[#031a6e] text-[18px]">摘要</div>
            <div className="m-h-96">
                <div className="bg-[#F6F6F6] w-full h-full m-auto mt-5 border-[rgba(9,25,106,0.05)] border-solid border-[1px]">
                    <div className="flex justify-around border-[1px] border-solid border-transparent border-b-gray-300">
                        <div className="w-1/2 h-32 border-[1px] border-solid border-transparent border-r-gray-300">
                            <div className="flex items-center justify-center  mt-10 text-[#09196A] text-[16px] sm:text-[24px]">
                                {addressList.length}
                            </div>
                            <div className="flex items-center justify-center text-gray-400 text-[10px] sm:text-[14px]">
                                地址总数
                            </div>
                        </div>

                        <div className="w-1/2 h-32 ">
                            <div className="flex items-center justify-center  mt-10 text-[#09196A] text-[16px] sm:text-[24px]">
                                {addressList.length * sendValue}
                            </div>
                            <div className="flex items-center justify-center text-gray-400 text-[10px] sm:text-[14px]">
                                代币发送总数
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around border-[1px] border-solid border-transparent border-b-gray-300">
                        <div className="w-1/2 h-32 border-[1px] border-solid border-transparent border-r-gray-300">
                            <div className="flex items-center justify-center mt-10 text-[#09196A] text-[16px] sm:text-[24px]">
                                1
                            </div>
                            <div className="flex items-center justify-center text-gray-400 text-[10px] sm:text-[14px]">
                                交易总数
                            </div>
                        </div>

                        <div className="w-1/2 h-32 ">
                            <div className="flex items-center justify-center mt-10  text-[#09196A] text-[16px] sm:text-[24px]">
                                {formatBalance(tokenBalance.value, token.decimals, 3)} {token.symbol}
                            </div>
                            <div className="flex items-center justify-center text-gray-400 text-[10px] sm:text-[14px]">
                                代币余额
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <div className="w-1/2 h-32 border-[1px] border-solid border-transparent border-r-gray-300">
                            <div className="flex items-center justify-center mt-10 text-[#09196A] text-[16px] sm:text-[24px]">
                                123123
                            </div>
                            <div className="flex items-center justify-center text-gray-400 text-[10px] sm:text-[14px]">
                                预估消耗
                            </div>
                        </div>

                        <div className="w-1/2 h-32 ">
                            <div className="flex items-center justify-center mt-10  text-[#09196A] text-[16px] sm:text-[24px]">
                                {formatBalance(nativeBalance.value, 18, 3)} {tokenList[0].symbol}
                            </div>
                            <div className="flex items-center justify-center text-gray-400 text-[10px] sm:text-[14px]">
                                您的余额
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
