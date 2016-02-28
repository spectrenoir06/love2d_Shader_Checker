extern vec2 textureSize;

vec4 effect( vec4 color, Image texture, vec2 texture_coords, vec2 screen_coords ){
	vec4 pixel = Texel(texture, texture_coords);
	ivec2 v;
	v.x = int(texture_coords.x * textureSize.x);
	v.y = int(texture_coords.y * textureSize.y);

	if ((v.y - ((v.y / 2) * 2)) == 0)
		if ((v.x - ((v.x / 2) * 2) == 0))
			return pixel;
		else
			return vec4(0.0,0.0,0.0,0.0);
	else
		if ((v.x - ((v.x / 2) * 2) == 1))
			return pixel;
		else
			return vec4(0.0,0.0,0.0,0.0);
}
