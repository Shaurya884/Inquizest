# Inquizest Lumina

Build a highly cinematic interactive website for an event called:

INQUIZEST 3.0

IMPORTANT:

This must NOT feel like a normal scrolling website, landing page, brochure, PDF, card grid, or collection of sections.

The user's scroll should function primarily as a CONTROL INPUT for a cinematic animation system.

The experience should feel like one continuous visual world that changes state as the user scrolls.

==================================================

CORE VISUAL DIRECTION

==================================================

Style:

- 2D-first

- subtle faux-3D depth

- cinematic

- experimental

- sophisticated

- comic-inspired graphic design

- bold typography

- illustrated graphic props

- halftone / ink / print textures where appropriate

- surreal/impossible composition

- strong use of negative space

- colorful accents derived from the INQUIZEST logo

- NOT childish

- NOT generic "comic book website"

- NOT sci-fi dashboard

- NOT a conventional school website

The comic influence should be an ART DIRECTION, not the structure.

Do NOT make comic panels the primary layout.

Do NOT create cards for events.

Do NOT create a conventional vertical list of 20 events.

==================================================

TECHNICAL STACK

==================================================

Use:

- React

- TypeScript

- Three.js / React Three Fiber where useful

- GSAP + ScrollTrigger

- Lenis for smooth scrolling

- SVG for precise 2D graphics

- CSS transforms for lightweight effects

- WebGL/shaders only where they provide meaningful visual effects

Keep readable information in normal DOM elements for accessibility and performance.

Do NOT use Three.js for everything.

The site must remain performant.

==================================================

OPENING SEQUENCE — EXTREMELY IMPORTANT

==================================================

The opening must be a cinematic scroll-controlled sequence.

DO NOT simply fade a logo in.

The exact concept is:

START:

The entire viewport is PURE BLACK.

There is almost nothing visible.

As the user scrolls:

BLACK gradually transforms into WHITE.

Eventually the entire viewport becomes WHITE.

Then the WHITE begins collapsing/fading back into BLACK.

CRITICAL:

The INQUIZEST logo must NOT disappear with the white background.

The logo should remain visually anchored while the white world disappears around it.

The intended visual illusion is:

BLACK

→ WHITE

→ WHITE collapses into BLACK

→ ONLY THE LOGO REMAINS

→ the logo appears to exist in absolute darkness

→ the logo becomes fully visible

→ the logo transitions from a restrained/monochrome state into its full multicolor form

→ the surrounding world begins to appear

The logo should feel like it is being revealed FROM NOTHING.

The logo must feel spatially independent from the background transition.

Do NOT implement this as:

"background fade + logo fade in."

Instead build separate animation layers:

1. background

2. white field

3. logo mask / logo silhouette

4. logo color layer

5. subtle particles/graphic fragments

6. transition into the next world

The logo should remain extremely crisp.

Use the provided INQUIZEST logo asset.

Do not replace it with a generic text logo.

==================================================

LOGO TRANSITION

==================================================

After the logo is isolated against black:

- hold the logo briefly

- introduce its multicolor identity progressively

- colors should appear as if flowing/revealing through the logo

- optionally use a subtle chromatic displacement or masked color reveal

- keep it elegant

- do NOT make it look like a cheap RGB glitch

Then the logo should become part of the next visual scene.

The transition should feel like one continuous shot.

==================================================

SCROLL BEHAVIOR

==================================================

Do NOT make every scroll movement simply move the webpage downward.

Instead:

Treat scroll position as a timeline.

For example:

scroll progress

    ↓

cinematic state

    ↓

background transformation

    ↓

logo transformation

    ↓

camera movement

    ↓

radial mechanism rotation

    ↓

event activation

The user should feel that they are manipulating a visual mechanism rather than reading a webpage.

Use pinned/sticky scenes where appropriate.

Avoid excessive normal vertical section transitions.

==================================================

INTRODUCTION

==================================================

After the logo sequence, transition into a short introduction to INQUIZEST.

The introduction should feel like entering a designed visual world.

Use:

- typography

- graphic props

- subtle depth

- floating illustrations

- geometric elements

- motion

- negative space

Do NOT make it look like:

ABOUT US

[paragraph]

ABOUT EVENT

[paragraph]

Instead make the information part of the composition.

Placeholder content is acceptable until real event information is provided.

==================================================

MAIN EVENT SYSTEM

==================================================

THIS IS THE MOST IMPORTANT STRUCTURAL IDEA.

Create a huge INVISIBLE radial wheel/mechanism.

The circumference itself should NOT be visible.

The circle exists only as an animation/control mechanism.

The viewer should see:

- event artwork

- typography

- graphic props

- lines

- shapes

- depth cues

- particles

- shadows

- fragments

But NOT a giant obvious circle sitting at the edge of the screen.

The radial wheel should be positioned approximately:

CENTER:

slightly above the vertical middle

toward the extreme right side

Not in the corner.

Not centered.

Not simply center-right.

The actual wheel can be much larger than the viewport.

Only portions of its contents should enter the visible composition.

==================================================

EVENTS 01–10

==================================================

Create the first invisible radial system for:

EVENT 01

EVENT 02

