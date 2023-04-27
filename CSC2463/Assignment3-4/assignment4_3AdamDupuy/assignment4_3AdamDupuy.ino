//

const int ledPin = 9;      // the pin that the LED is attached to
const int button = 3;

void setup() {
  // initialize the serial communication:
  Serial.begin(9600);
  // initialize the ledPin as an output:
  pinMode(ledPin, OUTPUT);
  pinMode(button, INPUT);
}

void loop() {
  byte brightness;
  digitalRead(button);
  Serial.println(digitalRead(button));
  delay(10);
  

  // check if data has been sent from the computer:
  if (Serial.available()) {
    // read the most recent byte (which will be from 0 to 255):
    brightness = Serial.read();
    // set the brightness of the LED:
    analogWrite(ledPin, brightness);
  }
}
