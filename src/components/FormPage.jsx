import React from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="form-page-container" dir="rtl" lang="he">
      <h1>השאר פרטים ונחזור אליך</h1>
      <form>
        <label htmlFor="fullName">שם מלא</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="הכנס את שמך המלא"
          required
        />

        <label htmlFor="phone">מספר טלפון</label>
        <div className="phone-input">
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{9}"
            placeholder="05XXXXXXXX"
            required
          />
        </div>

        <button type="submit">שלח</button>
      </form>

      {/* Home button */}
      <button
        onClick={goHome}
        style={{
          marginTop: "1.5rem",
          padding: "0.8rem 1.6rem",
          fontSize: "1rem",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        חזרה לדף הבית
      </button>
    </div>
  );
};

export default FormPage;
