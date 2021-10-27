import React, { useContext, useState } from "react";
import { AccountContextData } from "./AccountContextData";
import { Link } from "react-router-dom";
const AddTransaction = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useContext(AccountContextData);
  const [incomeOperation, setIncomeOperation] = useState("");
  const AddTransaction = (e) => {
    e.preventDefault();

    if (incomeOperation === "") {
      alert("Please select Expense type");
      return;
    }

    let calculatedPrice;
    if (incomeOperation === "income") {
      calculatedPrice = Math.abs(price);
    } else if (incomeOperation === "expense") {
      calculatedPrice = -Math.abs(price);
    } else {
      alert("something went wrong");
      return;
    }

    setInfo((prevInfo) => [
      ...prevInfo,
      {
        name: name,
        price: calculatedPrice,
        time: new Date().toLocaleTimeString(),
      },
    ]);
    console.log(info);
  };

  return (
    <>
      <div className=" container shadow-sm mb-3 pb-2 border-top">
        <div
          className="accordion accordion-button container shadow-sm pb-2  "
          className=" "
          id="accordionExample"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div className="container navbar px-2 shadow-sm pb-0 mb-3">
            <h4>Add Transaction</h4>
          </div>
        </div>

        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <form
            className=" container shadow-sm mb-3 pb-2 "
            onSubmit={AddTransaction}
          >
            <div className="row">
              <div className="col-6 text-start">
                <h6>Description</h6>
              </div>
              <div className="col-6 text-start">
                <h6 className="">
                  Amount <sub>(Negative-Expenses, Positive-Incomes)</sub>
                </h6>
              </div>
            </div>
            <div className="input-group">
              <input
                id="firstName"
                type="text"
                required="Required"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control bg-white border-left-0 border-md"
              />

              <input
                id="lastName"
                type="text"
                required="Required"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control bg-white border-left-0 border-md"
              />

              <select
                onChange={(e) => setIncomeOperation(e.target.value)}
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue="">Select</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>

              {/* <div className="dropdown mx-2">
                <button
                  className="btn btn-outline-info dropdown-toggle"
                  type="button"
                  required="Required"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li  >
                    <a className="dropdown-item" href="/" >
                      Income
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Expense
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>

            <div className="d-flex justify-content-evenly mt-3 ">
              <button className="btn btn-success col-5" type="submit">
                Add
              </button>
              <button className="btn btn-warning col-5"> Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTransaction;
