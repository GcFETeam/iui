---
layout: default
---

# Menu

### 垂直菜单

{% example html %}
<div class="ui-vertical-menu">
    <ul>
        <li><a href="#" class="menu-item">功能一</a></li>
        <li><a href="#" class="menu-item">功能二</a></li>
        <li><a href="#" class="menu-item">功能三</a></li>
    </ul>
</div>
{% endexample %}

{% example html %}
<div class="ui-vertical-menu small">
    <ul>
        <li><a href="#" class="menu-item">功能一</a></li>
        <li><a href="#" class="menu-item">功能二</a></li>
        <li><a href="#" class="menu-item">功能三</a></li>
    </ul>
</div>
{% endexample %}

### 下拉菜单

> 缺icon

{% example html %}
<div class="ui-dropdown">
    <a href="#" class="ui-button">菜单按钮<i class="iconfont icon-ceshi"></i></a>
    <div class="menu-wrap">
        <div class="ui-vertical-menu">
            <ul>
                <li><a href="#" class="menu-item">功能一</a></li>
                <li><a href="#" class="menu-item">功能二</a></li>
                <li><a href="#" class="menu-item">功能三</a></li>
            </ul>
        </div>
    </div>
</div>
{% endexample %}

{% example html %}
<div class="ui-dropdown">
    <a href="#" class="ui-button small">菜单按钮<i class="fa fa-angle-down ml-20"></i></a>
    <div class="menu-wrap">
        <div class="ui-vertical-menu small">
            <ul>
                <li><a href="#" class="menu-item">功能一</a></li>
                <li><a href="#" class="menu-item">功能二</a></li>
                <li><a href="#" class="menu-item">功能三</a></li>
            </ul>
        </div>
    </div>
</div>
{% endexample %}

{% example html %}
<a href="#" class="ui-icon-button"><i class="fa fa-eye"></i></a>
<a href="#" class="ui-icon-button"><i class="fa fa-edit"></i></a>
<div class="ui-dropdown drp-icon">
    <a href="javascript:;" class="ui-icon-button"><i class="fa fa-ellipsis-h"></i></a>
    <div class="menu-wrap">
        <div class="ui-vertical-menu">
            <ul>
                <li><a href="#" class="menu-item">功能一</a></li>
                <li><a href="#" class="menu-item">功能二</a></li>
                <li><a href="#" class="menu-item">功能三</a></li>
            </ul>
        </div>
    </div>
</div>
{% endexample %}
