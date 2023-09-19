import '../src/index.css'; // Update this with the path to your CSS file
import {Preview} from "@storybook/react";

import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

const preview: Preview = {
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        }
    }
}

export default preview;

// export const customViewports = {
//     viewport: {
//         viewports: {
//             mobile: {
//                 name: 'Mobile',
//                 styles: {
//                     width: '360px',
//                     height: '640px',
//                 },
//                 type: 'mobile',
//             },
//             tablet: {
//                 name: 'Tablet',
//                 styles: {
//                     width: '768px',
//                     height: '1024px',
//                 },
//                 type: 'tablet',
//             },
//             desktop: {
//                 name: 'Desktop',
//                 styles: {
//                     width: '1024px',
//                     height: '768px',
//                 },
//                 type: 'desktop',
//             },
//         },
//     },
// };