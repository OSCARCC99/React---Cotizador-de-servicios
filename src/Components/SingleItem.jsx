import {moneyFormat} from '../helpers'

const SingleItem = ({price, type, id, eliminarItem, editItem}) => {
    const urlImage = `/src/images/${type}.png`
    
    const handleDelete = (e) =>{
        //prevenir que recargue la ventana
        e.preventDefault();
        const answer = window.confirm(`Borrar suscripcion a: ${type}`);
        if(answer){
            eliminarItem(id)
        }
    }

    const handeleEdit = (e) =>{
        e.preventDefault();
        editItem(id);
    }

    return (
        <div className="single-item">
            <img src={urlImage} alt="Services" />
            <h3>Precio: {moneyFormat(Number(price))}</h3>
            <a href="" className="delete" onClick={handleDelete}>Borrar</a>
            <a href="" className='edit' onClick={handeleEdit}>Editar</a>
        </div>
    );
}

export default SingleItem