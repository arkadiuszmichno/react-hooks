type Dispatch<A> = (value: A) => void;

export interface ICategory {
    id: number;
    name: string;
}

export interface IBook {
    id: number;
    name: string;
    description: string;
    category: number
}

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    gender: number
}

export interface IGiftCard {
    id: number;
    name: string;
    value: number;
    category: number
}

export interface ISignUpFormStore {
    email: string,
    password: string
}

export interface IOauthContextState {
    isLoggedIn: boolean,
    setIsLoggedIn: Function
}

export type IShopContextState = {
    categories: ICategory[];
    books: IBook[];
    users: IUser[];
    giftCards: IGiftCard[],
    isLoggedIn: boolean,
    setCategories: Function;
    setBooks: Function;
    setUsers: Function,
    setGiftCards: Function,
    setIsLoggedIn: Function
}
