import React, {useContext} from "react";
import {IBook} from "../interface";
import {removeBook} from "../api/books";
import ShopContext from "../contexts/ShopContext";

export interface BooksProps extends React.ReactHTML {
}

export const Books = (props: BooksProps) => {
    const {categories, books, setBooks} = useContext(ShopContext)

    function remove(id: number) {
        removeBook(id).then(book => {
            console.log(book);
            if (book.ok) {
                const filteredProducts = books.filter(product => product.id !== id)
                setBooks([...filteredProducts])
            }
        });
    }

    return (
        <div>
            <div className="products">
                <table className="center">
                    <tr>
                        <th>Nazwa</th>
                        <th>Opis</th>
                        <th>Kategoria</th>
                        <th>Akcje</th>
                    </tr>
                    {books.map((product: IBook) => (<tr>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{categories.filter(category => category.id === product.category)[0].name}</td>
                        <td>
                            <button onClick={() => remove(product.id)}>Remove</button>
                        </td>
                    </tr>))}
                </table>
            </div>
        </div>

    )
}
