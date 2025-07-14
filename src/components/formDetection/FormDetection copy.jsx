//src/components/formDetection/FormDetection.jsx
import Form from "react-bootstrap/Form";
import { StyledForm } from "./formDetection.styles";
import CountrySelect from "../countrySelect/CountrySelect";

function FormDetection() {
  return (
    <>
      <StyledForm>
        <div className="d-flex gap-4">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>State: </Form.Label>
            <Form.Control type="text" placeholder="State" />
          </Form.Group>
          <Form.Group controlId="formBasicCountry">
            <Form.Label>Country: </Form.Label>
            <CountrySelect />
          </Form.Group>
        </div>
        <button type="submit">Submit</button>
      </StyledForm>
    </>
  );
}

export default FormDetection;
