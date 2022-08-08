import { BigNumberish } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";

export function formatAddress(str: string) {
    return str.slice(0, 8) + "..." + str.slice(-5);
}
export const formatBalance = (value: BigNumberish, decimals = 18, maxFraction = 0) => {
    const formatted = formatUnits(value, decimals);
    if (maxFraction > 0) {
        const split = formatted.split(".");
        if (split.length > 1) {
            return split[0] + "." + split[1].substr(0, maxFraction);
        }
    }
    return formatted;
};
