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
    },
    setBooks: () => {
    },
    setUsers: () => {
    },
    setGiftCards: () => {
    },
    setIsLoggedIn: () => {
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
            .then((categories) => {
                console.log(categories)
                setCategories(categories)
            })
        fetchBooks()
            .then((books) => {
                console.log(books)
                setBooks(books)
            })
    }, []);

    return (
        <ShopContext.Provider value={providerValue}>{children}</ShopContext.Provider>
    );
};

export default ShopContext;
