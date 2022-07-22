import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

interface propsInter {
    tokenList: Array<any>;
    onInChange: (value: any) => void;
    onEventChange: (value: any) => void;
    open: boolean;
}

export default function SelectToken(props: propsInter) {
    const { tokenList, onInChange, onEventChange, open } = props;
    const [options, setOptions] = useState<any>([]);
    const loading = open && options.length === 0;

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <div>
            <div className="text-[#031a6e] text-[16px]">选择代币</div>
            <Autocomplete
                id="asynchronous-demo"
                disableClearable
                options={tokenList}
                sx={{
                    marginTop: "10px",
                }}
                getOptionLabel={(option) => option.symbol + "  " + option.address}
                onInputChange={(event, newInputValue) => {
                    onInChange(newInputValue);
                }}
                onChange={(event, newValue) => {
                    onEventChange(newValue);
                }}
                renderOption={(props, option) => (
                    <li key={option.address} {...props}>
                        {option.symbol} {option.address}
                    </li>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                </React.Fragment>
                            ),
                        }}
                        // label={t("label1")}
                    />
                )}
            />
        </div>
    );
}
