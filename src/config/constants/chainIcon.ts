import { ChainId } from "./chainId";

const Bsc = "https://raw.githubusercontent.com/sushiswap/icons/master/network/bsc.jpg";
const Goerli = "https://raw.githubusercontent.com/sushiswap/icons/master/network/goerli.jpg";
const Kovan = "https://raw.githubusercontent.com/sushiswap/icons/master/network/kovan.jpg";
const Mainnet = "https://raw.githubusercontent.com/sushiswap/icons/master/network/mainnet.jpg";
const Rinkeby = "https://raw.githubusercontent.com/sushiswap/icons/master/network/rinkeby.jpg";
const Ropsten = "https://raw.githubusercontent.com/sushiswap/icons/master/network/ropsten.jpg";

export const NETWORK_ICON = {
    [ChainId.ETHEREUM]: Mainnet,
    [ChainId.ROPSTEN]: Ropsten,
    [ChainId.RINKEBY]: Rinkeby,
    [ChainId.GOERLI]: Goerli,
    [ChainId.KOVAN]: Kovan,
    [ChainId.BSC]: Bsc,
    [ChainId.BSC_TESTNET]: Bsc,
};

export const NETWORK_LABEL: { [ChainId: number]: string } = {
    [ChainId.ETHEREUM]: "Ethereum",
    [ChainId.RINKEBY]: "Rinkeby",
    [ChainId.ROPSTEN]: "Ropsten",
    [ChainId.GOERLI]: "Goerli",
    [ChainId.KOVAN]: "Kovan",
    [ChainId.BSC]: "BSC",
    [ChainId.BSC_TESTNET]: "BSC Testnet",
};
