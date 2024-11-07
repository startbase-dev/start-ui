import React, {
  cloneElement,
  useState,
  ChangeEvent,
  ReactElement,
} from 'react';

interface FormOnChangeProps {
  children: ReactElement;
}

type InputState = Record<string, string | boolean>;

const FormOnChange: React.FC<FormOnChangeProps> = ({ children }) => {
  const { props } = children;

  const [inputs, setInputs] = useState<InputState>({});

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  console.log(props);

  return children
    ? cloneElement(children, {
        ...props,
        value: inputs[props.name] || '',
        checked: inputs[props.name] ?? props.checked,
        onChange: onChange,
      })
    : null;
};

export default FormOnChange;
