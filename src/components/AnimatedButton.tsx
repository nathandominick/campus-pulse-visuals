
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  glowColor?: string;
  hoverScale?: boolean;
}

const AnimatedButton = ({
  children,
  className,
  glowColor = "rgba(59, 130, 246, 0.5)", // Default blue glow
  hoverScale = true,
  ...props
}: AnimatedButtonProps) => {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-md" 
        style={{ backgroundColor: glowColor }}
      />
      
      <Button
        className={cn(
          "relative z-10 overflow-hidden animated-border transition-all duration-300",
          hoverScale && "group-hover:scale-105",
          className
        )}
        {...props}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute -inset-[400%] animate-[spin_12s_linear_infinite] opacity-0 group-hover:opacity-30">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-md" />
          </div>
        </div>
        
        {children}
      </Button>
    </div>
  );
};

export default AnimatedButton;
