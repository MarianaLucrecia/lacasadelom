import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Add, Remove } from '@material-ui/icons'

//Declaramos la clase y lo que se va a renderizar
export default function ItemCount ({stock, initial, onAdd}) { 
        //Declaramos el estado de la cantidad de items  
        const [count, setCount] = useState(0);
        
        useEffect(() => {
            setCount(initial);
        }, [initial]);
        //Funcion que se ejecuta cuando se hace click en el boton de restar
        const remove = () => {
            if(count > initial){
                setCount(count - 1);
            }
        }
        //Funcion que se ejecuta cuando se hace click en el boton de sumar
        const add = () => {
            if(count < stock){
                setCount(count + 1);
            }
        }
        //Retornamos el componente
        return (
            <div className="d-grid gap-2">
                <div className="mx-4 text-center">
                <Button variant="outline-danger" size="sm" onClick={remove}><Remove /></Button>
                    <span className="mx-5">{initial}</span>
                <Button variant="outline-success" size="sm" onClick={add}><Add /></Button>
                </div>                        
                <div className="d-grid gap-2">
                    {
                        stock
                        ?<Button variant="primary" size="small" onClick={() => onAdd(count)}>Add to Cart</Button>
                        :<Button variant="danger" size="small" disabled>Out of Stock</Button>
                    }                         
                </div>
            </div>
        );    
}