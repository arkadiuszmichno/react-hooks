import React, {useContext} from "react";
import {ICategory} from "../interface";
import ShopContext from "../contexts/ShopContext";
import {addCategory, removeCategory} from "../api/categories";

export interface CategoriesProps extends React.ReactHTML {
}

export const Categories = (props: CategoriesProps) => {
    const {categories, setCategories} = useContext(ShopContext)
    let newName = '';
    function addCategoryToContext(name: string) {
        addCategory(name).then(category => {
            console.log(category);
            setCategories([
                ...categories,
                category
            ]);
        });
    }

    function removeCategoryToContext(id: number) {
        removeCategory(id).then(category => {
            console.log(category);
            if (category.ok) {
                const filteredProducts = categories.filter(product => product.id !== id)
                setCategories([...filteredProducts])
            }
        });
    }

    function setName(name: string) {
        newName = name;
    }

    return (
        <div>
            <div className="products">
                <input id="name" name="name" type="text" onChange={e => setName(e.target.value)}/>
                <button onClick={() => addCategoryToContext(newName)}>Dodaj kategorie</button>
            </div>
            <div className="basket">
                Kategorie:
                <table className="center">
                    <tr>
                        <th>Nazwa</th>
                        <th>Akcje</th>
                    </tr>
                    {categories.map((product: ICategory) => (<tr>
                        <td>{product.name}</td>
                        <td><button onClick={() => removeCategoryToContext(product.id)}>Usun</button></td>
                    </tr>))}
                </table>
            </div>
        </div>

    )
}
