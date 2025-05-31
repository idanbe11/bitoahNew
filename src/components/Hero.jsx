import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import image1 from "../components/assets/images/image1.jpg";
import image2 from "../components/assets/images/image2.jpg";

export default function Hero() {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleNavigate = () => {
    navigate("/form");
  };

  return (
    <section className="hero" aria-labelledby="hero-heading" dir="rtl" lang="he">
      <div className="hero-container">

        {/* Sticky button on the left */}
        <div className="sticky-button-container">
          <button
            className="cta-button"
            aria-label="קבלו הצעת מחיר בחינם"
            onClick={handleNavigate} // ✅ Make clickable
          >
            להוזלה מיידית בביטוחים
          </button>
        </div>

        {/* Main content */}
        <div className="hero-content">
          <h1 id="hero-heading">
            מעל גיל 60? ייתכן ואתם לא מודעים לזכויות שלכם{" "}
            <span className="highlight-text">בביטוחים הסיעודיים הפרטיים</span>
          </h1>

          <h2>
            רוב האנשים שרכשו ביטוח סיעודי פרטי אינם מודעים לכך שגם אם יפסיקו לשלם על הפוליסה –
            הכיסוי לא בהכרח מתבטל. במקרים רבים, נשמר להם חלק מהקצבה העתידית, בהתאם למה שצברו לאורך השנים.
          </h2>

          <div className="article-info size" aria-label="פרטי המאמר">
            <span>• זמן קריאה: כ-8 דקות</span>
            <span>• תאריך: 25 במאי 2025</span>
          </div>

          <hr className="divider" aria-hidden="true" />

          <p>
            📌 הסיבה לכך היא קיומו של רכיב נסתר ברוב הפוליסות הסיעודיות הפרטיות – הנקרא "ערכי סילוק":
            זהו סכום קצבה שמובטח לכם גם אם תבחרו להפסיק את התשלום החודשי – בהתאם לוותק שצברתם בפוליסה.
            <br /><br />
            ❗️ למה זה חשוב?
            <br />
            ✔️ בפוליסות הסיעודיות הפרטיות קיים מרכיב צבירתי – קצבה שנשמרת באופן יחסי גם לאחר הפסקת תשלום.
            <br />
            ✔️ הציבור הרחב לרוב לא מודע לכך – וכתוצאה מכך מאבד זכויות וכסף שמגיע לו.
            <br />
            ✔️ רבים מחזיקים בכפל ביטוחים – ומשלמים פעמיים בלי צורך.
          </p>

          <div className="hero-image">
            <img
              src={image1}
              alt="אישה מבוגרת מחייכת, מסמלת ביטחון בזכויות הסיעודיות"
            />
          </div><br />

          <p>
            <b>מה כוללת הבדיקה שאנחנו מציעים?</b>
            <br /><br />
            אנו מציעים בדיקה חינמית ואובייקטיבית של כל הפוליסות הסיעודיות שלכם – שתעזור להבין מה יש לכם,
            מה מגיע לכם, והאם קיימים ערכי סילוק שניתן לממש בעתיד.
            <br /><br />
            📋<b>במסגרת הבדיקה תעברו:</b><br />
            ✅ סקירה של פוליסות סיעוד קיימות – פרטיות וקבוצתיות<br />
            ✅ איתור ערכי סילוק בפוליסות הפרטיות<br />
            ✅ בדיקת זכאות לקצבאות מגופים כמו ביטוח לאומי וקופות החולים<br />
            ✅ איתור כפילויות וביטוחים מיותרים – שיכולים לחסוך לכם מאות ₪ כל חודש
          </p>

          {/* ✅ Button with navigation */}
          <button
            className="cta-button size_button"
            aria-label="התחילו את הבדיקה החינמית שלכם"
            onClick={handleNavigate}
          >
            התחילו את הבדיקה החינמית שלכם
          </button>

          <p>
            <b>💬 ובמידת הצורך – תוכלו לבחור לקבל גם ליווי סיעודי מקצועי:</b><br /><br />
            ✔️ סיוע בהגשת תביעות לכל הגופים הרלוונטיים<br />
            ✔️ טיפול מלא בתהליך – בלי עמלות תיווך<br />
            ✔️ ליווי אישי וצמוד, עד לקבלת הקצבה<br /><br />
            ⚠️ למה חשוב לפעול עכשיו?<br /><br />
            ⏳ כל עיכוב עלול לפגוע בזכאות<br />
            👪 בני משפחה במצב סיעודי לרוב אינם מסוגלים לנהל את הבירוקרטיה בעצמם<br />
            💸 שירותים כאלה עולים בשוק בין 20%–25% מהקצבה – ואצלנו זה בחינם
          </p>

          <div className="hero-image">
            <img
              src={image2}
              alt="אישה מבוגרת מחייכת, מסמלת ביטחון בזכויות הסיעודיות"
            />
          </div>

          <p>
            📞 רוצים לדעת אם יש לכם כסף שמחכה רק לכם?<br /><br />
            השאירו פרטים לבדיקה דיסקרטית – ותקבלו:<br /><br />
            ✅ תמונת מצב מלאה של הביטוחים הסיעודיים שלכם<br />
            ✅ בדיקת ערכי סילוק והחזר כספי אפשרי<br />
            ✅ הבנה אם יש מקום להוזיל תשלומים או לשפר את הכיסוי<br />
            ✅ ולבסוף – הצעה לליווי סיעודי מקצועי, אם תימצא זכאות
          </p>

          {/* ✅ Another button that routes to form */}
          <button
            className="cta-button size_button"
            aria-label="התחילו את הבדיקה החינמית שלכם"
            onClick={handleNavigate}
          >
            התחילו את הבדיקה החינמית שלכם
          </button>
          
        </div>
      </div>
    </section>
  );
}
