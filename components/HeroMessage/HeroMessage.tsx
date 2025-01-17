type HeroMessageProps = {
  text: string;
};

export default function HeroMessage({ text }: HeroMessageProps) {
  return (
    <div className="static-page-hero-btn-container marginTop-xl">
      <div className="applications-closed">
        <p className="hero-desc">{text}</p>
      </div>
    </div>
  );
}
