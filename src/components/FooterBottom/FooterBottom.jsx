import React from "react";
import "./FooterBottom.css";
import instagram from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

export default React.memo(function FooterBottom() {
  return (
    <section className="footer__bottom">
      <p className="copyright">
          Built by <span className="link_blue">Flowbase</span> · Powered by{" "}
          <span className="link_blue">Webflow</span>
      </p>
        <ul className="footer__social-icon">
        <li>
          <img src={instagram} alt="instagram icon" />
        </li>
        <li>
          <img src={twitter} alt="twitter icon" />
        </li>
        <li>
            <img src={youtube} alt="youtube icon" />
        </li>
      </ul>
    </section>
  );
});
