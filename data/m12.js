window.MECH.register({
 "id": "m12",
 "n": 12,
 "title": "Control Circuits, Relays, Contactors and Motor Starting",
 "short": "Relays and Motor Starting",
 "group": "Electrical & Electronics",
 "blurb": "Read and build motor control circuits: contactors, overloads, start/stop circuits, interlocking, forward/reverse, star-delta starting, and fault finding with a multimeter.",
 "outcomes": [
  "Explain the construction, terminal numbering and utilisation categories of relays and contactors",
  "Distinguish short-circuit protection from overload protection and set an overload relay correctly",
  "Choose and apply pushbutton, selector and indicator colours according to IEC 60204-1",
  "Draw and explain a start/stop circuit with a hold-in contact and no-volt release",
  "Describe interlocking, forward/reverse control and timers in control circuits",
  "Explain DOL and star-delta starting and calculate star-delta currents",
  "Read a control schematic with cross-references and terminal numbers",
  "Find faults in a control circuit using the voltage-drop method safely"
 ],
 "lessons": [
  {
   "id": "m12-l1",
   "title": "Relays, contactors and protection devices",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "A **relay** is an electrically operated switch. A small current in an electromagnetic coil pulls an armature that opens or closes contacts, so a low-power signal controls another circuit. A **contactor** is a heavy-duty relay built to switch motors and other large loads, with arc-quenching chambers and strong contacts. The IEC 60947 series covers contactors, motor starters, circuit breakers and control devices."
    },
    {
     "t": "h",
     "x": "Construction and terminal numbers"
    },
    {
     "t": "ul",
     "items": [
      "**Coil:** terminals **A1 and A2**. The coil voltage (24 V DC, 230 V AC and so on) must match the control supply.",
      "**Main (power) contacts:** three poles numbered **1-2, 3-4, 5-6**, which connect to L1/T1, L2/T2 and L3/T3.",
      "**Auxiliary contacts:** small contacts used in the control circuit. The first digit is the position and the second shows the type: **13-14** and **43-44** are normally open (NO), **21-22** and **31-32** are normally closed (NC).",
      "**Overload relay:** the NC trip contact is **95-96** and the NO contact is **97-98**.",
      "**Shading ring:** a copper ring on the AC magnet that prevents buzzing as the flux passes through zero."
     ]
    },
    {
     "t": "p",
     "x": "On AC contactors the coil draws a high inrush current while the armature is open and a much lower holding current when it is closed. If the armature jams open, the coil overheats and burns out; a buzzing contactor usually means low coil voltage, dirt on the pole faces or a broken shading ring."
    },
    {
     "t": "h",
     "x": "Utilisation categories"
    },
    {
     "t": "table",
     "head": [
      "Category",
      "Load",
      "Typical duty"
     ],
     "rows": [
      [
       "AC-1",
       "Non-inductive or slightly inductive loads",
       "Heaters, resistive loads"
      ],
      [
       "AC-3",
       "Squirrel-cage motors: starting and switching off while running",
       "Most pumps, fans, conveyors"
      ],
      [
       "AC-4",
       "Squirrel-cage motors: starting, plugging and jogging",
       "Hoists, frequent reversing; very severe duty"
      ],
      [
       "AC-15",
       "Control of electromagnetic loads (above 72 VA)",
       "Relay and contactor coils, solenoids"
      ]
     ],
     "cap": "Common utilisation categories (IEC 60947)"
    },
    {
     "t": "p",
     "x": "A contactor's rating depends on the category. A contactor rated 25 A in AC-1 may be rated only 12 A in AC-3, because a motor starting draws five to eight times its running current. Always select a contactor by its AC-3 rating for a motor."
    },
    {
     "t": "h",
     "x": "Protection devices"
    },
    {
     "t": "table",
     "head": [
      "Device",
      "Protects against",
      "Notes"
     ],
     "rows": [
      [
       "Fuse (gG, aM per IEC 60269)",
       "Short circuit; gG also gives some overload protection",
       "aM fuses protect motor circuits only against short circuit"
      ],
      [
       "MCCB / MCB",
       "Short circuit and overload",
       "Resettable; also used as an isolator"
      ],
      [
       "MPCB (motor protection circuit breaker)",
       "Short circuit and adjustable overload",
       "Combines breaker and overload relay in one device"
      ],
      [
       "Overload relay",
       "Sustained overcurrent only",
       "Thermal or electronic; cannot break a short circuit"
      ]
     ],
     "cap": "Short-circuit and overload protection"
    },
    {
     "t": "warn",
     "x": "An overload relay does not protect against short circuits. The circuit also needs a fuse or breaker upstream, and the contactor must be able to withstand the fault until it clears (coordination)."
    },
    {
     "t": "key",
     "items": [
      "Coil terminals are A1 and A2; power poles are 1-2, 3-4, 5-6; auxiliary NO contacts end in 3-4 and NC in 1-2.",
      "The overload trip contact is 95-96 (NC).",
      "Choose a motor contactor by its AC-3 rating.",
      "A fuse or breaker handles short circuits; an overload relay handles sustained overcurrent.",
      "A buzzing contactor suggests low voltage, dirt or a broken shading ring."
     ]
    }
   ]
  },
  {
   "id": "m12-l2",
   "title": "Control devices and the start/stop circuit",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Motor circuits have two parts. The **power circuit** carries the motor current through the breaker, contactor and overload relay. The **control circuit** is a low-current circuit with pushbuttons, sensors, interlocks and the contactor coil, and it decides when the power circuit closes. The control circuit often runs at 230 V AC, 110 V AC or 24 V DC, supplied through a **control transformer** or a DC power supply with fuses or a miniature breaker on the secondary."
    },
    {
     "t": "h",
     "x": "Colours of operators and indicators"
    },
    {
     "t": "table",
     "head": [
      "Colour",
      "Pushbutton meaning",
      "Indicator lamp meaning"
     ],
     "rows": [
      [
       "Red",
       "Stop, off, emergency stop",
       "Danger or emergency; urgent action needed"
      ],
      [
       "Green",
       "Start, on (preferred)",
       "Normal condition or safe"
      ],
      [
       "Yellow",
       "Intervene to suppress abnormal or unwanted conditions",
       "Abnormal condition; warning"
      ],
      [
       "Blue",
       "A mandatory action such as reset",
       "Mandatory action needed"
      ],
      [
       "White, grey, black",
       "Start or stop with no specific meaning; also jog or reset",
       "Neutral or general information"
      ]
     ],
     "cap": "Colour codes (IEC 60204-1)"
    },
    {
     "t": "p",
     "x": "Emergency stop devices are red on a yellow background and must stay latched until deliberately reset. Never use a red button for a start function."
    },
    {
     "t": "h",
     "x": "The hold-in circuit"
    },
    {
     "t": "p",
     "x": "A start button is momentary, so it springs back when released. For the motor to keep running, the circuit needs a **hold-in (seal-in, latching) contact**: an auxiliary NO contact of the same contactor connected in parallel with the start button. When Start is pressed the coil energises, the hold-in contact closes and provides an alternative path for the current, so the coil stays on when the button is released. This is the **3-wire** circuit, named after the wires to the stop and start buttons."
    },
    {
     "t": "svg",
     "alt": "A control ladder diagram. A stop normally closed contact, a start normally open contact with a K1 hold-in contact in parallel, and an overload normally closed contact are in series with the K1 coil between L and N.",
     "cap": "Figure 1: a 3-wire start/stop circuit with hold-in contact and overload",
     "svg": "<svg viewBox=\"0 0 600 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<text x=\"300\" y=\"22\" class=\"tx txb txc\">Start/stop control circuit with hold-in (seal-in) contact</text>\n<line x1=\"50\" y1=\"36\" x2=\"50\" y2=\"220\" class=\"ln lnr\"/><line x1=\"550\" y1=\"36\" x2=\"550\" y2=\"220\" class=\"ln lnb\"/>\n<text x=\"50\" y=\"232\" class=\"tx txb txc\">L</text><text x=\"550\" y=\"232\" class=\"tx txb txc\">N</text>\n<line x1=\"50\" y1=\"100\" x2=\"90\" y2=\"100\" class=\"ln\"/>\n<line x1=\"90\" y1=\"100\" x2=\"104\" y2=\"100\" class=\"ln\"/><line x1=\"104\" y1=\"100\" x2=\"136\" y2=\"84\" class=\"ln\"/><line x1=\"136\" y1=\"100\" x2=\"150\" y2=\"100\" class=\"ln\"/><line x1=\"136\" y1=\"84\" x2=\"136\" y2=\"100\" class=\"ln\"/>\n<line x1=\"150\" y1=\"100\" x2=\"180\" y2=\"100\" class=\"ln\"/>\n<line x1=\"180\" y1=\"100\" x2=\"194\" y2=\"100\" class=\"ln\"/><line x1=\"194\" y1=\"100\" x2=\"226\" y2=\"84\" class=\"ln\"/><line x1=\"226\" y1=\"100\" x2=\"240\" y2=\"100\" class=\"ln\"/>\n<line x1=\"240\" y1=\"100\" x2=\"280\" y2=\"100\" class=\"ln\"/>\n<line x1=\"280\" y1=\"100\" x2=\"294\" y2=\"100\" class=\"ln\"/><line x1=\"294\" y1=\"100\" x2=\"326\" y2=\"84\" class=\"ln\"/><line x1=\"326\" y1=\"100\" x2=\"340\" y2=\"100\" class=\"ln\"/><line x1=\"326\" y1=\"84\" x2=\"326\" y2=\"100\" class=\"ln\"/>\n<line x1=\"340\" y1=\"100\" x2=\"420\" y2=\"100\" class=\"ln\"/>\n<rect x=\"420\" y=\"82\" width=\"60\" height=\"36\" class=\"ln fla\"/><text x=\"450\" y=\"105\" class=\"tx txb txc\">K1</text>\n<line x1=\"480\" y1=\"100\" x2=\"550\" y2=\"100\" class=\"ln\"/>\n<line x1=\"180\" y1=\"100\" x2=\"180\" y2=\"170\" class=\"ln\"/><line x1=\"240\" y1=\"100\" x2=\"240\" y2=\"170\" class=\"ln\"/>\n<line x1=\"180\" y1=\"170\" x2=\"194\" y2=\"170\" class=\"ln\"/><line x1=\"194\" y1=\"170\" x2=\"226\" y2=\"154\" class=\"ln\"/><line x1=\"226\" y1=\"170\" x2=\"240\" y2=\"170\" class=\"ln\"/>\n<circle cx=\"180\" cy=\"100\" r=\"3\" class=\"fi\"/><circle cx=\"240\" cy=\"100\" r=\"3\" class=\"fi\"/>\n<text x=\"120\" y=\"52\" class=\"tx txb txc\">S1</text><text x=\"120\" y=\"68\" class=\"txs txc\">Stop NC</text>\n<text x=\"210\" y=\"52\" class=\"tx txb txc\">S2</text><text x=\"210\" y=\"68\" class=\"txs txc\">Start NO</text>\n<text x=\"310\" y=\"52\" class=\"tx txb txc\">F1</text><text x=\"310\" y=\"68\" class=\"txs txc\">Overload NC</text>\n<text x=\"450\" y=\"64\" class=\"txs txc\">Coil</text>\n<text x=\"210\" y=\"196\" class=\"tx txb txc\">K1 (13-14)</text><text x=\"210\" y=\"212\" class=\"txs txc\">hold-in NO</text>\n<text x=\"300\" y=\"262\" class=\"txs txm txc\">Start energises K1. K1's own contact then holds the coil on after Start is released.</text>\n<text x=\"300\" y=\"278\" class=\"txs txm txc\">Pressing Stop, an overload trip or loss of supply drops K1 out until Start is pressed again.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "The stop button and overload contact are wired **normally closed** and in series with the coil. If a wire breaks, or the overload trips, the coil loses power and the motor stops: this is **fail-safe** wiring. Because the circuit does not restart by itself after a supply failure, it also gives **no-volt release**, preventing a machine from restarting unexpectedly when the power returns."
    },
    {
     "t": "p",
     "x": "A **2-wire** circuit uses a maintained contact, for example a selector switch, a float switch or a thermostat, directly in series with the coil. It restarts automatically when the supply returns while the switch is closed. This is acceptable for some automatic equipment such as a pump but dangerous where a restart could injure someone."
    },
    {
     "t": "tip",
     "x": "If a 3-wire circuit works only while you hold the Start button, the hold-in contact is not closing: check that it is wired in parallel with Start and that its terminal numbers are correct."
    },
    {
     "t": "key",
     "items": [
      "The power circuit carries motor current; the control circuit tells it when to flow.",
      "Red is stop or emergency; green is start; yellow is abnormal; blue is mandatory action.",
      "A hold-in contact in parallel with Start keeps the coil energised.",
      "Stop and overload contacts are normally closed and in series with the coil (fail-safe).",
      "The 3-wire circuit gives no-volt release; a 2-wire circuit restarts by itself."
     ]
    }
   ]
  },
  {
   "id": "m12-l3",
   "title": "Interlocking, reversing and timers",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Many machines need two contactors that must never be closed together. A forward/reverse starter swaps two of the three supply phases to reverse the motor. If both contactors close at once, two phases are shorted together through the contactors, giving a violent short circuit. **Interlocking** prevents this."
    },
    {
     "t": "h",
     "x": "Electrical and mechanical interlocks"
    },
    {
     "t": "ul",
     "items": [
      "**Electrical interlock:** a normally closed auxiliary contact of K1 is placed in series with the K2 coil, and a normally closed contact of K2 is placed in series with the K1 coil. While one contactor is on, the other cannot be energised.",
      "**Mechanical interlock:** a plastic or metal bar between the two contactors physically prevents both armatures from closing.",
      "**Pushbutton interlock:** double-contact pushbuttons break the opposite circuit as they make their own.",
      "**Best practice:** use both electrical and mechanical interlocks. The contactors are also wired so that two phases are swapped only at the contactor outputs, never at the supply."
     ]
    },
    {
     "t": "p",
     "x": "A common forward/reverse circuit needs a stop between direction changes, because a motor reversed while still spinning draws a very high current and puts heavy stress on the load. A drive (Module 10) or a timer can add a delay before the second contactor closes."
    },
    {
     "t": "h",
     "x": "Timers"
    },
    {
     "t": "table",
     "head": [
      "Timer",
      "Operation",
      "Typical use"
     ],
     "rows": [
      [
       "On-delay (TON)",
       "Contacts change a set time after the coil is energised; reset when it drops",
       "Star-delta changeover, delayed start of a conveyor"
      ],
      [
       "Off-delay (TOF)",
       "Contacts change at once; return a set time after the coil is de-energised",
       "Fan run-on after a heater stops, lights"
      ],
      [
       "Pulse (one-shot)",
       "Contact operates for a fixed time after a trigger",
       "Lubrication pulse, horn"
      ],
      [
       "Cyclic (flasher)",
       "Alternates on and off at set intervals",
       "Warning lights"
      ]
     ],
     "cap": "Timing relay types"
    },
    {
     "t": "h",
     "x": "Sequence start"
    },
    {
     "t": "p",
     "x": "Conveyor lines are started in sequence from the discharge end back to the loading end, so that material is not left jammed on a stopped belt. A common way is to energise the K2 coil only after K1 has closed (K1 auxiliary NO contact in series), perhaps with an on-delay timer between the two. Stopping reverses the order, so the loaded belts empty before they stop."
    },
    {
     "t": "warn",
     "x": "Never rely on an electrical interlock alone to protect people. Interlocks protect equipment. Where a restart could injure someone, use certified safety circuits and isolation with lock-out (Module 2, ISO 13849-1)."
    },
    {
     "t": "tip",
     "x": "If a reversing starter trips the breaker the moment the second direction is selected, suspect an interlock wired to the wrong contact (NO instead of NC) or a welded main contact on the first contactor."
    },
    {
     "t": "key",
     "items": [
      "Reversing swaps two phases; both contactors closed together causes a short circuit.",
      "An NC auxiliary contact of each contactor in the other's coil circuit gives an electrical interlock.",
      "Add a mechanical interlock for extra security.",
      "An on-delay timer changes state after the set time; an off-delay returns after the set time.",
      "Interlocks protect equipment; use safety circuits to protect people."
     ]
    }
   ]
  },
  {
   "id": "m12-l4",
   "title": "DOL and star-delta starting",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "A squirrel-cage induction motor connected straight to its supply draws a large starting current, typically **five to eight times** its full-load current, for a second or two. How the motor is started is a trade-off between simplicity, starting current and starting torque."
    },
    {
     "t": "h",
     "x": "Direct-on-line (DOL)"
    },
    {
     "t": "p",
     "x": "In a DOL starter the contactor connects the motor directly to the supply. It is the simplest and cheapest method and gives full starting torque, but the high inrush current can cause voltage dips and may be limited by the supply authority for larger motors. Figure 2 shows the power circuit."
    },
    {
     "t": "svg",
     "alt": "Power circuit of a direct on line starter: three supply phases pass through a breaker Q1, a contactor K1 and an overload relay F1 to a three phase motor.",
     "cap": "Figure 2: DOL power circuit: breaker, contactor, overload relay and motor",
     "svg": "<svg viewBox=\"0 0 600 330\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<line x1=\"150\" y1=\"40\" x2=\"150\" y2=\"226\" class=\"ln\"/><line x1=\"200\" y1=\"40\" x2=\"200\" y2=\"226\" class=\"ln\"/><line x1=\"250\" y1=\"40\" x2=\"250\" y2=\"226\" class=\"ln\"/>\n<text x=\"150\" y=\"30\" class=\"txs txb txc\">L1</text><text x=\"200\" y=\"30\" class=\"txs txb txc\">L2</text><text x=\"250\" y=\"30\" class=\"txs txb txc\">L3</text>\n<rect x=\"120\" y=\"60\" width=\"160\" height=\"30\" class=\"ln fla\"/><text x=\"200\" y=\"80\" class=\"tx txb txc\">Q1</text><rect x=\"120\" y=\"120\" width=\"160\" height=\"30\" class=\"ln flb\"/><text x=\"200\" y=\"140\" class=\"tx txb txc\">K1</text><rect x=\"120\" y=\"180\" width=\"160\" height=\"30\" class=\"ln flg\"/><text x=\"200\" y=\"200\" class=\"tx txb txc\">F1</text>\n<circle cx=\"200\" cy=\"278\" r=\"28\" class=\"ln fl\"/><text x=\"200\" y=\"274\" class=\"tx txb txc\">M</text><text x=\"200\" y=\"290\" class=\"txs txc\">3~</text>\n<polyline points=\"150,210 150,234 186,254\" class=\"ln\"/><line x1=\"200\" y1=\"210\" x2=\"200\" y2=\"250\" class=\"ln\"/><polyline points=\"250,210 250,234 214,254\" class=\"ln\"/>\n<text x=\"300\" y=\"80\" class=\"tx txb\">Q1: MCCB or MPCB</text><text x=\"300\" y=\"96\" class=\"txs\">short-circuit protection and isolation</text>\n<text x=\"300\" y=\"140\" class=\"tx txb\">K1: contactor (AC-3)</text><text x=\"300\" y=\"156\" class=\"txs\">switches the motor on and off</text>\n<text x=\"300\" y=\"200\" class=\"tx txb\">F1: overload relay</text><text x=\"300\" y=\"216\" class=\"txs\">protects against sustained overcurrent</text>\n<text x=\"300\" y=\"274\" class=\"txs txm\">Supply 400 V, 50 Hz three phase</text>\n<text x=\"300\" y=\"292\" class=\"txs txm\">Control circuit (Figure 1) drives the K1 coil</text>\n</svg>"
    },
    {
     "t": "h",
     "x": "Setting the overload relay"
    },
    {
     "t": "worked",
     "title": "Worked example: overload relay setting",
     "problem": "A motor nameplate shows 7.5 kW, 400 V delta, 14.8 A. A thermal overload relay has an adjustable range of 11 to 17 A. What should it be set to, and is the range suitable?",
     "steps": [
      "Set the relay to the nameplate full-load current: 14.8 A.",
      "14.8 A lies inside the 11 to 17 A range, in the upper half.",
      "Check the range does not leave the setting at an extreme end, where accuracy is lowest; here it does not."
     ],
     "answer": "Set it to 14.8 A. The 11 to 17 A relay is suitable. Never set an overload above the nameplate current to stop it tripping: find the cause of the overload instead."
    },
    {
     "t": "h",
     "x": "Star-delta starting"
    },
    {
     "t": "p",
     "x": "A star-delta starter reduces the voltage on each winding at start by connecting the motor in **star** (Y), then switches to **delta** (Δ) for running. It uses three contactors (line, star and delta), an overload relay and an on-delay timer. The star and delta contactors are electrically interlocked so they can never close together, since that would short the supply. The motor must be wound for delta operation on the supply voltage, with all six winding ends brought out to the terminal box."
    },
    {
     "t": "svg",
     "alt": "Two terminal box layouts. In star, the three top terminals are joined by one link. In delta, each top terminal is linked to the bottom terminal below it. Supply connects at the bottom terminals.",
     "cap": "Figure 3: terminal links for star and delta connection",
     "svg": "<svg viewBox=\"0 0 600 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<circle cx=\"70\" cy=\"100\" r=\"6\" class=\"ln fla\"/><circle cx=\"70\" cy=\"170\" r=\"6\" class=\"ln fla\"/><text x=\"50\" y=\"96\" class=\"txs txc\">W2</text><text x=\"70\" y=\"196\" class=\"txs txc\">U1</text><line x1=\"70\" y1=\"176\" x2=\"70\" y2=\"176\" class=\"ln\"/><line x1=\"70\" y1=\"206\" x2=\"70\" y2=\"226\" class=\"ln\"/><text x=\"70\" y=\"242\" class=\"txs txb txc\">L1</text><circle cx=\"130\" cy=\"100\" r=\"6\" class=\"ln fla\"/><circle cx=\"130\" cy=\"170\" r=\"6\" class=\"ln fla\"/><text x=\"110\" y=\"96\" class=\"txs txc\">U2</text><text x=\"130\" y=\"196\" class=\"txs txc\">V1</text><line x1=\"130\" y1=\"176\" x2=\"130\" y2=\"176\" class=\"ln\"/><line x1=\"130\" y1=\"206\" x2=\"130\" y2=\"226\" class=\"ln\"/><text x=\"130\" y=\"242\" class=\"txs txb txc\">L2</text><circle cx=\"190\" cy=\"100\" r=\"6\" class=\"ln fla\"/><circle cx=\"190\" cy=\"170\" r=\"6\" class=\"ln fla\"/><text x=\"170\" y=\"96\" class=\"txs txc\">V2</text><text x=\"190\" y=\"196\" class=\"txs txc\">W1</text><line x1=\"190\" y1=\"176\" x2=\"190\" y2=\"176\" class=\"ln\"/><line x1=\"190\" y1=\"206\" x2=\"190\" y2=\"226\" class=\"ln\"/><text x=\"190\" y=\"242\" class=\"txs txb txc\">L3</text><polyline points=\"70,94 70,72 190,72 190,94\" class=\"ln lna\"/><line x1=\"130\" y1=\"72\" x2=\"130\" y2=\"94\" class=\"ln lna\"/><circle cx=\"370\" cy=\"100\" r=\"6\" class=\"ln fla\"/><circle cx=\"370\" cy=\"170\" r=\"6\" class=\"ln fla\"/><text x=\"350\" y=\"96\" class=\"txs txc\">W2</text><text x=\"370\" y=\"196\" class=\"txs txc\">U1</text><line x1=\"370\" y1=\"176\" x2=\"370\" y2=\"176\" class=\"ln\"/><line x1=\"370\" y1=\"206\" x2=\"370\" y2=\"226\" class=\"ln\"/><text x=\"370\" y=\"242\" class=\"txs txb txc\">L1</text><line x1=\"370\" y1=\"106\" x2=\"370\" y2=\"164\" class=\"ln lna\"/><circle cx=\"430\" cy=\"100\" r=\"6\" class=\"ln fla\"/><circle cx=\"430\" cy=\"170\" r=\"6\" class=\"ln fla\"/><text x=\"410\" y=\"96\" class=\"txs txc\">U2</text><text x=\"430\" y=\"196\" class=\"txs txc\">V1</text><line x1=\"430\" y1=\"176\" x2=\"430\" y2=\"176\" class=\"ln\"/><line x1=\"430\" y1=\"206\" x2=\"430\" y2=\"226\" class=\"ln\"/><text x=\"430\" y=\"242\" class=\"txs txb txc\">L2</text><line x1=\"430\" y1=\"106\" x2=\"430\" y2=\"164\" class=\"ln lna\"/><circle cx=\"490\" cy=\"100\" r=\"6\" class=\"ln fla\"/><circle cx=\"490\" cy=\"170\" r=\"6\" class=\"ln fla\"/><text x=\"470\" y=\"96\" class=\"txs txc\">V2</text><text x=\"490\" y=\"196\" class=\"txs txc\">W1</text><line x1=\"490\" y1=\"176\" x2=\"490\" y2=\"176\" class=\"ln\"/><line x1=\"490\" y1=\"206\" x2=\"490\" y2=\"226\" class=\"ln\"/><text x=\"490\" y=\"242\" class=\"txs txb txc\">L3</text><line x1=\"490\" y1=\"106\" x2=\"490\" y2=\"164\" class=\"ln lna\"/>\n<text x=\"130\" y=\"30\" class=\"tx txb txc\">Star (Y): run on 400 V</text><text x=\"130\" y=\"48\" class=\"txs txc\">top three terminals linked together</text>\n<text x=\"430\" y=\"30\" class=\"tx txb txc\">Delta (Δ): run on 400 V</text><text x=\"430\" y=\"48\" class=\"txs txc\">three links in a ring (top to bottom)</text>\n<text x=\"130\" y=\"270\" class=\"txs txm txc\">Each winding gets 400 ÷ √3 = 230 V</text>\n<text x=\"430\" y=\"270\" class=\"txs txm txc\">Each winding gets the full 400 V</text>\n<text x=\"300\" y=\"292\" class=\"txs txm txc\">Star-delta starting: star to start, then delta to run. Starting line current falls to one third.</text>\n</svg>"
    },
    {
     "t": "ghana",
     "x": "The three-phase supply is 400 V, 50 Hz, so a motor must be plated 400 V delta (often 400/690 V) to be started star-delta. A 230/400 V motor already runs in star on this supply and cannot be started this way."
    },
    {
     "t": "p",
     "x": "In star each winding sees 1/√3 of the line voltage. Torque falls with the square of the voltage, so the starting torque and the starting line current both fall to **one third** of the DOL values. The changeover must come when the motor has nearly reached full speed (the timer is usually set at 5 to 15 seconds), otherwise the switch to delta causes a current spike almost as large as a DOL start. Star-delta suits loads that start unloaded or lightly loaded, such as fans with a damper closed or centrifugal pumps with the discharge valve closed. It is not suitable for loaded starts such as a crusher full of material."
    },
    {
     "t": "worked",
     "title": "Worked example: star-delta currents",
     "problem": "The motor above (14.8 A full load) has a DOL starting current of 7 times full load. Find the DOL starting current, the star-delta starting line current, and the current in each winding when running in delta.",
     "steps": [
      "DOL starting current = 7 × 14.8 = 103.6 A.",
      "In star the line current is one third of that: 103.6 ÷ 3 = 34.5 A.",
      "Running in delta, the line current is 14.8 A and each winding carries 14.8 ÷ √3 = 8.55 A."
     ],
     "answer": "DOL: 103.6 A. Star-delta start: about 34.5 A. Winding current when running: about 8.5 A."
    },
    {
     "t": "p",
     "x": "For this reason the overload relay of a star-delta starter is placed in series with each winding (the 'in-delta' arrangement) and set to 0.58 × the nameplate current (14.8 ÷ √3 = 8.55 A) when it is wired inside the delta; if it is placed in the line before the star-delta contactors, it is set to the nameplate current. Check the wiring diagram."
    },
    {
     "t": "key",
     "items": [
      "DOL gives full torque but a starting current of five to eight times full load.",
      "Set the overload relay to the nameplate full-load current.",
      "Star-delta cuts starting current and torque to one third and needs a six-terminal delta-rated motor.",
      "Star and delta contactors are interlocked; changeover is by an on-delay timer.",
      "Use star-delta only for light starting loads."
     ]
    }
   ]
  },
  {
   "id": "m12-l5",
   "title": "Reading diagrams, fault finding and safety relays",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Control faults are found by reading the diagram, understanding what each device does and measuring in a planned order. Random part swapping wastes time and can cause damage."
    },
    {
     "t": "h",
     "x": "Reading schematics"
    },
    {
     "t": "ul",
     "items": [
      "Power circuits are drawn separately from control circuits; control circuits are drawn as a **ladder** between two rails with the coil at the right end.",
      "Each contact carries the same **tag** as its coil (K1), and a **cross-reference** under the coil lists where its contacts are used in the drawing, for example '13-14 / 4.2'.",
      "Terminal blocks are numbered (X1:1, X1:2…) and wires carry numbers at both ends, which lets you trace a wire from the diagram to the panel.",
      "Symbols follow IEC 60617. Check the legend and the sheet notes."
     ]
    },
    {
     "t": "h",
     "x": "Power supplies and safety relays"
    },
    {
     "t": "p",
     "x": "A control transformer steps the supply down to 230 V, 110 V or 24 V and isolates the control circuit from the mains. A switch-mode power supply produces 24 V DC; its output current is limited and it must be protected by a fuse or breaker. A **safety relay** is a certified module with redundant, monitored contacts used for emergency stops, guard doors and light curtains. It checks itself and its inputs, so a single fault cannot cause loss of the safety function. A safety relay is never replaced with a standard relay."
    },
    {
     "t": "h",
     "x": "Fault finding with a multimeter"
    },
    {
     "t": "p",
     "x": "The **voltage-drop method** works on a live circuit. In a series circuit, the supply voltage appears across the one open or faulty device. Across a closed, healthy contact the voltage is close to zero."
    },
    {
     "t": "steps",
     "title": "Finding why a contactor will not pull in",
     "items": [
      "Check the supply, control fuse or breaker, and the emergency stop. Measure the voltage between L and N at the control circuit; it should be the rated voltage.",
      "Measure across the coil (A1 to A2). If the rated voltage is present and the contactor is not pulling in, the coil or the mechanism is faulty.",
      "If there is no voltage on the coil, measure from the supply rail to each point along the rung, working from the rail to the coil, or measure across each device in series.",
      "The voltage across a healthy closed contact is about 0 V. A reading of full supply voltage across a device means that it is open: this is the fault (a tripped overload, a stop button that is stuck open, a loose wire).",
      "Isolate and lock out, then check the suspect device and wiring with a continuity test. Repair, restore, and test the circuit."
     ]
    },
    {
     "t": "table",
     "head": [
      "Symptom",
      "Likely cause"
     ],
     "rows": [
      [
       "Contactor does not pull in",
       "No control supply, tripped overload (95-96 open), stuck stop button, open coil"
      ],
      [
       "Pulls in only while Start is held",
       "Hold-in contact not closing or wired wrongly"
      ],
      [
       "Motor hums and overload trips",
       "Single phasing (a blown fuse, bad contact), jammed load"
      ],
      [
       "Contactor buzzes",
       "Low coil voltage, dirt or damaged shading ring"
      ],
      [
       "Breaker trips as soon as the motor starts",
       "Short circuit, earth fault, wrong interlock, or breaker set too low for inrush"
      ]
     ],
     "cap": "Common motor control faults"
    },
    {
     "t": "warn",
     "x": "Live measurement is dangerous. Use a meter and leads rated for the voltage (CAT III or CAT IV), prove the meter on a known source before and after, keep one hand away from the panel, and do not touch bare parts. When a repair or continuity test is needed, isolate and lock out first (Module 2). Never bridge out a stop button, overload or safety contact to make a machine run."
    },
    {
     "t": "key",
     "items": [
      "Read the diagram first: tags, cross-references and terminal numbers lead you to the device.",
      "A control transformer isolates and steps down the control voltage.",
      "Safety relays are certified, redundant and monitored; never substitute a normal relay.",
      "In a live series circuit, the supply voltage appears across the open device.",
      "Isolate and lock out before touching or testing continuity; never bridge out protection."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m12-q1",
   "q": "What are the coil terminals of a standard contactor?",
   "opts": [
    "A1 and A2",
    "1 and 2 (power pole)",
    "95 and 96 (overload)",
    "13 and 14 (aux NO)"
   ],
   "a": 0,
   "why": "A1 and A2 are the coil terminals. 13-14 is an auxiliary NO contact and 95-96 is the overload trip contact."
  },
  {
   "id": "m12-q2",
   "q": "Which utilisation category should be used to select a contactor for an ordinary squirrel-cage motor?",
   "opts": [
    "AC-1",
    "AC-15",
    "AC-3",
    "DC-1"
   ],
   "a": 2,
   "why": "AC-3 covers starting and stopping squirrel-cage motors while running. AC-1 is for non-inductive loads such as heaters."
  },
  {
   "id": "m12-q3",
   "q": "What does an overload relay protect against?",
   "opts": [
    "A short circuit on the supply",
    "Sustained motor overcurrent",
    "Loss of one control fuse supply",
    "Earth leakage of the building"
   ],
   "a": 1,
   "why": "An overload relay opens on sustained overcurrent. It cannot break a short-circuit current, so a fuse or breaker is also needed."
  },
  {
   "id": "m12-q4",
   "q": "In the standard colour code, what does a red indicator lamp mean?",
   "opts": [
    "Normal condition",
    "Neutral information",
    "Warning of abnormal condition",
    "Danger or emergency"
   ],
   "a": 3,
   "why": "Red means danger or an emergency that needs urgent action. Yellow shows an abnormal condition and green shows normal."
  },
  {
   "id": "m12-q5",
   "q": "What is the purpose of the hold-in contact in a start/stop circuit?",
   "opts": [
    "It holds the coil on after Start",
    "It stops the motor when overloaded",
    "It reduces the coil voltage",
    "It reverses the motor"
   ],
   "a": 0,
   "why": "The K1 auxiliary NO contact in parallel with Start provides a path that holds the coil on after the button is released."
  },
  {
   "id": "m12-q6",
   "q": "Why are the stop button and overload contact wired normally closed?",
   "opts": [
    "They use less current in the coil",
    "A fault or wire break stops it",
    "They are cheaper to make and wire",
    "They give much faster restarting"
   ],
   "a": 1,
   "why": "With normally closed contacts in series, a wire break or trip removes power from the coil, so the failure leaves the machine stopped (fail-safe)."
  },
  {
   "id": "m12-q7",
   "q": "A motor starts and runs only while the Start button is held down. What is the likely fault?",
   "opts": [
    "The overload is set too high",
    "The motor is single phasing",
    "Hold-in contact not closing",
    "The supply voltage is too high"
   ],
   "a": 2,
   "why": "The hold-in contact should take over once the coil is on. If it does not close or is wired wrongly, the coil drops out when Start is released."
  },
  {
   "id": "m12-q8",
   "q": "What is the main danger if both contactors of a reversing starter close at the same time?",
   "opts": [
    "The motor just turns slowly",
    "Two phases get shorted",
    "The overload relay resets itself",
    "The coil voltage doubles up"
   ],
   "a": 1,
   "why": "Reversing swaps two phases. Both contactors closing together connect those phases to each other, causing a short circuit."
  },
  {
   "id": "m12-q9",
   "q": "How is a normal electrical interlock between K1 and K2 wired?",
   "opts": [
    "NO contacts of each in parallel with the other's coil",
    "A fuse between the two coils",
    "NC contact in the other's coil",
    "Both coils on the same terminal"
   ],
   "a": 2,
   "why": "Each contactor's normally closed auxiliary contact is placed in series with the other's coil, so while one is on, the other cannot energise."
  },
  {
   "id": "m12-q10",
   "q": "A motor has a nameplate full-load current of 14.8 A. Where should the thermal overload relay be set?",
   "opts": [
    "At 7 times 14.8 A",
    "At half of 14.8 A",
    "At about 20 A to prevent tripping",
    "At 14.8 A"
   ],
   "a": 3,
   "why": "The relay is set to the nameplate full-load current. A higher setting leaves the motor unprotected."
  },
  {
   "id": "m12-q11",
   "q": "A motor with a full-load current of 14.8 A has a DOL starting current of 7 times that. What is the star-delta starting line current?",
   "opts": [
    "About 34.5 A",
    "About 103.6 A",
    "About 14.8 A",
    "About 59 A"
   ],
   "a": 0,
   "why": "DOL start is 7 × 14.8 = 103.6 A. Star connection cuts the line current to one third, giving about 34.5 A."
  },
  {
   "id": "m12-q12",
   "q": "Which load is suited to star-delta starting?",
   "opts": [
    "A loaded crusher",
    "A hoist with a load on the hook",
    "A fan with the damper closed",
    "A compressor starting on load"
   ],
   "a": 2,
   "why": "Star-delta reduces torque to one third, so it suits loads that start with little or no load, such as a fan with the damper closed."
  },
  {
   "id": "m12-q13",
   "q": "In a live series control circuit you measure the full supply voltage across a closed-looking stop button. What does this show?",
   "opts": [
    "The button is healthy and closed",
    "The coil is shorted out",
    "The supply is too low",
    "The contact is open"
   ],
   "a": 3,
   "why": "In a series circuit the full voltage appears across the open or non-conducting device. A healthy closed contact reads about 0 V."
  },
  {
   "id": "m12-q14",
   "q": "What is the main difference between a safety relay and an ordinary control relay?",
   "opts": [
    "Redundant, monitored contacts",
    "A higher coil voltage than normal",
    "A much smaller physical size",
    "It is always slower to operate"
   ],
   "a": 0,
   "why": "A safety relay is certified with redundant, self-monitored contacts so that a single fault cannot cause loss of the safety function."
  }
 ],
 "cards": [
  {
   "f": "What are terminals A1 and A2?",
   "b": "The coil terminals of a contactor or relay."
  },
  {
   "f": "What are the numbers of the overload trip contact?",
   "b": "95-96 is the normally closed trip contact; 97-98 is the normally open contact."
  },
  {
   "f": "What is AC-3?",
   "b": "The utilisation category for starting squirrel-cage motors and switching them off while running."
  },
  {
   "f": "What is the difference between a fuse/breaker and an overload relay?",
   "b": "A fuse or breaker clears short circuits; an overload relay protects against sustained overcurrent."
  },
  {
   "f": "Colours: start and stop buttons?",
   "b": "Green (preferred) for start, red for stop and emergency stop."
  },
  {
   "f": "Meaning of yellow and blue indicators?",
   "b": "Yellow means abnormal condition; blue means a mandatory action is needed."
  },
  {
   "f": "What is a hold-in (seal-in) contact?",
   "b": "An auxiliary NO contact of the contactor wired in parallel with Start to keep the coil energised."
  },
  {
   "f": "What is no-volt release?",
   "b": "The motor does not restart by itself after the supply returns, because the hold-in is lost."
  },
  {
   "f": "Why is Stop wired NC in series with the coil?",
   "b": "A wire break or fault stops the machine: fail-safe."
  },
  {
   "f": "How is a forward/reverse starter interlocked?",
   "b": "NC contact of each contactor in the other's coil circuit, plus a mechanical interlock."
  },
  {
   "f": "On-delay timer action?",
   "b": "The contacts change a set time after the coil is energised."
  },
  {
   "f": "Starting current of a DOL induction motor?",
   "b": "About 5 to 8 times full-load current."
  },
  {
   "f": "Effect of star starting?",
   "b": "Line current and starting torque fall to one third of the DOL values."
  },
  {
   "f": "Voltage-drop method?",
   "b": "In a live series circuit the full supply voltage appears across the open device; closed devices read about 0 V."
  }
 ],
 "terms": [
  {
   "t": "Contactor",
   "d": "A heavy-duty electromagnetic switch used to make and break motor and power circuits."
  },
  {
   "t": "Auxiliary contact",
   "d": "A small contact on a contactor or relay used in the control circuit."
  },
  {
   "t": "Overload relay",
   "d": "A device that opens the control circuit when current is above its setting for too long."
  },
  {
   "t": "MPCB",
   "d": "Motor protection circuit breaker: a breaker with adjustable overload and short-circuit protection."
  },
  {
   "t": "Hold-in contact",
   "d": "A contact that keeps a contactor energised after the start button is released."
  },
  {
   "t": "No-volt release",
   "d": "Prevention of an automatic restart after a supply failure."
  },
  {
   "t": "Interlock",
   "d": "An arrangement that prevents two devices from operating together."
  },
  {
   "t": "DOL",
   "d": "Direct-on-line starting: the motor is connected directly to the full supply."
  },
  {
   "t": "Star-delta",
   "d": "A reduced-voltage starting method that starts the motor in star and runs it in delta."
  },
  {
   "t": "Safety relay",
   "d": "A certified, self-monitoring module used to build emergency stop and guard circuits."
  },
  {
   "t": "Cross-reference",
   "d": "A note on a schematic that tells where the contacts of a coil are used."
  }
 ],
 "formulas": [
  {
   "n": "Star-delta starting current",
   "f": "I(Y) = I(DOL) ÷ 3",
   "v": "Also starting torque ÷ 3"
  },
  {
   "n": "Winding current in delta",
   "f": "I(phase) = I(line) ÷ √3",
   "v": "√3 = 1.732"
  },
  {
   "n": "Winding voltage in star",
   "f": "V(phase) = V(line) ÷ √3",
   "v": "400 V line gives 230 V"
  },
  {
   "n": "DOL starting current",
   "f": "I(start) ≈ 5 to 8 × I(FLC)",
   "v": "Use the maker's data where known"
  },
  {
   "n": "Three-phase motor current",
   "f": "I = P ÷ (√3 × V × η × cosφ)",
   "v": "P in watts, output power"
  }
 ]
});
