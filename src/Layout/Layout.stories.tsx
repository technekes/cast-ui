// import * as React from 'react';
// import { storiesOf } from '@storybook/react';
// import { select } from '@storybook/addon-knobs/react';

// import { Spinner } from './Spinner.component';
// import { wInfo } from '../storybook-utils';

// storiesOf('Spinner', module).add(
//   'Spinner',
//   wInfo(`

//   ### Notes

//   This is a spinner

//   ### Usage
//   ~~~js
//     <Spinner
//       color="lightGray"
//       size={40}
//       animationSpeed={2}
//     />
//   ~~~`)(() => (
//     <Spinner
//       color={select(
//         'color',
//         ['lightGray', 'gray', 'blue', 'white', 'red', 'yellow'],
//         'lightGray',
//       )}
//       size={select('size', [20, 30, 40, 50, 60], 40)}
//       animationSpeed={select('animationSpeed', [1, 2, 3, 4, 5], 2)}
//       transitionType={select(
//         'transitionType',
//         ['ease-in-out', 'ease-in', 'ease-out', 'linear', 'ease'],
//         'ease-in-out',
//       )}
//     />
//   )),
// );
