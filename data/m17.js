window.MECH.register({
 "id": "m17",
 "n": 17,
 "title": "Closed-Loop Control and PID Tuning",
 "short": "Closed-Loop and PID",
 "group": "Control & Automation",
 "blurb": "How feedback control works: setpoint, error and controller output, on/off and PID action, process behaviour, tuning methods, windup, and troubleshooting a loop that will not behave.",
 "outcomes": [
  "Explain open-loop and closed-loop control and name the parts of a control loop",
  "Describe on/off control with hysteresis and its limits",
  "Calculate proportional output, proportional band and the effect of I and D action",
  "Describe process gain, time constant and dead time",
  "Measure overshoot, rise time, settling time and steady-state error from a step response",
  "Tune a loop by trial and error and with the Ziegler-Nichols methods",
  "Explain integral windup, deadband, direct and reverse action",
  "Troubleshoot a loop: stiction, noise, saturation and wrong action"
 ],
 "lessons": [
  {
   "id": "m17-l1",
   "title": "Feedback, error and on/off control",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "A control system makes a quantity such as temperature, level, pressure or speed follow a target. In **open-loop** control the controller sets an output without checking the result: a toaster timer or a pump that runs for ten minutes. It is simple, but cannot correct for disturbances or changes in the process. In **closed-loop** control the result is measured and compared to the target, and the controller acts on the difference. This is **feedback**."
    },
    {
     "t": "svg",
     "alt": "A closed-loop block diagram. The setpoint and the feedback from the sensor enter a summing junction. The error goes to the PID controller, then the actuator, then the process. The process output PV is measured by the sensor and fed back. A disturbance enters the process.",
     "cap": "Figure 1: a closed control loop",
     "svg": "<svg viewBox=\"0 0 680 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m17-f1-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<text x=\"12\" y=\"84\" class=\"txs txb\">SP</text><text x=\"12\" y=\"70\" class=\"txs\">setpoint</text>\n<line x1=\"10\" y1=\"100\" x2=\"64\" y2=\"100\" class=\"ln\" marker-end=\"url(#m17-f1-arr)\"/>\n<circle cx=\"80\" cy=\"100\" r=\"14\" class=\"ln fl\"/><text x=\"68\" y=\"95\" class=\"txs txb\">+</text><text x=\"85\" y=\"122\" class=\"txs txb\">−</text>\n<line x1=\"94\" y1=\"100\" x2=\"148\" y2=\"100\" class=\"ln\" marker-end=\"url(#m17-f1-arr)\"/><text x=\"121\" y=\"90\" class=\"txs txb txc\">error</text>\n<rect x=\"150\" y=\"72\" width=\"104\" height=\"56\" class=\"ln flg\"/><text x=\"202\" y=\"97\" class=\"tx txb txc\">Controller</text><text x=\"202\" y=\"113\" class=\"txs txc\">PID</text>\n<line x1=\"254\" y1=\"100\" x2=\"298\" y2=\"100\" class=\"ln\" marker-end=\"url(#m17-f1-arr)\"/><text x=\"276\" y=\"90\" class=\"txs txc\">output</text>\n<rect x=\"300\" y=\"72\" width=\"104\" height=\"56\" class=\"ln fla\"/><text x=\"352\" y=\"97\" class=\"tx txb txc\">Actuator</text><text x=\"352\" y=\"113\" class=\"txs txc\">valve, heater, drive</text>\n<line x1=\"404\" y1=\"100\" x2=\"438\" y2=\"100\" class=\"ln\" marker-end=\"url(#m17-f1-arr)\"/>\n<rect x=\"440\" y=\"72\" width=\"104\" height=\"56\" class=\"ln flb\"/><text x=\"492\" y=\"97\" class=\"tx txb txc\">Process</text><text x=\"492\" y=\"113\" class=\"txs txc\">tank, oven, motor</text>\n<line x1=\"544\" y1=\"100\" x2=\"650\" y2=\"100\" class=\"ln\" marker-end=\"url(#m17-f1-arr)\"/><text x=\"610\" y=\"90\" class=\"txs txb txc\">PV</text><text x=\"610\" y=\"124\" class=\"txs txc\">measured</text>\n<line x1=\"492\" y1=\"30\" x2=\"492\" y2=\"70\" class=\"lnr ln\" marker-end=\"url(#m17-f1-arr)\"/><text x=\"492\" y=\"22\" class=\"txs txc\">disturbance</text>\n<circle cx=\"590\" cy=\"100\" r=\"3\" class=\"fi\"/><polyline points=\"590,100 590,200 440,200\" class=\"ln\"/>\n<rect x=\"340\" y=\"176\" width=\"100\" height=\"48\" class=\"ln fl\"/><text x=\"390\" y=\"198\" class=\"tx txb txc\">Sensor</text><text x=\"390\" y=\"214\" class=\"txs txc\">measures PV</text>\n<polyline points=\"340,200 80,200 80,116\" class=\"ln\" marker-end=\"url(#m17-f1-arr)\"/>\n<text x=\"210\" y=\"192\" class=\"txs txm txc\">feedback</text>\n</svg>"
    },
    {
     "t": "table",
     "head": [
      "Term",
      "Symbol",
      "Meaning"
     ],
     "rows": [
      [
       "Setpoint",
       "SP",
       "The desired value of the process variable"
      ],
      [
       "Process variable",
       "PV",
       "The measured value of the controlled quantity"
      ],
      [
       "Error",
       "e",
       "e = SP − PV"
      ],
      [
       "Controller output",
       "u or OUT",
       "The signal sent to the actuator, normally 0 to 100 %"
      ],
      [
       "Disturbance",
       "d",
       "Anything that upsets the process, such as a change of load, ambient temperature or supply pressure"
      ],
      [
       "Actuator",
       "",
       "The device that changes the process: valve, heater, variable speed drive"
      ]
     ],
     "cap": "Loop vocabulary"
    },
    {
     "t": "h",
     "x": "On/off control"
    },
    {
     "t": "p",
     "x": "The simplest closed-loop controller is **on/off** (bang-bang): the output is fully on when the PV is below the setpoint and fully off when it is above. Thermostats, pressure switches and float switches work this way. A real controller adds **hysteresis** (also called differential), a gap between the switch-on and switch-off points, so the output does not chatter on and off many times a second. The PV therefore swings in a cycle around the setpoint."
    },
    {
     "t": "worked",
     "title": "Worked example: on/off heating with hysteresis",
     "problem": "A thermostat controls an oven at a setpoint of 180 °C with a hysteresis of 4 °C (±2 °C about the setpoint). At what temperatures does the heater switch on and off? What happens if the hysteresis is cut to 0.2 °C?",
     "steps": [
      "The heater switches off at SP + 2 = 182 °C.",
      "The heater switches on at SP − 2 = 178 °C.",
      "With 0.2 °C hysteresis (±0.1 °C) the temperature band is narrower, so the oven holds the temperature more tightly, but the heater and its contactor switch on and off far more often."
     ],
     "answer": "Off at 182 °C and on at 178 °C. A very small hysteresis gives tight control but wears out relays and contactors, so choose the widest band the process allows."
    },
    {
     "t": "p",
     "x": "On/off control is cheap and acceptable when the process is slow and a wide swing does not matter. When tighter, smoother control is needed, a **proportional** or **PID** controller is used, which varies the output continuously."
    },
    {
     "t": "key",
     "items": [
      "Closed-loop control measures the result and corrects it; open-loop control does not.",
      "Error = setpoint − process variable.",
      "On/off control switches the output fully on or off with a hysteresis gap.",
      "Small hysteresis gives tight control but more switching and wear.",
      "Use PID where smoother, tighter control is needed."
     ]
    }
   ]
  },
  {
   "id": "m17-l2",
   "title": "Proportional, integral and derivative action",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "A PID controller combines three actions on the error. Each does a different job."
    },
    {
     "t": "h",
     "x": "Proportional (P)"
    },
    {
     "t": "p",
     "x": "The output is proportional to the error: **u = bias + Kp × e**. Large error gives large correction. The **proportional band (PB)** is the error, as a percentage of the span, that moves the output through its full 0 to 100 % range: **PB = 100 ÷ Kp**. A high gain (narrow PB) responds strongly but can make the loop oscillate. A pure P controller always leaves a **steady-state error (offset)**, because it needs some error to produce an output."
    },
    {
     "t": "worked",
     "title": "Worked example: proportional output",
     "problem": "A temperature loop spans 0 to 200 °C. The controller has Kp = 2 and a bias (output when error is zero) of 50 %. The setpoint is 120 °C and the PV is 110 °C. Find the proportional band and the output.",
     "steps": [
      "PB = 100 ÷ Kp = 100 ÷ 2 = 50 %.",
      "Error = 120 − 110 = 10 °C. As a percentage of span: 10 ÷ 200 × 100 = 5 %.",
      "Output = 50 + 2 × 5 = 60 %."
     ],
     "answer": "The proportional band is 50 % and the output is 60 %. If the error were 25 % of the span, the output would reach the 100 % limit."
    },
    {
     "t": "h",
     "x": "Integral (I)"
    },
    {
     "t": "p",
     "x": "The integral action adds up the error over time. As long as any error remains, the output keeps changing, so the integral term **removes the steady-state offset**. It is set by the **integral time Ti** (minutes or seconds per repeat); a **shorter** Ti means **stronger** integral action. Too much integral causes overshoot and slow oscillation."
    },
    {
     "t": "h",
     "x": "Derivative (D)"
    },
    {
     "t": "p",
     "x": "The derivative action reacts to the rate of change of the error (or the PV). It acts like a brake: if the PV is rising fast towards the setpoint, derivative reduces the output early, cutting overshoot. It is set by the **derivative time Td**. Derivative amplifies noise, so it is used only when the signal is clean and the process is slow (temperature) and is rarely used on fast, noisy loops such as flow and pressure."
    },
    {
     "t": "formula",
     "x": "u = Kp × [ e + (1 ÷ Ti) ∫ e dt + Td × de/dt ]",
     "where": "Kp proportional gain, Ti integral time, Td derivative time. Many controllers use PB instead of Kp and show integral action as 'repeats per minute' (1 ÷ Ti); check the manual's definition."
    },
    {
     "t": "svg",
     "alt": "Three response curves to a setpoint step: P only settles below the setpoint with a steady error, PI reaches the setpoint with some overshoot, and PID settles with less overshoot.",
     "cap": "Figure 2: effect of adding integral and derivative action",
     "svg": "<svg viewBox=\"0 0 640 290\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<line x1=\"70\" y1=\"230\" x2=\"590\" y2=\"230\" class=\"ln\"/><line x1=\"70\" y1=\"230\" x2=\"70\" y2=\"60\" class=\"ln\"/>\n<text x=\"62\" y=\"134\" class=\"txs txe\">SP</text><line x1=\"70\" y1=\"130\" x2=\"590\" y2=\"130\" class=\"ln1 lnm dash\"/>\n<polyline points=\"70.0,230.0 73.6,230.0 77.2,229.8 80.8,229.3 84.4,228.5 88.0,227.2 91.6,225.5 95.2,223.4 98.8,220.8 102.4,217.7 106.0,214.3 109.6,210.6 113.2,206.6 116.8,202.4 120.4,198.0 124.0,193.6 127.6,189.0 131.2,184.5 134.8,180.1 138.4,175.8 142.0,171.6 145.6,167.6 149.2,163.8 152.8,160.4 156.4,157.2 160.0,154.3 163.6,151.7 167.2,149.5 170.8,147.6 174.4,146.0 178.0,144.8 181.6,143.9 185.2,143.3 188.8,143.0 192.4,143.0 196.0,143.3 199.6,143.8 203.2,144.5 206.8,145.4 210.4,146.4 214.0,147.6 217.6,149.0 221.2,150.4 224.8,151.9 228.4,153.4 232.0,155.0 235.6,156.5 239.2,158.0 242.8,159.5 246.4,160.9 250.0,162.3 253.6,163.6 257.2,164.8 260.8,165.9 264.4,166.8 268.0,167.7 271.6,168.4 275.2,169.1 278.8,169.6 282.4,170.0 286.0,170.2 289.6,170.4 293.2,170.5 296.8,170.5 300.4,170.3 304.0,170.1 307.6,169.9 311.2,169.5 314.8,169.1 318.4,168.7 322.0,168.2 325.6,167.7 329.2,167.2 332.8,166.6 336.4,166.1 340.0,165.6 343.6,165.0 347.2,164.5 350.8,164.0 354.4,163.5 358.0,163.1 361.6,162.7 365.2,162.3 368.8,162.0 372.4,161.7 376.0,161.5 379.6,161.3 383.2,161.1 386.8,161.0 390.4,160.9 394.0,160.8 397.6,160.8 401.2,160.8 404.8,160.9 408.4,161.0 412.0,161.1 415.6,161.2 419.2,161.3 422.8,161.5 426.4,161.7 430.0,161.9 433.6,162.0 437.2,162.2 440.8,162.4 444.4,162.6 448.0,162.8 451.6,163.0 455.2,163.1 458.8,163.3 462.4,163.5 466.0,163.6 469.6,163.7 473.2,163.8 476.8,163.9 480.4,164.0 484.0,164.1 487.6,164.1 491.2,164.2 494.8,164.2 498.4,164.2 502.0,164.2 505.6,164.2 509.2,164.2 512.8,164.2 516.4,164.1 520.0,164.1 523.6,164.0 527.2,164.0 530.8,163.9 534.4,163.8 538.0,163.8 541.6,163.7 545.2,163.6 548.8,163.6 552.4,163.5 556.0,163.4 559.6,163.4 563.2,163.3 566.8,163.3 570.4,163.2 574.0,163.2\" class=\"lnr\"/><polyline points=\"70.0,230.0 73.6,230.0 77.2,229.8 80.8,229.3 84.4,228.4 88.0,227.1 91.6,225.2 95.2,222.7 98.8,219.7 102.4,216.1 106.0,212.1 109.6,207.5 113.2,202.4 116.8,197.0 120.4,191.1 124.0,185.0 127.6,178.7 131.2,172.1 134.8,165.5 138.4,158.8 142.0,152.1 145.6,145.5 149.2,139.0 152.8,132.7 156.4,126.7 160.0,120.9 163.6,115.5 167.2,110.5 170.8,105.8 174.4,101.6 178.0,97.9 181.6,94.6 185.2,91.8 188.8,89.5 192.4,87.7 196.0,86.5 199.6,85.7 203.2,85.4 206.8,85.6 210.4,86.2 214.0,87.2 217.6,88.7 221.2,90.5 224.8,92.6 228.4,95.1 232.0,97.8 235.6,100.7 239.2,103.9 242.8,107.2 246.4,110.6 250.0,114.1 253.6,117.6 257.2,121.1 260.8,124.6 264.4,128.0 268.0,131.4 271.6,134.6 275.2,137.6 278.8,140.5 282.4,143.1 286.0,145.6 289.6,147.8 293.2,149.7 296.8,151.4 300.4,152.8 304.0,154.0 307.6,154.9 311.2,155.5 314.8,155.8 318.4,155.9 322.0,155.7 325.6,155.3 329.2,154.6 332.8,153.7 336.4,152.7 340.0,151.4 343.6,150.0 347.2,148.4 350.8,146.8 354.4,145.0 358.0,143.1 361.6,141.2 365.2,139.2 368.8,137.3 372.4,135.3 376.0,133.3 379.6,131.4 383.2,129.6 386.8,127.8 390.4,126.1 394.0,124.5 397.6,123.0 401.2,121.7 404.8,120.4 408.4,119.4 412.0,118.4 415.6,117.6 419.2,117.0 422.8,116.5 426.4,116.2 430.0,116.0 433.6,116.0 437.2,116.1 440.8,116.3 444.4,116.7 448.0,117.2 451.6,117.8 455.2,118.5 458.8,119.3 462.4,120.1 466.0,121.1 469.6,122.0 473.2,123.1 476.8,124.1 480.4,125.2 484.0,126.3 487.6,127.4 491.2,128.4 494.8,129.5 498.4,130.5 502.0,131.5 505.6,132.4 509.2,133.3 512.8,134.1 516.4,134.8 520.0,135.5 523.6,136.0 527.2,136.5 530.8,137.0 534.4,137.3 538.0,137.5 541.6,137.7 545.2,137.8 548.8,137.8 552.4,137.7 556.0,137.6 559.6,137.4 563.2,137.1 566.8,136.7 570.4,136.4 574.0,135.9\" class=\"lnb\"/><polyline points=\"70.0,230.0 73.6,230.0 77.2,229.8 80.8,229.3 84.4,228.4 88.0,227.1 91.6,225.3 95.2,223.0 98.8,220.2 102.4,216.9 106.0,213.2 109.6,209.2 113.2,204.8 116.8,200.3 120.4,195.5 124.0,190.6 127.6,185.6 131.2,180.6 134.8,175.6 138.4,170.7 142.0,165.9 145.6,161.3 149.2,156.8 152.8,152.5 156.4,148.4 160.0,144.6 163.6,140.9 167.2,137.5 170.8,134.4 174.4,131.4 178.0,128.7 181.6,126.3 185.2,124.0 188.8,122.0 192.4,120.1 196.0,118.5 199.6,117.0 203.2,115.7 206.8,114.6 210.4,113.6 214.0,112.8 217.6,112.1 221.2,111.5 224.8,111.0 228.4,110.7 232.0,110.4 235.6,110.2 239.2,110.1 242.8,110.1 246.4,110.1 250.0,110.2 253.6,110.4 257.2,110.6 260.8,110.8 264.4,111.1 268.0,111.5 271.6,111.8 275.2,112.2 278.8,112.7 282.4,113.1 286.0,113.6 289.6,114.1 293.2,114.6 296.8,115.1 300.4,115.6 304.0,116.1 307.6,116.7 311.2,117.2 314.8,117.8 318.4,118.3 322.0,118.8 325.6,119.4 329.2,119.9 332.8,120.4 336.4,120.9 340.0,121.4 343.6,121.9 347.2,122.4 350.8,122.9 354.4,123.4 358.0,123.8 361.6,124.3 365.2,124.7 368.8,125.1 372.4,125.5 376.0,125.9 379.6,126.3 383.2,126.6 386.8,127.0 390.4,127.3 394.0,127.6 397.6,127.9 401.2,128.2 404.8,128.4 408.4,128.7 412.0,128.9 415.6,129.1 419.2,129.4 422.8,129.6 426.4,129.7 430.0,129.9 433.6,130.1 437.2,130.2 440.8,130.3 444.4,130.5 448.0,130.6 451.6,130.7 455.2,130.8 458.8,130.9 462.4,130.9 466.0,131.0 469.6,131.1 473.2,131.1 476.8,131.2 480.4,131.2 484.0,131.2 487.6,131.3 491.2,131.3 494.8,131.3 498.4,131.3 502.0,131.3 505.6,131.3 509.2,131.3 512.8,131.3 516.4,131.3 520.0,131.2 523.6,131.2 527.2,131.2 530.8,131.2 534.4,131.2 538.0,131.1 541.6,131.1 545.2,131.1 548.8,131.0 552.4,131.0 556.0,131.0 559.6,130.9 563.2,130.9 566.8,130.9 570.4,130.8 574.0,130.8\" class=\"lng\"/>\n<text x=\"330\" y=\"256\" class=\"txs txc\">time after the setpoint step</text>\n<line x1=\"380\" y1=\"48\" x2=\"410\" y2=\"48\" class=\"lnr\"/><text x=\"416\" y=\"52\" class=\"txs\">P only: steady error remains</text>\n<line x1=\"380\" y1=\"66\" x2=\"410\" y2=\"66\" class=\"lnb\"/><text x=\"416\" y=\"70\" class=\"txs\">PI: no offset, large overshoot</text>\n<line x1=\"380\" y1=\"84\" x2=\"410\" y2=\"84\" class=\"lng\"/><text x=\"416\" y=\"88\" class=\"txs\">PID: derivative cuts the overshoot</text>\n<text x=\"330\" y=\"280\" class=\"txs txm txc\">Simulated on the same process. Response of the measured value (PV) to a step in the setpoint.</text>\n</svg>"
    },
    {
     "t": "table",
     "head": [
      "Action",
      "Effect",
      "Too much causes"
     ],
     "rows": [
      [
       "P",
       "Fast response to error; leaves an offset",
       "Oscillation; instability"
      ],
      [
       "I",
       "Removes the offset",
       "Overshoot; slow oscillation; windup"
      ],
      [
       "D",
       "Reduces overshoot; stabilises",
       "Noise amplification; jittery output"
      ]
     ],
     "cap": "Summary of PID actions"
    },
    {
     "t": "key",
     "items": [
      "P: output ∝ error; PB = 100 ÷ Kp; leaves an offset.",
      "I: sums error over time and removes the offset; a shorter Ti means stronger action.",
      "D: reacts to the rate of change and reduces overshoot, but amplifies noise.",
      "u = Kp × [e + (1/Ti)∫e dt + Td de/dt].",
      "Use PI for most flow, pressure and level loops; PID for slow temperature loops."
     ]
    }
   ]
  },
  {
   "id": "m17-l3",
   "title": "Process behaviour and step response",
   "minutes": 10,
   "body": [
    {
     "t": "p",
     "x": "To tune a loop you need to know how the process behaves. Three properties describe most processes:"
    },
    {
     "t": "ul",
     "items": [
      "**Process gain (K):** how much the PV changes for a given change of output, for example 0.8 °C per 1 % heater output.",
      "**Time constant (τ):** how fast the process responds. A first-order process reaches 63 % of its final change after one time constant and about 95 % after three. A small oven reacts quickly; a large tank of water slowly.",
      "**Dead time (L):** the delay before anything happens, such as the time for material to travel along a conveyor or a pipe from the valve to the sensor. Dead time is the main enemy of good control: it makes loops hard to tune."
     ]
    },
    {
     "t": "p",
     "x": "A process with a large dead time compared to its time constant (L ÷ τ above about 1) is hard to control well with PID alone: the gain must be kept low."
    },
    {
     "t": "h",
     "x": "The step response"
    },
    {
     "t": "p",
     "x": "To test a loop, change the setpoint by a step and record the PV against time. The shape tells you how well the loop is tuned."
    },
    {
     "t": "svg",
     "alt": "A step response curve. The process variable rises to a peak above the setpoint, then oscillates and settles within a plus or minus 5 percent band. The overshoot, the rise time from 10 to 90 percent, and the settling time are marked.",
     "cap": "Figure 3: measures of a step response",
     "svg": "<svg viewBox=\"0 0 640 310\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\">\n<defs><marker id=\"m17-f2-arr\" markerUnits=\"userSpaceOnUse\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" class=\"fi\"/></marker></defs>\n<line x1=\"70\" y1=\"230\" x2=\"590\" y2=\"230\" class=\"ln\"/><line x1=\"70\" y1=\"230\" x2=\"70\" y2=\"50\" class=\"ln\"/>\n<text x=\"585\" y=\"248\" class=\"txs txe\">time</text>\n<text x=\"62\" y=\"114\" class=\"txs txe\">SP</text>\n<line x1=\"70\" y1=\"110\" x2=\"590\" y2=\"110\" class=\"ln1 lnm dash\"/>\n<line x1=\"70\" y1=\"104\" x2=\"590\" y2=\"104\" class=\"ln1 lnm dash\"/><line x1=\"70\" y1=\"116\" x2=\"590\" y2=\"116\" class=\"ln1 lnm dash\"/>\n<text x=\"596\" y=\"102\" class=\"txs\">+5 %</text><text x=\"596\" y=\"128\" class=\"txs\">−5 %</text>\n<polyline points=\"70.0,230.0 73.6,229.4 77.2,227.7 80.8,225.0 84.4,221.5 88.0,217.1 91.6,212.0 95.2,206.3 98.8,200.2 102.4,193.7 106.0,186.8 109.6,179.8 113.2,172.6 116.8,165.3 120.4,158.1 124.0,151.0 127.6,144.1 131.2,137.3 134.8,130.8 138.4,124.6 142.0,118.7 145.6,113.3 149.2,108.2 152.8,103.5 156.4,99.2 160.0,95.4 163.6,92.0 167.2,89.0 170.8,86.4 174.4,84.3 178.0,82.6 181.6,81.3 185.2,80.4 188.8,79.8 192.4,79.6 196.0,79.6 199.6,80.0 203.2,80.6 206.8,81.4 210.4,82.5 214.0,83.7 217.6,85.1 221.2,86.7 224.8,88.3 228.4,90.0 232.0,91.8 235.6,93.6 239.2,95.4 242.8,97.3 246.4,99.1 250.0,100.9 253.6,102.6 257.2,104.3 260.8,105.9 264.4,107.4 268.0,108.8 271.6,110.1 275.2,111.3 278.8,112.5 282.4,113.5 286.0,114.4 289.6,115.1 293.2,115.8 296.8,116.4 300.4,116.8 304.0,117.2 307.6,117.5 311.2,117.6 314.8,117.7 318.4,117.7 322.0,117.7 325.6,117.5 329.2,117.3 332.8,117.1 336.4,116.8 340.0,116.4 343.6,116.0 347.2,115.6 350.8,115.2 354.4,114.7 358.0,114.3 361.6,113.8 365.2,113.4 368.8,112.9 372.4,112.4 376.0,112.0 379.6,111.6 383.2,111.2 386.8,110.8 390.4,110.4 394.0,110.1 397.6,109.7 401.2,109.5 404.8,109.2 408.4,109.0 412.0,108.7 415.6,108.6 419.2,108.4 422.8,108.3 426.4,108.2 430.0,108.1 433.6,108.1 437.2,108.0 440.8,108.0 444.4,108.1 448.0,108.1 451.6,108.1 455.2,108.2 458.8,108.3 462.4,108.3 466.0,108.4 469.6,108.5 473.2,108.7 476.8,108.8 480.4,108.9 484.0,109.0 487.6,109.1 491.2,109.2 494.8,109.3 498.4,109.5 502.0,109.6 505.6,109.7 509.2,109.8 512.8,109.9 516.4,110.0 520.0,110.0 523.6,110.1 527.2,110.2 530.8,110.2 534.4,110.3 538.0,110.4 541.6,110.4 545.2,110.4 548.8,110.5 552.4,110.5 556.0,110.5 559.6,110.5 563.2,110.5 566.8,110.5 570.4,110.5 574.0,110.5\" class=\"lnb\"/>\n<line x1=\"193.39930975250635\" y1=\"79.54079336238695\" x2=\"193.39930975250635\" y2=\"110\" class=\"lnr ln\" marker-end=\"url(#m17-f2-arr)\"/>\n<text x=\"201.39930975250635\" y=\"77.54079336238695\" class=\"txs txb\">overshoot (peak)</text>\n<line x1=\"87.64000000000001\" y1=\"218\" x2=\"87.64000000000001\" y2=\"262\" class=\"ln1 lnm dash\"/><line x1=\"140.20000000000005\" y1=\"122\" x2=\"140.20000000000005\" y2=\"262\" class=\"ln1 lnm dash\"/>\n<line x1=\"87.64000000000001\" y1=\"272\" x2=\"140.20000000000005\" y2=\"272\" class=\"ln1\"/>\n<text x=\"113.92000000000003\" y=\"288\" class=\"txs txc\">rise time (10 to 90 %)</text>\n<line x1=\"345.39999999999577\" y1=\"110\" x2=\"345.39999999999577\" y2=\"262\" class=\"ln1 lnm dash\"/>\n<line x1=\"70\" y1=\"272\" x2=\"345.39999999999577\" y2=\"272\" class=\"ln1\"/>\n<text x=\"353.39999999999577\" y=\"272\" class=\"txs\">settling time</text>\n</svg>"
    },
    {
     "t": "table",
     "head": [
      "Measure",
      "Definition"
     ],
     "rows": [
      [
       "Overshoot",
       "How far the PV goes beyond the new setpoint, as a percentage of the step size"
      ],
      [
       "Rise time",
       "Time to go from 10 % to 90 % of the step"
      ],
      [
       "Settling time",
       "Time after which the PV stays within a band (commonly ±2 % or ±5 %) of the final value"
      ],
      [
       "Steady-state error",
       "The difference between the setpoint and the final PV"
      ],
      [
       "Decay ratio",
       "The ratio of the size of one oscillation peak to the previous one; about 1/4 is a classical target"
      ]
     ],
     "cap": "Step-response quantities"
    },
    {
     "t": "worked",
     "title": "Worked example: reading a step response",
     "problem": "A setpoint step takes a temperature from 20 °C to 80 °C. The PV peaks at 92 °C, and later settles at 79 °C. Calculate the percentage overshoot and the steady-state error. Where do the 10 % and 90 % points for the rise time lie?",
     "steps": [
      "Step size = 80 − 20 = 60 °C.",
      "Overshoot = (92 − 80) ÷ 60 × 100 = 20 %.",
      "Steady-state error = 80 − 79 = 1 °C.",
      "10 % of the step: 20 + 6 = 26 °C; 90 % of the step: 20 + 54 = 74 °C. The rise time is the time between the PV passing 26 °C and 74 °C."
     ],
     "answer": "Overshoot 20 %; steady-state error 1 °C (a sign that the integral action is too weak or the loop has not finished settling); rise time is measured between 26 °C and 74 °C."
    },
    {
     "t": "p",
     "x": "Good tuning depends on the goal. A level control loop in a buffer tank may allow slow, smooth response with no overshoot; a speed loop on a machine may need fast response and accept a little overshoot; some processes cannot tolerate any overshoot at all (an oven that must not exceed a limit)."
    },
    {
     "t": "key",
     "items": [
      "A process is described by gain, time constant and dead time.",
      "Dead time makes loops hard to control; keep the loop gain low.",
      "A step response shows overshoot, rise time, settling time and steady-state error.",
      "Overshoot = (peak − final) ÷ step size × 100 %.",
      "Choose the tuning goal for the process: smooth, fast, or no overshoot."
     ]
    }
   ]
  },
  {
   "id": "m17-l4",
   "title": "Tuning methods",
   "minutes": 11,
   "body": [
    {
     "t": "p",
     "x": "**Tuning** means setting Kp, Ti and Td to suit the process. Always put the controller in **manual** first, make sure the process is stable and safe, and change only one parameter at a time."
    },
    {
     "t": "h",
     "x": "Trial and error"
    },
    {
     "t": "steps",
     "title": "A practical order for tuning",
     "items": [
      "Turn off integral (Ti at maximum) and derivative (Td at zero). Set a low gain.",
      "With the loop in automatic, make a small setpoint step. Increase the gain step by step until the PV just starts to oscillate, then reduce it to about half.",
      "Add integral: reduce Ti until the offset disappears in a reasonable time without too much overshoot.",
      "If the loop is slow and overshoots, add a little derivative; stop if the output becomes noisy.",
      "Test with a setpoint step and a load disturbance, and record the final settings."
     ]
    },
    {
     "t": "h",
     "x": "Ziegler-Nichols closed-loop method"
    },
    {
     "t": "p",
     "x": "This method finds the **ultimate gain Ku** (the gain with a P-only controller at which the PV oscillates steadily) and the **ultimate period Pu** (the time of one oscillation). Take care: running a process at its stability limit may be unsafe or damage the product, so use this method only where this is allowed."
    },
    {
     "t": "table",
     "head": [
      "Controller",
      "Kp",
      "Ti",
      "Td"
     ],
     "rows": [
      [
       "P",
       "0.50 × Ku",
       "—",
       "—"
      ],
      [
       "PI",
       "0.45 × Ku",
       "Pu ÷ 1.2",
       "—"
      ],
      [
       "PID",
       "0.60 × Ku",
       "Pu ÷ 2",
       "Pu ÷ 8"
      ]
     ],
     "cap": "Ziegler-Nichols settings from Ku and Pu"
    },
    {
     "t": "worked",
     "title": "Worked example: Ziegler-Nichols",
     "problem": "With P-only control, a temperature loop oscillates steadily at Kp = 8 with a period of 20 s. Find the PID settings.",
     "steps": [
      "Ku = 8 and Pu = 20 s.",
      "Kp = 0.6 × 8 = 4.8.",
      "Ti = Pu ÷ 2 = 10 s.",
      "Td = Pu ÷ 8 = 2.5 s."
     ],
     "answer": "Kp = 4.8, Ti = 10 s, Td = 2.5 s. These settings give an aggressive response with perhaps 25 % overshoot, so they are often reduced by about one-third as a starting point."
    },
    {
     "t": "h",
     "x": "Open-loop (reaction curve) method"
    },
    {
     "t": "p",
     "x": "Safer for most plants. With the controller in manual, make a small step in the output and record the PV. Draw a tangent at the steepest part of the curve; the time before it starts rising gives the **dead time L**, and the slope gives the rate of rise. Process gain K = change in PV ÷ change in output. For a PI controller a common estimate is Kp ≈ 0.9 × τ ÷ (K × L), with Ti ≈ 3.3 × L; for PID, Kp ≈ 1.2 × τ ÷ (K × L), Ti ≈ 2 × L and Td ≈ 0.5 × L. Treat the result as a starting point and fine-tune."
    },
    {
     "t": "h",
     "x": "Practical points"
    },
    {
     "t": "ul",
     "items": [
      "**Integral windup:** when the output saturates (valve fully open) but the error remains, the integral term keeps growing. When the PV finally reaches the setpoint, the wound-up integral causes a large overshoot. Use controllers with **anti-windup**, and avoid asking for an output that the actuator cannot deliver.",
      "**Deadband** ignores small errors around the setpoint so a valve does not move constantly; it helps with noise and stiction but limits the accuracy.",
      "**Derivative on PV** (not on the error) avoids a spike in the output when the setpoint changes. Apply a filter to the derivative term.",
      "**Setpoint ramping** and **bumpless transfer** avoid shocks when changing the setpoint or switching between manual and automatic.",
      "Write down the old settings before changing them and record the new ones."
     ]
    },
    {
     "t": "warn",
     "x": "Tuning a loop changes how the plant behaves. Tell the operators, make changes in small steps, know how to return to manual, and never tune a loop in a way that could breach a safety limit. Independent safety systems, not the PID loop, protect against dangerous conditions."
    },
    {
     "t": "key",
     "items": [
      "Tune in small steps, one parameter at a time, from a safe state.",
      "Ziegler-Nichols PID: Kp = 0.6 Ku, Ti = Pu ÷ 2, Td = Pu ÷ 8.",
      "The reaction-curve method uses process gain, dead time and time constant from a manual step.",
      "Integral windup occurs when the output saturates; use anti-windup.",
      "Use derivative on PV with a filter, and record all settings."
     ]
    }
   ]
  },
  {
   "id": "m17-l5",
   "title": "Direct and reverse action, advanced loops and troubleshooting",
   "minutes": 10,
   "body": [
    {
     "t": "h",
     "x": "Direct and reverse action"
    },
    {
     "t": "p",
     "x": "A controller must act in the right direction. A **reverse-acting** controller increases its output when the PV falls: heating control, because a lower temperature needs more heat. A **direct-acting** controller increases its output when the PV rises: cooling or a tank-draining valve control, because a higher level needs a wider valve. Choosing the wrong action makes the loop run away to full or zero output. This is one of the most common commissioning errors."
    },
    {
     "t": "h",
     "x": "Cascade and feed-forward (overview)"
    },
    {
     "t": "ul",
     "items": [
      "**Cascade control** uses two loops: a slow outer loop (temperature) sets the setpoint of a fast inner loop (steam flow). The inner loop quickly corrects disturbances such as supply pressure changes before they reach the outer loop.",
      "**Feed-forward control** measures a disturbance (for example, the flow of cold water into a heater) and adjusts the output immediately, before the PV is affected. PID then only handles what the feed-forward leaves behind.",
      "**Ratio control** keeps two flows in a fixed proportion, as in air-fuel burners."
     ]
    },
    {
     "t": "h",
     "x": "Typical loops"
    },
    {
     "t": "table",
     "head": [
      "Loop",
      "Character",
      "Usual controller"
     ],
     "rows": [
      [
       "Flow",
       "Very fast, noisy",
       "PI with low gain; no D"
      ],
      [
       "Pressure (liquid)",
       "Fast",
       "PI"
      ],
      [
       "Level (buffer tank)",
       "Slow, integrating",
       "P or PI with a wide band; smooth output"
      ],
      [
       "Temperature",
       "Slow, dead time",
       "PID; D helps if the signal is clean"
      ],
      [
       "Motor speed",
       "Fast",
       "PI in the drive (Module 10)"
      ]
     ],
     "cap": "Typical controllers by loop type"
    },
    {
     "t": "h",
     "x": "Troubleshooting a loop"
    },
    {
     "t": "table",
     "head": [
      "Symptom",
      "Likely cause",
      "What to do"
     ],
     "rows": [
      [
       "PV oscillates steadily",
       "Gain too high, or integral too strong; valve stiction; incorrect sensor",
       "Put in manual: if oscillation continues the problem is outside the controller; otherwise reduce the gain or integral"
      ],
      [
       "Output saturated at 0 or 100 %, PV far from SP",
       "Wrong action; actuator or process too small; sensor failure; wound-up integral",
       "Check direction, the actuator and the sensor; in manual, check the process responds"
      ],
      [
       "Noisy output",
       "Noisy sensor signal; derivative too high; poor wiring or earthing",
       "Filter the PV, reduce D, check the wiring and screening (Module 11)"
      ],
      [
       "Slow, steady drift towards the setpoint",
       "Integral too weak",
       "Reduce Ti"
      ],
      [
       "Small repeated hunting around the setpoint",
       "Valve stiction or backlash; a deadband that is too small",
       "Service the valve or positioner; add some deadband"
      ],
      [
       "Large overshoot after a long wait",
       "Integral windup",
       "Enable anti-windup; reduce Ti or limit the setpoint step"
      ]
     ],
     "cap": "Loop fault guide"
    },
    {
     "t": "steps",
     "title": "A quick loop health check",
     "items": [
      "Put the controller in manual and set the output to a steady value. Does the PV settle and respond sensibly to a small output step? If not, the fault is in the sensor, actuator or process.",
      "Check the PV reading against an independent instrument.",
      "Check that the actuator moves smoothly through its full range and that valve position follows the output.",
      "Check the direction (direct or reverse), the scaling of PV and output, and that the setpoint limits make sense.",
      "Only then retune."
     ]
    },
    {
     "t": "key",
     "items": [
      "Reverse action raises the output when the PV falls (heating); direct action raises it when the PV rises (cooling, draining).",
      "Cascade uses a fast inner loop under a slow outer loop; feed-forward acts on a measured disturbance.",
      "Flow loops are fast and noisy; temperature loops are slow and have dead time.",
      "Test in manual first to find whether the problem is the controller or the process.",
      "Check the sensor and the valve before changing the tuning."
     ]
    }
   ]
  }
 ],
 "quiz": [
  {
   "id": "m17-q1",
   "q": "What distinguishes closed-loop from open-loop control?",
   "opts": [
    "It uses much larger motors",
    "It acts on the measured error",
    "It never needs a setpoint at all",
    "It runs without any sensor at all"
   ],
   "a": 1,
   "why": "Closed-loop control compares the measured PV with the setpoint and corrects the difference. Open-loop control does not check the result."
  },
  {
   "id": "m17-q2",
   "q": "The setpoint is 75 and the process variable is 70. What is the error?",
   "opts": [
    "5",
    "−5",
    "145",
    "72.5"
   ],
   "a": 0,
   "why": "Error = SP − PV = 75 − 70 = 5."
  },
  {
   "id": "m17-q3",
   "q": "An oven is controlled on/off at 180 °C with a hysteresis of 4 °C (±2 °C). When does the heater switch off?",
   "opts": [
    "At 178 °C",
    "At 184 °C",
    "At 180 °C exactly",
    "At 182 °C"
   ],
   "a": 3,
   "why": "The heater switches off at the top of the band: 180 + 2 = 182 °C, and on again at 178 °C."
  },
  {
   "id": "m17-q4",
   "q": "A controller has Kp = 4. What is the proportional band?",
   "opts": [
    "25 %",
    "4 %",
    "400 %",
    "40 %"
   ],
   "a": 0,
   "why": "PB = 100 ÷ Kp = 100 ÷ 4 = 25 %."
  },
  {
   "id": "m17-q5",
   "q": "Why does a P-only controller leave a steady-state error?",
   "opts": [
    "Its gain is always set too low",
    "It needs error to make an output",
    "It has no sensor in the loop",
    "The setpoint keeps changing slowly"
   ],
   "a": 1,
   "why": "The output of a P controller is proportional to the error, so a non-zero output requires a non-zero error."
  },
  {
   "id": "m17-q6",
   "q": "Which action removes the steady-state offset?",
   "opts": [
    "Derivative",
    "A higher setpoint",
    "Integral",
    "Proportional band"
   ],
   "a": 2,
   "why": "The integral term keeps changing the output as long as any error remains, so it drives the error to zero."
  },
  {
   "id": "m17-q7",
   "q": "A loop has Kp = 2, a span of 0 to 200 °C, a bias of 50 %, a setpoint of 120 °C and a PV of 110 °C. What is the output?",
   "opts": [
    "About 52 %",
    "About 55 %",
    "About 70 %",
    "60 %"
   ],
   "a": 3,
   "why": "Error = 10 °C = 5 % of span. Output = 50 + 2 × 5 = 60 %."
  },
  {
   "id": "m17-q8",
   "q": "Why is derivative action rarely used on flow loops?",
   "opts": [
    "It amplifies noise",
    "Flow loops never overshoot at all",
    "It removes the integral action",
    "It needs a very large valve"
   ],
   "a": 0,
   "why": "Derivative acts on the rate of change, so electrical noise on the signal is amplified into a jittery output."
  },
  {
   "id": "m17-q9",
   "q": "A step takes the PV from 20 °C to 80 °C and the PV peaks at 92 °C. What is the percentage overshoot?",
   "opts": [
    "About 12 %",
    "About 60 %",
    "About 15 %",
    "20 %"
   ],
   "a": 3,
   "why": "Overshoot = (92 − 80) ÷ (80 − 20) × 100 = 20 %."
  },
  {
   "id": "m17-q10",
   "q": "Which property of a process makes it hardest to control?",
   "opts": [
    "A very high process gain",
    "Large dead time",
    "Large physical size",
    "A low operating temperature"
   ],
   "a": 1,
   "why": "Dead time delays the effect of the controller's action, forcing a low loop gain and slow response."
  },
  {
   "id": "m17-q11",
   "q": "Using Ziegler-Nichols, a loop oscillates at Ku = 8 with a period Pu = 20 s. What are the PID Ti and Td?",
   "opts": [
    "Ti = 10 s, Td = 2.5 s",
    "Ti = 20 s and Td = 5 s",
    "Ti = 16.7 s and Td = 0 s",
    "Ti = 2.5 s and Td = 10 s"
   ],
   "a": 0,
   "why": "Ti = Pu ÷ 2 = 10 s and Td = Pu ÷ 8 = 2.5 s, with Kp = 0.6 × 8 = 4.8."
  },
  {
   "id": "m17-q12",
   "q": "What is integral windup?",
   "opts": [
    "The motor winding overheating badly",
    "Integral growth at saturation",
    "A noisy sensor signal reading",
    "A big step change of the setpoint"
   ],
   "a": 1,
   "why": "While the actuator is at its limit the error persists, so the integral term keeps growing and later causes a big overshoot."
  },
  {
   "id": "m17-q13",
   "q": "An electric heater temperature loop. Which controller action is correct?",
   "opts": [
    "Reverse: output rises as PV falls",
    "Direct acting: output rises as PV rises",
    "Either one works exactly the same way",
    "No controller action is needed at all"
   ],
   "a": 0,
   "why": "A lower temperature needs more heating, so the output must rise when the PV falls, which is reverse action."
  },
  {
   "id": "m17-q14",
   "q": "A loop oscillates continuously. The controller is put in manual and the oscillation stops. What does this suggest?",
   "opts": [
    "The sensor has failed completely",
    "The valve is far too large",
    "Loop tuning is the cause",
    "The setpoint value is wrong"
   ],
   "a": 2,
   "why": "If the PV is steady in manual, the process and valve are not the cause; the oscillation comes from the feedback loop, so the gain or integral is too high."
  }
 ],
 "cards": [
  {
   "f": "Open loop versus closed loop?",
   "b": "Open loop does not check the result; closed loop measures the PV and corrects the error."
  },
  {
   "f": "Error formula?",
   "b": "e = SP − PV."
  },
  {
   "f": "What is hysteresis in on/off control?",
   "b": "A gap between the switch-on and switch-off points that prevents rapid switching."
  },
  {
   "f": "Proportional band formula?",
   "b": "PB = 100 ÷ Kp."
  },
  {
   "f": "Effect of the P term?",
   "b": "Output proportional to error; fast response but leaves an offset."
  },
  {
   "f": "Effect of the I term?",
   "b": "Removes steady-state error; shorter Ti means stronger action; too much gives overshoot."
  },
  {
   "f": "Effect of the D term?",
   "b": "Reduces overshoot by reacting to the rate of change; amplifies noise."
  },
  {
   "f": "Name the three process properties.",
   "b": "Gain, time constant and dead time."
  },
  {
   "f": "How to calculate overshoot?",
   "b": "(peak − final) ÷ step size × 100 %."
  },
  {
   "f": "Ziegler-Nichols PID values?",
   "b": "Kp = 0.6 Ku; Ti = Pu ÷ 2; Td = Pu ÷ 8."
  },
  {
   "f": "What is integral windup?",
   "b": "The integral term growing while the output is saturated, giving large overshoot afterwards."
  },
  {
   "f": "Reverse or direct action for a heater?",
   "b": "Reverse: output rises when the PV falls."
  },
  {
   "f": "What is cascade control?",
   "b": "A slow outer loop sets the setpoint of a fast inner loop."
  },
  {
   "f": "First check of a misbehaving loop?",
   "b": "Put it in manual and see whether the PV and valve behave: this separates controller faults from process faults."
  }
 ],
 "terms": [
  {
   "t": "Setpoint",
   "d": "The target value the controller tries to hold."
  },
  {
   "t": "Process variable",
   "d": "The measured value of the controlled quantity."
  },
  {
   "t": "Error",
   "d": "The difference between the setpoint and the process variable."
  },
  {
   "t": "Hysteresis",
   "d": "The gap between switch-on and switch-off points in on/off control."
  },
  {
   "t": "Proportional band",
   "d": "The error span, as a percentage, that moves the output through its full range."
  },
  {
   "t": "Integral time",
   "d": "The setting that controls the strength of integral action; shorter means stronger."
  },
  {
   "t": "Dead time",
   "d": "The delay between a change at the input of a process and the first response."
  },
  {
   "t": "Overshoot",
   "d": "How far the PV goes beyond the new setpoint after a step."
  },
  {
   "t": "Windup",
   "d": "The growth of the integral term while the controller output is limited."
  },
  {
   "t": "Cascade",
   "d": "Control in which one controller's output is the setpoint of another."
  },
  {
   "t": "Feed-forward",
   "d": "Control action based on a measured disturbance, applied before the PV changes."
  }
 ],
 "formulas": [
  {
   "n": "Error",
   "f": "e = SP − PV",
   "v": "Same units as the PV"
  },
  {
   "n": "Proportional band",
   "f": "PB = 100 ÷ Kp",
   "v": "Percent of span"
  },
  {
   "n": "P output",
   "f": "u = bias + Kp × e",
   "v": "e in % of span"
  },
  {
   "n": "PID equation",
   "f": "u = Kp[e + (1/Ti)∫e dt + Td de/dt]",
   "v": "Check controller manual for its form"
  },
  {
   "n": "Overshoot",
   "f": "OS = (peak − final) ÷ step × 100 %",
   "v": "Step = final − initial"
  },
  {
   "n": "Ziegler-Nichols PID",
   "f": "Kp = 0.6 Ku, Ti = Pu/2, Td = Pu/8",
   "v": "Closed-loop method"
  }
 ]
});
