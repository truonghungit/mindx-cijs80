import { useContext } from "react";

import { TranslationContext } from "../TranslationContext";

export default function Footer() {
  const { currentLanguage, setCurrentLanguage } =
    useContext(TranslationContext);

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
  };

  return (
    <footer className="p-5 bg-dark-subtle">
      <div className="container">
        <div className="d-flex justify-content-between">
          <p>Mindx School</p>

          <select onChange={handleLanguageChange} value={currentLanguage}>
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
