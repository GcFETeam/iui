---
layout: default
---

# icon

**how to use**

```markup
<i class="fa fa-[name]"></i>
```

{%for item in site.data.icons %}
### {{item.group}}

<div class="pure-g">
    {% for icon in item.name %}
    <div class="pure-u-1-8">
        <div class="ft-center">
            <i class="fa fa-{{icon}}"></i>
            <p>{{icon}}</p>
        </div>
    </div>
    {% endfor %}
</div>
{% endfor %}



