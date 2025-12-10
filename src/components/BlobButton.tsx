import { ExternalLink } from "lucide-react";

interface BlobButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const BlobButton = ({ children, className = "", onClick }: BlobButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`blob-button relative cursor-pointer border-none outline-none group ${className}`}
    >
      <div className="blob1 absolute w-[70px] h-[70px] rounded-full blur-[12px] opacity-50 animate-blob1" />
      <div className="blob2 absolute w-[60px] h-[60px] rounded-full blur-[12px] opacity-50 animate-blob2" />
      <div className="inner relative z-10 px-6 py-3 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/30 text-foreground font-semibold uppercase tracking-wider transition-all duration-300 group-hover:border-primary/60 group-hover:bg-card/90 flex items-center gap-2">
        {children}
        <ExternalLink className="h-4 w-4" />
      </div>
    </button>
  );
};

export default BlobButton;
