import React from "react";

// destruture method
const Skay = ({ name, age }) => {
  let names = ["gb", "fm", "lc"];
  return (
    <div className="container">
      Hello, my name is {name} and i am {age}years old
      {names.map((x) => {
        return <div>{x}</div>;
      })}
    </div>
  );
};

// props keyword method
// const Skay = (props) => {
//   return (
//     <div>
//       Hello, my name is {props.name} and i am {props.age}years old
//     </div>
//   );
// };

export default Skay;
