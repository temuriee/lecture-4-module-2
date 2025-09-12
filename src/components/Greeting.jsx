function Greeting(props) {
  console.log(props);
  return (
    <div className="myCard">
      <img className="cardImg" src={props.image} alt={props.title} />
      <h2 className="cardTitle">{props.title}</h2>
      <p className="cardDescription">{props.description}</p>
      <p>ID: {props.id}</p>
    </div>
  );
}

export default Greeting;
