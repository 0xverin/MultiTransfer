import { BigNumber } from "@ethersproject/bignumber";
import { Contract } from "@ethersproject/contracts";
import ERC20_ABI from "@/config/abi/erc20.json";
import { isAddress } from "@/utils/isAddress";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { useCallback, useEffect, useState } from "react";
import { useContract } from "./useContract";

export interface BalanceProps {
    value: BigNumber;
    decimals: number;
}
function useTokenBalance(tokenAddress: string): BalanceProps {
    const [balance, setBalance] = useState<BalanceProps>({
        value: BigNumber.from(0),
        decimals: 18,
    });
    const { account, chainId, library } = useActiveWeb3React();
    const addressCheckSum = isAddress(tokenAddress);
    const tokenContract = useContract(tokenAddress ? tokenAddress : undefined, ERC20_ABI, false);

    const fetchBalance = useCallback(async () => {
        async function getBalance(contract: Contract | null, owner: string | null | undefined): Promise<BalanceProps> {
            try {
                if (account && chainId && !contract) {
                    const ethBalance = await library?.getBalance(account);
                    return { value: BigNumber.from(ethBalance), decimals: 18 };
                }

                const balance = await contract?.balanceOf(owner);
                const decimals = await contract?.decimals();

                return { value: BigNumber.from(balance), decimals: decimals };
            } catch (error) {
                console.error(error);
                return { value: BigNumber.from(0), decimals: 18 };
            }
        }
        const balance = await getBalance(tokenContract, account);
        setBalance(balance);
    }, [account, chainId, library, tokenContract]);

    useEffect(() => {
        if (account) {
            fetchBalance();
        }
    }, [account, setBalance, tokenAddress, fetchBalance, tokenContract]);

    return balance;
}

export default useTokenBalance;
