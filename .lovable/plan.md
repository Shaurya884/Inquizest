# Brochure-led cinematic refinement

## Goal
Keep the existing one-world, scroll-controlled experience while making it move faster, blend continuously between chapters, and carry the brochure’s real identity and event information without looking like a brochure or a list of links.

## Changes
- Shorten the scroll distance across the opening, introduction, both event mechanisms, and the transition so each gesture advances the experience more quickly.
- Add overlapping colour-field and texture transitions at chapter boundaries, preventing hard page-like cuts while preserving the black-and-paper visual world.
- Replace all placeholder event entries with the brochure’s exact names, formats, dates, times, venues, age/class ranges, and participant counts.
- Present brochure details directly inside each focused event composition as cinematic metadata; remove the link-like registration buttons.
- Reframe the opening and introduction around the brochure’s primary identity: Delhi Public School Shaheedpath, third edition, and 5–6 October 2026.
- Carry brochure-inspired colour, print texture, typography contrast, and institutional cues into the current stronger visual system rather than copying the brochure’s layouts.
- Update the ending with the brochure’s real venue/contact context where appropriate, keeping it integrated into the visual world.
- Verify the complete motion sequence and readability on desktop and mobile, including reduced-motion behavior.

## Technical details
- Keep GSAP ScrollTrigger and Lenis as the motion engine, but reduce section heights and smooth the chapter boundary backgrounds with shared transition layers.
- Extend the central event data shape for class range and participant count, then render these as non-interactive labels.
- Preserve the invisible radial mechanism and logo reveal as the two primary interactions.
