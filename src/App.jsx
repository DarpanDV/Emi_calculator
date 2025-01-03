import { useEffect, useState } from "react"
import "./App.css"
let btn_value=0;
let amt=0;
function App() {

const[inputObj,setInputObj]=useState({P_amount:0,ROI:0,P_fee:0});
const[slider1,setSlider1]=useState(50);
const[slider2,setSlider2]=useState(0);

const handleInput=(e)=>{
  setInputObj({...inputObj,
    [e.target.name]:e.target.value
  })
}


const handleTenure=(e)=>{
 btn_value=e.target.value;
}

const handleRange1=(e)=>{
  setSlider1(e.target.value);

}

amt=0;
  const{P_amount,ROI}=inputObj;
  // amt=[P_amount*ROI*Math.pow((1+ROI),btn_value)]/[Math.pow((1+ROI),btn_value-1)];
  amt= (((P_amount-slider1)*ROI*(btn_value/12))/100);

useEffect(()=>{
  console.log(amt);
  calculateEMI();
},[slider1])

const calculateEMI = () => {
  const { P_amount, ROI } = inputObj;
  const loanAmount = P_amount - slider1; // Principal after down payment
  const monthlyRate = ROI / 12 / 100; // Monthly interest rate
  const emi =
    monthlyRate > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, btn_value)) /
        (Math.pow(1 + monthlyRate, btn_value) - 1)
      : loanAmount / btn_value; // EMI when ROI is 0
  setSlider2(emi.toFixed(2));
};

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>EMI CALCULATOR</h1>
        </div>
        <div className="main_body_container">
          <div className="main_body_container--Principal">
            <h3>Principal Amount</h3>
            <input type="text" placeholder="Enter the Principal amt" onChange={handleInput} name="P_amount"></input>
          </div>
          <div className="main_body_container--ROI">
            <h3>Rate of Interest (in %)</h3>
            <input type="text" placeholder="Enter the ROI" onChange={handleInput} name="ROI"></input>
          </div>
          <div className="main_body_container--Processing">
            <h3>Processing fee(in %)</h3>
            <input type="text" placeholder="Enter the Processing fee" onChange={handleInput} name="P_fee"></input>
          </div>
          <div className="main_body_container--Down">
            <h3>Down Paymnent (in %)</h3>
            <input type="range" min={0} max={inputObj.P_amount} placeholder="Enter the Down Payment" onChange={handleRange1}></input>
          </div>
          <div className="main_body_container--Loan">
            <h3>Loan Amount</h3>
            <input type="range" min={0} max={inputObj.P_amount} placeholder="Enter the Loan Amount" value={slider2} readOnly></input>
          </div>
          <div className="main_body_container--btn_value">
            <h3>btn_value</h3>
            <button onClick={handleTenure} value={12}>12 months</button> <button onClick={handleTenure} value={24}>24 months</button> <button onClick={handleTenure} value={36}>36 months</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
