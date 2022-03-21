import '../../assets/css/Detail.css'
function DetailProduct(props) {
    return(
        <div>
            <article>
                <label className="keyText">Id: </label><label>{props.id}</label><br />
                <label className="keyText">Nombre: </label><label>{props.nombre}</label><br />
                <label className="keyText">Correo: </label><label>{props.email}</label><br />
                <div className="imagen">
                    <img className="img-product" src={props.imagen} alt="Imagen de perfil"></img><br />
                </div>
            </article>
        </div>
    )
}

export default DetailProduct;