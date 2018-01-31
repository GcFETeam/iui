---
layout: default
---

# Pagination

> 缺icon

### 一般

{% example html %}
<div class="ui-pagination">
    <a href="#" class="page"><i class="fa fa-angle-left"></i></a>
    <span class="page active">1</span>
    <a href="#" class="page">2</a>
    <a href="#" class="page">3</a>
    <span class="ellipsis">...</span>
    <a href="#" class="page">4</a>
    <a href="#" class="page">5</a>
    <a href="#" class="page"><i class="fa fa-angle-right"></i></a>
    <span class="text">跳转</span>
    <form action="#">
        <input class="ui-form-control" type="text" name="page">
    </form>
    <span class="text">页</span>
    <span class="total">共有2255条</span>
</div>
{% endexample %}


### 较小

{% example html %}
<div class="ui-pagination small">
    <a href="#" class="page"><i class="fa fa-angle-left"></i></a>
    <a href="#" class="page active">1</a>
    <a href="#" class="page">2</a>
    <a href="#" class="page">3</a>
    <a href="#" class="page"><i class="fa fa-angle-right"></i></a>
    <span class="text">跳转</span>
    <form action="#">
        <input class="ui-form-control" type="text" name="page">
    </form>
    <span class="text">页</span>
    <span class="total">共有2255条</span>
</div>
{% endexample %}

### 最小

{% example html %}
<div class="ui-pagination mini">
    <a href="#" class="page"><i class="fa fa-angle-left"></i></a>
    <a href="#" class="page active">1</a>
    <a href="#" class="page">2</a>
    <a href="#" class="page">3</a>
    <a href="#" class="page"><i class="fa fa-angle-right"></i></a>
</div>
{% endexample %}
{% example html %}
<div class="ui-pagination mini">
    <a href="#" class="page"><i class="fa fa-angle-left"></i></a>
    <form action="#">
        <input class="ui-form-control" type="text" name="page" value="1">
    </form>
    <span class="text">/</span>
    <span class="text">4</span>
    <a href="#" class="page"><i class="fa fa-angle-right"></i></a>
</div>
{% endexample %}

