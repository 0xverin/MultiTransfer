import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface propsInter {
    addressValue: string;
    onSetAddressChange: (value: string) => void;
    onSetAddressListChange: (value: Array<string>) => void;
    addressList: Array<string>;
}
export default function AddressList(props: propsInter) {
    const { onSetAddressChange, addressValue, onSetAddressListChange, addressList } = props;
    return (
        <div>
            <div className="text-[#031a6e] text-[16px]">收币地址</div>
            <div className="mt-5 flex pb-5 bg-[#F9F9F9] pl-5  pt-5">
                <div className="text-[15px] leading-[25px] mr-3 text-[#001A6B]">
                    {addressList.length
                        ? addressList.map((item, index) => {
                              return <div key={index}>{index + 1}</div>;
                          })
                        : 1}
                </div>
                <div className="overflowX-auto w-full">
                    <TextField
                        id="standard-multiline-static"
                        variant="standard"
                        multiline
                        value={addressValue}
                        minRows={8}
                        onChange={(e) => {
                            onSetAddressChange(e.target.value);
                            if (e.target.value == "") {
                                onSetAddressListChange([]);
                                return;
                            }
                            const addressList = e.target.value.split("\n");
                            onSetAddressListChange(addressList);
                        }}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        sx={{
                            "& .MuiInputBase-root": {
                                padding: 0,
                                lineHeight: "25px",
                                fontSize: "15px",
                                color: "#001A6B",
                            },
                        }}
                        className="w-full bg-[#F9F9F9] text-clip"
                    />
                </div>
            </div>
        </div>
    );
}
