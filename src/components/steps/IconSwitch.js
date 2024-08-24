import "../../App.css";

function IconSwitch({ icon, onSwitch }) {
  return (
      <button onClick={onSwitch} className="switch-btn">
        <span className="material-icons">{icon}</span>
      </button>
  );
}

export default IconSwitch;
