import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";

const People = ({ data }) => {
  let history = useHistory();

  return (
    <div>
      <ul>
        {data &&
          data.map((people, index) => {
            return (
              <div
                key={index}
                style={{
                  width: 500,
                  marginTop: 10,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                onClick={() => {
                  history.push({
                    pathname: "/profil",

                    state: { people: people },
                  });
                }}
              >
                <div
                  style={{
                    display: "flex",
                    border: "solid #DDDDDD",
                    borderRadius: 5,
                    cursor: "pointer",
                    backgroundColor: "#DDDDDD",
                  }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`https://i.mdel.net/i/db/${people.image}`}
                      alt={people.name}
                      style={{ objectFit: "contain" }}
                    />
                  </Card>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginLeft: 30,
                    }}
                  >
                    <h5>{people.name}</h5>
                    <span style={{ fontStyle: "italic" }}>{people.type}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default People;
