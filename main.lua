function love.load()
	myShader = love.graphics.newShader("checkerboard.frag")
	joe = love.graphics.newImage("Joe.png")
end

function love.draw()
	love.graphics.setShader(myShader)
	myShader:send("textureSize", { joe:getDimensions() })
	love.graphics.draw(joe, 0, 0, 0, .5, .5)
	love.graphics.draw(joe, 60, 60, 0, 1, 1)
	love.graphics.draw(joe, 180, 180, 0, 2, 2)
	love.graphics.setShader()
end
