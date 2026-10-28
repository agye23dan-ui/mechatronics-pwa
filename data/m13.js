window.MECH.register({
 "id": "m13",
 "n": 13,
 "title": "Hydraulic Systems",
 "short": "Hydraulic Systems",
 "group": "Fluid Power",
 "blurb": "Pressure, flow, force and power in oil hydraulics: fluids and filtration, pumps, valves, cylinders, circuits, fault finding and safe working under ISO 4413.",
 "outcomes": [
  "State Pascal's law and use p = F ÷ A, Q = A × v and P = p × Q",
  "Calculate cylinder force and speed for both strokes",
  "Select hydraulic oil by viscosity grade and read an ISO 4406 cleanliness code",
  "Describe pumps, motors and cylinders and calculate pump flow, power and motor torque",
  "Identify valves from ISO 1219-1 symbols and read a basic hydraulic circuit",
  "Explain the choice of 4/3 valve centre type",
  "Fault find common hydraulic problems from symptoms",
  "Work safely on hydraulic systems following ISO 4413"
 ],
 "lessons": [
  {
   "id": "m13-l1",
   "title": "Pressure, flow, force and power",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "**Hydraulics** uses a liquid, normally mineral oil, to transmit power. Oil is almost incompressible, so a small pump can move very large loads through pipes and hoses, and the movement is smooth, controllable and easily reversed. Hydraulics is found on excavators, presses, lifts, injection moulding machines and hydraulic power units in factories."
    },
    {
     "t": "h",
     "x": "Pascal's law"
    },
    {
     "t": "p",
     "x": "**Pascal's law** states that pressure applied to a confined fluid is transmitted equally in all directions. Pressure is force divided by area. A small piston pushed with a small force creates the same pressure under a large piston, which then gives a large force, although it moves a shorter distance."
    },
    {
     "t": "formula",
     "x": "p = F ÷ A",
     "where": "p pressure (Pa), F force (N), A area (m²). 1 bar = 100 000 Pa = 0.1 MPa. 10 bar acting on 1 cm² gives 100 N."
    },
    {
     "t": "table",
     "head": [
      "Quantity",
      "Symbol",
      "Unit",
      "Useful conversion"
     ],
     "rows": [
      [
       "Pressure",
       "p",
       "pascal (Pa), bar",
       "1 bar = 100 kPa; 1 MPa = 10 bar"
      ],
      [
       "Force",
       "F",
       "newton (N)",
       "1 kN = 1000 N"
      ],
      [
       "Area",
       "A",
       "m², cm²",
       "1 m² = 10 000 cm²"
      ],
      [
       "Flow rate",
       "Q",
       "m³/s, L/min",
       "1 L/min = 1.667 × 10⁻⁵ m³/s"
      ],
      [
       "Power",
       "P",
       "watt (W), kW",
       "P (kW) = p (bar) × Q (L/min) ÷ 600"
      ]
     ],
     "cap": "Hydraulic quantities and units"
    },
    {
     "t": "h",
     "x": "Cylinders: force and speed"
    },
    {
     "t": "p",
     "x": "A **double-acting cylinder** is driven by oil in both directions. When extending, oil enters the cap side and acts on the full piston area **A1**. When retracting, oil acts on the rod-side annulus **A2 = A1 − rod area**, which is smaller. So the force on retract is lower, and, for the same flow, the speed is higher."
    },
    {
     "t": "svg",
     "alt": "A double acting cylinder with the cap side on the left of the piston and the rod side on the right. Pressure arrows show it acting on the full bore area on the cap side and on the smaller annulus area on the rod side.",
     "cap": "Figure 1: cylinder areas: full bore A1 on extend, annulus A2 on retract",
     "svg": "<svg viewBox=\"0 0 600 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m13-f1-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<rect x=\"80\" y=\"100\" width=\"300\" height=\"70\" class=\"ln fl\"/>\n<rect x=\"228\" y=\"100\" width=\"14\" height=\"70\" class=\"ln flb\"/>\n<rect x=\"242\" y=\"128\" width=\"258\" height=\"14\" class=\"ln fla\"/>\n<text x=\"154\" y=\"140\" class=\"tx txb txc\">Cap side</text>\n<text x=\"311\" y=\"120\" class=\"tx txb txc\">Rod side</text>\n<line x1=\"150\" y1=\"72\" x2=\"224\" y2=\"72\" class=\"lnr ln1\" marker-end=\"url(#m13-f1-arr)\"/>\n<text x=\"224\" y=\"62\" class=\"txs txe\">p acts on A1 (full bore)</text>\n<line x1=\"378\" y1=\"72\" x2=\"246\" y2=\"72\" class=\"lnr ln1\" marker-end=\"url(#m13-f1-arr)\"/>\n<text x=\"246\" y=\"62\" class=\"txs\">p acts on A2 (A1 minus rod)</text>\n<text x=\"300\" y=\"206\" class=\"tx txb txc\">Extend: F = p × A1, v = Q ÷ A1</text>\n<text x=\"300\" y=\"226\" class=\"tx txb txc\">Retract: F = p × A2, v = Q ÷ A2</text>\n<text x=\"300\" y=\"256\" class=\"txs txm txc\">The rod takes up area on the rod side, so retraction is faster but weaker.</text>\n<text x=\"300\" y=\"274\" class=\"txs txm txc\">Compare both strokes at the same pressure p and flow Q.</text>\n</svg>"
    },
    {
     "t": "formula",
     "x": "F = p × A and v = Q ÷ A",
     "where": "Use SI units: pressure in Pa, area in m², flow in m³/s gives force in N and speed in m/s."
    },
    {
     "t": "worked",
     "title": "Worked example: cylinder force and speed",
     "problem": "A cylinder has an 80 mm bore and a 45 mm rod. The system pressure is 100 bar and the pump flow to the cylinder is 24 L/min. Find the force and speed in both directions.",
     "steps": [
      "Pressure = 100 bar = 10 × 10⁶ Pa. Flow = 24 L/min = 24 × 10⁻³ ÷ 60 = 4.0 × 10⁻⁴ m³/s.",
      "A1 = π ÷ 4 × 0.08² = 5.027 × 10⁻³ m². Rod area = π ÷ 4 × 0.045² = 1.590 × 10⁻³ m². A2 = 5.027 − 1.590 = 3.437 × 10⁻³ m².",
      "Extend: F = 10 × 10⁶ × 5.027 × 10⁻³ = 50 270 N = 50.3 kN. v = 4.0 × 10⁻⁴ ÷ 5.027 × 10⁻³ = 0.0796 m/s = 79.6 mm/s.",
      "Retract: F = 10 × 10⁶ × 3.437 × 10⁻³ = 34 370 N = 34.4 kN. v = 4.0 × 10⁻⁴ ÷ 3.437 × 10⁻³ = 0.1164 m/s = 116 mm/s."
     ],
     "answer": "Extend: 50.3 kN at 79.6 mm/s. Retract: 34.4 kN at 116 mm/s. The effective force is slightly lower in practice because of friction and back pressure."
    },
    {
     "t": "worked",
     "title": "Worked example: hydraulic power",
     "problem": "A pump delivers 34 L/min at 100 bar. What hydraulic power does the oil carry, and what motor is needed if the pump's overall efficiency is 85 %?",
     "steps": [
      "P(hydraulic) = p × Q ÷ 600 = 100 × 34 ÷ 600 = 5.67 kW.",
      "Input power = 5.67 ÷ 0.85 = 6.67 kW.",
      "Choose the next standard motor size above this value: 7.5 kW."
     ],
     "answer": "The oil carries 5.67 kW; a 7.5 kW motor is the next standard size above the 6.67 kW needed."
    },
    {
     "t": "key",
     "items": [
      "Pressure = force ÷ area; pressure acts equally in all directions in a confined fluid.",
      "1 bar = 100 kPa. Hydraulic power (kW) = bar × L/min ÷ 600.",
      "Extending acts on the full bore A1; retracting acts on the smaller annulus A2.",
      "Force = p × A; speed = Q ÷ A. Smaller area means higher speed and lower force.",
      "Pump motor power is hydraulic power divided by overall efficiency."
     ]
    }
   ]
  },
  {
   "id": "m13-l2",
   "title": "Hydraulic fluid, reservoir and filtration",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "The oil is the most important component. It transmits power, lubricates, cools, seals small clearances and carries contamination to the filter. A large proportion of hydraulic failures come from wrong, hot or dirty oil."
    },
    {
     "t": "h",
     "x": "Viscosity"
    },
    {
     "t": "p",
     "x": "**Viscosity** is a fluid's resistance to flow. Oil that is too thin leaks internally and wears parts; oil that is too thick causes high suction losses, cavitation and sluggish operation. Viscosity falls as oil gets hotter, so the right grade must work across the operating temperature range. Industrial oils are classified by **ISO viscosity grade (ISO 3448)**, which is the mean kinematic viscosity in mm²/s (cSt) at 40 °C: ISO VG 32, 46 and 68 are the most common. Most systems run best with oil between about 25 and 50 mm²/s at operating temperature, and the pump maker states the limits."
    },
    {
     "t": "p",
     "x": "Oil types are classified in **ISO 6743**. The commonest is **HM**, a mineral oil with anti-wear additives (also written HLP in older documents). Fire-resistant fluids such as water glycols are used near furnaces and in mines. Never mix different fluid types, and never top up with a different grade without confirming compatibility."
    },
    {
     "t": "h",
     "x": "Cleanliness: ISO 4406"
    },
    {
     "t": "p",
     "x": "Particles in oil scratch surfaces, jam valve spools and wear pumps. **ISO 4406** reports the count of particles per millilitre in three size ranges (4 µm, 6 µm and 14 µm and above) as three range numbers, for example **18/16/13**. Each step up in a range number doubles the count."
    },
    {
     "t": "table",
     "head": [
      "Range number",
      "Particles per mL"
     ],
     "rows": [
      [
       "13",
       "40 to 80"
      ],
      [
       "14",
       "80 to 160"
      ],
      [
       "15",
       "160 to 320"
      ],
      [
       "16",
       "320 to 640"
      ],
      [
       "17",
       "640 to 1300"
      ],
      [
       "18",
       "1300 to 2500"
      ],
      [
       "19",
       "2500 to 5000"
      ]
     ],
     "cap": "Selected ISO 4406 range numbers"
    },
    {
     "t": "p",
     "x": "Servo and proportional valves usually need oil cleaner than 17/15/12 or better, and ordinary industrial systems often target around 19/17/14. New oil is not necessarily clean enough to use: always filter oil as it goes in."
    },
    {
     "t": "h",
     "x": "Reservoir, filters and coolers"
    },
    {
     "t": "ul",
     "items": [
      "The **reservoir (tank)** stores oil, lets air and water separate, dissipates heat and settles dirt. A common rule is to size it at three to five times the pump flow per minute. Baffles separate the suction and return lines, and the return pipe ends below the oil level.",
      "A **suction strainer** protects the pump from large particles; fine filtering on the suction side is avoided because it can starve the pump.",
      "**Pressure filters** protect valves; **return filters** catch what the system sheds; **offline (kidney-loop) filters** clean continuously. Filters have a bypass valve and an indicator that shows when the element is blocked.",
      "A **breather** with its own filter lets air in and out as the level changes. Keep it fitted and clean.",
      "Oil should run at about **40 to 55 °C** and not above about 60 to 65 °C; a cooler (air or water) and a temperature switch protect the system. Heat is lost power, usually wasted across a relief or throttle valve."
     ]
    },
    {
     "t": "tip",
     "x": "Take an oil sample at operating temperature from a sampling point, not from the bottom of the tank. Send it for a particle count and water content analysis; this is cheaper than replacing a pump."
    },
    {
     "t": "key",
     "items": [
      "Oil transmits power, lubricates, cools, seals and carries contamination to the filter.",
      "ISO VG gives viscosity in mm²/s at 40 °C; HM is anti-wear mineral oil.",
      "ISO 4406 gives three range numbers; each step up doubles the particle count.",
      "Keep oil temperature around 40 to 55 °C; heat means wasted energy.",
      "Never mix fluids; keep the breather and filters in good condition."
     ]
    }
   ]
  },
  {
   "id": "m13-l3",
   "title": "Pumps, motors and cylinders",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "A hydraulic **pump** does not create pressure; it creates flow. Pressure builds only when the flow meets resistance from the load, a valve or a restriction. The **displacement** is the volume of oil delivered per revolution (cm³/rev). A **fixed-displacement** pump delivers the same volume each turn, while a **variable-displacement** pump can change it to match the demand, saving energy."
    },
    {
     "t": "table",
     "head": [
      "Pump type",
      "Principle",
      "Pressure range",
      "Notes"
     ],
     "rows": [
      [
       "External gear",
       "Two meshing gears carry oil round the casing",
       "Up to about 250 bar",
       "Simple, rugged and cheap; fixed displacement; noisy"
      ],
      [
       "Vane",
       "A rotor with sliding vanes in an eccentric ring",
       "Up to about 175 to 210 bar",
       "Quiet; can be variable; sensitive to dirt"
      ],
      [
       "Axial piston",
       "Pistons in a rotating barrel pushed by a swash plate",
       "Up to 350 bar and higher",
       "Efficient, high pressure; can be variable; expensive"
      ],
      [
       "Radial piston",
       "Pistons arranged round a cam or eccentric",
       "Up to 700 bar",
       "Very high pressure; low-speed motors"
      ]
     ],
     "cap": "Common hydraulic pumps"
    },
    {
     "t": "formula",
     "x": "Q = V × n × ηv ÷ 1000",
     "where": "Q flow (L/min), V displacement (cm³/rev), n speed (rev/min), ηv volumetric efficiency (about 0.9 to 0.97). The ÷ 1000 converts cm³ to litres."
    },
    {
     "t": "worked",
     "title": "Worked example: pump flow",
     "problem": "A fixed-displacement pump has a displacement of 25 cm³/rev and is driven at 1450 rev/min. Its volumetric efficiency is 0.95. What is the delivered flow?",
     "steps": [
      "Theoretical flow = 25 × 1450 = 36 250 cm³/min = 36.25 L/min.",
      "Actual flow = 36.25 × 0.95 = 34.4 L/min."
     ],
     "answer": "The pump delivers about 34.4 L/min. This is the flow used in the previous lesson's power calculation."
    },
    {
     "t": "h",
     "x": "Hydraulic motors"
    },
    {
     "t": "p",
     "x": "A **hydraulic motor** is a pump in reverse: oil flow turns the shaft. Speed depends on flow and displacement; torque depends on the pressure difference and displacement."
    },
    {
     "t": "formula",
     "x": "T = Δp × V × ηm ÷ 62.8   and   n = Q × 1000 × ηv ÷ V",
     "where": "T torque (N·m), Δp pressure difference (bar), V displacement (cm³/rev), ηm mechanical efficiency; n speed (rev/min), Q flow (L/min)."
    },
    {
     "t": "worked",
     "title": "Worked example: motor torque and speed",
     "problem": "A hydraulic motor of 40 cm³/rev runs on a pressure difference of 150 bar and a flow of 34 L/min. The mechanical efficiency is 0.90 and the volumetric efficiency is 0.95. Find the torque and speed.",
     "steps": [
      "T = 150 × 40 × 0.90 ÷ 62.8 = 5400 ÷ 62.8 = 86.0 N·m.",
      "n = 34 × 1000 × 0.95 ÷ 40 = 32 300 ÷ 40 = 807 rev/min."
     ],
     "answer": "Torque is about 86 N·m at a speed of about 807 rev/min."
    },
    {
     "t": "h",
     "x": "Cylinders"
    },
    {
     "t": "ul",
     "items": [
      "**Single-acting:** oil pushes in one direction; a spring or the load returns it. Used in jacks and lifts.",
      "**Double-acting:** oil drives both strokes (Lesson 1). The most common type.",
      "**Telescopic:** several nested stages give a long stroke from a short body, for tipper lorries.",
      "**Cushioning** at the ends slows the piston before it reaches the cover, reducing shock.",
      "Check the rod for scores and rust, since a damaged rod destroys the seal, and keep the mounting aligned to avoid side loads."
     ]
    },
    {
     "t": "warn",
     "x": "Never run a pump dry or without oil in the case of a piston pump, and never start a pump against a closed valve with no relief valve. Both can destroy the pump in seconds."
    },
    {
     "t": "key",
     "items": [
      "A pump produces flow; pressure comes from the resistance to flow.",
      "Gear pumps are cheap and rugged; vane pumps are quiet; piston pumps give high pressure and efficiency.",
      "Q = V × n × ηv ÷ 1000 in L/min.",
      "Motor torque depends on pressure and displacement; speed on flow and displacement.",
      "Cylinders may be single or double acting; protect the rod and the alignment."
     ]
    }
   ]
  },
  {
   "id": "m13-l4",
   "title": "Valves, circuits and symbols",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "Valves control the **pressure**, **direction** and **flow** of the oil. Hydraulic circuit diagrams use standardised graphic symbols from **ISO 1219-1** (symbols) and **ISO 1219-2** (circuit diagrams), so a technician anywhere can read them."
    },
    {
     "t": "h",
     "x": "Pressure control valves"
    },
    {
     "t": "ul",
     "items": [
      "**Relief valve:** normally closed. It opens when the pressure reaches its setting and sends the excess flow to the tank. It protects the system and sets the maximum pressure, so every pump circuit needs one.",
      "**Pressure-reducing valve:** keeps a lower, steady pressure in a branch circuit.",
      "**Sequence valve:** opens at a set pressure to start a second operation after the first.",
      "**Counterbalance valve:** holds a load in a vertical cylinder and allows controlled lowering."
     ]
    },
    {
     "t": "h",
     "x": "Directional control valves (DCV)"
    },
    {
     "t": "p",
     "x": "A DCV is described by its number of **ports** and **positions**. A **4/3** valve has four ports (P pump, T tank, A and B actuator) and three positions. Each square in the symbol shows one position, and the lines inside show the connections. Valves are operated by solenoids, pilot pressure, levers or springs. A 4/3 valve is normally centred by springs."
    },
    {
     "t": "svg",
     "alt": "A hydraulic circuit: a fixed displacement pump driven by a motor delivers oil to a 4/3 closed centre solenoid valve. A relief valve connects the pump line to the tank. The valve ports A and B connect to the two ends of a double acting cylinder and T returns to the tank.",
     "cap": "Figure 2: basic hydraulic circuit with pump, relief valve, 4/3 valve and cylinder",
     "svg": "<svg viewBox=\"0 0 620 340\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m13-f2-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<!-- cylinder -->\n<rect x=\"240\" y=\"30\" width=\"150\" height=\"34\" class=\"ln fl\"/>\n<line x1=\"300\" y1=\"30\" x2=\"300\" y2=\"64\" class=\"ln\"/>\n<line x1=\"300\" y1=\"47\" x2=\"460\" y2=\"47\" class=\"ln\"/>\n<line x1=\"390\" y1=\"47\" x2=\"460\" y2=\"47\" class=\"ln\"/>\n<!-- A and B lines -->\n<polyline points=\"275,130 275,100 250,100 250,64\" class=\"ln\"/>\n<polyline points=\"305,130 305,110 380,110 380,64\" class=\"ln\"/>\n<text x=\"262\" y=\"124\" class=\"txs txe\">A</text><text x=\"316\" y=\"124\" class=\"txs\">B</text>\n<!-- valve boxes -->\n<rect x=\"200\" y=\"130\" width=\"60\" height=\"50\" class=\"ln fl\"/>\n<rect x=\"260\" y=\"130\" width=\"60\" height=\"50\" class=\"ln fla\"/>\n<rect x=\"320\" y=\"130\" width=\"60\" height=\"50\" class=\"ln fl\"/>\n<line x1=\"215\" y1=\"175\" x2=\"215\" y2=\"136\" class=\"ln1\" marker-end=\"url(#m13-f2-arr)\"/>\n<line x1=\"245\" y1=\"136\" x2=\"245\" y2=\"175\" class=\"ln1\" marker-end=\"url(#m13-f2-arr)\"/>\n<line x1=\"335\" y1=\"175\" x2=\"365\" y2=\"136\" class=\"ln1\" marker-end=\"url(#m13-f2-arr)\"/>\n<line x1=\"365\" y1=\"175\" x2=\"335\" y2=\"136\" class=\"ln1\" marker-end=\"url(#m13-f2-arr)\"/>\n<polyline points=\"275,130 275,148\" class=\"ln\"/><line x1=\"268\" y1=\"148\" x2=\"282\" y2=\"148\" class=\"ln\"/>\n<polyline points=\"305,130 305,148\" class=\"ln\"/><line x1=\"298\" y1=\"148\" x2=\"312\" y2=\"148\" class=\"ln\"/>\n<polyline points=\"275,180 275,162\" class=\"ln\"/><line x1=\"268\" y1=\"162\" x2=\"282\" y2=\"162\" class=\"ln\"/>\n<polyline points=\"305,180 305,162\" class=\"ln\"/><line x1=\"298\" y1=\"162\" x2=\"312\" y2=\"162\" class=\"ln\"/>\n<polyline points=\"180,155 182.5,150 187.5,160 192.5,150 197.5,160 200,155\" class=\"ln1\"/><rect x=\"160\" y=\"141\" width=\"20\" height=\"28\" class=\"ln fla\"/><text x=\"170\" y=\"134\" class=\"txs txc\">Y1</text>\n<polyline points=\"380,155 382.5,150 387.5,160 392.5,150 397.5,160 400,155\" class=\"ln1\"/><rect x=\"400\" y=\"141\" width=\"20\" height=\"28\" class=\"ln fla\"/><text x=\"410\" y=\"134\" class=\"txs txc\">Y2</text>\n<!-- P and T lines -->\n<polyline points=\"275,180 275,210\" class=\"ln\"/>\n<polyline points=\"305,180 305,250 520,250 520,300\" class=\"ln\"/>\n<text x=\"262\" y=\"196\" class=\"txs txe\">P</text><text x=\"316\" y=\"196\" class=\"txs\">T</text>\n<!-- pump and supply -->\n<polyline points=\"90,232 90,210 275,210\" class=\"ln\"/>\n<circle cx=\"90\" cy=\"250\" r=\"18\" class=\"ln fl\"/><polygon points=\"90,238 82,256 98,256\" class=\"fi\"/>\n<line x1=\"90\" y1=\"268\" x2=\"90\" y2=\"300\" class=\"ln\"/>\n<circle cx=\"30\" cy=\"250\" r=\"14\" class=\"ln fla\"/><text x=\"30\" y=\"255\" class=\"txs txb txc\">M</text>\n<line x1=\"44\" y1=\"250\" x2=\"72\" y2=\"250\" class=\"ln1 lnm dash\"/>\n<!-- relief valve -->\n<circle cx=\"170\" cy=\"210\" r=\"3\" class=\"fi\"/>\n<line x1=\"170\" y1=\"210\" x2=\"170\" y2=\"226\" class=\"ln\"/>\n<rect x=\"155\" y=\"226\" width=\"30\" height=\"40\" class=\"ln fl\"/>\n<line x1=\"170\" y1=\"260\" x2=\"170\" y2=\"232\" class=\"ln1\" marker-end=\"url(#m13-f2-arr)\"/>\n<polyline points=\"185,246 187.5,241 192.5,251 197.5,241 202.5,251 205,246\" class=\"ln1\"/>\n<polyline points=\"140,210 140,246 155,246\" class=\"ln1 lnm dash\"/><circle cx=\"140\" cy=\"210\" r=\"3\" class=\"fi\"/>\n<line x1=\"170\" y1=\"266\" x2=\"170\" y2=\"300\" class=\"ln\"/>\n<!-- tank -->\n<polyline points=\"60,290 60,318 540,318 540,290\" class=\"ln\"/>\n<line x1=\"90\" y1=\"300\" x2=\"90\" y2=\"318\" class=\"ln\"/><line x1=\"170\" y1=\"300\" x2=\"170\" y2=\"318\" class=\"ln\"/><line x1=\"520\" y1=\"300\" x2=\"520\" y2=\"318\" class=\"ln\"/>\n<text x=\"300\" y=\"334\" class=\"txs txc\">Tank (reservoir)</text>\n<!-- labels -->\n<text x=\"480\" y=\"40\" class=\"txs txb\">Cylinder</text><text x=\"480\" y=\"54\" class=\"txs\">double acting</text>\n<text x=\"430\" y=\"150\" class=\"txs txb\">4/3 valve</text><text x=\"430\" y=\"164\" class=\"txs\">closed centre,</text><text x=\"430\" y=\"178\" class=\"txs\">spring centred</text>\n<text x=\"212\" y=\"234\" class=\"txs txb\">Relief valve</text>\n<text x=\"100\" y=\"286\" class=\"txs txb\">Pump</text>\n<text x=\"340\" y=\"244\" class=\"txs txm\">Return to tank</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "Reading Figure 2: the motor drives the pump, which draws oil from the tank and sends it to port P of the valve. With both solenoids off the springs centre the valve, the cylinder is locked and the pump flow goes over the relief valve, which holds the pressure at its setting. Energising Y1 shifts the valve so that P connects to A and the cylinder extends, while oil returning from B goes to the tank. Energising Y2 connects P to B and the cylinder retracts."
    },
    {
     "t": "svg",
     "alt": "Three four-port valve centre positions side by side: closed centre with all ports blocked, open centre with all four ports joined, and tandem centre with P joined to T and A and B blocked.",
     "cap": "Figure 3: centre conditions of 4/3 valves",
     "svg": "<svg viewBox=\"0 0 600 240\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<rect x=\"50\" y=\"60\" width=\"80\" height=\"60\" class=\"ln fla\"/><text x=\"70\" y=\"48\" class=\"txs txb txc\">A</text><text x=\"110\" y=\"48\" class=\"txs txb txc\">B</text><text x=\"70\" y=\"138\" class=\"txs txb txc\">P</text><text x=\"110\" y=\"138\" class=\"txs txb txc\">T</text><line x1=\"70\" y1=\"54\" x2=\"70\" y2=\"60\" class=\"ln\"/><line x1=\"110\" y1=\"54\" x2=\"110\" y2=\"60\" class=\"ln\"/><line x1=\"70\" y1=\"120\" x2=\"70\" y2=\"126\" class=\"ln\"/><line x1=\"110\" y1=\"120\" x2=\"110\" y2=\"126\" class=\"ln\"/><line x1=\"70\" y1=\"60\" x2=\"70\" y2=\"80\" class=\"ln\"/><line x1=\"63\" y1=\"80\" x2=\"77\" y2=\"80\" class=\"ln\"/><line x1=\"110\" y1=\"60\" x2=\"110\" y2=\"80\" class=\"ln\"/><line x1=\"103\" y1=\"80\" x2=\"117\" y2=\"80\" class=\"ln\"/><line x1=\"70\" y1=\"120\" x2=\"70\" y2=\"100\" class=\"ln\"/><line x1=\"63\" y1=\"100\" x2=\"77\" y2=\"100\" class=\"ln\"/><line x1=\"110\" y1=\"120\" x2=\"110\" y2=\"100\" class=\"ln\"/><line x1=\"103\" y1=\"100\" x2=\"117\" y2=\"100\" class=\"ln\"/><text x=\"90\" y=\"164\" class=\"tx txb txc\">Closed centre</text><text x=\"90\" y=\"182\" class=\"txs txc\">All ports blocked:</text><text x=\"90\" y=\"196\" class=\"txs txc\">cylinder locked</text>\n<rect x=\"260\" y=\"60\" width=\"80\" height=\"60\" class=\"ln fla\"/><text x=\"280\" y=\"48\" class=\"txs txb txc\">A</text><text x=\"320\" y=\"48\" class=\"txs txb txc\">B</text><text x=\"280\" y=\"138\" class=\"txs txb txc\">P</text><text x=\"320\" y=\"138\" class=\"txs txb txc\">T</text><line x1=\"280\" y1=\"54\" x2=\"280\" y2=\"60\" class=\"ln\"/><line x1=\"320\" y1=\"54\" x2=\"320\" y2=\"60\" class=\"ln\"/><line x1=\"280\" y1=\"120\" x2=\"280\" y2=\"126\" class=\"ln\"/><line x1=\"320\" y1=\"120\" x2=\"320\" y2=\"126\" class=\"ln\"/><line x1=\"280\" y1=\"60\" x2=\"280\" y2=\"90\" class=\"ln\"/><line x1=\"320\" y1=\"60\" x2=\"320\" y2=\"90\" class=\"ln\"/><line x1=\"280\" y1=\"120\" x2=\"280\" y2=\"90\" class=\"ln\"/><line x1=\"320\" y1=\"120\" x2=\"320\" y2=\"90\" class=\"ln\"/><line x1=\"280\" y1=\"90\" x2=\"320\" y2=\"90\" class=\"ln\"/><text x=\"300\" y=\"164\" class=\"tx txb txc\">Open centre</text><text x=\"300\" y=\"182\" class=\"txs txc\">All ports joined:</text><text x=\"300\" y=\"196\" class=\"txs txc\">pump unloads, ram floats</text>\n<rect x=\"470\" y=\"60\" width=\"80\" height=\"60\" class=\"ln fla\"/><text x=\"490\" y=\"48\" class=\"txs txb txc\">A</text><text x=\"530\" y=\"48\" class=\"txs txb txc\">B</text><text x=\"490\" y=\"138\" class=\"txs txb txc\">P</text><text x=\"530\" y=\"138\" class=\"txs txb txc\">T</text><line x1=\"490\" y1=\"54\" x2=\"490\" y2=\"60\" class=\"ln\"/><line x1=\"530\" y1=\"54\" x2=\"530\" y2=\"60\" class=\"ln\"/><line x1=\"490\" y1=\"120\" x2=\"490\" y2=\"126\" class=\"ln\"/><line x1=\"530\" y1=\"120\" x2=\"530\" y2=\"126\" class=\"ln\"/><line x1=\"490\" y1=\"60\" x2=\"490\" y2=\"76\" class=\"ln\"/><line x1=\"483\" y1=\"76\" x2=\"497\" y2=\"76\" class=\"ln\"/><line x1=\"530\" y1=\"60\" x2=\"530\" y2=\"76\" class=\"ln\"/><line x1=\"523\" y1=\"76\" x2=\"537\" y2=\"76\" class=\"ln\"/><polyline points=\"490,120 490,100 530,100 530,120\" class=\"ln\"/><text x=\"510\" y=\"164\" class=\"tx txb txc\">Tandem centre</text><text x=\"510\" y=\"182\" class=\"txs txc\">P to T, A and B blocked:</text><text x=\"510\" y=\"196\" class=\"txs txc\">pump unloads, ram locked</text>\n<text x=\"300\" y=\"228\" class=\"txs txm txc\">Centre position of a 4/3 valve. A and B go to the actuator, P to the pump and T to the tank.</text>\n</svg>"
    },
    {
     "t": "table",
     "head": [
      "Centre",
      "Cylinder at rest",
      "Pump at rest",
      "Used with"
     ],
     "rows": [
      [
       "Closed",
       "Locked",
       "Flow goes over the relief valve at full pressure (wastes energy and heats the oil)",
       "Variable pumps, accumulators, several valves on one pump"
      ],
      [
       "Open",
       "Free to move (floats)",
       "Unloaded to tank at low pressure",
       "Hydraulic motors that should coast"
      ],
      [
       "Tandem",
       "Locked",
       "Unloaded to tank at low pressure",
       "The common choice for a fixed pump and a locked cylinder"
      ]
     ],
     "cap": "Choosing a valve centre"
    },
    {
     "t": "h",
     "x": "Flow control, check valves and accumulators"
    },
    {
     "t": "ul",
     "items": [
      "A **flow control valve** (throttle) sets actuator speed by restricting flow. Pressure-compensated types keep the speed steady as the load changes. The surplus flow goes over the relief valve, so throttling wastes energy as heat.",
      "A **check (non-return) valve** allows flow one way only. A **pilot-operated check valve** can be opened by pilot pressure and locks a cylinder very tightly.",
      "An **accumulator** stores oil under pressure against a nitrogen charge (bladder, piston or diaphragm type). It smooths pulsation, supplies peak flow and gives emergency power."
     ]
    },
    {
     "t": "warn",
     "x": "An accumulator keeps its stored energy after the pump is switched off. Before any work, discharge it using the manual dump valve provided and confirm the gauge reads zero. Only a trained person may adjust the nitrogen pre-charge, and only with nitrogen, never oxygen or compressed air."
    },
    {
     "t": "key",
     "items": [
      "Relief valves limit the maximum pressure and are essential in every circuit.",
      "A 4/3 valve has four ports and three positions; the centre type decides what the pump and cylinder do at rest.",
      "Tandem centre locks the cylinder and unloads the pump.",
      "Throttling a flow wastes energy as heat; the extra flow passes over the relief valve.",
      "Accumulators store energy: discharge before working on the system."
     ]
    }
   ]
  },
  {
   "id": "m13-l5",
   "title": "Hoses, fault finding and safe working",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Most hydraulic faults are found by thinking about the circuit, not by replacing parts. The oil carries high energy: a pinhole leak at high pressure can inject oil through the skin, which is a medical emergency."
    },
    {
     "t": "h",
     "x": "Hoses, fittings and seals"
    },
    {
     "t": "ul",
     "items": [
      "Select hose by **working pressure** (with a safety factor), size (to keep oil velocity within limits), temperature and fluid compatibility. Replace a hose for any abrasion, kinking, bulging, cracking or exposed wire.",
      "Do not exceed the **minimum bend radius**, avoid twisting, and keep hoses clear of sharp edges and heat. Use clamps and sleeves.",
      "Fit fittings with the correct torque and compatible thread types. Mixed thread forms leak, and a reused fitting is a common cause of leaks.",
      "Seals wear with time, heat and dirt. Always replace them with the right material for the fluid and temperature, and fit them without cutting on sharp thread edges."
     ]
    },
    {
     "t": "h",
     "x": "Fault finding"
    },
    {
     "t": "table",
     "head": [
      "Symptom",
      "Likely causes",
      "What to check"
     ],
     "rows": [
      [
       "No pressure",
       "Pump not turning or wrong direction; relief valve stuck open or set too low; no oil; internal leakage",
       "Oil level; shaft coupling; gauge reading; relief valve setting"
      ],
      [
       "Pressure but no movement",
       "Directional valve not shifting (no solenoid signal or stuck spool); load too high; locked pilot check valve",
       "Solenoid voltage and LED; manual override on the valve; load"
      ],
      [
       "Slow movement",
       "Worn pump; blocked filter; low oil; flow control set too low; internal leakage in cylinder",
       "Pump flow; filter indicator; oil level; cylinder bypass test"
      ],
      [
       "Overheating",
       "Relief valve working constantly; low oil; blocked cooler; wrong viscosity; worn pump",
       "Oil temperature; cooler; relief setting; circuit design"
      ],
      [
       "Noise (whining or knocking)",
       "Cavitation from a restricted suction; aeration from an air leak at the suction fittings; loose mountings",
       "Strainer, suction line, oil level, cold thick oil; foam in the tank"
      ],
      [
       "Jerky movement",
       "Air in the oil; stick-slip in the cylinder; worn guide",
       "Bleed the system; check for foam; inspect rod and seals"
      ]
     ],
     "cap": "Hydraulic fault guide"
    },
    {
     "t": "p",
     "x": "**Cavitation** occurs when the suction is so restricted that bubbles of vapour form in the oil and collapse violently inside the pump, eroding metal. **Aeration** is air dissolved or drawn into the oil, causing foam, noise and a spongy feel. Both are cured by correcting the suction side: clean strainer, short large-bore suction line, correct oil level and viscosity, and tight fittings."
    },
    {
     "t": "h",
     "x": "Safe depressurising and working (ISO 4413)"
    },
    {
     "t": "steps",
     "title": "Before opening any hydraulic line",
     "items": [
      "Stop the machine and isolate and lock out the electrical supply (Module 2).",
      "Lower or mechanically support any raised load with blocks or props; do not rely on the hydraulics.",
      "Release stored pressure: operate the valves to relieve the cylinders, discharge accumulators with the dump valve, and check the gauges read zero.",
      "Loosen connections slowly and wear gloves, eye protection and a face shield.",
      "After work, check for leaks with a piece of cardboard, never a hand, and test the system at low pressure first."
     ]
    },
    {
     "t": "warn",
     "x": "Hydraulic oil injected under the skin looks like a small puncture but can cause tissue death and amputation. Get medical attention at once, even if there is no pain. Never search for a leak with your hand, never put your finger over a leak, and do not use a hot hose or burn leaking oil."
    },
    {
     "t": "key",
     "items": [
      "Replace damaged hoses at once; respect pressure rating and bend radius.",
      "No pressure points to the pump, the relief valve or the oil level; no movement points to the valve or the load.",
      "Overheating suggests constant relief flow, low oil or a blocked cooler.",
      "Cavitation and aeration are suction-side problems.",
      "Isolate, support loads, discharge accumulators and release pressure before opening a line."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m13-q1",
   "q": "A cylinder has an 80 mm bore and works at 100 bar. What is the approximate force on the extend stroke?",
   "opts": [
    "50 kN",
    "5 kN",
    "100 kN",
    "201 kN"
   ],
   "a": 0,
   "why": "Area = π ÷ 4 × 0.08² = 5.03 × 10⁻³ m². Force = 10 × 10⁶ Pa × 5.03 × 10⁻³ m² = about 50 kN."
  },
  {
   "id": "m13-q2",
   "q": "Why is the retract force of a double-acting cylinder less than the extend force at the same pressure?",
   "opts": [
    "The oil is much hotter on the return stroke",
    "The rod adds extra weight to the piston",
    "Rod takes up piston area",
    "The seals always grip harder when retracting"
   ],
   "a": 2,
   "why": "On retraction the pressure acts on the annulus, which is the piston area minus the rod area. A smaller area gives a smaller force."
  },
  {
   "id": "m13-q3",
   "q": "A pump delivers 34 L/min at 100 bar. About how much hydraulic power is this?",
   "opts": [
    "34 kW",
    "3.4 kW",
    "0.6 kW",
    "5.7 kW"
   ],
   "a": 3,
   "why": "P (kW) = p (bar) × Q (L/min) ÷ 600 = 100 × 34 ÷ 600 = 5.67 kW."
  },
  {
   "id": "m13-q4",
   "q": "What does the number in ISO VG 46 mean?",
   "opts": [
    "The oil runs at 46 °C",
    "Viscosity of 46 mm²/s at 40 °C",
    "The pressure rating is 46 bar",
    "It is 46 % mineral oil"
   ],
   "a": 1,
   "why": "ISO 3448 viscosity grades give the mean kinematic viscosity at 40 °C in mm²/s, so VG 46 is about 46 mm²/s."
  },
  {
   "id": "m13-q5",
   "q": "An oil sample has an ISO 4406 code of 18/16/13. What does moving the first number from 18 to 19 mean?",
   "opts": [
    "The particle count is about halved",
    "The oil is cleaner by one grade",
    "The count is about doubled",
    "The oil is 1 mm²/s thicker"
   ],
   "a": 2,
   "why": "Each step in a range number doubles the particle count, so 19 is about twice as dirty as 18 in that size range."
  },
  {
   "id": "m13-q6",
   "q": "What does a hydraulic pump actually create?",
   "opts": [
    "Pressure by itself",
    "Flow of oil",
    "Heat only",
    "Vacuum in the tank"
   ],
   "a": 1,
   "why": "A pump delivers flow. Pressure builds when that flow meets resistance from the load or a valve."
  },
  {
   "id": "m13-q7",
   "q": "A pump has a displacement of 25 cm³/rev, runs at 1450 rev/min and has a volumetric efficiency of 0.95. What is the flow?",
   "opts": [
    "36 L/min",
    "25 L/min",
    "34 L/min",
    "17 L/min"
   ],
   "a": 2,
   "why": "Q = 25 × 1450 × 0.95 ÷ 1000 = 34.4 L/min."
  },
  {
   "id": "m13-q8",
   "q": "What is the job of a relief valve?",
   "opts": [
    "To control actuator speed",
    "To limit the maximum system pressure",
    "To filter the oil",
    "To reverse the cylinder"
   ],
   "a": 1,
   "why": "A relief valve opens at its set pressure and returns excess flow to the tank, protecting the pump and components from overpressure."
  },
  {
   "id": "m13-q9",
   "q": "A 4/3 valve has a tandem centre. What happens with the valve centred?",
   "opts": [
    "Both ports are open to tank and the cylinder floats",
    "The pump is blocked and the cylinder moves slowly",
    "The cylinder is locked and the pump is unloaded to tank",
    "The pump and cylinder both stop and heat builds up"
   ],
   "a": 2,
   "why": "In a tandem centre P connects to T so the pump is unloaded, while A and B are blocked and the cylinder is locked."
  },
  {
   "id": "m13-q10",
   "q": "Why does throttling a flow to slow a cylinder heat the oil?",
   "opts": [
    "The surplus pump flow goes over the relief valve at full pressure",
    "The filter blocks",
    "The oil gets thicker as it moves",
    "The cylinder seals rub harder"
   ],
   "a": 0,
   "why": "With meter-in or meter-out control, the pump delivers more than the cylinder takes and the surplus passes over the relief valve, turning pressure energy into heat."
  },
  {
   "id": "m13-q11",
   "q": "A hydraulic motor of 40 cm³/rev runs on a pressure drop of 150 bar. The mechanical efficiency is 0.90. What is the torque?",
   "opts": [
    "About 95 N·m",
    "About 150 N·m",
    "About 40 N·m",
    "About 86 N·m"
   ],
   "a": 3,
   "why": "T = Δp × V × ηm ÷ 62.8 = 150 × 40 × 0.9 ÷ 62.8 = 86 N·m."
  },
  {
   "id": "m13-q12",
   "q": "A pump makes a loud whining noise and the oil in the tank looks foamy. What is the most likely cause?",
   "opts": [
    "The relief valve is set too high",
    "The hose has too small a bend radius",
    "The oil is too clean",
    "Air is entering on the suction side"
   ],
   "a": 3,
   "why": "Foam and whine point to aeration, usually from an air leak at a suction-side fitting or low oil level."
  },
  {
   "id": "m13-q13",
   "q": "What must you do before disconnecting a hydraulic hose on a machine fitted with an accumulator?",
   "opts": [
    "Check only that the motor is off",
    "Discharge the accumulator and confirm that the pressure is zero",
    "Open the hose slowly with the pump running",
    "Top up the pre-charge with air"
   ],
   "a": 1,
   "why": "An accumulator keeps its energy when the pump is stopped, so it must be discharged and the gauge must read zero before a line is opened."
  },
  {
   "id": "m13-q14",
   "q": "How should you check a hydraulic hose for a pinhole leak?",
   "opts": [
    "Run a bare hand along the hose",
    "Hold a rag over it while pressurised",
    "Use a piece of card or wood with the system depressurised first",
    "Look at the hose from a very short distance"
   ],
   "a": 2,
   "why": "A pinhole jet can inject oil through the skin. Use cardboard and the correct safety precautions, never a hand."
  }
 ],
 "cards": [
  {
   "f": "State Pascal's law.",
   "b": "Pressure applied to a confined fluid is transmitted equally in all directions."
  },
  {
   "f": "Pressure formula?",
   "b": "p = F ÷ A. 1 bar = 100 kPa."
  },
  {
   "f": "Hydraulic power in kW from bar and L/min?",
   "b": "P = bar × L/min ÷ 600."
  },
  {
   "f": "Which area acts on the extend stroke and which on the retract?",
   "b": "Extend: full bore A1. Retract: annulus A2 = A1 minus rod area."
  },
  {
   "f": "Cylinder speed formula?",
   "b": "v = Q ÷ A."
  },
  {
   "f": "What does ISO VG 46 mean?",
   "b": "Kinematic viscosity of 46 mm²/s at 40 °C (ISO 3448)."
  },
  {
   "f": "What is HM oil?",
   "b": "A mineral hydraulic oil with anti-wear additives (ISO 6743)."
  },
  {
   "f": "What does an ISO 4406 code of 18/16/13 describe?",
   "b": "Particle counts per mL at 4, 6 and 14 µm and above; each step doubles the count."
  },
  {
   "f": "A pump produces what?",
   "b": "Flow. Pressure comes from resistance to that flow."
  },
  {
   "f": "Pump flow formula?",
   "b": "Q (L/min) = V (cm³/rev) × n × ηv ÷ 1000."
  },
  {
   "f": "Motor torque formula?",
   "b": "T (N·m) = Δp (bar) × V (cm³/rev) × ηm ÷ 62.8."
  },
  {
   "f": "Why must every pump circuit have a relief valve?",
   "b": "To limit maximum pressure and protect the pump and components."
  },
  {
   "f": "Tandem centre valve?",
   "b": "P is joined to T so the pump unloads; A and B are blocked so the cylinder is locked."
  },
  {
   "f": "Cavitation or aeration: where is the cause?",
   "b": "On the suction side: restriction, air leak, low oil or wrong viscosity."
  }
 ],
 "terms": [
  {
   "t": "Pascal's law",
   "d": "Pressure on a confined fluid is transmitted equally in all directions."
  },
  {
   "t": "Displacement",
   "d": "The volume of oil a pump or motor moves per revolution, in cm³/rev."
  },
  {
   "t": "Viscosity",
   "d": "A fluid's resistance to flow."
  },
  {
   "t": "Relief valve",
   "d": "A valve that opens at a set pressure and passes flow to tank to limit system pressure."
  },
  {
   "t": "Directional control valve",
   "d": "A valve that routes oil to start, stop or reverse an actuator."
  },
  {
   "t": "Double-acting cylinder",
   "d": "A cylinder driven by oil in both directions."
  },
  {
   "t": "Accumulator",
   "d": "A vessel that stores hydraulic energy using a gas charge, typically nitrogen."
  },
  {
   "t": "Cavitation",
   "d": "Formation and collapse of vapour bubbles in a pump caused by restricted suction."
  },
  {
   "t": "Aeration",
   "d": "Air entrained in the oil, causing foam, noise and spongy action."
  },
  {
   "t": "Unloading",
   "d": "Sending the pump flow to tank at low pressure when work is not required."
  },
  {
   "t": "Injection injury",
   "d": "A serious injury when high-pressure oil penetrates the skin."
  }
 ],
 "formulas": [
  {
   "n": "Pressure",
   "f": "p = F ÷ A",
   "v": "1 bar = 100 000 Pa"
  },
  {
   "n": "Cylinder force",
   "f": "F = p × A",
   "v": "A1 extend, A2 = A1 − Arod retract"
  },
  {
   "n": "Cylinder speed",
   "f": "v = Q ÷ A",
   "v": "SI units: m³/s and m²"
  },
  {
   "n": "Hydraulic power",
   "f": "P(kW) = p(bar) × Q(L/min) ÷ 600",
   "v": "Divide by efficiency for input"
  },
  {
   "n": "Pump flow",
   "f": "Q = V × n × ηv ÷ 1000",
   "v": "L/min; V in cm³/rev"
  },
  {
   "n": "Motor torque",
   "f": "T = Δp × V × ηm ÷ 62.8",
   "v": "N·m; Δp in bar"
  }
 ]
});
