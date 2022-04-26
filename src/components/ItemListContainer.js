import ItemList from "./ItemList";
//import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const ItemListContainer =()=>{
  const [ datos,setDatos] = useState([]);
  //const { idCategory } = useParams(); 

  useEffect(()=>{
    const fetchFromFirestore = async() => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return dataFromFirestore;
    }
    fetchFromFirestore()
        .then(result => setDatos(result))
        .catch(err => console.log(err));
  }, [datos]);

  return (
    <ItemList items={datos} />
);
}

export default ItemListContainer;