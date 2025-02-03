import "./../Main.css";
import "./Menu.css";

export default function Menu({ children }) {
  return (
    <>
      <h1 className="main__heading">Browse our menu</h1>
      <div className="main__subtitle">
        <p>
          Use our menu to place an order online, or{" "}
          <span className="tool-tip-trigger blue-link">
            phone
            <span className="tool-tip">Call +1 (977) 569-34-98</span>
          </span>{" "}
          our store to place a pickup order. Fast and fresh food.
        </p>
      </div>
      {children}
    </>
  );
}
