import "./Item.css";
import { Link } from "react-router-dom";
const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className="cardProducto">
            <p>ID: {id} </p>
            <p>Nombre: {nombre} </p>
            <p>Precio: {precio} </p>
            <img className="imgProducto" src={img} alt={nombre} />
            {
                //<button className='btnProducto' >Mas detalles</button>
            }
            <Link to={`/item/${id}`}> Mas Detalles </Link>
        </div>
    );
};

export default Item;
