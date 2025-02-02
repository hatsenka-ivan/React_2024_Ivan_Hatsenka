import PropTypes from 'prop-types';
import "./FooterColumn.css"

export default function FooterColumn({column}) {
    return <ul className="footer__column">
        {column.map(item => <li key={item}><a href="#">{item}</a></li>)}
    </ul>
}

FooterColumn.propTypes = {
    column: PropTypes.arrayOf(PropTypes.string).isRequired,
};