<div class="card bg-base-200 scenarioCard"
    onmouseover="setCardColor(this, '--color-base-300')"
    onmouseout="setCardColor(this, '--color-base-200')"
    id="{{ title | slugify }}">
    <div
        class="card-body cursor-pointer"
        onclick="scenarioCardToggleVisibilityAndUpdateURL(this)"
        >
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
    <div class="hidden p-4">
        {{ body | markdown | trim | safe -}}
            {% if steps %}
                <pre class="codeBlock"><code>
                    <ol class="list-none pl-3 text-sm">
                        {% for step in steps -%}
                            <li>{{ step | markdown(inline=true) | trim | safe }}</li>
                        {% endfor -%}
                    </ol>
                </code></pre>
            {% endif -%}
    </div>
</div>
