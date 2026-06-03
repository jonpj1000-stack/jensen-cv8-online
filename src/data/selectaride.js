/**
 * Armstrong Selectaride — resource data for the Jensen C-V8 app.
 *
 * Technical documentation compiled by:
 *   Derek Chapman & Phillip Coltman
 *
 * Electrical theory originally written by Andreas Kreis (September 2001).
 * Diagrams reproduced by Derek Chapman (October 2001).
 * Fitting instructions: original Armstrong Selectaride document, Jensen Systems adaptation.
 */

const OVERVIEW = `The Armstrong Selectaride was one of the first electrically adjustable shock absorber systems introduced in the post-war era. Jensen fitted it to the C-V8 as a standard feature — a rotary selector switch on the transmission tunnel allowed the driver to choose between four damper settings from SOFT to HARD (positions 1–4) while on the move.

The system works through a clever electro-mechanical "memory". By turning the selector switch, contacts T1–T4 are briefly closed in sequence. Each contact energises a solenoid inside the shock absorber unit, which physically rotates the damper valve to the new position and simultaneously prepares the next contact pair for the following selection. The system can only change one step at a time — each turn of the selector advances the valves one position. This means if the selector switch is moved with the ignition off, the switch position no longer matches the valve positions. The fix is straightforward: switch on the ignition and turn the selector through one full revolution until you hear the solenoids click — the system re-synchronises automatically.

In practice the system proved unreliable. The switch contacts carry the full solenoid current, causing arcing and wear over time. Dirt in the solenoid valves and poor earth connections were further failure points. As a result, the majority of surviving C-V8s have either had the Selectaride removed, replaced with conventional shock absorbers, or — for the dedicated enthusiast — refurbished back to working order. The documentation on this page covers the original Armstrong wiring, community-developed modifications that improve reliability, and the original fitting instructions.`;

