---
layout: default
---

# Input

### 标签

{% example html %}
<input name="tags" class="ui-form-control" id="tags" value="foo,bar,baz" />
<input name="tagsvalue" type="hidden">

<script>
// $element.uiTagInput(option)
$(function () {
    $('#tags').uiTagInput({
        height: 'auto',
        width: '320px'
    });
});
</script>
{% endexample %}

tagInput默认参数  
```javascript
option = {
    height: '100px',
    width: '300px',
    defaultText: '添加标签'  // 提示文字
}
```


# Select

> 需要整理成一个类

### 输入匹配

{% example html %}
<input class="ui-form-control" name="cate" type="text" id="autoSelect" autocomplete="off">
<input name="tagsvalue" type="hidden" class="valueInput">

<script>
$(function () {
    $('#autoSelect').uiAutocomplete({
        local: false,
        ajax: '/xzdesign/datas/autoselect.json',
        focusShow: false
    });
});
</script>
{% endexample %}

默认参数  
```javascript
option = {
    local: true, // 是否使用本地数据，为true时需要有localData, false时需要有ajax
    localData: [], // 数组 本地数据
    ajax: '', // ajax地址 从后台获取数据
    ajaxOnce: true, // 是否只请求一次，true只获得焦点时请求一次，false是每次有输入都请求
    disableEnterEvent: true, // 是否禁用回车的默认事件，false时如果有提交按钮回车会触发表单提交
    className: 'ui-vertical-menu large autoSelect', // 下拉菜单样式
    force: false //是否要求输入内容一定是匹配到的
}
```

### 多级联动

> 缺箭头图标

{% example html %}
<div class="ui-linkage ui-select">
    <input value="" class="ui-form-control" id="linkagedemo2">
    <input name="linkage" class="valueInput" type="hidden">
    <i class="fa fa-angle-down"></i>
</div>

<script>
// $element.uiLinkage(option)
$(function () {
    $('#linkagedemo2').uiLinkage({
            ajaxUrl: '/xzdesign/datas'
    });
    $('#linkagedemo2').uiAutocomplete({
        local: false,
        ajax: '/xzdesign/datas/cate.json',
        showDefault: false,
        force: true,
        focusShow: false
    });
    
    
});
</script>
{% endexample %}
