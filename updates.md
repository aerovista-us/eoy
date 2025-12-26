```html
<!-- =========================================================
 EchoStory: Full Styled Playlist Player + Album Booklet
 Title: COHERENCE BY DEFAULT
 Drop-in snippet (HTML + CSS + JS)
 Put this anywhere in your page body where you want the player.
 Assumes MP3s live in the SAME folder as the HTML file.
 File names (from your screenshot):
  - inevitable_spine.mp3
  - year_in_signals.mp3
  - quarter_reel_(stabilize_to_converge).mp3
  - guardrails_(double_down_drop).mp3
  - cadence_seal_(future-me_contract).mp3
 ========================================================== -->

<section id="echostory-coherence" class="ev-wrap">
  <header class="ev-hero">
    <div class="ev-sigil" aria-hidden="true"></div>
    <div class="ev-heroText">
      <h2 class="ev-title">EchoStory Album Booklet — <span>“COHERENCE BY DEFAULT”</span></h2>
      <p class="ev-sub">
        Systems log turned into Swamp-Hop. Sparks → Spine. Integration → Durability → Cadence.
      </p>
      <div class="ev-badges">
        <span class="ev-badge">Playlist Player</span>
        <span class="ev-badge">Booklet Mode</span>
        <span class="ev-badge" id="ev-saveBadge">Autosave: On</span>
      </div>
    </div>
  </header>

  <div class="ev-grid">
    <!-- PLAYER CARD -->
    <article class="ev-card ev-player" aria-label="EchoStory playlist player">
      <div class="ev-cardHead">
        <div>
          <div class="ev-cardTitle">Now Playing</div>
          <div class="ev-cardHint">Tap a track. Player remembers last track + position.</div>
        </div>
        <div class="ev-mini">
          <button class="ev-btn ghost" id="ev-btn-booklet">Booklet</button>
          <button class="ev-btn ghost" id="ev-btn-copy">Copy Tracklist</button>
        </div>
      </div>

      <div class="ev-now">
        <div class="ev-nowMeta">
          <div class="ev-nowLine1">
            <span class="ev-letter" id="ev-letter">A</span>
            <span class="ev-trackName" id="ev-trackName">Inevitable Spine</span>
          </div>
          <div class="ev-nowLine2">
            <span class="ev-small" id="ev-trackFile">inevitable_spine.mp3</span>
            <span class="ev-dot">•</span>
            <span class="ev-small" id="ev-trackTime">0:00 / 0:00</span>
          </div>
        </div>

        <div class="ev-progress">
          <input id="ev-seek" type="range" min="0" max="1000" value="0" step="1" aria-label="Seek" />
          <div class="ev-progressMeta">
            <span class="ev-small" id="ev-cur">0:00</span>
            <span class="ev-small" id="ev-dur">0:00</span>
          </div>
        </div>

        <div class="ev-controls">
          <button class="ev-btn" id="ev-prev" aria-label="Previous">⏮</button>
          <button class="ev-btn primary" id="ev-play" aria-label="Play/Pause">▶</button>
          <button class="ev-btn" id="ev-next" aria-label="Next">⏭</button>

          <div class="ev-right">
            <button class="ev-btn ghost" id="ev-loop" aria-label="Loop">Loop: Off</button>
            <button class="ev-btn ghost" id="ev-lyrics" aria-label="Lyrics">Lyrics</button>
            <div class="ev-vol">
              <span class="ev-small">Vol</span>
              <input id="ev-vol" type="range" min="0" max="1" value="0.9" step="0.01" aria-label="Volume" />
            </div>
          </div>
        </div>

        <div class="ev-notes">
          <div class="ev-notesHead">Liner Notes</div>
          <div class="ev-notesBody" id="ev-notesBody">
            The moment the builder becomes the architect. No more flare-gun wins—just durable outcomes.
          </div>
          <div class="ev-notesTags" id="ev-tags"></div>
        </div>

        <div class="ev-lyrics-panel" id="ev-lyrics-panel" style="display:none">
          <div class="ev-notesHead">Lyrics & Structure</div>
          <div class="ev-lyrics-content" id="ev-lyrics-content"></div>
        </div>
      </div>

      <div class="ev-divider"></div>

      <div class="ev-list" id="ev-list" aria-label="Playlist"></div>

      <audio id="ev-audio" preload="metadata"></audio>

      <div class="ev-foot">
        <div class="ev-small">
          Shortcuts: <b>Space</b>=Play/Pause • <b>←/→</b>=Seek • <b>N/P</b>=Next/Prev • <b>L</b>=Loop • <b>Y</b>=Lyrics
        </div>
        <div class="ev-small" id="ev-lastSaved">Last saved: —</div>
      </div>
    </article>

    <!-- BOOKLET CARD -->
    <aside class="ev-card ev-booklet" aria-label="Album booklet">
      <div class="ev-cardHead">
        <div>
          <div class="ev-cardTitle">Album Booklet</div>
          <div class="ev-cardHint">This page is designed to feel like a one-sheet insert.</div>
        </div>
        <button class="ev-btn ghost" id="ev-btn-print">Print</button>
      </div>

      <div class="ev-bookletBody" id="ev-bookletBody">
        <h3>Album concept</h3>
        <p>
          This isn’t a year recap — it’s a systems log turned into music. The arc moves from sparks → spine:
          from proving you can build to building like the outcome is inevitable.
          The sound stays unmistakably Swamp-Hop: halftime pressure, engineered minimalism, warm truth,
          and a tiny bit of neon circuitry.
        </p>

        <div class="ev-quote">
          <div class="ev-quoteKicker">Core mantra</div>
          <div class="ev-quoteText">“I build environments where good outcomes become the default.”</div>
        </div>

        <h3>Tracklist + liner notes</h3>
        <div class="ev-bookletTrack" data-track="0">
          <b>A) Inevitable Spine</b>
          <p>The moment the builder becomes the architect. This is the thesis: no more flare-gun wins—just durable outcomes.</p>
        </div>
        <div class="ev-bookletTrack" data-track="1">
          <b>B) Year in Signals</b>
          <p>A readable signal inside the static. Integration over accumulation, clarity over volume, finishing over novelty.</p>
        </div>
        <div class="ev-bookletTrack" data-track="2">
          <b>C) Quarter Reel (Stabilize → Converge)</b>
          <p>Four-part montage: Q1 noise-cut, Q2 structural integrity, Q3 identity compression, Q4 convergence.</p>
        </div>
        <div class="ev-bookletTrack" data-track="3">
          <b>D) Guardrails (Double Down / Drop)</b>
          <p>Governance in chant form. If it doesn’t connect or strengthen the system, it’s optional.</p>
        </div>
        <div class="ev-bookletTrack" data-track="4">
          <b>I) Cadence / Seal (Future-Me Contract)</b>
          <p>The maintenance ritual: daily filter, weekly loop closure, monthly audit. The promise the system stays alive.</p>
        </div>

        <h3>Credits (in-world)</h3>
        <ul>
          <li><b>Founder Voice:</b> Timbr (wise grit)</li>
          <li><b>Signal / Tech Prophet:</b> Byte</li>
          <li><b>Spine:</b> NXCore</li>
          <li><b>Cockpit:</b> AeroCoreOS</li>
          <li><b>Heartbeat:</b> EchoVerse</li>
        </ul>

        <h3>How to listen</h3>
        <p>
          First run: A → I in order. After that:
          discipline = D → C → I • meaning = A → I • systems = B → C → D.
        </p>
      </div>
    </aside>
  </div>
</section>

<style>
  :root{
    --ev-bg:#0b0f14;
    --ev-txt:#e7f0ff;
    --ev-muted:#9fb3cc;
    --ev-stroke:rgba(255,255,255,.10);
    --ev-a:#7c5cff;
    --ev-b:#27e0ff;
    --ev-g:#2cff8f;
    --ev-y:#ffd34d;
    --ev-r:#ff4d6d;
    --ev-br:18px;
    --ev-shadow:0 20px 60px rgba(0,0,0,.45);
    --ev-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono","Courier New", monospace;
    --ev-sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
  }
  .ev-wrap{max-width:1200px; margin:0 auto; padding:18px 16px 34px; color:var(--ev-txt); font-family:var(--ev-sans);}
  .ev-hero{display:flex; gap:14px; align-items:center; margin-bottom:14px;}
  .ev-sigil{
    width:52px; height:52px; border-radius:16px;
    background: conic-gradient(from 180deg, rgba(124,92,255,.95), rgba(39,224,255,.85), rgba(44,255,143,.85), rgba(255,211,77,.85), rgba(255,77,109,.85), rgba(124,92,255,.95));
    box-shadow: 0 10px 40px rgba(124,92,255,.22);
    position:relative; flex:0 0 auto;
  }
  .ev-sigil:after{content:""; position:absolute; inset:2px; border-radius:14px; background:linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.15)); border:1px solid var(--ev-stroke);}
  .ev-title{margin:0; font-size:18px; letter-spacing:.2px}
  .ev-title span{color:rgba(39,224,255,.95)}
  .ev-sub{margin:4px 0 0; color:var(--ev-muted); font-size:13px; line-height:1.35}
  .ev-badges{display:flex; gap:8px; flex-wrap:wrap; margin-top:10px}
  .ev-badge{
    font-size:11px; padding:6px 10px; border-radius:999px; background:rgba(255,255,255,.05);
    border:1px solid var(--ev-stroke); color:rgba(231,240,255,.8);
  }

  .ev-grid{display:grid; grid-template-columns: 1.25fr .75fr; gap:14px;}
  @media (max-width: 980px){ .ev-grid{grid-template-columns:1fr} }

  .ev-card{
    background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
    border:1px solid var(--ev-stroke);
    border-radius:var(--ev-br);
    box-shadow:var(--ev-shadow);
    overflow:hidden;
    backdrop-filter: blur(10px);
  }
  .ev-cardHead{
    padding:14px 14px 12px;
    background:linear-gradient(180deg, rgba(0,0,0,.25), transparent);
    border-bottom:1px solid rgba(255,255,255,.06);
    display:flex; align-items:flex-start; justify-content:space-between; gap:10px;
  }
  .ev-cardTitle{font-size:14px; font-weight:750}
  .ev-cardHint{font-size:12px; color:var(--ev-muted); margin-top:4px; line-height:1.3}
  .ev-mini{display:flex; gap:8px; flex-wrap:wrap}

  .ev-btn{
    appearance:none; border:none; cursor:pointer;
    padding:10px 12px; border-radius:12px;
    background:rgba(124,92,255,.15);
    color:var(--ev-txt); font-weight:750; font-size:13px;
    border:1px solid rgba(124,92,255,.35);
    transition: transform .12s ease, background .12s ease, border-color .12s ease;
    user-select:none;
  }
  .ev-btn:hover{transform:translateY(-1px); background:rgba(124,92,255,.20); border-color:rgba(124,92,255,.55)}
  .ev-btn.primary{background:rgba(39,224,255,.14); border-color:rgba(39,224,255,.40)}
  .ev-btn.ghost{background:rgba(255,255,255,.05); border-color:rgba(255,255,255,.14); color:rgba(231,240,255,.78); font-weight:650}

  .ev-now{padding:12px 14px 14px}
  .ev-nowLine1{display:flex; gap:10px; align-items:center; flex-wrap:wrap}
  .ev-letter{
    font-family:var(--ev-mono);
    font-size:12px; padding:4px 8px; border-radius:999px;
    background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.14);
  }
  .ev-trackName{font-size:16px; font-weight:850; letter-spacing:.2px}
  .ev-nowLine2{display:flex; gap:8px; align-items:center; color:var(--ev-muted); font-size:12px; margin-top:5px}
  .ev-dot{opacity:.7}

  .ev-progress{margin-top:12px}
  .ev-progress input[type="range"]{width:100%}
  .ev-progressMeta{display:flex; justify-content:space-between; margin-top:6px}
  .ev-small{font-size:12px; color:var(--ev-muted)}
  .ev-controls{
    display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;
    margin-top:12px;
  }
  .ev-controls > div, .ev-right{display:flex; gap:10px; align-items:center; flex-wrap:wrap}
  .ev-vol{display:flex; gap:8px; align-items:center}
  .ev-vol input[type="range"]{width:140px}
  @media (max-width: 560px){ .ev-vol input[type="range"]{width:120px} }

  .ev-notes{
    margin-top:12px;
    padding:12px 12px;
    border-radius:14px;
    background:linear-gradient(180deg, rgba(12,18,26,.70), rgba(12,18,26,.35));
    border:1px solid rgba(255,255,255,.10);
  }
  .ev-notesHead{font-size:12px; color:rgba(231,240,255,.82); font-weight:800; letter-spacing:.2px; margin-bottom:6px}
  .ev-notesBody{font-size:13px; line-height:1.45; color:rgba(231,240,255,.90)}
  .ev-notesTags{display:flex; gap:8px; flex-wrap:wrap; margin-top:10px}

  .ev-lyrics-panel{
    margin-top:12px;
    padding:12px 12px;
    border-radius:14px;
    background:linear-gradient(180deg, rgba(12,18,26,.70), rgba(12,18,26,.35));
    border:1px solid rgba(255,255,255,.10);
  }
  .ev-lyrics-content{
    font-size:13px; line-height:1.45; color:rgba(231,240,255,.90);
    white-space:pre-line;
  }
  .ev-lyrics-structure{
    font-family:var(--ev-mono);
    font-size:11px;
    color:rgba(39,224,255,.8);
    margin-bottom:8px;
    font-weight:600;
  }
  .ev-tag{
    font-size:11px; padding:6px 10px; border-radius:999px;
    border:1px solid rgba(255,255,255,.12);
    background:rgba(255,255,255,.05);
    color:rgba(231,240,255,.76);
  }

  .ev-divider{height:1px; background:linear-gradient(90deg, transparent, rgba(39,224,255,.25), rgba(124,92,255,.25), rgba(44,255,143,.18), transparent);}

  .ev-list{padding:10px 10px 12px; display:grid; gap:8px}
  .ev-row{
    display:flex; gap:10px; align-items:center; justify-content:space-between;
    padding:10px 10px;
    border-radius:14px;
    background:rgba(255,255,255,.04);
    border:1px solid rgba(255,255,255,.10);
    cursor:pointer;
    transition: transform .12s ease, border-color .12s ease, background .12s ease;
  }
  .ev-row:hover{transform:translateY(-1px); border-color:rgba(39,224,255,.25); background:rgba(255,255,255,.06)}
  .ev-row.active{border-color:rgba(39,224,255,.45); background:rgba(39,224,255,.08)}
  .ev-rowLeft{display:flex; gap:10px; align-items:center; min-width:0}
  .ev-rowTitle{font-weight:800; font-size:13px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis}
  .ev-rowMeta{font-size:11px; color:var(--ev-muted); margin-top:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:60ch}
  .ev-rowRight{display:flex; gap:10px; align-items:center; color:var(--ev-muted); font-size:12px}
  .ev-chip{
    font-family:var(--ev-mono); font-size:11px; padding:4px 8px; border-radius:999px;
    background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12); color:rgba(231,240,255,.72);
  }

  .ev-foot{padding:10px 14px 14px; display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap; border-top:1px solid rgba(255,255,255,.06)}

  .ev-bookletBody{padding:12px 14px 16px; color:rgba(231,240,255,.90)}
  .ev-bookletBody h3{margin:12px 0 6px; font-size:13px; letter-spacing:.2px}
  .ev-bookletBody p, .ev-bookletBody li{font-size:13px; line-height:1.5; color:rgba(231,240,255,.85)}
  .ev-bookletBody ul{margin:6px 0 0 18px}
  .ev-quote{
    border-radius:14px; padding:12px 12px;
    background:linear-gradient(180deg, rgba(12,18,26,.75), rgba(12,18,26,.35));
    border:1px solid rgba(255,255,255,.10);
    margin:10px 0 12px;
  }
  .ev-quoteKicker{font-size:11px; color:rgba(231,240,255,.75); letter-spacing:.25px; text-transform:uppercase}
  .ev-quoteText{font-size:14px; font-weight:850; margin-top:6px}
  .ev-bookletTrack{
    padding:10px 10px; border-radius:14px;
    background:rgba(255,255,255,.04);
    border:1px solid rgba(255,255,255,.10);
    margin-top:8px;
    cursor:pointer;
  }
  .ev-bookletTrack:hover{border-color:rgba(39,224,255,.25)}
  .ev-bookletTrack b{display:block; font-size:13px}
  .ev-bookletTrack p{margin:6px 0 0; color:rgba(231,240,255,.80)}

  /* Print-friendly */
  @media print{
    .ev-btn, #ev-btn-copy, #ev-btn-booklet, #ev-saveBadge, #ev-lastSaved, #ev-lyrics-panel {display:none !important;}
    .ev-card{box-shadow:none !important;}
  }
</style>

<script>
  (function(){
    // ---------------------------
    // CONFIG
    // ---------------------------
    // If your MP3s are in a subfolder (e.g., "./audio/"), set:
    // const basePath = "./audio/";
    const basePath = "./";

    // Use the “non-(1)” files as canonical.
    // Order matches your EchoStory arc for the files you currently have.
    const playlist = [
      {
        letter: "A",
        title: "Inevitable Spine",
        file: "inevitable_spine.mp3",
        notes: "The moment the builder becomes the architect. No more flare-gun wins—just durable outcomes.",
        tags: ["spine", "thesis", "durability", "coherence"],
        lyrics: `[VERSE 1]
