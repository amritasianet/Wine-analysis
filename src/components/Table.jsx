import React from "react";
import '../App.css';

const Table = ({data, key}) => {      //Table returning data with first row showing the classes.
    
  return (
    <div>
      <table className="table">
        <tr>
          <th>Measure</th>
          <th>Class I</th>
          <th>Class II</th>
          <th>Class III</th>
        </tr>
        {data.map((arr,i) => {
          return (
            <tr key={key + i}>
              {arr.map(ele=>{
                return <td>{ele}</td>
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
