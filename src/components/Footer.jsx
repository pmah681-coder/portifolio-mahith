import useTextScramble from '../hooks/useTextScramble';

function ScrambleLink({ href, children, className, ...props }) {
  const { displayText, onMouseEnter, onMouseLeave } = useTextScramble(children);
  return (
    <a 
      href={href} 
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {displayText}
    </a>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner font-mono text-gray">
        <p>© 2026 Pulabaigari Mahith. All rights reserved.</p>
        <div className="social-links uppercase">
          <ScrambleLink href="https://www.linkedin.com/in/p-mahith-845124358" className="hoverable" target="_blank" rel="noopener noreferrer">LinkedIn</ScrambleLink>
          <ScrambleLink href="https://wa.me/916305853667" className="hoverable" target="_blank" rel="noopener noreferrer">WhatsApp</ScrambleLink>
          <ScrambleLink href="mailto:p.mahith123@gmail.com" className="hoverable">Email</ScrambleLink>
        </div>
      </div>
    </footer>
  );
}
