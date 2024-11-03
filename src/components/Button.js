const Button = ({ text, color, bgColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        all: "unset",
        backgroundColor: bgColor,
        color: color,
        borderRadius: "5px",
        padding: "5px 10px",
        border: "2px solid #3B82F6",
        fontSize: "1.3rem",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
