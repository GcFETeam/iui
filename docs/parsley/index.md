---
layout: page
---

# parsley


{% example html %}
<form class="ui-form" id="demo-form">
    <div class="form-group">
        <label class="label">默认状态：</label>
        <input type="text" class="ui-form-control" placeholder="请输入">
    </div>
    <div class="form-group">
        <label class="label"><em class="ft-warn">*</em>必填项输入框：</label>
        <input type="text" class="ui-form-control" placeholder="请输入" required>
        <span class="tips">提示文字</span>
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
    <div class="form-group">
        <input type="submit" class="ui-button" value="提交">
    </div>
</form>


<script>
window.onload = function () {
       (function ($) {
       $('#demo-form').parsley().on('field:validated', function() {
           var ok = $('.parsley-error').length === 0;
           $('.bs-callout-info').toggleClass('hidden', !ok);
           $('.bs-callout-warning').toggleClass('hidden', ok);
       })
       .on('form:submit', function() {
           return false; // Don't submit form for this demo
       });
       })(jQuery) 
    }


</script>
{% endexample %}