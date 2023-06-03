import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';
import PaymentLoading from './PaymentLoading';
import PaymentSuccess from './PaymentSuccess';
function Payment() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentLoading, setPaymentloading] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  // Click on Payment Button and check the required conditions and all values
  const handleButtonClick = () => {
    if (
      cardNumber === '' ||
      name === '' ||
      expirationDate === '' ||
      securityCode === ''
    ) {
      alert('Please fill all the fields');
      return;
    }
    setPaymentloading(true);
    setTimeout(() => {
      setPaymentloading(false);
      setPaymentSuccess(true);
    }, 3000);
  };

  //Hanlde CardNumber here
  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === '') {
      setCardNumber(value);
    } else {
      alert('Please enter only numerical values for the card number');
    }
  };

  //Handle security code
  const handleSecurityCode = (e) => {
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === '') {
      setSecurityCode(value);
    } else {
      alert('Please enter only numerical values for the Security Code');
    }
  };

  return paymentSuccess ? (
    <PaymentSuccess />
  ) : paymentLoading ? (
    <PaymentLoading />
  ) : (
    <Box
      sx={{
        backgroundColor: 'white',
        width: 357,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fbf3f9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '90%',
        }}
      >
        <Box
          sx={{ marginTop: '40px', display: 'flex', flexDirection: 'column' }}
        >
          <label className="payment-card-label">Card number</label>
          <input
            placeholder="4455 7785 9658 8899"
            className="payment-card-long-input"
            value={cardNumber}
            maxLength="16"
            onChange={(e) => {
              handleCardNumberChange(e);
            }}
          ></input>
        </Box>
        <Box
          sx={{ marginTop: '10px', display: 'flex', flexDirection: 'column' }}
        >
          <label className="payment-card-label">CardHolder Name</label>
          <input
            placeholder="Georg Morison"
            className="payment-card-long-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              //   console.log(cardNumber);
            }}
          ></input>
        </Box>
        <Box sx={{ display: 'flex', gap: '5px' }}>
          <Box
            sx={{ marginTop: '10px', display: 'flex', flexDirection: 'column' }}
          >
            <label className="payment-card-label">Expiration Date</label>
            <input
              placeholder="01/23"
              className="payment-card-short-input"
              value={expirationDate}
              maxLength="5"
              onChange={(e) => {
                setExpirationDate(e.target.value);
                //   console.log(cardNumber);
              }}
            ></input>
          </Box>
          <Box
            sx={{ marginTop: '10px', display: 'flex', flexDirection: 'column' }}
          >
            <label className="payment-card-label">Security Code</label>
            <input
              placeholder="396"
              className="payment-card-short-input"
              value={securityCode}
              maxLength="3"
              onChange={(e) => {
                handleSecurityCode(e);
              }}
            ></input>
          </Box>
        </Box>
        <Button
          sx={{
            backgroundColor: '#b1507d',
            width: '85%',
            marginTop: '15px',
            borderRadius: '5px',
            color: 'white',
            fontFamily: 'Poppins',
            fontWeight: '600',
            ':hover': {
              backgroundColor: '#d2608e', // Change the background color on hover
            },
            marginBottom: '40px',
          }}
          onClick={() => handleButtonClick()}
        >
          <LockIcon sx={{ fontSize: '14px', marginRight: '4px' }} />
          Pay Now
        </Button>
      </Box>
    </Box>
  );
}

export default Payment;
