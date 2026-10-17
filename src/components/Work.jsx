import { useMemo, useState } from 'react';
import ProjectModal from './ProjectModal';
import MaskedTitle from './MaskedTitle';

import cyberCrimeImg from '../assets/cyber-crime-portal.jpg';
import vulnerabilityImg from '../assets/vulnerability-testing.jpg';
import forensicsImg from '../assets/digital-forensics.jpg';
import threatScannerImg from '../assets/threat-scanner.jpg';

export default function Work() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const projects = useMemo(
    () => [
      {
        bgClass: 'bg-1',
        shortTitle: 'Cyber Crime Portal',
        category: 'LAW ENFORCEMENT • INCIDENT MANAGEMENT • SECURITY',
        tagline: 'Cyber Crime Reporting & Management Portal for Police Department',
        description:
          'Created a centralized cyber crime reporting and management portal for law enforcement operations. Designed to streamline public incident submission, secure evidence acquisition, and provide investigating officers with real-time case progression tracking and chain of custody integrity.',
        problem:
          'Manual incident intake in police departments causes critical delays in early evidence acquisition, loss of digital forensics trails, and vulnerable citizen communication channels.',
        solution:
          'Engineered a secure web application featuring encrypted public incident reporting, role-based investigator dashboards, automated evidence cryptographic hashing (SHA-256), and dynamic case lifecycle management.',
        techStack: [
          'JavaScript',
          'Node.js',
          'Express.js',
          'PostgreSQL',
          'Web Security',
          'Digital Forensics',
          'JWT Authentication',
          'Multer Encrypted Uploads'
        ],
        features: [
          'Encrypted citizen incident filing with multi-file evidence upload',
          'Investigating officer case review, assignment, and status updates',
          'Automated cryptographic hash computation for evidence integrity',
          'Audit trail logs adhering to procedural law-enforcement standards'
        ],
        architectureFlow: [
          { step: '01', title: 'Citizen Intake Node', tech: 'Web Client • HTTPS', desc: 'Encrypted public incident submission & metadata capture' },
          { step: '02', title: 'Security Gateway', tech: 'Node.js • Express API', desc: 'Input validation, sanitize parameters & quarantine uploads' },
          { step: '03', title: 'Evidence Engine', tech: 'SHA-256 • Cryptography', desc: 'Compute tamper-evident hashes upon upload completion' },
          { step: '04', title: 'Police Case Deck', tech: 'PostgreSQL • JWT RBAC', desc: 'Role-based officer triage, dispatch & progression logs' },
        ],
        architectureDetails: [
          { title: 'Evidence Preservation Pipeline', desc: 'Every uploaded digital artifact is immediately processed in memory to compute its SHA-256 fingerprint before being stored in an immutable, restricted-access vault.' },
          { title: 'Role-Based Law Enforcement Auth', desc: 'Segregated clearance tiers ensure that only verified investigating officers assigned to specific case IDs can access classified evidence notes and citizen identity payloads.' },
          { title: 'Chain of Custody Audit Trail', desc: 'All case updates, file downloads, and investigator notes are timestamped and recorded in an append-only audit ledger.' },
        ],
        metrics: [
          { label: 'Intake Velocity', value: '< 2 Mins' },
          { label: 'Evidence Integrity', value: 'SHA-256 Fingerprint' },
          { label: 'Access Security', value: 'RBAC Clearance' },
          { label: 'Target Entity', value: 'Police Department' },
        ],
        title: 'Cyber Crime Portal (Police Dept)',
        images: [cyberCrimeImg, forensicsImg, vulnerabilityImg],
        githubUrl: 'https://github.com/p-mahith',
        liveDemoUrl: 'https://www.linkedin.com/in/p-mahith-845124358',
        exploreUrl: 'https://www.linkedin.com/in/p-mahith-845124358'
      },
      {
        bgClass: 'bg-2',
        shortTitle: 'Vulnerability Testing',
        category: 'VAPT • OFFENSIVE SECURITY • PENETRATION TESTING',
        tagline: 'Controlled Web & Network Vulnerability Assessment Suite',
        description:
          'Performed in-depth vulnerability testing across web and network attack surfaces in controlled environments. Identified common security flaws, simulated attack vectors using Kali Linux and Burp Suite, and documented mitigation blueprints.',
        problem:
          'Unmonitored web application endpoints and misconfigured network services introduce high-risk attack surfaces prone to SQL injection, XSS, CSRF, and remote exploitation.',
        solution:
          'Deploys controlled security testing labs with DVWA, Burp Suite, Metasploit, and custom Python automation scripts to intercept HTTP traffic, scan open ports, test authentication bounds, and verify patch effectiveness.',
        techStack: [
          'Kali Linux',
          'Metasploit Framework',
          'Burp Suite',
          'DVWA',
          'Nmap Port Scanning',
          'Wireshark',
          'Python Automation'
        ],
        features: [
          'Full-duplex HTTP request interception & parameter tampering via Burp Suite',
          'Controlled exploit payload execution in isolated DVWA sandboxes',
          'Network perimeter port discovery and service banner enumeration via Nmap',
          'Actionable vulnerability remediation and hardening advisory reports'
        ],
        architectureFlow: [
          { step: '01', title: 'Target Reconnaissance', tech: 'Nmap • Network Probing', desc: 'Port scanning, service fingerprinting & perimeter mapping' },
          { step: '02', title: 'Traffic Interception', tech: 'Burp Suite Proxy', desc: 'Live HTTP/S parameter inspection & session token validation' },
          { step: '03', title: 'Controlled Exploitation', tech: 'Metasploit • DVWA Lab', desc: 'Verifying exploitability of identified flaw in testbed' },
          { step: '04', title: 'Mitigation Report', tech: 'Security Blueprint', desc: 'Remediation guidance, patch verification & defense hardening' },
        ],
        architectureDetails: [
          { title: 'OWASP Top 10 Coverage', desc: 'Systematically audited injection flaws, broken access control, security misconfigurations, and vulnerable third-party components.' },
          { title: 'Protocol-Level Traffic Analysis', desc: 'Utilized Wireshark and proxy inspection to identify unencrypted sensitive data in transit and weak TLS handshake configurations.' },
          { title: 'Automated Python Scanners', desc: 'Engineered lightweight Python scripts to automate repetitive endpoint health checks and header compliance verification.' },
        ],
        metrics: [
          { label: 'Assessment Scope', value: 'Web & Network' },
          { label: 'Security Standard', value: 'OWASP Top 10' },
          { label: 'Primary Proxy', value: 'Burp Suite' },
          { label: 'Sandbox Safety', value: '100% Isolated' },
        ],
        title: 'Web & Network Vulnerability Testing',
        images: [vulnerabilityImg, threatScannerImg, cyberCrimeImg],
        githubUrl: 'https://github.com/p-mahith',
        liveDemoUrl: 'https://www.linkedin.com/in/p-mahith-845124358',
        exploreUrl: 'https://www.linkedin.com/in/p-mahith-845124358'
      },
      {
        bgClass: 'bg-3',
        shortTitle: 'Digital Forensics',
        category: 'DIGITAL FORENSICS • INVESTIGATION • AMROHA POLICE',
        tagline: 'Forensic Evidence Analysis & Chain of Custody System',
        description:
          'Gained hands-on exposure to digital forensics and cybersecurity investigation workflows during an internship with Amroha Police in 2026. Assisted with forensic analysis concepts, evidence handling, and investigation-oriented security practices.',
        problem:
          'Digital evidence is fragile; without strict write-blocking, cryptographic validation, and documented chain of custody, evidence is easily dismissed in judicial proceedings.',
        solution:
          'Studied and applied digital forensics workflows: bit-stream image preservation, disk hex inspections, metadata extraction, timeline analysis, and cryptographic hash verification adhering to ISO/IEC 27001 standards.',
        techStack: [
          'Digital Forensics Workflows',
          'Chain of Custody',
          'Cryptographic Hashing (SHA-256/MD5)',
          'Hex Analysis',
          'Amroha Police Internship (2026)',
          'ISO/IEC 27001 Standards'
        ],
        features: [
          'Forensic evidence acquisition procedures and chain of custody documentation',
          'Disk hex inspection, deleted file carving concepts, and metadata analysis',
          'Verification of file integrity through cryptographic hash matching',
          'Investigation-oriented security reporting for case dossiers'
        ],
        architectureFlow: [
          { step: '01', title: 'Write-Blocked Capture', tech: 'Bit-Stream Imaging', desc: 'Non-invasive forensic acquisition of target storage media' },
          { step: '02', title: 'Cryptographic Sealing', tech: 'SHA-256 / MD5 Hash', desc: 'Generating dual hash fingerprints to guarantee zero alteration' },
          { step: '03', title: 'Artifact Carving', tech: 'Hex & Metadata Parser', desc: 'Timeline reconstruction, browser history & log event correlation' },
          { step: '04', title: 'Forensic Case Dossier', tech: 'Evidence Ledger', desc: 'Procedural documentation for law-enforcement legal scrutiny' },
        ],
        architectureDetails: [
          { title: 'Chain of Custody Verification', desc: 'Documented each phase of physical and logical handling to ensure unquestioned evidentiary integrity in legal proceedings.' },
          { title: 'Hex-Level Data Examination', desc: 'Inspected file headers, footers, and anomalous sectors to identify obfuscated or timestamp-altered artifacts.' },
          { title: 'Standards Compliance', desc: 'Aligned investigation methodologies with international standard ISO/IEC 27001:2022 information security principles.' },
        ],
        metrics: [
          { label: 'Investigation Unit', value: 'Amroha Police 2026' },
          { label: 'Integrity Check', value: 'Dual Hash (SHA/MD5)' },
          { label: 'Standard', value: 'ISO/IEC 27001' },
          { label: 'Procedure', value: 'Chain of Custody' },
        ],
        title: 'Digital Forensics & Evidence Suite',
        images: [forensicsImg, cyberCrimeImg, vulnerabilityImg],
        githubUrl: 'https://github.com/p-mahith',
        liveDemoUrl: 'https://www.linkedin.com/in/p-mahith-845124358',
        exploreUrl: 'https://www.linkedin.com/in/p-mahith-845124358'
      },
      {
        bgClass: 'bg-1',
        shortTitle: 'AI Threat Analyzer',
        category: 'APPLIED AI • PROMPT ENGINEERING • DEFENSIVE SECURITY',
        tagline: 'AI-Powered Cyber Threat & Prompt Injection Defense Engine',
        description:
          'Interactive threat intelligence application leveraging prompt engineering methodologies to analyze incoming payloads, detect adversarial prompt injections, and identify social engineering/phishing indicators in real time.',
        problem:
          'Traditional static regex filters and rule-based heuristic detectors fail to identify sophisticated generative AI prompt injections and highly tailored spear-phishing messages.',
        solution:
          'Constructed structured prompt engineering schemas and LLM evaluation chains to score message intent, flag adversarial manipulation attempts, and provide automated incident severity breakdowns.',
        techStack: [
          'Prompt Engineering',
          'Python',
          'AI Fundamentals',
          'Google Gemini API',
          'JavaScript',
          'Web Security',
          'Adversarial Testing'
        ],
        features: [
          'Detection of indirect prompt injection and context escaping tricks',
          'Real-time phishing indicators scoring with highlighted deception markers',
          'Multi-mode threat archetype evaluation with rapid token streaming',
          'Remediation guidelines and defensive prompt hardening blueprints'
        ],
        architectureFlow: [
          { step: '01', title: 'Payload Ingestion', tech: 'Client Sanitizer', desc: 'Extracts message headers, body tokens, and attachment links' },
          { step: '02', title: 'Prompt Framing', tech: 'Strict Evaluation Schema', desc: 'Curated system prompt instructs LLM to act as security auditor' },
          { step: '03', title: 'Threat Reasoning', tech: 'Gemini Engine', desc: 'Evaluates deception cues, prompt injections & anomaly scores' },
          { step: '04', title: 'Verdict Dashboard', tech: 'Reactive HUD', desc: 'Displays visual risk gauge, indicators breakdown & mitigation' },
        ],
        architectureDetails: [
          { title: 'Zero-Shot & Few-Shot Prompt Design', desc: 'Mastery in prompt engineering applied to eliminate model drift and ensure deterministic JSON-formatted threat scoring.' },
          { title: 'Adversarial Injection Detection', desc: 'Flags instruction overrides, system token spoofing, and delimiter evasion attempts in user-supplied data.' },
          { title: 'Sub-Second Latency', desc: 'Optimized pipeline yields comprehensive security analysis in under 700 milliseconds.' },
        ],
        metrics: [
          { label: 'Evaluation Latency', value: '< 680ms' },
          { label: 'Detection Scope', value: 'Phishing & Injections' },
          { label: 'AI Foundation', value: 'Certified Prompt Eng' },
          { label: 'Response Format', value: 'Strict JSON Schema' },
        ],
        title: 'AI Threat Intelligence & Phishing Analyzer',
        images: [threatScannerImg, vulnerabilityImg, forensicsImg],
        githubUrl: 'https://github.com/p-mahith',
        liveDemoUrl: 'https://www.linkedin.com/in/p-mahith-845124358',
        exploreUrl: 'https://www.linkedin.com/in/p-mahith-845124358'
      }
    ],
    []
  );

  const activeProject = activeProjectIndex === null ? null : projects[activeProjectIndex];

  return (
    <section id="work" className="container work-page-section">
      <div className="gsap-reveal work-header">
        <MaskedTitle number="2." text="Featured Work &amp; Research" />
        <div className="divider" />
      </div>

      <div className="work-grid">
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className="project-card hoverable gsap-work-card"
            role="button"
            tabIndex={0}
            onClick={() => setActiveProjectIndex(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveProjectIndex(index);
            }}
            aria-label={`Open project: ${proj.title}`}
          >
            {proj.images && proj.images[0] ? (
              <img
                src={proj.images[0]}
                alt={proj.title}
                className="project-card-image"
                loading="lazy"
              />
            ) : (
              <div className={`project-bg ${proj.bgClass}`} />
            )}
            <div className="project-overlay" />
            <div className="project-info">
              <p className="font-mono project-category text-gray uppercase">{proj.category}</p>
              <h3 className="project-title text-glow uppercase">{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        open={activeProjectIndex !== null}
        onClose={() => setActiveProjectIndex(null)}
        project={activeProject}
      />
    </section>
  );
}
