import "./Footer.css"
import logo from "../../assets/logo.svg"
import FooterColumn from "../FooterColumn/FooterColumn";
import FooterBottom from "../FooterBottom/FooterBottom";
import {footerColumns} from "../../constants";

export default function Footer() {

    return <footer className="footer">
        <div className="footer__top">
            <section className="footer__description">
                <img src={logo} alt="logo"/>
                <p className="footer__description-text">Takeaway & Delivery template</p>
                <p>for small - medium businesses.</p>
            </section>
            <section className="footer__column-wrapper">
                {footerColumns.map(column => <FooterColumn key={column[0]} column={column}></FooterColumn>)}
            </section>
        </div>
        <FooterBottom></FooterBottom>
    </footer>
}


