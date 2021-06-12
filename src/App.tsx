import './App.css';
import {ShopContextProvider} from "./contexts/ShopContext";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="App">
            <div>
                <ShopContextProvider>
                    <Menu/>
                </ShopContextProvider>
            </div>
        </div>
    );
}

export default App;
