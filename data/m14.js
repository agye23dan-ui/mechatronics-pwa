window.MECH.register({
 "id": "m14",
 "n": 14,
 "title": "Pneumatics and Electro-pneumatics",
 "short": "Pneumatics",
 "group": "Fluid Power",
 "blurb": "Compressed-air systems from compressor to cylinder: air preparation, cylinders, valves, speed control, electro-pneumatic circuits, sequence diagrams and fault finding under ISO 4414.",
 "outcomes": [
  "Describe the parts of a compressed-air supply and why air is cooled, dried and filtered",
  "Calculate cylinder force on both strokes and air consumption",
  "Size a receiver for a given demand",
  "Interpret ISO 1219-1 pneumatic valve symbols, including 3/2, 5/2 and 5/3 valves",
  "Choose meter-in or meter-out speed control",
  "Read an electro-pneumatic circuit and a displacement-step diagram",
  "Find leaks and faults in pneumatic systems",
  "Work safely with compressed air following ISO 4414"
 ],
 "lessons": [
  {
   "id": "m14-l1",
   "title": "Compressed air supply and distribution",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "**Pneumatics** uses compressed air to do work. Air is clean at the point of use, safe in explosive atmospheres, fast and cheap to install, which is why it drives the cylinders and grippers on most packaging, assembly and handling machines. Its drawbacks are that air is compressible, so positioning is less stiff than hydraulics, and that producing compressed air is energy-hungry: typically only a small fraction of the electrical energy that enters the compressor ends up as useful work."
    },
    {
     "t": "svg",
     "alt": "Block diagram of a compressed air chain: compressor, aftercooler, receiver, dryer, main line and a filter regulator lubricator unit, each joined by an arrow.",
     "cap": "Figure 1: from compressor to machine",
     "svg": "<svg viewBox=\"0 0 690 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m14-f1-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<text x=\"345\" y=\"30\" class=\"tx txb txc\">From atmosphere to the machine: the compressed air chain</text>\n<rect x=\"10\" y=\"80\" width=\"92\" height=\"56\" class=\"ln fla\"/><text x=\"56\" y=\"112\" class=\"tx txb txc\">Compressor</text><text x=\"56\" y=\"162\" class=\"txs txc\">makes the</text><text x=\"56\" y=\"176\" class=\"txs txc\">air</text><line x1=\"102\" y1=\"108\" x2=\"120\" y2=\"108\" class=\"ln\" marker-end=\"url(#m14-f1-arr)\"/><rect x=\"122\" y=\"80\" width=\"92\" height=\"56\" class=\"ln flb\"/><text x=\"168\" y=\"112\" class=\"tx txb txc\">Aftercooler</text><text x=\"168\" y=\"162\" class=\"txs txc\">cools it,</text><text x=\"168\" y=\"176\" class=\"txs txc\">drops water</text><line x1=\"214\" y1=\"108\" x2=\"232\" y2=\"108\" class=\"ln\" marker-end=\"url(#m14-f1-arr)\"/><rect x=\"234\" y=\"80\" width=\"92\" height=\"56\" class=\"ln fl\"/><text x=\"280\" y=\"112\" class=\"tx txb txc\">Receiver</text><text x=\"280\" y=\"162\" class=\"txs txc\">stores air, evens</text><text x=\"280\" y=\"176\" class=\"txs txc\">out pulses</text><line x1=\"326\" y1=\"108\" x2=\"344\" y2=\"108\" class=\"ln\" marker-end=\"url(#m14-f1-arr)\"/><rect x=\"346\" y=\"80\" width=\"92\" height=\"56\" class=\"ln flb\"/><text x=\"392\" y=\"112\" class=\"tx txb txc\">Dryer</text><text x=\"392\" y=\"162\" class=\"txs txc\">removes</text><text x=\"392\" y=\"176\" class=\"txs txc\">moisture</text><line x1=\"438\" y1=\"108\" x2=\"456\" y2=\"108\" class=\"ln\" marker-end=\"url(#m14-f1-arr)\"/><rect x=\"458\" y=\"80\" width=\"92\" height=\"56\" class=\"ln fl\"/><text x=\"504\" y=\"112\" class=\"tx txb txc\">Main line</text><text x=\"504\" y=\"162\" class=\"txs txc\">sloped, drain</text><text x=\"504\" y=\"176\" class=\"txs txc\">legs</text><line x1=\"550\" y1=\"108\" x2=\"568\" y2=\"108\" class=\"ln\" marker-end=\"url(#m14-f1-arr)\"/><rect x=\"570\" y=\"80\" width=\"92\" height=\"56\" class=\"ln flg\"/><text x=\"616\" y=\"112\" class=\"tx txb txc\">FRL unit</text><text x=\"616\" y=\"162\" class=\"txs txc\">filter, regulator,</text><text x=\"616\" y=\"176\" class=\"txs txc\">oil mist</text>\n<text x=\"345\" y=\"52\" class=\"txs txm txc\">Air leaves the compressor hot and wet; each stage makes it cooler, drier and more stable.</text>\n<line x1=\"10\" y1=\"206\" x2=\"680\" y2=\"206\" class=\"ln1 lnm dash\"/>\n<text x=\"345\" y=\"230\" class=\"txs txm txc\">Typical working pressure at the machine: 6 bar gauge. Always drain condensate from the receiver and filters.</text>\n</svg>"
    },
    {
     "t": "h",
     "x": "Compressors"
    },
    {
     "t": "table",
     "head": [
      "Type",
      "How it works",
      "Typical use"
     ],
     "rows": [
      [
       "Piston (reciprocating)",
       "A piston in a cylinder compresses the air; two stages for higher pressure",
       "Workshops; small to medium flows"
      ],
      [
       "Rotary screw",
       "Two meshing screws trap and squeeze the air",
       "Factories needing continuous supply"
      ],
      [
       "Scroll",
       "An orbiting scroll gives smooth, quiet, oil-free air",
       "Small oil-free applications"
      ],
      [
       "Rotary vane",
       "A rotor with sliding vanes in an offset housing",
       "Medium flow, quiet"
      ]
     ],
     "cap": "Common compressor types"
    },
    {
     "t": "p",
     "x": "Compressors are rated by **free air delivery (FAD)**, the volume of air at atmospheric conditions that they deliver per minute, usually in L/min or m³/min. This is the figure to compare with the machine's consumption."
    },
    {
     "t": "h",
     "x": "Treatment and storage"
    },
    {
     "t": "ul",
     "items": [
      "**Aftercooler:** cools the hot air so that most of its water vapour condenses and can be drained.",
      "**Receiver (air tank):** stores air, smooths pressure pulses, cools the air further and lets the compressor run in cycles instead of continuously. It has a safety valve, a pressure gauge and a drain.",
      "**Dryer:** a refrigerant dryer cools the air to about 3 °C to condense moisture; a desiccant dryer adsorbs it for very dry air that must not freeze.",
      "**Distribution pipes:** slope the main slightly (about 1 in 100) towards drain points and take branches off the top so condensate does not run into the machines.",
      "**FRL unit (service unit):** a **filter** removes particles and water, a **regulator** sets and holds the working pressure (normally 6 bar), and a **lubricator** adds an oil mist when the equipment needs it. Modern components are often designed for oil-free air, so check before adding oil."
     ]
    },
    {
     "t": "h",
     "x": "Receiver sizing and leaks"
    },
    {
     "t": "formula",
     "x": "V = Q × t × p(atm) ÷ Δp",
     "where": "V receiver volume (L), Q demand (L/min of free air), t time the receiver alone supplies the demand (min), Δp allowable pressure drop (bar), p(atm) = 1 bar."
    },
    {
     "t": "worked",
     "title": "Worked example: receiver size",
     "problem": "A machine needs a burst of 300 L/min of free air for 30 seconds. The compressor cannot respond, and the pressure may fall by no more than 1 bar. What receiver volume is required?",
     "steps": [
      "t = 30 s = 0.5 min.",
      "V = 300 × 0.5 × 1 ÷ 1 = 150 L."
     ],
     "answer": "A receiver of at least 150 L. In practice, fit the next standard size up, for example 200 L."
    },
    {
     "t": "p",
     "x": "**Leaks** are the biggest waste in most plants. A leak is audible as a hiss; in a noisy plant a spray of soapy water or an ultrasonic detector finds them. Fix leaks at joints, hoses, fittings, quick-release couplings and worn cylinder seals."
    },
    {
     "t": "worked",
     "title": "Worked example: the energy cost of leaks",
     "problem": "A survey finds leaks totalling 150 L/min of free air. A compressor needs roughly 6.5 kW per m³/min of free air produced. The plant runs 6000 hours a year. Estimate the wasted energy.",
     "steps": [
      "150 L/min = 0.15 m³/min.",
      "Power wasted = 0.15 × 6.5 = 0.98 kW.",
      "Energy = 0.98 × 6000 = 5850 kWh per year."
     ],
     "answer": "About 5850 kWh a year is wasted by leaks. The figure of 6.5 kW per m³/min is typical; use the compressor's data sheet where available."
    },
    {
     "t": "key",
     "items": [
      "Compressed air is clean, fast and safe but is compressible and costly to make.",
      "Air is cooled, stored, dried and filtered before use; typical working pressure is 6 bar.",
      "Compressors are rated by free air delivery (FAD).",
      "V = Q × t × p(atm) ÷ Δp sizes a receiver.",
      "Leaks are the main waste; find and fix them regularly."
     ]
    }
   ]
  },
  {
   "id": "m14-l2",
   "title": "Cylinders: force and air consumption",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "The pneumatic **cylinder** turns air pressure into straight-line force. As in hydraulics, force is pressure times area, but the pressures are lower (about 6 bar, so 0.6 MPa) and cylinders are usually specified by bore diameter."
    },
    {
     "t": "ul",
     "items": [
      "**Single-acting cylinder:** air moves it one way and a spring returns it. Simple and uses less air, but the spring takes part of the force and the stroke is limited.",
      "**Double-acting cylinder:** air drives both directions and is controlled by a 5/2 or 5/3 valve. This is the most common type.",
      "**Cushioning:** adjustable air cushions slow the piston near the end of its stroke so that it does not hit the cover.",
      "**Rodless, guided and compact cylinders:** save space or take side loads; check the maker's data for the load limits.",
      "**Magnetic piston:** a magnet on the piston is detected by reed or Hall sensors on the barrel to show piston position."
     ]
    },
    {
     "t": "formula",
     "x": "F = p × A",
     "where": "Use SI units. Extend: A = π ÷ 4 × D². Retract: A = π ÷ 4 × (D² − d²), where D is the bore and d the rod diameter. This is the theoretical force; friction takes about 5 to 15 %."
    },
    {
     "t": "worked",
     "title": "Worked example: cylinder force",
     "problem": "A double-acting cylinder has a 50 mm bore and a 20 mm rod and works at 6 bar. Find the theoretical force on the extend and retract strokes, and a usable force if friction takes 10 %.",
     "steps": [
      "6 bar = 6 × 10⁵ Pa.",
      "Extend area = π ÷ 4 × 0.05² = 1.963 × 10⁻³ m². F = 6 × 10⁵ × 1.963 × 10⁻³ = 1178 N.",
      "Rod area = π ÷ 4 × 0.02² = 3.14 × 10⁻⁴ m². Retract area = 1.963 × 10⁻³ − 3.14 × 10⁻⁴ = 1.649 × 10⁻³ m². F = 6 × 10⁵ × 1.649 × 10⁻³ = 989 N.",
      "Usable force after 10 % friction: extend 1178 × 0.9 = 1060 N; retract 989 × 0.9 = 890 N."
     ],
     "answer": "Theoretical: 1178 N extending and 989 N retracting. Usable: about 1060 N and 890 N."
    },
    {
     "t": "p",
     "x": "Choose a cylinder so that the load needs no more than about **70 %** of the theoretical force. The extra margin allows for friction, acceleration and pressure drops; a cylinder running near its limit moves slowly and unevenly."
    },
    {
     "t": "h",
     "x": "Air consumption"
    },
    {
     "t": "p",
     "x": "Each stroke fills the cylinder with air at working pressure. To compare with the compressor's free-air delivery, multiply the volume by the **compression ratio**, (working pressure + atmospheric) ÷ atmospheric, using absolute pressure."
    },
    {
     "t": "worked",
     "title": "Worked example: air consumption",
     "problem": "The cylinder above has a 200 mm stroke and works at 6 bar gauge (7 bar absolute) for 20 complete cycles per minute. How much free air does it use?",
     "steps": [
      "Extend volume = 1.963 × 10⁻³ × 0.2 = 3.93 × 10⁻⁴ m³ = 0.393 L. Retract volume = 1.649 × 10⁻³ × 0.2 = 0.330 L. Total per cycle = 0.723 L.",
      "Compression ratio = 7 ÷ 1 = 7. Free air per cycle = 0.723 × 7 = 5.06 L.",
      "At 20 cycles per minute: 5.06 × 20 = 101 L/min."
     ],
     "answer": "About 5.1 L of free air per cycle, or about 101 L/min. The tubing between valve and cylinder adds to this, so shorter pipes save air."
    },
    {
     "t": "tip",
     "x": "Fit the valve as close to the cylinder as possible. Long tubes add dead volume that must be filled and exhausted every stroke, which wastes air and slows the movement."
    },
    {
     "t": "key",
     "items": [
      "Force = pressure × area; the retract force is smaller because of the rod.",
      "Use no more than about 70 % of the theoretical force for the load.",
      "Single-acting cylinders have a spring return; double-acting cylinders are driven both ways.",
      "Air consumption uses the compression ratio: (p gauge + 1) ÷ 1.",
      "Short tubes reduce air use and make movement faster."
     ]
    }
   ]
  },
  {
   "id": "m14-l3",
   "title": "Valves, symbols and speed control",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Pneumatic circuit diagrams use the symbols of **ISO 1219-1**. Each square in a valve symbol is a **position**, and the number of connections is the number of **ports**. A **5/2** valve has five ports and two positions. Ports are numbered: **1** is the pressure supply, **2** and **4** are the working outputs, and **3** and **5** are exhausts. The pilot connections are **12** (joins 1 to 2) and **14** (joins 1 to 4)."
    },
    {
     "t": "table",
     "head": [
      "Valve",
      "Ports / positions",
      "Use"
     ],
     "rows": [
      [
       "3/2 normally closed",
       "3 ports, 2 positions: 1 blocked at rest",
       "Single-acting cylinders, air supply on/off, vacuum"
      ],
      [
       "3/2 normally open",
       "Supply passes to 2 at rest",
       "Safety functions such as resetting"
      ],
      [
       "5/2",
       "5 ports, 2 positions",
       "Double-acting cylinders (single or double solenoid)"
      ],
      [
       "5/3 closed centre",
       "5 ports, 3 positions, all blocked in the centre",
       "Stopping a cylinder mid-stroke (it drifts, since air compresses)"
      ],
      [
       "5/3 exhaust centre",
       "Both cylinder ports vented in the centre",
       "A cylinder that must be free to move or depressurised"
      ]
     ],
     "cap": "Common pneumatic directional valves"
    },
    {
     "t": "h",
     "x": "Actuation"
    },
    {
     "t": "ul",
     "items": [
      "**Solenoid (direct):** the coil moves the spool directly; used on small valves.",
      "**Solenoid with pilot (indirect):** a small solenoid valve lets air push the main spool. It needs a minimum supply pressure, which is why a pilot-operated valve may stick when the pressure is low.",
      "**Spring return:** the valve returns when the signal goes. A **bistable (double-solenoid)** valve stays where it was put even if the power fails; it is used where the position must be held, and needs one signal per direction.",
      "**Manual and mechanical:** pushbutton, lever, roller. A manual override on a solenoid valve lets the technician move it without an electrical signal (useful in fault finding)."
     ]
    },
    {
     "t": "h",
     "x": "Speed control"
    },
    {
     "t": "p",
     "x": "A **one-way flow control valve** (throttle with a bypass check valve) restricts the flow in one direction only and passes it freely in the other."
    },
    {
     "t": "table",
     "head": [
      "Method",
      "Where it throttles",
      "Result"
     ],
     "rows": [
      [
       "Meter-in",
       "The air entering the cylinder",
       "The piston can jump if the load pulls it; best for single-acting cylinders and small cylinders"
      ],
      [
       "Meter-out",
       "The air leaving the cylinder",
       "Trapped air on the exhaust side acts as a cushion, giving smoother, stable speed; the usual choice for double-acting cylinders"
      ]
     ],
     "cap": "Meter-in or meter-out"
    },
    {
     "t": "p",
     "x": "A **quick-exhaust valve** vents the cylinder directly at the cylinder port instead of through the long pipe and the valve, so a single-acting cylinder or the extend stroke moves much faster. A **vacuum generator** (ejector) turns a flow of compressed air into vacuum through a venturi, and suction cups use it to lift sheets, boxes and components."
    },
    {
     "t": "warn",
     "x": "A 5/3 closed-centre valve does not hold a vertical load safely, because air leaks and compresses. Use a mechanical lock or a pilot-operated check valve where the load could fall, and never put your hand in the path of a pneumatic cylinder during a fault test."
    },
    {
     "t": "key",
     "items": [
      "Ports: 1 supply, 2 and 4 outputs, 3 and 5 exhausts; a 5/2 valve has five ports and two positions.",
      "A bistable valve remembers its last position; a spring-return valve returns when the signal stops.",
      "Pilot valves need a minimum pressure to shift.",
      "Meter-out is the usual choice for double-acting cylinders.",
      "Quick-exhaust valves speed up cylinder movement; ejectors make vacuum for suction cups."
     ]
    }
   ]
  },
  {
   "id": "m14-l4",
   "title": "Electro-pneumatic circuits and sequences",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "On automatic machines the valves are operated by **solenoids** signalled by relays or a PLC (Module 15), and the position of each cylinder is confirmed by sensors, usually magnetic reed or Hall sensors on the barrel. This is **electro-pneumatics**: a pneumatic power circuit with an electrical control circuit."
    },
    {
     "t": "svg",
     "alt": "A double acting cylinder with magnetic sensors B1 and B2 at its ends, controlled by a five-two valve with a solenoid Y1 and spring return, and one-way flow control valves in each line.",
     "cap": "Figure 2: a 5/2 single-solenoid valve driving a double-acting cylinder with sensors",
     "svg": "<svg viewBox=\"0 0 620 330\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m14-f2-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<rect x=\"230\" y=\"40\" width=\"160\" height=\"34\" class=\"ln fl\"/>\n<line x1=\"290\" y1=\"40\" x2=\"290\" y2=\"74\" class=\"ln\"/>\n<line x1=\"290\" y1=\"57\" x2=\"470\" y2=\"57\" class=\"ln\"/><line x1=\"390\" y1=\"57\" x2=\"470\" y2=\"57\" class=\"ln\"/>\n<rect x=\"244\" y=\"28\" width=\"14\" height=\"10\" class=\"ln fla\"/><text x=\"251\" y=\"22\" class=\"txs txb txc\">B1</text>\n<rect x=\"362\" y=\"28\" width=\"14\" height=\"10\" class=\"ln fla\"/><text x=\"369\" y=\"22\" class=\"txs txb txc\">B2</text>\n<polyline points=\"325,140 325,110 245,110 245,74\" class=\"ln\"/>\n<polyline points=\"355,140 355,120 375,120 375,74\" class=\"ln\"/>\n<rect x=\"238\" y=\"84\" width=\"14\" height=\"14\" class=\"ln flb\"/><line x1=\"241\" y1=\"95\" x2=\"249\" y2=\"87\" class=\"ln1\"/>\n<rect x=\"368\" y=\"84\" width=\"14\" height=\"14\" class=\"ln flb\"/><line x1=\"371\" y1=\"95\" x2=\"379\" y2=\"87\" class=\"ln1\"/>\n<text x=\"230\" y=\"96\" class=\"txs txe\">flow control</text><text x=\"392\" y=\"96\" class=\"txs\">flow control</text>\n<rect x=\"250\" y=\"140\" width=\"60\" height=\"50\" class=\"ln fla\"/><rect x=\"310\" y=\"140\" width=\"60\" height=\"50\" class=\"ln fl\"/>\n<line x1=\"280\" y1=\"186\" x2=\"265\" y2=\"146\" class=\"ln1\" marker-end=\"url(#m14-f2-arr)\"/>\n<line x1=\"295\" y1=\"146\" x2=\"300\" y2=\"186\" class=\"ln1\" marker-end=\"url(#m14-f2-arr)\"/>\n<line x1=\"340\" y1=\"186\" x2=\"355\" y2=\"146\" class=\"ln1\" marker-end=\"url(#m14-f2-arr)\"/>\n<line x1=\"325\" y1=\"146\" x2=\"320\" y2=\"186\" class=\"ln1\" marker-end=\"url(#m14-f2-arr)\"/>\n<text x=\"318\" y=\"134\" class=\"txs txe\">4</text><text x=\"362\" y=\"134\" class=\"txs\">2</text>\n<text x=\"314\" y=\"204\" class=\"txs txe\">5</text><text x=\"346\" y=\"204\" class=\"txs\">1</text><text x=\"368\" y=\"204\" class=\"txs\">3</text>\n<line x1=\"340\" y1=\"190\" x2=\"340\" y2=\"250\" class=\"ln\"/><text x=\"352\" y=\"248\" class=\"txs\">1 supply, 6 bar</text>\n<line x1=\"320\" y1=\"190\" x2=\"320\" y2=\"206\" class=\"ln\"/><polygon points=\"313,214 327,214 320,206\" class=\"ln fl\"/>\n<line x1=\"360\" y1=\"190\" x2=\"360\" y2=\"206\" class=\"ln\"/><polygon points=\"353,214 367,214 360,206\" class=\"ln fl\"/>\n<polyline points=\"230,165 232.5,160 237.5,170 242.5,160 247.5,170 250,165\" class=\"ln1\"/><rect x=\"210\" y=\"151\" width=\"20\" height=\"28\" class=\"ln fla\"/><text x=\"220\" y=\"144\" class=\"txs txb txc\">Y1</text>\n<polyline points=\"370,165 372.5,160 377.5,170 382.5,160 387.5,170 390,165\" class=\"ln1\"/><text x=\"402\" y=\"169\" class=\"txs\">spring return</text>\n<text x=\"40\" y=\"270\" class=\"tx txb\">Y1 off: spring return, air to port 2, cylinder in.</text>\n<text x=\"40\" y=\"290\" class=\"tx txb\">Y1 on: air to port 4, cylinder extends to sensor B2.</text>\n<text x=\"40\" y=\"314\" class=\"txs txm\">5/2 valve, single solenoid, spring return, meter-out speed control.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "Reading Figure 2: at rest the spring holds the valve so that air passes from 1 to 2, to the rod side, and the cylinder is retracted, with sensor B1 closed. When the controller energises Y1, the valve shifts and air goes from 1 to 4 into the cap side, while the rod side exhausts through 2 and 3 (through its flow control, so the speed is controlled). At the end of the stroke B2 closes and the controller knows that the cylinder is fully out."
    },
    {
     "t": "p",
     "x": "A PLC output drives the solenoid through its output module. The solenoid coil (24 V DC, typically 2 to 5 W) is wired between the output and 0 V, and the sensors are connected to inputs (PNP types are common, Module 11). Add a protection diode or use a module with built-in protection where the output is a transistor, since a coil produces a voltage spike when switched off."
    },
    {
     "t": "h",
     "x": "Sequences and the displacement-step diagram"
    },
    {
     "t": "p",
     "x": "Machines run in sequences. Cylinders are named with letters (A, B, C) and the movements with **+** for extend and **−** for retract. The sequence **A+ B+ A− B−**, for example, means: A extends, B extends, A retracts, B retracts. A **displacement-step diagram** shows each cylinder's position against the step number, so the whole sequence can be seen at a glance."
    },
    {
     "t": "svg",
     "alt": "A displacement step diagram with two cylinders A and B over four steps. A extends in step one, B extends in step two, A retracts in step three, and B retracts in step four.",
     "cap": "Figure 3: displacement-step diagram for the sequence A+ B+ A− B−",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<text x=\"300\" y=\"22\" class=\"tx txb txc\">Displacement-step diagram: sequence A+ B+ A− B−</text>\n<line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"226\" class=\"lnm ln1 dash\"/><line x1=\"220\" y1=\"40\" x2=\"220\" y2=\"226\" class=\"lnm ln1 dash\"/><line x1=\"320\" y1=\"40\" x2=\"320\" y2=\"226\" class=\"lnm ln1 dash\"/><line x1=\"420\" y1=\"40\" x2=\"420\" y2=\"226\" class=\"lnm ln1 dash\"/><line x1=\"520\" y1=\"40\" x2=\"520\" y2=\"226\" class=\"lnm ln1 dash\"/>\n<text x=\"170\" y=\"48\" class=\"txs txb txc\">1 A+</text><text x=\"270\" y=\"48\" class=\"txs txb txc\">2 B+</text><text x=\"370\" y=\"48\" class=\"txs txb txc\">3 A−</text><text x=\"470\" y=\"48\" class=\"txs txb txc\">4 B−</text>\n<text x=\"40\" y=\"94\" class=\"tx txb\">A</text><text x=\"40\" y=\"194\" class=\"tx txb\">B</text>\n<text x=\"64\" y=\"76\" class=\"txs\">out</text><text x=\"64\" y=\"110\" class=\"txs\">in</text>\n<text x=\"64\" y=\"176\" class=\"txs\">out</text><text x=\"64\" y=\"210\" class=\"txs\">in</text>\n<line x1=\"60\" y1=\"80\" x2=\"560\" y2=\"80\" class=\"ln1 lnm\"/><line x1=\"60\" y1=\"114\" x2=\"560\" y2=\"114\" class=\"ln1 lnm\"/>\n<line x1=\"60\" y1=\"180\" x2=\"560\" y2=\"180\" class=\"ln1 lnm\"/><line x1=\"60\" y1=\"214\" x2=\"560\" y2=\"214\" class=\"ln1 lnm\"/>\n<polyline points=\"60,114 120,114 220,80 320,80 420,114 520,114 560,114\" class=\"lnb\"/>\n<polyline points=\"60,214 220,214 320,180 420,180 520,214 560,214\" class=\"lna\"/>\n<text x=\"120\" y=\"250\" class=\"txs txc\">start</text><text x=\"220\" y=\"250\" class=\"txs txc\">A out</text><text x=\"320\" y=\"250\" class=\"txs txc\">B out</text><text x=\"420\" y=\"250\" class=\"txs txc\">A in</text><text x=\"520\" y=\"250\" class=\"txs txc\">B in</text>\n<text x=\"300\" y=\"276\" class=\"txs txm txc\">Each step starts when a sensor confirms the previous movement.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "The control sequence follows the diagram. Step 1 starts when the Start button is pressed and A is retracted. Step 2 begins when the sensor shows A is out, step 3 when B is out, and so on. If any sensor fails to confirm, the sequence stops, and the technician can see which step it is waiting at. This is why **sensor feedback** is used rather than timers: a timer would run on even if a cylinder jammed."
    },
    {
     "t": "steps",
     "title": "Setting up a new electro-pneumatic movement",
     "items": [
      "Check the supply: confirm the regulator reads 6 bar and the air is on.",
      "Reduce the pressure and close the flow controls, then use the manual override to move the valve and check the cylinder direction and sensor signals.",
      "Open the flow controls gradually until the speed is smooth and free of impact.",
      "Adjust the cylinder cushions so the piston stops gently, then raise the pressure if needed.",
      "Set the sensor positions and test the full automatic sequence with the guard in place."
     ]
    },
    {
     "t": "key",
     "items": [
      "Electro-pneumatics combines pneumatic power with an electrical or PLC control.",
      "Single-solenoid 5/2 valves return by spring; double-solenoid valves hold position.",
      "In a sequence, + means extend and − means retract: A+ B+ A− B−.",
      "A displacement-step diagram plots each cylinder's position against step.",
      "Use sensors to confirm each step instead of timers."
     ]
    }
   ]
  },
  {
   "id": "m14-l5",
   "title": "Fault finding and safety",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "Pneumatic faults are usually easy to find if you follow the air. Check the supply first, then the valve, then the cylinder and sensors."
    },
    {
     "t": "table",
     "head": [
      "Symptom",
      "Likely causes",
      "Check"
     ],
     "rows": [
      [
       "Cylinder does not move",
       "No air; valve not shifting; no solenoid signal; blocked silencer",
       "Supply pressure at the FRL; solenoid LED and voltage; manual override; exhaust silencers"
      ],
      [
       "Cylinder is slow",
       "Low pressure; undersized or kinked tube; flow control set too far closed; blocked silencer",
       "Pressure at the cylinder port; tube length and size; flow controls and silencers"
      ],
      [
       "Cylinder moves jerkily",
       "Dirt or lack of lubricant; worn seals; air pressure too low; meter-in on a pulling load",
       "Seal condition; filter; change to meter-out"
      ],
      [
       "Hissing air",
       "Leak in tube, fitting or worn seal; valve seat leak",
       "Soapy water or leak detector; cylinder exhaust with the valve at rest"
      ],
      [
       "Water in the system",
       "Dryer not working; receiver or filter not drained",
       "Drain valves; dryer temperature; aftercooler"
      ],
      [
       "Valve will not shift",
       "Pilot pressure too low; coil open or burned; spool stuck by dirt",
       "Coil resistance and voltage; manual override; clean air"
      ]
     ],
     "cap": "Pneumatic fault guide"
    },
    {
     "t": "steps",
     "title": "Tracing a cylinder that will not extend",
     "items": [
      "Look at the machine and gauge: is there 6 bar at the FRL unit?",
      "Check that the controller is demanding the movement: is the output on and the solenoid LED lit?",
      "Test the coil voltage at the solenoid. If the voltage is present, operate the manual override. If the cylinder now moves, the coil is faulty or the pilot air is insufficient.",
      "If there is no movement, check the tube to the cylinder: pressure at the port, kinks, a blocked silencer or a closed isolating valve.",
      "If the air reaches the cylinder and it still does not move, check for a mechanical jam or a failed piston seal."
     ]
    },
    {
     "t": "h",
     "x": "Safe working with compressed air (ISO 4414)"
    },
    {
     "t": "ul",
     "items": [
      "**Isolate and exhaust** the system before opening any pipe: switch off and lock out the supply, close the air isolator, and vent the pressure so the gauge reads zero. Stored air in receivers and cylinders can still move parts.",
      "Make sure a loose tube cannot whip: use fittings and clips rated for the pressure, and check for worn hoses.",
      "Air jets can drive dust and metal into eyes or skin and, at high pressure, can inject air into the blood stream through a cut. Never point an air gun at a person, never use it to blow dust off clothing, and keep the blow-gun nozzle pressure below the permitted limit, using an approved safety nozzle.",
      "Wear **eye protection** and **ear defenders** where exhaust noise is high. Fit silencers on exhausts.",
      "Guard moving cylinders and keep hands out of pinch points. Hold up any load that could fall when the air is removed."
     ]
    },
    {
     "t": "warn",
     "x": "Receivers and air tanks are pressure vessels. Never drill, weld or modify them, keep the safety valve free to operate, and have them inspected according to the local regulation."
    },
    {
     "t": "key",
     "items": [
      "Follow the air: supply, valve, tubing, cylinder, then sensors.",
      "The manual override separates electrical faults from pneumatic ones.",
      "Water and dirt in the air damage valves and seals, so drain and filter regularly.",
      "Isolate and exhaust all pressure and support loads before opening a line.",
      "Never point an air gun at anyone or clean clothing with air."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m14-q1",
   "q": "What is the main job of the aftercooler in a compressed-air system?",
   "opts": [
    "To condense water out of the hot air",
    "To raise the pressure of the air stored",
    "To add lubricating oil to the air stream",
    "To measure the flow rate of the air"
   ],
   "a": 0,
   "why": "Hot compressed air carries a lot of water vapour. Cooling it right after the compressor condenses most of it so that it can be drained off."
  },
  {
   "id": "m14-q2",
   "q": "What does the regulator in an FRL unit do?",
   "opts": [
    "It removes dust and particles only",
    "It adds oil mist to the air stream",
    "It dries the air before it is used",
    "It holds the set pressure"
   ],
   "a": 3,
   "why": "The regulator reduces the supply pressure to the required working pressure and holds it steady. The filter cleans the air and the lubricator adds oil mist."
  },
  {
   "id": "m14-q3",
   "q": "A machine needs 300 L/min of free air for 30 seconds, with a permitted pressure drop of 1 bar. What receiver volume is needed?",
   "opts": [
    "300 L",
    "150 L",
    "600 L",
    "75 L"
   ],
   "a": 1,
   "why": "V = Q × t × p(atm) ÷ Δp = 300 × 0.5 × 1 ÷ 1 = 150 L."
  },
  {
   "id": "m14-q4",
   "q": "A cylinder with a 50 mm bore operates at 6 bar. What is its approximate theoretical extend force?",
   "opts": [
    "About 590 N",
    "About 4700 N",
    "About 300 N",
    "About 1180 N"
   ],
   "a": 3,
   "why": "Area = π ÷ 4 × 0.05² = 1.963 × 10⁻³ m². F = 6 × 10⁵ × 1.963 × 10⁻³ = 1178 N."
  },
  {
   "id": "m14-q5",
   "q": "Why is the retract force of a double-acting cylinder smaller than the extend force at the same pressure?",
   "opts": [
    "The spring pushes against it harder",
    "Air pressure is lower on retract",
    "The rod reduces the area",
    "The valve is smaller on the return path"
   ],
   "a": 2,
   "why": "On retraction air acts on the annular area, the piston area minus the rod area, which is smaller, so the force is lower."
  },
  {
   "id": "m14-q6",
   "q": "What is the best rule for selecting a cylinder for a given load?",
   "opts": [
    "Use the smallest bore that will just fit the load",
    "Load about 70 % of theoretical force",
    "Always choose the largest bore that is available",
    "Choose the bore from the stroke length alone"
   ],
   "a": 1,
   "why": "The extra margin allows for friction, acceleration and pressure losses, giving reliable, smooth movement."
  },
  {
   "id": "m14-q7",
   "q": "In ISO 1219-1 valve numbering, what is port 1?",
   "opts": [
    "Exhaust",
    "Output to the cylinder",
    "Pressure supply",
    "Pilot signal to move the valve"
   ],
   "a": 2,
   "why": "Port 1 is the pressure supply; 2 and 4 are the working outputs, 3 and 5 the exhausts."
  },
  {
   "id": "m14-q8",
   "q": "A 5/3 closed-centre valve is used to stop a vertical cylinder in mid-stroke. What is the problem?",
   "opts": [
    "The cylinder will be much too fast",
    "The valve cannot be switched at all",
    "The air supply will be wasted",
    "The load can drift or sag"
   ],
   "a": 3,
   "why": "Air is compressible and leaks past seals, so the position is not held firmly. A mechanical lock is needed for a vertical load."
  },
  {
   "id": "m14-q9",
   "q": "For a double-acting cylinder, which speed control method usually gives the smoothest result?",
   "opts": [
    "Meter-out",
    "Meter-in",
    "No control at all",
    "Throttling the main supply only"
   ],
   "a": 0,
   "why": "Throttling the exhaust air keeps back-pressure on the piston, which cushions the movement and holds speed steady."
  },
  {
   "id": "m14-q10",
   "q": "A single-solenoid, spring-return 5/2 valve loses its electrical signal. What does the cylinder do?",
   "opts": [
    "It stays exactly where it is",
    "It returns by the spring",
    "It extends fully to the end",
    "It vents and then falls freely"
   ],
   "a": 1,
   "why": "The spring moves the valve back to its rest position, so the cylinder goes to the position set by that state. A bistable valve would hold its position."
  },
  {
   "id": "m14-q11",
   "q": "What does the sequence A+ B+ A− B− mean?",
   "opts": [
    "A retracts, then B retracts, then A extends, then B extends",
    "Cylinders extend together, then retract together",
    "A extends, B extends, A retracts, B retracts",
    "A extends twice and B retracts twice"
   ],
   "a": 2,
   "why": "Plus means extend and minus means retract, taken in order: A out, B out, A in, B in."
  },
  {
   "id": "m14-q12",
   "q": "Why do sequence controllers normally use sensors to start the next step instead of timers?",
   "opts": [
    "They are cheaper to buy than timers are",
    "Timers cannot count seconds accurately",
    "Timers use up a lot more compressed air",
    "Sensors prove it finished, so a jam stops it"
   ],
   "a": 3,
   "why": "A timer continues even if a cylinder is jammed. A sensor tells the controller that the movement was completed and shows where the fault is."
  },
  {
   "id": "m14-q13",
   "q": "A cylinder with a 50 mm bore and 20 mm rod uses 0.72 L of air at working pressure per cycle at 6 bar gauge. About how much free air does one cycle use?",
   "opts": [
    "5.1 L",
    "0.72 L",
    "4.3 L",
    "7.2 L"
   ],
   "a": 0,
   "why": "Compression ratio = (6 + 1) ÷ 1 = 7. Free air = 0.72 × 7 = about 5.1 L."
  },
  {
   "id": "m14-q14",
   "q": "Before opening a pneumatic pipe for repair, what must be done?",
   "opts": [
    "Reduce the pressure to 1 bar and carry on",
    "Isolate, lock out and vent to zero",
    "Just switch off the compressor motor",
    "Hold the pipe firmly when disconnecting"
   ],
   "a": 1,
   "why": "Air stored in the receiver and pipes can still move parts or whip a loose tube. Isolate, lock out and vent to zero first."
  }
 ],
 "cards": [
  {
   "f": "Why is compressed air cooled and dried?",
   "b": "Hot compressed air carries water vapour that condenses in pipes and damages valves, cylinders and tools."
  },
  {
   "f": "What is FAD?",
   "b": "Free air delivery: the volume of air at atmospheric conditions that a compressor delivers."
  },
  {
   "f": "What does a receiver do?",
   "b": "Stores air, smooths pressure pulses, cools the air further and lets the compressor cycle."
  },
  {
   "f": "What are the three parts of an FRL unit?",
   "b": "Filter, regulator and lubricator."
  },
  {
   "f": "Typical working pressure of pneumatics?",
   "b": "About 6 bar gauge."
  },
  {
   "f": "Receiver volume formula?",
   "b": "V = Q × t × p(atm) ÷ Δp."
  },
  {
   "f": "Force of a pneumatic cylinder?",
   "b": "F = p × A. On retract use A = piston area minus rod area."
  },
  {
   "f": "Air consumption calculation?",
   "b": "Cylinder volume × compression ratio, where the ratio = (gauge + 1) ÷ 1."
  },
  {
   "f": "Port numbers on a 5/2 valve?",
   "b": "1 supply; 2 and 4 outputs; 3 and 5 exhausts."
  },
  {
   "f": "What does a bistable valve do?",
   "b": "It stays in the last position it was given when the signal is removed."
  },
  {
   "f": "Meter-in or meter-out for double-acting cylinders?",
   "b": "Meter-out gives smoother, more stable speed control."
  },
  {
   "f": "What does a quick-exhaust valve do?",
   "b": "Vents the cylinder directly to atmosphere so it moves faster."
  },
  {
   "f": "What does A+ B− mean?",
   "b": "Cylinder A extends, cylinder B retracts."
  },
  {
   "f": "What is the first step in a pneumatic repair?",
   "b": "Isolate, lock out and exhaust all the air and support any load."
  }
 ],
 "terms": [
  {
   "t": "FAD",
   "d": "Free air delivery, the compressor output expressed as air volume at atmospheric conditions."
  },
  {
   "t": "Receiver",
   "d": "A pressure vessel that stores compressed air and smooths out demand."
  },
  {
   "t": "FRL unit",
   "d": "A filter, regulator and lubricator assembly at the point of use."
  },
  {
   "t": "Double-acting cylinder",
   "d": "A cylinder that is driven by air in both directions."
  },
  {
   "t": "5/2 valve",
   "d": "A directional valve with five ports and two positions, used for double-acting cylinders."
  },
  {
   "t": "Bistable valve",
   "d": "A valve that holds its position until it receives the opposite signal; also called a memory valve."
  },
  {
   "t": "Meter-out",
   "d": "Speed control that throttles the exhaust air leaving a cylinder."
  },
  {
   "t": "Quick-exhaust valve",
   "d": "A valve that vents cylinder air at the cylinder to speed up movement."
  },
  {
   "t": "Ejector",
   "d": "A vacuum generator that makes suction using a venturi and compressed air."
  },
  {
   "t": "Displacement-step diagram",
   "d": "A chart showing each cylinder's position against the step of the sequence."
  },
  {
   "t": "Condensate",
   "d": "Water that condenses from compressed air as it cools."
  }
 ],
 "formulas": [
  {
   "n": "Cylinder force",
   "f": "F = p × A",
   "v": "Retract: A = π ÷ 4 × (D² − d²)"
  },
  {
   "n": "Air consumption",
   "f": "V(free) = V(working) × (p + 1) ÷ 1",
   "v": "p in bar gauge"
  },
  {
   "n": "Receiver size",
   "f": "V = Q × t × p(atm) ÷ Δp",
   "v": "L, L/min, min, bar"
  },
  {
   "n": "Cylinder load limit",
   "f": "F(load) ≤ 0.7 × F(theory)",
   "v": "Typical design margin"
  },
  {
   "n": "Leak energy",
   "f": "P ≈ Q(m³/min) × 6.5 kW",
   "v": "Typical figure; use the compressor data"
  }
 ]
});
