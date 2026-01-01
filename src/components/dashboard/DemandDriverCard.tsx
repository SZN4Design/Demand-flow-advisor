import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DemandDriver {
  id: string;
  name: string;
  direction: 'up' | 'down' | 'stable';
  value: string;
  description: string;
  sparklineData: number[];
}

interface DemandDriverCardProps {
  driver: DemandDriver;
}

function MiniSparkline({ data, direction }: { data: number[]; direction: 'up' | 'down' | 'stable' }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const height = 24;
  const width = 60;
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  const strokeColor = direction === 'up' 
    ? 'hsl(var(--success))' 
    : direction === 'down' 
      ? 'hsl(var(--destructive))' 
      : 'hsl(var(--muted-foreground))';

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DemandDriverCard({ driver }: DemandDriverCardProps) {
  const DirectionIcon = driver.direction === 'up' 
    ? TrendingUp 
    : driver.direction === 'down' 
      ? TrendingDown 
      : Minus;

  const directionColor = driver.direction === 'up'
    ? 'text-success'
    : driver.direction === 'down'
      ? 'text-destructive'
      : 'text-muted-foreground';

  return (
    <div className="card-elevated p-4">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <DirectionIcon className={cn('w-4 h-4', directionColor)} />
          <h4 className="text-sm font-medium text-foreground">{driver.name}</h4>
        </div>
        <MiniSparkline data={driver.sparklineData} direction={driver.direction} />
      </div>
      
      <div className="mb-2">
        <span className={cn('text-lg font-semibold', directionColor)}>
          {driver.value}
        </span>
      </div>
      
      <p className="text-xs text-muted-foreground leading-relaxed">
        {driver.description}
      </p>
    </div>
  );
}
