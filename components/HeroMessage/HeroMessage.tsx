type HeroMessageProps = {
  text: string;
};

export default function HeroMessage({ text }: HeroMessageProps) {
  return (
    <div
      className="animate-slideLeft mt-[40px]"
      style={{ animationDelay: '0.4s' }}
    >
      <div>
        <p className="text-bp-white text-[18px] font-medium max-w-[700px] mb-[20px]">
          {text}
        </p>
      </div>
    </div>
  );
}
