import { useState, useEffect, useRef, useCallback } from 'react';
import { useAudio } from '../hooks/useAudio';
import {
  WebArchitectureCanvas,
  ChatUpSocketStreamCanvas,
  RoastingAITokenStreamCanvas,
  EdgeResumeATSParserCanvas
} from './TimelineVisualizers';
import MaskedTitle from './MaskedTitle';

export default function Timeline() {
  const { playHoverSound, playClickSound } = useAudio();
  const [activeEpochIndex, setActiveEpochIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const epochs = [
    {
      epoch: '01',
      date: '2024 – 2025',
      stageLabel: 'STAGE 01',
      category: 'THE SPARK',
      dockLabel: 'FOUNDATIONS',
      title: 'Computing Core & Networking Protocols',
      headline: 'Intermediate MPC (2024) & B.Tech CSE (Apollo Univ)',
      summary:
        'Completed Intermediate MPC in 2024 and commenced B.Tech in Computer Science Engineering at The Apollo University, Chittoor. Mastered foundational computing logic in C, Python, and JavaScript, while deeply studying networking protocols (TCP/IP, OSI layers, DNS, HTTP/S) and Linux environments.',
      metrics: [
        { label: 'Timeline', value: '2024 – 2025' },
        { label: 'Degree', value: 'B.Tech CSE (Apollo Univ)' },
        { label: 'Languages', value: 'C, Python, JavaScript' }
      ],
      techStack: ['C', 'Python', 'JavaScript', 'Linux CLI', 'TCP/IP', 'Networking', 'Git'],
      Visualizer: WebArchitectureCanvas
    },
    {
      epoch: '02',
      date: '2025 – 2026',
      stageLabel: 'STAGE 02',
      category: 'HANDS-ON TOOLING',
      dockLabel: 'OFFENSIVE LABS',
      title: 'Vulnerability Testing & Security Labs',
      headline: 'TechnoHacks & CyberwarLab Internships',
      summary:
        'Assisted in vulnerability testing and security analysis across two specialized cybersecurity internships. Gained hands-on exposure to industry-standard penetration testing tools including Kali Linux, Metasploit, Burp Suite, and DVWA in controlled security sandboxes.',
      metrics: [
        { label: 'Internships', value: 'TechnoHacks & CyberwarLab' },
        { label: 'Core Tools', value: 'Kali, Metasploit, Burp' },
        { label: 'Focus', value: 'Vulnerability Assessment' }
      ],
      techStack: ['Kali Linux', 'Metasploit', 'Burp Suite', 'DVWA', 'VAPT', 'Wireshark', 'Nmap'],
      Visualizer: ChatUpSocketStreamCanvas
    },
    {
      epoch: '03',
      date: '2026 • DIGITAL FORENSICS',
      stageLabel: 'STAGE 03',
      category: 'LAW ENFORCEMENT',
      dockLabel: 'AMROHA POLICE',
      title: 'Forensics Investigation & Evidence Handling',
      headline: 'Cybersecurity Intern – Amroha Police (2026)',
      summary:
        'Gained real-world exposure to digital forensics and cybersecurity investigation workflows during an intensive internship with Amroha Police in 2026. Assisted with forensic analysis concepts, bit-stream imaging, evidence handling, and ISO/IEC 27001-aligned chain of custody integrity.',
      metrics: [
        { label: 'Unit', value: 'Amroha Police (2026)' },
        { label: 'Integrity', value: 'SHA-256 / MD5 Hashing' },
        { label: 'Standards', value: 'ISO/IEC 27001 Compliance' }
      ],
      techStack: ['Digital Forensics', 'Evidence Handling', 'Chain of Custody', 'Hex Analysis', 'Amroha Police', 'Incident Response'],
      Visualizer: RoastingAITokenStreamCanvas
    },
    {
      epoch: '04',
      date: '2026 • PRODUCTION PLATFORM',
      stageLabel: 'STAGE 04',
      category: 'LAW ENFORCEMENT PORTAL',
      dockLabel: 'POLICE PORTAL',
      title: 'Cyber Crime Portal for Police Department',
      headline: 'Incident Reporting & Evidence Tracking Solution',
      summary:
        'Engineered a dedicated cyber crime reporting and management portal for law enforcement operations. Designed to streamline public incident intake, secure uploaded evidence files with tamper-evident SHA-256 hashing, and empower investigating officers with real-time case progression tracking.',
      metrics: [
        { label: 'Project', value: 'Cyber Crime Portal' },
        { label: 'Target', value: 'Police Department' },
        { label: 'Security', value: 'RBAC + Evidence Vault' }
      ],
      techStack: ['Web Architecture', 'Node.js', 'Express', 'PostgreSQL', 'Digital Forensics', 'Cryptography', 'Audit Logs'],
      Visualizer: EdgeResumeATSParserCanvas
    }
  ];

  // Auto-running loop across 4 stages (pauses on hover so user can read)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveEpochIndex((prev) => (prev + 1) % epochs.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, epochs.length]);

  // Move button controls (loops infinitely in both directions)
  const handleNext = useCallback(() => {
    playClickSound();
    setActiveEpochIndex((prev) => (prev + 1) % epochs.length);
  }, [epochs.length, playClickSound]);

  const handlePrev = useCallback(() => {
    playClickSound();
    setActiveEpochIndex((prev) => (prev - 1 + epochs.length) % epochs.length);
  }, [epochs.length, playClickSound]);

  const goToEpoch = useCallback((targetIndex) => {
    if (targetIndex < 0 || targetIndex >= epochs.length) return;
    playClickSound();
    setActiveEpochIndex(targetIndex);
  }, [epochs.length, playClickSound]);

  // Keyboard Arrow navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className="container timeline-section" id="experience">
      {/* Aligned Section Header matching #about, #work, #skills */}
      <div className="timeline-header">
        <div className="gsap-reveal">
          <MaskedTitle text="Engineering Journey" />
          <div className="divider" />
        </div>
        <div className="timeline-header-meta font-mono">
          <div className="timeline-meta-pill">
            <span className={`meta-pulse-dot ${isPaused ? 'is-paused' : ''}`} />
            <span className="meta-pill-text">
              STAGE 0{activeEpochIndex + 1}/04 • {isPaused ? 'INTERACTIVE' : 'AUTO-RUNNING'}
            </span>
          </div>
          <div className="timeline-jump-strip">
            {epochs.map((ep, i) => (
              <button
                key={ep.epoch}
                type="button"
                onClick={() => goToEpoch(i)}
                onMouseEnter={playHoverSound}
                className={`timeline-jump-pill hoverable ${activeEpochIndex === i ? 'is-active' : ''}`}
                aria-label={`Jump to stage 0${i + 1}`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Stage Slider with Side Navigation Arrows & Auto-running Loop */}
      <div
        className="timeline-stage-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="timeline-side-arrow timeline-arrow-prev hoverable font-mono"
          onClick={handlePrev}
          onMouseEnter={playHoverSound}
          aria-label="Previous phase"
          title="Previous stage"
        >
          ‹
        </button>

        <div className="timeline-carousel-shell">
          <div
            className="timeline-cards-track"
            style={{ transform: `translateX(-${activeEpochIndex * 100}%)` }}
          >
            {epochs.map((item, idx) => {
              const Visualizer = item.Visualizer;
              const isActive = activeEpochIndex === idx;

              return (
                <div
                  key={item.epoch}
                  className={`timeline-card-slide ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => {
                    if (!isActive) playHoverSound();
                  }}
                >
                  {/* Stage Container Card */}
                  <div className="timeline-stage-card hoverable">
                    {/* Left Pane: Narrative & Technical Telemetry */}
                    <div className="timeline-narrative-pane">
                      <div className="stage-topbar font-mono">
                        <div className="stage-topbar-left">
                          <span className="stage-badge uppercase">{item.category}</span>
                          <span className="stage-date uppercase">{item.date}</span>
                        </div>
                        <span className="stage-step-tag text-gray">{item.stageLabel}</span>
                      </div>

                      <div className="stage-title-wrap">
                        <h3 className="stage-title uppercase text-glow">{item.title}</h3>
                        <div className="stage-headline font-mono text-gray uppercase">{item.headline}</div>
                      </div>

                      <p className="stage-summary text-gray">{item.summary}</p>

                      {/* Telemetry Metrics Grid */}
                      <div className="stage-metrics-grid font-mono">
                        {item.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="stage-metric-box">
                            <span className="metric-lbl text-gray">{m.label}</span>
                            <span className="metric-val">{m.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills matching .skill-pill */}
                      <div className="stage-tech-pills font-mono">
                        {item.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="stage-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Pane: 2D Live Visualizer Canvas */}
                    <div className="timeline-simulation-pane">
                      <div className="terminal-canvas-wrapper">
                        <Visualizer isActive={isActive} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="timeline-side-arrow timeline-arrow-next hoverable font-mono"
          onClick={handleNext}
          onMouseEnter={playHoverSound}
          aria-label="Next phase"
          title="Next stage"
        >
          ›
        </button>
      </div>
    </section>
  );
}
