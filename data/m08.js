window.MECH.register({
 "id": "m08",
 "n": 8,
 "title": "Analogue Electronics: Diodes, Transistors and Op-amps",
 "short": "Analogue Electronics",
 "group": "Electrical & Electronics",
 "blurb": "Understand diodes, power supplies, transistor switches and op-amp circuits, and test and solder electronic components safely.",
 "outcomes": [
  "Describe how a PN junction diode, LED and Zener diode behave and test them with a multimeter",
  "Explain how half-wave and bridge rectifiers with smoothing produce DC and calculate the output voltage",
  "Calculate the series resistor for an LED",
  "Use an NPN transistor and a MOSFET as electronic switches, including a flyback diode for inductive loads",
  "Calculate the gain of inverting and non-inverting op-amp circuits",
  "Explain the purpose of a comparator and a signal-conditioning stage such as a 250 Ω current-to-voltage resistor",
  "Calculate the frequency of a 555 astable timer",
  "Solder, desolder and handle electronic parts safely using ESD precautions"
 ],
 "lessons": [
  {
   "id": "m08-l1",
   "title": "Semiconductors and diodes",
   "minutes": 8,
   "body": [
    {
     "t": "p",
     "x": "Conductors such as copper pass current easily and insulators such as plastic do not. **Semiconductors**, mainly silicon, fall in between and can be given exactly the electrical properties we want by adding tiny amounts of other elements, called **doping**. N-type material has extra free electrons; P-type material has spaces (holes) that behave like positive charges. Joining the two makes a **PN junction**, the building block of every diode and transistor."
    },
    {
     "t": "h",
     "x": "The diode"
    },
    {
     "t": "p",
     "x": "A **diode** conducts in one direction only. With the anode positive of the cathode (forward bias) and the voltage above a threshold, current flows. Reverse the polarity and almost no current flows until the reverse voltage becomes too high and the diode breaks down. A silicon diode drops about **0.7 V** when conducting; a germanium diode, rarely used now, drops about 0.3 V; Schottky diodes drop about 0.3 V and switch fast."
    },
    {
     "t": "ul",
     "items": [
      "**Rectifier diodes** (such as the 1N4007) change AC to DC and carry amperes of current.",
      "**Signal diodes** (1N4148) switch fast and carry only small currents.",
      "**LEDs** emit light when forward biased and drop about 1.8 to 3.3 V depending on colour. They must always have a series resistor to limit current.",
      "**Zener diodes** are designed to conduct in reverse at a precise voltage (3.3 V, 5.1 V, 12 V and so on), giving a simple voltage reference or clamp.",
      "**Photodiodes** and **optocouplers** link a light source and a detector, passing a signal across an electrical isolation barrier."
     ]
    },
    {
     "t": "h",
     "x": "Sizing an LED resistor"
    },
    {
     "t": "p",
     "x": "An LED has nearly constant voltage across it when lit, so the resistor takes up the rest of the supply. The resistor value follows from Ohm's law."
    },
    {
     "t": "formula",
     "x": "R = (Vs − VF) ÷ I",
     "where": "R series resistor (Ω), Vs supply voltage (V), VF LED forward voltage (V), I wanted LED current (A)"
    },
    {
     "t": "worked",
     "title": "Worked example: LED resistor on 24 V",
     "problem": "A red LED (VF = 2 V) must carry 10 mA from a 24 V PLC supply. Find the resistor and its power dissipation.",
     "steps": [
      "R = (24 − 2) ÷ 0.010 = 2200 Ω, so use the preferred value 2.2 kΩ.",
      "Power in the resistor P = I² × R = 0.010² × 2200 = 0.22 W.",
      "A common 0.25 W resistor would run very hot, so choose a 0.5 W resistor."
     ],
     "answer": "Use a 2.2 kΩ, 0.5 W resistor in series with the LED."
    },
    {
     "t": "p",
     "x": "Notice that using 24 ÷ 0.010 = 2400 Ω would be slightly wrong because it ignores the LED's own voltage drop."
    },
    {
     "t": "h",
     "x": "Testing a diode"
    },
    {
     "t": "p",
     "x": "Isolate the circuit and use the diode test range of a multimeter. A good silicon diode reads about 0.5 to 0.7 V in one direction and over-range (OL) in the other. A short reads near zero both ways; an open diode reads OL both ways. Test diodes out of circuit if possible, since other parts may form parallel paths."
    },
    {
     "t": "warn",
     "x": "Never test a component in a powered circuit with a meter on a resistance or diode range. The meter can be damaged, and your fingers can be exposed to supply voltage. Isolate and discharge capacitors first."
    },
    {
     "t": "key",
     "items": [
      "A PN junction passes current one way; silicon drops about 0.7 V when conducting.",
      "LEDs always need a series resistor: R = (Vs − VF) ÷ I.",
      "Zener diodes conduct in reverse at a set voltage and are used as references.",
      "Optocouplers pass signals across an isolation barrier using light.",
      "Check a diode with the multimeter diode range: one direction conducts, the other reads OL."
     ]
    }
   ]
  },
  {
   "id": "m08-l2",
   "title": "Rectifiers and power supplies",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "Mains electricity is AC but most electronics, sensors and PLCs run on low-voltage DC. A DC supply has four stages: a transformer reduces the voltage, a rectifier changes AC to pulsating DC, a smoothing capacitor reduces the pulsations and a regulator holds the voltage steady."
    },
    {
     "t": "h",
     "x": "Rectifier circuits"
    },
    {
     "t": "p",
     "x": "A **half-wave rectifier** uses one diode and passes only one half of each AC cycle. It is simple but wasteful and makes a lot of ripple. A **full-wave bridge rectifier** uses four diodes so both half-cycles are used and the output pulsates at twice the supply frequency, 100 Hz on a 50 Hz supply."
    },
    {
     "t": "svg",
     "alt": "Bridge rectifier: an AC source feeds a diamond of four diodes, D1 to D4, with positive and negative outputs connected to a smoothing capacitor C and a load resistor RL.",
     "cap": "Figure 1: bridge rectifier with a smoothing capacitor and load",
     "svg": "<svg viewBox=\"0 0 600 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<circle cx=\"60\" cy=\"150\" r=\"20\" class=\"ln fl\"/><path d=\"M48,150 q6,-10 12,0 t12,0\" class=\"ln1\"/>\n<text x=\"36\" y=\"154\" class=\"txs txe\">AC in</text>\n<polyline points=\"60,130 60,110 150,110 150,150\" class=\"ln\"/>\n<polyline points=\"60,170 60,280 350,280 350,150\" class=\"ln\"/>\n<circle cx=\"150\" cy=\"150\" r=\"3\" class=\"fi\"/><circle cx=\"350\" cy=\"150\" r=\"3\" class=\"fi\"/>\n<circle cx=\"250\" cy=\"70\" r=\"3\" class=\"fi\"/><circle cx=\"250\" cy=\"230\" r=\"3\" class=\"fi\"/>\n<line x1=\"150\" y1=\"150\" x2=\"191.4\" y2=\"116.9\" class=\"ln\"/><polygon points=\"198.3,125.5 184.5,108.3 208.6,103.1\" class=\"ln fl\"/><line x1=\"215.5\" y1=\"111.7\" x2=\"201.7\" y2=\"94.5\" class=\"ln\"/><line x1=\"208.6\" y1=\"103.1\" x2=\"250\" y2=\"70\" class=\"ln\"/><text x=\"178\" y=\"100\" class=\"txs txe\">D1</text>\n<line x1=\"350\" y1=\"150\" x2=\"308.6\" y2=\"116.9\" class=\"ln\"/><polygon points=\"315.5,108.3 301.7,125.5 291.4,103.1\" class=\"ln fl\"/><line x1=\"298.3\" y1=\"94.5\" x2=\"284.5\" y2=\"111.7\" class=\"ln\"/><line x1=\"291.4\" y1=\"103.1\" x2=\"250\" y2=\"70\" class=\"ln\"/><text x=\"330\" y=\"100\" class=\"txs \">D2</text>\n<line x1=\"250\" y1=\"230\" x2=\"208.6\" y2=\"196.9\" class=\"ln\"/><polygon points=\"215.5,188.3 201.7,205.5 191.4,183.1\" class=\"ln fl\"/><line x1=\"198.3\" y1=\"174.5\" x2=\"184.5\" y2=\"191.7\" class=\"ln\"/><line x1=\"191.4\" y1=\"183.1\" x2=\"150\" y2=\"150\" class=\"ln\"/><text x=\"178\" y=\"205\" class=\"txs txe\">D3</text>\n<line x1=\"250\" y1=\"230\" x2=\"291.4\" y2=\"196.9\" class=\"ln\"/><polygon points=\"298.3,205.5 284.5,188.3 308.6,183.1\" class=\"ln fl\"/><line x1=\"315.5\" y1=\"191.7\" x2=\"301.7\" y2=\"174.5\" class=\"ln\"/><line x1=\"308.6\" y1=\"183.1\" x2=\"350\" y2=\"150\" class=\"ln\"/><text x=\"330\" y=\"205\" class=\"txs \">D4</text>\n<line x1=\"250\" y1=\"70\" x2=\"470\" y2=\"70\" class=\"ln\"/>\n<line x1=\"250\" y1=\"230\" x2=\"470\" y2=\"230\" class=\"ln\"/>\n<circle cx=\"400\" cy=\"70\" r=\"3\" class=\"fi\"/><circle cx=\"400\" cy=\"230\" r=\"3\" class=\"fi\"/>\n<line x1=\"400\" y1=\"70\" x2=\"400\" y2=\"142\" class=\"ln\"/><line x1=\"385\" y1=\"142\" x2=\"415\" y2=\"142\" class=\"ln\"/><line x1=\"385\" y1=\"158\" x2=\"415\" y2=\"158\" class=\"ln\"/><line x1=\"400\" y1=\"158\" x2=\"400\" y2=\"230\" class=\"ln\"/>\n<text x=\"378\" y=\"154\" class=\"txs txe\">C</text>\n<line x1=\"470\" y1=\"70\" x2=\"470\" y2=\"112\" class=\"ln\"/><rect x=\"460\" y=\"112\" width=\"20\" height=\"76\" class=\"ln fl\"/><line x1=\"470\" y1=\"188\" x2=\"470\" y2=\"230\" class=\"ln\"/>\n<text x=\"492\" y=\"154\" class=\"txs\">RL load</text>\n<text x=\"262\" y=\"62\" class=\"tx txb\">+ DC out</text><text x=\"262\" y=\"250\" class=\"tx txb\">− DC out</text>\n<text x=\"300\" y=\"30\" class=\"txs txm txc\">On one half-cycle D1 and D4 conduct; on the other half-cycle D2 and D3 conduct.</text>\n<text x=\"300\" y=\"44\" class=\"txs txm txc\">Current always flows the same way through the load.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "A meter reads AC in RMS (root mean square) volts, but the capacitor charges to the **peak**. For a sine wave the peak is √2 (1.414) times the RMS value. In a bridge rectifier current flows through two diodes at a time, so about 1.4 V is lost."
    },
    {
     "t": "formula",
     "x": "Vpeak = 1.414 × Vrms        Vdc ≈ Vpeak − 1.4 V (bridge)",
     "where": "Vrms is the transformer secondary voltage on load; Vdc is the approximate no-load DC voltage after the capacitor"
    },
    {
     "t": "worked",
     "title": "Worked example: unregulated supply",
     "problem": "A transformer gives 12 V RMS. A bridge rectifier and a large smoothing capacitor follow it. What approximate DC voltage appears across the capacitor?",
     "steps": [
      "Peak = 1.414 × 12 = 16.97 V.",
      "Two diodes conduct, so subtract about 1.4 V: 16.97 − 1.4 = 15.6 V."
     ],
     "answer": "About 15.6 V DC with light load. It will sag under heavy load, which is why a regulator follows."
    },
    {
     "t": "h",
     "x": "Smoothing and ripple"
    },
    {
     "t": "p",
     "x": "The smoothing capacitor charges to the peak and then supplies the load while the rectified voltage falls. The remaining variation is the **ripple**. More capacitance, a lighter load and a higher ripple frequency (full-wave rather than half-wave) all reduce ripple. Electrolytic capacitors are polarised and must be fitted the right way round; their voltage rating must exceed the peak voltage with a margin."
    },
    {
     "t": "h",
     "x": "Regulators"
    },
    {
     "t": "ul",
     "items": [
      "**Zener regulator:** a Zener diode and series resistor give a rough fixed voltage for small currents.",
      "**Linear regulator IC** (such as the 7805 for 5 V): needs the input to be a few volts above the output; it is simple and quiet, but burns the difference as heat: P = (Vin − Vout) × I.",
      "**Switch-mode power supply (SMPS):** switches current rapidly through an inductor, and is efficient (often 85 to 95 %) and small. Most industrial 24 V DC supplies are of this type."
     ]
    },
    {
     "t": "warn",
     "x": "Large electrolytic capacitors in power supplies can store a dangerous charge for minutes after switch-off. Wait, then discharge through a suitable resistor and measure before touching. Never short a capacitor with a screwdriver."
    },
    {
     "t": "tip",
     "x": "When a DC supply shows excessive ripple on an oscilloscope, check the smoothing capacitors first. Electrolytic capacitors dry out with age and heat, particularly in hot enclosures."
    },
    {
     "t": "key",
     "items": [
      "A DC supply is: transformer, rectifier, smoothing capacitor, regulator.",
      "A bridge rectifier uses four diodes and gives full-wave output at twice the mains frequency.",
      "Peak = 1.414 × RMS; the bridge loses about 1.4 V.",
      "Ripple falls with more capacitance and lighter load.",
      "Linear regulators waste power as heat; switch-mode supplies are efficient."
     ]
    }
   ]
  },
  {
   "id": "m08-l3",
   "title": "Transistors as switches",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "A **transistor** is a semiconductor device in which a small current or voltage at one terminal controls a much larger current between two others. Its two main jobs are as a **switch**, which is how almost all digital electronics and output drivers work, and as an **amplifier**."
    },
    {
     "t": "h",
     "x": "The bipolar junction transistor (BJT)"
    },
    {
     "t": "p",
     "x": "An NPN BJT has three terminals: **base (B)**, **collector (C)** and **emitter (E)**. A small current into the base allows a much larger current to flow from collector to emitter. The ratio is the current gain, hFE (also called β), commonly 100 to 300 for small signal transistors, but with wide variation from one part to another."
    },
    {
     "t": "formula",
     "x": "IC = hFE × IB",
     "where": "IC collector current, IB base current, hFE current gain (use the minimum value from the datasheet)"
    },
    {
     "t": "p",
     "x": "Used as a switch, the transistor is driven fully on (**saturation**), when the collector-emitter voltage is about 0.2 V and it acts like a closed switch, or fully off (**cut-off**), when almost no current flows. To make sure it saturates, supply several times more base current than IC ÷ hFE; an overdrive factor of about 10 is a standard design rule. The base always needs a series resistor because the base-emitter junction behaves like a diode."
    },
    {
     "t": "worked",
     "title": "Worked example: driving a relay",
     "problem": "A 12 V relay coil takes 50 mA. A microcontroller pin gives 5 V. The transistor has a minimum hFE of 100. Find the base resistor, using a saturation overdrive of 10 (so IB = IC ÷ 10).",
     "steps": [
      "Base current IB = 50 mA ÷ 10 = 5 mA.",
      "Voltage across Rb = 5 V − 0.7 V = 4.3 V.",
      "Rb = 4.3 ÷ 0.005 = 860 Ω; choose the preferred value 820 Ω, which gives a little more base current."
     ],
     "answer": "Use an 820 Ω base resistor. This is well within the safe current of a typical microcontroller pin."
    },
    {
     "t": "svg",
     "alt": "An NPN transistor with its base fed through a resistor from a microcontroller pin, its collector connected to a 12 volt relay coil with a flyback diode across the coil, and its emitter at 0 volts.",
     "cap": "Figure 2: NPN transistor switching a relay coil, with a flyback diode",
     "svg": "<svg viewBox=\"0 0 560 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m08-f2-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<line x1=\"220\" y1=\"40\" x2=\"420\" y2=\"40\" class=\"ln\"/><text x=\"426\" y=\"44\" class=\"tx txb\">+12 V</text>\n<line x1=\"40\" y1=\"260\" x2=\"420\" y2=\"260\" class=\"ln\"/><text x=\"426\" y=\"264\" class=\"tx txb\">0 V</text>\n<line x1=\"300\" y1=\"40\" x2=\"300\" y2=\"75\" class=\"ln\"/><rect x=\"284\" y=\"75\" width=\"32\" height=\"56\" class=\"ln flb\"/><line x1=\"300\" y1=\"131\" x2=\"300\" y2=\"160\" class=\"ln\"/>\n<text x=\"248\" y=\"106\" class=\"txs txe\">Relay coil</text><text x=\"248\" y=\"120\" class=\"txs txe\">12 V, 50 mA</text>\n<polyline points=\"360,40 360,75\" class=\"ln\"/><polyline points=\"360,131 360,150 300,150\" class=\"ln\"/><circle cx=\"300\" cy=\"150\" r=\"3\" class=\"fi\"/>\n<polygon points=\"350,75 370,75 360,95\" class=\"ln fl\"/><line x1=\"350\" y1=\"95\" x2=\"370\" y2=\"95\" class=\"ln\"/><line x1=\"360\" y1=\"95\" x2=\"360\" y2=\"131\" class=\"ln\"/>\n<text x=\"380\" y=\"92\" class=\"txs\">D1 flyback diode</text>\n<line x1=\"280\" y1=\"165\" x2=\"280\" y2=\"215\" class=\"ln\"/>\n<polyline points=\"300,160 300,170 280,180\" class=\"ln\"/>\n<polyline points=\"280,200 300,212 300,260\" class=\"ln\"/>\n<polygon points=\"300,212 291,201 287,209\" class=\"fi\"/>\n<text x=\"310\" y=\"176\" class=\"txs\">C</text><text x=\"310\" y=\"216\" class=\"txs\">E</text><text x=\"266\" y=\"184\" class=\"txs txe\">B</text>\n<text x=\"330\" y=\"196\" class=\"tx txb\">Q1 NPN</text>\n<line x1=\"120\" y1=\"190\" x2=\"280\" y2=\"190\" class=\"ln\"/>\n<rect x=\"150\" y=\"182\" width=\"50\" height=\"16\" class=\"ln fl\"/><text x=\"175\" y=\"176\" class=\"txs txc\">Rb</text>\n<line x1=\"40\" y1=\"190\" x2=\"120\" y2=\"190\" class=\"ln\"/>\n<circle cx=\"40\" cy=\"190\" r=\"4\" class=\"ln fl\"/><text x=\"40\" y=\"160\" class=\"txs txc\">MCU pin</text><text x=\"40\" y=\"172\" class=\"txs txc\">(5 V high)</text>\n<text x=\"20\" y=\"288\" class=\"txs txm\">High pin → base current → transistor saturates → coil energised. Low pin → coil off.</text>\n</svg>"
    },
    {
     "t": "warn",
     "x": "Always fit a **flyback diode** across any relay coil, solenoid or motor switched by a transistor. When the current is switched off, the coil's collapsing field makes a large reverse voltage spike that can destroy the transistor. The diode, connected in reverse across the coil, absorbs it."
    },
    {
     "t": "h",
     "x": "The MOSFET"
    },
    {
     "t": "p",
     "x": "A **MOSFET** is controlled by voltage on its gate, not current, so it needs almost no drive current and is ideal for switching larger loads. An N-channel MOSFET conducts between drain and source when the gate is more than a threshold voltage above the source. When fully on, it has a very small resistance, **RDS(on)**, perhaps a few milliohms, so it wastes little power: P = I² × RDS(on). A **logic-level** MOSFET turns fully on at 4.5 V or even 2.5 V gate voltage, so it can be driven by a microcontroller pin. The gate is very sensitive to static electricity, and a small resistor from gate to source holds it off if the drive is disconnected."
    },
    {
     "t": "table",
     "head": [
      "Feature",
      "BJT",
      "MOSFET"
     ],
     "rows": [
      [
       "Controlled by",
       "Base current",
       "Gate voltage"
      ],
      [
       "Drive power",
       "Needs base current",
       "Almost none, but gate has capacitance"
      ],
      [
       "On-state loss",
       "Fixed drop of about 0.2 V",
       "I² × RDS(on), can be very small"
      ],
      [
       "Typical use",
       "Small relay and LED drivers, amplifiers",
       "Motor drives, power supplies, high-current switching"
      ]
     ],
     "cap": "Comparing BJT and MOSFET switches"
    },
    {
     "t": "key",
     "items": [
      "A transistor uses a small base current or gate voltage to control a large load current.",
      "As a switch it is driven into saturation (on) or cut-off (off); design with IB about IC ÷ 10.",
      "Always use a base resistor and a flyback diode across inductive loads.",
      "A MOSFET is voltage-controlled; low RDS(on) means low heat.",
      "Use logic-level MOSFETs with microcontrollers and protect gates from static."
     ]
    }
   ]
  },
  {
   "id": "m08-l4",
   "title": "Operational amplifiers and signal conditioning",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "An **operational amplifier (op-amp)** is a high-gain integrated circuit with two inputs, an inverting input (−) and a non-inverting input (+), and one output. It amplifies the difference between its inputs by a very large factor, often 100 000 or more. On its own that is not useful, since the output would simply saturate near a supply rail, but with **negative feedback** it becomes a precise and stable amplifier whose gain is set by two resistors."
    },
    {
     "t": "p",
     "x": "Two rules describe an ideal op-amp with negative feedback and make the circuits easy to analyse. First, the inputs draw no current. Second, the op-amp adjusts its output until the two inputs are at the same voltage (the \"virtual short\")."
    },
    {
     "t": "svg",
     "alt": "Two op-amp circuits: an inverting amplifier with an input resistor Rin and feedback resistor Rf, and a non-inverting amplifier with feedback resistor Rf and ground resistor Rg.",
     "cap": "Figure 3: inverting and non-inverting op-amp amplifiers",
     "svg": "<svg viewBox=\"0 0 640 264\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<text x=\"130\" y=\"14\" class=\"tx txb txc\">Inverting amplifier</text>\n<text x=\"470\" y=\"14\" class=\"tx txb txc\">Non-inverting amplifier</text>\n<polygon points=\"140,70 140,150 230,110\" class=\"ln fl\"/><text x=\"148\" y=\"94\" class=\"txs\">−</text><text x=\"148\" y=\"136\" class=\"txs\">+</text>\n<line x1=\"30\" y1=\"90\" x2=\"70\" y2=\"90\" class=\"ln\"/><rect x=\"70\" y=\"82\" width=\"40\" height=\"16\" class=\"ln fl\"/><line x1=\"110\" y1=\"90\" x2=\"140\" y2=\"90\" class=\"ln\"/>\n<text x=\"90\" y=\"74\" class=\"txs txc\">Rin</text><text x=\"26\" y=\"86\" class=\"txs txe\">Vin</text>\n<polyline points=\"230,110 262,110 262,45 125,45 125,90\" class=\"ln\"/><rect x=\"170\" y=\"37\" width=\"40\" height=\"16\" class=\"ln fl\"/><text x=\"190\" y=\"30\" class=\"txs txc\">Rf</text>\n<circle cx=\"125\" cy=\"90\" r=\"3\" class=\"fi\"/>\n<polyline points=\"140,130 110,130\" class=\"ln\"/><line x1=\"110\" y1=\"130\" x2=\"110\" y2=\"136\" class=\"ln\"/><line x1=\"99\" y1=\"136\" x2=\"121\" y2=\"136\" class=\"ln\"/><line x1=\"103\" y1=\"141\" x2=\"117\" y2=\"141\" class=\"ln\"/><line x1=\"107\" y1=\"146\" x2=\"113\" y2=\"146\" class=\"ln\"/>\n<text x=\"270\" y=\"114\" class=\"txs\">Vout</text>\n<text x=\"130\" y=\"236\" class=\"tx txc txb\">Gain = −Rf ÷ Rin</text>\n<text x=\"130\" y=\"254\" class=\"txs txc txm\">Output is inverted</text>\n<polygon points=\"440,70 440,150 530,110\" class=\"ln fl\"/><text x=\"448\" y=\"94\" class=\"txs\">−</text><text x=\"448\" y=\"136\" class=\"txs\">+</text>\n<line x1=\"340\" y1=\"130\" x2=\"440\" y2=\"130\" class=\"ln\"/><text x=\"336\" y=\"126\" class=\"txs txe\">Vin</text>\n<polyline points=\"530,110 562,110 562,45 425,45 425,90\" class=\"ln\"/><rect x=\"470\" y=\"37\" width=\"40\" height=\"16\" class=\"ln fl\"/><text x=\"490\" y=\"30\" class=\"txs txc\">Rf</text>\n<circle cx=\"425\" cy=\"90\" r=\"3\" class=\"fi\"/><line x1=\"425\" y1=\"90\" x2=\"425\" y2=\"150\" class=\"ln\"/><line x1=\"440\" y1=\"90\" x2=\"425\" y2=\"90\" class=\"ln\"/>\n<rect x=\"417\" y=\"150\" width=\"16\" height=\"30\" class=\"ln fl\"/><text x=\"410\" y=\"170\" class=\"txs txe\">Rg</text><line x1=\"425\" y1=\"180\" x2=\"425\" y2=\"190\" class=\"ln\"/><line x1=\"425\" y1=\"190\" x2=\"425\" y2=\"196\" class=\"ln\"/><line x1=\"414\" y1=\"196\" x2=\"436\" y2=\"196\" class=\"ln\"/><line x1=\"418\" y1=\"201\" x2=\"432\" y2=\"201\" class=\"ln\"/><line x1=\"422\" y1=\"206\" x2=\"428\" y2=\"206\" class=\"ln\"/>\n<text x=\"570\" y=\"114\" class=\"txs\">Vout</text>\n<text x=\"470\" y=\"236\" class=\"tx txc txb\">Gain = 1 + Rf ÷ Rg</text>\n<text x=\"470\" y=\"254\" class=\"txs txc txm\">Output in phase with input</text>\n</svg>"
    },
    {
     "t": "formula",
     "x": "Inverting: Av = −Rf ÷ Rin        Non-inverting: Av = 1 + Rf ÷ Rg",
     "where": "Av voltage gain; Rf feedback resistor; Rin input resistor; Rg resistor from the inverting input to ground"
    },
    {
     "t": "worked",
     "title": "Worked example: non-inverting gain",
     "problem": "A non-inverting amplifier has Rf = 47 kΩ and Rg = 4.7 kΩ. What is the gain, and what output results from a 0.2 V input?",
     "steps": [
      "Av = 1 + 47 000 ÷ 4 700 = 1 + 10 = 11.",
      "Vout = 11 × 0.2 = 2.2 V."
     ],
     "answer": "The gain is 11 and the output is 2.2 V, provided the supply allows it."
    },
    {
     "t": "p",
     "x": "For the inverting amplifier with Rf = 100 kΩ and Rin = 10 kΩ, the gain is −10: a +0.3 V input gives −3 V out. The output can never exceed the supply voltage: with a ±12 V supply it saturates at roughly ±10.5 V."
    },
    {
     "t": "h",
     "x": "Other op-amp circuits"
    },
    {
     "t": "ul",
     "items": [
      "**Voltage follower (buffer):** output connected directly to the inverting input, gain 1. High input resistance and low output resistance, used to stop a sensor being loaded.",
      "**Comparator:** with no feedback, the output saturates high or low depending on which input is higher. It turns an analogue signal into an on/off signal, as in a thermostat or a level alarm.",
      "**Summing amplifier:** several inputs through separate resistors to the inverting input add together.",
      "**Instrumentation amplifier:** amplifies the small difference between two lines while rejecting noise common to both. Used with strain gauges and thermocouples."
     ]
    },
    {
     "t": "h",
     "x": "Signal conditioning"
    },
    {
     "t": "p",
     "x": "A sensor output is rarely in the form a controller input needs. **Signal conditioning** includes amplifying small signals, filtering noise, converting current to voltage and scaling. The most common conversion is a 4–20 mA loop signal turned into a voltage with a precision resistor: 250 Ω gives 1 V at 4 mA and 5 V at 20 mA. A simple RC low-pass filter, with a resistor and a capacitor, removes high-frequency noise above its cut-off frequency."
    },
    {
     "t": "formula",
     "x": "fc = 1 ÷ (2π × R × C)",
     "where": "fc cut-off frequency (Hz), R resistance (Ω), C capacitance (F). Example: 1.6 kΩ and 1 µF give about 100 Hz."
    },
    {
     "t": "tip",
     "x": "Keep sensor and signal wiring away from motor and drive cables, and use screened cable earthed at one end. Good wiring removes more noise than any filter."
    },
    {
     "t": "key",
     "items": [
      "Op-amps with negative feedback: inputs draw no current and are held at the same voltage.",
      "Inverting gain is −Rf ÷ Rin; non-inverting gain is 1 + Rf ÷ Rg.",
      "A comparator, with no feedback, converts a varying signal into on or off.",
      "250 Ω converts 4–20 mA into 1–5 V.",
      "A low-pass filter cuts noise above fc = 1 ÷ (2πRC)."
     ]
    }
   ]
  },
  {
   "id": "m08-l5",
   "title": "The 555 timer, soldering and handling electronics",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "This final lesson covers a classic building block, the 555 timer, and the practical skills of working on electronic boards: soldering, desoldering, handling static-sensitive parts and reading datasheets."
    },
    {
     "t": "h",
     "x": "The 555 timer"
    },
    {
     "t": "p",
     "x": "The 555 is an eight-pin integrated circuit containing two comparators and a latch. Connected as a **monostable** (one-shot), it gives a single output pulse of fixed length each time it is triggered. Connected as an **astable**, it produces a continuous square wave, useful for flashing lamps, clocks and tone generation. In the astable circuit, two resistors R1 and R2 and a capacitor C set the frequency."
    },
    {
     "t": "formula",
     "x": "f = 1.44 ÷ ((R1 + 2 × R2) × C)",
     "where": "f frequency (Hz), R1 and R2 in ohms, C in farads. Output high time = 0.693 × (R1 + R2) × C; low time = 0.693 × R2 × C"
    },
    {
     "t": "worked",
     "title": "Worked example: 555 astable",
     "problem": "An astable 555 uses R1 = 1 kΩ, R2 = 10 kΩ and C = 10 µF. Find the frequency.",
     "steps": [
      "R1 + 2 × R2 = 1000 + 20 000 = 21 000 Ω.",
      "(R1 + 2 × R2) × C = 21 000 × 0.000010 = 0.21 s.",
      "f = 1.44 ÷ 0.21 = 6.86 Hz."
     ],
     "answer": "The output flashes at about 6.9 Hz. Component tolerances (often ±5 % for resistors and ±20 % for electrolytic capacitors) mean the real frequency will differ by several percent."
    },
    {
     "t": "h",
     "x": "Soldering"
    },
    {
     "t": "steps",
     "title": "Making a good solder joint",
     "items": [
      "Use a temperature-controlled iron, about 330 to 350 °C for lead-free solder, with a clean tinned tip.",
      "Clean the pad and component lead, and hold the component so it does not move.",
      "Touch the tip to both the pad and the lead at the same time to heat them together.",
      "Feed solder to the junction of pad and lead, not to the iron tip, then remove the solder and then the iron.",
      "Hold still for a second or two. A good joint is shiny and smooth with a concave, volcano-like shape.",
      "Trim the lead, then clean flux residue if the board requires it."
     ]
    },
    {
     "t": "p",
     "x": "A dull, grainy or ball-shaped joint is a **dry joint** that did not wet the metal. It may work intermittently, which makes it a major cause of hard-to-find faults. Reheat it with fresh solder. To remove a component, use a desoldering pump or braid and heat each joint; never pull a part out while the solder is solid, because the pad tracks lift off the board."
    },
    {
     "t": "warn",
     "x": "Soldering irons reach more than 300 °C, and solder flux fumes irritate the lungs. Use a stand, never rest an iron on the bench, work in ventilated space or with a fume extractor and wear eye protection. Wash hands after handling leaded solder."
    },
    {
     "t": "h",
     "x": "Electrostatic discharge and datasheets"
    },
    {
     "t": "p",
     "x": "Walking across a floor can build thousands of volts of static electricity, enough to destroy a MOSFET gate or a CMOS chip without any visible sign. Use an **antistatic wrist strap** connected to earth through a resistor, an antistatic mat, and keep boards in conductive or antistatic bags until needed. Touch the board by its edges, not its pins."
    },
    {
     "t": "p",
     "x": "Every component has a **datasheet** from its manufacturer. Look for absolute maximum ratings (never exceed), the recommended operating conditions, pin-out and package type, and typical application circuits. Many faults come from a part being replaced by one that looks the same but has a different pin-out, voltage or current rating."
    },
    {
     "t": "key",
     "items": [
      "A 555 astable has f = 1.44 ÷ ((R1 + 2R2) × C).",
      "Good solder joints are shiny and concave; dull or ball-shaped joints are dry joints.",
      "Heat pad and lead together, feed solder to the joint, never to the tip.",
      "Static can destroy ICs and MOSFETs invisibly; use a wrist strap and antistatic bags.",
      "Check the datasheet for pin-out, maximum ratings and operating conditions before replacing parts."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m08-q1",
   "q": "What is the typical forward voltage drop across a conducting silicon diode?",
   "opts": [
    "0.2 V",
    "0.7 V",
    "1.4 V",
    "5.0 V"
   ],
   "a": 1,
   "why": "A silicon PN junction needs about 0.6 to 0.7 V before it conducts and holds near 0.7 V while conducting."
  },
  {
   "id": "m08-q2",
   "q": "A transformer gives 12 V RMS. After a bridge rectifier and large capacitor, what is the approximate no-load DC voltage?",
   "opts": [
    "8.5 V",
    "12 V",
    "15.6 V",
    "17.0 V"
   ],
   "a": 2,
   "why": "Peak = 1.414 × 12 = 16.97 V. Two diode drops of about 1.4 V in total leave about 15.6 V."
  },
  {
   "id": "m08-q3",
   "q": "What is the main purpose of the smoothing capacitor after a rectifier?",
   "opts": [
    "To raise the average voltage above the peak",
    "To protect the diodes from reverse voltage",
    "To limit the output current",
    "To cut ripple between the peaks"
   ],
   "a": 3,
   "why": "The capacitor charges at the peaks and discharges into the load in between, cutting the ripple."
  },
  {
   "id": "m08-q4",
   "q": "A red LED (2 V) is to carry 10 mA from a 24 V supply. What series resistor value is correct?",
   "opts": [
    "2.2 kΩ",
    "240 Ω",
    "22 kΩ",
    "2.4 kΩ"
   ],
   "a": 0,
   "why": "R = (24 − 2) ÷ 0.010 = 2200 Ω, which is 2.2 kΩ. Dividing 24 V alone by 10 mA ignores the LED's own drop."
  },
  {
   "id": "m08-q5",
   "q": "Why is a flyback diode fitted across a relay coil driven by a transistor?",
   "opts": [
    "To make the relay switch on faster",
    "To absorb the voltage spike produced when the coil is switched off",
    "To reduce the coil current when on",
    "To rectify the coil supply"
   ],
   "a": 1,
   "why": "Switching off the current in an inductor causes a large reverse voltage spike. The diode gives the current a safe path and protects the transistor."
  },
  {
   "id": "m08-q6",
   "q": "What does a transistor behave like when it is driven into saturation as a switch?",
   "opts": [
    "An open circuit",
    "A resistor of several kilohms",
    "A closed switch between collector and emitter",
    "A diode in reverse"
   ],
   "a": 2,
   "why": "In saturation the collector-emitter voltage is only about 0.2 V, so the transistor conducts almost like a closed switch."
  },
  {
   "id": "m08-q7",
   "q": "A relay needs 50 mA. Using a minimum hFE of 100 and an overdrive of 10 from a 5 V pin, which base resistor is closest?",
   "opts": [
    "86 Ω",
    "8.6 kΩ",
    "100 Ω",
    "820 Ω"
   ],
   "a": 3,
   "why": "IB = 50 mA ÷ 10 = 5 mA. Rb = (5 − 0.7) ÷ 0.005 = 860 Ω, so a preferred 820 Ω value is suitable."
  },
  {
   "id": "m08-q8",
   "q": "An inverting op-amp has Rf = 100 kΩ and Rin = 10 kΩ. What is the gain?",
   "opts": [
    "−10",
    "+10",
    "−0.1",
    "+11"
   ],
   "a": 0,
   "why": "Gain = −Rf ÷ Rin = −100 000 ÷ 10 000 = −10."
  },
  {
   "id": "m08-q9",
   "q": "A non-inverting amplifier has Rf = 47 kΩ and Rg = 4.7 kΩ. What is its gain?",
   "opts": [
    "10",
    "11",
    "47",
    "−10"
   ],
   "a": 1,
   "why": "Gain = 1 + Rf ÷ Rg = 1 + 10 = 11. The extra 1 is the common mistake when it is forgotten."
  },
  {
   "id": "m08-q10",
   "q": "An op-amp is connected without feedback. What does its output do?",
   "opts": [
    "Gives a gain of exactly 1 whatever the inputs are",
    "Gives a gain of exactly 10 like the other circuits",
    "Swings to a supply rail, depending on the higher input",
    "Stays at zero volts whatever the input is"
   ],
   "a": 2,
   "why": "With no feedback, the huge gain saturates the output to one rail, so the op-amp works as a comparator."
  },
  {
   "id": "m08-q11",
   "q": "A 4–20 mA loop signal passes through a 250 Ω resistor. What voltage range appears across it?",
   "opts": [
    "0 to 5 V",
    "0 to 10 V",
    "4 to 20 V",
    "1 to 5 V"
   ],
   "a": 3,
   "why": "V = I × R = 0.004 × 250 = 1 V and 0.020 × 250 = 5 V."
  },
  {
   "id": "m08-q12",
   "q": "A 555 astable has R1 = 1 kΩ, R2 = 10 kΩ and C = 10 µF. What is the frequency?",
   "opts": [
    "6.9 Hz",
    "0.69 Hz",
    "69 Hz",
    "14.4 Hz"
   ],
   "a": 0,
   "why": "f = 1.44 ÷ ((1000 + 20 000) × 0.00001) = 1.44 ÷ 0.21 = 6.86 Hz."
  },
  {
   "id": "m08-q13",
   "q": "Which practice best protects a CMOS board from static damage?",
   "opts": [
    "Handle it by the pins to keep it steady",
    "Wear an earthed wrist strap and keep boards in antistatic bags",
    "Work on a plastic sheet to insulate it",
    "Blow compressed air on it first"
   ],
   "a": 1,
   "why": "An earthed strap and antistatic packaging keep charge from building and discharging through components. Insulating plastics make static worse."
  },
  {
   "id": "m08-q14",
   "q": "A solder joint looks dull, grainy and rounded like a ball. What is it called and what should you do?",
   "opts": [
    "A good joint; leave it",
    "A cold plate; add more flux",
    "A dry joint; reheat it and add fresh solder",
    "A short circuit; cut the lead"
   ],
   "a": 2,
   "why": "A dull or ball-shaped joint did not wet the pad and lead properly. Reheating it with fresh solder restores a shiny, concave joint."
  }
 ],
 "cards": [
  {
   "f": "Forward voltage drop of silicon diode?",
   "b": "About 0.7 V when conducting."
  },
  {
   "f": "LED series resistor formula?",
   "b": "R = (Vs − VF) ÷ I."
  },
  {
   "f": "What does a Zener diode do?",
   "b": "It conducts in reverse at a defined voltage, giving a reference or clamp."
  },
  {
   "f": "How many diodes does a bridge rectifier use?",
   "b": "Four. Two conduct on each half-cycle, giving full-wave rectification."
  },
  {
   "f": "Peak versus RMS for a sine wave?",
   "b": "Peak = 1.414 × RMS."
  },
  {
   "f": "What reduces ripple in a DC supply?",
   "b": "More smoothing capacitance, a lighter load and full-wave rectification."
  },
  {
   "f": "Why is a linear regulator inefficient?",
   "b": "It dissipates (Vin − Vout) × I as heat."
  },
  {
   "f": "What is hFE?",
   "b": "The DC current gain of a BJT: IC = hFE × IB."
  },
  {
   "f": "Why fit a flyback diode?",
   "b": "To absorb the reverse voltage spike from an inductive load when it is switched off."
  },
  {
   "f": "What controls a MOSFET?",
   "b": "The gate voltage, not current. A logic-level device turns fully on at 4.5 V or less."
  },
  {
   "f": "Inverting op-amp gain?",
   "b": "Av = −Rf ÷ Rin."
  },
  {
   "f": "Non-inverting op-amp gain?",
   "b": "Av = 1 + Rf ÷ Rg."
  },
  {
   "f": "250 Ω resistor on a 4–20 mA loop gives?",
   "b": "1 V at 4 mA to 5 V at 20 mA."
  },
  {
   "f": "What is a dry joint?",
   "b": "A dull, grainy solder joint that did not wet the metal, causing intermittent faults."
  }
 ],
 "terms": [
  {
   "t": "Semiconductor",
   "d": "A material, such as silicon, whose conductivity lies between that of a conductor and an insulator and can be controlled by doping."
  },
  {
   "t": "Forward bias",
   "d": "Connecting a diode with the anode positive of the cathode so that it conducts."
  },
  {
   "t": "Ripple",
   "d": "The small AC variation left on a DC supply after rectification and smoothing."
  },
  {
   "t": "Flyback diode",
   "d": "A diode across an inductive load that absorbs the voltage spike when current is switched off."
  },
  {
   "t": "Saturation",
   "d": "The condition where a transistor is fully on and acting as a closed switch."
  },
  {
   "t": "hFE",
   "d": "The current gain of a bipolar transistor, the ratio of collector current to base current."
  },
  {
   "t": "RDS(on)",
   "d": "The resistance between drain and source of a MOSFET when it is fully turned on."
  },
  {
   "t": "Negative feedback",
   "d": "Feeding part of an amplifier's output back to its inverting input to stabilise and set the gain."
  },
  {
   "t": "Comparator",
   "d": "A circuit that compares two voltages and gives a high or low output depending on which is greater."
  },
  {
   "t": "Signal conditioning",
   "d": "Amplifying, filtering, scaling or converting a sensor signal into a form a controller can use."
  },
  {
   "t": "Electrostatic discharge (ESD)",
   "d": "A sudden flow of static charge that can damage electronic components."
  }
 ],
 "formulas": [
  {
   "n": "LED resistor",
   "f": "R = (Vs − VF) ÷ I",
   "v": "R ohms, voltages in volts, I amperes"
  },
  {
   "n": "Rectifier peak voltage",
   "f": "Vpeak = 1.414 × Vrms",
   "v": "Bridge DC ≈ Vpeak − 1.4 V"
  },
  {
   "n": "BJT current gain",
   "f": "IC = hFE × IB",
   "v": "Use minimum hFE and an overdrive of about 10 for switching"
  },
  {
   "n": "Inverting op-amp",
   "f": "Av = −Rf ÷ Rin",
   "v": "Av voltage gain, resistors in ohms"
  },
  {
   "n": "Non-inverting op-amp",
   "f": "Av = 1 + Rf ÷ Rg",
   "v": "Rg from the inverting input to ground"
  },
  {
   "n": "RC cut-off frequency",
   "f": "fc = 1 ÷ (2π × R × C)",
   "v": "fc Hz, R ohms, C farads"
  },
  {
   "n": "555 astable frequency",
   "f": "f = 1.44 ÷ ((R1 + 2R2) × C)",
   "v": "f Hz, R ohms, C farads"
  }
 ]
});
