import { useState } from 'react';
import CheckboxCards from '@start-base/react-form-elements/CheckboxCards';
import React from 'react';

interface CheckboxCardsExampleProps {
  example?: 'default' | 'checked' | 'row' | 'disabled' | 'input' | 'error';
}

export default function CheckboxCardsExample({
  example = 'default',
}: CheckboxCardsExampleProps) {
  type Inputs = Record<string, Array<string | number>>;
  const [inputs, setInputs] = useState<Inputs>({});

  function handleChange(event: {
    target: {
      name: string;
      value: Array<string | number>;
    };
  }) {
    const { name, value } = event.target;

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  switch (example) {
    case 'default':
      return (
        <CheckboxCards
          value={inputs['e1']}
          label="CheckboxCards"
          name="e1"
          onChange={handleChange}
          options={[
            {
              label: 'Checkbox Option 1',
              value: 'e1v1',
            },
            {
              label: 'Checkbox Option 2',
              value: 'e1v2',
            },
          ]}
        />
      );

    case 'checked':
      return (
        <CheckboxCards
          value={inputs['e2'] ?? ['e2v1', 'e2v2']}
          label="CheckboxCards"
          name="e2"
          onChange={handleChange}
          options={[
            {
              label: 'Checkbox Option 1',
              value: 'e2v1',
            },
            {
              label: 'Checkbox Option 2',
              value: 'e2v2',
            },
          ]}
        />
      );

    case 'disabled':
      return (
        <CheckboxCards
          disabled
          value={inputs['e3']}
          label="CheckboxCards"
          name="e3"
          onChange={handleChange}
          options={[
            {
              label: 'Checkbox Option 1',
              value: 'e3v1',
            },
            {
              label: 'Checkbox Option 2',
              value: 'e3v2',
            },
          ]}
        />
      );

    case 'error':
      return (
        <CheckboxCards
          error="Error Message"
          value={inputs['e4']}
          label="CheckboxCards"
          name="e4"
          onChange={handleChange}
          options={[
            {
              label: 'Checkbox Option 1',
              value: 'e4v1',
            },
            {
              label: 'Checkbox Option 2',
              value: 'e4v2',
            },
          ]}
        />
      );

    case 'input':
      return (
        <CheckboxCards
          hideInput={false}
          value={inputs['e5']}
          label="CheckboxCards"
          name="e5"
          onChange={handleChange}
          options={[
            {
              label: 'Checkbox Option 1',
              value: 'e5v1',
            },
            {
              label: 'Checkbox Option 2',
              value: 'e5v2',
            },
          ]}
        />
      );

    case 'row':
      return (
        <CheckboxCards
          direction="row"
          value={inputs['e6']}
          label="CheckboxCards"
          name="e6"
          onChange={handleChange}
          options={[
            {
              label: 'Checkbox Option 1',
              value: 'e6v1',
            },
            {
              label: 'Checkbox Option 2',
              value: 'e6v2',
            },
          ]}
        />
      );
  }
}
