import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
    veniam harum distinctio eligendi esse nam excepturi placeat,
    alias facilis, maiores enim nostrum eaque omnis modi
    repellendus, eum rem architecto velit`,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
    veniam harum distinctio eligendi esse nam excepturi placeat,
    alias facilis, maiores enim nostrum eaque omnis modi
    repellendus, eum rem architecto velit`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
