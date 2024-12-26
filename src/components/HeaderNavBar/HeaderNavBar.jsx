import "./HeaderNavBar.css"

export default function HeaderNavBar() {
    return <ul className="navbar">
        <li className="navbar__element"><a href="#">Home</a></li>
        <li className="navbar__element navbar__element-chosen"><a href="#">Menu</a></li>
        <li className="navbar__element"><a href="#">Company</a></li>
        <li className="navbar__element"><a href="#">Login</a></li>
    </ul>
}