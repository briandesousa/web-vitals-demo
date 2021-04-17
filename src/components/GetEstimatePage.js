import React from "react";

import './GetEstimatePage.css';

function GetEstimatePage() {

  function doSomethingSlow() {
    console.time('onClick event handler');
    const baseNumber = 12;   
    let result = 0;	
    for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
      result += Math.atan(i) * Math.tan(i);
    };
    console.log(`result was ${result}`);
    console.timeEnd('onClick event handler');
  };
  
  return (
    <section>
      <h2>Get an Estimate</h2>
      <p>Do you want some work done on your backyard? Get an estimate here.</p>
      <form name="estimate" className="estimate-form">
        <div className="form-row">
          <label>Estimate Type</label>
          <select name="estimate-type">
            <option value="backyard-only">Back Yard Only 3</option>
            <option value="backyard-and-frontyard">Back and Front Yar</option>
            <option value="frontyard-only">Front Yard Only</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-row">
          <label>Email Address</label>
          <input type="text" onClick={doSomethingSlow} />
        </div>
        <div className="form-row">
          <label>Project Description</label>
          <textarea></textarea>
        </div>
        <div className="form-row">
          <button type="submit">Request Estimate</button>
        </div>
      </form>
    </section>
  );
}

export default GetEstimatePage;
