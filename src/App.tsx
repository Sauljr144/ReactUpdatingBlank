import React from "react";
import UpdatePizza from "./components/UpdatePizza";
import Exercise1 from "./components/Exercise1";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";


const App = () => {
  return (
    <div>
      <Exercise1/>
      <UpdatePizza/>
      <Cart/>
      <ExpandableText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias deleniti, ea, itaque eos maiores enim perspiciatis quisquam molestiae vero, illo qui et dolorem aliquam nesciunt ex labore culpa fugiat autem.</ExpandableText>
    </div>
  );
};

export default App;
