---
layout: page
---

# Tether

<div class="mb-20">
<select class="my-select">
    <option value="1111111">1111111</option>
    <option value="2222222">2222222</option>
    <option value="3333333">3333333</option>
    <option value="4444444">4444444</option>
    <option value="5555555">5555555</option>
</select>
</div>

<div class="mb-20">
<button class="drop-target ui-button">drop</button>
</div>

<div class="mb-20">
<a href='' class="tooltip-demo" data-tooltip="Weeeeee" data-tooltip-position="top center">Tooltip</a>
</div>


<a class="drop-target2 drop-theme-hubspot-popovers">About Drop.js</a>
<div class="drop-content">
    <div class="drop-content-inner">
        <h3 class="title">Drop.js</h3>
        <p>Drop.js is a fast and capable dropdown library built on <a href="/tether/docs/welcome" target="_blank" style="color: inherit">Tether</a>.</p>
    </div>
</div>

                            
<script>
window.onload = function () {
Select.init({selector: '.my-select'});

var drop = new Drop({
  target: document.querySelector('.drop-target'),
  content: 'Welcome to the future!',
  position: 'bottom left',
  openOn: 'click',
  classes: 'drop-theme-arrows'
});

new Drop({
  target: document.querySelector('.drop-target2'),
  content: document.querySelector('.drop-content'),
  position: 'bottom left',
  openOn: 'click',
  classes: 'drop-theme-hubspot-popovers'
});
}


</script>