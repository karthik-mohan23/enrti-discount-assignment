import { useState } from "react";
import { Link } from "react-router-dom";
const Main = ({ number, setNumber }) => {
  // to make sure user only types in number
  function handleNumbers(event) {
    // to stop the user from typing after the user has clicked the button
    if (isVisible) {
      return;
    }
    return setNumber(
      event.target.value
        .replace(/[^\d.]/g, "")
        .replace(/^(\d*\.\d*)\..*$/, "$1")
    );
    // return setNumber(event.target.value.replace(/\D/g, ""));
  }

  // variable to check whether the user has clicked the button.
  const [isVisible, setIsVisible] = useState(false);

  // function to display coupon buttons only if the user has typed number in the input field
  const handleVisible = (inputValue) => {
    if (!inputValue) {
      return;
    }
    setIsVisible(true);
  };
  return (
    <section className="wrapper">
      <div className="input-amount">
        <input
          type="text"
          maxLength={4}
          onChange={(e) => handleNumbers(e)}
          value={number}
        />
        <button onClick={() => handleVisible(number)}>
          Click here to generate coupons
        </button>
      </div>
      {isVisible && (
        <div className="buttons">
          <Link to="/off1">
            <button>Coupon 1</button>
          </Link>
          <Link to="/cou2">
            <button>Coupon 2</button>
          </Link>
          <Link to="/dis3">
            <button>Coupon 3</button>
          </Link>
        </div>
      )}
    </section>
  );
};
export default Main;
