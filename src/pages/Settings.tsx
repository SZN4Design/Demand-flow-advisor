import { AppLayout } from '@/components/layout/AppLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Check, X, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { dataSources } from '@/data/mockData';
import { useApp } from '@/contexts/AppContext';

export default function Settings() {
  const { portfolioMode, setPortfolioMode } = useApp();

  return (
    <AppLayout>
      <PageHeader title="Settings" showControls={false} />

      <div className="px-4 lg:px-6 py-6 space-y-6">
        {/* Portfolio Mode */}
        <section className="card-elevated p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-base font-medium">Portfolio Mode</Label>
              <p className="text-sm text-muted-foreground">
                Show case study overlays with design rationale on each page
              </p>
            </div>
            <Switch
              checked={portfolioMode}
              onCheckedChange={setPortfolioMode}
            />
          </div>
        </section>

        {/* Data Sources */}
        <section className="space-y-4">
          <h2 className="section-title">Data Sources</h2>

          <div className="space-y-3">
            {dataSources.map((source) => (
              <div key={source.id} className="card-elevated p-4">
                <div className="flex items-start gap-3">
                  <div className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
                    source.status === 'connected' 
                      ? 'bg-success/10' 
                      : 'bg-muted'
                  )}>
                    {source.status === 'connected' ? (
                      <Check className="w-4 h-4 text-success" />
                    ) : (
                      <X className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-medium text-foreground">
                        {source.name}
                      </h3>
                      {source.isMock && (
                        <span className="chip chip-warning text-[10px]">Mock</span>
                      )}
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-2">
                      {source.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-xs">
                      {source.status === 'connected' ? (
                        <>
                          <span className="chip chip-success">Connected</span>
                          <span className="text-muted-foreground">
                            Last sync: {source.lastSync}
                          </span>
                        </>
                      ) : (
                        <span className="chip chip-neutral">Not connected</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-accent/50 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-foreground mb-1">
              Prototype Notice
            </h3>
            <p className="text-sm text-muted-foreground">
              This prototype uses simulated data for demonstration purposes. 
              In production, real-time data feeds would replace mock data sources.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
