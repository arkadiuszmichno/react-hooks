import {useState} from "react";
import {IBook} from "../interface";

function useBasket() {
    const [basket, setBasket] = useState<IBook[]>([]);

    function addBook(book: IBook) {
        setBasket([
            ...basket,
            book
        ])
    }

    function removeBook(id: number) {
        const filteredBooks = basket.filter(book => book.id !== id)

        setBasket([...filteredBooks])
    }

    return {
        basket,
        addBook,
        removeBook,
    }
}

export default useBasket;
