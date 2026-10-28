window.MECH.register({
 "id": "m07",
 "n": 7,
 "title": "Electrical Machines: Motors, Generators and Transformers",
 "short": "Motors and Transformers",
 "group": "Electrical & Electronics",
 "blurb": "Understand how transformers, DC motors and three-phase induction motors work, read a nameplate, connect and test them, and find common faults.",
 "outcomes": [
  "Explain electromagnetic induction and the motor effect and calculate force on a conductor in a magnetic field",
  "Calculate voltage, current and turns ratios for a transformer",
  "Describe the construction and speed control of a DC motor and calculate back-EMF",
  "Calculate synchronous speed and slip of an induction motor",
  "Read a motor nameplate and calculate full-load current from power data",
  "Connect a three-phase motor in star or delta and reverse its direction of rotation",
  "Describe single-phase and synchronous machines and their uses",
  "Test a motor with an insulation resistance tester and diagnose typical motor faults"
 ],
 "lessons": [
  {
   "id": "m07-l1",
   "title": "Magnetism, induction and the motor effect",
   "minutes": 8,
   "body": [
    {
     "t": "p",
     "x": "Every electrical machine in this module works because electricity and magnetism are linked. A current produces a magnetic field around its conductor, and a magnetic field can produce a voltage or a force. Learn these two effects well, because motors, generators, transformers, relays, contactors and solenoid valves all rely on them."
    },
    {
     "t": "p",
     "x": "A magnetic field is described by its **flux density** B, measured in tesla (T), and the total **flux** Φ passing through an area, measured in webers (Wb). Iron and steel concentrate flux, which is why machines use laminated steel cores. A coil wound on an iron core makes a strong **electromagnet**, and the strength grows with the number of turns and the current."
    },
    {
     "t": "h",
     "x": "The motor effect"
    },
    {
     "t": "p",
     "x": "A current-carrying conductor in a magnetic field feels a force. This is the principle of every electric motor. The force is largest when the conductor is at right angles to the field."
    },
    {
     "t": "formula",
     "x": "F = B × I × L",
     "where": "F force in newtons (N), B flux density in tesla (T), I current in amperes (A), L length of conductor in the field in metres (m)"
    },
    {
     "t": "worked",
     "title": "Worked example: force on a conductor",
     "problem": "A conductor 0.2 m long carries 10 A at right angles to a field of 0.5 T. What is the force on it?",
     "steps": [
      "F = B × I × L.",
      "F = 0.5 × 10 × 0.2 = 1.0 N."
     ],
     "answer": "The conductor feels a force of 1.0 N. Winding many turns and using a strong field multiplies this into useful torque."
    },
    {
     "t": "p",
     "x": "The direction of the force follows **Fleming's left-hand rule**: with the thumb, first finger and second finger of the left hand at right angles, the first finger points along the field, the second finger along the current, and the thumb shows the motion. Reversing either the current or the field reverses the force and so the direction of rotation of a motor."
    },
    {
     "t": "h",
     "x": "Electromagnetic induction"
    },
    {
     "t": "p",
     "x": "If the flux linked with a coil changes, a voltage is induced in it. This is **Faraday's law**: the induced voltage is proportional to the number of turns and to the rate of change of flux. **Lenz's law** adds that the induced current opposes the change that produced it. Moving a conductor through a field (a generator) or changing the current in one coil that is linked to another (a transformer) both produce induced voltage."
    },
    {
     "t": "formula",
     "x": "e = N × ΔΦ ÷ Δt",
     "where": "e induced voltage (V), N number of turns, ΔΦ change of flux (Wb), Δt time taken (s)"
    },
    {
     "t": "ul",
     "items": [
      "A **motor** takes electrical energy and produces force and rotation (the motor effect).",
      "A **generator** takes mechanical energy and produces voltage (induction).",
      "A **transformer** transfers energy between coils by changing flux; it has no moving parts.",
      "The same machine can often act as either a motor or a generator, which is how regenerative braking works."
     ]
    },
    {
     "t": "note",
     "x": "Alternating current makes the flux in an iron core reverse 100 times a second on a 50 Hz supply. To prevent heating from eddy currents, the cores of transformers and motors are built from thin, insulated steel laminations rather than solid iron."
    },
    {
     "t": "key",
     "items": [
      "A current in a magnetic field feels a force F = B × I × L; this is the motor effect.",
      "Changing flux in a coil induces a voltage; this is generator and transformer action.",
      "Fleming's left-hand rule gives the direction of the force on a conductor.",
      "Reversing the current or the field reverses the direction of motion.",
      "Laminated cores reduce eddy-current losses."
     ]
    }
   ]
  },
  {
   "id": "m07-l2",
   "title": "Transformers",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "A transformer changes an alternating voltage from one level to another with high efficiency. It has two or more windings on a shared laminated iron core. The winding connected to the supply is the **primary**; the winding connected to the load is the **secondary**. The alternating current in the primary creates an alternating flux in the core, and that flux induces a voltage in the secondary."
    },
    {
     "t": "svg",
     "alt": "A transformer with a laminated core, a primary coil with Np turns on the left, a secondary coil with Ns turns on the right, and the core flux marked.",
     "cap": "Figure 1: single-phase transformer with primary and secondary windings on a shared core",
     "svg": "<svg viewBox=\"0 0 560 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m07-f1-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<rect x=\"170\" y=\"50\" width=\"220\" height=\"190\" class=\"ln fl\"/>\n<rect x=\"215\" y=\"90\" width=\"130\" height=\"110\" class=\"ln fl\"/>\n<path d=\"M215,105 a-14,7 0 0 0 0,14\" class=\"lna\"/><path d=\"M215,119 a-14,7 0 0 0 0,14\" class=\"lna\"/><path d=\"M215,133 a-14,7 0 0 0 0,14\" class=\"lna\"/><path d=\"M215,147 a-14,7 0 0 0 0,14\" class=\"lna\"/><path d=\"M215,161 a-14,7 0 0 0 0,14\" class=\"lna\"/><path d=\"M215,175 a-14,7 0 0 0 0,14\" class=\"lna\"/>\n<path d=\"M345,105 a14,7 0 0 1 0,14\" class=\"lna\"/><path d=\"M345,119 a14,7 0 0 1 0,14\" class=\"lna\"/><path d=\"M345,133 a14,7 0 0 1 0,14\" class=\"lna\"/><path d=\"M345,147 a14,7 0 0 1 0,14\" class=\"lna\"/><path d=\"M345,161 a14,7 0 0 1 0,14\" class=\"lna\"/><path d=\"M345,175 a14,7 0 0 1 0,14\" class=\"lna\"/>\n<path d=\"M200,70 L360,70\" class=\"lnb dash\" marker-end=\"url(#m07-f1-arr)\"/>\n<text x=\"280\" y=\"44\" class=\"txs txc\">core flux Φ (alternating)</text>\n<line x1=\"60\" y1=\"105\" x2=\"212\" y2=\"105\" class=\"ln\"/><line x1=\"60\" y1=\"189\" x2=\"212\" y2=\"189\" class=\"ln\"/>\n<line x1=\"348\" y1=\"105\" x2=\"500\" y2=\"105\" class=\"ln\"/><line x1=\"348\" y1=\"189\" x2=\"500\" y2=\"189\" class=\"ln\"/>\n<circle cx=\"60\" cy=\"105\" r=\"3\" class=\"fi\"/><circle cx=\"60\" cy=\"189\" r=\"3\" class=\"fi\"/>\n<circle cx=\"500\" cy=\"105\" r=\"3\" class=\"fi\"/><circle cx=\"500\" cy=\"189\" r=\"3\" class=\"fi\"/>\n<text x=\"56\" y=\"152\" class=\"tx txe\">Vp</text><text x=\"508\" y=\"152\" class=\"tx\">Vs</text>\n<text x=\"132\" y=\"150\" class=\"tx txc txb\">Np turns</text><text x=\"428\" y=\"150\" class=\"tx txc txb\">Ns turns</text>\n<text x=\"130\" y=\"30\" class=\"tx txc txb\">Primary</text><text x=\"430\" y=\"30\" class=\"tx txc txb\">Secondary</text>\n<text x=\"150\" y=\"270\" class=\"tx txc txb\">Vp ÷ Vs = Np ÷ Ns</text><text x=\"420\" y=\"270\" class=\"tx txc txb\">Ip ÷ Is = Ns ÷ Np</text>\n<text x=\"280\" y=\"288\" class=\"txs txm txc\">Ideal transformer: power in = power out. A step-down unit has fewer secondary turns.</text>\n</svg>"
    },
    {
     "t": "formula",
     "x": "Vp ÷ Vs = Np ÷ Ns = Is ÷ Ip",
     "where": "V voltage, N number of turns, I current; p primary, s secondary. An ideal transformer has no losses."
    },
    {
     "t": "p",
     "x": "The voltage ratio equals the turns ratio. Because power in equals power out, a transformer that steps voltage down steps current up by the same ratio. A distribution transformer that changes 11 kV to 400 V has a ratio of 11 000 ÷ 400 = 27.5 : 1, so the secondary current is 27.5 times the primary current."
    },
    {
     "t": "h",
     "x": "Ratings and three-phase transformers"
    },
    {
     "t": "p",
     "x": "Transformers are rated in **kilovolt-amperes (kVA)**, not kilowatts, because the heating inside depends on the voltage and current regardless of the power factor. For a three-phase transformer or load, the line current follows from the apparent power S and the line voltage VL."
    },
    {
     "t": "formula",
     "x": "I = S ÷ (√3 × VL)",
     "where": "I line current (A), S apparent power (VA), VL line voltage (V), √3 ≈ 1.732"
    },
    {
     "t": "worked",
     "title": "Worked example: transformer currents",
     "problem": "A 500 kVA three-phase transformer is rated 11 kV to 400 V. Find the full-load primary and secondary line currents.",
     "steps": [
      "Primary: I = 500 000 ÷ (1.732 × 11 000) = 500 000 ÷ 19 052 = 26.2 A.",
      "Secondary: I = 500 000 ÷ (1.732 × 400) = 500 000 ÷ 692.8 = 721.7 A.",
      "Check the ratio: 721.7 ÷ 26.2 = 27.5, the same as the voltage ratio."
     ],
     "answer": "The primary line current is about 26 A and the secondary line current about 722 A."
    },
    {
     "t": "worked",
     "title": "Worked example: control transformer",
     "problem": "A control transformer has 1150 primary turns on a 400 V supply and must give 24 V. How many secondary turns are needed?",
     "steps": [
      "Ns = Np × Vs ÷ Vp.",
      "Ns = 1150 × 24 ÷ 400 = 69 turns."
     ],
     "answer": "The secondary needs 69 turns."
    },
    {
     "t": "h",
     "x": "Losses and practical points"
    },
    {
     "t": "ul",
     "items": [
      "**Iron (core) losses** are present whenever the transformer is energised, from eddy currents and the repeated magnetising of the core. They do not depend on the load.",
      "**Copper losses** are the I²R heating in the windings; they rise with the square of the load current.",
      "Large units are cooled by oil, which also insulates. Check oil level, colour, temperature and any leaks.",
      "Winding connections are commonly delta on the high-voltage side and star on the low-voltage side with an earthed neutral, giving 230 V between each phase and neutral from a 400 V three-phase supply.",
      "Transformers are efficient, typically 95 to 99 %, but a poorly ventilated or overloaded unit overheats and its insulation ages quickly."
     ]
    },
    {
     "t": "note",
     "x": "Public supply in Ghana is 230 V single phase and 400 V three phase at 50 Hz, delivered through step-down distribution transformers. Check the nameplate tapping before connecting a transformer, since voltage at the end of a long line can differ from the nominal figure."
    },
    {
     "t": "warn",
     "x": "A current transformer, used to feed meters and protection, must never have its secondary open-circuited while the primary carries current. The voltage can become dangerously high. Short the secondary terminals before disconnecting the instrument."
    },
    {
     "t": "key",
     "items": [
      "Vp ÷ Vs = Np ÷ Ns and, for an ideal transformer, Ip ÷ Is = Ns ÷ Np.",
      "A step-down transformer raises current by the same factor it lowers voltage.",
      "Rate transformers in kVA; three-phase current is I = S ÷ (√3 × VL).",
      "Iron losses are constant, copper losses grow with the square of the load current.",
      "Never open the secondary of a current transformer while it is carrying current."
     ]
    }
   ]
  },
  {
   "id": "m07-l3",
   "title": "DC motors and generators",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "DC motors give good speed control and high starting torque, which is why they are used in traction, cranes, small robots and automation actuators. The DC machine has largely been replaced by AC motors with variable speed drives in industry, but you will still meet DC motors in vehicles, portable tools, servo axes and older plant."
    },
    {
     "t": "h",
     "x": "Construction"
    },
    {
     "t": "ul",
     "items": [
      "**Stator (field):** the fixed part. It carries either field windings or permanent magnets and provides the magnetic field.",
      "**Armature (rotor):** the rotating part, with windings in slots on a laminated core.",
      "**Commutator:** copper segments on the shaft that reverse the current in the armature coils as they pass the field poles, keeping the torque in one direction.",
      "**Brushes:** carbon blocks pressed on the commutator by springs to feed current to the armature. They wear and are changed periodically."
     ]
    },
    {
     "t": "h",
     "x": "Back-EMF"
    },
    {
     "t": "p",
     "x": "When the armature turns in the field, it also acts as a generator and produces a voltage that opposes the supply. This is the **back electromotive force (back-EMF)**. It rises with speed and limits the armature current. The supply voltage must equal the back-EMF plus the voltage drop across the armature resistance."
    },
    {
     "t": "formula",
     "x": "V = E + Ia × Ra",
     "where": "V supply voltage (V), E back-EMF (V), Ia armature current (A), Ra armature resistance (Ω)"
    },
    {
     "t": "worked",
     "title": "Worked example: back-EMF",
     "problem": "A DC motor on a 230 V supply has an armature resistance of 0.5 Ω and takes an armature current of 20 A. Find the back-EMF and the current at the instant of starting with no starting resistance.",
     "steps": [
      "E = V − Ia × Ra = 230 − 20 × 0.5 = 220 V.",
      "At standstill the speed and E are zero, so the starting current is V ÷ Ra = 230 ÷ 0.5 = 460 A."
     ],
     "answer": "The back-EMF is 220 V. The starting current would be 460 A, 23 times normal, so DC motors need a starter or a controlled supply."
    },
    {
     "t": "h",
     "x": "Types of DC motor"
    },
    {
     "t": "table",
     "head": [
      "Type",
      "Field connection",
      "Characteristic",
      "Uses"
     ],
     "rows": [
      [
       "Shunt",
       "Field in parallel with armature",
       "Almost constant speed under changing load",
       "Fans, pumps, machine tools"
      ],
      [
       "Series",
       "Field in series with armature",
       "Very high starting torque; speed rises sharply as load falls",
       "Starters, hoists, traction"
      ],
      [
       "Compound",
       "Both series and shunt fields",
       "Strong starting torque and steadier speed",
       "Presses, rolling mills"
      ],
      [
       "Permanent magnet (PMDC)",
       "Magnets instead of field winding",
       "Speed proportional to voltage; simple",
       "Small drives, servos, battery tools"
      ],
      [
       "Brushless DC (BLDC)",
       "Electronic commutation of a magnet rotor",
       "Efficient, no brushes to wear",
       "Drones, fans, servo drives"
      ]
     ],
     "cap": "Common types of DC motor"
    },
    {
     "t": "p",
     "x": "The speed of a DC motor is changed by varying the armature voltage, which is done with a thyristor or transistor drive (see Module 10), or by weakening the field. Reversing the armature current reverses the direction."
    },
    {
     "t": "warn",
     "x": "Never run a series motor without a load. With no load its speed rises without limit and the armature can fly apart. Likewise, if the field of a shunt motor is lost the motor races. Keep field circuits sound."
    },
    {
     "t": "tip",
     "x": "Brush and commutator condition tell you much about a DC motor. Sparking, a blackened or grooved commutator, or short brushes mean maintenance is due. Replace brushes in sets and bed them in to the commutator."
    },
    {
     "t": "key",
     "items": [
      "DC motors use a stator field, an armature, a commutator and brushes.",
      "Back-EMF E opposes the supply: V = E + Ia × Ra.",
      "Starting current is huge because E is zero at standstill; limit it with a starter or controlled supply.",
      "Speed follows armature voltage; series motors must never run unloaded.",
      "Brushless DC motors replace the commutator with electronics."
     ]
    }
   ]
  },
  {
   "id": "m07-l4",
   "title": "The three-phase induction motor",
   "minutes": 12,
   "body": [
    {
     "t": "p",
     "x": "The three-phase induction motor is the workhorse of industry. It is simple, cheap and rugged: the usual **squirrel-cage** rotor is just bars of aluminium or copper joined by end rings, with no brushes, no commutator and no electrical connection to the rotor at all."
    },
    {
     "t": "h",
     "x": "Rotating field"
    },
    {
     "t": "p",
     "x": "Three windings placed 120° apart in the stator, fed by three currents that are 120° apart in time, create a magnetic field that rotates around the stator. The speed of this field is called the **synchronous speed**. It depends only on the supply frequency and the number of poles."
    },
    {
     "t": "formula",
     "x": "Ns = 120 × f ÷ p",
     "where": "Ns synchronous speed (rpm), f supply frequency (Hz), p number of poles"
    },
    {
     "t": "p",
     "x": "The rotating field cuts the rotor bars and induces currents in them. These currents create their own field, which is pulled round by the stator field, so the rotor turns. The rotor must always run slightly slower than the field, otherwise nothing is induced. The difference is the **slip**."
    },
    {
     "t": "formula",
     "x": "s = (Ns − N) ÷ Ns",
     "where": "s slip as a fraction (× 100 for percent), Ns synchronous speed (rpm), N rotor speed (rpm)"
    },
    {
     "t": "table",
     "head": [
      "Poles",
      "Ns at 50 Hz",
      "Typical full-load speed"
     ],
     "rows": [
      [
       "2",
       "3000 rpm",
       "2880 to 2950 rpm"
      ],
      [
       "4",
       "1500 rpm",
       "1420 to 1480 rpm"
      ],
      [
       "6",
       "1000 rpm",
       "950 to 985 rpm"
      ],
      [
       "8",
       "750 rpm",
       "715 to 735 rpm"
      ]
     ],
     "cap": "Synchronous and typical running speeds on a 50 Hz supply"
    },
    {
     "t": "worked",
     "title": "Worked example: slip",
     "problem": "A four-pole motor on a 50 Hz supply runs at 1470 rpm at full load. Find the slip.",
     "steps": [
      "Ns = 120 × 50 ÷ 4 = 1500 rpm.",
      "s = (1500 − 1470) ÷ 1500 = 0.02."
     ],
     "answer": "The slip is 0.02, or 2 %."
    },
    {
     "t": "svg",
     "alt": "Torque against speed curve of a squirrel-cage induction motor showing starting torque, pull-out torque and the rated operating point near synchronous speed.",
     "cap": "Figure 2: torque-speed curve of a cage induction motor",
     "svg": "<svg viewBox=\"0 0 600 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m07-f2-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<line x1=\"70\" y1=\"250\" x2=\"560\" y2=\"250\" class=\"ln\" marker-end=\"url(#m07-f2-arr)\"/>\n<line x1=\"70\" y1=\"250\" x2=\"70\" y2=\"30\" class=\"ln\" marker-end=\"url(#m07-f2-arr)\"/>\n<text x=\"562\" y=\"242\" class=\"txs txe\">speed →</text>\n<text x=\"14\" y=\"26\" class=\"txs\">Torque</text>\n<polyline points=\"70.0,178.5 78.8,177.1 87.6,175.7 96.4,174.3 105.2,172.8 114.0,171.2 122.8,169.6 131.6,167.9 140.4,166.2 149.2,164.4 158.0,162.5 166.8,160.5 175.6,158.4 184.4,156.3 193.2,154.1 202.0,151.7 210.8,149.3 219.6,146.8 228.4,144.1 237.2,141.3 246.0,138.4 254.8,135.4 263.6,132.2 272.4,128.8 281.2,125.4 290.0,121.7 298.8,117.9 307.6,114.0 316.4,109.9 325.2,105.6 334.0,101.2 342.8,96.7 351.6,92.1 360.4,87.4 369.2,82.8 378.0,78.3 386.8,74.1 395.6,70.2 404.4,67.0 413.2,64.8 422.0,64.0 430.8,65.0 439.6,68.5 448.4,75.2 457.2,85.9 466.0,101.2 474.8,121.7 483.6,147.6 494.9,188.0 501.2,213.2 505.6,231.4 510.0,249.8\" class=\"lnb\"/>\n<line x1=\"510\" y1=\"250\" x2=\"510\" y2=\"244\" class=\"ln\"/>\n<text x=\"510\" y=\"266\" class=\"txs txc\">Ns (sync)</text>\n<text x=\"70\" y=\"266\" class=\"txs txc\">0</text>\n<circle cx=\"70\" cy=\"178.5\" r=\"4\" class=\"fa\"/>\n<text x=\"82\" y=\"166.5\" class=\"txs\">Starting (locked rotor) torque</text>\n<circle cx=\"422.0\" cy=\"64.0\" r=\"4\" class=\"fa\"/>\n<text x=\"432.0\" y=\"68.0\" class=\"txs\">Pull-out (breakdown) torque</text>\n<circle cx=\"494.9\" cy=\"188.0\" r=\"4\" class=\"fa\"/>\n<text x=\"488.9\" y=\"210.0\" class=\"txs txe\">Rated point, slip about 3.4 %</text>\n<line x1=\"70\" y1=\"188\" x2=\"494.9\" y2=\"188\" class=\"lnm ln1 dash\"/>\n<text x=\"64\" y=\"192\" class=\"txs txe\">1.0</text>\n<text x=\"300\" y=\"296\" class=\"txs txm txc\">Typical shape for a standard cage motor; torque shown relative to rated torque</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "The curve shows why the motor behaves as it does. At standstill it produces its **starting torque**, and the supply current is large, typically six to eight times full-load current, because the rotor has no back-EMF to oppose it. As it speeds up, torque rises to a maximum, the **pull-out torque**, then falls to zero at synchronous speed. In normal running the motor sits near the top of the curve, where a small drop in speed produces a large increase in torque. If the load exceeds pull-out torque the motor stalls."
    },
    {
     "t": "h",
     "x": "The nameplate"
    },
    {
     "t": "p",
     "x": "The rating plate tells you everything needed to supply, protect and replace a motor: voltage and connection, rated current, power in kW, speed, frequency, power factor (cos φ), efficiency class (IE1 to IE4), insulation class (for example F, rated to 155 °C), degree of protection (IP code, IEC 60529), duty type and frame size. Always read the plate rather than assume."
    },
    {
     "t": "formula",
     "x": "I = P ÷ (√3 × VL × η × cos φ)",
     "where": "I line current (A), P shaft output power (W), VL line voltage (V), η efficiency (fraction), cos φ power factor"
    },
    {
     "t": "worked",
     "title": "Worked example: full-load current",
     "problem": "A 7.5 kW motor on 400 V has an efficiency of 0.88 and a power factor of 0.85. Find the full-load line current.",
     "steps": [
      "√3 × VL = 1.732 × 400 = 692.8.",
      "692.8 × 0.88 × 0.85 = 518.2.",
      "I = 7500 ÷ 518.2 = 14.5 A."
     ],
     "answer": "The full-load current is about 14.5 A. Use the nameplate value if it differs."
    },
    {
     "t": "h",
     "x": "Connection and direction"
    },
    {
     "t": "svg",
     "alt": "Two motor terminal boxes. Left: star connection with a link bar across the three lower terminals. Right: delta connection with three vertical links between the upper and lower terminals.",
     "cap": "Figure 3: star and delta link positions in a motor terminal box",
     "svg": "<svg viewBox=\"0 0 600 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n\n<text x=\"145\" y=\"24\" class=\"tx txb txc\">Star (Y): 400 V on 230/400 V motor</text>\n<rect x=\"35\" y=\"40\" width=\"220\" height=\"150\" class=\"ln fl\"/>\n<circle cx=\"80\" cy=\"80\" r=\"9\" class=\"ln fla\"/><text x=\"80\" y=\"84\" class=\"txs txc\">U1</text><circle cx=\"80\" cy=\"140\" r=\"9\" class=\"ln fla\"/><text x=\"80\" y=\"144\" class=\"txs txc\">W2</text><circle cx=\"145\" cy=\"80\" r=\"9\" class=\"ln fla\"/><text x=\"145\" y=\"84\" class=\"txs txc\">V1</text><circle cx=\"145\" cy=\"140\" r=\"9\" class=\"ln fla\"/><text x=\"145\" y=\"144\" class=\"txs txc\">U2</text><circle cx=\"210\" cy=\"80\" r=\"9\" class=\"ln fla\"/><text x=\"210\" y=\"84\" class=\"txs txc\">W1</text><circle cx=\"210\" cy=\"140\" r=\"9\" class=\"ln fla\"/><text x=\"210\" y=\"144\" class=\"txs txc\">V2</text>\n<rect x=\"73\" y=\"143\" width=\"144\" height=\"12\" rx=\"3\" class=\"ln flr\"/><text x=\"145\" y=\"182\" class=\"txs txc\">link bar joins W2, U2, V2</text>\n<text x=\"80\" y=\"64\" class=\"txs txc\">L1</text><text x=\"145\" y=\"64\" class=\"txs txc\">L2</text><text x=\"210\" y=\"64\" class=\"txs txc\">L3</text>\n\n<text x=\"440\" y=\"24\" class=\"tx txb txc\">Delta (Δ): 230 V on 230/400 V motor</text>\n<rect x=\"330\" y=\"40\" width=\"220\" height=\"150\" class=\"ln fl\"/>\n<circle cx=\"375\" cy=\"80\" r=\"9\" class=\"ln fla\"/><text x=\"375\" y=\"84\" class=\"txs txc\">U1</text><circle cx=\"375\" cy=\"140\" r=\"9\" class=\"ln fla\"/><text x=\"375\" y=\"144\" class=\"txs txc\">W2</text><circle cx=\"440\" cy=\"80\" r=\"9\" class=\"ln fla\"/><text x=\"440\" y=\"84\" class=\"txs txc\">V1</text><circle cx=\"440\" cy=\"140\" r=\"9\" class=\"ln fla\"/><text x=\"440\" y=\"144\" class=\"txs txc\">U2</text><circle cx=\"505\" cy=\"80\" r=\"9\" class=\"ln fla\"/><text x=\"505\" y=\"84\" class=\"txs txc\">W1</text><circle cx=\"505\" cy=\"140\" r=\"9\" class=\"ln fla\"/><text x=\"505\" y=\"144\" class=\"txs txc\">V2</text>\n<line x1=\"375\" y1=\"89\" x2=\"375\" y2=\"131\" class=\"lnr\"/><line x1=\"440\" y1=\"89\" x2=\"440\" y2=\"131\" class=\"lnr\"/><line x1=\"505\" y1=\"89\" x2=\"505\" y2=\"131\" class=\"lnr\"/><text x=\"440\" y=\"182\" class=\"txs txc\">three vertical links</text>\n<text x=\"375\" y=\"64\" class=\"txs txc\">L1</text><text x=\"440\" y=\"64\" class=\"txs txc\">L2</text><text x=\"505\" y=\"64\" class=\"txs txc\">L3</text>\n<text x=\"300\" y=\"224\" class=\"txs txc\">Each winding is U1–U2, V1–V2, W1–W2. Star puts 230 V across each winding on a 400 V supply.</text>\n<text x=\"300\" y=\"242\" class=\"txs txc\">Delta puts the full line voltage across each winding.</text>\n<text x=\"300\" y=\"260\" class=\"txs txm txc\">Link layout follows the common IEC U1 V1 W1 / W2 U2 V2 arrangement.</text>\n</svg>"
    },
    {
     "t": "ul",
     "items": [
      "A plate reading 230/400 V Δ/Y means each winding is designed for 230 V. On a 400 V three-phase supply, connect it in **star**. On a 230 V three-phase supply, connect it in delta.",
      "A plate reading 400 V Δ means each winding is rated at 400 V. Direct on a 400 V supply it must be in delta; starting in star and then switching to delta (see Module 12) reduces starting current.",
      "To reverse direction, swap any two of the three supply leads."
     ]
    },
    {
     "t": "warn",
     "x": "Never connect a motor to the wrong voltage. A delta-rated 230 V winding on 400 V burns out in seconds. Check the plate, check the link positions and check the supply before closing the isolator."
    },
    {
     "t": "key",
     "items": [
      "Ns = 120 × f ÷ p; a four-pole motor on 50 Hz has Ns = 1500 rpm.",
      "Slip s = (Ns − N) ÷ Ns, about 2 to 5 % at full load.",
      "Starting current is six to eight times full-load current; starting torque and pull-out torque come from the curve.",
      "Full-load current I = P ÷ (√3 × VL × η × cos φ).",
      "Swap any two supply leads to reverse; connect star or delta according to the plate and the supply."
     ]
    }
   ]
  },
  {
   "id": "m07-l5",
   "title": "Single-phase and synchronous machines, testing and faults",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Not every site has three-phase supply, and not every drive is an induction motor. This lesson covers single-phase motors, synchronous machines, and the practical tests and fault-finding steps you will use on all of them."
    },
    {
     "t": "h",
     "x": "Single-phase motors"
    },
    {
     "t": "p",
     "x": "A single phase supply makes a pulsating field rather than a rotating one, which cannot start a motor by itself. Single-phase motors add a second, phase-shifted winding to get the rotor going."
    },
    {
     "t": "ul",
     "items": [
      "**Capacitor-start:** a capacitor in series with an auxiliary winding gives high starting torque; a centrifugal switch cuts it out as the motor speeds up. Used on compressors and pumps.",
      "**Capacitor-run:** the capacitor stays in circuit. Quieter and more efficient, with lower starting torque. Used on fans and small machinery.",
      "**Shaded-pole:** a copper ring on part of each pole gives a weak rotating effect. Low cost and low torque, for small fans and appliances.",
      "**Universal motor:** a series-wound motor that runs on AC or DC at high speed. Used in drills and vacuum cleaners."
     ]
    },
    {
     "t": "p",
     "x": "A failed capacitor is the commonest fault of single-phase motors: the motor hums but will not start, or starts slowly. Replace a capacitor with the same capacitance in microfarads and at least the same voltage rating. Discharge it first, since it can hold a charge after the supply is switched off."
    },
    {
     "t": "h",
     "x": "Synchronous machines"
    },
    {
     "t": "p",
     "x": "A **synchronous motor** turns at exactly the synchronous speed Ns, with no slip, because its rotor is a magnet or a DC-fed winding that locks onto the rotating field. A four-pole synchronous motor on 50 Hz always runs at 1500 rpm regardless of load, up to its pull-out limit. They are used where fixed speed or power factor correction is needed."
    },
    {
     "t": "p",
     "x": "An **alternator** is a synchronous generator. Its frequency is set by the shaft speed and poles."
    },
    {
     "t": "formula",
     "x": "f = p × N ÷ 120",
     "where": "f generated frequency (Hz), p number of poles, N shaft speed (rpm). A four-pole alternator must turn at 1500 rpm for 50 Hz."
    },
    {
     "t": "h",
     "x": "Testing a motor"
    },
    {
     "t": "steps",
     "title": "Basic motor test sequence",
     "items": [
      "Isolate, lock out, and prove dead, then disconnect the motor cables at the terminal box.",
      "Inspect the terminal box for moisture, burnt links and loose connections; turn the shaft by hand and listen and feel for roughness.",
      "Measure winding resistance between U1–U2, V1–V2 and W1–W2 with a low-ohms meter; the three readings should agree within a few percent.",
      "Measure insulation resistance between each winding and the frame, and between windings, with an insulation tester at 500 V d.c. for a 400 V motor.",
      "Record the results and compare with previous tests; a falling trend is a warning."
     ]
    },
    {
     "t": "p",
     "x": "A commonly used minimum for a low-voltage motor is 1 MΩ, but a healthy winding reads far higher, often hundreds of megohms. A reading of a few hundred kilohms means moisture or contamination, and the winding should be dried before the motor is started."
    },
    {
     "t": "ghana",
     "x": "In humid and coastal locations, motors that stand idle for weeks can absorb moisture and read low on insulation tests. Test before starting, use space heaters in large idle motors and dry out a wet winding gently before running it."
    },
    {
     "t": "table",
     "head": [
      "Symptom",
      "Likely causes"
     ],
     "rows": [
      [
       "Motor hums, does not start",
       "Single-phasing (one supply phase missing), jammed load, failed capacitor on a single-phase motor"
      ],
      [
       "Trips on overload soon after start",
       "Overloaded drive, low supply voltage, wrong overload setting, bearing seizing"
      ],
      [
       "Runs hot",
       "Overload, blocked cooling fins or fan, high ambient temperature, supply voltage imbalance"
      ],
      [
       "Excess noise or vibration",
       "Worn bearings, misalignment, loose mounting, unbalanced rotor"
      ],
      [
       "Tripped earth fault protection",
       "Wet or damaged winding insulation, damaged cable"
      ]
     ],
     "cap": "Common motor symptoms and causes"
    },
    {
     "t": "warn",
     "x": "A motor running on two phases (single-phasing) draws high current in the remaining phases and burns out quickly. It may still run if already turning. Overload protection that senses all three phases and a phase-failure relay protect against this."
    },
    {
     "t": "key",
     "items": [
      "Single-phase motors use a capacitor or other phase shift to start; failed capacitors are a common fault.",
      "Synchronous motors run at exactly Ns; alternator frequency f = p × N ÷ 120.",
      "Test windings for resistance balance and insulation resistance at 500 V before starting a motor.",
      "Moisture and contamination lower insulation resistance; dry out before running.",
      "Single-phasing, overload and bearings cause most motor failures."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m07-q1",
   "q": "A conductor 0.2 m long carries 10 A at right angles to a field of 0.5 T. What force acts on it?",
   "opts": [
    "1.0 N",
    "10 N",
    "0.1 N",
    "2.5 N"
   ],
   "a": 0,
   "why": "F = B × I × L = 0.5 × 10 × 0.2 = 1.0 N."
  },
  {
   "id": "m07-q2",
   "q": "A distribution transformer is rated 11 kV to 400 V. What is its voltage ratio?",
   "opts": [
    "0.036 : 1",
    "11 : 400",
    "27.5 : 1",
    "1 : 27.5"
   ],
   "a": 2,
   "why": "Ratio = 11 000 ÷ 400 = 27.5 : 1. The secondary current is 27.5 times the primary current."
  },
  {
   "id": "m07-q3",
   "q": "A transformer secondary load is increased. What happens to the primary current?",
   "opts": [
    "It falls because the supply voltage is fixed",
    "It rises to supply the extra load power",
    "It stays the same",
    "It reverses direction"
   ],
   "a": 1,
   "why": "Power in equals power out (less losses). More power taken from the secondary draws more current from the primary."
  },
  {
   "id": "m07-q4",
   "q": "What is the full-load secondary line current of a 100 kVA, 400 V three-phase transformer?",
   "opts": [
    "250 A",
    "100 A",
    "400 A",
    "144 A"
   ],
   "a": 3,
   "why": "I = S ÷ (√3 × VL) = 100 000 ÷ (1.732 × 400) = 144.3 A."
  },
  {
   "id": "m07-q5",
   "q": "A DC motor on 230 V has Ra = 0.5 Ω and takes 20 A. What is its back-EMF?",
   "opts": [
    "220 V",
    "230 V",
    "10 V",
    "240 V"
   ],
   "a": 0,
   "why": "E = V − Ia × Ra = 230 − 10 = 220 V."
  },
  {
   "id": "m07-q6",
   "q": "Why must a DC series motor never be started without a load?",
   "opts": [
    "Its brushes would not touch the commutator",
    "It would overheat from lack of cooling",
    "Its speed would rise dangerously high",
    "It cannot produce any starting torque"
   ],
   "a": 2,
   "why": "With no load the series motor's field weakens as current falls and the speed rises without limit, which can destroy the armature."
  },
  {
   "id": "m07-q7",
   "q": "What is the synchronous speed of a six-pole motor on a 50 Hz supply?",
   "opts": [
    "1500 rpm",
    "1000 rpm",
    "750 rpm",
    "3000 rpm"
   ],
   "a": 1,
   "why": "Ns = 120 × f ÷ p = 120 × 50 ÷ 6 = 1000 rpm."
  },
  {
   "id": "m07-q8",
   "q": "A four-pole motor on 50 Hz runs at 1455 rpm. What is its slip?",
   "opts": [
    "1 %",
    "0.3 %",
    "5 %",
    "3 %"
   ],
   "a": 3,
   "why": "Ns = 1500 rpm. s = (1500 − 1455) ÷ 1500 = 0.03, which is 3 %."
  },
  {
   "id": "m07-q9",
   "q": "Why does an induction motor draw a very large current when it first starts?",
   "opts": [
    "Slip is 1 at standstill, so rotor currents are large",
    "The fan is not turning",
    "The supply frequency is higher at start",
    "The windings are cold and have less resistance"
   ],
   "a": 0,
   "why": "At standstill the rotor is cut by the field at full speed, so large rotor currents flow and are matched by large stator current, typically six to eight times the full-load value."
  },
  {
   "id": "m07-q10",
   "q": "What is the simplest way to reverse a three-phase induction motor?",
   "opts": [
    "Reverse the polarity of the neutral",
    "Change the supply frequency",
    "Swap any two of the three line leads",
    "Swap the star and delta links"
   ],
   "a": 2,
   "why": "Interchanging two phases reverses the rotation of the field and so of the rotor."
  },
  {
   "id": "m07-q11",
   "q": "A motor plate reads 230/400 V Δ/Y. How must it be connected to a 400 V three-phase supply?",
   "opts": [
    "Delta, because 400 V is the higher figure",
    "Star, so each winding sees 230 V",
    "Either connection gives the same result",
    "It cannot be used on 400 V"
   ],
   "a": 1,
   "why": "The first voltage is the winding rating in delta and the second is the line voltage in star. In star each winding sees 400 ÷ √3 = 230 V."
  },
  {
   "id": "m07-q12",
   "q": "An insulation test at 500 V on a motor winding reads 200 kΩ to the frame. What should you do?",
   "opts": [
    "Start it, because the reading is above zero ohms",
    "Start it and watch the current for a few minutes",
    "Fit larger fuses so that it can start safely",
    "Dry it out and retest before running"
   ],
   "a": 3,
   "why": "A reading below the minimum of about 1 MΩ indicates wet or damaged insulation. Starting the motor risks an earth fault and winding failure."
  },
  {
   "id": "m07-q13",
   "q": "A 7.5 kW motor on 400 V has an efficiency of 0.88 and a power factor of 0.85. What is its full-load line current?",
   "opts": [
    "10.8 A",
    "18.8 A",
    "14.5 A",
    "32.5 A"
   ],
   "a": 2,
   "why": "I = 7500 ÷ (1.732 × 400 × 0.88 × 0.85) = 7500 ÷ 518.2 = 14.5 A."
  },
  {
   "id": "m07-q14",
   "q": "What does the capacitor do in a capacitor-start single-phase motor?",
   "opts": [
    "Gives a phase-shifted starting current",
    "Increases the supply voltage",
    "Stores energy to keep the motor running if power fails",
    "Reduces the frequency of the supply to the winding"
   ],
   "a": 0,
   "why": "The capacitor makes the auxiliary winding current lead the main winding current, which produces a rotating field strong enough to start the motor."
  }
 ],
 "cards": [
  {
   "f": "Force on a conductor in a magnetic field?",
   "b": "F = B × I × L, with B in tesla, I in amperes and L in metres."
  },
  {
   "f": "State Faraday's law in words.",
   "b": "The voltage induced in a coil is proportional to the number of turns and the rate of change of flux linking it."
  },
  {
   "f": "Transformer turns ratio relationship?",
   "b": "Vp ÷ Vs = Np ÷ Ns = Is ÷ Ip for an ideal transformer."
  },
  {
   "f": "Why are transformers rated in kVA?",
   "b": "Their heating depends on voltage and current, not on the power factor of the load."
  },
  {
   "f": "Three-phase current from kVA?",
   "b": "I = S ÷ (√3 × VL), with S in VA and VL the line voltage."
  },
  {
   "f": "Which transformer loss varies with load?",
   "b": "Copper (I²R) loss. Iron loss is constant while energised."
  },
  {
   "f": "Parts of a DC motor?",
   "b": "Stator field, armature, commutator and brushes."
  },
  {
   "f": "DC motor voltage equation?",
   "b": "V = E + Ia × Ra, where E is the back-EMF."
  },
  {
   "f": "What makes a series DC motor dangerous?",
   "b": "Run with no load, its speed rises without limit."
  },
  {
   "f": "Synchronous speed formula?",
   "b": "Ns = 120 × f ÷ p, in rpm."
  },
  {
   "f": "Slip formula?",
   "b": "s = (Ns − N) ÷ Ns, as a fraction or percent."
  },
  {
   "f": "How large is induction motor starting current?",
   "b": "Typically six to eight times full-load current for a direct-on-line start."
  },
  {
   "f": "How do you reverse a three-phase motor?",
   "b": "Swap any two of the three supply leads."
  },
  {
   "f": "Test voltage for a 400 V motor winding insulation?",
   "b": "500 V d.c. from an insulation resistance tester, with a minimum reading of about 1 MΩ."
  }
 ],
 "terms": [
  {
   "t": "Flux density",
   "d": "The strength of a magnetic field, measured in tesla (T)."
  },
  {
   "t": "Lamination",
   "d": "A thin insulated sheet of steel stacked to form a core and reduce eddy-current losses."
  },
  {
   "t": "Primary winding",
   "d": "The transformer winding connected to the supply."
  },
  {
   "t": "Back-EMF",
   "d": "The voltage generated in a motor's rotating armature that opposes the applied supply voltage."
  },
  {
   "t": "Commutator",
   "d": "A segmented copper cylinder on a DC machine armature that reverses coil current as the armature turns."
  },
  {
   "t": "Synchronous speed",
   "d": "The speed of the stator's rotating magnetic field, set by supply frequency and number of poles."
  },
  {
   "t": "Slip",
   "d": "The difference between synchronous speed and rotor speed, expressed as a fraction of synchronous speed."
  },
  {
   "t": "Squirrel-cage rotor",
   "d": "A rotor made of conducting bars joined by end rings, with no external electrical connection."
  },
  {
   "t": "Pull-out torque",
   "d": "The maximum torque a motor can deliver before it stalls."
  },
  {
   "t": "Single-phasing",
   "d": "Running a three-phase motor with one supply phase missing, which causes overheating."
  },
  {
   "t": "Insulation resistance",
   "d": "The resistance of the insulation between a winding and earth, measured in megohms at a stated test voltage."
  }
 ],
 "formulas": [
  {
   "n": "Force on a conductor",
   "f": "F = B × I × L",
   "v": "F newtons, B tesla, I amperes, L metres"
  },
  {
   "n": "Transformer ratio",
   "f": "Vp ÷ Vs = Np ÷ Ns = Is ÷ Ip",
   "v": "p primary, s secondary"
  },
  {
   "n": "Three-phase line current",
   "f": "I = S ÷ (√3 × VL)",
   "v": "S in VA, VL line voltage in V"
  },
  {
   "n": "DC motor voltage",
   "f": "V = E + Ia × Ra",
   "v": "E back-EMF in V, Ia armature current A, Ra ohms"
  },
  {
   "n": "Synchronous speed",
   "f": "Ns = 120 × f ÷ p",
   "v": "rpm, f in Hz, p number of poles"
  },
  {
   "n": "Slip",
   "f": "s = (Ns − N) ÷ Ns",
   "v": "fraction; N rotor speed in rpm"
  },
  {
   "n": "Motor full-load current",
   "f": "I = P ÷ (√3 × VL × η × cos φ)",
   "v": "P shaft power in W, η fraction, VL line voltage"
  }
 ]
});
