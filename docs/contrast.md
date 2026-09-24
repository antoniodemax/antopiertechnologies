# Colour contrast record

Brand values sampled from the supplied logo file (`ANTOPIER TECHNOLOGIES logo.png`, 2026-09-24):
`#1E62A3` (dominant blue) and `#15396F` (darker bar-chart blue). WCAG 2.x ratios, computed 2026-09-24.

| Foreground | Background | Ratio | Use | Passes |
|---|---|---|---|---|
| `#1E62A3` brand | `#FFFFFF` | 6.30 | Links, eyebrows, icons | AA text |
| `#FFFFFF` | `#1E62A3` brand | 6.30 | Primary button text | AA text |
| `#1E62A3` brand | `#F6F8FB` surface-muted | 5.93 | Links on muted sections | AA text |
| `#1E62A3` brand | `#EDF3FA` brand-subtle | 5.64 | Active tab/selected state text | AA text |
| `#FFFFFF` | `#15396F` brand-deep | 11.37 | Headings on deep sections | AAA |
| `#C9D6E6` on-deep | `#15396F` | 7.71 | Body text on deep sections | AAA |
| `#9FB3CC` on-deep-muted | `#15396F` | 5.30 | Eyebrows/icons on deep sections | AA text |
| `#0C1A2B` ink | `#FFFFFF` | 17.53 | Body and headings | AAA |
| `#4B5B70` ink-muted | `#FFFFFF` / `#F6F8FB` | 6.93 / 6.52 | Secondary text | AA text |
| `#5F6E81` ink-subtle | `#FFFFFF` / `#F6F8FB` | 5.21 / 4.89 | Labels, captions | AA text |
| `#8391A4` border-strong | `#FFFFFF` | 3.21 | Form control borders | AA non-text (1.4.11) |
| `#B42318` danger | `#FFFFFF` | 6.57 | Form errors | AA text |
| `#067647` success | `#FFFFFF` | 5.69 | Success states | AA text |

The logo blue passes for text and for white text on buttons, so no darker substitute colour was needed (PRD flag F6 resolved).
axe-core (WCAG 2.2 AA tags) reported 0 violations on all 9 routes at 1440px and 390px on 2026-09-24.
