import * as React from 'react';
import ErrorMessage from '../Typography/ErrorMessage/index';
import Select, { Creatable as CreatableSelect } from 'react-select';
// @ts-ignore
// import CreatableSelect from 'react-select/creatable';
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../themes';
import uuid from 'uuid';

export type OptionType = {
  value: string;
  label: string;
};

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * From theme provider
   *
   * @default defaultTheme
   **/
  theme?: any;
  /**
   * Select Input Size
   *
   * @default 'md'
   **/
  selectSize?: 'sm' | 'md' | 'lg';
  /**
   * The ID of the control
   *
   * @default null
   **/
  id?: string;
  /**
   * Handle multi-select
   *
   * @default false
   **/
  creatable?: boolean;
  /**
   * Handle multi-select
   *
   * @default false
   **/
  isMulti?: boolean;
  /**
   * Specify if the control is disabled
   *
   * @default false
   **/
  isDisabled?: boolean;
  /**
   * Specify if the selected options are clearable
   *
   * @default false
   **/
  isClearable?: boolean;
  /**
   * Specify custom option components
   *
   * @default null
   **/
  components?: any;
  /**
   * Format a group label
   *
   * @default null
   **/
  formatGroupLabel?: any;
  /**
   * Specify whether the control is currently invalid
   *
   * @default false
   **/
  invalid?: boolean;
  /**
   * Subscribe to changes in value
   *
   * @default null
   */
  onChange?: any;
  /**
   * Value for a controlled select componenet
   *
   * @default undefined
   */
  value?: OptionType[];
  /**
   * Should Menu close on select
   *
   * @default true
   */
  closeMenuOnSelect?: boolean;
  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText?: string;
  /**
   * Placeholder text
   *
   * @default null
   **/
  placeholder?: string;
  /**
   * The list of options available
   *
   * @default null
   **/
  options?: any;
  /**
   * Hide selected options
   *
   * @default true
   **/
  hideSelectedOptions?: boolean;
  /**
   * Specify the control's selected option
   *
   * @default null
   **/
  selectedOption?: Object | Object[];

  /**
   * Any props that should be passed directly to the third-
   * party react-select control.
   *
   * @default null
   **/
  controlSpecificProps?: any;
  //  {
  //   blockOptionHover: boolean;
  //   clearFocusValueOnUpdate: boolean;
  //   commonProps: any;
  //   // components: SelectComponents<OptionType>;
  //   hasGroups: boolean;
  //   initialTouchX: number;
  //   initialTouchY: number;
  //   inputIsHiddenAfterUpdate: boolean | null;
  //   instancePrefix: string;
  //   isSearchable: boolean;
  //   name: string;
  //   openAfterFocus: boolean;
  //   scrollToFocusedOptionOnUpdate: boolean;
  //   userIsDragging: boolean | null;
  //   controlRef: React.Ref<any>;
  //   getControlRef: (ref: HTMLElement) => void;
  //   focusedOptionRef: React.Ref<any>;
  //   getFocusedOptionRef: (ref: HTMLElement) => void;
  //   menuListRef: React.Ref<any>;
  //   getMenuListRef: (ref: HTMLElement) => void;
  //   inputRef: React.Ref<any>;
  //   getInputRef: (ref: HTMLElement) => void;
  //   // cacheComponents: (components: SelectComponents<OptionType>) => void;
  //   onMenuOpen(): void;
  //   onMenuClose(): void;
  //   // onInputChange(newValue: string, actionMeta: InputActionMeta): void;
  //   focusInput(): void;
  //   blurInput(): void;
  //   focus(): void;
  //   blur(): void;
  //   openMenu(focusOption: 'first' | 'last'): void;
  //   focusValue(direction: 'previous' | 'next'): void;
  //   menuPlacement: 'auto' | 'top' | 'bottom';
  //   // focusOption(direction: FocusDirection): void;
  //   // setValue: (
  //   //   newValue: ValueType<OptionType>,
  //   //   action: ActionTypes,
  //   //   option?: OptionType
  //   // ) => void;
  //   selectOption: (newValue: OptionType) => void;
  //   removeValue: (removedValue: OptionType) => void;
  //   clearValue: () => void;
  //   popValue: () => void;
  //   children: React.ReactElement;
  // };

  /**
   * Portal the select menu to another element.
   *
   * @default ''
   */
  menuPortalTarget?: HTMLElement;
}

