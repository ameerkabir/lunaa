import React from "react";
import styled from "styled-components";
import Link from "next/link";
import {
  Input,
  Label,
  SubmitButton,
  Form,
  Header,
} from "../styles/CommonStyles";

// const Navigate = styled(Link)`
//   ${Anchor}
// `;

import { useRegistrationForm } from "../hooks/useRegistrationForm";

const LoginForm = () => {
  const { handleChange, handleSubmit, values } = useRegistrationForm(SignUP);

  function SignUP() {
    console.log(values);
    return (
      <pre style={{ minWidth: "100vh" }}>{JSON.stringify(values, null, 8)}</pre>
    );
  }

  console.log({ values });
  return (
    <Form
      onSubmit={(e) => handleSubmit(e)}
      position="relative"
      bottom="63px"
    >
      <Header>Sign in</Header>
      <p>Sign in with social media</p>
      <Label>Email address</Label>
      <Input
        type="email"
        id="userName"
        name="userName"
        required
        placeholder="enter your name"
        onChange={(e) => handleChange(e)}
      />
      <Label>Password</Label>
      <Input
        type="password"
        id="password"
        name="password"
        onChange={(e) => handleChange(e)}
        required
      />
      <SubmitButton type="submit" marginBottom={16} marginTop={8}>
        Sign in
      </SubmitButton>
      <p styles={{ marginTop: "8px" }}>
        Don&apos;t have have an account?{" "}
        <Link href="/register">Sign up</Link>
      </p>
    </Form>
  );
};
export default LoginForm;
