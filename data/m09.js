window.MECH.register({
 "id": "m09",
 "n": 9,
 "title": "Digital Electronics and Microcontrollers",
 "short": "Digital and Microcontrollers",
 "group": "Electrical & Electronics",
 "blurb": "Work with binary and hexadecimal, logic gates, flip-flops, ADCs, PWM and microcontroller inputs and outputs used in modern control equipment.",
 "outcomes": [
  "Convert between decimal, binary and hexadecimal numbers",
  "Use truth tables to describe the behaviour of AND, OR, NOT, NAND, NOR and XOR gates",
  "Explain how a flip-flop stores one bit and how counters and registers are built from flip-flops",
  "Calculate the resolution and the digital reading of an analogue-to-digital converter",
  "Calculate the average output of a PWM signal from its duty cycle",
  "Describe the main blocks of a microcontroller and the common serial interfaces UART, SPI and I²C",
  "Select pull-up or pull-down resistors and handle contact bounce in an input circuit",
  "Read a simple setup-and-loop program and predict what it does"
 ],
 "lessons": [
  {
   "id": "m09-l1",
   "title": "Number systems: binary, hexadecimal and BCD",
   "minutes": 8,
   "body": [
    {
     "t": "p",
     "x": "Digital electronics represents everything with two states: on or off, high or low, 1 or 0. One such digit is a **bit**. A group of eight bits is a **byte**. Computers, PLCs and microcontrollers store and move numbers, text, sensor readings and instructions as patterns of bits, so you need to be comfortable reading them."
    },
    {
     "t": "h",
     "x": "Binary"
    },
    {
     "t": "p",
     "x": "The **binary** system uses only the digits 0 and 1. Each position is worth twice the position on its right, just as each decimal position is worth ten times the one on its right. Reading from the right, the positions are worth 1, 2, 4, 8, 16, 32, 64, 128 and so on. To convert, add the values of the positions containing a 1."
    },
    {
     "t": "table",
     "head": [
      "Decimal",
      "Binary",
      "Hex"
     ],
     "rows": [
      [
       "0",
       "0000",
       "0"
      ],
      [
       "1",
       "0001",
       "1"
      ],
      [
       "2",
       "0010",
       "2"
      ],
      [
       "3",
       "0011",
       "3"
      ],
      [
       "4",
       "0100",
       "4"
      ],
      [
       "5",
       "0101",
       "5"
      ],
      [
       "6",
       "0110",
       "6"
      ],
      [
       "7",
       "0111",
       "7"
      ],
      [
       "8",
       "1000",
       "8"
      ],
      [
       "9",
       "1001",
       "9"
      ],
      [
       "10",
       "1010",
       "A"
      ],
      [
       "11",
       "1011",
       "B"
      ],
      [
       "12",
       "1100",
       "C"
      ],
      [
       "13",
       "1101",
       "D"
      ],
      [
       "14",
       "1110",
       "E"
      ],
      [
       "15",
       "1111",
       "F"
      ]
     ],
     "cap": "Decimal, 4-bit binary and hexadecimal equivalents"
    },
    {
     "t": "worked",
     "title": "Worked example: binary to decimal",
     "problem": "Convert 10110110 (binary) to decimal.",
     "steps": [
      "Write the place values from the left: 128, 64, 32, 16, 8, 4, 2, 1.",
      "The bits are 1 0 1 1 0 1 1 0, so the ones sit in the 128, 32, 16, 4 and 2 positions.",
      "Add: 128 + 32 + 16 + 4 + 2 = 182."
     ],
     "answer": "10110110 binary equals 182 decimal."
    },
    {
     "t": "worked",
     "title": "Worked example: decimal to binary",
     "problem": "Convert 45 decimal to binary.",
     "steps": [
      "Find the largest power of two that fits: 32. 45 − 32 = 13. Put 1 in the 32 position.",
      "16 does not fit in 13, so the 16 position is 0. 8 fits: 13 − 8 = 5, so the 8 position is 1.",
      "4 fits: 5 − 4 = 1, so the 4 position is 1. 2 does not fit, so it is 0. 1 fits, so the 1 position is 1.",
      "Reading the positions 32, 16, 8, 4, 2, 1 gives 101101."
     ],
     "answer": "45 decimal equals 101101 binary. Check: 32 + 8 + 4 + 1 = 45."
    },
    {
     "t": "h",
     "x": "Hexadecimal"
    },
    {
     "t": "p",
     "x": "Long binary strings are hard to read, so **hexadecimal** (base 16) is used as a shorthand. It uses the digits 0 to 9 and the letters A to F for 10 to 15. One hex digit stands for exactly four bits, so one byte is two hex digits. The hex number 0x3F has the 3 as 0011 and the F as 1111, so it is 00111111, which is 3 × 16 + 15 = 63 decimal. The prefix 0x (or the suffix h) shows that a number is hex. PLC addresses, error codes, memory contents and colour values are often given in hex."
    },
    {
     "t": "h",
     "x": "BCD and signed numbers"
    },
    {
     "t": "ul",
     "items": [
      "**BCD (binary-coded decimal)** stores each decimal digit in its own four bits. The number 47 in BCD is 0100 0111. Thumbwheel switches and seven-segment displays often use BCD, since each digit is handled separately.",
      "A byte holds 0 to 255 as an unsigned number. A 16-bit word holds 0 to 65 535.",
      "**Two's complement** represents negative numbers: in a signed 8-bit number the leftmost bit is the sign, giving −128 to +127. A signed 16-bit integer (INT in a PLC) holds −32 768 to +32 767."
     ]
    },
    {
     "t": "tip",
     "x": "To check a binary conversion quickly, count the ones and note whether the last bit is 1. An odd decimal number always ends in a 1 in binary."
    },
    {
     "t": "key",
     "items": [
      "A bit is a 0 or 1; a byte is 8 bits.",
      "Binary place values are 1, 2, 4, 8, 16, 32, 64, 128 …; add those with a 1.",
      "One hex digit equals four bits; 0x3F = 63.",
      "BCD stores each decimal digit in four bits.",
      "A signed 16-bit integer ranges from −32 768 to +32 767."
     ]
    }
   ]
  },
  {
   "id": "m09-l2",
   "title": "Logic gates and Boolean algebra",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "A **logic gate** is a circuit that produces an output of 1 or 0 from one or more inputs according to a fixed rule. Gates are the building blocks of every digital system, from a simple interlock to a microprocessor. The rules are shown in **truth tables**, which list the output for every combination of inputs."
    },
    {
     "t": "svg",
     "alt": "Six rectangular logic gate symbols labelled AND, OR, NOT, NAND, NOR and XOR, each with its Boolean expression and a short description of when the output is 1.",
     "cap": "Figure 1: the six basic gates with their expressions and rules",
     "svg": "<svg viewBox=\"0 0 640 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<rect x=\"60\" y=\"20\" width=\"56\" height=\"50\" class=\"ln fl\"/><text x=\"88\" y=\"51\" class=\"tx txb txc\">&amp;</text><line x1=\"30\" y1=\"34\" x2=\"60\" y2=\"34\" class=\"ln\"/><line x1=\"30\" y1=\"56\" x2=\"60\" y2=\"56\" class=\"ln\"/><text x=\"26\" y=\"38\" class=\"txs txe\">A</text><text x=\"26\" y=\"60\" class=\"txs txe\">B</text><line x1=\"116\" y1=\"45\" x2=\"150\" y2=\"45\" class=\"ln\"/><text x=\"156\" y=\"49\" class=\"txs\">Y</text><text x=\"88\" y=\"92\" class=\"tx txb txc\">AND</text><text x=\"88\" y=\"108\" class=\"txs txc\">Y = A · B</text><text x=\"88\" y=\"122\" class=\"txs txm txc\">1 only if both inputs are 1</text>\n<rect x=\"270\" y=\"20\" width=\"56\" height=\"50\" class=\"ln fl\"/><text x=\"298\" y=\"51\" class=\"tx txb txc\">≥1</text><line x1=\"240\" y1=\"34\" x2=\"270\" y2=\"34\" class=\"ln\"/><line x1=\"240\" y1=\"56\" x2=\"270\" y2=\"56\" class=\"ln\"/><text x=\"236\" y=\"38\" class=\"txs txe\">A</text><text x=\"236\" y=\"60\" class=\"txs txe\">B</text><line x1=\"326\" y1=\"45\" x2=\"360\" y2=\"45\" class=\"ln\"/><text x=\"366\" y=\"49\" class=\"txs\">Y</text><text x=\"298\" y=\"92\" class=\"tx txb txc\">OR</text><text x=\"298\" y=\"108\" class=\"txs txc\">Y = A + B</text><text x=\"298\" y=\"122\" class=\"txs txm txc\">1 if either input is 1</text>\n<rect x=\"480\" y=\"20\" width=\"56\" height=\"50\" class=\"ln fl\"/><text x=\"508\" y=\"51\" class=\"tx txb txc\">1</text><line x1=\"450\" y1=\"45\" x2=\"480\" y2=\"45\" class=\"ln\"/><text x=\"446\" y=\"49\" class=\"txs txe\">A</text><circle cx=\"540\" cy=\"45\" r=\"4\" class=\"ln fl\"/><line x1=\"544\" y1=\"45\" x2=\"570\" y2=\"45\" class=\"ln\"/><text x=\"576\" y=\"49\" class=\"txs\">Y</text><text x=\"508\" y=\"92\" class=\"tx txb txc\">NOT</text><text x=\"508\" y=\"108\" class=\"txs txc\">Y = A̅</text><text x=\"508\" y=\"122\" class=\"txs txm txc\">inverts the input</text>\n<rect x=\"60\" y=\"155\" width=\"56\" height=\"50\" class=\"ln fl\"/><text x=\"88\" y=\"186\" class=\"tx txb txc\">&amp;</text><line x1=\"30\" y1=\"169\" x2=\"60\" y2=\"169\" class=\"ln\"/><line x1=\"30\" y1=\"191\" x2=\"60\" y2=\"191\" class=\"ln\"/><text x=\"26\" y=\"173\" class=\"txs txe\">A</text><text x=\"26\" y=\"195\" class=\"txs txe\">B</text><circle cx=\"120\" cy=\"180\" r=\"4\" class=\"ln fl\"/><line x1=\"124\" y1=\"180\" x2=\"150\" y2=\"180\" class=\"ln\"/><text x=\"156\" y=\"184\" class=\"txs\">Y</text><text x=\"88\" y=\"227\" class=\"tx txb txc\">NAND</text><text x=\"88\" y=\"243\" class=\"txs txc\">Y = (A · B)̅</text><text x=\"88\" y=\"257\" class=\"txs txm txc\">0 only if both inputs are 1</text>\n<rect x=\"270\" y=\"155\" width=\"56\" height=\"50\" class=\"ln fl\"/><text x=\"298\" y=\"186\" class=\"tx txb txc\">≥1</text><line x1=\"240\" y1=\"169\" x2=\"270\" y2=\"169\" class=\"ln\"/><line x1=\"240\" y1=\"191\" x2=\"270\" y2=\"191\" class=\"ln\"/><text x=\"236\" y=\"173\" class=\"txs txe\">A</text><text x=\"236\" y=\"195\" class=\"txs txe\">B</text><circle cx=\"330\" cy=\"180\" r=\"4\" class=\"ln fl\"/><line x1=\"334\" y1=\"180\" x2=\"360\" y2=\"180\" class=\"ln\"/><text x=\"366\" y=\"184\" class=\"txs\">Y</text><text x=\"298\" y=\"227\" class=\"tx txb txc\">NOR</text><text x=\"298\" y=\"243\" class=\"txs txc\">Y = (A + B)̅</text><text x=\"298\" y=\"257\" class=\"txs txm txc\">1 only if both inputs are 0</text>\n<rect x=\"480\" y=\"155\" width=\"56\" height=\"50\" class=\"ln fl\"/><text x=\"508\" y=\"186\" class=\"tx txb txc\">=1</text><line x1=\"450\" y1=\"169\" x2=\"480\" y2=\"169\" class=\"ln\"/><line x1=\"450\" y1=\"191\" x2=\"480\" y2=\"191\" class=\"ln\"/><text x=\"446\" y=\"173\" class=\"txs txe\">A</text><text x=\"446\" y=\"195\" class=\"txs txe\">B</text><line x1=\"536\" y1=\"180\" x2=\"570\" y2=\"180\" class=\"ln\"/><text x=\"576\" y=\"184\" class=\"txs\">Y</text><text x=\"508\" y=\"227\" class=\"tx txb txc\">XOR</text><text x=\"508\" y=\"243\" class=\"txs txc\">Y = A ⊕ B</text><text x=\"508\" y=\"257\" class=\"txs txm txc\">1 if the inputs differ</text>\n<text x=\"14\" y=\"280\" class=\"txs txm\">Rectangular IEC 60617 symbols; the small circle at an output means the signal is inverted.</text>\n</svg>"
    },
    {
     "t": "table",
     "head": [
      "A",
      "B",
      "AND",
      "OR",
      "NAND",
      "NOR",
      "XOR"
     ],
     "rows": [
      [
       "0",
       "0",
       "0",
       "0",
       "1",
       "1",
       "0"
      ],
      [
       "0",
       "1",
       "0",
       "1",
       "1",
       "0",
       "1"
      ],
      [
       "1",
       "0",
       "0",
       "1",
       "1",
       "0",
       "1"
      ],
      [
       "1",
       "1",
       "1",
       "1",
       "0",
       "0",
       "0"
      ]
     ],
     "cap": "Truth table for the two-input gates; NOT simply outputs the opposite of A"
    },
    {
     "t": "h",
     "x": "Boolean algebra"
    },
    {
     "t": "p",
     "x": "**Boolean algebra** gives rules for combining logic. A dot (·) means AND, a plus (+) means OR and a bar over a letter means NOT. A few laws simplify circuits and save components:"
    },
    {
     "t": "ul",
     "items": [
      "A · 0 = 0 and A · 1 = A; A + 0 = A and A + 1 = 1.",
      "A · A = A and A + A = A.",
      "A + A̅ = 1 and A · A̅ = 0.",
      "**De Morgan's laws:** the NOT of (A · B) equals (NOT A) + (NOT B); the NOT of (A + B) equals (NOT A) · (NOT B)."
     ]
    },
    {
     "t": "p",
     "x": "De Morgan's laws are useful in practice. A NAND gate is the same as an OR gate with its inputs inverted. This is why you can build any logic function from NAND gates alone, and why a PLC ladder rung with normally closed contacts in series can be rewritten as a NOR."
    },
    {
     "t": "h",
     "x": "From a problem to a circuit"
    },
    {
     "t": "p",
     "x": "Digital logic turns a description into gates. Consider a press that may start only when the guard is closed (G = 1) and both hands are on the start buttons (S1 = 1 and S2 = 1). The enable output is Y = G · S1 · S2, a three-input AND. If a fault input F = 1 must stop it, the equation becomes Y = G · S1 · S2 · F̅."
    },
    {
     "t": "steps",
     "title": "Designing a simple logic circuit",
     "items": [
      "Write down the inputs and the output in words.",
      "List the conditions in which the output must be 1, and build a truth table.",
      "Write the Boolean expression from the 1 rows.",
      "Simplify using the laws of Boolean algebra.",
      "Draw the gates or write the PLC rung, then test every row of the truth table."
     ]
    },
    {
     "t": "note",
     "x": "In real equipment, safety functions use certified safety relays and safety PLCs rather than ordinary logic gates. The ideas on this page apply, but the hardware is different (see Module 2 and Module 20)."
    },
    {
     "t": "key",
     "items": [
      "A gate gives 1 or 0 from its inputs; a truth table lists every case.",
      "AND is 1 only if all inputs are 1; OR is 1 if any input is 1; NOT inverts.",
      "NAND, NOR are AND, OR followed by NOT; XOR is 1 when the inputs differ.",
      "De Morgan: NOT(A · B) = NOT A + NOT B; NOT(A + B) = NOT A · NOT B.",
      "Test a logic design on every row of its truth table."
     ]
    }
   ]
  },
  {
   "id": "m09-l3",
   "title": "Flip-flops, counters and registers",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "The gates in the last lesson are **combinational**: their output depends only on the present inputs. Many circuits must also remember what happened before, such as a motor start latch or a count of items on a conveyor. These are **sequential** circuits, and the basic memory element is the **flip-flop**, which stores one bit."
    },
    {
     "t": "h",
     "x": "Latches and flip-flops"
    },
    {
     "t": "ul",
     "items": [
      "An **SR latch** has a Set input that makes its output Q go to 1 and a Reset input that returns Q to 0. If both are 0, it holds its state. It is the electronic version of a seal-in (hold-in) contact, and is the same as the set-reset coil in PLC ladder logic.",
      "A **D flip-flop** has a data input D and a clock input. On the active edge of the clock (usually the rising edge) it copies D to Q, and holds that value until the next clock edge.",
      "A **JK flip-flop** adds a toggle action. Its output flips when both inputs are 1."
     ]
    },
    {
     "t": "svg",
     "alt": "Timing diagram with three traces: a square clock, a data signal D that changes between clock edges, and the output Q that changes only on rising clock edges to copy D.",
     "cap": "Figure 2: a D flip-flop copies D to Q only on the rising edge of the clock",
     "svg": "<svg viewBox=\"0 0 620 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<text x=\"14\" y=\"62\" class=\"tx txb\">CLK</text><text x=\"14\" y=\"132\" class=\"tx txb\">D</text><text x=\"14\" y=\"202\" class=\"tx txb\">Q</text>\n<polyline points=\"60,70 100,70 100,40 140,40 140,70 180,70 180,40 220,40 220,70 260,70 260,40 300,40 300,70 340,70 340,40 380,40 380,70 420,70 420,40 460,40 460,70 500,70 500,40 540,40 540,70 560,70\" class=\"ln\"/><polyline points=\"60,140 140,140 140,110 210,110 210,140 300,140 300,110 390,110 390,140 560,140\" class=\"lnb\"/><polyline points=\"60,210 180,210 180,180 260,180 260,210 340,210 340,180 420,180 420,210 560,210\" class=\"lna\"/><line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"225\" class=\"lnm ln1 dash\"/><line x1=\"180\" y1=\"30\" x2=\"180\" y2=\"225\" class=\"lnm ln1 dash\"/><line x1=\"260\" y1=\"30\" x2=\"260\" y2=\"225\" class=\"lnm ln1 dash\"/><line x1=\"340\" y1=\"30\" x2=\"340\" y2=\"225\" class=\"lnm ln1 dash\"/><line x1=\"420\" y1=\"30\" x2=\"420\" y2=\"225\" class=\"lnm ln1 dash\"/><line x1=\"500\" y1=\"30\" x2=\"500\" y2=\"225\" class=\"lnm ln1 dash\"/><text x=\"100\" y=\"244\" class=\"txs txc\">rising edge: D = 0, Q = 0</text><text x=\"180\" y=\"258\" class=\"txs txc\">D = 1, so Q becomes 1</text>\n<text x=\"340\" y=\"244\" class=\"txs txc\">D = 1, so Q becomes 1</text><text x=\"420\" y=\"258\" class=\"txs txc\">D = 0, so Q becomes 0</text>\n<text x=\"600\" y=\"30\" class=\"txs txe\">Q copies D only at the rising clock edge</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "The timing diagram shows the key property: Q does not follow D continuously. It updates only on clock edges, so a noisy or changing D between edges has no effect. This synchronous behaviour makes complex digital systems predictable."
    },
    {
     "t": "h",
     "x": "Registers and counters"
    },
    {
     "t": "p",
     "x": "A **register** is a group of flip-flops sharing one clock, storing a multi-bit number: an 8-bit register holds one byte. A **shift register** passes each bit to the next flip-flop on every clock, and is used to convert between serial and parallel data."
    },
    {
     "t": "p",
     "x": "A **counter** is a set of flip-flops that counts clock pulses in binary. An n-bit counter has 2ⁿ states. A 4-bit counter counts 0 to 15 (16 states) and then rolls over to 0. Counters divide frequency: each flip-flop in a chain halves the frequency of its input, so a 4-bit counter divides the clock by 16. This is how a fast crystal oscillator is turned into a slow, precise time base."
    },
    {
     "t": "table",
     "head": [
      "Device",
      "What it stores or does",
      "Typical use"
     ],
     "rows": [
      [
       "SR latch",
       "One bit, set and reset",
       "Start/stop latch, alarm memory"
      ],
      [
       "D flip-flop",
       "One bit, loaded on a clock edge",
       "Registers, synchronising an input"
      ],
      [
       "Shift register",
       "A row of bits that move along",
       "Serial-to-parallel conversion, LED drivers"
      ],
      [
       "Counter",
       "A binary count of pulses",
       "Frequency division, timers, encoders"
      ]
     ],
     "cap": "Common sequential building blocks"
    },
    {
     "t": "p",
     "x": "**Timers** in a digital circuit are counters clocked by a known frequency. If a 1 kHz clock drives a counter, then counting to 5000 takes exactly 5 s. The same idea runs the timers inside PLCs and microcontrollers (Module 15)."
    },
    {
     "t": "tip",
     "x": "When a latch circuit behaves oddly after power-up, remember that a latch can start in either state. Good designs include a reset at power-on so that the machine starts in a known, safe condition."
    },
    {
     "t": "key",
     "items": [
      "Combinational logic has no memory; sequential logic remembers earlier events.",
      "A flip-flop stores one bit; a D flip-flop copies D to Q on the clock edge.",
      "An SR latch is the electronic form of a seal-in contact or set/reset coil.",
      "An n-bit counter has 2ⁿ states and divides its clock by 2ⁿ.",
      "Timers are counters driven by a known clock."
     ]
    }
   ]
  },
  {
   "id": "m09-l4",
   "title": "ADC, DAC and PWM",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "The real world is analogue: temperature, pressure, speed and position change smoothly. Digital controllers work with numbers. Two converters link the worlds: the **analogue-to-digital converter (ADC)** changes a voltage into a number, and the **digital-to-analogue converter (DAC)** does the reverse."
    },
    {
     "t": "h",
     "x": "The ADC"
    },
    {
     "t": "p",
     "x": "An ADC divides its input range into 2ⁿ steps, where n is the number of bits. The size of one step is the **resolution**, or least significant bit (LSB)."
    },
    {
     "t": "formula",
     "x": "LSB = Vref ÷ 2ⁿ        Digital value = Vin ÷ LSB",
     "where": "Vref full-scale reference voltage (V), n number of bits, Vin input voltage (V)"
    },
    {
     "t": "worked",
     "title": "Worked example: a 10-bit ADC",
     "problem": "A 10-bit ADC has a 5 V reference. Find the step size and the voltage that corresponds to a reading of 768.",
     "steps": [
      "Number of steps = 2¹⁰ = 1024.",
      "LSB = 5 ÷ 1024 = 4.88 mV.",
      "Voltage = 768 × 4.88 mV = 3.75 V."
     ],
     "answer": "Each count is 4.88 mV and a reading of 768 means about 3.75 V."
    },
    {
     "t": "p",
     "x": "More bits give finer resolution. A 12-bit converter on a 10 V range resolves 10 ÷ 4096 = 2.44 mV; a 16-bit converter resolves 0.15 mV. Real accuracy also depends on noise, the reference, and the sampling rate. A signal must be sampled at more than twice its highest frequency (the **Nyquist** limit) or it appears as a false lower frequency (aliasing). In practice, controllers sample much faster and add a low-pass filter before the converter."
    },
    {
     "t": "h",
     "x": "The DAC and analogue outputs"
    },
    {
     "t": "p",
     "x": "A DAC turns a number into a voltage or current. PLC analogue output modules use DACs to give 0–10 V or 4–20 mA to a drive or valve. A 12-bit module for 0–10 V changes by 2.44 mV per count."
    },
    {
     "t": "h",
     "x": "Pulse-width modulation (PWM)"
    },
    {
     "t": "p",
     "x": "Many microcontrollers have no DAC but can switch an output very rapidly. In **PWM** a digital output is switched on and off at a fixed frequency while the ratio of on-time to period, the **duty cycle**, is varied. A load that responds slowly, such as a motor, a heater, a lamp or a filter capacitor, sees the **average** voltage."
    },
    {
     "t": "formula",
     "x": "Vavg = D × Vs",
     "where": "Vavg average voltage (V), D duty cycle as a fraction (50 % = 0.5), Vs supply voltage when the output is on (V)"
    },
    {
     "t": "svg",
     "alt": "Three PWM waveforms with the same period and duty cycles of 25, 50 and 75 percent, each with a dashed line marking the average value.",
     "cap": "Figure 3: PWM at 25 %, 50 % and 75 % duty cycle with the average level shown",
     "svg": "<svg viewBox=\"0 0 640 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<text x=\"14\" y=\"20\" class=\"tx txb\">PWM with the same frequency and three duty cycles</text>\n<polyline points=\"100,90 100,90 100,50 125,50 125,90 200,90 200,90 200,50 225,50 225,90 300,90 300,90 300,50 325,50 325,90 400,90 400,90 400,50 425,50 425,90 500,90\" class=\"lnb\"/><line x1=\"100\" y1=\"80\" x2=\"500\" y2=\"80\" class=\"lng dash\"/><text x=\"94\" y=\"72\" class=\"txs txe\">25 %</text><text x=\"508\" y=\"84\" class=\"txs\">average 0.25 × Vs</text><polyline points=\"100,170 100,170 100,130 150,130 150,170 200,170 200,170 200,130 250,130 250,170 300,170 300,170 300,130 350,130 350,170 400,170 400,170 400,130 450,130 450,170 500,170\" class=\"lnb\"/><line x1=\"100\" y1=\"150\" x2=\"500\" y2=\"150\" class=\"lng dash\"/><text x=\"94\" y=\"152\" class=\"txs txe\">50 %</text><text x=\"508\" y=\"154\" class=\"txs\">average 0.5 × Vs</text><polyline points=\"100,250 100,250 100,210 175,210 175,250 200,250 200,250 200,210 275,210 275,250 300,250 300,250 300,210 375,210 375,250 400,250 400,250 400,210 475,210 475,250 500,250\" class=\"lnb\"/><line x1=\"100\" y1=\"220\" x2=\"500\" y2=\"220\" class=\"lng dash\"/><text x=\"94\" y=\"232\" class=\"txs txe\">75 %</text><text x=\"508\" y=\"224\" class=\"txs\">average 0.75 × Vs</text>\n<text x=\"100\" y=\"272\" class=\"txs txc\">one period</text><line x1=\"100\" y1=\"258\" x2=\"200\" y2=\"258\" class=\"ln1\"/>\n<text x=\"630\" y=\"20\" class=\"txs txm txe\">Vs = supply voltage when ON</text>\n</svg>"
    },
    {
     "t": "worked",
     "title": "Worked example: PWM motor speed",
     "problem": "A 24 V DC motor is driven by a PWM transistor stage at a duty cycle of 30 %. What is the average voltage and what duty cycle gives 18 V?",
     "steps": [
      "Vavg = 0.30 × 24 = 7.2 V.",
      "For 18 V: D = Vavg ÷ Vs = 18 ÷ 24 = 0.75."
     ],
     "answer": "30 % duty gives 7.2 V on average. A 75 % duty cycle gives 18 V."
    },
    {
     "t": "ul",
     "items": [
      "PWM is efficient because the switching transistor is either fully on or fully off and wastes little power.",
      "The PWM frequency must be high enough to avoid visible flicker, motor whine or torque ripple; typical values range from 1 kHz to 20 kHz.",
      "Variable speed drives (Module 10) use the same principle to build an AC waveform."
     ]
    },
    {
     "t": "key",
     "items": [
      "An n-bit ADC has 2ⁿ steps; LSB = Vref ÷ 2ⁿ.",
      "A 10-bit, 5 V ADC has a 4.88 mV step; a reading of 768 is about 3.75 V.",
      "A DAC creates an analogue output from a number.",
      "PWM gives an average voltage Vavg = duty × Vs using only on/off switching.",
      "Sample at more than twice the highest signal frequency and filter before the ADC."
     ]
    }
   ]
  },
  {
   "id": "m09-l5",
   "title": "Microcontrollers and their inputs and outputs",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "A **microcontroller (MCU)** is a small computer on a single chip: a processor, program memory (flash), working memory (RAM), timers, an ADC and many input/output pins. It is the brain of drives, sensors, remote controls, instruments and many small machines. Arduino-style boards, ESP32 boards and the chips inside a variable speed drive all follow the same ideas."
    },
    {
     "t": "h",
     "x": "Main blocks"
    },
    {
     "t": "ul",
     "items": [
      "**CPU:** executes the program one instruction after another.",
      "**Flash memory:** stores the program, kept when power is off.",
      "**RAM:** holds variables while running; lost when power is removed.",
      "**GPIO (general-purpose input/output) pins:** each can be set as a digital input or digital output.",
      "**Timers:** count clock pulses to time events and generate PWM.",
      "**ADC:** reads analogue sensors.",
      "**Interrupts:** let an external event (a pulse from an encoder, a button) pause the main program to run a short routine immediately.",
      "**Serial interfaces:** UART, SPI and I²C for talking to other chips and devices."
     ]
    },
    {
     "t": "table",
     "head": [
      "Interface",
      "Wires",
      "Features",
      "Typical use"
     ],
     "rows": [
      [
       "UART",
       "TX, RX (and ground)",
       "Asynchronous, two devices, agreed baud rate",
       "Serial console, GPS, RS-232/RS-485 modules"
      ],
      [
       "SPI",
       "MOSI, MISO, SCK, plus a select line per device",
       "Fast, full duplex, no addresses",
       "Memory cards, displays, fast ADCs"
      ],
      [
       "I²C",
       "SDA and SCL only",
       "Two wires shared by many devices, each with an address; slower",
       "Sensors, real-time clocks, small displays"
      ]
     ],
     "cap": "Serial interfaces on a microcontroller"
    },
    {
     "t": "h",
     "x": "Logic levels and pins"
    },
    {
     "t": "p",
     "x": "A microcontroller input recognises a voltage above a threshold as high and below another threshold as low. Supply levels are typically 3.3 V or 5 V. A 24 V industrial sensor signal must **never** be connected straight to an MCU pin; use a resistor divider, an optocoupler or an input interface board."
    },
    {
     "t": "p",
     "x": "A floating input (connected to nothing) picks up noise and reads randomly. Always give a switch input a defined state with a **pull-up resistor** (typically 10 kΩ to the supply, so the pin reads high when the switch is open and low when it is pressed) or a **pull-down resistor** to ground. Most MCUs have built-in pull-ups that can be enabled in software."
    },
    {
     "t": "h",
     "x": "Contact bounce"
    },
    {
     "t": "p",
     "x": "When a mechanical switch closes, its contacts bounce for a few milliseconds, creating many fast transitions that a fast MCU counts as many presses. The fix is **debouncing**: either an RC filter in hardware, or code that waits about 10 to 50 ms and checks the input again before accepting a change."
    },
    {
     "t": "h",
     "x": "Reading a program"
    },
    {
     "t": "p",
     "x": "A typical program has two parts. A **setup** routine runs once at power-up to configure pins and variables. A **loop** routine then runs repeatedly. Industrial controllers use the same idea in the scan cycle (Module 15)."
    },
    {
     "t": "steps",
     "title": "A button-controlled lamp in plain steps",
     "items": [
      "Setup: set pin 2 as an input with pull-up enabled and pin 13 as an output; start with the lamp off.",
      "Loop: read pin 2. Because of the pull-up, pressed reads low.",
      "If the button is pressed, wait 20 ms for bounce, read again, and if still pressed, toggle the lamp state.",
      "Write the new state to pin 13 and wait until the button is released.",
      "Return to the start of the loop."
     ]
    },
    {
     "t": "warn",
     "x": "Do not drive motors, solenoids or lamps directly from an MCU pin. A pin supplies only about 20 mA. Use a transistor or MOSFET driver with a flyback diode (Module 8), or a relay or solid-state relay."
    },
    {
     "t": "key",
     "items": [
      "An MCU combines CPU, flash, RAM, timers, ADC and GPIO on one chip.",
      "UART uses two wires between two devices; SPI is fast with a select per device; I²C uses two shared wires with addresses.",
      "Never connect 24 V signals directly to a 3.3 V or 5 V pin.",
      "Use pull-up or pull-down resistors so that inputs never float.",
      "Debounce switch inputs, and use drivers for loads."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m09-q1",
   "q": "What is 10110110 in binary as a decimal number?",
   "opts": [
    "178",
    "186",
    "182",
    "190"
   ],
   "a": 2,
   "why": "128 + 32 + 16 + 4 + 2 = 182. Place values are 128, 64, 32, 16, 8, 4, 2, 1 and the bits set are positions 128, 32, 16, 4, 2."
  },
  {
   "id": "m09-q2",
   "q": "What is the hexadecimal number 0x3F in decimal?",
   "opts": [
    "63",
    "15",
    "47",
    "79"
   ],
   "a": 0,
   "why": "3 × 16 + 15 = 63. Each hex digit is four bits: 0011 1111."
  },
  {
   "id": "m09-q3",
   "q": "What is 45 in binary?",
   "opts": [
    "110101",
    "101101",
    "101110",
    "100101"
   ],
   "a": 1,
   "why": "45 = 32 + 8 + 4 + 1, which gives 101101."
  },
  {
   "id": "m09-q4",
   "q": "Which gate gives an output of 1 only when its two inputs are different?",
   "opts": [
    "AND",
    "OR",
    "NAND",
    "XOR"
   ],
   "a": 3,
   "why": "XOR (exclusive OR) is 1 when the inputs differ and 0 when they are the same."
  },
  {
   "id": "m09-q5",
   "q": "What is the output of a NAND gate when both inputs are 1?",
   "opts": [
    "1",
    "Undefined",
    "0",
    "Both 0 and 1"
   ],
   "a": 2,
   "why": "A NAND gate is an AND followed by NOT. AND of 1 and 1 is 1, and inverted becomes 0."
  },
  {
   "id": "m09-q6",
   "q": "Which statement of De Morgan's law is correct?",
   "opts": [
    "NOT(A · B) = (NOT A) + (NOT B)",
    "NOT(A · B) = (NOT A) · (NOT B)",
    "NOT(A + B) = (NOT A) + (NOT B)",
    "NOT(A + B) = A + B"
   ],
   "a": 0,
   "why": "De Morgan swaps AND and OR when the NOT is moved through the brackets and the inputs are inverted."
  },
  {
   "id": "m09-q7",
   "q": "When does a rising-edge D flip-flop change its output Q?",
   "opts": [
    "Whenever the input D changes",
    "On the rising edge, Q takes D",
    "Only when the supply is turned off",
    "On the falling edge of the clock only"
   ],
   "a": 1,
   "why": "A D flip-flop samples D only at the active clock edge and holds that value until the next edge."
  },
  {
   "id": "m09-q8",
   "q": "How many different states does a 4-bit counter have?",
   "opts": [
    "4",
    "8",
    "15",
    "16"
   ],
   "a": 3,
   "why": "An n-bit counter has 2ⁿ states. 2⁴ = 16, counting from 0 to 15."
  },
  {
   "id": "m09-q9",
   "q": "A 10-bit ADC has a 5 V reference. What is the size of one step?",
   "opts": [
    "5 mV",
    "50 mV",
    "4.88 mV",
    "0.49 mV"
   ],
   "a": 2,
   "why": "LSB = 5 ÷ 2¹⁰ = 5 ÷ 1024 = 4.88 mV."
  },
  {
   "id": "m09-q10",
   "q": "A 10-bit, 5 V ADC reads 768. What is the input voltage, approximately?",
   "opts": [
    "3.75 V",
    "2.50 V",
    "3.84 V",
    "4.60 V"
   ],
   "a": 0,
   "why": "768 × 4.88 mV = 3.75 V. This equals 768 ÷ 1024 of the 5 V range."
  },
  {
   "id": "m09-q11",
   "q": "A 24 V output is PWM-switched at a 25 % duty cycle. What is the average voltage?",
   "opts": [
    "24 V",
    "6 V",
    "12 V",
    "18 V"
   ],
   "a": 1,
   "why": "Vavg = D × Vs = 0.25 × 24 = 6 V."
  },
  {
   "id": "m09-q12",
   "q": "Why is a pull-up resistor fitted to a push-button input on a microcontroller?",
   "opts": [
    "To limit the current flowing through the button",
    "To make the push button last much longer",
    "To increase the logic voltage of the input pin",
    "To define a high level when the switch is open"
   ],
   "a": 3,
   "why": "Without it the pin would float and read random values when the switch is open. The pull-up defines the open state as high."
  },
  {
   "id": "m09-q13",
   "q": "What is switch bounce, and how is it handled?",
   "opts": [
    "Contacts chatter on closing; filter or delay in software",
    "The switch cools down after use; add a heat sink to it",
    "The contact gets dirty over time; clean it every month",
    "The supply voltage rises; add a larger series resistor"
   ],
   "a": 0,
   "why": "Contacts bounce for a few milliseconds, which an MCU can read as multiple presses. A small RC filter or a debounce delay of about 10 to 50 ms solves it."
  },
  {
   "id": "m09-q14",
   "q": "Which serial interface uses just two shared wires, SDA and SCL, with an address for each device?",
   "opts": [
    "SPI",
    "UART",
    "I²C",
    "RS-232"
   ],
   "a": 2,
   "why": "I²C uses a data line and a clock line shared by many devices, each with its own address."
  }
 ],
 "cards": [
  {
   "f": "How many bits in a byte, and what range does it hold?",
   "b": "8 bits; 0 to 255 unsigned, or −128 to +127 signed."
  },
  {
   "f": "Binary place values from the right?",
   "b": "1, 2, 4, 8, 16, 32, 64, 128 …"
  },
  {
   "f": "How many bits does one hex digit represent?",
   "b": "Four bits. Two hex digits make a byte."
  },
  {
   "f": "What is BCD?",
   "b": "Binary-coded decimal: each decimal digit stored in its own four bits."
  },
  {
   "f": "AND, OR, XOR rules?",
   "b": "AND: 1 if all inputs are 1. OR: 1 if any input is 1. XOR: 1 if the inputs differ."
  },
  {
   "f": "State De Morgan's laws.",
   "b": "NOT(A · B) = NOT A + NOT B and NOT(A + B) = NOT A · NOT B."
  },
  {
   "f": "Combinational vs sequential logic?",
   "b": "Combinational depends only on current inputs; sequential also depends on stored past state."
  },
  {
   "f": "What does a D flip-flop do?",
   "b": "Copies D to Q on the active clock edge and holds it until the next edge."
  },
  {
   "f": "How many states has an n-bit counter?",
   "b": "2ⁿ. A 4-bit counter has 16 states."
  },
  {
   "f": "ADC step size formula?",
   "b": "LSB = Vref ÷ 2ⁿ, where n is the number of bits."
  },
  {
   "f": "PWM average voltage?",
   "b": "Vavg = duty cycle × supply voltage."
  },
  {
   "f": "What are GPIO pins?",
   "b": "General-purpose input/output pins that software configures as digital inputs or outputs."
  },
  {
   "f": "Why use a pull-up resistor?",
   "b": "To give a defined logic level on an input when a switch is open, so it does not float."
  },
  {
   "f": "Which serial interface needs only SDA and SCL?",
   "b": "I²C, with each device identified by an address."
  }
 ],
 "terms": [
  {
   "t": "Bit",
   "d": "The smallest unit of digital information, either 0 or 1."
  },
  {
   "t": "Hexadecimal",
   "d": "A base-16 number system whose digits 0–9 and A–F each represent four bits."
  },
  {
   "t": "Truth table",
   "d": "A table listing the output of a logic circuit for every combination of inputs."
  },
  {
   "t": "Flip-flop",
   "d": "A circuit that stores one bit and changes state only on a clock edge or set/reset input."
  },
  {
   "t": "Counter",
   "d": "A sequential circuit that counts clock pulses in binary."
  },
  {
   "t": "ADC",
   "d": "Analogue-to-digital converter: turns an analogue voltage into a binary number."
  },
  {
   "t": "Resolution",
   "d": "The smallest change an ADC or DAC can represent, equal to full scale divided by 2ⁿ."
  },
  {
   "t": "Duty cycle",
   "d": "The proportion of each PWM period for which the output is on, as a percentage."
  },
  {
   "t": "GPIO",
   "d": "General-purpose input/output pin on a microcontroller that can act as a digital input or output."
  },
  {
   "t": "Interrupt",
   "d": "A signal that makes a microcontroller pause its main program and run a short routine immediately."
  },
  {
   "t": "Debouncing",
   "d": "Filtering out the brief repeated transitions produced when a mechanical contact opens or closes."
  }
 ],
 "formulas": [
  {
   "n": "ADC step size",
   "f": "LSB = Vref ÷ 2ⁿ",
   "v": "Vref in volts, n number of bits"
  },
  {
   "n": "ADC voltage from reading",
   "f": "Vin = reading × LSB",
   "v": "reading in counts, LSB in volts"
  },
  {
   "n": "PWM average voltage",
   "f": "Vavg = D × Vs",
   "v": "D duty cycle as a fraction, Vs supply"
  },
  {
   "n": "Counter states",
   "f": "states = 2ⁿ",
   "v": "n number of flip-flops (bits)"
  },
  {
   "n": "Hex to decimal",
   "f": "value = 16 × high digit + low digit",
   "v": "Example: 0x3F = 16 × 3 + 15 = 63"
  }
 ]
});
