---
name: vere-presentation
description: Creates brand-aligned PowerPoint presentations (.pptx) for VERE. Use whenever building any slide deck for VERE — board meetings, strategy decks, OKR reviews, culture presentations, or any internal or external communication. Keywords: VERE, presentation, slides, deck, pptx, PowerPoint, board meeting, strategy, OKR.
---

# VERE Presentation Skill

## Overview

Use this skill to build any VERE presentation from scratch using PptxGenJS. Always follow the brand rules, color system, typography, and layout patterns defined here. The output is a `.pptx` file that opens correctly in Google Slides and PowerPoint.

---

## Brand Identity

**VERE** is a family office — understated, precise, high-trust. Presentations must feel refined, never loud. Generous whitespace, minimal decoration, strong typography hierarchy.

---

## Color System

### Core palette

| Name | HEX | Usage |
|------|-----|-------|
| Crema | `#E8E4DE` | Primary background — light slides |
| Crema Oscura | `#F2F1E7` | Secondary background variant |
| Tierra | `#524834` | Primary text, headings on light bg |
| Tierra variant | `#524934` | Interchangeable with Tierra |
| Oliva | `#7C7862` | Subheadings, labels, secondary text |
| Tierra Oscura | `#332C1A` | Strong emphasis, dark headings, dark bg |
| Dark | `#161616` | High-contrast dark background |
| Muted warm | `#B8AF9D` | Captions, footnotes, tertiary text |
| Muted cool | `#ADACA9` | Tertiary text on light slides |
| Border/Line | `#C9C4B2` | Decorative lines, dividers, table borders |
| Mid warm | `#6B6756` | Body text on mid-tone backgrounds |

### Accent / mid-tone backgrounds

| Name | HEX | Usage |
|------|-----|-------|
| Sage | `#A7B2AA` | Mid-tone section slides, accent backgrounds |
| Blush | `#E5C4B5` | Warm accent background, narrative slides |
| Gold | `#CBB279` | Accent details, eyebrow labels on light |
| Sand | `#DAD5C2` | Subtle dividers, card backgrounds |

### Background rules

These are the exact background colors used in VERE presentations — use only these:

| Bg color | HEX | Type | Text color |
|----------|-----|------|------------|
| Crema | `#E8E4DE` | Light — default content | `#524834` |
| Crema Oscura | `#F2F1E7` | Light — secondary content | `#524834` |
| Sage | `#A7B2AA` | Mid-tone — narrative, culture | `#332C1A` |
| Blush | `#E5C4B5` | Mid-tone warm — purpose, values | `#332C1A` |
| Tierra Oscura | `#332C1A` | Dark — strong section dividers | `#E8E4DE` |
| Tierra | `#524834` | Dark — cover, section dividers | `#E8E4DE` |
| Black | `#161616` | Dark — high contrast sections | `#E8E4DE` |

**Never use pure white `#FFFFFF` as slide background.**

**Logo rule by background:**
- Light backgrounds (`#E8E4DE`, `#F2F1E7`, `#E5C4B5`, `#DAD5C2`) → dark logo
- Mid-tone backgrounds (`#A7B2AA`) → dark logo (sufficient contrast)
- Dark backgrounds (`#332C1A`, `#524834`, `#161616`) → light logo

---

## Typography

| Element | Font | Size | Color |
|---------|------|------|-------|
| Cover title | Lato Black | 48–58pt | `#524834` / `#E8E4DE` on dark |
| Section title | Lato Black | 40–48pt | `#524834` / `#E8E4DE` on dark |
| Slide title | Lato Bold | 26–32pt | `#524834` |
| Eyebrow / label | Montserrat SemiBold | 10–12pt | `#7C7862` |
| Body text | Montserrat Regular | 13–15pt | `#524834` / `#C9C4B2` on dark |
| Card body | Montserrat Regular | 12–14pt | `#524834` |
| Caption | Montserrat Regular | 10–11pt | `#B8AF9D` |
| Italic accent | Lato Italic | 16–20pt | `#7C7862` |
| Closing / Thank You | Lato Black | 64–80pt | varies — see Closing Slide |

