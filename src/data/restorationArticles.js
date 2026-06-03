/**
 * Restoration Knowledge articles for the Jensen C-V8 Workshop Companion.
 *
 * Each article follows a consistent structure so the UI can render them
 * uniformly, while the content sections array allows rich, typed content.
 *
 * Content section types:
 *   paragraph   — prose text (string)
 *   warning     — amber callout box (string)
 *   tip         — green callout box (string)
 *   heading     — h4 sub-heading (string)
 *   list        — bullet list (string[])
 *   parts       — parts/kit table [{ name, partNumber?, notes? }]
 *   steps       — numbered steps (string[])
 *   costTable   — cost estimates [{ item, usd, gbp, eur }]
 */

export const restorationCategories = [
  { id: 'known-issues', label: 'Known Issues',             emoji: '⚠️' },
  { id: 'upgrades',     label: 'Upgrades & Modifications', emoji: '🚀' },
  { id: 'ignition',     label: 'Ignition & Electrics',     emoji: '⚡' },
  { id: 'engine',       label: 'Engine',                   emoji: '🔧' },
  { id: 'fuel',         label: 'Fuel System',              emoji: '⛽' },
  { id: 'wheels',       label: 'Wheels & Tyres',           emoji: '🛞' },
  { id: 'suspension',   label: 'Suspension',               emoji: '⚙️' },
  { id: 'body',         label: 'Body & Paint',             emoji: '🎨' },
  { id: 'interior',     label: 'Interior',                 emoji: '🪑' },
  { id: 'suppliers',    label: 'Parts & Suppliers',        emoji: '📦' },
];

