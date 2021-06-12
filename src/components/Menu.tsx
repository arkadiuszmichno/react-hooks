import '../App.css';
import ShopContext from "../contexts/ShopContext";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Welcome from "./Welcome";
import {Books} from "./Books";
import {Categories} from "./Categories";
import {Basket} from "./Basket";
import {AddBook} from "./AddBook";
import {Users} from "./Users";
import {AddUser} from "./AddUser";
import {AddGiftCard} from "./AddGiftCard";
import {GiftCards} from "./GiftCards";
import {SignInModal} from "./SignInModal";
import {SignUpModal} from "./SignUpModal";
import {useContext} from "react";
import {LoggedIn} from "./LoggedIn";

function Menu() {
    const {isLoggedIn, setIsLoggedIn} = useContext(ShopContext)

    return (
        <div>
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
                    {isLoggedIn &&
                    <li><Link onClick={() => setIsLoggedIn(false)} to="/">Wyloguj</Link></li>}
                    {!isLoggedIn &&
                    <li><Link to="/signin">Zaloguj</Link></li>}
                    {!isLoggedIn &&
                    <li><Link to="/signup">Zarejestruj</Link></li>}

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
                <Route path="/signin" component={SignInModal}/>
                <Route path="/signup" component={SignUpModal}/>
                <Route path="/loggedIn" component={LoggedIn}/>
            </BrowserRouter>
        </div>
    );
}

export default Menu;
