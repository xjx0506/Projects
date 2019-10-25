import pygame

pygame.init()

black = (0,0,0)
white = (255,255,255)
green = (0,255,0)
red = (255,0,0)
purple = (154,230,233)

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

class Block(pygame.sprite.Sprite):
	"""docstring for Block"""
	def __init__(self,screen,blockx,blocky,blockw,blockh):
		self.screen = screen
		self.blockx = blockx
		self.blocky = blocky
		self.blockw = blockw
		self.blockh = blockh
	def drawBlock(self):
		pygame.draw.rect(screen,purple,(self.blockx,self.blocky,self.blockw,self.blockh))

	def removeBlock(self,group):
		# remove this block object from the group
		group.remove(self)

	def addBlock(self,group):
		group.add(self)

		# detect collision between the ball and the 
	def collide(self,ball):


class BlockGroup(pygame.sprite.Group):
	"""docstring for BlockGroup"""
	def __init__(self,screen,x,y,width,height):
		self.screen = screen

		
		






		
class Paddle(object):
	"""docstring for paddle"""
	speed = 0
	# change_x = 5
	def __init__(self, screen,paddleX,paddleY,paddleW,paddleH):
		self.screen = screen
		self.px_pos = paddleX
		self.py_pos = paddleY
		self._paddleW = paddleW
		self._paddleH = paddleH

	def drawPaddle(self):
		pygame.draw.rect(screen,red,(self.px_pos,self.py_pos,self._paddleW,self._paddleH))
 		
	def padCollision(self):
 		if self._paddleW + self.px_pos > 699 or self.px_pos < 0:
 			self.speed *= -1
 		

pygame.display.set_caption("GameStorm")

ball = Ball(screen,20,400,100)
paddle = Paddle(screen,200,400,250,20)
block = Block(screen)
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
			if event.key == pygame.K_LEFT:
				paddle.speed -= 16
			if event.key == pygame.K_RIGHT:
				paddle.speed += 16
		if event.type == pygame.KEYUP:
			paddle.speed = 0
	# if paddle._paddleW + paddle.px_pos > 699 or paddle.px_pos < 0:

	paddle.px_pos += paddle.speed

	#Event processing
	screen.fill(black)
	#Game logic
	block.drawBlock()
	ball.drawBall()
	ball.moveBall()
	ball.collisionDect(paddle)
	#Game logic
	paddle.drawPaddle()
	paddle.padCollision()
	# paddle.movePaddle()
	
	#Draw 

	pygame.display.flip()
	#Draw

	clock.tick(60)


pygame.quit()