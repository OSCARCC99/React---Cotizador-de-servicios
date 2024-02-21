import { useState } from "react";

const FormAddSubs = ({
  setType,
  setPrice,
  type,
  price,
  setSubs,
  subs,
  editId,
  setEditId,
  spent,
  count
}) => {
  //manejador de errores
  const [error, setError] = useState(false);
  const [errorMoney, setErrorMoney] = useState(false);

  const handleSubs = (e) => {
    e.preventDefault();
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    if(count - spent < Number(price)){
        setErrorMoney(true);
        return;
    }
    setError(false);
    setErrorMoney(false);
    //si el ID es diferente de vacio, osea que incluye un ID
    if (editId != "") {
    //para que reiniice la condicion en la siguiente iteracion
      setEditId("")
      const newSubs = subs.map((item) => {
        if (item.id === editId) {
          item.type = type;
          item.price = price;
        }
        return item;
      });
      setSubs(newSubs);
    } else {
      const data = {
        type: type,
        price: price,
        id: Date.now(),
      };
      //reiniciar el valor del tipo y el precio
      setSubs([...subs, data]);
    }
    setType("");
    setPrice("");
    //console.log(subs)
    //console.log(type)
    //console.log(price)
  };

  return (
    <div className="add-subscription">
      <h3>Agregar Suscripciones</h3>
      <form onSubmit={handleSubs}>
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="">--Elegir--</option>
          <option value="netflix">Netflix</option>
          <option value="disneyPlus">Disney +</option>
          <option value="hboMax">HBO Max</option>
          <option value="starPlus">Star +</option>
          <option value="spotify">Spotify</option>
          <option value="apletv">Apple TV</option>
        </select>
        <p>Cantidad</p>
        <input
          type="number"
          placeholder="$20"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        {editId != "" ? (
          <input type="submit" value="Guardar" />
        ) : (
          <input type="submit" value="Agregar" />
        )}
      </form>
      {error ? <p className="error">Campos invalidos</p> : null}
      {errorMoney ? <p className="error">Presupuesto insuficiente</p> : false}
    </div>
  );
};

export default FormAddSubs;
