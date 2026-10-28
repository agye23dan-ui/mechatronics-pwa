window.MECH.register({
  id: "m02",
  n: 2,
  title: "Workshop Safety, Lockout/Tagout and Electrical Safety",
  short: "Safety and LOTO",
  group: "Foundations",
  blurb: "Assess risk, isolate and prove dead, lock out stored energy, and work safely around guards, emergency stops, heights, confined spaces and fire.",
  outcomes: [
    "Explain hazard, risk and the hierarchy of controls and apply them to a workshop task",
    "Select suitable PPE and recognise safety-sign colours and shapes",
    "Describe how electric current harms the body and how earthing and RCDs reduce the risk",
    "Carry out safe isolation, prove dead with a proved tester and apply a personal lock and tag",
    "Identify stored energy in electrical, hydraulic, pneumatic, mechanical and gravity systems and make it safe",
    "Explain machine guarding, emergency stops, IEC 60204-1 stop categories and ISO 13849-1 categories and performance levels at overview level",
    "Apply safe practice for manual handling, working at height, confined spaces and fire",
    "Report accidents and near misses and give first response to an electric shock casualty"
  ],
  lessons: [
    {
      id: "m02-l1",
      title: "Hazard, risk and the hierarchy of controls",
      minutes: 10,
      body: [
        {t:"p", x:"Every workshop and plant floor contains things that can hurt people. A **hazard** is anything with the potential to cause harm: a rotating shaft, a 400 V busbar, a hot surface, a spilt litre of oil. **Risk** is how likely that harm is to happen, combined with how bad it would be. A live 400 V busbar behind a locked panel is a hazard with low risk; the same busbar with the door open and a technician reaching in is a hazard with high risk. Safety work is the business of reducing risk, and the international management standard for it is ISO 45001 (occupational health and safety). Its central idea is simple: the employer must find hazards and control them, and workers must follow the controls, report problems and be consulted."},
        {t:"h", x:"Risk assessment"},
        {t:"p", x:"A risk assessment has four steps: list the hazards in the task, decide who could be harmed and how, rate the risk and decide the controls, then record the result and review it when the task changes. A common method rates **likelihood** (1 = very unlikely, 5 = almost certain) and **severity** (1 = minor, 5 = fatal or permanent) and multiplies them."},
        {t:"formula", x:"Risk rating = likelihood × severity", where:"Both scored 1 to 5, so the rating runs from 1 to 25. The action bands (for example low 1 to 5, medium 6 to 12, high 15 to 25) are set by your employer's matrix"},
        {t:"worked", title:"Worked example: guarding a drill-press belt drive", problem:"A pedestal drill has an open V-belt pulley at hand height. Operators have brushed against it. Likelihood is scored 4 and severity 4 (a trapped hand means a crush or amputation injury). What is the rating, and what is it after a fixed guard is fitted that can only be removed with a tool?", steps:[
          "Before: 4 × 4 = 16, which is in the high band, so the drill must not be used.",
          "A fixed guard makes contact very unlikely, so likelihood falls to 1. The severity stays 4, because if someone did get inside the guard the injury would be the same.",
          "After: 1 × 4 = 4, which is in the low band."
        ], answer:"The rating falls from 16 to 4. A control normally lowers likelihood; only removing the hazard completely lowers severity."},
        {t:"h", x:"The hierarchy of controls"},
        {t:"p", x:"Not all controls are equally reliable. ISO 45001 requires them to be considered in a fixed order, shown in Figure 1: first remove the hazard, and only fall back on protecting the person when nothing higher is practical. Personal protective equipment sits at the bottom because it depends on the wearer, fits imperfectly and does nothing to the hazard itself."},
        {t:"svg", svg:`<svg viewBox="0 0 600 316" xmlns="http://www.w3.org/2000/svg" role="img"><text x="20" y="20" class="txs txm">MOST EFFECTIVE</text><rect x="20" y="30" width="250" height="40" class="ln flg"/><text x="32" y="55" class="tx txb">1 Eliminate</text><text x="285" y="55" class="txs">Remove the task: pre-cut parts, work at floor level</text><rect x="20" y="80" width="230" height="40" class="ln flg"/><text x="32" y="105" class="tx txb">2 Substitute</text><text x="285" y="105" class="txs">Use 24 V DC instead of 230 V; safer cleaner</text><rect x="20" y="130" width="210" height="40" class="ln flb"/><text x="32" y="155" class="tx txb">3 Engineering</text><text x="285" y="155" class="txs">Guards, interlocks, RCDs, ventilation</text><rect x="20" y="180" width="190" height="40" class="ln fla"/><text x="32" y="205" class="tx txb">4 Administrative</text><text x="285" y="205" class="txs">Procedures, LOTO, training, signs, permits</text><rect x="20" y="230" width="170" height="40" class="ln flr"/><text x="32" y="255" class="tx txb">5 PPE</text><text x="285" y="255" class="txs">Gloves, goggles, ear defenders, arc-rated clothing</text><text x="20" y="292" class="txs txm">LEAST EFFECTIVE, USE ONLY WHEN THE ABOVE ARE NOT ENOUGH</text></svg>`, cap:"Figure 1: The hierarchy of controls, from the most reliable control at the top to the least reliable at the bottom", alt:"Five bars of decreasing width: eliminate, substitute, engineering controls, administrative controls and PPE, each with a workshop example."},
        {t:"h", x:"PPE and housekeeping"},
        {t:"p", x:"PPE is the last line of defence, but it is still essential. Choose it for the hazard, check it before each use and replace it when damaged."},
        {t:"table", head:["Hazard","PPE","Note"], rows:[
          ["Flying chips, grinding, splashes","Safety glasses or goggles; face shield for grinding","Glasses are not splash protection; wear goggles for chemicals"],
          ["Noise around 85 dB(A) or more over a day","Ear plugs or defenders","Fit and wear them for the whole exposure, not just part of it"],
          ["Dropped or crushed feet","Safety boots with steel or composite toe-cap","Oil-resistant, non-slip soles in workshops"],
          ["Sharp edges, hot parts, chemicals","Gloves matched to the hazard","Never wear gloves near rotating drills or shafts, which can wind them in"],
          ["Dust, fumes, paint spray","Respirator or mask rated for that contaminant","A dust mask gives no protection against vapours"],
          ["Electrical work","Insulated tools, insulating gloves where specified","Arc-rated clothing and face shield for live-panel hazards"]
        ], cap:"Matching PPE to the hazard"},
        {t:"p", x:"**Housekeeping** prevents more injuries than most people expect. Keep walkways and exits clear, wipe up oil at once, coil cables off the floor, store materials stably, and return tools to their place. Remove rings, watches and loose clothing, and tie back long hair, before working near rotating machinery."},
        {t:"h", x:"Safety-sign colours"},
        {t:"table", head:["Colour and shape","Meaning","Example"], rows:[
          ["Red circle with diagonal bar","Prohibition","No naked flames; no entry"],
          ["Yellow triangle with black border","Warning of a hazard","Electric shock risk; hot surface"],
          ["Blue circle, white symbol","Mandatory action","Wear eye protection"],
          ["Green square or rectangle","Safe condition","Emergency exit; first aid point"],
          ["Red (solid)","Fire equipment and stop","Extinguisher location; emergency stop"]
        ], cap:"Safety-sign colours and shapes in common international use"},
        {t:"key", items:[
          "A hazard is the source of harm; risk is likelihood combined with severity.",
          "Rate risk as likelihood × severity (each 1 to 5) and re-rate after the controls.",
          "Controls in order: eliminate, substitute, engineering, administrative, PPE.",
          "PPE is the last line of defence and must match the hazard; never wear gloves near rotating tools.",
          "Red prohibits, yellow warns, blue orders an action, green shows a safe condition."
        ]}
      ]
    },
    {
      id: "m02-l2",
      title: "Electric shock and arc flash",
      minutes: 10,
      body: [
        {t:"p", x:"Electricity is the hazard you cannot see, hear or smell. Injury comes from **current flowing through the body**, not from voltage alone, but voltage is what drives the current, so higher voltage means higher danger. A shock needs a complete path: current enters at one point, passes through the body and leaves at another. Touching one live conductor while standing on a damp floor or leaning on an earthed metal frame completes that path. Touching a live conductor and a neutral, or two phases, completes it without any earth at all."},
        {t:"h", x:"What current does to the body"},
        {t:"table", head:["Current (50 Hz AC, hand to hand or hand to foot)","Typical effect"], rows:[
          ["0.5 to 2 mA","Tingling; the threshold of feeling"],
          ["About 10 mA","Muscles clamp; many people cannot let go of the conductor"],
          ["30 mA or more","Breathing muscles affected; heart fibrillation possible if the shock lasts long enough"],
          ["About 75 mA or more","Ventricular fibrillation likely: the heart quivers and stops pumping"],
          ["Several hundred mA to amperes","Cardiac arrest, deep burns, internal damage"]
        ], cap:"Approximate effects of AC current through the chest. Real thresholds vary with the person, the path and the duration"},
        {t:"p", x:"Three things set the harm: the voltage, the path resistance, and the duration. Dry, intact skin is the main barrier and can be tens of thousands of ohms. Sweat, water, cuts and a large contact area drop the path to around 1 000 Ω or less."},
        {t:"worked", title:"Worked example: current through the body", problem:"Take a worst-case body path resistance of 1 000 Ω (wet hands, firm grip). Find the current for a 230 V single-phase supply and for a 24 V supply.", steps:[
          "At 230 V: I = V ÷ R = 230 ÷ 1000 = 0.23 A = 230 mA.",
          "At 24 V: I = 24 ÷ 1000 = 0.024 A = 24 mA.",
          "Compare with the table: 230 mA is far above the fibrillation level, while 24 mA is below it."
        ], answer:"230 mA at mains voltage is potentially fatal; 24 mA at 24 V is far less dangerous. This is why extra-low voltage control circuits are safer, though 24 mA is still a painful shock."},
        {t:"formula", x:"I = V ÷ R", where:"Current through the body in amperes, supply voltage in volts, total path resistance in ohms (Ohm's law, see Module 6)"},
        {t:"ghana", x:"Ghana's hot, humid climate makes skin damp with sweat for much of the working day, which lowers body resistance. This makes the 1 000 Ω worst case realistic. Use dry rubber-soled footwear and RCD-protected supplies for portable tools."},
        {t:"h", x:"Earthing and RCDs"},
        {t:"p", x:"The **protective earth** conductor connects the metal frame of equipment to the supply earth. If a live wire touches the frame, a large fault current flows through the earth conductor, the fuse or breaker opens quickly, and the frame is not left live. This only works if the earth connection is intact. Never remove the earth pin from a plug, never use a damaged flex, and never bypass an earth lead because the machine \"works fine without it\". It works fine until the first fault."},
        {t:"p", x:"An **RCD** (residual current device) compares the current going out on the live conductor with the current returning on the neutral. If more than its rating leaks away, usually through a person or a damaged insulation to earth, it disconnects within a fraction of a second. A 30 mA RCD is accepted as additional protection against shock. It does not replace safe working: if you touch live and neutral at the same time, the same current returns on both, so the RCD sees no imbalance and does not trip."},
        {t:"h", x:"Arc flash"},
        {t:"p", x:"An **arc flash** is an explosive electrical discharge through the air between conductors or from a conductor to earth. It happens when a tool is dropped across busbars, a loose connection fails, a conductor is wrongly connected, or contamination or moisture bridges insulation. The arc reaches many thousands of degrees Celsius, vaporises copper, throws molten metal and produces a pressure blast, intense light and a burst of heat."},
        {t:"ul", items:[
          "**Do not work live.** De-energise, isolate and prove dead is the control; see Lesson 3.",
          "If live work is truly unavoidable, it needs a permit, a competent person, insulated tools, and arc-rated clothing with a face shield.",
          "Stand to the side when closing a large breaker or isolator, keep panel doors closed when switching, and keep metal watch straps, chains and loose tools away from live parts."
        ]},
        {t:"warn", x:"Never touch a person who is still in contact with a live conductor. Switch off the supply first if you can reach the switch. If you cannot, push the person clear using something dry and non-conductive such as a dry wooden broom handle. Then call for help, check breathing and start CPR if there is none. Anyone who has had an electric shock should be seen by a medical professional, because heart rhythm problems can appear later."},
        {t:"key", items:[
          "Current through the chest causes the injury: about 10 mA clamps muscles, about 30 mA is dangerous, and 75 mA or more can fibrillate the heart.",
          "Wet skin lowers body resistance to about 1 000 Ω, so 230 V can drive 230 mA.",
          "Never defeat the protective earth; a 30 mA RCD adds protection but does not catch live-to-neutral contact.",
          "An arc flash is an explosion: the control is to de-energise, not to rely on clothing.",
          "Make the supply safe before touching a shock casualty."
        ]}
      ]
    },
    {
      id: "m02-l3",
      title: "Safe isolation, proving dead and lockout/tagout",
      minutes: 12,
      body: [
        {t:"p", x:"The only way to be sure a circuit cannot hurt you is to **isolate** it, which means to disconnect it from every source of energy by a device that gives a visible or reliably indicated gap, and to **prove it dead**. Isolation protects against the machine starting, against a colleague switching it back on, and against the hazard you did not know was there. It has two parts: the **isolation procedure** that makes the circuit dead, and **lockout/tagout (LOTO)**, which makes sure it stays that way. Figure 2 shows the sequence."},
        {t:"svg", svg:`<svg viewBox="0 0 600 366" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="m02-f2-arr" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 z" class="fi"/></marker></defs><text x="20" y="22" class="tx txb">Safe isolation sequence</text><rect x="20" y="36" width="250" height="32" class="ln flb"/><text x="32" y="57" class="tx">1 Identify circuit, plan, inform</text><line x1="145" y1="68" x2="145" y2="82" class="ln1" marker-end="url(#m02-f2-arr)"/><rect x="20" y="84" width="250" height="32" class="ln flb"/><text x="32" y="105" class="tx">2 Switch off, open isolator</text><line x1="145" y1="116" x2="145" y2="130" class="ln1" marker-end="url(#m02-f2-arr)"/><rect x="20" y="132" width="250" height="32" class="ln flb"/><text x="32" y="153" class="tx">3 Lock off and tag</text><line x1="145" y1="164" x2="145" y2="178" class="ln1" marker-end="url(#m02-f2-arr)"/><rect x="20" y="180" width="250" height="32" class="ln fla"/><text x="32" y="201" class="tx">4 Prove tester on known source</text><line x1="145" y1="212" x2="145" y2="226" class="ln1" marker-end="url(#m02-f2-arr)"/><rect x="20" y="228" width="250" height="32" class="ln fla"/><text x="32" y="249" class="tx">5 Test dead: every pair</text><line x1="145" y1="260" x2="145" y2="274" class="ln1" marker-end="url(#m02-f2-arr)"/><rect x="20" y="276" width="250" height="32" class="ln fla"/><text x="32" y="297" class="tx">6 Re-prove the tester</text><line x1="145" y1="308" x2="145" y2="322" class="ln1" marker-end="url(#m02-f2-arr)"/><rect x="20" y="324" width="250" height="32" class="ln flg"/><text x="32" y="345" class="tx">7 Release stored energy, work</text><text x="290" y="50" class="txs">Drawings and labels; tell people affected</text><text x="290" y="64" class="txs">Confirm the right circuit</text><text x="290" y="98" class="txs">Not a stop button, E-stop or PLC output:</text><text x="290" y="112" class="txs">use the isolator or breaker</text><text x="290" y="146" class="txs">Your own padlock, your own key, your tag</text><text x="290" y="194" class="txs">Proving unit or known live supply</text><text x="290" y="208" class="txs">Confirms the tester works</text><text x="290" y="242" class="txs">L-N, L-E, N-E; three-phase: 10 tests</text><text x="290" y="256" class="txs txb txa">Any live reading: stop and investigate</text><text x="290" y="290" class="txs">If the tester fails now, the step 5</text><text x="290" y="304" class="txs">dead result is not valid: start again</text><text x="290" y="338" class="txs">See Lesson 4: springs, pressure, gravity,</text><text x="290" y="352" class="txs">capacitors; then try to start the machine</text></svg>`, cap:"Figure 2: The safe isolation and proving dead sequence. Blue steps make the circuit dead and secure; amber steps prove it; green is the start of work", alt:"A seven-step vertical flow from identifying the circuit, through switching off, locking and tagging, proving the tester, testing dead, re-proving the tester, and releasing stored energy before work."},
        {t:"h", x:"Isolation and proving dead"},
        {t:"p", x:"Use an **isolator** (a switch-disconnector, covered by IEC 60947) or a circuit breaker that is rated to isolate, and verify its position. A push-button stop, an emergency stop, a contactor, a PLC output and a variable speed drive's stop command all interrupt the supply to the motor in normal operation, but none of them is isolation: the circuit behind them can still be live and the machine can restart without warning. For a three-phase installation with a neutral and earth, test every pair of the five conductors: three phase-to-phase, three phase-to-neutral, three phase-to-earth and neutral-to-earth, which is ten tests. A single-phase circuit needs three: live-to-neutral, live-to-earth and neutral-to-earth."},
        {t:"p", x:"Use a **two-pole voltage tester** with shrouded probes and fused or current-limited leads, rated for the installation category. Do not use a neon screwdriver or a non-contact voltage detector to prove dead: they can fail to detect a live conductor, for example inside a screened cable, and give false reassurance. Test the tester before and after on a known live source or a proving unit, because a tester with a flat battery or a broken lead also reads zero on a live circuit."},
        {t:"warn", x:"Treat any circuit as live until you have proved it dead yourself. Do not accept \"it was switched off\" from someone else. Check for second supplies as well: a control circuit fed from a separate source, a UPS, a generator, a battery or a solar array can leave terminals live when the main isolator is open."},
        {t:"h", x:"Lockout/tagout"},
        {t:"p", x:"LOTO is the discipline of putting your own **lock** and **tag** on every energy isolation point so no one else can re-energise the equipment while you are working. The rules are strict and simple:"},
        {t:"ul", items:[
          "One person, one lock, one key. The person who fits the lock is the only one who removes it.",
          "Where several people work on the same machine, each fits their own padlock on a multi-lock hasp (a group lockout), so the equipment stays isolated until the last person has removed their lock.",
          "The tag shows who fitted it, the date, the reason and how to contact them. A tag alone is a warning, not a barrier, so lock wherever the isolator can be locked.",
          "Never remove or bypass someone else's lock. If the owner is absent, a documented procedure involving a supervisor must be followed first.",
          "At shift change, hand over by the written procedure so isolation is never left in doubt."
        ]},
        {t:"p", x:"After isolating and releasing stored energy, **try to start** the machine from its normal controls to confirm it cannot run, then return the controls to off. This check proves you isolated the right machine."},
        {t:"steps", title:"Returning equipment to service", items:[
          "Complete the work, count your tools and remove them from the equipment.",
          "Refit all guards, covers and panel doors.",
          "Check that every person is clear and tell everyone affected that you are about to re-energise.",
          "Remove your own lock and tag, then close the isolator.",
          "Start the equipment and check it for correct operation."
        ]},
        {t:"key", items:[
          "Isolate, lock, tag, prove the tester, test dead, re-prove the tester, then work.",
          "A stop button, E-stop, contactor or PLC output is not an isolator.",
          "Test every pair of conductors: 3 tests for single-phase, 10 for three-phase with neutral and earth.",
          "One person, one lock, one key; never remove another worker's lock.",
          "Release stored energy and try to start the machine before touching it."
        ]}
      ]
    },
    {
      id: "m02-l4",
      title: "Stored energy and mechanical hazards",
      minutes: 10,
      body: [
        {t:"p", x:"Switching off the electrical supply does not make a machine safe. Many machines store energy in forms other than electricity, and it can move parts, discharge or burst long after the power is isolated. A technician must identify each stored-energy source, release or restrain it, and verify that it is safe before putting hands inside the machine."},
        {t:"table", head:["Stored energy","Example","How to make it safe"], rows:[
          ["Electrical charge","Drive DC bus, power-supply and motor-run capacitors","Wait the time marked on the label, then measure with a tester; discharge only by an approved method"],
          ["Pneumatic pressure","Cylinders, receivers, hoses, valve manifolds","Isolate and lock the supply valve, exhaust to zero, check the gauge, and check for trapped sections"],
          ["Hydraulic pressure","Cylinders, accumulators, hoses","Isolate and stop the pump, release pressure through the correct valve, check the gauge, discharge accumulators"],
          ["Spring force","Brake and clutch springs, spring-return valves, tensioners","Release gradually or hold with the proper tool; never unbolt a loaded spring housing"],
          ["Gravity","Raised cylinders, vertical axes, lift tables, lifted loads","Lower to rest, or fit mechanical locks, props or pins rated for the load"],
          ["Rotating inertia","Flywheels, fans, spindles, large motors","Wait for complete standstill and check by sight; the machine may take minutes to stop"],
          ["Heat","Hot oil, steam lines, heater bands, motor casings","Allow to cool, or wear heat-resistant gloves; check with a surface thermometer"]
        ], cap:"Common sources of stored energy"},
        {t:"h", x:"Electrical stored energy"},
        {t:"p", x:"A capacitor of capacitance C charged to V holds the energy E = ½ × C × V². The DC bus of a variable speed drive on a 400 V supply sits near 565 V (400 × √2). A 4 700 µF bank at 565 V holds ½ × 0.0047 × 565² = 750 J. That energy is easily enough to cause a severe burn or shock, so the drive label gives a wait time, commonly five minutes or more. After the wait, measure the DC bus terminals with a tester rated for the voltage; do not assume the wait alone has done the job."},
        {t:"h", x:"Pneumatic and hydraulic energy"},
        {t:"p", x:"Pressure is **force per area**. The cylinder below shows how large the force can be. Pressure can stay trapped in a cylinder, a receiver, or a line between two closed valves after the supply is shut off, and a cylinder can still move when a valve is operated or a hose is disconnected."},
        {t:"worked", title:"Worked example: force from trapped air", problem:"A double-acting pneumatic cylinder with a 63 mm bore has air trapped at 6 bar on the cap end after the supply is isolated. What force can it still produce?", steps:[
          "Convert pressure: 6 bar = 0.6 MPa = 0.6 N/mm².",
          "Piston area: A = π ÷ 4 × d² = 0.7854 × 63² = 3117 mm².",
          "Force: F = p × A = 0.6 × 3117 = 1870 N.",
          "Weight equivalent: 1870 ÷ 9.81 = 191 kg."
        ], answer:"About 1.87 kN, equal to the weight of a 190 kg mass. A finger or hand in the way would be crushed. Always exhaust and verify zero pressure."},
        {t:"formula", x:"F = p × A", where:"Force in newtons, pressure in N/mm² (1 bar = 0.1 N/mm²), area in mm²"},
        {t:"warn", x:"Hydraulic oil at high pressure can penetrate the skin through a pinhole leak and cause serious injury that looks minor at first. Depressurise before inspecting a hose wherever possible. If a leak must be located under pressure, stand clear and use a piece of cardboard, never a hand. Any injection injury needs urgent medical attention. An accumulator keeps its stored pressure after the pump stops: discharge it through the specified valve and check the gauge reads zero, and never disassemble one without the manufacturer's procedure, because the gas precharge side is still pressurised."},
        {t:"h", x:"Gravity and mechanical energy"},
        {t:"p", x:"A raised load stores potential energy E = m × g × h. A 250 kg load raised 2 m holds 250 × 9.81 × 2 = 4 905 J, which is released at once when a cylinder seal fails or a brake is released. A vertical servo axis, a lifted press head or a raised hydraulic tailgate can fall when its holding force goes. Support it mechanically with a rated prop, block or pin before working below, and do not rely on the hydraulic or pneumatic holding force."},
        {t:"p", x:"Rotating machinery causes entanglement: shafts, belts, chains, drill bits and fans can pull in loose clothing, hair, jewellery and gloves in a fraction of a second and the machine does not slow for you. Guards are there for that reason (see Lesson 5). Hot surfaces, sharp edges, swarf and flying chips are the other common workshop hazards, and are controlled by guards, tool rests, eye protection and cleaning with a brush, never bare hands."},
        {t:"key", items:[
          "Isolating the electrical supply does not remove pneumatic, hydraulic, spring, gravity or capacitor energy.",
          "Capacitor energy E = ½CV²; a drive DC bus near 565 V can hold hundreds of joules.",
          "Trapped pressure can still move a cylinder: F = p × A, 6 bar on a 63 mm bore gives about 1.87 kN.",
          "Hydraulic jets inject through skin; check leaks with cardboard, never with a hand.",
          "Support raised loads mechanically before working underneath them."
        ]}
      ]
    },
    {
      id: "m02-l5",
      title: "Machine guarding, emergency stops and safety functions",
      minutes: 10,
      body: [
        {t:"p", x:"Machine safety follows the hierarchy of controls: first design the hazard out, then guard it, and then use procedures and PPE for the residual risk. **Guards** are physical barriers between a person and the hazard. **Protective devices** detect a person and stop the hazard. Both are engineering controls and both must be kept in place: removing, bridging or jamming a guard interlock is one of the most common causes of serious machine injury."},
        {t:"ul", items:[
          "**Fixed guard:** bolted or welded in place and removable only with a tool. Use it wherever access is not needed in normal operation.",
          "**Interlocked guard:** a door or cover with a switch that stops the hazard when it is opened and prevents restart while open. Where the machine takes time to stop, the guard is held shut by **guard locking** until motion has ceased.",
          "**Light curtain or area scanner:** stops the machine when a beam is interrupted. The machine must stop before the person reaches the hazard, so the sensor has to be mounted at a calculated distance.",
          "**Two-hand control:** needs both hands on separate buttons to run, so hands stay clear. It protects only the operator, not anyone else nearby.",
          "**Enabling device:** a three-position switch on a pendant that allows motion only in the middle position; squeezing hard or releasing stops the machine. Used for teaching robots (see Module 18)."
        ]},
        {t:"h", x:"Emergency stop"},
        {t:"p", x:"The **emergency stop** (E-stop) is a red mushroom button on a yellow background. It must be easy to reach, latch in when pressed and need a deliberate action to reset. **Resetting an E-stop must never restart the machine**: a separate start action is always needed. The E-stop is a complementary measure for an emergency. It does not replace guards and it is not an isolator: after pressing it, the machine is stopped but the supply may still be live."},
        {t:"p", x:"IEC 60204-1 (electrical equipment of machines) defines three **stop categories**. Figure 3 shows how each one behaves. An emergency stop must be category 0 or category 1."},
        {t:"svg", svg:`<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" role="img"><text x="190" y="26" class="txs txc">stop command</text><line x1="190" y1="32" x2="190" y2="308" class="ln1 lnm dash"/><text x="10" y="56" class="tx txb">Category 0</text><text x="10" y="72" class="txs">uncontrolled stop</text><polyline points="130,50 190,50 205,72 225,85 255,94 300,99 350,100 400,100" class="ln lna"/><rect x="130" y="108" width="60" height="10" class="ln1 flg"/><rect x="190" y="108" width="210" height="10" class="ln1 lnm dash"/><text x="122" y="117" class="txs txe">power</text><text x="412" y="70" class="txs">Power removed at once; the load</text><text x="412" y="84" class="txs">coasts to rest. Time depends on</text><text x="412" y="98" class="txs">its inertia and friction.</text><text x="10" y="151" class="tx txb">Category 1</text><text x="10" y="167" class="txs">controlled stop, then off</text><polyline points="130,145 190,145 290,195 400,195" class="ln lna"/><rect x="130" y="203" width="160" height="10" class="ln1 flg"/><rect x="290" y="203" width="110" height="10" class="ln1 lnm dash"/><text x="122" y="212" class="txs txe">power</text><text x="412" y="165" class="txs">Ramps down with power on, then</text><text x="412" y="179" class="txs">power is removed at standstill.</text><text x="412" y="193" class="txs">Common with drives and brakes.</text><text x="10" y="246" class="tx txb">Category 2</text><text x="10" y="262" class="txs">controlled stop, power on</text><polyline points="130,240 190,240 290,290 400,290" class="ln lna"/><rect x="130" y="298" width="270" height="10" class="ln1 flg"/><text x="122" y="307" class="txs txe">power</text><text x="412" y="260" class="txs">Ramps down; power stays on to</text><text x="412" y="274" class="txs">hold the load at rest. Not an</text><text x="412" y="288" class="txs">emergency stop category.</text><text x="400" y="326" class="txs txe">time</text></svg>`, cap:"Figure 3: IEC 60204-1 stop categories 0, 1 and 2. The amber line is speed, the bar below each is power to the actuators (green = on)", alt:"Three speed-against-time panels: category 0 coasts down with power removed immediately, category 1 ramps down then removes power, category 2 ramps down with power left on."},
        {t:"h", x:"Categories and performance levels"},
        {t:"p", x:"A safety function such as \"stop when the guard door opens\" is only as dependable as the wiring, relays and sensors that carry it out. ISO 13849-1 grades this by **category**, which describes the structure of the safety circuit, and **performance level** (PL a to e), which gives the probability of a dangerous failure per hour. The required PL comes from a risk graph that scores severity (S1 slight, S2 serious), frequency of exposure (F1 rare, F2 frequent) and the possibility of avoiding the hazard (P1 possible, P2 hardly possible). S1/F1/P1 needs PL a; S2/F2/P2 needs PL e. Do not change a safety circuit or replace a safety component with a non-safety one."},
        {t:"table", head:["Category","Principle"], rows:[
          ["B","Basic safety principles; a fault can cause loss of the safety function"],
          ["1","Well-tried components and principles; one channel, relies on component quality"],
          ["2","One channel plus periodic automatic testing of the safety function"],
          ["3","Two channels with monitoring: a single fault does not lose the safety function"],
          ["4","Like category 3, with better fault detection: faults are detected in time and accumulated faults do not defeat the function"]
        ], cap:"ISO 13849-1 categories, at overview level"},
        {t:"table", head:["PL","Probability of dangerous failure per hour"], rows:[
          ["a","≥ 10⁻⁵ to < 10⁻⁴"],
          ["b","≥ 3 × 10⁻⁶ to < 10⁻⁵"],
          ["c","≥ 10⁻⁶ to < 3 × 10⁻⁶"],
          ["d","≥ 10⁻⁷ to < 10⁻⁶"],
          ["e","≥ 10⁻⁸ to < 10⁻⁷"]
        ], cap:"ISO 13849-1 performance levels. PL e is the most reliable"},
        {t:"note", x:"Safety relays and safety PLCs that meet these requirements are covered in Module 12 and Module 15. Robot safeguarding follows ISO 10218 (Module 18)."},
        {t:"key", items:[
          "Fix hazards with guards and protective devices; never bridge or remove an interlock.",
          "E-stop: red mushroom on yellow; latches; reset must not restart; it is not an isolator.",
          "IEC 60204-1: category 0 removes power at once; 1 ramps down then removes power; 2 stops but keeps power.",
          "ISO 13849-1 grades safety functions by category (B, 1, 2, 3, 4) and performance level (a to e).",
          "Never replace a safety component with a non-safety one."
        ]}
      ]
    },
    {
      id: "m02-l6",
      title: "Handling, heights, confined spaces, fire and incidents",
      minutes: 10,
      body: [
        {t:"h", x:"Manual handling"},
        {t:"p", x:"Back and joint injuries are among the most common in workshops. Before lifting, think through the **task, the individual, the load and the environment**: how far, how often and how awkward is the carry, can you do it, how heavy and stable is the load, and what are the floor and space like? Use a trolley, hoist or pallet truck whenever you can, and get help for heavy, bulky or awkward items. When you must lift, plan the route and put the load down at the end, bring the load close, keep your back straight, bend the knees, lift smoothly and do not twist. Maximum safe weights depend on the person and the task, so follow your employer's limits."},
        {t:"h", x:"Working at height"},
        {t:"p", x:"A fall from any height can injure, and falls are a leading cause of death at work. Avoid working at height if the job can be done from the ground. If you cannot, use the safest equipment for the task: a platform or scaffold with guard rails before a ladder, and a ladder only for short, light work."},
        {t:"ul", items:[
          "Inspect the ladder first: no cracks, bent rungs or missing feet. Set it on firm, level ground.",
          "The **4 to 1 rule**: place the foot 1 m out for every 4 m of height, which gives an angle of about 75°. A ladder 4 m up the wall has its foot 1 m from the wall.",
          "Extend it at least 1 m above the landing and tie it at the top where you can.",
          "Keep three points of contact (two hands and a foot, or two feet and a hand) and do not carry heavy loads while climbing.",
          "Use a harness and a suitable anchor where there is a fall risk, with a rescue plan: a suspended person can be harmed within minutes.",
          "Keep clear of overhead power lines and never use a metal ladder near live conductors."
        ]},
        {t:"h", x:"Confined spaces"},
        {t:"p", x:"A **confined space** is an enclosed area, not designed for continuous occupation, with limited entry and exit, where a hazardous atmosphere or other danger may exist: tanks, sumps, pits, silos, ducts and some large machine housings. Normal air contains 20.9 % oxygen. Below about 19.5 % it is oxygen-deficient and can cause collapse without warning. Gases such as carbon monoxide and hydrogen sulfide are toxic, and flammable vapour can explode. Entry needs a **permit to work**, an atmosphere test before and during entry, forced ventilation, isolation of all energy and piped services, a trained **standby person** outside who stays in contact, and a rescue plan."},
        {t:"warn", x:"Many confined-space deaths are would-be rescuers who went in after a collapsed colleague without breathing apparatus. If someone collapses in a confined space, raise the alarm and call the rescue team. Do not enter."},
        {t:"h", x:"Fire"},
        {t:"p", x:"Fire needs fuel, heat and oxygen. Remove any one and it goes out. Fires are grouped by the fuel (European classification): **Class A** ordinary solids such as wood, paper and fabric; **Class B** flammable liquids such as petrol, oil and paint; **Class C** flammable gases; **Class D** metals such as magnesium; **Class F** cooking oils and fats."},
        {t:"table", head:["Extinguisher","Suitable for","Do not use on"], rows:[
          ["Water","Class A","Live electrical equipment, flammable liquids, cooking fat"],
          ["Foam","Class A and B","Live electrical equipment"],
          ["CO₂ gas","Class B and live electrical equipment","Metal fires; in a confined space the gas displaces air"],
          ["Dry powder","Classes A, B and C","Electronics (it damages them) and enclosed rooms (it reduces visibility)"]
        ], cap:"Choosing an extinguisher. Always read the label on the extinguisher itself"},
        {t:"p", x:"An electrical fire is not a separate class: it is a Class A or B fire that involves live equipment. Isolate the supply if you can reach the isolator safely, then use CO₂ or dry powder. Never use water on live equipment. In every fire: raise the alarm first, then fight it only if it is small, you have the right extinguisher, your escape route is behind you and you are trained. Use **PASS**: pull the pin, aim at the base of the flames, squeeze the handle, sweep side to side. Otherwise leave, close doors behind you and go to the assembly point."},
        {t:"h", x:"Reporting incidents"},
        {t:"p", x:"Report every accident, injury, dangerous occurrence and **near miss** (an event that could have caused harm but did not) to your supervisor straight away and record it. Near misses are free lessons: for every serious injury, many near misses warned that it was coming. Give first aid, make the area safe without disturbing evidence, record what happened, and let the investigation find the **root cause** (see Module 19), not someone to blame. A culture in which workers report openly is safer than one where mistakes are hidden."},
        {t:"key", items:[
          "Plan a lift: task, individual, load, environment; use mechanical aids and get help.",
          "Ladders: 4 to 1 angle, 1 m above the landing, three points of contact; harness and anchor where a fall is possible.",
          "Confined space: permit, atmosphere test, ventilation, isolation, standby person; never enter to rescue without equipment.",
          "Electrical fire: isolate if safe, then CO₂ or dry powder, never water; raise the alarm first.",
          "Report every accident and near miss immediately; the aim is to find the root cause."
        ]}
      ]
    }
  ],
  quiz: [
    {id:"m02-q1", q:"Which control sits at the top of the hierarchy of controls and is the most reliable?", opts:["Wearing suitable PPE", "Writing a safe procedure", "Eliminating the hazard", "Fitting a fixed guard"], a:2, why:"Eliminating the hazard removes the danger altogether. Guards are engineering controls, procedures are administrative, and PPE is the last line of defence."},
    {id:"m02-q2", q:"A task has likelihood 3 and severity 5. After a control the likelihood falls to 1. What is the rating before and after?", opts:["15, then 5", "8, then 6", "15 before and 15 after", "5, then 3"], a:0, why:"Risk rating = likelihood × severity: 3 × 5 = 15, and after the control 1 × 5 = 5. The severity of the possible harm is unchanged."},
    {id:"m02-q3", q:"What does a blue circular safety sign with a white symbol indicate?", opts:["Prohibition", "Warning of a hazard", "A safe condition", "A mandatory action"], a:3, why:"Blue circles are mandatory-action signs, such as 'wear eye protection'. Red circles prohibit, yellow triangles warn and green signs show safe conditions."},
    {id:"m02-q4", q:"Roughly what current through the chest can cause a person to be unable to let go of a live conductor?", opts:["0.5 mA", "75 mA", "10 mA", "1 A"], a:2, why:"At about 10 mA the muscles clamp, so many people cannot let go. 0.5 mA is only perceptible, and 75 mA and above can fibrillate the heart."},
    {id:"m02-q5", q:"A technician with wet hands has a body path resistance of 1 000 Ω and touches a 230 V live conductor. What current flows?", opts:["23 mA", "2 300 mA", "4.3 mA", "230 mA"], a:3, why:"I = V ÷ R = 230 ÷ 1000 = 0.23 A = 230 mA, which is far above the level at which the heart can fibrillate."},
    {id:"m02-q6", q:"A 30 mA RCD is fitted. In which case does it NOT protect a person?", opts:["Touching a live wire while standing barefoot on damp earth", "Touching the live and neutral conductors at the same time", "A damaged heater element leaking current to its metal case", "A worn lamp-holder energising an earthed metal lamp stand"], a:1, why:"Current going in on the live and back on the neutral through the body is balanced, so the RCD sees no leakage. Earth leakage cases cause an imbalance and trip it."},
    {id:"m02-q7", q:"You press the stop button on a machine control panel and the motor stops. What does that prove?", opts:["The machine is now electrically isolated", "The control panel is now completely dead", "The drive capacitors have all discharged", "Nothing; the circuit may still be live"], a:3, why:"A stop button or a drive stop command only interrupts normal operation. Only an isolator or isolating breaker, then a proving test, shows the circuit is dead."},
    {id:"m02-q8", q:"A three-phase circuit has L1, L2, L3, neutral and earth. How many tests are needed to prove it dead?", opts:["3 tests", "10 tests", "5 tests, one per conductor", "6 tests, phases and neutral only"], a:1, why:"Every pair of five conductors must be tested: C(5,2) = 10. Three phase-to-phase, three phase-to-neutral, three phase-to-earth and one neutral-to-earth."},
    {id:"m02-q9", q:"Why must you test your voltage tester on a known live source after proving the circuit dead?", opts:["To clean the probes after the test", "To discharge any charge left in the circuit", "To confirm the tester still works", "To recalibrate the display before use"], a:2, why:"A tester that failed during the test (flat battery, broken lead) shows zero on a live circuit. Re-proving on a known source confirms the dead reading was real."},
    {id:"m02-q10", q:"Three technicians are working on one machine. What is the correct way to lock out?", opts:["The most senior person fits one lock for all of them", "Each fits their own padlock on a multi-lock hasp", "A tag on the isolator is enough for the group", "One person fits a lock and gives each of the others a key"], a:1, why:"Each worker's personal lock keeps the isolation in place until they have removed it themselves. One lock and shared keys means someone could be exposed when the owner removes it."},
    {id:"m02-q11", q:"A drive label says to wait 5 minutes after switch-off before opening the cover. A technician waits 5 minutes. What else must be done?", opts:["Measure the DC bus voltage to confirm it is safe", "Nothing more; the wait time on the label is enough", "Short the DC terminals with a screwdriver to be sure", "Reconnect the supply briefly to bleed the charge"], a:0, why:"The wait is a guide, not proof. A capacitor may be faulty or the bleed resistor failed, so measure the DC bus with a tester rated for the voltage before touching anything."},
    {id:"m02-q12", q:"A 50 mm bore air cylinder holds trapped air at 6 bar. Which is the force on the piston?", opts:["About 1.2 kN", "About 0.59 kN", "About 12 kN", "About 3.1 kN"], a:0, why:"A = 0.7854 × 50² = 1 963 mm²; 6 bar is 0.6 N/mm², so F = 0.6 × 1 963 = 1 178 N, about 1.2 kN. Trapped pressure is enough to cause serious injury."},
    {id:"m02-q13", q:"What is the correct way to look for a pinhole leak in a high-pressure hydraulic hose?", opts:["Run a bare hand along the hose", "Wipe it with a cloth while the machine runs", "Move a piece of cardboard near it, with the pressure on", "Look only after the pressure is isolated and released"], a:3, why:"The safe approach is to depressurise first. A pinhole jet can inject oil through skin, and a bare hand or a cloth can be drawn into the jet. Cardboard is a last resort, not a first choice."},
    {id:"m02-q14", q:"Which IEC 60204-1 stop category ramps the drive down under control and then removes power at standstill?", opts:["Category 0", "Category 2", "Category 1", "None, it needs a safety relay"], a:2, why:"Category 1 is a controlled stop with power available to stop the machine, then power is removed. Category 0 removes power at once; category 2 keeps power on."},
    {id:"m02-q15", q:"What does ISO 13849-1 performance level PL e indicate?", opts:["The most reliable safety function", "The cheapest safety circuit that meets the law", "A safety function with no periodic testing at all", "The highest probability of dangerous failure"], a:0, why:"PL e has the lowest probability of dangerous failure per hour (10⁻⁸ to under 10⁻⁷). It is used where severe injury is likely and the hazard is hard to avoid."},
    {id:"m02-q16", q:"A ladder reaches a landing 4.8 m above the ground. By the 4 to 1 rule, how far from the wall should its foot be?", opts:["0.6 m", "1.2 m", "2.4 m from the wall", "4.8 m, equal to the height"], a:1, why:"One metre out for every four metres of height: 4.8 ÷ 4 = 1.2 m. A steeper ladder can tip backward, and a shallower one can slide out."}
  ],
  cards: [
    {f:"What is the order of the hierarchy of controls?", b:"Eliminate, substitute, engineering controls, administrative controls, PPE. Use the highest practical level; PPE is the last line of defence."},
    {f:"How do you rate a risk?", b:"Risk rating = likelihood × severity, each scored 1 to 5. Re-rate after the controls are in place."},
    {f:"Colours and shapes of safety signs?", b:"Red circle: prohibition. Yellow triangle: warning. Blue circle: mandatory action. Green square: safe condition or first aid."},
    {f:"What current can make you unable to let go?", b:"About 10 mA through the chest or arm. About 30 mA is dangerous and 75 mA or more can fibrillate the heart."},
    {f:"Why does the body path resistance matter?", b:"It sets the current: I = V ÷ R. Dry skin can be tens of kΩ, wet skin about 1 kΩ or less, so 230 V can drive 230 mA."},
    {f:"What does an RCD not protect against?", b:"Touching live and neutral at once, because the current returns on the neutral and the RCD sees no imbalance. It detects leakage to earth."},
    {f:"Name the safe isolation sequence.", b:"Identify, switch off and open the isolator, lock and tag, prove the tester, test dead on every pair, re-prove the tester, release stored energy, then work."},
    {f:"Is an E-stop or stop button an isolator?", b:"No. They stop motion in normal operation or an emergency, but the circuit can still be live. Use the isolator, lock it and prove dead."},
    {f:"How many tests prove a 3-phase circuit dead?", b:"Ten: three phase-to-phase, three phase-to-neutral, three phase-to-earth and one neutral-to-earth. A single-phase circuit needs three."},
    {f:"What are the LOTO rules for locks?", b:"One person, one lock, one key. Each worker fits their own lock on a hasp. Never remove another person's lock. Tag shows name, date, reason."},
    {f:"How do you make a drive's capacitors safe?", b:"Isolate, wait the label time (commonly 5 minutes or more), then measure the DC bus with a rated tester. The bus sits near 565 V on a 400 V supply."},
    {f:"How much force can trapped air produce?", b:"F = p × A. At 6 bar a 63 mm bore gives about 1.87 kN, equal to about 190 kg. Exhaust and verify zero pressure."},
    {f:"How do you check for a hydraulic leak?", b:"Depressurise first. Never use a hand: a pinhole jet can inject oil through the skin. Use cardboard only when it cannot be avoided."},
    {f:"State the IEC 60204-1 stop categories.", b:"0: power removed at once, uncontrolled stop. 1: controlled stop with power, then power removed. 2: controlled stop with power left on."},
    {f:"What do ISO 13849-1 categories and PL mean?", b:"Category (B, 1, 2, 3, 4) describes circuit structure. PL a to e is the probability of dangerous failure per hour; PL e is the most reliable."},
    {f:"What is the ladder 4 to 1 rule?", b:"Foot 1 m out for every 4 m of height (about 75°). Extend 1 m above the landing and keep three points of contact."}
  ],
  terms: [
    {t:"Hazard", d:"Anything with the potential to cause harm, such as a live conductor, a rotating shaft or a hot surface."},
    {t:"Risk", d:"The combination of how likely a harm is to occur and how severe it would be."},
    {t:"Hierarchy of controls", d:"The order of risk controls: eliminate, substitute, engineering, administrative, PPE, from most to least reliable."},
    {t:"Isolation", d:"Disconnecting equipment from all energy sources by a device that gives a reliable gap, so it cannot be energised."},
    {t:"Proving dead", d:"Testing every conductor pair with a tester that has been proved on a known source before and after the test."},
    {t:"Lockout/tagout", d:"Fitting a personal lock and tag to each isolation point so no one can restore energy while work is in progress."},
    {t:"RCD", d:"A residual current device that disconnects the supply when leakage to earth exceeds its rating, commonly 30 mA."},
    {t:"Arc flash", d:"An explosive electrical discharge through air that releases intense heat, light and pressure."},
    {t:"Stored energy", d:"Energy held in capacitors, springs, pressurised fluid, raised loads or rotating masses that can release after isolation."},
    {t:"Emergency stop", d:"A red latching mushroom button on a yellow background that brings the machine to a stop; it is not an isolator."},
    {t:"Near miss", d:"An event that could have caused injury or damage but did not, which must be reported so the cause can be removed."}
  ],
  formulas: [
    {n:"Risk rating", f:"Risk = likelihood × severity", v:"Each scored 1 to 5; rating 1 to 25, banded by the employer's matrix"},
    {n:"Current through the body", f:"I = V ÷ R", v:"I amperes, V volts, R body path resistance in ohms (about 1 000 Ω worst case when wet)"},
    {n:"Capacitor stored energy", f:"E = ½ × C × V²", v:"E joules, C farads, V volts"},
    {n:"Force from pressure", f:"F = p × A", v:"F newtons, p in N/mm² (1 bar = 0.1 N/mm²), A in mm²"},
    {n:"Potential energy of a load", f:"E = m × g × h", v:"E joules, m kilograms, g = 9.81 m/s², h metres"},
    {n:"Ladder foot distance", f:"Distance out = height ÷ 4", v:"Both in metres; the 4 to 1 rule gives an angle of about 75°"}
  ]
});
