window.MECH.register({
 "id": "m18",
 "n": 18,
 "title": "Robotics, Servo and Motion Control",
 "short": "Robotics and Motion",
 "group": "Control & Automation",
 "blurb": "Robot types, axes and frames, safe robot work under ISO 10218, servo and stepper systems, linear motion mechanisms, motion profiles and CNC basics, with calculations.",
 "outcomes": [
  "Identify robot types and describe axes, degrees of freedom, work envelope and end effectors",
  "Explain joint, world, tool and user coordinate frames",
  "Describe safe robot teaching and operating practice under ISO 10218",
  "Explain a servo system with its position, velocity and current loops",
  "Calculate stepper resolution and steps per mm with microstepping",
  "Calculate speed and resolution of a ball-screw axis",
  "Calculate the time of a trapezoidal move",
  "Read simple G-code and diagnose common motion problems"
 ],
 "lessons": [
  {
   "id": "m18-l1",
   "title": "Robot types, axes and end effectors",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "An industrial **robot** is a reprogrammable, multi-axis machine that moves a tool through space. Robots are used for welding, painting, palletising, machine tending, assembly and packing, where they work faster, more consistently and more safely than a person over long hours."
    },
    {
     "t": "table",
     "head": [
      "Type",
      "Axes and motion",
      "Typical use"
     ],
     "rows": [
      [
       "Articulated (jointed arm)",
       "Usually 6 rotary joints; very flexible reach",
       "Welding, painting, machine tending, material handling"
      ],
      [
       "SCARA",
       "Two rotary joints in a horizontal plane plus a vertical linear axis and a wrist rotation; stiff vertically, compliant sideways",
       "Fast pick-and-place and assembly of small parts"
      ],
      [
       "Delta (parallel)",
       "Three arms joined to one platform above the work; very light and very fast",
       "High-speed picking in food and packaging"
      ],
      [
       "Cartesian (gantry)",
       "Three linear axes at right angles (X, Y, Z)",
       "Pick-and-place over large areas, 3D printers, palletising"
      ],
      [
       "Collaborative (cobot)",
       "Usually a small articulated arm with force sensing and rounded design",
       "Light tasks working near people, with a risk assessment"
      ]
     ],
     "cap": "Common robot types"
    },
    {
     "t": "svg",
     "alt": "A line drawing of a six-axis articulated robot on a base. Joints J1 at the base, J2 shoulder, J3 elbow and J4 to J6 at the wrist are labelled, with the tool at the end.",
     "cap": "Figure 1: a six-axis articulated robot",
     "svg": "<svg viewBox=\"0 0 640 330\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<rect x=\"50\" y=\"270\" width=\"100\" height=\"28\" class=\"ln fl\"/>\n<line x1=\"100\" y1=\"270\" x2=\"100\" y2=\"200\" class=\"ln lnb\"/>\n<line x1=\"100\" y1=\"200\" x2=\"210\" y2=\"100\" class=\"ln lnb\"/>\n<line x1=\"210\" y1=\"100\" x2=\"310\" y2=\"100\" class=\"ln lnb\"/>\n<line x1=\"310\" y1=\"100\" x2=\"350\" y2=\"100\" class=\"ln lnb\"/>\n<line x1=\"350\" y1=\"86\" x2=\"350\" y2=\"114\" class=\"ln\"/><line x1=\"350\" y1=\"86\" x2=\"374\" y2=\"86\" class=\"ln\"/><line x1=\"350\" y1=\"114\" x2=\"374\" y2=\"114\" class=\"ln\"/>\n<circle cx=\"100\" cy=\"270\" r=\"9\" class=\"ln fla\"/><circle cx=\"100\" cy=\"200\" r=\"9\" class=\"ln fla\"/><circle cx=\"210\" cy=\"100\" r=\"9\" class=\"ln fla\"/><circle cx=\"310\" cy=\"100\" r=\"9\" class=\"ln fla\"/>\n<text x=\"160\" y=\"288\" class=\"txs txb\">J1 base rotation</text>\n<text x=\"84\" y=\"196\" class=\"txs txb txe\">J2 shoulder</text>\n<text x=\"210\" y=\"80\" class=\"txs txb txc\">J3 elbow</text>\n<text x=\"310\" y=\"80\" class=\"txs txb txc\">J4 J5 J6 wrist</text>\n<text x=\"384\" y=\"104\" class=\"txs txb\">tool (end effector)</text>\n<text x=\"400\" y=\"190\" class=\"tx txb\">6 axes = 6 degrees of freedom</text>\n<text x=\"400\" y=\"210\" class=\"txs\">3 set the tool position (J1 to J3)</text>\n<text x=\"400\" y=\"226\" class=\"txs\">3 set the tool orientation (J4 to J6)</text>\n<text x=\"400\" y=\"256\" class=\"txs txm\">Work envelope: the reachable space.</text>\n<text x=\"400\" y=\"272\" class=\"txs txm\">Payload: the maximum mass at the tool,</text>\n<text x=\"400\" y=\"288\" class=\"txs txm\">including the gripper.</text>\n</svg>"
    },
    {
     "t": "h",
     "x": "Axes and degrees of freedom"
    },
    {
     "t": "p",
     "x": "Each independent movement is an **axis** and gives one **degree of freedom (DOF)**. To place a tool at any position and orientation in space a robot needs **six** DOF: three for position (X, Y, Z) and three for orientation (roll, pitch and yaw). A robot with fewer than six axes, such as a SCARA with four, cannot reach every orientation, but it is cheaper and often faster. Robots with more than six axes are called redundant and can reach around obstacles."
    },
    {
     "t": "h",
     "x": "Performance data"
    },
    {
     "t": "ul",
     "items": [
      "**Payload:** the greatest mass the wrist can carry, including the gripper and the part. Exceeding it reduces accuracy and wears the gearboxes.",
      "**Reach and work envelope:** the volume of space the tool can reach. The robot cannot go beyond it and it is usually partly blocked by the base and arm.",
      "**Repeatability:** how closely the robot returns to the same taught point, usually a few hundredths of a millimetre. This is better than its **absolute accuracy**, which is how close it gets to a point defined by numbers in space.",
      "**Speed and acceleration** of each axis, and **cycle time** for a given move."
     ]
    },
    {
     "t": "h",
     "x": "End effectors"
    },
    {
     "t": "p",
     "x": "The **end effector** (tool) does the actual work: a **gripper** (parallel jaws or angular fingers, driven pneumatically or electrically), a **vacuum cup** (Module 14), a welding torch, a paint gun, a dispenser, a screwdriver or a measuring probe. Choose it for the part's shape, mass, surface and the cycle time. Always include the tool's weight and centre of gravity in the robot's load data so that the controller can compensate."
    },
    {
     "t": "key",
     "items": [
      "Main types: articulated, SCARA, delta, Cartesian and collaborative.",
      "Six degrees of freedom are needed for a free position and orientation: 3 for position and 3 for orientation.",
      "Payload includes the gripper; the work envelope is the reachable space.",
      "Repeatability is usually much better than absolute accuracy.",
      "The end effector is chosen for the task, and its load data must be entered in the controller."
     ]
    }
   ]
  },
  {
   "id": "m18-l2",
   "title": "Coordinate frames, programming and robot safety",
   "minutes": 11,
   "body": [
    {
     "t": "h",
     "x": "Coordinate frames"
    },
    {
     "t": "p",
     "x": "A robot can be moved in several coordinate systems, and the jogging buttons on the teach pendant do different things in each."
    },
    {
     "t": "table",
     "head": [
      "Frame",
      "Origin and axes",
      "Used for"
     ],
     "rows": [
      [
       "Joint",
       "Each axis moves on its own",
       "Moving out of trouble; mastering; testing one axis"
      ],
      [
       "World (base)",
       "Fixed at the robot base or the cell",
       "Moving in straight lines in the cell"
      ],
      [
       "Tool (TCP)",
       "The tool centre point at the working end of the tool, moving with the tool",
       "Moving along the tool's own direction, such as plunging a drill along its axis"
      ],
      [
       "User",
       "A frame set by the programmer on a pallet, fixture or workpiece",
       "Programs that can be shifted when the fixture moves"
      ]
     ],
     "cap": "Robot coordinate frames"
    },
    {
     "t": "p",
     "x": "The **tool centre point (TCP)** must be measured and entered after changing the tool or if the tool is bent in a crash. A wrong TCP makes the robot rotate the tool about the wrong point, so it swings off the line. Calibrating the TCP is a standard commissioning task."
    },
    {
     "t": "h",
     "x": "Programming"
    },
    {
     "t": "ul",
     "items": [
      "**Teaching (online):** the programmer jogs the robot with the pendant to each point and records it, then adds motion type (joint move for speed or linear move for a straight path), speed, and inputs and outputs. Quick for simple tasks, but the cell is out of production while teaching.",
      "**Offline programming:** the program is written and simulated on a computer with a model of the cell, then downloaded and fine-tuned. Allows production to continue, and checks reach and collisions in advance.",
      "**Hand guiding (cobots):** the operator moves the arm by hand to record points.",
      "A good program uses **named points and variables**, subroutines, error handling and a clear safe **home position**."
     ]
    },
    {
     "t": "p",
     "x": "Watch for **singularities**: arm positions (such as the wrist fully straight) where two axes line up so that the controller cannot work out how to move in a straight line, and the axes may spin quickly or stop with an error. Avoid them in the path design."
    },
    {
     "t": "h",
     "x": "Safety (ISO 10218)"
    },
    {
     "t": "p",
     "x": "A robot is powerful, fast and can move without warning, so safety standards apply to the robot (ISO 10218-1) and its integration into a cell (ISO 10218-2). The risk assessment (Module 2) drives the safeguarding."
    },
    {
     "t": "ul",
     "items": [
      "**Fixed guards and interlocked gates** keep people out of the working space, with safety relays or a safety PLC monitoring the gates (ISO 13849-1).",
      "**Light curtains, laser scanners and pressure mats** detect people entering; the robot stops or slows.",
      "**Emergency stops** on the pendant and at each cell entry; an **enabling device** (a three-position switch) on the pendant must be held in the middle position for the robot to move in manual mode. Releasing it or squeezing it fully stops the robot.",
      "In **manual reduced-speed mode** for teaching, the tool speed is limited, typically to 250 mm/s. Never rely on this alone; plan an escape route and keep the pendant in your hands.",
      "**Collaborative operation** allows work without fences only when the risk assessment shows that speed, force and pressure limits keep contact safe, or that speed and separation monitoring keeps people at a safe distance. The ISO/TS 15066 technical specification gives guidance. A robot being 'collaborative' does not make the tool or the part safe: a sharp tool or a hot part is still a hazard.",
      "Lock out and tag the robot before working inside the cell, and support the arm mechanically if any axis brake is released."
     ]
    },
    {
     "t": "warn",
     "x": "Never enter the robot cell while the robot is in automatic mode or with the system only paused. Take the key, switch to manual, isolate the power and apply your own lock. A robot that is 'waiting' can start moving at once when its signal arrives."
    },
    {
     "t": "key",
     "items": [
      "Frames: joint, world, tool (TCP) and user; calibrate the TCP after any tool change.",
      "Teach online for simple jobs; program offline to save production time.",
      "Avoid singularities in the path.",
      "Use guards, interlocks, light curtains, emergency stops and the enabling device; teach speed is usually limited to 250 mm/s.",
      "Always isolate and lock out before entering the cell."
     ]
    }
   ]
  },
  {
   "id": "m18-l3",
   "title": "Servo systems",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "A **servo system** is a closed-loop drive that controls position, speed or torque with high accuracy and fast response. Servos are used in robots, CNC machines, packaging and printing machinery. A servo system has four parts: a **servo motor** (usually a permanent-magnet synchronous motor), a **feedback device**, a **servo drive** (amplifier) and a **controller** that gives the commands, which may be a PLC motion module, a motion controller or the drive itself."
    },
    {
     "t": "h",
     "x": "Feedback devices"
    },
    {
     "t": "ul",
     "items": [
      "**Encoder** (incremental or absolute, Module 11) gives position, and speed by differentiating the position.",
      "**Resolver:** a rugged, analogue rotary transformer that gives absolute position within one turn, tolerating heat, dirt and vibration.",
      "Linear scales give position directly on linear axes, bypassing the errors of screws and belts."
     ]
    },
    {
     "t": "h",
     "x": "Cascaded control loops"
    },
    {
     "t": "p",
     "x": "Servo drives use three nested loops (Module 17), each controlling a different quantity, with the fastest at the centre."
    },
    {
     "t": "svg",
     "alt": "Block diagram of nested servo loops. A target position goes through a position loop, a velocity loop and a current loop, then drives the motor and load. An encoder and current sensor feeds back position, speed and current to each loop.",
     "cap": "Figure 2: nested position, velocity and current loops in a servo",
     "svg": "<svg viewBox=\"0 0 700 270\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m18-f2-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<text x=\"8\" y=\"70\" class=\"txs\">target position</text>\n<line x1=\"8\" y1=\"100\" x2=\"46\" y2=\"100\" class=\"ln\" marker-end=\"url(#m18-f2-arr)\"/>\n<circle cx=\"58\" cy=\"100\" r=\"12\" class=\"ln fl\"/><text x=\"49\" y=\"96\" class=\"txs txb\">+</text><text x=\"60\" y=\"122\" class=\"txs txb\">−</text>\n<line x1=\"70\" y1=\"100\" x2=\"100\" y2=\"100\" class=\"ln\" marker-end=\"url(#m18-f2-arr)\"/>\n<rect x=\"102\" y=\"72\" width=\"96\" height=\"56\" class=\"ln flg\"/><text x=\"150\" y=\"98\" class=\"tx txb txc\">Position</text><text x=\"150\" y=\"114\" class=\"txs txc\">loop (P)</text>\n<line x1=\"198\" y1=\"100\" x2=\"226\" y2=\"100\" class=\"ln\"/>\n<circle cx=\"238\" cy=\"100\" r=\"12\" class=\"ln fl\"/><text x=\"229\" y=\"96\" class=\"txs txb\">+</text><text x=\"240\" y=\"122\" class=\"txs txb\">−</text>\n<line x1=\"250\" y1=\"100\" x2=\"280\" y2=\"100\" class=\"ln\" marker-end=\"url(#m18-f2-arr)\"/>\n<rect x=\"282\" y=\"72\" width=\"96\" height=\"56\" class=\"ln flg\"/><text x=\"330\" y=\"98\" class=\"tx txb txc\">Velocity</text><text x=\"330\" y=\"114\" class=\"txs txc\">loop (PI)</text>\n<line x1=\"378\" y1=\"100\" x2=\"406\" y2=\"100\" class=\"ln\"/>\n<circle cx=\"418\" cy=\"100\" r=\"12\" class=\"ln fl\"/><text x=\"409\" y=\"96\" class=\"txs txb\">+</text><text x=\"420\" y=\"122\" class=\"txs txb\">−</text>\n<line x1=\"430\" y1=\"100\" x2=\"460\" y2=\"100\" class=\"ln\" marker-end=\"url(#m18-f2-arr)\"/>\n<rect x=\"462\" y=\"72\" width=\"96\" height=\"56\" class=\"ln flg\"/><text x=\"510\" y=\"98\" class=\"tx txb txc\">Current</text><text x=\"510\" y=\"114\" class=\"txs txc\">loop + drive</text>\n<line x1=\"558\" y1=\"100\" x2=\"582\" y2=\"100\" class=\"ln\" marker-end=\"url(#m18-f2-arr)\"/>\n<rect x=\"584\" y=\"72\" width=\"108\" height=\"56\" class=\"ln fla\"/><text x=\"638\" y=\"98\" class=\"tx txb txc\">Motor</text><text x=\"638\" y=\"114\" class=\"txs txc\">and load</text>\n<text x=\"150\" y=\"58\" class=\"txs txm txc\">slowest loop</text><text x=\"330\" y=\"58\" class=\"txs txm txc\">faster</text><text x=\"510\" y=\"58\" class=\"txs txm txc\">fastest</text>\n<rect x=\"584\" y=\"176\" width=\"108\" height=\"46\" class=\"ln flb\"/><text x=\"638\" y=\"196\" class=\"tx txb txc\">Encoder</text><text x=\"638\" y=\"212\" class=\"txs txc\">and current sensor</text>\n<line x1=\"638\" y1=\"128\" x2=\"638\" y2=\"176\" class=\"ln dash\"/>\n<polyline points=\"584,199 58,199 58,114\" class=\"ln\" marker-end=\"url(#m18-f2-arr)\"/>\n<polyline points=\"238,199 238,114\" class=\"ln\" marker-end=\"url(#m18-f2-arr)\"/>\n<polyline points=\"418,199 418,114\" class=\"ln\" marker-end=\"url(#m18-f2-arr)\"/>\n<circle cx=\"58\" cy=\"199\" r=\"3\" class=\"fi\"/><circle cx=\"238\" cy=\"199\" r=\"3\" class=\"fi\"/><circle cx=\"418\" cy=\"199\" r=\"3\" class=\"fi\"/>\n<text x=\"68\" y=\"190\" class=\"txs\">position</text><text x=\"248\" y=\"190\" class=\"txs\">speed</text><text x=\"428\" y=\"190\" class=\"txs\">current</text>\n<text x=\"330\" y=\"252\" class=\"txs txm txc\">Each inner loop is faster than the loop around it. The encoder gives position and, by differencing, speed.</text>\n</svg>"
    },
    {
     "t": "ul",
     "items": [
      "The **current (torque) loop** is the innermost and fastest; it controls the motor current and so the torque. It also limits the current to protect the motor and the drive.",
      "The **velocity loop** compares the commanded and measured speed and sets the torque demand. It is usually PI.",
      "The **position loop** compares the target position with the actual position and sets the speed demand. It is usually only P, because the motor already integrates speed into position."
     ]
    },
    {
     "t": "p",
     "x": "The **following error** is the difference between the commanded and the actual position while the axis is moving. A small, steady following error is normal. If it exceeds a set limit the drive faults, to protect the machine from a jam or a broken feedback cable."
    },
    {
     "t": "h",
     "x": "Tuning symptoms"
    },
    {
     "t": "table",
     "head": [
      "Symptom",
      "Typical cause",
      "Remedy"
     ],
     "rows": [
      [
       "Motor buzzes or whines",
       "Velocity or position gain too high; resonance in the mechanics",
       "Reduce gains; use the drive's notch filter; stiffen the coupling"
      ],
      [
       "Motor is sluggish and overshoots when stopping",
       "Gain too low or inertia mismatch",
       "Increase gain gradually; check the load inertia ratio"
      ],
      [
       "Following error fault",
       "Move too fast or acceleration too high; jammed axis; feedback fault",
       "Reduce speed and acceleration; check for mechanical binding and the encoder cable"
      ],
      [
       "Position jumps or loses count",
       "Encoder noise, loose coupling, wrong shield",
       "Check coupling, screening, earthing and cable routing (Module 11)"
      ]
     ],
     "cap": "Servo problems"
    },
    {
     "t": "p",
     "x": "The **inertia ratio** (load inertia ÷ motor inertia, reflected through any gearbox) strongly affects tuning. A small ratio, around 1 to 5, is easy to control; ratios above about 10 need careful tuning and give less stiff, less accurate control. A gearbox reduces the reflected load inertia by the square of the gear ratio, which is one of the main reasons for fitting one."
    },
    {
     "t": "warn",
     "x": "A servo drive stores energy in its DC-bus capacitors (Module 10). Wait for the discharge time shown on the drive before removing any cover, and confirm that the DC bus is at zero volts. Brakes on vertical axes must be checked: an axis that falls on power-off can injure."
    },
    {
     "t": "key",
     "items": [
      "A servo has a motor, feedback, drive and controller.",
      "The innermost current loop is the fastest; velocity is PI; position is usually P.",
      "Following error is the difference between the commanded and actual position; excess causes a fault.",
      "Buzzing means the gain is too high or there is a resonance.",
      "Gearboxes reduce reflected inertia by the square of the ratio."
     ]
    }
   ]
  },
  {
   "id": "m18-l4",
   "title": "Stepper motors and linear motion",
   "minutes": 11,
   "body": [
    {
     "t": "h",
     "x": "Stepper motors"
    },
    {
     "t": "p",
     "x": "A **stepper motor** turns in fixed angular steps, one for each pulse from the driver. A typical motor has a **step angle of 1.8°**, so 360 ÷ 1.8 = **200 full steps per revolution**. It is run in **open loop**: the controller counts pulses and assumes that the rotor followed. That makes it simple and inexpensive, and it holds position at standstill with full torque, but if the load is too heavy the motor **stalls or loses steps** and the controller does not know."
    },
    {
     "t": "ul",
     "items": [
      "**Microstepping** divides each full step into smaller steps (for example 1/16) by shaping the currents in the coils. It gives smoother motion and finer positioning, but the extra steps do not carry proportionally more torque or accuracy: the real position error stays about the full-step error.",
      "**Torque falls with speed.** The torque-speed curve drops as speed rises, because the coil inductance limits the current. A higher supply voltage extends the range.",
      "**Resonance:** at certain speeds the rotor vibrates and may lose steps. Microstepping, damping and ramping through the region help.",
      "**Always accelerate gradually** (ramp) so the rotor can keep up with the pulses.",
      "Closed-loop steppers add an encoder and detect lost steps; they are a step towards a servo."
     ]
    },
    {
     "t": "worked",
     "title": "Worked example: stepper resolution",
     "problem": "A 1.8° stepper motor with a driver set to 1/16 microstepping drives a lead screw with a 5 mm lead (travel per revolution). Find the steps per revolution, steps per millimetre and the theoretical resolution.",
     "steps": [
      "Full steps per revolution = 360 ÷ 1.8 = 200. With 1/16 microstepping: 200 × 16 = 3200 microsteps per revolution.",
      "Steps per mm = 3200 ÷ 5 = 640 steps/mm.",
      "Resolution = 1 ÷ 640 = 0.00156 mm = 1.56 µm per microstep."
     ],
     "answer": "3200 microsteps per revolution, 640 steps/mm and a theoretical resolution of about 1.56 µm. The real accuracy is much lower, perhaps ±0.05 mm, because of the full-step error and the mechanics."
    },
    {
     "t": "h",
     "x": "Linear motion elements"
    },
    {
     "t": "table",
     "head": [
      "Element",
      "How it works",
      "Notes"
     ],
     "rows": [
      [
       "Ball screw",
       "A screw and nut with recirculating balls; the nut moves by the lead per turn",
       "Efficient (about 90 %), accurate, stiff; needs lubrication; may back-drive without a brake"
      ],
      [
       "Lead screw (trapezoidal)",
       "Sliding thread",
       "Cheaper and self-locking, but less efficient and wears"
      ],
      [
       "Toothed belt",
       "A belt over pulleys",
       "Long, fast and cheap; less stiff, with some stretch"
      ],
      [
       "Rack and pinion",
       "A gear on a toothed rack",
       "Long travel with high force; backlash must be controlled"
      ],
      [
       "Linear guide",
       "Rails with recirculating ball carriages",
       "Carries the load and gives smooth, accurate guidance"
      ],
      [
       "Linear motor",
       "Magnets and coils make a force directly",
       "No backlash or wear, very fast; expensive"
      ]
     ],
     "cap": "Common linear motion mechanisms"
    },
    {
     "t": "p",
     "x": "**Backlash** is the free play in a gear, nut or coupling. When the axis reverses, the motor turns a little before the load moves, which gives a position error. It is reduced by preloaded ball nuts, anti-backlash gears or software compensation, and is checked with a dial gauge by moving to a point from each direction."
    },
    {
     "t": "worked",
     "title": "Worked example: ball-screw axis",
     "problem": "A servo motor turns a ball screw of 10 mm lead directly at 3000 rev/min. The motor has an encoder of 2500 pulses per revolution, read ×4. Find the linear speed and the resolution. How does a 3:1 gearbox between the motor and screw change the speed?",
     "steps": [
      "Revolutions per second = 3000 ÷ 60 = 50 rev/s. Speed = 50 × 10 mm = 500 mm/s.",
      "Counts per revolution = 2500 × 4 = 10 000. Resolution = 10 mm ÷ 10 000 = 0.001 mm per count.",
      "With a 3:1 reduction the screw turns at 3000 ÷ 3 = 1000 rev/min = 16.7 rev/s, so the speed is 16.7 × 10 = 167 mm/s, three times lower, but with three times the thrust and the resolution at the load becomes 0.00033 mm per count."
     ],
     "answer": "Direct: 500 mm/s and 0.001 mm per count. With a 3:1 gearbox: 167 mm/s, about three times the force, and finer resolution at the load."
    },
    {
     "t": "key",
     "items": [
      "A 1.8° stepper has 200 full steps per revolution; microstepping divides these further.",
      "Steppers are open loop and can lose steps if overloaded; accelerate with a ramp.",
      "Torque falls with speed and resonance causes lost steps.",
      "Ball screws are efficient and accurate; belts are long and cheap; linear motors have no backlash.",
      "Speed = revolutions per second × lead; resolution = lead ÷ counts per revolution."
     ]
    }
   ]
  },
  {
   "id": "m18-l5",
   "title": "Motion profiles, CNC basics and fault finding",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "Motion axes must not jump instantly to full speed; the load's inertia and the mechanics demand a smooth change of speed. A **motion profile** describes how the speed changes during a move."
    },
    {
     "t": "svg",
     "alt": "A velocity against time graph. The trapezoidal profile rises linearly, holds constant speed and falls linearly; the area under it is the distance moved. A dashed S-curve profile rounds the corners.",
     "cap": "Figure 3: trapezoidal and S-curve motion profiles",
     "svg": "<svg viewBox=\"0 0 620 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<polygon points=\"70.0,220.0 170.0,100.0 470.0,100.0 570.0,220.0\" class=\"fla\"/>\n<line x1=\"70\" y1=\"220\" x2=\"590\" y2=\"220\" class=\"ln\"/><line x1=\"70\" y1=\"220\" x2=\"70\" y2=\"60\" class=\"ln\"/>\n<text x=\"62\" y=\"104\" class=\"txs txe\">v max</text><text x=\"62\" y=\"224\" class=\"txs txe\">0</text>\n<text x=\"580\" y=\"240\" class=\"txs txe\">time</text>\n<polyline points=\"70.0,220.0 170.0,100.0 470.0,100.0 570.0,220.0\" class=\"lnb\"/>\n<polyline points=\"70.0,220.0 75.0,219.1 80.0,216.6 85.0,212.7 90.0,207.5 95.0,201.3 100.0,194.1 105.0,186.2 110.0,177.8 115.0,169.0 120.0,160.0 125.0,151.0 130.0,142.2 135.0,133.8 140.0,125.9 145.0,118.8 150.0,112.5 155.0,107.3 160.0,103.4 165.0,100.9 170.0,100.0 180.0,100.0 190.0,100.0 200.0,100.0 210.0,100.0 220.0,100.0 230.0,100.0 240.0,100.0 250.0,100.0 260.0,100.0 270.0,100.0 280.0,100.0 290.0,100.0 300.0,100.0 310.0,100.0 320.0,100.0 330.0,100.0 340.0,100.0 350.0,100.0 360.0,100.0 370.0,100.0 380.0,100.0 390.0,100.0 400.0,100.0 410.0,100.0 420.0,100.0 430.0,100.0 440.0,100.0 450.0,100.0 460.0,100.0 470.0,100.0 470.0,100.0 475.0,100.9 480.0,103.4 485.0,107.3 490.0,112.5 495.0,118.8 500.0,125.9 505.0,133.8 510.0,142.2 515.0,151.0 520.0,160.0 525.0,169.0 530.0,177.8 535.0,186.2 540.0,194.1 545.0,201.3 550.0,207.5 555.0,212.7 560.0,216.6 565.0,219.1 570.0,220.0\" class=\"lnr dash\"/>\n<line x1=\"170\" y1=\"100\" x2=\"170\" y2=\"226\" class=\"ln1 lnm dash\"/><line x1=\"470\" y1=\"100\" x2=\"470\" y2=\"226\" class=\"ln1 lnm dash\"/>\n<text x=\"120\" y=\"248\" class=\"txs txc\">accelerate</text><text x=\"320\" y=\"248\" class=\"txs txc\">constant speed</text><text x=\"520\" y=\"248\" class=\"txs txc\">decelerate</text>\n<text x=\"320\" y=\"186\" class=\"tx txb txc\">distance = area under the curve</text>\n<line x1=\"340\" y1=\"42\" x2=\"366\" y2=\"42\" class=\"lnb\"/><text x=\"372\" y=\"46\" class=\"txs\">trapezoidal: abrupt jerk</text>\n<line x1=\"340\" y1=\"60\" x2=\"366\" y2=\"60\" class=\"lnr dash\"/><text x=\"372\" y=\"64\" class=\"txs\">S-curve: smooth, less vibration</text>\n<text x=\"320\" y=\"280\" class=\"txs txm txc\">The slope of the ramp is the acceleration; the S-curve rounds the corners to limit jerk.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "In the **trapezoidal** profile the axis accelerates at a constant rate, cruises, and decelerates at a constant rate. The distance moved is the area under the velocity curve. In the **S-curve** profile the acceleration itself changes gradually, which limits **jerk** (the rate of change of acceleration), so there is less vibration and less stress on the mechanics, at the cost of a slightly longer move."
    },
    {
     "t": "worked",
     "title": "Worked example: time of a trapezoidal move",
     "problem": "An axis moves 600 mm with a maximum speed of 300 mm/s and an acceleration and deceleration of 1500 mm/s². How long does the move take?",
     "steps": [
      "Time to reach full speed: t = v ÷ a = 300 ÷ 1500 = 0.2 s.",
      "Distance during acceleration = ½ × a × t² = 0.5 × 1500 × 0.2² = 30 mm. The same during deceleration, so the ramps cover 60 mm.",
      "Check the profile does reach full speed: 600 mm is more than 60 mm, so it does.",
      "Cruise distance = 600 − 60 = 540 mm at 300 mm/s = 1.8 s.",
      "Total time = 0.2 + 1.8 + 0.2 = 2.2 s."
     ],
     "answer": "The move takes 2.2 s. If the distance were less than v² ÷ a = 60 mm, the profile would be a triangle that never reaches full speed."
    },
    {
     "t": "h",
     "x": "CNC basics"
    },
    {
     "t": "p",
     "x": "A **CNC (computer numerical control)** machine such as a mill, lathe or router positions a tool using servo or stepper axes under a program, usually in **G-code**. Linear axes are named **X, Y and Z** (Z is along the spindle) and rotary axes **A, B and C**. Each machine has a **machine zero (home)**, found by moving each axis to a home switch, and a **work zero** set on the workpiece."
    },
    {
     "t": "table",
     "head": [
      "Code",
      "Meaning"
     ],
     "rows": [
      [
       "G00",
       "Rapid move to a position, not a cutting move"
      ],
      [
       "G01",
       "Linear move at the programmed feed rate (F)"
      ],
      [
       "G02 / G03",
       "Circular move clockwise / anticlockwise"
      ],
      [
       "G90 / G91",
       "Absolute / incremental dimensions"
      ],
      [
       "M03 / M05",
       "Spindle on clockwise / spindle stop"
      ],
      [
       "M30",
       "End of program"
      ]
     ],
     "cap": "Common G-codes and M-codes"
    },
    {
     "t": "p",
     "x": "Example: G90 G01 X50.0 Y20.0 F200 moves the tool in a straight line to the point (X50, Y20) at 200 mm/min, with absolute dimensions. Always prove a new program with the tool lifted off the work (a dry run), at a reduced feed and with the hand on the stop button."
    },
    {
     "t": "h",
     "x": "Homing and fault finding"
    },
    {
     "t": "ul",
     "items": [
      "**Homing:** an axis with incremental feedback must find a reference after power-up: it moves to a home switch, then to the encoder index pulse. Absolute encoders may need a battery or a multi-turn memory; if its battery fails, the robot or machine must be re-mastered.",
      "**Lost position:** check coupling, grub screws, belts and the encoder shield first.",
      "**Poor accuracy or chatter:** check for backlash, loose mountings, worn guides, ball screws that lack lubrication, and gains that are too high.",
      "**Overheating motor or drive:** the duty cycle may be too severe, the load may be binding, or a fan or filter may be blocked.",
      "**Axis drifts when stopped:** a brake that is not holding or an analogue offset in the drive."
     ]
    },
    {
     "t": "key",
     "items": [
      "A motion profile limits acceleration; the distance is the area under the velocity curve.",
      "Time of a trapezoidal move = v ÷ a (ramp) twice, plus the cruise time.",
      "An S-curve limits jerk for smoother motion.",
      "CNC machines use G-code: G00 rapid, G01 feed move, M03 spindle on, M30 end.",
      "Home incremental axes after power-up; re-master if absolute encoder data are lost."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m18-q1",
   "q": "How many degrees of freedom does a robot need to place a tool at any position and orientation?",
   "opts": [
    "3",
    "4 (a SCARA)",
    "6",
    "9 (redundant)"
   ],
   "a": 2,
   "why": "Three degrees of freedom set the position (X, Y, Z) and three set the orientation (roll, pitch, yaw), so six are needed."
  },
  {
   "id": "m18-q2",
   "q": "Which robot type is best suited to very fast picking of light items in packaging?",
   "opts": [
    "A six-axis articulated robot",
    "Delta (parallel) robot",
    "A Cartesian gantry system",
    "A large welding robot cell"
   ],
   "a": 1,
   "why": "Delta robots have light arms attached to a platform above the work, so they accelerate very quickly and are used for high-speed picking."
  },
  {
   "id": "m18-q3",
   "q": "What does the repeatability of a robot describe?",
   "opts": [
    "How closely it returns to the same taught point",
    "How close it gets to a point given only by coordinates",
    "How heavy a part it can lift",
    "How fast it runs"
   ],
   "a": 0,
   "why": "Repeatability is how consistently the robot reaches the same taught position. It is usually better than absolute accuracy."
  },
  {
   "id": "m18-q4",
   "q": "Why must the tool centre point (TCP) be calibrated after changing the tool?",
   "opts": [
    "So the program runs a lot faster overall",
    "To reset the robot's battery and memory",
    "To change the payload value in the data",
    "So it pivots about the right point"
   ],
   "a": 3,
   "why": "The controller moves and rotates about the TCP. A wrong TCP makes the tool swing off its programmed path."
  },
  {
   "id": "m18-q5",
   "q": "When teaching a robot in manual mode, what must the technician hold?",
   "opts": [
    "The guard key in a pocket",
    "Enabling switch held at middle",
    "The emergency stop button pressed in",
    "The brake release button pressed"
   ],
   "a": 1,
   "why": "The three-position enabling switch must be held in the middle position for movement. Releasing it or squeezing it fully stops the robot."
  },
  {
   "id": "m18-q6",
   "q": "Which loop is the innermost and fastest in a servo drive?",
   "opts": [
    "Position loop (outermost)",
    "Velocity loop (middle)",
    "Current loop",
    "Temperature trim loop"
   ],
   "a": 2,
   "why": "The current loop controls torque and has the fastest response. The velocity loop surrounds it and the position loop surrounds both."
  },
  {
   "id": "m18-q7",
   "q": "A servo drive faults with a 'following error' while the axis moves. What does this mean?",
   "opts": [
    "Position is too far from the command",
    "The encoder is brand new and unused",
    "The motor is too cold to operate",
    "The supply is three phase only"
   ],
   "a": 0,
   "why": "The following error is the difference between the commanded and actual position. If it exceeds the limit, the drive stops, which may indicate a jam, a broken encoder cable or too much acceleration."
  },
  {
   "id": "m18-q8",
   "q": "How many full steps per revolution does a 1.8° stepper motor have?",
   "opts": [
    "100 steps",
    "200",
    "400 steps",
    "360 steps"
   ],
   "a": 1,
   "why": "360 ÷ 1.8 = 200 full steps per revolution."
  },
  {
   "id": "m18-q9",
   "q": "A 1.8° stepper with 1/16 microstepping drives a 5 mm lead screw. How many microsteps per millimetre?",
   "opts": [
    "320",
    "1600",
    "640",
    "3200"
   ],
   "a": 2,
   "why": "200 × 16 = 3200 microsteps per revolution, divided by the 5 mm lead gives 640 steps per mm."
  },
  {
   "id": "m18-q10",
   "q": "Why do stepper motors lose steps at higher speed or load?",
   "opts": [
    "Torque falls so the rotor lags",
    "The pulses turn into electrical noise",
    "They always run very hot at any speed",
    "The driver stops counting the pulses"
   ],
   "a": 0,
   "why": "Torque falls as speed rises. If the load torque or acceleration exceeds what the motor can deliver, the rotor falls behind the pulses, and in open loop the controller cannot tell."
  },
  {
   "id": "m18-q11",
   "q": "A motor turns a 10 mm lead ball screw directly at 3000 rev/min. What is the linear speed?",
   "opts": [
    "About 50 mm/s",
    "About 30 mm/s",
    "About 300 mm/s",
    "500 mm/s"
   ],
   "a": 3,
   "why": "3000 rev/min = 50 rev/s, and 50 × 10 mm = 500 mm/s."
  },
  {
   "id": "m18-q12",
   "q": "An axis moves 600 mm at 300 mm/s maximum speed with an acceleration of 1500 mm/s². What is the total move time?",
   "opts": [
    "About 2.0 s",
    "2.2 s",
    "About 2.4 s",
    "About 1.8 s"
   ],
   "a": 1,
   "why": "Each ramp takes 0.2 s and covers 30 mm. The remaining 540 mm at 300 mm/s takes 1.8 s, so the total is 0.2 + 1.8 + 0.2 = 2.2 s."
  },
  {
   "id": "m18-q13",
   "q": "What does an S-curve motion profile do compared to a trapezoidal profile?",
   "opts": [
    "It increases the jerk of the move",
    "It removes the need for any drive unit",
    "It limits jerk, less vibration",
    "It always makes every move shorter"
   ],
   "a": 2,
   "why": "The S-curve ramps the acceleration smoothly, so jerk is limited and the mechanics are stressed less."
  },
  {
   "id": "m18-q14",
   "q": "In G-code, what does G01 X50 Y20 F200 do?",
   "opts": [
    "A rapid, non-cutting move to X50 Y20 now",
    "A circular arc move ending at X50 Y20",
    "Stops the spindle and ends the program",
    "A straight cut to X50 Y20, feed 200"
   ],
   "a": 3,
   "why": "G01 is a linear move at the programmed feed rate F. G00 is the rapid move and G02/G03 are circular moves."
  }
 ],
 "cards": [
  {
   "f": "What are the main robot types?",
   "b": "Articulated, SCARA, delta, Cartesian and collaborative."
  },
  {
   "f": "How many DOF for a free position and orientation?",
   "b": "Six: three for position and three for orientation."
  },
  {
   "f": "What is payload?",
   "b": "The maximum mass at the wrist, including the gripper."
  },
  {
   "f": "Repeatability versus accuracy?",
   "b": "Repeatability: returning to the same taught point. Accuracy: reaching a point defined by coordinates."
  },
  {
   "f": "What is the TCP?",
   "b": "The tool centre point: the reference point at the working end of the tool."
  },
  {
   "f": "What is a singularity?",
   "b": "A position where axes align and the controller cannot make a straight-line move properly."
  },
  {
   "f": "What is the purpose of an enabling device?",
   "b": "A three-position switch that must be held in the middle position to allow motion in manual mode."
  },
  {
   "f": "Teach speed limit?",
   "b": "Typically 250 mm/s in manual reduced-speed mode (ISO 10218)."
  },
  {
   "f": "Name the three servo loops.",
   "b": "Current (innermost), velocity, position (outermost)."
  },
  {
   "f": "What is following error?",
   "b": "The difference between the commanded and the actual position while moving."
  },
  {
   "f": "Steps per revolution of a 1.8° stepper?",
   "b": "200 full steps; multiply by the microstep factor."
  },
  {
   "f": "Why can a stepper lose steps?",
   "b": "Torque falls with speed, and it runs open loop; an overload makes the rotor fall behind unnoticed."
  },
  {
   "f": "Ball-screw speed formula?",
   "b": "v = revolutions per second × lead."
  },
  {
   "f": "What does G00 mean?",
   "b": "A rapid, non-cutting move to a position."
  }
 ],
 "terms": [
  {
   "t": "Degree of freedom",
   "d": "One independent movement of a mechanism, such as a rotation of a joint."
  },
  {
   "t": "End effector",
   "d": "The tool at the end of a robot arm, such as a gripper or welding torch."
  },
  {
   "t": "TCP",
   "d": "Tool centre point, the reference point of the tool used for programming."
  },
  {
   "t": "Singularity",
   "d": "An arm configuration in which axes align and motion control becomes undefined."
  },
  {
   "t": "Enabling device",
   "d": "A three-position switch that must be held to allow robot movement in manual mode."
  },
  {
   "t": "Servo",
   "d": "A closed-loop drive system using feedback for accurate position, speed or torque control."
  },
  {
   "t": "Following error",
   "d": "The difference between the commanded and actual position of an axis in motion."
  },
  {
   "t": "Microstepping",
   "d": "Dividing each full step of a stepper motor into smaller steps for smoother motion."
  },
  {
   "t": "Backlash",
   "d": "Free play in a mechanism that causes position error when the direction reverses."
  },
  {
   "t": "Jerk",
   "d": "The rate of change of acceleration."
  },
  {
   "t": "G-code",
   "d": "The programming language used to control CNC machines."
  }
 ],
 "formulas": [
  {
   "n": "Full steps per revolution",
   "f": "N = 360° ÷ step angle",
   "v": "1.8° gives 200"
  },
  {
   "n": "Steps per mm",
   "f": "steps/mm = microsteps per rev ÷ lead",
   "v": "3200 ÷ 5 = 640"
  },
  {
   "n": "Ball-screw speed",
   "f": "v = (rpm ÷ 60) × lead",
   "v": "mm/s when lead in mm"
  },
  {
   "n": "Resolution",
   "f": "d = lead ÷ counts per revolution",
   "v": "Counts = PPR × 4"
  },
  {
   "n": "Ramp time and distance",
   "f": "t = v ÷ a;  s = v² ÷ (2a)",
   "v": "For one ramp"
  },
  {
   "n": "Trapezoidal move time",
   "f": "T = s ÷ v + v ÷ a",
   "v": "If s ≥ v² ÷ a"
  }
 ]
});
