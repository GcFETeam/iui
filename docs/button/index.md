---
layout: default
---
    
## Button

### 颜色

<button class="mr-10 u-button">normal</button>
{% assign list = "primary, warn, line" | split: ", "%}
{% for item in list %}<button class="mr-10 u-button btn-{{item}}">{{item}}</button>{% endfor %}


```html
<button class="u-button btn-primary">primary</button>
```


### 大小

<button class="mr-10 u-button btn-small">small</button>
<button class="mr-10 u-button btn-big">big</button>

```html
<button class="u-button btn-small">small</button>
```
    

### 图标

<button class="mr-10 u-button"><i class="fa fa-facebook"></i>facebook</button>
<button class="mr-10 u-button btn-primary"><i class="fa fa-facebook"></i>facebook</button>

```html
<button class="u-button"><i class="fa fa-facebook"></i>facebook</button>
```
    


### 圆形

<button class="mr-10 u-button btn-circle"><i class="fa fa-facebook"></i></button>

```html
<button class="u-button btn-circle"><i class="fa fa-facebook"></i></button>
```