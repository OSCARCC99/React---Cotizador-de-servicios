import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import FormAddMoney from "./Components/FormAddMoney";
import MainControl from "./Components/MainControl";
function App() {
  //inicializar valor
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  //si el component input es valido recarga el component
  const component = isValid ? (
    <MainControl count={count} />
  ) : (
    <FormAddMoney setCount={setCount} setIsValid={setIsValid} />
  );
  return (
    <div className="App">
      <Header />
      { component }
    </div>
  );
}

export default App;
