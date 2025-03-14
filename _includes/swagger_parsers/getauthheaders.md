<!-- Liquid chokes on the $ sign, so reference this variable instead -->
{% assign ref = "$ref" %}

<table>
    <thead>
    <tr>
        <th>Name</th><th>Type</th><th>Description</th><th>Required?</th>
    </tr>
    </thead>
    <!-- Add Header Parameter Support (API Key) -->
   {% assign scheme = site.data.swagger[page.swaggerfile].components.securitySchemes.ApiKeyAuth %}
   {% if scheme.in == "header" %}
            <tr>
                <td><code>{{ scheme.name }}</code></td>
                <td><code>{{ scheme.type }}</code></td>
                <td><code>{{ scheme.description }}</code></td>
                <td><code>true</code></td>
            </tr>
   {% endif %}
</table>