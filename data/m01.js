window.MECH.register({
  id: "m01",
  n: 1,
  title: "Introduction to Mechatronics and the Technician's Role",
  short: "Intro to Mechatronics",
  group: "Foundations",
  blurb: "Describe how a mechatronic system is built, tell open loop from closed loop, read a block diagram and handle the units and maths of the trade.",
  outcomes: [
    "Explain what mechatronics is and which disciplines it combines",
    "Identify the sensors, controller, actuators, power supply, mechanical structure and HMI in a machine",
    "Distinguish open-loop from closed-loop control and name setpoint, feedback and error",
    "Describe the duties, skills and career paths of a mechatronics technician",
    "Convert between SI units and prefixes and write numbers in scientific notation",
    "Rearrange simple formulas and check an answer by its units",
    "Read a block diagram and trace a signal or power path through it",
    "Plan your study with the lessons, flashcards, quizzes and formula sheet in this app"
  ],
  lessons: [
    {
      id: "m01-l1",
      title: "What mechatronics is",
      minutes: 7,
      body: [
        {t:"p", x:"**Mechatronics** is the combination of mechanical engineering, electrical engineering, electronics, control engineering and software in a single product or machine. The word was coined in Japan in the late 1960s from *mecha*(nism) and (elec)*tronics*. Today it describes almost every automated machine you will meet at work: a bottling line, a lift, a car with anti-lock brakes, a CNC machine, a packaging robot, even a modern washing machine."},
        {t:"p", x:"Older machines solved problems with mechanisms alone. A washing machine of the 1960s used a motor-driven cam drum (a rotating barrel with raised tracks) to close contacts in a fixed order. To change the programme you changed the cams. A modern machine does the same job with a small computer, a pressure sensor for water level, a speed sensor on the drum and an inverter-driven motor. The behaviour is now set by software, so one hardware design can offer dozens of programmes and can adjust itself to the load."},
        {t:"h", x:"The disciplines and what each contributes"},
        {t:"table", head:["Discipline","What it provides","Example in a filling machine"], rows:[
          ["Mechanical","Frames, shafts, gears, bearings, linkages, conveyors","Conveyor belt, bearings, guide rails, drive gearbox"],
          ["Electrical","Power supply, protection, motors, wiring, switching","400 V supply, circuit breaker, contactor, three-phase motor"],
          ["Electronics","Signal processing, power switching, sensing circuits","24 V power supply, sensor amplifier, inverter drive"],
          ["Control","Methods that make a process behave as wanted","Logic that stops the belt when a bottle is under the nozzle"],
          ["Software","Programs that run the logic and the display","PLC program, touch-screen screens, data logging"]
        ], cap:"The five disciplines inside a typical mechatronic machine"},
        {t:"p", x:"Notice that no single trade owns the machine. A **mechatronics technician** is the person who understands enough of every row to keep it running. This matters in fault finding. A conveyor motor that keeps tripping its overload protection looks like an electrical fault, but the real cause may be a roller bearing that has seized and is loading the motor with extra torque. A technician who only checks the electrical side will replace motors without ever fixing the problem."},
        {t:"note", x:"Mechatronics is not a single new device. It is a way of building and maintaining machines so that mechanics, electrics and software are designed to work together, with sensors reporting what is happening and a controller deciding what to do about it."},
        {t:"h", x:"Why it matters"},
        {t:"ul", items:[
          "**Flexibility:** changing a program is faster and cheaper than rebuilding a mechanism.",
          "**Accuracy and repeatability:** sensors and feedback hold position, speed or temperature closer than a person can.",
          "**Information:** machines can count, record faults and report their own condition, which supports planned maintenance.",
          "**Safety and consistency:** dangerous or repetitive tasks can be done by machines with protective devices."
        ]},
        {t:"p", x:"The price of this capability is complexity. More parts means more places where a fault can hide, and a fault in one discipline often shows up as a symptom in another. The rest of this course teaches each discipline in turn. This first module gives you the common language: how a machine is organised, how control loops work, what a technician does and the units and maths used every day."},
        {t:"key", items:[
          "Mechatronics combines mechanical, electrical, electronics, control and software in one machine.",
          "Software, not mechanisms, now sets most machine behaviour, which gives flexibility.",
          "A fault in one discipline often appears as a symptom in another.",
          "The technician needs working knowledge across all disciplines, not expert depth in just one."
        ]}
      ]
    },
    {
      id: "m01-l2",
      title: "Anatomy of a mechatronic system",
      minutes: 9,
      body: [
        {t:"p", x:"Almost every mechatronic system, from a desktop 3D printer to a bottling plant, is built from the same six building blocks. Learn to recognise them and any unfamiliar machine becomes readable. Figure 1 shows how they connect."},
        {t:"svg", alt:"Block diagram: sensors feed a controller, the controller drives actuators that move the mechanical system, sensors measure the mechanical system again, an HMI talks to the controller and a power supply feeds the controller and actuators", cap:"Figure 1: The building blocks of a mechatronic system. Black lines carry signals; amber lines carry power.", svg:`<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="m01-f1-arr" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 z" class="fi"/></marker></defs><rect x="20" y="110" width="110" height="60" rx="6" class="ln flb"/><text x="75" y="136" class="tx txb txc">Sensors</text><text x="75" y="154" class="txs txc">measure</text><rect x="210" y="110" width="140" height="60" rx="6" class="ln fla"/><text x="280" y="136" class="tx txb txc">Controller</text><text x="280" y="154" class="txs txc">PLC or microcontroller</text><rect x="430" y="110" width="110" height="60" rx="6" class="ln flg"/><text x="485" y="136" class="tx txb txc">Actuators</text><text x="485" y="154" class="txs txc">act</text><rect x="380" y="230" width="160" height="60" rx="6" class="ln fl"/><text x="460" y="256" class="tx txb txc">Mechanical system</text><text x="460" y="274" class="txs txc">machine and load</text><rect x="150" y="20" width="120" height="40" rx="6" class="ln fl"/><text x="210" y="45" class="tx txb txc">HMI</text><rect x="300" y="20" width="120" height="40" rx="6" class="ln fla"/><text x="360" y="45" class="tx txb txc">Power supply</text><line x1="130" y1="140" x2="208" y2="140" class="ln" marker-end="url(#m01-f1-arr)"/><line x1="350" y1="140" x2="428" y2="140" class="ln" marker-end="url(#m01-f1-arr)"/><line x1="485" y1="170" x2="485" y2="228" class="lna" marker-end="url(#m01-f1-arr)"/><polyline points="380,260 75,260 75,172" class="ln" fill="none" marker-end="url(#m01-f1-arr)"/><line x1="220" y1="62" x2="220" y2="108" class="ln" marker-end="url(#m01-f1-arr)"/><line x1="240" y1="108" x2="240" y2="62" class="ln" marker-end="url(#m01-f1-arr)"/><line x1="330" y1="62" x2="330" y2="108" class="lna" marker-end="url(#m01-f1-arr)"/><polyline points="420,40 485,40 485,108" class="lna" fill="none" marker-end="url(#m01-f1-arr)"/><text x="300" y="215" class="txs txc">feedback: position, speed,</text><text x="300" y="230" class="txs txc">temperature, pressure</text><text x="30" y="290" class="txs txm">black = signals, amber = power</text></svg>`},
        {t:"h", x:"The six blocks"},
        {t:"ul", items:[
          "**Sensors** convert a physical quantity (position, speed, temperature, pressure, level, presence) into an electrical signal the controller can read. Examples: proximity switch, encoder, thermocouple, pressure transmitter.",
          "**Controller** reads the inputs, runs the logic and decides the outputs. It is usually a programmable logic controller (PLC) or a microcontroller, and it may sit inside a drive or a smart sensor.",
          "**Actuators** convert controller commands into physical action: electric motors, solenoid valves, pneumatic and hydraulic cylinders, heaters, brakes.",
          "**Mechanical structure** is the frame, shafts, gearboxes, conveyors and tooling that the actuators move. It also sets the limits of speed, force and accuracy.",
          "**Power supply** turns mains electricity into the voltages the system needs, for example 400 V three-phase for motors and 24 V DC for sensors and controller.",
          "**HMI (human-machine interface)** is how people operate the machine: pushbuttons, selector switches, indicator lamps, touch panels and alarm screens."
        ]},
        {t:"warn", x:"A controller output cannot power a large load directly. A PLC output may deliver only 0.5 A at 24 V, about 12 W. A 7.5 kW motor needs a power interface between them (a contactor or variable speed drive). Never connect a motor straight to a controller output."},
        {t:"h", x:"Signal versus power"},
        {t:"p", x:"Two kinds of energy flow through the machine. **Signals** carry information at low power: a 24 V sensor output of a few milliamperes, or a 4 to 20 mA analogue value. **Power** does the work and may be hundreds of volts and many amperes. Keeping the two clearly separate in your mind helps with every task: wiring (signal cables are routed away from motor cables), safety (the power side is the lethal one) and fault finding (is the command not arriving, or is the power not doing the work?)."},
        {t:"table", head:["Block","Components in a bottle-filling station"], rows:[
          ["Sensors","Photoelectric sensor detecting a bottle, level probe in the tank"],
          ["Controller","PLC with digital inputs and outputs"],
          ["Power interface and actuators","Contactor and conveyor motor, solenoid valve on the filling nozzle"],
          ["Mechanical","Belt conveyor, guide rails, filling head, frame"],
          ["Power supply","400 V supply, breaker, 24 V DC power supply"],
          ["HMI","Start and stop pushbuttons, emergency stop, indicator lamps, touch screen"]
        ], cap:"Mapping the six blocks to a real machine"},
        {t:"key", items:[
          "Six blocks: sensors, controller, actuators, mechanical structure, power supply and HMI.",
          "Sensors tell the controller what is happening; actuators carry out its decisions.",
          "A power interface (contactor or drive) sits between a low-power controller output and a large load.",
          "Separate signal (information) from power (work) in wiring, safety thinking and fault finding."
        ]}
      ]
    },
    {
      id: "m01-l3",
      title: "Open-loop and closed-loop control",
      minutes: 9,
      body: [
        {t:"p", x:"A **control system** makes a machine or process behave as intended. There are two basic structures, and nearly every control problem you meet is one of them."},
        {t:"p", x:"In **open-loop control** the controller sends a command and never checks the result. A toaster timer is the classic example: it heats for a set time whether the bread is pale or burnt. A sprinkler on a timer, a fan on a switch and a stepper motor run without feedback are other examples. Open loop is simple, cheap and reliable, but it cannot correct for anything it does not know about."},
        {t:"p", x:"In **closed-loop control** (also called feedback control) a sensor measures the actual result and the controller compares it with the wanted value. The difference is used to adjust the output. A room thermostat, a car's cruise control and a servo drive holding a robot arm in position all work this way."},
        {t:"svg", alt:"Two block diagrams: an open loop with setpoint, controller, actuator and process in a line, and a closed loop with a sensor feeding the measured output back to a summing junction before the controller", cap:"Figure 2: Open loop (top) has no measurement. Closed loop (bottom) feeds the measured output back and acts on the error.", svg:`<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="m01-f2-arr" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 z" class="fi"/></marker></defs><text x="10" y="20" class="tx txb">Open loop</text><text x="10" y="64" class="txs">Setpoint</text><line x1="58" y1="60" x2="148" y2="60" class="ln" marker-end="url(#m01-f2-arr)"/><rect x="150" y="40" width="90" height="40" rx="6" class="ln fla"/><text x="195" y="65" class="tx txc">Controller</text><line x1="240" y1="60" x2="268" y2="60" class="ln" marker-end="url(#m01-f2-arr)"/><rect x="270" y="40" width="90" height="40" rx="6" class="ln flg"/><text x="315" y="65" class="tx txc">Actuator</text><line x1="360" y1="60" x2="398" y2="60" class="ln" marker-end="url(#m01-f2-arr)"/><rect x="400" y="40" width="80" height="40" rx="6" class="ln fl"/><text x="440" y="65" class="tx txc">Process</text><line x1="480" y1="60" x2="538" y2="60" class="ln" marker-end="url(#m01-f2-arr)"/><text x="510" y="52" class="txs txc">Output</text><line x1="10" y1="108" x2="550" y2="108" class="ln1 lnm dash"/><text x="10" y="132" class="tx txb">Closed loop</text><text x="10" y="194" class="txs">Setpoint</text><line x1="58" y1="190" x2="116" y2="190" class="ln" marker-end="url(#m01-f2-arr)"/><circle cx="130" cy="190" r="12" class="ln fl"/><text x="116" y="181" class="txs">+</text><text x="135" y="214" class="txs">−</text><line x1="142" y1="190" x2="168" y2="190" class="ln" marker-end="url(#m01-f2-arr)"/><text x="155" y="178" class="txs txc">error</text><rect x="170" y="170" width="90" height="40" rx="6" class="ln fla"/><text x="215" y="195" class="tx txc">Controller</text><line x1="260" y1="190" x2="288" y2="190" class="ln" marker-end="url(#m01-f2-arr)"/><rect x="290" y="170" width="80" height="40" rx="6" class="ln flg"/><text x="330" y="195" class="tx txc">Actuator</text><line x1="370" y1="190" x2="398" y2="190" class="ln" marker-end="url(#m01-f2-arr)"/><rect x="400" y="170" width="80" height="40" rx="6" class="ln fl"/><text x="440" y="195" class="tx txc">Process</text><line x1="480" y1="190" x2="538" y2="190" class="ln" marker-end="url(#m01-f2-arr)"/><text x="512" y="182" class="txs txc">Output</text><circle cx="510" cy="190" r="3" class="fi"/><polyline points="510,190 510,262 372,262" class="ln" fill="none" marker-end="url(#m01-f2-arr)"/><rect x="290" y="244" width="80" height="36" rx="6" class="ln flb"/><text x="330" y="267" class="tx txc">Sensor</text><polyline points="290,262 130,262 130,204" class="ln" fill="none" marker-end="url(#m01-f2-arr)"/><text x="210" y="256" class="txs txc">feedback</text><line x1="440" y1="146" x2="440" y2="168" class="lnr" marker-end="url(#m01-f2-arr)"/><text x="440" y="140" class="txs txc">disturbance</text></svg>`},
        {t:"h", x:"The vocabulary"},
        {t:"ul", items:[
          "**Setpoint (SP):** the wanted value, for example 22 °C.",
          "**Process variable (PV):** the measured actual value, for example 19.5 °C.",
          "**Error:** setpoint minus process variable. Here 22 − 19.5 = 2.5 °C. A positive error means the process is below the target.",
          "**Disturbance:** anything outside the controller that pushes the process away from the setpoint, such as an open door, a heavier load or a change in supply voltage.",
          "**Feedback:** the measured signal returned to the controller."
        ]},
        {t:"worked", title:"Worked example: reading the error", problem:"A drying oven has a setpoint of 180 °C. When the door is opened the measured temperature falls to 172 °C. Later it overshoots to 183 °C. State the error at each point and what the controller should do.", steps:[
          "Error = setpoint − process variable.",
          "At 172 °C: error = 180 − 172 = +8 °C. The oven is too cold, so the controller must increase heating.",
          "At 183 °C: error = 180 − 183 = −3 °C. The oven is too hot, so the controller must reduce or stop heating."
        ], answer:"+8 °C calls for more heat; −3 °C calls for less heat. Closed loop acts on the sign and size of the error."},
        {t:"h", x:"On/off control and where it fits"},
        {t:"p", x:"The simplest closed-loop controller is **on/off control** with a **hysteresis** band, a gap between the switch-on and switch-off points that stops the output chattering. A domestic water heater might switch on at 55 °C and off at 60 °C. The temperature therefore cycles in a 5 °C band, which is fine for hot water but too coarse for a laboratory furnace. Smoother methods, such as PID control, are covered in Module 17."},
        {t:"note", x:"Closed loop is not always better. It needs a sensor, can oscillate if badly adjusted and fails if the sensor fails. Open loop is acceptable where the load is steady and an error is harmless. Stepper motors are run open loop on purpose, but if the load is too high they silently lose steps and the controller never knows."},
        {t:"key", items:[
          "Open loop sends a command without checking the result; closed loop measures and corrects.",
          "Error = setpoint − process variable; its sign says which way to correct.",
          "Disturbances are why feedback is needed: they change the process without the controller commanding it.",
          "On/off control with hysteresis is the simplest closed loop; PID is covered in Module 17."
        ]}
      ]
    },
    {
      id: "m01-l4",
      title: "The technician's role and career paths",
      minutes: 7,
      body: [
        {t:"p", x:"A mechatronics technician installs, tests, maintains and repairs automated machinery. The job sits between the operator, who runs the machine, and the engineer, who designs it. Technicians are trusted with live equipment, so reliability, honesty and care matter as much as technical knowledge."},
        {t:"h", x:"Typical duties"},
        {t:"ul", items:[
          "**Installation and commissioning:** mounting equipment, wiring, setting parameters, testing and handing over a working system.",
          "**Preventive maintenance:** scheduled inspection, lubrication, tightening, cleaning, calibration and replacement of wear parts before they fail.",
          "**Fault finding and repair:** locating the cause of a breakdown, correcting it and proving the machine safe to run.",
          "**Modification and improvement:** fitting new sensors, changing a program or upgrading a drive under change control.",
          "**Documentation:** recording faults, work done, spares used and any changes to drawings or programs."
        ]},
        {t:"h", x:"Skills a technician builds"},
        {t:"table", head:["Area","Examples"], rows:[
          ["Safety","Isolation and lockout, working at height, safe handling of stored energy"],
          ["Mechanical","Bearings, couplings, belts, alignment, lubrication, use of measuring tools"],
          ["Electrical and electronic","Reading schematics, motor starters, drives, sensors, multimeter fault finding"],
          ["Fluid power","Pneumatic and hydraulic circuits, valves, cylinders, pressure checks"],
          ["Control","PLC programs, HMI screens, networks, tuning of loops"],
          ["Professional","Clear reporting, time management, teamwork, willingness to ask"]
        ], cap:"Skill areas covered by this course"},
        {t:"h", x:"A typical job from start to finish"},
        {t:"steps", title:"How a breakdown job usually runs", items:[
          "Receive the work request and ask the operator what happened, what was seen or heard and what changed recently.",
          "Check the work area and obtain any permit required; make the machine safe by isolating and locking it out (Module 2).",
          "Investigate: look at the machine, read the diagram, take measurements, narrow down the cause.",
          "Repair or replace the faulty part and restore guards and covers.",
          "Test the machine, hand it back to the operator and confirm it works correctly.",
          "Record the cause, the fix and the parts used so the next person learns from it."
        ]},
        {t:"h", x:"Career paths"},
        {t:"p", x:"Technicians work wherever machines run: food and drink plants, mines, manufacturing, packaging, water and power utilities, hospitals, oil and gas, building services and lift or escalator companies. Common routes are **maintenance technician**, **automation or PLC technician**, **instrumentation technician**, **field service engineer** working for an equipment supplier, and **commissioning technician**. With experience, people move to **team leader or supervisor**, **planner**, **technologist** or, with further study, **engineer**. Manufacturers such as drive and PLC makers run vendor training and certificates that are valued by employers, and they combine well with a trade qualification."},
        {t:"ghana", x:"Mains supply in Ghana is 230 V, 50 Hz single phase and 400 V three phase. Imported equipment is sometimes rated for 110 to 120 V at 60 Hz. Always read the nameplate before connecting a machine. A 120 V device connected to 230 V will be destroyed, and a 60 Hz motor on 50 Hz runs about one sixth slower."},
        {t:"tip", x:"Keep a personal notebook of faults you have solved: symptom, cause, fix. After a year it becomes your most valuable reference and shows employers how you think."},
        {t:"key", items:[
          "Technicians install, maintain, fault-find, modify and document automated machines.",
          "The standard job flow is: ask, make safe, investigate, repair, test, record.",
          "Career routes include maintenance, automation, instrumentation, field service and commissioning.",
          "Read the nameplate before connecting any equipment to the supply."
        ]}
      ]
    },
    {
      id: "m01-l5",
      title: "Units, prefixes and the maths of the trade",
      minutes: 11,
      body: [
        {t:"p", x:"Technicians use numbers every day: sizing a cable, checking a motor current, setting a drive ramp, converting a pressure reading. Mistakes with units cause real damage, so this lesson sets out the system used throughout the course, the **SI (Système International)** units."},
        {t:"table", head:["Quantity","Unit","Symbol"], rows:[
          ["Length","metre","m"],
          ["Mass","kilogram","kg"],
          ["Time","second","s"],
          ["Electric current","ampere","A"],
          ["Temperature","kelvin (or degree Celsius)","K (°C)"],
          ["Force","newton","N"],
          ["Pressure","pascal (1 bar = 100 000 Pa)","Pa"],
          ["Energy","joule","J"],
          ["Power","watt (1 W = 1 J/s)","W"],
          ["Voltage","volt","V"],
          ["Resistance","ohm","Ω"],
          ["Frequency","hertz (cycles per second)","Hz"]
        ], cap:"Common SI units used in this course"},
        {t:"h", x:"Prefixes"},
        {t:"svg", alt:"A row of nine boxes from pico to tera showing each SI prefix, its symbol and power of ten, with arrows showing that each step left multiplies the number by 1000 and each step right divides it by 1000", cap:"Figure 3: SI prefix ladder. Each step is a factor of 1000.", svg:`<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" role="img"><defs><marker id="m01-f3-arr" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto"><path d="M0,0 L10,4 L0,8 z" class="fi"/></marker></defs><rect x="5" y="40" width="54" height="76" rx="6" class="ln flb"/><text x="32" y="30" class="txs txc">10⁻¹²</text><text x="32" y="75" class="tx txb txc">p</text><text x="32" y="98" class="txs txc">pico</text><rect x="67" y="40" width="54" height="76" rx="6" class="ln flb"/><text x="94" y="30" class="txs txc">10⁻⁹</text><text x="94" y="75" class="tx txb txc">n</text><text x="94" y="98" class="txs txc">nano</text><rect x="129" y="40" width="54" height="76" rx="6" class="ln flb"/><text x="156" y="30" class="txs txc">10⁻⁶</text><text x="156" y="75" class="tx txb txc">µ</text><text x="156" y="98" class="txs txc">micro</text><rect x="191" y="40" width="54" height="76" rx="6" class="ln flb"/><text x="218" y="30" class="txs txc">10⁻³</text><text x="218" y="75" class="tx txb txc">m</text><text x="218" y="98" class="txs txc">milli</text><rect x="253" y="40" width="54" height="76" rx="6" class="ln fla"/><text x="280" y="30" class="txs txc">10⁰</text><text x="280" y="75" class="tx txb txc">1</text><text x="280" y="98" class="txs txc">unit</text><rect x="315" y="40" width="54" height="76" rx="6" class="ln flg"/><text x="342" y="30" class="txs txc">10³</text><text x="342" y="75" class="tx txb txc">k</text><text x="342" y="98" class="txs txc">kilo</text><rect x="377" y="40" width="54" height="76" rx="6" class="ln flg"/><text x="404" y="30" class="txs txc">10⁶</text><text x="404" y="75" class="tx txb txc">M</text><text x="404" y="98" class="txs txc">mega</text><rect x="439" y="40" width="54" height="76" rx="6" class="ln flg"/><text x="466" y="30" class="txs txc">10⁹</text><text x="466" y="75" class="tx txb txc">G</text><text x="466" y="98" class="txs txc">giga</text><rect x="501" y="40" width="54" height="76" rx="6" class="ln flg"/><text x="528" y="30" class="txs txc">10¹²</text><text x="528" y="75" class="tx txb txc">T</text><text x="528" y="98" class="txs txc">tera</text><line x1="270" y1="140" x2="20" y2="140" class="ln1" marker-end="url(#m01-f3-arr)"/><text x="145" y="160" class="txs txc">smaller prefix: number × 1000 per step</text><line x1="290" y1="140" x2="540" y2="140" class="ln1" marker-end="url(#m01-f3-arr)"/><text x="415" y="160" class="txs txc">larger prefix: number ÷ 1000 per step</text><text x="280" y="196" class="tx txc">2.2 kΩ = 2200 Ω = 2 200 000 mΩ</text><text x="280" y="218" class="txs txc txm">Note the capital M (mega) versus lower-case m (milli)</text></svg>`},
        {t:"p", x:"Prefixes shorten large and small numbers. 4.7 kΩ means 4.7 × 1000 = 4700 Ω. 250 mA means 250 ÷ 1000 = 0.25 A. **Scientific notation** writes a number as a value between 1 and 10 times a power of ten: 4700 Ω = 4.7 × 10³ Ω, and 0.000 025 A = 2.5 × 10⁻⁵ A = 25 µA. Engineers prefer powers of ten that are multiples of three because they match the prefixes."},
        {t:"warn", x:"Case matters. mW is a milliwatt and MW is a megawatt, a factor of one billion. A drive set to 7.5 MW instead of 7.5 kW would not just be wrong, it would be dangerous. Write units and prefixes exactly."},
        {t:"h", x:"Conversions you will use constantly"},
        {t:"table", head:["Convert","Relationship"], rows:[
          ["Pressure","1 bar = 100 kPa = 10⁵ Pa; 1 bar ≈ 14.5 psi"],
          ["Length","1 inch = 25.4 mm exactly"],
          ["Power","1 kW ≈ 1.341 horsepower (hp); 1 hp ≈ 745.7 W"],
          ["Energy","1 kWh = 3.6 MJ (1000 W for 3600 s)"],
          ["Temperature","K = °C + 273.15; °F = °C × 9/5 + 32"],
          ["Volume","1 litre = 10⁻³ m³ = 1000 cm³"],
          ["Rotation","ω (rad/s) = 2π × n (rpm) ÷ 60"]
        ], cap:"Common conversions"},
        {t:"worked", title:"Worked example: converting a flow rate", problem:"A pump delivers 45 L/min. Express this in m³/s.", steps:[
          "Convert litres to cubic metres: 45 L = 45 × 10⁻³ m³ = 0.045 m³.",
          "Convert minutes to seconds: 1 min = 60 s.",
          "Divide: 0.045 m³ ÷ 60 s = 0.00075 m³/s."
        ], answer:"45 L/min = 7.5 × 10⁻⁴ m³/s."},
        {t:"worked", title:"Worked example: motor speed in other units", problem:"A conveyor motor turns at 1450 rpm. Find its speed in revolutions per second and in radians per second.", steps:[
          "Revolutions per second = 1450 ÷ 60 = 24.17 rev/s.",
          "One revolution is 2π rad, so ω = 2π × 24.17 = 151.8 rad/s."
        ], answer:"24.2 rev/s, or 151.8 rad/s."},
        {t:"h", x:"Algebra and checking your answer"},
        {t:"p", x:"A formula is a recipe; rearranging it means doing the same operation to both sides until the unknown stands alone. Starting from V = I × R (voltage equals current times resistance, covered in Module 6): to find current, divide both sides by R to get I = V ÷ R. To find resistance, R = V ÷ I. For a 24 V relay coil drawing 150 mA, R = 24 ÷ 0.15 = 160 Ω. Notice the milliamperes were converted to 0.15 A first."},
        {t:"p", x:"Always check the **units** of the answer. Volts divided by amperes must give ohms. If your result comes out in the wrong unit, or the size is unreasonable (a 230 V circuit drawing 40 000 A), look for a missed prefix or an upside-down formula. Keep three significant figures in working and round only at the end."},
        {t:"key", items:[
          "Use SI units; convert prefixes first (kΩ to Ω, mA to A) before calculating.",
          "Each prefix step is a factor of 1000; capital M is mega, lower-case m is milli.",
          "1 bar = 100 kPa; 1 kWh = 3.6 MJ; ω = 2πn ÷ 60.",
          "Rearrange by doing the same to both sides, then check the unit and size of the answer."
        ]}
      ]
    },
    {
      id: "m01-l6",
      title: "Reading block diagrams and studying with this app",
      minutes: 8,
      body: [
        {t:"p", x:"A **block diagram** shows what a system does without showing every wire and part. Each rectangle is a function or a unit (a sensor, a PLC, a motor) and each arrow shows the direction in which a signal or energy moves. Block diagrams appear in manuals, training material and the front of service documents. They are the first thing to read when you meet an unfamiliar machine, before you open any schematic."},
        {t:"h", x:"Conventions"},
        {t:"ul", items:[
          "Arrows point in the direction of the flow, from cause to effect. A line without an arrow is a plain connection.",
          "A **circle with plus and minus signs** is a summing junction: it adds or subtracts its inputs. In a control loop it computes the error as setpoint minus feedback.",
          "Power and signal paths are often drawn with different line styles (thick or coloured for power, thin for signal). Look for a key.",
          "A block names a function, not a wiring detail. One box labelled Motor drive may contain a breaker, a contactor and an inverter.",
          "Feedback paths loop back from the output to an earlier block."
        ]},
        {t:"steps", title:"How to read a block diagram", items:[
          "Find the input (a start button, a setpoint, a sensor) and the final output (a moving part, a heater, an alarm).",
          "Follow the arrows from input to output and say aloud what each block does to the signal.",
          "Identify any feedback paths and the summing junction where they join.",
          "Separate the signal blocks from the power blocks.",
          "Note any HMI or network connections that allow people to command or monitor the machine."
        ]},
        {t:"p", x:"Read the filling station from Lesson 2 this way. A photoelectric sensor detects a bottle and sends a 24 V signal to a PLC input. The program decides to stop the belt, so it switches off an output. The output drops a contactor coil, the contactor opens the supply to the conveyor motor and the belt stops. Then the program opens a solenoid valve for 3 s, the nozzle fills the bottle and the belt restarts. The chain is sensor, controller, power interface, actuator, mechanical load."},
        {t:"h", x:"Using a block diagram to find a fault"},
        {t:"p", x:"Suppose the belt will not move although the Start lamp is lit. The block diagram suggests a **half-split** approach: test in the middle of the chain and decide which half contains the fault. If the PLC output indicator is on but the contactor is not pulled in, the fault lies after the output (wiring, coil or contactor). If the output is off, the fault lies before it (input signal, program or interlock). One measurement removes half of the possibilities. This idea returns in Module 19."},
        {t:"h", x:"How to study with this app"},
        {t:"ul", items:[
          "**Read one lesson at a time**, then close it and write the key points in your own words. Do the worked examples with pencil and paper before looking at the answer.",
          "**Use the flashcards** regularly in short sessions. Cards you mark Again return soon, and the others return after longer gaps, which fixes facts in long-term memory.",
          "**Take the module quiz** after the lessons. Read the explanation for every question, including the ones you got right. Retake it until you score consistently above 80 %.",
          "**Check the glossary and the formula sheet** whenever a term or equation is unfamiliar.",
          "**Link theory to real equipment.** Whenever you work on a machine, find its sensors, controller and actuators and sketch its block diagram."
        ]},
        {t:"tip", x:"Everything in this app works offline, so you can study on a site visit or a bus. Short and frequent beats long and rare: 20 minutes a day is better than three hours once a week."},
        {t:"note", x:"The course is a study aid, not a substitute for hands-on training under supervision, and never a replacement for the manufacturer's manual and your workplace safety rules."},
        {t:"key", items:[
          "Block diagrams show function and direction of flow; follow the arrows from input to output.",
          "A summing junction compares setpoint and feedback to produce the error.",
          "Half-split the chain to find a fault with the fewest measurements.",
          "Study little and often, use the flashcards and quiz, and link every topic to real equipment."
        ]}
      ]
    }
  ],
  quiz: [
    {id:"m01-q1", q:"Which description best defines mechatronics?", opts:["Integration of mechanical, electrical, electronic, control and software parts in one system","The repair of electric motors and their mechanical drives","A branch of computing that only deals with robots","The design of machine frames using computer drawing"], a:0, why:"Mechatronics is the combination of disciplines in one machine. Robots are only one application, and neither motor repair nor drawing covers the whole field."},
    {id:"m01-q2", q:"In a mechatronic system, which block converts a controller command into physical movement or heat?", opts:["Sensor","Actuator","HMI","Power supply"], a:1, why:"Actuators such as motors, valves and heaters do the physical work. Sensors measure, the HMI lets people interact and the power supply provides energy."},
    {id:"m01-q3", q:"Which of these devices is a sensor?", opts:["A contactor","A solenoid valve","An inductive proximity switch","A DC motor"], a:2, why:"An inductive proximity switch detects the presence of metal and gives an electrical signal. The other three are driven by the controller and act on the process."},
    {id:"m01-q4", q:"A toaster heats for a fixed time set by a timer and does not measure the browning of the bread. What kind of control is this?", opts:["Closed loop with feedback","Cascade control","Open loop","On/off control with hysteresis"], a:2, why:"With no measurement of the result there is no feedback, so the control is open loop. A thermostat, in contrast, measures temperature."},
    {id:"m01-q5", q:"A resistor is marked 4.7 kΩ. What is its value in ohms?", opts:["47 Ω","470 Ω","4700 Ω","4 700 000 Ω"], a:2, why:"Kilo means 1000, so 4.7 × 1000 = 4700 Ω. The last option confuses kilo with mega."},
    {id:"m01-q6", q:"A relay coil draws 250 mA. What is the current in amperes?", opts:["0.25 A","2.5 A","25 A","0.025 A"], a:0, why:"Milli means one thousandth, so 250 mA = 250 ÷ 1000 = 0.25 A."},
    {id:"m01-q7", q:"An air supply reads 6 bar. What is this in kilopascals?", opts:["6 kPa","60 kPa","600 kPa","6000 kPa"], a:2, why:"1 bar = 100 kPa, so 6 bar = 600 kPa."},
    {id:"m01-q8", q:"A 2 kW heater runs for 3 hours. How much energy does it use?", opts:["0.67 kWh","6 kWh","5 kWh","6000 kWh"], a:1, why:"Energy = power × time = 2 kW × 3 h = 6 kWh. Dividing instead of multiplying gives 0.67, and 6000 would be in watt-hours, not kilowatt-hours."},
    {id:"m01-q9", q:"In a closed-loop block diagram, the summing junction in front of the controller produces which signal?", opts:["The disturbance","The measured value","The actuator power","The error, setpoint minus feedback"], a:3, why:"The junction compares the wanted value with the measured value, and the difference (the error) is what the controller acts on."},
    {id:"m01-q10", q:"An oven has a setpoint of 200 °C and measures 195 °C. What is the error and what should the controller do?", opts:["+5 °C, increase heating","−5 °C, increase heating","+5 °C, reduce heating","−5 °C, reduce heating"], a:0, why:"Error = setpoint − process variable = 200 − 195 = +5 °C. A positive error means the process is below target, so more heat is needed."},
    {id:"m01-q11", q:"A conveyor motor will not start. The PLC output indicator for the motor contactor is lit, but the contactor has not pulled in. Using a half-split approach, where should you look next?", opts:["The program logic before the output","The start pushbutton wiring to the PLC input","The wiring, coil and supply of the contactor after the output","The operator's training record"], a:2, why:"The output has already switched, so the fault lies after it: the wiring to the coil, the coil itself or the control supply. Testing there removes half the chain."},
    {id:"m01-q12", q:"A second-hand machine arrives with a nameplate reading 120 V, 60 Hz. What is the correct action on a 230 V, 50 Hz supply?", opts:["Connect it and watch for overheating","Connect it through a long extension lead","Use only a dimmer to lower the voltage","Do not connect it until a suitable transformer or a replacement is arranged"], a:3, why:"Connecting a 120 V device to 230 V can destroy it and create a fire or shock hazard. The nameplate must match the supply, or a correctly rated transformer must be used."},
    {id:"m01-q13", q:"A shaft turns at 1200 rpm. What is its angular speed in rad/s?", opts:["125.7 rad/s","20 rad/s","7539.8 rad/s","1200 rad/s"], a:0, why:"ω = 2π × 1200 ÷ 60 = 125.7 rad/s. The value 20 is only revolutions per second, and 7539.8 comes from multiplying by 60 instead of dividing."},
    {id:"m01-q14", q:"What does the prefix micro (µ) mean?", opts:["10⁻³","10⁻⁹","10⁻⁶","10⁶"], a:2, why:"Micro is one millionth, 10⁻⁶. Milli is 10⁻³, nano is 10⁻⁹ and mega (capital M) is 10⁶."},
    {id:"m01-q15", q:"A PLC output is rated 0.5 A at 24 V. Why must it not drive a 7.5 kW three-phase motor directly?", opts:["PLC outputs only work with lamps","The motor needs a signal cable of a special colour","A motor can only be switched by hand","The motor current is far above the output rating, so a contactor or drive is needed"], a:3, why:"A 7.5 kW motor on 400 V draws roughly 15 A, many times what the output can carry. The PLC switches a contactor coil and the contactor switches the motor."}
  ],
  cards: [
    {f:"What is mechatronics?", b:"The integration of mechanical, electrical, electronic, control and software engineering in one system, so that machines can sense, decide and act."},
    {f:"Name the six blocks of a mechatronic system.", b:"Sensors, controller, actuators, mechanical structure, power supply and HMI (human-machine interface)."},
    {f:"What does a sensor do?", b:"It converts a physical quantity (position, speed, temperature, pressure, presence) into an electrical signal for the controller."},
    {f:"What does an actuator do?", b:"It converts a controller command into physical action, for example a motor, solenoid valve, cylinder or heater."},
    {f:"Why can a PLC output not drive a large motor directly?", b:"Its output rating is small (for example 0.5 A at 24 V). A contactor or drive acts as the power interface that carries the motor current."},
    {f:"Open loop versus closed loop?", b:"Open loop sends a command without checking the result. Closed loop measures the output with a sensor and corrects the command using the error."},
    {f:"Define error in a control loop.", b:"Error = setpoint − process variable. A positive error means the process is below the target; a negative error means it is above."},
    {f:"What is a disturbance?", b:"Any outside influence that moves the process away from its setpoint, such as a load change, an open door or a supply voltage change."},
    {f:"What is hysteresis in on/off control?", b:"A gap between the switch-on and switch-off points that stops the output from rapidly chattering on and off."},
    {f:"How many ohms is 2.2 kΩ? How many amperes is 30 mA?", b:"2.2 kΩ = 2200 Ω. 30 mA = 0.03 A."},
    {f:"1 bar equals how many kPa and how many psi?", b:"1 bar = 100 kPa, and approximately 14.5 psi."},
    {f:"Convert rpm to rad/s.", b:"ω = 2π × n ÷ 60, with n in rpm. 1500 rpm gives 157.1 rad/s."},
    {f:"How many joules are in one kilowatt-hour?", b:"1 kWh = 1000 W × 3600 s = 3.6 MJ."},
    {f:"What is a summing junction in a block diagram?", b:"A circle where signals are added or subtracted, for example setpoint minus feedback to form the error."},
    {f:"What is the half-split method?", b:"Test at the middle of a signal chain to find whether the fault is before or after that point, halving the search each time."},
    {f:"Which mains supply applies in Ghana?", b:"230 V, 50 Hz single phase and 400 V three phase. Check every nameplate before connecting imported equipment."}
  ],
  terms: [
    {t:"Mechatronics", d:"The integration of mechanical, electrical, electronic, control and software engineering in machines and products."},
    {t:"Sensor", d:"A device that converts a physical quantity such as position, temperature or pressure into an electrical signal."},
    {t:"Actuator", d:"A device that converts an energy source and a control command into physical action, such as a motor, valve or cylinder."},
    {t:"Controller", d:"The device, usually a PLC or microcontroller, that reads inputs, runs the logic and switches the outputs."},
    {t:"HMI", d:"Human-machine interface: the buttons, lamps, screens and displays through which people operate and monitor a machine."},
    {t:"Setpoint", d:"The target value that a control system tries to hold, for example 22 °C."},
    {t:"Process variable", d:"The measured, actual value of the quantity being controlled."},
    {t:"Feedback", d:"A measured signal returned to the controller so it can compare the actual result with the target."},
    {t:"Open loop", d:"A control structure that issues commands without measuring or correcting the result."},
    {t:"Closed loop", d:"A control structure that measures the output and uses the error to correct the command."},
    {t:"SI", d:"Système International, the worldwide system of units based on the metre, kilogram, second and ampere among others."},
    {t:"Block diagram", d:"A simplified drawing that shows the functions of a system as boxes and the flow of signals or energy as arrows."}
  ],
  formulas: [
    {n:"Angular speed", f:"ω = 2π × n ÷ 60", v:"ω in rad/s, n in rpm"},
    {n:"Control error", f:"e = SP − PV", v:"e error, SP setpoint, PV process variable (same unit)"},
    {n:"Energy from power", f:"E = P × t", v:"E in kWh when P in kW and t in hours; 1 kWh = 3.6 MJ"},
    {n:"Ohm's law", f:"V = I × R", v:"V volts, I amperes, R ohms (see Module 6)"},
    {n:"Temperature conversion", f:"K = °C + 273.15", v:"°F = °C × 9/5 + 32"},
    {n:"Pressure conversion", f:"1 bar = 100 kPa ≈ 14.5 psi", v:"bar, kilopascal, pounds per square inch"}
  ]
});
