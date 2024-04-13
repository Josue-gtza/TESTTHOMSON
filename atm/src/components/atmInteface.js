import React, { useState } from 'react';
import './atm.css'; 
import logoCards from '../creditcard_sprite.png';
import logoStar from '../starCard.png';

import logoSystem from '../systems.png';


const ATM = () => {
  const [pinEntered, setPinEntered] = useState(false);
  const [pin, setPin] = useState('');
  const correctPin = '1234'; 
  const [balance, setBalance] = useState(0); 
  const [balanceShown, setBalanceShown] = useState(false); 
  const [withdrawShown, setWithdrawShown] = useState(false);

  const [depositShown, setDepositShown] = useState(false); 
  const [depositAmount, setDepositAmount] = useState(0); 
  const [withdrawAmount, setWithdrawAmount] = useState(0); 

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handlePinSubmit = () => {
    if (pin === correctPin) {
      setPinEntered(true);
    } else {
      alert('Incorrect PIN. Please try again.');
      setPin('');
    }
  };

  const handleExit = () => {
    setPinEntered(false); 
    setDepositAmount(0); 
    setWithdrawAmount(0); 
    setDepositShown(false);
    setWithdrawShown(false);
  };

  const handleBalanceCheck = () => {
   
    setBalanceShown(true);
  };

  const handleDepositChange = (e) => {
    setDepositAmount(parseFloat(e.target.value));
  };

  const handleWithdrawChange = (e) => {
    setWithdrawAmount(parseFloat(e.target.value));
  };

  const handleDeposit = () => {
    setDepositShown(true)
    if (depositAmount > 0) {
      setBalance(balance + depositAmount);
      setDepositAmount(0); 
      setDepositShown(false)
    }
  };

  const handleWithdraw = () => {
    setWithdrawShown(true);
  };

  const handleBalanceChange = () => {
    setBalanceShown(false);
  };
  

  const handleWithdrawSubmit = () => {
    if (withdrawAmount <= 0) {
      alert('Please enter a valid withdrawal amount.');
    } else if (balance >= withdrawAmount) {
      setBalance(balance - withdrawAmount);
      setWithdrawAmount(0); 
      setWithdrawShown(false);
    } else {
      alert('Insufficient funds. Please try again.');
    }
  };

  return (
    <div className="atm-container">
      <div className="top-section"></div>
      <img
          src={pinEntered ? logoStar : logoCards}
          className={`Cards-logo ${pinEntered ? '' : 'blurred'}`}
          alt="logo"
        />
      <div className="middle-section">
        <div className="left-buttons">
          <button className="left-button"></button>
          <button className="left-button" onClick={handleBalanceChange}></button>
          <button className="left-button" onClick={handleWithdraw}></button>
          <button className="left-button"onClick={handleDeposit}></button>
        </div>
        <div className="screen">
          {pinEntered ? (
            <>
              <p>Hi Peter Parker!</p>
              <p>Please make a choice...</p>
              {balanceShown ? (
              
               <div className="screen-text">
               <div className="column1">
                 <p className="align-Return" >Return</p>
                 <p className="align-Balance">Your balance is: ${balance}</p>
               </div>
              
             </div>

                
              ) : (
                <>
                  {depositShown ? (
                    <div className="screen-text">
                      <input
                        type="number"
                        value={depositAmount}
                        onChange={handleDepositChange}
                        placeholder="Enter deposit amount"
                      />
                    </div>
                  ) : withdrawShown ? (
                    <div className="screen-text">
                      <input
                        type="number"
                        value={withdrawAmount}
                        onChange={handleWithdrawChange}
                        placeholder="Enter withdrawal amount"
                      />
                    </div>
                  ) : (
                    <div className="screen-text">
                      <div className="column1">
                        <p className="align-third" >Withdraw</p>
                        <p className="align-first">Deposit</p>
                      </div>
                      <div className="column2">
                        <p className="align-second" >Exit</p>
                        <p className="align-fourth" >Balance</p>
                        <p className="align-thirdR">Re-enter PIN</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <h2>Welcome to the</h2>
              <h2>ATM</h2>
              <input
                type="password"
                value={pin}
                onChange={handlePinChange}
              />

                <div className="enter-pin">
                 
                      <div className="column2">
                        <h2 className="align-thirdR">Enter PIN</h2>
                      </div>
                </div>
              
              
            </>
          )}
        </div>
        <div className="right-buttons">
          <button className="right-button"></button>
          <button className="right-button" onClick={handleExit}></button>
          <button className="right-button" onClick={handleBalanceCheck}></button>
          <button 
  className="right-button" 
  onClick={() => {
    if (!pinEntered) {
      handlePinSubmit();
    } else if (withdrawShown) {
      handleWithdrawSubmit(); 
    } else {
      handleDeposit();
    }
  }}
>
  
</button>
     </div>
      </div>
    
       <div className="bottom-section">
       <img src={logoSystem} className="System-logo" alt="logo" />
        </div>
           

    </div>
  );
};

export default ATM;
  