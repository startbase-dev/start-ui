import { ChangeEvent, useState } from 'react';
import MultipleDatePicker from '@start-base/react-form-elements/MultipleDatePicker';
import React from 'react';

export default function MultipleDatePickerExample() {
  const [inputs, setInputs] = useState<Record<string, unknown>>({});

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = event.target;

    setInputs((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? !prev[name] : value,
    }));
  }

  return (
    <div>
      <MultipleDatePicker
        name="example"
        value={inputs['example']}
        onChange={handleChange}
      />
    </div>
  );
}
