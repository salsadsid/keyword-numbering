import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChange2 = (e) => {
    if (e.keyCode === 13) {
      const newValue = e.target.value.split("\n");

      setValue(
        newValue?.length > 0
          ? newValue
              .map((p, i) => {
                if (p.indexOf(i + 1) !== -1) {
                  console.log(p.indexOf(i + 1) !== -1);
                  return `${p}`;
                } else {
                  return `${i + 1}. ${p}`;
                }
              })
              .join("\n")
          : ""
      );
    }
  };
  console.log(value);
  return (
    <>
      <div id="root">
        <header>
          <h1>Keyword numbering</h1>
        </header>

        <div id="form">
          <div className="fish" id="fish"></div>
          <div className="fish" id="fish2"></div>

          <form id="waterform" method="post">
            <div className="formgroup" id="message-form">
              <label htmlFor="message">Enter keyword and hit enter</label>
              <textarea
                value={value}
                onChange={handleChange}
                id="message"
                name="message"
                onKeyUp={handleChange2}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
