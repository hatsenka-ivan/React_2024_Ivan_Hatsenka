import PropTypes from 'prop-types'
import "./MainButton.css"

export default function MainButton({turnedOff, text}) {
    const bgColor = turnedOff ? "transparent" : "rgba(53, 184, 190, 1)"
    const textColor = turnedOff ? "black" : "white"
    return <button className="main__button" style={{backgroundColor: bgColor, color: textColor}}>
        {text}
    </button>
}


MainButton.propTypes = {
    turnedOff: PropTypes.bool,  
    text: PropTypes.string.isRequired,  
};