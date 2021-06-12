import React, {useEffect, useState} from "react";
import {IBook, ICategory, IGiftCard, IShopContextState, IUser} from "../interface";
import {fetchCategories} from "../api/categories"
import fetchBooks from "../api/books";

const defaultValue: IShopContextState = {
    categories: [],
    books: [],
    users: [],
    giftCards: [],
    isLoggedIn: false,
    setCategories: () => {
        // Not doing anything at initialization
    },
    setBooks: () => {
        // Not doing anything at initialization
    },
    setUsers: () => {
        // Not doing anything at initialization
    },
    setGiftCards: () => {
        // Not doing anything at initialization
    },
    setIsLoggedIn: () => {
        // Not doing anything at initialization
    }
}

export const ShopContext = React.createContext(defaultValue);

export const ShopContextProvider: React.FC = ({children}) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [books, setBooks] = useState<IBook[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    const [giftCards, setGiftCards] = useState<IGiftCard[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const providerValue: IShopContextState = {
        categories,
        books,
        users,
        giftCards,
        isLoggedIn,
        setCategories,
        setBooks,
        setUsers,
        setGiftCards,
        setIsLoggedIn
    }

    useEffect(() => {
        fetchCategories()
            .then((categs) => {
                console.log(categs)
                setCategories(categs)
            })
        fetchBooks()
            .then((bks) => {
                console.log(bks)
                setBooks(bks)
            })
    }, []);

    return (
        <ShopContext.Provider value={providerValue}>{children}</ShopContext.Provider>
    );
};

export default ShopContext;
