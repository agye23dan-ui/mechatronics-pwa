window.MECH.register({
 "id": "m04",
 "n": 4,
 "title": "Materials, Fasteners, Fits and Bearings",
 "short": "Materials and Fasteners",
 "group": "Mechanical",
 "blurb": "Choose materials, tighten fasteners correctly, read fit codes and select, fit and diagnose rolling bearings and seals.",
 "outcomes": [
  "Compare common engineering metals and plastics by their properties and typical uses",
  "Explain what annealing, hardening, tempering and case hardening do to steel",
  "Interpret a metric thread designation and a bolt property class such as 8.8 or 10.9",
  "Calculate a tightening torque from a target preload and select a suitable locking method",
  "Select keys, pins, splines and retaining rings and identify when a seal should be replaced",
  "Interpret an ISO 286 fit code and calculate clearance or interference",
  "Identify rolling bearing types and decode a basic bearing number",
  "Mount a bearing correctly and diagnose common bearing failures"
 ],
 "lessons": [
  {
   "id": "m04-l1",
   "title": "Engineering materials and heat treatment",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "Every part in a machine is made from a material chosen for a reason: it must carry the load without breaking or bending, survive wear and corrosion, and be affordable and possible to make. A technician who understands material properties can recognise why a part failed and choose a safe replacement."
    },
    {
     "t": "h",
     "x": "Key properties"
    },
    {
     "t": "ul",
     "items": [
      "**Strength:** the stress a material withstands before it deforms permanently (yield) or breaks (tensile strength), measured in megapascals (MPa).",
      "**Hardness:** resistance to scratching and indentation; it relates to wear resistance.",
      "**Ductility:** ability to stretch before breaking; ductile materials warn you by bending first.",
      "**Brittleness:** breaking with little warning, as cast iron and glass do.",
      "**Toughness:** ability to absorb impact energy without cracking.",
      "**Fatigue strength:** resistance to failure under repeated stress cycles, the usual cause of shaft and spring failures."
     ]
    },
    {
     "t": "table",
     "head": [
      "Material",
      "Typical properties",
      "Typical uses"
     ],
     "rows": [
      [
       "Low-carbon (mild) steel, up to about 0.25 % C",
       "Tough, ductile, easy to weld and machine; low hardness",
       "Frames, brackets, shafts, general fabrication"
      ],
      [
       "Medium and high-carbon steel",
       "Stronger and harder, can be hardened; harder to weld",
       "Gears, axles, springs, tools"
      ],
      [
       "Alloy steel",
       "Strong, tough, can be heat-treated to high strength",
       "Heavy shafts, high-grade bolts, gears"
      ],
      [
       "Stainless steel",
       "Resists corrosion because of its chromium content",
       "Food equipment, marine and outdoor parts"
      ],
      [
       "Grey cast iron",
       "Brittle in tension, strong in compression, damps vibration",
       "Machine beds, housings, pump casings"
      ],
      [
       "Aluminium alloys",
       "Light (about one third the weight of steel), good conductor, corrodes slowly",
       "Housings, heat sinks, light frames"
      ],
      [
       "Copper and brass",
       "Excellent electrical and thermal conduction; brass machines well",
       "Busbars, terminals, fittings, bushes"
      ],
      [
       "Plastics (nylon, PTFE, PVC)",
       "Insulating, light, low friction; soften when hot",
       "Gears, bearings, insulators, cable and pipe"
      ]
     ],
     "cap": "Properties and uses of common materials"
    },
    {
     "t": "h",
     "x": "Heat treatment of steel"
    },
    {
     "t": "p",
     "x": "Heating and cooling steel in a controlled way changes its internal structure and so its properties. The main treatments are:"
    },
    {
     "t": "ul",
     "items": [
      "**Annealing:** heat, then cool very slowly. The steel becomes soft and easy to machine and relieves internal stress.",
      "**Normalising:** heat, then cool in still air. Gives a uniform, refined structure.",
      "**Hardening:** heat to a red heat and quench rapidly in oil or water. The steel becomes very hard but brittle.",
      "**Tempering:** reheat the hardened steel to a lower temperature. This trades some hardness for toughness and is almost always done straight after hardening.",
      "**Case hardening:** harden only the surface, leaving a tough core. Used for gears and shafts that need a hard wearing surface and a core that resists shock."
     ]
    },
    {
     "t": "warn",
     "x": "Do not weld or heat unknown steel, and never quench a part you are not sure about. Heat can ruin a bolt's strength and cracks can start in hardened surfaces. Welding high-carbon, hardened or cast iron parts needs a proper procedure."
    },
    {
     "t": "p",
     "x": "**Corrosion** is the chemical attack on a metal by its environment. In humid and coastal places such as much of Ghana, unprotected steel rusts quickly. Paint, galvanising (zinc coating), plating, grease and stainless steel are the usual defences. When two different metals touch in the presence of moisture, the more active metal corrodes; this is **galvanic corrosion** and is why aluminium and copper are not bolted together bare outdoors."
    },
    {
     "t": "key",
     "items": [
      "Properties that matter: strength, hardness, ductility, toughness and fatigue strength.",
      "Mild steel is easy to weld and shape; higher carbon steel is stronger and harder.",
      "Annealing softens, hardening plus quenching hardens and embrittles, tempering restores toughness.",
      "Case hardening gives a hard surface on a tough core.",
      "Protect against corrosion and avoid bare contact between dissimilar metals in moisture."
     ]
    }
   ]
  },
  {
   "id": "m04-l2",
   "title": "Threads, bolts and tightening torque",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "A screw thread is a helical ridge that turns rotation into a clamping force. Most equipment uses **ISO metric** threads, written as M followed by the major diameter and the pitch, for example M10 × 1.5. The **major diameter** is the largest diameter of the thread; the **pitch** is the distance from one thread crest to the next, measured along the axis. If the pitch is left out (M10), the standard coarse pitch is assumed. A fine thread (M10 × 1.25) has a smaller pitch, resists vibration loosening slightly better and gives finer adjustment."
    },
    {
     "t": "svg",
     "alt": "Side view of a metric screw thread showing the 60 degree flanks, the pitch between crests, the major diameter d and the minor diameter d1.",
     "cap": "Figure 1: ISO metric thread terms: pitch, major diameter d and minor diameter d₁",
     "svg": "<svg viewBox=\"0 0 620 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m04-f1-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<polyline points=\"60,82 70,82 82.5,60 87.5,60 100,82 100,82 110,82 122.5,60 127.5,60 140,82 140,82 150,82 162.5,60 167.5,60 180,82 180,82 190,82 202.5,60 207.5,60 220,82 220,82 230,82 242.5,60 247.5,60 260,82 260,82 270,82 282.5,60 287.5,60 300,82 300,82 310,82 322.5,60 327.5,60 340,82 340,82 350,82 362.5,60 367.5,60 380,82 380,82 390,82 402.5,60 407.5,60 420,82\" class=\"ln\"/>\n<polyline points=\"60,198 70,198 82.5,220 87.5,220 100,198 100,198 110,198 122.5,220 127.5,220 140,198 140,198 150,198 162.5,220 167.5,220 180,198 180,198 190,198 202.5,220 207.5,220 220,198 220,198 230,198 242.5,220 247.5,220 260,198 260,198 270,198 282.5,220 287.5,220 300,198 300,198 310,198 322.5,220 327.5,220 340,198 340,198 350,198 362.5,220 367.5,220 380,198 380,198 390,198 402.5,220 407.5,220 420,198\" class=\"ln\"/>\n<line x1=\"60\" y1=\"82\" x2=\"60\" y2=\"198\" class=\"ln\"/>\n<line x1=\"420\" y1=\"82\" x2=\"420\" y2=\"198\" class=\"ln\"/>\n<line x1=\"40\" y1=\"140\" x2=\"445\" y2=\"140\" class=\"lnm ln1 dash\"/>\n<text x=\"62\" y=\"134\" class=\"txs txm\">axis</text>\n<line x1=\"85\" y1=\"50\" x2=\"85\" y2=\"34\" class=\"ln1\"/>\n<line x1=\"125\" y1=\"50\" x2=\"125\" y2=\"34\" class=\"ln1\"/>\n<line x1=\"85\" y1=\"40\" x2=\"125\" y2=\"40\" class=\"ln1\" marker-end=\"url(#m04-f1-arr)\"/>\n<line x1=\"125\" y1=\"40\" x2=\"85\" y2=\"40\" class=\"ln1\" marker-end=\"url(#m04-f1-arr)\"/>\n<text x=\"105\" y=\"26\" class=\"tx txc\">pitch P</text>\n<line x1=\"450\" y1=\"60\" x2=\"450\" y2=\"220\" class=\"ln1\" marker-end=\"url(#m04-f1-arr)\"/>\n<line x1=\"450\" y1=\"220\" x2=\"450\" y2=\"60\" class=\"ln1\" marker-end=\"url(#m04-f1-arr)\"/>\n<line x1=\"405\" y1=\"60\" x2=\"455\" y2=\"60\" class=\"ln1 lnm\"/>\n<line x1=\"405\" y1=\"220\" x2=\"455\" y2=\"220\" class=\"ln1 lnm\"/>\n<text x=\"458\" y=\"144\" class=\"tx txb\">d</text>\n<line x1=\"428\" y1=\"82\" x2=\"428\" y2=\"198\" class=\"ln1\" marker-end=\"url(#m04-f1-arr)\"/>\n<line x1=\"428\" y1=\"198\" x2=\"428\" y2=\"82\" class=\"ln1\" marker-end=\"url(#m04-f1-arr)\"/>\n<text x=\"416\" y=\"164\" class=\"tx txb txe\">d₁</text>\n<text x=\"210\" y=\"120\" class=\"tx txm\">60° included angle between flanks</text>\n<text x=\"14\" y=\"244\" class=\"txs txm\">d = major diameter (M10 has d = 10 mm). d₁ = minor diameter at the thread root.</text>\n<text x=\"14\" y=\"258\" class=\"txs txm\">Coarse M10 × 1.5: pitch P = 1.5 mm and the stress area is 58 mm².</text>\n</svg>"
    },
    {
     "t": "h",
     "x": "Bolt property classes"
    },
    {
     "t": "p",
     "x": "The numbers stamped on a bolt head, such as 8.8, 10.9 or 12.9, describe its strength. The first number multiplied by 100 is the minimum tensile strength in MPa. The second number is the ratio of yield strength to tensile strength, in tenths. So 8.8 means 800 MPa tensile and a yield of 0.8 × 800 = 640 MPa; 10.9 means 1000 MPa tensile and a yield of 0.9 × 1000 = 900 MPa. Nuts carry a single grade number such as 8 or 10, and a nut of the same or higher grade than the bolt is used."
    },
    {
     "t": "table",
     "head": [
      "Property class",
      "Tensile strength",
      "Yield strength",
      "Typical use"
     ],
     "rows": [
      [
       "4.6",
       "400 MPa",
       "240 MPa",
       "Light duty, non-critical"
      ],
      [
       "8.8",
       "800 MPa",
       "640 MPa",
       "General machinery, standard hex bolts"
      ],
      [
       "10.9",
       "1000 MPa",
       "900 MPa",
       "Heavily loaded joints, motor and gearbox mounts"
      ],
      [
       "12.9",
       "1200 MPa",
       "1080 MPa",
       "Socket-head cap screws, high-strength use"
      ]
     ],
     "cap": "Common bolt property classes"
    },
    {
     "t": "h",
     "x": "Tightening and preload"
    },
    {
     "t": "p",
     "x": "A bolted joint works by **preload**, the tension in the bolt that clamps the parts together. A correctly preloaded joint carries load by friction between the parts and the bolt sees little fluctuating load, so it does not fatigue or come loose. A bolt that is too loose rattles and fails by fatigue; one that is over-tightened stretches past yield and breaks or strips."
    },
    {
     "t": "formula",
     "x": "T = K × d × F",
     "where": "T tightening torque (N·m), K nut factor (about 0.2 for dry or lightly oiled steel threads), d nominal diameter (m), F preload (N)"
    },
    {
     "t": "worked",
     "title": "Worked example: torque for an M10 bolt",
     "problem": "An M10 × 1.5 class 8.8 bolt has a tensile stress area of 58 mm² and a proof stress of 580 MPa. It is to be tightened to 75 % of its proof load. Find the preload and an approximate torque with K = 0.2.",
     "steps": [
      "Proof load = proof stress × stress area = 580 × 58 = 33 640 N.",
      "Preload F = 0.75 × 33 640 = 25 230 N.",
      "T = K × d × F = 0.2 × 0.010 × 25 230 = 50.5 N·m."
     ],
     "answer": "About 50 N·m. In practice use the manufacturer's torque table, since lubricant and coatings change K."
    },
    {
     "t": "steps",
     "title": "Tightening a flange or cover",
     "items": [
      "Clean the threads and check that the bolts and nuts are the specified class and undamaged.",
      "Fit all bolts finger-tight, then tighten in a diagonal (star) pattern so the joint closes evenly.",
      "Tighten in at least two passes, for example 50 % then 100 % of the specified torque.",
      "Finish with a final pass in a circular order to confirm every bolt is at torque."
     ]
    },
    {
     "t": "h",
     "x": "Preventing loosening"
    },
    {
     "t": "ul",
     "items": [
      "**Locknut or nyloc nut:** a nylon insert grips the thread; replace it after removal.",
      "**Spring and toothed washers:** give limited help; they are not suitable for high-strength bolts.",
      "**Thread-locking compound:** a liquid that cures between the threads; different strengths are made for different jobs.",
      "**Castle nut and split pin, or lock wire:** a positive mechanical lock for safety-critical joints."
     ]
    },
    {
     "t": "warn",
     "x": "Never reuse torque-to-yield or stretch bolts, and never replace a high-grade bolt with an unmarked one. Use the grade in the maintenance manual, since a wrong bolt can break without warning."
    },
    {
     "t": "key",
     "items": [
      "M10 × 1.5 means 10 mm major diameter and 1.5 mm pitch.",
      "Property class 8.8 means 800 MPa tensile strength and 640 MPa yield.",
      "Preload clamps the joint; torque is a way of reaching that preload: T = K × d × F.",
      "Tighten in a star pattern in several passes.",
      "Use locknuts, thread lock or lock wire as the joint requires and replace single-use fasteners."
     ]
    }
   ]
  },
  {
   "id": "m04-l3",
   "title": "Keys, pins, retaining rings and seals",
   "minutes": 8,
   "body": [
    {
     "t": "p",
     "x": "Shafts rarely work alone. Gears, pulleys, couplings and sprockets must be connected to them so that torque passes without slipping, and the rotating shaft must be sealed against dirt and leakage. This lesson covers the small parts that do these jobs; failures here often stop a whole machine."
    },
    {
     "t": "h",
     "x": "Connecting a hub to a shaft"
    },
    {
     "t": "ul",
     "items": [
      "**Parallel key:** a rectangular bar that sits in a keyway cut in both shaft and hub. It carries torque by shear and bearing stress on its sides. It locates the hub in rotation but not along the shaft, so a grub (set) screw or a circlip fixes it axially.",
      "**Taper key:** driven in from the end to wedge the hub; it also holds axially but can pull the hub off-centre.",
      "**Woodruff key:** a half-moon key that sits deep in a curved keyway; it self-aligns and is common on smaller shafts and tapered ends.",
      "**Splines:** many keys cut around the shaft. They carry more torque and allow the hub to slide, as on drive shafts.",
      "**Dowel and taper pins:** precisely ground pins that locate parts accurately and prevent them shifting after being unbolted and refitted.",
      "**Shear pin:** a deliberately weak pin that breaks first under overload and protects an expensive gearbox or drive."
     ]
    },
    {
     "t": "p",
     "x": "A keyway weakens a shaft because it concentrates stress in its corners. Keyways are cut with a small radius and must never be hacksawed or ground out roughly. A loose key quickly wears its keyway and then fails by fretting, so replace both."
    },
    {
     "t": "h",
     "x": "Retaining rings and circlips"
    },
    {
     "t": "p",
     "x": "A **retaining ring**, often called a circlip, is a spring steel ring that sits in a groove and stops a part moving axially. External rings go on shafts and internal rings in bores. They must be fitted with the correct circlip pliers, and the sharp-edged side should face away from the thrust load. Never reuse a distorted ring."
    },
    {
     "t": "h",
     "x": "Seals"
    },
    {
     "t": "p",
     "x": "A seal keeps lubricant in and contamination out. Choosing and fitting the right seal stops bearing and gearbox failures."
    },
    {
     "t": "table",
     "head": [
      "Seal type",
      "How it works",
      "Typical use"
     ],
     "rows": [
      [
       "Lip (oil) seal",
       "A flexible lip, often with a garter spring, rubs on the rotating shaft",
       "Gearbox and motor shafts, bearing housings"
      ],
      [
       "O-ring",
       "A rubber ring in a groove that is squeezed between two surfaces",
       "Static joints and slow-moving hydraulic and pneumatic seals"
      ],
      [
       "Mechanical seal",
       "Two flat faces, one rotating and one fixed, pressed together by springs",
       "Pumps with shafts running at speed"
      ],
      [
       "Gasket",
       "A compressible sheet between flanges",
       "Covers, pipe flanges, engine joints"
      ],
      [
       "Packing (gland)",
       "Compressible rings tightened by a follower",
       "Older pump and valve shafts"
      ]
     ],
     "cap": "Common seal types"
    },
    {
     "t": "steps",
     "title": "Fitting a lip seal",
     "items": [
      "Check the shaft surface for scores or a worn groove where the old lip ran; a damaged shaft will ruin a new seal.",
      "Cover the shaft keyway and any sharp edges with tape or a sleeve so they cannot cut the lip.",
      "Lubricate the lip and the outside of the seal lightly.",
      "Fit the seal with its spring side towards the fluid it retains.",
      "Press it in square, using a driver on the seal's outer edge until it sits flush, never with a hammer on the lip."
     ]
    },
    {
     "t": "tip",
     "x": "Oil on the outside of a housing, a damp patch around a shaft or grease thrown on a guard are early signs that a seal is failing. Replace it at the next stop instead of waiting for a bearing to fail."
    },
    {
     "t": "key",
     "items": [
      "A parallel key carries torque in shear; a loose key wears the keyway.",
      "Splines carry more torque, pins locate parts, and shear pins protect machines from overload.",
      "Circlips need the correct pliers and are not reused when distorted.",
      "Lip seals face the fluid with the spring side and need an undamaged shaft surface.",
      "Leaks signal worn seals; fix them before bearings are damaged."
     ]
    }
   ]
  },
  {
   "id": "m04-l4",
   "title": "Limits, tolerances and fits",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "No two parts are exactly the same size, so designers specify a range of sizes that still works. The **limits** are the largest and smallest permitted sizes; the **tolerance** is the difference between them. A **fit** describes the relationship between a shaft and a hole that go together. It is the difference in size before assembly that makes a loose running fit, a snug locating fit or a tight press fit."
    },
    {
     "t": "h",
     "x": "Three kinds of fit"
    },
    {
     "t": "ul",
     "items": [
      "**Clearance fit:** the shaft is always smaller than the hole, so it turns or slides freely. Used for running parts and sliding guides.",
      "**Interference fit:** the shaft is always larger than the hole, so force or heat is needed to assemble, and the parts grip on their own. Used for gears and bearing rings that must not creep.",
      "**Transition fit:** the result may be a small clearance or a small interference, giving accurate location with a light press or a tap."
     ]
    },
    {
     "t": "p",
     "x": "ISO 286 describes fits with a code made of letters and numbers, such as 25 H7/f7. The **number** is the international tolerance grade (IT grade): a smaller number is a tighter tolerance. The **letter** gives the position of the tolerance zone relative to the basic size, capitals for holes and lower-case for shafts. In the common **hole-basis** system the hole is always H, whose lower limit equals the basic size, and the shaft letter is changed to give the fit."
    },
    {
     "t": "svg",
     "alt": "Three pairs of tolerance zones relative to a zero line: H7 with f7 giving clearance, H7 with k6 giving transition, and H7 with p6 giving interference.",
     "cap": "Figure 2: tolerance zones for clearance, transition and interference fits at a 25 mm size",
     "svg": "<svg viewBox=\"0 0 640 340\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<text x=\"12\" y=\"20\" class=\"tx txb\">Tolerance zones for a 25 mm size, hole-basis system (µm)</text>\n<line x1=\"20\" y1=\"150\" x2=\"620\" y2=\"150\" class=\"lna dash\"/>\n<text x=\"22\" y=\"166\" class=\"txs txa\">zero line = basic size 25.000 mm</text>\n<rect x=\"60\" y=\"87\" width=\"44\" height=\"63\" class=\"ln flb\"/><text x=\"82\" y=\"122.5\" class=\"txs txc\">H7</text><rect x=\"112\" y=\"210\" width=\"44\" height=\"63\" class=\"ln fla\"/><text x=\"134\" y=\"245.5\" class=\"txs txc\">f7</text>\n<text x=\"104\" y=\"52\" class=\"tx txb txc\">Clearance</text><text x=\"104\" y=\"68\" class=\"txs txc\">H7/f7 running fit</text>\n<rect x=\"250\" y=\"87\" width=\"44\" height=\"63\" class=\"ln flb\"/><text x=\"272\" y=\"122.5\" class=\"txs txc\">H7</text><rect x=\"302\" y=\"105\" width=\"44\" height=\"39\" class=\"ln fla\"/><text x=\"324\" y=\"128.5\" class=\"txs txc\">k6</text>\n<text x=\"294\" y=\"52\" class=\"tx txb txc\">Transition</text><text x=\"294\" y=\"68\" class=\"txs txc\">H7/k6 location fit</text>\n<rect x=\"440\" y=\"87\" width=\"44\" height=\"63\" class=\"ln flb\"/><text x=\"462\" y=\"122.5\" class=\"txs txc\">H7</text><rect x=\"492\" y=\"45\" width=\"44\" height=\"39\" class=\"ln fla\"/><text x=\"514\" y=\"68.5\" class=\"txs txc\">p6</text>\n<text x=\"484\" y=\"20\" class=\"txs\"></text>\n<text x=\"484\" y=\"23\" class=\"tx txb txc\">Interference</text><text x=\"484\" y=\"37\" class=\"txs txc\">H7/p6 press fit</text>\n<text x=\"104\" y=\"292\" class=\"txs txc\">Shaft always smaller than hole:</text><text x=\"104\" y=\"306\" class=\"txs txc\">min gap 20 µm, max gap 62 µm</text>\n<text x=\"294\" y=\"292\" class=\"txs txc\">Could be a small gap or a</text><text x=\"294\" y=\"306\" class=\"txs txc\">slight squeeze: −13 to +19 µm</text>\n<text x=\"484\" y=\"292\" class=\"txs txc\">Shaft always larger than hole:</text><text x=\"484\" y=\"306\" class=\"txs txc\">squeeze 1 µm to 35 µm</text>\n<text x=\"12\" y=\"328\" class=\"txs txm\">Values from the ISO 286 tables for sizes 18 to 30 mm. Blue = hole zone, amber = shaft zone.</text>\n</svg>"
    },
    {
     "t": "table",
     "head": [
      "Fit code",
      "Type",
      "Typical use"
     ],
     "rows": [
      [
       "H7/f7",
       "Clearance",
       "Running fit for shafts in plain bearings"
      ],
      [
       "H7/g6",
       "Clearance",
       "Close sliding or accurate location, little play"
      ],
      [
       "H7/h6",
       "Clearance (very small)",
       "Sliding fit for easily assembled parts"
      ],
      [
       "H7/k6",
       "Transition",
       "Gears and pulleys on shafts, with a key"
      ],
      [
       "H7/p6",
       "Interference",
       "Press fit for bushes and bearing seats"
      ]
     ],
     "cap": "Common hole-basis fits"
    },
    {
     "t": "worked",
     "title": "Worked example: an interference fit",
     "problem": "A 25 mm hole is H7 (+0.021/0) and the shaft is p6 (+0.035/+0.022). Find the maximum and minimum interference.",
     "steps": [
      "Hole limits: 25.000 to 25.021 mm. Shaft limits: 25.022 to 25.035 mm.",
      "Minimum interference = smallest shaft − largest hole = 25.022 − 25.021 = 0.001 mm.",
      "Maximum interference = largest shaft − smallest hole = 25.035 − 25.000 = 0.035 mm."
     ],
     "answer": "The shaft is between 0.001 mm and 0.035 mm larger than the hole, so the fit is an interference fit."
    },
    {
     "t": "h",
     "x": "Assembling tight fits"
    },
    {
     "t": "p",
     "x": "Interference fits are made by pressing, or by heating the outer part (or cooling the inner part) so the size difference disappears briefly. Heating uses an oven, an oil bath or an induction heater; never use a naked flame on a bearing or hardened part."
    },
    {
     "t": "worked",
     "title": "Worked example: shrink-fit expansion",
     "problem": "A steel gear bore is 50 mm in diameter. By how much does the bore grow when the gear is heated by 80 °C? Use α = 11.5 × 10⁻⁶ per °C.",
     "steps": [
      "Expansion ΔD = α × D × ΔT.",
      "ΔD = 11.5 × 10⁻⁶ × 50 × 80 = 0.046 mm."
     ],
     "answer": "The bore grows about 0.046 mm, enough to slide the gear over a shaft with an interference of about 0.03 mm."
    },
    {
     "t": "warn",
     "x": "Heated parts stay hot for a long time and the heat is not always visible. Use insulated gloves, tongs and a clear place to set parts down. Heat rolling bearings only to the temperature the maker allows, normally no more than about 120 °C, or the steel loses its hardness."
    },
    {
     "t": "key",
     "items": [
      "Limits are the largest and smallest sizes; tolerance is their difference.",
      "Clearance fits turn freely, interference fits grip, transition fits locate accurately.",
      "In a code like H7/f7, capital H is the hole, lower-case f the shaft, and the numbers are tolerance grades.",
      "Interference = shaft size minus hole size; clearance = hole size minus shaft size.",
      "Heat to expand the outer part, within the limits, and use proper protection."
     ]
    }
   ]
  },
  {
   "id": "m04-l5",
   "title": "Rolling bearings: selection, fitting and failure",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "A bearing supports a rotating shaft and lets it turn with little friction. **Rolling bearings** use balls or rollers between an inner and an outer ring; **plain bearings** are bushes in which the shaft slides on a film of oil or on a low-friction material such as bronze or PTFE. Rolling bearings are the most common choice in motors, gearboxes and conveyors."
    },
    {
     "t": "svg",
     "alt": "Section through a deep groove ball bearing between a shaft and a housing with outer ring, inner ring, ball, cage and shoulders labelled.",
     "cap": "Figure 3: parts of a deep groove ball bearing and where the tight and light fits go",
     "svg": "<svg viewBox=\"0 0 640 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<text x=\"12\" y=\"20\" class=\"tx txb\">Deep groove ball bearing in section</text>\n<rect x=\"40\" y=\"40\" width=\"300\" height=\"60\" class=\"ln fl\"/>\n<text x=\"62\" y=\"60\" class=\"txs\">Housing</text>\n<rect x=\"40\" y=\"190\" width=\"300\" height=\"80\" class=\"ln fl\"/>\n<text x=\"62\" y=\"214\" class=\"txs\">Shaft</text>\n<line x1=\"20\" y1=\"270\" x2=\"360\" y2=\"270\" class=\"lnm ln1 dash\"/>\n<rect x=\"196\" y=\"100\" width=\"56\" height=\"20\" class=\"ln flb\"/>\n<rect x=\"196\" y=\"160\" width=\"56\" height=\"30\" class=\"ln flb\"/>\n<circle cx=\"224\" cy=\"140\" r=\"20\" class=\"ln flg\"/>\n<line x1=\"196\" y1=\"148\" x2=\"252\" y2=\"148\" class=\"ln1\"/>\n<rect x=\"160\" y=\"160\" width=\"36\" height=\"30\" class=\"ln fa\"/>\n<rect x=\"252\" y=\"160\" width=\"36\" height=\"30\" class=\"ln fa\"/>\n<text x=\"360\" y=\"75\" class=\"tx\">Outer ring: light fit in the housing</text>\n<line x1=\"252\" y1=\"110\" x2=\"355\" y2=\"78\" class=\"ln1\"/>\n<text x=\"360\" y=\"127\" class=\"tx\">Ball (rolling element)</text>\n<line x1=\"243\" y1=\"132\" x2=\"355\" y2=\"124\" class=\"ln1\"/>\n<text x=\"360\" y=\"166\" class=\"tx\">Cage holds the balls apart</text>\n<line x1=\"252\" y1=\"148\" x2=\"355\" y2=\"162\" class=\"ln1\"/>\n<text x=\"360\" y=\"212\" class=\"tx\">Inner ring: tight fit on the shaft</text>\n<line x1=\"250\" y1=\"176\" x2=\"355\" y2=\"208\" class=\"ln1\"/>\n<text x=\"360\" y=\"244\" class=\"tx\">Shoulder and spacer locate</text>\n<text x=\"360\" y=\"260\" class=\"tx\">the inner ring axially</text>\n<line x1=\"288\" y1=\"178\" x2=\"355\" y2=\"240\" class=\"ln1\"/>\n<text x=\"12\" y=\"294\" class=\"txs txm\">The rotating ring (here the inner ring on a turning shaft) gets the tight fit;</text>\n<text x=\"12\" y=\"308\" class=\"txs txm\">the stationary ring gets the lighter fit.</text>\n</svg>"
    },
    {
     "t": "table",
     "head": [
      "Bearing type",
      "Carries",
      "Typical use"
     ],
     "rows": [
      [
       "Deep groove ball",
       "Radial load and some thrust in both directions",
       "Electric motors, fans, general purpose"
      ],
      [
       "Angular contact ball",
       "Combined radial and thrust load in one direction",
       "Machine tool spindles, pumps"
      ],
      [
       "Cylindrical roller",
       "Heavy radial load; no thrust",
       "Gearboxes, large motors"
      ],
      [
       "Taper roller",
       "Heavy radial and thrust loads together",
       "Wheel hubs, gearbox shafts"
      ],
      [
       "Spherical roller",
       "Heavy loads and shaft misalignment",
       "Crushers, conveyors, heavy industry"
      ],
      [
       "Thrust ball",
       "Axial load only",
       "Vertical shafts, jacks"
      ]
     ],
     "cap": "Rolling bearing types and their uses"
    },
    {
     "t": "h",
     "x": "Reading a bearing number"
    },
    {
     "t": "p",
     "x": "A common deep groove bearing is marked 6205. The first digit is the bearing type (6 for deep groove ball); the second gives the series (2 for light, 3 for medium, which affects the outside diameter and width); the last two digits, multiplied by 5, give the bore in millimetres. So 6205 has a bore of 05 × 5 = 25 mm, 6204 is 20 mm and 6308 is 08 × 5 = 40 mm. Suffixes such as 2RS or ZZ show rubber seals or metal shields, and C3 shows extra internal clearance."
    },
    {
     "t": "h",
     "x": "Bearing life"
    },
    {
     "t": "p",
     "x": "Rolling surfaces fatigue and eventually flake. The **basic rating life L10** is the number of million revolutions that 90 % of identical bearings survive. For ball bearings it depends on the dynamic load rating C (from the catalogue) and the equivalent load P on the bearing."
    },
    {
     "t": "formula",
     "x": "L10 = (C ÷ P)³ million revolutions",
     "where": "C dynamic load rating (kN), P equivalent dynamic load (kN); exponent 3 for ball bearings, 10/3 for roller bearings"
    },
    {
     "t": "worked",
     "title": "Worked example: bearing life in hours",
     "problem": "A ball bearing has C = 14 kN and carries P = 1.4 kN at 1450 rpm. Find L10 in million revolutions and in hours.",
     "steps": [
      "C ÷ P = 14 ÷ 1.4 = 10.",
      "L10 = 10³ = 1000 million revolutions.",
      "Revolutions per hour = 1450 × 60 = 87 000.",
      "Hours = 1000 × 10⁶ ÷ 87 000 = 11 494 h."
     ],
     "answer": "L10 is 1000 million revolutions, about 11 500 hours. Doubling the load cuts the life to one eighth."
    },
    {
     "t": "h",
     "x": "Fitting a bearing"
    },
    {
     "t": "ul",
     "items": [
      "Keep new bearings in their wrapping until fitting and work in clean conditions: a speck of grit can wear a bearing out.",
      "Fit the ring that rotates with a tight fit and the stationary ring with a light fit, as shown in the figure.",
      "Push the bearing on by the ring that is being fitted, using a sleeve. Never hammer through the balls or push the outer ring when mounting on a shaft.",
      "Heat the bearing in oil or with an induction heater when the fit is tight, not above about 120 °C.",
      "Pack with the right grease to about one third to half of the free space; overfilling causes overheating."
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
       "Flaking (spalling) of a raceway",
       "Normal fatigue at end of life, or overload"
      ],
      [
       "Dark blue discolouration, loose cage",
       "Overheating from lack of lubricant or too much load"
      ],
      [
       "Dented raceway at ball spacing",
       "Shock load or hammering during assembly (brinelling)"
      ],
      [
       "Scratches and dull surface",
       "Contamination by dirt or water"
      ],
      [
       "Fine parallel flutes on the raceway",
       "Electrical current passing through a bearing from a drive"
      ],
      [
       "Ring spinning in housing, polished or scored seat",
       "Loose fit or worn seat"
      ]
     ],
     "cap": "Reading failed bearings"
    },
    {
     "t": "warn",
     "x": "Never spin a dry, dirty or damaged bearing with compressed air; it can reach very high speed and fly apart. Isolate and lock out the equipment before reaching in to check bearing temperature or noise."
    },
    {
     "t": "key",
     "items": [
      "Pick the bearing type for the load: radial, thrust, combined or misaligned.",
      "In 6205, the last two digits ×5 give the bore, 25 mm.",
      "L10 = (C ÷ P)³ million revolutions; small increases in load shorten life sharply.",
      "Fit the rotating ring tight, push on the ring being fitted and keep everything clean.",
      "Failed bearings reveal their cause: overheating, contamination, shock, electric current or loose fit."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m04-q1",
   "q": "Which material suits general welded fabrication such as frames and brackets because it is tough, ductile and easy to weld?",
   "opts": [
    "High-carbon tool steel",
    "Grey cast iron",
    "Low-carbon (mild) steel",
    "Fully hardened alloy steel"
   ],
   "a": 2,
   "why": "Low carbon content keeps steel ductile and weldable. High-carbon and hardened steels crack, and cast iron is brittle."
  },
  {
   "id": "m04-q2",
   "q": "What is the main purpose of tempering a hardened steel part?",
   "opts": [
    "To cut brittleness and keep most hardness",
    "To make the part as hard as possible",
    "To make the steel softer for machining",
    "To add a corrosion-resistant coating"
   ],
   "a": 0,
   "why": "Hardening leaves steel hard but brittle. Reheating to a lower temperature (tempering) trades a little hardness for toughness."
  },
  {
   "id": "m04-q3",
   "q": "A bolt head is marked 10.9. What are its minimum tensile and yield strengths?",
   "opts": [
    "109 MPa and 10 MPa",
    "1090 MPa and 100 MPa",
    "900 MPa and 1000 MPa",
    "1000 MPa and 900 MPa"
   ],
   "a": 3,
   "why": "The first number × 100 gives tensile strength (1000 MPa). The second number is the yield/tensile ratio in tenths, so yield = 0.9 × 1000 = 900 MPa."
  },
  {
   "id": "m04-q4",
   "q": "What is the tap drill size for an M12 × 1.75 thread?",
   "opts": [
    "12.00 mm",
    "10.25 mm",
    "13.75 mm",
    "9.00 mm"
   ],
   "a": 1,
   "why": "Tap drill ≈ major diameter − pitch = 12 − 1.75 = 10.25 mm."
  },
  {
   "id": "m04-q5",
   "q": "A 12 mm bolt must be preloaded to 40 kN. Using K = 0.2, what torque is needed?",
   "opts": [
    "48 N·m",
    "9.6 N·m",
    "96 N·m",
    "960 N·m"
   ],
   "a": 2,
   "why": "T = K × d × F = 0.2 × 0.012 × 40 000 = 96 N·m. The unit conversion of d to metres matters."
  },
  {
   "id": "m04-q6",
   "q": "Why should the bolts on a gearbox cover be tightened in a diagonal pattern in several passes?",
   "opts": [
    "To close the joint evenly without distortion",
    "To use less torque overall on the weaker bolts",
    "Because the first bolts tightened are always the strongest",
    "To make it possible to remove the bolts later"
   ],
   "a": 0,
   "why": "Tightening around the circle in order pulls one side down before the other and can distort the cover or crush the gasket unevenly."
  },
  {
   "id": "m04-q7",
   "q": "Which fastener should be replaced with a new one after it has been removed, because its locking action is not reliable once used?",
   "opts": [
    "A plain hex nut",
    "A hardened washer",
    "A castle nut with its split pin removed",
    "A nylon-insert (nyloc) nut"
   ],
   "a": 3,
   "why": "The nylon insert deforms the first time it grips the thread and loses much of its locking force when reused."
  },
  {
   "id": "m04-q8",
   "q": "What is the main job of a parallel key between a pulley and a shaft?",
   "opts": [
    "To seal oil inside the pulley hub",
    "To transmit torque between shaft and hub",
    "To locate the hub exactly in the axial direction",
    "To allow the pulley to slide along the shaft under load"
   ],
   "a": 1,
   "why": "A key carries torque in shear. It does not locate the hub axially; a grub screw or ring does that, and a spline is used if sliding is needed."
  },
  {
   "id": "m04-q9",
   "q": "A drawing calls for a shaft to be a 25 H7/f7 fit in a bearing bush. What kind of fit is this?",
   "opts": [
    "Interference fit",
    "Transition fit",
    "Clearance (running) fit",
    "Press fit"
   ],
   "a": 2,
   "why": "With the hole H and a shaft f, the shaft is always smaller than the hole. The shaft turns freely, so it is a clearance fit."
  },
  {
   "id": "m04-q10",
   "q": "A 25 mm hole is H7 (+0.021/0) and the shaft is p6 (+0.035/+0.022). What is the minimum interference?",
   "opts": [
    "0.001 mm",
    "0.022 mm",
    "0.035 mm",
    "0.014 mm"
   ],
   "a": 0,
   "why": "Minimum interference = smallest shaft − largest hole = 25.022 − 25.021 = 0.001 mm. The 0.035 mm figure is the maximum."
  },
  {
   "id": "m04-q11",
   "q": "What is the bore of a 6308 deep groove ball bearing?",
   "opts": [
    "8 mm",
    "80 mm",
    "30 mm",
    "40 mm"
   ],
   "a": 3,
   "why": "For codes of 04 and above, the last two digits × 5 give the bore: 08 × 5 = 40 mm."
  },
  {
   "id": "m04-q12",
   "q": "A steel gear bore of 50 mm diameter is heated by 80 °C (α = 11.5 × 10⁻⁶ per °C). By how much does the bore expand?",
   "opts": [
    "0.46 mm",
    "0.046 mm",
    "0.0046 mm",
    "0.92 mm"
   ],
   "a": 1,
   "why": "ΔD = 11.5 × 10⁻⁶ × 50 × 80 = 0.046 mm. That is enough to slip over a shaft with a small interference."
  },
  {
   "id": "m04-q13",
   "q": "A dismantled bearing shows dark blue tempering colours on its rings. What is the most likely cause?",
   "opts": [
    "Normal wear after many hours",
    "Fitting with a too-light fit",
    "Overheating, often from lack of lubricant or overload",
    "Overfilling with a thin oil"
   ],
   "a": 2,
   "why": "Blue colours mean the steel was heated far above normal running temperature, typically by lubrication failure or overload."
  },
  {
   "id": "m04-q14",
   "q": "A ball bearing has C = 10 kN and carries P = 2 kN. What is its L10 life?",
   "opts": [
    "125 million revolutions",
    "15 million revolutions",
    "5 million revolutions",
    "25 million revolutions"
   ],
   "a": 0,
   "why": "L10 = (C ÷ P)³ = (10 ÷ 2)³ = 5³ = 125 million revolutions."
  }
 ],
 "cards": [
  {
   "f": "Name five key material properties.",
   "b": "Strength, hardness, ductility, toughness and fatigue strength."
  },
  {
   "f": "What does tempering do?",
   "b": "It reheats hardened steel to a lower temperature to reduce brittleness, trading some hardness for toughness."
  },
  {
   "f": "What is case hardening?",
   "b": "Hardening only the surface layer, leaving a tough core, for parts such as gears that need a hard wearing surface."
  },
  {
   "f": "What does M10 × 1.5 mean?",
   "b": "A metric thread with a 10 mm major diameter and a pitch of 1.5 mm."
  },
  {
   "f": "What does the property class 8.8 tell you?",
   "b": "Tensile strength 800 MPa; yield is 0.8 × 800 = 640 MPa."
  },
  {
   "f": "Torque from preload formula?",
   "b": "T = K × d × F, with K about 0.2 for dry or lightly oiled steel."
  },
  {
   "f": "How do you tighten flange bolts?",
   "b": "In a diagonal star pattern, in two or more passes, finishing with a circular check pass."
  },
  {
   "f": "What is the job of a key?",
   "b": "To transmit torque between a shaft and a hub in shear."
  },
  {
   "f": "Which way does a lip seal face?",
   "b": "With the spring side towards the fluid being retained."
  },
  {
   "f": "Difference between clearance and interference fits?",
   "b": "Clearance: shaft smaller than hole. Interference: shaft larger than hole."
  },
  {
   "f": "What does H7/f7 mean?",
   "b": "Hole-basis fit: the hole is H grade 7, the shaft f grade 7. A running clearance fit."
  },
  {
   "f": "How is a bearing number such as 6205 read?",
   "b": "6 = deep groove ball, 2 = light series, 05 × 5 = 25 mm bore."
  },
  {
   "f": "Basic bearing life formula for ball bearings?",
   "b": "L10 = (C ÷ P)³ million revolutions, the life that 90 % of bearings reach."
  },
  {
   "f": "Which bearing ring gets the tight fit?",
   "b": "The ring that rotates relative to the load, usually the inner ring on a turning shaft."
  }
 ],
 "terms": [
  {
   "t": "Ductility",
   "d": "The ability of a material to stretch or deform plastically before it breaks."
  },
  {
   "t": "Hardness",
   "d": "Resistance of a material to scratching, indentation and wear."
  },
  {
   "t": "Tempering",
   "d": "Reheating hardened steel to a moderate temperature to reduce brittleness."
  },
  {
   "t": "Galvanic corrosion",
   "d": "Accelerated corrosion of the more active of two dissimilar metals in contact in the presence of moisture."
  },
  {
   "t": "Pitch",
   "d": "The distance between corresponding points on adjacent threads, measured along the axis."
  },
  {
   "t": "Preload",
   "d": "The tension created in a bolt when it is tightened, which clamps the joint parts together."
  },
  {
   "t": "Keyway",
   "d": "A slot cut in a shaft or hub to hold a key."
  },
  {
   "t": "Interference fit",
   "d": "A fit in which the shaft is always larger than the hole, so the parts grip each other."
  },
  {
   "t": "Tolerance grade",
   "d": "The IT number in a fit code that sets the size of the permitted variation; a smaller number is tighter."
  },
  {
   "t": "Dynamic load rating",
   "d": "The catalogue load, C, that a bearing can carry for one million revolutions with 90 % reliability."
  },
  {
   "t": "Brinelling",
   "d": "Permanent dents in a bearing raceway caused by shock or excessive static load."
  }
 ],
 "formulas": [
  {
   "n": "Tightening torque",
   "f": "T = K × d × F",
   "v": "T N·m, K about 0.2, d in m, F preload in N"
  },
  {
   "n": "Bolt yield strength",
   "f": "Rp = (first no. × 100) × (second no. ÷ 10)",
   "v": "For class 8.8: 800 × 0.8 = 640 MPa"
  },
  {
   "n": "Tap drill diameter",
   "f": "d = major diameter − pitch",
   "v": "All in mm"
  },
  {
   "n": "Thermal expansion",
   "f": "ΔD = α × D × ΔT",
   "v": "α about 11.5 × 10⁻⁶ per °C for steel"
  },
  {
   "n": "Interference and clearance",
   "f": "I = shaft − hole; C = hole − shaft",
   "v": "Use limits: min and max, in mm"
  },
  {
   "n": "Bearing basic life",
   "f": "L10 = (C ÷ P)³ million rev",
   "v": "C and P in kN; exponent 3 for ball bearings"
  }
 ]
});
