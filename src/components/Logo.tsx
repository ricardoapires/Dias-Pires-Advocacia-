import logo from "@/assets/logo-dias-pires.png";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <img 
        src={logo} 
        alt="Dias Pires Advocacia" 
        className="h-16 lg:h-20 w-auto"
      />
    </div>
  );
};

export default Logo;