export interface Token {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI?: string;
    chainId: number | undefined;
}
