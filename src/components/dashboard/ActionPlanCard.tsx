import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PriorityBadge } from '@/components/ui/chips';

interface ActionItem {
  id: string;
  priority: 'High' | 'Medium' | 'Low';
  action: string;
  impact: string;
  description: string;
}

interface ActionPlanCardProps {
  action: ActionItem;
  onView: () => void;
}

export function ActionPlanCard({ action, onView }: ActionPlanCardProps) {
  const priorityBorder = {
    High: 'priority-high',
    Medium: 'priority-medium',
    Low: 'priority-low',
  };

  return (
    <div className={cn('card-elevated p-4', priorityBorder[action.priority])}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <PriorityBadge priority={action.priority} />
        <span className="text-xs text-muted-foreground">{action.impact}</span>
      </div>
      
      <h4 className="text-sm font-medium text-foreground mb-2">
        {action.action}
      </h4>
      
      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
        {action.description}
      </p>
      
      <Button
        variant="outline"
        size="sm"
        className="h-8 text-xs gap-1"
        onClick={onView}
      >
        View recommendation
        <ChevronRight className="w-3 h-3" />
      </Button>
    </div>
  );
}
