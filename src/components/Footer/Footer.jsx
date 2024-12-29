import "./Footer.css"
import logo from "../../assets/logo.svg"
import FooterColumn from "../FooterColumn/FooterColumn";
import FooterBottom from "../FooterBottom/FooterBottom";
import {footerColumns} from "../../constants";
import { PureComponent } from "react";

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="footer__top">
          <section className="footer__description">
            <img src={logo} alt="logo" />
            <p className="footer__description-text">Takeaway & Delivery template</p>
            <p>for small - medium businesses.</p>
          </section>
          <section className="footer__column-wrapper">
            {footerColumns.map((column) => (
              <FooterColumn
                link={column[0] === "TEMPLATE" ? "https://google.com" : "/"}
                key={column[0]}
                column={column}
              ></FooterColumn>
            ))}
          </section>
        </div>
        <FooterBottom/>
      </footer>
    );
  }
}

export default Footer;


