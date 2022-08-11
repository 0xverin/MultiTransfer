import Footer from "@/components/Footer/index";
import Web3ReactManager from "@/components/Web3ReactManager/index";
import { NetworkContextName } from "@/config";
import { Web3Provider } from "@ethersproject/providers";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "@/components/Header/index";
import Home from "@/view/Home";
export function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider);
    library.pollingInterval = 15000;
    return library;
}
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

function App() {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ProviderNetwork getLibrary={getLibrary}>
                <Router>
                    <Header></Header>

                    <Web3ReactManager>
                        <Route path="/" exact component={Home} />
                    </Web3ReactManager>
                    <Footer></Footer>
                </Router>
            </Web3ProviderNetwork>
        </Web3ReactProvider>
    );
}

export default App;
