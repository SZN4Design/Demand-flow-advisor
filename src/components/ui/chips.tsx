import { cn } from '@/lib/utils';

type Confidence = 'High' | 'Medium' | 'Low';

interface ConfidenceChipProps {
  level: Confidence;
  size?: 'sm' | 'md';
}

export function ConfidenceChip({ level, size = 'sm' }: ConfidenceChipProps) {
  const styles = {
    High: 'chip-success',
    Medium: 'chip-warning',
    Low: 'chip-danger',
  };

  return (
    <span className={cn(
      'chip',
      styles[level],
      size === 'md' && 'px-3 py-1.5 text-sm'
    )}>
      {level}
    </span>
  );
}

type Risk = 'Low' | 'Medium' | 'High';

interface RiskChipProps {
  level: Risk;
}

export function RiskChip({ level }: RiskChipProps) {
  const styles = {
    Low: 'chip-success',
    Medium: 'chip-warning',
    High: 'chip-danger',
  };

  return (
    <span className={cn('chip', styles[level])}>
      {level} Risk
    </span>
  );
}

interface DemandTagProps {
  tag: string;
}

export function DemandTag({ tag }: DemandTagProps) {
  return (
    <span className="demand-tag">{tag}</span>
  );
}

interface PriorityBadgeProps {
  priority: 'High' | 'Medium' | 'Low';
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const styles = {
    High: 'bg-destructive/10 text-destructive',
    Medium: 'bg-warning/10 text-warning',
    Low: 'bg-success/10 text-success',
  };

  return (
    <span className={cn('chip', styles[priority])}>
      {priority}
    </span>
  );
}
