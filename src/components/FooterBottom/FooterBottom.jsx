import "./FooterBottom.css"
import instagram from "../../assets/insta.svg"
import twitter from "../../assets/twitter.svg"
import youtube from "../../assets/youtube.svg"

export default function FooterBottom() {
    return <section className="footer__bottom">
        <p className="copyright">
            Built by <span className="blue-link">Flowbase</span> · Powered by <span className="blue-link">Webflow</span>
        </p>
        <ul className="footer__social-icon">
            <li><img src={instagram} alt="instagram icon"/>
            </li>
            <li><img src={twitter} alt="twitter icon"/>
            </li>
            <li><img src={youtube} alt="youtube icon"/>
            </li>
        </ul>
    </section>
}