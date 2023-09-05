import type { Meta, StoryObj } from '@storybook/react';

import { InputGroup } from '.';

const meta: Meta<typeof InputGroup> = {
  title: 'Atoms/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', defaultValue: '' },
    placeholder: { control: 'text', defaultValue: '' },
    type: { control: 'text', defaultValue: '' },
    disabled: { control: 'boolean', defaultValue: false },
    readOnly: { control: 'boolean', defaultValue: false }
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      source: {
        type: 'code',
        state: 'open'
      }
    }
  }
};

export default meta;

type InputGroupStory = StoryObj<typeof InputGroup>;

export const Basic: InputGroupStory = {
  args: {}
};

export const WithValue: InputGroupStory = {
  args: { value: 'Example value' }
};

export const PasswordInput: InputGroupStory = {
  args: { type: 'password', placeholder: 'Enter your password' }
};

export const DisabledInput: InputGroupStory = {
  args: { disabled: true }
};

export const ReadOnlyInput: InputGroupStory = {
  args: { readOnly: true }
};

export const Playground: InputGroupStory = {
  args: {}
};
