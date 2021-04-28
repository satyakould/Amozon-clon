// import React from 'react'
// import './Subtotal.css'
// import CurrencyFormat from 'react-currency-format'
// import { useStateValue } from './StateProvider'
// import { getBasketTotal } from './reducer'
// import { useHistory } from 'react-router-dom'
// function Subtotal() {
//   const history = useHistory()
//   const [{ basket }, dispatch] = useStateValue()
//   return (
//     <div className='subtotal'>
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               Subtotal ({basket.length} items):
//               <strong>{value}</strong>
//             </p>
//             <small className='subtotal_gift'>
//               <input type='checkbox' /> This Order Contains a Gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType={'text'}
//         thousandSeparator={true}
//         prefix={'₹'}
//       />
//       <button onClick={(e) => history.push('/payment')}>
//         {' '}
//         Procceed to Checkout
//       </button>
//     </div>
//   )
// }

// export default Subtotal
import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { ShoppingBasket } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const subtotal = basket?.reduce((acc, item) => (acc += item.price), 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length > 0 ? "items" : "item"}) :
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" name="" id="" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
