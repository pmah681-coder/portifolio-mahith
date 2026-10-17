import { useEffect, useRef } from 'react';

// ============================================================================
// STAGE 01: 2024 – 2025 Web & Networking Foundations
// Network Packet Inspector, OSI Handshake & Protocol Flow Analyzer
// ============================================================================
export function NetworkPacketProtocolCanvas({ isActive = true }) {
  const canvasRef = useRef(null);
  const isActiveRef = useRef(isActive);

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const parent = canvas.parentElement;
    let width = parent?.clientWidth || 380;
    let height = parent?.clientHeight || 280;

    const resize = () => {
      if (!canvas || !parent) return;
      width = parent.clientWidth || 380;
      height = parent.clientHeight || 280;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const layers = [
      { id: 'app', label: 'APPLICATION [HTTP/S, DNS]', status: 'ENCRYPTED TLS 1.3', color: '#00f5d4' },
      { id: 'trans', label: 'TRANSPORT [TCP 3-WAY HANDSHAKE]', status: 'SYN -> SYN/ACK -> ACK', color: '#38bdf8' },
      { id: 'net', label: 'NETWORK [IPv4 / IPv6 ROUTING]', status: 'SRC: 192.168.1.42 -> DST: GATEWAY', color: '#818cf8' },
      { id: 'link', label: 'DATA LINK & PHYSICAL', status: 'FRAME CHECKSUM CRC-32 PASS', color: '#a78bfa' }
    ];

    let frame = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Header Bar
      const headerY = 16;
      ctx.fillStyle = 'rgba(16, 22, 28, 0.88)';
      ctx.fillRect(16, headerY, width - 32, 28);
      ctx.strokeStyle = 'rgba(0, 245, 212, 0.25)';
      ctx.strokeRect(16, headerY, width - 32, 28);

      ctx.font = '9px "Space Mono", monospace';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.fillText('PROTOCOL ANALYZER: TCP/IP STACK', 28, headerY + 18);

      ctx.fillStyle = '#00f5d4';
      ctx.textAlign = 'right';
      ctx.fillText('PORT 443 • PACKET LIVE', width - 28, headerY + 18);

      // OSI Protocol Layer Boxes
      const baseY = 54;
      const cardHeight = Math.min(42, (height - 95) / 4);

      layers.forEach((layer, idx) => {
        const y = baseY + idx * (cardHeight + 4);

        ctx.fillStyle = 'rgba(12, 16, 22, 0.75)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.roundRect(16, y, width - 32, cardHeight, 6);
        ctx.fill();
        ctx.stroke();

        // Left color accent pill
        ctx.fillStyle = layer.color;
        ctx.fillRect(16, y, 4, cardHeight);

        // Layer Label
        ctx.font = '9px "Space Mono", monospace';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'left';
        ctx.fillText(layer.label, 28, y + cardHeight / 2 - 2);

        // Status
        ctx.font = '8px "Space Mono", monospace';
        ctx.fillStyle = layer.color;
        ctx.fillText(layer.status, 28, y + cardHeight / 2 + 10);

        // Hex Byte simulation
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.textAlign = 'right';
        const hex = `0x${((frame * 7 + idx * 43) % 255).toString(16).padStart(2, '0').toUpperCase()}AF`;
        ctx.fillText(hex, width - 26, y + cardHeight / 2 + 4);
      });

      // Footer
      const footerY = height - 16;
      ctx.font = '8.5px "Space Mono", monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.textAlign = 'left';
      ctx.fillText('THE APOLLO UNIVERSITY • NETWORKING CORE', 16, footerY);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#00f5d4';
      ctx.fillText('ZERO PACKET LOSS', width - 16, footerY);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="quantum-visualizer-canvas" />;
}
export const WebArchitectureCanvas = NetworkPacketProtocolCanvas;

// ============================================================================
// STAGE 02: 2025 – 2026 Vulnerability Testing & Tooling
// Burp Suite Request Repeater & Kali Exploit Sandbox
// ============================================================================
export function BurpExploitSandboxCanvas({ isActive = true }) {
  const canvasRef = useRef(null);
  const isActiveRef = useRef(isActive);

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const parent = canvas.parentElement;
    let width = parent?.clientWidth || 380;
    let height = parent?.clientHeight || 280;

    const resize = () => {
      if (!canvas || !parent) return;
      width = parent.clientWidth || 380;
      height = parent.clientHeight || 280;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const testLogs = [
      { tool: 'BURP SUITE', action: 'POST /vulnerabilities/sqli/ HTTP/1.1', tag: 'INTERCEPT', color: '#f59e0b' },
      { tool: 'PAYLOAD', action: "id=1' UNION SELECT user, password FROM users--", tag: 'INJECT', color: '#ef4444' },
      { tool: 'DVWA LAB', action: 'HTTP/1.1 200 OK • Vulnerability Identified', tag: 'CONFIRMED', color: '#00f5d4' },
      { tool: 'MITIGATION', action: 'Prepared Statement & Input Sanitization Bound', tag: 'PATCHED', color: '#10b981' }
    ];

    const render = () => {
      animId = requestAnimationFrame(render);
      ctx.clearRect(0, 0, width, height);

      // Header Bar
      const headerY = 16;
      ctx.fillStyle = 'rgba(16, 22, 28, 0.88)';
      ctx.fillRect(16, headerY, width - 32, 28);
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)';
      ctx.strokeRect(16, headerY, width - 32, 28);

      ctx.font = '9px "Space Mono", monospace';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.fillText('BURP SUITE PROXY • REPEATER', 28, headerY + 18);

      ctx.fillStyle = '#ef4444';
      ctx.textAlign = 'right';
      ctx.fillText('OWASP A03: INJECTION AUDIT', width - 28, headerY + 18);

      // Log Cards
      const baseY = 54;
      const cardHeight = Math.min(42, (height - 95) / 4);

      testLogs.forEach((item, idx) => {
        const y = baseY + idx * (cardHeight + 4);

        ctx.fillStyle = idx === 1 ? 'rgba(32, 18, 22, 0.8)' : 'rgba(12, 16, 22, 0.75)';
        ctx.strokeStyle = idx === 1 ? 'rgba(239, 68, 68, 0.45)' : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.roundRect(16, y, width - 32, cardHeight, 6);
        ctx.fill();
        ctx.stroke();

        ctx.font = '8.5px "Space Mono", monospace';
        ctx.fillStyle = item.color;
        ctx.textAlign = 'left';
        ctx.fillText(`[${item.tool}]`, 26, y + cardHeight / 2 - 2);

        ctx.fillStyle = '#cccccc';
        ctx.fillText(item.action, 26, y + cardHeight / 2 + 10);

        ctx.textAlign = 'right';
        ctx.fillStyle = item.color;
        ctx.fillText(item.tag, width - 26, y + cardHeight / 2 + 4);
      });

      // Footer
      const footerY = height - 16;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.beginPath();
      ctx.moveTo(16, footerY - 12);
      ctx.lineTo(width - 16, footerY - 12);
      ctx.stroke();

      ctx.font = '8px "Space Mono", monospace';
      ctx.fillStyle = '#888888';
      ctx.textAlign = 'left';
      ctx.fillText('TECHNO HACKS & CYBERWARLAB LABS', 16, footerY);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#00f5d4';
      ctx.fillText('VAPT VERIFIED', width - 16, footerY);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="quantum-visualizer-canvas" />;
}
export const ChatUpSocketStreamCanvas = BurpExploitSandboxCanvas;

// ============================================================================
// STAGE 03: 2026 Digital Forensics & Investigation
// Amroha Police Evidence Hex Dump & SHA-256 Chain of Custody Verifier
// ============================================================================
export function ForensicsEvidenceHexCanvas({ isActive = true }) {
  const canvasRef = useRef(null);
  const isActiveRef = useRef(isActive);

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const parent = canvas.parentElement;
    let width = parent?.clientWidth || 380;
    let height = parent?.clientHeight || 280;

    const resize = () => {
      if (!canvas || !parent) return;
      width = parent.clientWidth || 380;
      height = parent.clientHeight || 280;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const hexLines = [
      '00000000: 4D 5A 90 00 03 00 00 00  04 00 00 00 FF FF 00 00  MZ..............',
      '00000010: B8 00 00 00 00 00 00 00  40 00 00 00 00 00 00 00  ........@.......',
      '00000020: 00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  ................',
      '00000030: 00 00 00 00 00 00 00 00  00 00 00 00 E8 00 00 00  ................',
      '00000040: 0E 1F BA 0E 00 B4 09 CD  21 B8 01 4C CD 21 54 68  ........!..L.!Th'
    ];

    let frame = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Header Bar
      const headerY = 16;
      ctx.fillStyle = 'rgba(16, 24, 22, 0.9)';
      ctx.fillRect(16, headerY, width - 32, 28);
      ctx.strokeStyle = 'rgba(0, 245, 212, 0.4)';
      ctx.strokeRect(16, headerY, width - 32, 28);

      ctx.font = '9px "Space Mono", monospace';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.fillText('AMROHA POLICE: EVIDENCE FILE CARVER', 28, headerY + 18);

      ctx.fillStyle = '#00f5d4';
      ctx.textAlign = 'right';
      ctx.fillText('SHA-256 HASH VERIFIED ✓', width - 28, headerY + 18);

      // Hex Dump Viewer Box
      const hexBoxY = 54;
      const hexBoxH = height - 98;
      ctx.fillStyle = 'rgba(8, 12, 14, 0.95)';
      ctx.fillRect(16, hexBoxY, width - 32, hexBoxH);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.strokeRect(16, hexBoxY, width - 32, hexBoxH);

      // Sub-header
      ctx.fillStyle = 'rgba(0, 245, 212, 0.06)';
      ctx.fillRect(16, hexBoxY, width - 32, 22);
      ctx.font = '8px "Space Mono", monospace';
      ctx.fillStyle = '#00f5d4';
      ctx.textAlign = 'left';
      ctx.fillText('EVIDENCE_ID: AP/2026/094 • WRITE-BLOCK ACTIVE', 26, hexBoxY + 15);

      // Render Hex text lines
      ctx.font = '9.5px "Space Mono", monospace';
      ctx.fillStyle = '#94a3b8';
      hexLines.forEach((line, idx) => {
        const lineY = hexBoxY + 44 + idx * 19;
        if (idx === 0) {
          ctx.fillStyle = '#00f5d4';
        } else {
          ctx.fillStyle = '#94a3b8';
        }
        ctx.fillText(line, 26, lineY);
      });

      // Footer
      const footerY = height - 16;
      ctx.font = '8.5px "Space Mono", monospace';
      ctx.fillStyle = '#888888';
      ctx.textAlign = 'left';
      ctx.fillText('CHAIN OF CUSTODY: ISO/IEC 27001 AUDITED', 16, footerY);

      ctx.fillStyle = '#38bdf8';
      ctx.textAlign = 'right';
      ctx.fillText('ZERO TAMPERING DETECTED', width - 16, footerY);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="quantum-visualizer-canvas" />;
}
export const RoastingAITokenStreamCanvas = ForensicsEvidenceHexCanvas;

// ============================================================================
// STAGE 04: 2026 Law Enforcement Production Solution
// Police Department Cyber Crime Reporting & Case Dispatch Radar
// ============================================================================
export function CyberThreatRadarCanvas({ isActive = true }) {
  const canvasRef = useRef(null);
  const isActiveRef = useRef(isActive);

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const parent = canvas.parentElement;
    let width = parent?.clientWidth || 380;
    let height = parent?.clientHeight || 280;

    const resize = () => {
      if (!canvas || !parent) return;
      width = parent.clientWidth || 380;
      height = parent.clientHeight || 280;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const cases = [
      { id: 'CCP-94301', type: 'Phishing Case', status: 'Under Investigation', officer: 'Assigned', color: '#00f5d4' },
      { id: 'CCP-94302', type: 'Ransomware Outbreak', status: 'Evidence Hashed', officer: 'Forensics Unit', color: '#ef4444' },
      { id: 'CCP-94309', type: 'DDoS Attack Report', status: 'Perimeter Mitigated', officer: 'SOC Team', color: '#38bdf8' },
      { id: 'CCP-94315', type: 'Data Breach Audit', status: 'Case Closed', officer: 'Verified', color: '#10b981' }
    ];

    const render = () => {
      animId = requestAnimationFrame(render);
      ctx.clearRect(0, 0, width, height);

      // Top Gateway Bar
      const headerY = 16;
      ctx.fillStyle = 'rgba(16, 24, 28, 0.88)';
      ctx.fillRect(16, headerY, width - 32, 28);
      ctx.strokeStyle = 'rgba(0, 245, 212, 0.35)';
      ctx.strokeRect(16, headerY, width - 32, 28);

      ctx.font = '9px "Space Mono", monospace';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.fillText('POLICE CYBER CRIME PORTAL', 28, headerY + 18);

      ctx.fillStyle = '#00f5d4';
      ctx.fillText('AUTH: RBAC CLEARED', Math.min(180, width * 0.45), headerY + 18);

      ctx.fillStyle = '#10b981';
      ctx.textAlign = 'right';
      ctx.fillText('LIVE INCIDENT DECK', width - 28, headerY + 18);

      // Live Cases Grid
      const baseY = 54;
      const cardHeight = Math.min(42, (height - 95) / 4);

      cases.forEach((item, idx) => {
        const y = baseY + idx * (cardHeight + 4);

        ctx.fillStyle = 'rgba(12, 16, 20, 0.8)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.roundRect(16, y, width - 32, cardHeight, 6);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = item.color;
        ctx.fillRect(16, y, 4, cardHeight);

        ctx.font = '8.5px "Space Mono", monospace';
        ctx.fillStyle = item.color;
        ctx.textAlign = 'left';
        ctx.fillText(`[${item.id}] ${item.type}`, 26, y + cardHeight / 2 - 2);

        ctx.fillStyle = '#94a3b8';
        ctx.fillText(`STATUS: ${item.status}`, 26, y + cardHeight / 2 + 10);

        ctx.textAlign = 'right';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(item.officer, width - 26, y + cardHeight / 2 + 4);
      });

      // Footer
      const footerY = height - 16;
      ctx.font = '8.5px "Space Mono", monospace';
      ctx.fillStyle = '#888888';
      ctx.textAlign = 'left';
      ctx.fillText('POSTGRESQL • SHA-256 TAMPER EVIDENCE', 16, footerY);

      ctx.fillStyle = '#00f5d4';
      ctx.textAlign = 'right';
      ctx.fillText('PRODUCTION LAW ENFORCEMENT', width - 16, footerY);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="quantum-visualizer-canvas" />;
}
export const EdgeResumeATSParserCanvas = CyberThreatRadarCanvas;
