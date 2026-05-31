export const repairCategories = [
  { id: 'engine',     label: 'Engine',                emoji: '🔧' },
  { id: 'cooling',    label: 'Cooling',               emoji: '🌡️' },
  { id: 'fuel',       label: 'Fuel System',           emoji: '⛽' },
  { id: 'ignition',   label: 'Ignition',              emoji: '⚡' },
  { id: 'electrical', label: 'Electrical',            emoji: '💡' },
  { id: 'brakes',     label: 'Brakes',                emoji: '🛑' },
  { id: 'suspension', label: 'Suspension & Steering', emoji: '⚙️' },
  { id: 'service',    label: 'Service Schedule',      emoji: '📋' },
  { id: 'body',       label: 'Body & Interior',       emoji: '🚗' },
];

export const repairCards = [
  // ── ENGINE ──────────────────────────────────────────────────────────────────
  {
    id: 'engine-oil-change',
    category: 'engine',
    title: 'Engine Oil & Filter Change',
    subtitle: 'Sump drain, filter replacement and refill',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The Jensen C-V8 uses a Chrysler 383 cu in V8 engine. The oil and filter should be changed every 4,000 miles or 3 months, whichever comes first. Use SAE 20W/50 multigrade oil. The sump capacity is approximately 8 pints including the filter.',
    symptoms: [],
    tools: [
      'Drain plug spanner / 9/16" socket',
      'Oil filter strap wrench',
      'Oil drain tray (at least 9 pint capacity)',
      'Funnel',
      'Torque wrench',
      'Clean rags'
    ],
    parts: [
      'Engine oil — SAE 20W/50 multigrade (approx. 8 pints)',
      'Replaceable oil filter element',
      'Drain plug copper washer (if worn)'
    ],
    procedure: [
      'Warm the engine to operating temperature, then switch off and allow 5 minutes for oil to drain back.',
      'Place the drain tray beneath the sump drain plug on the underside of the engine.',
      'Remove the drain plug using a 9/16" socket and allow the oil to drain completely.',
      'Remove the oil filter. On the Mk III the filter is accessible from above; on earlier models access is from below.',
      'Wipe the filter seating face clean and smear a little fresh oil on the new filter gasket.',
      'Install the new filter — hand tighten only, then a further 3/4 turn with the strap wrench.',
      'Refit the drain plug with a new copper washer. Tighten firmly — do not overtighten.',
      'Refill with fresh SAE 20W/50 oil through the filler cap on the rocker cover. Add approximately 7 pints initially.',
      'Start the engine and run for 2 minutes. Check the filter and drain plug for leaks.',
      'Switch off and wait 5 minutes, then check the dipstick. Top up to the MAX mark if required.',
      'Reset the oil change reminder and record the mileage.'
    ],
    checklist: [
      'Check drain plug is fully tightened and not leaking',
      'Check oil filter is tight and dry — no seepage',
      'Check oil level is between MIN and MAX on dipstick',
      'Check there is no oil on the exhaust — wipe any spillage',
      'Record date, mileage and oil brand used'
    ],
    manualRefs: [
      { label: 'Lubrication & Maintenance', model: 'base', pages: [10, 11] },
      { label: 'Engine Lubrication System', model: 'mk3', pages: [19] },
      { label: 'Service Lubrication Schedule', model: 'mk3', pages: [55, 56, 57, 58] }
    ],
    wiringRef: null,
  },

  {
    id: 'engine-tune-up',
    category: 'engine',
    title: 'Engine Tune-Up',
    subtitle: 'Spark plugs, contact points, timing and carburetor',
    models: ['all'],
    difficulty: 'moderate',
    overview: 'A full tune-up on the C-V8 covers spark plug renewal, contact breaker point replacement and gap setting, ignition timing and carburetor idle adjustment. This should be carried out every 12,000 miles. The Chrysler 383 uses Champion N10Y plugs with a gap of 0.025".',
    symptoms: [
      'Rough idle or misfiring',
      'Poor fuel economy',
      'Hard starting, especially when cold',
      'Lack of power or hesitation on acceleration',
      'Black sooty exhaust smoke'
    ],
    tools: [
      'Spark plug spanner (13/16")',
      'Feeler gauges',
      'Timing light (stroboscope)',
      'Screwdrivers (flat and Phillips)',
      'Contact breaker point file or fine emery cloth',
      'Distributor spanner'
    ],
    parts: [
      'Spark plugs — Champion N10Y (set of 8)',
      'Contact breaker points',
      'Condenser (renew with points)',
      'Distributor cap (inspect, replace if cracked)',
      'HT leads (inspect)'
    ],
    procedure: [
      'Allow the engine to cool before beginning work.',
      'Remove and inspect all 8 spark plugs. Note the colour of each — light tan/grey is correct. Black sooty deposits indicate rich mixture; white/blistered indicates overheating.',
      'Set plug gap to 0.025" (0.635mm) using feeler gauges. The gauge should drag slightly when pulled through the gap.',
      'Refit plugs by hand to avoid cross-threading, then tighten with the plug spanner — firm but do not overtighten.',
      'Remove the distributor cap and rotor arm. Inspect the cap for cracks, carbon tracking or corroded contacts.',
      'Examine the contact breaker points. If pitted or worn, replace the complete point set and condenser.',
      'Set the contact breaker gap to 0.014–0.016" (0.35–0.40mm) using feeler gauges with the rubbing block on the peak of the cam lobe.',
      'Refit the rotor arm and cap. Reconnect all HT leads ensuring correct firing order: 1-8-4-3-6-5-7-2.',
      'Start the engine and connect the timing light. Static timing should be 5° BTDC; check against specifications for the model.',
      'With the engine at idle (600 rpm), check the timing mark on the crankshaft pulley aligns with the correct pointer.',
      'Adjust timing if necessary by slackening the distributor clamp bolt and rotating the distributor body until the mark aligns.',
      'Tighten the clamp bolt and recheck timing under a blip of throttle to confirm advance is working.',
      'Finally, carry out the carburetor idle adjustment procedure.'
    ],
    checklist: [
      'Check all 8 plug leads are firmly seated on plugs and distributor cap',
      'Check distributor cap for cracks or tracking marks',
      'Verify timing mark aligns at idle with timing light',
      'Check contact breaker gap with feeler gauge — 0.014–0.016"',
      'Confirm idle speed is 600 rpm in neutral',
      'Check for smooth throttle response — no flat spots'
    ],
    manualRefs: [
      { label: 'Specifications & Dimensions', model: 'base', pages: [5, 6] },
      { label: 'Ignition System', model: 'mk3', pages: [29, 30] },
      { label: 'Service Lubrication', model: 'mk3', pages: [55, 56] }
    ],
    wiringRef: 'ignition',
  },

  {
    id: 'valve-clearance',
    category: 'engine',
    title: 'Valve Clearance Check',
    subtitle: 'Tappet adjustment on the Chrysler 383 V8',
    models: ['all'],
    difficulty: 'advanced',
    overview: 'Valve clearances (tappet clearances) on the hydraulic-lifter Chrysler 383 are self-adjusting under normal conditions and do not require periodic adjustment. However, if a persistent ticking is heard from the valve train, it may indicate a collapsed or stuck hydraulic lifter. This procedure covers inspection and bleed-down testing.',
    symptoms: [
      'Persistent clicking or ticking from the top of the engine',
      'Noise that does not clear after warming up',
      'Noise that is speed-related and rhythmic'
    ],
    tools: [
      'Rocker cover gasket set',
      'Torque wrench',
      'Socket set',
      'Clean drain tray',
      'Engine flush oil (if suspected sludge)'
    ],
    parts: [
      'Rocker cover gaskets (set of 2)',
      'Hydraulic valve lifters (if defective)'
    ],
    procedure: [
      'Allow the engine to cool. Remove both rocker covers after slackening all retaining bolts.',
      'With the engine running at idle, observe each rocker arm for excessive movement or obvious lack of tension.',
      'A hydraulic lifter that has bled down will show excessive rocker arm travel. A stuck-open lifter will have no movement.',
      'If a collapsed lifter is suspected, top up oil to MAX, run the engine at fast idle (1200 rpm) for 5 minutes to allow lifters to pump up.',
      'If ticking persists, the suspect lifter must be removed, cleaned or replaced. This requires camshaft access — a workshop job.',
      'Before refitting rocker covers, clean all gasket faces and fit new rocker cover gaskets.',
      'Refit rocker covers and tighten bolts evenly in a cross pattern to approximately 25 in/lb — do not overtighten.',
      'Start the engine and check for oil leaks from rocker cover gaskets.'
    ],
    checklist: [
      'Check oil level is at MAX before running engine',
      'Check ticking disappears after running at fast idle',
      'Check rocker covers are not leaking after refitting',
      'Check oil pressure gauge shows normal reading (30–40 psi at idle)'
    ],
    manualRefs: [
      { label: 'Specifications & Dimensions', model: 'base', pages: [5, 6] },
      { label: 'Engine Lubrication System', model: 'mk3', pages: [19] }
    ],
    wiringRef: null,
  },

  {
    id: 'running-in',
    category: 'engine',
    title: 'Running-In Procedure',
    subtitle: 'New engine and post-rebuild break-in',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The Jensen C-V8 manual specifies a careful running-in procedure for new or rebuilt engines. Varying engine speed during the first 500 miles allows bearing surfaces to bed in correctly. Avoid sustained high speeds and heavy loads until 1,000 miles have been covered.',
    symptoms: [],
    tools: [],
    parts: [
      'Engine oil — SAE 20W/50 (for oil change at 500 miles)',
      'Oil filter'
    ],
    procedure: [
      'For the first 500 miles, do not exceed 50 mph (3,200 rpm). Vary the engine speed frequently — avoid sustained cruising at one speed.',
      'Do not use full throttle at any stage during the first 500 miles.',
      'Avoid towing or carrying heavy loads during running-in.',
      'At 500 miles: drain and refill the engine oil and replace the filter. This removes metallic particles from the initial bed-in.',
      'From 500 to 1,000 miles, speed may be gradually increased up to 70 mph. Still avoid sustained full-throttle use.',
      'At 1,000 miles: carry out the standard 1,000-mile service — check all fluid levels, tyre pressures and lubrication points.',
      'After 1,000 miles the engine can be used normally. Performance will continue to improve up to approximately 5,000 miles.'
    ],
    checklist: [
      'Check engine oil level daily during running-in period',
      'Check coolant level after first run and again at 200 miles',
      'Change oil and filter at 500 miles',
      'Record mileage at each check'
    ],
    manualRefs: [
      { label: 'Starting, Gearbox & Towing', model: 'base', pages: [7, 8, 9] },
      { label: 'Starting Up & Running', model: 'mk3', pages: [15, 16, 17, 18] },
      { label: 'Lubrication & Maintenance', model: 'base', pages: [10, 11] }
    ],
    wiringRef: null,
  },

  // ── COOLING ─────────────────────────────────────────────────────────────────
  {
    id: 'overheating-diagnosis',
    category: 'cooling',
    title: 'Overheating Diagnosis',
    subtitle: 'Finding the cause of high coolant temperature',
    models: ['all'],
    difficulty: 'moderate',
    overview: 'Overheating on the C-V8 is most commonly caused by low coolant level, a failed thermostat, a blocked radiator, a broken or slipping fan belt, or a failed water pump. The Mk III uses electric cooling fans in addition to the engine-driven fan. Work through the checks systematically before dismantling anything.',
    symptoms: [
      'Temperature gauge reading in the red sector',
      'Steam from under the bonnet',
      'Coolant loss or puddles under the car',
      'Boiling/bubbling sounds from the engine bay',
      'Heater output suddenly hot then cold'
    ],
    tools: [
      'Radiator pressure tester',
      'Multimeter',
      'Hose clamp pliers',
      'Torchlight for inspection'
    ],
    parts: [
      'Coolant (water + anti-freeze 50/50)',
      'Thermostat (82°C)',
      'Radiator top and bottom hoses',
      'Fan belt'
    ],
    procedure: [
      'Do not open the radiator cap when the engine is hot — wait at least 30 minutes after switching off.',
      'Check the coolant level in the radiator and header tank. If low, top up and check for leaks.',
      'Inspect all hoses and clips for leaks or swelling. Squeeze the hoses — they should feel firm, not spongy or hard.',
      'Check the fan belt tension. The belt should have approximately 1/2" (12mm) deflection under moderate finger pressure at the midpoint of the longest run. A slack belt will also squeal under load.',
      'Start the engine from cold and observe the temperature gauge. The thermostat should open (gauge rises steadily then stabilises) at approximately 82°C.',
      'If the gauge rises continuously to the red zone, suspect a stuck-closed thermostat. Remove and test it in boiling water — it should open fully.',
      'Check the electric fans operate (Mk III): they should cut in when the coolant temperature reaches approximately 90°C.',
      'With the engine fully warm, feel both radiator hoses. The top hose should be hot; the bottom hose cooler. If both are the same temperature, suspect a blocked radiator.',
      'Pressure-test the cooling system using a radiator pressure tester — hold 14 psi for 10 minutes with no drop.',
      'If the system loses pressure with no visible external leak, suspect a failed head gasket — look for white exhaust smoke and check for oil in the coolant.'
    ],
    checklist: [
      'Check coolant level — cold, with engine off',
      'Check fan belt tension — 1/2" deflection at midpoint',
      'Check all hose clips are tight',
      'Confirm thermostat opens correctly — gauge stabilises',
      'Check Mk III electric fans operate when hot',
      'Check for white exhaust smoke (possible head gasket)'
    ],
    manualRefs: [
      { label: 'Cooling, Heating & Rear Axle', model: 'base', pages: [20, 21] },
      { label: 'Cooling System', model: 'mk3', pages: [31, 32] }
    ],
    wiringRef: 'cooling',
  },

  {
    id: 'coolant-service',
    category: 'cooling',
    title: 'Coolant System Service',
    subtitle: 'Drain, flush and refill with fresh antifreeze',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The cooling system should be flushed and refilled with fresh antifreeze mixture every 2 years or 20,000 miles. The correct mixture is 50% water and 50% ethylene glycol antifreeze, providing protection to approximately -36°C and raising the boiling point. Total system capacity is approximately 20 pints.',
    symptoms: [],
    tools: [
      'Drain plug spanner',
      'Funnel and measuring jug',
      'Hose clamp pliers',
      'Hosepipe for flushing'
    ],
    parts: [
      'Antifreeze — ethylene glycol (approx. 10 pints)',
      'Distilled water (10 pints)',
      'Radiator/hose clips if worn'
    ],
    procedure: [
      'Allow the engine to cool completely before draining.',
      'Place a drain tray beneath the radiator. Remove the bottom hose from the radiator outlet or open the drain tap at the base of the radiator.',
      'Remove the radiator filler cap to allow air in and speed draining.',
      'Once drained, reconnect the hose or close the drain tap.',
      'Flush the system by filling with clean water via the filler and running the engine for 10 minutes with the heater on full heat to flush the heater matrix.',
      'Drain the flush water completely.',
      'Prepare the coolant mixture: 10 pints of antifreeze plus 10 pints of clean water (distilled or de-ionised preferred).',
      'Pour the mixture into the radiator and header/expansion tank slowly to avoid airlocks.',
      'Start the engine with the filler cap off and run until the thermostat opens. Top up as the level drops.',
      'Refit the filler cap. Check all hoses and clips for leaks after the first drive.'
    ],
    checklist: [
      'Check antifreeze concentration with a hydrometer or test strip',
      'Check all hose clips are tight after refilling',
      'Check coolant level in header tank when cold — should be between MIN and MAX',
      'Verify no leaks after first drive'
    ],
    manualRefs: [
      { label: 'Cooling, Heating & Rear Axle', model: 'base', pages: [20, 21] },
      { label: 'Cooling System', model: 'mk3', pages: [31, 32] }
    ],
    wiringRef: null,
  },

  {
    id: 'fan-belt',
    category: 'cooling',
    title: 'Fan Belt Inspection & Renewal',
    subtitle: 'Drive belt condition, tension and replacement',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The fan belt on the C-V8 drives the alternator/dynamo, water pump and cooling fan from the crankshaft pulley. It should be inspected every 4,000 miles. A worn or slipping belt will cause charging failure and overheating. Tension: 1/2" deflection at the midpoint under firm thumb pressure.',
    symptoms: [
      'Battery not charging / ammeter discharging',
      'Overheating',
      'Squealing from the front of the engine under load',
      'Visible fraying, cracking or glazing on the belt'
    ],
    tools: [
      'Spanner set',
      'Ruler or belt tension gauge',
      'Pry bar for tensioning (use carefully)'
    ],
    parts: [
      'Fan belt (V-belt — measure old belt if unsure of size)'
    ],
    procedure: [
      'With the engine off and cold, press down on the longest run of the fan belt at its midpoint. Correct deflection is approximately 1/2" (12mm) under firm thumb pressure.',
      'Inspect the belt for cracks, fraying, glazing (shiny surface) or oil contamination. A glazed belt will slip even if the tension is correct.',
      'To replace the belt: slacken the alternator/dynamo pivot bolt and adjuster bolt. Pivot the alternator/dynamo towards the engine to release tension.',
      'Slip the old belt off all three pulleys: crankshaft, water pump and alternator/dynamo.',
      'Loop the new belt over the crankshaft pulley, then the water pump, then the alternator/dynamo.',
      'Pivot the alternator/dynamo outwards to tension the belt. Aim for 1/2" deflection.',
      'Tighten the adjuster bolt first, then the pivot bolt.',
      'Start the engine and run for 5 minutes. Re-check tension — new belts stretch slightly during the first few minutes of running.',
      'Readjust if necessary.'
    ],
    checklist: [
      'Check tension — 1/2" deflection mid-span',
      'Check belt surface — no cracks, glazing or oil contamination',
      'Check all three pulleys are aligned — no edge wear on belt',
      'Confirm alternator is charging after replacement'
    ],
    manualRefs: [
      { label: 'Cooling, Heating & Rear Axle', model: 'base', pages: [20, 21] },
      { label: 'Cooling System', model: 'mk3', pages: [31, 32] }
    ],
    wiringRef: null,
  },

  // ── FUEL ────────────────────────────────────────────────────────────────────
  {
    id: 'carb-idle',
    category: 'fuel',
    title: 'Carburettor Idle Adjustment',
    subtitle: 'Carter AFB idle mixture and idle speed setting',
    models: ['all'],
    difficulty: 'moderate',
    overview: 'The Jensen C-V8 is fitted with a Carter AFB (Aluminum Four-Barrel) carburettor. The idle mixture and idle speed screws are accessible from outside the carburettor. The target idle speed is 600 rpm in neutral. The Mk III manual provides detailed adjustment procedures including the secondary throttle and accelerator pump.',
    symptoms: [
      'Rough or unstable idle',
      'Engine stalls at idle or when coming to a stop',
      'Black smoke from exhaust (rich mixture)',
      'Popping on overrun (lean mixture)',
      'High fuel consumption'
    ],
    tools: [
      'Tachometer / rev counter',
      'Flat-bladed screwdriver',
      'Vacuum gauge (optional but helpful)'
    ],
    parts: [],
    procedure: [
      'Warm the engine to full operating temperature — at least 10 minutes of running.',
      'Locate the idle mixture screws on the carburettor body — there are two, one on each side of the primary throttle body.',
      'Turn each mixture screw gently clockwise until it just seats — count and record the number of turns. Do not tighten hard as the tapered tip is easily damaged.',
      'Return each screw to the recorded position as a baseline.',
      'Adjust the idle speed screw (on the throttle linkage) to give 600 rpm on the tachometer.',
      'Turn the first idle mixture screw out (anti-clockwise) by 1/8 turn at a time, pausing after each adjustment to allow the idle to stabilise. The idle speed will rise as mixture improves.',
      'Repeat for the second mixture screw. Adjust alternately.',
      'Once maximum idle speed is reached, readjust the idle speed screw back to 600 rpm.',
      'Fine-tune mixture screws until the smoothest idle at 600 rpm is achieved.',
      'Check idle quality with the choke fully off and all electrical loads on (lights, heater).',
      'Road test: check for smooth pull-away, no hesitation or rich stumble.'
    ],
    checklist: [
      'Check idle speed is 600 rpm in neutral',
      'Check engine pulls cleanly from idle without stumble',
      'Check choke plate is fully open when engine is hot',
      'Check throttle linkage moves freely to full throttle and returns to idle',
      'Check air filter is fitted — do not adjust with it removed'
    ],
    manualRefs: [
      { label: 'Fuel System & Carburettor', model: 'base', pages: [15, 16, 17] },
      { label: 'Fuel System & Carburettor', model: 'mk3', pages: [23, 24, 25, 26, 27] }
    ],
    wiringRef: null,
  },

  {
    id: 'fuel-filter',
    category: 'fuel',
    title: 'Fuel Filter Service',
    subtitle: 'Inline filter and carburettor inlet strainer',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The C-V8 fuel system has a replaceable fuel filter in the line between the fuel pump and carburettor. There is also a small strainer at the carburettor fuel inlet union. Both should be inspected at 12,000 miles. A blocked filter causes fuel starvation, particularly at high speed.',
    symptoms: [
      'Engine cuts out at high speed or under load',
      'Fuel starvation on long climbs',
      'Flat spots on acceleration',
      'Engine runs well at idle but poorly at speed'
    ],
    tools: [
      'Spanners',
      'Small drain tray',
      'Petrol-resistant gloves',
      'Clean cloths'
    ],
    parts: [
      'Inline fuel filter',
      'Fibre washers for carburettor inlet union'
    ],
    procedure: [
      'Ensure ignition is off and the engine is cool. Have a fire extinguisher accessible.',
      'Locate the inline fuel filter in the engine bay between the fuel pump and carburettor.',
      'Place a small tray under the filter connections to catch spilled fuel.',
      'Slacken the hose clips or unions at each end of the filter and remove it.',
      'Fit the new filter, observing the flow direction arrow on the body.',
      'Tighten the clips or unions firmly.',
      'Also remove the fuel inlet union on the carburettor and clean the brass gauze strainer inside with a petrol-dampened cloth.',
      'Refit the inlet union with new fibre washers and tighten firmly.',
      'Run the engine and check for leaks at both fuel connections.'
    ],
    checklist: [
      'Check new filter is fitted in the correct flow direction',
      'Check no fuel leaks at filter ends after starting',
      'Check carburettor inlet union is tight — no seepage',
      'Check engine pulls strongly at full throttle on road test'
    ],
    manualRefs: [
      { label: 'Fuel System & Carburettor', model: 'base', pages: [15, 16] },
      { label: 'Fuel System & Carburettor', model: 'mk3', pages: [23, 24, 25] }
    ],
    wiringRef: null,
  },

  {
    id: 'air-cleaner',
    category: 'fuel',
    title: 'Air Cleaner Service',
    subtitle: 'Air filter element replacement and housing clean',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The air cleaner on the C-V8 uses a dry paper element which should be replaced every 12,000 miles or annually, whichever comes first. In dusty conditions more frequent replacement is needed. Never run the engine without the air cleaner fitted.',
    symptoms: [
      'Rich running / black smoke (severely blocked filter)',
      'Slightly higher fuel consumption',
      'Visible dirt or discolouration on the element'
    ],
    tools: [
      'Wing nut spanner or by hand',
      'Clean cloths or brush'
    ],
    parts: [
      'Air filter element (paper element for Carter AFB)',
    ],
    procedure: [
      'Remove the wing nut securing the air cleaner lid.',
      'Lift off the lid and extract the paper filter element.',
      'Clean the inside of the air cleaner housing with a damp cloth. Do not allow dirt to fall into the carburettor.',
      'Tap the old element gently to dislodge loose dust and inspect by holding it up to a light. If blocked or damaged, replace it.',
      'Fit the new element and refit the lid and wing nut.',
      'Check the crankcase breather hose from the rocker cover to the air cleaner is securely connected.'
    ],
    checklist: [
      'Check element is correctly seated in the housing',
      'Check lid is secured with wing nut',
      'Check crankcase breather hose is connected',
      'Check underside of lid for oil deposits — excessive oil indicates crankcase breathing problems'
    ],
    manualRefs: [
      { label: 'Fuel System & Carburettor', model: 'base', pages: [15, 16] },
      { label: 'Fuel System & Carburettor', model: 'mk3', pages: [23, 24, 25, 26, 27] }
    ],
    wiringRef: null,
  },

  // ── IGNITION ─────────────────────────────────────────────────────────────────
  {
    id: 'spark-plugs',
    category: 'ignition',
    title: 'Spark Plug Service',
    subtitle: 'Removal, inspection and gap setting',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The C-V8 uses eight Champion N10Y spark plugs (or equivalent) with a gap of 0.025". Plugs should be inspected at 6,000 miles and replaced at 12,000 miles. The plug condition is a valuable diagnostic indicator of engine health.',
    symptoms: [
      'Rough idle or misfire on one or more cylinders',
      'Hard starting',
      'Poor fuel economy'
    ],
    tools: [
      'Spark plug spanner (13/16")',
      'Extension bar',
      'Feeler gauges or plug gapping tool',
      'Torque wrench',
      'Wire brush'
    ],
    parts: [
      'Spark plugs — Champion N10Y x8 (or NGK BP6ES equivalent)',
      'Anti-seize compound (optional)'
    ],
    procedure: [
      'Allow the engine to cool — removing plugs from a hot aluminium head can damage threads.',
      'Remove HT leads by pulling the boot, not the wire. Label leads if unsure of routing.',
      'Clean around each plug with compressed air or a brush before removal to prevent dirt entering the cylinder.',
      'Unscrew each plug and examine the firing end.',
      'Normal appearance: light tan or grey insulator. Rich: black sooty. Lean: white or blistered. Oily: valve stem seals or rings worn.',
      'Clean any serviceable plugs with a wire brush. Do not sandblast as abrasive gets into the engine.',
      'Set the gap on new or cleaned plugs to 0.025" (0.635mm). Adjust by bending the outer electrode only.',
      'Apply a small amount of anti-seize to the threads of new plugs if the heads are aluminium.',
      'Start each plug by hand to avoid cross-threading. Tighten to approximately 25 ft/lb (new plugs) or 15 ft/lb (reused).',
      'Refit HT leads ensuring correct firing order: 1-8-4-3-6-5-7-2 (Chrysler 383 firing order).'
    ],
    checklist: [
      'Check plug gap is 0.025" — use wire type feeler gauge',
      'Check all HT leads are firmly pushed home on plugs',
      'Check firing order is correct if leads were removed',
      'Check no traces of coolant in any plug bore (possible head gasket leak)'
    ],
    manualRefs: [
      { label: 'Specifications & Dimensions', model: 'base', pages: [5, 6] },
      { label: 'Ignition', model: 'mk3', pages: [29, 30] }
    ],
    wiringRef: 'ignition',
  },

  {
    id: 'contact-breaker',
    category: 'ignition',
    title: 'Contact Breaker Points',
    subtitle: 'Inspection, setting and replacement',
    models: ['all'],
    difficulty: 'moderate',
    overview: 'The distributor uses conventional contact breaker points and a condenser. The contact gap must be set to 0.014–0.016" with the rubbing block on the peak of the distributor cam. Points should be replaced every 12,000 miles and the condenser renewed with them. A worn condenser causes point burning and erratic advance.',
    symptoms: [
      'Engine misfire especially at high speed',
      'Difficulty starting',
      'Erratic ignition advance (hunting idle)',
      'Visible pitting or burning on contact faces'
    ],
    tools: [
      'Feeler gauges',
      'Screwdrivers',
      'Spanner for distributor clamp',
      'Low-voltage test light (optional)'
    ],
    parts: [
      'Contact breaker point set',
      'Condenser'
    ],
    procedure: [
      'Remove the distributor cap by unclipping or unscrewing the retaining clips. Set it aside without disconnecting the HT leads.',
      'Remove the rotor arm by pulling it straight off.',
      'Examine the contact faces. Slight pitting is normal; severe burning or a pip-and-crater pattern means the condenser has failed.',
      'To replace: remove the retaining screw and disconnect the condenser wire from the contact set. Lift out the points.',
      'Fit the new condenser, routing its wire clear of the rotor arm.',
      'Fit the new contact set without tightening the adjustment screw fully.',
      'Turn the engine over (by hand or using the starter in short bursts with the ignition off) until the rubbing block rests on a peak of the cam lobe — the points should be at maximum opening.',
      'Insert feeler gauge 0.015" into the contact gap. It should be a smooth drag fit. Adjust the contact base plate with the screwdriver slot until correct.',
      'Tighten the adjustment screw and recheck the gap — it often moves slightly when tightened.',
      'Refit the rotor arm and cap. Set the ignition timing as described in the Ignition Timing card.'
    ],
    checklist: [
      'Check contact gap is 0.014–0.016" with rubbing block on cam peak',
      'Check condenser wire is clear of rotor arm rotation path',
      'Check rotor arm is firmly seated',
      'Check cap is clipped or screwed down firmly',
      'Verify ignition timing after fitting new points'
    ],
    manualRefs: [
      { label: 'Specifications & Dimensions', model: 'base', pages: [5, 6] },
      { label: 'Ignition', model: 'mk3', pages: [29, 30] }
    ],
    wiringRef: 'ignition',
  },

  {
    id: 'ignition-timing',
    category: 'ignition',
    title: 'Ignition Timing',
    subtitle: 'Static and dynamic timing with a stroboscope',
    models: ['all'],
    difficulty: 'moderate',
    overview: 'Correct ignition timing is critical for performance and preventing detonation (pinking) on the Chrysler 383. The Mk III manual specifies the timing and notes the use of a ballast resistor in the ignition circuit. Dynamic timing should be checked with a stroboscope at 600 rpm idle. The Mk III uses a distributor with vacuum and centrifugal advance.',
    symptoms: [
      'Pinking or detonation under load',
      'Lack of power',
      'Poor fuel economy',
      'Overheating (over-advanced timing causes heat)',
      'Hard starting (retarded timing)'
    ],
    tools: [
      'Stroboscopic timing light',
      'Distributor clamp spanner',
      'Tachometer'
    ],
    parts: [],
    procedure: [
      'Locate the timing marks on the crankshaft pulley and the timing cover pointer. Clean them with a cloth and mark them with white paint or chalk for visibility.',
      'Connect the timing light to the Number 1 cylinder HT lead (front right on the Chrysler V8) following the timing light manufacturer\'s instructions.',
      'Start the engine and warm to operating temperature.',
      'Set idle speed to 600 rpm using the tachometer.',
      'Disconnect the vacuum advance pipe from the distributor and plug it.',
      'Point the timing light at the crankshaft pulley. The mark should align with the correct notch on the timing scale.',
      'Refer to the specifications: the base manual shows timing for Mk I/II; the Mk III manual shows the Mk III specification.',
      'If adjustment is needed: slacken the distributor clamp bolt (single bolt at the base of the distributor).',
      'Rotate the distributor body slowly — clockwise to retard, anti-clockwise to advance (standing at the front of the car facing the engine).',
      'When the timing mark aligns, hold the distributor and tighten the clamp bolt. Recheck timing.',
      'Reconnect the vacuum advance pipe. With the vacuum connected the timing mark should advance further — this confirms the vacuum advance is working.',
      'Blip the throttle sharply — timing should advance immediately and return to base on release, confirming centrifugal advance.'
    ],
    checklist: [
      'Check timing marks are clean and visible',
      'Check idle speed is 600 rpm when measuring timing',
      'Check vacuum pipe is disconnected during base timing check',
      'Confirm centrifugal advance works — timing advances with rpm',
      'Confirm vacuum advance works — timing advances when pipe reconnected',
      'Check for pinking on road test under load'
    ],
    manualRefs: [
      { label: 'Specifications & Dimensions', model: 'base', pages: [5, 6] },
      { label: 'Ignition', model: 'mk3', pages: [29, 30] }
    ],
    wiringRef: 'ignition',
  },

  // ── ELECTRICAL ───────────────────────────────────────────────────────────────
  {
    id: 'charging-diagnosis',
    category: 'electrical',
    title: 'Charging System Diagnosis',
    subtitle: 'Alternator, dynamo, regulator and battery checks',
    models: ['all'],
    difficulty: 'moderate',
    overview: 'Early C-V8 models (Mk I/II) use a Lucas dynamo and control box. The Mk III uses a Lucas alternator. Both charge through a positive earth system on early cars and negative earth on later ones. The ammeter on the dashboard is a useful diagnostic tool. A discharging reading at speed indicates a charging fault.',
    symptoms: [
      'Ammeter showing constant discharge',
      'Battery going flat',
      'Warning light not extinguishing after starting',
      'Dim lights that fade at idle',
      'Battery requiring frequent top-up of water'
    ],
    tools: [
      'Multimeter (volts/amps)',
      'Test light',
      'Cleaning brush and emery cloth'
    ],
    parts: [
      'Fan belt (if slipping)',
      'Battery (if failed)',
      'Brushes for alternator/dynamo'
    ],
    procedure: [
      'Check the fan belt tension first — a slipping belt is the most common cause of charging failure.',
      'Check battery voltage with the engine off: should be 12.0–12.6V for a charged battery.',
      'Start the engine and rev to approximately 2,000 rpm. Battery voltage should rise to 13.8–14.4V for negative earth systems.',
      'If voltage does not rise, the fault is in the charging circuit — check the alternator or dynamo output first.',
      'Check all connections at the battery terminals, alternator/dynamo and earthing point. Corrosion and loose connections are common.',
      'For the Lucas alternator (Mk III): check the warning light circuit — the light itself provides the initial field excitation. If the bulb has blown, the alternator will not charge.',
      'Inspect the alternator/dynamo brushes. Worn brushes that no longer make contact will stop charging.',
      'On dynamo-equipped cars (Mk I/II): check the voltage regulator control box — contacts may need cleaning. This requires specialist knowledge.',
      'Test the battery under load using a battery tester. A battery that cannot hold voltage under load needs replacement.'
    ],
    checklist: [
      'Check fan belt is tight and not slipping',
      'Check battery terminal connections are clean and tight',
      'Check charging voltage is 13.8–14.4V at 2,000 rpm',
      'Check charge warning light goes out when engine starts',
      'Check earth connections at battery negative and engine block'
    ],
    manualRefs: [
      { label: 'Electrical Equipment', model: 'base', pages: [12, 13] },
      { label: 'Electrical System', model: 'mk3', pages: [47, 48] }
    ],
    wiringRef: 'charging',
  },

  {
    id: 'fuse-identification',
    category: 'electrical',
    title: 'Fuse Identification',
    subtitle: 'Fuse box location, ratings and circuit mapping',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The Jensen C-V8 fuse box is located in the engine compartment. The base manual covers the Mk I/II fuse arrangement; the Mk III has a different fuse layout with different amperage ratings. Always replace a blown fuse with one of the correct rating — fitting a higher-rated fuse can cause wiring fire.',
    symptoms: [
      'Electrical circuit completely dead',
      'Lights not working on one circuit',
      'Horn, wipers or heater not working',
      'Specific accessories dead'
    ],
    tools: [
      'Fuse puller or small flat screwdriver',
      'Test light or multimeter'
    ],
    parts: [
      'Fuse set — various ratings (check the manual for the correct rating for each circuit)'
    ],
    procedure: [
      'Locate the fuse box in the engine compartment. On the Mk I/II it is on the bulkhead; on the Mk III it is also near the bulkhead.',
      'Identify the blown fuse — it will have a visibly broken wire inside the glass tube. Some failures are only visible when the fuse is removed and held up to the light.',
      'Identify the circuit rating from the label on the fuse box cover or the manual before replacing.',
      'Before fitting a replacement, use a test light to check for a fault in the circuit — if a new fuse blows immediately there is a short circuit that must be traced.',
      'If the circuit is clear, fit a new fuse of the exact same rating.',
      'Test the circuit and check the new fuse has not blown.',
      'If the fuse blows again, systematically disconnect loads on that circuit until the fault is isolated.'
    ],
    checklist: [
      'Check new fuse is the correct amperage rating',
      'Check fuse box cover is replaced after work',
      'Check circuit functions correctly after replacement',
      'Check for the cause if fuse blew unexpectedly — do not just replace repeatedly'
    ],
    manualRefs: [
      { label: 'Electrical Equipment', model: 'base', pages: [12, 13] },
      { label: 'Electrical System', model: 'mk3', pages: [47, 48] }
    ],
    wiringRef: null,
  },

  {
    id: 'headlamp-circuit',
    category: 'electrical',
    title: 'Headlamp Circuit',
    subtitle: 'Bulb replacement, beam alignment and circuit check',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The C-V8 uses sealed-beam headlamps on early models and replaceable bulbs on the Mk III. The Mk III manual details the lighting circuits on pages 49–50. The headlamps are controlled by the lighting switch on the dashboard and the dip switch.',
    symptoms: [
      'One or both headlamps not working',
      'Headlamps dim',
      'Headlamps not dipping',
      'Incorrect beam aim — dazzling oncoming traffic'
    ],
    tools: [
      'Phillips and flat screwdrivers',
      'Multimeter or test light'
    ],
    parts: [
      'Sealed beam unit (Mk I/II) or replacement bulb (Mk III)',
      'Dip switch (if faulty)'
    ],
    procedure: [
      'If a single headlamp has failed, remove the headlamp rim retaining screws and pull the sealed beam unit forward.',
      'Disconnect the wiring plug from the back of the sealed beam and fit the new unit.',
      'On the Mk III: the bulb is accessed from behind the headlamp assembly in the engine compartment.',
      'If both headlamps fail simultaneously, check the headlamp fuse and the headlamp relay (where fitted).',
      'If main beam works but dip does not (or vice versa), suspect the dip switch.',
      'Check the earth connections at the headlamp bodies — a poor earth is a common cause of dim lights.',
      'Beam alignment: set the headlamps on a level surface 25 feet from a wall. The centre of the dipped beam pattern should be 2 inches below the headlamp centre height.',
      'Adjust beam aim using the headlamp adjustment screws — typically one for vertical and one for horizontal.'
    ],
    checklist: [
      'Check both headlamps work on main and dipped beam',
      'Check sidelights and number plate lights work with headlamps',
      'Check earth connections at headlamp bodies',
      'Check beam aim is not dazzling oncoming traffic'
    ],
    manualRefs: [
      { label: 'Electrical Equipment', model: 'base', pages: [12, 13] },
      { label: 'Lights', model: 'mk3', pages: [49, 50] }
    ],
    wiringRef: 'lighting',
  },

  // ── BRAKES ───────────────────────────────────────────────────────────────────
  {
    id: 'brake-fluid',
    category: 'brakes',
    title: 'Brake Fluid & Bleeding',
    subtitle: 'Fluid change, level check and air bleeding',
    models: ['all'],
    difficulty: 'moderate',
    overview: 'The C-V8 uses a Girling hydraulic brake system with a vacuum servo. Brake fluid must be kept between MIN and MAX in the master cylinder reservoir. Use Girling Crimson or equivalent DOT 3/DOT 4 fluid only. Fluid should be changed every 2 years as it absorbs moisture and lowers the boiling point.',
    symptoms: [
      'Spongy or springy brake pedal',
      'Brake pedal goes to the floor',
      'Uneven braking — car pulls to one side',
      'Brake fluid level dropping without visible leak'
    ],
    tools: [
      'Brake bleeding kit (one-man bleed valve or helper)',
      'Clear plastic tube and jar',
      'Spanner for bleed nipples (usually 7mm)',
      'Syringe for drawing down old fluid'
    ],
    parts: [
      'Brake fluid — Girling Crimson / DOT 4 (approx. 1 litre)',
    ],
    procedure: [
      'Check the fluid level in the master cylinder reservoir — located on the bulkhead in the engine compartment.',
      'Ensure the reservoir is full before beginning bleeding.',
      'Start bleeding from the wheel furthest from the master cylinder — normally the rear nearside.',
      'Fit the bleed tube to the bleed nipple and place the free end in a jar containing a small amount of clean fluid.',
      'Slacken the nipple by 1/2 turn. Pump the brake pedal (or use a pressure bleeder) and watch the tube.',
      'Continue until no air bubbles appear in the fluid emerging from the bleed nipple.',
      'With the pedal held down, tighten the bleed nipple. Release the pedal.',
      'Repeat for the rear offside, then front nearside, then front offside.',
      'Top up the reservoir with fresh fluid between wheels — never let it run dry.',
      'Check pedal feel — it should be firm with no sponginess. If soft, repeat the bleeding sequence.',
      'Check all bleed nipples are tightened and no fluid is leaking.'
    ],
    checklist: [
      'Check fluid level is between MIN and MAX after bleeding',
      'Check all bleed nipples are tight',
      'Check pedal is firm — not spongy',
      'Check no fluid has been spilt on painted surfaces — clean immediately',
      'Check brake servo vacuum hose is connected and sound'
    ],
    manualRefs: [
      { label: 'Brakes & Servo', model: 'base', pages: [14] },
      { label: 'Brake Servo Unit', model: 'mk3', pages: [38] }
    ],
    wiringRef: null,
  },

  {
    id: 'brake-adjustment',
    category: 'brakes',
    title: 'Brake Adjustment & Servo',
    subtitle: 'Rear drum adjustment and servo vacuum check',
    models: ['all'],
    difficulty: 'moderate',
    overview: 'The C-V8 has disc brakes at the front and drum brakes at the rear. Rear drums require periodic manual adjustment to compensate for lining wear. The vacuum servo is fed from the inlet manifold and must be working for effective braking. A failed servo results in very heavy pedal effort.',
    symptoms: [
      'Heavy brake pedal requiring excessive force',
      'Rear brakes dragging or binding',
      'Brake pedal travel excessive',
      'Uneven braking rear-to-front'
    ],
    tools: [
      'Brake adjuster tool or large flat screwdriver',
      'Vacuum gauge',
      'Jack and axle stands'
    ],
    parts: [
      'Brake servo vacuum hose (if cracked)'
    ],
    procedure: [
      'Jack up the rear of the car and support securely on axle stands. Do not work under the car on a jack alone.',
      'Locate the adjuster on the rear brake backplate — on each rear wheel.',
      'Rotate the adjuster (usually a star wheel accessible through a slot in the backplate) until the drum just drags as you rotate the wheel by hand.',
      'Back off the adjuster until the wheel spins freely with only slight drag.',
      'Repeat for the other rear brake.',
      'Check servo operation: with the engine off, pump the brake pedal several times to exhaust any vacuum reserve. The pedal should be very firm.',
      'Hold firm pressure on the pedal and start the engine. The pedal should move slightly towards the floor as the servo vacuum builds — this confirms the servo is working.',
      'If pedal does not change with engine running, check the vacuum hose from the inlet manifold to the servo for cracks, kinks or loose connections.',
      'Check the non-return valve in the servo vacuum line — it should only allow air to flow one way (towards the engine).'
    ],
    checklist: [
      'Check rear wheels spin freely with no drag after adjustment',
      'Check pedal assists when engine is started — servo is working',
      'Check vacuum hose is firm and not cracked',
      'Check handbrake holds car on a gradient after rear adjustment',
      'Test brakes at low speed in a safe area before road use'
    ],
    manualRefs: [
      { label: 'Brakes & Servo', model: 'base', pages: [14] },
      { label: 'Brake Servo Unit', model: 'mk3', pages: [38] }
    ],
    wiringRef: null,
  },

  // ── SUSPENSION & STEERING ────────────────────────────────────────────────────
  {
    id: 'suspension-lubrication',
    category: 'suspension',
    title: 'Front Suspension Lubrication',
    subtitle: 'Grease nipples on wishbones, ball joints and king pins',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The C-V8 front suspension uses double-wishbone geometry. The suspension joints have grease nipples requiring regular lubrication. The Mk III maintenance schedule identifies all lubrication points with letter codes A–J referenced to the lubrication diagram on page 20. All nipples should be greased every 4,000 miles.',
    symptoms: [
      'Clicking or knocking over bumps from the front',
      'Vague or wandering steering',
      'Wear visible in suspension joints'
    ],
    tools: [
      'Grease gun (hand-operated)',
      'Correct grease nipple fitting for the gun',
      'Wire brush to clean nipples before greasing',
      'Jack and axle stands (recommended)'
    ],
    parts: [
      'Lithium EP2 grease'
    ],
    procedure: [
      'Jack up the front of the car and support on axle stands to take the load off the suspension joints.',
      'Identify all grease nipples. Refer to the lubrication diagram in the manual (Mk III: page 20).',
      'Clean each nipple with a wire brush before attaching the gun — dirt forced into the joint will cause wear.',
      'Attach the grease gun and pump until fresh grease appears at the seal or the joint is firm.',
      'Do not over-grease — forcing excessive grease past seals damages them.',
      'Lubrication points include: upper and lower wishbone pivots, king pin/ball joints, track rod end ball joints, anti-roll bar drop links.',
      'Wipe excess grease from around nipples.',
      'Lower the car and check steering movement feels smooth.'
    ],
    checklist: [
      'Check all nipples have been greased — tick off against the lubrication diagram',
      'Check no nipples are blocked — grease should flow freely',
      'Check for split or cracked rubber gaiters on ball joints and track rod ends',
      'Check steering feels smooth and consistent lock-to-lock after greasing'
    ],
    manualRefs: [
      { label: 'Lubrication & Maintenance', model: 'base', pages: [10, 11] },
      { label: 'Maintenance Schedule', model: 'mk3', pages: [20, 21, 22] },
      { label: 'Steering & Suspension', model: 'mk3', pages: [35, 36, 37] },
      { label: 'Service Lubrication', model: 'mk3', pages: [55, 56, 57, 58] }
    ],
    wiringRef: null,
  },

  {
    id: 'steering-rack',
    category: 'suspension',
    title: 'Steering Rack Service',
    subtitle: 'Rack lubrication, gaiter check and play assessment',
    models: ['all'],
    difficulty: 'moderate',
    overview: 'The C-V8 uses rack and pinion steering. The steering rack requires periodic lubrication and the rubber gaiters must be kept intact to retain lubricant and exclude dirt. Excessive free play in the steering wheel is often traced to worn rack or track rod end joints.',
    symptoms: [
      'Excessive free play at the steering wheel (more than 1" at the rim)',
      'Wandering or imprecise steering',
      'Clicking from the steering on lock',
      'Steering pulling to one side'
    ],
    tools: [
      'Spanner set',
      'Grease gun',
      'Torque wrench',
      'Steering wheel play gauge (or ruler)'
    ],
    parts: [
      'Steering rack gaiter kit',
      'Lithium grease for rack',
      'Track rod end (if worn)'
    ],
    procedure: [
      'Inspect the steering rack rubber gaiters — one at each end of the rack. They must be intact with no splits, cracks or loose clips.',
      'A split gaiter allows water and dirt in, destroying the rack. Replace split gaiters immediately.',
      'To assess play: with the car on the ground, rock the steering wheel gently. Movement before the wheels start to turn indicates play in the system.',
      'Identify where the play is by having an assistant move the steering wheel while you watch joints under the bonnet and under the car.',
      'Track rod end ball joints are the most common wear point — grasp the track rod end and feel for movement in the ball joint.',
      'The rack adjustment: some racks have a yoke adjuster screw. Slackening the locknut and tightening the adjuster slightly can remove minor rack play — consult a workshop manual for the specific procedure.',
      'Lubricate the rack via the grease nipple if fitted, or by removing a gaiter and applying fresh grease.'
    ],
    checklist: [
      'Check both gaiters are intact and clips are tight',
      'Check track rod end ball joints for play — replace if worn',
      'Measure steering wheel free play — should be less than 1" at rim',
      'Check rack mounting bolts are tight',
      'Check steering column universal joints are greased and not worn'
    ],
    manualRefs: [
      { label: 'Lubrication & Maintenance', model: 'base', pages: [10, 11] },
      { label: 'Steering & Suspension', model: 'mk3', pages: [35, 36, 37] }
    ],
    wiringRef: null,
  },

  {
    id: 'wheel-alignment',
    category: 'suspension',
    title: 'Wheel Alignment',
    subtitle: 'Toe-in check and track rod adjustment',
    models: ['all'],
    difficulty: 'advanced',
    overview: 'Wheel alignment on the C-V8 covers toe-in of the front wheels. The specification is a small amount of toe-in (typically 1/16"–3/32") which provides stable straight-line running. Incorrect toe causes tyre wear (feathering on the inner or outer edges) and can affect handling. Castor and camber are set by the suspension geometry and are not adjustable on most models.',
    symptoms: [
      'Feathered or scrubbed tyre wear on front tyres',
      'Car pulling to one side under braking',
      'Steering wheel not centred on a straight road',
      'Heavy or uneven steering'
    ],
    tools: [
      'Toe gauge (trammel bars or optical alignment tool)',
      'Tape measure',
      'Chalk or tyre pen',
      'Track rod end spanner',
      'Torque wrench'
    ],
    parts: [],
    procedure: [
      'Alignment is best measured after driving to settle the suspension. Park on level ground.',
      'Mark the front tyres at hub height on the inside of the tread — one mark on each tyre at the front of the wheel.',
      'Measure the distance between the two marks (the "track" dimension at the front of the wheels).',
      'Roll the car forward exactly half a wheel revolution so the marks are now at the rear of the wheels.',
      'Measure between the marks again at the rear.',
      'Toe-in = rear measurement minus front measurement. Correct specification: 1/16"–3/32" toe-in (front narrower than rear at the mark height).',
      'To adjust: slacken the locknut on each track rod end and rotate the track rod (inner tube) to lengthen or shorten the track rod equally on both sides.',
      'Rotating the track rod to lengthen it reduces toe-in; shortening increases toe-in.',
      'Recheck the measurement after adjustment and when satisfied tighten the locknuts to the specified torque.',
      'Always re-check toe after replacing steering or suspension components.'
    ],
    checklist: [
      'Check measurement is taken with tyres at correct pressure',
      'Check car is on level ground for accurate measurement',
      'Check both track rod ends are equally adjusted',
      'Check track rod end locknuts are tightened after adjustment',
      'Check steering wheel is centred on a straight road after adjustment'
    ],
    manualRefs: [
      { label: 'Tyres, Wheels & Alignment', model: 'base', pages: [18, 19] },
      { label: 'Steering & Suspension', model: 'mk3', pages: [35, 36, 37] }
    ],
    wiringRef: null,
  },

  // ── SERVICE SCHEDULE ─────────────────────────────────────────────────────────
  {
    id: 'service-1000',
    category: 'service',
    title: '1,000 Mile Service',
    subtitle: 'Initial service after delivery or rebuild',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The 1,000 mile service is a critical initial check for new or restored cars. It catches loose fixings, fluid levels settled after initial use, and any bedding-in issues. The Mk III manual details this service on pages 20–22.',
    symptoms: [],
    tools: [
      'Basic spanner and socket set',
      'Torque wrench',
      'Grease gun',
      'Feeler gauges',
      'Tyre pressure gauge'
    ],
    parts: [
      'Engine oil top-up if required',
      'Coolant top-up if required',
      'Grease (EP2)'
    ],
    procedure: [
      'Check and top up engine oil to MAX mark on dipstick.',
      'Check and top up coolant — refer to coolant service card.',
      'Check brake fluid level in master cylinder reservoir.',
      'Check clutch fluid level (if hydraulic clutch).',
      'Check gearbox and overdrive oil level.',
      'Check rear axle oil level.',
      'Check all grease nipples on front suspension — grease as required.',
      'Check tyre pressures including spare: front 26 psi, rear 26 psi (verify against specifications for loaded/unloaded).',
      'Check all wheel nuts are tight — torque to specification.',
      'Check battery electrolyte level and terminal security.',
      'Check all lights, horn, wipers and washers function.',
      'Carry out a road test — check brakes, steering, gearbox change quality and listen for unusual noises.'
    ],
    checklist: [
      'Engine oil level checked and correct',
      'Coolant level checked and correct',
      'Brake fluid level checked',
      'Gearbox oil level checked',
      'Rear axle oil level checked',
      'All suspension nipples greased',
      'Tyre pressures correct',
      'All wheel nuts tight',
      'All lights, horn and wipers working',
      'Road test completed with no faults noted'
    ],
    manualRefs: [
      { label: 'Lubrication & Maintenance', model: 'base', pages: [10, 11] },
      { label: 'Maintenance Schedule', model: 'mk3', pages: [20, 21, 22] },
      { label: 'Service Lubrication', model: 'mk3', pages: [55, 56, 57, 58] }
    ],
    wiringRef: null,
  },

  {
    id: 'service-4000',
    category: 'service',
    title: '4,000 Mile Service',
    subtitle: 'Oil change and comprehensive inspection',
    models: ['all'],
    difficulty: 'easy',
    overview: 'The 4,000 mile service is the regular maintenance interval covering oil change, lubrication of all grease points, and inspection of key systems. The Mk III manual schedules this on pages 20–22 with coded reference to the lubrication diagram.',
    symptoms: [],
    tools: [
      'Oil drain tools',
      'Grease gun',
      'Basic spanner set',
      'Tyre pressure gauge',
      'Torque wrench'
    ],
    parts: [
      'Engine oil — SAE 20W/50 (8 pints)',
      'Oil filter',
      'EP2 grease'
    ],
    procedure: [
      'Carry out engine oil and filter change — refer to the Oil & Filter Change card.',
      'Grease all front suspension nipples: upper and lower wishbone pivots, king pin or ball joints.',
      'Grease steering rack nipple (if fitted), track rod ends.',
      'Grease propeller shaft universal joints (front and rear) — 2 nipples on each joint.',
      'Grease handbrake cable pivots.',
      'Check gearbox and overdrive oil level — top up if required. Capacity: refer to specifications.',
      'Check rear axle oil level — top up if required.',
      'Check battery electrolyte level — top up individual cells to correct level with distilled water.',
      'Inspect and clean battery terminals — apply petroleum jelly to prevent corrosion.',
      'Check all tyre pressures and inspect for wear.',
      'Check brake fluid level.',
      'Inspect coolant level and hose condition.',
      'Inspect fan belt condition and tension.',
      'Road test and listen for any new noises.'
    ],
    checklist: [
      'Engine oil and filter changed',
      'All suspension and steering grease points lubricated',
      'Propeller shaft universal joints greased',
      'Gearbox oil level checked',
      'Rear axle oil level checked',
      'Battery topped up and terminals clean',
      'Tyre pressures correct',
      'Fan belt tension correct',
      'Brake fluid level correct'
    ],
    manualRefs: [
      { label: 'Lubrication & Maintenance', model: 'base', pages: [10, 11, 25, 26, 27, 28] },
      { label: 'Maintenance Schedule', model: 'mk3', pages: [20, 21, 22] },
      { label: 'Service Lubrication', model: 'mk3', pages: [55, 56, 57, 58] }
    ],
    wiringRef: null,
  },

  {
    id: 'service-20000',
    category: 'service',
    title: '20,000 Mile Service',
    subtitle: 'Full service with tune-up and component renewal',
    models: ['all'],
    difficulty: 'moderate',
    overview: 'The 20,000 mile service is the major service interval covering all 4,000 mile items plus tune-up components, coolant change and a comprehensive inspection of wear items. The Mk III manual details this with G-prefix items on the maintenance schedule pages.',
    symptoms: [],
    tools: [
      'Full toolkit',
      'Timing light',
      'Tachometer',
      'Compression tester'
    ],
    parts: [
      'Spark plugs x8 — Champion N10Y',
      'Contact breaker points and condenser',
      'Air filter element',
      'Fuel filter',
      'Engine oil and filter',
      'Coolant — antifreeze (10 pints)',
      'Gearbox oil (if drain and refill)',
      'Rear axle oil (if drain and refill)'
    ],
    procedure: [
      'Complete all items on the 4,000 mile service list.',
      'Renew all 8 spark plugs — Champion N10Y. Gap: 0.025".',
      'Renew contact breaker points and condenser.',
      'Set contact breaker gap to 0.015" and check ignition timing.',
      'Renew air filter element.',
      'Renew inline fuel filter.',
      'Drain and refill cooling system with fresh 50/50 antifreeze mixture.',
      'Drain and refill gearbox with fresh oil to the correct specification.',
      'Drain and refill rear axle with fresh hypoid oil.',
      'Carry out a compression test on all 8 cylinders — all should be within 10% of each other and above 130 psi.',
      'Inspect all rubber hoses (coolant, vacuum, fuel) and replace any that are swelling, cracking or showing age.',
      'Inspect the exhaust system for leaks and corrosion.',
      'Inspect brake pads (front discs) for wear — minimum thickness 3mm.',
      'Inspect rear brake drum linings through the inspection hole.',
      'Carry out a full road test.'
    ],
    checklist: [
      'All 4,000 mile items completed',
      'Spark plugs renewed and gapped at 0.025"',
      'Contact breaker points and condenser renewed',
      'Ignition timing set correctly',
      'Air filter renewed',
      'Fuel filter renewed',
      'Coolant drained and refilled',
      'Gearbox oil renewed',
      'Rear axle oil renewed',
      'Compression test — all cylinders within 10%',
      'All rubber hoses inspected',
      'Brake pad and lining thickness checked',
      'Road test completed'
    ],
    manualRefs: [
      { label: 'Lubrication & Maintenance', model: 'base', pages: [10, 11, 25, 26, 27, 28] },
      { label: 'Maintenance Schedule', model: 'mk3', pages: [20, 21, 22] },
      { label: 'Service Lubrication', model: 'mk3', pages: [55, 56, 57, 58] },
      { label: 'Ignition', model: 'mk3', pages: [29, 30] }
    ],
    wiringRef: null,
  },
];
