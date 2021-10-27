import React, { useState } from "react";
import AccountBalance from "./Components/AccountBalance";
import AcDataProvider from "./Components/AccountContextData";
import AddTransaction from "./Components/AddTransaction";
import Transactions from "./Components/Transactions";
import Navbar from "./Components/Navbar";
import IncomeHistory from "./Components/IncomeHistory";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("secondary");
  // const [headLine, setHeadLine] = useState("Expense Tracker");

  const handleDarkMode = () => {
    mode === "secondary"
      ? setMode("dark", (document.body.style.backgroundColor = "#00143c"))
      : setMode("secondary", (document.body.style.backgroundColor = "white"));
  };

  // const handleHeadLine = () => {
  //   setHeadLine("<");
  // };
  return (
    <>
      <AcDataProvider>
        <Router>
          <Navbar mode={mode} handleDarkMode={handleDarkMode} />

          <Switch>
            <div className="text-center mb-3">
              <Route path="/IncomeHistory">
                <IncomeHistory />
              </Route>
              <Route exact path="/AddTransaction">
                <AddTransaction />
              </Route>
              <Route exact path="/">
                <AccountBalance mode={mode} />
                <AddTransaction />

                <Transactions mode={mode} />
                <Link
                  to="/AddTransaction"
                  className="btn btn-outline-success rounded-circle"
                  // onClick={handleHeadLine}
                >
                  +
                </Link>
              </Route>
            </div>
          </Switch>
        </Router>
      </AcDataProvider>
    </>
  );
}

export default App;
