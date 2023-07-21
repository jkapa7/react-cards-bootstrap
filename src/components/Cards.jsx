import Card from "./Card";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image1 from "../assets/image1.jpg";

const cards = [
  {
    id: 1,
    title: "Juan Web",
    image: image2,
    url: "https://www.linkedin.com/in/gonzalezjuanr/",
  },

  {
    id: 2,
    title: "Juan Blog",
    image: image1,
    url: "https://www.linkedin.com/in/gonzalezjuanr/",
  },

  {
    id: 3,
    title: "Juan Linkedin",
    image: image3,
    url: "https://www.linkedin.com/in/gonzalezjuanr/",
  },
];

console.log(cards);

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className="col-md-4">
            <Card
              title={card.title}
              imageSource={card.image}
              url={card.url}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
