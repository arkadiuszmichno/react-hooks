import {IGiftCard} from "../interface";

export const fetchGiftCards = async (): Promise<IGiftCard[]> => {
    return await fetch(`http://localhost:9000/giftCard`)
        .then(response => response.json())
}


export const addGiftCard = async (body: any): Promise<IGiftCard> => {
    body.value = parseInt(body.value);
    body.category = parseInt(body.category);
    return await fetch(`http://localhost:9000/giftCard`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        body: JSON.stringify(body)
    }).then(response => response.json())
}

export const removeGiftCard = async (id: number) => {
    return await fetch(`http://localhost:9000/giftCard/` + id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    });
}

export default fetchGiftCards
