import { useEffect, useState } from "react";
import { useActiveWeb3React } from "./useActiveWeb3React";
import { useERC20 } from "./useContract";
import { getAddress, isAddress } from "@ethersproject/address";


import { Erc20 } from "@/config/abi/types";
import { Token } from "@/config/constants/types";
