---
title: Input 输入框
description: 通过键入内容输入数据，是最基础的表单域的包装。
---

# Input 输入框

通过键入内容输入数据，是最基础的表单域的包装。

## 代码示例

### 基础用法

基础用法，可以使用 `v-model:value` 进行双向绑定。

<preview path="../demo/Input/Basic-Input.vue" title="基础用法" description="基础用法，可以使用 `v-model:value` 进行双向绑定。"></preview>

### 禁用状态

添加 `disabled` 属性可以设置禁用状态。

<preview path="../demo/Input/Disabled-Input.vue" title="禁用状态" description="添加 `disabled` 属性可以设置禁用状态。"></preview>

### 可清空

添加 `clearable` 属性可以使控件值可清空。

<preview path="../demo/Input/Clearable-Input.vue" title="可清空" description="添加 `clearable` 属性可以使控件值可清空。"></preview>

### 内嵌图标

设置 `prefix` 和 `suffix` 的值或使用同名插槽，可以为输入框添加前置和后置图标。

<preview path="../demo/Input/Input-Icon.vue" title="内嵌图标" description="设置 `prefix` 和 `suffix` 的值或使用同名插槽，可以为输入框添加前置和后置图标。"></preview>

### 改变尺寸

设置 `size` 属性的值可以改变输入框的尺寸，目前一共提供了三种尺寸供选择。

<preview path="../demo/Input/Input-Size.vue" title="改变尺寸" description="设置 `size` 属性的值可以改变输入框的尺寸，目前一共提供了三种尺寸供选择。"></preview>

### 同步输入

默认情况下双向绑定是基于 `change` 事件，添加了 `sync` 属性后将变为基于 `input` 事件。

<preview path="../demo/Input/Input-Sync.vue" title="同步输入" description="默认情况下双向绑定是基于 `change` 事件，添加了 `sync` 属性后将变为基于 `input` 事件。"></preview>

### 前后置插槽

使用 `before` 和 `after` 属性或插槽可以将一些内容与输入框组合。

如果你想要一个按钮、选择器或是其他控件，应该使用 `before-action` 和 `after-action` 插槽。

<preview path="../demo/Input/Input-Action.vue" title="前后置插槽" description="使用 `before` 和 `after` 插槽可以将一些内容与输入框组合。如果你想要一个按钮、选择器或是其他控件，应该使用 `before-action` 和 `after-action` 插槽。"></preview>

### 密码

将 `type` 属性设置为 `'password'` 可以开启密码输入。

在密码输入模式下添加 `plain-password` 属性可以打开切换密码明文的后缀按钮。

还可以通过 `password` 插槽自定义后缀按钮的图标。

<preview path="../demo/Input/Password-Input.vue" title="密码" description="将 `type` 属性设置为 `'password'` 可以开启密码输入。在密码输入模式下添加 `plain-password` 属性可以打开切换密码明文的后缀按钮。还可以通过 `password` 插槽自定义后缀按钮的图标。"></preview>

### 加载状态

通过 `loading` 属性可以控制输入框的加载状态。

如果你希望在加载中为只读，需要添加 `loading-lock` 属性。

<preview path="../demo/Input/Input-Loading.vue" title="加载状态" description="通过 `loading` 属性可以控制输入框的加载状态。如果你希望在加载中为只读，需要添加 `loading-lock` 属性。"></preview>

### 不同状态

通过 `state` 属性可以设置不同状态。

<preview path="../demo/Input/Input-State.vue" title="不同状态" description="通过 `state` 属性可以设置不同状态。"></preview>

## API

### Input 属性

| 名称           | 类型                                             | 说明                                                       | 默认值      |
| -------------- | ------------------------------------------------ | ---------------------------------------------------------- | ----------- |
| after          | `string`                                         | 设置输入框的后置内容                                       |             |
| autocomplete   | `boolean \| string`                              | 设置输入框的自动完成，布尔值将会被解析成 `'on'` 或 `'off'` | `false`     |
| before         | `string`                                         | 设置输入框的前置内容                                       |             |
| clearable      | `boolean`                                        | 设置是否可以清空值                                         | `false`     |
| disabled       | `boolean`                                        | 设置是否禁用输入框                                         | `false`     |
| loading        | `boolean`                                        | 设置是否为加载中                                           | `false`     |
| loading-lock   | `boolean`                                        | 设置在加载中时是否为只读                                   | `false`     |
| placeholder    | `string`                                         | 设置输入框的占位符                                         | `'请输入'`  |
| plain-password | `boolean`                                        | 设置是否显示查看明文密码的按钮                             | `false`     |
| prefix         | `LucideIcon`                                     | 前缀图标名称，使用前缀插槽时无效                           |             |
| size           | `'small' \| 'medium' \| 'large'`                 | 输入框的大小                                               | `'medium'`  |
| state          | `'default' \| 'success' \| 'warning' \| 'error'` | 输入框的状态                                               | `'default'` |
| suffix         | `LucideIcon`                                     | 后缀图标名称，使用后缀插槽时无效                           |             |
| sync           | `boolean`                                        | 设置是否为同步输入模式                                     |             |
| type           | `'text' \| 'password' \| 'number'`               | 输入框类型                                                 |
| value          | `string \| number`                               | 设置输入框的值，可以使用 v-model 双向绑定                  | `''`        |

### Input 事件

| 名称   | 说明                     | 参数                        |
| ------ | ------------------------ | --------------------------- |
| blur   | 输入框失去焦点时触发     | `(event: FocusEvent)`       |
| change | 输入框值改变时触发       | `(value: string \| number)` |
| clear  | 通过清空按钮清除值时触发 |                             |
| focus  | 输入框聚焦时触发         | `(event: FocusEvent)`       |
| input  | 键入了值时触发           | `(value: string \| number)` |

### Input 插槽

| 名称          | 说明                                   | 参数               |
| ------------- | -------------------------------------- | ------------------ |
| after         | 后置内容的插槽，一般为文字内容         |                    |
| after-action  | 后置控件的插槽                         |                    |
| before        | 前置内容的插槽，一般为文字内容         |                    |
| before-action | 前置控件的插槽                         |                    |
| password      | 查看明文密码按钮的插槽，一般为单个图标 | `{plain: boolean}` |
| prefix        | 前缀内容的插槽，一般为单个图标         |                    |
| suffix        | 后缀内容的插槽，一般为单个图标         |                    |
