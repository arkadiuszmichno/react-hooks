import React, {useContext} from "react";
import {IGiftCard} from "../interface";
import ShopContext from "../contexts/ShopContext";
import {removeGiftCard} from "../api/giftCards";

export interface GiftCardsProps extends React.ReactHTML {
}

export const GiftCards = (props: GiftCardsProps) => {
    const {categories, giftCards, setGiftCards} = useContext(ShopContext)

    function remove(id: number) {
        removeGiftCard(id).then(giftCard => {
            console.log(giftCard);
            if (giftCard.ok) {
                const filteredProducts = giftCards.filter(giftCard => giftCard.id !== id)
                setGiftCards([...filteredProducts])
            }
        });
    }

    return (
        <div>
            <div className="products">
                <table className="center">
                    <tr>
                        <th>Nazwa</th>
                        <th>Wartosc</th>
                        <th>Kategoria</th>
                        <th>Akcje</th>
                    </tr>
                    {giftCards.map((giftCard: IGiftCard) => (<tr>
                        <td>{giftCard.name}</td>
                        <td>{giftCard.value}</td>
                        <td>{categories.filter(category => category.id === giftCard.category)[0].name}</td>
                        <td>
                            <button onClick={() => remove(giftCard.id)}>Remove</button>
                        </td>
                    </tr>))}
                </table>
            </div>
        </div>

    )
}
