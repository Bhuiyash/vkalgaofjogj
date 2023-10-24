import React, { useRef, useReducer } from "react";
import classes from "./Checkout.module.css";

//validation fn()
const isEmpty = (value) => value.trim() === "";
const isFiveCharacter = (value) => value.trim().length !== 6;
//reducer

function reducer(state, action) {
  switch (action.type) {
    case "SubmitForm":
      return {
        name: action.name,
        city: action.city,
        street: action.street,
        pincode: action.pincode,
      };

    default:
      return state;
  }
}

const Checkout = (props) => {
  //   const [formValidity, setFormValidity] = useState({
  //     name: true,
  //     street: true,
  //     city: true,
  //     pincode: true,
  //   });

  const [formValidity, dispatchForm] = useReducer(reducer, {
    name: true,
    street: true,
    city: true,
    pincode: true,
  });

  const nameInput = useRef();
  const cityInput = useRef();
  const streetInput = useRef();
  const pincodeInput = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredCity = cityInput.current.value;
    const enteredStreet = streetInput.current.value;
    const enteredPincode = pincodeInput.current.value;

    const enteredNameisValid = !isEmpty(enteredName);
    const enteredStreetisValid = !isEmpty(enteredStreet);
    const enteredCityisValid = !isEmpty(enteredCity);
    const enteredPincodeIsFiveChar = !isFiveCharacter(enteredPincode);

    dispatchForm({
      type: "SubmitForm",
      name: enteredNameisValid,
      city: enteredCityisValid,
      street: enteredStreetisValid,
      pincode: enteredPincodeIsFiveChar,
    });

    // setFormValidity({
    //   name: enteredNameisValid,
    //   street:enteredStreetisValid,
    //   city:enteredCityisValid,
    //   pincode:enteredPincodeIsFiveChar
    // });

    const formIsValid =
      enteredNameisValid &&
      enteredStreetisValid &&
      enteredCityisValid &&
      enteredPincodeIsFiveChar;
    if (!formIsValid) {
      return;
    }
    props.sendDataToCart({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      pincode: enteredPincode,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formValidity.name ? classes.invalid : ""
        }`}
      >
        <label htmlFor="name">Name:</label>
        <input ref={nameInput} type="text" id="name" />
        {!formValidity.name && <p>Please enter valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.street ? classes.invalid : ""
        }`}
      >
        <label htmlFor="street">Street:</label>
        <input ref={streetInput} type="text" id="street" />
        {!formValidity.street && <p>Please enter valid street!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.pincode ? classes.invalid : ""
        }`}
      >
        <label htmlFor="pincode">Pin Code:</label>
        <input ref={pincodeInput} type="text" id="pincode" />
        {!formValidity.pincode && <p>Pincode should be 5 only charachters!</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formValidity.city ? classes.invalid : ""
        }`}
      >
        <label htmlFor="city">City:</label>
        <input ref={cityInput} type="text" id="city" />
        {!formValidity.city && <p>Please enter valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
