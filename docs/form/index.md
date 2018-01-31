---
layout: default
---

# Form

### 表单

<div class="ui-form">
    <div class="form-group">
        <label class="label">默认状态：</label>
        <input type="text" class="ui-form-control" placeholder="请输入">
    </div>
    <div class="form-group">
        <label class="label"><em class="ft-warn">*</em>必填项输入框：</label>
        <input type="text" class="ui-form-control" placeholder="请输入">
    </div>
    <div class="form-group">
        <label class="label">禁止修改：</label>
        <input type="text" class="ui-form-control disabled" disabled value="输入完成">
    </div>
    <div class="form-group">
        <label class="label">错误：</label>
        <input type="text" class="ui-form-control error" value="输入完成">
    </div>
    <div class="form-group">
        <label class="label">字数限制：</label>
        <div class="ui-enter-count">
            <input type="text" class="ui-form-control" maxlength="20" placeholder="请输入">
            <span class="count">0/20</span>
        </div>
    </div>
    <div class="form-group">
        <label class="label">多行文本输入：</label>
        <div class="ui-enter-count">
            <textarea rows="5" class="ui-form-control" maxlength="20" placeholder="请输入段落文字"></textarea>
            <span class="count">0/20</span>
        </div>
    </div>
</div>

### 小表单

> 表单是表单控件的集合，控件上也需要加`small`

<div class="ui-form small">
    <div class="form-group">
        <label class="label">默认状态：</label>
        <input type="text" class="ui-form-control small" placeholder="请输入">
    </div>
    <div class="form-group">
        <label class="label"><em class="ft-warn">*</em>必填项输入框：</label>
        <input type="text" class="ui-form-control small" placeholder="请输入">
    </div>
    <div class="form-group">
        <label class="label">多行文本输入：</label>
        <div class="ui-enter-count">
            <textarea rows="5" class="ui-form-control small" maxlength="20" placeholder="请输入段落文字"></textarea>
            <span class="count">0/20</span>
        </div>
    </div>
</div>
