import './AccordionStyles.css';
import Accordion from './Accordion';
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                title: 'Item 1',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
            },
            {
                title: 'Item 2',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
            },
            {
                title: 'Item 3',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
            }
        ]
    }
};

export const Tablet: Story = {
    args: {
        ...Default.args,
    },
    parameters: {
        viewport: { defaultViewport: 'ipad' }, // or any other tablet size you've defined
    }
}

export const Mobile: Story = {
    args: {
        ...Default.args,
    },
    parameters: {
        viewport: { defaultViewport: 'iphone5' }, // or any other mobile size you've defined
    }
}