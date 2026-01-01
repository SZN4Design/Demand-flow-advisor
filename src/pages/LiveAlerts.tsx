import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { AlertCircle, AlertTriangle, Info, Check, Filter } from 'lucide-react';
import { AlertsOverlay } from '@/components/portfolio/AlertsOverlay';
import { cn } from '@/lib/utils';
import { alerts as initialAlerts } from '@/data/mockData';
import { toast } from 'sonner';

type Severity = 'High' | 'Medium' | 'Low';

export default function LiveAlerts() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [filter, setFilter] = useState<Severity | 'All'>('All');

  const filteredAlerts = filter === 'All' 
    ? alerts 
    : alerts.filter(a => a.severity === filter);

  const unreadCount = alerts.filter(a => !a.isRead).length;

  const markAsRead = (id: string) => {
    setAlerts(prev => prev.map(a => 
      a.id === id ? { ...a, isRead: true } : a
    ));
    toast.success('Alert marked as read');
  };

  const markAllAsRead = () => {
    setAlerts(prev => prev.map(a => ({ ...a, isRead: true })));
    toast.success('All alerts marked as read');
  };

  const SeverityIcon = ({ severity }: { severity: Severity }) => {
    switch (severity) {
      case 'High':
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      case 'Medium':
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case 'Low':
        return <Info className="w-5 h-5 text-info" />;
    }
  };

  const severityStyles = {
    High: 'border-l-destructive bg-destructive/5',
    Medium: 'border-l-warning bg-warning/5',
    Low: 'border-l-info bg-info/5',
  };

  return (
    <AppLayout>
      <PageHeader title="Live Alerts" showControls={false} />

      <div className="px-4 lg:px-6 py-6 space-y-4 lg:pr-96">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {unreadCount} unread alert{unreadCount !== 1 ? 's' : ''}
          </p>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              {(['All', 'High', 'Medium', 'Low'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setFilter(level)}
                  className={cn(
                    'px-3 py-1.5 rounded-md text-xs font-medium transition-colors',
                    filter === level
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {level}
                </button>
              ))}
            </div>
            
            {unreadCount > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={markAllAsRead}
                className="h-8 text-xs"
              >
                Mark all read
              </Button>
            )}
          </div>
        </div>

        {/* Alerts Feed */}
        <div className="space-y-3">
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={cn(
                'card-elevated p-4 border-l-4 transition-all',
                severityStyles[alert.severity],
                !alert.isRead && 'ring-1 ring-primary/20'
              )}
            >
              <div className="flex items-start gap-3">
                <SeverityIcon severity={alert.severity} />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className={cn(
                      'text-sm text-foreground',
                      !alert.isRead ? 'font-semibold' : 'font-medium'
                    )}>
                      {alert.title}
                    </h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {alert.timestamp}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {alert.event}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {alert.affectedSegments.map((segment, idx) => (
                      <span key={idx} className="chip chip-neutral text-[10px]">
                        {segment}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 text-xs"
                      onClick={() => toast.info(alert.recommendation)}
                    >
                      View recommendation
                    </Button>
                    
                    {!alert.isRead && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs gap-1"
                        onClick={() => markAsRead(alert.id)}
                      >
                        <Check className="w-3 h-3" />
                        Mark as read
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAlerts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No alerts matching the current filter</p>
          </div>
        )}
      </div>

      <AlertsOverlay />
    </AppLayout>
  );
}
