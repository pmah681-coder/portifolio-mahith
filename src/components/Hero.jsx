import HeroGlobeButton from './HeroGlobeButton';

export default function Hero() {
  return (
    <header className="container hero-container">
      <p className="hero-elem hero-subtitle font-mono uppercase">
        Security Researcher &amp; Digital Forensics
      </p>
      <h1 className="hero-elem hero-title-1 uppercase text-glow-intense glitch-wrapper" data-text="CYBER">
        CYBER
      </h1>
      <h1 className="hero-elem hero-title-2 uppercase">DEFENDER</h1>
      
      <div className="hero-elem hero-globe-wrapper">
        <HeroGlobeButton />
      </div>
    </header>
  );
}
