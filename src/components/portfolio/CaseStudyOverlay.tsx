import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronUp, ChevronDown, Lightbulb, Target, Zap, Eye, CheckCircle, TrendingUp } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

interface OverlaySection {
  icon?: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

interface CaseStudyOverlayProps {
  sections: OverlaySection[];
  title?: string;
}

export function CaseStudyOverlay({ sections, title = "Case Study Summary" }: CaseStudyOverlayProps) {
  const { portfolioMode } = useApp();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  if (!portfolioMode) return null;

  return (
    <>
      {/* Desktop Floating Panel - Right Side */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="hidden lg:block fixed right-6 top-24 w-80 max-h-[calc(100vh-120px)] z-40"
          >
            <div className="bg-card/95 backdrop-blur-md rounded-2xl border border-border/50 shadow-lg overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="w-6 h-6 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(100vh-220px)] p-5 space-y-5 scrollbar-thin">
                {sections.map((section, idx) => (
                  <OverlaySectionCard key={idx} section={section} index={idx} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Collapsed Indicator */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsExpanded(true)}
            className="hidden lg:flex fixed right-6 top-24 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 items-center justify-center z-40 hover:bg-primary/20 transition-colors"
          >
            <Lightbulb className="w-5 h-5 text-primary" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Sheet */}
      <div className="lg:hidden fixed bottom-20 left-0 right-0 z-40">
        <AnimatePresence>
          {isMobileExpanded && (
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-card/98 backdrop-blur-md rounded-t-2xl border-t border-x border-border/50 shadow-lg mx-2"
            >
              <div className="max-h-[60vh] overflow-y-auto p-5 space-y-4 pb-6">
                {sections.map((section, idx) => (
                  <OverlaySectionCard key={idx} section={section} index={idx} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Toggle Bar */}
        <motion.button
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          className={cn(
            "w-full flex items-center justify-between px-5 py-3 bg-card/95 backdrop-blur-md border-t border-x border-border/50 shadow-md mx-2 transition-all",
            isMobileExpanded ? "rounded-none" : "rounded-t-xl"
          )}
          style={{ width: 'calc(100% - 16px)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-3 h-3 text-primary" />
            </div>
            <span className="text-xs font-medium text-foreground">{title}</span>
          </div>
          {isMobileExpanded ? (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          )}
        </motion.button>
      </div>
    </>
  );
}

function OverlaySectionCard({ section, index }: { section: OverlaySection; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-start gap-3">
        {section.icon && (
          <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            {section.icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1.5">
            {section.title}
          </h4>
          <div className="text-sm text-muted-foreground leading-relaxed">
            {section.content}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Micro overlay for specific UI elements
interface MicroOverlayProps {
  title: string;
  description: string;
  className?: string;
}

export function MicroOverlay({ title, description, className }: MicroOverlayProps) {
  const { portfolioMode } = useApp();
  const [isVisible, setIsVisible] = useState(true);

  if (!portfolioMode || !isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(
        "bg-card/90 backdrop-blur-sm rounded-lg border border-primary/20 p-3 shadow-sm",
        className
      )}
    >
      <div className="flex items-start gap-2">
        <Eye className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h5 className="text-xs font-semibold text-primary mb-1">{title}</h5>
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="w-4 h-4 rounded-full hover:bg-muted flex items-center justify-center"
        >
          <X className="w-3 h-3 text-muted-foreground" />
        </button>
      </div>
    </motion.div>
  );
}

// Design note overlay for pages
interface DesignNoteProps {
  note: string;
  className?: string;
}

export function DesignNote({ note, className }: DesignNoteProps) {
  const { portfolioMode } = useApp();

  if (!portfolioMode) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "bg-primary/5 border border-primary/10 rounded-lg p-4",
        className
      )}
    >
      <div className="flex items-start gap-2">
        <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs font-semibold text-primary">Design Note</span>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{note}</p>
        </div>
      </div>
    </motion.div>
  );
}
