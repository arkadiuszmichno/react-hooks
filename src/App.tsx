import './App.css';
import {ShopContextProvider} from "./contexts/ShopContext";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Welcome from "./components/Welcome";
import {Books} from "./components/Books";
import {Categories} from "./components/Categories";
import {Basket} from "./components/Basket";
import {AddBook} from "./components/AddBook";
import {Users} from "./components/Users";
import {AddUser} from "./components/AddUser";
import {AddGiftCard} from "./components/AddGiftCard";
import {GiftCards} from "./components/GiftCards";

function App() {
    return (
        <div className="App">
            <div>
                <ShopContextProvider>
                    <BrowserRouter>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/basket">Koszyk</Link></li>
                            <li><Link to="/books">Ksiazki</Link></li>
                            <li><Link to="/addbook">Dodaj ksiazke</Link></li>
                            <li><Link to="/categories">Kategorie</Link></li>
                            <li><Link to="/users">Uzytkownicy</Link></li>
                            <li><Link to="/adduser">Dodaj uzytkownika</Link></li>
                            <li><Link to="/giftcards">Karty podarunkowe</Link></li>
                            <li><Link to="/addgiftcard">Dodaj karte podarunkowa</Link></li>
                        </ul>
                        <Route path="/" component={Welcome}/>
                        <Route path="/books" component={Books}/>
                        <Route path="/basket" component={Basket}/>
                        <Route path="/addbook" component={AddBook}/>
                        <Route path="/categories" component={Categories}/>
                        <Route path="/users" component={Users}/>
                        <Route path="/adduser" component={AddUser}/>
                        <Route path="/giftcards" component={GiftCards}/>
                        <Route path="/addgiftcard" component={AddGiftCard}/>
                    </BrowserRouter>
                </ShopContextProvider>
            </div>
        </div>
    );
}

export default App;
