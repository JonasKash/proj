import { ExternalLink, Lock } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useState, memo, useCallback } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  variant?: "cyan" | "green";
  highlightWords?: string[];
  imageSrc?: string;
  showLock?: boolean;
  popupImage?: string;
  popupDescription?: string;
  externalLink?: string;
  isLocked?: boolean;
}

const ServiceCard = ({ 
  title, 
  description, 
  buttonText, 
  variant = "cyan",
  highlightWords = [],
  imageSrc,
  showLock = false,
  popupImage,
  popupDescription,
  externalLink,
  isLocked = false
}: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const glowClass = variant === "cyan" ? "glow-border-cyan" : "glow-border-green";
  const buttonVariant = variant === "cyan" ? "cyan" : "green";
  
  const renderDescription = () => {
    if (highlightWords.length === 0) {
      return <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>;
    }

    let text = description;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    highlightWords.forEach((word, idx) => {
      const index = text.toLowerCase().indexOf(word.toLowerCase(), lastIndex);
      if (index !== -1) {
        if (index > lastIndex) {
          parts.push(<span key={`text-${idx}`}>{text.slice(lastIndex, index)}</span>);
        }
        parts.push(
          <span 
            key={`highlight-${idx}`} 
            className={`font-bold ${variant === "cyan" ? "text-primary" : "text-accent"}`}
          >
            {text.slice(index, index + word.length)}
          </span>
        );
        lastIndex = index + word.length;
      }
    });

    if (lastIndex < text.length) {
      parts.push(<span key="text-end">{text.slice(lastIndex)}</span>);
    }

    return <p className="text-muted-foreground text-sm leading-relaxed">{parts}</p>;
  };

  const handleButtonClick = useCallback(() => {
    if (popupImage && popupDescription) {
      setIsOpen(true);
    }
  }, [popupImage, popupDescription]);

  const handleExternalLinkClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!externalLink) return;
    
    try {
      new URL(externalLink);
    } catch {
      return;
    }

    if (externalLink.includes('wa.me') || externalLink.includes('whatsapp')) {
      window.location.href = externalLink;
      return;
    }

    const newWindow = window.open(externalLink, '_blank', 'noopener,noreferrer');
    if (!newWindow) window.location.href = externalLink;
  }, [externalLink]);

  const handleLockedClick = useCallback(() => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  }, []);

  const renderButton = () => {
    if (isLocked) {
      return (
        <Button 
          variant={buttonVariant} 
          size="lg" 
          className={`uppercase tracking-wider cursor-not-allowed opacity-80 ${isShaking ? 'animate-shake' : ''}`}
          type="button"
          onClick={handleLockedClick}
        >
          {buttonText}
          <Lock className="ml-2 h-4 w-4" />
        </Button>
      );
    }

    if (externalLink) {
      return (
        <Button 
          variant={buttonVariant} 
          size="lg" 
          className="uppercase tracking-wider cursor-pointer"
          type="button"
          onClick={handleExternalLinkClick}
        >
          {buttonText}
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      );
    }

    return (
      <Button 
        variant={buttonVariant} 
        size="lg" 
        className="uppercase tracking-wider"
        onClick={handleButtonClick}
      >
        {buttonText}
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    );
  };

  return (
    <>
      <div 
        className={`${glowClass} rounded-lg bg-card overflow-hidden w-full max-w-full`}
        style={{
          padding: 'var(--padding-top) var(--padding-right) var(--padding-bottom) var(--padding-left)',
        }}
      >
        <div className="responsive-container">
          <div className="responsive-content">
            <h3 
              className={`font-bold mb-3 sm:mb-4 ${variant === "green" ? "text-accent" : "text-foreground"}`}
              style={{
                fontSize: 'var(--title-size)',
              }}
            >
              {title}
            </h3>
            <div style={{ fontSize: 'var(--description-size)' }}>
              {renderDescription()}
            </div>
            <div className="mt-4 sm:mt-6">
              {renderButton()}
            </div>
          </div>
          
          <div className="responsive-image flex items-center justify-center relative min-h-[200px] p-2">
            {imageSrc ? (
              <>
                <img src={imageSrc} alt={title} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                {showLock && (
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-secondary/80 flex items-center justify-center shadow-lg animate-pulse">
                      <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" strokeWidth={2.5} />
                    </div>
                  </div>
                )}
                {variant === "cyan" && (
                  <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-primary/30 via-primary/10 to-transparent pointer-events-none" />
                )}
              </>
            ) : (
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg border-2 ${variant === "cyan" ? "border-primary/30" : "border-accent/30"} flex items-center justify-center`}>
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded ${variant === "cyan" ? "bg-primary/20" : "bg-accent/20"}`}></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md bg-card/70 backdrop-blur-2xl border border-accent/20 rounded-3xl shadow-2xl shadow-accent/20">
          <DialogHeader className="pt-2">
            <DialogTitle className="text-accent text-xl font-semibold text-center">{title}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-5 py-2">
            {popupImage && (
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-110" />
                <img 
                  src={popupImage} 
                  alt={title} 
                  className="relative w-32 h-32 rounded-full object-cover border-2 border-accent/40 shadow-xl"
                />
              </div>
            )}
            {popupDescription && (
              <p className="text-muted-foreground text-center text-sm leading-relaxed whitespace-pre-line px-2">
                {popupDescription}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default memo(ServiceCard);