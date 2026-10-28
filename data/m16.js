window.MECH.register({
 "id": "m16",
 "n": 16,
 "title": "Industrial Networks, HMI and SCADA",
 "short": "Networks, HMI, SCADA",
 "group": "Control & Automation",
 "blurb": "How machines talk to each other and to people: fieldbus and Ethernet, IP addressing, cabling, HMI and alarm design, SCADA, cyber-security and network fault finding.",
 "outcomes": [
  "Explain why industrial networks are used and the roles of the levels in a control system",
  "Compare serial fieldbuses and industrial Ethernet protocols",
  "Calculate network and host addresses from an IP address and subnet mask",
  "Describe network topologies, RS-485 termination, shielding and cable length limits",
  "Calculate Modbus RTU message timing",
  "Design a clear HMI screen and a manageable alarm system",
  "Describe SCADA architecture and basic cyber-security measures",
  "Diagnose common network faults step by step"
 ],
 "lessons": [
  {
   "id": "m16-l1",
   "title": "Industrial communications: fieldbus and Ethernet",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "A machine of any size has many devices that must exchange data: PLCs, drives, remote I/O, sensors, operator panels and supervisory computers. Running one wire per signal quickly becomes expensive and hard to maintain. An **industrial network** carries many signals over one cable, adds diagnostics and makes it easier to change or extend a system."
    },
    {
     "t": "h",
     "x": "Levels in a control system"
    },
    {
     "t": "ul",
     "items": [
      "**Field level:** sensors, actuators, drives and remote I/O.",
      "**Control level:** PLCs and controllers that run the logic.",
      "**Supervisory level:** SCADA servers, historians and operator HMIs.",
      "**Enterprise level:** business systems such as planning and maintenance management.",
      "Each level has different speed, reliability and security needs; the further down, the more deterministic (predictable in time) the network must be."
     ]
    },
    {
     "t": "h",
     "x": "Serial links and fieldbuses"
    },
    {
     "t": "p",
     "x": "**RS-485** is a serial standard that uses a twisted pair with differential signalling (lines A and B). It allows multi-drop connection of many devices on one cable, long distances (up to 1200 m at lower speeds) and good noise immunity. **RS-232** is a simple point-to-point link limited to about 15 m. **Fieldbus** protocols run over these layers and the IEC 61158 standard defines several families."
    },
    {
     "t": "table",
     "head": [
      "Protocol",
      "Medium",
      "Typical features"
     ],
     "rows": [
      [
       "Modbus RTU",
       "RS-485 serial",
       "Master/slave; simple and widely supported; up to 247 slave addresses; 9600 to 115 200 baud typical"
      ],
      [
       "PROFIBUS DP",
       "RS-485",
       "Fast, deterministic; 9.6 kbit/s up to 12 Mbit/s; up to 32 devices per segment (126 addresses overall)"
      ],
      [
       "CANopen",
       "CAN bus",
       "Robust and message-based; common in motion control and mobile machines; 1 Mbit/s to 25 m, 125 kbit/s to about 500 m"
      ],
      [
       "IO-Link",
       "3-wire point to point, up to 20 m",
       "Digital communication with a smart sensor or actuator through its standard connector; allows remote settings and diagnostics"
      ]
     ],
     "cap": "Serial fieldbuses and links"
    },
    {
     "t": "h",
     "x": "Industrial Ethernet"
    },
    {
     "t": "p",
     "x": "Ethernet has replaced most older fieldbuses in new installations. It is fast (100 Mbit/s or 1 Gbit/s), flexible and uses standard components, and a single cable can carry control data, diagnostics and web access. Industrial versions add real-time features and rugged connectors."
    },
    {
     "t": "table",
     "head": [
      "Protocol",
      "Notes"
     ],
     "rows": [
      [
       "PROFINET",
       "Real-time Ethernet from the PROFIBUS family; common with Siemens systems; devices have names as well as IP addresses"
      ],
      [
       "EtherNet/IP",
       "Common-industrial-protocol over standard Ethernet; widely used with Rockwell/Allen-Bradley equipment"
      ],
      [
       "Modbus TCP",
       "Modbus messages carried on TCP port 502; simple and universal"
      ],
      [
       "EtherCAT",
       "Very fast ring-style protocol for motion control and servo drives"
      ],
      [
       "OPC UA",
       "Not a fieldbus but a platform-independent way of exchanging data between machines, SCADA and business systems, with built-in security"
      ]
     ],
     "cap": "Common industrial Ethernet protocols"
    },
    {
     "t": "p",
     "x": "The speed and determinism needed decides the choice. A conveyor with remote I/O does not need the same performance as a ten-axis servo machine. Always follow the equipment makers' recommendations, and do not mix office-grade switches into a control network without checking that they can handle the traffic."
    },
    {
     "t": "key",
     "items": [
      "Networks replace many wires with one cable and add diagnostics.",
      "A control system has field, control, supervisory and enterprise levels.",
      "RS-485 is differential, multi-drop and noise tolerant; Modbus RTU and PROFIBUS DP use it.",
      "Industrial Ethernet protocols include PROFINET, EtherNet/IP, Modbus TCP and EtherCAT.",
      "OPC UA exchanges data between systems, with security."
     ]
    }
   ]
  },
  {
   "id": "m16-l2",
   "title": "Ethernet, IP addresses and subnets",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "Each device on an Ethernet network has two addresses. The **MAC address** is a unique 48-bit number set in the factory and shown as six pairs of hexadecimal digits (for example 00:1B:1B:2C:3D:4E). It identifies the device on the local network. The **IP address** is a 32-bit number assigned by the engineer, written as four decimal numbers from 0 to 255, such as 192.168.10.25. It identifies the device on the wider network."
    },
    {
     "t": "h",
     "x": "Subnet mask"
    },
    {
     "t": "p",
     "x": "The **subnet mask** shows which part of the IP address identifies the network and which part identifies the host. Wherever the mask has a binary 1, the address bit belongs to the network. All devices that share the same network part are on the same **subnet** and talk directly. A device on another subnet needs a **router** (also called a **gateway**) to forward the traffic. A mask can also be written as a prefix: 255.255.255.0 is **/24**, because it has 24 ones."
    },
    {
     "t": "svg",
     "alt": "An IP address 192.168.10.25 in decimal and binary above the mask 255.255.255.0. The first 24 bits are marked as the network part and the last 8 bits as the host part.",
     "cap": "Figure 1: IP address, subnet mask, network part and host part",
     "svg": "<svg viewBox=\"0 0 640 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<text x=\"12\" y=\"44\" class=\"tx txb\">IP</text><rect x=\"60\" y=\"20\" width=\"120\" height=\"34\" class=\"ln fl\"/><text x=\"120\" y=\"43\" class=\"tx txb txc\">192</text><text x=\"120\" y=\"74\" class=\"txs txc\">11000000</text><rect x=\"200\" y=\"20\" width=\"120\" height=\"34\" class=\"ln fl\"/><text x=\"260\" y=\"43\" class=\"tx txb txc\">168</text><text x=\"260\" y=\"74\" class=\"txs txc\">10101000</text><rect x=\"340\" y=\"20\" width=\"120\" height=\"34\" class=\"ln fl\"/><text x=\"400\" y=\"43\" class=\"tx txb txc\">10</text><text x=\"400\" y=\"74\" class=\"txs txc\">00001010</text><rect x=\"480\" y=\"20\" width=\"120\" height=\"34\" class=\"ln fl\"/><text x=\"540\" y=\"43\" class=\"tx txb txc\">25</text><text x=\"540\" y=\"74\" class=\"txs txc\">00011001</text>\n<text x=\"12\" y=\"134\" class=\"tx txb\">Mask</text><rect x=\"60\" y=\"110\" width=\"120\" height=\"34\" class=\"ln fl\"/><text x=\"120\" y=\"133\" class=\"tx txb txc\">255</text><text x=\"120\" y=\"164\" class=\"txs txc\">11111111</text><rect x=\"200\" y=\"110\" width=\"120\" height=\"34\" class=\"ln fl\"/><text x=\"260\" y=\"133\" class=\"tx txb txc\">255</text><text x=\"260\" y=\"164\" class=\"txs txc\">11111111</text><rect x=\"340\" y=\"110\" width=\"120\" height=\"34\" class=\"ln fl\"/><text x=\"400\" y=\"133\" class=\"tx txb txc\">255</text><text x=\"400\" y=\"164\" class=\"txs txc\">11111111</text><rect x=\"480\" y=\"110\" width=\"120\" height=\"34\" class=\"ln fl\"/><text x=\"540\" y=\"133\" class=\"tx txb txc\">0</text><text x=\"540\" y=\"164\" class=\"txs txc\">00000000</text>\n<line x1=\"60\" y1=\"204\" x2=\"470\" y2=\"204\" class=\"lng ln\"/><line x1=\"480\" y1=\"204\" x2=\"600\" y2=\"204\" class=\"lna ln\"/>\n<text x=\"260\" y=\"226\" class=\"tx txb txc\">Network part: 24 bits</text><text x=\"260\" y=\"242\" class=\"txs txc\">the 1s in the mask: the same on every device</text>\n<text x=\"540\" y=\"226\" class=\"tx txb txc\">Host part: 8 bits</text><text x=\"540\" y=\"242\" class=\"txs txc\">unique per device</text>\n<text x=\"320\" y=\"274\" class=\"txs txm txc\">This is written 192.168.10.25/24. Devices with the same network part can talk directly.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "On a /24 network the host part has 8 bits. That gives 2⁸ = 256 addresses. The first address (host bits all 0, here 192.168.10.0) is the **network address**, and the last (all 1s, 192.168.10.255) is the **broadcast address**. Neither can be given to a device, so a /24 offers 256 − 2 = **254** usable addresses."
    },
    {
     "t": "formula",
     "x": "Usable hosts = 2ⁿ − 2",
     "where": "n is the number of host bits (32 minus the prefix length). A /26 has 6 host bits and a /30 has 2 host bits."
    },
    {
     "t": "worked",
     "title": "Worked example: planning subnets",
     "problem": "A plant uses the network 192.168.10.0/24. The engineer wants to split it into four equal subnets for four production lines. What mask is needed, how many hosts does each subnet hold and what are the first two subnet ranges?",
     "steps": [
      "Four subnets need 2 extra network bits (2² = 4), so the prefix becomes /26 and the mask is 255.255.255.192.",
      "The host part has 32 − 26 = 6 bits, giving 2⁶ − 2 = 62 usable hosts per subnet.",
      "Each subnet covers 64 addresses (the block size is 256 − 192 = 64). Subnet 1: 192.168.10.0 to .63, with hosts .1 to .62 and broadcast .63. Subnet 2: 192.168.10.64 to .127, with hosts .65 to .126 and broadcast .127."
     ],
     "answer": "Use /26 (255.255.255.192): four subnets of 62 hosts each, starting at .0, .64, .128 and .192."
    },
    {
     "t": "h",
     "x": "Network devices"
    },
    {
     "t": "table",
     "head": [
      "Device",
      "Function",
      "Industrial note"
     ],
     "rows": [
      [
       "Hub",
       "Repeats every frame to all ports",
       "Obsolete; causes collisions"
      ],
      [
       "Switch",
       "Learns MAC addresses and sends frames only to the right port",
       "Use managed industrial switches for diagnostics, VLANs and ring redundancy"
      ],
      [
       "Router",
       "Joins different subnets and forwards between them",
       "Used between control and office networks, with a firewall"
      ],
      [
       "Firewall",
       "Filters traffic by rules",
       "Place between the control network and any other network"
      ]
     ],
     "cap": "Network components"
    },
    {
     "t": "tip",
     "x": "Keep a network drawing and an address list. Two devices with the same IP address cause intermittent faults that are very hard to trace. Reserve fixed addresses for PLCs, drives and HMIs, and note the MAC address in the list."
    },
    {
     "t": "key",
     "items": [
      "MAC address: 48 bits, fixed by the maker; IP address: 32 bits, set by the engineer.",
      "The mask marks the network part (ones) and host part (zeros); /24 means 255.255.255.0.",
      "Usable hosts = 2ⁿ − 2, because the network and broadcast addresses cannot be used.",
      "Switches forward by MAC address; routers connect subnets.",
      "Keep unique fixed IP addresses and a documented list."
     ]
    }
   ]
  },
  {
   "id": "m16-l3",
   "title": "Topologies, cabling, termination and timing",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "The way devices are connected is the network **topology**. It affects cost, reliability and how a fault shows itself."
    },
    {
     "t": "svg",
     "alt": "Three network layouts: a line of four devices on one cable, a star of four devices around a central switch, and a ring of four devices linked in a loop.",
     "cap": "Figure 2: line, star and ring topologies",
     "svg": "<svg viewBox=\"0 0 640 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<line x1=\"54\" y1=\"110\" x2=\"186\" y2=\"110\" class=\"ln\"/><rect x=\"40\" y=\"100\" width=\"28\" height=\"20\" class=\"ln fla\"/><rect x=\"84\" y=\"100\" width=\"28\" height=\"20\" class=\"ln fla\"/><rect x=\"128\" y=\"100\" width=\"28\" height=\"20\" class=\"ln fla\"/><rect x=\"172\" y=\"100\" width=\"28\" height=\"20\" class=\"ln fla\"/><text x=\"120\" y=\"36\" class=\"tx txb txc\">Line (daisy chain)</text><text x=\"120\" y=\"190\" class=\"txs txc\">Least cable. A break splits</text><text x=\"120\" y=\"204\" class=\"txs txc\">the network in two.</text><line x1=\"320\" y1=\"68\" x2=\"320\" y2=\"102\" class=\"ln\"/><line x1=\"320\" y1=\"128\" x2=\"320\" y2=\"162\" class=\"ln\"/><line x1=\"264\" y1=\"115\" x2=\"295\" y2=\"115\" class=\"ln\"/><line x1=\"345\" y1=\"115\" x2=\"376\" y2=\"115\" class=\"ln\"/><rect x=\"306\" y=\"48\" width=\"28\" height=\"20\" class=\"ln fla\"/><rect x=\"306\" y=\"162\" width=\"28\" height=\"20\" class=\"ln fla\"/><rect x=\"236\" y=\"105\" width=\"28\" height=\"20\" class=\"ln fla\"/><rect x=\"376\" y=\"105\" width=\"28\" height=\"20\" class=\"ln fla\"/><rect x=\"295\" y=\"102\" width=\"50\" height=\"26\" class=\"ln flg\"/><text x=\"320\" y=\"119\" class=\"txs txb txc\">Switch</text><text x=\"320\" y=\"36\" class=\"tx txb txc\">Star</text><text x=\"320\" y=\"214\" class=\"txs txc\">A cable fault affects one device.</text><text x=\"320\" y=\"228\" class=\"txs txc\">The usual choice for Ethernet.</text><polyline points=\"480,70 580,70 580,160 480,160 480,70\" class=\"ln\"/><rect x=\"466\" y=\"60\" width=\"28\" height=\"20\" class=\"ln fla\"/><rect x=\"566\" y=\"60\" width=\"28\" height=\"20\" class=\"ln fla\"/><rect x=\"566\" y=\"150\" width=\"28\" height=\"20\" class=\"ln fla\"/><rect x=\"466\" y=\"150\" width=\"28\" height=\"20\" class=\"ln fla\"/><text x=\"530\" y=\"36\" class=\"tx txb txc\">Ring</text><text x=\"530\" y=\"190\" class=\"txs txc\">If one link breaks, traffic</text><text x=\"530\" y=\"204\" class=\"txs txc\">goes round the other way.</text>\n</svg>"
    },
    {
     "t": "p",
     "x": "RS-485 buses (PROFIBUS, Modbus RTU) use a **line** with short or no spurs. Ethernet uses a **star** around switches, and a **ring** of managed switches gives redundancy: the ring manager blocks one link, and if a cable fails it opens it within milliseconds."
    },
    {
     "t": "h",
     "x": "RS-485 rules"
    },
    {
     "t": "ul",
     "items": [
      "Use the specified **twisted-pair, shielded cable** and keep A to A and B to B on every device; swapped wires are the most common commissioning fault.",
      "Fit **termination** at both ends of the bus: typically a 120 Ω resistor between A and B at the first and last device, and nowhere else. Without it, reflections corrupt the data; with extra terminations the signal is loaded down.",
      "Fit **bias resistors** (pull-up on one line, pull-down on the other, usually at one point) so the line has a defined state when no device is sending.",
      "Keep spurs very short and never form a star on an RS-485 bus."
     ]
    },
    {
     "t": "table",
     "head": [
      "PROFIBUS baud rate",
      "Maximum segment length"
     ],
     "rows": [
      [
       "9.6 to 93.75 kbit/s",
       "1200 m"
      ],
      [
       "187.5 kbit/s",
       "1000 m"
      ],
      [
       "500 kbit/s",
       "400 m"
      ],
      [
       "1.5 Mbit/s",
       "200 m"
      ],
      [
       "12 Mbit/s",
       "100 m"
      ]
     ],
     "cap": "Higher speed means a shorter cable"
    },
    {
     "t": "h",
     "x": "Ethernet cabling"
    },
    {
     "t": "ul",
     "items": [
      "Copper twisted pair (Cat5e or Cat6) reaches **100 m** per segment between device and switch. Use industrial M12 connectors where there is vibration, water or dust.",
      "Use **fibre-optic cable** for longer distances, between buildings, and where electrical noise or lightning could induce voltage; fibre also gives electrical isolation.",
      "Run network cable apart from power and motor cables, cross them at right angles, and connect shields as the maker specifies (normally both ends for Ethernet, using a bonding system)."
     ]
    },
    {
     "t": "h",
     "x": "Message timing"
    },
    {
     "t": "p",
     "x": "On a serial link each character is sent as a start bit, data bits, an optional parity bit and a stop bit. Modbus RTU uses 8 data bits, even parity and 1 stop bit: **11 bits per character**. The time for one character is 11 ÷ baud rate."
    },
    {
     "t": "worked",
     "title": "Worked example: Modbus RTU poll time",
     "problem": "A master reads 10 holding registers from a slave at 19 200 baud. The request is 8 bytes and the reply is 25 bytes. Modbus requires a silent gap of 3.5 characters before each message. Estimate the time for one poll and the time to poll 10 slaves one after another.",
     "steps": [
      "Character time = 11 ÷ 19 200 = 0.573 ms.",
      "Request = 8 × 0.573 = 4.58 ms. Reply = 25 × 0.573 = 14.3 ms.",
      "Two silent gaps = 2 × 3.5 × 0.573 = 4.0 ms.",
      "One poll = 4.58 + 14.3 + 4.0 = about 22.9 ms (plus the slave's own response time, ignored here). Ten slaves = about 229 ms."
     ],
     "answer": "About 23 ms per slave and about 0.23 s for ten. If this is too slow, raise the baud rate, read fewer registers or split the slaves between two ports."
    },
    {
     "t": "key",
     "items": [
      "RS-485 needs a line topology, A to A and B to B, a 120 Ω terminator at each end and bias resistors.",
      "Higher PROFIBUS speed means a shorter maximum cable length.",
      "Ethernet copper segments are limited to 100 m; use fibre for longer or noisy routes.",
      "A ring of managed switches gives redundancy.",
      "Message time = bytes × 11 ÷ baud, plus silent gaps."
     ]
    }
   ]
  },
  {
   "id": "m16-l4",
   "title": "HMI design and alarm management",
   "minutes": 9,
   "body": [
    {
     "t": "p",
     "x": "The **human-machine interface (HMI)** is the operator's window on the machine: a touch panel or computer screen that shows the process, accepts commands and presents alarms. A good HMI makes the right action obvious and the wrong action hard; a bad HMI hides problems under decoration."
    },
    {
     "t": "h",
     "x": "HMI design principles"
    },
    {
     "t": "ul",
     "items": [
      "**Simple and consistent:** use the same layout, symbols and colours on every screen, with a fixed navigation bar and the current screen name.",
      "**Show the process:** a simple mimic of the machine with live values beside the equipment they belong to. Show units and normal ranges.",
      "**Use colour with purpose.** A modern approach uses calm greys for normal operation and saves bright colours, such as red, yellow and orange, for abnormal conditions that need attention. Never rely on colour alone, because some people are colour-blind: add shape, text or position.",
      "**Large touch targets** (at least about 10 mm) for gloved hands, with the dangerous actions protected by a confirmation step.",
      "**Few screens for the main task,** and manual controls kept separate from the automatic overview.",
      "**User levels:** operator, maintenance and engineer logins, so that only authorised persons can change setpoints, bypass interlocks or edit recipes."
     ]
    },
    {
     "t": "p",
     "x": "An HMI is not a safety device. A software stop button on a touch screen must never replace a hard-wired emergency stop."
    },
    {
     "t": "h",
     "x": "Alarms"
    },
    {
     "t": "p",
     "x": "An alarm is a signal that tells the operator an abnormal condition needs action. The good practice behind standards such as **ISA-18.2** can be summed up as: every alarm must be **relevant**, **unique**, **timely**, **prioritised**, **understandable** and **actionable**. If the operator does not need to do anything, it should be a message or log entry, not an alarm."
    },
    {
     "t": "table",
     "head": [
      "Priority",
      "Meaning",
      "Response"
     ],
     "rows": [
      [
       "Critical",
       "Risk to people, the environment or serious equipment damage",
       "Immediate action; usually with audible warning and protective action"
      ],
      [
       "High",
       "Fast-developing problem that could cause a stop or loss of product",
       "Action within minutes"
      ],
      [
       "Medium",
       "A deviation that needs attention soon",
       "Action in the current shift"
      ],
      [
       "Low",
       "Information needing follow-up, such as a filter service interval",
       "Action when convenient"
      ]
     ],
     "cap": "Example alarm priorities"
    },
    {
     "t": "ul",
     "items": [
      "**Acknowledge** means the operator has seen it; the alarm stays visible until the condition clears.",
      "Use **deadband and delay** so a value that jitters around its limit does not raise the alarm again and again.",
      "An **alarm flood** happens when so many alarms occur that the operator cannot respond. Typical causes are one fault triggering a chain of consequential alarms, trivial alarms, and alarms that stay on all the time (stale alarms). Review the alarm log regularly and remove or fix the worst offenders.",
      "**Shelving** temporarily hides a nuisance alarm, with a reason and a time limit. Never permanently disable an alarm without management approval.",
      "Record **events and alarms with time stamps** so faults can be reconstructed afterwards."
     ]
    },
    {
     "t": "tip",
     "x": "When commissioning a screen, test it with a real operator. If they cannot find the way to the fault screen within seconds, the layout needs changing."
    },
    {
     "t": "key",
     "items": [
      "A good HMI is simple, consistent and shows the process with units and normal ranges.",
      "Use colour sparingly for abnormal states and never rely on colour alone.",
      "Provide user levels and protect dangerous commands.",
      "Alarms must be relevant, actionable and prioritised; information belongs in messages.",
      "Control alarm floods with deadbands, delays, shelving and regular review."
     ]
    }
   ]
  },
  {
   "id": "m16-l5",
   "title": "SCADA, cyber-security and network fault finding",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "**SCADA** (supervisory control and data acquisition) is the system that gathers data from many PLCs and **remote terminal units (RTUs)** across a plant or over a wide area (a water network, a pipeline, a power grid), displays it to operators, archives it and lets them send commands. The PLCs and RTUs do the real-time control. If SCADA fails, the plant should keep running safely on local control."
    },
    {
     "t": "svg",
     "alt": "A SCADA architecture: field devices connect to a PLC or RTU, which connects over industrial Ethernet to a SCADA server with historian, which serves operator clients. A firewall separates the control network from the business network.",
     "cap": "Figure 3: a typical SCADA architecture",
     "svg": "<svg viewBox=\"0 0 680 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m16-f2-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<rect x=\"8\" y=\"70\" width=\"146\" height=\"70\" class=\"ln fla\"/><text x=\"81\" y=\"98\" class=\"tx txb txc\">Field devices</text><text x=\"81\" y=\"116\" class=\"txs txc\">sensors, drives,</text><text x=\"81\" y=\"130\" class=\"txs txc\">valves</text><text x=\"81\" y=\"58\" class=\"txs txb txc\">Level 0</text><line x1=\"154\" y1=\"105\" x2=\"178\" y2=\"105\" class=\"ln\" marker-end=\"url(#m16-f2-arr)\"/><rect x=\"178\" y=\"70\" width=\"146\" height=\"70\" class=\"ln flg\"/><text x=\"251\" y=\"98\" class=\"tx txb txc\">PLC or RTU</text><text x=\"251\" y=\"116\" class=\"txs txc\">local control and</text><text x=\"251\" y=\"130\" class=\"txs txc\">data collection</text><text x=\"251\" y=\"58\" class=\"txs txb txc\">Level 1</text><line x1=\"324\" y1=\"105\" x2=\"348\" y2=\"105\" class=\"ln\" marker-end=\"url(#m16-f2-arr)\"/><rect x=\"348\" y=\"70\" width=\"146\" height=\"70\" class=\"ln flb\"/><text x=\"421\" y=\"98\" class=\"tx txb txc\">SCADA server</text><text x=\"421\" y=\"116\" class=\"txs txc\">historian, alarms,</text><text x=\"421\" y=\"130\" class=\"txs txc\">data archive</text><text x=\"421\" y=\"58\" class=\"txs txb txc\">Level 2</text><line x1=\"494\" y1=\"105\" x2=\"518\" y2=\"105\" class=\"ln\" marker-end=\"url(#m16-f2-arr)\"/><rect x=\"518\" y=\"70\" width=\"146\" height=\"70\" class=\"ln fl\"/><text x=\"591\" y=\"98\" class=\"tx txb txc\">Operator clients</text><text x=\"591\" y=\"116\" class=\"txs txc\">HMI screens,</text><text x=\"591\" y=\"130\" class=\"txs txc\">engineering station</text><text x=\"591\" y=\"58\" class=\"txs txb txc\">Level 2</text>\n<text x=\"166\" y=\"162\" class=\"txs txm txc\">wires or fieldbus</text><text x=\"336\" y=\"162\" class=\"txs txm txc\">industrial Ethernet</text><text x=\"506\" y=\"162\" class=\"txs txm txc\">control network</text>\n<line x1=\"421\" y1=\"140\" x2=\"421\" y2=\"206\" class=\"ln\"/>\n<rect x=\"371\" y=\"206\" width=\"100\" height=\"26\" class=\"ln flr\"/><text x=\"421\" y=\"223\" class=\"txs txb txc\">Firewall</text>\n<line x1=\"421\" y1=\"232\" x2=\"421\" y2=\"252\" class=\"ln\"/>\n<rect x=\"321\" y=\"252\" width=\"200\" height=\"30\" class=\"ln fl\"/><text x=\"421\" y=\"272\" class=\"tx txb txc\">Business network (IT)</text>\n<text x=\"30\" y=\"226\" class=\"txs\">Keep the control network separate.</text><text x=\"30\" y=\"242\" class=\"txs\">Pass only the data that must cross.</text>\n<text x=\"30\" y=\"272\" class=\"txs txm\">Cyber-security starts with segmentation.</text>\n</svg>"
    },
    {
     "t": "ul",
     "items": [
      "**Communication:** Modbus, PROFINET, OPC UA or radio, cellular and fibre links for remote sites.",
      "**SCADA server:** polls the controllers, evaluates alarms and stores values in a **historian** database for trends and reports.",
      "**Clients:** operator screens, engineering stations and web or mobile viewers.",
      "**Redundancy:** key systems often have a standby server and duplicate network paths."
     ]
    },
    {
     "t": "h",
     "x": "Cyber-security basics"
    },
    {
     "t": "p",
     "x": "Control systems that were once isolated are now connected to office networks and the internet, so a computer virus or an intruder can stop a plant. Good practice, summarised in the IEC 62443 family of standards, is simple at the technician's level:"
    },
    {
     "t": "ul",
     "items": [
      "**Segment the network:** keep the control network separate from the office and the internet, joined only through a firewall that passes only the traffic that is needed.",
      "**Change default passwords** on every PLC, switch, drive, HMI and router, and use different strong passwords where possible. Never leave a password on a sticker on the panel.",
      "**Control USB drives and laptops:** scan them before use and do not plug personal devices into the control network. Many incidents begin with an infected USB stick.",
      "**Control remote access:** use a secure VPN with individual accounts and logging, enable it only when needed, and do not leave modems or routers open to the internet.",
      "**Patch and back up:** keep a tested backup of every program and configuration, and plan updates carefully because a patch can upset a control system.",
      "**Disable unused ports and services.** Lock cabinets that hold switches and PLCs."
     ]
    },
    {
     "t": "h",
     "x": "Diagnosing network faults"
    },
    {
     "t": "steps",
     "title": "When a device drops off the network",
     "items": [
      "Look at the physical layer first: link and activity LEDs on the device and switch port, connector, cable damage, the power supply of the device.",
      "Check the device's own diagnostics: its status LED, error codes and the controller's diagnostic buffer, which often names the faulty station.",
      "Check the address settings: duplicate IP address, wrong subnet mask or gateway, wrong device name (PROFINET), wrong station address or baud rate (serial).",
      "Use a laptop to **ping** the device. A reply means the network path works. A time-out means look at the cable, switch or address.",
      "For serial buses, check polarity (A and B), termination at both ends, shields, and whether a single device is jamming the bus by removing devices one at a time.",
      "Replace the cable or device that you have shown to be faulty, then record the fault and the fix."
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
       "Intermittent drop-outs",
       "Loose connector, damaged cable, electrical noise, missing termination, duplicate IP"
      ],
      [
       "Whole segment dead",
       "Broken cable, failed switch or power supply, wrong baud rate"
      ],
      [
       "Slow response",
       "Overloaded network, broadcast storm, loop in the cabling"
      ],
      [
       "Only one device unreachable",
       "Device address or name wrong, device faulty, port disabled"
      ]
     ],
     "cap": "Network fault patterns"
    },
    {
     "t": "warn",
     "x": "Never connect a network cable between two switch ports of the same network without confirming that ring protocols are configured. A loop creates a broadcast storm that can bring down the whole control network."
    },
    {
     "t": "key",
     "items": [
      "SCADA collects data from PLCs and RTUs, displays it, archives it in a historian and sends commands.",
      "Controllers must keep running safely if SCADA is lost.",
      "Segment networks, change default passwords, control USB and remote access, and keep backups.",
      "Diagnose from the physical layer upward: LEDs, cable, address, then ping.",
      "A cabling loop can cause a broadcast storm."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m16-q1",
   "q": "Why is RS-485 suitable for industrial use?",
   "opts": [
    "It uses differential signals on a twisted pair",
    "It needs no cable at all between devices",
    "It has the highest speed of any network type",
    "It can only connect two devices together"
   ],
   "a": 0,
   "why": "A differential signal on a twisted pair cancels most noise, and RS-485 allows many devices on a bus over up to 1200 m at lower speeds."
  },
  {
   "id": "m16-q2",
   "q": "What is the unique 48-bit number set by the manufacturer of an Ethernet device called?",
   "opts": [
    "IP address, set by the engineer",
    "MAC address",
    "Subnet mask value",
    "Default gateway address"
   ],
   "a": 1,
   "why": "The MAC address is fixed in the device at the factory. The IP address is assigned by the engineer."
  },
  {
   "id": "m16-q3",
   "q": "How many usable host addresses does a /24 network have?",
   "opts": [
    "256 (all addresses)",
    "255 (one reserved)",
    "253 (three reserved)",
    "254"
   ],
   "a": 3,
   "why": "There are 2⁸ = 256 addresses. The network address and the broadcast address cannot be used, leaving 254."
  },
  {
   "id": "m16-q4",
   "q": "Which prefix length matches the subnet mask 255.255.255.192?",
   "opts": [
    "/24 (24 ones)",
    "/25 (25 ones)",
    "/26",
    "/27 (27 ones)"
   ],
   "a": 2,
   "why": "The mask has three full octets (24 ones) plus 11000000 in the fourth octet (two more ones, value 192), so 26 ones in total."
  },
  {
   "id": "m16-q5",
   "q": "A /26 subnet has how many usable hosts?",
   "opts": [
    "64",
    "62",
    "30",
    "126"
   ],
   "a": 1,
   "why": "26 network bits leave 6 host bits: 2⁶ − 2 = 62."
  },
  {
   "id": "m16-q6",
   "q": "Two devices have the same IP address on a network. What is the likely symptom?",
   "opts": [
    "Both devices work normally and quietly",
    "The switch fails permanently at once",
    "The network speed doubles overnight",
    "Intermittent loss of communication"
   ],
   "a": 3,
   "why": "Duplicate addresses cause the network to deliver packets unpredictably, giving intermittent faults that are hard to trace."
  },
  {
   "id": "m16-q7",
   "q": "Where should the 120 Ω termination resistors be fitted on an RS-485 bus?",
   "opts": [
    "At every device on the bus",
    "At both ends only",
    "At the middle device only",
    "Nowhere; the cable is enough"
   ],
   "a": 1,
   "why": "Termination at the two ends prevents signal reflections. Extra terminators load the bus."
  },
  {
   "id": "m16-q8",
   "q": "Which of these is a common cause of a new RS-485 network not working?",
   "opts": [
    "The cable is slightly too short",
    "The cable shield is connected",
    "Polarity reversed on a device",
    "The cable is a twisted pair"
   ],
   "a": 2,
   "why": "RS-485 is polarity sensitive. Swapped A and B wires are the most frequent commissioning fault."
  },
  {
   "id": "m16-q9",
   "q": "What is the maximum length of a copper Ethernet segment between a device and a switch?",
   "opts": [
    "10 m per segment",
    "1000 m per segment",
    "300 m per segment",
    "100 m"
   ],
   "a": 3,
   "why": "Twisted-pair Ethernet is limited to 100 m per segment. Fibre is used for longer distances."
  },
  {
   "id": "m16-q10",
   "q": "A Modbus RTU character uses 11 bits. At 9600 baud, how long does one character take?",
   "opts": [
    "1.15 ms",
    "Roughly 0.11 ms",
    "Roughly 11 ms",
    "Roughly 0.57 ms"
   ],
   "a": 0,
   "why": "11 ÷ 9600 = 0.001146 s, about 1.15 ms per character."
  },
  {
   "id": "m16-q11",
   "q": "Which statement about alarms follows good practice?",
   "opts": [
    "Every alarm should need an operator action",
    "Alarms should be as numerous as possible",
    "All alarms should be critical",
    "Alarms should be disabled if they annoy the operator"
   ],
   "a": 0,
   "why": "If no action is needed, it should be a message or log entry. Alarms must be relevant, prioritised and actionable."
  },
  {
   "id": "m16-q12",
   "q": "What is an alarm flood?",
   "opts": [
    "An alarm triggered by flooding water",
    "Too many alarms to handle",
    "A very loud horn in the plant",
    "An alarm that has been acknowledged"
   ],
   "a": 1,
   "why": "An alarm flood overloads the operator, often because one fault triggers many consequential alarms or because nuisance alarms are not controlled."
  },
  {
   "id": "m16-q13",
   "q": "What is the best way to separate a control network from the office network?",
   "opts": [
    "A much longer cable between them",
    "A firewall passing only needed traffic",
    "A switch set to hub mode for safety",
    "A shared password for all staff"
   ],
   "a": 1,
   "why": "Segmentation with a firewall limits what can cross between the networks and reduces the risk of attacks reaching the controllers."
  },
  {
   "id": "m16-q14",
   "q": "A device on an Ethernet network does not respond to ping. What should you check first?",
   "opts": [
    "The PLC program and its logic",
    "Cable, link LEDs and address",
    "The colour scheme of the HMI screen",
    "The historian database settings"
   ],
   "a": 1,
   "why": "Start at the physical layer and addressing: link LEDs, cable, switch port, IP address and mask. Only then look at the software."
  }
 ],
 "cards": [
  {
   "f": "Why use an industrial network?",
   "b": "One cable carries many signals, with diagnostics, easier changes and lower wiring cost."
  },
  {
   "f": "What are the four levels in a control system?",
   "b": "Field, control, supervisory and enterprise."
  },
  {
   "f": "Why is RS-485 noise tolerant?",
   "b": "It uses differential signalling on a twisted pair."
  },
  {
   "f": "Name three industrial Ethernet protocols.",
   "b": "PROFINET, EtherNet/IP and Modbus TCP (also EtherCAT)."
  },
  {
   "f": "What is OPC UA?",
   "b": "A platform-independent, secure data exchange standard between machines, SCADA and business systems."
  },
  {
   "f": "MAC versus IP address?",
   "b": "MAC: 48-bit fixed identifier from the factory. IP: 32-bit address assigned by the engineer."
  },
  {
   "f": "What does /24 mean?",
   "b": "The mask 255.255.255.0: 24 network bits and 8 host bits."
  },
  {
   "f": "Usable host formula?",
   "b": "2ⁿ − 2, where n is the number of host bits."
  },
  {
   "f": "Switch versus router?",
   "b": "A switch forwards inside a subnet by MAC address; a router joins subnets."
  },
  {
   "f": "RS-485 termination?",
   "b": "120 Ω between A and B at both ends of the bus only."
  },
  {
   "f": "Maximum copper Ethernet segment?",
   "b": "100 m."
  },
  {
   "f": "Modbus RTU character length?",
   "b": "11 bits: start, 8 data, parity, stop."
  },
  {
   "f": "What makes a good alarm?",
   "b": "Relevant, unique, timely, prioritised, understandable and actionable."
  },
  {
   "f": "Four basic cyber-security actions?",
   "b": "Segment the network, change default passwords, control USB and remote access, keep backups."
  }
 ],
 "terms": [
  {
   "t": "Fieldbus",
   "d": "A digital network that connects field devices and controllers."
  },
  {
   "t": "RS-485",
   "d": "A differential serial standard for multi-drop communication over long distances."
  },
  {
   "t": "Modbus",
   "d": "A simple master/slave protocol used over serial lines (RTU) or Ethernet (TCP)."
  },
  {
   "t": "PROFINET",
   "d": "An industrial Ethernet protocol with real-time capability."
  },
  {
   "t": "MAC address",
   "d": "A unique 48-bit hardware identifier of an Ethernet device."
  },
  {
   "t": "Subnet mask",
   "d": "A pattern showing which bits of an IP address are the network part."
  },
  {
   "t": "Gateway",
   "d": "The router address a device uses to reach other subnets."
  },
  {
   "t": "HMI",
   "d": "Human-machine interface, the screen where operators see and control a machine."
  },
  {
   "t": "SCADA",
   "d": "Supervisory control and data acquisition: software that monitors and controls many controllers."
  },
  {
   "t": "Historian",
   "d": "A database that stores process values over time for trends and reports."
  },
  {
   "t": "Alarm flood",
   "d": "A burst of alarms too large for the operator to handle."
  }
 ],
 "formulas": [
  {
   "n": "Usable hosts in a subnet",
   "f": "2ⁿ − 2",
   "v": "n = host bits = 32 − prefix"
  },
  {
   "n": "Subnet block size",
   "f": "256 − last mask octet",
   "v": "/26: 256 − 192 = 64"
  },
  {
   "n": "Serial character time",
   "f": "t = 11 ÷ baud",
   "v": "Modbus RTU, 11 bits per character"
  },
  {
   "n": "Silent gap in Modbus RTU",
   "f": "t = 3.5 × character time",
   "v": "Between messages"
  },
  {
   "n": "Serial message time",
   "f": "t = bytes × 11 ÷ baud",
   "v": "Plus silent gaps"
  }
 ]
});
