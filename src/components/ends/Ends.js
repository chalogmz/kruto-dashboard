import '../../assets/css/End.css'

import { useState, useEffect } from 'react';
import DetailProduct from '../products/DetailProduct';
import DetailUser from '../users/DetailUser';

function Ends() {
    const [producto, setUltimoProduct] = useState({});
    useEffect(() => {
        console.log("Se montó el componente 1");
        fetch('https://kruto.herokuapp.com/api/products')
            .then(response => response.json())
            .then(data => {
                setUltimoProduct(
                    data.latest
                )
            })
            .catch(error => console.error(error))
    }, []);

    const [usuario, setUltimoUser] = useState({});
    useEffect(() => {
        console.log("Se montó el componente 1");
        fetch('https://kruto.herokuapp.com/api/users')
            .then(response => response.json())
            .then(data => {
                setUltimoUser(
                    data.latest
                )
            })
            .catch(error => console.error(error))
    }, []);

    return(
        <div className="end-contain">
            <div className="producto">
                <h2 className="title">Último Producto Creado</h2>
                <DetailProduct nombre={producto.name} id={producto.id} descripcion={producto.description} detalle={producto.detail} imagen={producto.image} />
            </div>

            <div className="producto">
                <h2 className="title">Último Usuario Creado</h2>
                <DetailUser nombre={usuario.name} id={usuario.id} email={usuario.email} imagen={usuario.image} />
            </div>
        </div>      
    )
    
    
}

export default Ends;