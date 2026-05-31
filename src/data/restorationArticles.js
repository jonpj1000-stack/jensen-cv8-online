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
  { id: 'ignition',   label: 'Ignition & Electrics', emoji: '⚡' },
  { id: 'engine',     label: 'Engine',               emoji: '🔧' },
  { id: 'fuel',       label: 'Fuel System',           emoji: '⛽' },
  { id: 'suspension', label: 'Suspension',            emoji: '⚙️' },
  { id: 'body',       label: 'Body & Paint',          emoji: '🎨' },
  { id: 'interior',   label: 'Interior',              emoji: '🪑' },
  { id: 'suppliers',  label: 'Parts & Suppliers',     emoji: '📦' },
];

export const restorationArticles = [
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
