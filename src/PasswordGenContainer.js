import React from "react";

export default function PasswordGenContainer() {
  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="result-container">
        <span id="result"></span>
        <button className="btn" id="clipboard">
          <i className="far fa-clipboard"></i>
        </button>
      </div>
      <div className="settings">
        <div className="setting">
          <label>Password length</label>
          <input type="number" id="length" min="4" max="20" value="20" />
        </div>
        <div className="setting">
          <label>Include uppercase letters</label>
          <input type="checkbox" id="uppercase" checked />
        </div>
        <div className="setting">
          <label>Include lowercase letters</label>
          <input type="checkbox" id="lowercase" checked />
        </div>
        <div className="setting">
          <label>Include numbers</label>
          <input type="checkbox" id="numbers" checked />
        </div>
        <div className="setting">
          <label>Include symbols</label>
          <input type="checkbox" id="symbols" checked />
        </div>
      </div>
      <button className="btn btn-large" id="generate">
        Generate password
      </button>
    </div>
  );
}
