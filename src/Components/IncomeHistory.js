import React, { useContext } from "react";
import { AccountContextData } from "./AccountContextData";
const IncomeHistory = () => {
  const [info] = useContext(AccountContextData);
  let incomeData = info.filter((e) => e.price > 0);
  return (
    <>
      <div className="container ">
        {incomeData.map((expense) => (
          <div
            className="d-flex justify-content-between border-bottom m-2 p-1 rounded"
            style={{ borderRight: "3px solid green" }}
          >
            <div>{expense.name} </div>
            <small className="text-muted">{expense.time}</small>
            <div> $ {Math.abs(expense.price)}</div>
          </div>
        ))}
        <h1>Hello React</h1>
      </div>
    </>
  );
};
export default IncomeHistory;
