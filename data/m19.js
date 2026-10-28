window.MECH.register({
 "id": "m19",
 "n": 19,
 "title": "Maintenance, Fault Finding and Reliability",
 "short": "Maintenance and Faults",
 "group": "Systems & Maintenance",
 "blurb": "Keep machines running: maintenance strategies, a structured fault-finding method, condition monitoring and test instruments, reliability calculations, root-cause analysis and good documentation.",
 "outcomes": [
  "Compare breakdown, preventive, predictive and condition-based maintenance and explain TPM and RCM",
  "Use work orders, spares lists and criticality to plan maintenance",
  "Apply the structured fault-finding method and the half-split method",
  "Use common test and condition-monitoring instruments correctly and safely",
  "Calculate MTBF, MTTR, availability and failure rate and read the bathtub curve",
  "Compare the cost of breakdown and preventive maintenance",
  "Find root causes with the 5-whys and fishbone diagrams",
  "Keep records and handle waste oil, batteries and e-waste responsibly"
 ],
 "lessons": [
  {
   "id": "m19-l1",
   "title": "Maintenance strategies and planning",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "**Maintenance** keeps equipment in working condition so that production is safe, reliable and economical. The mechatronics technician combines mechanical, electrical, electronic and control skills, which is why the work often falls to them when a machine stops."
    },
    {
     "t": "table",
     "head": [
      "Strategy",
      "Idea",
      "Good for",
      "Weakness"
     ],
     "rows": [
      [
       "Breakdown (run to failure)",
       "Repair only after failure",
       "Cheap, non-critical, easily replaced items such as a lamp",
       "Unplanned stops, damage to other parts, safety risk"
      ],
      [
       "Preventive (time-based)",
       "Inspect, lubricate and replace at fixed intervals",
       "Parts with predictable wear: filters, belts, oil",
       "May replace good parts; may cause errors when work is done"
      ],
      [
       "Condition-based",
       "Do the work when a measured condition shows it is needed",
       "Bearings, motors, gearboxes, filters with a pressure gauge",
       "Needs instruments and trained people"
      ],
      [
       "Predictive",
       "Use trends in condition data to forecast when failure will occur",
       "Critical rotating equipment",
       "Costs more to set up; needs data analysis"
      ],
      [
       "Improvement (design out)",
       "Change the design so the fault cannot recur",
       "Chronic problems",
       "Needs engineering time and approval"
      ]
     ],
     "cap": "Maintenance strategies"
    },
    {
     "t": "h",
     "x": "TPM and RCM"
    },
    {
     "t": "p",
     "x": "**Total Productive Maintenance (TPM)** involves everyone, especially operators, in looking after the equipment. Operators carry out **autonomous maintenance**, such as cleaning, inspecting and tightening, and notice abnormal noise, heat or leaks early. This lets technicians concentrate on skilled work. **Reliability-Centred Maintenance (RCM)** is a method for choosing the right strategy for each asset by asking: what does it do, how can it fail, what are the effects, and what is the best way to prevent or detect it?"
    },
    {
     "t": "h",
     "x": "Work orders and CMMS"
    },
    {
     "t": "p",
     "x": "A **work order** records a job: the equipment, the fault or task, priority, who did the work, time spent, parts used and the result. A **CMMS (computerised maintenance management system)** stores the work orders, the preventive maintenance schedule, the asset register, spare-parts stock and the history of every machine. The history shows repeated faults and costs and is the basis for improving the plan. A simple paper system with a numbered tag for each machine is better than no system."
    },
    {
     "t": "ul",
     "items": [
      "**Priority:** safety and environmental risk first, then production loss, then other work.",
      "**Spares and criticality:** rank each machine as critical (a stop halts production), important or minor. Hold spares for critical parts with a long lead time, such as a main drive, a PLC CPU, a key sensor or a special bearing. Store them clean, labelled and protected from damp.",
      "**Permit to work and isolation:** follow the site procedure, lock out and tag (Module 2) and test dead before starting.",
      "**Handover:** tell the operators what was done and test the machine with them."
     ]
    },
    {
     "t": "key",
     "items": [
      "Strategies: breakdown, preventive, condition-based, predictive and improvement.",
      "TPM involves operators in basic care; RCM chooses the right strategy per asset.",
      "Work orders and a CMMS record the job, parts, time and history.",
      "Rank machines by criticality to decide which spares to hold.",
      "Always isolate and lock out before maintenance and test the machine on handover."
     ]
    }
   ]
  },
  {
   "id": "m19-l2",
   "title": "The structured fault-finding method",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Faults are found quickly by a calm, logical method. Guessing and replacing parts at random wastes time, adds new faults and can be dangerous."
    },
    {
     "t": "steps",
     "title": "The seven-step method",
     "items": [
      "**Collect information:** ask the operator what happened, when and what changed. Look at alarms, fault codes and the state of the machine. Is it a new installation or an old one that worked before?",
      "**Understand the system:** read the manual and diagrams, and identify which parts must work for the fault to occur.",
      "**Hypothesise:** list the most probable causes, starting with the easy and likely ones (a blown fuse, a loose connector, a closed valve) before the rare ones.",
      "**Test:** measure rather than assume. Plan the test so that each result rules causes in or out.",
      "**Isolate and repair:** narrow down to one part, replace or repair it, and make sure you have removed the cause as well as the symptom.",
      "**Verify:** run the machine through its full cycle with the operator and confirm that the fault has gone, and that no new fault was introduced.",
      "**Document:** record the symptoms, the cause, the action and the parts used, and tell the operator."
     ]
    },
    {
     "t": "h",
     "x": "The half-split method"
    },
    {
     "t": "p",
     "x": "When a fault lies somewhere along a chain of stages (a power path, a signal path or an air line), measure in the **middle** of the chain. If the signal is good there, the fault is in the second half; if it is bad, the fault is in the first half. Repeat on the half that holds the fault. With eight stages, three tests find the fault; with sixteen, only four. This is much quicker than testing each stage in turn."
    },
    {
     "t": "svg",
     "alt": "A chain of eight stages from supply to motor. Three test points T1, T3 and T2 are marked at successive halves of the chain, narrowing the fault to the cable at stage six.",
     "cap": "Figure 1: the half-split method on a motor supply path",
     "svg": "<svg viewBox=\"0 0 700 280\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m19-f2-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<rect x=\"10\" y=\"110\" width=\"70\" height=\"40\" class=\"ln fl\"/><text x=\"45\" y=\"134\" class=\"txs txb txc\">Supply</text><text x=\"45\" y=\"104\" class=\"txs txc\">1</text><line x1=\"80\" y1=\"130\" x2=\"94\" y2=\"130\" class=\"ln\" marker-end=\"url(#m19-f2-arr)\"/><rect x=\"94\" y=\"110\" width=\"70\" height=\"40\" class=\"ln fl\"/><text x=\"129\" y=\"134\" class=\"txs txb txc\">Isolator</text><text x=\"129\" y=\"104\" class=\"txs txc\">2</text><line x1=\"164\" y1=\"130\" x2=\"178\" y2=\"130\" class=\"ln\" marker-end=\"url(#m19-f2-arr)\"/><rect x=\"178\" y=\"110\" width=\"70\" height=\"40\" class=\"ln fl\"/><text x=\"213\" y=\"134\" class=\"txs txb txc\">Fuse</text><text x=\"213\" y=\"104\" class=\"txs txc\">3</text><line x1=\"248\" y1=\"130\" x2=\"262\" y2=\"130\" class=\"ln\" marker-end=\"url(#m19-f2-arr)\"/><rect x=\"262\" y=\"110\" width=\"70\" height=\"40\" class=\"ln fl\"/><text x=\"297\" y=\"134\" class=\"txs txb txc\">Contactor</text><text x=\"297\" y=\"104\" class=\"txs txc\">4</text><line x1=\"332\" y1=\"130\" x2=\"346\" y2=\"130\" class=\"ln\" marker-end=\"url(#m19-f2-arr)\"/><rect x=\"346\" y=\"110\" width=\"70\" height=\"40\" class=\"ln fl\"/><text x=\"381\" y=\"134\" class=\"txs txb txc\">Overload</text><text x=\"381\" y=\"104\" class=\"txs txc\">5</text><line x1=\"416\" y1=\"130\" x2=\"430\" y2=\"130\" class=\"ln\" marker-end=\"url(#m19-f2-arr)\"/><rect x=\"430\" y=\"110\" width=\"70\" height=\"40\" class=\"ln flr\"/><text x=\"465\" y=\"134\" class=\"txs txb txc\">Cable</text><text x=\"465\" y=\"104\" class=\"txs txc\">6</text><line x1=\"500\" y1=\"130\" x2=\"514\" y2=\"130\" class=\"ln\" marker-end=\"url(#m19-f2-arr)\"/><rect x=\"514\" y=\"110\" width=\"70\" height=\"40\" class=\"ln fl\"/><text x=\"549\" y=\"134\" class=\"txs txb txc\">Terminals</text><text x=\"549\" y=\"104\" class=\"txs txc\">7</text><line x1=\"584\" y1=\"130\" x2=\"598\" y2=\"130\" class=\"ln\" marker-end=\"url(#m19-f2-arr)\"/><rect x=\"598\" y=\"110\" width=\"70\" height=\"40\" class=\"ln fl\"/><text x=\"633\" y=\"134\" class=\"txs txb txc\">Motor</text><text x=\"633\" y=\"104\" class=\"txs txc\">8</text>\n<line x1=\"339\" y1=\"60\" x2=\"339\" y2=\"170\" class=\"lnb ln\"/><text x=\"339\" y=\"52\" class=\"tx txb txc\">T1</text><line x1=\"423\" y1=\"60\" x2=\"423\" y2=\"170\" class=\"lnb ln\"/><text x=\"423\" y=\"52\" class=\"tx txb txc\">T3</text><line x1=\"507\" y1=\"60\" x2=\"507\" y2=\"170\" class=\"lnb ln\"/><text x=\"507\" y=\"52\" class=\"tx txb txc\">T2</text>\n<text x=\"465\" y=\"172\" class=\"txs txb txc\">fault here</text>\n<text x=\"20\" y=\"206\" class=\"txs\">T1 after the contactor: voltage present. The fault is in stages 5 to 8.</text>\n<text x=\"20\" y=\"224\" class=\"txs\">T2 after the cable: voltage absent. The fault is in stages 5 or 6.</text>\n<text x=\"20\" y=\"242\" class=\"txs\">T3 after the overload: voltage present. The fault is the cable (stage 6).</text>\n<text x=\"350\" y=\"270\" class=\"txs txm txc\">Eight stages found with three tests. Each test splits the remaining suspects in half.</text>\n</svg>"
    },
    {
     "t": "formula",
     "x": "tests needed ≈ log₂(N)",
     "where": "N is the number of stages that could hold the fault. 8 stages need 3 tests, 16 need 4, and 32 need 5 (rounding up)."
    },
    {
     "t": "h",
     "x": "Use all your senses and tools"
    },
    {
     "t": "ul",
     "items": [
      "**Look:** burn marks, discolouration, loose or broken wires, leaks, wear, corrosion, a tripped overload, indicator lights.",
      "**Listen:** grinding or squealing bearings, a buzzing contactor, hissing air leaks, arcing.",
      "**Smell:** burnt insulation, overheated oil.",
      "**Touch** only when safe: a hot motor housing or a vibrating bearing (use the back of the hand and never touch live or moving parts).",
      "**Measure:** use voltage, current, resistance and temperature to replace opinion with facts (see the next lesson)."
     ]
    },
    {
     "t": "p",
     "x": "Read the manual and diagrams before measuring. The PLC's diagnostic buffer, drive fault codes and HMI alarm history (Modules 15 and 16) usually name the fault or at least the area. Check what changed recently: a new part, a changed setting, a software download, a cleaning job, or a storm."
    },
    {
     "t": "tip",
     "x": "Change one thing at a time, and write down what you change. If a change does not fix it, put it back. Technicians who change three things at once never know which one mattered, and often leave a new fault behind."
    },
    {
     "t": "key",
     "items": [
      "Method: collect information, understand, hypothesise, test, isolate and repair, verify, document.",
      "Check easy and likely causes first, and measure instead of assuming.",
      "Half-split: test in the middle of the chain; the tests needed are about log₂(N).",
      "Use the diagnostic codes, alarm history and recent changes.",
      "Change one thing at a time and record it."
     ]
    }
   ]
  },
  {
   "id": "m19-l3",
   "title": "Test instruments and condition monitoring",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Measurements show a machine's condition before it fails. Use the right instrument, know its limits and be sure it is safe to use."
    },
    {
     "t": "table",
     "head": [
      "Instrument",
      "What it shows",
      "Typical use"
     ],
     "rows": [
      [
       "Multimeter",
       "Voltage, resistance, continuity, sometimes current and frequency",
       "Control circuits, supplies, voltage-drop testing (Module 12)"
      ],
      [
       "Clamp meter",
       "Current without breaking the circuit",
       "Motor current compared to the nameplate; unbalanced phases"
      ],
      [
       "Insulation tester (megger)",
       "Insulation resistance at 250, 500 or 1000 V DC",
       "Motors, cables and transformers, with the circuit dead and isolated"
      ],
      [
       "Thermal (infrared) camera",
       "Surface temperature pattern",
       "Hot connections, overloaded breakers, overheating bearings, blocked coolers"
      ],
      [
       "Vibration meter or analyser",
       "Vibration level and frequency",
       "Unbalance, misalignment, bearing wear in pumps, fans and motors"
      ],
      [
       "Ultrasonic detector",
       "High-frequency sound",
       "Compressed air and gas leaks, bearing lubrication, electrical discharge"
      ],
      [
       "Oil analysis",
       "Particles, water, viscosity and wear metals in the oil",
       "Gearboxes and hydraulic systems (Module 13)"
      ],
      [
       "Loop calibrator",
       "Generates and measures 4–20 mA",
       "Sensors and transmitters (Module 11)"
      ]
     ],
     "cap": "Common test and condition-monitoring instruments"
    },
    {
     "t": "h",
     "x": "Insulation resistance"
    },
    {
     "t": "p",
     "x": "The insulation of a motor winding or cable ages with heat, damp and dirt. An **insulation resistance test** applies a DC voltage (normally 500 V for circuits up to 500 V, IEC 60364) and measures the resistance to earth. A value of at least **1 MΩ** is the usual minimum for a low-voltage circuit; a healthy motor reads many times higher. Look at the **trend**: a falling value year after year warns of trouble before it fails. A wet or dirty winding gives a low reading and can often be dried and cleaned."
    },
    {
     "t": "warn",
     "x": "Disconnect and isolate the circuit and prove it dead before an insulation test. Disconnect electronic equipment (drives, PLC modules, surge protectors) from the cable first, because the test voltage destroys them. Discharge the winding after the test, because it holds charge. Never use a test voltage above the equipment's rating."
    },
    {
     "t": "h",
     "x": "Vibration and temperature"
    },
    {
     "t": "p",
     "x": "All rotating machines vibrate, and the pattern changes as they wear. Unbalance shows as vibration at once per revolution, misalignment at twice per revolution and rolling bearing defects at higher characteristic frequencies. Taking readings at the same points regularly and plotting them over time shows when a machine moves from normal to alarm. Thermal images are the same: compare similar items (the three phases of one breaker) and a loose or corroded connection stands out as a hot spot."
    },
    {
     "t": "ul",
     "items": [
      "Always record readings with the date, the machine and its loading, and compare them with the previous readings and the maker's limits.",
      "Calibrate instruments on schedule and label them with the due date; a faulty meter gives false confidence.",
      "Use meters and leads that have the correct CAT rating for the supply (Module 12), and check them on a known source before and after use."
     ]
    },
    {
     "t": "key",
     "items": [
      "Use a clamp meter for current and an insulation tester for insulation resistance on dead circuits.",
      "Insulation test: normally 500 V DC, at least 1 MΩ, and watch the trend.",
      "Thermal cameras show hot connections; vibration analysis shows unbalance, misalignment and bearing wear.",
      "Ultrasonic detectors find air leaks and bearing problems.",
      "Calibrate instruments and always record readings with the date and load."
     ]
    }
   ]
  },
  {
   "id": "m19-l4",
   "title": "Reliability: MTBF, MTTR and availability",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "**Reliability** is the probability that equipment performs its function for a stated time. Maintenance aims to raise reliability and shorten the time to repair. Four numbers describe it."
    },
    {
     "t": "table",
     "head": [
      "Measure",
      "Meaning",
      "Formula"
     ],
     "rows": [
      [
       "MTBF (mean time between failures)",
       "Average operating time between failures of a repairable item",
       "Total operating time ÷ number of failures"
      ],
      [
       "MTTR (mean time to repair)",
       "Average time to restore the item after a failure",
       "Total repair time ÷ number of failures"
      ],
      [
       "Failure rate λ",
       "Failures per unit time (assuming it is constant)",
       "λ = 1 ÷ MTBF"
      ],
      [
       "Availability A",
       "The fraction of time the equipment is ready to work",
       "A = MTBF ÷ (MTBF + MTTR)"
      ]
     ],
     "cap": "Reliability measures"
    },
    {
     "t": "worked",
     "title": "Worked example: MTBF and availability",
     "problem": "A packaging machine ran for 2000 operating hours and failed 4 times. The repairs took a total of 20 hours. Find MTBF, MTTR, availability, and the probability that it runs for 100 hours without failure.",
     "steps": [
      "MTBF = 2000 ÷ 4 = 500 hours.",
      "MTTR = 20 ÷ 4 = 5 hours.",
      "Availability = 500 ÷ (500 + 5) = 0.990 = 99.0 %.",
      "Failure rate λ = 1 ÷ 500 = 0.002 per hour. The reliability over time t is R = e^(−λt), so R(100 h) = e^(−0.2) = 0.819."
     ],
     "answer": "MTBF 500 h, MTTR 5 h, availability 99.0 %. There is an 82 % chance of running 100 hours with no failure. Improving MTTR (spares at hand, good diagnostics) raises availability as much as improving MTBF."
    },
    {
     "t": "p",
     "x": "For the constant failure rate, **MTBF is not the lifetime**. A machine with an MTBF of 500 h will, in a 500 h run, have only about a 37 % chance (e⁻¹) of surviving without failure. The figure is an average of random failures."
    },
    {
     "t": "h",
     "x": "The bathtub curve"
    },
    {
     "t": "p",
     "x": "For many items the failure rate against time has three phases."
    },
    {
     "t": "svg",
     "alt": "The bathtub curve: failure rate is high early in life, falls to a low constant level during useful life, and rises again as the equipment wears out.",
     "cap": "Figure 2: the bathtub curve of failure rate",
     "svg": "<svg viewBox=\"0 0 640 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<line x1=\"70\" y1=\"230\" x2=\"580\" y2=\"230\" class=\"ln\"/><line x1=\"70\" y1=\"230\" x2=\"70\" y2=\"50\" class=\"ln\"/>\n<text x=\"330\" y=\"256\" class=\"txs txc\">operating life of the machine</text>\n<text x=\"8\" y=\"140\" class=\"txs txm\">failure</text><text x=\"8\" y=\"154\" class=\"txs txm\">rate</text>\n<line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"230\" class=\"ln1 lnm dash\"/><line x1=\"480\" y1=\"50\" x2=\"480\" y2=\"230\" class=\"ln1 lnm dash\"/>\n<polyline points=\"70.0,77.0 75.0,91.2 80.0,103.9 85.0,115.3 90.0,125.4 95.0,134.5 100.0,142.7 105.0,150.0 110.0,156.5 115.0,162.3 120.0,167.6 125.0,172.2 130.0,176.4 135.0,180.1 140.0,183.5 145.0,186.5 150.0,189.2 155.0,191.6 160.0,193.7 165.0,195.6 170.0,197.4 175.0,198.9 180.0,200.3 185.0,201.5 190.0,202.6 195.0,203.6 200.0,204.5 205.0,205.2 210.0,205.9 215.0,206.6 220.0,207.1 225.0,207.6 230.0,208.1 235.0,208.5 240.0,208.8 245.0,209.1 250.0,209.4 255.0,209.7 260.0,209.9 265.0,210.1 270.0,210.2 275.0,210.4 280.0,210.5 285.0,210.6 290.0,210.7 295.0,210.8 300.0,210.9 305.0,210.9 310.0,210.9 315.0,210.9 320.0,211.0 325.0,210.9 330.0,210.9 335.0,210.9 340.0,210.9 345.0,210.8 350.0,210.7 355.0,210.6 360.0,210.5 365.0,210.4 370.0,210.2 375.0,210.1 380.0,209.9 385.0,209.7 390.0,209.4 395.0,209.1 400.0,208.8 405.0,208.5 410.0,208.1 415.0,207.6 420.0,207.1 425.0,206.6 430.0,205.9 435.0,205.2 440.0,204.5 445.0,203.6 450.0,202.6 455.0,201.5 460.0,200.3 465.0,198.9 470.0,197.4 475.0,195.6 480.0,193.7 485.0,191.6 490.0,189.2 495.0,186.5 500.0,183.5 505.0,180.1 510.0,176.4 515.0,172.2 520.0,167.6 525.0,162.3 530.0,156.5 535.0,150.0 540.0,142.7 545.0,134.5 550.0,125.4 555.0,115.3 560.0,103.9 565.0,91.2 570.0,77.0\" class=\"lnb\"/>\n<text x=\"115\" y=\"46\" class=\"tx txb txc\">Early life</text><text x=\"115\" y=\"64\" class=\"txs txc\">(infant</text><text x=\"115\" y=\"78\" class=\"txs txc\">mortality)</text>\n<text x=\"320\" y=\"130\" class=\"tx txb txc\">Useful life</text><text x=\"320\" y=\"148\" class=\"txs txc\">random failures,</text><text x=\"320\" y=\"162\" class=\"txs txc\">constant rate</text>\n<text x=\"525\" y=\"46\" class=\"tx txb txc\">Wear-out</text><text x=\"525\" y=\"64\" class=\"txs txc\">rate rises</text><text x=\"525\" y=\"78\" class=\"txs txc\">with age</text>\n<text x=\"115\" y=\"282\" class=\"txs txc\">burn-in, fix</text><text x=\"115\" y=\"296\" class=\"txs txc\">install errors</text>\n<text x=\"320\" y=\"282\" class=\"txs txc\">preventive and</text><text x=\"320\" y=\"296\" class=\"txs txc\">condition-based work</text>\n<text x=\"525\" y=\"282\" class=\"txs txc\">overhaul or</text><text x=\"525\" y=\"296\" class=\"txs txc\">replace in time</text>\n</svg>"
    },
    {
     "t": "ul",
     "items": [
      "**Early life (infant mortality):** faults from poor installation, wrong settings, manufacturing defects and loose connections. Test and burn in new equipment and check after the first weeks.",
      "**Useful life:** a low, roughly constant rate of random failures. MTBF applies here. Condition-based maintenance suits this phase.",
      "**Wear-out:** failures increase as parts age (bearings, brushes, seals, capacitors). Replace parts before this phase starts, based on the maker's life data or on condition."
     ]
    },
    {
     "t": "h",
     "x": "Comparing maintenance costs"
    },
    {
     "t": "worked",
     "title": "Worked example: preventive replacement or run to failure?",
     "problem": "A conveyor bearing fails about 3 times a year if left to run to failure. Each failure causes 3 hours of lost production at 500 cost units per hour, plus 300 units for the bearing and repair. Planned replacement costs 300 units and 1 hour of production loss (500 units) and would be done every 4 months. Which costs less per year?",
     "steps": [
      "Run to failure: 3 × (3 × 500 + 300) = 3 × 1800 = 5400 units.",
      "Preventive replacement: 3 × (300 + 1 × 500) = 3 × 800 = 2400 units.",
      "Saving = 5400 − 2400 = 3000 units per year."
     ],
     "answer": "Planned replacement costs 2400 units against 5400 for run-to-failure, saving 3000 units a year. The saving depends on the cost of downtime, which is why critical machines justify preventive work and cheap, non-critical items may not."
    },
    {
     "t": "key",
     "items": [
      "MTBF = operating time ÷ failures; MTTR = repair time ÷ failures.",
      "Availability = MTBF ÷ (MTBF + MTTR); failure rate = 1 ÷ MTBF.",
      "Reliability over time t is e^(−λt); MTBF is an average, not a guaranteed life.",
      "Bathtub curve: early failures, useful life, then wear-out.",
      "Compare the cost of downtime with the cost of prevention to decide the strategy."
     ]
    }
   ]
  },
  {
   "id": "m19-l5",
   "title": "Root causes, records and responsible housekeeping",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "Repairing a fault removes the symptom. **Root-cause analysis (RCA)** finds out why it happened so that it does not return. A fuse replaced three times without finding why it blew is a symptom repair."
    },
    {
     "t": "h",
     "x": "The 5-whys"
    },
    {
     "t": "p",
     "x": "Ask 'why?' repeatedly until you reach a cause that you can act on, usually after about five questions. Example: the conveyor motor tripped. Why? The overload relay operated. Why? The motor current was high. Why? The gearbox bearing was seizing. Why? It was dry of grease. Why? The greasing job was not on the maintenance plan. The root cause is the **missing task in the plan**, not the bearing."
    },
    {
     "t": "h",
     "x": "The fishbone (cause-and-effect) diagram"
    },
    {
     "t": "p",
     "x": "A fishbone diagram groups possible causes by category so that a team does not miss an area. Typical categories are the **six Ms**: Man (people), Machine, Method, Materials, Measurement and Environment."
    },
    {
     "t": "svg",
     "alt": "A fishbone diagram. The effect, a motor that trips often, is at the head. Six bones are labelled Man, Machine, Method, Materials, Measurement and Environment, each with two example causes.",
     "cap": "Figure 3: a fishbone diagram for a motor that trips often",
     "svg": "<svg viewBox=\"0 0 680 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<line x1=\"30\" y1=\"140\" x2=\"520\" y2=\"140\" class=\"ln lnb\"/>\n<rect x=\"520\" y=\"110\" width=\"140\" height=\"60\" class=\"ln flr\"/><text x=\"590\" y=\"136\" class=\"tx txb txc\">Effect</text><text x=\"590\" y=\"154\" class=\"txs txc\">motor trips often</text>\n<line x1=\"130\" y1=\"60\" x2=\"180\" y2=\"140\" class=\"ln\"/><text x=\"130\" y=\"48\" class=\"tx txb txc\">Man</text><text x=\"144\" y=\"92\" class=\"txs txe\">no training</text><text x=\"160.25\" y=\"118\" class=\"txs txe\">wrong settings</text>\n<line x1=\"280\" y1=\"60\" x2=\"330\" y2=\"140\" class=\"ln\"/><text x=\"280\" y=\"48\" class=\"tx txb txc\">Machine</text><text x=\"294\" y=\"92\" class=\"txs txe\">worn bearing</text><text x=\"310.25\" y=\"118\" class=\"txs txe\">loose terminal</text>\n<line x1=\"430\" y1=\"60\" x2=\"480\" y2=\"140\" class=\"ln\"/><text x=\"430\" y=\"48\" class=\"tx txb txc\">Method</text><text x=\"444\" y=\"92\" class=\"txs txe\">no PM schedule</text><text x=\"460.25\" y=\"118\" class=\"txs txe\">skipped checks</text>\n<line x1=\"130\" y1=\"220\" x2=\"180\" y2=\"140\" class=\"ln\"/><text x=\"130\" y=\"240\" class=\"tx txb txc\">Materials</text><text x=\"142.75\" y=\"190\" class=\"txs txe\">wrong spare</text><text x=\"159\" y=\"164\" class=\"txs txe\">dirty oil</text>\n<line x1=\"280\" y1=\"220\" x2=\"330\" y2=\"140\" class=\"ln\"/><text x=\"280\" y=\"240\" class=\"tx txb txc\">Measurement</text><text x=\"292.75\" y=\"190\" class=\"txs txe\">meter not calibrated</text><text x=\"309\" y=\"164\" class=\"txs txe\">wrong setpoint</text>\n<line x1=\"430\" y1=\"220\" x2=\"480\" y2=\"140\" class=\"ln\"/><text x=\"430\" y=\"240\" class=\"tx txb txc\">Environment</text><text x=\"442.75\" y=\"190\" class=\"txs txe\">heat and dust</text><text x=\"459\" y=\"164\" class=\"txs txe\">moisture</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "Use the diagram to list causes, then collect evidence for each (measure, inspect, check records) and cross out those that are disproved. Do not accept the first likely cause without testing it. Finish with a **corrective action** (fix this fault) and a **preventive action** (stop it happening elsewhere), with a person and a date for each."
    },
    {
     "t": "h",
     "x": "Records and documentation"
    },
    {
     "t": "ul",
     "items": [
      "Keep the **machine history**: faults, causes, repairs, parts and times. Trends show chronic faults and wear-out.",
      "Update **drawings, programs and settings** after any change, and save a backup of the PLC, HMI and drive parameters (Module 15).",
      "Keep **calibration records** and test results (insulation, earth loop, vibration) with dates.",
      "Write clear **shift handover notes** about the state of the machine and any temporary measures."
     ]
    },
    {
     "t": "h",
     "x": "Environmental housekeeping (ISO 14001)"
    },
    {
     "t": "p",
     "x": "An environmental management system such as **ISO 14001** expects waste to be controlled. The technician's part is simple, and the rules are the same everywhere:"
    },
    {
     "t": "ul",
     "items": [
      "**Waste oil and hydraulic fluid:** drain into closed, labelled containers, use drip trays and spill kits, and hand it to an approved collector. Never pour oil on the ground or into drains.",
      "**Batteries** (lead-acid, lithium, PLC backup batteries): store them separately in a dry place and send for recycling; never put them in the general waste or burn them.",
      "**Electronic waste (e-waste):** old PLC cards, drives, circuit boards and cables contain metals and hazardous substances. Keep them apart from general rubbish and send them to a recycler.",
      "**Rags, filters and cartridges** soaked in oil or chemicals are hazardous waste. Keep them in labelled containers.",
      "Clean up after the job: a tidy, dry, well-lit workplace prevents falls, fires and lost parts (ISO 45001 for health and safety)."
     ]
    },
    {
     "t": "ghana",
     "x": "Heat, dust, humidity and mains voltage fluctuations or interruptions are common concerns for installed equipment. Fit surge protection on supplies and signal lines, consider voltage-protection or UPS equipment for control systems, clean cabinet filters regularly and check for condensation and insect or rodent entry."
    },
    {
     "t": "key",
     "items": [
      "Root-cause analysis removes the cause, not just the symptom.",
      "The 5-whys and fishbone diagrams guide the search; test each cause with evidence.",
      "Record faults, parts, calibrations and changes, and back up programs and settings.",
      "Handle waste oil, batteries and e-waste through approved collection and keep spill kits ready.",
      "A tidy, clean workplace is part of safe and reliable maintenance."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m19-q1",
   "q": "A cheap lamp in a corridor is replaced only after it fails. Which strategy is this?",
   "opts": [
    "Predictive maintenance",
    "Condition-based maintenance",
    "Breakdown (run to failure)",
    "Reliability-centred redesign"
   ],
   "a": 2,
   "why": "Repairing or replacing only after failure is breakdown maintenance. It suits cheap, non-critical items that are easy to replace."
  },
  {
   "id": "m19-q2",
   "q": "What is the main idea of TPM?",
   "opts": [
    "Only the technicians look after the machines",
    "Operators share care with technicians",
    "Machines are replaced every single year",
    "All maintenance is outsourced to the maker"
   ],
   "a": 1,
   "why": "TPM involves everyone, with operators doing cleaning, inspection and basic checks so that problems are noticed early."
  },
  {
   "id": "m19-q3",
   "q": "Which machine's spares should be held in stock as the highest priority?",
   "opts": [
    "A critical machine with long-lead parts",
    "A spare machine that is hardly ever used",
    "A minor machine that is easily replaced",
    "A machine that is due to be scrapped soon"
   ],
   "a": 0,
   "why": "Critical equipment that stops production, with parts that take a long time to obtain, needs spares on the shelf."
  },
  {
   "id": "m19-q4",
   "q": "What is the first step of the structured fault-finding method?",
   "opts": [
    "Replace the most expensive part first",
    "Collect information on the fault",
    "Reset the system and just hope",
    "Rewrite the whole PLC program"
   ],
   "a": 1,
   "why": "Start by asking the operator, reading alarms and finding out what changed. Good information makes every later step faster."
  },
  {
   "id": "m19-q5",
   "q": "A fault lies somewhere among 16 stages in a signal chain. About how many half-split tests are needed?",
   "opts": [
    "2",
    "8",
    "4",
    "16"
   ],
   "a": 2,
   "why": "Each test halves the suspects. log₂(16) = 4 tests."
  },
  {
   "id": "m19-q6",
   "q": "In a half-split test you find the signal is good at the middle of the chain. Where is the fault?",
   "opts": [
    "In the first half, before the test point",
    "Nowhere; the circuit is healthy",
    "In the test instrument",
    "In the second half"
   ],
   "a": 3,
   "why": "If the signal is good at the middle, everything before that point works, so the fault lies after it."
  },
  {
   "id": "m19-q7",
   "q": "Before performing an insulation resistance test on a motor circuit, what must be done?",
   "opts": [
    "Keep the circuit live for comparison",
    "Isolate, prove dead, disconnect drives",
    "Use a 5000 V test whatever the rating is",
    "Switch the motor on at half speed first"
   ],
   "a": 1,
   "why": "The circuit must be isolated and dead, and electronics such as drives must be disconnected, because the DC test voltage can destroy them."
  },
  {
   "id": "m19-q8",
   "q": "What does a thermal camera most usefully show on a panel?",
   "opts": [
    "The insulation resistance of the cable",
    "The supply frequency in hertz",
    "The software version number shown",
    "A hot spot at a loose joint"
   ],
   "a": 3,
   "why": "A loose connection has a higher resistance and gets hotter than its neighbours, so a thermal image shows it as a hot spot."
  },
  {
   "id": "m19-q9",
   "q": "A machine ran for 2000 h and failed 4 times. What is its MTBF?",
   "opts": [
    "500 hours",
    "50 hours",
    "8000 hours",
    "5 hours"
   ],
   "a": 0,
   "why": "MTBF = total operating time ÷ number of failures = 2000 ÷ 4 = 500 hours."
  },
  {
   "id": "m19-q10",
   "q": "MTBF is 500 h and MTTR is 5 h. What is the availability?",
   "opts": [
    "About 95 %",
    "About 50 %",
    "About 99.9 %",
    "99.0 %"
   ],
   "a": 3,
   "why": "A = MTBF ÷ (MTBF + MTTR) = 500 ÷ 505 = 0.990, or 99.0 %."
  },
  {
   "id": "m19-q11",
   "q": "Which phase of the bathtub curve has a rising failure rate?",
   "opts": [
    "Early life",
    "Useful life",
    "Wear-out",
    "Commissioning"
   ],
   "a": 2,
   "why": "In the wear-out phase parts age and the failure rate increases. Replace them before this phase."
  },
  {
   "id": "m19-q12",
   "q": "What is the aim of a 5-whys analysis?",
   "opts": [
    "To find a person to blame for it",
    "To find a root cause to act on",
    "To shorten the repair time only",
    "To list all the spare parts held"
   ],
   "a": 1,
   "why": "Asking why repeatedly moves from the symptom to the underlying cause, such as a missing task in the maintenance plan."
  },
  {
   "id": "m19-q13",
   "q": "A conveyor bearing costs 5400 units a year to run to failure, or 2400 units a year with planned replacement. What is the saving?",
   "opts": [
    "2400 units (planned cost)",
    "5400 units (breakdown cost)",
    "3000 units",
    "7800 units (both added)"
   ],
   "a": 2,
   "why": "5400 − 2400 = 3000 units saved each year by planned replacement."
  },
  {
   "id": "m19-q14",
   "q": "Where should used hydraulic oil from a machine be put for disposal?",
   "opts": [
    "A closed, labelled container",
    "Pour it on the ground away from the machine",
    "Flush it into the drain with water",
    "Burn it with the general rubbish"
   ],
   "a": 0,
   "why": "Waste oil must be collected in closed, labelled containers and handed to an approved collector, never poured on the ground or into drains."
  }
 ],
 "cards": [
  {
   "f": "Name five maintenance strategies.",
   "b": "Breakdown, preventive, condition-based, predictive and improvement (design out)."
  },
  {
   "f": "What is TPM?",
   "b": "Total Productive Maintenance: operators and technicians share the care of the equipment."
  },
  {
   "f": "What is a CMMS?",
   "b": "A computerised maintenance management system holding work orders, schedules, assets, spares and history."
  },
  {
   "f": "How do you decide which spares to hold?",
   "b": "By criticality: critical machines with long-lead parts first."
  },
  {
   "f": "List the steps of the fault-finding method.",
   "b": "Collect information, understand, hypothesise, test, isolate and repair, verify, document."
  },
  {
   "f": "What is the half-split method?",
   "b": "Test in the middle of a chain to find which half holds the fault, then repeat."
  },
  {
   "f": "How many half-split tests for N stages?",
   "b": "About log₂(N), rounded up."
  },
  {
   "f": "Which instrument finds hot connections?",
   "b": "A thermal (infrared) camera."
  },
  {
   "f": "Insulation test basics?",
   "b": "Isolate and prove dead, disconnect electronics, normally 500 V DC, at least 1 MΩ, watch the trend."
  },
  {
   "f": "MTBF and MTTR formulas?",
   "b": "MTBF = operating time ÷ failures; MTTR = repair time ÷ failures."
  },
  {
   "f": "Availability formula?",
   "b": "A = MTBF ÷ (MTBF + MTTR)."
  },
  {
   "f": "Reliability over time t?",
   "b": "R = e^(−λt) with λ = 1 ÷ MTBF."
  },
  {
   "f": "Three phases of the bathtub curve?",
   "b": "Early life, useful life and wear-out."
  },
  {
   "f": "What are the six Ms in a fishbone diagram?",
   "b": "Man, Machine, Method, Materials, Measurement and Environment."
  }
 ],
 "terms": [
  {
   "t": "Preventive maintenance",
   "d": "Maintenance done at planned intervals to reduce the chance of failure."
  },
  {
   "t": "Condition-based maintenance",
   "d": "Maintenance triggered by measured condition rather than by time."
  },
  {
   "t": "TPM",
   "d": "Total Productive Maintenance, a method that involves operators in equipment care."
  },
  {
   "t": "CMMS",
   "d": "Computerised system for managing maintenance work, assets and spares."
  },
  {
   "t": "Half-split",
   "d": "A fault-finding method that tests the middle of a chain to halve the search area each time."
  },
  {
   "t": "MTBF",
   "d": "Mean time between failures of a repairable item."
  },
  {
   "t": "MTTR",
   "d": "Mean time to repair, the average time to restore an item after failure."
  },
  {
   "t": "Availability",
   "d": "The fraction of time that equipment is ready to work."
  },
  {
   "t": "Bathtub curve",
   "d": "A plot of failure rate over life showing early failures, a constant period and wear-out."
  },
  {
   "t": "Root-cause analysis",
   "d": "A structured search for the underlying reason a fault occurred."
  },
  {
   "t": "Insulation resistance",
   "d": "The resistance of insulation to earth, measured with a DC test voltage."
  }
 ],
 "formulas": [
  {
   "n": "MTBF",
   "f": "MTBF = operating time ÷ number of failures",
   "v": "Repairable items"
  },
  {
   "n": "MTTR",
   "f": "MTTR = repair time ÷ number of failures",
   "v": "Same time unit as MTBF"
  },
  {
   "n": "Availability",
   "f": "A = MTBF ÷ (MTBF + MTTR)",
   "v": "Multiply by 100 for %"
  },
  {
   "n": "Failure rate and reliability",
   "f": "λ = 1 ÷ MTBF; R = e^(−λt)",
   "v": "Constant failure rate only"
  },
  {
   "n": "Half-split tests",
   "f": "tests ≈ log₂(N)",
   "v": "N stages"
  }
 ]
});
