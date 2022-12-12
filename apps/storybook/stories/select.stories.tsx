import { Meta, Story } from '@storybook/react';
import { TarSelect, TarSelectProps, TarOption } from '@tar/core';

type StoryArgs = {} & TarSelectProps;

const meta: Meta = {
  title: 'Components/Select',
  component: TarSelect,
  argTypes: {
    onChange: {
      action: '🦊 onChange',
    },
    onSearch: {
      action: '🦊 onSearch',
    },
  },
} as Meta;

export default meta;

const Template = (args: StoryArgs) => (
  <TarSelect {...args}>
    <TarOption title="Example" slug="example" />
    <TarOption title="Orange" slug="orange" />
    <TarOption title="Egg" slug="egg" />
  </TarSelect>
);

export const Default: Story<StoryArgs> = Template.bind({});

Default.args = {
  label: 'Cor',
  value: {
    title: 'Egg',
    slug: 'egg',
  },
  error: false,
  message: '',
  disable: false,
};

Default.storyName = 'Default';