---

## Logos — Embedded (no external URL needed)

Two versions. Always choose based on slide background.

| Version | Use on |
|---------|--------|
| Dark logo `#524834` | Light backgrounds (`#E8E4DE`, `#F2F1E7`) |
| Light logo `#E8E4DE` | Dark backgrounds (`#524834`, `#161616`, `#332C1A`) |

Both logos are embedded as base64 below. Use the `logoData(dark)` helper — never hardcode the strings inline.

```js
function logoData(dark = false) {
  const darkLogo  = 'data:image/png;base64,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';
  const lightLogo = 'data:image/png;base64,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';
  return dark ? lightLogo : darkLogo;
}
```

**Placement:**

| Slide | Position | Size |
|-------|----------|------|
| Cover | Top center | x:5.72, y:0.34, w:1.85, h:0.38 |
| All others | Bottom right | x:12.1, y:6.87, w:0.9, h:0.19 |

```js
// Cover — larger logo
slide.addImage({ data: logoData(dark), x: 5.72, y: 0.34, w: 1.85, h: 0.38 });
// All other slides — bottom right
slide.addImage({ data: logoData(dark), x: 12.1, y: 6.87, w: 0.9, h: 0.19 });
```

---

## Slide Dimensions

`pptx.layout = 'LAYOUT_WIDE'` → 13.33 × 7.5 inches

---

## Decorative System

Every slide gets the same frame — outer border + corner diamonds + bottom rule.

```js
function addFrame(slide, dark = false) {
  const borderColor = dark ? '7C7862' : 'C9C4B2';

  // Outer border
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.18, y: 0.18, w: 9.97, h: 7.14,
    line: { color: borderColor, width: 0.75 },
    fill: { type: 'none' }
  });
  // Top-left diamond
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.145, y: 0.145, w: 0.055, h: 0.055,
    fill: { color: '7C7862' }, line: { type: 'none' }, rotate: 45
  });
  // Bottom-right diamond
  slide.addShape(pptx.ShapeType.rect, {
    x: 10.11, y: 7.27, w: 0.055, h: 0.055,
    fill: { color: '7C7862' }, line: { type: 'none' }, rotate: 45
  });
  // Bottom rule (light slides only)
  if (!dark) {
    slide.addShape(pptx.ShapeType.line, {
      x: 0.18, y: 6.78, w: 9.97, h: 0,
      line: { color: 'C9C4B2', width: 0.5 }
    });
  }
  // Logo — bottom right
  slide.addImage({ data: logoData(dark), x: 9.2, y: 6.87, w: 0.9, h: 0.19 });
}
```

---

## Slide Templates

### Cover
```js
function addCover(slide, title, subtitle, eyebrow, dark = false) {
  slide.background = { color: dark ? '524834' : 'E8E4DE' };
  // Larger logo — top center
  slide.addImage({ data: logoData(dark), x: 5.72, y: 0.34, w: 1.85, h: 0.38 });
  addFrame(slide, dark);
  const tc = dark ? 'E8E4DE' : '524834';
  const sc = dark ? 'B8AF9D' : '7C7862';
  if (eyebrow) slide.addText(eyebrow, {
    x: 1.0, y: 3.0, w: 11.3, h: 0.4,
    fontFace: 'Lato', italic: true, fontSize: 17, color: sc, align: 'center'
  });
  slide.addText(title, {
    x: 1.0, y: 3.45, w: 11.3, h: 1.6,
    fontFace: 'Lato Black', bold: true, fontSize: 54, color: tc, align: 'center'
  });
  if (subtitle) slide.addText(subtitle, {
    x: 1.0, y: 4.95, w: 11.3, h: 0.45,
    fontFace: 'Montserrat', fontSize: 12, color: sc, align: 'center', charSpacing: 1.5
  });
}
```

