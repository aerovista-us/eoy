---
name: EchoStory UI/UX Comprehensive Upgrade (Refined)
overview: "P1 COMPLETE ✅ - Theme system, toast notifications, mobile optimization, and autosave timing implemented. Next: P2 polish (shortcuts overlay, focus styling, animation polish). Preserve all existing functionality (player, booklet, scenes, capsule, autosave)."
todos:
  - id: theme-system
    content: Implement theme system (CSS variables expansion, theme toggle button in header, system preference detection, localStorage persistence, smooth transitions)
    status: completed
  - id: light-mode-palette
    content: Design and implement light mode color palette maintaining brand identity (WCAG AA compliance, appropriate shadows/gradients)
    status: completed
    dependencies:
      - theme-system
  - id: toast-system
    content: Implement toast notification system and replace all alert() calls (ambience load/play failures, copy success, save confirmations)
    status: completed
  - id: mobile-breakpoints
    content: Improve mobile responsive design (granular breakpoints 480/640/768/1024px, ensure 44x44px touch targets, sticky header, better spacing)
    status: completed
  - id: autosave-optimization
    content: Optimize autosave timing (fast UI updates, slower persistence - 800-1200ms for notes, immediate for checkboxes, throttle heavy operations)
    status: completed
  - id: mode-toggle-complete
    content: Complete Mode toggle implementation (Standard vs a-i)) - add missing el references (sHuman/sAI), fix saveState to include source, fix setSource to preserve playback position like switchVersion
    status: completed
  - id: shortcuts-overlay
    content: Create keyboard shortcuts overlay modal (press ? to show all shortcuts, accessible via keyboard)
    status: completed
  - id: focus-styling
    content: Enhance focus styling and keyboard navigation (visible focus indicators, focus trap in modals, ARIA improvements)
    status: completed
  - id: animation-polish
    content: Add smooth animations using transform/opacity only (scene transitions, button micro-interactions, list stagger, progress bars) - performance-safe
    status: completed
  - id: search-command-palette
    content: Add search/filter and command palette (Cmd/Ctrl+K) for scenes and tracks - optional enhancement
    status: pending
  - id: optional-gestures
    content: Optional gesture support (swipe scene navigation in dedicated header zone only, opt-in) - only after mobile layout is perfect
    status: pending
    dependencies:
      - mobile-breakpoints
---

# EchoStory UI/UX Comprehensive Upgrade Plan (Refined)

## Overview

**Approach**: Harden and polish the existing EchoStory interface without breaking state or functionality. Focus on safe, high-ROI improvements that make the experience feel premium while preserving all existing features (player + booklet + version toggle + scenes + capsule autosave).

## ✅ P1 Implementation Status (COMPLETE)

**Completed Items**:

- ✅ **Theme System**: Dark/light toggle with system preference detection, localStorage persistence, smooth transitions
- ✅ **Toast System**: Replaced all `alert()` calls with toast notifications (ambience errors, copy success, save confirmations)
- ✅ **Mobile UX**: Improved breakpoints (640px/420px), 44px touch targets, scrollable tabs, better spacing
- ✅ **Autosave Optimization**: Notes debounce ~1000ms, checkboxes/selects save immediately, manual Save shows toast

**Implementation Details**:

- Theme toggle button in pillbar (🌓 Theme: Dark/Light)
- Toast system with ok/warn/err variants, auto-dismiss, accessible
- Mobile media queries at 640px and 420px with optimized spacing
- Autosave uses `scheduleAutosave(1000)` for notes, `immediateAutosave()` for quick actions

## Current State (Preserve These)

✅ **Player + Booklet**: Full EchoVerse-style audio player (prev/play/next, loop, lyrics, volume) + Standard vs (1) toggle + Album Booklet card with Print✅ **Scene System**: Tabs wired to scenes (Prologue → Capsule), persist last open scene in localStorage✅ **Capsule Autosave**: Notes autosave debounced at 350ms, checklist items trigger autosave, progress updates cleanly✅ **Visual Vibe**: Particles/background FX, coherent player styling, selected-state styling for version toggles

## P1: High ROI, Low Risk (✅ COMPLETE)

### 1. Theme System (Dark/Light + Persist + System Preference) ✅

**Status**: ✅ **COMPLETE** - Theme toggle button in pillbar, system preference detection, localStorage persistence, light mode palette implemented.**Why**: Makes it feel like a "real app" instantly, low risk via CSS variables + data-theme attribute.**Implementation** (Completed):

- Expand CSS custom properties to support both themes
- Add theme toggle button in header (sun/moon icon)
- Auto-detect system preference on load (`prefers-color-scheme`)
- Save theme preference to localStorage
- Smooth transitions between themes (CSS transitions on color properties)
- Light mode palette maintaining brand identity (purple/cyan/green accents)

**Files**: `index.html` CSS variables (lines 9-16), header HTML, JavaScript theme management**Risk**: Low - CSS variables make this safe, existing dark theme preserved as default---

### 2. Toast System + Replace alert() ✅

