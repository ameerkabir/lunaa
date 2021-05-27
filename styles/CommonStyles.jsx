import styled from "styled-components";

export const Input = styled.input`
  margin-bottom: 8px;
  max-width: 420px;
  min-height: 50px;
  box-sizing: border-box;
  padding: 8px;
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 1em;
  border-radius: 1em;
  position: ${(props) => props.position};
  bottom: ${(prop) => prop.bottom};
`;
export const Label = styled.label`
  margin-bottom: 12px;
  padding: 4px;
  /* margin-top: 30px */
`;

export const SubmitButton = styled.button`
  text-transform: uppercase;
  max-width: 420px;
  background-color: #0d46c1;
  color: #ffff;
  border-radius: 4px;
  min-height: 50px;
  padding: 8px;
  margin-bottom: ${prop => `${prop.marginBottom}px`};
  margin-top: ${prop => `${prop.marginTop}px`};
`;

export const CheckBox = styled.input`
  display: inline-flex;
  margin-bottom: 8px;
  margin-right: 8px;
  margin-left: 0px;
  min-height: 18px;
  min-width: 18px;
  max-width: 150px;
`;
export const Link = styled.span`
  display: inline-block;
  text-decoration: none;
  color: #1665d8;
  &:hover {
    text-decoration: underline;
  }
`;

export const Header = styled.h3`
  margin: 0;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
`;
