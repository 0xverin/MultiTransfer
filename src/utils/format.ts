import { BigNumberish } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";
import BigNumber from "bignumber.js";

export function formatAddress(str: string) {
    return str.slice(0, 8) + "..." + str.slice(-5);
}
export const formatBalance = (value: BigNumberish, decimals = 18, maxFraction = 0) => {
    const formatted = formatUnits(value, decimals);
    if (maxFraction > 0) {
        const split = formatted.split(".");
        if (split.length > 1) {
            return split[0] + "." + split[1].substring(0, maxFraction);
        }
    }
    return formatted;
};

export function parseAmount(amount: string, decimal = 18) {
    if (!amount) return "0";

    amount = cleanupAmount(amount);

    const split = amount.split(".");
    const wholePart = split[0];
    const fracPart = split[1] || "";
    if (split.length > 2 || fracPart.length > decimal) {
        throw new Error(`Cannot parse '${amount}' as bignumber`);
    }
    return trimLeadingZeroes(wholePart + fracPart.padEnd(decimal, "0"));
}
export function formatAmount(amount: string, decimal = 18) {
    if (!amount) return "0";

    const amountBN = new BigNumber(amount, 10);
    amount = amountBN.toString(10);
    const wholeStr = amount.substring(0, amount.length - decimal) || "0";
    const fractionStr = amount
        .substring(amount.length - decimal)
        .padStart(decimal, "0")
        .substring(0, decimal);

    return trimTrailingZeroes(`${wholeStr}.${fractionStr}`);
}

export function cleanupAmount(amount) {
    return amount.replace(/,/g, "").trim();
}

export function trimTrailingZeroes(value) {
    return value.replace(/\.?0*$/, "");
}

export function trimLeadingZeroes(value) {
    value = value.replace(/^0+/, "");
    if (value === "") {
        return "0";
    }
    return value;
}

export function accAdd(arg1: string | number, arg2: string | number) {
    const num = new BigNumber(arg1).plus(new BigNumber(arg2));

    return num.toFixed();
}

export function accSub(arg1: string | number, arg2: string | number) {
    const num = new BigNumber(arg1).minus(new BigNumber(arg2));
    return num.toFixed();
}
export function accMul(arg1: string | number, arg2: string | number) {
    if (!arg1 || !arg2) {
        return "0";
    }
    const num = new BigNumber(arg1).times(new BigNumber(arg2));
    return num.toString();
}

export function accDiv(arg1: string | number, arg2: string | number) {
    if (!arg1 || !arg2) {
        return 0;
    }
    const num = new BigNumber(arg1).div(new BigNumber(arg2));
    return num.toFixed();
}

//Greater than
export function accGt(arg1: string, arg2: string) {
    return new BigNumber(arg1).gt(new BigNumber(arg2));
}

// Greater than or equal to
export function accGte(arg1: string, arg2: string) {
    return new BigNumber(arg1).gte(new BigNumber(arg2));
}
