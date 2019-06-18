import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

import { Panel, PanelHeader, PanelBody, Collapse } from '../';

type Props = {
  isOpen: boolean;
};

const initialState = {
  isOpen: true,
};

type State = Readonly<typeof initialState>;

class PanelWithCollapse extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.handleCollapse = this.handleCollapse.bind(this);
  }

  readonly state: State = initialState;

  handleCollapse() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const panelStyle = select(
      'panelStyle',
      ['primary', 'secondary', 'success', 'warning', 'danger'],
      'primary',
    );
    return (
      <Panel name={text('Panel Name', 'Catchy Name')} panelStyle={panelStyle}>
        <PanelHeader
          panelStyle={panelStyle}
          headerColor={text('headerColor', 'white')}
          headerBackgroundColor={text('headerBackgroundColor', 'primary')}
          headerBorderColor={text('headerBorderColor', 'primary')}
          name={text('Panel Name', 'Catchy Name')}
          title={text('Title', 'Catchy title')}
          toggleItem={this.handleCollapse}
          isCollapsed={this.state.isOpen}
        />
        <Collapse isOpen={this.state.isOpen}>
          <PanelBody
            panelStyle={panelStyle}
            noPadding={boolean('noPadding', false)}
            bodyBackgroundColor={text('bodyBackgroundColor', 'lightBackground')}
            bodyBorderColor={text('bodyBorderColor', 'lightGray')}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            beatae nostrum quo fuga iste reprehenderit ab fugit, soluta ea!
            Culpa, dignissimos dolores! Delectus fugiat numquam doloremque
            consequuntur tempora ipsam excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe, reiciendis culpa incidunt
            corporis dolorem eum ullam totam cum iusto voluptate, maxime modi
            porro aperiam eveniet tempore ea? Quidem, at harum!
          </PanelBody>
        </Collapse>
      </Panel>
    );
  }
}

storiesOf('Panel', module)
  .add(
    'Plain',
    () => {
      const panelStyle = select(
        'panelStyle',
        ['success', 'primary', 'danger', 'warning'],
        'primary',
      );
      return (
        <Panel name={text('Panel Name', 'Catchy Name')} panelStyle={panelStyle}>
          <PanelBody
            panelStyle={panelStyle}
            noPadding={boolean('noPadding', false)}
            bodyBackgroundColor={text('bodyBackgroundColor', 'lightBackground')}
            bodyBorderColor={text('bodyBorderColor', 'lightGray')}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            beatae nostrum quo fuga iste reprehenderit ab fugit, soluta ea!
            Culpa, dignissimos dolores! Delectus fugiat numquam doloremque
            consequuntur tempora ipsam excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe, reiciendis culpa incidunt
            corporis dolorem eum ullam totam cum iusto voluptate, maxime modi
            porro aperiam eveniet tempore ea? Quidem, at harum!
          </PanelBody>
        </Panel>
      );
    },
    {
      info: {
        text: `
#### Notes
#### Panel
The Panel component is can be composed of 3 components, **Panel** , **PanelHeader** and **PanelBody**.
It not necessary to include the **PanelHeader**.

##### Basic Panel

By default the Panel, all it does is apply some basic border and padding to contain some content.
				`,
      },
    },
  )
  .add(
    'with Header',
    () => {
      const panelStyle = select(
        'panelStyle',
        ['success', 'primary', 'danger', 'warning'],
        'primary',
      );
      return (
        <Panel name={text('Panel Name', 'Catchy Name')} panelStyle={panelStyle}>
          <PanelHeader
            panelStyle={panelStyle}
            headerColor={text('headerColor', 'white')}
            headerBackgroundColor={text('headerBackgroundColor', 'primary')}
            headerBorderColor={text('headerBorderColor', 'primary')}
            name={text('Panel Name', 'Catchy Name')}
            title={text('Title', 'Catchy title')}
          />
          <PanelBody
            panelStyle={panelStyle}
            noPadding={boolean('noPadding', false)}
            bodyBackgroundColor={text('bodyBackgroundColor', 'lightBackground')}
            bodyBorderColor={text('bodyBorderColor', 'lightGray')}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            beatae nostrum quo fuga iste reprehenderit ab fugit, soluta ea!
            Culpa, dignissimos dolores! Delectus fugiat numquam doloremque
            consequuntur tempora ipsam excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Saepe, reiciendis culpa incidunt
            corporis dolorem eum ullam totam cum iusto voluptate, maxime modi
            porro aperiam eveniet tempore ea? Quidem, at harum!
          </PanelBody>
        </Panel>
      );
    },
    {
      info: {
        text: `
#### Notes
##### Panel with Heading
Easily add a heading container to your panel with the **PanelHeader** component. It accepts *title* and *name* props that are used to compose the label shown with the *name* emboldened.

##### Contextual alternatives
Like other components, easily make a panel more meaningful to a particular context by chaginng between the following *panelStyle* s

- primary (default)
- secondary
- success
- warning
- danger

The **PanelHeader** also supports the application of custom text, border and background colors via the *headerColor*, *headerBackgroundColor* and *headerBorderColor* respectively. 

The **PanelBody** also supports the application of custom border and background colors via the *bodyBackgroundColor* and *bodyBorderColor* respectively. 

These props accept CSS color codes or theme color declarations.				
`,
      },
    },
  )
  .add('Collapsible', () => <PanelWithCollapse isOpen={true} />, {
    info: {
      text: `
#### Notes

##### Collapsible Panel
A panel can be made collapsible by including all 3 components under the Panel component hierarchy and wrapping the **PanelBody** or any content with the **Collapse** component.

The collapsability of the **PanelBody** can be controlled by managing the **Collapse** component *isOpen* and the **PanelHeader** *isCollapsed* states through their props. This behaviour can be greatly enhanced by passing the state management event to the **PanelHeader** *toogleItem* prop. By doing so, the **PanelHeader** chevron direction will also be appropriately displayed.


        `,
    },
  });
