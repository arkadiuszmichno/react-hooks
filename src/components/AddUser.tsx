import React, {useContext} from "react";
import {addUser} from "../api/users";
import ShopContext from "../contexts/ShopContext";

export interface AddUserProps extends React.ReactHTML {
}

export const AddUser = (props: AddUserProps) => {
    const {users, setUsers} = useContext(ShopContext)
    const user = {
        firstName: '',
        lastName: '',
        login: '',
        gender: ''
    }

    function addUserToSystem() {
        addUser(user).then(usr => {
            console.log(usr);
            setUsers([
                ...users,
                usr
            ]);
        });
    }

    return (
        <div>
            <div className="products">
                <div className="products">
                    <div className="row">
                        <label htmlFor="name">Imie: </label>
                        <input id="firstName" name="firstName" type="text" onChange={e => user.firstName = e.target.value}/>
                    </div>
                    <div className="row">
                        <label htmlFor="name">Nazwisko: </label>
                        <input id="lastName" name="lastName" type="text" onChange={e => user.lastName = e.target.value}/>
                    </div>
                    <div className="row">
                        <label htmlFor="name">Login: </label>
                        <input id="login" name="login" type="text" onChange={e => user.login = e.target.value}/>
                    </div>
                    <div className="row">
                        <label htmlFor="name">Plec: </label>
                        <input id="gender" name="gender" type="text" onChange={e => user.gender = e.target.value}/>
                    </div>
                    <button onClick={() => addUserToSystem()}>Dodaj uzytkownika</button>
                </div>
            </div>
        </div>

    )
}