From sparks to structure, we forged ahead
No more chasing flares in the night
The builder became architect instead
Building what lasts into the light

[CHORUS]
Inevitable spine, holding it all together
When the noise fades, what remains forever
Not the wins that flash, but the systems that endure
Coherence by default, that's the cure

[VERSE 2]
Proving turned to knowing, the shift was complete
No more questions if, only when and how deep
Infrastructure as love, systems that protect
Future selves can trust what we built and connect

[CHORUS]
Inevitable spine, holding it all together
When the noise fades, what remains forever
Not the wins that flash, but the systems that endure
Coherence by default, that's the cure`
      },
      {
        letter: "B",
        title: "Year in Signals",
        file: "year_in_signals.mp3",
        notes: "A readable signal inside the static: integration over accumulation, clarity over volume, finishing over novelty.",
        tags: ["signals", "integration", "clarity", "finish"],
        lyrics: `[INTRO - SIGNAL TONE]
...beep... transmission received...

[VERSE 1]
In the static of the year, we found the signal clear
Integration over piles, clarity over noise
Finishing the loops we started, closing every door
Not chasing shiny objects, building what endures

[CHORUS]
Year in signals, reading between the lines
Coherence emerged from scattered designs
Not volume, not hype, but the quiet strength
Of systems that connect and go to any length

[VERSE 2]
From accumulation to connection, the pivot was made
Each piece finding purpose, no longer waylaid
Stories with function, tools that carry meaning
The signal got stronger, the vision more gleaming

[BRIDGE]
Reduce friction, deepen meaning, strengthen the system
Daily filter applied, no more random additions
Finishing energy preserved, coherence achieved
The signal is clear now, the message received

[OUTRO]
...transmission complete...`
      },
      {
        letter: "C",
        title: "Quarter Reel (Stabilize → Converge)",
        file: "quarter_reel_(stabilize_to_converge).mp3",
        notes: "Four-part montage: Q1 noise-cut, Q2 structural integrity, Q3 identity compression, Q4 convergence.",
        tags: ["quarters", "arc", "structure", "converge"],
        lyrics: `[Q1 - STABILIZE]
Quarter one, clearing the noise
Roadmap authority returned, made the hard choice
Activity wasn't progress, we saw through the veil
Stabilize the foundation, let the real work prevail

[Q2 - STRUCTURE]
Quarter two, integrity built
Architect behavior emerged, decisions that held
From builder to system steward, the evolution complete
Structural bones formed, ready for anything we'd meet

[Q3 - COMPRESS]
Quarter three, identity squeezed
Subtraction became creation, what we kept was what we believed
Output intentional, systems refined
Compression revealed the essence we designed

[Q4 - CONVERGE]
Quarter four, everything aligned
One center orbiting, story and function combined
Tools supported the narrative, narrative drove the tools
Convergence achieved, breaking all the old rules

[FINAL CHORUS]
Stabilize to structure, compress to converge
The arc of the year, each quarter we emerged
From scattered to focused, from loose to tight
Coherence by default, burning bright`
      },
      {
        letter: "D",
        title: "Guardrails (Double Down / Drop)",
        file: "guardrails_(double_down_drop).mp3",
        notes: "Governance in chant form. If it doesn't connect or strengthen the system, it's optional.",
        tags: ["guardrails", "discipline", "drop", "keep"],
        lyrics: `[CHANT INTRO]
Guardrails rising, discipline calling
What serves the system? What deserves falling?

[VERSE 1 - DOUBLE DOWN]
Integration first, connections that matter
Narrative systems, stories that function
Finishing energy, loops we complete
Internal coherence, what makes it all sweet

[CHORUS]
Guardrails guide us, double down or drop
If it doesn't reduce friction, if it doesn't make it stop
Deepen meaning, strengthen system - that's the test
Everything else is optional, put it to rest

[VERSE 2 - DROP]
Over-rescuing ideas that already taught the lesson
Explaining before shipping, presence over confession
Over-polishing confusion, clarity comes first
Re-litigating decisions, trust what we rehearsed

[BRIDGE]
The daily filter: reduce friction, deepen meaning, strengthen system
Applied relentlessly, no more random additions
Guardrails protect the coherence, protect the flow
What doesn't serve the system? It's time to let go

[FINAL CHANT]
Guardrails standing, the system protected
Coherence preserved, nothing neglected
Double down on what works, drop what divides
Guardrails guide the way to the other side`
      },
      {
        letter: "I",
        title: "Cadence / Seal (Future-Me Contract)",
        file: "cadence_seal_(future-me_contract).mp3",
        notes: "The maintenance ritual: daily filter, weekly loop closure, monthly audit. The promise the system stays alive.",
        tags: ["cadence", "seal", "maintenance", "future-me"],
        lyrics: `[OPENING SEAL]
Future me, this contract we sign
The system stays alive, the cadence divine
Daily, weekly, monthly - the rhythm we keep
Promise to future selves what we won't let sleep

[VERSE 1 - DAILY]
Daily filter applied, three questions we ask
Reduce friction, deepen meaning, strengthen the task
One meaningful action, choose with care
Seal one sentence future you can trust is there

[CHORUS]
Cadence seals the deal, future me contract
Maintenance ritual, that's a solid pact
Protect finishing energy, protect coherence, protect meaning
The system stays alive, no more daydreaming

[VERSE 2 - WEEKLY]
Weekly we close loops, honor guardrails we set
Delete what's optional, improve integrations yet
One loop closed, one guardrail honored, one integration improved
The system gets stronger, the foundation unmoved

[VERSE 3 - MONTHLY]
Monthly we audit, spine checked for fractures
Priorities reset, visibility choices we capture
What becomes public? What stays internal?
The contract with future me, eternally eternal

[BRIDGE]
Future me reads this, sees the system intact
Not abandoned to chaos, not left to the rack
The cadence preserved it, the seal kept it tight
Coherence by default, burning through the night

[FINAL SEAL]
Future me, the contract is sealed
The system you inherit is real and revealed
Cadence maintained it, seal protected it
Coherence by default - we committed to it`
      }
    ];

    // ---------------------------
    // STATE (localStorage)
    // ---------------------------
    const LS_KEY = "ev_coherence_player_v1";
    const audio = document.getElementById("ev-audio");

    const el = {
      list: document.getElementById("ev-list"),
      letter: document.getElementById("ev-letter"),
      name: document.getElementById("ev-trackName"),
      file: document.getElementById("ev-trackFile"),
      time: document.getElementById("ev-trackTime"),
      cur: document.getElementById("ev-cur"),
      dur: document.getElementById("ev-dur"),
      seek: document.getElementById("ev-seek"),
      vol: document.getElementById("ev-vol"),
      play: document.getElementById("ev-play"),
      prev: document.getElementById("ev-prev"),
      next: document.getElementById("ev-next"),
      loop: document.getElementById("ev-loop"),
      lyrics: document.getElementById("ev-lyrics"),
      notes: document.getElementById("ev-notesBody"),
      tags: document.getElementById("ev-tags"),
      lyricsPanel: document.getElementById("ev-lyrics-panel"),
      lyricsContent: document.getElementById("ev-lyrics-content"),
      lastSaved: document.getElementById("ev-lastSaved"),
      btnPrint: document.getElementById("ev-btn-print"),
      btnCopy: document.getElementById("ev-btn-copy"),
      btnBooklet: document.getElementById("ev-btn-booklet"),
      saveBadge: document.getElementById("ev-saveBadge"),
      bookletBody: document.getElementById("ev-bookletBody")
    };

    function fmt(sec){
      if(!isFinite(sec)) return "0:00";
      sec = Math.max(0, Math.floor(sec));
      const m = Math.floor(sec/60);
      const s = (sec%60).toString().padStart(2,"0");
      return `${m}:${s}`;
    }

    function loadState(){
      try{
        const raw = localStorage.getItem(LS_KEY);
        if(!raw) return { idx:0, t:0, vol:0.9, loop:false, lyrics:false };
        const st = JSON.parse(raw);
        return {
          idx: Number.isInteger(st.idx) ? Math.max(0, Math.min(playlist.length-1, st.idx)) : 0,
          t: typeof st.t === "number" ? Math.max(0, st.t) : 0,
          vol: typeof st.vol === "number" ? Math.max(0, Math.min(1, st.vol)) : 0.9,
          loop: !!st.loop,
          lyrics: !!st.lyrics
        };
      }catch(e){
        return { idx:0, t:0, vol:0.9, loop:false, lyrics:false };
      }
    }

    function saveState(st){
      const payload = {
        idx: st.idx,
        t: st.t,
        vol: st.vol,
        loop: st.loop,
        lyrics: st.lyrics,
        savedAt: new Date().toISOString()
      };
      localStorage.setItem(LS_KEY, JSON.stringify(payload));
      el.lastSaved.textContent = "Last saved: " + new Date(payload.savedAt).toLocaleString();
      el.saveBadge.textContent = "Autosave: On";
    }

    let state = loadState();

    // ---------------------------
    // UI Render
    // ---------------------------
    function renderList(){
      el.list.innerHTML = "";
      playlist.forEach((t, i) => {
        const row = document.createElement("div");
        row.className = "ev-row" + (i===state.idx ? " active" : "");
        row.tabIndex = 0;
        row.innerHTML = `
          <div class="ev-rowLeft">
            <span class="ev-chip">${t.letter}</span>
            <div style="min-width:0">
              <div class="ev-rowTitle">${t.title}</div>
              <div class="ev-rowMeta">${t.file}</div>
            </div>
          </div>
          <div class="ev-rowRight">
            <span class="ev-small">Tap</span>
          </div>
        `;
        row.addEventListener("click", ()=> selectTrack(i, true));
        row.addEventListener("keydown", (e)=>{
          if(e.key === "Enter" || e.key === " "){
            e.preventDefault();
            selectTrack(i, true);
          }
        });
        el.list.appendChild(row);
      });
    }

    function renderNow(){
      const t = playlist[state.idx];
      el.letter.textContent = t.letter;
      el.name.textContent = t.title;
      el.file.textContent = t.file;

      el.notes.textContent = t.notes;
      el.tags.innerHTML = "";
      t.tags.forEach(tag=>{
        const s = document.createElement("span");
        s.className = "ev-tag";
        s.textContent = tag;
        el.tags.appendChild(s);
      });

      // Show/hide lyrics panel
      if(state.lyrics && t.lyrics){
        el.lyricsPanel.style.display = "block";
        el.lyricsContent.textContent = t.lyrics;
      }else{
        el.lyricsPanel.style.display = "none";
      }

      // Booklet track click → play track
      document.querySelectorAll(".ev-bookletTrack").forEach(node=>{
        node.style.borderColor = "rgba(255,255,255,.10)";
      });
      const bookletActive = document.querySelector(`.ev-bookletTrack[data-track="${state.idx}"]`);
      if(bookletActive) bookletActive.style.borderColor = "rgba(39,224,255,.45)";

      // highlight playlist
      document.querySelectorAll(".ev-row").forEach((node, i)=>{
        node.classList.toggle("active", i === state.idx);
      });
    }

    function setLoop(on){
      state.loop = !!on;
      audio.loop = state.loop;
      el.loop.textContent = "Loop: " + (state.loop ? "On" : "Off");
      saveState({ ...state, t: audio.currentTime || state.t, vol: audio.volume, lyrics: state.lyrics });
    }

    function setPlayButton(){
      el.play.textContent = audio.paused ? "▶" : "⏸";
    }

    function setAudioSrc(){
      const t = playlist[state.idx];
      audio.src = basePath + t.file;
    }

    function selectTrack(idx, autoplay){
      state.idx = idx;
      state.t = 0;
      setAudioSrc();
      renderNow();
      renderList();
      saveState({ ...state, t: 0, vol: audio.volume, loop: state.loop, lyrics: state.lyrics });

      if(autoplay){
        audio.play().catch(()=>{ /* ignore autoplay restrictions */ });
      }
      setPlayButton();
    }

    // ---------------------------
    // Progress + Seek
    // ---------------------------
    let seeking = false;

    audio.addEventListener("loadedmetadata", ()=>{
      // restore time only if same track load during init
      if(state.t > 0 && state.t < audio.duration - 0.25){
        audio.currentTime = state.t;
      }
      el.dur.textContent = fmt(audio.duration);
      el.seek.value = "0";
      setPlayButton();
    });

    audio.addEventListener("timeupdate", ()=>{
      if(!seeking){
        const dur = audio.duration || 0;
        const cur = audio.currentTime || 0;
        const v = dur ? Math.round((cur/dur)*1000) : 0;
        el.seek.value = String(v);
      }
      el.cur.textContent = fmt(audio.currentTime || 0);
      el.dur.textContent = fmt(audio.duration || 0);
      el.time.textContent = `${fmt(audio.currentTime || 0)} / ${fmt(audio.duration || 0)}`;

      // autosave throttle
      if((audio.currentTime || 0) > 0){
        if(!window.__evSaveTick || Date.now() - window.__evSaveTick > 2500){
          window.__evSaveTick = Date.now();
          saveState({ ...state, t: audio.currentTime || 0, vol: audio.volume, loop: state.loop });
        }
      }
    });

    audio.addEventListener("ended", ()=>{
      // If loop is off, advance
      if(!state.loop){
        next(true);
      }
    });

    el.seek.addEventListener("input", ()=>{
      seeking = true;
    });
    el.seek.addEventListener("change", ()=>{
      const dur = audio.duration || 0;
      const v = Number(el.seek.value) / 1000;
      const target = dur * v;
      audio.currentTime = isFinite(target) ? target : 0;
      seeking = false;
      saveState({ ...state, t: audio.currentTime || 0, vol: audio.volume, loop: state.loop });
    });

    // ---------------------------
    // Controls
    // ---------------------------
    function prev(autoplay){
      const i = (state.idx - 1 + playlist.length) % playlist.length;
      selectTrack(i, autoplay);
    }
    function next(autoplay){
      const i = (state.idx + 1) % playlist.length;
      selectTrack(i, autoplay);
    }

    el.play.addEventListener("click", ()=>{
      if(audio.paused){
        audio.play().catch(()=>{});
      }else{
        audio.pause();
      }
      setPlayButton();
    });

    el.prev.addEventListener("click", ()=> prev(true));
    el.next.addEventListener("click", ()=> next(true));

    el.vol.addEventListener("input", ()=>{
      audio.volume = Number(el.vol.value);
      saveState({ ...state, t: audio.currentTime || 0, vol: audio.volume, loop: state.loop });
    });

    el.loop.addEventListener("click", ()=> setLoop(!state.loop));

    el.lyrics.addEventListener("click", ()=>{
      state.lyrics = !state.lyrics;
      el.lyrics.textContent = state.lyrics ? "Hide Lyrics" : "Lyrics";
      renderNow();
      saveState({ ...state, t: audio.currentTime || 0, vol: audio.volume, loop: state.loop, lyrics: state.lyrics });
    });

    // Booklet interactions
    document.querySelectorAll(".ev-bookletTrack").forEach(node=>{
      node.addEventListener("click", ()=>{
        const idx = Number(node.getAttribute("data-track"));
        if(Number.isFinite(idx)) selectTrack(idx, true);
      });
    });

    el.btnPrint.addEventListener("click", ()=> window.print());

    el.btnCopy.addEventListener("click", async ()=>{
      const lines = playlist.map(t => `${t.letter}) ${t.title} — ${t.file}`);
      const txt = "EchoStory — COHERENCE BY DEFAULT\n\n" + lines.join("\n");
      try{
        await navigator.clipboard.writeText(txt);
        el.btnCopy.textContent = "Copied";
        setTimeout(()=> el.btnCopy.textContent = "Copy Tracklist", 900);
      }catch(e){
        alert(txt);
      }
    });

    // Toggle booklet scroll focus (mobile convenience)
    el.btnBooklet.addEventListener("click", ()=>{
      el.bookletBody.scrollIntoView({behavior:"smooth", block:"start"});
    });

    // Keyboard shortcuts
    window.addEventListener("keydown", (e)=>{
      // ignore typing into inputs
      const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
      if(tag === "input" || tag === "textarea") return;

      if(e.key === " "){ e.preventDefault(); el.play.click(); }
      if(e.key === "n" || e.key === "N"){ next(true); }
      if(e.key === "p" || e.key === "P"){ prev(true); }
      if(e.key === "l" || e.key === "L"){ setLoop(!state.loop); }
      if(e.key === "y" || e.key === "Y"){
        state.lyrics = !state.lyrics;
        el.lyrics.textContent = state.lyrics ? "Hide Lyrics" : "Lyrics";
        renderNow();
        saveState({ ...state, t: audio.currentTime || 0, vol: audio.volume, loop: state.loop, lyrics: state.lyrics });
      }
      if(e.key === "ArrowRight"){ audio.currentTime = Math.min((audio.currentTime||0)+5, audio.duration||1e9); }
      if(e.key === "ArrowLeft"){ audio.currentTime = Math.max((audio.currentTime||0)-5, 0); }
    });

    // ---------------------------
    // INIT
    // ---------------------------
    audio.volume = state.vol;
    el.vol.value = String(state.vol);
    setLoop(state.loop);
    el.lyrics.textContent = state.lyrics ? "Hide Lyrics" : "Lyrics";

    renderList();
    setAudioSrc();
    renderNow();

    // Show saved time badge if exists
    try{
      const raw = localStorage.getItem(LS_KEY);
      if(raw){
        const parsed = JSON.parse(raw);
        if(parsed.savedAt){
          el.lastSaved.textContent = "Last saved: " + new Date(parsed.savedAt).toLocaleString();
        }
      }
    }catch(e){}

    // Attempt to restore last position
    audio.addEventListener("canplay", ()=>{
      // only do once
      if(window.__evRestored) return;
      window.__evRestored = true;
      if(state.t > 0 && isFinite(audio.duration) && state.t < audio.duration - 0.25){
        audio.currentTime = state.t;
      }
      setPlayButton();
    });

    // If the saved idx is not 0, ensure list highlights it
    if(state.idx !== 0){
      renderList();
      renderNow();
    }

  })();
</script>
```

### What this gives you (upgrades baked in)

* **Full styled player** (mobile-first, clean, "EchoStory" aesthetic)
* **Playlist in correct order** using your real filenames (ignores the `(1)` duplicates)
* **Now Playing panel** with liner notes + tags
* **Lyrics panel** with full lyrics and song structure (toggle on/off)
* **Booklet panel** (the one-sheet album insert) that's clickable (tap a booklet track → plays it)
* **Autosave**: remembers last track + play position + volume + loop + lyrics toggle state
* **Keyboard shortcuts** (space, N/P, arrows, L, Y for lyrics)
* **Copy tracklist** button + **Print** button

### Two quick setup notes

1. If your MP3s are in a subfolder, set:

```js
const basePath = "./audio/";
```

2. If you ever want to switch to the “(1)” versions, just swap the filenames in the playlist array.

If you want, I can also add an optional **“Lyrics/Headers” toggle per track** (so the booklet can show the Suno headers + hook text while it plays).
