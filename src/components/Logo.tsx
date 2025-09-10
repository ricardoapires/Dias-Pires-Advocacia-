const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className="font-bold text-primary">
        <div className="text-2xl lg:text-3xl tracking-wide">DIAS PIRES</div>
        <div className="w-16 h-px bg-accent my-1"></div>
        <div className="text-sm lg:text-base tracking-widest font-light">ADVOCACIA</div>
      </div>
    </div>
  );
};

export default Logo;