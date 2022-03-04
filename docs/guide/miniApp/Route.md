---
title: 路由跳转
date: "2022/02/22"
---

## 使用

### 跳转页面

```js
this.$router("pages/logs/logs");
```

### 设置跳转方式

```js
this.$router({
  type: "tab",
  url: "/pages/logs/logs",
});
```

### 携带参数

```js
this.$router("/pages/logs/logs", {
  data: "info",
  status: 1,
});
```

```js
this.$router({
  url: "/pages/logs/logs",
  params: {
    data: "info",
    status: 1,
  },
});
```

:::tip
两种传值方式 1）两个参数：当默认传值方式为navigateTo时，第一个参数为string类型的页面地址，第二个参数为需要传递的参数 2）一个参数：路由和参数需要以指定的名称传递，如下说明：
:::

## 参数

|       属性        |  类型   |                  说明                   |                                          可选值                                          |   默认值   |
| :---------------: | :-----: | :-------------------------------------: | :--------------------------------------------------------------------------------------: | :--------: |
|       type        | String  |                跳转方式                 |  navigateTo/to、redirectTo/redirect、switchTab/tab、reLaunch/launch、navigateBack/back   | navigateTo |
|        url        | String  |                跳转路由                 |                                            -                                             |     -      |
|      params       | Object  |               传递的参数                |                                            -                                             |     {}     |
