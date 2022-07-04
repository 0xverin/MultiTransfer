import React from "react";
import { useEffect } from "react";
import { injected } from "@/config/constants/wallets";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { connectorLocalStorageKey } from "@/config/connectors/index";

export default function Home() {
    const { account, chainId, error, activate } = useActiveWeb3React();

    useEffect(() => {
        console.log(window.localStorage.getItem(connectorLocalStorageKey));

        activate(injected, undefined, true).catch(() => {
            activate(injected);
        });
    }, []);
    return <div>{account}</div>;
}
