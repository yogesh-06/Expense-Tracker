import React, { useContext } from "react";
import { AccountContextData } from "./AccountContextData";
import { Link } from "react-router-dom";

const AccountBalance = ({ mode }) => {
  const [info] = useContext(AccountContextData);
  const { income, expense } = getTotal(info);

  function getTotal(array, initialIncome = 0, initialExpense = 0) {
    let income = initialIncome;
    let expense = initialExpense;
    array.forEach((info) => {
      if (info.price > 0) {
        income = income + info.price;
      } else if (info.price < 0) {
        expense = expense + info.price;
      }
    });
    return { income, expense };
  }

  const availableBalance = income + expense;

  return (
    <>
      <div
        className={`container shadow-sm border-top rounded-bottom p-3 my-3 text-${
          mode === "secondary" ? "black" : "black"
        } bg-${mode === "secondary" ? "white" : "dark"}`}
      >
        <div
          className={`d-flex justify-content-evenly rounded bg-${
            mode === "secondary" ? "white" : "black"
          }`}
        >
          <div
            className={`text-${mode === "secondary" ? "black" : "white"} 
            bg-${mode === "secondary" ? "white" : "dark"}`}
          >
            <b>AVAILALE BABLANCE</b>
            <h3>
              <b className="text-warning">$ {availableBalance}</b>
            </h3>
          </div>
          <hr
            className={`mb-0 text-${mode === "secondary" ? "black" : "white"}`}
            style={{ width: "2px", height: "50px" }}
          />

          <div
            className={`px-5 text-${mode === "secondary" ? "black" : "white"} 
            bg-${mode === "secondary" ? "white" : "dark"}`}
          >
            <b>INCOME</b>
            <h4>
              <b className="text-success">$ {income}</b>
            </h4>
            <Link to="/IncomeHistory" className="btn btn-primary btn-sm py-0">
              Transactions
            </Link>
          </div>

          <hr
            className={`mb-0 text-${mode === "secondary" ? "black" : "white"}`}
            style={{ width: "2px", height: "50px" }}
          />
          <div
            className={` text-${mode === "secondary" ? "black" : "white"} 
            bg-${mode === "secondary" ? "white" : "dark"}`}
          >
            <b>EXPENSE</b>
            <h4>
              <b className="text-danger"> - $ {Math.abs(expense)} </b>
            </h4>
            <Link to="/ExpenseHistory" className="btn btn-primary btn-sm py-0">
              Transactions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountBalance;
