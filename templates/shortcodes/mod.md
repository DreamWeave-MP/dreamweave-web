{% set mod_data = load_data(path="data/mods.yaml") %}

{% if mod_data[category][name] %}
<div class="card bg-base-200 w-96 shadow-sm mod-card">
  <div class="card-body mod-description">
    <div class="flex flex-wrap items-center gap-4 mb-2">
      <span class="mod-name badge badge-outline badge-secondary text-xl">
        {{ name }}
      </span>
      <span class="mod-author badge badge-outline badge-primary">
        {{ mod_data[category][name].author }}
      </span>
    </div>
    {{- mod_data[category][name].description | markdown | safe -}}
    <div class="card-actions justify-end">
        <button class="btn btn-sm btn-primary"><a href="{{ mod_data[category][name].url }}">Download</a></button>
    </div>
  </div>
</div>
{% else %}
<p class="text-accent">Mod "{{ name }}" in category "{{ category }}" not found!</p>
{% endif %}
