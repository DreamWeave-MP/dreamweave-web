<div class="card bg-base-200 border border-base-300 rounded-box shadow-sm {{ class }}" style="width: fit-content; max-width: 50vw;">
    <div class="scenario-header">
        <h2>
            <span class="scenario-label" style="{{ label_style }}">{{ label | default(value="Scenario") }} :</span>-
            <span class="scenario-title">{{ title }}</span>
        </h2>
    </div>
    <pre><code>
        {{- body | safe -}}
    </code></pre>
</div>
