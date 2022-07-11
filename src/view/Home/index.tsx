import React, { useEffect, useState, useMemo } from "react";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { useERC20 } from "@/hooks/useContract";
import { Erc20 } from "@/config/abi/types";
import { isAddress } from "@/utils/isAddress";
import SelectToken from "./SelectToken";
import AddressList from "./AddressList";

import { Token } from "@/config/constants/types";

export default function Home() {
    const { account, chainId, error, activate } = useActiveWeb3React();
    const [open, setOpen] = useState(false);
    const [tokenList, setTokenList] = useState<Token[]>([]);
    const [searchValue, setSearchValue] = useState("");
    const [addressValue, setAddressValue] = useState("");
    const [addressList, setAddresslist] = useState<string[]>([]);

    const [selectObject, setSelectObject] = useState<Token>({
        address: "",
        name: "",
        symbol: "",
        decimals: 18,
        chainId,
    });

    const address = useMemo(() => {
        return isAddress(searchValue) ? searchValue : "";
    }, [searchValue]);

    const ERC20Instarnce = useERC20(address);

    useEffect(() => {
        const getErc20Info = async () => {
            if (ERC20Instarnce as Erc20) {
                try {
                    const index = tokenList.findIndex((item) => item.address === isAddress(searchValue));
                    if (index !== -1) {
                        return;
                    }
                    setOpen(true);
                    const symbol = await ERC20Instarnce?.symbol();
                    const name = await ERC20Instarnce?.name();
                    const decimals = await ERC20Instarnce?.decimals();
                    const token = { symbol, name, decimals: decimals.toString(), address, chainId };
                    setTokenList([...tokenList, token]);
                } catch (e) {
                    //
                }
                setOpen(false);
            }
        };
        getErc20Info();
    }, [ERC20Instarnce]);

    const onInChange = (value: any) => {
        setSearchValue(value);
    };
    const onEventChange = (value: any) => {
        setSelectObject(value);
    };
    const onSetAddressChange = (value: any) => {
        setAddressValue(value);
    };
    const onSetAddressListChange = (value: any) => {
        setAddresslist(value);
    };
    return (
        <div className="w-11/12 min-h-[500px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] m-auto mt-20 rounded-2xl mb-20 lg:w-7/12">
            <div className="text-[#031a6e] text-[18px] font-bold text-center pt-5">批量发送代币</div>

            <div className="mt-10 pl-10 pr-10">
                <SelectToken
                    tokenList={tokenList}
                    onInChange={onInChange}
                    onEventChange={onEventChange}
                    open={open}
                ></SelectToken>
            </div>
            <div className="mt-10 pl-10 pr-10 pb-5">
                <AddressList
                    onSetAddressChange={onSetAddressChange}
                    addressValue={addressValue}
                    onSetAddressListChange={onSetAddressListChange}
                    addressList={addressList}
                ></AddressList>
            </div>
        </div>
    );
}
