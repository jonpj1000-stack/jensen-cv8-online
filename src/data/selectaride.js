/**
 * Armstrong Selectaride — resource data for the Jensen C-V8 app.
 *
 * Diagrams and technical documentation contributed by:
 *   Derek Chapman & Phillip Coltman
 */

const OVERVIEW = `The Armstrong Selectaride was one of the first electrically adjustable shock absorber systems introduced in the post-war era. Jensen fitted it to the C-V8 as a standard feature — a rotary selector switch on the transmission tunnel allowed the driver to choose between four damper settings from SOFT to HARD (positions 1–4) while on the move.

In practice the system was notoriously unreliable. The electro-mechanical valves inside each shock absorber unit were sensitive to dirt and wear, and many cars had the system fail within a few years of production. As a result, the majority of surviving C-V8s have either had the Selectaride system removed entirely, the units replaced with conventional fixed-rate shock absorbers, or — for the dedicated enthusiast — refurbished back to working order.

The documentation on this page covers the original Armstrong wiring arrangement and community-developed wiring modifications that improve reliability. Both modifications allow the original Selectaride units to function correctly if the solenoid valves inside the shock absorbers are still serviceable.`;

export const selectarideByModel = {

  // ── Mk I & Mk II ───────────────────────────────────────────────────────────
  'mk1-mk2': {
    title:     'Armstrong Selectaride — Mk I & Mk II',
    subtitle:  'Electrically adjustable shock absorber system with wiring modifications',
    models:    ['all', 'mk1', 'mk2'],
    overview:  OVERVIEW,
    pdf:       '/manuals/jensen-cv8-mk1-mk2-selectaride.pdf',
    contributors: [
      { name: 'Derek Chapman',   role: 'Technical diagrams & wiring documentation' },
      { name: 'Phillip Coltman', role: 'Technical diagrams & wiring documentation' },
    ],
    sections: [
      {
        id:       'wiring-complete',
        title:    'Complete Wiring Modification Diagram',
        subtitle: 'Full rewire — Control Switch, LED Display, Relays and Shock Absorbers',
        page:     1,
        tags:     ['wiring modification', 'control switch', 'relay', 'LED display', 'shock absorber', 'T1–T4', 'S1–S4'],
        notes:    'The complete diagram shows the four-position Control Switch (T1–T4) connected via the LED indicator display to two relays, which drive the left and right shock absorber solenoid valves (S1–S4). Wire colours: Red = 12V supply, Black = ground, White/Green/Blue = control signals, Brown = coil feed to solenoids, Yellow = relay output.',
      },
      {
        id:       'external-relay',
        title:    'Optional Modification — External Relay',
        subtitle: 'Protecting switch contacts from high current with an additional relay',
        page:     2,
        tags:     ['modification', 'relay', 'external relay', 'high current', 'switch contacts', 'coil', '12V'],
        notes:    'The standard wiring passes full solenoid current through the small Control Switch contacts, causing arcing and wear. This modification adds an external relay — the switch only energises the relay coil (low current) while the relay contacts carry the high current to the solenoid, greatly extending contact life.',
      },
      {
        id:       'overview-1',
        title:    'General Overview — Part 1',
        subtitle: 'Block diagram: Control Switch → Wiring Loom → Shock Absorber Electrical Boxes',
        page:     3,
        tags:     ['overview', 'wiring loom', 'control switch', 'shock absorber', 'left', 'right', 'T1–T4', 'S1–S4'],
        notes:    'Simplified block diagram showing how the single Selectaride Control Switch (T1–T4) connects via the wiring loom to two identical Shock Absorber Electrical Boxes — one for the left damper (S1–S4) and one for the right (R1–R4). Each box contains a coil which, when energised, moves the internal valve to the selected damping rate.',
      },
      {
        id:       'overview-2',
        title:    'General Overview — Part 2',
        subtitle: 'Detailed views: Control Switch (bottom view) and Shock Absorber Box (top view)',
        page:     4,
        tags:     ['overview', 'rotor', 'bottom view', 'top view', 'S1–S4', 'R1–R4', 'coil', 'ground'],
        notes:    'Shows the physical construction of the Control Switch rotor (bottom view, T1–T4 contacts) and the Shock Absorber Electrical Box (top view, S1–S4 contacts). Important: S1=R1, S2=R2, S3=R3, S4=R4 — the left and right boxes use identical contact layouts, labelled differently in the wiring diagrams.',
      },
      {
        id:       'switching-soft',
        title:    'Switching Procedure — To Position SOFT',
        subtitle: 'What happens electrically when selecting the softest damper setting',
        page:     5,
        tags:     ['switching', 'SOFT', 'rotor', 'T1', 'S1', 'R1', 'valve', 'procedure'],
        notes:    'When turning the selector from position 4 to SOFT, contact T1 briefly closes during rotor travel. S1 and R1 are already closed in this position. The valve inside the shock absorber moves to the SOFT position. Note the rotor position while moving — transitions are important for understanding why dirty or worn contacts cause failure.',
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
      { name: 'Derek Chapman',   role: 'Technical diagrams & wiring documentation' },
      { name: 'Phillip Coltman', role: 'Technical diagrams & wiring documentation' },
    ],
    sections: [
      {
        id:       'mk3-wiring-full',
        title:    'Mk III Full Wiring Diagram with Selectaride',
        subtitle: 'Complete wiring diagram showing the Selectaride system integrated into the Mk III loom',
        page:     1,
        tags:     ['wiring', 'Mk III', 'Selectaride', 'shock absorber', 'full diagram'],
        notes:    'The Mk III wiring diagram showing the full loom including the Selectaride adjustable damper circuit. The Mk III uses a dedicated Selectaride switch on the transmission tunnel (referenced in the Controls & Instruments section). This diagram shows how the switch integrates with the rest of the Mk III electrical system.',
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
