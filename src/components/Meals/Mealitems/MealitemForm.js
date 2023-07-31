import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import './MealitemForm.css'

const MealitemForm = (props) => {
  const [Amountisvalid, Setamopuntisvalid] = useState(true)
  const amountInputRef = useRef();

  const Submithandler = (event) => {
    event.preventDefault();
    
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    // console.log(enteredAmountNumber)

    if(enteredAmount.trim().length === 0 || 
    enteredAmountNumber < 1 || 
    enteredAmountNumber > 5) {
      Setamopuntisvalid(false)
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className='form' onSubmit={Submithandler}>
      <Input
      ref={amountInputRef}
      label='Amount'
      input={{
        // key: 'amount_'+props.id,
        id:'amount_'+props.id,
        type: 'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
      }}/>
      <button>+ Add</button>
      {!Amountisvalid && <p>Enter Valid Amount (1-5).</p>}
    </form>
  )
}

export default MealitemForm;
