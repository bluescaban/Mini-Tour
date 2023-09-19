import MiniTour from './MiniTour';
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof MiniTour> = {
    title: 'MiniTour',
    component: MiniTour,
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tourTitle: 'Title',
        tourCTA: 'CTA',
    }
}
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