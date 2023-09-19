import React from 'react';
import './Coachmark.css';
import Coachmark from './Coachmark';
import {Meta, StoryObj} from "@storybook/react";

// See "Improved Type Safety in Storybook 7": https://storybook.js.org/blog/improved-type-safety-in-storybook-7/
const meta: Meta<typeof Coachmark> = {
    title: 'Coachmark',
    component: Coachmark,
    decorators: [
        (Story) => (
            <div className="coachmark-container"
                 style={{width: '500px', height: '500px', backgroundColor: 'lightgray'}}>
                <Story/>
            </div>
        )
    ],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCoordinates: Story = {
    args: {
        coordinates: [0, 0],
        onClick: () => {
        }
    }
};

// This is another story similar to the above one, but with a different name and default arguments.
export const WithCoordinates: Story = {
    args: {
        ...DefaultCoordinates.args,
        coordinates: [20, 30],
    }
};