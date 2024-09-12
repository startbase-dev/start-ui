import React, {
  cloneElement,
  useState,
  ChangeEvent,
  ReactElement,
} from "react";

interface FormOnChangeProps {
  children: ReactElement;
}

interface InputState {
  [key: string]: string | boolean;
}

const FormOnChange: React.FC<FormOnChangeProps> = ({ children }) => {
  const [inputs, setInputs] = useState<InputState>({});

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return children
    ? cloneElement(children, {
        name: "input",
        value: inputs.input || "",
        onChange: onChange,
      })
    : null;
};

export default FormOnChange;
