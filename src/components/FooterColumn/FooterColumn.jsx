import PropTypes from 'prop-types';
import "./FooterColumn.css";
import { PureComponent } from "react";

class FooterColumn extends PureComponent {
    render() {
      return (
        <ul className="footer__column">
          {this.props.column.map((item) => (
            <li key={item}>
              <a href={this.props.link}>{item}</a>
            </li>
          ))}
        </ul>
      );
    }
  }
  


FooterColumn.propTypes = {
    column: PropTypes.arrayOf(PropTypes.string).isRequired, 
    link: PropTypes.string.isRequired
};

export default FooterColumn;