# Zedox Technology: botol hidrogen portable

**Self-authored under explicit creative delegation.** Afiq picked "SERI decide"
for creative direction on 2026-10-31 and answered four structural questions
directly. Everything else below is authored from this session's context and is
labelled as such.

## Decisions from Afiq (verbatim choices)

- Creative authority: "SERI decide"
- Target: "Ganti dalam Next.js" (rebuild the existing Next.js page, keep config, WhatsApp order, the clip)
- Structure: "Scene berasingan" (distinct scenes, not one continuous world)
- Range: "Premium-minimal"
- Earlier in the session: chose the "Cahaya & Gelembung" direction, supplied the
  scroll clip ("gunakan video ni"), WhatsApp orders go to +60 17-666 3171, the
  online-payment button was removed.

## The eight topics

1. **Vibe** (authored): cold light in a dark room, glass, quiet. References: a
   laboratory glassware catalogue lit from above; the stillness of a long
   exposure of a fish tank at night; Dieter Rams product sheets.
2. **Journey** (authored, from the existing demo order): the bottle they saw on
   TikTok, what actually happens inside it, watching it work, the plain facts,
   picking a colour, the questions people ask on WhatsApp, ordering.
3. **Energy curve** (authored): calm open, quieter second act, the loudest act
   is the clip, then it settles and stays settled to the close.
4. **Feeling and the one moment**: see the curve and peak below.
5. **The thing no other site does** (authored): the page itself runs the
   product's 3-minute cycle. A small glass on the edge of the screen fills as you
   read, switches on at the big clip, and counts 3:00 down to "Siap".
