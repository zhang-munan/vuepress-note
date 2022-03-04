---
title: 修改值
date: "2022/02/22"
---

在微信小程序更新数据时，普通的属性的绑定是单向的，简易的[双向绑定](https://developers.weixin.qq.com/miniprogram/dev/framework/view/two-way-bindings.html)也是需要满足一定条件，不是适用发部分使用场景，所以项目中做了共同处理，减少代码量。

## 使用

### input 框

```html
<input value="{{value}}" bind:input="$handleInput" data-key="value" />
<input value="{{form.name}}" bind:input="$handleInput" data-key="form.name" />
```

```js
data: {
  value,
  form: {
    name: null
  }
}
```

:::tip
在 bind:input 事件上绑定$handleInput 方法，data-key 中传入需要修改值的 key
:::
