import { Meta, Story } from '@storybook/react';

import { TarModal, TarModalProps } from '@tar/core';

type StoryArgs = {
  title: string;
} & TarModalProps;

const meta: Meta = {
  title: 'Components/Modal',
  component: TarModal,
  argTypes: {
    onClose: {
      action: '🦊 onClose',
    },
  },
} as Meta;

export default meta;

const Template = (args: StoryArgs) => <TarModal {...args}></TarModal>;

export const Default: Story<StoryArgs> = Template.bind({});

Default.args = {
  open: true,
};

Default.storyName = 'Default';
