window.MECH.register({
  id: "m06",
  n: 6,
  title: "Electrical Fundamentals: DC and AC Circuits",
  short: "DC and AC Circuits",
  group: "Electrical & Electronics",
  blurb: "Analyse DC and AC circuits, calculate power, energy and three-phase loads, size cables, choose protection and test safely with a meter.",
  outcomes: [
    "Apply Ohm's law and the power equations to calculate voltage, current, resistance, power and energy in kWh",
    "Calculate total resistance, branch currents and voltage drops in series, parallel and combination circuits",
    "Use Kirchhoff's laws and the voltage divider formula to analyse a circuit",
    "Describe how capacitors and inductors behave and calculate an RC or RL time constant",
    "Explain frequency, period, peak, RMS and phase for a sine wave and calculate reactance and impedance",
    "Calculate real power, apparent power and power factor for single-phase and three-phase loads",
    "Relate line and phase quantities in star and delta connections at 400 V",
    "Select protection and estimate voltage drop for a cable, and use a multimeter, clamp meter and insulation tester correctly"
  ],
  lessons: [
    {
      id: "m06-l1",
      title: "Current, voltage, resistance, power and energy",
      minutes: 10,
      body: [
        {t:"p", x:"Almost everything a mechatronics technician repairs, from a 24 V sensor to a 400 V motor, obeys the same few relationships. Learn these well and fault finding becomes arithmetic rather than guesswork."},
        {t:"p", x:"**Electric charge** (symbol Q, unit coulomb, C) is carried by electrons in a metal. **Current** (symbol I, unit ampere, A) is the rate of flow of charge: 1 A means 1 C passing a point every second. By convention, current is drawn flowing from the positive terminal to the negative one, although the electrons actually drift the other way. **Voltage** (symbol V, unit volt, V), also called potential difference, is the energy given to each coulomb as it passes through a source or lost as it passes through a load: 1 V = 1 J per coulomb. **Resistance** (symbol R, unit ohm, Ω) is the opposition a material offers to current."},
        {t:"table", head:["Quantity","Symbol","Unit","Measured with"], rows:[
          ["Current","I","ampere (A)","Ammeter in series, or clamp meter"],
          ["Voltage","V (or U)","volt (V)","Voltmeter across the component"],
          ["Resistance","R","ohm (Ω)","Ohmmeter on a dead, isolated circuit"],
          ["Power","P","watt (W)","Calculated, or a power meter"],
          ["Energy","E","joule (J) or kilowatt-hour (kWh)","Energy meter"]
        ], cap:"The five basic electrical quantities"},
        {t:"p", x:"The resistance of a conductor depends on its material, length and cross-section: R = ρ × L ÷ A, where ρ (rho) is the resistivity. For copper, ρ is about 0.0175 Ω·mm²/m at 20 °C. A long, thin cable therefore has more resistance than a short, thick one, and the resistance of metals rises as they warm up."},
        {t:"formula", x:"V = I × R", where:"Ohm's law: V in volts, I in amperes, R in ohms. Rearranged: I = V ÷ R and R = V ÷ I"},
        {t:"p", x:"**Power** is the rate at which energy is converted, in watts (W). In a resistive load the electrical energy becomes heat. Combining the power equation with Ohm's law gives three useful forms, so you can find power from whichever two quantities you know."},
        {t:"formula", x:"P = V × I = I² × R = V² ÷ R", where:"P in watts, V in volts, I in amperes, R in ohms"},
        {t:"worked", title:"Worked example: heater current, resistance and energy", problem:"A resistive heater is rated 2 kW at 230 V. Find the current it draws, its resistance, and the energy it uses in 3 hours.", steps:[
          "Current: I = P ÷ V = 2000 ÷ 230 = 8.70 A.",
          "Resistance: R = V² ÷ P = 230² ÷ 2000 = 52 900 ÷ 2000 = 26.45 Ω. Check with Ohm's law: 230 ÷ 26.45 = 8.70 A.",
          "Energy: E = P × t = 2 kW × 3 h = 6 kWh."
        ], answer:"The heater draws 8.70 A, has a resistance of 26.45 Ω when hot, and uses 6 kWh in 3 hours."},
        {t:"h", x:"Energy and the kilowatt-hour"},
        {t:"p", x:"Energy is power multiplied by time. The SI unit is the joule (1 J = 1 W for 1 s), but electricity is sold in **kilowatt-hours** (kWh): 1 kWh = 1 kW running for 1 hour = 3.6 million joules. Multiply the power in kW by the hours to get kWh, then multiply by the tariff to get the cost. A 100 W lamp left on for 10 hours uses 1 kWh."},
        {t:"h", x:"Prefixes and the resistor colour code"},
        {t:"p", x:"Meter readings and component values use SI prefixes: kilo (k) = 1000, mega (M) = 1 000 000, milli (m) = 0.001, micro (µ) = 0.000 001. So 4.7 kΩ = 4700 Ω and 250 mA = 0.25 A. Small resistors are marked with coloured bands. Read from the end nearest the group of bands, away from the gold or silver one: the first two bands give digits, the third gives the multiplier, and the last gives the tolerance."},
        {t:"table", head:["Colour","Digit","Multiplier","Tolerance"], rows:[
          ["Black","0","×1","-"],
          ["Brown","1","×10","±1 %"],
          ["Red","2","×100","±2 %"],
          ["Orange","3","×1 000","-"],
          ["Yellow","4","×10 000","-"],
          ["Green","5","×100 000","-"],
          ["Blue","6","×1 000 000","-"],
          ["Violet","7","-","-"],
          ["Grey","8","-","-"],
          ["White","9","-","-"],
          ["Gold","-","×0.1","±5 %"],
          ["Silver","-","×0.01","±10 %"]
        ], cap:"Resistor colour code: the first two bands are digits, the third is the multiplier, the last is the tolerance"},
        {t:"p", x:"Example: yellow, violet, red, gold means 4, 7, then ×10² (two zeros), so 4700 Ω = 4.7 kΩ with ±5 % tolerance. Always confirm a doubtful resistor with a meter after removing it from the circuit."},
        {t:"warn", x:"Current through the body, not voltage alone, causes injury. A current above about 30 mA through the chest can be dangerous. Treat every circuit as live until you have isolated it and proved it dead (see Module 2)."},
        {t:"key", items:[
          "Current is the flow of charge (A), voltage drives it (V), resistance opposes it (Ω).",
          "Ohm's law: V = I × R; power: P = V × I = I² × R = V² ÷ R.",
          "Energy in kWh = power in kW × time in hours.",
          "Resistance rises with cable length and falls with cross-section.",
          "Colour code: two digits, then the multiplier, then the tolerance band."
        ]}
      ]
    },
    {
      id: "m06-l2",
      title: "Series, parallel and combination circuits",
      minutes: 11,
      body: [
        {t:"p", x:"Real circuits connect components in two basic ways. In a **series** circuit the components are joined end to end, so there is only one path and the same current flows through all of them. In a **parallel** circuit the components are joined across the same two points, so each sits on its own branch and each gets the full supply voltage. Figure 1 shows both."},
        {t:"svg", svg:`<svg viewBox="0 0 580 300" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="m06-f1-arr" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 z" class="fi"/></marker></defs><text x="160" y="18" class="tx txb txc">Series: one path</text><path d="M60,64 L100,64 M140,64 L180,64 M220,64 L260,64 L260,210 L60,210 L60,138 M60,130 L60,64" class="ln"/><line x1="48" y1="130" x2="72" y2="130" class="ln"/><line x1="54" y1="138" x2="66" y2="138" class="ln"/><text x="78" y="128" class="txs">+</text><text x="78" y="148" class="txs">−</text><text x="46" y="138" class="txs txe">24 V</text><rect x="100" y="58" width="40" height="12" class="ln fla"/><rect x="180" y="58" width="40" height="12" class="ln fla"/><text x="120" y="48" class="txs txc">R1 100 Ω</text><text x="200" y="48" class="txs txc">R2 220 Ω</text><line x1="222" y1="88" x2="252" y2="88" class="ln1" marker-end="url(#m06-f1-arr)"/><text x="237" y="106" class="txs txc">I</text><text x="160" y="244" class="txs txc">Rt = R1 + R2 = 320 Ω</text><text x="160" y="262" class="txs txc">Same current I in every part</text><text x="160" y="280" class="txs txc">The voltages add up to supply V</text><text x="450" y="18" class="tx txb txc">Parallel: more than one path</text><path d="M340,64 L510,64 M510,210 L340,210 L340,138 M340,130 L340,64" class="ln"/><line x1="328" y1="130" x2="352" y2="130" class="ln"/><line x1="334" y1="138" x2="346" y2="138" class="ln"/><text x="358" y="128" class="txs">+</text><text x="358" y="148" class="txs">−</text><text x="326" y="138" class="txs txe">24 V</text><path d="M430,64 L430,115 M430,155 L430,210" class="ln"/><rect x="424" y="115" width="12" height="40" class="ln fla"/><circle cx="430" cy="64" r="3" class="fi"/><circle cx="430" cy="210" r="3" class="fi"/><text x="440" y="132" class="txs">R3</text><text x="440" y="147" class="txs">220 Ω</text><line x1="416" y1="80" x2="416" y2="104" class="ln1" marker-end="url(#m06-f1-arr)"/><text x="410" y="96" class="txs txe">I3</text><path d="M510,64 L510,115 M510,155 L510,210" class="ln"/><rect x="504" y="115" width="12" height="40" class="ln fla"/><circle cx="510" cy="64" r="3" class="fi"/><circle cx="510" cy="210" r="3" class="fi"/><text x="520" y="132" class="txs">R4</text><text x="520" y="147" class="txs">330 Ω</text><line x1="496" y1="80" x2="496" y2="104" class="ln1" marker-end="url(#m06-f1-arr)"/><text x="490" y="96" class="txs txe">I4</text><text x="450" y="244" class="txs txc">1/Rt = 1/R3 + 1/R4, so Rt = 132 Ω</text><text x="450" y="262" class="txs txc">Same voltage V across each branch</text><text x="450" y="280" class="txs txc">The branch currents add up to total I</text></svg>`, cap:"Figure 1: Two resistors in series (left) and two in parallel (right), drawn with IEC rectangle resistor symbols", alt:"Left, a 24 volt battery drives two resistors in series around one loop. Right, a 24 volt battery feeds two resistors on separate parallel branches."},
        {t:"h", x:"Series circuits"},
        {t:"p", x:"The total resistance is the sum of the parts, and the supply voltage divides between them in proportion to their resistances: the biggest resistor takes the biggest share. A series circuit has a weakness every technician knows: if one part opens (a broken wire, a blown lamp), the current stops in all of them. A safety chain of E-stop contacts is a deliberate series circuit, because any single open contact must stop the machine."},
        {t:"formula", x:"Rt = R1 + R2 + R3 + ...", where:"Series: Rt total resistance in ohms; the current I is the same everywhere"},
        {t:"h", x:"Parallel circuits"},
        {t:"p", x:"Adding a branch gives the current another path, so the total resistance falls and is always less than the smallest branch. The branch currents add up to the supply current. Mains outlets, lamps and loads on one supply are in parallel so that each gets full voltage and one can fail without stopping the rest."},
        {t:"formula", x:"1 ÷ Rt = 1 ÷ R1 + 1 ÷ R2 + ...", where:"Parallel: for two resistors only, Rt = (R1 × R2) ÷ (R1 + R2). Equal resistors: Rt = R ÷ n"},
        {t:"h", x:"Kirchhoff's laws"},
        {t:"p", x:"Two rules cover any circuit, however complicated. **Kirchhoff's current law (KCL):** the currents flowing into a junction equal the currents flowing out, because charge does not pile up. **Kirchhoff's voltage law (KVL):** around any closed loop the voltage drops across the components add up to the supply voltage. KVL is the reason that a faulty connection with a high resistance shows up as a voltage drop: the supply voltage is fixed, so the drop must go somewhere."},
        {t:"worked", title:"Worked example: a combination circuit", problem:"A 24 V supply feeds R1 = 100 Ω in series with a parallel pair R2 = 220 Ω and R3 = 330 Ω. Find the total resistance, the supply current, the voltage across each part, and each branch current.", steps:[
          "Parallel pair: (220 × 330) ÷ (220 + 330) = 72 600 ÷ 550 = 132 Ω.",
          "Total resistance: Rt = 100 + 132 = 232 Ω.",
          "Supply current: I = 24 ÷ 232 = 0.1034 A = 103.4 mA.",
          "Voltage across R1: 0.1034 × 100 = 10.34 V. Voltage across the pair: 0.1034 × 132 = 13.66 V. The two add to 24 V (KVL).",
          "Branch currents: 13.66 ÷ 220 = 62.1 mA and 13.66 ÷ 330 = 41.4 mA. They add to 103.5 mA (KCL, allowing for rounding)."
        ], answer:"Rt = 232 Ω, I = 103.4 mA, R1 drops 10.34 V, the parallel pair drops 13.66 V, and the branch currents are 62.1 mA and 41.4 mA."},
        {t:"h", x:"The voltage divider"},
        {t:"p", x:"Two resistors in series across a supply give a lower voltage at their junction. This is used to scale a signal for an analogue input, to bias a transistor, or to set a reference level."},
        {t:"formula", x:"Vout = Vin × R2 ÷ (R1 + R2)", where:"R2 is the resistor the output voltage is measured across; Vin and Vout in volts"},
        {t:"p", x:"With Vin = 12 V, R1 = 10 kΩ and R2 = 4.7 kΩ: Vout = 12 × 4.7 ÷ 14.7 = 3.84 V. The formula holds only if whatever you connect to the output draws very little current. A heavy load acts in parallel with R2 and pulls the output down."},
        {t:"tip", x:"In fault finding, voltage-drop readings do the work of KVL for you. Measure across a closed switch or a good joint: it should read close to 0 V. A reading near the full supply voltage across a component that should be closed means that component is open."},
        {t:"key", items:[
          "Series: same current, resistances add, voltages divide.",
          "Parallel: same voltage, currents add, total resistance is lower than the smallest branch.",
          "KCL: current in = current out at a junction; KVL: voltage drops in a loop add up to the supply.",
          "Solve combination circuits by reducing parallel groups first, then adding series parts.",
          "Divider: Vout = Vin × R2 ÷ (R1 + R2), valid for a light load."
        ]}
      ]
    },
    {
      id: "m06-l3",
      title: "Capacitors, inductors and time constants",
      minutes: 9,
      body: [
        {t:"p", x:"Resistors turn electrical energy into heat. Capacitors and inductors instead **store** energy and release it later, which makes them behave in time-dependent ways. They appear in power supplies, motor drives, filters, contactor coils and every relay circuit you will meet."},
        {t:"h", x:"The capacitor"},
        {t:"p", x:"A **capacitor** is two conducting plates separated by an insulator (the dielectric). It stores energy in an electric field. Its size is its **capacitance** (symbol C, unit farad, F); real parts are measured in microfarads (µF, 10⁻⁶ F), nanofarads (nF) and picofarads (pF). Behaviour to remember: a capacitor passes a changing voltage but blocks steady DC once it is charged, and its voltage cannot change instantly. When first connected to a supply it draws a large surge current, which then falls to zero as it charges. Capacitors in parallel add (C = C1 + C2); in series they combine like parallel resistors."},
        {t:"formula", x:"E = ½ × C × V²", where:"Energy stored E in joules, C in farads, V in volts. Example: 1000 µF at 24 V stores 0.288 J"},
        {t:"warn", x:"A charged capacitor can hold a dangerous voltage after the power is switched off. The DC bus of a variable speed drive at 400 V supply sits near 565 V and can stay charged for minutes. Wait the time marked on the drive label and measure the bus voltage before touching anything (see Module 10)."},
        {t:"h", x:"The inductor"},
        {t:"p", x:"An **inductor** is a coil of wire. It stores energy in a magnetic field. Its size is its **inductance** (symbol L, unit henry, H, usually millihenries, mH). Behaviour to remember: its current cannot change instantly, because a changing current induces a voltage that opposes the change. It passes steady DC freely (only the wire resistance limits it) but opposes changing current. Relay coils, contactor coils, solenoid valves and motor windings are all inductive."},
        {t:"warn", x:"When current through a coil is suddenly interrupted, the collapsing magnetic field produces a large voltage spike that can be many times the supply voltage. This arcs across switch contacts and destroys transistor outputs. Coils on DC outputs are fitted with a flywheel (flyback) diode or a suppressor for this reason (see Module 8)."},
        {t:"h", x:"Time constants"},
        {t:"p", x:"When a capacitor charges through a resistor, or the current in a coil builds up through a resistance, the change is gradual and follows an exponential curve. The speed is set by the **time constant**, τ (the Greek letter tau). After one time constant the quantity has completed 63.2 % of its change. After five time constants it has effectively finished."},
        {t:"formula", x:"τ = R × C   (RC circuit);   τ = L ÷ R   (RL circuit)", where:"τ in seconds, R in ohms, C in farads, L in henries"},
        {t:"table", head:["Time elapsed","Change completed","Remaining"], rows:[
          ["1 τ","63.2 %","36.8 %"],
          ["2 τ","86.5 %","13.5 %"],
          ["3 τ","95.0 %","5.0 %"],
          ["4 τ","98.2 %","1.8 %"],
          ["5 τ","99.3 %","0.7 %"]
        ], cap:"Charging or discharging an RC or RL circuit"},
        {t:"p", x:"Example: a 100 µF capacitor charged to 12 V is discharged through a 100 kΩ bleed resistor. τ = 100 000 × 0.0001 = 10 s. After 10 s the voltage has fallen to 36.8 % of 12 V, which is 4.4 V. After 5τ = 50 s it is below 0.1 V. When the same capacitor charges from a 12 V supply through 10 kΩ, τ = 1 s, and after 1 s it has reached 12 × 0.632 = 7.6 V. For a coil of 0.5 H and 50 Ω resistance, τ = 0.5 ÷ 50 = 10 ms."},
        {t:"p", x:"These delays are used on purpose: simple RC circuits make timing delays, smooth rectified DC and filter noise from signals."},
        {t:"key", items:[
          "A capacitor stores energy in an electric field; its voltage cannot change instantly.",
          "An inductor stores energy in a magnetic field; its current cannot change instantly.",
          "Time constant τ = R × C or L ÷ R; after 1 τ the change is 63.2 % complete and after 5 τ it is finished.",
          "Charged capacitors stay dangerous after switch-off; discharge and measure before work.",
          "Suppress inductive spikes at coils with a diode or snubber."
        ]}
      ]
    },
    {
      id: "m06-l4",
      title: "AC waveforms, reactance and impedance",
      minutes: 10,
      body: [
        {t:"p", x:"Direct current (DC) flows in one direction at a steady value, as from a battery or a 24 V power supply. **Alternating current (AC)** reverses direction continuously, and mains power is AC because voltage is easy to raise and lower with transformers. Generators and mains supplies produce a **sine wave**, shown in Figure 2."},
        {t:"svg", svg:`<svg viewBox="0 0 600 310" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="m06-f2-arr" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 z" class="fi"/></marker></defs><line x1="90" y1="140" x2="470" y2="140" class="ln1 lnm"/><line x1="90" y1="40" x2="90" y2="240" class="ln1 lnm"/><line x1="90" y1="60" x2="270" y2="60" class="ln1 lnm dash"/><line x1="90" y1="220" x2="360" y2="220" class="ln1 lnm dash"/><line x1="90" y1="83.4" x2="450" y2="83.4" class="ln1 lnb dash"/><line x1="180" y1="140" x2="180" y2="252" class="ln1 lnm dash"/><text x="180" y="266" class="txs txc">5 ms</text><line x1="270" y1="140" x2="270" y2="252" class="ln1 lnm dash"/><text x="270" y="266" class="txs txc">10 ms</text><line x1="360" y1="140" x2="360" y2="252" class="ln1 lnm dash"/><text x="360" y="266" class="txs txc">15 ms</text><line x1="450" y1="140" x2="450" y2="252" class="ln1 lnm dash"/><text x="450" y="266" class="txs txc">20 ms</text><text x="90" y="266" class="txs txc">0</text><polyline points="90,140 95,133 100,126.1 105,119.3 110,112.6 115,106.2 120,100 125,94.1 130,88.6 135,83.4 140,78.7 145,74.5 150,70.7 155,67.5 160,64.8 165,62.7 170,61.2 175,60.3 180,60 185,60.3 190,61.2 195,62.7 200,64.8 205,67.5 210,70.7 215,74.5 220,78.7 225,83.4 230,88.6 235,94.1 240,100 245,106.2 250,112.6 255,119.3 260,126.1 265,133 270,140 275,147 280,153.9 285,160.7 290,167.4 295,173.8 300,180 305,185.9 310,191.4 315,196.6 320,201.3 325,205.5 330,209.3 335,212.5 340,215.2 345,217.3 350,218.8 355,219.7 360,220 365,219.7 370,218.8 375,217.3 380,215.2 385,212.5 390,209.3 395,205.5 400,201.3 405,196.6 410,191.4 415,185.9 420,180 425,173.8 430,167.4 435,160.7 440,153.9 445,147 450,140" class="ln lna"/><text x="84" y="64" class="txs txe">+325 V</text><text x="84" y="224" class="txs txe">−325 V</text><text x="84" y="87.4" class="txs txe">230 V rms</text><text x="456" y="87.4" class="txs txa">rms</text><text x="180" y="52" class="txs txc">peak</text><text x="360" y="236" class="txs txc">trough</text><line x1="90" y1="284" x2="449" y2="284" class="ln1" marker-end="url(#m06-f2-arr)"/><text x="270" y="298" class="txs txc">one cycle: T = 20 ms (f = 1 ÷ T = 50 Hz)</text><text x="480" y="62" class="txs txb">Mains sine wave</text><text x="480" y="82" class="txs">Peak: 325 V</text><text x="480" y="98" class="txs">Peak-to-peak: 650 V</text><text x="480" y="114" class="txs">RMS: 230 V</text><text x="480" y="130" class="txs">Period: 20 ms</text><text x="480" y="146" class="txs">Frequency: 50 Hz</text><text x="96" y="54" class="txs txm">volts</text></svg>`, cap:"Figure 2: One cycle of the 230 V, 50 Hz mains sine wave showing peak, RMS value and period", alt:"A sine wave starting at zero, rising to a +325 volt peak, falling to −325 volts and returning to zero after 20 milliseconds, with the 230 volt RMS level marked as a dashed line."},
        {t:"ul", items:[
          "**Period (T):** the time for one complete cycle, in seconds. For mains at 50 Hz, T = 20 ms.",
          "**Frequency (f):** cycles per second, in hertz (Hz). f = 1 ÷ T. Mains in Ghana and most of the world is 50 Hz; North America uses 60 Hz (T = 16.7 ms).",
          "**Peak value (Vp):** the maximum voltage reached. **Peak-to-peak** is twice that.",
          "**RMS value:** the effective value. An AC supply of 230 V RMS delivers the same heating in a resistor as 230 V DC."
        ]},
        {t:"p", x:"Meters and nameplates quote RMS values (root mean square). The peak of a sine wave is √2 (1.414) times the RMS value, so the 230 V mains peaks at 230 × 1.414 = 325 V, and 400 V peaks at 566 V. This matters when you select capacitors and insulation, which must withstand the peak, not the RMS value."},
        {t:"formula", x:"Vp = √2 × Vrms = 1.414 × Vrms", where:"Vp peak voltage and Vrms RMS voltage, both in volts. Similarly for current. Average power uses RMS values."},
        {t:"h", x:"Phase"},
        {t:"p", x:"One cycle is divided into 360 electrical degrees. **Phase** describes how far one waveform is ahead of or behind another, in degrees. In a purely resistive load, voltage and current rise and fall together (in phase). In capacitive and inductive loads they are shifted, and the shift is the key to reactance and power factor."},
        {t:"h", x:"Reactance and impedance"},
        {t:"p", x:"Capacitors and inductors oppose AC too, but in a different way from a resistor. This opposition is **reactance** (symbol X, unit ohm). It depends on frequency: an inductor's reactance rises with frequency, a capacitor's falls."},
        {t:"formula", x:"XL = 2π × f × L;   XC = 1 ÷ (2π × f × C)", where:"XL, XC in ohms; f in hertz; L in henries; C in farads"},
        {t:"p", x:"At 50 Hz, a 0.5 H coil has XL = 2π × 50 × 0.5 = 157 Ω. A 100 µF capacitor has XC = 1 ÷ (2π × 50 × 0.0001) = 31.8 Ω. In an inductor the current lags the voltage by 90°; in a capacitor the current leads the voltage by 90°. A mnemonic is CIVIL: in a Capacitor, I leads V; in an inductor (L), V leads I."},
        {t:"p", x:"A real coil, such as a motor winding or contactor coil, has both resistance and reactance. Because they act 90° apart they do not add directly. The combined opposition is the **impedance** (symbol Z, ohms):"},
        {t:"formula", x:"Z = √(R² + X²)   and   I = V ÷ Z", where:"R resistance in ohms, X net reactance in ohms, Z impedance in ohms. Phase angle φ: cos φ = R ÷ Z"},
        {t:"p", x:"A coil with R = 30 Ω and XL = 40 Ω has Z = √(900 + 1600) = 50 Ω. On 230 V it draws 230 ÷ 50 = 4.6 A, and the current lags the voltage by cos⁻¹(30 ÷ 50) = 53.1°. A plain 230 V DC supply across the same coil would draw 230 ÷ 30 = 7.7 A, which is why a contactor coil burns out when its armature is blocked open: the air gap lowers the inductance, the current rises and the coil overheats."},
        {t:"note", x:"Voltage in this lesson is always RMS unless stated. Multimeters on AC ranges show RMS for a sine wave, but cheap meters give wrong readings on distorted waveforms such as drive outputs; use a true-RMS meter there."},
        {t:"key", items:[
          "Frequency f = 1 ÷ T; mains is 50 Hz, so the period is 20 ms.",
          "RMS is the effective value; peak = √2 × RMS (230 V RMS = 325 V peak).",
          "Inductive reactance XL = 2πfL rises with frequency; capacitive reactance XC = 1 ÷ (2πfC) falls.",
          "Impedance Z = √(R² + X²), and I = V ÷ Z.",
          "Inductor: current lags voltage; capacitor: current leads voltage."
        ]}
      ]
    },
    {
      id: "m06-l5",
      title: "Power factor and three-phase systems",
      minutes: 11,
      body: [
        {t:"h", x:"Real, reactive and apparent power"},
        {t:"p", x:"With reactive loads, current and voltage are out of step, so not all of the current does useful work. There are three kinds of power. **Real power** P (watts, W) does the work and produces heat. **Reactive power** Q (var) is energy that is stored and returned every cycle by coils and capacitors; it does no net work but still flows in the cables. **Apparent power** S (volt-amperes, VA) is the product of RMS voltage and current, and is what the supply, cables and protection must carry."},
        {t:"formula", x:"S = V × I;   P = V × I × cos φ;   Q = V × I × sin φ;   S² = P² + Q²", where:"S in VA, P in W, Q in var; power factor PF = cos φ = P ÷ S"},
        {t:"p", x:"**Power factor** (PF) is the ratio of real to apparent power, a number between 0 and 1. A resistive heater has PF = 1. An induction motor at light load may have a PF of 0.3 to 0.5, and about 0.8 to 0.9 at full load. A low power factor means a larger current for the same useful power, so heavier cables, larger breakers and more losses. Industrial customers are often charged for poor power factor, and **power factor correction** capacitors are fitted to cancel the inductive current."},
        {t:"worked", title:"Worked example: power of the contactor coil load", problem:"The coil in the last lesson (R = 30 Ω, XL = 40 Ω) draws 4.6 A from 230 V. Find S, P, Q and the power factor.", steps:[
          "Apparent power: S = V × I = 230 × 4.6 = 1058 VA.",
          "Power factor: cos φ = R ÷ Z = 30 ÷ 50 = 0.6 (lagging).",
          "Real power: P = 1058 × 0.6 = 634.8 W. Check: I² × R = 4.6² × 30 = 634.8 W.",
          "Reactive power: Q = 1058 × sin φ = 1058 × 0.8 = 846.4 var."
        ], answer:"S = 1058 VA, P = 634.8 W, Q = 846.4 var and PF = 0.6 lagging."},
        {t:"h", x:"Single-phase and three-phase"},
        {t:"p", x:"A **single-phase** supply has one live conductor and a neutral, at 230 V in Ghana (50 Hz). Its power flow pulsates twice per cycle. A **three-phase** supply has three live conductors, L1, L2 and L3, each carrying a sine wave 120° apart, and usually a neutral. The combined power flow is smooth, so three-phase motors start themselves, run smoothly and are smaller for the same power. Three conductors carry the power that would need six in three separate single-phase circuits, so large motors and industrial plant are supplied this way."},
        {t:"ghana", x:"The nominal low-voltage supply in Ghana is 230 V, 50 Hz single phase and 400 V, 50 Hz three phase. Check the nameplate of imported equipment for its rated voltage and frequency."},
        {t:"svg", svg:`<svg viewBox="0 0 600 322" xmlns="http://www.w3.org/2000/svg" role="img"><text x="140" y="18" class="tx txb txc">Star (Y)</text><g><path d="M140,190 L140,151 M140,115 L140,80" class="ln"/><rect x="134" y="115" width="12" height="36" class="ln fla"/></g><g transform="rotate(120 140 190)"><path d="M140,190 L140,151 M140,115 L140,80" class="ln"/><rect x="134" y="115" width="12" height="36" class="ln fla"/></g><g transform="rotate(240 140 190)"><path d="M140,190 L140,151 M140,115 L140,80" class="ln"/><rect x="134" y="115" width="12" height="36" class="ln fla"/></g><circle cx="140" cy="190" r="4" class="fi"/><circle cx="140" cy="80" r="4" class="fi"/><circle cx="235" cy="245" r="4" class="fi"/><circle cx="45" cy="245" r="4" class="fi"/><text x="140" y="68" class="tx txb txc">L1</text><text x="246" y="252" class="tx txb">L2</text><text x="34" y="252" class="tx txb txe">L3</text><text x="150" y="184" class="txs">N</text><line x1="140" y1="80" x2="235" y2="245" class="ln1 lnr dash"/><text x="198" y="168" class="txs txb">VL = 400 V</text><text x="128" y="136" class="txs txb txe">Vph = 230 V</text><text x="140" y="292" class="txs txc">VL = √3 × Vph (400 = 1.732 × 231)</text><text x="140" y="310" class="txs txc">IL = Iph (line current = winding current)</text><text x="450" y="18" class="tx txb txc">Delta (Δ)</text><g><path d="M355,235 L430,235 M470,235 L545,235" class="ln"/><rect x="430" y="229" width="40" height="12" class="ln fla"/></g><g transform="rotate(120 450 180)"><path d="M355,235 L430,235 M470,235 L545,235" class="ln"/><rect x="430" y="229" width="40" height="12" class="ln fla"/></g><g transform="rotate(240 450 180)"><path d="M355,235 L430,235 M470,235 L545,235" class="ln"/><rect x="430" y="229" width="40" height="12" class="ln fla"/></g><path d="M450,70 L450,52 M545,235 L562,245 M355,235 L338,245" class="ln"/><circle cx="450" cy="70" r="4" class="fi"/><circle cx="545" cy="235" r="4" class="fi"/><circle cx="355" cy="235" r="4" class="fi"/><text x="450" y="44" class="tx txb txc">L1</text><text x="568" y="252" class="tx txb">L2</text><text x="332" y="252" class="tx txb txe">L3</text><text x="450" y="160" class="txs txb txc">VL = Vph</text><text x="450" y="176" class="txs txb txc">= 400 V</text><text x="450" y="222" class="txs txm txc">winding Iph</text><text x="450" y="292" class="txs txc">IL = √3 × Iph (line is 1.732 × winding)</text><text x="450" y="310" class="txs txc">VL = Vph (full line voltage on each winding)</text></svg>`, cap:"Figure 3: Star (left) and delta (right) connections of a three-phase load on a 400 V supply", alt:"Left, three windings joined at a common neutral point N and connected to L1, L2 and L3 in star. Right, three windings joined in a triangle with L1, L2 and L3 at the corners in delta."},
        {t:"h", x:"Star and delta"},
        {t:"p", x:"Three windings can be joined in **star** (Y), with one end of each tied to a common point, or in **delta** (Δ), joined end to end in a triangle. The **line voltage** VL is measured between two lines, and the **phase voltage** Vph across one winding. On a 400 V system, the phase-to-neutral voltage is 400 ÷ √3 = 231 V, and that is how 230 V single-phase circuits are taken from a three-phase supply."},
        {t:"table", head:["","Star (Y)","Delta (Δ)"], rows:[
          ["Voltage","VL = √3 × Vph","VL = Vph"],
          ["Current","IL = Iph","IL = √3 × Iph"],
          ["Winding voltage on 400 V supply","231 V","400 V"],
          ["Power of identical windings","1 unit","3 units"]
        ], cap:"Line and phase quantities (√3 = 1.732)"},
        {t:"formula", x:"P = √3 × VL × IL × cos φ", where:"Three-phase real power in watts; VL line voltage in volts, IL line current in amperes. Use this for star or delta."},
        {t:"worked", title:"Worked example: motor power and energy", problem:"A three-phase motor on a 400 V supply draws 11 A per line at a power factor of 0.85. Find the input power and the energy used in an 8-hour shift. Then compare three 20 Ω windings in star and in delta on the same supply.", steps:[
          "Input power: P = √3 × 400 × 11 × 0.85 = 1.732 × 400 × 11 × 0.85 = 6478 W, about 6.48 kW.",
          "Energy: E = 6.478 kW × 8 h = 51.8 kWh.",
          "Delta: each 20 Ω winding has 400 V across it, so Iph = 400 ÷ 20 = 20 A, IL = 1.732 × 20 = 34.6 A and P = 3 × 400 × 20 = 24 kW.",
          "Star: each winding has 231 V across it, so I = 231 ÷ 20 = 11.5 A (line current equals phase current) and P = 3 × 231 × 11.5 = 8 kW."
        ], answer:"The motor takes 6.48 kW and 51.8 kWh per shift. The same windings take 24 kW in delta and 8 kW in star, one third. This is the principle of star-delta starting (see Module 12)."},
        {t:"key", items:[
          "Real power P in W does work; apparent power S in VA is V × I; PF = P ÷ S.",
          "Low power factor means more current for the same useful power.",
          "Ghana supply: 230 V single phase and 400 V three phase at 50 Hz.",
          "Star: VL = √3 × Vph and IL = Iph; delta: VL = Vph and IL = √3 × Iph.",
          "Three-phase power P = √3 × VL × IL × cos φ."
        ]}
      ]
    },
    {
      id: "m06-l6",
      title: "Cables, protection and electrical testing",
      minutes: 12,
      body: [
        {t:"h", x:"Cable sizing and voltage drop"},
        {t:"p", x:"A cable has resistance, so it heats and drops voltage when it carries current. Two limits decide its size. The first is **current-carrying capacity**: the cable must carry its load without overheating, and this depends on conductor cross-section, insulation type, ambient temperature, how it is installed (in conduit, on a tray, buried) and how many cables are grouped. The second is **voltage drop**: too much loss starves the load, and motors struggle to start. Rules in IEC 60364 and national codes give permitted limits, commonly around 3 to 5 % of the supply voltage. Always size from the code tables, not from memory."},
        {t:"p", x:"For a single-phase circuit, the current flows out and back, so the conductor length counted is twice the route length."},
        {t:"formula", x:"ΔV = I × R_loop = I × (ρ × 2L ÷ A)", where:"ΔV volt drop in volts; I amperes; ρ about 0.0175 Ω·mm²/m for copper at 20 °C; L route length in metres; A cross-section in mm²"},
        {t:"worked", title:"Worked example: voltage drop on a final circuit", problem:"A 16 A single-phase load is fed from 230 V by a 30 m run of 2.5 mm² copper cable. Estimate the voltage drop and the percentage.", steps:[
          "Loop resistance: R = 0.0175 × (2 × 30) ÷ 2.5 = 0.0175 × 60 ÷ 2.5 = 0.42 Ω.",
          "Voltage drop: ΔV = 16 × 0.42 = 6.72 V.",
          "Percentage: 6.72 ÷ 230 × 100 = 2.9 %.",
          "The cable also dissipates P = I² × R = 16² × 0.42 = 107.5 W as heat along its length."
        ], answer:"The drop is about 6.7 V (2.9 %). This is an estimate at 20 °C; a cable at working temperature has about 20 % more resistance, so check the code tables."},
        {t:"h", x:"Protection devices"},
        {t:"p", x:"Protection has three jobs: stop an overload (a current above rating that lasts), clear a short circuit (a very large current from a fault between conductors), and prevent shock. The basic rule is that the circuit load current Ib must not exceed the device rating In, and In must not exceed the cable capacity Iz: Ib ≤ In ≤ Iz."},
        {t:"table", head:["Device","What it does","Notes"], rows:[
          ["Fuse (IEC 60269)","Melts to open the circuit on overcurrent","Must be replaced; keep the correct type and rating, never a wire substitute"],
          ["Miniature circuit breaker (MCB)","Trips thermally on overload, magnetically on short circuit; resettable","Curve B trips at 3 to 5 × In, C at 5 to 10 × In, D at 10 to 20 × In; use C or D for motor inrush"],
          ["Moulded-case or motor breaker (IEC 60947)","Industrial breakers with adjustable trip settings","See Module 12 for motor protection"],
          ["RCD (residual current device)","Trips when current out differs from current back, which means leakage to earth","30 mA trip gives additional protection against shock; does not limit overload"]
        ], cap:"Common protective devices"},
        {t:"p", x:"**Earthing** connects exposed metal parts to the earth conductor, so that a live-to-frame fault causes a high current that makes the protective device disconnect quickly, and the frame never stays live. A broken or missing earth is a hidden hazard: the equipment works normally until the first fault, then the frame is live."},
        {t:"warn", x:"Never defeat a protective device or earth connection, fit a larger fuse or breaker than the cable allows, or bypass an RCD that trips. A device that trips repeatedly is warning of a fault: find it."},
        {t:"h", x:"Test instruments"},
        {t:"ul", items:[
          "**Multimeter:** measure voltage in parallel with the load; current in series (switch to the current range and use the correct socket, otherwise you blow its fuse or create a short); resistance and continuity only on a dead circuit. Use a meter rated for the category (CAT III or IV) of the installation, with good leads.",
          "**Clamp meter:** clamps around one conductor to measure current without breaking the circuit. Clamping around both live and neutral reads about zero because the fields cancel.",
          "**Insulation resistance tester:** applies a high DC voltage (500 V for circuits up to 500 V) to find leakage in cables and windings. Results are read in megohms; for a 230/400 V fixed installation the usual minimum is 1 MΩ, and higher values are expected on healthy equipment. Isolate and disconnect electronics, drives and PLCs first, because the test voltage destroys them."
        ]},
        {t:"steps", title:"Safe procedure before testing a de-energised circuit", items:[
          "Isolate the circuit and lock it off (see Module 2).",
          "Check the meter on a known live source or proving unit.",
          "Test the circuit is dead between every pair of conductors and to earth.",
          "Check the meter again on the known source.",
          "Only then take resistance or insulation readings, and discharge the circuit after a high-voltage test."
        ]},
        {t:"key", items:[
          "Size cables for current capacity and for voltage drop; use code tables.",
          "Voltage drop ΔV = I × ρ × 2L ÷ A for a single-phase run.",
          "Ib ≤ In ≤ Iz: load current, device rating, cable capacity.",
          "An RCD detects leakage to earth; an MCB or fuse detects overload and short circuit.",
          "Prove dead with a proved meter before any hands-on work; insulation tests only with the equipment isolated."
        ]}
      ]
    }
  ],
  quiz: [
    {id:"m06-q1", q:"A 12 Ω heating element is connected to a 24 V DC supply. What current flows?", opts:["2 A", "0.5 A", "12 A", "288 A"], a:0, why:"I = V ÷ R = 24 ÷ 12 = 2 A. Multiplying instead of dividing gives 288, and dividing the wrong way gives 0.5."},
    {id:"m06-q2", q:"A 230 V load draws 5 A. What power does it use?", opts:["46 W", "235 W", "1150 W", "0.02 kW"], a:2, why:"P = V × I = 230 × 5 = 1150 W. Dividing 230 by 5 gives 46, which is a resistance-like number, not power."},
    {id:"m06-q3", q:"A 2 kW heater runs for 4 hours. How much energy does it use?", opts:["0.5 kWh", "8 kW", "2 kWh", "8 kWh"], a:3, why:"E = P × t = 2 kW × 4 h = 8 kWh. Energy has units of kWh, and kW is a power unit."},
    {id:"m06-q4", q:"Two resistors of 60 Ω and 40 Ω are connected in parallel. What is the total resistance?", opts:["100 Ω", "24 Ω", "50 Ω", "20 Ω"], a:1, why:"For two resistors, Rt = (60 × 40) ÷ (60 + 40) = 2400 ÷ 100 = 24 Ω, which is below the smaller branch. 100 Ω is the series value."},
    {id:"m06-q5", q:"What is the total resistance of a 100 Ω resistor in series with a 150 Ω and a 150 Ω resistor connected in parallel?", opts:["175 Ω", "400 Ω", "75 Ω", "250 Ω"], a:0, why:"The parallel pair of equal resistors is 150 ÷ 2 = 75 Ω; added to 100 Ω in series that gives 175 Ω."},
    {id:"m06-q6", q:"A 12 V supply is across a 10 kΩ and a 5 kΩ resistor in series. What is the voltage across the 5 kΩ resistor?", opts:["8 V", "6 V", "4 V", "2 V"], a:2, why:"Divider: Vout = 12 × 5 ÷ (10 + 5) = 4 V. The 8 V is across the 10 kΩ resistor, because the bigger resistor takes the bigger share."},
    {id:"m06-q7", q:"In a series circuit, the voltage across a closed contact that should be conducting reads nearly the full supply voltage. What does this show?", opts:["The contact is fine and carrying current", "The other loads are in parallel", "The supply voltage is too high", "The contact is open or making very poor connection"], a:3, why:"A good closed contact drops almost no voltage. By KVL, a drop near the full supply voltage means the circuit is broken at that point, so the contact is open or badly worn."},
    {id:"m06-q8", q:"A 47 kΩ resistor charges a 10 µF capacitor in an RC timing circuit. What is the time constant?", opts:["4.7 s", "0.47 s", "470 s", "47 s"], a:1, why:"τ = R × C = 47 000 × 0.00001 = 0.47 s. The capacitance must be converted from microfarads to farads before multiplying."},
    {id:"m06-q9", q:"After how many time constants is an RC circuit regarded as fully charged for practical purposes?", opts:["5", "1", "10", "2"], a:0, why:"After 5τ the capacitor is within 0.7 % of its final value. After 1τ it has reached only 63.2 %."},
    {id:"m06-q10", q:"The mains supply is 230 V RMS. Roughly what is its peak voltage?", opts:["163 V", "460 V", "325 V", "230 V"], a:2, why:"Peak = √2 × RMS = 1.414 × 230 = 325 V. Dividing by √2 gives 163 V, which is the wrong direction."},
    {id:"m06-q11", q:"A supply has a period of 20 ms. What is its frequency?", opts:["20 Hz", "200 Hz", "0.05 Hz", "50 Hz"], a:3, why:"f = 1 ÷ T = 1 ÷ 0.020 s = 50 Hz. Using 20 ms as 20 would ignore the unit conversion to seconds."},
    {id:"m06-q12", q:"A coil has a resistance of 30 Ω and an inductive reactance of 40 Ω at 50 Hz. What is its impedance?", opts:["70 Ω", "50 Ω", "10 Ω", "1200 Ω"], a:1, why:"R and X act 90° apart, so Z = √(30² + 40²) = √2500 = 50 Ω. They cannot be added directly."},
    {id:"m06-q13", q:"A three-phase load draws 20 A per line from a 400 V supply at a power factor of 0.8. What is the real power?", opts:["11.1 kW", "8 kW", "9.6 kW", "6.4 kW"], a:0, why:"P = √3 × 400 × 20 × 0.8 = 1.732 × 400 × 20 × 0.8 = 11 085 W, or 11.1 kW. Leaving out √3 gives 6.4 kW."},
    {id:"m06-q14", q:"What is the voltage across one winding of a motor connected in star on a 400 V three-phase supply?", opts:["400 V", "693 V", "230 V", "133 V"], a:2, why:"In star, Vph = VL ÷ √3 = 400 ÷ 1.732 = 231 V, about 230 V. Each winding in delta would see the full 400 V."},
    {id:"m06-q15", q:"A single-phase motor circuit has a low power factor. What is the main consequence for the installation?", opts:["The motor produces more real power", "The motor runs at higher frequency", "The supply voltage rises", "More current is drawn for the same useful power, loading cables and protection"], a:3, why:"Poor power factor increases apparent power, so the same real power needs a larger current. This means heavier cables, more losses and higher volt drop."},
    {id:"m06-q16", q:"Before taking an insulation resistance reading on a motor circuit fed through a variable speed drive, what must you do?", opts:["Leave the drive connected so the test is realistic", "Disconnect the drive and electronics, because the test voltage can destroy them", "Test with the supply on", "Use the meter's resistance range instead"], a:1, why:"A 500 V DC test can damage drive and PLC electronics. Isolate, then disconnect the cable from the drive before testing the motor and cable."}
  ],
  cards: [
    {f:"State Ohm's law and its rearrangements.", b:"V = I × R, so I = V ÷ R and R = V ÷ I (V in volts, I in amperes, R in ohms)."},
    {f:"Give the three power formulas for a resistive load.", b:"P = V × I = I² × R = V² ÷ R, with P in watts."},
    {f:"What is a kilowatt-hour?", b:"The energy used by 1 kW running for 1 hour (3.6 MJ). E in kWh = power in kW × time in hours."},
    {f:"How does total resistance behave in series and in parallel?", b:"Series: resistances add. Parallel: 1 ÷ Rt = sum of 1 ÷ R, and Rt is always less than the smallest branch."},
    {f:"State Kirchhoff's current law.", b:"The currents entering a junction equal the currents leaving it."},
    {f:"State Kirchhoff's voltage law.", b:"Around any closed loop the voltage drops add up to the supply voltage."},
    {f:"Give the voltage divider formula.", b:"Vout = Vin × R2 ÷ (R1 + R2), with Vout measured across R2. Valid for a light load."},
    {f:"Resistor bands yellow, violet, red, gold: what value?", b:"4, 7, ×100, so 4700 Ω = 4.7 kΩ with ±5 % tolerance."},
    {f:"What is a time constant?", b:"τ = R × C or L ÷ R in seconds. In one τ the change is 63.2 % complete; after 5 τ it is finished."},
    {f:"Why can a capacitor be dangerous after power-off?", b:"It stores charge and energy (½CV²). A drive DC bus near 565 V can stay charged for minutes. Wait and measure before touching."},
    {f:"How do RMS and peak voltage relate for a sine wave?", b:"Vpeak = √2 × Vrms. For 230 V RMS the peak is 325 V."},
    {f:"How are frequency and period related?", b:"f = 1 ÷ T. At 50 Hz the period is 20 ms."},
    {f:"Give the formulas for inductive and capacitive reactance.", b:"XL = 2πfL and XC = 1 ÷ (2πfC), in ohms. XL rises with frequency; XC falls."},
    {f:"What is power factor?", b:"PF = cos φ = real power P ÷ apparent power S. A low PF means more current for the same useful power."},
    {f:"What are the star and delta relationships?", b:"Star: VL = √3 × Vph, IL = Iph. Delta: VL = Vph, IL = √3 × Iph."},
    {f:"What does an RCD detect?", b:"A difference between the current out and the current returning, which is leakage to earth. A 30 mA trip gives added protection against shock."}
  ],
  terms: [
    {t:"Current", d:"The rate of flow of electric charge, measured in amperes; 1 A is 1 coulomb per second."},
    {t:"Voltage", d:"The electrical pressure or potential difference that drives current, measured in volts; 1 V is 1 joule per coulomb."},
    {t:"Resistance", d:"The opposition of a material to current flow, measured in ohms (Ω)."},
    {t:"Impedance", d:"The total opposition of a circuit to AC, combining resistance and reactance, in ohms."},
    {t:"Reactance", d:"The opposition to AC caused by a capacitor or inductor, in ohms, which varies with frequency."},
    {t:"RMS value", d:"The effective value of an AC waveform, equal to the DC value that produces the same heating."},
    {t:"Power factor", d:"The ratio of real power in watts to apparent power in volt-amperes (cos φ), between 0 and 1."},
    {t:"Time constant", d:"The time (τ) for an RC or RL circuit to complete 63.2 % of its change; equal to R × C or L ÷ R."},
    {t:"Line voltage", d:"The voltage measured between two live conductors of a three-phase supply, 400 V in Ghana."},
    {t:"Phase voltage", d:"The voltage across a single winding or between one line and neutral; 230 V on a 400 V star system."},
    {t:"RCD", d:"Residual current device that disconnects the supply when it detects leakage current to earth."}
  ],
  formulas: [
    {n:"Ohm's law", f:"V = I × R", v:"V volts, I amperes, R ohms"},
    {n:"Electrical power", f:"P = V × I = I² × R = V² ÷ R", v:"P watts, V volts, I amperes, R ohms"},
    {n:"Energy", f:"E = P × t", v:"E in kWh when P is in kW and t in hours"},
    {n:"Resistors in series", f:"Rt = R1 + R2 + R3", v:"Rt and R in ohms"},
    {n:"Two resistors in parallel", f:"Rt = (R1 × R2) ÷ (R1 + R2)", v:"Ohms; for n equal resistors Rt = R ÷ n"},
    {n:"Voltage divider", f:"Vout = Vin × R2 ÷ (R1 + R2)", v:"Volts and ohms; light load on Vout"},
    {n:"Time constant", f:"τ = R × C  or  τ = L ÷ R", v:"τ seconds, R ohms, C farads, L henries"},
    {n:"Frequency and period", f:"f = 1 ÷ T", v:"f hertz, T seconds"},
    {n:"Peak value", f:"Vp = √2 × Vrms", v:"Volts; same for current"},
    {n:"Reactance", f:"XL = 2πfL;  XC = 1 ÷ (2πfC)", v:"Ohms; f hertz, L henries, C farads"},
    {n:"Impedance", f:"Z = √(R² + X²)", v:"Ohms; I = V ÷ Z, cos φ = R ÷ Z"},
    {n:"Three-phase power", f:"P = √3 × VL × IL × cos φ", v:"P watts, VL line volts, IL line amperes"},
    {n:"Cable voltage drop (single phase)", f:"ΔV = I × ρ × 2L ÷ A", v:"ρ = 0.0175 Ω·mm²/m (copper), L metres, A mm²"}
  ]
});