const SDiv = styled.div<Props>`
  font-family: ${(props: Props) => props.theme.typography.fontFamily};
  font-size: ${(props: Props) => props.theme.common[props.selectSize!].fontSize}
  color: ${(props: Props) => props.theme.reverseText};
  width: ${(props: Props) => props.theme.select.width};
  .react-select__menu {
    font-family: ${(props: Props) => props.theme.typography.fontFamily};
    z-index: 9999;
    color: ${(props: Props) => props.theme.colors.drk800};   
    .menuListHeader {
      padding: 8px 12px;
      border-bottom: 1px solid ${(props: Props) => props.theme.colors.lt800};
    }
     .react-select__menu-list {     
      font-family: ${(props: Props) => props.theme.typography.fontFamily};
      color: ${(props: Props) => props.theme.colors.drk800};                  
     }
     .react-select__option  {
      background-color: ${(props: Props) =>
        props.theme.select.optionBackgroundColor};
      font-family: ${(props: Props) => props.theme.typography.fontFamily};
      color: ${(props: Props) => props.theme.colors.drk800};
      &.react-select__option--is-selected {
        color: ${(props: Props) => props.theme.select.selectedOptionColor};
        background-color: ${(props: Props) =>
          props.theme.select.selectedOptionBackgroundColor} ;        
      }
      &:hover {
        background-color: ${(props: Props) =>
          props.theme.select.hoverOptionBackgroundColor};
        color: ${(props: Props) => props.theme.select.hoverOptionColor};
      }
    }
   }    
  .react-select-component {
    .react-select__control {
      min-height: auto;
      border-radius: ${(props: Props) =>
        props.theme.select.borderRadius ||
        props.theme.common[props.selectSize!].borderRadius};
      border-color: ${(props: Props) =>
        props.theme.common.borderColor ||
        (props.invalid
          ? props.theme.validation.borderColor
          : props.theme.select.borderColor || 'inherit')};
      .react-select__value-container {
        color: ${(props: Props) => props.theme.colors.drk800};
        padding: ${(props: Props) =>
          props.theme.select[props.selectSize!].padding};
        font-family: ${(props: Props) => props.theme.typography.fontFamily};
        font-size: ${(props: Props) =>
          props.theme.common[props.selectSize!].fontSize};
        .react-select__input {
          font-family: ${(props: Props) => props.theme.typography.fontFamily};
          font-size: ${(props: Props) =>
            props.theme.common[props.selectSize!].fontSize};
        }    
      }  
    }          
    .react-select__indicators {
      align-self: center;
      .react-select__indicator-separator {
        display: none;
      }   
      .react-select__clear-indicator {
        padding: 0px;
      }
      .react-select__dropdown-indicator {
        align-self: center;
        color: ${(props: Props) => props.theme.select.dropdownColor};
        padding: 0px 8px;
        &:hover {
          color: ${(props: Props) => props.theme.select.dropdownColor};
        }
      }
    }
    
  }  
`;

export class CustomSelect extends React.Component<Props> {
  static defaultProps = {
    selectSize: 'md',
    theme: Themes.defaultTheme,
    invalidText: '',
    id: 'select',
    option: {},
  };

  render() {
    const {
      creatable,
      options,
      controlSpecificProps,
      invalid,
      selectSize,
      theme,
      id,
      isMulti,
      isDisabled,
      isClearable,
      selectedOption,
      invalidText,
      ...props
    } = this.props;
    const BaseSelectComponent: React.ElementType = creatable
      ? CreatableSelect
      : Select;
    const errorId = invalid ? `${id}-error-msg` : '';
    const closeMenuOnSelect =
      typeof this.props.closeMenuOnSelect !== 'undefined'
        ? this.props.closeMenuOnSelect
        : !isMulti;
    const uniqueId = uuid.v4();
    return (
      <ThemeProvider theme={(outerTheme: any) => outerTheme || theme}>
        <SDiv
          className="select-wrapper"
          selectSize={selectSize}
          aria-invalid={invalid ? true : undefined}
          aria-describedby={errorId}
          invalid={invalid}
          id={uniqueId}
        >
          <BaseSelectComponent
            closeMenuOnSelect={closeMenuOnSelect}
            className="react-select-component"
            classNamePrefix="react-select"
            isDisabled={isDisabled}
            isClearable={isClearable}
            isMulti={isMulti}
            value={selectedOption}
            options={options}
            invalid={invalid}
            aria-invalid={invalid ? true : undefined}
            aria-describedby={errorId}
            selectSize={selectSize}
            dropdownColor={theme.primary}
            menuPortalTarget={document.getElementById(uniqueId)}
            menuPlacement={'bottom'}
            {...props}
            {...controlSpecificProps}
          />
          {invalid && (
            <ErrorMessage
              id={errorId}
              message={invalidText!}
              textColor={theme.danger}
            />
          )}
        </SDiv>
      </ThemeProvider>
    );
  }
}

export default CustomSelect;
