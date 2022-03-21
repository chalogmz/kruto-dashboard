import '../../assets/css/Total.css'
import '../../assets/css/Table.css'

import { useState, useEffect } from 'react';
import DetailProduct from '../products/DetailProduct'

function Products() {
    const [producto, setProducto] = useState([]);
    const [productos, setProductos] = useState([]);
    const [index, setIndex] = useState(103);
    const [total, setTotal] = useState();

    useEffect(() => {
        fetch(`https://kruto.herokuapp.com/api/products/${index}`)
            .then(response => response.json())
            .then(data => {
                setProducto(
                    data.product
                )
            })
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        console.log("Se actualizó el componente");
    }, [producto]);

    useEffect(() => {
        return () => console.log("Se desmontó el componente");
    }, []);


    let incrementar = () => {
        setIndex(index + 1);
        fetch(`https://kruto.herokuapp.com/api/products/${index}`)
            .then(response => response.json())
            .then(data => {
                setProducto(
                    data.product
                )
            })
    }

    let decrementar = () => {
        setIndex(index - 1);
        fetch(`https://kruto.herokuapp.com/api/products/${index}`)
            .then(response => response.json())
            .then(data => {
                setProducto(
                    data.product
                )
            })
    }

    useEffect(() => {
        fetch('https://kruto.herokuapp.com/api/products')
            .then(response => response.json())
            .then(data => {
                setTotal(
                    data.countProducts
                )
            })
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        fetch('https://kruto.herokuapp.com/api/products')
            .then(response => response.json())
            .then(data => {
                setProductos(
                    data.data
                )
            })
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="total-contain">
            <div className="total-total">
                <h2 className="title">Total Productos</h2>
                <p className="total">{total}</p>
            </div>
            <div className="product">
                <DetailProduct nombre={producto.name} id={producto.id} descripcion={producto.description} detalle={producto.detail} imagen={producto.image} />
                <button className="boton-avance" onClick={incrementar}> {'>'}  </button>
                <button className="boton-retroceso" onClick={decrementar}>{'<'}</button>
            </div>
            <table class="tabla">
                <tr>
                    <th className="id">Id</th>
                    <th className="name">Nombre</th>
                    <th className="descr">Descripción</th>
                </tr>
                {
                    productos.map((product, i) => {
                        return (
                            <tr key={i}>
                                <td className="idText">{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td><a href={product.detail}>{product.detail}</a></td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    )
}

export default Products;