import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 ngmkl. כל הזכויות שמורות.</p>
      <p>
        <Link to="/privacy-policy">מדיניות פרטיות</Link> |{" "}
        <Link to="/privacy">תנאי שימוש</Link>
      </p>
    </footer>
  );
}
