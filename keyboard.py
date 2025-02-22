import RPi.GPIO as GPIO
from time import sleep

FREQ = 50 #in hz
servo_dict= {} #at some point make the key the note to play

def set_to_180(note):
    servo = servo_dict[note]
    servo.ChangeDutyCycle(10)
    sleep(0.5)
    servo.ChangeDutyCycle(0)
#endfunc
    

def set_to_0(note):
    servo = servo_dict[note]
    servo.ChangeDutyCycle(2)
    sleep(0.5)
    servo.ChangeDutyCycle(0)
#endfunc

def press_key(note):
    servo = servo_dict[note]
    servo.ChangeDutyCycle(5)
    sleep(0.5)
    servo.ChangeDutyCycle(0)
#endfunc

def setup():
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(11,GPIO.OUT)
    GPIO.setup(13,GPIO.OUT)
    GPIO.setup(15,GPIO.OUT)
    GPIO.setup(37,GPIO.OUT)
    GPIO.setup(16,GPIO.OUT)
    GPIO.setup(18,GPIO.OUT)
    GPIO.setup(22,GPIO.OUT)
    GPIO.setup(26,GPIO.OUT)
    servo_dict["11"] = GPIO.PWM(11,FREQ)
    servo_dict["13"] = GPIO.PWM(13,FREQ)
    servo_dict["15"] = GPIO.PWM(15,FREQ)
    servo_dict["37"] = GPIO.PWM(37,FREQ)
    servo_dict["16"] = GPIO.PWM(16,FREQ)
    servo_dict["18"] = GPIO.PWM(18,FREQ)
    servo_dict["22"] = GPIO.PWM(22,FREQ)
    servo_dict["26"] = GPIO.PWM(26,FREQ)
    servo_dict["11"].start(0)
    servo_dict["13"].start(0)
    servo_dict["15"].start(0)
    servo_dict["37"].start(0)
    servo_dict["16"].start(0)
    servo_dict["18"].start(0)
    servo_dict["22"].start(0)
    servo_dict["26"].start(0)
#endfunc

def stop_motors():
    servo_dict["11"].stop()
    servo_dict["13"].stop()
    servo_dict["15"].stop()
    servo_dict["37"].stop()
    servo_dict["16"].stop()
    servo_dict["18"].stop()
    servo_dict["22"].stop()
    servo_dict["26"].stop()
    GPIO.cleanup()
#endfunc
    
def main():
    setup()
    try:
        while True:
            motor = input("which pin do you want to affect")
            choice = input("""Enter your choice:
    1. set motor to 180
    2. set motor to 0
    3. press a key
    4. exit""")
            if choice == "1":
                set_to_180(motor)
            elif choice == "2":
                set_to_0(motor)
            elif choice == "3":
                press_key(motor)
            elif choice == "4":
                break
            else:
                print("not a valid choice")
    except:
        pass
    finally:
        stop_motors()
#endfunc

if __name__ == "__main__":
    main()