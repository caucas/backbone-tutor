<span>Menu</span>
<ul>
	{{#.}}
	<li id="{{id}}">
		<a class="{{#active}}active{{/active}}" href="{{url}}">{{label}}</a>
	</li>
	{{/.}}
</ul>