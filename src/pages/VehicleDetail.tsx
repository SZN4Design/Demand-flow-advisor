import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Target, DollarSign, Users, Zap } from 'lucide-react';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { ConfidenceChip, DemandTag } from '@/components/ui/chips';
import { VehicleDetailOverlay } from '@/components/portfolio/VehicleDetailOverlay';
import { vehicles } from '@/data/mockData';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function VehicleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const vehicle = vehicles.find(v => v.id === id);

  if (!vehicle) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-lg font-semibold mb-2">Vehicle not found</h2>
            <Button onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
          </div>
        </div>
      </AppLayout>
    );
  }

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

  const handleAction = (action: string) => {
    toast.info(`Action: ${action}`);
  };

  return (
    <AppLayout>
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border px-4 lg:px-6 py-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/dashboard')}
          className="gap-2 -ml-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </div>

      <div className="px-4 lg:px-6 py-6 space-y-6 lg:pr-96">
        {/* Hero Section */}
        <section className="card-elevated p-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold text-foreground">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h1>
                <ConfidenceChip level={vehicle.confidence} size="md" />
              </div>
              <p className="text-muted-foreground">{vehicle.segment}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {vehicle.demandDrivers.map((tag, idx) => (
                  <DemandTag key={idx} tag={tag} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-accent/30 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Sell Probability</p>
              <p className="text-4xl font-bold text-primary">{vehicle.sellProbability}%</p>
            </div>
            <div className="text-center p-4 bg-accent/30 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Days to Sell</p>
              <p className="text-4xl font-bold text-foreground">{vehicle.daysToSell}</p>
            </div>
            <div className="text-center p-4 bg-accent/30 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Trend</p>
              <div className="flex items-center justify-center gap-2">
                <TrendIcon className={cn('w-6 h-6', trendColor)} />
                <span className={cn('text-xl font-semibold capitalize', trendColor)}>
                  {vehicle.trend}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Explainability */}
        <section className="card-elevated p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Why This Is Predicted to Sell
          </h2>
          
          <div className="space-y-4 mb-6">
            {vehicle.factors.map((factor, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground font-medium">{factor.name}</span>
                  <span className="text-muted-foreground">{factor.weight}%</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${factor.weight}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent/50 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-foreground mb-2">In simple terms...</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This {vehicle.make} {vehicle.model} is showing strong demand signals because buyers 
              in Toronto are increasingly searching for {vehicle.segment.toLowerCase()}s, especially 
              fuel-efficient options. With gas prices rising and winter approaching, vehicles with 
              AWD and good fuel economy are in high demand. Limited supply in the market means 
              this vehicle should move quickly at the right price point.
            </p>
          </div>
        </section>

        {/* Recommended Trim + Price Band */}
        <section className="card-elevated p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Recommended Trim & Price Band
          </h2>
          
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">Suggested Trims</p>
            <div className="flex flex-wrap gap-2">
              {vehicle.suggestedTrims.map((trim, idx) => (
                <span key={idx} className="chip chip-primary">
                  {trim}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">Suggested Price Band</p>
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold text-foreground">
                  ${vehicle.priceRange.min.toLocaleString()}
                </span>
                <span className="text-lg font-semibold text-foreground">
                  ${vehicle.priceRange.max.toLocaleString()}
                </span>
              </div>
              <div className="h-2 bg-accent rounded-full">
                <div className="h-full w-2/3 bg-primary rounded-full" />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Sweet spot: ${Math.round((vehicle.priceRange.min + vehicle.priceRange.max) / 2).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="chip chip-success">Competitive</span>
            <span className="text-muted-foreground">vs. market average</span>
          </div>
        </section>

        {/* Buyer Persona */}
        <section className="card-elevated p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Buyer Persona Snapshot
          </h2>
          
          <p className="text-xs text-muted-foreground mb-4 italic">
            * Estimated based on market data and historical patterns
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Age Range</p>
              <p className="text-lg font-semibold text-foreground">{vehicle.buyerPersona.ageRange}</p>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Household Type</p>
              <p className="text-lg font-semibold text-foreground">{vehicle.buyerPersona.householdType}</p>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Income Range</p>
              <p className="text-lg font-semibold text-foreground">{vehicle.buyerPersona.income}</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Understanding your likely buyer helps tailor your marketing message and 
            ensures your listings speak directly to the right audience.
          </p>
        </section>

        {/* Next Best Actions */}
        <section className="card-elevated p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Next Best Actions
          </h2>

          <div className="space-y-3">
            {[
              { action: 'Stock more', desc: 'Demand signals are strong. Consider acquiring additional units of this model.' },
              { action: 'Adjust pricing', desc: 'Current market conditions support competitive pricing in the suggested range.' },
              { action: 'Optimize listing quality', desc: 'High-quality photos and detailed descriptions can reduce days-to-sell by 15%.' },
              { action: 'Promote on channels', desc: 'Target digital ads to the identified buyer persona for maximum ROI.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-primary">{idx + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-foreground mb-1">{item.action}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs flex-shrink-0"
                  onClick={() => handleAction(item.action)}
                >
                  Take action
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <VehicleDetailOverlay />
    </AppLayout>
  );
}
