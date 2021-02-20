import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Form,
  Button,
  Alert,
  Modal,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import StarsRating from "../Components/StarsRating";

const Profil = ({ info }) => {
  const [profil, setProfil] = useState();
  const [comment, setComment] = useState("");
  const [saveComment, setsaveComment] = useState([]);
  const [success, setsuccess] = useState();
  const [modal, setModal] = useState(false);
  const infos = useLocation();

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const removeAlert = () => {
    setTimeout(() => {
      setsuccess(false);
    }, 3000);
  };

  const viewAllComments = (val) => {
    setModal(val);
  };

  const readComment = () => {
    let stored = localStorage.getItem("comments");
    stored = stored.split(",");
    console.log(stored);
    return stored.map((com, index) => {
      return (
        <div key={index}>
          <ul>
            <li>{com}</li>
          </ul>
        </div>
      );
    });
  };

  useEffect(() => {
    setProfil(infos.state.people);
  }, [infos]);

  return (
    <>
      {modal && (
        <Modal.Dialog>
          <Modal.Header
            closeButton
            onClick={() => {
              setModal(false);
            }}
          >
            <Modal.Title>Comments</Modal.Title>
          </Modal.Header>

          <Modal.Body>{readComment()}</Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setModal(false);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
      {success && (
        <Alert variant="success">
          <Alert.Heading>Comment saved</Alert.Heading>
        </Alert>
      )}
      <div
        style={{
          width: 1000,
          margin: "auto",
          marginTop: 50,
          backgroundColor: "lightgrey",
          padding: 10,
          boxSizing: "content-box",
        }}
      >
        {profil && (
          <div>
            <div
              style={{
                display: "flex",
                marginBottom: 30,
              }}
            >
              <Container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Row>
                  <Col xs={6} md={4}>
                    <Image
                      src={`https://i.mdel.net/i/db/${profil.image}`}
                      alt={profil.name}
                      roundedCircle
                    />
                  </Col>
                </Row>
              </Container>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <h1>{profil.name}</h1>
            </div>

            <div
              style={{
                width: 800,

                margin: "auto",
              }}
            >
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Comments :</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your comments here..."
                    value={comment}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="secondary"
                  onClick={() => {
                    try {
                      saveComment.push(comment);
                      localStorage.setItem("comments", saveComment);
                      setsuccess(true);
                      removeAlert();
                      setComment("");
                    } catch (error) {
                      <Alert variant="danger">
                        <Alert.Heading>An error occured</Alert.Heading>
                      </Alert>;
                    }
                  }}
                >
                  Saved comments
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    viewAllComments(true);
                  }}
                >
                  All comments
                </Button>
              </div>
            </div>

            <StarsRating />
          </div>
        )}
      </div>
    </>
  );
};

export default Profil;
