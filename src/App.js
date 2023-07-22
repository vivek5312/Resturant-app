import Header from "./Layout/Header";
import Meal from "./Meal/Meal";
import { useState } from "react";
import Cart from "./Cart/Cart";
function App() {
  const[cartIsShown, setCartShown]=useState(false);

  const setShownhandler=()=>{
    setCartShown(true);
  }
  const hiddenCart=()=>{
    setCartShown(false);
  }

  return (
    <div>
      {cartIsShown && <Cart onhidden={hiddenCart} />}
      <Header  onCartShown={setShownhandler}/>
     <Meal />
    </div>
  );
}

export default App;
