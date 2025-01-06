import "./../Main.css";
import Button from "../../components/Button/Button";
import mainImage from "../../assets/home-main-image.png";
import starRating from "../../assets/rating-star.svg";
import "./MainHome.css";

export default function Home() {
  return (
    <article className="home__content-wrapper">
      <section className="home__content">
        <h1 className="home__content__heading">
          Beautiful food & <br/>takeaway,{" "}
          <span className="blue-link">delivered</span><br/> to your door.
        </h1>

        <p className="home__content__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500.
        </p>

        <div>
          <Button text="Place an Order" primary={true} className="home__button-order"/>
        </div>
        
        <section className="home__content__rating">
          <div>
            <img src={starRating} alt="star" />
            <span>Trustpilot</span>
          </div>
          <p>
            <span className="blue-link">4.8 out of 5</span> based on 2000+
            reviews
          </p>
        </section>
      </section>
      <img alt="fancy menu" src={mainImage} />
    </article>
  );
}
