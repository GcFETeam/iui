---
layout: default
---

## ing...

> 一个有强迫症和选择困难症的人写给自己的代码规范...


### css命名

#### 单个字母 - 

> - 后尽量不使用缩写

**模块**
`m-`
可重复使用的大的整体

e.g
```css
.m-comment {}
.m-nav {}
.m-form {}
.m-form-inline {}
```


**组件**
`u-`
可重复使用的小的个体

e.g
```css
.u-button {}
.u-input {}
.u-message {}
```

**特殊**

这里的组件全部使用`ui-`开头作为区分



#### 两个字母 - 

> 公共基础样式

padding-top | pt | margin-top | mt | border-top | bt
padding-bottom | pb | margin-bottom | mb | border-bottom | bb
padding-left | pl | margin-left | ml | border-left | bl
padding-right | pr | margin-right | mr | border-right | br
font | ft

e.g
```css
.mr-10 {
    margin-right: 10px;
}
.pb-10 {
    padding-bottom: 10px;
}
.br-2 {
    border-right: 2px solid #f2f4f6;
}
```

#### 缩写

advertise | adv
article | atl
button | btn
bottom | btm
background | bg
content | con
current | cur
disabled | dis
error | err
image | img
title | tit

e.g 
```css
.m-nav .btn {
    height: 45px;
}
```


### 顺序

> 同行的顺序可以不定

1 | display | float | position | top/bottom/left/right | visibility | ...
2 | height | margin | padding | border | ...
3 | font-* |  color | text-* | background | z-index | ... 




