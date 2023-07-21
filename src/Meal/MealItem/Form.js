import React from 'react';
import Input from '../../UI/Input';
import classes from './Form.module.css'
const Form = (props) => {
  return (
   <>
   <form className={classes.form}>
    <Input label="Amount" input={{
        id:"amount",
        type:'number',
        min:'1',
        max:'5',
        defaultValue:'1',
        step:'1',

    }}/>
    <button>+Add</button>
   </form>
   </>
  );
}

export default Form
