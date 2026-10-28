window.MECH.register({
 "id": "m15",
 "n": 15,
 "title": "PLC Fundamentals and Programming (IEC 61131-3)",
 "short": "PLC Programming",
 "group": "Control & Automation",
 "blurb": "How a programmable logic controller works and how to program it: hardware, the scan cycle, I/O wiring, IEC 61131-3 languages, ladder logic, timers, counters, sequences and commissioning.",
 "outcomes": [
  "Describe PLC hardware and the scan cycle, and explain the consequences of scan time",
  "Wire digital and analogue inputs and outputs, matching sourcing and sinking types",
  "Name the IEC 61131-3 languages and the main data types",
  "Write ladder logic with contacts, coils, set/reset and a seal-in circuit",
  "Use timers (TON, TOF, TP) and counters (CTU, CTD) and calculate their presets",
  "Scale an analogue input to engineering units",
  "Structure a program with blocks and a state machine for a sequence",
  "Commission, monitor, force, back up and document a PLC program safely"
 ],
 "lessons": [
  {
   "id": "m15-l1",
   "title": "PLC hardware and the scan cycle",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "A **programmable logic controller (PLC)** is an industrial computer built to control machines. It is rugged, works from 24 V DC, tolerates heat, dust, vibration and electrical noise, and is programmed in languages that technicians can read, rather than in general-purpose code. It replaced hard-wired relay panels because changing the logic means changing the program, not the wiring."
    },
    {
     "t": "svg",
     "alt": "Block diagram of a PLC: a power supply feeds an input module, a CPU and an output module. Sensors connect to the input module, the output module drives actuators, and a programming laptop connects to the CPU.",
     "cap": "Figure 1: the main parts of a PLC",
     "svg": "<svg viewBox=\"0 0 660 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m15-f1-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<rect x=\"250\" y=\"24\" width=\"160\" height=\"40\" class=\"ln flb\"/><text x=\"330\" y=\"49\" class=\"tx txb txc\">Power supply 24 V DC</text>\n<polyline points=\"250,44 90,44 90,110\" class=\"ln lnr\"/><polyline points=\"410,44 570,44 570,110\" class=\"ln lnr\"/><line x1=\"330\" y1=\"64\" x2=\"330\" y2=\"110\" class=\"ln lnr\"/>\n<rect x=\"30\" y=\"110\" width=\"120\" height=\"90\" class=\"ln fla\"/><text x=\"90\" y=\"148\" class=\"tx txb txc\">Input</text><text x=\"90\" y=\"166\" class=\"tx txb txc\">module</text><text x=\"90\" y=\"186\" class=\"txs txc\">digital, analogue</text>\n<rect x=\"250\" y=\"110\" width=\"160\" height=\"90\" class=\"ln flg\"/><text x=\"330\" y=\"140\" class=\"tx txb txc\">CPU</text><text x=\"330\" y=\"160\" class=\"txs txc\">processor</text><text x=\"330\" y=\"176\" class=\"txs txc\">program memory</text><text x=\"330\" y=\"192\" class=\"txs txc\">data memory</text>\n<rect x=\"510\" y=\"110\" width=\"120\" height=\"90\" class=\"ln fla\"/><text x=\"570\" y=\"148\" class=\"tx txb txc\">Output</text><text x=\"570\" y=\"166\" class=\"tx txb txc\">module</text><text x=\"570\" y=\"186\" class=\"txs txc\">relay, transistor</text>\n<line x1=\"150\" y1=\"155\" x2=\"248\" y2=\"155\" class=\"ln\" marker-end=\"url(#m15-f1-arr)\"/>\n<line x1=\"410\" y1=\"155\" x2=\"508\" y2=\"155\" class=\"ln\" marker-end=\"url(#m15-f1-arr)\"/>\n<line x1=\"90\" y1=\"228\" x2=\"90\" y2=\"202\" class=\"ln\" marker-end=\"url(#m15-f1-arr)\"/>\n<line x1=\"570\" y1=\"202\" x2=\"570\" y2=\"228\" class=\"ln\" marker-end=\"url(#m15-f1-arr)\"/>\n<line x1=\"330\" y1=\"202\" x2=\"330\" y2=\"228\" class=\"ln lnm dash\"/>\n<text x=\"90\" y=\"246\" class=\"txs txb txc\">Sensors, switches,</text><text x=\"90\" y=\"260\" class=\"txs txb txc\">pushbuttons</text>\n<text x=\"570\" y=\"246\" class=\"txs txb txc\">Contactors, valves,</text><text x=\"570\" y=\"260\" class=\"txs txb txc\">lamps</text>\n<text x=\"330\" y=\"246\" class=\"txs txb txc\">Programming laptop,</text><text x=\"330\" y=\"260\" class=\"txs txb txc\">HMI, network</text>\n<text x=\"330\" y=\"288\" class=\"txs txm txc\">The CPU reads the inputs, runs the user program and sets the outputs, over and over.</text>\n</svg>"
    },
    {
     "t": "ul",
     "items": [
      "**Power supply:** produces the internal voltages for the CPU and modules, and often a 24 V DC output for sensors. The sensors and actuators usually have a separate fused 24 V supply.",
      "**CPU:** the processor that runs the program. It has **program memory** (retained when power is off) and **data memory** for variables, timers and counters. Some data is retained by battery or by non-volatile memory.",
      "**Input modules:** convert the field signals to logic levels. **Digital inputs** read on/off (24 V DC is standard), **analogue inputs** read 4–20 mA, 0–10 V, Pt100 or thermocouples (Module 11).",
      "**Output modules:** switch the loads. **Relay outputs** can switch AC or DC loads and are isolated, but are slower and wear out. **Transistor outputs** are fast and silent and switch 24 V DC loads only. **Triac outputs** switch small AC loads.",
      "**Forms:** a compact (fixed) PLC has everything in one block; a modular PLC has a rack or rail with separate modules that can be added or replaced."
     ]
    },
    {
     "t": "h",
     "x": "Wiring digital I/O"
    },
    {
     "t": "p",
     "x": "Digital inputs are **sinking** (the input module sinks current to 0 V) or **sourcing** (it supplies current). The input type must match the sensor: a PNP sensor, which switches +24 V, needs a sinking input, and an NPN sensor needs a sourcing input. Many modules can be configured in groups. Outputs have a **common** terminal per group, which must be connected to the load supply. Always protect outputs with a fuse suited to the load and fit a diode across DC relay coils or solenoids."
    },
    {
     "t": "h",
     "x": "The scan cycle"
    },
    {
     "t": "p",
     "x": "A PLC does not respond instantly to every change; it works in a continuous loop called the **scan**."
    },
    {
     "t": "svg",
     "alt": "A four-step loop: read inputs, run the program, write outputs, and housekeeping, repeating continuously.",
     "cap": "Figure 2: the PLC scan cycle",
     "svg": "<svg viewBox=\"0 0 600 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m15-f2-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<rect x=\"60\" y=\"50\" width=\"190\" height=\"56\" class=\"ln fla\"/><text x=\"155\" y=\"74\" class=\"tx txb txc\">1 Read inputs</text><text x=\"155\" y=\"92\" class=\"txs txc\">copy inputs to the image table</text>\n<rect x=\"350\" y=\"50\" width=\"190\" height=\"56\" class=\"ln flg\"/><text x=\"445\" y=\"74\" class=\"tx txb txc\">2 Run program</text><text x=\"445\" y=\"92\" class=\"txs txc\">solve rungs top to bottom</text>\n<rect x=\"350\" y=\"160\" width=\"190\" height=\"56\" class=\"ln fla\"/><text x=\"445\" y=\"184\" class=\"tx txb txc\">3 Write outputs</text><text x=\"445\" y=\"202\" class=\"txs txc\">update outputs from the image</text>\n<rect x=\"60\" y=\"160\" width=\"190\" height=\"56\" class=\"ln fl\"/><text x=\"155\" y=\"184\" class=\"tx txb txc\">4 Housekeeping</text><text x=\"155\" y=\"202\" class=\"txs txc\">communications, diagnostics</text>\n<line x1=\"250\" y1=\"78\" x2=\"348\" y2=\"78\" class=\"ln\" marker-end=\"url(#m15-f2-arr)\"/>\n<line x1=\"445\" y1=\"106\" x2=\"445\" y2=\"158\" class=\"ln\" marker-end=\"url(#m15-f2-arr)\"/>\n<line x1=\"350\" y1=\"188\" x2=\"252\" y2=\"188\" class=\"ln\" marker-end=\"url(#m15-f2-arr)\"/>\n<line x1=\"155\" y1=\"160\" x2=\"155\" y2=\"108\" class=\"ln\" marker-end=\"url(#m15-f2-arr)\"/>\n<text x=\"300\" y=\"125\" class=\"tx txb txc\">One scan</text><text x=\"300\" y=\"143\" class=\"txs txc\">typically 1 to 20 ms</text>\n<text x=\"300\" y=\"250\" class=\"txs txm txc\">An input that changes and returns within one scan can be missed. Fast pulses need a fast input.</text>\n<text x=\"300\" y=\"268\" class=\"txs txm txc\">The program sees a frozen copy of the inputs during the scan.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "During step 1 the CPU copies all inputs to the **input image table**. During step 2 it solves the program using that frozen copy and writes the results to the **output image table**. During step 3 it copies the image to the real outputs. Step 4 handles communications and self-checks. The total time is the **scan time**, usually 1 to 20 ms, longer for a big program."
    },
    {
     "t": "worked",
     "title": "Worked example: can the PLC see this pulse?",
     "problem": "A PLC scan time is 10 ms. A sensor on a fast packing line produces a pulse that lasts 6 ms. Will the PLC reliably see it? What are the options?",
     "steps": [
      "The input is read once per scan, every 10 ms.",
      "A 6 ms pulse is shorter than the scan, so it can start and end between two reads and be missed.",
      "For a pulse to be seen every time, it should last longer than one scan, with some margin (at least about 20 ms here)."
     ],
     "answer": "No, the PLC could miss it. Use a high-speed counter input or interrupt input, pulse-stretch the signal, or reduce the scan time."
    },
    {
     "t": "warn",
     "x": "The PLC is not a safety device. Emergency stops, guards and light curtains must be wired through a certified safety relay or safety PLC (Module 2, ISO 13849-1), never only through ordinary PLC inputs."
    },
    {
     "t": "key",
     "items": [
      "A PLC has a power supply, CPU, input modules and output modules.",
      "Relay outputs switch AC and DC loads; transistor outputs are fast but DC only.",
      "A PNP sensor needs a sinking input; an NPN sensor needs a sourcing input.",
      "The scan reads inputs, runs the program, writes outputs and then repeats.",
      "Pulses shorter than the scan time can be missed."
     ]
    }
   ]
  },
  {
   "id": "m15-l2",
   "title": "IEC 61131-3 languages, data and program structure",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "**IEC 61131-3** is the international standard for PLC programming. It defines five languages and a common structure, so skills transfer between makes of PLC even though each maker adds its own tools and details."
    },
    {
     "t": "table",
     "head": [
      "Language",
      "Type",
      "Best for"
     ],
     "rows": [
      [
       "Ladder Diagram (LD)",
       "Graphical, like relay circuits",
       "Discrete logic and interlocks; easy for electricians to read"
      ],
      [
       "Function Block Diagram (FBD)",
       "Graphical blocks joined by wires",
       "Analogue processing, PID, signal flow"
      ],
      [
       "Structured Text (ST)",
       "Text, like Pascal",
       "Maths, loops, arrays and complex calculations"
      ],
      [
       "Instruction List (IL)",
       "Text, assembler-like",
       "Largely replaced; found in older programs"
      ],
      [
       "Sequential Function Chart (SFC)",
       "Graphical steps and transitions",
       "Step-by-step sequences and batch processes"
      ]
     ],
     "cap": "The five IEC 61131-3 languages"
    },
    {
     "t": "p",
     "x": "A real project mixes languages: SFC for the machine sequence, ladder for interlocks, structured text for scaling and calculations."
    },
    {
     "t": "h",
     "x": "Data types"
    },
    {
     "t": "table",
     "head": [
      "Type",
      "Size",
      "Range or use"
     ],
     "rows": [
      [
       "BOOL",
       "1 bit",
       "TRUE or FALSE: switches, lamps, flags"
      ],
      [
       "INT",
       "16 bits",
       "−32 768 to 32 767"
      ],
      [
       "DINT",
       "32 bits",
       "About ±2.1 billion"
      ],
      [
       "REAL",
       "32 bits",
       "Floating point numbers, about 7 digits"
      ],
      [
       "WORD",
       "16 bits",
       "Bit patterns, raw data"
      ],
      [
       "TIME",
       "32 bits",
       "Durations written T#5s, T#200ms, T#1m30s"
      ],
      [
       "STRING",
       "Characters",
       "Text messages"
      ]
     ],
     "cap": "Common data types"
    },
    {
     "t": "p",
     "x": "Choose the smallest type that holds the biggest value. An INT overflows beyond 32 767, so a counter that may exceed that needs a DINT. Division and scaling need REAL values, or the decimals are lost."
    },
    {
     "t": "h",
     "x": "Addresses and variables"
    },
    {
     "t": "p",
     "x": "Physical I/O have addresses such as **%I0.0** (input byte 0 bit 0), **%Q0.1** (output byte 0 bit 1) and **%M** for internal memory bits. Modern programming uses a **symbolic name** attached to each address (for example Start_PB at %I0.0), so the program reads as 'Start_PB' not '%I0.0'. Use consistent, descriptive names and comments; a program may be maintained for twenty years by people who never met the author."
    },
    {
     "t": "h",
     "x": "Program organisation"
    },
    {
     "t": "ul",
     "items": [
      "**Program (main routine):** the code the PLC runs every scan.",
      "**Function (FC):** code with inputs and outputs and no memory, for example a scaling calculation.",
      "**Function block (FB):** code with its own saved data (an instance), for example a motor control block, used many times.",
      "**Tasks:** the program can run cyclically, on a timer, or on an interrupt."
     ]
    },
    {
     "t": "p",
     "x": "Reuse is the key to quality. A single tested motor function block used for twenty motors is more reliable and easier to fix than twenty copies of the same logic."
    },
    {
     "t": "key",
     "items": [
      "IEC 61131-3 defines LD, FBD, ST, IL and SFC.",
      "Ladder suits discrete logic; ST suits maths; SFC suits sequences.",
      "INT is 16 bits (−32 768 to 32 767); use DINT or REAL when you need more range or decimals.",
      "Use symbolic names and comments for every address.",
      "Reuse function blocks instead of copying logic."
     ]
    }
   ]
  },
  {
   "id": "m15-l3",
   "title": "Ladder logic, timers and counters",
   "minutes": 12,
   "body": [
    {
     "t": "p",
     "x": "Ladder diagram is drawn between two **power rails**. Each **rung** is one logical statement: if the conditions on the left (contacts) are true, the output on the right (coil) turns on. Imagine power flowing from the left rail through closed contacts to the coil."
    },
    {
     "t": "ul",
     "items": [
      "**Normally open contact (examine if on):** passes power when its bit is TRUE.",
      "**Normally closed contact (examine if off):** passes power when its bit is FALSE.",
      "**Coil:** sets its bit equal to the rung result. **Set (S) and reset (R) coils** latch an output on or off until the opposite instruction occurs.",
      "Contacts in **series** are AND; contacts in **parallel** are OR.",
      "**Edge contacts:** a rising-edge (positive) contact is true for one scan only when the bit changes from FALSE to TRUE; essential for counting and one-shot actions."
     ]
    },
    {
     "t": "svg",
     "alt": "Three ladder rungs. Rung one is a start stop circuit with a seal-in contact driving a motor coil. Rung two uses the motor contact to start a five second on-delay timer that drives a second belt. Rung three counts bottles with a counter preset to 24.",
     "cap": "Figure 3: three typical ladder rungs",
     "svg": "<svg viewBox=\"0 0 640 340\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<line x1=\"40\" y1=\"26\" x2=\"40\" y2=\"310\" class=\"ln lnr\"/><line x1=\"600\" y1=\"26\" x2=\"600\" y2=\"310\" class=\"ln lnb\"/>\n<line x1=\"40\" y1=\"60\" x2=\"80\" y2=\"60\" class=\"ln\"/>\n<line x1=\"80\" y1=\"60\" x2=\"102\" y2=\"60\" class=\"ln\"/><line x1=\"118\" y1=\"60\" x2=\"140\" y2=\"60\" class=\"ln\"/><line x1=\"102\" y1=\"49\" x2=\"102\" y2=\"71\" class=\"ln\"/><line x1=\"118\" y1=\"49\" x2=\"118\" y2=\"71\" class=\"ln\"/><text x=\"110\" y=\"40\" class=\"txs txc\">I0.0 Start</text>\n<line x1=\"140\" y1=\"60\" x2=\"170\" y2=\"60\" class=\"ln\"/>\n<line x1=\"170\" y1=\"60\" x2=\"192\" y2=\"60\" class=\"ln\"/><line x1=\"208\" y1=\"60\" x2=\"230\" y2=\"60\" class=\"ln\"/><line x1=\"192\" y1=\"49\" x2=\"192\" y2=\"71\" class=\"ln\"/><line x1=\"208\" y1=\"49\" x2=\"208\" y2=\"71\" class=\"ln\"/><text x=\"200\" y=\"40\" class=\"txs txc\">I0.1 Stop</text>\n<line x1=\"230\" y1=\"60\" x2=\"418\" y2=\"60\" class=\"ln\"/><circle cx=\"430\" cy=\"60\" r=\"12\" class=\"ln fla\"/><text x=\"430\" y=\"38\" class=\"txs txc\">Q0.0 Motor</text><line x1=\"442\" y1=\"60\" x2=\"600\" y2=\"60\" class=\"ln\"/>\n<line x1=\"80\" y1=\"60\" x2=\"80\" y2=\"100\" class=\"ln\"/><line x1=\"140\" y1=\"60\" x2=\"140\" y2=\"100\" class=\"ln\"/><line x1=\"80\" y1=\"100\" x2=\"80\" y2=\"100\" class=\"ln\"/>\n<line x1=\"80\" y1=\"100\" x2=\"102\" y2=\"100\" class=\"ln\"/><line x1=\"118\" y1=\"100\" x2=\"140\" y2=\"100\" class=\"ln\"/><line x1=\"102\" y1=\"89\" x2=\"102\" y2=\"111\" class=\"ln\"/><line x1=\"118\" y1=\"89\" x2=\"118\" y2=\"111\" class=\"ln\"/><text x=\"110\" y=\"130\" class=\"txs txc\">Q0.0 seal-in</text>\n<line x1=\"40\" y1=\"180\" x2=\"80\" y2=\"180\" class=\"ln\"/>\n<line x1=\"80\" y1=\"180\" x2=\"102\" y2=\"180\" class=\"ln\"/><line x1=\"118\" y1=\"180\" x2=\"140\" y2=\"180\" class=\"ln\"/><line x1=\"102\" y1=\"169\" x2=\"102\" y2=\"191\" class=\"ln\"/><line x1=\"118\" y1=\"169\" x2=\"118\" y2=\"191\" class=\"ln\"/><text x=\"110\" y=\"160\" class=\"txs txc\">Q0.0 Motor</text>\n<line x1=\"140\" y1=\"180\" x2=\"230\" y2=\"180\" class=\"ln\"/><rect x=\"230\" y=\"150\" width=\"100\" height=\"60\" class=\"ln flb\"/><text x=\"280\" y=\"168\" class=\"tx txb txc\">TON</text><text x=\"280\" y=\"184\" class=\"txs txc\">PT = T#5s</text><text x=\"280\" y=\"200\" class=\"txs txc\">on-delay</text>\n<line x1=\"330\" y1=\"180\" x2=\"418\" y2=\"180\" class=\"ln\"/><circle cx=\"430\" cy=\"180\" r=\"12\" class=\"ln fla\"/><text x=\"430\" y=\"158\" class=\"txs txc\">Q0.1 Belt 2</text><line x1=\"442\" y1=\"180\" x2=\"600\" y2=\"180\" class=\"ln\"/>\n<line x1=\"40\" y1=\"272\" x2=\"80\" y2=\"272\" class=\"ln\"/>\n<line x1=\"80\" y1=\"272\" x2=\"102\" y2=\"272\" class=\"ln\"/><line x1=\"118\" y1=\"272\" x2=\"140\" y2=\"272\" class=\"ln\"/><line x1=\"102\" y1=\"261\" x2=\"102\" y2=\"283\" class=\"ln\"/><line x1=\"118\" y1=\"261\" x2=\"118\" y2=\"283\" class=\"ln\"/><text x=\"110\" y=\"252\" class=\"txs txc\">I0.2 Bottle</text>\n<line x1=\"140\" y1=\"272\" x2=\"230\" y2=\"272\" class=\"ln\"/><rect x=\"230\" y=\"242\" width=\"100\" height=\"60\" class=\"ln flb\"/><text x=\"280\" y=\"260\" class=\"tx txb txc\">CTU</text><text x=\"280\" y=\"276\" class=\"txs txc\">PV = 24</text><text x=\"280\" y=\"292\" class=\"txs txc\">R = I0.3</text>\n<line x1=\"330\" y1=\"272\" x2=\"418\" y2=\"272\" class=\"ln\"/><circle cx=\"430\" cy=\"272\" r=\"12\" class=\"ln fla\"/><text x=\"430\" y=\"250\" class=\"txs txc\">Q0.2 Case full</text><line x1=\"442\" y1=\"272\" x2=\"600\" y2=\"272\" class=\"ln\"/>\n<text x=\"320\" y=\"334\" class=\"txs txm txc\">Rung 1: start/stop with seal-in. Rung 2: 5 s on-delay. Rung 3: count 24 bottles.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "**Rung 1** is the PLC version of the seal-in circuit (Module 12). Pressing Start (I0.0) energises the motor coil Q0.0. Its own contact in parallel with Start keeps the coil on after release. The **Stop** button is wired as a normally closed contact in the field so that a broken wire stops the motor; the input is therefore TRUE when healthy, and the program uses an ordinary normally open contact I0.1. Forgetting this inversion is a common beginner's error."
    },
    {
     "t": "h",
     "x": "Timers"
    },
    {
     "t": "table",
     "head": [
      "Timer",
      "Behaviour",
      "Example"
     ],
     "rows": [
      [
       "TON (on-delay)",
       "Output Q turns on after the input has been on for the preset time PT; resets at once when the input goes off",
       "Start the second conveyor 5 s after the first"
      ],
      [
       "TOF (off-delay)",
       "Q turns on immediately; stays on for PT after the input turns off",
       "Fan run-on after the heater stops"
      ],
      [
       "TP (pulse)",
       "A fixed-length output pulse is produced when the input rises",
       "Horn sounds for 3 s before start-up"
      ]
     ],
     "cap": "IEC timers (the elapsed time is ET and the preset is PT)"
    },
    {
     "t": "h",
     "x": "Counters"
    },
    {
     "t": "p",
     "x": "A **CTU (count up)** counter increases its current value CV by one on each rising edge of its count input CU. Its output Q turns on when CV reaches the preset PV. The reset input R sets CV back to zero. A **CTD (count down)** counts down from a loaded value; **CTUD** does both."
    },
    {
     "t": "worked",
     "title": "Worked example: counting bottles into cases",
     "problem": "Bottles pass a sensor at 120 per minute. A case holds 24 bottles. Rung 3 in Figure 3 counts them. What should the preset be, how often is a case filled, and how long must the sensor pulse be at least if the scan time is 10 ms?",
     "steps": [
      "Preset PV = 24, because the counter should turn on after the 24th bottle.",
      "Time per case = 24 ÷ 120 bottles/min = 0.2 min = 12 s.",
      "At 120 bottles per minute there is one bottle every 0.5 s = 500 ms, so each pulse and gap must exceed the 10 ms scan time with room to spare."
     ],
     "answer": "PV = 24. A case is filled every 12 s, and the 500 ms bottle spacing is far longer than the scan, so a standard input is fast enough. The count input must be a rising-edge contact, and the output Q is used to start the case change and reset the counter."
    },
    {
     "t": "worked",
     "title": "Worked example: scaling an analogue input",
     "problem": "A temperature transmitter measures 0 to 150 °C and a PLC analogue input returns raw values from 0 (4 mA) to 10 000 (20 mA). What temperature does a raw value of 4000 represent?",
     "steps": [
      "Fraction of span = 4000 ÷ 10 000 = 0.4.",
      "Temperature = 0 + 0.4 × 150 = 60 °C."
     ],
     "answer": "60 °C. In general: value = low + raw ÷ raw range × (high − low). Use REAL variables so decimals are kept, and check the module manual for the raw range."
    },
    {
     "t": "tip",
     "x": "Never use the same output coil in two places in the program. The last rung executed wins, which gives confusing results. Use one coil per output and combine the conditions with parallel contacts."
    },
    {
     "t": "key",
     "items": [
      "Contacts in series are AND; in parallel are OR; a coil sets its bit to the rung result.",
      "A seal-in rung keeps an output on after a momentary start; NC field stop buttons appear as normally open contacts in the program.",
      "TON delays turning on, TOF delays turning off and TP gives a fixed pulse.",
      "CTU counts rising edges up to its preset PV; R resets it.",
      "Scale analogue values: low + raw ÷ range × span."
     ]
    }
   ]
  },
  {
   "id": "m15-l4",
   "title": "Structured programs and sequences",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "A short program with a few rungs is easy to write. A machine with hundreds of I/O points needs structure so that anyone can find and fix a fault."
    },
    {
     "t": "h",
     "x": "Comparison and maths instructions"
    },
    {
     "t": "ul",
     "items": [
      "**Comparison:** equal, not equal, greater than, less than. They act like contacts: true if the comparison holds. Use them for alarms (temperature > 90) and level control.",
      "**Maths:** add, subtract, multiply, divide, scale and square root work on INT, DINT or REAL. Check for **division by zero** and for overflow.",
      "**Move and convert:** copy a value from one variable to another, converting the type if required."
     ]
    },
    {
     "t": "p",
     "x": "In structured text the start/stop rung would be written: Motor := (Start OR Motor) AND Stop_OK; and a high temperature alarm would be: IF Temp > 90.0 THEN Alarm := TRUE; END_IF; ST is ideal for formulas such as the scaling above, and for loops."
    },
    {
     "t": "h",
     "x": "State machines and sequences"
    },
    {
     "t": "p",
     "x": "Most machines go through a fixed sequence: wait, load, clamp, process, release, unload. The safest and clearest way to program this is a **state machine**: an integer variable holds the current step, and each step has actions to do and a **transition** condition to move to the next. SFC draws exactly this as graphical steps."
    },
    {
     "t": "table",
     "head": [
      "Step",
      "Action",
      "Transition to next step"
     ],
     "rows": [
      [
       "0 Idle",
       "All outputs off",
       "Start pressed and part present"
      ],
      [
       "1 Clamp",
       "Close the clamp cylinder",
       "Clamp-closed sensor on"
      ],
      [
       "2 Drill",
       "Drill motor on, feed cylinder out",
       "Depth sensor on"
      ],
      [
       "3 Retract",
       "Feed cylinder in, drill off",
       "Feed-home sensor on"
      ],
      [
       "4 Release",
       "Open clamp",
       "Clamp-open sensor on, then return to 0"
      ]
     ],
     "cap": "A simple drilling machine as a state machine"
    },
    {
     "t": "p",
     "x": "Rules for sequences: only one step is active at a time; outputs are set by the step, not by many separate rungs; each transition needs a sensor or timer **and** a timeout alarm that reports which step failed to complete. A stalled step with a timeout tells the technician exactly where to look."
    },
    {
     "t": "h",
     "x": "Alarms, modes and safety of the logic"
    },
    {
     "t": "ul",
     "items": [
      "Provide **manual and automatic modes**, with manual movements interlocked so that dangerous combinations are impossible.",
      "Define the **start-up and fault state** of every output: what happens at power-up, after an alarm and when the PLC stops. Outputs normally fail off.",
      "Keep **alarm text** specific: 'Clamp close timeout' is more useful than 'Fault 12'.",
      "Never rely on program logic alone for personal safety."
     ]
    },
    {
     "t": "key",
     "items": [
      "Comparison instructions act like contacts; maths instructions need care with data types, overflow and division by zero.",
      "Structured text suits calculations; ladder suits discrete logic.",
      "A state machine holds a step number; each step has actions and a transition.",
      "Add timeouts to every transition so faults show where the sequence stopped.",
      "Define the safe state of all outputs at start-up and on fault."
     ]
    }
   ]
  },
  {
   "id": "m15-l5",
   "title": "Commissioning, monitoring and documentation",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "Commissioning a PLC system means proving that the wiring, the program and the machine work together safely. A careful approach saves hours and prevents accidents."
    },
    {
     "t": "steps",
     "title": "A safe PLC commissioning order",
     "items": [
      "Check the electrical installation with the power off: wiring against the drawings, earthing, terminal tightness, and correct supply voltage (Module 3).",
      "Power up with the output loads disconnected or the motors isolated. Check the input LEDs by operating each sensor and pushbutton by hand, and confirm that the correct address changes in the programming software.",
      "Test outputs one at a time in a safe condition using the software's test mode, with a person watching the equipment.",
      "Run the sequence slowly, in manual mode or with reduced speed, and prove each transition and sensor.",
      "Test the fault conditions: emergency stop, power loss, sensor failure, timeouts.",
      "Run in automatic, correct the faults, then freeze and back up the final program."
     ]
    },
    {
     "t": "h",
     "x": "Online monitoring and forcing"
    },
    {
     "t": "p",
     "x": "In **online** mode the programming software connects to the running PLC and shows live values: rungs highlight when they are true and variables display their current value. This is the technician's best fault-finding tool. **Forcing** overrides an input or output with a fixed value, regardless of the real signal."
    },
    {
     "t": "warn",
     "x": "Forcing is dangerous. A forced output can start a machine when nobody expects it, and a forced input can hide a real sensor fault or defeat an interlock. Only force with the machine isolated or guarded, tell everyone nearby, record every force, and remove all forces before leaving. Remember that forced values may stay in the PLC after a power cycle on some makes."
    },
    {
     "t": "h",
     "x": "Backups, versions and documentation"
    },
    {
     "t": "ul",
     "items": [
      "Keep a **backup of the program** on at least two media (laptop and a company server or cloud store) with the date and version.",
      "Use **version control** and a change log: who changed what, when and why. Compare the running program with the stored version before and after any modification.",
      "Save the **hardware configuration**, IP addresses and passwords for the CPU, HMI and drives.",
      "Keep **documentation** with the machine: I/O list with addresses and symbols, electrical drawings, network diagram, sequence description and alarm list.",
      "Protect programs with passwords and keep control of laptops and USB drives; see cyber-security in Module 16."
     ]
    },
    {
     "t": "h",
     "x": "Fault finding in PLC systems"
    },
    {
     "t": "table",
     "head": [
      "Symptom",
      "Check"
     ],
     "rows": [
      [
       "CPU fault LED or stopped",
       "Diagnostic buffer in the software, power supply voltage, a corrupted or missing program, a module that is faulty or missing"
      ],
      [
       "Input never changes",
       "Sensor LED, wiring and supply, then the input LED; only then the program"
      ],
      [
       "Output LED on but load off",
       "Output fuse, load supply, relay contacts, load itself"
      ],
      [
       "Output not on although the rung is true",
       "Output disabled or forced; the same coil used twice; the CPU in stop mode"
      ],
      [
       "Random faults",
       "Loose terminals, electrical noise, poor earthing, low supply voltage"
      ]
     ],
     "cap": "PLC symptoms and checks"
    },
    {
     "t": "key",
     "items": [
      "Commission in steps: check wiring, test inputs, test outputs, run slowly, test faults.",
      "Online monitoring shows live logic; forcing overrides signals and is dangerous.",
      "Record and remove every force before leaving.",
      "Back up the program in two places and keep a change log.",
      "Keep an I/O list, drawings and alarm list with the machine."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m15-q1",
   "q": "What is the correct order of the PLC scan cycle?",
   "opts": [
    "Run program, read inputs, write outputs",
    "Read, run program, write outputs",
    "Write outputs, read inputs, run program",
    "Read inputs, write outputs, run program"
   ],
   "a": 1,
   "why": "The CPU first copies the inputs, then solves the program with that copy, then writes the results to the outputs, then repeats."
  },
  {
   "id": "m15-q2",
   "q": "A PLC has a scan time of 10 ms. A sensor gives a 4 ms pulse. What is the risk?",
   "opts": [
    "The output will stay on too long",
    "The pulse may be missed",
    "The CPU will go into stop mode",
    "The timer will overflow at once"
   ],
   "a": 1,
   "why": "Inputs are read once per scan, so a pulse shorter than the scan can start and end between reads and never be seen."
  },
  {
   "id": "m15-q3",
   "q": "Which output type is fastest and silent but switches 24 V DC loads only?",
   "opts": [
    "Relay",
    "Triac",
    "Transistor",
    "Mechanical contactor"
   ],
   "a": 2,
   "why": "Transistor outputs are solid-state, fast and silent but limited to DC loads. Relay outputs are isolated and handle AC and DC."
  },
  {
   "id": "m15-q4",
   "q": "Which IEC 61131-3 language is best suited to heavy calculations and loops?",
   "opts": [
    "Structured Text",
    "Ladder Diagram",
    "Sequential Function Chart",
    "Instruction List"
   ],
   "a": 0,
   "why": "Structured Text is a high-level text language suited to maths, arrays and loops. Ladder is better for discrete logic."
  },
  {
   "id": "m15-q5",
   "q": "What is the largest value an INT variable holds?",
   "opts": [
    "255",
    "65 535",
    "32 767",
    "2 147 483 647"
   ],
   "a": 2,
   "why": "A signed 16-bit INT ranges from −32 768 to 32 767. A DINT is needed for larger values."
  },
  {
   "id": "m15-q6",
   "q": "What is the purpose of the contact in parallel with Start in a seal-in rung?",
   "opts": [
    "To stop the motor safely",
    "To hold the output on",
    "To count the number of starts",
    "To reset the timer when done"
   ],
   "a": 1,
   "why": "The coil's own contact provides a path for power after Start is released, so the output holds itself on."
  },
  {
   "id": "m15-q7",
   "q": "A stop button is wired normally closed in the field. Which contact does the program use for it?",
   "opts": [
    "Normally open: input TRUE when healthy",
    "Normally closed, because the button is NC",
    "A set coil that latches the output",
    "A comparison instruction on the raw value"
   ],
   "a": 0,
   "why": "The input is TRUE while the NC button is healthy and released. A normally open (examine-if-on) contact passes power until the button is pressed or the wire breaks."
  },
  {
   "id": "m15-q8",
   "q": "Which timer keeps its output on for a set time after the input turns off?",
   "opts": [
    "TON (on-delay timer)",
    "CTU (counter)",
    "TP (pulse)",
    "TOF (off-delay)"
   ],
   "a": 3,
   "why": "TOF is the off-delay timer: Q turns on immediately and stays on for PT after the input goes off."
  },
  {
   "id": "m15-q9",
   "q": "A conveyor must start 5 seconds after the first. Which timer fits?",
   "opts": [
    "TON, PT = T#5s",
    "TOF with PT = T#5s",
    "CTU with PV = 5 counts",
    "TP with PT = T#5s"
   ],
   "a": 0,
   "why": "A TON delays turning on: the output comes on 5 s after the input becomes true."
  },
  {
   "id": "m15-q10",
   "q": "Bottles pass at 120 per minute and a case holds 24. How often is a case filled?",
   "opts": [
    "About every 6 s",
    "About every 24 s",
    "Every 12 s",
    "About every 2 s"
   ],
   "a": 2,
   "why": "24 bottles ÷ 120 bottles per minute = 0.2 min = 12 s."
  },
  {
   "id": "m15-q11",
   "q": "A 0 to 150 °C transmitter gives a raw input of 0 to 10 000. What temperature is raw 4000?",
   "opts": [
    "About 40 °C",
    "About 66 °C",
    "About 75 °C",
    "60 °C"
   ],
   "a": 3,
   "why": "4000 ÷ 10 000 = 0.4, and 0.4 × 150 = 60 °C."
  },
  {
   "id": "m15-q12",
   "q": "What is the main advantage of a state machine for a sequence?",
   "opts": [
    "It removes the need for any sensors",
    "It makes the whole program run faster",
    "It shows which step is stuck",
    "It stores the program in the HMI panel"
   ],
   "a": 2,
   "why": "Only one step is active at a time, so the step number and its transition tell you exactly where a stalled sequence is waiting."
  },
  {
   "id": "m15-q13",
   "q": "Why is forcing an output dangerous?",
   "opts": [
    "It can start equipment unexpectedly",
    "It always erases the program from memory",
    "It increases the scan time a great deal",
    "It disables the whole network link"
   ],
   "a": 0,
   "why": "A forced output or input ignores the real logic. It can start a machine without warning or defeat an interlock, so it must be controlled and removed."
  },
  {
   "id": "m15-q14",
   "q": "An output LED is on but the motor does not run. What should you check first?",
   "opts": [
    "The output fuse and the load supply",
    "The program rung and nothing else",
    "The CPU battery and its backup",
    "The cable to the programming PC"
   ],
   "a": 0,
   "why": "The LED proves the PLC has switched the output. The fault is in the field circuit: fuse, supply, contactor or load."
  }
 ],
 "cards": [
  {
   "f": "What are the main parts of a PLC?",
   "b": "Power supply, CPU with memory, input modules and output modules."
  },
  {
   "f": "Relay output versus transistor output?",
   "b": "Relay: isolated, AC or DC, slower, wears. Transistor: fast, silent, DC only."
  },
  {
   "f": "What does a PLC scan do?",
   "b": "Reads inputs, runs the program, writes outputs and does housekeeping, repeatedly."
  },
  {
   "f": "Why can a short pulse be missed?",
   "b": "Inputs are read once per scan, so a pulse shorter than the scan may fall between reads."
  },
  {
   "f": "List the five IEC 61131-3 languages.",
   "b": "LD, FBD, ST, IL and SFC."
  },
  {
   "f": "Size and range of INT?",
   "b": "16 bits, −32 768 to 32 767."
  },
  {
   "f": "What does %I0.0 mean?",
   "b": "Input byte 0, bit 0."
  },
  {
   "f": "Function versus function block?",
   "b": "A function has no memory; a function block keeps its own data in an instance."
  },
  {
   "f": "Series and parallel contacts in ladder?",
   "b": "Series is AND; parallel is OR."
  },
  {
   "f": "Why does an NC stop button appear as a normally open contact in the program?",
   "b": "The input is TRUE when the circuit is healthy, so an examine-if-on contact is used."
  },
  {
   "f": "TON, TOF and TP?",
   "b": "On-delay, off-delay and fixed pulse timers."
  },
  {
   "f": "How does CTU work?",
   "b": "Counts rising edges on CU up to its preset PV; R resets it."
  },
  {
   "f": "Analogue scaling formula?",
   "b": "Value = low + raw ÷ raw range × (high − low)."
  },
  {
   "f": "Three rules for forcing?",
   "b": "Isolate or guard the machine, record every force, and remove all forces afterwards."
  }
 ],
 "terms": [
  {
   "t": "PLC",
   "d": "Programmable logic controller, a rugged industrial computer used to control machines and processes."
  },
  {
   "t": "Scan time",
   "d": "The time the PLC takes to complete one cycle of reading inputs, running the program and writing outputs."
  },
  {
   "t": "Rung",
   "d": "One line of ladder logic that is evaluated left to right."
  },
  {
   "t": "Seal-in",
   "d": "A contact of an output placed in parallel with the start condition to keep the output on."
  },
  {
   "t": "TON",
   "d": "On-delay timer: Q goes true after the input has been true for the preset time."
  },
  {
   "t": "CTU",
   "d": "Count-up counter that counts rising edges until it reaches its preset value."
  },
  {
   "t": "Function block",
   "d": "Reusable program unit with its own stored data."
  },
  {
   "t": "State machine",
   "d": "A program structure where the current step decides the actions and what transition is next."
  },
  {
   "t": "Forcing",
   "d": "Overriding an input or output with a fixed value regardless of the real signal."
  },
  {
   "t": "I/O list",
   "d": "A table listing every input and output with its address, name and description."
  },
  {
   "t": "Sinking input",
   "d": "A digital input that draws current from the sensor, normally used with PNP sensors."
  }
 ],
 "formulas": [
  {
   "n": "Analogue scaling",
   "f": "V = low + raw ÷ range × (high − low)",
   "v": "Use REAL variables"
  },
  {
   "n": "Case-fill time",
   "f": "t = bottles per case ÷ rate",
   "v": "Same time unit throughout"
  },
  {
   "n": "Minimum pulse for reliable reading",
   "f": "t(pulse) > scan time",
   "v": "Allow margin of about 2 ×"
  },
  {
   "n": "4–20 mA to engineering units",
   "f": "V = LRV + (I − 4) ÷ 16 × span",
   "v": "See Module 11"
  },
  {
   "n": "INT range",
   "f": "−2¹⁵ to 2¹⁵ − 1",
   "v": "−32 768 to 32 767"
  }
 ]
});
