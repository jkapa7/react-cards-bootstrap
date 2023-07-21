import PropTypes from "prop-types";
import "./Cards.css";

function Card({ title, imageSource, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp ">
      <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top" />
      </div>

      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum minima reprehenderit rem alias esse! Est facere in laborum, similique nemo doloremque itaque, consectetur debitis repellendus deserunt saepe modi architecto!"}
        </p>

        {/*Gracias a la propiedad target y rel con sus valores al ir a esa referencia se loahce en una nueva pestaña*/}

        <a
          href={url}
          className="btn btn-outline-secondary rounded-0"
          target="_blank"
          rel="noreferrer"
        >
          Go to this website
        </a>
      </div>
    </div>
  );
}

//VALIDACION DE PROPS
Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  url: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
