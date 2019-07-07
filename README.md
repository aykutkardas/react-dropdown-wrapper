# react-dropdown-wrapper
Convenient, simple, quick dropdown menu wrapper for accessibility.

## Install
```
npm install react-dropdown-wrapper
```
or
```
yarn add react-dropdown-wrapper
```

## Import

```js
import DropdownWrapper from "react-dropdown-wrapper";
```

## Usage 

```jsx
<DropdownWrapper
  closeOnEsc
  onStateChange={console.log}
  wrapperProps={{
    className: "bg-primary"
  }}
>
  {({ changeStatus, isShow }) => (
    <div>
      <button onClick={() => changeStatus(!isShow)}>Dropdown Toggle Button</button>
      {isShow && <div>Dropdown Content</div>}
    </div>
  )}
</DropdownWrapper>
```

## Props

|Props Name|Type|Default Value|
|--|--|--|
|closeOnEsc|bool|false|
|closeOnOutsideClick|bool|true|
|wrapperProps|object|{}|
|onStateChange|function|null|
|children|function|null|
