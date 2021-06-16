import {IBook} from "../interface";

export const fetchBooks = async (): Promise<IBook[]> => {
    return fetch(process.env.SERVER_URL + `/books`)
        .then(response => response.json())
}


export const addBook = async (body: any): Promise<IBook> => {
    body.category = parseInt(body.category);
    return fetch(process.env.SERVER_URL + `/books`, {
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

export const removeBook = async (id: number) => {
    return fetch(process.env.SERVER_URL + `/books/` + id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    });
}

export default fetchBooks