**Status**: ✅ **COMPLETE** - Toast component implemented, all `alert()` calls replaced with toast notifications.**Why**: Premium feel, less jarring than alert() dialogs. Currently used for ambience load/play failures.**Implementation** (Completed):

- Create toast component (HTML + CSS + JS)
- Replace `alert()` calls with toast notifications:
- Ambience load failures
- Ambience play failures  
- Copy success (tracklist, JSON, Markdown)
- Save confirmations (optional - autosave already shows timestamp)
- Toast positioning (top-right or bottom-right)
- Auto-dismiss after 3-4 seconds
- Accessible (ARIA live region)

**Files**: New toast component, replace alert() calls in JavaScript (ambience handlers, copy handlers)**Risk**: Low - Non-breaking change, improves UX---

### 3. Mobile Breakpoints + Touch Targets ✅

**Status**: ✅ **COMPLETE** - Breakpoints at 640px and 420px, 44px touch targets, scrollable tabs, optimized spacing.**Why**: Current responsiveness exists but needs deeper pass. Mobile experience is critical.**Implementation** (Completed):

- Add granular breakpoints: 480px, 640px, 768px, 1024px
- Ensure all interactive elements are minimum 44x44px touch targets
- Sticky header on scroll for quick access
- Better spacing on mobile (reduce padding/margins where appropriate)
- Horizontal scroll for tab bar on mobile if needed
- Test on actual mobile devices

**Files**: `index.html` CSS media queries (lines 54, 228, etc.), layout adjustments**Risk**: Low - Responsive improvements, existing layout preserved---

### 4. Autosave Optimization ✅

**Status**: ✅ **COMPLETE** - Notes debounce ~1000ms, checkboxes/selects save immediately, manual Save shows toast.**Why**: Current 350ms is responsive but can be chatty. With toast system and heavier UI, smarter timing needed.**Implementation** (Completed):

- Fast UI updates (immediate visual feedback)
- Slower persistence: 800-1200ms debounce for notes textarea
- Immediate save for checkboxes (they're quick actions)
- Throttle heavy operations (progress calculations, state serialization)
- Keep existing timestamp updates responsive

**Files**: JavaScript autosave (lines 923-926 for notes, checkbox handlers)**Risk**: Low - Timing adjustment only, functionality preserved---

## P1.5: Mode Toggle Completion (URGENT - Fix Incomplete Implementation)

### Mode Toggle: Standard vs a-i) ✅ (Partially Implemented, Needs Completion)

**Status**: ⚠️ **PARTIALLY IMPLEMENTED** - HTML buttons exist, logic exists, but missing:
- `el.sHuman` and `el.sAI` references in element object
- `source` field not saved in `saveState()`
- `setSource()` doesn't preserve playback position like `switchVersion()` does
- `selectTrack()` doesn't include `source` in saveState

**Current Implementation**:
- ✅ HTML buttons exist: `ev-sHuman` (Standard) and `ev-sAI` (a-i))
- ✅ State has `source` field ("human" or "ai")
- ✅ `setAudioSrc()` adds "a-i)" prefix when source is "ai" (line 1793-1795)
- ✅ `setVersionUI()` handles mode button states (lines 1764-1765)
- ✅ Event listeners exist (lines 1949-1950)
- ❌ Missing: `el.sHuman` and `el.sAI` in element object
- ❌ Missing: `source` in `saveState()` payload
- ❌ Missing: `source` in `setSource()` saveState call
- ❌ Missing: Playback position preservation in `setSource()`

**Required Fixes**:

1. **Add missing element references** (line ~1631 in `el` object):
   ```javascript
   sHuman: document.getElementById("ev-sHuman"),
   sAI: document.getElementById("ev-sAI"),
   ```

2. **Add source to saveState payload** (line ~1668):
   ```javascript
   source: st.source,
   ```

3. **Fix setSource() function** (lines 1836-1849):
   - Make it work like `switchVersion()` - preserve `audio.currentTime` and playback state
   - Include `source` in saveState call: `saveState({ ...state, source: state.source, ... })`
   - Handle audio reload with position restoration using `loadedmetadata` event

4. **Fix selectTrack() to include source** (line ~1809):
   ```javascript
   saveState({ ...state, t: 0, vol: audio.volume, loop: state.loop, lyrics: state.lyrics, version: state.version, source: state.source });
   ```

5. **Update all saveState calls** throughout player code to include `source` field (multiple locations)

**Expected Behavior**:
- When "a-i)" mode is enabled, filenames are prefixed with "a-i)"
- Works with existing Standard/(1) toggle:
  - Standard mode: `cadence_seal_(future-me_contract).mp3` or `cadence_seal_(future-me_contract)_(1).mp3`
  - a-i) mode: `a-i)cadence_seal_(future-me_contract).mp3` or `a-i)cadence_seal_(future-me_contract)_(1).mp3`
- Mode preference persists in localStorage
- Playback position preserved when switching modes

**Files**: `index.html` JavaScript section (lines 1625-1850, 1945-1950)

---

