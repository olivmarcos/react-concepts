import "./Input.css";

const Input = ({ label, type, value, placeholder, onChange }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input type={type} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default Input;
