import React from "react";
import Link  from 'next/link'
import Navigator from "./navigator";
import { useRegistrationForm } from "../hooks/useRegistrationForm";
import {
  Input,
  Label,
  SubmitButton,
  Form,
  Header,
  Link as Span,
  CheckBoxContainer,
  CheckBox,
} from "../styles/CommonStyles";

const RegistrationForm = () => {
  const { handleChange, handleSubmit, values, handleCheck } =
    useRegistrationForm(SignUP);

  function SignUP() {
    return (
      <pre style={{ minWidth: "100vh" }}>{JSON.stringify(values, null, 8)}</pre>
    );
  }

  return (
    <Navigator>
      {Object.keys(values).length <= 3 ? (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Header>Create a new account</Header>
          <p>Use your work email to create new account...its free</p>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            required
            onChange={(e) => handleChange(e)}
          />
          <Label htmlFor="emailAddress">Email address</Label>
          <Input
            type="email"
            id="emailAddress"
            name="emailAddress"
            required
            onChange={(e) => handleChange(e)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => handleChange(e)}
          />
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              id="termsAndCondition"
              name="termsAndCondition"
              required
              onChange={(e) => handleCheck(e)}
            />
            <Label htmlFor="termsAndCondition">
              I have read the <Span href="google.com">Terms and condition</Span>
            </Label>
          </CheckBoxContainer>
          <SubmitButton type="submit">sine up for free</SubmitButton>
          <p>
            Have an account? <Link href="/">Sign in</Link>
          </p>
        </Form>
      ) : (
        <SignUP />
      )}
    </Navigator>
  );
};

export default RegistrationForm;
