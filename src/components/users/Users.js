import '../../assets/css/Total.css'
import '../../assets/css/Table.css'

import { useState, useEffect } from 'react';
import DetailUser from './DetailUser';

function Users() {
    const [usuario, setUsuario] = useState([]);
    const [usuarios,setUsuarios] = useState([]);
    const [index, setIndex] = useState(314);
    const [total, setTotal] = useState();

    useEffect(() => {
        console.log("Se montó el componente");
        fetch(`https://kruto.herokuapp.com/api/users/${index}`)
            .then(response => response.json())
            .then(data => {
                setUsuario(
                    data.user
                )
            })
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        console.log("Se actualizó el componente");
    }, [usuario]);

    useEffect(() => {
        return () => console.log("Se desmontó el componente");
    }, []);


    let incrementar = () => {
        setIndex(index + 1);
        fetch(`https://kruto.herokuapp.com/api/users/${index}`)
            .then(response => response.json())
            .then(data => {
                setUsuario(
                    data.user
                )
            })
    }

    let decrementar = () => {
        setIndex(index - 1);
        fetch(`https://kruto.herokuapp.com/api/users/${index}`)
            .then(response => response.json())
            .then(data => {
                setUsuario(
                    data.user
                )
            })
    }

    useEffect(() => {
        console.log("Se montó el componente");
        fetch('https://kruto.herokuapp.com/api/users')
            .then(response => response.json())
            .then(data => {
                setTotal(
                    data.count
                )
            })
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        fetch('https://kruto.herokuapp.com/api/users')
            .then(response => response.json())
            .then(data => {
                setUsuarios(
                    data.users
                )
            })
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="total-contain">
            <div className="total-total">
                <h2 className="title">Total Usuarios</h2>
                <p className="total">{total}</p>
            </div>
            <div className="product">
                <DetailUser nombre={usuario.name} id={usuario.id} email={usuario.email} imagen={usuario.image} />
                <button className="boton-avance" onClick={incrementar}>{'>'} </button>
                <button className="boton-retroceso" onClick={decrementar}>{'<'}</button>
            </div>
            <table class="tabla">
                <tr>
                    <th className="id">Id</th>
                    <th className="name">Nombre</th>
                    <th className="descr">Email</th>
                </tr>
                {
                    usuarios.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td className="idText">{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })
                }

            </table>

        </div>
    )
}

export default Users;