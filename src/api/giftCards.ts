import {IGiftCard} from "../interface";

export const fetchGiftCards = async (): Promise<IGiftCard[]> => {
    return fetch(process.env.REACT_APP_SERVER_URL + `/giftCard`)
        .then(response => response.json())
}


export const addGiftCard = async (body: any): Promise<IGiftCard> => {
    body.value = parseInt(body.value);
    body.category = parseInt(body.category);
    return fetch(process.env.REACT_APP_SERVER_URL + `/giftCard`, {
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
    return fetch(process.env.REACT_APP_SERVER_URL + `/giftCard/` + id, {
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
