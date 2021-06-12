import React, {useContext} from "react";
import {ICategory} from "../interface";
import {addGiftCard} from "../api/giftCards";
import ShopContext from "../contexts/ShopContext";

export interface AddGiftCardProps extends React.ReactHTML {
}

export const AddGiftCard = (props: AddGiftCardProps) => {
    const {categories, giftCards, setGiftCards} = useContext(ShopContext)
    const giftCard = {
        name: '',
        value: '',
        category: ''
    }

    function addBookToSystem() {
        addGiftCard(giftCard).then(giftCard => {
            console.log(giftCard);
            setGiftCards([
                ...giftCards,
                giftCard
            ]);
        });
    }

    return (
        <div>
            <div className="products">
                <div className="products">
                    <div className="row">
                        <label htmlFor="name">Nazwa: </label>
                        <input id="name" name="name" type="text" onChange={e => giftCard.name = e.target.value}/>
                    </div>
                    <div className="row">
                        <label htmlFor="value">Wartosc: </label>
                        <input id="value" name="value" type="number" onChange={e => giftCard.value = e.target.value}/>
                    </div>
                    <div className="row">
                        <label htmlFor="category">Kategoria: </label>
                        <select value={this} id="category" name="category" onChange={e => giftCard.category = e.target.value}>
                            {categories.map((category: ICategory) => (<option value={category.id}>
                                {category.name}
                            </option>))}
                        </select>
                    </div>

                    <button onClick={() => addBookToSystem()}>Dodaj karte podarunkowa</button>
                </div>
            </div>
        </div>

    )
}