EVENT 03

EVENT 04

EVENT 05

EVENT 06

EVENT 07

EVENT 08

EVENT 09

EVENT 10

Each event occupies a position on the invisible radial mechanism.

Scrolling rotates the mechanism.

When an event reaches the main visual focus:

- it moves into prominence

- scales slightly

- becomes visually dominant

- typography becomes readable

- associated graphic props enter the composition

- surrounding elements move subtly

- previous event recedes

- next event begins appearing

The transition must feel like rotating through a giant invisible machine.

NOT:

"scroll down → next card"

Instead:

"rotate the world → another event comes into alignment"

==================================================

EVENT COMPOSITION

==================================================

Each event should have its own visual composition.

Possible elements:

- event number

- huge event title

- short description

- date/time placeholder

- illustrated object

- geometric shapes

- directional arrows

- lines

- halftone textures

- abstract illustrations

- small metadata

- CTA

But DO NOT put these inside conventional cards.

The event should occupy the screen like a poster/composition floating inside the world.

==================================================

TRANSITION BETWEEN EVENT 10 AND EVENT 11

==================================================

This is important.

There should be a visual transition around Event 10 → Event 11.

Introduce the SECOND radial system.

The second invisible wheel should be positioned differently:

CENTER:

slightly below the vertical middle

toward the left side

Again, the actual circle must remain invisible.

The user should feel that the entire mechanism has shifted.

Give subtle hints of the second system before Event 11.

Then Event 11 becomes the focus.

==================================================

EVENTS 11–20

==================================================

Create:

EVENT 11

EVENT 12

EVENT 13

EVENT 14

EVENT 15

EVENT 16

EVENT 17

EVENT 18

EVENT 19

EVENT 20

Use the second radial system.

Again:

NO EVENT CARDS.

NO GRID.

NO PDF-LIKE LIST.

NO BASIC SLIDESHOW.

==================================================

DEPTH / FAUX 3D

==================================================

The website is fundamentally 2D.

Use subtle depth illusions:

- parallax layers

- scale differences

- perspective

- shadows

- motion blur

- foreground/background separation

- camera-like movement

- slight rotation

- depth-based opacity

- particles

- SVG layering

Three.js may be used for selected effects.

Do not turn the website into a full 3D environment.

==================================================

INTERACTION

==================================================

Primary interaction:

SCROLL.

Secondary interactions may include:

- mouse movement affecting subtle parallax

- hover reactions

- event focus

- buttons

- pointer-based distortion

But scroll remains the primary control mechanism.

The website should feel excellent on desktop.

Add sensible mobile behavior, but prioritize the cinematic desktop experience.

==================================================

PERFORMANCE

==================================================

Important:

- Avoid huge unnecessary DOM trees.

- Use GPU acceleration where appropriate.

- Use requestAnimationFrame responsibly.

- Dispose Three.js resources.

- Avoid rendering expensive effects when they are not visible.

- Use lazy loading for event artwork.

- Keep text as DOM.

- Do not create 20 simultaneous expensive WebGL scenes.

==================================================

DESIGN LANGUAGE

==================================================

The INQUIZEST logo's colors should become the visual DNA of the website.

However:

Do NOT make the entire site rainbow-colored.

Use mostly:

- black

- white

- restrained neutrals

Then introduce the INQUIZEST colors as controlled accents.

Typography should be bold and editorial.

Mix:

- extremely large display typography

- small technical metadata

- expressive labels

- unexpected positioning

The composition should feel intentionally designed, not like a template.

==================================================

VERY IMPORTANT — WHAT NOT TO DO

==================================================

DO NOT make:

- generic SaaS landing page

- school website template

- card grid

- event cards

- PDF-like brochure

- navbar-heavy website

- ordinary vertical scrolling sections

- giant visible circular border

- obvious spinning wheel graphic

- generic 3D blobs

- generic glassmorphism

- excessive gradients

- cheesy glitch effects

- childish comic panels

- Marvel/Loki/TVA replicas

- copyrighted character artwork

Timeline/branching/mechanism concepts can be used only as abstract inspiration.

==================================================

INITIAL CONTENT

==================================================

Use placeholder content for the 20 events.

Label them:

01 — EVENT NAME

02 — EVENT NAME

...

20 — EVENT NAME

Structure the data so I can easily replace the placeholder information later.

Create a central event data structure rather than hardcoding each event separately.

==================================================

ARCHITECTURE

==================================================

Organize the project into reusable components such as:

OpeningSequence

LogoReveal

IntroWorld

RadialEventWorld

RadialMechanism

EventComposition

EventTransition

SecondRadialWorld

FinalSection

Create reusable animation utilities.

Keep animation state separate from content data.

==================================================

FINAL GOAL

==================================================

The final website should feel less like:

"Here is a website that you scroll through."

And more like:

"You have entered the visual universe of INQUIZEST, and scrolling manipulates the universe."

The opening logo reveal and the invisible radial event mechanism are the two defining features.

Prioritize those above everything else.

Do not add unnecessary sections just to make the site look complete.

Build the interaction system first, then populate the content.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2305743f-b4b1-41e4-a82a-6d2d15d75cf3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