### Section Divider (dark)
```js
function addSection(slide, label, title) {
  slide.background = { color: '524834' };
  addFrame(slide, true);
  if (label) slide.addText(label.toUpperCase(), {
    x: 1.0, y: 3.05, w: 11.3, h: 0.35,
    fontFace: 'Montserrat', bold: true, fontSize: 11,
    color: 'B8AF9D', align: 'center', charSpacing: 4
  });
  slide.addText(title, {
    x: 1.0, y: 3.45, w: 11.3, h: 1.4,
    fontFace: 'Lato Black', bold: true, fontSize: 44,
    color: 'E8E4DE', align: 'center'
  });
}
```

### Content Slide — text with optional cards
```js
// Simple text content
function addContent(slide, title, body, bg = 'E8E4DE') {
  const dark = ['332C1A','524834','161616'].includes(bg);
  slide.background = { color: bg };
  addFrame(slide, dark);
  const tc = dark ? 'E8E4DE' : '524834';
  slide.addText(title, {
    x: 0.45, y: 0.35, w: 12.43, h: 0.52,
    fontFace: 'Lato', bold: true, fontSize: 28, color: tc, margin: 0
  });
  slide.addShape(pptx.ShapeType.line, {
    x: 0.45, y: 0.95, w: 12.43, h: 0,
    line: { color: dark ? '7C7862' : 'C9C4B2', width: 0.5, dashType: 'dot' }
  });
  slide.addText(body, {
    x: 0.55, y: 1.15, w: 12.23, h: 5.4,
    fontFace: 'Montserrat', fontSize: 14, color: tc, valign: 'top', lineSpacingMultiple: 1.3
  });
}

// Card-based content — items displayed in rounded containers
// items = [{ label: 'Optional label', title: 'Card heading', body: 'Description text' }]
function addCards(slide, title, items, bg = 'E8E4DE') {
  const dark = ['332C1A','524834','161616'].includes(bg);
  slide.background = { color: bg };
  addFrame(slide, dark);
  const tc    = dark ? 'E8E4DE' : '524834';
  const cardBg = dark ? '3D3224' : 'DAD5C2';  // slightly off from slide bg
  const lc    = dark ? 'B8AF9D' : '7C7862';

  slide.addText(title, {
    x: 0.45, y: 0.35, w: 12.43, h: 0.52,
    fontFace: 'Lato', bold: true, fontSize: 28, color: tc, margin: 0
  });
  slide.addShape(pptx.ShapeType.line, {
    x: 0.45, y: 0.95, w: 12.43, h: 0,
    line: { color: dark ? '7C7862' : 'C9C4B2', width: 0.5, dashType: 'dot' }
  });

  const count = Math.min(items.length, 4);
  const cols  = count <= 2 ? count : count <= 3 ? 3 : 4;
  const cardW = (12.43 - 0.3 * (cols - 1)) / cols;
  const cardH = 4.8;
  const startX = 0.45;
  const startY = 1.2;

  items.slice(0, cols).forEach((item, i) => {
    const cx = startX + i * (cardW + 0.3);
    // Rounded card background
    slide.addShape(pptx.ShapeType.ROUNDED_RECTANGLE, {
      x: cx, y: startY, w: cardW, h: cardH,
      fill: { color: cardBg },
      line: { color: dark ? '524834' : 'C9C4B2', width: 0.5 },
      rectRadius: 0.08
    });
    let textY = startY + 0.28;
    if (item.label) {
      slide.addText(item.label.toUpperCase(), {
        x: cx + 0.22, y: textY, w: cardW - 0.44, h: 0.28,
        fontFace: 'Montserrat', bold: true, fontSize: 9,
        color: lc, charSpacing: 1.5
      });
      textY += 0.32;
    }
    if (item.title) {
      slide.addText(item.title, {
        x: cx + 0.22, y: textY, w: cardW - 0.44, h: 0.65,
        fontFace: 'Lato', bold: true, fontSize: 15, color: tc
      });
      textY += 0.72;
    }
    slide.addText(item.body, {
      x: cx + 0.22, y: textY, w: cardW - 0.44, h: cardH - (textY - startY) - 0.2,
      fontFace: 'Montserrat', fontSize: 13, color: tc,
      valign: 'top', lineSpacingMultiple: 1.3
    });
  });
}
```