## P2: Polish & Accessibility (Do Second)

### 5. Shortcuts Overlay + Focus Styling

**Why**: You already show shortcuts in footer and use ARIA roles. Making this consistent and accessible is a clean win.**Implementation**:

- Create shortcuts overlay modal (press `?` to show)
- List all keyboard shortcuts in organized format
- Accessible via keyboard (Tab navigation, Escape to close)
- Enhanced focus styling (visible focus indicators, focus rings)
- Focus trap in modals
- Small ARIA sweep (add more descriptive labels where needed)

**Files**: New modal component HTML/CSS/JS, CSS focus styles, ARIA attribute updates**Risk**: Low - Additive feature, existing shortcuts preserved---

### 6. Animation Polish (Performance-Safe)

**Why**: Smooth animations make it feel premium, but must use transform/opacity only for performance.**Implementation**:

- Scene transitions: Fade + subtle slide (transform, opacity only)
- Button micro-interactions: Scale on click (transform), subtle glow
- List stagger: Checklist items and playlist tracks animate in with stagger
- Progress bar: Smooth fill animation (already exists, enhance)
- Tab indicator: Slide animation beneath active tab (transform)

**Files**: CSS animation properties (use transform/opacity), JavaScript scene switching (lines 1034-1049)**Risk**: Low - Performance-safe animations, existing transitions enhanced---

## P3: Optional Enhancements (Do Last)

### 7. Search / Command Palette (Cmd/Ctrl+K)

**Why**: Nice-to-have feature, but not critical. Only add if time permits.**Implementation**:

- Command palette modal (Cmd/Ctrl+K or Ctrl+K)
- Search scenes by title/content
- Search tracks by title
- Quick navigation to results
- Accessible keyboard navigation

**Files**: New search component HTML/CSS/JS, scene content indexing**Risk**: Medium - New feature, test thoroughly---

### 8. Optional Gestures (Only After Mobile Layout Perfect)

**Why**: Cool but easy to make annoying. Only add if mobile layout is perfect and as opt-in.**Implementation**:

- Swipe scene navigation in dedicated header zone only (not full page)
- Opt-in or very conservative trigger zones
- Avoid scroll conflicts
- Skip pull-to-refresh and long-press (too risky)

**Files**: JavaScript touch event handlers, mobile detection**Risk**: High - Can conflict with scrolling, only add if explicitly requested---

## What We're NOT Doing (Risky Items)

❌ **Lazy Scene Loading**: Current DOM-based approach is simple and reliable. Lazy loading can introduce bugs (anchors, measurements, focus, copy/export, deep links). Keep existing approach unless performance is hurting.❌ **Aggressive Gestures**: Swipe navigation everywhere, pull-to-refresh, long-press menus - too easy to make annoying and conflict with scrolling.❌ **Breaking Changes**: All existing functionality preserved. No changes to localStorage structure, no breaking API changes.---

## Implementation Order

### ✅ Phase 1 (P1): Foundation - COMPLETE

1. ✅ Theme system + light mode palette
2. ✅ Toast system + replace alert()
3. ✅ Mobile breakpoints + touch targets
4. ✅ Autosave optimization

### 🔧 Phase 1.5: Mode Toggle Fix - URGENT

0. Complete Mode toggle implementation (Standard vs a-i))

### 🔄 Phase 2 (P2): Polish - NEXT UP

5. Shortcuts overlay + focus styling
6. Animation polish (performance-safe)

### ⏳ Phase 3 (P3): Optional - FUTURE

7. Search/command palette (if time permits)
8. Optional gestures (only if explicitly requested)

---

## Key Files to Modify

- `index.html` - Main file containing all HTML, CSS, and JavaScript
- CSS section: lines 8-400 (styles)
- HTML structure: lines 203-857 (main content)
- JavaScript: lines 1020-2004 (functionality)

## Testing Strategy

- **Preserve State**: Test that all localStorage data (scenes, capsule, player state, mantra) persists across upgrades
- **Theme Switching**: Test theme toggle in both directions, verify system preference detection
- **Mobile Testing**: Test on actual mobile devices (iOS Safari, Android Chrome)
- **Accessibility**: Test with keyboard navigation, screen reader (NVDA/JAWS)
- **Performance**: Verify animations use transform/opacity (check DevTools Performance panel)
- **Cross-browser**: Test Chrome, Firefox, Safari, Edge

## Success Criteria

### ✅ P1 Achievements (COMPLETE)

✅ All existing functionality works exactly as before

✅ Theme system works smoothly with system preference

✅ Toast notifications replace all alert() calls

✅ Mobile experience is significantly improved

✅ Autosave feels responsive but not chatty

### 🔄 P2 Goals (IN PROGRESS)

✅ Keyboard navigation is consistent and accessible

✅ Animations are smooth and performant (60fps)

## Notes

- **Backward Compatibility**: Maintain compatibility with existing localStorage data structure
- **Graceful Degradation**: Ensure features work without JavaScript where possible
- **Performance First**: All animations must use transform/opacity, no layout-triggering properties