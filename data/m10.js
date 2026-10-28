window.MECH.register({
 "id": "m10",
 "n": 10,
 "title": "Power Electronics, Soft Starters and Variable Speed Drives",
 "short": "Power Electronics, VSDs",
 "group": "Electrical & Electronics",
 "blurb": "Understand thyristors, IGBTs, soft starters and variable speed drives, and set up, wire and troubleshoot a drive on an induction motor.",
 "outcomes": [
  "Describe how a thyristor, TRIAC, MOSFET and IGBT switch power and where each is used",
  "Explain phase control and calculate its effect qualitatively from the firing angle",
  "Compare direct-on-line, star-delta, soft-start and variable speed drive starting methods",
  "Describe the rectifier, DC bus and inverter stages of a variable speed drive",
  "Calculate output voltage and motor speed at a chosen frequency and estimate energy saving using the affinity laws",
  "Set the basic parameters of a drive from a motor nameplate and wire its control terminals",
  "Choose cabling and earthing practice that limits electromagnetic interference",
  "Diagnose common drive faults and carry out safe first-line checks"
 ],
 "lessons": [
  {
   "id": "m10-l1",
   "title": "Power semiconductors and solid-state switching",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "Power electronics uses semiconductor switches to control large amounts of electrical power with high efficiency. Instead of wasting energy as heat in a resistor, a power electronic circuit switches fully on or fully off, so little power is lost in the switch itself. This idea, introduced with transistors in Module 8, is the basis of soft starters, drives, welders, chargers and solar inverters."
    },
    {
     "t": "table",
     "head": [
      "Device",
      "Control",
      "Switching",
      "Typical use"
     ],
     "rows": [
      [
       "Power diode",
       "None, conducts forward",
       "Rectifies only",
       "Rectifier front end of a drive"
      ],
      [
       "Thyristor (SCR)",
       "Gate pulse turns on; stays on until current falls to zero",
       "Turn-on controlled",
       "Soft starters, large DC drives, phase control"
      ],
      [
       "TRIAC",
       "Gate pulse, either direction of AC",
       "Turn-on controlled",
       "Lamp dimmers, small heater and motor control"
      ],
      [
       "Power MOSFET",
       "Gate voltage",
       "Very fast on and off",
       "Low voltage, high frequency supplies, motor drives under 200 V"
      ],
      [
       "IGBT",
       "Gate voltage",
       "Fast on and off, high voltage and current",
       "Variable speed drives, inverters, welders"
      ]
     ],
     "cap": "Power semiconductor devices"
    },
    {
     "t": "h",
     "x": "The thyristor and TRIAC"
    },
    {
     "t": "p",
     "x": "A **thyristor**, or silicon controlled rectifier (SCR), has an anode, a cathode and a gate. A short pulse on the gate switches it on, and it then **latches**: it stays on even after the gate pulse ends, until the current through it falls below a small level called the **holding current**. In an AC circuit, this happens naturally at the end of each half-cycle, when the current passes through zero. A **TRIAC** works like two thyristors in opposite directions and so controls both halves of the AC cycle."
    },
    {
     "t": "h",
     "x": "Phase control"
    },
    {
     "t": "p",
     "x": "By switching a thyristor or TRIAC on part-way through each half-cycle, we control how much of the wave reaches the load. The delay is the **firing angle** α, measured in degrees from the start of the half-cycle. A small α passes nearly the full wave and delivers high power; a large α passes only the end of the wave and gives little power. Dimmers, heater controllers and soft starters work this way."
    },
    {
     "t": "svg",
     "alt": "One cycle of an AC sine wave in which the shaded portions begin at 60 and 240 degrees, showing the part of each half-cycle delivered to the load when the gate fires at a firing angle of 60 degrees.",
     "cap": "Figure 1: phase control with a firing angle of 60°",
     "svg": "<svg viewBox=\"0 0 600 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m10-f1-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<polygon points=\"140.0,120.0 140.0,59.4 146.7,56.6 153.3,54.2 160.0,52.4 166.7,51.1 173.3,50.3 180.0,50.0 186.7,50.3 193.3,51.1 200.0,52.4 206.7,54.2 213.3,56.6 220.0,59.4 226.7,62.7 233.3,66.4 240.0,70.5 246.7,75.0 253.3,79.8 260.0,85.0 266.7,90.4 273.3,96.1 280.0,101.9 286.7,107.8 293.3,113.9 300.0,120.0 300.0,120.0\" class=\"fla\"/>\n<polygon points=\"380.0,120.0 380.0,180.6 386.7,183.4 393.3,185.8 400.0,187.6 406.7,188.9 413.3,189.7 420.0,190.0 426.7,189.7 433.3,188.9 440.0,187.6 446.7,185.8 453.3,183.4 460.0,180.6 466.7,177.3 473.3,173.6 480.0,169.5 486.7,165.0 493.3,160.2 500.0,155.0 506.7,149.6 513.3,143.9 520.0,138.1 526.7,132.2 533.3,126.1 540.0,120.0 540.0,120.0\" class=\"fla\"/>\n<line x1=\"40\" y1=\"120\" x2=\"570\" y2=\"120\" class=\"ln1 lnm\"/>\n<polyline points=\"60.0,120.0 66.7,113.9 73.3,107.8 80.0,101.9 86.7,96.1 93.3,90.4 100.0,85.0 106.7,79.8 113.3,75.0 120.0,70.5 126.7,66.4 133.3,62.7 140.0,59.4 146.7,56.6 153.3,54.2 160.0,52.4 166.7,51.1 173.3,50.3 180.0,50.0 186.7,50.3 193.3,51.1 200.0,52.4 206.7,54.2 213.3,56.6 220.0,59.4 226.7,62.7 233.3,66.4 240.0,70.5 246.7,75.0 253.3,79.8 260.0,85.0 266.7,90.4 273.3,96.1 280.0,101.9 286.7,107.8 293.3,113.9 300.0,120.0 306.7,126.1 313.3,132.2 320.0,138.1 326.7,143.9 333.3,149.6 340.0,155.0 346.7,160.2 353.3,165.0 360.0,169.5 366.7,173.6 373.3,177.3 380.0,180.6 386.7,183.4 393.3,185.8 400.0,187.6 406.7,188.9 413.3,189.7 420.0,190.0 426.7,189.7 433.3,188.9 440.0,187.6 446.7,185.8 453.3,183.4 460.0,180.6 466.7,177.3 473.3,173.6 480.0,169.5 486.7,165.0 493.3,160.2 500.0,155.0 506.7,149.6 513.3,143.9 520.0,138.1 526.7,132.2 533.3,126.1 540.0,120.0\" class=\"lnm\"/>\n<polyline points=\"60.0,120.0 140.0,120.0 140.0,59.4 146.7,56.6 153.3,54.2 160.0,52.4 166.7,51.1 173.3,50.3 180.0,50.0 186.7,50.3 193.3,51.1 200.0,52.4 206.7,54.2 213.3,56.6 220.0,59.4 226.7,62.7 233.3,66.4 240.0,70.5 246.7,75.0 253.3,79.8 260.0,85.0 266.7,90.4 273.3,96.1 280.0,101.9 286.7,107.8 293.3,113.9 300.0,120.0 300.0,120.0\" class=\"lna\"/>\n<polyline points=\"300.0,120.0 380.0,120.0 380.0,180.6 386.7,183.4 393.3,185.8 400.0,187.6 406.7,188.9 413.3,189.7 420.0,190.0 426.7,189.7 433.3,188.9 440.0,187.6 446.7,185.8 453.3,183.4 460.0,180.6 466.7,177.3 473.3,173.6 480.0,169.5 486.7,165.0 493.3,160.2 500.0,155.0 506.7,149.6 513.3,143.9 520.0,138.1 526.7,132.2 533.3,126.1 540.0,120.0 540.0,120.0\" class=\"lna\"/>\n<line x1=\"140\" y1=\"40\" x2=\"140\" y2=\"200\" class=\"lnb dash\"/>\n<line x1=\"380\" y1=\"40\" x2=\"380\" y2=\"200\" class=\"lnb dash\"/>\n<text x=\"60\" y=\"216\" class=\"txs txc\">0°</text><text x=\"300\" y=\"216\" class=\"txs txc\">180°</text><text x=\"540\" y=\"216\" class=\"txs txc\">360°</text>\n<text x=\"140\" y=\"232\" class=\"txs txc\">gate fires at 60°</text><text x=\"380\" y=\"232\" class=\"txs txc\">fires at 240°</text>\n<line x1=\"60\" y1=\"188\" x2=\"140\" y2=\"188\" class=\"ln1\" marker-end=\"url(#m10-f1-arr)\"/>\n<text x=\"100\" y=\"182\" class=\"txs txc\">α = 60°</text>\n<text x=\"300\" y=\"24\" class=\"tx txb txc\">Phase control of one AC cycle</text>\n<text x=\"300\" y=\"256\" class=\"txs txm txc\">Grey: supply voltage. Amber: the part that reaches the load. Later firing means less power.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "The price of phase control is that the current is no longer a clean sine wave. The sharp switching edges create **harmonics** and radio-frequency interference, and the power factor falls at low output."
    },
    {
     "t": "h",
     "x": "Solid-state relays"
    },
    {
     "t": "p",
     "x": "A **solid-state relay (SSR)** uses an optocoupler to isolate the control input from a TRIAC or back-to-back thyristors (for AC) or a MOSFET (for DC) in the output. There are no moving contacts, so it switches silently, quickly and without arcing, and has a very long life. Its drawbacks are that the output devices have a voltage drop (about 1 V) which creates heat, so a heat sink is needed at load currents above a few amperes, and that a leakage current flows even when off. Zero-crossing SSRs switch on only when the supply passes through zero volts to avoid interference; they suit resistive heaters but not phase control."
    },
    {
     "t": "warn",
     "x": "Solid-state devices typically fail short-circuit. An SSR that has failed can leave a heater or motor permanently on. Where a failure could be dangerous, add an independent over-temperature cut-out or a contactor in series."
    },
    {
     "t": "key",
     "items": [
      "Power electronics switches fully on or off, so heat loss is small.",
      "A thyristor latches on after a gate pulse and turns off when current falls below its holding current.",
      "Phase control varies the firing angle to change power; a later firing angle means less power.",
      "IGBTs are the standard switch in modern drives and inverters.",
      "SSRs have no contacts but need heatsinking and tend to fail shorted."
     ]
    }
   ]
  },
  {
   "id": "m10-l2",
   "title": "Starting methods and soft starters",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "When an induction motor is connected directly to the supply, it draws six to eight times its rated current while it accelerates and produces large torque (Module 7). This can trip the supply, make lights dip, and snap belts, couplings and shafts, or crush a conveyor load. A **starting method** reduces this stress."
    },
    {
     "t": "table",
     "head": [
      "Method",
      "Start current",
      "Start torque",
      "Speed control",
      "Comment"
     ],
     "rows": [
      [
       "Direct-on-line (DOL)",
       "6 to 8 × full load",
       "High",
       "None",
       "Simplest and cheapest; suitable for small motors"
      ],
      [
       "Star-delta",
       "About one third of DOL",
       "About one third of DOL",
       "None",
       "Delta-wound motor only; a current surge when switching to delta"
      ],
      [
       "Soft starter",
       "Adjustable, often 2 to 4 × full load",
       "Adjustable, reduced",
       "None while running (bypassed)",
       "Smooth ramp up and down; no change of speed"
      ],
      [
       "Variable speed drive",
       "Up to about 1 to 1.5 × full load",
       "Full torque from near zero speed",
       "Full range",
       "Most flexible and most expensive"
      ]
     ],
     "cap": "Comparison of motor starting methods"
    },
    {
     "t": "h",
     "x": "How a soft starter works"
    },
    {
     "t": "p",
     "x": "A soft starter places back-to-back thyristors in series with each motor phase. At start it fires the thyristors late in each half-cycle (large α) so that the motor sees a low voltage. Over a **ramp time**, the firing angle is reduced steadily so the voltage rises to full value, and the motor accelerates smoothly. Once at full speed, a **bypass contactor** short-circuits the thyristors so that they carry no current and are not heated, leaving the motor running directly on the supply. At stop, the soft starter can ramp the voltage down for a **soft stop**, which is important for pumps, where an abrupt stop causes water hammer, and for conveyors, where product could topple."
    },
    {
     "t": "ul",
     "items": [
      "**Initial voltage or torque:** the starting level, set high enough that the motor begins to turn straight away.",
      "**Ramp-up time:** how long the voltage takes to rise to full, typically 5 to 30 s.",
      "**Current limit:** a ceiling for the start current, such as 3 times rated current.",
      "**Kick start:** a short burst of high torque to free sticky loads.",
      "**Soft stop time:** the ramp-down time for a controlled stop.",
      "**Motor protection:** overload, phase loss, phase sequence and stall detection."
     ]
    },
    {
     "t": "worked",
     "title": "Worked example: start current",
     "problem": "A 7.5 kW motor has a full-load current of 14.5 A. Compare its start current direct-on-line (seven times full load) with a soft starter limited to three times full load.",
     "steps": [
      "DOL start current = 7 × 14.5 = 101.5 A.",
      "Soft starter limit = 3 × 14.5 = 43.5 A.",
      "Reduction = 101.5 − 43.5 = 58 A, which is 57 % lower."
     ],
     "answer": "The soft starter cuts the start current from about 102 A to 44 A, which reduces the stress on the supply and the cabling."
    },
    {
     "t": "warn",
     "x": "Because the torque of an induction motor falls with the square of the voltage, a soft starter reduces starting torque. If the load needs high breakaway torque (a loaded conveyor, a compressor with a closed unloader), the motor may not turn at all at low initial voltage. Choose the setting from the load, not only from current."
    },
    {
     "t": "tip",
     "x": "For a soft starter that trips on start, check the supply voltage first. A weak supply that sags while the motor starts is the commonest cause, and shows up as an undervoltage or phase-loss fault."
    },
    {
     "t": "key",
     "items": [
      "DOL draws six to eight times full-load current at start.",
      "Star-delta reduces starting current and torque to about one third.",
      "A soft starter ramps the voltage with thyristors then closes a bypass contactor.",
      "Soft stop prevents water hammer and toppling product.",
      "A soft starter does not control running speed; only a VSD does."
     ]
    }
   ]
  },
  {
   "id": "m10-l3",
   "title": "Variable speed drives: how they work",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "A **variable speed drive (VSD)**, also called a variable frequency drive (VFD) or inverter, lets an ordinary induction motor run at any speed from near zero to above its rated speed, with full control of acceleration and torque. Since the speed of an induction motor depends on the supply frequency (Ns = 120 × f ÷ p, Module 7), a drive changes speed by changing the frequency it supplies."
    },
    {
     "t": "svg",
     "alt": "Block diagram of a drive: three-phase supply feeds a rectifier, then a DC bus with a brake resistor, then an inverter of IGBTs, then the motor. A control board sends gate pulses to the inverter.",
     "cap": "Figure 2: rectifier, DC bus and inverter in a variable speed drive",
     "svg": "<svg viewBox=\"0 0 680 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m10-f2-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<rect x=\"10\" y=\"70\" width=\"90\" height=\"64\" class=\"ln fla\"/><text x=\"55\" y=\"99\" class=\"tx txb txc\">Supply</text><text x=\"55\" y=\"115\" class=\"txs txc\">400 V, 50 Hz</text>\n<rect x=\"130\" y=\"70\" width=\"100\" height=\"64\" class=\"ln flb\"/><text x=\"180\" y=\"99\" class=\"tx txb txc\">Rectifier</text><text x=\"180\" y=\"115\" class=\"txs txc\">AC to DC</text>\n<rect x=\"260\" y=\"70\" width=\"120\" height=\"64\" class=\"ln flb\"/><text x=\"320\" y=\"99\" class=\"tx txb txc\">DC bus</text><text x=\"320\" y=\"115\" class=\"txs txc\">≈ 565 V</text>\n<rect x=\"410\" y=\"70\" width=\"110\" height=\"64\" class=\"ln flg\"/><text x=\"465\" y=\"99\" class=\"tx txb txc\">Inverter</text><text x=\"465\" y=\"115\" class=\"txs txc\">IGBTs, PWM</text>\n<rect x=\"550\" y=\"70\" width=\"110\" height=\"64\" class=\"ln fla\"/><text x=\"605\" y=\"99\" class=\"tx txb txc\">Motor</text><text x=\"605\" y=\"115\" class=\"txs txc\">variable V and f</text>\n<line x1=\"100\" y1=\"102\" x2=\"128\" y2=\"102\" class=\"ln\" marker-end=\"url(#m10-f2-arr)\"/>\n<line x1=\"230\" y1=\"102\" x2=\"258\" y2=\"102\" class=\"ln\" marker-end=\"url(#m10-f2-arr)\"/>\n<line x1=\"380\" y1=\"102\" x2=\"408\" y2=\"102\" class=\"ln\" marker-end=\"url(#m10-f2-arr)\"/>\n<line x1=\"520\" y1=\"102\" x2=\"548\" y2=\"102\" class=\"ln\" marker-end=\"url(#m10-f2-arr)\"/>\n<line x1=\"320\" y1=\"134\" x2=\"320\" y2=\"168\" class=\"ln\"/><rect x=\"290\" y=\"168\" width=\"60\" height=\"34\" class=\"ln flr\"/><text x=\"320\" y=\"188\" class=\"txs txc\">Brake</text><text x=\"320\" y=\"198\" class=\"txs txc\">resistor</text>\n<text x=\"320\" y=\"224\" class=\"txs txm txc\">absorbs energy fed back</text><text x=\"320\" y=\"238\" class=\"txs txm txc\">while the motor slows down</text>\n<rect x=\"410\" y=\"190\" width=\"120\" height=\"50\" class=\"ln fla\"/><text x=\"470\" y=\"219\" class=\"tx txb txc\">Control board</text>\n<text x=\"470\" y=\"256\" class=\"txs txc\">reference, ramps, protection</text>\n<line x1=\"465\" y1=\"190\" x2=\"465\" y2=\"136\" class=\"lnm ln1 dash\" marker-end=\"url(#m10-f2-arr)\"/>\n<text x=\"476\" y=\"166\" class=\"txs\">gate pulses to the IGBTs</text>\n<text x=\"340\" y=\"40\" class=\"tx txb txc\">The inverter builds a new three-phase supply from the DC bus</text>\n<text x=\"340\" y=\"282\" class=\"txs txm txc\">Mains is rectified to DC, then chopped by IGBTs into a PWM output of chosen voltage and frequency.</text>\n</svg>"
    },
    {
     "t": "h",
     "x": "The three stages"
    },
    {
     "t": "ul",
     "items": [
      "**Rectifier:** diodes change the three-phase AC supply into DC.",
      "**DC bus:** large capacitors smooth the DC. For a 400 V supply the bus voltage is about 1.414 × 400 = 566 V.",
      "**Inverter:** six IGBTs switch the bus voltage on and off thousands of times a second in a PWM pattern, building a three-phase output whose frequency and average voltage are chosen by the control board."
     ]
    },
    {
     "t": "h",
     "x": "V/Hz control"
    },
    {
     "t": "p",
     "x": "The flux in a motor depends on the ratio of voltage to frequency. If the frequency drops but the voltage stays the same, the iron saturates and the motor overheats. The drive therefore keeps the ratio V/f constant, which keeps the flux and the torque capability constant, up to the base frequency (normally 50 Hz). Above base frequency, voltage cannot rise further, so the flux weakens and the available torque falls while the power stays constant."
    },
    {
     "t": "worked",
     "title": "Worked example: voltage and speed at 35 Hz",
     "problem": "A four-pole 400 V, 50 Hz motor is run by a drive at 35 Hz. What are the output voltage and the synchronous speed?",
     "steps": [
      "V/f ratio = 400 ÷ 50 = 8 V/Hz.",
      "Voltage at 35 Hz = 8 × 35 = 280 V.",
      "Ns = 120 × 35 ÷ 4 = 1050 rpm."
     ],
     "answer": "The drive outputs 280 V at 35 Hz and the synchronous speed is 1050 rpm. The shaft runs slightly slower because of slip."
    },
    {
     "t": "p",
     "x": "At low frequency, the voltage drop in the winding resistance becomes significant, so drives add a small **voltage boost** to keep torque. More advanced **vector control** (sensorless or with an encoder) calculates the motor's torque-producing and flux-producing currents separately and gives full torque at very low speed and fast, accurate speed response, which suits cranes, lifts and machine tools."
    },
    {
     "t": "h",
     "x": "Energy saving with fans and pumps"
    },
    {
     "t": "p",
     "x": "The greatest energy savings occur with centrifugal fans and pumps. These loads follow the **affinity laws**: flow is proportional to speed, pressure to the square of speed and power to the cube of speed. Reducing the speed by only 20 % cuts the power to roughly half."
    },
    {
     "t": "formula",
     "x": "P₂ = P₁ × (N₂ ÷ N₁)³",
     "where": "P power (kW), N speed (rpm or fraction of full speed). Valid for centrifugal fans and pumps."
    },
    {
     "t": "worked",
     "title": "Worked example: fan at 80 % speed",
     "problem": "A fan needs 11 kW at full speed. What power does it need at 80 % speed, and what does it save over one year if it runs 6000 h at that speed (ignore drive losses)?",
     "steps": [
      "Power ratio = 0.8³ = 0.512.",
      "P = 11 × 0.512 = 5.63 kW.",
      "Saving in power = 11 − 5.63 = 5.37 kW.",
      "Energy saved = 5.37 × 6000 = 32 220 kWh per year."
     ],
     "answer": "The fan needs about 5.6 kW and saves around 32 000 kWh a year compared with running at full speed and throttling the flow."
    },
    {
     "t": "note",
     "x": "Drives are not suitable for every load. Constant-torque loads such as conveyors and compressors do not save energy by slowing down, though the drive still gives smooth starts and controlled speed."
    },
    {
     "t": "key",
     "items": [
      "A VSD rectifies to a DC bus (about 565 V on 400 V) and an IGBT inverter builds a new three-phase supply.",
      "V/Hz control keeps flux constant: 400 V and 50 Hz is 8 V/Hz.",
      "Speed follows frequency; Ns = 120 × f ÷ p.",
      "Vector control gives full torque at low speed.",
      "For fans and pumps, power varies with the cube of speed, so slowing a little saves a lot."
     ]
    }
   ]
  },
  {
   "id": "m10-l4",
   "title": "Setting up and wiring a drive",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "A drive that is installed and set up correctly runs reliably for years. A badly set up drive trips, overheats the motor or interferes with nearby equipment. The steps are the same for every brand even though terminal names and parameter numbers differ, so always have the manufacturer's manual open."
    },
    {
     "t": "h",
     "x": "Entering motor data"
    },
    {
     "t": "p",
     "x": "The drive protects and controls the motor using the data on its nameplate. Enter at least these values:"
    },
    {
     "t": "ul",
     "items": [
      "**Rated power (kW), voltage (V), current (A), frequency (Hz) and speed (rpm).** The current sets the electronic thermal overload and must equal the nameplate full-load current for the connection you are using.",
      "**Maximum and minimum frequency:** limits of the speed range. Do not exceed the motor's rated speed without checking the bearings and the load.",
      "**Acceleration and deceleration times:** the time to go from zero to maximum frequency. Too short causes overcurrent on start or overvoltage on stop.",
      "**Control source:** local keypad, terminals or fieldbus.",
      "**Autotune or identification run:** the drive measures the motor resistance and inductance to improve torque and efficiency."
     ]
    },
    {
     "t": "h",
     "x": "Control terminals"
    },
    {
     "t": "svg",
     "alt": "A drive's control terminal strip with a run switch connected between the 24 volt output and digital input 1, and a speed potentiometer connected between the 10 volt reference, the analogue input and analogue ground.",
     "cap": "Figure 3: wiring a run switch and a speed potentiometer to a drive",
     "svg": "<svg viewBox=\"0 0 620 330\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m10-f3-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<rect x=\"300\" y=\"36\" width=\"170\" height=\"250\" class=\"ln fl\"/>\n<text x=\"385\" y=\"26\" class=\"tx txb txc\">Drive control terminals</text>\n<circle cx=\"320\" cy=\"60\" r=\"5\" class=\"ln fla\"/><text x=\"332\" y=\"64\" class=\"txs\">+24 V out</text><circle cx=\"320\" cy=\"95\" r=\"5\" class=\"ln fla\"/><text x=\"332\" y=\"99\" class=\"txs\">DI1 Run</text><circle cx=\"320\" cy=\"130\" r=\"5\" class=\"ln fla\"/><text x=\"332\" y=\"134\" class=\"txs\">DI2 Reverse</text><circle cx=\"320\" cy=\"165\" r=\"5\" class=\"ln fla\"/><text x=\"332\" y=\"169\" class=\"txs\">DCOM</text><circle cx=\"320\" cy=\"200\" r=\"5\" class=\"ln fla\"/><text x=\"332\" y=\"204\" class=\"txs\">+10 V reference</text><circle cx=\"320\" cy=\"235\" r=\"5\" class=\"ln fla\"/><text x=\"332\" y=\"239\" class=\"txs\">AI1 speed input</text><circle cx=\"320\" cy=\"265\" r=\"5\" class=\"ln fla\"/><text x=\"332\" y=\"269\" class=\"txs\">AGND</text>\n<polyline points=\"315,60 230,60 230,78\" class=\"ln\"/>\n<circle cx=\"230\" cy=\"78\" r=\"3\" class=\"fi\"/><circle cx=\"230\" cy=\"95\" r=\"3\" class=\"fi\"/>\n<line x1=\"230\" y1=\"95\" x2=\"219\" y2=\"82\" class=\"ln\"/>\n<polyline points=\"230,95 315,95\" class=\"ln\"/>\n<text x=\"206\" y=\"92\" class=\"txs txe\">S1 Run</text>\n<text x=\"206\" y=\"106\" class=\"txs txe txm\">(closed = run)</text>\n<polyline points=\"315,200 250,200 250,215\" class=\"ln\"/>\n<rect x=\"242\" y=\"215\" width=\"16\" height=\"50\" class=\"ln fl\"/>\n<polyline points=\"250,265 250,265 315,265\" class=\"ln\"/>\n<polyline points=\"315,235 285,235 285,240 260,240\" class=\"ln\" marker-end=\"url(#m10-f3-arr)\"/>\n<text x=\"236\" y=\"236\" class=\"txs txe\">R1 speed</text><text x=\"236\" y=\"250\" class=\"txs txe\">potentiometer</text>\n<text x=\"14\" y=\"310\" class=\"txs txm\">DI2 (reverse) is wired the same way with its own switch.</text><text x=\"14\" y=\"324\" class=\"txs txm\">Turning the pot up raises the 0–10 V speed reference.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "The control terminals provide digital inputs (run, stop, reverse, preset speeds, fault reset), analogue inputs (speed reference as 0–10 V or 4–20 mA), relay and transistor outputs (running, fault, at-speed) and an analogue output (motor speed or current). The **Safe Torque Off (STO)** input, when present, removes the gate drive to the inverter so the motor cannot produce torque. It is a safety function (ISO 13849-1) and must be wired through a safety relay according to the manual."
    },
    {
     "t": "table",
     "head": [
      "Signal",
      "Typical wiring",
      "Notes"
     ],
     "rows": [
      [
       "Run/stop",
       "Switch or PLC output between +24 V and a digital input",
       "A 3-wire start/stop can be used for pulsed push buttons"
      ],
      [
       "Speed reference 0–10 V",
       "Potentiometer of 1 to 10 kΩ between +10 V, AI and analogue ground",
       "Or from a PLC analogue output"
      ],
      [
       "Speed reference 4–20 mA",
       "Two-wire from a controller, with the input switched to current",
       "A broken wire is detected at below 4 mA"
      ],
      [
       "Fault relay",
       "Contact in the PLC fault chain",
       "Use the normally closed contact so a dead drive still alarms"
      ]
     ],
     "cap": "Common drive control signals"
    },
    {
     "t": "h",
     "x": "Power cabling and EMC"
    },
    {
     "t": "p",
     "x": "The fast switching edges from the inverter radiate interference and can disturb sensors, encoders and communications. Reduce it by:"
    },
    {
     "t": "ul",
     "items": [
      "Using **screened (shielded) motor cable** with the screen connected 360° to earth at the drive and at the motor, using EMC glands and not a pigtail.",
      "Keeping motor cables separate from control and signal cables, and crossing them at 90° if they must cross.",
      "Fitting an **EMC filter** and, if the supply is weak or distorted, a line reactor.",
      "Keeping the cable between drive and motor within the manufacturer's maximum length; longer cables need an output filter or reactor.",
      "Earthing the drive, motor and enclosure properly with short, thick bonds; use the earth terminal on each device."
     ]
    },
    {
     "t": "warn",
     "x": "Never connect the supply to the drive output terminals (U, V, W) or switch the motor with a contactor while the drive is running. Either action can destroy the inverter in an instant. If an output contactor is needed, interlock it so the drive is stopped first."
    },
    {
     "t": "key",
     "items": [
      "Enter the motor nameplate data, ramp times and control source before the first run.",
      "Use screened motor cable earthed 360° at both ends.",
      "STO is a safety input and must be wired with a safety relay as the manual says.",
      "Control terminals: digital inputs for run and reverse, analogue input for speed reference.",
      "Never power the output terminals or switch the motor while the drive runs."
     ]
    }
   ]
  },
  {
   "id": "m10-l5",
   "title": "Drive faults and fault finding",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Drives protect themselves and the motor, and they report why they stopped. A fault code is the best clue you have. Record it before you reset anything, and then work through the possible causes from the simplest to the most complex."
    },
    {
     "t": "table",
     "head": [
      "Fault",
      "What it means",
      "Common causes and checks"
     ],
     "rows": [
      [
       "Overcurrent",
       "The output current exceeded the drive's limit",
       "Acceleration ramp too short, jammed or overloaded machine, motor short, wrong motor data"
      ],
      [
       "Overvoltage (DC bus)",
       "The DC bus rose too high",
       "Deceleration ramp too short so the motor regenerates; fit a brake resistor, lengthen the ramp, or check supply surges"
      ],
      [
       "Undervoltage",
       "The DC bus fell below the minimum",
       "Supply dips or missing phase, loose supply connection, high-impedance supply"
      ],
      [
       "Overtemperature",
       "The heatsink or the drive is too hot",
       "Blocked filters, dust, failed fan, ambient too high, drive overloaded"
      ],
      [
       "Earth fault",
       "Current is leaking to earth",
       "Damaged motor cable, wet or burnt motor winding, long cable capacitance"
      ],
      [
       "Motor overload",
       "The thermal model says the motor is overheating",
       "True overload, wrong current setting, low speed with poor cooling"
      ],
      [
       "Input phase loss",
       "One supply phase is missing or unbalanced",
       "Blown fuse, loose terminal, poor contact"
      ]
     ],
     "cap": "Common drive fault codes"
    },
    {
     "t": "h",
     "x": "A safe fault-finding routine"
    },
    {
     "t": "steps",
     "title": "First-line checks on a faulted drive",
     "items": [
      "Note the fault code, the display, and any history of earlier faults, and ask the operator what happened.",
      "Isolate the drive, lock out and tag it, and wait for the time printed on the drive (often 5 minutes) for the DC bus capacitors to discharge.",
      "Measure the DC bus terminals with a meter rated for the voltage, and confirm they are below 50 V before you touch anything.",
      "Look for dirt, burn marks, loose connections, damaged cables and blocked cooling air.",
      "Check the supply: all three phases present, fuses sound, voltage at the drive terminals.",
      "Disconnect the motor cable from the drive before testing the motor or the cable with an insulation tester; never apply test voltage to a connected drive.",
      "Restore, reset, and watch the first start for the original fault."
     ]
    },
    {
     "t": "warn",
     "x": "The DC bus capacitors in a drive can hold a lethal charge long after the supply is switched off. Always wait the specified time, then measure and prove the bus voltage is safe. Apply an insulation tester to a motor or cable only when it is disconnected from the drive, or the test voltage will destroy the drive's power stage."
    },
    {
     "t": "h",
     "x": "Effects of the drive on the motor and the supply"
    },
    {
     "t": "ul",
     "items": [
      "**Voltage stress:** the fast switching edges can damage motor insulation on long cables. Use inverter-duty motors or output filters for long runs.",
      "**Bearing currents:** high-frequency common-mode currents can pass through bearings and cut flutes in the raceways. Use insulated bearings or shaft earthing rings and correct earthing.",
      "**Harmonics:** the rectifier draws current in pulses, which distorts the supply waveform. Line reactors and DC chokes reduce this.",
      "**Motor cooling:** a self-ventilated fan slows with the motor, so at low speed under full load the motor overheats. Use a separate cooling fan or choose a motor rated for it."
     ]
    },
    {
     "t": "ghana",
     "x": "High ambient temperatures, dust and voltage fluctuations are the main causes of drive trips in many installations in Ghana. Most drives must be derated above about 40 °C (check the manual), so keep panel filters clean, use enclosures with adequate ventilation or air conditioning, and fit surge protection and, where supply quality is poor, a line reactor."
    },
    {
     "t": "tip",
     "x": "If a drive trips repeatedly on overcurrent when it starts, run the motor with the load disconnected. If the drive runs happily unloaded, the fault is mechanical (a jam, bearings or a seized gearbox) and not in the drive."
    },
    {
     "t": "key",
     "items": [
      "Always record the fault code before resetting the drive.",
      "Overcurrent, overvoltage, undervoltage, overtemperature and earth faults each have typical causes; start with the simplest.",
      "Wait for the DC bus to discharge and measure it before touching a drive.",
      "Never apply insulation test voltage to a motor cable while it is connected to a drive.",
      "Heat, dust and weak supplies cause many trips; maintain filters and protect against surges."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m10-q1",
   "q": "A drive is supplied from 400 V three-phase. Approximately what is the DC bus voltage?",
   "opts": [
    "230 V",
    "566 V",
    "400 V",
    "693 V"
   ],
   "a": 1,
   "why": "The rectifier charges the bus to the peak of the line voltage: 1.414 × 400 = 566 V."
  },
  {
   "id": "m10-q2",
   "q": "What makes a thyristor turn off once it is latched on?",
   "opts": [
    "Removing the gate pulse from it",
    "Applying a negative gate voltage to it",
    "Current falling below holding value",
    "Cooling the heatsink down quickly"
   ],
   "a": 2,
   "why": "A thyristor stays on after the gate pulse ends. It turns off only when the main current falls below its holding current, which happens at each zero crossing of an AC wave."
  },
  {
   "id": "m10-q3",
   "q": "What is a TRIAC mainly used for?",
   "opts": [
    "AC phase control, such as in dimmers",
    "Rectifying AC to DC in the front end of drives",
    "Amplifying very small sensor signals accurately",
    "Storing energy in the DC bus of a drive"
   ],
   "a": 0,
   "why": "A TRIAC conducts in both directions and is triggered by a gate pulse, so it controls AC power by phase control."
  },
  {
   "id": "m10-q4",
   "q": "What is a soft starter unable to do compared with a variable speed drive?",
   "opts": [
    "Limit the starting current",
    "Provide a smooth ramp up",
    "Reduce mechanical shock",
    "Vary the running speed"
   ],
   "a": 3,
   "why": "A soft starter only ramps the voltage and is then bypassed. The motor runs at full speed. Only a VSD changes the running speed."
  },
  {
   "id": "m10-q5",
   "q": "A 400 V, 50 Hz motor is run at 25 Hz with constant V/Hz control. What output voltage is needed?",
   "opts": [
    "400 V",
    "100 V",
    "200 V",
    "50 V"
   ],
   "a": 2,
   "why": "V/f = 400 ÷ 50 = 8 V/Hz. At 25 Hz the voltage is 8 × 25 = 200 V."
  },
  {
   "id": "m10-q6",
   "q": "What is the synchronous speed of a four-pole motor supplied at 35 Hz?",
   "opts": [
    "1500 rpm",
    "1050 rpm",
    "1750 rpm",
    "700 rpm"
   ],
   "a": 1,
   "why": "Ns = 120 × f ÷ p = 120 × 35 ÷ 4 = 1050 rpm."
  },
  {
   "id": "m10-q7",
   "q": "A centrifugal fan is slowed to 80 % speed. Approximately what fraction of full power does it need?",
   "opts": [
    "64 %",
    "80 %",
    "51 %",
    "20 %"
   ],
   "a": 2,
   "why": "Power varies with the cube of speed: 0.8³ = 0.512, or about 51 %."
  },
  {
   "id": "m10-q8",
   "q": "A drive trips on overvoltage every time a high-inertia load decelerates. What is the best remedy?",
   "opts": [
    "Increase the acceleration time on starting",
    "Fit a brake resistor or slow the ramp",
    "Reduce the carrier frequency of the drive",
    "Replace the motor with a larger one fitted"
   ],
   "a": 1,
   "why": "The slowing load drives the motor as a generator and pumps energy back into the DC bus. A brake resistor absorbs it, or a longer ramp reduces the rate."
  },
  {
   "id": "m10-q9",
   "q": "Before measuring the insulation resistance of a motor cable that is connected to a drive, what must you do?",
   "opts": [
    "Disconnect the cable from the drive",
    "Set the tester to its lowest voltage",
    "Run the drive at low speed first",
    "Switch off only the motor starter"
   ],
   "a": 0,
   "why": "The test voltage, often 500 V or more, can destroy the drive's power electronics. Always disconnect the motor cable from the drive first."
  },
  {
   "id": "m10-q10",
   "q": "After isolating a drive, what must be done before touching its power terminals?",
   "opts": [
    "Nothing, because the supply is off",
    "Reset the drive from the keypad",
    "Wait the stated time, then measure the DC bus",
    "Touch the terminal with a screwdriver to discharge it"
   ],
   "a": 2,
   "why": "The bus capacitors store charge. Wait the time printed on the drive, then measure and prove that the bus voltage is safe before touching."
  },
  {
   "id": "m10-q11",
   "q": "Why is a screened motor cable earthed 360° at both ends used with a drive?",
   "opts": [
    "To make the motor cable more flexible in use",
    "To increase the motor voltage at the terminals",
    "To reduce the motor's running temperature a lot",
    "To reduce radiated electrical interference"
   ],
   "a": 3,
   "why": "The screen contains the high-frequency interference from the PWM output and returns it to the drive, protecting nearby sensors and communications."
  },
  {
   "id": "m10-q12",
   "q": "Which nameplate value sets the drive's electronic motor overload protection?",
   "opts": [
    "Rated power in kW",
    "Rated current in amperes",
    "Power factor",
    "Frame size"
   ],
   "a": 1,
   "why": "The drive protects against overheating using the rated current. Set it to the nameplate current for the connection in use."
  },
  {
   "id": "m10-q13",
   "q": "A motor has a full-load current of 14.5 A. A soft starter limits the start current to three times that. What is the limit?",
   "opts": [
    "101.5 A",
    "14.5 A",
    "58 A",
    "43.5 A"
   ],
   "a": 3,
   "why": "3 × 14.5 = 43.5 A. Direct-on-line at seven times would be 101.5 A."
  },
  {
   "id": "m10-q14",
   "q": "A drive shows an earth fault soon after start. Which is the most likely cause?",
   "opts": [
    "A blocked cooling fan in the drive",
    "A slow deceleration ramp setting",
    "Low supply frequency at the input",
    "Damaged cable or failing winding insulation"
   ],
   "a": 3,
   "why": "An earth fault means current is leaking to earth. Check the motor cable and winding with the drive disconnected before restarting."
  }
 ],
 "cards": [
  {
   "f": "What is the latching action of a thyristor?",
   "b": "After a gate pulse it stays on until the anode current falls below the holding current."
  },
  {
   "f": "Which semiconductor is the standard switch in a drive inverter?",
   "b": "The IGBT (insulated-gate bipolar transistor)."
  },
  {
   "f": "What is the firing angle?",
   "b": "The delay, in degrees, from the start of a half-cycle to the gate pulse; a larger angle means less power."
  },
  {
   "f": "Two drawbacks of a solid-state relay?",
   "b": "Heat from the on-state voltage drop (needs a heatsink) and off-state leakage current; it also tends to fail shorted."
  },
  {
   "f": "DOL starting current?",
   "b": "Typically six to eight times full-load current."
  },
  {
   "f": "What does a bypass contactor do in a soft starter?",
   "b": "It short-circuits the thyristors at full speed so they carry no current and stay cool."
  },
  {
   "f": "Why use soft stop on a pump?",
   "b": "A gradual ramp-down avoids water hammer in the pipes."
  },
  {
   "f": "Three stages of a VSD?",
   "b": "Rectifier, DC bus with capacitors, and IGBT inverter."
  },
  {
   "f": "DC bus voltage on a 400 V supply?",
   "b": "About 1.414 × 400 = 566 V."
  },
  {
   "f": "What is V/Hz control?",
   "b": "Keeping the voltage-to-frequency ratio constant so the motor flux and torque capability stay constant."
  },
  {
   "f": "Affinity law for power?",
   "b": "Power varies with the cube of speed: P₂ = P₁ × (N₂ ÷ N₁)³."
  },
  {
   "f": "What causes a drive overvoltage trip on slowing down?",
   "b": "The load regenerates energy into the DC bus. Fit a brake resistor or lengthen the deceleration ramp."
  },
  {
   "f": "What does STO do?",
   "b": "Safe Torque Off removes gate drive to the inverter so the motor cannot develop torque; wired through a safety relay."
  },
  {
   "f": "Why disconnect the motor cable before an insulation test?",
   "b": "The test voltage would damage the drive's power electronics."
  }
 ],
 "terms": [
  {
   "t": "Thyristor (SCR)",
   "d": "A semiconductor switch that is turned on by a gate pulse and stays on until its current falls below the holding current."
  },
  {
   "t": "TRIAC",
   "d": "A semiconductor switch that conducts in both directions and is used for AC phase control."
  },
  {
   "t": "IGBT",
   "d": "Insulated-gate bipolar transistor, a fast high-power switch used in drives and inverters."
  },
  {
   "t": "Firing angle",
   "d": "The point in an AC half-cycle, in degrees, at which a thyristor or TRIAC is switched on."
  },
  {
   "t": "Soft starter",
   "d": "A thyristor-based starter that ramps motor voltage up and down to limit current and shock."
  },
  {
   "t": "Inverter",
   "d": "The drive stage that turns DC bus voltage into a variable-frequency three-phase output."
  },
  {
   "t": "DC bus",
   "d": "The capacitor-smoothed DC link between the rectifier and inverter in a drive."
  },
  {
   "t": "V/Hz control",
   "d": "A control method that keeps the output voltage proportional to frequency."
  },
  {
   "t": "Vector control",
   "d": "A drive control method that regulates a motor's flux and torque currents separately."
  },
  {
   "t": "Brake resistor",
   "d": "A resistor that absorbs the energy fed back to the DC bus while a motor decelerates."
  },
  {
   "t": "Safe Torque Off (STO)",
   "d": "A drive safety function that prevents the drive from producing torque in the motor."
  }
 ],
 "formulas": [
  {
   "n": "DC bus voltage",
   "f": "Vdc ≈ 1.414 × VL",
   "v": "VL line voltage; 400 V gives about 566 V"
  },
  {
   "n": "Synchronous speed",
   "f": "Ns = 120 × f ÷ p",
   "v": "rpm, f in Hz, p poles"
  },
  {
   "n": "V/Hz ratio",
   "f": "V = (Vrated ÷ frated) × f",
   "v": "400 V and 50 Hz gives 8 V/Hz"
  },
  {
   "n": "Fan affinity law (power)",
   "f": "P₂ = P₁ × (N₂ ÷ N₁)³",
   "v": "Centrifugal fans and pumps only"
  },
  {
   "n": "Start current estimate",
   "f": "I_start ≈ k × I_FL",
   "v": "k about 7 for DOL, 2 to 4 with a soft starter"
  }
 ]
});
