import { useAudio } from '../hooks/useAudio';
import mahithPhoto from '../assets/mahith-profile.jpg';

export default function EngineeringTelemetry() {
  const { playHoverSound, playClickSound } = useAudio();

  return (
    <div className="telemetry-command-deck gsap-reveal font-mono">
      {/* Top Header Bar - Clean and Professional */}
      <div className="telemetry-header">
        <div className="telemetry-header-left">
          <span className="telemetry-live-dot" style={{ backgroundColor: '#00f5d4', boxShadow: '0 0 10px #00f5d4' }} />
          <span className="telemetry-hud-tag">Current Operations &amp; Verified Telemetry</span>
        </div>
        <span className="telemetry-hud-status" style={{ color: '#00f5d4' }}>Active in 2026 • Seeking Cybersecurity Roles &amp; Projects</span>
      </div>

      {/* 3-Column Profile & Activity Grid */}
      <div className="telemetry-grid">
        {/* Card 1: What I'm Working On */}
        <div className="telemetry-card hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge" style={{ color: '#00f5d4', borderColor: 'rgba(0, 245, 212, 0.3)' }}>CURRENT FOCUS</span>
            <span className="card-indicator" style={{ color: '#00f5d4' }}>Active Research</span>
          </div>
          <h3 className="telemetry-card-title">Vulnerability Assessment &amp; VAPT</h3>
          <p className="telemetry-card-text text-gray">
            Executing hands-on web and network vulnerability assessments, penetration testing in controlled sandboxes, and threat mitigation with Kali Linux and Burp Suite.
          </p>
          <div className="telemetry-meta-row text-gray">
            <span>CORE TOOLING:</span>
            <span className="meta-highlight">Kali Linux, Metasploit, Burp Suite, DVWA, Python</span>
          </div>
        </div>

        {/* Card 2: Police & Cyber Defense Experience */}
        <div className="telemetry-card hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge">INVESTIGATION &amp; LABS</span>
            <span className="card-indicator">3 Internships</span>
          </div>
          <h3 className="telemetry-card-title">Amroha Police &amp; CyberwarLab</h3>
          <p className="telemetry-card-text text-gray">
            Assisted with digital forensics workflows, evidence handling, chain-of-custody protocols, and developed a Cyber Crime Portal for police case management.
          </p>
          <div className="telemetry-actions-list">
            <a
              href="https://www.linkedin.com/in/p-mahith-845124358"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>View Experience on LinkedIn</span>
              <span className="telemetry-arrow">↗</span>
            </a>
          </div>
        </div>

        {/* Card 3: Mahith's LinkedIn Profile & Quick Contact */}
        <div className="telemetry-card telemetry-card-comms hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge">VERIFIED IDENTITY</span>
            <span className="card-indicator">Andhra Pradesh, IN</span>
          </div>

          {/* Clean LinkedIn Identity Preview */}
          <div className="linkedin-profile-preview">
            <img
              src={mahithPhoto}
              alt="Mahith P"
              className="linkedin-preview-avatar"
            />
            <div className="linkedin-preview-info">
              <div className="linkedin-preview-name">
                <span>Mahith P</span>
                <span className="linkedin-check" title="Verified Profile" style={{ color: '#00f5d4' }}>✓</span>
              </div>
              <div className="linkedin-preview-role text-gray">
                Cybersecurity Engineer • B.Tech CSE (Apollo Univ)
              </div>
            </div>
          </div>

          <p className="telemetry-card-text text-gray" style={{ marginBottom: '1rem' }}>
            Open for cybersecurity analyst, penetration tester, and digital forensics engineering opportunities.
          </p>

          <div className="telemetry-actions-list">
            <a
              href="https://www.linkedin.com/in/p-mahith-845124358"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>Connect on LinkedIn</span>
              <span className="telemetry-arrow">↗</span>
            </a>

            <a
              href="https://wa.me/916305853667?text=Hi%20Mahith,%20saw%20your%20cybersecurity%20portfolio%20and%20wanted%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn telemetry-btn-ping hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>Chat on WhatsApp (+91 6305853667)</span>
              <span className="telemetry-arrow">💬</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
