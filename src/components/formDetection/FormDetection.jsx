import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { StyledForm } from "./formDetection.styles";

function FormDetection() {
  return (
    <StyledForm>
      <div className="d-flex gap-4">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name: </Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="formBasicCountry">
          <Form.Label>Country: </Form.Label>
          <Form.Control type="text" placeholder="Country" />
        </Form.Group>
      </div>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}

export default FormDetection;