export const selectarideByModel = {

  // ── Mk I & Mk II ───────────────────────────────────────────────────────────
  'mk1-mk2': {
    title:     'Armstrong Selectaride — Mk I & Mk II',
    subtitle:  'Electrically adjustable shock absorber system — wiring, operation and fitting',
    models:    ['all', 'mk1', 'mk2'],
    overview:  OVERVIEW,
    pdf:       '/manuals/jensen-cv8-mk1-mk2-selectaride.pdf',
    contributors: [
      { name: 'Derek Chapman',   role: 'Technical diagrams, wiring documentation & fitting instructions' },
      { name: 'Phillip Coltman', role: 'Technical diagrams & wiring documentation' },
      { name: 'Andreas Kreis',   role: 'Original electrical theory (September 2001)' },
    ],
    sections: [
      {
        id:       'how-it-works',
        title:    'How the Selectaride Electrical System Works',
        subtitle: 'The switching sequence, solenoid activation and the manual memory principle',
        page:     3,
        image:    '/selectaride/SELECTARIDE-G01.jpg',
        tags:     ['theory', 'solenoid', 'switching', 'T1–T4', 'S1–S4', 'memory', 'synchronisation'],
        notes:    `The Selectaride system operates as a sequential electro-mechanical memory. Turning the selector switch briefly closes contacts T1, T2, T3 or T4 in turn — each contact closure lasts only a split second, which protects the solenoid coils from overheating.

One pair of contacts in the shock absorber electrical boxes (S1–S4 on the left, R1–R4 on the right) is always closed. When the corresponding selector switch contact closes at the same moment, the solenoid is energised. This causes two things simultaneously: the damper valve rotates to the new position, and the next pair of shock absorber contacts closes ready for the next selection.

IMPORTANT — the manual memory: if the selector switch is moved with the ignition switched off, the switch position will no longer match the valve positions. To re-synchronise, switch on the ignition and turn the selector through one complete revolution until you can hear the solenoids activate — the system is then back in sync. When operating the selector, never hold the pointer between the indexed positions.`,
      },
      {
        id:       'wiring-complete',
        title:    'Complete Wiring Modification Diagram',
        subtitle: 'Full rewire — Control Switch, LED Display, Relays and Shock Absorbers',
        page:     1,
        tags:     ['wiring modification', 'control switch', 'relay', 'LED display', 'shock absorber', 'T1–T4', 'S1–S4'],
        notes:    'The complete modified wiring diagram shows the four-position Control Switch (T1–T4) connected via the LED indicator display to two relays, which drive the left and right shock absorber solenoid valves (S1–S4). Wire colours: Red = 12V supply, Black = ground, White/Green/Blue = control signals, Brown = coil feed to solenoids, Yellow = relay output. This modification is strongly recommended — see the External Relay section for why.',
      },
      {
        id:       'external-relay',
        title:    'Optional Modification — External Relay',
        subtitle: 'Protecting switch contacts from high current — the most important upgrade',
        page:     2,
        tags:     ['modification', 'relay', 'external relay', 'high current', 'switch contacts', 'coil', 'sparking', 'contact burn'],
        notes:    `The fundamental weakness of the original Selectaride wiring is that the selector switch contacts carry the full solenoid current. Every time a contact closes, a spark occurs. Over time this burns and pits the contact surfaces until the system stops working reliably.

The solution is an additional relay between the switch and the shock absorber solenoid. The switch contacts now only carry the low-current relay coil signal — virtually no sparking. The relay contacts, which are designed for higher currents, carry the solenoid load.

This single modification addresses the most common cause of Selectaride failure and is strongly recommended on any car being returned to working order. The original Armstrong system had no such relay — this is a community-developed improvement.`,
      },
      {
        id:       'overview-1',
        title:    'General Overview — Part 1',
        subtitle: 'Block diagram: Control Switch → Wiring Loom → Shock Absorber Electrical Boxes',
        page:     3,
        image:    '/selectaride/SELECTARIDE-G01.jpg',
        tags:     ['overview', 'wiring loom', 'control switch', 'shock absorber', 'left', 'right', 'T1–T4', 'S1–S4'],
        notes:    'Simplified block diagram showing how the single Selectaride Control Switch (T1–T4) connects via the wiring loom to two identical Shock Absorber Electrical Boxes — one for the left damper (S1–S4) and one for the right (R1–R4). Each box contains a solenoid coil which, when energised, moves the internal valve to the selected damping rate. Note: S1=R1, S2=R2, S3=R3, S4=R4 — the left and right boxes use identical layouts, labelled differently in the wiring diagrams.',
      },
      {
        id:       'overview-2',
        title:    'General Overview — Part 2',
        subtitle: 'Detailed views: Control Switch (bottom view) and Shock Absorber Box (top view)',
        page:     4,
        image:    '/selectaride/SELECTARIDE-G02.jpg',
        tags:     ['overview', 'rotor', 'bottom view', 'top view', 'S1–S4', 'R1–R4', 'coil', 'ground'],
        notes:    'Shows the physical construction of the Control Switch rotor (bottom view, T1–T4 contacts) and the Shock Absorber Electrical Box (top view, S1–S4 contacts). The rotor design means contacts T1–T4 can only be closed briefly — this is by design to protect the solenoid coils. A contact held closed for longer than a split second risks coil damage from overheating.',
      },
      {
        id:       'switching-soft',
        title:    'Switching Procedure — To Position SOFT',
        subtitle: 'Rotor and valve positions when moving to the SOFT setting',
        page:     5,
        image:    '/selectaride/SELECTARIDE-switching-proceedure-0.jpg',
        tags:     ['switching', 'SOFT', 'rotor', 'T1', 'S1', 'R1', 'valve', 'procedure'],
        notes:    'When turning the selector from position 4 to SOFT, contact T1 briefly closes during rotor travel. Because S1 and R1 are already closed in this position, the solenoid activates and the valve rotates to SOFT. The rotor transition period is critical — worn or dirty contacts may not hold contact long enough to fully activate the solenoid, which is why the system can appear intermittent before failing completely.',
      },
      {
        id:       'switching-soft-ab',
        title:    'Switching Procedure — SOFT Steps A & B',
        subtitle: 'Before and after: T1 closes (A), then S1/R1 open and S2/R2 close (B)',
        page:     6,
        image:    '/selectaride/SELECTARIDE-switching-proceedure-1.jpg',
        tags:     ['switching', 'SOFT', 'T1', 'T2', 'S1', 'S2', 'R1', 'R2', 'procedure', 'step A', 'step B'],
        notes:    'A: While turning from position 4 to SOFT, T1 closes briefly (S1 & R1 already closed) — solenoid fires, valve moves to SOFT. B: After the switch settles at SOFT, S1 & R1 open and S2 & R2 close — the system is now "set" at SOFT and ready for the impulse of T2 when the next selection is made.',
      },
      {
        id:       'switching-pos2-cd',
        title:    'Switching Procedure — Position 2 Steps C & D',
        subtitle: 'Transitioning from SOFT to position 2: T2 closes, S3/R3 take over',
        page:     7,
        image:    '/selectaride/SELECTARIDE-switching-proceedure-2.jpg',
        tags:     ['switching', 'position 2', 'T2', 'T3', 'S2', 'S3', 'R2', 'R3', 'procedure', 'step C', 'step D'],
        notes:    'C: While turning from SOFT to position 2, T2 closes briefly (S2 & R2 already closed) — solenoid fires, valve advances. D: After settling at position 2, S2 & R2 open and S3 & R3 close — ready for T3 when moving to position 3. This sequential stepping is the "memory" — each position physically sets up the next.',
      },
      {
        id:       'fitting-instructions',
        title:    'Fitting Instructions — Jensen C-V8',
        subtitle: 'Original Armstrong fitting procedure adapted for the C-V8 installation',
        page:     null,
        image:    null,
        tags:     ['fitting', 'installation', 'control switch', 'wiring harness', 'earth', 'synchronisation'],
        notes:    `SHOCK ABSORBERS: Fit the Selectaride units with the control box on the side pointing towards the centre front of the car. For telescopic-type installations, the units locate naturally on the mountings — the spigotted washer on the special bottom mounting provides angular location not achieved with the original stem-type end.

CONTROL SWITCH — Jensen C-V8 specific: The Control Switch is located in the top of the propeller shaft tunnel, to the rear of the gear change lever. Refer to Armstrong drawings E95 and E94 for the cutting template and switch arrangement.

WIRING HARNESS: Clip the leads from each shock absorber control box to the underpanelling, allowing sufficient slack at the first fixing to permit full suspension rebound without straining the cable. Route the main harness from the control switch under the car to the shock absorber plugs. Connect the single feed wire through the ignition circuit — connect to the switch side of the ignition coil (often marked S.W.) but NOT through an existing fuse.

EARTH CONNECTIONS: This is critical and a frequent cause of failure. At every earth point, scrape away any underseal or paint to ensure a sound metal-to-metal connection. A poor earth will impair or completely prevent operation.

PREPARATION FOR USE: After completing the installation, switch on the ignition and turn the Selectaride selector through one full revolution. This synchronises the selector switch position with the shock absorber valve positions and confirms the installation is working. If the selector is ever moved with the ignition off, repeat this procedure before use.`,
      },
    ],
  },

  // ── Mk III ─────────────────────────────────────────────────────────────────
  'mk3': {
    title:     'Armstrong Selectaride — Mk III',
    subtitle:  'Full wiring diagram including Selectaride shock absorber system',
    models:    ['mk3'],
    overview:  OVERVIEW,
    pdf:       '/manuals/jensen-cv8-mk3-selectaride.pdf',
    contributors: [
      { name: 'Derek Chapman',   role: 'Technical diagrams, wiring documentation & fitting instructions' },
      { name: 'Phillip Coltman', role: 'Technical diagrams & wiring documentation' },
      { name: 'Andreas Kreis',   role: 'Original electrical theory (September 2001)' },
    ],
    sections: [
      {
        id:       'mk3-wiring-full',
        title:    'Mk III Full Wiring Diagram with Selectaride',
        subtitle: 'Complete wiring diagram showing the Selectaride system integrated into the Mk III loom',
        page:     1,
        tags:     ['wiring', 'Mk III', 'Selectaride', 'shock absorber', 'full diagram'],
        notes:    'The Mk III wiring diagram showing the full loom including the Selectaride adjustable damper circuit. The Mk III uses a dedicated Selectaride switch on the transmission tunnel (referenced in the Controls & Instruments section of the manual). For how the electrical system works and fitting instructions, refer to the Mk I & II section — the principles and procedure are the same across all marks.',
      },
    ],
  },

};

/** Return the correct Selectaride data object for the active model selection. */
export function getSelectarideForModel(model) {
  return model === 'mk3'
    ? selectarideByModel['mk3']
    : selectarideByModel['mk1-mk2'];
}
