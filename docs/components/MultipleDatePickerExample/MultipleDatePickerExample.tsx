import { ChangeEvent, useState } from 'react';
import MultipleDatePicker from '@start-base/react-form-elements/MultipleDatePicker';

export default function MultipleDatePickerExample() {
  const [inputs, setInputs] = useState({});

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
