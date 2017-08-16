---
layout: default
---

# button

### 颜色

<button class="u-button btn-primary">button</button>
<button class="u-button btn-gray">button</button>

```markup
<button class="u-button btn-primary">button</button>
<button class="u-button btn-gray">button</button>
```


### 图标

> 图标参考[icon](./icon/)

{% assign types = "twitter, facebook, qq"  | split: ", "%}
{% for i in types %} <button class="u-button btn-primary"><i class="fa fa-{{i}}"></i> button</button> {% endfor %}

```markup
<button class="u-button btn-primary"><i class="fa fa-twitter"></i> button</button>
```

### 加载

<button class="u-button btn-primary">loading</button>


### 大小

{% assign types = "small, normal, big"  | split: ", "%}
{% for i in types %} <button class="u-button btn-{{i}}">{{i}}</button> {% endfor %}


### 圆形

<button class="u-button btn-primary btn-small btn-circle"><i class="fa fa-twitter"></i></button>
<button class="u-button btn-primary btn-circle"><i class="fa fa-twitter"></i></button>
<button class="u-button btn-primary btn-big btn-circle"><i class="fa fa-twitter"></i></button>

