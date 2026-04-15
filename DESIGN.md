# Design Brief

## Direction
Premium Glass Portfolio — A dark glassmorphism showcase for entry-level developers designed to stand out to recruiters through clean composition and dynamic accent interactivity.

## Tone
Bold minimalism with creative polish — glassmorphism creates premium depth, violet-cyan accent gradient adds energy without feeling frivolous.

## Differentiation
Frosted glass cards with violet-to-cyan gradient accents on hover + smooth scroll-triggered fade-in animations + typing effect hero creates a memorable, interactive first impression.

## Color Palette

| Token      | OKLCH           | Role                                           |
|----------|-----------------|------------------------------------------------|
| background | 0.09 0 0       | Deep slate-950, app base                       |
| foreground | 0.95 0 0       | High-contrast white text                       |
| card       | 0.15 0.01 260  | Glass card base with subtle cool undertone    |
| primary    | 0.72 0.22 260  | Violet accent for interactive states          |
| accent     | 0.68 0.2 180   | Cyan complement, gradient partner             |
| muted      | 0.2 0.01 260   | Secondary surface, reduced emphasis           |
| destructive| 0.65 0.19 22   | Action red for warnings                        |
| border     | 0.22 0.01 260  | Subtle separator lines, glass edges            |

## Typography
- Display: Space Grotesk — sharp, tech-forward headings with tight tracking
- Body: DM Sans — clean, readable paragraphs and UI labels
- Mono: JetBrains Mono — code snippets, skill tags, metadata
- Scale: hero `text-5xl md:text-7xl font-bold`, h2 `text-3xl md:text-5xl font-bold tracking-tight`, label `text-sm font-semibold uppercase tracking-widest`, body `text-base text-white/80`

## Elevation & Depth
Glassmorphism layering through backdrop blur, semi-transparent white backgrounds, and subtle white borders. Violet glow shadows on hover create depth perception without heavy drop-shadows.

## Structural Zones

| Zone    | Background                              | Border                | Notes                                          |
|---------|----------------------------------------|----------------------|------------------------------------------------|
| Header  | bg-background with glass overlay       | border-white/10      | Fixed or sticky nav, minimal visual weight     |
| Content | Alternating bg-background/bg-muted/20  | None                 | Clear section separation through spacing      |
| Card    | glass (bg-white/5 backdrop-blur)       | border-white/10      | Project, cert, skill cards with glow-on-hover |
| Footer  | bg-muted/20 with border-t              | border-white/10      | Reduced emphasis, social links, copyright     |

## Spacing & Rhythm
Sections separated by `gap-16 md:gap-24`, card content padded at `p-6 md:p-8`, typography hierarchy creates breathing room. Micro-interactions (shadow, scale 1.05 on hover) respond to user focus.

## Component Patterns
- Buttons: primary = gradient background, rounded-lg, scale-105 on hover, white text
- Cards: glass + glow-subtle, glow-accent on hover over 300ms, rounded-xl
- Badges: glass small version, `px-3 py-1`, text-xs font-mono, muted-foreground

## Motion
- Entrance: Intersection Observer fade-in-up (0.6s ease-out) as sections scroll into view
- Hover: Buttons scale 1.05, cards glow and border brighten (300ms smooth transition)
- Decorative: Floating profile image (6s ease-in-out float), typing cursor in hero, ambient blur orbs in background (low opacity, no interaction)

## Constraints
- All accent colors from violet-primary to cyan-accent gradient family only
- No shadow values exceed glow-lg (prevents oversaturation in dark mode)
- Glass surfaces always use opacity 0.05 base + white border 0.1 for consistency
- Animations max duration 1s (micro-interactions) to 6s (ambient floats)

## Signature Detail
Violet-to-cyan gradient accent applied to primary buttons, card borders on hover, and text highlights. Glassmorphism backdrop blur with subtle white semi-transparency creates premium depth perception unique to modern dark mode showcases.
