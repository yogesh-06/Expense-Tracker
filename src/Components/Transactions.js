import React, { useContext } from "react";
import { AccountContextData } from "./AccountContextData";
import { CSVLink } from "react-csv";
const Transactions = ({ mode }) => {
  const [info] = useContext(AccountContextData);

  let incomeData = info.filter((e) => e.price > 0);
  let expanseData = info.filter((e) => e.price < 0);
  return (
    <>
      <div
        className={`container border-top shadow-sm pb-2 text-${
          mode === "secondary" ? "black" : "light"
        } bg-${mode === "secondary" ? "white" : "dark"}`}
      >
        <div className="navbar px-2 shadow-sm">
          <h4>Recent Transactions</h4>
          {/* <small className="text-muted">Total Transcions: {info.length}</small> */}
          <div className="btn-group">
            <button
              className="btn btn-outline-primary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Download
            </button>
            <ul className="dropdown-menu ps-2">
              <li>
                <CSVLink data={info} className="">
                  All Transactions
                </CSVLink>
              </li>
              <li>
                <CSVLink data={incomeData} className="">
                  Income Transactions
                </CSVLink>
              </li>
              <li>
                <CSVLink data={expanseData} className="">
                  Expanse Transactions
                </CSVLink>
              </li>
            </ul>
          </div>
        </div>
        {info.map((expense) => (
          <div
            className="d-flex justify-content-between border-bottom m-2 p-1 rounded"
            style={
              expense.price < 0
                ? { borderRight: "3px solid red" }
                : { borderRight: "3px solid green" }
            }
          >
            <div>{expense.name} </div>
            <small className="text-muted">{expense.time}</small>
            <div>
              {expense.price < 0 ? "-" : "+"} $ {Math.abs(expense.price)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Transactions;
