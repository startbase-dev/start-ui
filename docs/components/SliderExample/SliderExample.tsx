import { ChangeEvent, useState } from 'react';
import React from 'react';
import Slider from '@start-base/react-form-elements/Slider';

export default function SliderExample() {
  const [inputs, setInputs] = useState<Record<string, unknown>>({});

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = event.target;

    setInputs((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? !prev[name] : value,
    }));
  }

  return (
    <Slider
      name="e5"
      label="Slider"
      min={0}
      max={100}
      value={inputs['e5']}
      onChange={handleChange}
      range
      defaultValue={[20, 50]}
    />
  );
}
