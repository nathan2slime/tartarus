import { Meta, Story } from '@storybook/react';

import { TarButton, TarButtonProps } from '@tar/core';

type StoryArgs = {
  title: string;
} & TarButtonProps;

const meta: Meta = {
  title: 'Components/Button',
  component: TarButton,
  argTypes: {
    type: {
      options: ['button', 'submit'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['solid', 'outline'],
      control: { type: 'radio' },
    },
    bold: {
      control: { type: 'select' },
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    onClick: {
      action: '🍊onClick',
    },
  },
} as Meta;

export default meta;

const Template = (args: StoryArgs) => (
  <TarButton {...args} block>
    {args.title}
  </TarButton>
);

export const Default: Story<StoryArgs> = Template.bind({});

Default.args = {
  title: 'Login',
  color: 'primary',
  disable: false,
  variant: 'solid',
  bold: 400,
  type: 'button',
};

Default.storyName = 'Default';