### Two-Column Slide
```js
function addTwoCol(slide, title, leftLabel, leftBody, rightLabel, rightBody, bg = 'E8E4DE') {
  const dark = ['332C1A','524834','161616'].includes(bg);
  slide.background = { color: bg };
  addFrame(slide, dark);
  const tc = dark ? 'E8E4DE' : '524834';
  const lc = dark ? 'B8AF9D' : '7C7862';
  const dc = dark ? '7C7862' : 'C9C4B2';

  slide.addText(title, {
    x: 0.45, y: 0.35, w: 12.43, h: 0.52,
    fontFace: 'Lato', bold: true, fontSize: 28, color: tc, margin: 0
  });
  slide.addShape(pptx.ShapeType.line, {
    x: 0.45, y: 0.95, w: 12.43, h: 0,
    line: { color: dc, width: 0.5, dashType: 'dot' }
  });
  if (leftLabel) slide.addText(leftLabel.toUpperCase(), {
    x: 0.45, y: 1.12, w: 5.9, h: 0.28,
    fontFace: 'Montserrat', bold: true, fontSize: 10, color: lc, charSpacing: 1.5
  });
  slide.addText(leftBody, {
    x: 0.45, y: 1.46, w: 5.9, h: 5.0,
    fontFace: 'Montserrat', fontSize: 14, color: tc,
    valign: 'top', lineSpacingMultiple: 1.3
  });
  slide.addShape(pptx.ShapeType.line, {
    x: 6.7, y: 1.05, w: 0, h: 5.5,
    line: { color: dc, width: 0.5 }
  });
  if (rightLabel) slide.addText(rightLabel.toUpperCase(), {
    x: 7.0, y: 1.12, w: 5.9, h: 0.28,
    fontFace: 'Montserrat', bold: true, fontSize: 10, color: lc, charSpacing: 1.5
  });
  slide.addText(rightBody, {
    x: 7.0, y: 1.46, w: 5.9, h: 5.0,
    fontFace: 'Montserrat', fontSize: 14, color: tc,
    valign: 'top', lineSpacingMultiple: 1.3
  });
}
```

### KPI / Data Slide
```js
function addKPI(slide, title, kpis, bg = 'E8E4DE') {
  // kpis = [{ value: '$4.2M', label: 'Total Revenue', sublabel: 'FY2025' }]
  const dark = ['332C1A','524834','161616'].includes(bg);
  slide.background = { color: bg };
  addFrame(slide, dark);
  const tc = dark ? 'E8E4DE' : '524834';
  const mc = 'B8AF9D';
  slide.addText(title, {
    x: 0.45, y: 0.35, w: 12.43, h: 0.52,
    fontFace: 'Lato', bold: true, fontSize: 28, color: tc, margin: 0
  });
  slide.addShape(pptx.ShapeType.line, {
    x: 0.45, y: 0.95, w: 12.43, h: 0,
    line: { color: dark ? '7C7862' : 'C9C4B2', width: 0.5, dashType: 'dot' }
  });
  const cols  = Math.min(kpis.length, 4);
  const cellW = 12.43 / cols;
  kpis.forEach((k, i) => {
    const cx  = 0.45 + i * cellW + 0.1;
    const cw  = cellW - 0.2;
    slide.addText(k.value, {
      x: cx, y: 2.1, w: cw, h: 1.7,
      fontFace: 'Lato Black', bold: true, fontSize: 54, color: tc, align: 'center'
    });
    slide.addText(k.label, {
      x: cx, y: 3.88, w: cw, h: 0.36,
      fontFace: 'Montserrat', bold: true, fontSize: 10, color: tc, align: 'center', charSpacing: 1
    });
    if (k.sublabel) slide.addText(k.sublabel, {
      x: cx, y: 4.27, w: cw, h: 0.32,
      fontFace: 'Montserrat', fontSize: 10, color: mc, align: 'center'
    });
    if (i < cols - 1) slide.addShape(pptx.ShapeType.line, {
      x: 0.45 + (i + 1) * cellW, y: 1.7, w: 0, h: 3.2,
      line: { color: dark ? '7C7862' : 'C9C4B2', width: 0.5 }
    });
  });
}
```

