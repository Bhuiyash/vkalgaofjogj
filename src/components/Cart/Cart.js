import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import LoadingSpinner from "../UI/LoadingSpinner";


const Cart = (props) => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const [didSubmit, setdidSubmit] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const orderHandler = () => {
    setShowForm(true);
    console.log("ordering...");

    setTimeout(() => {
      console.log("order placed");
    }, 2000);
  };
  const orderButton = (
    <button className={classes.button} onClick={orderHandler}>
      Place Order
    </button>
  );
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.closeCart}>
        Close
      </button>
      {hasItems && orderButton}
    </div>
  );

    
  const orderDataHandler =async  (userData) => {
      setisSubmitting(true);
      setisSubmitting(false);
        setdidSubmit(true);
        cartCtx.clearCart();
     
     };
  //Modal contents to showcase to user.
  const cartModalcontent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Price:</span>
        <span>{totalAmount}</span>
      </div>
      {showForm && (
        <Checkout sendDataToCart={orderDataHandler} onClose={props.closeCart} />
      )}
      {!showForm && modalActions}
    </React.Fragment>
  );

  const isSubmittingModal = (
    <React.Fragment>
      <h2>Placing Your Order!</h2>
    </React.Fragment>
  );
  const successModal = (
    <React.Fragment>
      <p>
        <h4>Hurray Your Order Is Placed!</h4>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={props.closeCart}>
          Head Back to Menu!
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onBackdropClick={props.closeCart}>
      {isSubmitting && isSubmittingModal && <LoadingSpinner/>}
      {!isSubmitting && didSubmit && successModal}
          {!isSubmitting && !didSubmit && cartModalcontent}
    </Modal>
  );
};
export default Cart;
