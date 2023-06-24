const Offer2 = ({ number }) => {
  const discount = number * 0.2;
  const dealPrice = number - discount;
  return (
    <div className="wrapper">
      <h1>Congratulations!!</h1>
      <h3>You received 20% off</h3>
      <p>
        Original Price : Rs.<del>{number}/-</del>
      </p>
      <h3>Deal of the day : Rs.{dealPrice}/-</h3>
      <div>
        <button>Buy now</button>
      </div>
    </div>
  );
};
export default Offer2;
