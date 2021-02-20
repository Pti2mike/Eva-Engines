import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Alert, Button } from "react-bootstrap";
import "./StarRating.css";

const StarsRating = () => {
  const [rates, setRates] = useState();
  const [saveRate, setSaveRate] = useState([]);
  const [success, setSuccess] = useState(false);

  const stars = [1, 2, 3, 4, 5];
  //   console.log(stars);

  const removeAlert = () => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const readNote = () => {
    let stored = JSON.parse(localStorage.getItem("rates"));

    console.log(stored);
    // return stored.map((note, index) => {
    //   return (
    //     <div key={index}>
    //       <ul>
    //         <li>{note}</li>
    //       </ul>
    //     </div>
    //   );
    // });
  };

  return (
    <>
      {success && (
        <Alert variant="success">
          <Alert.Heading>Note saved</Alert.Heading>
        </Alert>
      )}
      <div className="star-wrapper">
        <div className="star-box">
          {[...stars].map((s, i) => (
            <FontAwesomeIcon
              icon={faStar}
              className={rates > i ? "starclicked" : "star"}
              key={i}
              selected={i < rates}
              onClick={async () => {
                try {
                  const storedRate = saveRate.push(rates);
                  await localStorage.setItem(
                    "rates",
                    JSON.stringify(storedRate)
                  );
                  setSuccess(true);
                  removeAlert();
                  setRates(i + 1);
                } catch (error) {
                  <Alert variant="danger">
                    <Alert.Heading>An error occured</Alert.Heading>
                  </Alert>;
                }
              }}
            />
          ))}
        </div>
        <div>
          <span>{rates} of 5 stars</span>
        </div>

        {/*  Test pour récupérer la note
        <Button variant="outline-secondary" onClick={() => {}}>
          View Note
        </Button>
        {rates && <div>{readNote()}</div>} */}
      </div>
    </>
  );
};

export default StarsRating;
