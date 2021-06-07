import React, {useContext} from "react";
import {IBook} from "../interface";
import ShopContext from "../contexts/ShopContext";
import useBasket from "../hooks/useBasket";

export interface BasketProps extends React.ReactHTML {
}

export const Basket = (props: BasketProps) => {
    const {categories, books} = useContext(ShopContext)
    const {basket, addBook, removeBook} = useBasket();

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
                        <td><button onClick={() => addBook(product)}>add product to basket</button></td>
                    </tr>))}
                </table>
            </div>

            Koszyk:

            <div className="basket">
                <table className="center">
                    <tr>
                        <th>Nazwa</th>
                        <th>Opis</th>
                        <th>Kategoria</th>
                        <th>Akcje</th>
                    </tr>
                    {basket.map((product: IBook) => (<tr>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{categories.filter(category => category.id === product.category)[0].name}</td>
                        <td><button onClick={() => removeBook(product.id)}>remove product</button></td>
                    </tr>))}
                </table>
            </div>
        </div>

    )
}
