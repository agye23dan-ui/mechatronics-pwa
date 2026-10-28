window.MECH.register({
 "id": "m11",
 "n": 11,
 "title": "Sensors and Transducers",
 "short": "Sensors and Transducers",
 "group": "Electrical & Electronics",
 "blurb": "Choose, wire, scale and calibrate the sensors that tell a machine what is happening: proximity, position, temperature, pressure, level, flow and force.",
 "outcomes": [
  "Describe sensor characteristics such as range, span, accuracy, linearity, hysteresis and response time",
  "Connect PNP and NPN three-wire sensors correctly to a controller input",
  "Scale a 4–20 mA signal to engineering units and use its live zero for fault detection",
  "Select inductive, capacitive, photoelectric, magnetic and ultrasonic sensors for a job",
  "Calculate counts and distance per count for an incremental encoder",
  "Convert a Pt100 resistance to temperature and explain thermocouple cold junction compensation",
  "Describe how pressure, level, flow and force sensors work and where each is used",
  "Calibrate, wire and fault-find a sensor circuit"
 ],
 "lessons": [
  {
   "id": "m11-l1",
   "title": "Sensor characteristics and output signals",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "A **sensor** detects a physical quantity such as position, temperature or pressure. A **transducer** converts one form of energy to another, and a **transmitter** is a sensor with electronics that produces a standard output signal. In practice the terms overlap. A controller can only act on what it can sense, so choosing and installing the right sensor is as important as the controller itself."
    },
    {
     "t": "h",
     "x": "Key characteristics"
    },
    {
     "t": "ul",
     "items": [
      "**Range and span:** the range is the lowest to highest value the sensor measures, for example 0 to 10 bar; the span is the difference, here 10 bar.",
      "**Accuracy:** how close the reading is to the true value, often quoted as a percentage of span.",
      "**Repeatability:** how closely repeated readings of the same value agree.",
      "**Linearity:** how well the output follows a straight line against the input.",
      "**Hysteresis:** the difference in the reading when the same value is approached from above or from below. For a switching sensor it is the gap between switch-on and switch-off points, which prevents chatter.",
      "**Response time:** how quickly the output follows a change; it matters for fast processes such as counting."
     ]
    },
    {
     "t": "h",
     "x": "Output types"
    },
    {
     "t": "table",
     "head": [
      "Output",
      "Signal",
      "Typical use"
     ],
     "rows": [
      [
       "Switching (digital)",
       "On or off, 24 V DC, PNP or NPN",
       "Proximity sensors, limit switches, level switches"
      ],
      [
       "Analogue current",
       "4 to 20 mA",
       "Process transmitters; resistant to noise and long cables"
      ],
      [
       "Analogue voltage",
       "0 to 10 V",
       "Short runs inside panels, drives, potentiometers"
      ],
      [
       "Pulse or frequency",
       "Pulse trains",
       "Encoders, flow turbines, tachometers"
      ],
      [
       "Digital communication",
       "IO-Link, fieldbus",
       "Smart sensors with parameters and diagnostics"
      ]
     ],
     "cap": "Common sensor output types"
    },
    {
     "t": "h",
     "x": "The 4–20 mA loop"
    },
    {
     "t": "p",
     "x": "The industry's standard analogue signal is a current that varies from 4 mA at the bottom of the range to 20 mA at the top. A current signal does not drop with cable length and is far less affected by electrical noise than a voltage. The 4 mA at zero is called the **live zero**: because a healthy signal never goes below 4 mA, a reading near 0 mA tells the controller the wire is broken or the sensor is dead. A 250 Ω resistor turns the current into 1 to 5 V for an input that measures voltage."
    },
    {
     "t": "svg",
     "alt": "A 24 volt supply, a pressure transmitter and a PLC analogue input with a 250 ohm resistor connected in a single series loop carrying 4 to 20 milliamperes.",
     "cap": "Figure 1: a two-wire 4–20 mA loop: supply, transmitter and input resistor in series",
     "svg": "<svg viewBox=\"0 0 580 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m11-f1-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<rect x=\"30\" y=\"100\" width=\"80\" height=\"80\" class=\"ln fla\"/><text x=\"70\" y=\"136\" class=\"tx txb txc\">24 V DC</text><text x=\"70\" y=\"154\" class=\"txs txc\">supply</text>\n<text x=\"76\" y=\"94\" class=\"txs\">+</text><text x=\"76\" y=\"196\" class=\"txs\">−</text>\n<polyline points=\"70,100 70,50 190,50\" class=\"ln\"/>\n<rect x=\"190\" y=\"25\" width=\"110\" height=\"50\" class=\"ln flb\"/><text x=\"245\" y=\"46\" class=\"tx txb txc\">Transmitter</text><text x=\"245\" y=\"62\" class=\"txs txc\">pressure, 0 to 10 bar</text>\n<polyline points=\"300,50 480,50 480,105\" class=\"ln\"/>\n<line x1=\"330\" y1=\"50\" x2=\"400\" y2=\"50\" class=\"ln\" marker-end=\"url(#m11-f1-arr)\"/>\n<text x=\"365\" y=\"40\" class=\"txs txc\">I = 4 to 20 mA</text>\n<rect x=\"420\" y=\"85\" width=\"140\" height=\"125\" class=\"ln fl\"/><text x=\"490\" y=\"102\" class=\"txs txc txm\">PLC analogue input</text>\n<rect x=\"470\" y=\"110\" width=\"20\" height=\"62\" class=\"ln fla\"/><text x=\"500\" y=\"146\" class=\"txs\">250 Ω</text>\n<line x1=\"480\" y1=\"172\" x2=\"480\" y2=\"232\" class=\"ln\"/>\n<polyline points=\"480,232 70,232 70,180\" class=\"ln\"/>\n<text x=\"445\" y=\"136\" class=\"txs txc\">V =</text><text x=\"445\" y=\"150\" class=\"txs txc\">I × R</text>\n<text x=\"290\" y=\"256\" class=\"txs txm txc\">1 V at 4 mA, 5 V at 20 mA across 250 Ω. One current flows round the loop.</text>\n</svg>"
    },
    {
     "t": "formula",
     "x": "Value = LRV + (I − 4) ÷ 16 × span",
     "where": "I loop current (mA), LRV lower range value (the value at 4 mA), span = upper range value − LRV. The 16 is 20 − 4."
    },
    {
     "t": "worked",
     "title": "Worked example: scaling a pressure signal",
     "problem": "A pressure transmitter ranges from 0 to 10 bar (4 to 20 mA). Find the pressure at 12 mA and the current at 2 bar.",
     "steps": [
      "At 12 mA: (12 − 4) ÷ 16 = 0.5, so pressure = 0.5 × 10 = 5 bar.",
      "For 2 bar: fraction = 2 ÷ 10 = 0.2.",
      "Current = 4 + 0.2 × 16 = 7.2 mA."
     ],
     "answer": "12 mA is 5 bar, and 2 bar is 7.2 mA."
    },
    {
     "t": "worked",
     "title": "Worked example: detecting a broken wire",
     "problem": "A level transmitter is scaled 0 to 4 m on 4 to 20 mA. The PLC reads 2.0 mA. What does this mean, and what level would the signal indicate if it were taken at face value?",
     "steps": [
      "A healthy signal is at least 4 mA, so 2 mA is below the live zero.",
      "At face value the formula gives (2 − 4) ÷ 16 × 4 = −0.5 m, which is impossible."
     ],
     "answer": "The signal is out of range: a broken wire or failed transmitter. Program a fault alarm for currents below about 3.6 mA instead of using the reading."
    },
    {
     "t": "key",
     "items": [
      "Range is the measuring limits; span is upper minus lower.",
      "Hysteresis is a gap between switching points or readings from the two directions.",
      "4–20 mA is noise resistant and the live zero lets the controller detect a fault.",
      "Value = LRV + (I − 4) ÷ 16 × span.",
      "A 250 Ω resistor converts 4–20 mA to 1–5 V."
     ]
    }
   ]
  },
  {
   "id": "m11-l2",
   "title": "Proximity, photoelectric and limit sensors",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Most machine control uses sensors that give a simple yes-or-no signal: a part is present or it is not, a cylinder is out or it is in. They are cheap, rugged and fast, and a technician replaces one very often. Choose the type from the target's material, the distance and the environment."
    },
    {
     "t": "table",
     "head": [
      "Sensor",
      "Detects",
      "Typical sensing distance",
      "Notes"
     ],
     "rows": [
      [
       "Inductive proximity",
       "Metals only",
       "1 to 40 mm",
       "No contact, immune to dust and oil; range depends on the metal"
      ],
      [
       "Capacitive proximity",
       "Metals and non-metals, liquids, powders",
       "2 to 30 mm",
       "Adjustable sensitivity; senses through thin walls, so it is used for level"
      ],
      [
       "Photoelectric: through-beam",
       "Any object that breaks the beam",
       "Up to tens of metres",
       "Separate emitter and receiver; most reliable"
      ],
      [
       "Photoelectric: retro-reflective",
       "Objects interrupting a beam reflected by a mirror",
       "Up to about 10 m",
       "Shiny objects can fool it unless polarised"
      ],
      [
       "Photoelectric: diffuse",
       "Light reflected off the object itself",
       "Up to a few metres",
       "Depends on colour and surface of the target"
      ],
      [
       "Magnetic (reed or Hall)",
       "A magnet on the target",
       "Up to about 10 mm",
       "Used on pneumatic cylinders to sense piston position"
      ],
      [
       "Ultrasonic",
       "Almost any solid or liquid surface",
       "Up to several metres",
       "Measures distance; sound reflects from the surface"
      ]
     ],
     "cap": "Common switching sensors"
    },
    {
     "t": "p",
     "x": "For an **inductive sensor**, the rated sensing distance Sn is measured on a standard mild steel plate. Other metals reduce the distance: stainless steel to about 70 to 90 %, brass to about 40 to 50 %, aluminium to about 35 to 50 % and copper to about 25 to 40 %. For reliable operation, set the sensor so the target is at no more than about 80 % of the rated distance, taking into account the reduction factor."
    },
    {
     "t": "h",
     "x": "Three-wire DC sensors: PNP and NPN"
    },
    {
     "t": "p",
     "x": "A three-wire DC sensor has a **brown (+24 V)**, a **blue (0 V)** and a **black (output)** wire. The output stage is a transistor. In a **PNP** (sourcing) sensor, the transistor connects the output wire to +24 V when the sensor is active, and the input load sits between the output and 0 V. In an **NPN** (sinking) sensor, the transistor connects the output wire to 0 V, and the load sits between +24 V and the output. The sensor type must match the PLC input type. PNP is the common standard in Europe and in much of the world, and NPN is common in Asian-made equipment."
    },
    {
     "t": "svg",
     "alt": "Two three-wire sensor circuits. Left: a PNP sensor whose black wire goes to a PLC input connected to 0 volts. Right: an NPN sensor whose black wire goes to a PLC input connected to plus 24 volts.",
     "cap": "Figure 2: PNP (sourcing) and NPN (sinking) sensor connection",
     "svg": "<svg viewBox=\"0 0 660 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<rect x=\"40\" y=\"95\" width=\"90\" height=\"110\" class=\"ln fl\"/><text x=\"85\" y=\"86\" class=\"tx txb txc\">PNP sensor</text>\n<line x1=\"85\" y1=\"110\" x2=\"130\" y2=\"110\" class=\"ln\"/><line x1=\"85\" y1=\"190\" x2=\"130\" y2=\"190\" class=\"ln\"/><line x1=\"85\" y1=\"110\" x2=\"85\" y2=\"118\" class=\"ln\"/><rect x=\"75\" y=\"118\" width=\"20\" height=\"24\" class=\"ln flg\"/><line x1=\"85\" y1=\"142\" x2=\"85\" y2=\"150\" class=\"ln\"/><line x1=\"85\" y1=\"150\" x2=\"130\" y2=\"150\" class=\"ln\"/>\n<text x=\"134\" y=\"126\" class=\"txs\">BN +</text><text x=\"134\" y=\"144\" class=\"txs\">BK</text><text x=\"134\" y=\"184\" class=\"txs\">BU 0 V</text>\n<line x1=\"130\" y1=\"110\" x2=\"160\" y2=\"110\" class=\"ln\"/><line x1=\"160\" y1=\"110\" x2=\"160\" y2=\"40\" class=\"ln\"/><circle cx=\"160\" cy=\"40\" r=\"3\" class=\"fi\"/>\n<line x1=\"130\" y1=\"190\" x2=\"160\" y2=\"190\" class=\"ln\"/><line x1=\"160\" y1=\"190\" x2=\"160\" y2=\"260\" class=\"ln\"/><circle cx=\"160\" cy=\"260\" r=\"3\" class=\"fi\"/>\n<line x1=\"20\" y1=\"40\" x2=\"300\" y2=\"40\" class=\"lnr\"/><line x1=\"20\" y1=\"260\" x2=\"300\" y2=\"260\" class=\"lnb\"/>\n<text x=\"20\" y=\"32\" class=\"txs\">+24 V</text><text x=\"20\" y=\"276\" class=\"txs\">0 V</text><line x1=\"130\" y1=\"150\" x2=\"240\" y2=\"150\" class=\"ln\"/><line x1=\"240\" y1=\"150\" x2=\"240\" y2=\"165\" class=\"ln\"/><rect x=\"228\" y=\"165\" width=\"24\" height=\"50\" class=\"ln fla\"/><line x1=\"240\" y1=\"215\" x2=\"240\" y2=\"260\" class=\"ln\"/><circle cx=\"240\" cy=\"260\" r=\"3\" class=\"fi\"/><text x=\"262\" y=\"195\" class=\"txs\">PLC input</text><rect x=\"360\" y=\"95\" width=\"90\" height=\"110\" class=\"ln fl\"/><text x=\"405\" y=\"86\" class=\"tx txb txc\">NPN sensor</text>\n<line x1=\"405\" y1=\"110\" x2=\"450\" y2=\"110\" class=\"ln\"/><line x1=\"405\" y1=\"190\" x2=\"450\" y2=\"190\" class=\"ln\"/><line x1=\"405\" y1=\"150\" x2=\"405\" y2=\"158\" class=\"ln\"/><rect x=\"395\" y=\"158\" width=\"20\" height=\"24\" class=\"ln flg\"/><line x1=\"405\" y1=\"182\" x2=\"405\" y2=\"190\" class=\"ln\"/><line x1=\"405\" y1=\"150\" x2=\"450\" y2=\"150\" class=\"ln\"/>\n<text x=\"454\" y=\"126\" class=\"txs\">BN +</text><text x=\"454\" y=\"144\" class=\"txs\">BK</text><text x=\"454\" y=\"184\" class=\"txs\">BU 0 V</text>\n<line x1=\"450\" y1=\"110\" x2=\"480\" y2=\"110\" class=\"ln\"/><line x1=\"480\" y1=\"110\" x2=\"480\" y2=\"40\" class=\"ln\"/><circle cx=\"480\" cy=\"40\" r=\"3\" class=\"fi\"/>\n<line x1=\"450\" y1=\"190\" x2=\"480\" y2=\"190\" class=\"ln\"/><line x1=\"480\" y1=\"190\" x2=\"480\" y2=\"260\" class=\"ln\"/><circle cx=\"480\" cy=\"260\" r=\"3\" class=\"fi\"/>\n<line x1=\"340\" y1=\"40\" x2=\"620\" y2=\"40\" class=\"lnr\"/><line x1=\"340\" y1=\"260\" x2=\"620\" y2=\"260\" class=\"lnb\"/>\n<text x=\"340\" y=\"32\" class=\"txs\">+24 V</text><text x=\"340\" y=\"276\" class=\"txs\">0 V</text><line x1=\"450\" y1=\"150\" x2=\"560\" y2=\"150\" class=\"ln\"/><line x1=\"560\" y1=\"150\" x2=\"560\" y2=\"110\" class=\"ln\"/><rect x=\"548\" y=\"60\" width=\"24\" height=\"50\" class=\"ln fla\"/><line x1=\"560\" y1=\"60\" x2=\"560\" y2=\"40\" class=\"ln\"/><circle cx=\"560\" cy=\"40\" r=\"3\" class=\"fi\"/><text x=\"582\" y=\"90\" class=\"txs\">PLC</text><text x=\"582\" y=\"104\" class=\"txs\">input</text>\n<text x=\"170\" y=\"294\" class=\"txs txc\">PNP switches +24 V onto BK (sourcing)</text>\n<text x=\"490\" y=\"294\" class=\"txs txc\">NPN switches BK to 0 V (sinking)</text>\n</svg>"
    },
    {
     "t": "ul",
     "items": [
      "**Normally open (NO)** means the output is off until the target is detected; **normally closed (NC)** means it is on until detected. NC outputs are often used for safety-related or fail-safe checking, since a broken wire or dead sensor also gives an \"off\" signal that the controller can treat as a fault.",
      "Mechanical **limit switches** are robust and cheap, with a lever or plunger and a snap contact. They need regular checking because the lever and contacts wear.",
      "Sensors have an LED that shows the output state; use it when commissioning, but remember that a lit LED does not prove the signal reaches the controller."
     ]
    },
    {
     "t": "tip",
     "x": "When replacing a failed sensor, match the type (inductive, PNP, NO, M12 or M18 thread, connector, sensing range). Fitting an NPN where a PNP belongs gives no signal and no damage, but it wastes time."
    },
    {
     "t": "warn",
     "x": "Do not rely on an ordinary sensor for a safety function such as guard door detection. Use certified safety switches and safety relays (ISO 13849-1, Module 2)."
    },
    {
     "t": "key",
     "items": [
      "Inductive sensors detect metal only; the range reduces for non-steel metals.",
      "Capacitive sensors detect almost anything including liquids; photoelectric types detect by light.",
      "PNP sensors switch +24 V to the output; NPN sensors switch 0 V.",
      "The sensor type must match the PLC input.",
      "Use NC contacts for fail-safe detection of a broken wire."
     ]
    }
   ]
  },
  {
   "id": "m11-l3",
   "title": "Encoders and position measurement",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "Knowing exactly where a shaft or a load is, or how fast it is moving, is central to machine control, from conveyors and cutting machines to robots. **Encoders** convert shaft rotation into electrical signals. Linear scales do the same for straight-line movement."
    },
    {
     "t": "h",
     "x": "Incremental encoders"
    },
    {
     "t": "p",
     "x": "An incremental encoder has a disc with many fine slots that pass between a light source and a detector, producing a train of pulses as the shaft turns. It gives two channels, **A and B**, offset by a quarter of a pulse period (90°), and a **Z** (index) pulse once per revolution. The number of A pulses per revolution is the **PPR** or line count, for example 1024."
    },
    {
     "t": "svg",
     "alt": "Waveforms of encoder channels A, B and Z. Channel B is offset by a quarter period from A, and Z gives a single pulse. Numbers 1 to 4 mark the four edges of one cycle.",
     "cap": "Figure 3: incremental encoder channels A, B and the index pulse Z",
     "svg": "<svg viewBox=\"0 0 600 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<text x=\"14\" y=\"82\" class=\"tx txb\">A</text><text x=\"14\" y=\"142\" class=\"tx txb\">B</text><text x=\"14\" y=\"212\" class=\"tx txb\">Z</text>\n<polyline points=\"60,90 100,90 100,60 140,60 140,90 180,90 180,60 220,60 220,90 260,90 260,60 300,60 300,90 340,90 340,60 380,60 380,90 420,90 420,60 460,60 460,90 500,90 500,60 540,60 540,90 560,90\" class=\"lnb\"/><polyline points=\"60,150 120,150 120,120 160,120 160,150 200,150 200,120 240,120 240,150 280,150 280,120 320,120 320,150 360,150 360,120 400,120 400,150 440,150 440,120 480,120 480,150 520,150 520,120 560,120\" class=\"lna\"/>\n<polyline points=\"60,215 330,215 330,185 350,185 350,215 560,215\" class=\"lng\"/>\n<line x1=\"100\" y1=\"40\" x2=\"100\" y2=\"165\" class=\"lnm ln1 dash\"/><line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"165\" class=\"lnm ln1 dash\"/><line x1=\"140\" y1=\"40\" x2=\"140\" y2=\"165\" class=\"lnm ln1 dash\"/><line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"165\" class=\"lnm ln1 dash\"/><line x1=\"180\" y1=\"40\" x2=\"180\" y2=\"165\" class=\"lnm ln1 dash\"/>\n<text x=\"100\" y=\"36\" class=\"txs txc\">1</text><text x=\"120\" y=\"36\" class=\"txs txc\">2</text><text x=\"140\" y=\"36\" class=\"txs txc\">3</text><text x=\"160\" y=\"36\" class=\"txs txc\">4</text>\n<text x=\"200\" y=\"22\" class=\"txs\">4 edges per cycle = 4 counts with ×4 decoding</text>\n<line x1=\"100\" y1=\"248\" x2=\"180\" y2=\"248\" class=\"ln1\"/><text x=\"140\" y=\"262\" class=\"txs txc\">one cycle (one PPR)</text>\n<text x=\"340\" y=\"180\" class=\"txs\">Z marker, once per revolution</text>\n<text x=\"590\" y=\"240\" class=\"txs txe\">Turning one way, A leads B by 90°.</text>\n<text x=\"590\" y=\"254\" class=\"txs txe\">The other way, B leads A.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "Which channel leads tells the controller the **direction**. A counter that reads all four edges of A and B in each cycle (×4 decoding) has four times the resolution of the PPR figure. The controller counts pulses to know position and counts them per second to find speed. Because it only counts changes, it loses its position if power is lost or pulses are missed, so the axis must be **homed**, usually to a sensor and the Z pulse, after start-up."
    },
    {
     "t": "worked",
     "title": "Worked example: encoder resolution",
     "problem": "A 1024 PPR encoder is on a roller of diameter 100 mm, read ×4 by the controller. Find the counts per revolution and the distance for one count.",
     "steps": [
      "Counts per revolution = 1024 × 4 = 4096.",
      "Roller circumference = π × 100 = 314.16 mm.",
      "Distance per count = 314.16 ÷ 4096 = 0.0767 mm."
     ],
     "answer": "4096 counts per revolution; each count equals about 0.077 mm of travel."
    },
    {
     "t": "worked",
     "title": "Worked example: speed from pulses",
     "problem": "The same controller counts 20 480 pulses in one second. What is the roller speed in rev/min and the belt speed?",
     "steps": [
      "Revolutions per second = 20 480 ÷ 4096 = 5 rev/s.",
      "Speed = 5 × 60 = 300 rpm.",
      "Belt speed = 5 × 0.31416 m = 1.57 m/s."
     ],
     "answer": "The roller turns at 300 rpm and the belt moves at about 1.57 m/s."
    },
    {
     "t": "h",
     "x": "Absolute encoders"
    },
    {
     "t": "p",
     "x": "An **absolute encoder** gives a unique code for every shaft position, so it knows its position the moment it is switched on, with no homing. A **single-turn** type gives position within one revolution. A **multi-turn** type also counts revolutions, using gears or a battery-free electronic counter. Outputs are usually serial (SSI, BiSS) or fieldbus (PROFINET, EtherCAT); older types use parallel Gray code, where only one bit changes between positions to avoid misreads."
    },
    {
     "t": "table",
     "head": [
      "Type",
      "Knows position at power-up?",
      "Cost",
      "Typical use"
     ],
     "rows": [
      [
       "Incremental encoder",
       "No, needs homing",
       "Low",
       "Speed feedback, conveyors, motors"
      ],
      [
       "Absolute single-turn",
       "Yes, within one revolution",
       "Medium",
       "Rotary tables, valves"
      ],
      [
       "Absolute multi-turn",
       "Yes, over many turns",
       "Higher",
       "Cranes, robots, linear axes"
      ],
      [
       "Resolver",
       "Yes, within one revolution",
       "Medium",
       "Rugged servo feedback in harsh conditions"
      ]
     ],
     "cap": "Position feedback devices"
    },
    {
     "t": "h",
     "x": "Practical points"
    },
    {
     "t": "ul",
     "items": [
      "Use shielded twisted-pair cable earthed at one end, and keep encoder cables away from motor cables.",
      "Align and couple the encoder with a flexible coupling so shaft misalignment does not damage the bearings.",
      "An encoder reading that jumps or drifts is nearly always a wiring, shield or coupling problem, not an electrical fault in the encoder."
     ]
    },
    {
     "t": "key",
     "items": [
      "An incremental encoder gives pulses on channels A and B, 90° apart, plus Z once per revolution.",
      "A leads B in one direction and B leads A in the other.",
      "×4 decoding gives four counts per cycle: counts per revolution = PPR × 4.",
      "Incremental encoders need homing after power-up; absolute encoders do not.",
      "Shield and couple encoder cables and shafts carefully."
     ]
    }
   ]
  },
  {
   "id": "m11-l4",
   "title": "Temperature, pressure, level, flow and force sensors",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "Process and machine monitoring uses analogue sensors that measure a quantity continuously. This lesson covers the main types you will meet and how to read their outputs."
    },
    {
     "t": "h",
     "x": "Temperature"
    },
    {
     "t": "ul",
     "items": [
      "**Thermocouple:** two different metals joined at the measuring tip generate a small voltage that depends on the temperature difference between the tip and the cold end. Type K (nickel-chromium/nickel-aluminium) covers about −200 to 1250 °C and produces roughly 41 µV per °C. Because the voltage depends on the difference, the instrument must measure the cold-junction temperature and compensate; this is **cold junction compensation**. Use the correct thermocouple extension cable, polarity and type.",
      "**RTD (resistance temperature detector):** a platinum element whose resistance rises with temperature. The Pt100 has 100 Ω at 0 °C and about 0.385 Ω per °C. It is accurate and stable, and can be used up to about 600 °C.",
      "**Thermistor:** a semiconductor whose resistance changes strongly with temperature; the NTC type falls as it warms. It is cheap and very sensitive over a narrow range, used in motors and electronics for protection."
     ]
    },
    {
     "t": "formula",
     "x": "T ≈ (R − 100) ÷ 0.385",
     "where": "T temperature in °C for a Pt100 up to a few hundred degrees, R measured resistance in ohms. Use the standard tables for accuracy."
    },
    {
     "t": "worked",
     "title": "Worked example: Pt100 reading",
     "problem": "A Pt100 sensor measures 119.4 Ω. What is the temperature, and what would 138.5 Ω mean?",
     "steps": [
      "T = (119.4 − 100) ÷ 0.385 = 19.4 ÷ 0.385 = 50.4 °C.",
      "For 138.5 Ω: (138.5 − 100) ÷ 0.385 = 100 °C."
     ],
     "answer": "119.4 Ω is about 50 °C and 138.5 Ω is 100 °C. With a two-wire connection, cable resistance adds error, so use three or four wires for accuracy."
    },
    {
     "t": "h",
     "x": "Pressure"
    },
    {
     "t": "p",
     "x": "A pressure transducer usually has a diaphragm that bends under pressure and strain gauges or a capacitive element to measure the bend. **Gauge pressure** is relative to the atmosphere; **absolute pressure** is relative to a vacuum; **differential pressure** is the difference between two points, used across filters and for flow and level. Output is normally 4–20 mA. A pressure switch gives an on/off signal at a set point."
    },
    {
     "t": "h",
     "x": "Level"
    },
    {
     "t": "ul",
     "items": [
      "**Float switch:** simple on/off level detection in tanks and sumps.",
      "**Hydrostatic (pressure) sensor:** pressure at the bottom of a tank is p = ρ × g × h, so measuring pressure gives level.",
      "**Ultrasonic and radar:** measure the time for a pulse to reflect from the surface.",
      "**Capacitive probe:** the capacitance changes with the level of the liquid."
     ]
    },
    {
     "t": "h",
     "x": "Flow"
    },
    {
     "t": "p",
     "x": "**Differential-pressure** flow meters measure the pressure drop across an orifice plate. **Magnetic (electromagnetic)** meters measure the voltage induced in a conductive liquid flowing through a magnetic field, with no moving parts. **Turbine** and **vortex** meters give a pulse frequency proportional to flow. **Coriolis** meters measure mass flow directly. A suitable type depends on the fluid, accuracy and cost."
    },
    {
     "t": "h",
     "x": "Force and weight"
    },
    {
     "t": "p",
     "x": "A **strain gauge** is a thin metal foil whose resistance changes slightly when it is stretched. Gauges bonded to a metal beam form a **load cell**. The output is quoted in mV/V of excitation: a 2 mV/V cell with a 10 V excitation gives 20 mV at full load, so it needs an amplifier or a special weighing module."
    },
    {
     "t": "formula",
     "x": "Output = sensitivity × excitation × (load ÷ rated load)",
     "where": "Sensitivity in mV/V, excitation in volts. Example: 2 mV/V × 10 V = 20 mV at full scale."
    },
    {
     "t": "key",
     "items": [
      "A thermocouple needs cold junction compensation; a Pt100 changes about 0.385 Ω per °C from 100 Ω at 0 °C.",
      "Pressure may be gauge, absolute or differential; most transmitters output 4–20 mA.",
      "Level can be found from float, hydrostatic pressure, ultrasonic, radar or capacitance.",
      "Flow meters include differential-pressure, magnetic, turbine, vortex and Coriolis types.",
      "A load cell outputs a few mV per volt of excitation and needs an amplifier."
     ]
    }
   ]
  },
  {
   "id": "m11-l5",
   "title": "Wiring, calibration and fault finding",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "Most sensor faults are not in the sensor. Cables, connectors, screens, loose terminals, dirt, moisture and incorrect settings cause the majority of the problems. A systematic approach finds them faster than replacing parts at random."
    },
    {
     "t": "h",
     "x": "Good installation practice"
    },
    {
     "t": "ul",
     "items": [
      "Fit sensors with the right mounting and alignment, and protect them from knocks, swarf and high-pressure washdown with guards and the correct IP rating.",
      "Run signal cables separately from power cables; where they must cross, cross at right angles. Use screened twisted-pair cable for analogue signals and earth the screen at one end only, normally at the controller.",
      "Use cable glands and connectors rated for the environment, and keep connector locking rings tight.",
      "Label both ends of every cable and keep the wiring diagram up to date (Module 3)."
     ]
    },
    {
     "t": "ghana",
     "x": "High humidity, heat, dust and heavy rain are common on many sites, so choose sensors rated IP67 or better for exposed locations, use sealed glands, and avoid mounting transmitters in direct sun. Condensation inside an enclosure is a frequent cause of intermittent faults."
    },
    {
     "t": "h",
     "x": "Calibration"
    },
    {
     "t": "p",
     "x": "**Calibration** checks and adjusts a measuring instrument against a known reference. For an analogue transmitter, the technician applies known inputs and records the output."
    },
    {
     "t": "steps",
     "title": "Basic five-point calibration of a pressure transmitter",
     "items": [
      "Isolate the transmitter from the process and vent it safely.",
      "Connect a pressure source and a reference gauge or calibrator, and a milliamp meter in the loop.",
      "Apply 0 %, 25 %, 50 %, 75 % and 100 % of range, and record the output current at each as the **as-found** reading.",
      "Compare with the expected 4, 8, 12, 16 and 20 mA. If the error is outside tolerance, adjust zero (at 0 %) then span (at 100 %) and repeat.",
      "Record the **as-left** readings, sign and date the calibration record, and restore the process connection."
     ]
    },
    {
     "t": "table",
     "head": [
      "Percent of range",
      "Expected output",
      "Example tolerance (±0.25 % of span)"
     ],
     "rows": [
      [
       "0 %",
       "4.00 mA",
       "3.96 to 4.04 mA"
      ],
      [
       "25 %",
       "8.00 mA",
       "7.96 to 8.04 mA"
      ],
      [
       "50 %",
       "12.00 mA",
       "11.96 to 12.04 mA"
      ],
      [
       "75 %",
       "16.00 mA",
       "15.96 to 16.04 mA"
      ],
      [
       "100 %",
       "20.00 mA",
       "19.96 to 20.04 mA"
      ]
     ],
     "cap": "Expected loop currents for a calibration check"
    },
    {
     "t": "h",
     "x": "Fault finding"
    },
    {
     "t": "steps",
     "title": "When a sensor input is wrong",
     "items": [
      "Check the signal in the controller's online view: is it a fixed value, a noisy value or off-scale?",
      "Check the simple things first: sensor LED, dirt or misalignment, wrong target material, loose connector, damaged cable.",
      "Measure the supply voltage at the sensor terminals; a drop from 24 V suggests a poor connection or overloaded supply.",
      "For a 4–20 mA loop, put a milliamp meter in series (or use a clamp-on mA meter) to see the loop current, which should be between 4 and 20 mA.",
      "Simulate the signal with a loop calibrator at the controller end. If the controller reads it correctly, the fault is in the field wiring or sensor; if not, it is the input channel or configuration.",
      "Replace the suspected part and confirm the fix by observing the value in the controller."
     ]
    },
    {
     "t": "warn",
     "x": "Before opening a loop or a sensor terminal inside a panel, check that the area is safe and the circuit is isolated if mains voltage is present. Never break the loop of a transmitter in a hazardous area without a permit, as the energy released could cause ignition."
    },
    {
     "t": "key",
     "items": [
      "Most sensor faults are in cables, connectors, mounting and settings, not the sensor itself.",
      "Run analogue signals in screened twisted-pair cable, earthed at one end, away from power cables.",
      "Calibration records as-found and as-left readings at several points.",
      "To locate a fault, check the field device, the supply, the cable, then the input channel.",
      "Use IP-rated devices and sealed glands against moisture and dust."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m11-q1",
   "q": "A pressure transmitter spans 0 to 10 bar on 4 to 20 mA. What pressure does 12 mA represent?",
   "opts": [
    "5 bar",
    "6 bar",
    "7.5 bar",
    "4 bar"
   ],
   "a": 0,
   "why": "(12 − 4) ÷ 16 = 0.5 of the span, which is 5 bar."
  },
  {
   "id": "m11-q2",
   "q": "A 4–20 mA transmitter suddenly reads 0 mA at the PLC. What is the most likely explanation?",
   "opts": [
    "The process has fallen to its lowest value",
    "A broken wire or dead sensor",
    "The signal has picked up a high noise level",
    "The 24 V supply voltage is much too high"
   ],
   "a": 1,
   "why": "A healthy 4–20 mA signal never drops to 0 mA. The live zero lets the controller recognise an open loop or dead device."
  },
  {
   "id": "m11-q3",
   "q": "What voltage appears across a 250 Ω resistor at 20 mA?",
   "opts": [
    "2 V",
    "10 V",
    "1 V",
    "5 V"
   ],
   "a": 3,
   "why": "V = I × R = 0.020 × 250 = 5 V. At 4 mA the voltage is 1 V."
  },
  {
   "id": "m11-q4",
   "q": "An inductive sensor has a rated range of 8 mm on steel. Which target will normally be detected at the shortest distance?",
   "opts": [
    "Aluminium",
    "Mild steel",
    "Stainless steel at 80 %",
    "A steel plate larger than the sensor"
   ],
   "a": 0,
   "why": "Non-ferrous metals reduce the sensing range. Aluminium typically reduces it to about 35 to 50 % of the rated range."
  },
  {
   "id": "m11-q5",
   "q": "In a PNP three-wire sensor, what does the output do when the target is detected?",
   "opts": [
    "Connects the black wire to 0 V",
    "Opens the supply to the sensor",
    "Switches black to +24 V",
    "Sends a 4–20 mA signal out"
   ],
   "a": 2,
   "why": "A PNP output sources current: the output wire is switched to the positive supply."
  },
  {
   "id": "m11-q6",
   "q": "Why are normally closed sensor contacts often used on fail-safe circuits?",
   "opts": [
    "They are cheaper to buy and fit",
    "They use much less energy overall",
    "They last longer than other contacts",
    "A wire break looks like a detection"
   ],
   "a": 3,
   "why": "With a normally closed circuit a wire break gives an off signal, the same as the detection, so the controller reacts instead of silently missing the fault."
  },
  {
   "id": "m11-q7",
   "q": "A 1024 PPR encoder is decoded ×4. How many counts per revolution does the controller get?",
   "opts": [
    "1024 counts (the PPR)",
    "4096 counts",
    "2048 counts (×2)",
    "256 counts (÷4)"
   ],
   "a": 1,
   "why": "Counting all four edges of channels A and B in every cycle gives 4 × 1024 = 4096 counts per revolution."
  },
  {
   "id": "m11-q8",
   "q": "A 100 mm diameter roller carries a 1024 PPR encoder decoded ×4. What distance does one count represent?",
   "opts": [
    "0.31 mm per count",
    "0.77 mm per count",
    "0.0307 mm per count",
    "0.0767 mm"
   ],
   "a": 3,
   "why": "Circumference = π × 100 = 314.16 mm. Divided by 4096 counts gives 0.0767 mm per count."
  },
  {
   "id": "m11-q9",
   "q": "What advantage does an absolute encoder have over an incremental encoder?",
   "opts": [
    "It is always much cheaper to buy",
    "It knows its position at power-up",
    "It needs no cable to the controller",
    "It cannot be affected by vibration"
   ],
   "a": 1,
   "why": "An absolute encoder outputs a unique code for each position, so power loss does not lose the position."
  },
  {
   "id": "m11-q10",
   "q": "A Pt100 sensor measures 119.4 Ω. Approximately what is the temperature?",
   "opts": [
    "19 °C",
    "100 °C",
    "50 °C",
    "194 °C"
   ],
   "a": 2,
   "why": "T = (119.4 − 100) ÷ 0.385 = 50.4 °C."
  },
  {
   "id": "m11-q11",
   "q": "Why does a thermocouple measuring circuit need cold junction compensation?",
   "opts": [
    "The voltage depends on tip-to-cold-end difference",
    "Because thermocouples are not made of metal at all",
    "To reduce the length of cable that is needed",
    "To convert the signal into a 4–20 mA output"
   ],
   "a": 0,
   "why": "A thermocouple generates a voltage that depends on the difference between the tip and the reference end, so the reference temperature must be measured and added."
  },
  {
   "id": "m11-q12",
   "q": "A load cell is rated 2 mV/V and is excited with 10 V. What is its output at full load?",
   "opts": [
    "2 mV",
    "200 mV",
    "0.2 mV",
    "20 mV"
   ],
   "a": 3,
   "why": "Output = 2 mV/V × 10 V = 20 mV at rated load."
  },
  {
   "id": "m11-q13",
   "q": "When calibrating a transmitter, what is the as-found reading?",
   "opts": [
    "The reading after adjustment is complete",
    "Reading before adjustment",
    "The factory test result for the device",
    "The average of all the readings taken"
   ],
   "a": 1,
   "why": "As-found records the instrument's state before adjustment, which shows how far it had drifted. As-left is the result after adjustment."
  },
  {
   "id": "m11-q14",
   "q": "A PLC input reads a sensor value that is fixed and incorrect. A loop calibrator at the PLC end gives the right value in the PLC. Where is the fault?",
   "opts": [
    "In the PLC input module itself",
    "In the PLC program logic only",
    "In the field wiring or device",
    "In the 24 V supply to the PLC CPU"
   ],
   "a": 2,
   "why": "If the controller reads a simulated signal correctly, the input channel and configuration work, so the fault lies in the cable or the field device."
  }
 ],
 "cards": [
  {
   "f": "Define range and span.",
   "b": "Range is the lowest to highest value measured; span is upper minus lower."
  },
  {
   "f": "What is hysteresis in a switching sensor?",
   "b": "The gap between the switch-on and switch-off points, preventing chatter."
  },
  {
   "f": "Why is a 4–20 mA signal used?",
   "b": "It resists noise and cable length, and the live zero at 4 mA lets a broken wire be detected."
  },
  {
   "f": "Scaling formula for 4–20 mA?",
   "b": "Value = LRV + (I − 4) ÷ 16 × span."
  },
  {
   "f": "Inductive sensor detects what?",
   "b": "Metal targets only; range is shorter for aluminium, brass and copper than for steel."
  },
  {
   "f": "What can a capacitive sensor detect?",
   "b": "Metals and non-metals, liquids and powders, including through thin walls."
  },
  {
   "f": "PNP versus NPN?",
   "b": "PNP switches +24 V to the output (sourcing). NPN switches 0 V to the output (sinking)."
  },
  {
   "f": "Wire colours of a three-wire sensor?",
   "b": "Brown +24 V, blue 0 V, black output."
  },
  {
   "f": "What do encoder channels A and B tell the controller?",
   "b": "Count (pulses) and direction: which channel leads indicates the direction of rotation."
  },
  {
   "f": "Counts per revolution with ×4 decoding?",
   "b": "PPR × 4. A 1024 PPR encoder gives 4096 counts."
  },
  {
   "f": "Why does an incremental encoder need homing?",
   "b": "It only counts changes, so position is lost when power is off."
  },
  {
   "f": "Pt100 characteristics?",
   "b": "100 Ω at 0 °C, rising about 0.385 Ω per °C."
  },
  {
   "f": "Why use three or four wires on an RTD?",
   "b": "To cancel the error caused by lead resistance."
  },
  {
   "f": "What is as-found and as-left in calibration?",
   "b": "As-found is the reading before adjustment; as-left is the reading after adjustment."
  }
 ],
 "terms": [
  {
   "t": "Span",
   "d": "The difference between the upper and lower limits of a measuring range."
  },
  {
   "t": "Hysteresis",
   "d": "The difference in output or switching point depending on whether the input is rising or falling."
  },
  {
   "t": "Live zero",
   "d": "The use of 4 mA rather than 0 mA for the bottom of the range so that a broken loop can be detected."
  },
  {
   "t": "Transmitter",
   "d": "A sensor with electronics that outputs a standard signal such as 4–20 mA."
  },
  {
   "t": "PNP",
   "d": "A sensor output type that switches the positive supply to the output wire (sourcing)."
  },
  {
   "t": "NPN",
   "d": "A sensor output type that switches 0 V to the output wire (sinking)."
  },
  {
   "t": "Quadrature",
   "d": "Two signals 90° apart used by an encoder to indicate direction as well as movement."
  },
  {
   "t": "PPR",
   "d": "Pulses per revolution, the line count of an incremental encoder."
  },
  {
   "t": "Thermocouple",
   "d": "A temperature sensor made from two dissimilar metals that generates a voltage related to temperature."
  },
  {
   "t": "RTD",
   "d": "Resistance temperature detector: a platinum element whose resistance rises with temperature."
  },
  {
   "t": "Load cell",
   "d": "A force sensor made from strain gauges on a metal body, giving an output in mV/V."
  }
 ],
 "formulas": [
  {
   "n": "4–20 mA scaling",
   "f": "Value = LRV + (I − 4) ÷ 16 × span",
   "v": "I in mA, LRV = value at 4 mA"
  },
  {
   "n": "Voltage across input resistor",
   "f": "V = I × R",
   "v": "250 Ω gives 1 V to 5 V"
  },
  {
   "n": "Encoder counts per revolution",
   "f": "counts = PPR × 4",
   "v": "×4 quadrature decoding"
  },
  {
   "n": "Distance per count",
   "f": "d = π × D ÷ counts per rev",
   "v": "D roller diameter in mm"
  },
  {
   "n": "Pt100 temperature",
   "f": "T ≈ (R − 100) ÷ 0.385",
   "v": "R in ohms, T in °C"
  },
  {
   "n": "Load cell output",
   "f": "V = S × Vexc × load ÷ rated",
   "v": "S in mV/V, Vexc in V"
  }
 ]
});