export const restorationArticles = [

  // ── Known Issues ────────────────────────────────────────────────────────────
  {
    id: 'rear-spring-axle-plate-cracking',
    category: 'known-issues',
    title: 'Rear Spring Axle Plate Cracking',
    subtitle: 'A widely reported structural fault on the C-V8 rear axle — detection, risks and repair options',
    models: ['all'],
    difficulty: 'advanced',
    readTime: '10 min read',
    severity: 'critical',                // used to show a safety badge
    tags: ['rear axle', 'spring plate', 'suspension', 'structural', 'cracking', 'weld', 'known issue'],
    contributors: ['JOC C-V8 Tech Forum — community discussion 2022–2025'],
    sourceUrl: 'https://joc.org.uk/joc-forum/?w3=dmlld2ZvcnVtLnBocD9mPTY=',
    lastUpdated: '2025',

    intro: `Cracking of the rear spring axle mounting plate is a well-documented structural problem on the Jensen C-V8, known to Jensen Motors Limited since the car was new and confirmed as widespread by the current owner community. The fault occurs at the welded steel bracket on the rear axle casing that locates the leaf spring — a critical structural component. Because the failure can result in loss of axle control and directional instability, this issue warrants inspection on any C-V8 being prepared for road use, regardless of mileage or apparent condition.`,

    sections: [
      {
        type: 'warning',
        content: 'This is a safety-critical structural fault. If cracking or deformation is found on one side, assume the opposite bracket is also overloaded and inspect it immediately. Do not drive the car at full throttle until both sides have been inspected and any damage repaired by a competent welder or engineer.'
      },

      {
        type: 'heading',
        content: 'What is the Axle Plate?'
      },
      {
        type: 'paragraph',
        content: 'On most rear-wheel-drive vehicles of the era, the leaf spring is clamped to the axle casing by U-bolts. The Jensen C-V8 uses a different arrangement: a steel bracket is welded directly to the axle casing during manufacture (before the axle end flanges were fitted), and four high-tensile bolts pass through this welded bracket and through a flat plate beneath the leaf spring pack, clamping the spring firmly to the axle. This bracket has two functions: it locates the spring on the axle, and it resists axle wrap — the rotational torque reaction that tries to twist the axle nose upward under hard acceleration, causing the rear springs to adopt an S-shape (commonly called axle tramp).'
      },
      {
        type: 'paragraph',
        content: 'On the left-hand side of the car, the bracket is extended to also provide the lower mounting point for the Panhard rod, which controls lateral movement of the axle. This means the LHS bracket carries additional loads not present on the RHS.'
      },

      {
        type: 'heading',
        content: 'Why It Fails'
      },
      {
        type: 'paragraph',
        content: 'The primary failure point is the 90-degree folded section of the bracket where it transitions from vertical to horizontal. Under the repeated torsional and bending loads imposed by hard acceleration and road surface impacts, this fold is prone to cracking. JML acknowledged the problem in a service bulletin dated 13 July 1966 — before the car had even been in production for three full years — noting that loose anchor bolt nuts were a contributing factor, and introducing an updated bracket with increased thickness.'
      },
      {
        type: 'list',
        content: [
          'The original bracket was 1/4" (4/16") thick. JML introduced a revised bracket of 5/16" thickness as a service replacement.',
          'If the anchor bolt nuts work loose at any point, the spring can rock on the axle under load, dramatically accelerating fatigue cracking of the bracket.',
          'A high-BHP modified C-V8 known to the JOC community tore the bracket completely off the axle casing under hard acceleration — demonstrating the severity of the loads involved.',
          'Decades of use mean even the thicker revised bracket can reach the end of its fatigue life on cars that have covered significant mileage or been driven hard.',
          'Previous poor repairs — where the bracket has been welded without proper preparation or heat treatment — are common and tend to fail again at the weld or adjacent to it.'
        ]
      },

      {
        type: 'heading',
        content: 'Jensen Service Bulletin — July 1966'
      },
      {
        type: 'paragraph',
        content: 'JML Service Bulletin (13 July 1966, unnumbered) states: "It has been reported from the field that rear-spring to axle anchor bolts have been found loose... This can produce a gradual fracturing of the rear-axle spring mounting plate and we, therefore, recommend the following procedure:"'
      },
      {
        type: 'list',
        content: [
          'At 12,000 mile intervals: check torque loading of anchor bolt nuts — 40 lb/ft.',
          'If deformation of the rear spring plate is noted: fit the latest assembly, which has an overall thickness of 5/16", an increase of 1/16" on the original specified part.'
        ]
      },
      {
        type: 'tip',
        content: 'The 12,000-mile anchor bolt torque check from the 1966 JML service bulletin is a simple, routine task that should be added to your standard service procedure. 40 lb/ft — use a torque wrench, not a judgement call.'
      },

      {
        type: 'heading',
        content: 'Consequences of Failure'
      },
      {
        type: 'list',
        content: [
          'If the bracket fractures while driving, the rear axle is free to move fore and aft under the car, and the body will drop on the affected corner.',
          'Uncontrolled axle movement will cause immediate and unpredictable steering deviation — potentially pulling the car sharply to one side.',
          'An unconstrained axle nose can twist freely under acceleration, putting the rear leaf springs under extreme S-loading that may cause spring failure.',
          'In the worst case, catastrophic propshaft failure is possible if the rear flange angle changes suddenly.',
          'The LHS bracket failure additionally compromises Panhard rod geometry, affecting lateral axle location.'
        ]
      },

      {
        type: 'heading',
        content: 'Inspection'
      },
      {
        type: 'paragraph',
        content: 'Inspection requires the car to be raised safely on axle stands or a lift with the rear suspension at ride height. The bracket is visible on the outboard face of the axle casing at each spring location. Look carefully at the 90-degree fold of the bracket, the weld line where the bracket joins the axle casing, and any areas showing paint cracking, rust staining, or surface cracking in the metal. On cars that have had previous repairs, inspect the weld bead carefully — a repair weld that is simply laid over an existing crack without proper preparation will show as a discrete ridge over a visible underlying crack.'
      },
      {
        type: 'steps',
        content: [
          'Raise the rear of the car and support on axle stands placed under the chassis — not the axle.',
          'With the rear suspension hanging free (unloaded), inspect both spring axle brackets from below.',
          'Look for cracking at the 90-degree fold, at the weld line, and in the area adjacent to the brake backing plate.',
          'Check for evidence of previous welding repairs — any weld bead that was not there from the factory.',
          'With an assistant, gently rock the car from side to side and observe whether any movement exists between the spring and the axle at either bracket location.',
          'Check the torque on the four anchor bolt nuts using a torque wrench — correct figure is 40 lb/ft.',
          'Repeat for the opposite side — if one side is cracked, the other must be treated as suspect regardless of appearance.'
        ]
      },

      {
        type: 'heading',
        content: 'Repair Options'
      },
      {
        type: 'paragraph',
        content: 'Three approaches have been used by C-V8 owners, ranging from like-for-like repair to a full engineering change. The correct choice depends on the severity of the existing damage and the availability of specialist skills and materials.'
      },

      {
        type: 'heading',
        content: 'Option 1 — Professional Weld Repair and Reinforcement (Recommended)'
      },
      {
        type: 'paragraph',
        content: 'The repair must be done by a competent welder experienced with structural steelwork, not a general body shop. The axle should be removed from the car for bench repair — this allows proper access, correct pre-heating, and avoids the risk of heat-induced scaling inside the axle tube damaging bearings or seals.'
      },
      {
        type: 'list',
        content: [
          'Remove the axle from the car. This is also the opportunity to replace the vacuum advance unit, clean and inspect the differential and wheel bearings.',
          'The cracked area must be properly prepared — the crack must be fully opened up and cleaned back to sound metal before any weld is laid.',
          'Pre-heat the bracket area to near blue/red (approximately 200–300°C) before MIG or TIG welding to achieve a deep, sound fusion weld and reduce the risk of heat cracking in the surrounding material.',
          'After repairing the crack, add reinforcing plates front and rear of the bracket to spread the loading. These plates should incorporate clearance holes aligned with the existing spring anchor bolt holes.',
          'The repair must not be done in situ on a hot engine with the axle under load — the repair weld will not achieve adequate penetration or fusion.'
        ]
      },
      {
        type: 'warning',
        content: 'The original brackets were welded to the axle casing before the axle end flanges were fitted during manufacture. A complete bracket replacement is therefore not straightforward — you cannot slide a new one over the axle shaft. A replacement bracket would need to be fabricated in two halves and welded in place. For most cases, a properly executed repair with reinforcement is the practical solution.'
      },

      {
        type: 'heading',
        content: 'Option 2 — Jaguar XK150 U-Bolt Conversion'
      },
      {
        type: 'paragraph',
        content: 'One approach suggested by experienced C-V8 engineers is to replace the welded bracket arrangement entirely with a set of U-bolt clamps from the rear axle of a Jaguar XK150, which uses a similar axle diameter. This replaces the fatigue-prone folded bracket with a conventional and robust U-bolt clamping arrangement.'
      },
      {
        type: 'list',
        content: [
          'The bump stop pad above the spring seat would need to be removed or relocated.',
          'A fabricated saddle plate with curved ends to accept the U-bolt would need to be made for each side.',
          'This is a more significant fabrication job but results in a more conventional, robust and maintainable spring-to-axle connection.',
          'Compatibility with the Panhard rod mount on the LHS bracket would need to be resolved separately.'
        ]
      },

      {
        type: 'heading',
        content: 'Option 3 — Anti-Tramp Bar Installation (Optional Additional Measure)'
      },
      {
        type: 'paragraph',
        content: 'To reduce the root cause of the stress — axle tramp under acceleration — a 4-link anti-tramp bar set-up can be added. This is a more expensive engineering solution used on higher-powered versions of the car. A simpler and cheaper partial measure is to add a heavy-duty leaf clamp between the spring leaves, reducing the spring S-deflection under acceleration. Neither of these replaces the need to repair the cracked bracket first — they are complementary measures to reduce future recurrence.'
      },

      {
        type: 'heading',
        content: 'Ongoing Maintenance'
      },
      {
        type: 'list',
        content: [
          'Following the JML 1966 service bulletin: check and torque the four anchor bolt nuts to 40 lb/ft at every 12,000 mile service interval.',
          'Include a visual inspection of both brackets at each service — look for new paint cracking or rust staining at the fold.',
          'If any anchor bolt nut is found loose, re-torque it and inspect the bracket carefully for signs of deformation or crack initiation before driving further.',
          'After any significant axle removal or rebuild, re-torque the anchor bolts and recheck after the first 500 miles of use.'
        ]
      },

      {
        type: 'tip',
        content: 'This is a known issue across essentially the entire C-V8 production run. If you are buying a C-V8 or preparing one for use after a period of storage, a visual inspection of both rear spring axle brackets should be on the pre-purchase or pre-road checklist regardless of what any previous owner or workshop report says.'
      }
    ]
  },

  {
    id: 'boot-lock-jammed',
    category: 'known-issues',
    title: 'Boot Lock — Identification, Jamming & Repair',
    subtitle: 'Which cars share the boot lock components and how to fix a jammed or seized mechanism',
    models: ['mk2'],
    difficulty: 'moderate',
    readTime: '6 min read',
    severity: null,
    tags: ['boot lock', 'Volvo P1800', 'Austin Westminster', 'Skandix', 'bodywork', 'known issue', 'Mk II'],
    contributors: ['JOC C-V8 Tech Forum — community discussion 2025'],
    sourceUrl: 'https://joc.org.uk/joc-forum/?w3=dmlld2ZvcnVtLnBocD9mPTY=',
    lastUpdated: '2025',

    intro: `The boot lid lock on the Jensen C-V8 Mk II is a two-part assembly drawing from two different donor cars. When the push button jams or the lock seizes, identifying the correct cross-reference parts is the first challenge — most suppliers will have no idea what a "Jensen C-V8 boot lock" is, but will readily supply Volvo P1800 or Austin Westminster parts.`,

    sections: [
      {
        type: 'heading',
        content: 'What the Boot Lock Is Made From'
      },
      {
        type: 'paragraph',
        content: 'The Mk II C-V8 boot lock assembly consists of two components sourced from different vehicles:'
      },
      {
        type: 'list',
        content: [
          'The lock mechanism — push button and barrel assembly: from an Austin Westminster',
          'The catch — the striker/receiving mechanism that the lock engages: from a Volvo P1800'
        ]
      },
      {
        type: 'tip',
        content: 'When sourcing parts or asking a locksmith, refer to these donor vehicles rather than asking for "Jensen C-V8 boot lock" — you will get much better results.'
      },

      {
        type: 'heading',
        content: 'Why It Jams'
      },
      {
        type: 'paragraph',
        content: 'The most common failure is the push button jamming and refusing to actuate the lock mechanism. The root cause is the retaining spring on the eccentric latch inside the assembly. The original spring is far too strong — when you press the button, the tang at the bottom (which is only screwed on, not welded) struggles against this spring. Instead of actuating, the tang rotates and the boot becomes permanently locked. This failure has happened to at least one owner mid-journey.'
      },
      {
        type: 'paragraph',
        content: 'On older or high-mileage cars, general wear in the internal mechanism is also a factor — worn alloy components allow internal play before the button actuates, eventually causing the button to jam completely.'
      },
      {
        type: 'warning',
        content: 'If the push button is becoming stiff or requiring extra force, address it before it fails completely. Once the tang rotates and locks, the boot cannot be opened without drilling out the lock. Do not force a stiff button.'
      },

      {
        type: 'heading',
        content: 'Opening a Locked Boot'
      },
      {
        type: 'paragraph',
        content: 'If the boot is already permanently locked, the lock will need to be drilled out. This is destructive but recoverable — the lock can be replaced with Volvo P1800 parts afterwards. A locksmith experienced with vintage car locks may be able to pick it, but drilling is the more reliable option if the mechanism has seized completely.'
      },

      {
        type: 'heading',
        content: 'Parts to Order'
      },
      {
        type: 'paragraph',
        content: 'Volvo P1800 boot lock parts are available new from Skandix AG, a German Volvo parts specialist who ship internationally. Two part numbers cover the lock and receiving catch:'
      },
      {
        type: 'parts',
        content: [
          {
            name: 'Volvo P1800 boot lock parts (lock + catch)',
            partNumber: '1018982 and 9122128',
            notes: 'Available from Skandix AG (skandix.de). Total parts cost approximately €29.78; allow additional for shipping and any import duty — total landed cost approximately €75 to the UK.',
          }
        ]
      },

      {
        type: 'heading',
        content: 'The Spring Fix — Essential After Fitting New Parts'
      },
      {
        type: 'paragraph',
        content: 'Simply fitting new Volvo parts will not prevent the jamming problem recurring if the original spring is reused. The retaining spring on the eccentric latch must be replaced with a weaker spring. This allows the button tang to properly actuate the mechanism without the risk of it rotating instead.'
      },
      {
        type: 'steps',
        content: [
          'Source the Volvo P1800 parts from Skandix AG (part numbers 1018982 and 9122128).',
          'Before reassembly, identify the retaining spring on the eccentric latch inside the assembly.',
          'Replace this spring with one of lighter tension — a spring supplier or engineering shop can match the dimensions with a softer rate.',
          'Reassemble and test the push button action — it should actuate smoothly without requiring excessive force.',
          'Consider fitting a simple cable as a secondary failsafe, routed inside the boot to a discreet pull handle, in case the mechanism fails again in future.'
        ]
      },

      {
        type: 'heading',
        content: 'Chrome Restoration'
      },
      {
        type: 'paragraph',
        content: 'If the chrome push button surround is worn but otherwise intact, it can be sent for re-chroming without replacing the mechanical parts. The chrome and alloy components can be separated for this purpose. Source new internal mechanical parts from Skandix and re-use the original chrome surround if it is in good condition.'
      }
    ]
  },

  {
    id: 'erratic-speedometer',
    category: 'known-issues',
    title: 'Erratic or Fluctuating Speedometer',
    subtitle: 'Why the speedo needle flickers or bounces — and how to fix it',
    models: ['all'],
    difficulty: 'easy',
    readTime: '5 min read',
    severity: null,
    tags: ['speedometer', 'speedo cable', 'instruments', 'known issue', 'gearbox', 'TorqueFlite'],
    contributors: ['JOC C-V8 Tech Forum — community discussion 2026'],
    sourceUrl: 'https://joc.org.uk/joc-forum/?w3=dmlld2ZvcnVtLnBocD9mPTY=',
    lastUpdated: '2026',

    intro: `A wildly fluctuating or erratic speedometer needle is a common and long-standing complaint on the Jensen C-V8. The problem is almost always in the mechanical speedometer cable rather than the instrument itself — and in most cases it can be resolved without specialist tools or expensive parts.`,

    sections: [
      {
        type: 'heading',
        content: 'Why It Happens'
      },
      {
        type: 'paragraph',
        content: 'The C-V8 uses a mechanical speedometer driven by a flexible cable from the gearbox. Over time — particularly on cars that see infrequent use — the lubricant inside the cable dries out and the inner cable becomes sticky. As the cable rotates, it binds and slips instead of turning smoothly, causing the needle to flick and bounce erratically. A kinked or sharply bent cable, or a damaged outer sheath, will produce the same symptom.'
      },
      {
        type: 'paragraph',
        content: 'A contributing factor on many C-V8s is the angle at which the cable exits the TorqueFlite automatic gearbox. The natural routing creates a fairly sharp bend at the gearbox end, which puts additional stress on the inner cable. Fitting a right-angle connector at the gearbox end reduces this bend and is a known improvement — though these connectors can themselves wear out internally over time, recreating the problem.'
      },

      {
        type: 'heading',
        content: 'Fix 1 — Clean and Re-lubricate the Cable (Do This First)'
      },
      {
        type: 'paragraph',
        content: 'This is the primary fix and should always be tried before replacing any parts. The key is to use a light oil rather than grease — grease can go sticky with infrequent use, whereas EP 80 or EP 90 rear axle oil stays fluid and coats the cable evenly.'
      },
      {
        type: 'steps',
        content: [
          'Disconnect the speedometer cable at both ends — at the speedometer head behind the dashboard and at the gearbox.',
          'Pull the inner cable out of the outer sheath completely.',
          'Clean the inner cable thoroughly using brake cleaner or white spirit. Wipe dry with a clean cloth.',
          'Clean the inside of the outer sheath by running a clean cloth through it or flushing with brake cleaner.',
          'Inspect the outer plastic sheath carefully for cracks, splits or missing sections. Tape repairs will not hold — the adhesive dissolves in the oil. A damaged sheath should be replaced.',
          'Re-lubricate the inner cable with EP 80 or EP 90 rear axle oil. Work it along the full length.',
          'Feed the inner cable back into the outer sheath, ensuring no sharp bends or kinks in the routing.',
          'Reconnect at both ends and test.'
        ]
      },
      {
        type: 'warning',
        content: 'Do not use conventional grease inside the cable. Grease becomes sticky on a car used infrequently and will cause the same problem to recur. EP 80/90 rear axle oil is the recommended lubricant.'
      },

      {
        type: 'heading',
        content: 'Fix 2 — Right-Angle Connector at the Gearbox'
      },
      {
        type: 'paragraph',
        content: 'If the cable routing from the TorqueFlite gearbox creates a sharp bend, fitting a right-angle connector at the gearbox end reduces stress on the inner cable and can eliminate the erratic behaviour. These connectors are available from Rimmer Bros and on eBay — however, many eBay listings are for UK cars (Jaguar, Triumph, MG etc.) and may not fit the TorqueFlite gearbox directly. Always confirm fitment before ordering.'
      },
      {
        type: 'parts',
        content: [
          {
            name: 'Speedometer cable right-angle gearbox connector',
            partNumber: null,
            notes: 'Available from Rimmer Bros — confirm TorqueFlite fitment. Also available on eBay — search for speedometer right-angle connector, but verify dimensions against your gearbox drive before purchasing as many listings are for British Leyland applications.',
          }
        ]
      },
      {
        type: 'tip',
        content: 'Rimmer Bros stock a suitable connector — see rimmerbros.com (item 120694). Note that right-angle connectors can themselves wear out internally over time. If a previously fitted connector has failed, replace it rather than attempting repair.'
      },

      {
        type: 'heading',
        content: 'Checking the Cable Routing'
      },
      {
        type: 'list',
        content: [
          'The cable must have no sharp bends or kinks along its entire length — trace it from gearbox to dashboard and gently re-route any tight sections.',
          'Make sure the cable is not trapped or pinched by other components.',
          'Where the cable passes through the bulkhead, check the grommet is intact and the cable is not chafing.',
          'If the outer sheath has any section of missing or damaged plastic, the sheath must be replaced — tape repairs do not work as the adhesive dissolves in the lubricant.'
        ]
      },

      {
        type: 'heading',
        content: 'When the Speedometer Head Itself is the Problem'
      },
      {
        type: 'paragraph',
        content: 'If cleaning and lubricating the cable makes no improvement, the fault may be in the speedometer instrument itself. The internal mechanism can wear or the magnet can weaken over time. Specialist speedometer repair and calibration services are available and can often restore a worn instrument to correct operation. This is a less common cause but worth considering if cable work has not resolved the issue.'
      }
    ]
  },

  {
    id: 'overheating-diagnosis-and-fixes',
    category: 'known-issues',
    title: 'Engine Overheating — Diagnosis & Fixes',
    subtitle: 'A systematic guide to the most common cooling system problems on the C-V8, drawn from community experience',
    models: ['all'],
    difficulty: 'moderate',
    readTime: '12 min read',
    severity: 'critical',
    tags: ['overheating', 'cooling', 'radiator', 'thermostat', 'fans', 'water pump', 'known issue'],
    contributors: ['JOC C-V8 Tech Forum — community discussion 2024'],
    sourceUrl: 'https://joc.org.uk/joc-forum/?w3=dmlld2ZvcnVtLnBocD9mPTY=',
    lastUpdated: '2024',

    intro: `Overheating is one of the most frequently reported problems on the Jensen C-V8, particularly on cars that have been off the road, had cooling system work, or been fitted with modern recored radiators. The good news is that overheating on the C-V8 is almost always caused by one or more of a small set of identifiable problems — none of them requiring engine removal. This guide works through each issue systematically, from the simplest to address to the most involved.`,

    sections: [
      {
        type: 'warning',
        content: 'If the temperature gauge is heading toward or into the red, pull over and let the engine cool before investigating. Continuing to drive an overheating engine risks warping the cylinder heads, especially if alloy heads have been fitted. Never remove the radiator cap while the engine is hot.'
      },

      {
        type: 'heading',
        content: 'Is It Actually Overheating?'
      },
      {
        type: 'paragraph',
        content: 'Before spending money on parts, confirm what the engine temperature actually is — not what the dashboard gauge says. The voltage regulator that feeds the instrument cluster can cause the temperature gauge to read high even when the engine is running at a perfectly normal temperature. This is a cheap and common fix. Use an infra-red thermometer on the top hose and thermostat housing to verify the actual coolant temperature before drawing conclusions.'
      },
      {
        type: 'tip',
        content: 'The voltage regulator is inexpensive and easy to replace. If the temperature gauge reads high but the car does not seem to be genuinely hot — top hose pressure is moderate, no steam, fans cycling normally — replace the voltage regulator before doing anything else. It has cured this exact symptom on multiple Jensen owners\' cars.'
      },

      {
        type: 'heading',
        content: '1. Radiator Cap Pressure — Check This First'
      },
      {
        type: 'paragraph',
        content: 'The original C-V8 radiator cap is a 7 lb unit. This is far too low for reliable operation. A low-pressure cap allows coolant to be expelled from the system at a lower temperature than it should be, reducing the coolant volume in the system and causing genuine overheating on the next run. The correct replacement is a 13 lb cap; many owners use 15 lb caps. Check that the cap seats correctly on the radiator neck — if the radiator has been recored or replaced with an Interceptor unit, the neck dimensions may require the neck to be modified to accept the correct cap.'
      },
      {
        type: 'list',
        content: [
          'Original 7 lb cap: replace with 13 lb minimum, 15 lb preferred.',
          'If the 15 lb cap does not seat firmly on the radiator neck, have the neck modified by a radiator specialist — a poorly seating cap will not hold pressure.',
          'A correctly seating cap should require noticeable force to remove once the system is hot.'
        ]
      },

      {
        type: 'heading',
        content: '2. Electric Fan Setup — The Most Common Root Cause'
      },
      {
        type: 'paragraph',
        content: 'The original Smiths five-blade electric fans fitted to the C-V8 were designed to work with the original open tube-and-fin radiator core. A modern recored radiator has significantly smaller airways that require a much more forceful airflow to cool effectively. If the radiator has been recored and the original fans retained, this mismatch is very likely a primary cause of overheating at low speed and at idle.'
      },
      {
        type: 'list',
        content: [
          'Original fans work adequately with original open-core radiators. They are insufficient for modern close-fin recored units.',
          'The fan installation must be shrouded — the fans must be mounted directly against the radiator face with a baffle or cowl so that all airflow is drawn through the radiator core, not around it. Fans hanging in free air in the engine bay recirculate air and are largely ineffective.',
          'Recommended upgrade: two 12-inch puller fans mounted directly on the radiator in place of the originals, with close-fitting surrounds.',
          'Adding push fans in front of the radiator is generally counterproductive — the fan mounts and motor housings reduce the clear radiator area more than the extra airflow helps.',
          'Check the direction of fan rotation — fans blowing the wrong way (pushing air forward rather than pulling it rearward through the radiator) will cause overheating. This is easy to overlook after a fan replacement.',
          'If retaining the original fans for originality reasons, a modern electronic fan controller that ramps fan speed progressively rather than switching on/off abruptly will improve their effectiveness.'
        ]
      },
      {
        type: 'tip',
        content: 'Use an IR thermometer to draw a heat map across the radiator face while the engine is hot at idle. If the top of the radiator is significantly hotter than the bottom, or if there are cool patches suggesting blocked tubes, the issue is radiator flow rather than fan performance.'
      },

      {
        type: 'heading',
        content: '3. Fan Temperature Sensor Position'
      },
      {
        type: 'paragraph',
        content: 'The position of the fan temperature sensor critically affects how the fans behave. If the sensor is placed in the top hose (the hottest part of the cooling circuit), the fans will switch on and never switch off — this is not an indication of overheating, it is simply that the top hose is always above the trigger temperature. The factory Otter switch position (in the lower part of the radiator tank, sensing the temperature of cooled water returning to the engine) is the correct location. Sensors in this position cause the fans to cycle on and off normally as the cooled water temperature rises and falls.'
      },

      {
        type: 'heading',
        content: '4. Thermostat — Type and Condition'
      },
      {
        type: 'paragraph',
        content: 'The thermostat on the C-V8 does not bypass cooling — it restricts coolant flow so that water stays in the radiator long enough to be properly cooled before returning to the engine. Removing the thermostat entirely does NOT help cooling and will typically make the problem worse, because the coolant passes through the radiator too quickly to give up its heat. A standard aftermarket thermostat designed for smaller engines may also restrict flow excessively on the large-capacity 383 V8.'
      },
      {
        type: 'list',
        content: [
          'Always use a high-flow thermostat specifically designed for large V8 engines. Standard thermostats have a smaller opening that is inadequate for the 383\'s coolant flow rate.',
          'Test the thermostat before fitting: immerse it in a pan of water heated to the rated opening temperature and confirm it opens fully and promptly.',
          'Inspect the thermostat housing for internal corrosion. On older cars, the housing bore can corrode and partially block the coolant path even when the thermostat is open.',
          'The correct operating temperature thermostat for the C-V8 is as fitted from the factory — refer to your manual for the specific temperature. Do not fit a cooler-than-standard thermostat as a cooling fix; address the root cause instead.'
        ]
      },

      {
        type: 'heading',
        content: '5. Water Pump — Impeller Type'
      },
      {
        type: 'paragraph',
        content: 'Many C-V8s still have or have had fitted a water pump with a small pressed-steel impeller. These are significantly less efficient than pumps fitted with a cast impeller at moving the large volume of coolant a big-block V8 requires. Replacing the pump with a high-flow unit with a cast iron impeller has been found to make a meaningful difference to cooling performance. If the cooling system is being worked on for any reason, a high-flow water pump is a worthwhile upgrade.'
      },

      {
        type: 'heading',
        content: '6. System Flushing — Scale, Rust and Debris'
      },
      {
        type: 'paragraph',
        content: 'After 60 years, the coolant passages in the block and heads of an unrestored C-V8 are likely to contain a significant accumulation of rust, scale, paint flakes and other debris. This restricts coolant flow and reduces heat transfer to the coolant. On cars that have been run without antifreeze, even recently, the system may already contain visible rust particles. A proper chemical flush is an essential first step before any other cooling system diagnosis.'
      },
      {
        type: 'list',
        content: [
          'Use a dedicated cooling system flush chemical designed to dissolve rust and scale — a two-part process over multiple days is more effective than a single-flush product for heavily contaminated systems.',
          'Drain and flush until the water runs clear before refilling with fresh coolant and antifreeze.',
          'Always use coolant with antifreeze even in warm climates — the corrosion inhibitors in antifreeze are as important as its freeze protection.',
          'Running without antifreeze will cause new rust to form quickly, turning the coolant brown within days.',
          'After flushing, refill with a 50/50 mix of antifreeze and distilled water.'
        ]
      },

      {
        type: 'heading',
        content: '7. Expansion Tank — The Missing Component'
      },
      {
        type: 'paragraph',
        content: 'The C-V8 was not fitted with an expansion tank from the factory. When the radiator cap vents, expelled coolant is simply lost rather than being retained and drawn back into the system as it cools. This means that any cap venting event (which may simply be normal thermal expansion rather than genuine overheating) leaves the system with less coolant, causing genuine overheating on the next occasion. Fitting an Interceptor-style expansion tank eliminates this problem — the pressure cap is moved to the expansion tank, and expelled coolant is retained and recycled.'
      },

      {
        type: 'heading',
        content: '8. Head Gaskets — Alloy Head Consideration'
      },
      {
        type: 'paragraph',
        content: 'Cars that have been fitted with aluminium cylinder heads as part of a rebuild may require specific head gaskets different from those used with the original cast iron heads. Using standard modern head gaskets with alloy heads can affect coolant flow between the head and block. Additionally, alloy heads transfer heat to the coolant more rapidly than iron heads when the engine is shut down — this can cause steam or coolant loss immediately after switching off, even on engines that were running at a normal temperature while moving. If alloy heads have been recently fitted and overheating or post-shutdown coolant loss is the primary symptom, verify the correct head gaskets are installed with the engine builder.'
      },

      {
        type: 'heading',
        content: 'Systematic Diagnosis Sequence'
      },
      {
        type: 'steps',
        content: [
          'Replace the voltage regulator — cheap, quick, rules out a gauge fault.',
          'Verify actual coolant temperature with an IR thermometer before any other work.',
          'Replace the radiator cap with a minimum 13 lb unit. Confirm it seats correctly.',
          'Check fan rotation direction — they must pull air rearward through the radiator.',
          'Confirm fan shrouding — fans must be mounted against the radiator face, not free in the engine bay.',
          'Remove and bench-test the thermostat. Replace with a high-flow type if in any doubt.',
          'Inspect the thermostat housing bore for corrosion — clean or replace as required.',
          'Perform a full chemical flush of the cooling system until the water runs clear.',
          'Refill with 50/50 antifreeze/distilled water. Check the system runs up to temperature with fans cycling normally.',
          'If still overheating: consider the water pump impeller type; consider fitting an expansion tank.',
          'If alloy heads are fitted and symptoms persist: verify correct head gaskets with the engine builder.'
        ]
      },

      {
        type: 'tip',
        content: 'At idle on a warm day, the electric fans should cycle on and off as they maintain temperature just above the thermostat opening point. If the fans run continuously without the temperature stabilising, the system does not have sufficient cooling capacity for idle conditions — almost always a fan or thermostat issue. If the car runs cool on the road but overheats in traffic, it is an idle-speed cooling capacity problem. If it overheats at all speeds, suspect blockage, thermostat, or water pump.'
      }
    ]
  },

  // ── Wheels & Tyres ──────────────────────────────────────────────────────────
  {
    id: 'wheel-dimensions',
    category: 'wheels',
    title: 'C-V8 Wheel Dimensions — Critical Specifications',
    subtitle: 'PCD, width, backspace and centre bore for sourcing replacement or alternative wheels',
    models: ['all'],
    difficulty: 'easy',
    readTime: '4 min read',
    severity: null,
    tags: ['wheels', 'PCD', 'backspace', 'centre bore', 'Austin Westminster', 'tyres', '15 inch', 'dimensions'],
    contributors: ['Jensen C-V8 community — measured from original C-V8 wheels'],
    lastUpdated: '2025',

    intro: `Finding correct replacement wheels for the Jensen C-V8 requires knowing the precise critical dimensions — PCD, rim width, backspace and centre bore. These are not commonly documented in one place, and getting any one of them wrong means the wheel will not fit correctly or safely. The dimensions below have been measured from original C-V8 wheels and are provided as a practical reference for owners sourcing replacements or alternatives.`,

    sections: [
      {
        type: 'heading',
        content: 'Standard C-V8 Wheel Dimensions'
      },
      {
        type: 'parts',
        content: [
          {
            name: 'Rim diameter',
            partNumber: '15 inch',
            notes: 'Standard diameter across all C-V8 marks.',
          },
          {
            name: 'Rim width',
            partNumber: '4.5 inch',
            notes: 'Standard width of the original C-V8 wheel.',
          },
          {
            name: 'PCD (Pitch Circle Diameter)',
            partNumber: '5 × 5 inch  /  5 × 127 mm',
            notes: '5-stud pattern on a 5-inch (127mm) pitch circle. Both measurements are the same dimension — use whichever your supplier requires.',
          },
          {
            name: 'Backspace',
            partNumber: '4 3/16 inch  (approx. 106 mm)',
            notes: 'Measured from the inner lip of the wheel to the mounting face. Critical for ensuring correct clearance with the brake callipers and suspension components.',
          },
          {
            name: 'Centre bore',
            partNumber: '3 1/8 inch  (approx. 79 mm)',
            notes: 'Diameter of the centre hole. The wheel must clear the hub/axle flange — if fitting a wheel with a larger centre bore, a hub-centric ring is recommended.',
          },
        ]
      },
      {
        type: 'warning',
        content: 'Always verify backspace and centre bore against your own car before purchasing wheels. Minor variations can exist between individual cars and marks. The backspace dimension in particular is critical — too little clearance will result in the wheel fouling the brake calliper or suspension.'
      },

      {
        type: 'heading',
        content: 'Factory Tyre Specification'
      },
      {
        type: 'list',
        content: [
          'Original specification: Dunlop 6.70 × 15 road speed rating',
          'Tyre pressure: 24 psi all round (see manual for laden/unladen notes)',
          'Recommended modern equivalent: 205/70-15 — increase pressure by approximately 10% to compensate for the different section width',
        ]
      },
      {
        type: 'tip',
        content: 'The 205/70-15 is the most commonly recommended modern tyre for the C-V8. It is close in overall diameter to the original 6.70 × 15, preserving speedometer accuracy. Wider tyres are possible but may require checking for mudguard clearance.'
      },

      {
        type: 'heading',
        content: 'Cross-Reference: Austin Westminster'
      },
      {
        type: 'paragraph',
        content: 'The original C-V8 wheels are said to share their dimensions with the BMC Austin Westminster, and this cross-reference appears in the wider Jensen community. However, this has not been independently verified by the contributor of these measurements. If you are sourcing Austin Westminster wheels as an alternative, confirm the PCD, backspace and centre bore match against the dimensions above before fitting.'
      },
      {
        type: 'paragraph',
        content: 'The alternative parts list on this site also notes the Rover P5, Vauxhall PA Cresta/Velox and Austin Westminster as potential 15-inch wheel donors, based on the original Eric Christoffersen parts list. Again, physical verification of dimensions is strongly recommended before purchase.'
      },

      {
        type: 'heading',
        content: 'Important Notes When Sourcing Wheels'
      },
      {
        type: 'list',
        content: [
          'PCD is the most commonly quoted specification and is easy to verify — use a PCD gauge or measure centre-to-centre between opposite studs and multiply by 1.0515, or measure adjacent studs using standard formulas.',
          'Backspace is not the same as offset — backspace is measured from the inner lip; offset is measured from the centre line. Confirm which your supplier is quoting.',
          'Centre bore can often be enlarged by a machine shop to fit a hub-centric ring if you find a wheel with correct PCD but slightly wrong bore.',
          'Period-correct steel wheels in good condition are increasingly difficult to find. Have any used wheels inspected for cracks or corrosion around the stud holes before fitting.',
          'The original lug nuts are a specific thread — confirm compatibility when sourcing period or aftermarket wheels from different vehicles.',
        ]
      }
    ]
  },

  // ── Paint Colours ───────────────────────────────────────────────────────────
  {
    id: 'paint-colours-codes',
    category: 'body',
    title: 'Original Paint Colours & Codes',
    subtitle: 'ICI paint codes, modern equivalents and sourcing notes for all known C-V8 colours',
    models: ['all'],
    difficulty: 'easy',
    readTime: '6 min read',
    severity: null,
    tags: ['paint', 'paint codes', 'ICI', 'body colour', 'restoration', 'colour matching'],
    contributors: ['John Staddon (JOC C-V8 Registrar)', 'Tony Marshall', 'David Devine', 'Enda Molloy', 'Norman Paskin', 'Stephen Carter', 'community contributions via JOC Forum'],
    lastUpdated: '2025',

    intro: `Matching or sourcing the correct paint for a Jensen C-V8 restoration requires the original ICI paint codes, which differ from modern supplier catalogues. This reference compiles the known codes for all C-V8 body colours, modern equivalents where identified, and sourcing notes contributed by owners and specialists over many years. Some codes remain unknown — particularly for the rarest colours applied to very few cars.`,

    sections: [
      {
        type: 'warning',
        content: 'Paint codes should always be verified against a physical colour match before committing to a full respray. Batch variations, age and supplier differences mean a code alone does not guarantee an exact match. Where possible, source a test panel first.',
      },
      {
        type: 'heading',
        content: 'Standard & Special Exterior Colours',
      },
      {
        type: 'paintTable',
        content: [
          {
            colour: 'Black',
            css: '#1a1a1a',
            iciCode: 'M030-122',
            alternative: null,
            notes: 'If same as Jensen Healey Black. Source: David Devine.',
          },
          {
            colour: 'Botticelli Blue',
            css: '#4a6fa5',
            iciCode: 'P030-2309 / M049-2309',
            alternative: null,
            notes: 'Also given as M049-2309. Source: Tony Marshall, JOCF 16.04.2006.',
          },
          {
            colour: 'Oyster Grey',
            css: '#b8b0a4',
            iciCode: 'M031-2116',
            alternative: 'Aston Martin Oyster Shell Metallic (possibly)',
            notes: 'Full ICI name: "Metallichrome Oyster Grey".',
          },
          {
            colour: 'Californian Sage',
            css: '#7a8c5e',
            iciCode: 'M031-2629',
            alternative: 'Aston Martin Californian Sage · DuPont A1338',
            notes: 'Same as Aston Martin Californian Sage. DuPont Color Code: A1338.',
          },
          {
            colour: 'Regal Red',
            css: '#8b1c1c',
            iciCode: 'P031-2394 / P031-2132',
            alternative: 'Rolls-Royce Regal Red (part no. 9500406) · M035-2642',
            notes: 'Multiple codes recorded. Source: Enda Molloy (restoring 2147).',
          },
          {
            colour: 'Carmine',
            css: '#960018',
            iciCode: 'M030-9039',
            alternative: null,
            notes: 'If same as Jensen Healey Carmine. Source: David Devine.',
          },
          {
            colour: 'Princess Grey',
            css: '#9ea3a8',
            iciCode: 'M049-2334',
            alternative: null,
            notes: 'Most popular colour — 100 of 500 cars.',
          },
          {
            colour: 'Smoke Green',
            css: '#506050',
            iciCode: null,
            alternative: 'Rolls-Royce (Autopaints Brighton code 9500816, 1965–71)',
            notes: 'Source: Norman Paskin. Rolls-Royce colour reference.',
          },
          {
            colour: 'Sherwood Green',
            css: '#2d5a27',
            iciCode: null,
            alternative: 'Sherwin Williams 8914 (if same as Austin Sherwood Green 1968)',
            notes: 'Fitment to be verified — only 1 car recorded in this colour.',
          },
          {
            colour: 'Peony Red',
            css: '#c5394d',
            iciCode: 'M049-4715',
            alternative: 'Austin/BMC Mini Peony Red (possibly)',
            notes: 'Source: Stephen Carter, 07.12.2012.',
          },
          {
            colour: 'Off White',
            css: '#f0ebe0',
            iciCode: null,
            alternative: 'Same as Old English White',
            notes: 'Treat as Old English White when sourcing.',
          },
          {
            colour: 'Spa White',
            css: '#f5f2ec',
            iciCode: null,
            alternative: 'Triumph Spa White (CDB) · similar to Mercedes Classicweiss',
            notes: 'Source: TR Register Forum.',
          },
          {
            colour: 'Sun Bronze',
            css: '#8b6914',
            iciCode: 'M049-2027',
            alternative: null,
            notes: null,
          },
          {
            colour: 'Autumn Gold',
            css: '#c8860a',
            iciCode: 'P031-2515',
            alternative: null,
            notes: 'Only 1 car recorded in this colour.',
          },
          {
            colour: 'Deep Carriage Green',
            css: '#2c4a2c',
            iciCode: 'P030-2747',
            alternative: 'Nexa 3716 · De Beer 500 line S2848 "Jailbar Green"',
            notes: 'Nexa code from Mickris (23.11.2013). De Beer last digit uncertain — may be 8 or 5. Source: JPMF Forum.',
          },
          {
            colour: 'Indigo Blue',
            css: '#2e3f6d',
            iciCode: 'M048-2086',
            alternative: 'Jaguar Indigo Blue (to 1964 — same or very close)',
            notes: 'Source: Mike Byrne.',
          },
          {
            colour: 'Special White',
            css: '#fafafa',
            iciCode: null,
            alternative: 'Unknown',
            notes: 'Only used on 4 cars: 104/2284, 104/2306, 112/2337, 112/2351.',
          },
          {
            colour: 'Fawn',
            css: '#c4a07a',
            iciCode: 'P031-2165',
            alternative: null,
            notes: 'Only used on JM/EXP/107. Source: Greg (Dormer?), forum post 20.01.2021.',
          },
          {
            colour: 'Pastel Pink',
            css: '#f0aab8',
            iciCode: null,
            alternative: 'Unknown',
            notes: 'Only used on 1 car: 104/2023.',
          },
          {
            colour: 'Dawn Blue',
            css: '#7ab0c8',
            iciCode: null,
            alternative: 'Unknown',
            notes: 'Only 1 car recorded.',
          },
          {
            colour: 'Metallic Grey',
            css: '#9a9ea3',
            iciCode: null,
            alternative: 'Unknown',
            notes: 'Only 1 car recorded.',
          },
          {
            colour: 'Cadogan Brown',
            css: '#6b4423',
            iciCode: null,
            alternative: 'Unknown',
            notes: 'Only 1 car recorded.',
          },
          {
            colour: 'Reno Red',
            css: '#9e3030',
            iciCode: null,
            alternative: 'Unknown',
            notes: 'Only 1 car recorded.',
          },
          {
            colour: 'Royal Blue',
            css: '#1a2f7a',
            iciCode: 'ICI 3310B',
            alternative: null,
            notes: 'Listed as "Other colour" — non-standard order.',
          },
        ],
      },
      {
        type: 'tip',
        content: 'Where a Jaguar, Aston Martin, Rolls-Royce or BMC equivalent is noted, classic car paint specialists who stock those marques\' colours are often the most reliable source. Always request a physical chip or test panel before ordering for a full car.',
      },
      {
        type: 'heading',
        content: 'How to Use This Information',
      },
      {
        type: 'list',
        content: [
          'ICI codes beginning M0XX are metallic finishes; P0XX are solid (non-metallic) colours.',
          'When quoting a code to a paint supplier, also provide the colour name — some codes have been superseded or cross-referenced differently by different suppliers.',
          'For the rarest colours (only 1 car known), a physical sample from the original car is the most reliable reference.',
          'The Jensen C-V8 Registry may hold colour data for individual chassis numbers — John Staddon (JOC C-V8 Registrar) is the primary contact.',
          'If you have identified a code not listed here, please contribute it to the community via the JOC C-V8 Tech Forum.',
        ],
      },
    ],
  },

  // ── Body & Seals ────────────────────────────────────────────────────────────
  {
    id: 'door-draught-excluders',
    category: 'body',
    title: 'Door Draught Excluders & Seals',
    subtitle: 'Replacing worn door seals with a snap-on moquette-covered draught excluder',
    models: ['all'],
    difficulty: 'easy',
    readTime: '5 min read',
    severity: null,
    tags: ['door seals', 'draught excluder', 'weatherproofing', 'body', 'trim', 'moquette', 'interior'],
    contributors: ['Jensen C-V8 community'],
    lastUpdated: '2025',

    intro: `Worn or missing door seals are one of the most common sources of wind noise, water ingress and draughts on a classic Jensen C-V8. The original rubber door seals deteriorate over time and are increasingly difficult to source as an exact replacement. A practical and period-sympathetic alternative is a snap-on moquette-covered draught excluder, which fits a wide range of door opening edges without adhesive and is available in colours to match the interior.`,

    sections: [
      {
        type: 'heading',
        content: 'The Recommended Product'
      },
      {
        type: 'parts',
        content: [
          {
            name: 'Draught Excluder — Snap-on, plush moquette cover, 16mm bead',
            partNumber: 'SKU: 769',
            notes: 'Snap-on fitting with a large 16mm diameter soft sponge bead. Plush moquette covered. Reinforced carrier grips a wide range of door opening edge profiles without adhesive. Available in Black, Dark Blue, Brown and Red. Sold by the metre. Approximately £20.54 per metre (inc. VAT). Supplier: Vintage Car Parts — vintagecarparts.co.uk/products/769-container-large-plush-door-draught-excluder',
          }
        ]
      },
      {
        type: 'tip',
        content: 'The snap-on design means no adhesive is required and the seal can be removed and repositioned during fitting. This makes it far easier to work with than a glued rubber seal, particularly on a car being worked on over time.'
      },

      {
        type: 'heading',
        content: 'Measuring Up — How Much Do You Need?'
      },
      {
        type: 'paragraph',
        content: 'The product is sold by the metre, so accurate measurement before ordering will avoid waste. Measure the full perimeter of each door opening with a flexible tape measure, following the contour of the door shut face. The C-V8 is a two-door car, so you will need to measure both apertures.'
      },
      {
        type: 'list',
        content: [
          'Measure the full perimeter of each door opening separately — left and right apertures may differ slightly.',
          'Add 10–15% to your total measurement to allow for trimming, corner forming and any fitting errors.',
          'A typical full-size classic car door opening runs to approximately 3–4 metres per door. Budget for at least 7–8 metres for both doors combined, plus contingency.',
          'If also sealing the boot lid, measure that aperture separately and add to your order.'
        ]
      },

      {
        type: 'heading',
        content: 'Colour Selection'
      },
      {
        type: 'paragraph',
        content: 'The draught excluder is available in four colours: Black, Dark Blue, Brown and Red. For most C-V8 interiors, black or brown will be the most sympathetic match. The moquette texture is period-appropriate for a 1960s British car interior. If the existing door shut faces are in good condition, the colour of the excluder will be visible when the door is open, so it is worth matching to the interior trim rather than purely the door rubber colour.'
      },

      {
        type: 'heading',
        content: 'Fitting'
      },
      {
        type: 'steps',
        content: [
          'Remove all traces of the old seal — peel away the existing rubber or adhesive residue. Clean the door shut face with a mild solvent to remove any adhesive, grease or corrosion.',
          'Inspect the door shut face for rust or damage. Any rust should be treated and primed before the new seal is fitted, as sealing over rust will trap moisture.',
          'Start at the bottom of the door opening (the sill area) where any slight misalignment will be least visible.',
          'Press the snap-on carrier over the door shut face edge and work progressively around the aperture. The reinforced carrier will grip the edge firmly without adhesive.',
          'At corners, cut the bead at an angle rather than stretching it around the bend — this gives a neater result and avoids the seal lifting off the carrier at the corner.',
          'Where the two ends of the seal meet (usually at the bottom of the door), cut both ends squarely and butt them together neatly. A small dab of contact adhesive at the join will prevent the ends lifting.',
          'Close the door gently and check the compression — the 16mm sponge bead should compress evenly around the full aperture without the door requiring excessive force to close.',
          'Adjust any sections that appear compressed unevenly by gently pulling the carrier slightly outward or inward on the door lip to reposition.'
        ]
      },

      {
        type: 'heading',
        content: 'Boot Lid Seal'
      },
      {
        type: 'paragraph',
        content: 'The alternative parts list for the C-V8 references Woolies part no. 268 for the boot rubber seal as a direct replacement. The Vintage Car Parts snap-on draught excluder (SKU 769) may also be suitable for the boot lid aperture, depending on the profile of the boot shut face — the snap-on carrier accommodates a wide range of edge profiles. If the original Woolies boot seal is not available, this snap-on alternative is worth considering as a practical replacement.'
      },

      {
        type: 'tip',
        content: 'The original Woolies part numbers for C-V8 door and boot seals (264 for doors, 268 for boot) from the Eric Christoffersen parts list are listed in the Alternative Parts section of this site and are worth checking for availability before ordering a universal replacement.'
      }
    ]
  },

  // ── Upgrades & Modifications ────────────────────────────────────────────────
  {
    id: 'power-steering-conversion',
    category: 'upgrades',
    title: 'Installing Power Steering',
    subtitle: 'Options for adding power-assisted steering to the Jensen C-V8',
    models: ['all'],
    difficulty: 'advanced',
    readTime: '8 min read',
    severity: null,
    tags: ['power steering', 'electric power steering', 'steering', 'upgrade', 'EZ Power Steering', 'Easysteer', 'Interceptor rack'],
    contributors: ['JOC C-V8 Tech Forum — community discussion 2025'],
    sourceUrl: 'https://joc.org.uk/joc-forum/?w3=dmlld2ZvcnVtLnBocD9mPTY=',
    lastUpdated: '2025',

    intro: `The Jensen C-V8 was never fitted with power steering from the factory. The original rack-and-pinion steering is generally considered heavy at low speeds and when parking — a common complaint among owners, particularly in modern urban driving conditions. Several conversion options have been explored by the C-V8 community, ranging from bolt-on electric systems to hydraulic rack transplants. This guide summarises the main approaches, their costs, and what to expect from each.`,

    sections: [
      {
        type: 'heading',
        content: 'Option 1 — Electric Power Steering (Recommended)'
      },
      {
        type: 'paragraph',
        content: 'Electric power steering (EPS) is the approach most favoured by the current C-V8 community. It requires no hydraulic pump, no fluid lines, and eliminates the risk of leaks. The assistance is provided by an electric motor mounted on the steering column, drawing power from the car\'s electrical system only when steering input is needed.'
      },
      {
        type: 'tip',
        content: 'Electric power steering uses standard modern components from Opel/Vauxhall, Peugeot/Citroën and similar — making spare parts readily available and affordable long-term. No pump means no belts to replace, no fluid to leak, and no additional load on the cooling system.'
      },

      {
        type: 'heading',
        content: 'EZ Power Steering Kit'
      },
      {
        type: 'paragraph',
        content: 'EZ Power Steering produce an off-the-shelf electric power steering system that has been successfully fitted to at least one Mk II C-V8 (1964, VIN 104/2107). The system is not listed on the EZ website under Jensen, but Holden Vintage & Classic advertise it as a C-V8 application — availability should be confirmed before ordering as it may be to order only.'
      },
      {
        type: 'list',
        content: [
          'The motor unit is approximately the size of a large tin can and mounts to the steering column. On the C-V8 this requires cutting into the bulkhead to accommodate it — this is not a minor modification.',
          'The installation is described as "not for the faint hearted" — plan and measure carefully before committing.',
          'Once installed the system works well and produces a neat result.',
          'EZ may have refined the installation process since earlier kits were supplied — worth asking them directly about current C-V8 fitment details.',
          'Cost: approximately £3,000+ including VAT for parts only, not including installation labour.'
        ]
      },

      {
        type: 'heading',
        content: 'Easysteer — Electronic Power Steering Specialists'
      },
      {
        type: 'paragraph',
        content: 'Easysteer (based in Chorley, Lancashire) are specialists in electric power steering conversions for classic cars. Their systems use smart electronics that adapt the level of assistance to driving speed — lighter at parking speeds, firming up at speed for better feel. The electronics are considered more sophisticated than many alternative EPS kits. Worth contacting to discuss C-V8 fitment before ordering any system.'
      },
      {
        type: 'parts',
        content: [
          {
            name: 'Easysteer electric power steering system',
            partNumber: null,
            notes: 'Contact Easysteer directly to discuss C-V8 application. easysteer.co.uk/how-it-works/',
          },
          {
            name: 'EZ Power Steering kit (C-V8 application)',
            partNumber: null,
            notes: 'Available via Holden Vintage & Classic (may be to order). Confirm availability before ordering. Approx. £3,000+ inc VAT parts only.',
          }
        ]
      },

      {
        type: 'heading',
        content: 'Option 2 — Mk I Interceptor Hydraulic Rack Conversion'
      },
      {
        type: 'paragraph',
        content: 'The Mk I Jensen Interceptor uses a power-assisted rack that shares some heritage with the C-V8 platform and has been explored as a conversion. In principle the PAS mounting brackets from an Interceptor front crossmember can be grafted onto the C-V8 crossmember to accept the Interceptor rack. The PAS pump and brackets are available from Jensen specialists.'
      },
      {
        type: 'warning',
        content: 'The Mk I Interceptor power steering rack has a reputation for leaks — confirmed by Paul Lawrence at Riverbourne who has specifically noted this issue. Research current rack condition and supplier availability carefully before committing to this route. At least one C-V8 owner experienced the rack locking up after installation, requiring it to be returned to the supplier.'
      },
      {
        type: 'list',
        content: [
          'Search the JOC forum for "power steering" and "Interceptor rack" — there are multiple threads covering this conversion in detail.',
          'A complete Mk I Interceptor front crossmember and suspension assembly occasionally appears on eBay and can provide all the hardware needed.',
          'This is a more involved fabrication job than an EPS conversion and introduces ongoing hydraulic maintenance requirements.'
        ]
      },

      {
        type: 'heading',
        content: 'Option 3 — DIY Using Modern Components'
      },
      {
        type: 'paragraph',
        content: 'Forum member Jon Larkin (jglarkin) successfully fitted power steering to his C-V8 using affordable, readily available modern parts — not a proprietary kit. The project required significant planning and trial and error to get right, but the end result works well and was achieved at considerably lower cost than a dedicated kit. The details of this conversion have been discussed on the JOC forum and Jon may be willing to share his experience directly.'
      },

      {
        type: 'heading',
        content: 'Before You Start — Key Considerations'
      },
      {
        type: 'list',
        content: [
          'Contact the supplier directly and confirm they have current experience with C-V8 fitment — not just a general claim of compatibility.',
          'Budget for installation labour separately from parts cost. EPS conversions are manageable for a competent home restorer but the bulkhead modification requires careful planning.',
          'Anton Raaymakers (Netherlands) has fitted the EZ electric system to a concours Mk III C-V8 — worth contacting via the JOC for direct experience.',
          'Search the JOC C-V8 Tech Forum thoroughly before choosing a route — there are multiple detailed threads covering each approach.'
        ]
      }
    ]
  },

  {
    id: 'electronic-ignition-conversion',
    category: 'upgrades',
    title: 'Converting from Points to Electronic Ignition',
    subtitle: 'A practical guide to upgrading the Chrysler distributor on the C-V8 V8',
    models: ['all'],
    difficulty: 'moderate',
    readTime: '8 min read',
    tags: ['ignition', 'points', 'electronic', 'pertronix', 'distributor', 'chrysler', 'tune-up'],
    contributors: ['Jensen C-V8 Community'],
    lastUpdated: '2025',

    intro: `The Jensen C-V8 uses a Chrysler 383 cubic inch V8 with a conventional points-based ignition system as fitted from the factory. While this system works adequately when properly maintained, points wear over time, require regular adjustment, and can cause inconsistent firing — particularly at higher engine speeds. Converting to a modern electronic ignition eliminates the points entirely, replacing them with a solid-state trigger that requires no routine adjustment and delivers a more consistent spark throughout the rev range. This guide covers what to look for, which systems are available, and how to carry out the conversion correctly.`,

    sections: [
      {
        type: 'heading',
        content: 'Why Convert?'
      },
      {
        type: 'paragraph',
        content: 'Points-based ignition was the standard technology of the era but has several drawbacks on a regularly driven classic car. The contact breaker gap must be checked and reset every 3,000–4,000 miles, and worn points cause misfires, reduced power and hard starting. Electronic ignition modules replace the points with a magnetic or optical trigger that has no moving parts to wear, maintains timing accuracy indefinitely, and typically produces a stronger, hotter spark — which is particularly beneficial on a high-displacement V8 like the 383. The conversion is fully reversible if required, and the distributor otherwise remains original.'
      },
      {
        type: 'heading',
        content: 'Choosing an Electronic Ignition System'
      },
      {
        type: 'paragraph',
        content: 'Several manufacturers produce drop-in electronic ignition modules for the Chrysler distributor family. Pertronix is the most established brand for this application and makes three generations of product — the Ignitor I, II and III. All three use the same Hall-effect trigger principle but differ significantly in features and reliability:'
      },
      {
        type: 'list',
        content: [
          'Ignitor I — the original, now dated design. Will work but lacks modern protection features. Not recommended for a new conversion.',
          'Ignitor II — the recommended choice for a street-driven classic. Modern circuit design, significantly better reliability, and critically includes ignition-on protection (the module will not burn out if the ignition is left on without the engine running — a common failure mode of the Ignitor I).',
          'Ignitor III — adds rev limiting and timing curve features more suited to competition or highly modified engines. Unnecessary for a road-going C-V8 and introduces additional complexity without benefit.'
        ]
      },
      {
        type: 'tip',
        content: 'The Pertronix Ignitor II is the sweet spot for the C-V8. Modern, reliable technology without unnecessary complexity. Ensure you order the version for the Chrysler 8-cylinder electronic distributor.'
      },
      {
        type: 'warning',
        content: 'Each Ignitor generation requires a matched Pertronix coil. Do not mix an Ignitor II module with a generic coil or an Ignitor I coil — the resistance specifications differ and the system will not function correctly. Always pair the Ignitor II with the Flame Thrower II coil (0.6 ohm resistance).'
      },
      {
        type: 'heading',
        content: 'Confirming Your Distributor'
      },
      {
        type: 'paragraph',
        content: 'This conversion assumes the car retains its original Chrysler electronic distributor. Most C-V8s still have the factory unit fitted, but it is worth confirming before ordering parts. The original Chrysler distributor can be identified by a small metal tag riveted to the side of the housing, stamped with a part number that can be verified online. If the distributor has previously been replaced with an aftermarket unit, the conversion procedure and applicable Pertronix part numbers may differ.'
      },
      {
        type: 'heading',
        content: 'Parts Required'
      },
      {
        type: 'parts',
        content: [
          {
            name: 'Pertronix Ignitor II Module',
            partNumber: '9CH-181',
            notes: 'For Chrysler 8-cylinder electronic distributor. This is the critical part — verify the part number matches your distributor before ordering.'
          },
          {
            name: 'Pertronix Flame Thrower II Coil',
            partNumber: '45011 (oil-filled) or 45111 (epoxy-filled)',
            notes: 'Must be 0.6 ohm resistance. Oil-filled runs cooler under sustained use; epoxy-filled handles vibration better. Either is suitable for road use.'
          },
          {
            name: 'New vacuum advance unit (optional)',
            partNumber: 'If required',
            notes: 'Worth inspecting while the distributor is out. A cracked or collapsed diaphragm will cause timing issues regardless of ignition type.'
          },
          {
            name: 'Distributor cap and rotor (optional)',
            partNumber: 'Standard Chrysler 383',
            notes: 'Good practice to renew these while the distributor is accessible, particularly if the existing cap shows tracking marks or corrosion.'
          }
        ]
      },
      {
        type: 'costTable',
        content: [
          { item: 'Pertronix Ignitor II module', usd: '$90–120', gbp: '£70–95', eur: '€80–110' },
          { item: 'Flame Thrower II coil',       usd: '$80–120', gbp: '£65–95', eur: '€75–110' },
          { item: 'Vacuum advance unit (if needed)', usd: '$25–50', gbp: '£20–40', eur: '€23–45' },
          { item: 'Cap and rotor (if renewing)',  usd: '$20–35',  gbp: '£16–28', eur: '€18–32' },
          { item: 'Total (module + coil)',        usd: '$170–240', gbp: '£135–190', eur: '€155–220' },
        ]
      },
      {
        type: 'tip',
        content: 'Pertronix products are widely available from automotive performance retailers globally. Summit Racing (summitRacing.com) carries the full range and ships internationally, typically within a week. Ensure any retailer packs the coil carefully — it is fragile in transit.'
      },
      {
        type: 'heading',
        content: 'Installation: On the Car or on the Bench?'
      },
      {
        type: 'paragraph',
        content: 'The Ignitor II module can be fitted with the distributor in situ, which is the simpler approach if the distributor is otherwise in good condition. However, removing the distributor for a bench installation is worthwhile if: the vacuum advance unit needs replacing, the cap and shaft bearings need inspection, or you want to clean and inspect the entire assembly. There are some excellent video resources on YouTube covering this exact Chrysler distributor which are worth watching before starting work.'
      },
      {
        type: 'warning',
        content: 'If you remove the distributor: mark its rotational position on the engine block before removal, photograph the shaft alignment carefully, and do not turn the engine over while the distributor is out. If you do this, the distributor can be refitted in the same position and timing will require only minor tweaking. Failing to mark the position means resetting the ignition timing from scratch, which is significantly more work.'
      },
      {
        type: 'heading',
        content: 'Installation Steps'
      },
      {
        type: 'steps',
        content: [
          'Disconnect the battery negative terminal before starting any ignition work.',
          'If removing the distributor: mark its rotational position on the engine block, photograph the rotor alignment, and note all wire positions on the cap.',
          'Remove the distributor cap, rotor, and points assembly. The points and condenser are no longer required once the Ignitor II is fitted.',
          'Fit the Ignitor II module into the distributor body according to the Pertronix instructions. The module clips onto the breaker plate in place of the points.',
          'Route the two wires from the Ignitor II module out through the distributor body. Red wire to positive (+), black wire to negative (−) on the coil.',
          'Replace the original coil with the Pertronix Flame Thrower II. Observe correct polarity — the coil terminals are marked + and −.',
          'Refit the rotor and distributor cap. If you removed the distributor, refit it aligned with your original marks.',
          'Reconnect the battery. Start the engine and allow it to idle.',
          'Check and adjust ignition timing using a strobe timing light. The base timing specification for the Chrysler 383 is 10° BTDC at 500 rpm — refer to your manual for your specific model.',
          'Road test and recheck timing once the engine is fully warmed up.'
        ]
      },
      {
        type: 'heading',
        content: 'After Installation'
      },
      {
        type: 'paragraph',
        content: 'Once installed, the Ignitor II requires no routine maintenance. There is no points gap to check, no condenser to replace, and no timing drift from mechanical wear. The system should be checked at the same intervals as any other ignition component — cap, rotor, and plug leads — but the module itself should last the life of the vehicle under normal use. If the engine is left with the ignition on but not running, the Ignitor II\'s built-in protection circuit prevents the module from burning out — a significant improvement over earlier electronic ignition designs.'
      },
      {
        type: 'tip',
        content: 'Other electronic ignition brands are available for the Chrysler distributor, including Crane Cams (now discontinued but units still available second-hand) and various generic "points replacement" modules sold online. These may be suitable for the application but have not been specifically verified for the C-V8. The Pertronix Ignitor II represents a well-documented, proven choice for this engine. Further options may be added to this guide as they are evaluated by C-V8 owners.'
      },
      {
        type: 'heading',
        content: 'Further Resources'
      },
      {
        type: 'list',
        content: [
          'Pertronix website (pertronix.com) — full technical specifications, installation guides and FAQ for all Ignitor products.',
          'YouTube — search "Pertronix Ignitor II Chrysler 383 installation" for video guides covering this exact distributor.',
          'JOC C-V8 Tech Forum — the Jensen Owners Club technical forum has detailed threads on ignition conversion from owners who have carried out this modification.',
          'Ignition timing specifications for your model are in the manual — Mk III p. 29–30, base manual p. 5–6.'
        ]
      }
    ]
  }
];
