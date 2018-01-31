---
layout: page
---

# Flatpickr

> [https://chmln.github.io/flatpickr/](https://chmln.github.io/flatpickr/)

{% example html %}
<input class="ui-form-control" type="text" id="date">
<script>
    window.onload = function () {
        new flatpickr('#date',{
            locale: flatpickr.l10ns.zh
        })
    }
</script>

{% endexample %}