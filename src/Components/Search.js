import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import People from "../Components/People";
import axios from "axios";
import Loader from "react-loader-spinner";

const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (val) => {
    setSearchTerm(val);
    console.log("value", val);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.models.com/prosearch/sitesearch19-json.html?mdcsearch=${searchTerm}`
      );
      setData(response.data.people);
      setIsLoading(false);
    } catch (e) {
      alert("An error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return isLoading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 100,
      }}
    >
      <Loader
        type="Hearts"
        color="#DDDDDD"
        height={500}
        width={500}
        timeout={3000} //3 secs
      />
    </div>
  ) : (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Looking for a model ?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter two characters minimum"
            value={searchTerm}
            onChange={(e) => handleChange(e.target.value)}
          />
        </Form.Group>
      </Form>
      <People data={data} setData={setData} />
    </div>
  );
};

export default Search;
