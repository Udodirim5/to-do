import React, { useState } from "react";

const CustomDropdown = ({ selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
    <h2>Sort By</h2>
      <div style={{ position: "relative", width: "100%" }}>
        <div
          onClick={toggleDropdown}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            cursor: "pointer",
            background: "#f9f9f9",
          }}
        >
          {selectedOption}
        </div>

        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              border: "1px solid #ccc",
              background: "#E2EDFD",
              boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              zIndex: 1,
            }}
          >
            <div onClick={() => handleOptionClick("title")} style={optionStyle}>
              By Name
            </div>
            <div
              onClick={() => handleOptionClick("completed")}
              style={optionStyle}
            >
              By Status
            </div>
            <div onClick={() => handleOptionClick("input")} style={optionStyle}>
              By Time
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const optionStyle = {
  padding: "10px",
  cursor: "pointer",
  borderBottom: "1px solid #eee",
};

export default CustomDropdown;
