<script>
document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;
    if (hash) {
        const card = document.getElementById(hash.substring(1));
        if (card) card.querySelector('.hidden')?.classList.remove('hidden');
    }
});
</script>
<div class="card bg-base-200"
    style="transition: background-color 0.5s ease;"
    onmouseover="this.style.backgroundColor='var(--color-base-300)'"
    onmouseout="this.style.backgroundColor='var(--color-base-200)'"
    id="{{ title | slugify }}">
    <div
        class="card-body cursor-pointer"
        onclick="
        const content = this.nextElementSibling;
        const isOpening = content.classList.toggle('hidden'); 
        if (!isOpening) {
            window.history.pushState(null, '', '#{{ title | slugify }}');
        } else if (window.location.hash === '#{{ title | slugify }}') {
            window.history.pushState(null, '', ' ');
        }
        ">
        <div class="scenario-label-container">
            <span class="scenario-label badge badge-outline badge-primary badge-md">
                {{ label | default(value="Scenario") }}
            </span>
            <span class="scenario-label badge badge-outline badge-secondary badge-xl">
                <div class="card-title">
                    {{ title }}
                </div>
            </span>
        </div>
    </div>
    <div class="hidden p-4 prose">
        {{ body | markdown | trim | safe -}}
            {% if steps %}
                <pre style="background: var(--color-accent-content); text-wrap: auto;"><code>
                    <ol class="list-none pl-3 text-sm" style="list-style-type: circle;">
                        {% for step in steps -%}
                            <li class="test-class-item">{{ step | markdown(inline=true) | trim | safe }}</li>
                        {% endfor -%}
                    </ol>
                </code></pre>
            {% endif -%}
    </div>
</div>