### Closing Slide — "Thank You" / Gracias
The closing slide adapts its background based on which backgrounds were used in the deck:
- If the deck used **only Crema** variants → closing uses `#524834` (Tierra dark)
- If the deck used **Sage** (`#A7B2AA`) → closing uses `#332C1A` (Tierra Oscura)
- If the deck already used `#524834` as cover → closing uses `#332C1A`
- Default: `#524834`

The text "Thank You" or "Gracias" should be very large (64–80pt), centered, with the logo centered below it.

```js
function addClosing(slide, message, subtitle, usedBgs) {
  // Determine closing bg — avoid repeating the cover color if possible
  let bg = '524834';
  if (usedBgs.includes('524834') && !usedBgs.includes('332C1A')) bg = '332C1A';
  else if (usedBgs.includes('A7B2AA')) bg = '332C1A';

  slide.background = { color: bg };
  addFrame(slide, true);

  slide.addText(message, {
    x: 1.0, y: 2.2, w: 11.3, h: 2.2,
    fontFace: 'Lato Black', bold: true, fontSize: 72,
    color: 'E8E4DE', align: 'center'
  });
  if (subtitle) slide.addText(subtitle, {
    x: 1.0, y: 4.3, w: 11.3, h: 0.45,
    fontFace: 'Montserrat', fontSize: 13,
    color: 'B8AF9D', align: 'center'
  });
  // Logo centered — larger than footer version
  slide.addImage({ data: logoData(true), x: 5.72, y: 5.1, w: 1.85, h: 0.38 });
}

// Usage:
// const usedBgs = ['524834', 'E8E4DE', 'F2F1E7', 'A7B2AA']; // track as you build
// addClosing(closingSlide, 'Thank You', 'verefo.com', usedBgs);
```

---

## Tables

Use for structured data — OKRs, comparisons, budgets, schedules.

**Visual rules:**
- Header row: background `#524834`, text `#E8E4DE`, Montserrat SemiBold 9pt, uppercase
- Odd data rows: background `#F2F1E7`
- Even data rows: background `#E8E4DE`
- First column: Montserrat SemiBold 10pt, `#524834`
- Body cells: Montserrat Regular 10pt, `#524834`
- All borders: `#C9C4B2`, 0.5pt
- Row height: 0.42 inches minimum
- All text: vertically centered

```js
function addTable(slide, title, headers, rows) {
  slide.background = { color: 'E8E4DE' };
  addFrame(slide, false);

  slide.addText(title, {
    x: 0.45, y: 0.32, w: 9.1, h: 0.45,
    fontFace: 'Lato', bold: true, fontSize: 22, color: '524834'
  });
  slide.addShape(pptx.ShapeType.line, {
    x: 0.45, y: 0.82, w: 9.1, h: 0,
    line: { color: 'C9C4B2', width: 0.5, dashType: 'dot' }
  });

  const tableRows = [];

  // Header
  tableRows.push(headers.map(h => ({
    text: h.toUpperCase(),
    options: {
      bold: true, fontSize: 9, fontFace: 'Montserrat',
      color: 'E8E4DE', fill: { color: '524834' },
      align: 'left', valign: 'middle', margin: [0, 6, 0, 6]
    }
  })));

  // Data rows
  rows.forEach((row, i) => {
    tableRows.push(row.map((cell, ci) => ({
      text: cell,
      options: {
        bold: ci === 0, fontSize: 10, fontFace: 'Montserrat',
        color: '524834',
        fill: { color: i % 2 === 0 ? 'F2F1E7' : 'E8E4DE' },
        align: 'left', valign: 'middle', margin: [0, 6, 0, 6]
      }
    })));
  });

  slide.addTable(tableRows, {
    x: 0.45, y: 1.0, w: 9.1, rowH: 0.42,
    border: { type: 'solid', color: 'C9C4B2', pt: 0.5 },
    autoPage: false
  });
}

// Dark variant — for slides with dark background
// Header: fill '332C1A', color 'E8E4DE'
// Odd rows: fill '524834', color 'C9C4B2'
// Even rows: fill '3D3224', color 'C9C4B2'
// Border: color '7C7862'
```

