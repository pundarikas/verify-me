import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactCodeInput from "react-code-input";
import { useNavigate } from "react-router-dom";
import { string } from "yup";

const schema = string()
  .length(6, "Must be exactly 6 digits")
  .required("Code required");

export const Verification = () => {
  const navigate = useNavigate();

  const [code, setCode] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);

  const handleChange = (value: string) => {
    setCode(value);
    schema
      .validate(value)
      .then(() => {
        setValid(true);
        setError("");
      })
      .catch((err) => {
        setValid(false);
        setError(err.errors);
      });
  };

  const submit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    fetch("/api/verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((response) => {
        if (response.status === 200) {
          navigate("/success");
        } else {
          return response.json();
        }
      })
      .then((err) => {
        setLoading(false);
        setError("Verification Error");
      });
  };

  return (
    <div className="form-wrapper">
      <div className="label">Verify me !!</div>
      <div className="form-container">
        <Form onSubmit={submit} className="form">
          <Form.Label>Verification Code:</Form.Label>
          <Form.Group>
            <ReactCodeInput
              type="number"
              fields={6}
              name="code"
              inputMode="numeric"
              value={code}
              onChange={handleChange}
            />
          </Form.Group>
          {error ? <small className="error">{error}</small> : ""}
          <Form.Group>
            <Button variant="primary" type="submit" disabled={!valid}>
              {isLoading ? "Submiting..." : "Submit"}
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
