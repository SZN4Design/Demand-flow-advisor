import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  subValue?: string;
  trend?: 'up' | 'down' | 'stable';
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

export function StatCard({ label, value, subValue, trend, variant = 'default' }: StatCardProps) {
  const variantStyles = {
    default: '',
    success: 'border-l-4 border-l-success',
    warning: 'border-l-4 border-l-warning',
    danger: 'border-l-4 border-l-destructive',
  };

  return (
    <div className={cn('stat-card', variantStyles[variant])}>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-semibold text-foreground">{value}</span>
        {trend && (
          <span className={cn(
            'mb-1',
            trend === 'up' && 'text-success',
            trend === 'down' && 'text-destructive',
            trend === 'stable' && 'text-muted-foreground'
          )}>
            {trend === 'up' && <TrendingUp className="w-4 h-4" />}
            {trend === 'down' && <TrendingDown className="w-4 h-4" />}
            {trend === 'stable' && <Minus className="w-4 h-4" />}
          </span>
        )}
      </div>
      {subValue && (
        <p className="text-xs text-muted-foreground mt-1">{subValue}</p>
      )}
    </div>
  );
}
