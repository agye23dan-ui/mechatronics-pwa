window.MECH.register({
 "id": "m20",
 "n": 20,
 "title": "System Integration, Commissioning and Project Work",
 "short": "Integration & Commissioning",
 "group": "Systems & Maintenance",
 "blurb": "Bring the course together: specification, component sizing, panel layout and EMC, documentation, commissioning, safety validation and handover of a complete mechatronic system.",
 "outcomes": [
  "Describe the mechatronic design process and the V-model from requirements to handover",
  "Distinguish factory acceptance testing from site acceptance testing",
  "Size a conveyor drive chain: power, motor, gearbox, drive, breaker and cable",
  "Check cable voltage drop and choose an enclosure IP rating",
  "Lay out a control panel with segregation, earthing and EMC in mind",
  "Prepare drawings, an I/O list and a cause-and-effect table",
  "Follow a safe commissioning sequence with the right tests at each stage",
  "Explain risk assessment, stop categories and safety validation at overview level"
 ],
 "lessons": [
  {
   "id": "m20-l1",
   "title": "From requirements to handover: the design process",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "A mechatronic project turns a need into a working machine. It combines every skill in this course: mechanical drives, electrical supply and protection, sensors, drives, PLC programming, networks, safety and maintenance. Projects fail less often from a single bad component than from unclear requirements, weak testing and poor documentation, so a clear process matters."
    },
    {
     "t": "svg",
     "alt": "The V-model. On the left, steps go down: requirements, system design, detailed design, build. On the right, matching test steps go up: component tests, factory acceptance and integration, site acceptance, handover. Dashed lines join each design level to the test that checks it.",
     "cap": "Figure 1: the V-model of design and testing",
     "svg": "<svg viewBox=\"0 0 700 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m20-f1-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<text x=\"100\" y=\"22\" class=\"tx txb txc\">Design and build</text><text x=\"600\" y=\"22\" class=\"tx txb txc\">Test and prove</text>\n<rect x=\"14\" y=\"36\" width=\"170\" height=\"46\" class=\"ln fla\"/><text x=\"99\" y=\"56\" class=\"tx txb txc\">1 Requirements</text><text x=\"99\" y=\"72\" class=\"txs txc\">what must it do?</text><rect x=\"516\" y=\"36\" width=\"170\" height=\"46\" class=\"ln flg\"/><text x=\"601\" y=\"56\" class=\"tx txb txc\">Handover</text><text x=\"601\" y=\"72\" class=\"txs txc\">user acceptance</text><line x1=\"184\" y1=\"59\" x2=\"516\" y2=\"59\" class=\"ln1 lnm dash\" marker-end=\"url(#m20-f1-arr)\"/><line x1=\"99\" y1=\"82\" x2=\"135\" y2=\"98\" class=\"ln\" marker-end=\"url(#m20-f1-arr)\"/><line x1=\"565\" y1=\"144\" x2=\"601\" y2=\"128\" class=\"ln\" marker-end=\"url(#m20-f1-arr)\"/><rect x=\"50\" y=\"98\" width=\"170\" height=\"46\" class=\"ln fla\"/><text x=\"135\" y=\"118\" class=\"tx txb txc\">2 System design</text><text x=\"135\" y=\"134\" class=\"txs txc\">architecture, I/O, safety</text><rect x=\"480\" y=\"98\" width=\"170\" height=\"46\" class=\"ln flg\"/><text x=\"565\" y=\"118\" class=\"tx txb txc\">SAT on site</text><text x=\"565\" y=\"134\" class=\"txs txc\">site acceptance test</text><line x1=\"220\" y1=\"121\" x2=\"480\" y2=\"121\" class=\"ln1 lnm dash\" marker-end=\"url(#m20-f1-arr)\"/><line x1=\"135\" y1=\"144\" x2=\"171\" y2=\"160\" class=\"ln\" marker-end=\"url(#m20-f1-arr)\"/><line x1=\"529\" y1=\"206\" x2=\"565\" y2=\"190\" class=\"ln\" marker-end=\"url(#m20-f1-arr)\"/><rect x=\"86\" y=\"160\" width=\"170\" height=\"46\" class=\"ln fla\"/><text x=\"171\" y=\"180\" class=\"tx txb txc\">3 Detailed design</text><text x=\"171\" y=\"196\" class=\"txs txc\">drawings, program, selection</text><rect x=\"444\" y=\"160\" width=\"170\" height=\"46\" class=\"ln flg\"/><text x=\"529\" y=\"180\" class=\"tx txb txc\">FAT and integration</text><text x=\"529\" y=\"196\" class=\"txs txc\">factory acceptance test</text><line x1=\"256\" y1=\"183\" x2=\"444\" y2=\"183\" class=\"ln1 lnm dash\" marker-end=\"url(#m20-f1-arr)\"/><line x1=\"171\" y1=\"206\" x2=\"207\" y2=\"222\" class=\"ln\" marker-end=\"url(#m20-f1-arr)\"/><line x1=\"493\" y1=\"268\" x2=\"529\" y2=\"252\" class=\"ln\" marker-end=\"url(#m20-f1-arr)\"/><rect x=\"122\" y=\"222\" width=\"170\" height=\"46\" class=\"ln fla\"/><text x=\"207\" y=\"242\" class=\"tx txb txc\">4 Build</text><text x=\"207\" y=\"258\" class=\"txs txc\">panel, program, mechanics</text><rect x=\"408\" y=\"222\" width=\"170\" height=\"46\" class=\"ln flg\"/><text x=\"493\" y=\"242\" class=\"tx txb txc\">Component tests</text><text x=\"493\" y=\"258\" class=\"txs txc\">bench and wiring checks</text><line x1=\"292\" y1=\"245\" x2=\"408\" y2=\"245\" class=\"ln1 lnm dash\" marker-end=\"url(#m20-f1-arr)\"/>\n<text x=\"350\" y=\"158\" class=\"txs txm txc\">each test level checks</text><text x=\"350\" y=\"172\" class=\"txs txm txc\">the design level opposite</text>\n</svg>"
    },
    {
     "t": "h",
     "x": "The steps"
    },
    {
     "t": "ol",
     "items": [
      "**Requirements:** write down what the machine must do in measurable terms: throughput (for example 60 parts per minute), product sizes and masses, supply voltage, environment, safety needs, operator interface and standards. Agree this with the customer in writing.",
      "**System design:** choose the architecture: the mechanical concept, the actuators, the controller, the sensors, the safety system and the network. Draw a block diagram, estimate the loads and decide the I/O count.",
      "**Detailed design:** select and size each component, draw the circuit diagrams, the pneumatic or hydraulic diagrams and the panel layout, write the PLC program and design the HMI screens.",
      "**Build:** make the panel, wire it, fit the mechanics and load the program. Test each part as it is built.",
      "**Test and prove:** each test level checks the design level opposite it, as the V shows."
     ]
    },
    {
     "t": "table",
     "head": [
      "Test",
      "Where",
      "What it proves"
     ],
     "rows": [
      [
       "Component and wiring checks",
       "Workshop",
       "Each device works; wires are correct, tight and labelled; insulation and earth tests pass"
      ],
      [
       "FAT (factory acceptance test)",
       "At the builder, before delivery",
       "The complete machine meets the specification on the test bench, witnessed by the customer"
      ],
      [
       "SAT (site acceptance test)",
       "At the customer's site",
       "It works with the real supplies, product and operators; the final adjustments are made"
      ],
      [
       "Handover",
       "Site",
       "Training, documentation and spares delivered; the customer accepts the machine"
      ]
     ],
     "cap": "Testing stages"
    },
    {
     "t": "p",
     "x": "Finding a fault at the FAT is cheap. Finding it on site, with production waiting, is expensive. Therefore prepare a written FAT checklist from the requirements, and keep each signed copy."
    },
    {
     "t": "tip",
     "x": "Change control: when the customer asks for a change during the project, write it down, agree the effect on the cost, time and safety, and update the drawings and program. Unrecorded changes are the commonest cause of drawings that do not match the machine."
    },
    {
     "t": "key",
     "items": [
      "Write measurable requirements first and agree them in writing.",
      "The V-model matches each design level with a test level.",
      "Test each part during the build; the FAT proves the machine at the factory; the SAT proves it on site.",
      "Fixing faults early is cheaper; keep signed test checklists.",
      "Control and record every change."
     ]
    }
   ]
  },
  {
   "id": "m20-l2",
   "title": "Selecting and sizing components",
   "minutes": 12,
   "body": [
    {
     "t": "p",
     "x": "Sizing means choosing components that are large enough to do the job safely but not so large that they waste money. Work from the load backwards: the load decides the motor, the motor decides the drive, the cable and the protection."
    },
    {
     "t": "table",
     "head": [
      "Item",
      "Main selection points"
     ],
     "rows": [
      [
       "Motor",
       "Power and speed, torque at start and running, duty cycle, supply voltage, IP rating and insulation class, mounting, brake or encoder (Module 7)"
      ],
      [
       "Gearbox",
       "Ratio, output torque with a service factor, efficiency, backlash and mounting"
      ],
      [
       "Drive",
       "Rated current at least the motor's full-load current, overload capability, supply, control inputs, braking, filters (Module 10)"
      ],
      [
       "Protection",
       "Short-circuit and overload protection, and contactors suited to the starting current (Module 12)"
      ],
      [
       "Cable",
       "Current rating after derating, voltage drop, short-circuit withstand, EMC screening (IEC 60364)"
      ],
      [
       "PLC and I/O",
       "I/O count plus 20 % spare, analogue and special modules, communications, memory (Module 15)"
      ],
      [
       "Sensors",
       "Sensing range, output type matching the inputs, environment and IP rating (Module 11)"
      ],
      [
       "24 V supply",
       "Current for all loads with about 25 % reserve, protected by fuses or breakers per branch"
      ],
      [
       "Safety devices",
       "Performance level needed from the risk assessment, certified safety relays, switches and curtains"
      ]
     ],
     "cap": "What to check for each component"
    },
    {
     "t": "h",
     "x": "A sizing chain for a conveyor"
    },
    {
     "t": "worked",
     "title": "Worked example: from load to motor and drive",
     "problem": "A belt conveyor carries 500 kg of product up a 5° incline at 0.5 m/s. The moving mass of the belt and rollers adds up to 100 kg, so the total moving mass is 600 kg with a rolling friction coefficient of 0.05. The drive drum has a diameter of 0.2 m. Overall mechanical efficiency from the motor shaft to the belt is 0.85. Find the belt force, the motor power with a 1.5 service factor, the gearbox ratio for a 1400 rev/min motor, and check the motor torque.",
     "steps": [
      "Friction force = μ × m × g = 0.05 × 600 × 9.81 = 294 N. Incline force on the product = 500 × 9.81 × sin 5° = 500 × 9.81 × 0.0872 = 428 N. Total belt force = 294 + 428 = 722 N.",
      "Power at the belt = F × v = 722 × 0.5 = 361 W. At the motor shaft = 361 ÷ 0.85 = 425 W. With the 1.5 service factor: 425 × 1.5 = 637 W. The next standard motor size is 0.75 kW.",
      "Drum speed = v ÷ (π × D) = 0.5 ÷ (π × 0.2) = 0.796 rev/s = 47.7 rev/min. Gearbox ratio = 1400 ÷ 47.7 = 29.3, so choose 30:1. The drum then turns at 1400 ÷ 30 = 46.7 rev/min and the belt speed is 0.489 m/s; the drive can raise the frequency slightly (to about 51 Hz) to reach exactly 0.5 m/s.",
      "Torque check: drum torque = F × r = 722 × 0.1 = 72.2 N·m. Motor torque needed = 72.2 ÷ (30 × 0.85) = 2.83 N·m. The rated torque of a 0.75 kW motor at 1400 rev/min = 9550 × 0.75 ÷ 1400 = 5.1 N·m, so there is a margin of about 80 %."
     ],
     "answer": "Belt force 722 N; motor 0.75 kW (637 W needed); gearbox 30:1; the motor runs at 2.83 N·m against a rating of 5.1 N·m. Select a 0.75 kW drive with the motor's full-load current of about 1.9 A (nameplate) and set the protection to this current."
    },
    {
     "t": "worked",
     "title": "Worked example: motor cable voltage drop",
     "problem": "The 0.75 kW motor above (full-load current 1.9 A, 400 V three phase) is wired with 1.5 mm² copper cable over 15 m. Estimate the voltage drop. Copper resistivity is 0.0175 Ω·mm²/m.",
     "steps": [
      "Resistance of one conductor = ρ × L ÷ A = 0.0175 × 15 ÷ 1.5 = 0.175 Ω.",
      "Three-phase drop = √3 × I × R = 1.732 × 1.9 × 0.175 = 0.58 V.",
      "As a percentage of 400 V: 0.58 ÷ 400 × 100 = 0.14 %."
     ],
     "answer": "About 0.58 V, or 0.14 %, far below the usual limit of a few percent. The 1.5 mm² cable is more than adequate for voltage drop, and its current rating, derating and short-circuit protection must also be checked."
    },
    {
     "t": "p",
     "x": "Notice that the drive output cable is long and carries switching edges: use screened motor cable, keep it short and bond the screen at both ends to the drive and the motor (Module 10). Check the drive's maximum motor cable length."
    },
    {
     "t": "key",
     "items": [
      "Size from the load backwards: load, gearbox, motor, drive, protection and cable.",
      "Belt power = force × speed; divide by efficiency and apply a service factor.",
      "Gearbox ratio = motor speed ÷ drum speed.",
      "Check the motor torque against its rating as well as its power.",
      "Check the cable for current rating, voltage drop and short-circuit protection; leave spare I/O and supply capacity."
     ]
    }
   ]
  },
  {
   "id": "m20-l3",
   "title": "Panel layout, earthing and EMC",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "The control panel is the heart of the machine. A well-laid-out panel works reliably, can be maintained quickly and passes its tests the first time. Industrial panel assemblies are built and verified to the **IEC 61439** series, and the builder remains responsible for the design verification and routine tests."
    },
    {
     "t": "svg",
     "alt": "A control panel layout divided into a power zone on the left, containing an isolator and breaker, a contactor and a drive, and a control zone on the right containing the power supply, the PLC and I/O, and a safety relay. Separate power and signal terminal strips lie below and an earth bar runs along the bottom.",
     "cap": "Figure 2: panel layout with power and control zones",
     "svg": "<svg viewBox=\"0 0 680 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<rect x=\"30\" y=\"20\" width=\"400\" height=\"272\" class=\"ln fl\"/>\n<text x=\"130\" y=\"42\" class=\"tx txb txc\">Power zone</text><text x=\"330\" y=\"42\" class=\"tx txb txc\">Control zone</text>\n<rect x=\"60\" y=\"56\" width=\"130\" height=\"34\" class=\"ln fla\"/><text x=\"125\" y=\"78\" class=\"txs txb txc\">Q1 isolator, MPCB</text><rect x=\"60\" y=\"104\" width=\"130\" height=\"34\" class=\"ln fla\"/><text x=\"125\" y=\"126\" class=\"txs txb txc\">K1 contactor</text><rect x=\"60\" y=\"152\" width=\"130\" height=\"56\" class=\"ln flb\"/><text x=\"125\" y=\"185\" class=\"txs txb txc\">Drive (VSD)</text>\n<rect x=\"270\" y=\"56\" width=\"130\" height=\"34\" class=\"ln flg\"/><text x=\"335\" y=\"78\" class=\"txs txb txc\">24 V DC supply</text><rect x=\"270\" y=\"104\" width=\"130\" height=\"56\" class=\"ln flg\"/><text x=\"335\" y=\"137\" class=\"txs txb txc\">PLC and I/O</text><rect x=\"270\" y=\"174\" width=\"130\" height=\"34\" class=\"ln flr\"/><text x=\"335\" y=\"196\" class=\"txs txb txc\">Safety relay</text>\n<line x1=\"230\" y1=\"52\" x2=\"230\" y2=\"226\" class=\"ln1 lnm dash\"/>\n<rect x=\"50\" y=\"226\" width=\"160\" height=\"24\" class=\"ln fla\"/><text x=\"130\" y=\"243\" class=\"txs txb txc\">Power terminals</text><rect x=\"250\" y=\"226\" width=\"160\" height=\"24\" class=\"ln flg\"/><text x=\"330\" y=\"243\" class=\"txs txb txc\">Signal terminals</text>\n<line x1=\"30\" y1=\"266\" x2=\"430\" y2=\"266\" class=\"ln lng\"/><text x=\"230\" y=\"284\" class=\"txs txm txc\">PE earth bar on the bonded mounting plate</text>\n<text x=\"450\" y=\"60\" class=\"tx txb\">Good layout</text>\n<text x=\"450\" y=\"84\" class=\"txs\">Power and signal zones apart,</text><text x=\"450\" y=\"98\" class=\"txs\">with separate ducts.</text>\n<text x=\"450\" y=\"124\" class=\"txs\">Cross power and signal cables</text><text x=\"450\" y=\"138\" class=\"txs\">at right angles only.</text>\n<text x=\"450\" y=\"164\" class=\"txs\">Screens earthed at one end</text><text x=\"450\" y=\"178\" class=\"txs\">(analogue signals).</text>\n<text x=\"450\" y=\"204\" class=\"txs\">Short, thick earth bonds to the</text><text x=\"450\" y=\"218\" class=\"txs\">mounting plate for the drive.</text>\n<text x=\"450\" y=\"244\" class=\"txs\">Leave room for heat and for</text><text x=\"450\" y=\"258\" class=\"txs\">future additions.</text>\n</svg>"
    },
    {
     "t": "h",
     "x": "Layout rules"
    },
    {
     "t": "ul",
     "items": [
      "**Segregate** power (motor, mains, drive output) from low-level signals (sensors, analogue, network). Use separate ducts and cross at right angles when they must cross. A drive's output cable is the strongest noise source.",
      "**Arrange** components in logical order from the incoming supply downwards. Keep the drive and its filter close together and allow for **cooling**: drives and power supplies need space above and below, and the panel may need fans, filters or air conditioning for the ambient temperature.",
      "**Mark** every component and wire to match the drawings. Fit ferrules on stranded wire ends, and torque terminals to the maker's value.",
      "**Leave space:** about 20 % spare room in the duct and on the DIN rail for modifications.",
      "**Fit** a panel lamp, a socket for the programming laptop and a pocket for the drawings if the specification asks for them."
     ]
    },
    {
     "t": "h",
     "x": "Earthing and EMC"
    },
    {
     "t": "p",
     "x": "**Protective earthing** keeps people safe: every exposed metal part is bonded to the protective earth (PE) bar and the continuity is tested (IEC 60364). **Functional earthing and EMC bonding** keep the electronics working: electrical noise from drives and contactors can corrupt signals and make a PLC behave randomly."
    },
    {
     "t": "ul",
     "items": [
      "Mount the equipment on a **bare, bonded metal plate** with good contact (remove paint at the mounting points) and bond the plate to the PE bar with short, thick (or braided) conductors.",
      "**Screened cables:** bond the screen of the motor cable at both ends, with a 360° clamp rather than a long 'pigtail'. For analogue signals, earth the screen at one end only (Module 11).",
      "Fit **suppressors** (diodes, RC networks or varistors) across inductive loads such as coils.",
      "Keep **mains filters** and chokes close to the drive and follow the drive maker's EMC guidance.",
      "Use **one clean star point** for the 0 V of sensitive circuits as recommended by the maker."
     ]
    },
    {
     "t": "h",
     "x": "Enclosure protection: IP rating (IEC 60529)"
    },
    {
     "t": "p",
     "x": "The **IP code** has two digits. The first digit gives protection against solid objects and dust (5 = dust-protected, 6 = dust-tight). The second gives protection against water (4 = splashing, 5 = water jets, 6 = powerful jets, 7 = temporary immersion). An enclosure indoors in a clean room may be IP54; one that is washed down needs IP65 or IP66."
    },
    {
     "t": "table",
     "head": [
      "IP code",
      "Meaning",
      "Typical use"
     ],
     "rows": [
      [
       "IP20",
       "Protected against fingers; no protection against water",
       "Panel interior, clean control rooms"
      ],
      [
       "IP54",
       "Dust-protected; splashing water",
       "Ordinary workshop or factory"
      ],
      [
       "IP65",
       "Dust-tight; water jets",
       "Dusty or hosed-down areas"
      ],
      [
       "IP66",
       "Dust-tight; powerful water jets",
       "Wash-down and outdoor equipment with good seals"
      ],
      [
       "IP67",
       "Dust-tight; temporary immersion",
       "Sensors and connectors that may be submerged"
      ]
     ],
     "cap": "Common IP ratings"
    },
    {
     "t": "warn",
     "x": "Cutting a hole in an enclosure for a gland or a fan destroys its IP rating unless a matching, correctly fitted gland, filter or seal is used. Always replace seals and fit blanking plugs to unused holes."
    },
    {
     "t": "key",
     "items": [
      "Separate power and signal zones and ducts; give drives enough cooling.",
      "Bond metal parts to PE and mount on a bonded, unpainted plate for good EMC.",
      "Bond motor cable screens at both ends; earth analogue screens at one end.",
      "IP digits: dust (first) and water (second); keep seals intact.",
      "Leave spare room, label everything and torque terminals correctly."
     ]
    }
   ]
  },
  {
   "id": "m20-l4",
   "title": "A complete system and its documentation",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Consider a **sorting cell**: parts travel on a belt conveyor, a photocell detects each part, an inductive sensor checks whether it is metal, and an air cylinder (diverter) pushes plastic parts into a separate chute. An operator starts and stops the cell, and an emergency stop and a guard on the transfer point are required."
    },
    {
     "t": "svg",
     "alt": "The sorting cell. The power path from the supply through a motor protection breaker, a drive and a motor to the conveyor. The control path has a 24 V supply, a safety relay, a PLC, sensors and a diverter valve. The PLC gives the drive a run and speed signal and the safety relay gives it a safe-torque-off signal.",
     "cap": "Figure 3: power and control path of a conveyor sorting cell",
     "svg": "<svg viewBox=\"0 0 680 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m20-f2-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<text x=\"10\" y=\"26\" class=\"txs txb\">Power path</text>\n<rect x=\"10\" y=\"40\" width=\"100\" height=\"50\" class=\"ln fla\"/><text x=\"60\" y=\"62\" class=\"tx txb txc\">Supply</text><text x=\"60\" y=\"78\" class=\"txs txc\">400 V, 50 Hz</text><rect x=\"130\" y=\"40\" width=\"100\" height=\"50\" class=\"ln fl\"/><text x=\"180\" y=\"62\" class=\"tx txb txc\">Q1</text><text x=\"180\" y=\"78\" class=\"txs txc\">MPCB, isolator</text><rect x=\"250\" y=\"40\" width=\"100\" height=\"50\" class=\"ln flb\"/><text x=\"300\" y=\"62\" class=\"tx txb txc\">Drive</text><text x=\"300\" y=\"78\" class=\"txs txc\">0.75 kW VSD</text><rect x=\"370\" y=\"40\" width=\"100\" height=\"50\" class=\"ln fla\"/><text x=\"420\" y=\"62\" class=\"tx txb txc\">Motor</text><text x=\"420\" y=\"78\" class=\"txs txc\">and gearbox</text><rect x=\"490\" y=\"40\" width=\"100\" height=\"50\" class=\"ln fl\"/><text x=\"540\" y=\"62\" class=\"tx txb txc\">Conveyor</text><text x=\"540\" y=\"78\" class=\"txs txc\">belt, 0.5 m/s</text>\n<line x1=\"110\" y1=\"65\" x2=\"128\" y2=\"65\" class=\"ln\" marker-end=\"url(#m20-f2-arr)\"/><line x1=\"230\" y1=\"65\" x2=\"248\" y2=\"65\" class=\"ln\" marker-end=\"url(#m20-f2-arr)\"/><line x1=\"350\" y1=\"65\" x2=\"368\" y2=\"65\" class=\"ln\" marker-end=\"url(#m20-f2-arr)\"/><line x1=\"470\" y1=\"65\" x2=\"488\" y2=\"65\" class=\"ln\" marker-end=\"url(#m20-f2-arr)\"/>\n<text x=\"10\" y=\"168\" class=\"txs txb\">Control path</text>\n<rect x=\"10\" y=\"180\" width=\"100\" height=\"50\" class=\"ln fla\"/><text x=\"60\" y=\"202\" class=\"tx txb txc\">24 V DC</text><text x=\"60\" y=\"218\" class=\"txs txc\">supply</text><rect x=\"130\" y=\"180\" width=\"100\" height=\"50\" class=\"ln flr\"/><text x=\"180\" y=\"202\" class=\"tx txb txc\">Safety relay</text><text x=\"180\" y=\"218\" class=\"txs txc\">E-stop, guard</text><rect x=\"250\" y=\"180\" width=\"100\" height=\"50\" class=\"ln flg\"/><text x=\"300\" y=\"202\" class=\"tx txb txc\">PLC</text><text x=\"300\" y=\"218\" class=\"txs txc\">program, I/O</text><rect x=\"370\" y=\"180\" width=\"100\" height=\"50\" class=\"ln fl\"/><text x=\"420\" y=\"202\" class=\"tx txb txc\">Sensors</text><text x=\"420\" y=\"218\" class=\"txs txc\">photocell, metal</text><rect x=\"490\" y=\"180\" width=\"100\" height=\"50\" class=\"ln fl\"/><text x=\"540\" y=\"202\" class=\"tx txb txc\">Diverter</text><text x=\"540\" y=\"218\" class=\"txs txc\">air valve</text>\n<line x1=\"110\" y1=\"205\" x2=\"128\" y2=\"205\" class=\"ln\" marker-end=\"url(#m20-f2-arr)\"/>\n<line x1=\"230\" y1=\"205\" x2=\"248\" y2=\"205\" class=\"ln\" marker-end=\"url(#m20-f2-arr)\"/>\n<line x1=\"370\" y1=\"205\" x2=\"352\" y2=\"205\" class=\"ln\" marker-end=\"url(#m20-f2-arr)\"/>\n<polyline points=\"300,230 300,262 540,262 540,232\" class=\"ln\" marker-end=\"url(#m20-f2-arr)\"/>\n<line x1=\"318\" y1=\"180\" x2=\"318\" y2=\"92\" class=\"ln1 lnm dash\" marker-end=\"url(#m20-f2-arr)\"/>\n<polyline points=\"180,180 180,136 266,136 266,92\" class=\"ln dash\" marker-end=\"url(#m20-f2-arr)\"/>\n<text x=\"326\" y=\"146\" class=\"txs\">run, speed reference</text>\n<text x=\"172\" y=\"128\" class=\"txs txe\">safe torque off</text>\n<text x=\"400\" y=\"256\" class=\"txs txm\">valve output</text>\n<text x=\"340\" y=\"296\" class=\"txs txm txc\">The PLC controls the cell; the safety relay stops the drive independently of the PLC.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "The design uses topics from across the course. The conveyor motor (Module 7) is fed by a variable speed drive (Module 10) so that the belt speed can be set. The PLC (Module 15) reads the photocell and the metal sensor (Module 11), moves the diverter with a solenoid valve on an air cylinder (Module 14) and talks to the drive and the HMI over a network (Module 16). The safety relay (Module 12) removes the drive's torque (STO) when the emergency stop or the guard opens, independently of the PLC program."
    },
    {
     "t": "h",
     "x": "The required documents"
    },
    {
     "t": "table",
     "head": [
      "Document",
      "Contents"
     ],
     "rows": [
      [
       "Requirements and design specification",
       "What the machine must do; the chosen design and calculations"
      ],
      [
       "Electrical circuit diagrams",
       "Power and control circuits, with symbols to IEC 60617, wire numbers, terminal numbers and cross-references"
      ],
      [
       "Panel layout and parts list",
       "Component positions, ratings and part numbers"
      ],
      [
       "I/O list",
       "Every input and output with address, name, description, device and terminal"
      ],
      [
       "Cause-and-effect table",
       "Shows which inputs make which outputs act, especially for alarms and safety stops"
      ],
      [
       "Pneumatic or hydraulic diagrams",
       "Symbols to ISO 1219, with cylinder, valve and sensor labels"
      ],
      [
       "PLC and HMI programs",
       "Commented programs, with backups and version history"
      ],
      [
       "Test records",
       "FAT and SAT checklists, insulation and earth tests, safety validation"
      ],
      [
       "Manuals and spares list",
       "Operating instructions, maintenance plan, and recommended spares"
      ]
     ],
     "cap": "The documentation set"
    },
    {
     "t": "p",
     "x": "A short **I/O list** extract for the sorting cell:"
    },
    {
     "t": "table",
     "head": [
      "Address",
      "Name",
      "Description"
     ],
     "rows": [
      [
       "%I0.0",
       "Start_PB",
       "Start pushbutton (NO)"
      ],
      [
       "%I0.1",
       "Stop_OK",
       "Stop pushbutton wired NC: TRUE when healthy"
      ],
      [
       "%I0.2",
       "Part_Present",
       "Photocell: part at the sorting position"
      ],
      [
       "%I0.3",
       "Part_Metal",
       "Inductive sensor: metal part"
      ],
      [
       "%I0.4",
       "Safety_OK",
       "Safety relay healthy signal"
      ],
      [
       "%Q0.0",
       "Drive_Run",
       "Run command to the drive"
      ],
      [
       "%Q0.1",
       "Divert_YV1",
       "Solenoid valve to the diverter cylinder"
      ]
     ],
     "cap": "I/O list extract"
    },
    {
     "t": "p",
     "x": "A **cause-and-effect** line reads: Safety_OK false → Drive_Run off, Divert_YV1 off, alarm 'Safety stop' on the HMI. The table is checked during commissioning, so each cause is operated and its effects confirmed."
    },
    {
     "t": "key",
     "items": [
      "A real system joins power, control, sensing, pneumatics and safety; draw both the power and the control path.",
      "The safety circuit works independently of the PLC program.",
      "The documentation set includes the specification, diagrams, I/O list, cause-and-effect table, programs and test records.",
      "Keep documents consistent with the machine: update them after every change.",
      "Use an I/O list to link the drawings, the program and the field devices."
     ]
    }
   ]
  },
  {
   "id": "m20-l5",
   "title": "Commissioning, safety validation and handover",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "Commissioning is the step-by-step bringing to life of the machine. Work in the right order: each stage must pass before the next begins, so a mistake never reaches live power or moving machinery."
    },
    {
     "t": "steps",
     "title": "The commissioning sequence",
     "items": [
      "**Visual and mechanical check:** the machine is built to the drawings; guards, covers and glands are fitted; terminals are tight; there are no tools or swarf left; labels match the diagrams.",
      "**Dead tests:** earth continuity of every metal part to the PE bar; **insulation resistance** (500 V DC, with drives and electronics disconnected, at least 1 MΩ); continuity and correctness of control wiring against the diagrams (IEC 60364, Module 19).",
      "**Supply checks:** confirm the voltage, phase sequence and frequency at the incomer, with the loads isolated. Verify the settings of breakers and overloads against the nameplate currents.",
      "**Power up in stages:** energise the control supply first, check the 24 V and the PLC. Then power the drives and other equipment one at a time.",
      "**I/O check:** operate each input by hand and see it on the PLC screen; test each output with the machine safe. Tick them off on the I/O list.",
      "**Safety function tests:** prove each emergency stop, guard and light curtain. Check that the machine cannot run when the safety circuit is open and cannot restart on its own.",
      "**Motors and mechanics:** bump-start each motor to check the direction of rotation, then run unloaded. Set the drive parameters, ramps and limits.",
      "**Dry run** of the sequence without product, in manual and then in automatic, at reduced speed.",
      "**Load test and tuning:** run with product, check currents against nameplates, and tune loops and speeds (Module 17). Run the machine for a trial period to find intermittent faults.",
      "**Handover:** back up all programs and settings, update the drawings, train the operators and maintainers, hand over the documentation and spares list, and obtain a signed acceptance."
     ]
    },
    {
     "t": "h",
     "x": "Risk assessment and safety validation"
    },
    {
     "t": "p",
     "x": "Safety is designed in from the start, not added at the end. The **risk assessment** identifies each hazard (crushing, entanglement, electric shock, hot surfaces, noise, stored energy), estimates the severity, the exposure and the chance of avoiding it, and decides the protective measures: first remove the hazard by design, then guard it, then warn and train (Module 2)."
    },
    {
     "t": "ul",
     "items": [
      "**ISO 13849-1** rates a safety function by its **performance level (PL a to e)**, depending on the structure (single or redundant channels), the quality of the components, the diagnostic coverage and the failure rates. The risk assessment sets the PL required, and the design is **validated** to show that it achieves that level.",
      "**IEC 61508** is the basic standard for functional safety of electronic systems. It uses **safety integrity levels (SIL 1 to 4)**; it is met at overview level in machinery by choosing certified safety components with the stated rating.",
      "**Stop categories (IEC 60204-1):** category 0 stops at once by removing power; category 1 is a controlled stop, then power is removed; category 2 is a controlled stop with power left on.",
      "**Validation** means testing each safety function in the finished machine against the safety requirements, recording the test and keeping it. Any change to a safety function means a re-test."
     ]
    },
    {
     "t": "warn",
     "x": "Do not bypass, jumper or reprogram a safety device to make a machine run during commissioning. If a safety circuit prevents testing, find out why; do not defeat it. Test with the machine safe, with another person watching and with a clear way to stop."
    },
    {
     "t": "h",
     "x": "The final word on professional practice"
    },
    {
     "t": "p",
     "x": "A good technician leaves a machine safer, cleaner and better documented than they found it. Measure instead of guessing. Write things down. Respect isolation and lock-out (ISO 45001). Check your own work and ask a colleague to check it too. Tell the people who will operate and maintain the machine what you did and why."
    },
    {
     "t": "key",
     "items": [
      "Commission in order: visual check, dead tests, supply check, staged power-up, I/O check, safety tests, dry run, load test, handover.",
      "Do dead tests (earth continuity, insulation) before energising.",
      "Safety functions have a required performance level (ISO 13849-1) and are validated by test.",
      "Never bypass a safety device to commission.",
      "Handover includes backups, updated drawings, training, spares and signed acceptance."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m20-q1",
   "q": "In the V-model, what does the factory acceptance test (FAT) check against?",
   "opts": [
    "The design specification",
    "The customer's invoice and payment terms",
    "The ISO 9001 certificate of the builder",
    "The operator's experience on other machines"
   ],
   "a": 0,
   "why": "The FAT proves the complete machine against the design and specification before it is shipped to the site."
  },
  {
   "id": "m20-q2",
   "q": "Why is it cheaper to find a fault at FAT than at SAT?",
   "opts": [
    "Faults found on site cost nothing extra to fix",
    "FAT is carried out by the customer's own staff",
    "No production is waiting on the bench",
    "The fault is always smaller at the factory"
   ],
   "a": 2,
   "why": "At the factory there is no production waiting, parts are close at hand and no site installation has to be undone."
  },
  {
   "id": "m20-q3",
   "q": "A conveyor needs a belt force of 722 N at 0.5 m/s. What is the power at the belt?",
   "opts": [
    "722 W",
    "144 W",
    "1444 W",
    "361 W"
   ],
   "a": 3,
   "why": "P = F × v = 722 × 0.5 = 361 W."
  },
  {
   "id": "m20-q4",
   "q": "A 425 W shaft power requirement is multiplied by a 1.5 service factor. Which standard motor is the right choice?",
   "opts": [
    "0.37 kW",
    "0.75 kW",
    "0.55 kW standard size",
    "1.5 kW or larger"
   ],
   "a": 1,
   "why": "425 × 1.5 = 637 W, so the next standard size above is 0.75 kW (0.55 kW is too small)."
  },
  {
   "id": "m20-q5",
   "q": "A drum of 0.2 m diameter must give a belt speed of 0.5 m/s. About what drum speed is needed?",
   "opts": [
    "Roughly 24 rev/min",
    "Roughly 95 rev/min",
    "About 48 rev/min",
    "Roughly 150 rev/min"
   ],
   "a": 2,
   "why": "Speed = v ÷ (π × D) = 0.5 ÷ 0.628 = 0.796 rev/s, about 47.7 rev/min."
  },
  {
   "id": "m20-q6",
   "q": "A 1400 rev/min motor drives a drum at 47.7 rev/min. Which gearbox ratio fits best?",
   "opts": [
    "10:1 or lower",
    "20:1",
    "30:1",
    "50:1 or higher"
   ],
   "a": 2,
   "why": "1400 ÷ 47.7 = 29.3, so the nearest standard ratio is 30:1."
  },
  {
   "id": "m20-q7",
   "q": "What should be done with the screen of the cable between a drive and its motor?",
   "opts": [
    "Leave it unconnected",
    "Bond it at both ends with 360° clamps",
    "Earth it at the motor end only",
    "Cut it off"
   ],
   "a": 1,
   "why": "The motor cable is a high-frequency noise source. Bonding the screen at both ends with proper clamps returns the noise current and limits interference."
  },
  {
   "id": "m20-q8",
   "q": "Which layout rule helps stop electrical noise corrupting sensor signals?",
   "opts": [
    "Run power and signal wires together in one duct",
    "Put the drive next to the analogue input card",
    "Separate ducts, crossing at right angles",
    "Use the thinnest wire available for signals"
   ],
   "a": 2,
   "why": "Separating power from signal wiring, and crossing at 90° where necessary, reduces coupling of noise into signals."
  },
  {
   "id": "m20-q9",
   "q": "In an IP65 enclosure, what do the two digits tell you?",
   "opts": [
    "Pressure 6, power 5",
    "Dust-tight and protected against water jets",
    "Protected against fingers and splashing only",
    "Fully submersible"
   ],
   "a": 1,
   "why": "The first digit 6 means dust-tight; the second digit 5 means protected against water jets."
  },
  {
   "id": "m20-q10",
   "q": "What is the purpose of an I/O list?",
   "opts": [
    "To give each I/O an address and name",
    "To list the staff on a project and their roles",
    "To record the cost of each part supplied",
    "To show the colours of the wires only"
   ],
   "a": 0,
   "why": "The I/O list links the drawings, the PLC program and the field devices through a common set of addresses and names."
  },
  {
   "id": "m20-q11",
   "q": "Before energising a new panel, which tests should be done?",
   "opts": [
    "A full-load run with product on the belt",
    "Only a visual check of the labels",
    "Earth continuity and insulation resistance tests",
    "Software updates to the PLC firmware"
   ],
   "a": 2,
   "why": "Dead tests such as earth continuity and insulation resistance are carried out before the supply is connected, to catch faults safely."
  },
  {
   "id": "m20-q12",
   "q": "During commissioning, a safety circuit stops the machine and prevents a test. What should the technician do?",
   "opts": [
    "Bridge the safety contact for the test only",
    "Find and fix the reason; never bypass it",
    "Reprogram the PLC to ignore the input",
    "Remove the guard to reach the machine"
   ],
   "a": 1,
   "why": "Safety devices must never be defeated to make the machine run. Find why the circuit is open and fix the cause."
  },
  {
   "id": "m20-q13",
   "q": "In IEC 60204-1, what is a stop category 1?",
   "opts": [
    "A controlled stop, then power is removed",
    "Power is removed at once",
    "A controlled stop with power left on",
    "A stop by the PLC program only"
   ],
   "a": 0,
   "why": "Category 1 brings the machine to a controlled stop, for example with drive braking, and then removes the power. Category 0 removes power at once."
  },
  {
   "id": "m20-q14",
   "q": "What should be handed over to the customer at the end of a project?",
   "opts": [
    "Only the keys to the control panel",
    "Only the invoice and the receipt",
    "Updated drawings, backups, training and acceptance",
    "The programmer's own laptop and licences"
   ],
   "a": 2,
   "why": "A proper handover includes documentation, backups of programs and settings, operator and maintenance training, a spares list and signed acceptance."
  }
 ],
 "cards": [
  {
   "f": "What are the levels of the V-model?",
   "b": "Requirements, system design, detailed design and build, matched by tests: component, FAT/integration, SAT and handover."
  },
  {
   "f": "FAT versus SAT?",
   "b": "FAT is at the builder's site before delivery; SAT is at the customer's site with real conditions."
  },
  {
   "f": "Belt power formula?",
   "b": "P = F × v, divided by efficiency, then multiplied by a service factor."
  },
  {
   "f": "Drum speed from belt speed?",
   "b": "n = v ÷ (π × D)."
  },
  {
   "f": "Gearbox ratio?",
   "b": "Motor speed ÷ output (drum) speed."
  },
  {
   "f": "Motor rated torque (N·m)?",
   "b": "T = 9550 × P(kW) ÷ n (rev/min)."
  },
  {
   "f": "Three-phase cable voltage drop?",
   "b": "ΔV = √3 × I × R, with R = ρL ÷ A for one conductor."
  },
  {
   "f": "What goes in a panel's power zone and control zone?",
   "b": "Power: isolator, breaker, contactor, drive. Control: 24 V supply, PLC and I/O, safety relay."
  },
  {
   "f": "Screen earthing rule?",
   "b": "Motor cables: bond both ends with 360° clamps. Analogue signals: earth one end."
  },
  {
   "f": "What do the digits of IP65 mean?",
   "b": "6: dust-tight. 5: protected against water jets."
  },
  {
   "f": "What is a cause-and-effect table?",
   "b": "A table showing which inputs make which outputs act, especially for alarms and safety stops."
  },
  {
   "f": "Commissioning order?",
   "b": "Visual check, dead tests, supply check, staged power-up, I/O check, safety tests, dry run, load test, handover."
  },
  {
   "f": "What are the stop categories in IEC 60204-1?",
   "b": "0: power removed at once. 1: controlled stop then power removed. 2: controlled stop with power on."
  },
  {
   "f": "What does ISO 13849-1 use to rate a safety function?",
   "b": "Performance level (PL a to e)."
  }
 ],
 "terms": [
  {
   "t": "V-model",
   "d": "A development model that pairs each design stage with a test stage."
  },
  {
   "t": "FAT",
   "d": "Factory acceptance test: proving the complete machine at the builder before delivery."
  },
  {
   "t": "SAT",
   "d": "Site acceptance test: proving the machine at the customer's site."
  },
  {
   "t": "Service factor",
   "d": "A multiplier applied to the calculated load to give a safety margin in selection."
  },
  {
   "t": "I/O list",
   "d": "A table of every input and output with address, name and description."
  },
  {
   "t": "Cause-and-effect table",
   "d": "A matrix showing which inputs trigger which output actions."
  },
  {
   "t": "Segregation",
   "d": "Keeping power and signal wiring apart to limit electrical noise."
  },
  {
   "t": "IP rating",
   "d": "A two-digit code describing the enclosure's protection against solids and water."
  },
  {
   "t": "Performance level",
   "d": "A rating from a to e of the reliability of a safety function in ISO 13849-1."
  },
  {
   "t": "Validation",
   "d": "Testing a finished safety function to prove that it meets its requirements."
  },
  {
   "t": "Handover",
   "d": "The formal transfer of the machine, documents and training to the customer."
  }
 ],
 "formulas": [
  {
   "n": "Belt power",
   "f": "P = F × v",
   "v": "W, divide by efficiency"
  },
  {
   "n": "Conveyor force",
   "f": "F = μ·m·g + m·g·sin θ",
   "v": "Friction plus incline"
  },
  {
   "n": "Drum speed",
   "f": "n = v ÷ (π × D)",
   "v": "rev/s; × 60 for rev/min"
  },
  {
   "n": "Gearbox ratio",
   "f": "i = n(motor) ÷ n(drum)",
   "v": "Choose the nearest standard ratio"
  },
  {
   "n": "Motor torque",
   "f": "T = 9550 × P ÷ n",
   "v": "P in kW, n in rev/min, T in N·m"
  },
  {
   "n": "Voltage drop (3-phase)",
   "f": "ΔV = √3 × I × ρ × L ÷ A",
   "v": "Single-conductor length L"
  }
 ]
});
