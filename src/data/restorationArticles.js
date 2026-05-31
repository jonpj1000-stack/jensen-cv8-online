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
  { id: 'known-issues', label: 'Known Issues',          emoji: '⚠️' },
  { id: 'ignition',     label: 'Ignition & Electrics',  emoji: '⚡' },
  { id: 'engine',       label: 'Engine',                emoji: '🔧' },
  { id: 'fuel',         label: 'Fuel System',           emoji: '⛽' },
  { id: 'suspension',   label: 'Suspension',            emoji: '⚙️' },
  { id: 'body',         label: 'Body & Paint',          emoji: '🎨' },
  { id: 'interior',     label: 'Interior',              emoji: '🪑' },
  { id: 'suppliers',    label: 'Parts & Suppliers',     emoji: '📦' },
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

  // ── Upgrade & Restoration Guides ────────────────────────────────────────────
  {
    id: 'electronic-ignition-conversion',
    category: 'ignition',
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
