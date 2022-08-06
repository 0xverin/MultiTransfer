import addresses from "@/config/constants/contractAddresses";
import { Address } from "@/config/constants/types";
import defaultChainId from "@/config/constants/defaultChainId";

export const getAddress = (address: Address, chainId: number): string => {
    return address[chainId] ? address[chainId] : address[defaultChainId];
};

export const getMultiTransferAddress = (chainId: number) => {
    return getAddress(addresses.multiTransfer, chainId);
};
