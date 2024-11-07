import { ChangeEvent, CSSProperties, useState } from 'react';
import Radio from '@start-base/react-form-elements/Radio';

interface RadioExampleProps {
  example?: 'default' | 'checked' | 'disabled' | 'error';
}

export default function RadioExample({ example = "default" }: RadioExampleProps) {
  const [inputs, setInputs] = useState({});

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = event.target;
    setInputs((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? !prev[name] : value,
    }));
  }

  const styles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  };

  switch (example) {
    case "default":
      return (
        <div style={styles}>
          <Radio
            label="Radio Option 1"
            name="e1"
            value="e1v1"
            onChange={handleChange}
            checked={inputs["e1"] === 'e1v1'}
          />
          <Radio
            label="Radio Option 1"
            name="e1"
            value="e1v2"
            onChange={handleChange}
            checked={inputs["e1"] === 'e1v2'}
          />
        </div>
      );

    case "checked":
      return (
        <div style={styles}>
          <Radio
            label="Radio Option 1"
            name="e2"
            value="e2v1"
            onChange={handleChange}
            checked={inputs["e2"] ? inputs["e2"] === 'e2v1' : true}
          />
          <Radio
            label="Radio Option 1"
            name="e2"
            value="e2v2"
            onChange={handleChange}
            checked={inputs["e2"] === 'e2v2'}
          />
        </div>
      );

    case "disabled":
      return (
        <div style={styles}>
          <Radio
            label="Radio Option 1"
            name="e3"
            value="e3v1"
            onChange={handleChange}
            checked={inputs["e3"] === 'e3v1'}
            disabled
          />
          <Radio
            label="Radio Option 1"
            name="e3"
            value="e3v2"
            onChange={handleChange}
            checked={inputs["e3"] === 'e3v2'}
            disabled
          />
        </div>
      );

    case "error":
      return (
        <div style={styles}>
          <Radio
            label="Radio Option 1"
            name="e4"
            value="e4v1"
            onChange={handleChange}
            checked={inputs["e4"] === 'e4v1'}
            error="Error Message"
          />
          <Radio
            label="Radio Option 1"
            name="e4"
            value="e4v2"
            onChange={handleChange}
            checked={inputs["e4"] === 'e4v2'}
            error="Error Message"
          />
        </div>
      );
  }
}
