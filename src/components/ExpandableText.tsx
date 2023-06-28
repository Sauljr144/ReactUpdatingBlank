import React, { useState } from "react";

//create an expanable text component as explained in class

interface ExpProps{
  children: string;
  maxChars?: number;
}

const ExpandableText = ({children,maxChars=100}:ExpProps) => {

  const [expand, setExpand] = useState(false);

  // using the ternry operator to display all the childre if expand is true else the maxChars
  const text = expand ? children : children.substring(0, maxChars);

  return (<div>
    <span>{text}...</span>
    <button onClick={()=>setExpand(!expand)}>{expand ? 'Less' : 'More'}</button>
  </div>

)};

export default ExpandableText;
