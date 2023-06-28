import React, { useState } from 'react'


//Here you want a button so when the user clicks the button it adds 'Cheese' to the toppoings
const UpdatePizza = () => {

    const [pizza, setPizza] = useState({
        name: 'King Aurthor Supreme',
        toppings: ['Mushroom,','Onions,']
    });

    const Cheese = () => {
        //pizza.toppings.push('Cheese');
      setPizza({...pizza, toppings:[...pizza.toppings, 'Cheese']})
        
    }
  return (
    <div>
      {pizza.toppings}
      <button onClick={Cheese}>Add Cheese</button>
    </div>
  )
}

export default UpdatePizza
