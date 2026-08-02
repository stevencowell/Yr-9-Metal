window.COURSE_DATA = {
  shortTitle: "Year 9 Metalwork",
  storagePrefix: "yr9-metal-guided",
  modules: [
    {
      weeks: "1–2",
      title: "Workshop systems and risk management",
      summary: "Treat safety as a continuous process: identify hazards, judge risk, apply stronger controls and stop when conditions change.",
      sections: [
        {
          title: "Risk management is a process, not a poster",
          visual: { position: "65% 0", alt: "Workshop warning, guarded machine, secure bench vice and safety glasses", caption: "Risk management combines hazard recognition, stronger controls, permission and task-specific PPE." },
          paragraphs: [
            "Risk management begins before any cutting, forming, drilling or assembly starts. First, identify hazards in the task, work area, material, tools and the behaviour of people nearby. Then consider how likely each hazard is to cause harm and how serious the consequence could be. A low-likelihood hazard with a severe possible injury still needs careful control. Use teacher-issued plans, classroom controls and demonstrations to decide what applies at each project stage.",
            "Controls should follow the hierarchy: eliminate where possible, then substitute, isolate, use engineering controls, apply administrative controls and finally use personal protective equipment. PPE matters, but it is the final layer, not the whole plan. If a guard, material position, floor condition or work zone changes, stop, make the area safe and seek teacher direction before continuing."
          ],
          callout: "Risk management is continuous: identify, assess, control and review."
        },
        {
          title: "Safe workshop practices",
          visual: { position: "65% 0", alt: "Workshop safety controls including a guard, vice and eye protection", caption: "A safe setup controls the machine, workpiece, work area and student before work begins." },
          paragraphs: [
            "A safe workshop begins with attention and housekeeping. Follow signage, return material to the correct storage area and keep benches and walkways clear of offcuts. Wear the PPE directed for the task, secure loose hair and clothing, and stay aware of others.",
            "Machine permission applies to the trained person, approved machine, demonstrated setup and current task. Do not use a machine when tired, distracted, unsupervised or when the setup differs from the demonstration."
          ],
          callout: "Good housekeeping removes hazards before PPE is needed."
        },
        {
          title: "Incident response and reporting",
          visual: { position: "65% 0", alt: "Workshop safety warning and protected equipment", caption: "Stop the task, make the area safe and report the changed condition or incident immediately." },
          paragraphs: [
            "If an incident or near miss occurs, stop work, make the immediate area safe and alert the teacher. Do not move equipment, material or an injured person unless directed or required to prevent further harm.",
            "Report near misses as well as injuries. A near miss provides evidence that a control may have failed and allows the class to improve the system before someone is hurt."
          ],
          callout: "Report the event, the conditions and the control that needs review."
        }
      ],
      checks: [
        { question: "Why are both likelihood and consequence considered?", options: ["To decide how serious the risk is", "To choose the fastest tool", "To replace the demonstration", "To avoid all equipment"], answerIndex: 0, explanation: "Risk level depends on both the chance of harm and how serious the possible harm could be." },
        { question: "What should happen if conditions change during practical work?", options: ["Continue carefully", "Stop, make the area safe and seek teacher direction", "Rely only on PPE", "Ask another student to finish"], answerIndex: 1, explanation: "Existing controls may no longer be effective when the work area, equipment, material or people nearby change." }
      ],
      writtenPrompt: "Choose one stage from the teacher-issued project plans. Identify one possible hazard, describe its likelihood and consequence, and explain which hierarchy-of-controls measures should be used before work begins.",
      modelFeedback: "A strong response names a specific hazard, considers likelihood and consequence, and proposes controls in hierarchy order. PPE supports stronger controls rather than replacing them, and work must stop if conditions change."
    },
    {
      weeks: "3–4",
      title: "Metals, project briefs and planning",
      summary: "Connect material properties to performance, then turn the toolbox and fishing-rod-holder briefs into controlled plans for production.",
      sections: [
        {
          title: "Choose metal for the job",
          visual: { position: "100% 0", alt: "Common metal stock profiles and contrasting surface finishes", caption: "Select material and stock form to suit function, manufacture, environment and the approved brief." },
          paragraphs: [
            "Metals are often grouped as ferrous or non-ferrous. Ferrous metals contain iron and are commonly strong and magnetic, but many can rust if left unprotected. Non-ferrous metals may offer lower mass, corrosion resistance or easier forming, depending on the metal. A property is a characteristic such as hardness, strength, ductility or corrosion resistance; performance describes how well the material works in its intended situation.",
            "Choose material by matching properties to function, fabrication processes, corrosion exposure, availability and finish. A metal may perform well but still be unsuitable if it cannot be safely processed using the approved workshop equipment. Use the teacher-issued plan to identify the project-specific metal, then justify why its properties support the toolbox or fishing rod holder."
          ],
          callout: "Link material properties to required performance and available processes."
        },
        {
          title: "Two briefs, two design contexts",
          visual: { position: "33.333% 0", alt: "Balance showing function, time and available metal stock as linked constraints", caption: "Compare the different users, functions, materials and constraints before choosing a direction." },
          paragraphs: [
            "The existing program identifies a sheet-metal toolbox and a fishing rod holder. Each project solves a different need and may use different forms, joints, loads and finishes. The teacher-issued brief and plan define the exact requirements; this website does not substitute its own geometry.",
            "For each project, separate requirements from preferences. Record the user, function, environment, approved materials and processes, then identify which evidence will demonstrate that the result meets the brief."
          ],
          callout: "Do not transfer a specification from one project to the other without evidence."
        },
        {
          title: "Design and project planning",
          visual: { position: "0 50%", alt: "Several fabricated sheet-metal concepts developed from sketches", caption: "Develop alternatives, compare them against the brief and plan the approved production sequence." },
          paragraphs: [
            "Begin with the design brief, research relevant products, generate concept ideas and develop the approved direction. A working drawing communicates the information needed for production; a cutting list records the teacher-specified parts, material and dimensions.",
            "A production plan sequences work, identifies checkpoints and notes demonstrations or permissions required. Review the plan when evidence shows a change is needed rather than improvising during an irreversible process."
          ],
          callout: "Plans control production; folio evidence explains decisions."
        }
      ],
      checks: [
        { question: "Which statement correctly distinguishes property from performance?", options: ["A property is a metal characteristic; performance is how it behaves in use", "A property is cost; performance is colour", "A property is the product; performance is the plan", "They always mean the same thing"], answerIndex: 0, explanation: "Properties describe characteristics while performance describes how effectively the metal works in context." },
        { question: "Which is the strongest material-selection justification?", options: ["It looks better", "It was first available", "Its properties suit function, fabrication, corrosion, availability and finish", "Ferrous is always best"], answerIndex: 2, explanation: "A sound justification connects relevant properties to the full project context." }
      ],
      writtenPrompt: "Using the teacher-issued plans, identify the selected metal for one project part and justify the choice by referring to function, fabrication, corrosion, availability and finish.",
      modelFeedback: "A strong response names the teacher-specified metal, identifies relevant properties and explains how those properties support performance, fabrication, corrosion conditions, availability and finish."
    },
    {
      weeks: "5–6",
      title: "Mark, cut and form accurately",
      summary: "Establish reliable references, mark the waste side, secure the work and follow the demonstrated cutting and forming sequence.",
      sections: [
        {
          title: "Accuracy before force",
          visual: { position: "33.333% 50%", alt: "Checked working drawing with steel rule, square and approval mark", caption: "Accurate work begins with the controlling drawing, a reliable datum and a pre-cut check." },
          paragraphs: [
            "Accurate cutting and forming begin with accurate marking-out. A datum or reference edge provides one reliable starting point, so measurements and lines relate to the same known surface. Follow the teacher demonstration and issued plans for project-specific information. Before any cut or form, check that lines are clear, required features are identified and the waste side is marked correctly.",
            "Secure the work using the approved method before cutting, drilling or forming. Do not use extra force to correct a poor line, wrong sequence or moving work. Stop and recheck the datum, waste side, orientation and planned next step. Force cannot repair information that was marked incorrectly at the start."
          ],
          callout: "Datum, waste side, sequence and workholding come before force."
        },
        {
          title: "Marking and measuring tools",
          visual: { position: "65% 50%", alt: "Metal stock with steel rule, square, marking tool and task PPE", caption: "Choose the correct measuring and marking tool for the feature, material and required accuracy." },
          paragraphs: [
            "Select the measuring and marking tools demonstrated for the feature: a steel rule or tape for suitable lengths, a square for perpendicular references, a scriber for clear layout lines and a centre punch for an approved hole location.",
            "Measurement accuracy prevents wasted material. Read the issued dimension, work from the approved reference and complete an independent recheck before the material enters a cutting, drilling or forming setup."
          ],
          callout: "The best cutting tool cannot rescue an incorrect line."
        },
        {
          title: "Cutting and forming sequence",
          visual: { position: "0 100%", alt: "Metalwork operations showing mark-out, cutting, forming and joining under control", caption: "Sequence operations so each checked datum and feature supports the next stage." },
          paragraphs: [
            "Use only the cutting or forming process shown for the material and feature. Support large or awkward material, keep hands outside the demonstrated danger zone and remove burrs using the approved process before passing work to the next stage.",
            "Forming order can affect later dimensions, hole positions and access. Trial or check at the teacher-specified points, and record what changed rather than forcing a part to match."
          ],
          callout: "Each irreversible step needs a check before and evidence after."
        }
      ],
      checks: [
        { question: "What is the main purpose of a datum edge?", options: ["Provide one reliable reference for marking", "Show where to apply force", "Replace the plans", "Identify finish colour"], answerIndex: 0, explanation: "A datum gives measurements a consistent starting point and reduces accumulated errors." },
        { question: "What should happen before cutting or forming?", options: ["Secure the work and recheck markings", "Remove waste marks", "Force material into position", "Change sequence without approval"], answerIndex: 0, explanation: "Securing the work and checking datum, orientation, waste side and sequence support safe, accurate processing." }
      ],
      writtenPrompt: "Explain how a datum edge, waste-side marking, planned sequence and secure workholding can improve the quality of a sheet-metal project.",
      modelFeedback: "A strong response explains the reliable reference, identifies what waste-side marking controls, connects sequence to later features and states that secure workholding prevents movement."
    },
    {
      weeks: "7–8",
      title: "Join, machine and finish with purpose",
      summary: "Select and complete teacher-approved processes according to function, access, heat effects, appearance, corrosion and quality.",
      sections: [
        {
          title: "A joint is a design decision",
          visual: { position: "0 100%", alt: "Metal components being cut, formed and joined using controlled workshop setups", caption: "The approved joint must suit the load, materials, access, finish and classroom process." },
          paragraphs: [
            "A joining method should suit the job, not simply be familiar. Consider load, whether the connection must be permanent or removable, access to the joint, how heat could affect the metal or coating, and whether the finished joint must be neat or concealed. The plans, demonstrations and teacher permission determine which method is approved for each stage.",
            "Appearance and corrosion also influence the decision. Before permanent joining, complete a trial fit using the demonstrated process. Check that parts meet correctly, edges align, holes or features match, and the assembly remains in position. Stop and seek direction if the fit or approved method is uncertain."
          ],
          callout: "Select the joint, trial the fit, then make it permanent."
        },
        {
          title: "Machining is permission-based",
          visual: { position: "65% 0", alt: "Guarded workshop machine, bench vice and safety glasses", caption: "Permission applies to the trained person, machine, setup and specific task." },
          paragraphs: [
            "Drilling machines, lathes and other workshop machines require training, permission and the exact setup demonstrated by the teacher. The workpiece must be held using the approved device; hands are never a substitute for a vice, clamp, chuck or fixture.",
            "Before starting, identify the stop control, remove setup tools such as chuck keys as directed, secure loose clothing and hair, and check the work zone. Stop immediately if sound, vibration, swarf behaviour or work position changes."
          ],
          callout: "Permission does not carry across to a different machine, setup or task."
        },
        {
          title: "Surface preparation and protection",
          visual: { position: "65% 100%", alt: "Fabricated metal project progressing through checking, adjustment and protection", caption: "Remove faults and contamination before applying the approved protective finish." },
          paragraphs: [
            "A good finish begins with preparation. Treat burrs, scratches, scale, grease and dust using the approved classroom sequence. Protect prepared surfaces from contamination before the teacher-specified coating or finishing process.",
            "Follow product labels, safety information and teacher direction for ventilation, PPE, application and curing. Record the actual product and process used; do not infer them from another project."
          ],
          callout: "Finish quality and corrosion resistance depend on preparation."
        }
      ],
      checks: [
        { question: "Which factors should guide a joining method?", options: ["Load, permanence, access, heat, appearance and corrosion", "Only colour", "Whichever is fastest", "Another student’s choice"], answerIndex: 0, explanation: "A suitable joint must match functional, manufacturing and environmental needs." },
        { question: "Why trial fit before permanent joining?", options: ["Check fit and alignment before errors are locked in", "Avoid the plans", "Make metal harder", "Replace the approved process"], answerIndex: 0, explanation: "A trial fit reveals contact, alignment and position problems while they can still be corrected." }
      ],
      writtenPrompt: "Explain how load, permanence, access, heat effect, appearance and corrosion could influence a joining method. Include why a trial fit is needed.",
      modelFeedback: "A strong response links the method to function and working conditions rather than naming an unverified process, and explains that trial fitting checks contact, alignment and position."
    },
    {
      weeks: "9–10",
      title: "Technology, quality and evaluation",
      summary: "Compare processes by suitability, check quality throughout production and support the final evaluation with specific evidence.",
      sections: [
        {
          title: "Quality, technology and evaluation",
          visual: { position: "65% 100%", alt: "Fabricated metal project with inspection and improvement symbols", caption: "Use measured checks and functional evidence to judge quality and direct improvement." },
          paragraphs: [
            "Compare conventional and CNC processes by suitability, not by assuming newer technology is always better. Conventional processes can offer direct control, flexibility and skill development, while CNC can support repeatability and complex shapes when suitable digital information and equipment are available. The best choice depends on accuracy, quantity, material, resources and purpose.",
            "Check quality throughout production using teacher-approved criteria. Evidence might include photographs, annotated sketches, measurements, trial fits and records of problems and corrections. A useful evaluation makes a specific judgement, supports it with evidence and identifies one realistic improvement."
          ],
          callout: "Judge technology by suitability and evaluation by evidence."
        },
        {
          title: "Current and emerging manufacturing",
          visual: { position: "65% 100%", alt: "Manufactured metal project surrounded by technology, adjustment and improvement symbols", caption: "Compare how current and emerging processes affect precision, repeatability, safety and waste." },
          paragraphs: [
            "Computer numerical control uses programmed information to control machine movement. Depending on the equipment, digital design data can support repeatable parts and complex profiles, but it also requires validated files, correct setup, suitable material and trained supervision.",
            "Laser, plasma, waterjet and CNC machining processes have different capabilities, limitations, costs and safety systems. Compare them using reliable evidence and the needs of the production context rather than promotional claims."
          ],
          callout: "Advanced does not automatically mean appropriate."
        },
        {
          title: "Folio and final evaluation",
          visual: { position: "100% 100%", alt: "Organised project notes, photograph, checklist and improvement arrow", caption: "Present a concise evidence chain and evaluate the result against the approved criteria." },
          paragraphs: [
            "Organise evidence from both projects so the reader can follow the brief, research, planning, production, quality checks, problem solving and evaluation. Captions should explain what the evidence proves, not merely identify the photograph.",
            "Compare the result with the teacher-approved criteria. Name specific strengths and limitations, cite the evidence, and propose one realistic change to the design, sequence, checking process or skill preparation."
          ],
          callout: "A folio shows decisions and learning, not only finished products."
        }
      ],
      checks: [
        { question: "How should conventional and CNC processes be compared?", options: ["By which looks advanced", "By suitability for the task and result", "Choose CNC every time", "Avoid conventional skills"], answerIndex: 1, explanation: "Suitability depends on accuracy, quantity, material, resources and purpose." },
        { question: "Which is the strongest evaluation?", options: ["It was good", "Everything worked", "The trial fit showed misalignment, so I rechecked it; next time I would check earlier", "I would make it better"], answerIndex: 2, explanation: "A strong evaluation names evidence, explains the result and identifies a realistic improvement." }
      ],
      writtenPrompt: "Compare one conventional process with one CNC or emerging process by explaining when each would be suitable. Then evaluate one part of your project using specific evidence and identify one realistic improvement.",
      modelFeedback: "A strong response compares processes using purpose, accuracy, quantity, material and resources. The evaluation cites specific evidence, refers to approved criteria and explains one practical improvement."
    }
  ]
};
