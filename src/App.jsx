import Greeting from "./components/Greeting";

function App() {
  const cardData3 = {
    id: "3",
    title: "Card Three",
    description: "This is the third card description.",
  };

  return (
    <div className="mainContainer">
      <Greeting
        id={cardData1.id}
        title={cardData1.title}
        description={cardData1.description}
        image={cardData1.image}
      />
      <Greeting
        id={cardData2.id}
        title={cardData2.title}
        description={cardData2.description}
        image={cardData2.image}
      />
      <Greeting
        id={cardData3.id}
        title={cardData3.title}
        description={cardData3.description}
        image={cardData3.image}
      />
    </div>
  );
}

export default App;
