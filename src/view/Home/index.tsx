import React, { useState } from "react";
import { useEffect } from "react";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import SelectToken from "./SelectToken";
export default function Home() {
    const { account, chainId, error, activate } = useActiveWeb3React();
    const [tokenList, setTokenList] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState("");

    // useEffect(() => {
    //     activate(injected, undefined, true).catch(() => {
    //         activate(injected);
    //     });
    // }, []);
    const onInChange = (value: any) => {
        console.log(value);
    };
    const onEventChange = (value: any) => {
        console.log(value);
    };
    return (
        <div className="w-11/12 min-h-[500px] shadow-[0_0_10px_0_rgba(0,0,0,0.25)] m-auto mt-20 rounded-2xl mb-20 lg:w-7/12">
            <div className="text-[#031a6e] text-[18px] font-bold text-center pt-5">批量发送代币</div>

            <div className="mt-10 pl-10 pr-10 ">
                <SelectToken
                    tokenList={tokenList}
                    searchValue={searchValue}
                    onInChange={onInChange}
                    onEventChange={onEventChange}
                ></SelectToken>
            </div>
        </div>
    );
}
