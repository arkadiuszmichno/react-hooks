import { ICategory } from "../interface";

export const fetchCategories = async (): Promise<ICategory[]> => {
    return fetch(`http://localhost:9000/category`)
        .then(response => response.json())
}

export const addCategory = async (name: string): Promise<ICategory> => {
    let body = {
        name: name
    }
    return fetch(`http://localhost:9000/category`, {
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

export const removeCategory = async (id: number) => {
    return fetch(`http://localhost:9000/category/` + id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    });
}


export default fetchCategories
