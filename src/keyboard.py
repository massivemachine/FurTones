import RPi.GPIO as GPIO
from time import sleep

FREQ = 50 #in hz
servo_dict= {} #at some point make the key the note to play
notes_to_press_from_zero = ["f","g","e","c","d"]
REST = "r"

def set_to_180(note):
    servo = servo_dict[note]
    servo.ChangeDutyCycle(12)
    sleep(0.5)
    servo.ChangeDutyCycle(0)
#endfunc
    

def set_to_0(note):
    servo = servo_dict[note]
    servo.ChangeDutyCycle(2)
    sleep(0.5)
    servo.ChangeDutyCycle(0)
#endfunc

def press_key_from_0(note):
    servo = servo_dict[note]
    servo.ChangeDutyCycle(5)
    sleep(0.5)
    servo.ChangeDutyCycle(2)
    sleep(0.5)
    servo.ChangeDutyCycle(0)
#endfunc

def press_key_from_12(note):
    servo = servo_dict[note]
    servo.ChangeDutyCycle(9)
    sleep(0.5)
    servo.ChangeDutyCycle(12)
    sleep(0.5)
    servo.ChangeDutyCycle(0)

def rest():
    sleep(1)

def test_setup():
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(11,GPIO.OUT)
    GPIO.setup(13,GPIO.OUT)
    GPIO.setup(15,GPIO.OUT)
    GPIO.setup(37,GPIO.OUT)
    GPIO.setup(16,GPIO.OUT)
    GPIO.setup(18,GPIO.OUT)
    GPIO.setup(22,GPIO.OUT)
    GPIO.setup(36,GPIO.OUT)
    servo_dict["11"] = GPIO.PWM(11,FREQ)
    servo_dict["13"] = GPIO.PWM(13,FREQ)
    servo_dict["15"] = GPIO.PWM(15,FREQ)
    servo_dict["37"] = GPIO.PWM(37,FREQ)
    servo_dict["16"] = GPIO.PWM(16,FREQ)
    servo_dict["18"] = GPIO.PWM(18,FREQ)
    servo_dict["22"] = GPIO.PWM(22,FREQ)
    servo_dict["36"] = GPIO.PWM(36,FREQ)
    servo_dict["11"].start(0)
    servo_dict["13"].start(0)
    servo_dict["15"].start(0)
    servo_dict["37"].start(0)
    servo_dict["16"].start(0)
    servo_dict["18"].start(0)
    servo_dict["22"].start(0)
    servo_dict["36"].start(0)
#endfunc

def test_stop_motors():
    servo_dict["11"].stop()
    servo_dict["13"].stop()
    servo_dict["15"].stop()
    servo_dict["37"].stop()
    servo_dict["16"].stop()
    servo_dict["18"].stop()
    servo_dict["22"].stop()
    servo_dict["36"].stop()
    GPIO.cleanup()
#endfunc

def test():
    test_setup()
    try:
        while True:
            motor = input("which pin do you want to affect: ")
            choice = input("""Choose from
    1. press a key from position 0
    2. press a key from position 12
    3. exit
    enter your choice: """)
            if choice == "1":
                press_key_from_0(motor)
            elif choice == "2":
                press_key_from_12(motor)
            elif choice == "3":
                break
            else:
                print("not a valid choice")
    except Exception as e:
        print("something went wrong: " + str(e))
    finally:
        test_stop_motors()
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
    GPIO.setup(36,GPIO.OUT)
    servo_dict["f"] = GPIO.PWM(11,FREQ)
    servo_dict["g"] = GPIO.PWM(13,FREQ)
    servo_dict["a"] = GPIO.PWM(15,FREQ)
    servo_dict["e"] = GPIO.PWM(37,FREQ)
    servo_dict["b"] = GPIO.PWM(18,FREQ)
    servo_dict["c"] = GPIO.PWM(22,FREQ)
    servo_dict["d"] = GPIO.PWM(36,FREQ)
    servo_dict["f"].start(0)
    servo_dict["g"].start(0)
    servo_dict["a"].start(0)
    servo_dict["b"].start(0)
    servo_dict["c"].start(0)
    servo_dict["d"].start(0)
    servo_dict["e"].start(0)
#endfunc

def stop_motors():
    servo_dict["f"].stop()
    servo_dict["g"].stop()
    servo_dict["a"].stop()
    servo_dict["b"].stop()
    servo_dict["c"].stop()
    servo_dict["d"].stop()
    servo_dict["e"].stop()
    GPIO.cleanup()
#endfunc


def play_notes(notes):
    setup()
    try:
        for chord in notes:
            for note in chord:
                if note == REST:
                    rest()
                    break
                if note in notes_to_press_from_zero:
                    press_key_from_0(note)
                else:
                    press_key_from_12(note)
        #each column has an array containing the notes in that column
    except Exception as e:
        print("something went wrong: " + str(e))
    finally:
        stop_motors()
#endfunc

if __name__ == "__main__":
    play_notes([["f"],["g"],["a"],["b"],["r"],["c"],["d"],["e"],["f"]])
    #test()