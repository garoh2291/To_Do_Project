import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { LoggedUser } from "../../context";
import { BACKEND_URL } from "../../data";
import {
  isRequired,
  maxLength30,
  minLength3,
  validateEmail,
} from "../../helpers/validations";
import "./styles.css";
export const LoginSection = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(LoggedUser);

  const [authData, setAuthData] = useState({
    email: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength3, validateEmail],
    },
    password: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength3, maxLength30],
    },
  });

  const navigate = useNavigate();

  const authChange = (e) => {
    const { value, name } = e.target;

    const { validations } = authData[name];
    let error;

    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i];
      const errorMessage = validation(value);

      if (errorMessage) {
        error = errorMessage;
        break;
      }
    }

    setAuthData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
          error,
        },
      };
    });
  };

  const authSubmit = (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target;

    const authDataSend = {
      email,
      password,
    };

    fetch(`http://localhost:3001/user/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authDataSend),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw data.error;
        }
        if (data.hasOwnProperty("jwt")) {
          localStorage.setItem("key", data["jwt"]);
          navigate("/dashboard");
          setIsUserLoggedIn(localStorage.getItem("key"));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login_section">
      <Form className="col-10" onSubmit={authSubmit}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              id="contacterEmail"
              name="email"
              placeholder="Write Your email"
              type="email"
              onChange={authChange}
              invalid={!!authData.email.error}
            />
            {!!authData.email.error && (
              <FormFeedback>{authData.email.error}</FormFeedback>
            )}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              id="contacterNAme"
              name="password"
              type="password"
              placeholder="Type Your password"
              onChange={authChange}
              invalid={!!authData.password.error}
            />
            {!!authData.password.error && (
              <FormFeedback>{authData.password.error}</FormFeedback>
            )}
          </Col>
        </FormGroup>
        <Col
          sm={{
            offset: 5,
            size: 10,
          }}
        >
          <Button onSubmit={authSubmit}>Submit</Button>
        </Col>
      </Form>
    </div>
  );
};
