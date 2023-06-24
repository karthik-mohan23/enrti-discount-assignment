const Offer3 = ({ number }) => {
  const discount = number * 0.25;
  const dealPrice = number - discount;
  return (
    <div className="wrapper">
      <h1>Congratulations!!</h1>
      <h3>You received 25% off</h3>
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
export default Offer3;
