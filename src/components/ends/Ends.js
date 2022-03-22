import '../../assets/css/End.css'

import { useState, useEffect } from 'react';
import DetailProduct from '../products/DetailProduct';
import DetailUser from '../users/DetailUser';

function Ends() {
    const [producto, setUltimoProduct] = useState({});
    const [usuario, setUltimoUser] = useState({});
    const [totalProductos, setProductos] = useState(1);
    const [totalUsuarios, setUsuarios] = useState(1);

    useEffect(() => {
        fetch(`https://kruto.herokuapp.com/api/products`)
            .then(response => response.json())
            .then(data => {
                setProductos(
                    data.count
                )
            })  
            .catch(error => console.error(error))

        fetch(`https://kruto.herokuapp.com/api/users`)
            .then(response => response.json())
            .then(data => {
                setUsuarios(
                    data.count
                )
            })
            .catch(error => console.error(error)) 
    }, []);
    useEffect(() => {
        fetch(`https://kruto.herokuapp.com/api/products/${totalProductos}`)
             .then(response => response.json())
             .then(data => {
                 setUltimoProduct(
                     data
                 )
             })  
             .catch(error => console.error(error))
 
     }, [totalProductos]);
    useEffect(() => {
        fetch(`https://kruto.herokuapp.com/api/users/${totalUsuarios}`)
            .then(response => response.json())
            .then(data => {
                setUltimoUser(
                    data.user
                )
            })
            .catch(error => console.error(error)) 

     }, [totalUsuarios]);

     console.log(usuario)

    return(
        <div className="end-contain">
            <div className="producto">
                <h2 className="title">Último Producto Creado</h2>
                <DetailProduct nombre={producto.name} id={producto.id} descripcion={producto.description} imagen={producto.imagenlUrl} />
            </div>
            <div className="producto">
                <h2 className="title">Último Usuario Creado</h2>
                <DetailUser nombre={usuario.username} id={usuario.id} email={usuario.email} imagen={usuario.urlImage} />
            </div>
        </div>      
    )
    
    
}

export default Ends;