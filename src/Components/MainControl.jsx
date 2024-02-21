import { useState } from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";
import DisplayItems from "./DisplayItems";

const MainControl = ({ count }) => {
  //setear los valores del tupo de servicio y el costo
  const [subs, setSubs] = useState([]);
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  //use State
  const[editId, setEditId] = useState("");
  const[spent, setSpent] = useState(0);
  
  const eliminarItem = id =>{
    const newList = subs.filter(item => item.id != id);
    setSubs(newList)
  }

  const editItem = id =>{
    setEditId(id);
    subs.map(item => {
      if(item.id === id){
        //con el id que recibe lo busca y setea el valor
        setType(item.type);
        setPrice(item.price);
      }
    })
  }
  
  return (
    <>
      <div className="main-form">
        <Balance count={count} subs={subs} spent={spent} setSpent={setSpent}/>
        <FormAddSubs
          setPrice={setPrice}
          setType={setType}
          type={type}
          price={price}
          setSubs={setSubs}
          subs={subs}
          editId={editId}
          setEditId={setEditId}
          spent={spent}
          count={count}
        />
      </div>
      <DisplayItems subs={subs} eliminarItem={eliminarItem} editItem={editItem}/>
    </>
  );
};

export default MainControl;