6. **Range**: premium-minimal (Afiq's choice). One cold accent, dark canvas, air.
7. **One world or scenes**: distinct scenes (Afiq's choice). Not worldflight.
8. **Assets**: one AI-generated clip, 720x1280, 7.9 s (pour 0 to 3.2 s, display
   on at 3.2 s, bubbles from 3.6 s). No real product photos. No kie.ai key, so
   no generation this build: every still is a frame of that clip.

## Hard constraints (evidence, not taste)

- Drinking water falls under the Food Act 1983; s17 bars health claims and
  health testimonials in food advertising. No benefit claims, no testimonials.
- Prices, SSM number, ppb figure, delivery times are still placeholders. No
  counters, no invented numbers. "7K+ likes" is unverified, so it is out of the hero.
- The clip is AI-generated. Its base display reads about "6:43", not 3:00, and
  the bottle is not guaranteed identical to the real product. Swap for real
  footage when it exists.

## Feeling curve (written before the acts)

```
1  Recognition   the empty bottle from TikTok, lit from above, held still
2  Curiosity     a short, plain explanation on empty ground: what the 3 minutes are
3  Awe           water pours, the base lights, the glass floods with fine bubbles under the reader's hand
4  Trust         the facts as labels next to a close crop of the bubbles
5  Desire        the three finishes travel past and one becomes "mine"
6  Reassurance   the questions people actually ask, answered briefly
7  Resolve       the full glowing bottle, their choice, one button
```

## The peak

> "I scrolled and the water poured in, then the bottom lit up blue and the whole
> bottle filled with bubbles, and the little glass on the side started counting
> down."

Lives in act 3. It gets the only clip, the largest span (3.6 vh), and act 2 is
authored silence in front of it (small type on empty ground, no media).

## Tell-someone sentence

It's the site where **a little glass on the side of the screen fills while you
read, starts fizzing when the big video lights up, and counts down three minutes
to "Siap" just as you reach the order button.**

## Authored silence

Act 2 is intentionally sparse: one heading, one paragraph, no media, on the
canvas. It is the quiet before the peak, not dead scroll.

## Journey

```
1  Recognition   "that is the bottle from the video"
2  Curiosity     "so what actually happens in three minutes?"
3  Turn          watching it happen
4  Substance     what it is made of, in plain facts
5  Range         which one is mine
6  Doubt cleared the practical questions
7  Commitment    one WhatsApp order with my choices already in it
```

## Grammar: filmic one-shot

Why the other seven lost:

- Chaptered editorial: the visitor arrives from a TikTok video on a phone; the
  pitch is one ritual (Isi, Tekan, Minum), not a long read.
- Live surface: the product is a bottle, not software. Nothing to operate.
- Continuous world: Afiq chose distinct scenes, and one 8 s clip cannot carry a flight.
- Typographic poster: the product's appeal is visual (light, bubbles); type alone undersells it.
- Gallery / catalog: one product in three finishes is not a collection; a label-only page would bury the clip.
- Split stage: the only honest two-sided comparison would be against other bottles
  or plain water, and both drift toward unverified or health claims.
- Rhythmic cutlist: premium-minimal was chosen; a cut-every-second page fights it.

## Signature move: the cycle glass

A fixed glass on the right edge, part of the page chrome. Its water level is
scroll position from the top to the peak (Isi). At the peak's "Tekan" moment its
base lights and bubbles rise inside it, faster when the reader scrolls faster
(scroll velocity shapes intensity). Its readout counts 3:00 to 0:00 across the
peak and reads "Siap" from there to the close. Bespoke page code, engine untouched.
Gated: under reduced motion the level and readout still update, the bubbles do not.

## Fingerprint gate

Registry at `scrollcraft/FINGERPRINTS.md` is empty (first build). Nothing to clear.

## Score

| #   | Beat          | Feeling     | Device                            | Span    | Why this one                                                                  |
| --- | ------------- | ----------- | --------------------------------- | ------- | ----------------------------------------------------------------------------- |
| 1   | Recognition   | Recognition | `pin` + layered planes (`--sc-p`) | 1.8     | Depth from separate planes; holds the bottle still while the headline recedes |
| 2   | Curiosity     | Curiosity   | `flow` + `in`                     | natural | Quiet, document-like; the silence before the clip                             |
| 3   | Turn (peak)   | Awe         | `scrub`                           | 3.6     | The only clip, under the reader's hand, the largest span                      |
| 4   | Substance     | Trust       | `reveal` + `in`                   | natural | A wipe across the bubble crop: the water has changed state                    |
| 5   | Range         | Desire      | `pan`                             | 2.6     | Lateral travel reads as options; choosing carries into the order              |
| 6   | Doubt cleared | Reassurance | `flow`                            | natural | Administrative content, compressed                                            |
| 7   | Commitment    | Resolve     | `pin` + spotlight + magnet        | 1.3     | The page stops and answers the pointer; footer inside the stage               |

Families: pin, flow, scrub, reveal, pan (5). No family twice in a row. One scrub.
Total about 12.5 vh across 7 acts, outside the 13.6 to 13.8 vh band.

## Verification (2026-10-31, production build via `next start`)

Harness `shoot.mjs`, 6 samples per act, installed Chrome:

| Run | Result |
|---|---|
| Desktop 1440x900 | no dead scroll, clip never frozen, all cues peak, contrast clear 4.5:1 |
| Phone 390x844 | same, all clear |
| Compact 360x640 | same, all clear |
| Reduced motion | no dead scroll, contrast clear (clip not fetched by design, poster holds) |

Superseded findings (kept on purpose):

- Run 1, desktop: cue "Isi" never peaked (0.78). Cause: the clip maps across the
  stage's whole visible life with dwell, so the pour ends at p 0.22, not 0.32.
  Fixed: Isi greets, Tekan starts at 0.22, glass switches on at 0.22.
- Dev run, phone: "Isi" 3.7:1. Cause: the Next.js dev indicator badge sat behind
  the line. Not present in the production build; production run clears 4.5:1.
- Contact sheet, compact: bar CTA clipped at 360px and the close footer overlapped
  the order button at 640px tall. Neither was flagged by the harness. Fixed with
  narrow and short phone rules; measured after: CTA right edge 340 of 360,
  panel-to-footer gap 48px (360x640), 181px (390x844), 87px (1280x720).
- An earlier mobile/compact/reduced "pass" was invalid (shell did not pass the
  size flags; it re-ran desktop). Rerun with correct flags; results above.

Functional, in the browser at 1280x720 on the production build: picking Silver on
the rail checks Silver in the close; Beli 2 and quantity 2 selected; the order
button opens `wa.me/60176663171` with "Pakej: Beli 2, Warna: Silver, Kuantiti: 2".
Tab order follows reading order; focusing a rail button brings it into view. The
cycle glass reads "Siap" (state done) at the close.

Not verified: a real iPhone or Android device (video decoder, Low Power Mode,
touch scrolling). Headless Chrome cannot reproduce those.

## Feel check

Scrolled the desktop and phone sheets cold, one word per act, then compared.

| Act | Intended | Felt | Note |
|---|---|---|---|
| 1 | Recognition | Recognition | lit bottle, planes separate as the headline recedes |
| 2 | Curiosity | Curiosity | quiet; the clip's stage rises under the last lines |
| 3 | Awe | Awe | the largest visual change on the page, and the longest act |
| 4 | Trust | Repetition, then trust | the macro is a crop of the clip just seen |
| 5 | Desire | Selection | swatches are abstract metal, not the product |
| 6 | Reassurance | Calm | as intended |
| 7 | Resolve | Resolve | full glowing bottle, choices kept, glass reads Siap |

Diff: acts 4 and 5 under-deliver for the same reason, one source clip for every
image. Not fixed in this build because there is nothing else to use without
generating assets. Fix when real photos exist: a different macro for act 4
(membrane, base, glass detail) and one real photo per finish for act 5.
Peak check: the clip act has the largest span (3.6 vh vs 2.6 for the rail), act 2
is quiet in front of it, and the close holds with content on it.
