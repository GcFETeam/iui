---
layout: default
---

# Button

> 缺icon

{% assign types = "ui-button mini, ui-button small, ui-button"  | split: ", "%}

### 普通按钮

<button class="ui-button">普通按钮</button>
<a class="ui-button btn-primary"><i class="iconfont icon-ceshi mr-5"></i>焦点按钮</a>

### 禁用

<button class="ui-button disabled" disabled>普通按钮</button>
<a href="javascript:;" class="ui-button btn-primary disabled" disabled>焦点按钮</a> 


### 大小

{% for i in types %}
<button class="{{i}} btn-primary">焦点按钮</button>{% endfor%}

### 组合

{% for i in types %} 
<div class="ui-buttons">
    <a href="#" class="{{i}} btn-icon">分享</a>
    <a href="#" class="{{i}}">移动至</a>
    <a href="#" class="{{i}}">删除</a>
</div>
{% endfor %}


### 图标 【图标还没有

<a href="#" class="ui-icon-button"><i class="fa fa-eye"></i></a>
<a href="#" class="ui-icon-button"><i class="fa fa-edit"></i></a>
<a href="#" class="ui-icon-button"><i class="fa fa-ellipsis-h"></i></a>


