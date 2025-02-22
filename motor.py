import RPi.GPIO as GPIO
from time import sleep

#setup
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11,GPIO.OUT)
servo1 = GPIO.PWM(11,50)# pin 11, 50hz pulse
servo1.start(0) #start pwm with pulse off


sleep(1)

#turn back to 0 degrees
servo1.ChangeDutyCycle(2)
sleep(0.5)
servo1.ChangeDutyCycle(0)#stop

duty = 2

#rotate servo 180 degrees in 18 degree steps
while duty <= 12:
    servo1.ChangeDutyCycle(duty)
    sleep(1)
    duty += 1

sleep(2)

#turn back to 0 degrees
servo1.ChangeDutyCycle(2)
sleep(0.5)
servo1.ChangeDutyCycle(0)#stop

#cleanup
servo1.stop()
GPIO.cleanup()
