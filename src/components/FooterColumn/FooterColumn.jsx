import "./FooterColumn.css";
import React from "react";

export default React.memo(function FooterColumn({ column, link }) {
  return (
    <ul className="footer__column">
      {column.map((item) => (
        <li key={item}>
          <a href={link}>{item}</a>
        </li>
      ))}
    </ul>
  );
});
