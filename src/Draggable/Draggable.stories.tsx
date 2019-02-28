import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_down as IKAD } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { ic_add as icAdd } from 'react-icons-kit/md/ic_add';
import { info } from 'react-icons-kit/fa/info';

import {
  Draggable,
  DraggableParent,
  DraggableItem,
  DraggableInfo,
  DraggableFooter,
  IconButton,
} from '../';
import SecondaryParent from './SecondaryParent.component';
import { wInfo } from '../storybook-utils';

storiesOf('Draggable', module).add(
  'Draggable',
  wInfo(`

  ### Notes

  This is a Draggable

  ### Usage
  ~~~js
    <Draggable>
      <DraggableInfo>
        <IconButton
          rounded
          icon={info}
          iconsize={10}
          pixelbuttonsize={18}
          btnSize="sm"
          btnStyle="success"
          onClick={() => {}}
        />
        To create a new group, drag one qualification on top of another
      </DraggableInfo>
      <DraggableParent.ParentContainer>
        <DraggableParent.ParentMainContent>
          <DraggableItem.ItemContainer>
            <DraggableItem.ItemMainContent>
              <b>Qualification:</b> Geography - AK: Aleutian East - AZ, NC, WA
            </DraggableItem.ItemMainContent>
            <DraggableItem.ItemRightContent>
              <Icon icon={IKAD} size={24} />
            </DraggableItem.ItemRightContent>
          </DraggableItem.ItemContainer>
        </DraggableParent.ParentMainContent>
        <DraggableParent.ParentRightContent>
          <IconButton
            rounded
            icon={icAdd}
            iconsize={20}
            pixelbuttonsize={32}
            btnSize="sm"
            btnStyle="primary"
            onClick={() => {}}
          />
        </DraggableParent.ParentRightContent>
      </DraggableParent.ParentContainer>
      <DraggableFooter>
        <IconButton
          rounded
          icon={icAdd}
          iconsize={20}
          pixelbuttonsize={32}
          btnSize="sm"
          btnStyle="primary"
          onClick={() => {}}
        />
      </DraggableFooter>
    </Draggable>
  ~~~`)(() => (
    <Draggable
      draggablestyle={select(
        'draggablestyle',
        ['success', 'default', 'primary', 'danger', 'warning'],
        'primary',
      )}
      bordercolor={select(
        'bordercolor',
        ['lightGray', 'gray', 'blue', 'white', 'red', 'yellow'],
        'lightGray',
      )}
      guttersize={select('guttersize', ['sm', 'md', 'lg'], 'md')}>
      <DraggableInfo>
        <IconButton
          rounded
          icon={info}
          iconsize={10}
          pixelbuttonsize={18}
          btnSize="sm"
          btnStyle="success"
          onClick={() => {}}
        />
        To create a new group, drag one qualification on top of another
      </DraggableInfo>
      <DraggableParent.ParentContainer
        parentActive={boolean('parentActive', false)}
        parenthandlesize={select('parenthandlesize', [20, 30, 40, 50, 60], 30)}
        showparenthandle={boolean('showparenthandle', true)}
        draggable={boolean('Parent draggable', true)}
        onDragStart={action('Drag Parent Container started!')}
        onDragOver={action('Dragging over Parent Container!')}
        onDrop={action('Parent Droped!')}>
        <DraggableParent.ParentMainContent>
          <DraggableItem.ItemContainer
            showitemhandle={boolean('showitemhandle', true)}
            itemhandlesize={select('itemhandlesize', [20, 30, 40, 50, 60], 30)}
            draggable={boolean('Item 1 draggable', true)}
            onDragStart={action('Drag Item Container started!')}
            onDragOver={action('Dragging over an Item Container!')}
            onDrop={action('Item Droped!')}>
            <DraggableItem.ItemMainContent>
              <b>Qualification:</b> Geography - AK: Aleutian East - AZ, NC, WA
            </DraggableItem.ItemMainContent>
            <DraggableItem.ItemRightContent>
              <Icon icon={IKAD} size={24} />
            </DraggableItem.ItemRightContent>
          </DraggableItem.ItemContainer>
          <DraggableItem.ItemContainer
            showitemhandle={boolean('showitemhandle', true)}
            itemhandlesize={select('itemhandlesize', [20, 30, 40, 50, 60], 30)}>
            <DraggableItem.ItemMainContent>
              <b>Qualification:</b> Geography - AK: Aleutian East - AZ, NC, WA
            </DraggableItem.ItemMainContent>
            <DraggableItem.ItemRightContent>
              <Icon icon={IKAD} size={24} />
            </DraggableItem.ItemRightContent>
          </DraggableItem.ItemContainer>
          <DraggableItem.ItemContainer
            showitemhandle={boolean('showitemhandle', true)}
            itemhandlesize={select('itemhandlesize', [20, 30, 40, 50, 60], 30)}>
            <DraggableItem.ItemMainContent>
              <b>Qualification:</b> Geography - AK: Aleutian East - AZ, NC, WA
            </DraggableItem.ItemMainContent>
            <DraggableItem.ItemRightContent>
              <Icon icon={IKAD} size={24} />
            </DraggableItem.ItemRightContent>
          </DraggableItem.ItemContainer>
        </DraggableParent.ParentMainContent>
        <DraggableParent.ParentRightContent>
          <IconButton
            rounded
            icon={icAdd}
            iconsize={20}
            pixelbuttonsize={32}
            btnSize="sm"
            btnStyle="primary"
            onClick={() => {}}
          />
        </DraggableParent.ParentRightContent>
      </DraggableParent.ParentContainer>
      <SecondaryParent
        parentActive={boolean('Secondary parentActive', false)}
        parenthandlesize={select(
          'Secondary parenthandlesize',
          [20, 30, 40, 50, 60],
          30,
        )}
        showparenthandle={boolean('Secondary showparenthandle', true)}
      />
      <DraggableFooter>
        <IconButton
          rounded
          icon={icAdd}
          iconsize={20}
          pixelbuttonsize={32}
          btnSize="sm"
          btnStyle="primary"
          onClick={() => {}}
        />
      </DraggableFooter>
    </Draggable>
  )),
);
