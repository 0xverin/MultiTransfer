import arrow from "@/assets/arrow.svg";
import logo from "@/assets/logo.svg";
import { connectorLocalStorageKey } from "@/config/connectors/index";
import { NETWORK_ICON, NETWORK_LABEL } from "@/config/constants/chainIcon";
import { injected } from "@/config/constants/wallets";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { formatAddress } from "@/utils/format";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UnsupportedChainIdError } from "@web3-react/core";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const contractlist = [
    {
        chain: "Rinkeby",
        link: "https://rinkeby.etherscan.io/address/0xB304F14dc0fF9bC596D5d1f0e4D67dCA3278f8cC",
        address: "0xB304F14dc0fF9bC596D5d1f0e4D67dCA3278f8cC",
    },
    {
        chain: "Kovan",
        link: "https://kovan.etherscan.io/address/0xDffd2226496D02a1108618aeA58F9aA3D5A3538F",
        address: "0xDffd2226496D02a1108618aeA58F9aA3D5A3538F",
    },
    {
        chain: "Goerli",
        link: "https://goerli.etherscan.io/address/0x129beB5ed515aD15Ec74D1b61d02b92aF1b39bd5",
        address: "0x129beB5ed515aD15Ec74D1b61d02b92aF1b39bd5",
    },
    {
        chain: "BSC",
        link: "https://bscscan.com/address/0xEcC118Ce3bCC08e574010100ac7d5eD65160fc70",
        address: "0xEcC118Ce3bCC08e574010100ac7d5eD65160fc70",
    },
    {
        chain: "BSC Testnet",
        link: "https://testnet.bscscan.com/address/0x129beB5ed515aD15Ec74D1b61d02b92aF1b39bd5",
        address: "0x129beB5ed515aD15Ec74D1b61d02b92aF1b39bd5",
    },
];
export default function Header() {
    const { account, activate, chainId, deactivate, active } = useActiveWeb3React();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="w-full h-[60px] shadow-md flex justify-center items-center">
            <div className="h-full w-11/12 md:w-7/12 flex item-center justify-between">
                <div className="w-1/2 h-full  flex items-center">
                    <img src={logo} alt="" width="35" />
                    <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        sx={{
                            marginLeft: "10px",
                            fontSize: "14px",
                            color: "#01385A",
                        }}
                    >
                        <img src={arrow} alt="" />
                        合约地址
                    </Button>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        {contractlist.map((item, index) => (
                            <MenuItem
                                onClick={() => {
                                    window.open(item.link, "_blank");
                                    handleClose();
                                }}
                                key={index}
                            >
                                <div className="text-[#01385A] text-[10px] sm:text-[14px]">
                                    {item.chain}—{item.address}
                                </div>
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div className="w-1/2 flex items-center justify-end">
                    {account && (
                        <div>
                            <div className="text-[#01385A] text-[14px] font-bold mr-5 hidden sm:block">
                                {NETWORK_LABEL[chainId]}
                            </div>
                            <img src={NETWORK_ICON[chainId]} alt="" width={32} className="rounded-[50px] mr-5" />
                        </div>
                    )}

                    <div
                        className="m-w-[150px] px-5 h-14 rounded-xl bg-[#01385A] flex items-center justify-center text-white font-bold text-lg hover:cursor-pointer"
                        onClick={() => {
                            activate(injected, undefined, true)
                                .then(() => {
                                    localStorage.setItem(connectorLocalStorageKey, "injected");
                                })
                                .catch((error) => {
                                    console.log(error);

                                    if (error instanceof UnsupportedChainIdError) {
                                        toast.error("Unsupported ChainId", {
                                            position: toast.POSITION.TOP_LEFT,
                                            theme: "colored",
                                        });
                                    }
                                });
                        }}
                    >
                        <span className="hidden sm:block">{account ? formatAddress(account) : "Connect"}</span>

                        <span className="block sm:hidden text-[10px]">
                            {account ? "..." + account.slice(-4) : "Connect"}
                        </span>

                        {account && (
                            <span
                                className="ml-5 hover:cursor-pointer text-red-300 hidden  sm:block "
                                onClick={() => {
                                    deactivate();
                                }}
                            >
                                断开
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
}
