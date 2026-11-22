import  { useState } from 'react';

const STREAMPLAYER_TABS = {
  ffmpeg: {
    badge: 'NATIVE C++ NDK + MEDIA3',
    title: 'Hybrid Hardware & Software Decoding',
    description:
      'Combines AndroidX Media3 (ExoPlayer) hardware acceleration with custom-compiled native FFmpeg libraries (libffmpeg.so) to decode proprietary surround audio formats out of the box.',
    specs: [
      { label: 'Audio Decoders', value: 'EAC3 5.1, AC3, DTS, DTS-HD, TrueHD, FLAC, Opus' },
      { label: 'Video Codecs', value: '4K HDR10 HEVC (H.265), AV1, AVC (H.264), VP9' },
      { label: 'Subtitles', value: 'Styled Anime ASS/SSA, SRT, WebVTT, Embedded MKV' },
    ],
  },
  iptv: {
    badge: 'LIVE TV & M3U PARSER',
    title: 'Zero-Lag Live IPTV Streaming Engine',
    description:
      'Built-in M3U playlist parser with instant category filtering and adaptive HLS (.m3u8) playback for live news, global sports, and free-to-air channels.',
    specs: [
      { label: 'Playlist Engine', value: 'Fast native M3U / M3U8 parser with group categorization' },
      { label: 'Stream Protocols', value: 'HTTP/HTTPS Live Streaming (HLS), MPEG-TS, DASH' },
      { label: 'Channel Switching', value: 'Instant buffer pre-warm & Picture-in-Picture (PiP)' },
    ],
  },
  gestures: {
    badge: 'TACTILE PLAYBACK CONTROLS',
    title: 'MX-Style Touch Gestures & Intents',
    description:
      'Engineered for effortless one-handed mobile playback with responsive touch zones and system-wide Android intent integration.',
    specs: [
      { label: 'Vertical Swipes', value: 'Left-side screen brightness & Right-side 200% volume boost' },
      { label: 'Seek & Zoom', value: 'Double-tap ±10s seek & pinch-to-zoom aspect scaling' },
      { label: 'External Intents', value: 'Direct playback from File Managers & Telegram shares' },
    ],
  },
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStreamTab, setActiveStreamTab] = useState('ffmpeg');
  const [privacyExpanded, setPrivacyExpanded] = useState(true);
  const [copiedPolicy, setCopiedPolicy] = useState(false);

  const currentTab = STREAMPLAYER_TABS[activeStreamTab];

  const handleCopyPolicyUrl = async () => {
    const url = `${window.location.origin}${window.location.pathname}#privacy`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedPolicy(true);
      setTimeout(() => setCopiedPolicy(false), 2200);
    } catch {
      const tempInput = document.createElement('input');
      tempInput.value = url;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      setCopiedPolicy(true);
      setTimeout(() => setCopiedPolicy(false), 2200);
    }
  };

  return (
    <div className="bg-labCharcoal text-slate-100 antialiased selection:bg-labTerra selection:text-white min-h-screen">
      {/* Hidden Reusable SVG Gradients for StreamPlayer Pulsar Vortex Emblem */}
      <svg width="0" height="0" className="hidden" aria-hidden="true">
        <defs>
          <radialGradient id="spBaseGlow" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="#1A0D18" />
            <stop offset="60%" stopColor="#0E070D" />
            <stop offset="100%" stopColor="#060205" />
          </radialGradient>
          <linearGradient id="spOrbitHotPink" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF007F" />
            <stop offset="50%" stopColor="#FF1493" />
            <stop offset="100%" stopColor="#FF69B4" />
          </linearGradient>
          <linearGradient id="spOrbitRose" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D946EF" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#FDA4AF" />
          </linearGradient>
          <linearGradient id="spCorePink" x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#FFB5D5" />
            <stop offset="100%" stopColor="#FF1493" />
          </linearGradient>
        </defs>
      </svg>

      {/* ==================== 1. STICKY STUDIO HEADER ==================== */}
      <header className="fixed top-0 inset-x-0 z-50 lab-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          {/* Ladrillo Craft Labs Split-Flask Brand Lockup */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#1C2026] border border-white/10 p-1.5 flex items-center justify-center shadow-md group-hover:border-labTerra/50 transition-colors">
              <svg viewBox="0 0 120 130" className="w-full h-full overflow-visible" aria-label="Ladrillo Craft Labs Flask Emblem">
                <circle cx="66" cy="11" r="4.2" fill="#E05A2B" className="animate-bubble-rise" />
                <circle cx="57" cy="18" r="2.2" fill="#E05A2B" opacity="0.85" />
                <path
                  d="M 46,24 L 60,24 L 60,118 L 28,96 C 23,92 22,85 26,79 L 48,47 L 48,31 L 45,31 C 43,31 42,29.5 42,27.5 C 42,25.5 43.5,24 46,24 Z"
                  fill="#E05A2B"
                />
                <path
                  d="M 74,24 L 60,24 L 60,118 L 92,96 C 97,92 98,85 94,79 L 72,47 L 72,31 L 75,31 C 77,31 78,29.5 78,27.5 C 78,25.5 76.5,24 74,24 Z"
                  fill="#2B6CB0"
                />
                <polygon points="60,55 81,82 60,94 39,82" fill="#181B20" />
                <ellipse cx="51" cy="79" rx="5.5" ry="4.5" fill="#E05A2B" />
                <ellipse cx="69" cy="79" rx="5.5" ry="4.5" fill="#E05A2B" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold tracking-[0.14em] text-base sm:text-lg text-white leading-none">LADRILLO</span>
              <span className="text-[10px] font-bold tracking-[0.26em] text-labTerra uppercase mt-1">CRAFT LABS</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-labTerra transition-colors">About Lab</a>
            <a href="#flagship" className="hover:text-labTerra transition-colors">Flagship Product</a>
            <a href="#engineering" className="hover:text-labCobaltLight transition-colors">Engineering</a>
            <a href="#privacy" className="hover:text-labTerra transition-colors">Privacy</a>
            <a href="#contact" className="hover:text-labCobaltLight transition-colors">Contact</a>
          </nav>

          {/* Flagship App CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#flagship"
              className="btn-terra px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white tracking-wide flex items-center gap-2"
            >
              <span>Flagship App</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Open navigation menu"
              className="md:hidden p-2.5 rounded-xl bg-labSurface border border-white/10 text-slate-200 hover:border-labTerra/50 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-5 bg-labCharcoal/98 border-b border-white/10 space-y-1.5">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-labSurface">
              About Lab
            </a>
            <a href="#flagship" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-labSurface">
              Flagship Product (StreamPlayer)
            </a>
            <a href="#engineering" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-labSurface">
              Engineering Pillars
            </a>
            <a href="#privacy" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-labSurface">
              Privacy Policy
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-labSurface">
              Contact Studio
            </a>
          </div>
        )}
      </header>

      {/* ==================== 2. STUDIO HERO SECTION ==================== */}
      <section id="about" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 lab-grid overflow-hidden">
        <div className="pointer-events-none absolute top-24 -left-24 w-[480px] h-[480px] rounded-full bg-labTerra/15 blur-[130px] animate-pulse-slow"></div>
        <div className="pointer-events-none absolute top-32 -right-24 w-[480px] h-[480px] rounded-full bg-labCobalt/20 blur-[130px] animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Studio Copy */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-labSurface border border-white/10 text-xs font-semibold tracking-wider uppercase text-slate-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-labTerra"></span>
                <span>Independent Software Studio &bull; Thiruvananthapuram, India</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6">
                <span className="text-white">Engineering High-Performance</span>
                <br />
                <span className="duotone-text">Mobile &amp; Media Software.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                <strong className="text-white">Ladrillo Craft Labs</strong> is an independent product and systems engineering studio founded by{' '}
                <a
                  href="https://sidharthmn.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-labTerraLight hover:underline font-semibold"
                >
                  Sidharth M N
                </a>
                . We combine native C++ multimedia engines, modern Android architecture, and zero-bloat design to craft software that feels instantaneous.
              </p>

              {/* Studio Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <a
                  href="#flagship"
                  className="w-full sm:w-auto btn-terra px-7 py-4 rounded-2xl text-sm sm:text-base font-bold text-white flex items-center justify-center gap-2.5"
                >
                  <span>Explore StreamPlayer</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Ladrillo-Craft-Labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl text-sm sm:text-base font-semibold text-slate-200 bg-labSurface hover:bg-white/10 border border-white/10 transition flex items-center justify-center gap-2.5"
                >
                  <svg className="w-5 h-5 text-labCobaltLight" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub Organization</span>
                </a>
              </div>

              {/* Studio Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-labSlate/70 border border-white/5">
                  <div className="text-sm font-extrabold text-white flex items-center justify-center lg:justify-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-labTerra"></span>
                    <span>Native C++ &amp; Kotlin</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">NDK &amp; Media3 Architecture</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-labSlate/70 border border-white/5">
                  <div className="text-sm font-extrabold text-white flex items-center justify-center lg:justify-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-labCobaltLight"></span>
                    <span>Zero-Tracking Core</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">100% On-Device Privacy</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-labSlate/70 border border-white/5">
                  <div className="text-sm font-extrabold text-white flex items-center justify-center lg:justify-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Open Distribution</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Direct Releases &amp; App Stores</div>
                </div>
              </div>
            </div>

            {/* Studio Brand Emblem Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] animate-float">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-labTerra/25 via-transparent to-labCobalt/25 blur-2xl pointer-events-none"></div>

                <div className="relative lab-card rounded-[2.2rem] p-8 sm:p-10 text-center border-white/10">
                  <div className="w-40 h-44 mx-auto mb-5 flex items-center justify-center">
                    <svg viewBox="0 0 120 135" className="w-full h-full drop-shadow-2xl">
                      <circle cx="67" cy="12" r="4.5" fill="#E05A2B" className="animate-bubble-rise" />
                      <circle cx="57" cy="20" r="2.3" fill="#E05A2B" opacity="0.9" />
                      <path
                        d="M 45,27 L 60,27 L 60,126 L 26,102 C 21,98 20,90 24,84 L 47,51 L 47,34 L 44,34 C 42,34 41,32.5 41,30.5 C 41,28.5 42.5,27 45,27 Z"
                        fill="#E05A2B"
                      />
                      <path
                        d="M 75,27 L 60,27 L 60,126 L 94,102 C 99,98 100,90 96,84 L 73,51 L 73,34 L 76,34 C 78,34 79,32.5 79,30.5 C 79,28.5 77.5,27 75,27 Z"
                        fill="#2B6CB0"
                      />
                      <polygon points="60,59 82,87 60,100 38,87" fill="#1E2228" />
                      <ellipse cx="50.5" cy="84" rx="6" ry="4.8" fill="#E05A2B" />
                      <ellipse cx="69.5" cy="84" rx="6" ry="4.8" fill="#E05A2B" />
                    </svg>
                  </div>

                  <div className="text-2xl sm:text-3xl font-black tracking-[0.14em] text-white leading-none">
                    LADRILLO
                  </div>
                  <div className="text-xs sm:text-sm font-bold tracking-[0.34em] text-labTerra uppercase mt-2">
                    CRAFT LABS
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>EST. KERALA, IN</span>
                    <span className="text-labCobaltLight font-semibold">LAB STATUS: ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. FLAGSHIP PRODUCT SPOTLIGHT: STREAMPLAYER ==================== */}
      <section id="flagship" className="py-20 lg:py-28 relative border-t border-white/10 bg-[#15181D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.26em] text-labTerra uppercase mb-2">
                <span>01 // Flagship Release</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Featured Studio Product: <span className="text-streamRose">StreamPlayer</span>
              </h2>
            </div>
            <div className="font-mono text-xs text-slate-400 bg-labSlate px-3.5 py-2 rounded-xl border border-white/10">
              Package ID: <span className="text-streamRose font-semibold">com.ladrillocraftlabs.streamplayer</span>
            </div>
          </div>

          <div className="streamplayer-showcase rounded-[2.25rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Side */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xl shadow-pink-500/25 shrink-0 border border-pink-400/30">
                    <svg viewBox="0 0 512 512" className="w-full h-full" aria-label="StreamPlayer Pulsar Vortex Logo">
                      <rect width="512" height="512" rx="120" ry="120" fill="url(#spBaseGlow)" />
                      <rect width="510" height="510" x="1" y="1" rx="119" ry="119" fill="none" stroke="#FF69B4" strokeOpacity="0.25" strokeWidth="2" />
                      <g transform="translate(256, 256)">
                        <path d="M -160,0 A 160,160 0 1,1 0,160 L -12,120 A 120,120 0 1,0 -120,0 Z" fill="url(#spOrbitRose)" opacity="0.9" />
                        <path d="M 160,0 A 160,160 0 1,1 0,-160 L 12,-120 A 120,120 0 1,0 120,0 Z" fill="url(#spOrbitHotPink)" opacity="0.95" />
                        <path
                          d="M -42,-64 C -42,-72 -33,-77 -26,-72 L 78,-10 C 85,-6 85,5 78,9 L -26,71 C -33,76 -42,71 -42,63 Z"
                          fill="#120710"
                          stroke="url(#spOrbitHotPink)"
                          strokeWidth="4"
                        />
                        <path d="M -34,-50 L 58,0 L -34,50 Z" fill="url(#spCorePink)" />
                        <path d="M -34,-50 L 58,0 L -34,0 Z" fill="#FFFFFF" opacity="0.4" />
                      </g>
                    </svg>
                  </div>

                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-streamPink/20 border border-streamPink/40 text-[10px] font-bold tracking-[0.22em] text-streamRose uppercase mb-1.5">
                      BINGE ANYTHING &bull; ULTRA HD MEDIA ENGINE
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                      STREAMPLAYER
                    </h3>
                    <p className="text-xs font-mono text-pink-200/75 mt-0.5">
                      Release v1.0.1 &bull; Android 8.0+ (API 26+)
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-200/85 leading-relaxed mb-6">
                  Our flagship Android media engine built from the ground up with <strong className="text-white">AndroidX Media3 (ExoPlayer)</strong> and custom-compiled <strong className="text-streamRose">C++ NDK FFmpeg decoders</strong>. StreamPlayer unifies local 4K HDR playback, Live TV (IPTV M3U) streaming, and on-demand movie/anime HLS streams into one fast, ad-free client.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 rounded-lg bg-pink-500/15 border border-pink-500/30 text-xs font-mono text-streamRose">
                    libffmpeg.so (EAC3 / DTS / TrueHD)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                    HLS (.m3u8) &amp; MKV
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                    MX-Style Gestures
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                    ASS/SSA Subtitles
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href="https://github.com/Ladrillo-Craft-Labs/StreamPlayer/releases/tag/v1.0.1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-stream-pink px-6 py-4 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2.5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download v1.0.1 Release</span>
                  </a>

                  <a
                    href="#privacy"
                    className="px-6 py-4 rounded-2xl text-sm font-semibold text-pink-100 bg-white/5 hover:bg-pink-500/15 border border-pink-400/25 text-center transition"
                  >
                    App Privacy Policy
                  </a>
                </div>
              </div>

              {/* Right Side: Interactive Architecture & Feature Tabs */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-[#11080E]/90 border border-pink-500/25 p-5 sm:p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-pink-300/80">Interactive Engine Inspector</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                      v1.0.1 LIVE
                    </span>
                  </div>

                  {/* Interactive Tabs */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-black/50 border border-pink-500/15 mb-5 text-xs font-bold">
                    {[
                      { key: 'ffmpeg', label: 'Media3 + FFmpeg' },
                      { key: 'iptv', label: 'Live TV (IPTV)' },
                      { key: 'gestures', label: 'MX Gestures' },
                    ].map(({ key, label }) => (
                      <button
                        key={key}
                        onClick={() => setActiveStreamTab(key)}
                        className={
                          activeStreamTab === key
                            ? 'py-2.5 px-2 rounded-xl bg-streamPink text-white shadow transition cursor-pointer'
                            : 'py-2.5 px-2 rounded-xl text-pink-200/75 hover:text-white transition cursor-pointer'
                        }
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[250px] flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-pink-500/15 border border-pink-500/30 text-[10px] font-mono font-bold text-streamRose mb-2.5">
                        {currentTab.badge}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{currentTab.title}</h4>
                      <p className="text-xs sm:text-sm text-pink-100/75 leading-relaxed mb-5">{currentTab.description}</p>
                    </div>
                    <div className="space-y-2.5">
                      {currentTab.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="p-3 rounded-xl bg-white/[0.04] border border-pink-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                        >
                          <span className="text-xs font-mono text-pink-300/80">{spec.label}</span>
                          <span className="text-xs font-semibold text-white">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. STUDIO CRAFT & ENGINEERING PILLARS ==================== */}
      <section id="engineering" className="py-20 lg:py-28 relative lab-grid border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.28em] text-labCobaltLight uppercase">Studio Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4">
              How We Build at <span className="duotone-text">Ladrillo Craft Labs</span>
            </h2>
            <p className="text-slate-300/80 text-sm sm:text-base">
              Every application engineered in our lab adheres to strict performance, privacy, and architectural standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Pillar 1 */}
            <div className="lab-card rounded-3xl p-8 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-labTerra/15 border border-labTerra/35 flex items-center justify-center text-labTerra mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Native Performance</h3>
              <p className="text-sm text-slate-300/80 leading-relaxed mb-5">
                We bypass bloated cross-platform wrappers in favor of <strong className="text-white">Kotlin, Jetpack components, and C/C++ NDK libraries</strong>. Direct hardware acceleration ensures cold starts in milliseconds and smooth 60fps UI responsiveness even on mid-range hardware.
              </p>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-labTerraLight">
                Kotlin &bull; C++ NDK &bull; AndroidX Media3
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="lab-card rounded-3xl p-8 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-labCobalt/20 border border-labCobalt/40 flex items-center justify-center text-labCobaltLight mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Privacy-First by Default</h3>
              <p className="text-sm text-slate-300/80 leading-relaxed mb-5">
                Our software operates strictly on a <strong className="text-white">local-first data model</strong>. No mandatory account sign-ups, no third-party ad networks, and zero behavioral analytics SDKs. User media libraries, playback preferences, and playlists never leave the device.
              </p>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-labCobaltLight">
                Zero Telemetry &bull; Local Storage Only
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="lab-card rounded-3xl p-8 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-labTerra/20 to-labCobalt/20 border border-white/15 flex items-center justify-center text-white mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Clean Product Design</h3>
              <p className="text-sm text-slate-300/80 leading-relaxed mb-5">
                Inspired by industrial precision and tactile interfaces, every screen is designed for <strong className="text-white">ergonomic clarity</strong>. OLED-friendly dark themes, intuitive gesture controls, and structured visual hierarchy keep the focus on the user's content.
              </p>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-300">
                OLED Dark UI &bull; Tactile Ergonomics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. APP-STORE-COMPLIANT PRIVACY POLICY ==================== */}
      <section id="privacy" className="py-20 lg:py-28 relative bg-[#15181D] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold tracking-[0.26em] text-labTerra uppercase">Store Compliance &amp; Governance</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
                Privacy Policy
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1.5">
                Ladrillo Craft Labs &bull; StreamPlayer (<span className="text-labCobaltLight">com.ladrillocraftlabs.streamplayer</span>)
              </p>
            </div>

            <button
              onClick={handleCopyPolicyUrl}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-labSurface hover:bg-labTerra/20 border border-labTerra/40 text-xs font-bold text-labTerraLight transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
              <span>{copiedPolicy ? 'Copied #privacy URL!' : 'Copy Store Privacy URL'}</span>
            </button>
          </div>

          <div className="lab-card rounded-3xl p-6 sm:p-10 space-y-6 text-sm sm:text-base text-slate-300/85 leading-relaxed">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
              <span>
                Effective Date: <strong className="text-white">November 18, 2026</strong>
              </span>
              <span>
                Studio Location: <strong className="text-white">Thiruvananthapuram, Kerala, India</strong>
              </span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">1. Overview</h3>
              <p>
                Ladrillo Craft Labs ("we," "our," or "us") develops and publishes <strong className="text-white">StreamPlayer</strong> (
                <code className="text-labTerraLight font-mono text-xs">com.ladrillocraftlabs.streamplayer</code>) as a free, lightweight media player application. We respect user privacy and engineer our applications to operate without collecting personal user data.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">2. No Personal Data Collection</h3>
              <p>
                <strong className="text-white">
                  Ladrillo Craft Labs does not collect, store, sell, or transmit any personally identifiable information (PII).
                </strong>{' '}
                StreamPlayer requires no user account, registration, email address, or phone number, and contains zero third-party advertising networks or behavioral tracking SDKs.
              </p>
            </div>

            {privacyExpanded && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">3. Android Permissions &amp; On-Device Usage</h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-300/80">
                    <li>
                      <strong className="text-white">
                        Media &amp; Storage Access (<code className="font-mono text-xs text-labCobaltLight">READ_MEDIA_VIDEO</code>,{' '}
                        <code className="font-mono text-xs text-labCobaltLight">READ_EXTERNAL_STORAGE</code>):
                      </strong>{' '}
                      Used strictly on-device to scan, index, and play video and audio files stored locally on your Android device. Your local media files are never uploaded externally.
                    </li>
                    <li>
                      <strong className="text-white">
                        Internet &amp; Network State (<code className="font-mono text-xs text-labCobaltLight">INTERNET</code>,{' '}
                        <code className="font-mono text-xs text-labCobaltLight">ACCESS_NETWORK_STATE</code>):
                      </strong>{' '}
                      Used exclusively to play user-provided network stream URLs, IPTV playlists (M3U), and fetch public media artwork/metadata from open HTTPS metadata catalogs.
                    </li>
                    <li>
                      <strong className="text-white">Wake Lock &amp; Picture-in-Picture / Audio Focus:</strong> Used to keep the screen awake during active playback and support floating-window or background audio playback.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">4. External Streams &amp; Local Data Storage</h3>
                  <p className="mb-2">
                    StreamPlayer acts as a standalone client player. Any IPTV playlists, direct video URLs, or third-party add-on endpoints you open connect directly from your device to those external servers. Ladrillo Craft Labs does not host, control, or log the streams you access.
                  </p>
                  <p>
                    All playback settings, subtitle preferences, and saved stream URLs are stored locally on your Android device and are permanently removed if you clear app data or uninstall the application. StreamPlayer does not knowingly collect data from children under 13.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white">Privacy Contact:</strong> Sidharth M N &bull; Ladrillo Craft Labs &bull;{' '}
                <a
                  href="https://sidharthmn.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-labTerraLight hover:underline"
                >
                  sidharthmn.netlify.app
                </a>
              </div>
              <button
                onClick={() => setPrivacyExpanded((prev) => !prev)}
                className="self-start sm:self-auto text-xs font-mono font-semibold text-labCobaltLight hover:underline cursor-pointer"
              >
                {privacyExpanded ? 'Collapse Details ↑' : 'Expand Full Policy ↓'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. STUDIO CONTACT & FOOTER ==================== */}
      <footer id="contact" className="py-16 bg-labCharcoal border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-labSurface border border-white/10 p-1.5 flex items-center justify-center">
                  <svg viewBox="0 0 120 130" className="w-full h-full">
                    <circle cx="66" cy="11" r="4.2" fill="#E05A2B" />
                    <circle cx="57" cy="18" r="2.2" fill="#E05A2B" />
                    <path
                      d="M 46,24 L 60,24 L 60,118 L 28,96 C 23,92 22,85 26,79 L 48,47 L 48,31 L 45,31 C 43,31 42,29.5 42,27.5 C 42,25.5 43.5,24 46,24 Z"
                      fill="#E05A2B"
                    />
                    <path
                      d="M 74,24 L 60,24 L 60,118 L 92,96 C 97,92 98,85 94,79 L 72,47 L 72,31 L 75,31 C 77,31 78,29.5 78,27.5 C 78,25.5 76.5,24 74,24 Z"
                      fill="#2B6CB0"
                    />
                    <polygon points="60,55 81,82 60,94 39,82" fill="#181B20" />
                    <ellipse cx="51" cy="79" rx="5.5" ry="4.5" fill="#E05A2B" />
                    <ellipse cx="69" cy="79" rx="5.5" ry="4.5" fill="#E05A2B" />
                  </svg>
                </div>
                <div>
                  <div className="font-extrabold tracking-[0.14em] text-white leading-none">LADRILLO</div>
                  <div className="text-[10px] font-bold tracking-[0.26em] text-labTerra uppercase mt-1">CRAFT LABS</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-4">
                Independent software engineering and mobile product studio crafting high-performance native Android applications.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 bg-labSlate px-3 py-1.5 rounded-lg border border-white/5">
                <svg className="w-3.5 h-3.5 text-labTerra" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Thiruvananthapuram, Kerala, India</span>
              </div>
            </div>

            {/* Products Column */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Products</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a href="#flagship" className="hover:text-streamRose transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-streamPink"></span>
                    <span>StreamPlayer for Android</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ladrillo-Craft-Labs/StreamPlayer/releases/tag/v1.0.1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    StreamPlayer v1.0.1 Release
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-white transition-colors">
                    App Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Studio & Founder Links */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Studio &amp; Founder</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <a
                    href="https://github.com/Ladrillo-Craft-Labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-labCobaltLight transition-colors flex items-center gap-2"
                  >
                    <span>GitHub: github.com/Ladrillo-Craft-Labs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sidharthmn.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-labTerraLight transition-colors flex items-center gap-2"
                  >
                    <span>Lead Engineer: Sidharth M N</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linktr.ee/sidxoid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>Social &amp; Channels: linktr.ee/sidxoid</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; 2026 Ladrillo Craft Labs. All rights reserved.</p>
            <p className="font-mono">com.ladrillocraftlabs.streamplayer &bull; Engineered in Kerala</p>
          </div>
        </div>
      </footer>
    </div>
  );
}