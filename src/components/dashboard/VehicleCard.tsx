import { useNavigate } from 'react-router-dom';
import { TrendingUp, TrendingDown, Minus, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Vehicle } from '@/data/mockData';
import { ConfidenceChip, DemandTag } from '@/components/ui/chips';
import { Button } from '@/components/ui/button';

interface VehicleCardProps {
  vehicle: Vehicle;
  rank: number;
  onWhyClick: (vehicle: Vehicle) => void;
}

export function VehicleCard({ vehicle, rank, onWhyClick }: VehicleCardProps) {
  const navigate = useNavigate();

  const TrendIcon = vehicle.trend === 'up' 
    ? TrendingUp 
    : vehicle.trend === 'down' 
      ? TrendingDown 
      : Minus;

  const trendColor = vehicle.trend === 'up'
    ? 'text-success'
    : vehicle.trend === 'down'
      ? 'text-destructive'
      : 'text-muted-foreground';

  return (
    <div className="card-elevated p-4 animate-in">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center">
          <span className="text-xs font-semibold text-muted-foreground">{rank}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <button 
                onClick={() => navigate(`/vehicle/${vehicle.id}`)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                {vehicle.year} {vehicle.make} {vehicle.model}
              </button>
              <p className="text-xs text-muted-foreground">{vehicle.segment}</p>
            </div>
            <ConfidenceChip level={vehicle.confidence} />
          </div>

          <div className="grid grid-cols-3 gap-3 mb-3">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Sell Prob.</p>
              <p className="text-lg font-semibold text-foreground">{vehicle.sellProbability}%</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Days to Sell</p>
              <p className="text-lg font-semibold text-foreground">{vehicle.daysToSell}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Trend</p>
              <div className="flex items-center gap-1">
                <TrendIcon className={cn('w-4 h-4', trendColor)} />
                <span className={cn('text-sm font-medium capitalize', trendColor)}>
                  {vehicle.trend}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {vehicle.demandDrivers.map((tag, idx) => (
              <DemandTag key={idx} tag={tag} />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs"
              onClick={(e) => {
                e.stopPropagation();
                onWhyClick(vehicle);
              }}
            >
              Why?
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-xs gap-1"
              onClick={() => navigate(`/vehicle/${vehicle.id}`)}
            >
              View details
              <ChevronRight className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
