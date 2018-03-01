---
layout: default
---

# Input

### 默认

<input type="text" class="ui-form-control" placeholder="请输入">

```html
<input type="text" class="ui-form-control" placeholder="请输入">
```


### 较小

<input type="text" class="ui-form-control small" placeholder="请输入">

```html
<input type="text" class="ui-form-control small" placeholder="请输入">
```

### 禁用

```html
<input type="text" class="ui-form-control disabled" disabled value="输入完成">
```

### 错误

<div class="ui-control-wrap">
    <input type="text" class="ui-form-control error" value="输入完成">
    <span class="error-tip animate fadeInDown">error</span>
</div>


```html
<div class="ui-control-wrap">
    <input type="text" class="ui-form-control error" value="输入完成">
    <span class="error-tip animate fadeInDown">error</span>
</div>
```

### 字数限制

> 需要有`maxlenth`属性


<div class="ui-enter-count">
    <input type="text" class="ui-form-control" maxlength="20">
    <span class="count">0/20</span>
</div>

```html
<div class="ui-enter-count">
    <input type="text" class="ui-form-control" maxlength="20">
    <span class="count">0/20</span>
</div>
```

### 半开放输入

> IE10+  flex

<div class="ui-labeled-input mb-10">
    <label class="input-label">
        <input class="input" type="text" placeholder="请输入">
        <span class="text">.xizhi.design</span>
    </label>
</div>



<div class="ui-labeled-input">
    <label class="input-label">
        <span class="text">https://xizhi.design/</span>
        <input class="input" type="text" placeholder="请输入">
    </label>
</div>


> 兼容IE9的写法


<div class="ui-labeled-input ">
    <label class="input-label clf">
        <input class="input fl" type="text" placeholder="请输入">
        <span class="text fl">.xizhi.design</span>
    </label>
</div>





