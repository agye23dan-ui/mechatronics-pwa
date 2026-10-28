window.MECH.register({
  id: "m05",
  n: 5,
  title: "Mechanical Power Transmission & Lubrication",
  short: "Power Transmission",
  group: "Mechanical",
  blurb: "Calculate speed, torque and power through belts, chains and gears, align couplings, and choose and apply the right lubricant.",
  outcomes: [
    "Calculate power from torque and rotational speed, and torque through a speed reduction",
    "Explain how V-belts, synchronous belts and roller chains transmit power and calculate their speed ratio and length",
    "Identify spur, helical, bevel, worm and planetary gears and state where each is used",
    "Calculate the overall ratio and output speed of a multi-stage gear train",
    "Diagnose parallel and angular shaft misalignment and describe how to correct it",
    "Select a coupling, clutch or brake type for a given duty",
    "Interpret an ISO 3448 viscosity grade and an NLGI grease number",
    "Apply correct lubrication methods and recognise the signs of contamination and lubricant failure"
  ],
  lessons: [
    {
      id: "m05-l1",
      title: "Power, torque, speed and efficiency",
      minutes: 8,
      body: [
        {t:"p", x:"Every drive on a machine does the same job: it takes mechanical power from a source, usually an electric motor, and delivers it to a load at a more useful speed and torque. To size, check or troubleshoot any drive you need three quantities and the way they connect."},
        {t:"p", x:"**Torque** is the twisting effort on a shaft. It is a force multiplied by the distance from the axis at which the force acts, so it is measured in newton-metres (N·m). A 100 N pull on a 0.2 m lever gives 20 N·m. **Rotational speed** is how fast the shaft turns. Workshops use revolutions per minute (rpm, symbol n), but calculations need **angular speed** ω in radians per second (rad/s). One revolution is 2π radians, so ω = 2π × n ÷ 60."},
        {t:"formula", x:"P = T × ω = T × 2π × n ÷ 60", where:"P power in watts (W), T torque in N·m, ω angular speed in rad/s, n speed in rpm"},
        {t:"p", x:"**Power** is the rate of doing work, measured in watts (W); 1 kW = 1000 W. The formula shows the key trade-off of every transmission: for a fixed power, torque and speed are inversely related. Halve the speed and the shaft can deliver twice the torque. A gearbox, belt drive or chain drive does not create power; it only exchanges speed for torque, or the reverse."},
        {t:"worked", title:"Worked example: torque of a motor", problem:"A four-pole induction motor is rated 7.5 kW at 1470 rpm. What torque does it deliver at the shaft at full load?", steps:[
          "Convert speed to angular speed: ω = 2π × 1470 ÷ 60 = 153.9 rad/s.",
          "Convert power to watts: 7.5 kW = 7500 W.",
          "Rearrange P = T × ω to T = P ÷ ω.",
          "T = 7500 ÷ 153.9 = 48.7 N·m."
        ], answer:"The motor delivers about 48.7 N·m at the shaft at full load."},
        {t:"h", x:"Efficiency and losses"},
        {t:"p", x:"No transmission is perfect. Friction in teeth, belts, chains and bearings turns some input power into heat. **Efficiency** (symbol η, the Greek letter eta) is the ratio of output power to input power. For several parts in series, multiply the efficiencies together. Typical values are shown below; they are approximate and fall as parts wear or run poorly lubricated."},
        {t:"table", head:["Element","Typical efficiency","Notes"], rows:[
          ["Spur or helical gear stage","97 to 99 %","Per meshing pair, well lubricated"],
          ["Roller chain","95 to 98 %","Falls quickly if dry or worn"],
          ["V-belt","93 to 96 %","Slip and flexing losses"],
          ["Synchronous belt","96 to 98 %","No slip"],
          ["Worm gear","50 to 90 %","Lower at high ratios; depends on lead angle"]
        ], cap:"Approximate efficiencies of common drive elements"},
        {t:"formula", x:"η = P_out ÷ P_in", where:"η as a fraction (or × 100 for percent); losses = P_in − P_out, released as heat"},
        {t:"note", x:"The heat from losses is the reason gearboxes run warm. A rise in gearbox casing temperature at the same load usually means higher losses: low or wrong oil, overfilling, worn parts or misalignment."},
        {t:"h", x:"Choosing drive power"},
        {t:"p", x:"Real loads are not smooth. Crushers, reciprocating pumps and conveyors that start loaded produce shock and peak torque well above the average. Manufacturers therefore give a **service factor**, a multiplier (commonly between about 1.0 for a smooth, light load and 2.0 or more for heavy shock loading) applied to the required power when selecting a belt, chain or gearbox. Choosing a drive on average power alone is a common cause of repeated early failure."},
        {t:"key", items:[
          "Power (W) = torque (N·m) × angular speed (rad/s); ω = 2πn ÷ 60.",
          "At constant power, reducing speed raises torque in proportion.",
          "Efficiency = output power ÷ input power; efficiencies in series multiply.",
          "Lost power becomes heat, so rising temperature signals rising losses.",
          "Select drives with a service factor, not on average load alone."
        ]}
      ]
    },
    {
      id: "m05-l2",
      title: "Belt and chain drives",
      minutes: 10,
      body: [
        {t:"p", x:"Belts and chains carry power between shafts that are too far apart for gears, and they are forgiving of small errors. The **driver** is the pulley or sprocket on the motor; the **driven** is on the load. The **speed ratio** i compares the two. Because the belt or chain moves at the same linear speed over both wheels, the speed of each wheel is inversely proportional to its diameter (or number of teeth)."},
        {t:"formula", x:"i = n_driver ÷ n_driven = D ÷ d = z_driven ÷ z_driver", where:"n speed in rpm, D driven pulley diameter, d driver pulley diameter (same unit), z number of teeth"},
        {t:"svg", alt:"Open belt drive with a small driver pulley on the left and a large driven pulley on the right, showing the tight side on top, the slack side below and the centre distance C", cap:"Figure 1: Open V-belt drive, with pulley diameters d and D and centre distance C", svg:`<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="m05-f1-arr" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 z" class="fi"/></marker></defs><path d="M146.2,90.5 L412.3,51 A80,80 0 1 1 412.3,209 L146.2,169.5 A40,40 0 0 1 146.2,90.5 z" class="ln"/><circle cx="140" cy="130" r="40" class="ln fla"/><circle cx="400" cy="130" r="80" class="ln flb"/><circle cx="140" cy="130" r="5" class="fi"/><circle cx="400" cy="130" r="5" class="fi"/><text x="140" y="154" class="txs txc">d = 140 mm</text><text x="400" y="154" class="txs txc">D = 280 mm</text><text x="140" y="112" class="txs txc">driver</text><text x="400" y="112" class="txs txc">driven</text><text x="140" y="30" class="tx txc">1440 rpm</text><text x="400" y="28" class="tx txc">720 rpm</text><text x="262" y="58" class="txs txc">tight side (pulls)</text><text x="262" y="210" class="txs txc">slack side</text><line x1="140" y1="175" x2="140" y2="250" class="ln1 lnm dash"/><line x1="400" y1="215" x2="400" y2="250" class="ln1 lnm dash"/><line x1="205" y1="248" x2="141" y2="248" class="ln1" marker-end="url(#m05-f1-arr)"/><line x1="335" y1="248" x2="399" y2="248" class="ln1" marker-end="url(#m05-f1-arr)"/><text x="270" y="253" class="txs txc">C = 500 mm</text></svg>`},
        {t:"h", x:"V-belts"},
        {t:"p", x:"A **V-belt** has a trapezoid cross-section. It wedges into the groove of the pulley, so friction on the two sides carries the load, and the belt can transmit far more than a flat belt under the same tension. Because the drive depends on friction, a small amount of slip (around 1 to 2 percent) is normal, so the driven speed is slightly below the calculated value. Narrow wedge sections (SPZ, SPA, SPB, SPC) carry more power than classical sections of the same width."},
        {t:"p", x:"Belt tension is the most important maintenance variable. Too slack, and the belt slips, squeals on start-up, glazes (becomes shiny and hard) and overheats. Too tight, and the load on the motor and driven bearings rises sharply and shortens bearing life. A workshop check is to press the belt at the middle of its free span: it should deflect about 1.5 mm for every 100 mm of span under moderate thumb pressure, but always use the belt maker's force and deflection values with a tension gauge where you have one. Replace a multi-belt set **all at once**, because new and stretched belts share load unevenly. Inspect pulley grooves for wear with a groove gauge; a belt that bottoms in a worn groove loses grip."},
        {t:"h", x:"Synchronous (timing) belts"},
        {t:"p", x:"A **synchronous belt** has moulded teeth that mesh with a toothed pulley, like a chain. There is no slip, so the speed ratio is exact and shafts stay in step, which is why they are used on printers, CNC axes and robots. They need no lubrication and run quietly but need correct tension and accurate shaft parallelism."},
        {t:"h", x:"Roller chains"},
        {t:"p", x:"A **roller chain** is a series of pins, bushes and rollers that engage sprocket teeth. **Pitch** is the distance between adjacent pin centres: for example, ISO 08B chain has a pitch of 12.7 mm. Chain drives do not slip, carry high loads and tolerate heat, but need lubrication and wear by gradual elongation as pins and bushes wear. Measure over a number of links; replace the chain when it has stretched about 2 to 3 percent (follow the maker's limit) and replace sprockets with it, because a new chain on worn sprockets wears out fast."},
        {t:"formula", x:"L = 2C + (z1 + z2) ÷ 2 + ((z2 − z1) ÷ 2π)² ÷ C", where:"L chain length in pitches (links), C centre distance in pitches, z1 and z2 sprocket tooth counts"},
        {t:"formula", x:"L = 2C + π(D + d) ÷ 2 + (D − d)² ÷ (4C)", where:"L approximate belt pitch length, C centre distance, D and d pulley pitch diameters, all in the same unit"},
        {t:"worked", title:"Worked example: belt drive speed, length and belt speed", problem:"A 1440 rpm motor has a 140 mm V-belt pulley driving a 280 mm pulley on a fan. Centre distance is 500 mm. Find the fan speed, the belt length needed and the belt speed. Ignore slip.", steps:[
          "Speed ratio i = D ÷ d = 280 ÷ 140 = 2.",
          "Driven speed = 1440 ÷ 2 = 720 rpm.",
          "Belt length L = 2 × 500 + π × (280 + 140) ÷ 2 + (280 − 140)² ÷ (4 × 500) = 1000 + 659.7 + 9.8 = 1669.5 mm.",
          "Belt speed v = π × d × n ÷ 60 = π × 0.140 × 1440 ÷ 60 = 10.56 m/s."
        ], answer:"Fan speed 720 rpm; choose the nearest standard belt length to 1670 mm; belt speed about 10.6 m/s."},
        {t:"p", x:"For chain, a drive with 19 and 57 teeth at a centre distance of 40 pitches needs L = 2 × 40 + 38 + (38 ÷ 2π)² ÷ 40 = 118.9 links. Round up to the next **even** number, 120 links, so no offset (cranked) link is needed; offset links are weaker."},
        {t:"warn", x:"Never adjust belt or chain tension, or lubricate a running chain, with the guard removed. Isolate and lock off the drive first (Module 2). Fit the guard before restarting; a belt or chain drive can draw in clothing or fingers instantly."},
        {t:"key", items:[
          "Speed ratio = driver speed ÷ driven speed = D ÷ d = z driven ÷ z driver.",
          "V-belts rely on friction and slip slightly; synchronous belts and chains do not slip.",
          "Correct tension is critical: slack belts slip and glaze, tight belts destroy bearings.",
          "Replace belt sets together, and chains with their sprockets; round chain length up to an even number of links."
        ]}
      ]
    },
    {
      id: "m05-l3",
      title: "Gears and gearboxes",
      minutes: 10,
      body: [
        {t:"p", x:"A **gear** is a toothed wheel that meshes with another to transmit rotation positively, with no slip. Gears are compact and efficient and carry large torque, so they are found in almost every geared motor, gearbox and machine tool. The smaller gear in a pair is called the **pinion**."},
        {t:"table", head:["Gear type","Shaft layout","Features","Typical use"], rows:[
          ["Spur","Parallel","Straight teeth; simple, efficient; noisy at speed; no axial thrust","Gear trains, hoists, machine tools"],
          ["Helical","Parallel","Angled teeth engage gradually; quieter and stronger; produces axial thrust","Gearboxes, high-speed drives"],
          ["Bevel","Intersecting, usually 90°","Conical gears change drive direction","Differentials, right-angle drives"],
          ["Worm and wheel","Crossed, 90°, non-intersecting","Very high single-stage ratio (about 5:1 to 100:1); smooth; low efficiency","Conveyors, lifts, gates"],
          ["Planetary","Coaxial input and output","Sun, planets, ring and carrier share load; compact and high torque","Servo gearheads, robot joints"]
        ], cap:"Common gear types"},
        {t:"p", x:"For two gears to mesh they must have the same **module** m, the tooth size in millimetres, defined as pitch diameter divided by number of teeth (m = d ÷ z). Centre distance between two meshing spur gears is a = m × (z1 + z2) ÷ 2. The **gear ratio** of a pair is the number of teeth on the driven gear divided by the number on the driver. Multiply the ratios of each stage to find the overall ratio of a gear train."},
        {t:"formula", x:"i = z_driven ÷ z_driver (per stage);  i_total = i1 × i2 × …", where:"output speed = input speed ÷ i_total; output torque = input torque × i_total × η_total"},
        {t:"svg", alt:"Two-stage spur gear train in side view with an input shaft, a countershaft carrying two gears and an output shaft, with tooth counts marked", cap:"Figure 2: Two-stage reduction gear train, 18:54 then 20:70, overall ratio 10.5:1", svg:`<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="m05-f2-arr" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 z" class="fi"/></marker></defs><line x1="30" y1="165" x2="140" y2="165" class="ln"/><line x1="70" y1="100" x2="200" y2="100" class="ln"/><line x1="130" y1="181" x2="330" y2="181" class="ln"/><rect x="92" y="148.6" width="12" height="32.4" class="ln fla"/><rect x="92" y="51.4" width="12" height="97.2" class="ln flb"/><rect x="150" y="82" width="12" height="36" class="ln fla"/><rect x="150" y="118" width="12" height="126" class="ln flb"/><text x="88" y="168" class="txs txe">z1 = 18</text><text x="88" y="72" class="txs txe">z2 = 54</text><text x="170" y="94" class="txs">z3 = 20</text><text x="170" y="236" class="txs">z4 = 70</text><text x="20" y="195" class="tx">Input 1440 rpm</text><line x1="20" y1="165" x2="30" y2="165" class="ln1"/><text x="250" y="150" class="tx">Output</text><text x="250" y="168" class="tx">137 rpm</text><text x="340" y="70" class="txb tx">Stage 1</text><text x="340" y="88" class="txs">54 ÷ 18 = 3</text><text x="340" y="114" class="txb tx">Stage 2</text><text x="340" y="132" class="txs">70 ÷ 20 = 3.5</text><text x="340" y="196" class="txb tx">Overall</text><text x="340" y="214" class="txs">3 × 3.5 = 10.5 : 1</text><text x="205" y="104" class="txs txm">shaft II</text><text x="333" y="185" class="txs txm">shaft III</text><text x="40" y="158" class="txs txm">shaft I</text></svg>`},
        {t:"worked", title:"Worked example: two-stage reduction", problem:"A 4 kW motor turns at 1440 rpm and drives the train in Figure 2. Each stage has an efficiency of 97 %. Find the overall ratio, the output speed and the output torque.", steps:[
          "Stage ratios: i1 = 54 ÷ 18 = 3 and i2 = 70 ÷ 20 = 3.5, so i_total = 3 × 3.5 = 10.5.",
          "Output speed = 1440 ÷ 10.5 = 137.1 rpm.",
          "Input torque = 4000 × 60 ÷ (2π × 1440) = 26.5 N·m.",
          "Overall efficiency = 0.97 × 0.97 = 0.941.",
          "Output torque = 26.5 × 10.5 × 0.941 = 262 N·m. Check: output power = 262 × 2π × 137.1 ÷ 60 = 3.76 kW, which is 94.1 % of 4 kW."
        ], answer:"Ratio 10.5:1, output 137 rpm and about 262 N·m, with 0.24 kW lost as heat."},
        {t:"h", x:"Worm and planetary gearboxes"},
        {t:"p", x:"In a **worm drive** a screw-like worm turns a toothed wheel. The sliding contact gives smooth, quiet action but high friction, so large ratios mean low efficiency and noticeable heat. At high ratios a worm drive may not be back-driven by the load (self-locking), but vibration can still let a load creep: never rely on it as the only holding brake on a hoist or lift."},
        {t:"p", x:"A **planetary gearset** has a central sun gear, several planet gears carried on a rotating carrier, and an outer ring gear with internal teeth. With the ring fixed, the sun as input and the carrier as output, the ratio is 1 + z_ring ÷ z_sun. A sun of 20 teeth and a ring of 60 teeth give 1 + 60 ÷ 20 = 4:1. The load is shared by several planets, so these units are compact for their torque rating and have input and output on the same axis."},
        {t:"p", x:"**Backlash** is the small clearance between meshing teeth. A little is essential for an oil film and for thermal growth, but too much causes knocking on reversal and positioning error in robots and servo axes. Typical gear faults include pitting (small craters from surface fatigue), scuffing from lost lubricant, tooth breakage from shock load and howling noise from bearing wear or misalignment."},
        {t:"key", items:[
          "Gear ratio per stage = teeth on driven gear ÷ teeth on driver; multiply stages for the overall ratio.",
          "A reduction cuts speed and raises torque by the ratio, less efficiency losses.",
          "Spur and helical gears suit parallel shafts, bevel gears 90° drives, worm gears high ratios, planetary gears compact coaxial drives.",
          "Do not rely on worm self-locking as a safety brake."
        ]}
      ]
    },
    {
      id: "m05-l4",
      title: "Shafts, couplings, alignment, clutches and brakes",
      minutes: 10,
      body: [
        {t:"p", x:"A **shaft** carries rotating parts and transmits torque. It is loaded in **torsion** (twisting) by the torque and in **bending** by the weight and side pull of belts, chains and gears. Shafts almost always fail by **fatigue**: repeated stress cycles start a crack at a stress concentration such as a sharp shoulder, keyway corner or worn bearing seat, and the crack grows until the shaft snaps. Torque is transferred from shaft to hub by a key, splines or a taper-lock bush (see Module 4)."},
        {t:"h", x:"Couplings"},
        {t:"p", x:"A **coupling** joins two shafts end to end so that torque passes from motor to gearbox or pump. **Rigid couplings** (sleeve, flange) lock the shafts together and need near-perfect alignment. **Flexible couplings** tolerate small misalignment, absorb shock and damp vibration. Common flexible types are the jaw coupling with an elastomer spider, the pin-and-bush coupling, the grid coupling and the metallic disc coupling, which suits servo drives because it has no backlash."},
        {t:"p", x:"There are three kinds of misalignment, usually present together: **parallel (offset)**, where the centrelines are parallel but displaced; **angular**, where they meet at an angle; and **axial**, where the gap between shaft ends is wrong. Misalignment forces the coupling to flex twice per revolution. The result is vibration at twice running speed, hot or cracked elastomer elements, leaking seals, and early bearing failure in both machines."},
        {t:"svg", alt:"Two diagrams of shaft pairs: one with parallel offset where the centrelines are displaced, and one with angular misalignment where the right shaft is tilted", cap:"Figure 3: Parallel (offset) and angular misalignment between a motor shaft and a driven shaft", svg:`<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="m05-f3-arr" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 z" class="fi"/></marker></defs><text x="20" y="22" class="txb tx">A. Parallel (offset)</text><rect x="30" y="45" width="130" height="30" class="ln fla"/><rect x="200" y="65" width="130" height="30" class="ln flb"/><rect x="160" y="50" width="40" height="40" class="ln1 dash"/><line x1="20" y1="60" x2="340" y2="60" class="ln1 lna dash"/><line x1="20" y1="80" x2="340" y2="80" class="ln1 lnb dash"/><line x1="350" y1="60" x2="350" y2="68" class="ln1" marker-end="url(#m05-f3-arr)"/><line x1="350" y1="80" x2="350" y2="72" class="ln1" marker-end="url(#m05-f3-arr)"/><text x="360" y="74" class="txs">offset</text><text x="70" y="115" class="txs txm">motor shaft</text><text x="235" y="115" class="txs txm">driven shaft</text><text x="20" y="150" class="txb tx">B. Angular</text><rect x="30" y="170" width="130" height="30" class="ln fla"/><polygon points="200,170 330,152 330,182 200,200" class="ln flb"/><line x1="20" y1="185" x2="170" y2="185" class="ln1 lna dash"/><line x1="170" y1="185" x2="340" y2="161" class="ln1 lnb dash"/><text x="70" y="230" class="txs txm">motor shaft</text><text x="235" y="230" class="txs txm">driven shaft tilted</text><text x="400" y="190" class="txs">gap wider on one side</text></svg>`},
        {t:"h", x:"Checking and correcting alignment"},
        {t:"steps", title:"Procedure: aligning a motor to a driven machine", items:[
          "Isolate and lock off the motor (Module 2) and guard against the machine being turned by the load.",
          "Clean the feet and baseplate. Check for **soft foot** with a feeler gauge at each foot: a gap of more than about 0.05 mm under a loosened foot means the frame is twisted when bolted, and must be shimmed first.",
          "Mount two dial indicators (or a laser alignment tool) on the shafts or coupling halves and rotate both shafts together through 360°.",
          "Read the offset and angularity at the coupling, and calculate shim thickness and sideways shift for each motor foot.",
          "Add or remove shims, nudge the motor sideways, retighten the feet and read again. Repeat until within the coupling maker's tolerance.",
          "Refit the coupling guard, record the final readings, then test run and check temperature and vibration."
        ]},
        {t:"p", x:"Tolerances tighten as speed rises. A common rule of thumb is an offset below roughly 0.05 mm at 1500 rpm, and tighter at higher speeds, but always use the coupling maker's figures. A **laser alignment** tool is quicker and more accurate than dial indicators and displays the shim values directly. Remember **thermal growth**: a hot machine casing rises as it expands, so some machines are deliberately aligned slightly low when cold."},
        {t:"h", x:"Clutches and brakes"},
        {t:"p", x:"A **clutch** connects or disconnects drive while the machine is running. Friction clutches (dry plate or wet multi-plate) can slip, so they also act as torque limiters and let a heavy load be started smoothly. Dog or jaw clutches lock positively and are engaged at rest. Electromagnetic clutches engage when a coil is energised, and an overrunning (freewheel) clutch drives in one direction only. A **brake** slows or holds a load. On machines the standard type is the spring-applied, electrically released brake: springs clamp the brake when power is off, and a coil releases it when power is on, so the brake is **fail-safe** and holds if power fails."},
        {t:"warn", x:"Brake pads or discs contaminated with oil or grease will not hold. Check the air gap and lining wear on brakes by the maker's schedule. Before work on any lifting or inclined drive, lower the load, support it and remove stored energy: a released brake can let a load fall."},
        {t:"key", items:[
          "Shafts carry torsion and bending, and fail by fatigue at sharp corners and keyways.",
          "Flexible couplings tolerate small misalignment; rigid couplings need near-perfect alignment.",
          "Misalignment causes vibration, hot couplings, leaking seals and early bearing failure; correct soft foot first, then align with dial indicators or laser.",
          "Spring-applied, electrically released brakes are fail-safe; clutches also act as torque limiters."
        ]}
      ]
    },
    {
      id: "m05-l5",
      title: "Lubricants: viscosity, oils and greases",
      minutes: 9,
      body: [
        {t:"p", x:"A **lubricant** is a substance placed between moving surfaces to keep them apart. Without it, metal rubs on metal, wears and welds. A lubricant also carries heat away, protects against rust and, in oil systems, flushes out dirt and wear particles. A lubricant that is correct in type, quantity and condition is the cheapest maintenance task on any machine."},
        {t:"p", x:"Lubrication works in three regimes. In **boundary lubrication**, at slow speed or start-up, the surfaces touch at high points and the film is only molecules thick. In **mixed** lubrication part of the load is carried by the film. In **full-film** (hydrodynamic) lubrication the moving surfaces are completely separated by a pressurised oil wedge and wear is almost zero. Most wear happens during starts and stops, which is why dry starts and low oil levels are so damaging."},
        {t:"h", x:"Viscosity and ISO 3448"},
        {t:"p", x:"**Viscosity** is a fluid's resistance to flow: honey has a high viscosity, water a low one. For lubricants it is expressed as **kinematic viscosity** in mm²/s (also written centistokes, cSt) and is measured at a stated temperature, because oil thins quickly when it heats up. **ISO 3448** defines a series of **viscosity grades** (ISO VG). The number is the mid-point kinematic viscosity in mm²/s at 40 °C, with a permitted tolerance of ±10 percent. An ISO VG 68 oil therefore has a viscosity of about 68 mm²/s at 40 °C. The standard grades run VG 2, 3, 5, 7, 10, 15, 22, 32, 46, 68, 100, 150, 220, 320, 460, 680, 1000 and 1500."},
        {t:"table", head:["ISO VG","Typical application"], rows:[
          ["22 to 46","Light-duty hydraulics, fast spindles, light machinery (hydraulic fluids: see Module 13)"],
          ["68 to 100","General bearings, slides, light-duty gearboxes"],
          ["150 to 320","Industrial enclosed gearboxes, depending on load and temperature"],
          ["460 and above","Heavily loaded or slow-speed gears, open gears"]
        ], cap:"Typical ISO VG ranges; the equipment maker's chart always overrides"},
        {t:"p", x:"A lubricant that is too thin lets the film break and the surfaces touch. One that is too thick causes churning, heat and power loss, and may not flow to the bearing on a cold start. The **viscosity index** (VI) measures how much the viscosity changes with temperature; a high VI oil changes less. Oils are **mineral** (refined from crude oil) or **synthetic** (for example PAO, polyalphaolefin), which resist heat and cold better. Additives add anti-wear (AW), extreme-pressure (EP, for heavily loaded gears), anti-rust, anti-foam and anti-oxidant properties."},
        {t:"h", x:"Grease"},
        {t:"p", x:"**Grease** is lubricating oil held in a **thickener**, such as lithium or lithium-complex soap, like water in a sponge. Under load the oil bleeds out to lubricate; at rest it stays put. The thickener also acts as a seal against dirt. Consistency is rated by the **NLGI number**, from 000 (semi-fluid) to 6 (very hard). NLGI 2, similar to peanut butter, is the most common grade for rolling bearings. NLGI 0 or 1 is used in centralised systems and cold climates, and 00 in some gearboxes."},
        {t:"table", head:["","Oil","Grease"], rows:[
          ["Cooling","Carries heat away","Poor; stays in place"],
          ["Staying power","Needs sealed housing or a supply system","Stays in bearing, simple housing"],
          ["Contamination","Can be filtered or drained","Seals out dirt but traps it if contaminated"],
          ["Typical use","Gearboxes, high speeds, high temperature","Rolling bearings, slow or intermittent duty"],
          ["Effort","Level checks, changes, filters","Regrease at intervals"]
        ], cap:"Oil compared with grease"},
        {t:"warn", x:"Do not mix greases without checking compatibility. Different thickeners can react, soften or run out of the bearing. Do not mix oils of different type either. Keep a labelled list of what is in each machine."},
        {t:"ghana", x:"High ambient temperature, dust and humidity are all hard on lubricants. A common rule of thumb is that oil life roughly halves for every 10 °C rise in sump temperature, and dust and moisture enter through open breathers and unsealed containers. Keep lubricant drums closed and indoors where possible, and use sealed breathers on gearboxes in dusty areas."},
        {t:"key", items:[
          "Lubricants separate surfaces, remove heat and protect against rust; most wear occurs at start-up.",
          "ISO VG number = viscosity in mm²/s at 40 °C (ISO 3448, ±10 %).",
          "Too thin means film failure; too thick means heat and power loss.",
          "Grease = oil + thickener, graded by NLGI number (2 is the most common).",
          "Never mix lubricants without confirming compatibility."
        ]}
      ]
    },
    {
      id: "m05-l6",
      title: "Lubrication practice, contamination and condition signs",
      minutes: 9,
      body: [
        {t:"p", x:"Knowing which lubricant to use is half the job. The other half is delivering the correct amount, at the correct interval, clean. Most bearing failures are traced to lubricant that was wrong, missing, excessive or dirty."},
        {t:"h", x:"Lubrication methods"},
        {t:"ul", items:[
          "**Grease gun and nipple:** the most common method for bearings. Wipe the nipple clean before and after, and add the correct quantity.",
          "**Oil bath or splash:** gears and bearings dip into a sump. Fill to the sight-glass mark; overfilling causes churning and overheating, underfilling starves the bearings.",
          "**Drip, wick or oil-cup feed:** a metered supply for slides and open bearings.",
          "**Ring oiler:** a loose ring rides on the shaft, picks up oil and carries it to the bearing; used on large plain bearings.",
          "**Forced (circulating) lubrication:** a pump supplies filtered, cooled oil under pressure to large or high-speed machines.",
          "**Centralised (automatic) systems:** a pump distributes small metered shots of grease or oil to many points, which keeps intervals regular."
        ]},
        {t:"p", x:"**Over-greasing** is as damaging as under-greasing. Too much grease causes churning, high temperature, softening of the grease and blown seals. A widely used guide for the grease quantity needed to re-lubricate a rolling bearing is G = 0.005 × D × B grams, where D is the bearing outside diameter and B the bearing width, both in millimetres. A 6309 bearing (outside diameter 100 mm, width 25 mm) needs about 0.005 × 100 × 25 = 12.5 g. Replenish at the interval specified by the maker; the interval shortens with speed, size, temperature and moisture."},
        {t:"formula", x:"G = 0.005 × D × B", where:"G re-lubrication grease quantity in grams, D bearing outside diameter in mm, B bearing width in mm"},
        {t:"steps", title:"Procedure: greasing a bearing safely", items:[
          "Identify the grease named on the lubrication schedule and confirm the gun is filled with that grease only.",
          "Wipe dirt from the nipple and the relief or drain plug area.",
          "If the machine is isolated and stationary, add the calculated amount slowly. If the maker permits greasing while running, only do so where the nipple is reachable without removing a guard.",
          "Add grease slowly. Stop when the correct quantity has been pumped or fresh grease just appears at the relief point.",
          "Wipe off excess, refit any plug, and record date, quantity and operator.",
          "Check the bearing temperature and noise after the first hour of running; a short rise after greasing is normal and should settle."
        ]},
        {t:"h", x:"Intervals"},
        {t:"p", x:"Intervals are set by the equipment maker and adjusted for conditions. Gearbox oil is usually changed after periods measured in thousands of operating hours, and sooner in hot, dusty or wet environments. The best guide is **oil analysis**: a sample is sent to a laboratory that reports viscosity, water content, particle count and wear metals. Condition-based changes avoid both wasteful early changes and damaging late ones."},
        {t:"h", x:"Contamination"},
        {t:"p", x:"**Contamination** is anything in the lubricant that should not be there: dust and dirt, water, wear particles and the wrong lubricant. Hard particles pass between rolling elements and scratch races, so a small amount of dirt greatly shortens bearing life. Water breaks down the oil film, corrodes steel and promotes oxidation. To control contamination: use clean, closed, colour-coded and labelled containers and funnels, fit desiccant breathers on gearboxes, keep seals in good order, filter oil before filling, and never leave a fill port open."},
        {t:"table", head:["Sign","Likely meaning"], rows:[
          ["Milky or cloudy oil","Water contamination; find the ingress, then change the oil"],
          ["Foam on the oil surface","Air entering, overfilling, wrong oil or a worn-out anti-foam additive"],
          ["Very dark oil with a burnt smell","Overheating and oxidation; check load, level and cooling"],
          ["Metallic glitter or fine grey paste","Wear particles from gears or bearings; investigate the source"],
          ["Hard, crusted or dry grease","Old or overheated grease; the oil has bled out and the bearing is at risk"],
          ["Bearing running hot, noisy or vibrating","Under-lubrication, over-greasing, contamination or misalignment"]
        ], cap:"Reading the condition of lubricant and bearings"},
        {t:"note", x:"Dark oil on its own is not always a fault. Some detergent oils darken as they hold soot or dirt in suspension. Judge by smell, viscosity, water and wear metals as well as colour."},
        {t:"warn", x:"Hot oil and grease cause burns and slips. Let gearboxes cool before draining, and clean up spills immediately. Collect used oil and rags in marked containers for proper disposal; never pour oil on the ground or into drains."},
        {t:"key", items:[
          "Methods range from the grease gun to oil baths, circulating systems and centralised lubricators; use the one the maker specifies.",
          "Over-greasing causes heat and seal damage; use G = 0.005 × D × B grams as a re-lubrication guide.",
          "Intervals depend on speed, temperature and environment; oil analysis gives condition-based changes.",
          "Control contamination with clean tools, sealed containers and desiccant breathers.",
          "Learn the visual signs: milky means water, dark with burnt smell means heat, glitter means wear."
        ]}
      ]
    }
  ],
  quiz: [
    {id:"m05-q1", q:"A shaft transmits 20 N·m of torque at 1500 rpm. What power does it carry?", opts:["0.30 kW","1.5 kW","3.14 kW","30 kW"], a:2, why:"P = T × 2π × n ÷ 60 = 20 × 2π × 1500 ÷ 60 = 3142 W, or 3.14 kW. Forgetting the 2π ÷ 60 conversion from rpm to rad/s gives the other values."},
    {id:"m05-q2", q:"A 100 mm driver pulley turning at 1440 rpm drives a 250 mm pulley through a V-belt. Ignoring slip, what is the driven speed?", opts:["3600 rpm","576 rpm","1440 rpm","720 rpm"], a:1, why:"Speed is inversely proportional to diameter: 1440 × 100 ÷ 250 = 576 rpm. The larger pulley turns slower."},
    {id:"m05-q3", q:"A gearbox has a ratio of 5:1 and an efficiency of 95 %. Input torque is 10 N·m. What is the output torque?", opts:["2 N·m","9.5 N·m","50 N·m","47.5 N·m"], a:3, why:"Output torque = input torque × ratio × efficiency = 10 × 5 × 0.95 = 47.5 N·m. The efficiency removes some torque as losses."},
    {id:"m05-q4", q:"What is the main advantage of a synchronous (timing) belt over a V-belt?", opts:["It tolerates a slack setting without any loss of drive","It has no slip, so the speed ratio is exact","It needs regular oiling to keep the teeth quiet","It is always cheaper for high-power drives"], a:1, why:"Moulded teeth mesh with the pulley, so the belt cannot slip and shaft positions remain in step. This makes it suitable for positioning axes. It still needs correct tension."},
    {id:"m05-q5", q:"A V-belt squeals as the motor starts, and the belts look shiny and hard. What is the most probable cause?", opts:["Belt slipping from low tension or worn grooves","Excessive grease on the pulley surface","The motor is far too small for the duty","Belt too tight, shortening bearing life"], a:0, why:"Squeal on starting and glazed belts show slip, caused by low tension or worn pulley grooves. Slip heats the belt and hardens the rubber."},
    {id:"m05-q6", q:"What does the number in ISO VG 220 mean?", opts:["Operating temperature of 220 °C","Kinematic viscosity of about 220 mm²/s at 40 °C","Pressure rating of 220 bar","Density of 220 kg/m³"], a:1, why:"ISO 3448 grades give the mid-point kinematic viscosity at 40 °C in mm²/s, with a tolerance of ±10 %."},
    {id:"m05-q7", q:"A chain drive uses a 19-tooth and a 57-tooth sprocket on a centre distance of 40 pitches. How many links should the chain have?", opts:["120","114","119","80"], a:0, why:"L = 2 × 40 + (19 + 57) ÷ 2 + (38 ÷ 2π)² ÷ 40 = 80 + 38 + 0.91 = 118.9 links. Round up to the next even number, 120, to avoid a weak offset link."},
    {id:"m05-q8", q:"A jaw coupling's rubber spider is found cracked and hot on a pump that has been realigned many times. What should be checked first?", opts:["The pump is running too slowly","Misalignment, including soft foot at the motor feet","Whether the oil is too thin","The colour of the motor"], a:1, why:"Repeated elastomer failure with heat is typical of misalignment, which flexes the spider twice per revolution. Soft foot makes alignment impossible to hold."},
    {id:"m05-q9", q:"A 20-tooth sun gear drives a planetary set with a fixed 60-tooth ring, and the output is taken from the carrier. What is the ratio?", opts:["3:1","4:1","1:3","0.25:1"], a:1, why:"Ratio = 1 + z_ring ÷ z_sun = 1 + 60 ÷ 20 = 4, a 4:1 reduction. A plain 60 ÷ 20 = 3 forgets the carrier motion."},
    {id:"m05-q10", q:"Why should a worm gear not be relied on alone to hold a suspended load?", opts:["Worm gears have no friction at all in the mesh","Self-locking is not guaranteed; vibration can make it creep","Worm wheels are too weak to carry any load","The load would always fall at once if power is lost"], a:1, why:"Self-locking depends on the lead angle and friction, which change with wear, lubricant and vibration. Lifting duty needs a proper holding brake."},
    {id:"m05-q11", q:"What is the correct action when a gearbox oil sample is milky?", opts:["Top it up with new oil","Raise the operating speed","Treat it as normal ageing","Find and fix the water entry, then change the oil"], a:3, why:"A milky colour means water is emulsified in the oil, which destroys the lubricating film and causes corrosion. Water source must be found or the new oil will fail too."},
    {id:"m05-q12", q:"What is the problem with over-greasing a rolling bearing?", opts:["Churning heat, grease breakdown and seal damage","It improves cooling by carrying heat away","It reduces friction without any limit as more is added","It prevents every kind of contamination"], a:0, why:"Excess grease is churned by the rolling elements, raising temperature and softening the grease. It also pushes seals out."},
    {id:"m05-q13", q:"An 80 mm outside diameter bearing, 18 mm wide, is re-greased using G = 0.005 × D × B. What quantity is needed?", opts:["72 g","14.4 g","0.72 g","7.2 g"], a:3, why:"G = 0.005 × 80 × 18 = 7.2 g. Check the unit of the grease gun shot to count how many strokes this is."},
    {id:"m05-q14", q:"A motor delivers 5.5 kW at 960 rpm. Which is the closest shaft torque?", opts:["5.7 N·m","55 N·m","547 N·m","0.9 N·m"], a:1, why:"T = P × 60 ÷ (2π × n) = 5500 × 60 ÷ (2π × 960) = 54.7 N·m. Using kW instead of W gives the wrong power of ten."},
    {id:"m05-q15", q:"A spring-applied, electrically released brake on a conveyor motor is fitted. What happens when the supply fails?", opts:["The brake releases and the load runs free","The brake stays as it was, whatever the springs do","The brake applies and holds the load","The motor over-speeds"], a:2, why:"Springs clamp the brake and the coil must be energised to release it, so loss of power applies the brake. This fail-safe action is why the design is standard."}
  ],
  cards: [
    {f:"Formula for mechanical power from torque and speed?", b:"P = T × ω = T × 2π × n ÷ 60, with P in watts, T in N·m and n in rpm."},
    {f:"Convert rpm to rad/s.", b:"ω = 2π × n ÷ 60. For example, 1500 rpm = 157.1 rad/s."},
    {f:"What happens to torque when a gearbox reduces speed?", b:"Torque rises by the ratio (less losses), and power stays about the same. 10:1 reduction gives about 10 times the torque."},
    {f:"Speed ratio of a belt or chain drive?", b:"i = driver speed ÷ driven speed = D ÷ d = z_driven ÷ z_driver. The larger wheel turns slower."},
    {f:"Why does a V-belt slip slightly but a timing belt does not?", b:"A V-belt drives by friction in the groove; a timing belt drives by tooth engagement."},
    {f:"How is a roller chain's pitch defined?", b:"The distance between adjacent pin centres, for example 12.7 mm for ISO 08B chain."},
    {f:"When is a roller chain worn out?", b:"When it has elongated about 2 to 3 percent (check the maker's limit). Replace the sprockets with the chain."},
    {f:"Why round a calculated chain length up to an even number?", b:"An even link count avoids a weaker offset (cranked) link."},
    {f:"Name the three types of shaft misalignment.", b:"Parallel (offset), angular and axial."},
    {f:"What is soft foot and why check it first?", b:"A machine foot that does not sit flat, so the frame twists when bolted. It makes alignment unreliable, so it is corrected with shims before aligning."},
    {f:"What does ISO VG 68 mean?", b:"An oil with a mid-point kinematic viscosity of 68 mm²/s at 40 °C (ISO 3448, ±10 %)."},
    {f:"What does the NLGI number measure?", b:"Grease consistency (stiffness) from 000 to 6. NLGI 2 is the most common for bearings."},
    {f:"Planetary gear ratio with fixed ring, sun input, carrier output?", b:"i = 1 + z_ring ÷ z_sun."},
    {f:"Grease quantity guide for re-lubricating a bearing?", b:"G = 0.005 × D × B grams, with outside diameter D and width B in mm."},
    {f:"What does milky gearbox oil mean?", b:"Water contamination. Find the entry point, then drain and replace the oil."}
  ],
  terms: [
    {t:"Torque", d:"The twisting effort on a shaft, a force multiplied by its distance from the axis, measured in newton-metres (N·m)."},
    {t:"Angular speed", d:"Rotation rate expressed in radians per second; ω = 2πn ÷ 60 when n is in rpm."},
    {t:"Efficiency", d:"The ratio of output power to input power; the missing power is lost as heat."},
    {t:"Service factor", d:"A multiplier on required power that accounts for shock, starting and duty when selecting a drive."},
    {t:"Pitch", d:"The distance between corresponding points of adjacent chain links or teeth."},
    {t:"Module", d:"Gear tooth size in millimetres, equal to pitch diameter divided by number of teeth; meshing gears must share it."},
    {t:"Backlash", d:"The small clearance between meshing gear teeth, needed for lubrication but harmful to positioning accuracy when excessive."},
    {t:"Soft foot", d:"A machine foot that does not seat flat on the baseplate, distorting the frame when bolted down."},
    {t:"Viscosity", d:"A fluid's resistance to flow; for lubricants measured as kinematic viscosity in mm²/s at 40 °C."},
    {t:"NLGI grade", d:"A number from 000 to 6 that rates the consistency (hardness) of a grease."},
    {t:"Contamination", d:"Dirt, water, wear particles or wrong lubricant in an oil or grease that shortens machine life."}
  ],
  formulas: [
    {n:"Power from torque and speed", f:"P = T × 2π × n ÷ 60", v:"P in W, T in N·m, n in rpm"},
    {n:"Speed ratio (belt, chain, gear)", f:"i = n1 ÷ n2 = D ÷ d = z2 ÷ z1", v:"n speeds, D and d diameters, z tooth counts; 1 driver, 2 driven"},
    {n:"Torque through a reduction", f:"T_out = T_in × i × η", v:"i total ratio, η overall efficiency as a fraction"},
    {n:"Efficiency", f:"η = P_out ÷ P_in", v:"Fractions; overall η is the product of stage efficiencies"},
    {n:"Open belt length", f:"L = 2C + π(D + d) ÷ 2 + (D − d)² ÷ (4C)", v:"C centre distance, D and d pulley diameters, same unit"},
    {n:"Chain length in links", f:"L = 2C + (z1 + z2) ÷ 2 + ((z2 − z1) ÷ 2π)² ÷ C", v:"C in pitches; round L up to an even number"},
    {n:"Belt speed", f:"v = π × d × n ÷ 60", v:"v in m/s, d pulley diameter in m, n in rpm"},
    {n:"Planetary ratio, ring fixed", f:"i = 1 + z_ring ÷ z_sun", v:"Sun input, carrier output"},
    {n:"Re-grease quantity", f:"G = 0.005 × D × B", v:"G in grams, D outside diameter and B width in mm"}
  ]
});
