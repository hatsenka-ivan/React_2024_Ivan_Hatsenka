import "./Footer.css";
import logo from "../../assets/logo.svg";
import { footerColumns } from "../../constants";
import instagram from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";
import yt from "../../assets/youtube.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <section className="footer__description">
          <img src={logo} alt="logo" />
          <p className="footer__description-text">Takeaway & Delivery template</p>
          <p>for small - medium businesses.</p>
        </section>
        <section className="footer__column-wrapper">
          {footerColumns.map((column) => {
            const href = column[0] === "TEMPLATE" ? "https://google.com" : "/";
            return (
              <ul key={column[0]} className="footer__column">
                {column.map((item) => (
                  <li key={item}>
                    <a href={href}>{item}</a>
                  </li>
                ))}
              </ul>
            );
          })}
        </section>
      </div>
      <section className="footer__bottom">
        <p className="copyright">
          Built by <span className="blue-link">Flowbase</span> · Powered by{" "}
          <span className="blue-link">Webflow</span>
        </p>
        <ul className="footer__social-media">
          <li>
            <img src={instagram} alt="instagram icon" />
          </li>
          <li>
            <img src={twitter} alt="twitter icon" />
          </li>
          <li>
            <img src={yt} alt="youtube icon" />
          </li>
        </ul>
      </section>
    </footer>
  );
}