---

## Layout Principles

### Core rules
1. **Margins** — never closer than 0.45" from slide edge inside the border
2. **Dotted separator** after every slide title: `dashType: 'dot', color: 'C9C4B2'`
3. **No solid colored bars**, header strips, or sidebar ribbons
4. **Eyebrow labels** — uppercase, Montserrat SemiBold 10pt, `#7C7862`, above section headings
5. **Max 40 words on screen** — rest goes to speaker notes
6. **No icons from external libraries** — use simple shapes and rounded rectangles only

### Color proportion
7. **2:1 Crema rule** — for every accent or dark slide, there should be at least 2 Crema/light slides (`#E8E4DE` or `#F2F1E7`). Crema is the dominant background.
8. **Don't alternate colors slide by slide** — group similar tones in blocks. Open dark, run Crema slides, use one accent mid-deck, close dark.
9. **Recommended deck structure**: Cover (dark) → Crema block → 1 accent (Sage or Blush) optional → Crema block → Closing (dark). Never more than 2 consecutive dark/accent slides.

### Layout variety — don't repeat the same layout
Every deck should use at least 3 different layout types. Available options:

**Text layouts:**
- Full-width narrative (single large text block, centered vertically — for bold statements)
- Title + body (left-aligned, generous line height — default content slide)
- Two-column (text + text, or label/heading/body in each)

**Card layouts (use when content has 2–4 discrete items):**
- Card grid — rounded containers, slightly offset bg color, label + title + body inside each card
- Cards are an option, not the default — use when content has natural distinct units (pillars, values, steps, options). Don't force cards on flowing narrative content.

**Data layouts:**
- Large stat callouts — 1–4 KPIs with big numbers (54pt+), label, sublabel
- Comparison columns — two clear sides separated by a thin line
- Timeline / process flow — numbered steps using shapes and lines

**Quote / statement slide:**
- Very large italic text (Lato Italic 32–42pt) centered on a Crema or Sage background
- Used for key narrative moments — mission, vision, a defining phrase

### Visual balance per slide
- **Size contrast matters** — titles must visually dominate body text. Min ratio: title 2× body size.
- **Don't create text-only slides** — add a shape element, stat callout, card container, or thin accent line to every slide.
- **Left-align body text always** — only titles and closing statements are centered.
- **Consistent spacing** — choose 0.3" or 0.5" gaps between blocks and apply consistently across all slides.
- **Don't fill every inch** — whitespace is intentional in VERE's aesthetic. Let content breathe.
- **Never repeat the same layout across consecutive slides** — vary between full-text, two-column, cards, and stats across the deck.

---

## Rules — Never Break

### Brand rules
- Never use pure white `#FFFFFF` as slide background
- Never add decorative colored bars, header strips, or sidebar ribbons
- Always use dark logo on light/mid-tone slides (`#E8E4DE`, `#F2F1E7`, `#A7B2AA`, `#E5C4B5`)
- Always use light logo on dark slides (`#332C1A`, `#524834`, `#161616`)
- Always include outer border + corner diamonds on every slide
- Always declare fonts as `Lato Black` / `Lato` / `Montserrat`
- Always include a closing slide as the last slide — use `addClosing()`
- Crema must be the dominant background — minimum 2:1 ratio vs accent/dark slides
- Cover logo: `w:1.85, h:0.38`. All other slides: `w:0.9, h:0.19`

### Design quality rules (from base skill — always apply)
- **Never repeat the same layout** across consecutive slides — vary between text, two-column, cards, stats, and quote layouts
- **Never create text-only slides** — every slide needs at least one visual element beyond text (card container, stat callout, shape, or thin accent line)
- **Never center body text** — left-align all paragraphs and list items; center only titles and closing statements
- **NEVER use accent lines under titles** — hallmark of AI-generated slides; use whitespace instead
- **Never ship text that overflows** — if text doesn't fit, reduce font size or split across slides
- **Never use equal visual weight for all elements** — one element per slide must dominate (usually the title or a stat callout)
- **Size contrast always** — title must be visually 2× larger than body text minimum
