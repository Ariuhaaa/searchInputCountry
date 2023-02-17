import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SplitButton from "react-bootstrap/SplitButton";
import { useEffect, useState } from "react";

function App() {
  const [myData, setMyData] = useState([]);
  const [show, setShow] = useState([]);
  const [search, setSearch] = useState([]);

  function deleteValue() {}

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
        setShow(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Text input with dropdown button"
          type="text"
          placeholder="Search country please?"
          onChange={(e) => {
            setSearch(e.target.value);
            setShow(
              myData?.filter((a) => {
                if (a.name.toLowerCase().includes(e.target.value)) {
                  return a;
                }
              })
            );
          }}
        />
        <SplitButton
          variant="outline-secondary"
          title="X"
          id="segmented-button-dropdown-2"
          alignRight
          onClick={deleteValue}
        >
          {show?.map((e) => {
            console.log(myData);
            return <Dropdown.Item href="#">{e.name}</Dropdown.Item>;
          })}
        </SplitButton>
      </InputGroup>
    </div>
  );
}

export default App;
