import React from "react";
import { useEffect } from "react";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";

export default function Home() {
    const { account, chainId, error, activate } = useActiveWeb3React();

    // useEffect(() => {
    //     activate(injected, undefined, true).catch(() => {
    //         activate(injected);
    //     });
    // }, []);
    return <div></div>;
}
