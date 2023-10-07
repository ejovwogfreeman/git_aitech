import React from "react";

const List = () => {
  let people = [
    {
      name: "godbless",
      email: "gb@gmail.com",
    },
    {
      name: "freeman",
      email: "fm@gmail.com",
    },
    {
      name: "lancelot",
      email: "lc@gmail.com",
    },
  ];
  return (
    <div className="container">
      {people.map((x) => {
        return (
          <div>
            <h1>
              {x.name} : {x.email}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default List;
