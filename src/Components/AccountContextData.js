import React, { createContext, useState } from "react";
export const AccountContextData = createContext();

const AcDataProvider = (props) => {
  const [info, setInfo] = useState([
    {
      name: "Cash",
      time: "02:32 PM",
      price: 500,
    },
    {
      name: "Recharge",
      time: "09:58 PM",
      price: -70,
    },

    { name: "Camera", time: "11:26 AM", price: -200 },
    { name: "Rent", time: "01:16 PM", price: -140 },
    { name: "salary", time: "10:28 AM", price: 500 },
    { name: "Loan", time: "04:52 PM", price: 200 },
    { name: "Stocks", time: "11:05 PM", price: -250 },
  ]);

  // const [mode, setMode] = useState({
  //   backgroundColor: "white",
  //   color: "black",
  // });

  return (
    <>
      <AccountContextData.Provider value={[info, setInfo]}>
        {props.children}
      </AccountContextData.Provider>
    </>
  );
};

export default AcDataProvider;
