import {useState} from "react";
import {ICategory} from "../interface";

function useCategories() {
    const [categories, setBasket] = useState<ICategory[]>([]);

    function addCategories(categories: ICategory[]) {
        setBasket(categories);
    }

    function removeCategory(id: number) {
        const filteredProducts = categories.filter(product => product.id !== id)

        setBasket([...filteredProducts])
    }

    return {
        categories,
        addCategories,
        removeCategory,
    }
}

export default useCategories;
