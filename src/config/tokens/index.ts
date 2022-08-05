import rinkeby from "./rinkeby.json";

import { ChainId } from "../constants/chainId";
import { Token } from "@/config/constants/types";

type TokenList = { [chainId: number]: Token[] };

const TOKENLIST: TokenList = {
    [ChainId.RINKEBY]: rinkeby,
};

export default TOKENLIST;
