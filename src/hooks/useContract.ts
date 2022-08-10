import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { getProviderOrSigner } from "@/utils";
import { getMultiTransferAddress } from "@/utils/contractAddressHelper";
import { isAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";
import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";
import { useMemo } from "react";

import ERC20_ABI from "@/config/abi/erc20.json";
import Transfer_ABI from "@/config/abi/MutilTransfer.json";
// export const useExampleContract = (address: string, withSignerIfPossible = true) => {
//   return useContract(address, ContractAbi, withSignerIfPossible);
// };

// Multiple chains
// export const useBatchTransfer = (withSignerIfPossible?: boolean) => {
//   const { chainId } = useActiveWeb3React();
//   return useContract(getContractAddress(chainId), ContractAbi, withSignerIfPossible);
// };

export const useTransfer = (withSignerIfPossible = true) => {
    const { chainId } = useActiveWeb3React();
    return useContract(chainId ? getMultiTransferAddress(chainId) : undefined, Transfer_ABI, withSignerIfPossible);
};

export const useERC20 = (address: string, withSignerIfPossible = true) => {
    return useContract(address, ERC20_ABI, withSignerIfPossible);
};

export function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
    const { library, account } = useActiveWeb3React();
    return useMemo(() => {
        if (!address || address === AddressZero || !ABI || !library) return null;
        try {
            return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
        } catch (error) {
            console.error("Failed to get contract", error);
            return null;
        }
    }, [address, ABI, library, withSignerIfPossible, account]);
}

export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }
    return new Contract(address, ABI, getProviderOrSigner(library, account));
}
