import './HeaderStyles.css';
import Header from './Header';
import {Meta, StoryObj} from "@storybook/react";
import React from "react";

const meta: Meta<typeof Header> = {
    title: 'Header',
    component: Header,
    decorators: [
        (Story) => (
            <div className="header-container" style={{backgroundColor: 'lightblue'}}>
                <Story/>
            </div>
        )
    ],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tourTitle: 'Mini Tour',
        tourCTA: 'Start Free'
    }
};