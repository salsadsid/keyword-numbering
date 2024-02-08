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
      <textarea
        value={value}
        onChange={handleChange}
        name=""
        id=""
        cols="30"
        rows="10"
        onKeyUp={handleChange2}
      ></textarea>
    </>
  );
}

export default App;
