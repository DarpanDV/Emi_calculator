import { useState } from "react"
import "./App.css"

function App() {

const[inputObj,setInputObj]=useState({P_amount:0,ROI:0,P_fee:0});

const handleInput=(e)=>{
  setInputObj({...inputObj,
    [e.target.name]:e.target.value
  })
}

const handleTenure=(e)=>{
 console.log(e.target.value)

}

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
            <input type="range" min={0} max={100} placeholder="Enter the Down Payment"></input>
          </div>
          <div className="main_body_container--Loan">
            <h3>Loan Amount</h3>
            <input type="range" min={0} max={100} placeholder="Enter the Loan Amount"></input>
          </div>
          <div className="main_body_container--Tenure">
            <h3>Tenure</h3>
            <button onClick={handleTenure} value={12}>12 months</button> <button onClick={handleTenure} value={24}>24 months</button> <button onClick={handleTenure} value={36}>36 months</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
