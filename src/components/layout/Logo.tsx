
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold text-terracotta">Suryodayaa</span>
    </Link>
  );
};

export default Logo;
