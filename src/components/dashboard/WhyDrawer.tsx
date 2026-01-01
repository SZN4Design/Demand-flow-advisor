import { X } from 'lucide-react';
import { Vehicle } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ConfidenceChip } from '@/components/ui/chips';
import { motion, AnimatePresence } from 'framer-motion';

interface WhyDrawerProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

export function WhyDrawer({ vehicle, isOpen, onClose }: WhyDrawerProps) {
  if (!vehicle) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="drawer-overlay"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="drawer-content overflow-y-auto"
          >
            <div className="sticky top-0 bg-card border-b border-border px-4 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Why this vehicle?
                </h2>
                <p className="text-sm text-muted-foreground">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-4 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Sell Probability</p>
                  <p className="text-3xl font-bold text-foreground">{vehicle.sellProbability}%</p>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Days to Sell</p>
                  <p className="text-3xl font-bold text-foreground">{vehicle.daysToSell}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Confidence</p>
                  <ConfidenceChip level={vehicle.confidence} size="md" />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  Top Contributing Factors
                </h3>
                <div className="space-y-3">
                  {vehicle.factors.map((factor, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground">{factor.name}</span>
                        <span className="text-muted-foreground font-medium">{factor.weight}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-500"
                          style={{ width: `${factor.weight}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  In simple terms...
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The {vehicle.year} {vehicle.make} {vehicle.model} is predicted to sell quickly 
                  because of strong consumer interest in the {vehicle.segment.toLowerCase()} segment, 
                  combined with favorable market conditions including rising fuel prices that favor 
                  fuel-efficient vehicles, and limited supply in the Toronto market. The timing aligns 
                  well with seasonal AWD demand as winter approaches.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Suggested Price Range
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">$</span>
                  <span className="font-semibold text-foreground">
                    {vehicle.priceRange.min.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">—</span>
                  <span className="font-semibold text-foreground">
                    {vehicle.priceRange.max.toLocaleString()}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">
                  Recommended Trims
                </h3>
                <div className="flex flex-wrap gap-2">
                  {vehicle.suggestedTrims.map((trim, idx) => (
                    <span key={idx} className="chip chip-primary">
                      {trim}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
