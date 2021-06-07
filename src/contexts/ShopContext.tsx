import React, {useEffect, useState} from "react";
import {IBook, ICategory, IGiftCard, IShopContextState, IUser} from "../interface";
import {fetchCategories} from "../api/categories"
import fetchBooks from "../api/books";

const defaultValue: IShopContextState = {
    categories: [],
    books: [],
    users: [],
    giftCards: [],
    setCategories: () => {
    },
    setBooks: () => {
    },
    setUsers: () => {
    },
    setGiftCards: () => {
    }
}

export const ShopContext = React.createContext(defaultValue);

export const ShopContextProvider: React.FC = ({children}) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [books, setBooks] = useState<IBook[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    const [giftCards, setGiftCards] = useState<IGiftCard[]>([]);

    const providerValue: IShopContextState = {
        categories,
        books,
        users,
        giftCards,
        setCategories,
        setBooks,
        setUsers,
        setGiftCards
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
