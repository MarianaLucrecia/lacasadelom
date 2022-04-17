import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { products } from '../utils/products';
//const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    //componentDidUpdate
    useEffect(() => {
        if (idCategory === undefined) {
            customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        } else { customFetch(2000, products.filter(item => item.categoryId === idCategory))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;