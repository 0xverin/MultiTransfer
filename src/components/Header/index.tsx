import React, { useEffect } from "react";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { injected } from "@/config/constants/wallets";
import { formatAddress } from "@/utils/formatString";
import { UnsupportedChainIdError } from "@web3-react/core";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Header() {
    const { account, chainId, error, activate } = useActiveWeb3React();
    const notify = () => {
        toast.error("UnsupportedChainId", {
            position: toast.POSITION.TOP_LEFT,
            theme: "colored",
        });
    };
    return (
        <div className="w-full h-[60px] shadow-md flex justify-center items-center">
            <div
                className="w-[150px] h-14 rounded-xl bg-[#00A5DA] flex items-center justify-center text-white font-bold text-lg hover:cursor-pointer"
                onClick={() => {
                    activate(injected, undefined, true).catch((error) => {
                        if (error instanceof UnsupportedChainIdError) {
                            notify();
                        }
                    });
                }}
            >
                {account ? formatAddress(account) : "Connect"}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
}
