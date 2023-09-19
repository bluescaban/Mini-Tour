// import './Carousel.css';
// import Carousel, {CarouselProps} from './Carousel';
// import {Meta, StoryObj} from "@storybook/react";

// // Create mock section for the story
// const mockSection: CarouselProps = {
//     section: {
//         steps: [
//             {
//                 header: "Step 1",
//                 description: "This is step 1",
//                 coordinates: [0, 0],
//                 img: "https://via.placeholder.com/150"
//             },
//             {
//                 header: "Step 2",
//                 description: "This is step 2",
//                 coordinates: [20, 30],
//                 img: "https://via.placeholder.com/150"
//             },
//         ]
//     }
    
// };

// const meta: Meta<typeof Carousel> = {
//     title: 'Carousel',
//     component: Carousel,
// };

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//     args: {
//         section: mockSection.section
//     }
// };

// export const Tablet: Story = {
//     args: {
//         ...Default.args,
//     },
//     parameters: {
//         viewport: { defaultViewport: 'ipad' }, // or any other tablet size you've defined
//     }
// }

// export const Mobile: Story = {
//     args: {
//         ...Default.args,
//     },
//     parameters: {
//         viewport: { defaultViewport: 'iphone5' }, // or any other mobile size you've defined
//     }
// }