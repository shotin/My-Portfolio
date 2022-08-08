import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
// import InputField from "../FormFields/InputField";
// import SelectField from "../FormFields/SelectField";

export default function Comic() {
  const navigate = useHistory();

  const [image, setImage] = useState();
  const [pdf, setPdf] = useState();
  const [validationError, setValidationError] = useState({});

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
    setPdf(event.target.files[0]);
  };

  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("pdf", pdf);
    formData.append("image", image);
    // formData.append("author", author);
    // `https://blooming-spire-26791.herokuapp.com/api/categories`,
    //cryptocomicslab.com/api/character https://cryptocomicslab.com/api/categories

    await axios
      .post(`http://localhost:8000/api/file`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-10">
          <i
            style={{ cursor: "pointer" }}
            onClick={() => navigate.goBack()}
            class="fa-solid fa-circle-arrow-left mt-5 mb-5 fa-1x"
          >
            {" "}
            Back
          </i>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title bg-primary w-100 text-center text-white p-3">
                Upload Comics
              </h4>
              <hr />
              <div className="form-wrapper">
                <a href=""></a>
                {Object.keys(validationError).length > 0 && (
                  <div className="row">
                    <div className="col-12">
                      <div className="alert alert-danger">
                        <ul className="mb-0">
                          {Object.entries(validationError).map(
                            ([key, value]) => (
                              <li key={key}>{value}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                <Form enctype="multipart/form-data" onSubmit={createProduct}>
                  <Row>
                    <Col>
                      <Form.Group controlId="Image" className="mb-3">
                        <Form.Label>Comic Image</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group controlId="Pdf" className="mb-3">
                        <Form.Label>PDF image</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    variant="primary"
                    className="mt-2"
                    size="lg"
                    block="block"
                    type="submit"
                  >
                    Save
                  </Button>
                  {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
