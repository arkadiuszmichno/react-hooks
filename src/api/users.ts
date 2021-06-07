import {IUser} from "../interface";

export const fetchUsers = async (): Promise<IUser[]> => {
    return await fetch(`http://localhost:12345/user`)
        .then(response => response.json())
}


export const addUser = async (body: any): Promise<IUser> => {
    return await fetch(`http://localhost:12345/user`, {
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

export const removeUser = async (id: number) => {
    return await fetch(`http://localhost:12345/user/` + id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    });
}

export default fetchUsers
