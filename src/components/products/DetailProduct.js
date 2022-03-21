import '../../assets/css/Detail.css'
function DetailProduct(props) {
    return(
        <div>
            <article>
                <label className="keyText">Id: </label><label>{props.id}</label><br />
                <label className="keyText">Nombre: </label><label>{props.nombre}</label><br />
                <label className="keyText">Descripcion: </label><label>{props.descripcion}</label><br />
                <div className="imagen">
                    <img className="img-product" src={props.imagen}></img><br />
                </div>
            </article>
        </div>
    )
}

export default DetailProduct;