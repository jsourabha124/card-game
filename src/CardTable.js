import React, { useState } from "react";
import './index.css';

const CardTable = (props) => {
  //create a array of object based on nu. of cards user selected
  const array = Array.from({ length: props.TotalCount }, (_, index) => ({
    id: index + 1,
    name: `Card ${index + 1}`,
    value: false,
  }));

  //store object values into data variable using use effect
  const [data, setData] = useState(array);

  //on click of button, based on id value make status as true and other button set status value as false
  const handleClick = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, value: true };
      } else {
        return { ...item, value: false };
      }
    });
    setData(newData);
  };

  return (
    <div className="card-table">
      <h3>{`No of card Selected : ${props.TotalCount}`}</h3>
      <table>
        <thead>
          <tr>
            <th>Card</th>
            <th>Show</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <button onClick={() => handleClick(item.id)}>
                  {item.name}
                </button>
              </td>
              <td>{item.value.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardTable;
