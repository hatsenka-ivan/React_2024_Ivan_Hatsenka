import "./../Main.css";
import "./MainHome.css";
import { styled } from 'styled-components';
import Button from "../../components/Button/Button";
import mainImage from "../../assets/home-main-image.png";
import starRating from "../../assets/rating-star.svg";


export default function Home() {
  return (
    <HomeWrapper>
      <Content>
        <Heading>
          Beautiful food & <br/>takeaway,{" "}
          <span className="blue-link">delivered</span><br/> to your door.
        </Heading>

        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500.
        </Description>

        <div>
          <OrderButton text="Place an Order" primary={true}/>
        </div>
        
        <RatingSection>
          <div>
            <img src={starRating} alt="star" />
            <span>Trustpilot</span>
          </div>
          <p>
            <span className="blue-link">4.8 out of 5</span> based on 2000+
            reviews
          </p>
        </RatingSection>
      </Content>
      <img alt="fancy menu" src={mainImage} />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3em;

  > img {
      align-self: center;
      max-height: 40vh;
      max-width: 90vw;
  }
      
  @media screen and (min-width: 800px) {
      flex-direction: row;
      align-items: center;
       > img {
          min-width: 35vw;
          max-height: none;
          align-self: center;
      }
  }
}
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;  

  > div {
      display: flex;
      justify-content: flex-start;  
      width: 100%;  
    }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  align-self: flex-start;
`;

const Description = styled.p`
  color: rgba(84, 98, 133, 1);
  line-height: 1.4em;
`;

const OrderButton = styled(Button)`
  padding: 1.2em 2.5em;
  font-size: 0.9rem;
`;

const RatingSection = styled.section`
  align-self: flex-start;

  & > div {
      font-weight: 600;
      font-size: 1.2rem;
  }

  & > p {
      margin-top: .5em;
  }
`;
