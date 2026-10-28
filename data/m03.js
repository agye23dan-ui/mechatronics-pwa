window.MECH.register({
 "id": "m03",
 "n": 3,
 "title": "Measurement, Hand Tools and Engineering Drawing",
 "short": "Measurement and Drawing",
 "group": "Foundations",
 "blurb": "Measure to the right accuracy, use hand tools and drills correctly, and read mechanical and electrical drawings with confidence.",
 "outcomes": [
  "Distinguish accuracy, precision and resolution and choose an instrument that suits a required tolerance",
  "Read a vernier caliper, a micrometer and a dial indicator correctly",
  "Calculate the effect of temperature on a measured length",
  "Select and use hand tools safely for marking out, cutting, filing and fastening",
  "Calculate drill speed and select the correct tap drill for a metric thread",
  "Interpret views, sections, dimensions, tolerances and surface finish on an engineering drawing",
  "Calculate clearance for a hole and shaft fit from their limits",
  "Read an electrical schematic and tell it apart from a wiring diagram"
 ],
 "lessons": [
  {
   "id": "m03-l1",
   "title": "Measuring: accuracy, precision and resolution",
   "minutes": 8,
   "body": [
    {
     "t": "p",
     "x": "Every repair, build and setup in mechatronics depends on measurement: the bore a bearing must fit, the gap between a sensor and its target, the length of a cable run, the voltage across a coil. A measurement is a comparison between the thing being measured (the **measurand**) and a standard unit. Because no comparison is perfect, every reading carries some doubt, and a good technician knows how much."
    },
    {
     "t": "p",
     "x": "Three words are often confused. **Resolution** is the smallest step the instrument can show: a caliper that displays 0.01 mm has a resolution of 0.01 mm. **Accuracy** is how close a reading is to the true value. **Precision** (repeatability) is how closely repeated readings agree with each other. An instrument can have fine resolution and still be inaccurate, for example a digital caliper that was never zeroed and reads 0.15 mm when closed."
    },
    {
     "t": "table",
     "head": [
      "Instrument",
      "Typical resolution",
      "Best used for"
     ],
     "rows": [
      [
       "Steel rule",
       "0.5 mm",
       "Rough lengths, marking out, checking stock"
      ],
      [
       "Vernier or digital caliper",
       "0.02 to 0.05 mm",
       "Outside, inside, depth and step sizes to about ±0.03 mm"
      ],
      [
       "Micrometer",
       "0.01 mm",
       "Shaft diameters, thicknesses, precision parts"
      ],
      [
       "Dial indicator",
       "0.01 mm",
       "Run-out, alignment, backlash, comparing parts"
      ],
      [
       "Feeler gauge",
       "0.01 to 1 mm leaves",
       "Gaps, clearances, valve and sensor gaps"
      ]
     ],
     "cap": "Common workshop instruments and what they are good for"
    },
    {
     "t": "h",
     "x": "Choosing the instrument"
    },
    {
     "t": "p",
     "x": "A common rule of thumb is that the instrument should resolve at least one tenth of the tolerance you must check. If a shaft must be within 0.05 mm, a caliper reading to 0.02 mm is marginal and a micrometer reading to 0.01 mm is the sensible choice. Measuring a tight tolerance with a steel rule is simply guessing."
    },
    {
     "t": "h",
     "x": "Calibration and care"
    },
    {
     "t": "p",
     "x": "**Calibration** means comparing an instrument with a reference of known value and recording the difference. Instruments used for quality or safety decisions are calibrated on a schedule, and the reference is **traceable** back to national standards. Before every use, clean the measuring faces, close the jaws or spindle and confirm the reading is zero. Never use a micrometer as a clamp, and never force a caliper over a part."
    },
    {
     "t": "h",
     "x": "Temperature and technique"
    },
    {
     "t": "p",
     "x": "Metals expand when heated. Dimensional measurement is defined at a reference temperature of 20 °C, so a part that has just come off a lathe or been held in a warm hand reads slightly large. Steel expands by about 11.5 millionths of its length for every degree Celsius."
    },
    {
     "t": "formula",
     "x": "ΔL = α × L × ΔT",
     "where": "ΔL change in length (mm), α coefficient of linear expansion (steel about 11.5 × 10⁻⁶ per °C), L original length (mm), ΔT temperature change (°C)"
    },
    {
     "t": "worked",
     "title": "Worked example: a warm shaft",
     "problem": "A steel shaft 100 mm long is measured at 30 °C. How much longer is it than at the 20 °C reference?",
     "steps": [
      "Temperature change ΔT = 30 − 20 = 10 °C.",
      "ΔL = α × L × ΔT = 11.5 × 10⁻⁶ × 100 × 10.",
      "ΔL = 0.0115 mm."
     ],
     "answer": "The shaft is about 0.012 mm longer, which is more than the 0.01 mm resolution of a micrometer. For precision work, let the part reach room temperature."
    },
    {
     "t": "tip",
     "x": "Read the instrument square on to avoid **parallax error**, the apparent shift in a reading when you view a scale from an angle. Take the reading three times and average if the value matters."
    },
    {
     "t": "key",
     "items": [
      "Resolution is the smallest step shown, accuracy is closeness to the true value, precision is repeatability.",
      "Choose an instrument that resolves about one tenth of the tolerance being checked.",
      "Clean, zero and check an instrument before use; calibrate on schedule against traceable references.",
      "Warm parts read large: ΔL = α × L × ΔT, with α about 11.5 × 10⁻⁶ per °C for steel.",
      "Read square on and repeat important measurements."
     ]
    }
   ]
  },
  {
   "id": "m03-l2",
   "title": "Vernier calipers, micrometers and dial indicators",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "The vernier caliper measures outside size with its large jaws, inside size with its small jaws, depth with its tail rod, and step height. It has a fixed main scale and a sliding vernier scale. The vernier lets you read between the main scale lines, which would otherwise take a magnifier and a lot of guessing."
    },
    {
     "t": "p",
     "x": "The idea is simple. On a common 0.02 mm caliper the main scale is divided into millimetres and the vernier scale has 50 divisions that together span 49 mm, so each vernier division is 0.98 mm. Each vernier line is therefore 0.02 mm short of a main line, and the first line that lines up with a main line tells you the fraction of a millimetre. The figure shows the same principle on a 0.05 mm caliper with 20 vernier divisions spanning 19 mm."
    },
    {
     "t": "svg",
     "alt": "A vernier scale slid along a millimetre main scale with the vernier zero just past 23 mm and line 7 aligned with a main scale line, giving 23.35 mm.",
     "cap": "Figure 1: reading a 0.05 mm vernier caliper: 23 mm on the main scale plus line 7 × 0.05 mm",
     "svg": "<svg viewBox=\"0 0 680 240\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\"><rect x=\"10\" y=\"40\" width=\"660\" height=\"50\" class=\"ln fl\"/><line x1=\"20\" y1=\"90\" x2=\"20\" y2=\"81\" class=\"ln1\"/><line x1=\"50\" y1=\"90\" x2=\"50\" y2=\"81\" class=\"ln1\"/><line x1=\"80\" y1=\"90\" x2=\"80\" y2=\"81\" class=\"ln1\"/><line x1=\"110\" y1=\"90\" x2=\"110\" y2=\"74\" class=\"ln1\"/><text x=\"110\" y=\"58\" class=\"tx txc\">25</text><line x1=\"140\" y1=\"90\" x2=\"140\" y2=\"81\" class=\"ln1\"/><line x1=\"170\" y1=\"90\" x2=\"170\" y2=\"81\" class=\"ln1\"/><line x1=\"200\" y1=\"90\" x2=\"200\" y2=\"81\" class=\"ln1\"/><line x1=\"230\" y1=\"90\" x2=\"230\" y2=\"81\" class=\"ln1\"/><line x1=\"260\" y1=\"90\" x2=\"260\" y2=\"68\" class=\"ln1\"/><text x=\"260\" y=\"58\" class=\"tx txc\">30</text><line x1=\"290\" y1=\"90\" x2=\"290\" y2=\"81\" class=\"ln1\"/><line x1=\"320\" y1=\"90\" x2=\"320\" y2=\"81\" class=\"ln1\"/><line x1=\"350\" y1=\"90\" x2=\"350\" y2=\"81\" class=\"ln1\"/><line x1=\"380\" y1=\"90\" x2=\"380\" y2=\"81\" class=\"ln1\"/><line x1=\"410\" y1=\"90\" x2=\"410\" y2=\"74\" class=\"ln1\"/><text x=\"410\" y=\"58\" class=\"tx txc\">35</text><line x1=\"440\" y1=\"90\" x2=\"440\" y2=\"81\" class=\"ln1\"/><line x1=\"470\" y1=\"90\" x2=\"470\" y2=\"81\" class=\"ln1\"/><line x1=\"500\" y1=\"90\" x2=\"500\" y2=\"81\" class=\"ln1\"/><line x1=\"530\" y1=\"90\" x2=\"530\" y2=\"81\" class=\"ln1\"/><line x1=\"560\" y1=\"90\" x2=\"560\" y2=\"68\" class=\"ln1\"/><text x=\"560\" y=\"58\" class=\"tx txc\">40</text><line x1=\"590\" y1=\"90\" x2=\"590\" y2=\"81\" class=\"ln1\"/><line x1=\"620\" y1=\"90\" x2=\"620\" y2=\"81\" class=\"ln1\"/><line x1=\"650\" y1=\"90\" x2=\"650\" y2=\"81\" class=\"ln1\"/><text x=\"12\" y=\"30\" class=\"txs txm\">Main scale, mm (1 mm divisions)</text><rect x=\"60.50000000000004\" y=\"90\" width=\"570\" height=\"50\" class=\"ln flb\"/><line x1=\"60.5\" y1=\"90\" x2=\"60.5\" y2=\"106\" class=\"ln1\"/><line x1=\"89.0\" y1=\"90\" x2=\"89.0\" y2=\"100\" class=\"ln1\"/><line x1=\"117.5\" y1=\"90\" x2=\"117.5\" y2=\"100\" class=\"ln1\"/><line x1=\"146.0\" y1=\"90\" x2=\"146.0\" y2=\"100\" class=\"ln1\"/><line x1=\"174.5\" y1=\"90\" x2=\"174.5\" y2=\"100\" class=\"ln1\"/><line x1=\"203.0\" y1=\"90\" x2=\"203.0\" y2=\"106\" class=\"ln1\"/><line x1=\"231.5\" y1=\"90\" x2=\"231.5\" y2=\"100\" class=\"ln1\"/><line x1=\"260.0\" y1=\"90\" x2=\"260.0\" y2=\"100\" class=\"ln1\"/><line x1=\"288.5\" y1=\"90\" x2=\"288.5\" y2=\"100\" class=\"ln1\"/><line x1=\"317.0\" y1=\"90\" x2=\"317.0\" y2=\"100\" class=\"ln1\"/><line x1=\"345.5\" y1=\"90\" x2=\"345.5\" y2=\"106\" class=\"ln1\"/><line x1=\"374.0\" y1=\"90\" x2=\"374.0\" y2=\"100\" class=\"ln1\"/><line x1=\"402.5\" y1=\"90\" x2=\"402.5\" y2=\"100\" class=\"ln1\"/><line x1=\"431.0\" y1=\"90\" x2=\"431.0\" y2=\"100\" class=\"ln1\"/><line x1=\"459.5\" y1=\"90\" x2=\"459.5\" y2=\"100\" class=\"ln1\"/><line x1=\"488.0\" y1=\"90\" x2=\"488.0\" y2=\"106\" class=\"ln1\"/><line x1=\"516.5\" y1=\"90\" x2=\"516.5\" y2=\"100\" class=\"ln1\"/><line x1=\"545.0\" y1=\"90\" x2=\"545.0\" y2=\"100\" class=\"ln1\"/><line x1=\"573.5\" y1=\"90\" x2=\"573.5\" y2=\"100\" class=\"ln1\"/><line x1=\"602.0\" y1=\"90\" x2=\"602.0\" y2=\"100\" class=\"ln1\"/><line x1=\"630.5\" y1=\"90\" x2=\"630.5\" y2=\"106\" class=\"ln1\"/><text x=\"60.5\" y=\"122\" class=\"txs txc\">0</text><text x=\"203.0\" y=\"122\" class=\"txs txc\">.25</text><text x=\"345.5\" y=\"122\" class=\"txs txc\">.50</text><text x=\"488.0\" y=\"122\" class=\"txs txc\">.75</text><text x=\"630.5\" y=\"122\" class=\"txs txc\">1.00</text><text x=\"520\" y=\"160\" class=\"txs txm txc\">Vernier scale, 20 divisions = 19 mm</text><line x1=\"260.0\" y1=\"64\" x2=\"260.0\" y2=\"104\" class=\"lna\"/><text x=\"260.0\" y=\"178\" class=\"tx txa txb txc\">line 7 aligned</text><line x1=\"260.0\" y1=\"160\" x2=\"260.0\" y2=\"108\" class=\"lna dash\"/><text x=\"50\" y=\"108\" class=\"txs txc\">23</text><line x1=\"60.50000000000004\" y1=\"140\" x2=\"60.50000000000004\" y2=\"196\" class=\"lnb dash\"/><text x=\"60.50000000000004\" y=\"212\" class=\"tx txc\">vernier zero</text><text x=\"340\" y=\"232\" class=\"tx txc txb\">Reading = 23 + 7 × 0.05 = 23.35 mm</text></svg>"
    },
    {
     "t": "steps",
     "title": "Reading a vernier caliper",
     "items": [
      "Close the jaws and check the reading is zero before measuring.",
      "Note the main scale reading, in whole millimetres, just to the left of the vernier zero.",
      "Find the vernier line that lines up exactly with any main scale line.",
      "Multiply that line number by the resolution (0.02 or 0.05 mm).",
      "Add the two readings. Repeat the reading once to confirm."
     ]
    },
    {
     "t": "worked",
     "title": "Worked example: 0.02 mm vernier",
     "problem": "On a 0.02 mm caliper the vernier zero is just past 31 mm and the 12th vernier line aligns with a main scale line. What is the reading?",
     "steps": [
      "Main scale reading = 31 mm.",
      "Vernier reading = 12 × 0.02 mm = 0.24 mm.",
      "Total = 31 + 0.24 = 31.24 mm."
     ],
     "answer": "31.24 mm."
    },
    {
     "t": "h",
     "x": "The micrometer"
    },
    {
     "t": "p",
     "x": "A micrometer converts a small movement of a precision screw into a large movement on a thimble scale. The spindle screw has a pitch of 0.5 mm, so one full turn of the thimble moves the spindle 0.5 mm. The thimble has 50 divisions, so each division is 0.5 ÷ 50 = 0.01 mm. The **sleeve** scale carries millimetre marks above the datum line and half-millimetre marks below it."
    },
    {
     "t": "worked",
     "title": "Worked example: reading a micrometer",
     "problem": "The sleeve shows 7 mm plus the half-millimetre mark uncovered. The thimble line 28 is level with the datum line. What is the reading?",
     "steps": [
      "Sleeve reading = 7.5 mm (7 mm plus the visible 0.5 mm mark).",
      "Thimble reading = 28 × 0.01 mm = 0.28 mm.",
      "Total = 7.5 + 0.28 = 7.78 mm."
     ],
     "answer": "7.78 mm."
    },
    {
     "t": "p",
     "x": "Always turn a micrometer by its **ratchet** or friction thimble. It slips at a set force, so every reading is taken with the same measuring force, and it protects both the part and the screw."
    },
    {
     "t": "h",
     "x": "The dial indicator"
    },
    {
     "t": "p",
     "x": "A dial indicator measures movement, not size. A plunger or lever contact moves a pointer on a graduated dial, normally 0.01 mm per division and about 1 mm per revolution. It is mounted on a magnetic base or stand, set to zero on a reference point, and used to read run-out on a rotating shaft, check shaft alignment, find backlash in a gear or leadscrew, or confirm a surface is flat or parallel."
    },
    {
     "t": "warn",
     "x": "Never measure a part while it is rotating or powered unless the instrument is designed for it. Isolate and lock out machinery first (see Module 2) before reaching in with any gauge."
    },
    {
     "t": "key",
     "items": [
      "A vernier gives resolution by letting you find which vernier line aligns with a main scale line.",
      "Reading = main scale value + (aligned line number × resolution).",
      "A micrometer has 0.5 mm pitch and 50 thimble divisions, so 0.01 mm per division.",
      "Use the ratchet for constant force and check zero before every measurement.",
      "A dial indicator measures relative movement such as run-out and backlash."
     ]
    }
   ]
  },
  {
   "id": "m03-l3",
   "title": "Hand tools, marking out, drilling and tapping",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "Machines fail in the workshop and on site, not in a laboratory, and hand tools are how most repairs get done. Good work comes from choosing the right tool, using it correctly and keeping it in good condition. A damaged or wrong-sized tool is the quickest route to a rounded bolt head, a split casing or an injury."
    },
    {
     "t": "h",
     "x": "Marking out and holding"
    },
    {
     "t": "p",
     "x": "Marking out transfers dimensions from a drawing to the workpiece. Clean the surface, then use a **scriber** and an **engineer's square** or rule to draw fine lines, and a **centre punch** to dent the exact centre of each hole so the drill point cannot wander. Hold work in a vice with soft jaws if the surface must not be marked; always clamp small parts and never hold them by hand while drilling."
    },
    {
     "t": "h",
     "x": "Cutting, filing and fastening tools"
    },
    {
     "t": "ul",
     "items": [
      "**Hacksaw:** fit the blade with the teeth pointing away from the handle; use about 24 teeth per 25 mm for general steel, and make sure at least three teeth are in the cut at all times.",
      "**Files:** cut on the forward stroke only; use a file handle; use a finer cut for finishing and brush the teeth clean.",
      "**Spanners and sockets:** use the exact size, pull towards you rather than push, and prefer a ring or socket to an open-ended spanner on tight fasteners.",
      "**Screwdrivers:** match the tip to the screw head (flat, Phillips, Pozidriv, Torx) so the head is not damaged; never use them as chisels.",
      "**Torque wrench:** tighten critical fasteners to the specified torque, and store it at its lowest setting."
     ]
    },
    {
     "t": "h",
     "x": "Drilling"
    },
    {
     "t": "p",
     "x": "Drill speed is set by the **cutting speed**, the speed at which the cutting edge travels through the material, in metres per minute. Mild steel with a high-speed steel drill is typically cut at about 25 m/min; aluminium can be cut faster and hard steel slower. Larger drills must turn slower to keep the same edge speed."
    },
    {
     "t": "formula",
     "x": "N = (1000 × Vc) ÷ (π × D)",
     "where": "N spindle speed (rpm), Vc cutting speed (m/min), D drill diameter (mm)"
    },
    {
     "t": "worked",
     "title": "Worked example: drill speed",
     "problem": "Calculate the spindle speed for a 10 mm drill in mild steel at a cutting speed of 25 m/min.",
     "steps": [
      "N = (1000 × 25) ÷ (π × 10).",
      "N = 25 000 ÷ 31.42.",
      "N ≈ 796 rpm."
     ],
     "answer": "Set the drill press to the nearest speed, about 800 rpm."
    },
    {
     "t": "h",
     "x": "Tapping an internal thread"
    },
    {
     "t": "p",
     "x": "A tap cuts a thread inside a drilled hole. The hole must be the right size: too small and the tap jams or breaks, too large and the thread is weak. For a standard metric thread, the tap drill diameter is approximately the major diameter minus the pitch."
    },
    {
     "t": "formula",
     "x": "Tap drill = major diameter − pitch",
     "where": "All in mm. Example: M8 × 1.25 needs 8 − 1.25 = 6.75 mm; M10 × 1.5 needs 8.5 mm; M6 × 1 needs 5.0 mm"
    },
    {
     "t": "steps",
     "title": "Tapping a hole by hand",
     "items": [
      "Clamp the work and drill the tap drill size to the full depth needed, plus extra for blind holes.",
      "Lightly chamfer the hole edge with a larger drill so the tap starts square.",
      "Fit the taper (first) tap in the tap wrench and press it in square, turning clockwise.",
      "Apply cutting fluid and turn a half turn forward, then back a quarter turn to break the chip.",
      "Follow with the second and plug (bottoming) taps if a full thread to the bottom is needed.",
      "Clean the hole with a brush and compressed air at low pressure, wearing eye protection."
     ]
    },
    {
     "t": "warn",
     "x": "Wear eye protection when drilling, filing or cutting. Never wear gloves, loose sleeves or jewellery near a rotating drill, and tie back long hair. Clear chips with a brush, not by hand, and never reach round a spinning chuck."
    },
    {
     "t": "key",
     "items": [
      "Mark out with a scriber and centre punch and always clamp the work.",
      "Match the tool and size to the job; damaged or wrong tools cause damage and injury.",
      "Drill speed N = 1000 × Vc ÷ (π × D): bigger drills run slower.",
      "Tap drill ≈ major diameter − pitch for metric threads.",
      "No gloves or loose clothing near rotating tools; wear eye protection."
     ]
    }
   ]
  },
  {
   "id": "m03-l4",
   "title": "Reading engineering drawings",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "An engineering drawing is the contract between designer and maker. It states exactly what must be produced, so reading it correctly is as important as measuring correctly. Start at the **title block**: it gives the part name, drawing number, material, scale, projection symbol, units, general tolerances and revision. Always check the revision before you cut metal."
    },
    {
     "t": "h",
     "x": "Line types"
    },
    {
     "t": "table",
     "head": [
      "Line",
      "Appearance",
      "Meaning (ISO 128 convention)"
     ],
     "rows": [
      [
       "Visible outline",
       "Thick continuous",
       "Edges you can see"
      ],
      [
       "Hidden detail",
       "Thin dashed",
       "Edges behind a surface"
      ],
      [
       "Centre line",
       "Thin long-short chain",
       "Axes of holes, shafts, circles"
      ],
      [
       "Dimension and projection",
       "Thin continuous",
       "Dimension lines, extension lines and leaders"
      ],
      [
       "Cutting plane",
       "Thick-ended chain",
       "Where the section view is taken"
      ]
     ],
     "cap": "Common line types on mechanical drawings"
    },
    {
     "t": "h",
     "x": "Views and projection"
    },
    {
     "t": "p",
     "x": "A solid object is described by several two-dimensional views that line up with one another. Two systems exist. In **first-angle** projection, common in British and European practice, the view from the right is drawn on the left of the front view. In **third-angle** projection, common in North America, the view from the right is drawn on the right. The two look alike but read opposite, so find the projection symbol in the title block before you interpret the views."
    },
    {
     "t": "svg",
     "alt": "Front, top and right views of an L-shaped block arranged in third-angle projection, with the third-angle symbol on the right.",
     "cap": "Figure 2: third-angle projection of an L-shaped block and the third-angle symbol",
     "svg": "<svg viewBox=\"0 0 480 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<text x=\"14\" y=\"22\" class=\"tx txb\">L-block, third-angle projection</text>\n<rect x=\"80\" y=\"130\" width=\"90\" height=\"60\" class=\"ln fl\"/>\n<line x1=\"110\" y1=\"130\" x2=\"110\" y2=\"190\" class=\"ln\"/>\n<polygon points=\"80,260 170,260 170,230 110,230 110,200 80,200\" class=\"ln fl\"/>\n<rect x=\"200\" y=\"200\" width=\"60\" height=\"60\" class=\"ln fl\"/>\n<line x1=\"200\" y1=\"230\" x2=\"260\" y2=\"230\" class=\"ln\"/>\n<line x1=\"80\" y1=\"190\" x2=\"80\" y2=\"200\" class=\"ln1 lnm dash\"/>\n<line x1=\"110\" y1=\"190\" x2=\"110\" y2=\"200\" class=\"ln1 lnm dash\"/>\n<line x1=\"170\" y1=\"190\" x2=\"170\" y2=\"230\" class=\"ln1 lnm dash\"/>\n<line x1=\"170\" y1=\"230\" x2=\"200\" y2=\"230\" class=\"ln1 lnm dash\"/>\n<line x1=\"170\" y1=\"200\" x2=\"200\" y2=\"200\" class=\"ln1 lnm dash\"/>\n<line x1=\"170\" y1=\"260\" x2=\"200\" y2=\"260\" class=\"ln1 lnm dash\"/>\n<text x=\"125\" y=\"122\" class=\"txs txc\">Top view</text>\n<text x=\"125\" y=\"280\" class=\"txs txc\">Front view</text>\n<text x=\"230\" y=\"280\" class=\"txs txc\">Right view</text>\n<text x=\"14\" y=\"296\" class=\"txs txm\">Base 60 × 40 × 20 mm, with a 20 × 40 × 20 mm riser at the left end.</text>\n<text x=\"14\" y=\"310\" class=\"txs txm\">Thin dashed lines are projection lines between views.</text>\n<text x=\"360\" y=\"108\" class=\"tx txb txc\">Third-angle symbol</text>\n<polygon points=\"320,125 360,135 360,175 320,185\" class=\"ln fl\"/>\n<line x1=\"305\" y1=\"155\" x2=\"410\" y2=\"155\" class=\"lnm ln1 dash\"/>\n<circle cx=\"390\" cy=\"155\" r=\"30\" class=\"ln fl\"/>\n<circle cx=\"390\" cy=\"155\" r=\"17\" class=\"ln\"/>\n<text x=\"360\" y=\"212\" class=\"txs txc\">Side view of cone left,</text>\n<text x=\"360\" y=\"226\" class=\"txs txc\">end view on the right</text>\n<text x=\"360\" y=\"252\" class=\"txs txm txc\">Check this symbol in the</text>\n<text x=\"360\" y=\"266\" class=\"txs txm txc\">title block before reading</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "A **section view** shows the inside of a part as if it were cut open. The cut face is filled with thin hatching, normally at 45°, which helps you see the material and where bores and recesses lie."
    },
    {
     "t": "h",
     "x": "Dimensions and tolerances"
    },
    {
     "t": "p",
     "x": "Every dimension is shown once, outside the view where possible, with extension lines, a dimension line and arrowheads. A **tolerance** is the permitted variation. It can be written as plus and minus values (25.00 ±0.05), as limits (24.95 to 25.05), or as an ISO 286 fit code such as Ø20 H7/f7, where the capital letter and number define the hole and the lower case letter and number define the shaft. A general tolerance note in the title block covers every dimension without its own tolerance."
    },
    {
     "t": "p",
     "x": "Geometric tolerances (ISO 1101) control form, orientation and position in a frame on the drawing, for example flatness, perpendicularity or the position of a hole. Surface finish is given as a roughness value Ra in micrometres: about 0.8 µm for a ground bearing seat, and 1.6 to 3.2 µm for a normal turned surface."
    },
    {
     "t": "worked",
     "title": "Worked example: clearance of a fit",
     "problem": "A hole is toleranced Ø20 +0.021/0 and the mating shaft is Ø20 −0.020/−0.041 (an H7/f7 fit from ISO 286 tables). Find the minimum and maximum clearance.",
     "steps": [
      "Hole limits: 20.000 mm (minimum) to 20.021 mm (maximum).",
      "Shaft limits: 19.959 mm (minimum) to 19.980 mm (maximum).",
      "Minimum clearance = smallest hole − largest shaft = 20.000 − 19.980 = 0.020 mm.",
      "Maximum clearance = largest hole − smallest shaft = 20.021 − 19.959 = 0.062 mm."
     ],
     "answer": "Clearance varies from 0.020 mm to 0.062 mm, so the shaft always turns freely in the hole."
    },
    {
     "t": "note",
     "x": "Tolerances add up. If three 25.00 ±0.05 mm blocks are stacked, the total can be as large as 75.15 mm or as small as 74.85 mm. This tolerance stack decides whether an assembly will fit."
    },
    {
     "t": "key",
     "items": [
      "Read the title block first, including projection symbol, units, scale and revision.",
      "Thick lines are visible edges, thin dashed lines are hidden edges, chain lines are centres.",
      "First and third-angle projections place views differently; check the symbol.",
      "Tolerances give limits; clearance = hole limit minus shaft limit.",
      "Tolerances stack in assemblies and finish is given as Ra in µm."
     ]
    }
   ]
  },
  {
   "id": "m03-l5",
   "title": "Electrical schematics and wiring diagrams",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "Electrical and mechatronic equipment is documented by several kinds of drawing, and each answers a different question. A **block diagram** shows the main parts and signal flow. A **schematic** (circuit diagram) shows how the circuit works using standard symbols. A **wiring** or **connection diagram** shows the real terminals, cables and routes, and a **layout** drawing shows where devices sit in the panel or building."
    },
    {
     "t": "svg",
     "alt": "Two panels: left, a schematic of fuse, switch and lamp between live and neutral; right, a wiring diagram showing the same circuit between a distribution board, a wall switch box and a lamp holder with terminal numbers.",
     "cap": "Figure 3: the same lamp circuit as a schematic (logic) and as a wiring diagram (physical connections)",
     "svg": "<svg viewBox=\"0 0 680 266\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<text x=\"10\" y=\"20\" class=\"tx txb\">Schematic (how it works)</text>\n<line x1=\"30\" y1=\"60\" x2=\"70\" y2=\"60\" class=\"ln\"/>\n<rect x=\"70\" y=\"50\" width=\"40\" height=\"20\" class=\"ln fl\"/>\n<text x=\"90\" y=\"44\" class=\"txs txc\">F1 fuse</text>\n<line x1=\"110\" y1=\"60\" x2=\"150\" y2=\"60\" class=\"ln\"/>\n<circle cx=\"150\" cy=\"60\" r=\"3\" class=\"fi\"/>\n<line x1=\"150\" y1=\"60\" x2=\"188\" y2=\"40\" class=\"ln\"/>\n<circle cx=\"195\" cy=\"60\" r=\"3\" class=\"fi\"/>\n<text x=\"172\" y=\"30\" class=\"txs txc\">S1 switch</text>\n<line x1=\"198\" y1=\"60\" x2=\"250\" y2=\"60\" class=\"ln\"/>\n<circle cx=\"265\" cy=\"60\" r=\"15\" class=\"ln fl\"/>\n<line x1=\"254\" y1=\"49\" x2=\"276\" y2=\"71\" class=\"ln1\"/>\n<line x1=\"276\" y1=\"49\" x2=\"254\" y2=\"71\" class=\"ln1\"/>\n<text x=\"265\" y=\"94\" class=\"txs txc\">H1 lamp</text>\n<line x1=\"280\" y1=\"60\" x2=\"310\" y2=\"60\" class=\"ln\"/>\n<line x1=\"310\" y1=\"60\" x2=\"310\" y2=\"140\" class=\"ln\"/>\n<line x1=\"310\" y1=\"140\" x2=\"30\" y2=\"140\" class=\"ln\"/>\n<text x=\"24\" y=\"64\" class=\"tx txe txb\">L</text>\n<text x=\"24\" y=\"144\" class=\"tx txe txb\">N</text>\n<text x=\"170\" y=\"164\" class=\"txs txm txc\">Symbols and logic only. Position on the page is not</text>\n<text x=\"170\" y=\"178\" class=\"txs txm txc\">the position in the building.</text>\n<line x1=\"340\" y1=\"10\" x2=\"340\" y2=\"250\" class=\"lnm ln1 dash\"/>\n<text x=\"356\" y=\"20\" class=\"tx txb\">Wiring diagram (where it goes)</text>\n<rect x=\"360\" y=\"40\" width=\"100\" height=\"90\" class=\"ln fl\"/>\n<text x=\"410\" y=\"58\" class=\"txs txc\">Distribution board</text>\n<rect x=\"372\" y=\"72\" width=\"26\" height=\"16\" class=\"ln1 fla\"/><text x=\"385\" y=\"84\" class=\"txs txc\">L</text>\n<rect x=\"372\" y=\"100\" width=\"26\" height=\"16\" class=\"ln1 fla\"/><text x=\"385\" y=\"112\" class=\"txs txc\">N</text>\n<rect x=\"560\" y=\"40\" width=\"100\" height=\"60\" class=\"ln fl\"/>\n<text x=\"610\" y=\"58\" class=\"txs txc\">Wall switch box</text>\n<rect x=\"572\" y=\"68\" width=\"26\" height=\"16\" class=\"ln1 fla\"/><text x=\"585\" y=\"80\" class=\"txs txc\">1</text>\n<rect x=\"622\" y=\"68\" width=\"26\" height=\"16\" class=\"ln1 fla\"/><text x=\"635\" y=\"80\" class=\"txs txc\">2</text>\n<rect x=\"560\" y=\"170\" width=\"100\" height=\"70\" class=\"ln fl\"/>\n<text x=\"610\" y=\"234\" class=\"txs txc\">Lamp holder</text>\n<rect x=\"572\" y=\"200\" width=\"26\" height=\"16\" class=\"ln1 fla\"/><text x=\"585\" y=\"212\" class=\"txs txc\">L</text>\n<rect x=\"622\" y=\"200\" width=\"26\" height=\"16\" class=\"ln1 fla\"/><text x=\"635\" y=\"212\" class=\"txs txc\">N</text>\n<path d=\"M398,80 L560,80 L572,76\" class=\"lnr\"/>\n<text x=\"480\" y=\"74\" class=\"txs txc\">brown</text>\n<path d=\"M648,76 L664,76 L664,150 L585,150 L585,200\" class=\"lnr\"/>\n<path d=\"M398,108 L430,108 L430,254 L635,254 L635,216\" class=\"lnb\"/>\n<text x=\"520\" y=\"248\" class=\"txs txc\">blue (neutral)</text>\n</svg>"
    },
    {
     "t": "h",
     "x": "Symbols and identifiers"
    },
    {
     "t": "p",
     "x": "Schematics use standard graphical symbols, defined by IEC 60617, so that a drawing made in one country can be read in another. Typical symbols are the resistor (a rectangle), the capacitor (two parallel plates), the contacts of a switch, a lamp (a circle with a cross), a motor (a circle with M) and a coil (a rectangle). Each device also has a reference designation, typically a letter and number, such as F1 for a fuse, S1 for a switch, K1 for a relay or contactor, Q1 for a breaker, H1 for a lamp and M1 for a motor. The same designation is printed on the real device, which links the paper to the panel."
    },
    {
     "t": "h",
     "x": "How a control schematic is laid out"
    },
    {
     "t": "ul",
     "items": [
      "Power and control circuits are usually drawn separately, with the control circuit between two vertical or horizontal supply lines.",
      "Current normally flows from the top (or left) supply line down through the devices to the other supply line.",
      "Switches and contacts are drawn in their **de-energised, unoperated** state, so a normally open contact is shown open.",
      "A coil and its contacts can be far apart on the page; the **cross-reference** table beneath each coil tells you on which sheet and column its contacts are used.",
      "Terminals and wires carry numbers or labels so that a wire can be found at both ends."
     ]
    },
    {
     "t": "steps",
     "title": "Tracing a circuit from a drawing",
     "items": [
      "Identify the supply and its protection at the start of the circuit.",
      "Follow the path from the supply through each device in series to the load.",
      "For each device note the state shown (open or closed) and what operates it.",
      "Use the cross-references to find every contact of each relay or contactor coil.",
      "Match drawn terminal numbers to the physical terminals before measuring anything."
     ]
    },
    {
     "t": "h",
     "x": "Process and instrumentation diagrams"
    },
    {
     "t": "p",
     "x": "Plant that moves liquids or gases is shown on a **piping and instrumentation diagram (P&ID)**. It shows tanks, pumps, valves, pipes and instruments with tag numbers, such as a level transmitter or a pressure switch. It is the map the technician uses to see what the sensors and actuators are physically connected to."
    },
    {
     "t": "warn",
     "x": "A drawing shows what the designer intended, not always what is installed. Panels get modified and drawings go out of date. Never assume a circuit is dead because the drawing says so: isolate, lock out and prove dead with a tested meter first."
    },
    {
     "t": "tip",
     "x": "Keep a marked-up copy of the drawing and update it every time you change the equipment. A correct as-built drawing saves hours on the next fault."
    },
    {
     "t": "key",
     "items": [
      "A schematic shows how a circuit works; a wiring diagram shows where the wires physically go.",
      "IEC 60617 defines the graphical symbols used so that drawings are universally readable.",
      "Devices carry reference designations such as F1, S1, K1, M1 matched on the panel.",
      "Contacts are drawn in the unoperated state; cross-references link coils to their contacts.",
      "Drawings can be out of date, so always prove dead before working."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m03-q1",
   "q": "A caliper reads 0.15 mm when its jaws are fully closed, although its display resolves 0.01 mm. Which statement is correct?",
   "opts": [
    "Its resolution is fine but its readings are inaccurate until the zero error is corrected",
    "It has coarse resolution and good accuracy because the display shows two decimals",
    "It is precise and accurate because the digits are steady and repeat",
    "It needs no check because digital instruments cannot drift"
   ],
   "a": 0,
   "why": "Resolution is the smallest step shown, not how close the reading is to the truth. A zero error makes every reading wrong by the same amount, so reset or correct it first."
  },
  {
   "id": "m03-q2",
   "q": "Which description fits the word precision?",
   "opts": [
    "How close the reading is to the true value",
    "How closely repeated readings agree with each other",
    "The smallest step the display can show",
    "The date of the last calibration certificate"
   ],
   "a": 1,
   "why": "Precision is repeatability. Accuracy is closeness to the true value and resolution is the smallest displayed step."
  },
  {
   "id": "m03-q3",
   "q": "A steel bar 200 mm long is measured at 35 °C, 15 °C above the 20 °C reference. Using α = 11.5 × 10⁻⁶ per °C, by how much has it expanded?",
   "opts": [
    "0.345 mm",
    "0.0115 mm",
    "0.0345 mm",
    "0.00345 mm"
   ],
   "a": 2,
   "why": "ΔL = 11.5 × 10⁻⁶ × 200 × 15 = 0.0345 mm. That is more than three micrometer divisions, so a warm part read with a micrometer gives a wrong size."
  },
  {
   "id": "m03-q4",
   "q": "On a 0.02 mm vernier caliper the vernier zero is just past 31 mm and line 12 aligns with a main scale line. What is the reading?",
   "opts": [
    "31.12 mm",
    "31.20 mm",
    "32.40 mm (12 × 0.2)",
    "31.24 mm"
   ],
   "a": 3,
   "why": "12 × 0.02 mm = 0.24 mm, added to the 31 mm main scale reading gives 31.24 mm."
  },
  {
   "id": "m03-q5",
   "q": "A micrometer shows 12.5 mm on the sleeve (including the half-millimetre mark) and thimble line 37 at the datum. What is the reading?",
   "opts": [
    "12.37 mm",
    "12.87 mm",
    "13.20 mm (12.5 + 0.7)",
    "12.57 mm"
   ],
   "a": 1,
   "why": "Thimble 37 × 0.01 mm = 0.37 mm. Add to 12.5 mm to get 12.87 mm."
  },
  {
   "id": "m03-q6",
   "q": "Why should a micrometer be closed on a part using the ratchet?",
   "opts": [
    "It makes the thimble turn faster",
    "It lets you read the scale from further away",
    "It slips at a set force so every reading uses the same measuring force",
    "It locks the spindle so the reading cannot change"
   ],
   "a": 2,
   "why": "The friction ratchet limits the force applied, which protects the part and the screw and makes readings repeatable between technicians."
  },
  {
   "id": "m03-q7",
   "q": "What tap drill diameter is used for an M10 × 1.5 metric thread?",
   "opts": [
    "8.5 mm",
    "10.0 mm",
    "11.5 mm",
    "7.5 mm"
   ],
   "a": 0,
   "why": "Tap drill ≈ major diameter − pitch = 10 − 1.5 = 8.5 mm."
  },
  {
   "id": "m03-q8",
   "q": "What spindle speed gives a cutting speed of 24 m/min on a 12 mm drill?",
   "opts": [
    "1273 rpm",
    "2000 rpm",
    "6.4 rpm",
    "637 rpm"
   ],
   "a": 3,
   "why": "N = 1000 × 24 ÷ (π × 12) = 24 000 ÷ 37.7 ≈ 637 rpm. Using the radius instead of the diameter gives the wrong answer of 1273 rpm."
  },
  {
   "id": "m03-q9",
   "q": "On an engineering drawing, which line type shows an edge hidden behind a surface?",
   "opts": [
    "Thick continuous",
    "Thin long-short chain",
    "Thin continuous",
    "Thin dashed"
   ],
   "a": 3,
   "why": "Hidden detail is drawn as a thin dashed line. Chain lines are centre lines and thin continuous lines are dimensions."
  },
  {
   "id": "m03-q10",
   "q": "In third-angle projection, where is the right-hand view drawn relative to the front view?",
   "opts": [
    "Below it",
    "To the right of it",
    "To the left of it",
    "Above it"
   ],
   "a": 1,
   "why": "In third-angle projection the right view sits on the right of the front view. In first angle it is drawn on the left."
  },
  {
   "id": "m03-q11",
   "q": "A hole is Ø20 +0.021/0 and the shaft is Ø20 −0.020/−0.041. What is the minimum clearance?",
   "opts": [
    "0.062 mm (the maximum)",
    "0.041 mm",
    "0.020 mm",
    "0.021 mm"
   ],
   "a": 2,
   "why": "Minimum clearance = smallest hole − largest shaft = 20.000 − 19.980 = 0.020 mm. The 0.062 mm figure is the maximum clearance."
  },
  {
   "id": "m03-q12",
   "q": "Which type of drawing best shows the actual terminal numbers and cable routes on site?",
   "opts": [
    "Block diagram",
    "Schematic circuit diagram",
    "Layout of the building",
    "Wiring (connection) diagram"
   ],
   "a": 3,
   "why": "A wiring diagram shows the physical connections and terminals. A schematic shows the logic of the circuit and a block diagram only the main parts."
  },
  {
   "id": "m03-q13",
   "q": "A drawing shows an isolator as open, so you start work on the panel. What is the best action?",
   "opts": [
    "Carry on because the drawing is the official record",
    "Prove the circuit dead with a tested meter after locking out, because drawings can be out of date",
    "Work faster so the circuit has less chance to become live",
    "Ask someone else to check the drawing and then start"
   ],
   "a": 1,
   "why": "A drawing shows intent, not the present state. Panels get changed and switches get operated, so safe isolation and proving dead are always required."
  },
  {
   "id": "m03-q14",
   "q": "Three blocks each 25.00 ±0.05 mm are stacked. What is the largest possible total height?",
   "opts": [
    "75.05 mm",
    "75.10 mm",
    "75.15 mm",
    "75.30 mm"
   ],
   "a": 2,
   "why": "The worst case adds all three upper limits: 3 × 25.05 = 75.15 mm. This tolerance stack decides whether the assembly fits."
  }
 ],
 "cards": [
  {
   "f": "Define resolution.",
   "b": "The smallest change in value an instrument can display or distinguish, such as 0.01 mm on a micrometer."
  },
  {
   "f": "Difference between accuracy and precision?",
   "b": "Accuracy is closeness to the true value. Precision is how closely repeated readings agree with each other."
  },
  {
   "f": "At what temperature are dimensions defined?",
   "b": "20 °C. Warmer parts expand and read large."
  },
  {
   "f": "Thermal expansion formula and steel's α?",
   "b": "ΔL = α × L × ΔT, with α ≈ 11.5 × 10⁻⁶ per °C for steel."
  },
  {
   "f": "Resolution of a vernier with 50 divisions over 49 mm?",
   "b": "0.02 mm: each vernier division is 0.98 mm, 0.02 mm shorter than a main division."
  },
  {
   "f": "How do you read a vernier caliper?",
   "b": "Main scale reading to the left of the vernier zero plus (aligned vernier line × resolution)."
  },
  {
   "f": "Micrometer spindle pitch and thimble divisions?",
   "b": "0.5 mm pitch and 50 thimble divisions, so each division is 0.01 mm."
  },
  {
   "f": "What does a dial indicator measure?",
   "b": "Relative movement from a set zero: run-out, alignment, backlash, flatness."
  },
  {
   "f": "Drill speed formula?",
   "b": "N = 1000 × Vc ÷ (π × D), with Vc in m/min, D in mm and N in rpm."
  },
  {
   "f": "Tap drill size for a metric thread?",
   "b": "Major diameter minus the pitch. For M8 × 1.25 that is 6.75 mm."
  },
  {
   "f": "What is a title block?",
   "b": "The box on a drawing giving part name, number, material, scale, projection, units, tolerances and revision."
  },
  {
   "f": "First-angle versus third-angle projection?",
   "b": "In first angle the right view is drawn left of the front view; in third angle it is drawn to the right."
  },
  {
   "f": "Clearance formulas for a hole and shaft?",
   "b": "Minimum = smallest hole − largest shaft. Maximum = largest hole − smallest shaft."
  },
  {
   "f": "Schematic versus wiring diagram?",
   "b": "A schematic shows how the circuit works with symbols. A wiring diagram shows the real terminals, cables and routes."
  }
 ],
 "terms": [
  {
   "t": "Measurand",
   "d": "The physical quantity being measured."
  },
  {
   "t": "Resolution",
   "d": "The smallest change in a quantity that an instrument can show."
  },
  {
   "t": "Accuracy",
   "d": "How close a measured value is to the true value."
  },
  {
   "t": "Precision",
   "d": "How closely repeated measurements of the same quantity agree with each other."
  },
  {
   "t": "Calibration",
   "d": "Comparing an instrument with a reference of known value and recording the difference."
  },
  {
   "t": "Parallax error",
   "d": "A reading error caused by viewing a scale from an angle instead of square on."
  },
  {
   "t": "Vernier scale",
   "d": "A sliding auxiliary scale that allows a main scale to be read to a fraction of its smallest division."
  },
  {
   "t": "Cutting speed",
   "d": "The speed at which a cutting edge moves through the material, in metres per minute."
  },
  {
   "t": "Tolerance",
   "d": "The permitted variation in a dimension, given as limits or plus and minus values."
  },
  {
   "t": "Schematic",
   "d": "A circuit drawing that uses standard symbols to show how a circuit works rather than where parts are."
  },
  {
   "t": "Wiring diagram",
   "d": "A drawing showing the actual terminals, cables and routes between devices."
  }
 ],
 "formulas": [
  {
   "n": "Thermal expansion",
   "f": "ΔL = α × L × ΔT",
   "v": "α about 11.5 × 10⁻⁶ per °C for steel, L in mm, ΔT in °C"
  },
  {
   "n": "Vernier resolution",
   "f": "r = main division ÷ vernier divisions",
   "v": "1 mm ÷ 50 divisions = 0.02 mm"
  },
  {
   "n": "Drill speed",
   "f": "N = 1000 × Vc ÷ (π × D)",
   "v": "N rpm, Vc m/min, D mm"
  },
  {
   "n": "Tap drill",
   "f": "d = major diameter − pitch",
   "v": "All in mm, metric coarse threads"
  },
  {
   "n": "Clearance limits",
   "f": "Cmin = Hmin − Smax; Cmax = Hmax − Smin",
   "v": "H hole size, S shaft size, in mm"
  }
 ]
});
