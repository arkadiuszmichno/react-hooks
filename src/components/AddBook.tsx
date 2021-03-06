import React, {useContext} from "react";
import {addBook} from "../api/books";
import {ICategory} from "../interface";
import ShopContext from "../contexts/ShopContext";

export interface AddBookProps extends React.ReactHTML {
}

export const AddBook = (props: AddBookProps) => {
    const {categories, books, setBooks} = useContext(ShopContext)
    const book = {
        name: '',
        description: '',
        category: ''
    }

    function addBookToSystem() {
        addBook(book).then(bk => {
            console.log(bk);
            setBooks([
                ...books,
                bk
            ]);
        });
    }

    return (
        <div>
            <div className="products">
                <div className="products">
                    <div className="row">
                        <label htmlFor="name">Nazwa: </label>
                        <input id="name" name="name" type="text" onChange={e => book.name = e.target.value}/>
                    </div>
                    <div className="row">
                        <label htmlFor="description">Opis: </label>
                        <input id="description" name="description" type="text" onChange={e => book.description = e.target.value}/>
                    </div>
                    <div className="row">
                        <label htmlFor="category">Kategoria: </label>
                        <select value={this} id="category" name="category" onChange={e => book.category = e.target.value}>
                            <option value=''>---</option>
                            {categories.map((category: ICategory) => (<option value={category.id}>
                                {category.name}
                            </option>))}
                        </select>
                    </div>

                    <button onClick={() => addBookToSystem()}>Dodaj ksiazke</button>
                </div>
            </div>
        </div>

    )
}
