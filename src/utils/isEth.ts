import { NATIVE } from "@/config/constants/native";
import { Token } from "@/config/constants/types";
export const isEth = (token: Token, chainId: number) => {
    const native = NATIVE[chainId];
    if (native && token.address === native.address && token.symbol.toLowerCase() === native.symbol.toLowerCase()) {
        return true;
    }
    return false;
};
