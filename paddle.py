import pygame

pygame.init()

black = (0,0,0)
white = (255,255,255)
green = (0,255,0)
red = (255,0,0)
screen_size = [700,500] #[width,height]
screen = pygame.display.set_mode(screen_size)


class Ball(object):
	def __init__(self, screen,radius,x,y):
		self._screen = screen
		self._radius = radius
		self.x_pos = x
		self.y_pos = y
		self.x_vel = 5  # 5 is speed , + or - means direction
		self.y_vel = 5
	def getx_vel(self):
		return self.x_vel
	def gety_vel(self):
		return self.y_vel
	def drawBall(self):
		pygame.draw.circle(screen,(255,255,255),(self.x_pos,self.y_pos),self._radius)
	def moveBall(self):
		self.x_pos += self.x_vel
		self.y_pos += self.y_vel

	    	#right border
		if self.x_pos > 699 - self._radius:
			self.x_vel *= -1
			#left border
		if self.x_pos < self._radius:
			self.x_vel *= -1
			#bottom
		if self.y_pos > 499 - self._radius:
			self.y_vel *= -1 
			#top
		if self.y_pos < self._radius:
			self.y_vel *= -1
			
		#detect if ball hit the paddle
	def collisionDect(self,paddle):
		paddleX = paddle.px_pos
		paddleY = paddle.py_pos
		paddleW = paddle._paddleW
		paddleH = paddle._paddleH
		ballx = self.x_pos
		bally = self.y_pos
		if (ballx + self._radius >= paddleX and ballx <= (paddleX + paddleW))\
		and (bally + self._radius >= paddleY and bally <= (paddleY +paddleH)):
			self.y_vel *= -1


class Paddle(object):
	"""docstring for paddle"""
	paddle_vel = 35
	def __init__(self, paddleX,paddleY,paddleW,paddleH):
		self.px_pos = paddleX
		self.py_pos = paddleY
		self._paddleW = paddleW
		self._paddleH = paddleH

	def drawPaddle(self):
		pygame.draw.rect(screen,red,(self.px_pos,self.py_pos,self._paddleW,self._paddleH))
 		

pygame.display.set_caption("GameStorm")

ball = Ball(screen,20,400,100)
paddle = Paddle(300,400,250,20)


done = False
#control how fast the game runs
clock = pygame.time.Clock() 
# ------- main program loop --------- #
while done == False:
	#Event processing
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			done = True
		if event.type == pygame.KEYDOWN:
			if event.type == pygame.K_LEFT:
				paddle.px_pos -= paddle.paddle_vel
			if event.type == pygame.K_RIGHT:
				paddle.px_pos += paddle.paddle_vel
	#Event processing
	screen.fill(black)
	#Game logic

	ball.drawBall()
	ball.moveBall()
	#Game logic
	paddle.drawPaddle()
	ball.collisionDect(paddle)
	#Draw 

	pygame.display.flip()
	#Draw

	clock.tick(30)


pygame.quit()