import mahithPhoto from '../assets/mahith-profile.jpg';
import EngineeringTelemetry from './EngineeringTelemetry';
import Timeline from './Timeline';
import MaskedTitle from './MaskedTitle';

export default function About() {
  return (
    <div className="about-page-wrapper">
      {/* 1. Core Background & Security Engineering Philosophy */}
      <section id="about" className="container about-intro-section">
        <div className="about-grid">
          <div className="gsap-reveal">
            <MaskedTitle number="1." text="About Me" />
            <div className="divider" />
            <p className="text-gray about-text">
              I’m Mahith P, a Computer Science undergraduate at The Apollo University, Chittoor, dedicated to cybersecurity, digital forensics, vulnerability assessment, and defensive system architecture. With hands-on internship experience across CyberwarLab, TechnoHacks, and the Amroha Police digital forensics investigation unit, I specialize in identifying system vulnerabilities, analyzing forensic evidence, and engineering secure, resilient applications.
            </p>
            <p className="text-gray about-text" style={{ marginTop: '0.85rem' }}>
              My work bridges practical penetration testing with real-world law enforcement solutions—such as engineering an official Cyber Crime Reporting and Management Portal for police operations. I combine foundational programming in C, Python, and JavaScript with security auditing tools like Kali Linux, Metasploit, Burp Suite, and DVWA.
            </p>
            <div className="font-mono text-gray skill-list text-sm">
              <p><span style={{ color: '#00f5d4' }}>▸</span> Vulnerability Assessment &amp; Penetration Testing (VAPT)</p>
              <p><span style={{ color: '#00f5d4' }}>▸</span> Digital Forensics &amp; Evidence Handling (Amroha Police)</p>
              <p><span style={{ color: '#00f5d4' }}>▸</span> Security Operations &amp; Network Defense (SOC Basics)</p>
              <p><span style={{ color: '#00f5d4' }}>▸</span> Prompt Engineering &amp; AI Security Fundamentals</p>
            </div>
          </div>

          <div className="abstract-box hoverable gsap-reveal">
            <div className="about-photo-wrapper">
              <img
                src={mahithPhoto}
                alt="Mahith P - Cybersecurity Engineer & Security Researcher"
                className="about-photo-img"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Real-Time Engineering Telemetry & Verified Command Channels */}
        <EngineeringTelemetry />
      </section>

      {/* 2. Interactive Evolution Roadmap (Auto-looping + Move Buttons) */}
      <Timeline />
    </div>
  );
}
