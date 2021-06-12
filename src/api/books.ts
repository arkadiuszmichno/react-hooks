import {IBook} from "../interface";

export const fetchBooks = async (): Promise<IBook[]> => {
    return await fetch(`http://localhost:9000/books`)
        .then(response => response.json())
}


export const addBook = async (body: any): Promise<IBook> => {
    body.category = parseInt(body.category);
    return await fetch(`http://localhost:9000/books`, {
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
    return await fetch(`http://localhost:9000/books/` + id, {
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
