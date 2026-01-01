import { useState, useMemo } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import { ScenarioOverlay } from '@/components/portfolio/ScenarioOverlay';
import { cn } from '@/lib/utils';
import { vehicles, scenarioDefaults } from '@/data/mockData';

type Season = 'Winter' | 'Spring' | 'Summer' | 'Fall';
type Level = 'Low' | 'Normal' | 'High';
type Confidence = 'Low' | 'Medium' | 'High';

interface ScenarioState {
  gasPrice: number;
  interestRate: number;
  consumerConfidence: Confidence;
  supplyLevel: Level;
  season: Season;
}

export default function ScenarioSimulator() {
  const [scenario, setScenario] = useState<ScenarioState>({
    gasPrice: 0,
    interestRate: 0,
    consumerConfidence: 'Medium',
    supplyLevel: 'Normal',
    season: 'Winter',
  });

  // Simulate forecast changes based on scenario
  const forecastShifts = useMemo(() => {
    const winners: { name: string; change: string; reason: string }[] = [];
    const losers: { name: string; change: string; reason: string }[] = [];

    // Gas price impact
    if (scenario.gasPrice > 0) {
      winners.push(
        { name: 'Toyota RAV4 Hybrid', change: `+${Math.round(scenario.gasPrice * 0.8)}%`, reason: 'Fuel efficiency gains value' },
        { name: 'Honda CR-V Hybrid', change: `+${Math.round(scenario.gasPrice * 0.6)}%`, reason: 'Hybrid advantage' },
        { name: 'Tesla Model Y', change: `+${Math.round(scenario.gasPrice * 0.5)}%`, reason: 'EV demand increases' },
      );
      losers.push(
        { name: 'Ford F-150', change: `-${Math.round(scenario.gasPrice * 1.2)}%`, reason: 'Fuel costs hurt demand' },
        { name: 'Chevrolet Silverado', change: `-${Math.round(scenario.gasPrice * 1.0)}%`, reason: 'Full-size truck softness' },
      );
    } else if (scenario.gasPrice < 0) {
      winners.push(
        { name: 'Ford F-150', change: `+${Math.abs(Math.round(scenario.gasPrice * 0.8))}%`, reason: 'Fuel costs less of a concern' },
        { name: 'Chevrolet Silverado', change: `+${Math.abs(Math.round(scenario.gasPrice * 0.6))}%`, reason: 'Truck demand recovers' },
      );
      losers.push(
        { name: 'Toyota RAV4 Hybrid', change: `-${Math.abs(Math.round(scenario.gasPrice * 0.4))}%`, reason: 'Hybrid premium less justified' },
      );
    }

    // Interest rate impact
    if (scenario.interestRate > 0) {
      losers.push(
        { name: 'Luxury Sedans', change: `-${Math.round(scenario.interestRate * 8)}%`, reason: 'Higher financing costs' },
      );
      winners.push(
        { name: 'Kia Sportage', change: `+${Math.round(scenario.interestRate * 2)}%`, reason: 'Value segment benefits' },
      );
    }

    // Season impact
    if (scenario.season === 'Winter') {
      if (!winners.some(w => w.name.includes('Outback'))) {
        winners.push({ name: 'Subaru Outback', change: '+5%', reason: 'AWD winter demand' });
      }
    }

    // Consumer confidence
    if (scenario.consumerConfidence === 'High') {
      winners.push({ name: 'Premium vehicles', change: '+8%', reason: 'Consumer spending up' });
    } else if (scenario.consumerConfidence === 'Low') {
      losers.push({ name: 'Premium vehicles', change: '-10%', reason: 'Cautious spending' });
    }

    return { winners: winners.slice(0, 5), losers: losers.slice(0, 5) };
  }, [scenario]);

  const getScenarioSummary = () => {
    const changes: string[] = [];
    
    if (scenario.gasPrice !== 0) {
      changes.push(`Gas prices ${scenario.gasPrice > 0 ? 'up' : 'down'} ${Math.abs(scenario.gasPrice)}%`);
    }
    if (scenario.interestRate !== 0) {
      changes.push(`Interest rates ${scenario.interestRate > 0 ? '+' : ''}${scenario.interestRate.toFixed(1)}%`);
    }
    if (scenario.consumerConfidence !== 'Medium') {
      changes.push(`${scenario.consumerConfidence} consumer confidence`);
    }
    if (scenario.supplyLevel !== 'Normal') {
      changes.push(`${scenario.supplyLevel} supply level`);
    }
    changes.push(`${scenario.season} season`);

    return changes.join(', ');
  };

  return (
    <AppLayout>
      <PageHeader title="Scenario Simulator" showControls={false} />

      <div className="px-4 lg:px-6 py-6 space-y-6 lg:pr-96">
        <p className="text-sm text-muted-foreground">
          Adjust market variables to see how they would impact vehicle demand forecasts.
        </p>

        {/* Controls */}
        <section className="card-elevated p-6 space-y-6">
          <h2 className="text-lg font-semibold text-foreground">Market Variables</h2>

          <div className="space-y-6">
            {/* Gas Price */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Gas Price Change</Label>
                <span className="text-sm font-medium text-foreground">
                  {scenario.gasPrice > 0 ? '+' : ''}{scenario.gasPrice}%
                </span>
              </div>
              <Slider
                value={[scenario.gasPrice]}
                onValueChange={([value]) => setScenario(s => ({ ...s, gasPrice: value }))}
                min={-20}
                max={20}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>-20%</span>
                <span>+20%</span>
              </div>
            </div>

            {/* Interest Rates */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm">Interest Rate Change</Label>
                <span className="text-sm font-medium text-foreground">
                  {scenario.interestRate > 0 ? '+' : ''}{scenario.interestRate.toFixed(1)}%
                </span>
              </div>
              <Slider
                value={[scenario.interestRate * 10]}
                onValueChange={([value]) => setScenario(s => ({ ...s, interestRate: value / 10 }))}
                min={-10}
                max={10}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>-1.0%</span>
                <span>+1.0%</span>
              </div>
            </div>

            {/* Consumer Confidence */}
            <div className="space-y-3">
              <Label className="text-sm">Consumer Confidence</Label>
              <div className="flex gap-2">
                {(['Low', 'Medium', 'High'] as Confidence[]).map((level) => (
                  <button
                    key={level}
                    onClick={() => setScenario(s => ({ ...s, consumerConfidence: level }))}
                    className={cn(
                      'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors',
                      scenario.consumerConfidence === level
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Supply Level */}
            <div className="space-y-3">
              <Label className="text-sm">Supply Level</Label>
              <div className="flex gap-2">
                {(['Low', 'Normal', 'High'] as Level[]).map((level) => (
                  <button
                    key={level}
                    onClick={() => setScenario(s => ({ ...s, supplyLevel: level }))}
                    className={cn(
                      'flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors',
                      scenario.supplyLevel === level
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Season */}
            <div className="space-y-3">
              <Label className="text-sm">Season</Label>
              <div className="grid grid-cols-4 gap-2">
                {(['Winter', 'Spring', 'Summer', 'Fall'] as Season[]).map((season) => (
                  <button
                    key={season}
                    onClick={() => setScenario(s => ({ ...s, season }))}
                    className={cn(
                      'py-2 px-3 rounded-lg text-sm font-medium transition-colors',
                      scenario.season === season
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {season}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Forecast Shifts */}
        <section className="card-elevated p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Forecast Shifts</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Winners */}
            <div>
              <h3 className="text-sm font-medium text-success flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4" />
                Winners
              </h3>
              <div className="space-y-2">
                {forecastShifts.winners.length > 0 ? (
                  forecastShifts.winners.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-success/5 rounded-lg border border-success/10">
                      <span className="text-success font-semibold text-sm">{item.change}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.reason}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground p-3 bg-muted rounded-lg">
                    No significant winners with current settings
                  </p>
                )}
              </div>
            </div>

            {/* Losers */}
            <div>
              <h3 className="text-sm font-medium text-destructive flex items-center gap-2 mb-3">
                <TrendingDown className="w-4 h-4" />
                Losers
              </h3>
              <div className="space-y-2">
                {forecastShifts.losers.length > 0 ? (
                  forecastShifts.losers.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/10">
                      <span className="text-destructive font-semibold text-sm">{item.change}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.reason}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground p-3 bg-muted rounded-lg">
                    No significant losers with current settings
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="card-elevated p-6">
          <h2 className="text-lg font-semibold text-foreground mb-3">What Changed and Why</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Current scenario:</strong> {getScenarioSummary()}.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2">
            {scenario.gasPrice > 5 && 
              "Rising gas prices are significantly shifting demand toward fuel-efficient vehicles, hybrids, and EVs. Full-size trucks and SUVs are seeing reduced interest as operating costs become a concern for buyers. "}
            {scenario.gasPrice < -5 && 
              "Lower gas prices are reviving interest in larger vehicles like trucks and SUVs, while the premium for hybrids becomes harder to justify. "}
            {scenario.interestRate > 0.5 && 
              "Higher interest rates are making monthly payments more expensive, pushing buyers toward lower price points and value-oriented segments. "}
            {scenario.season === 'Winter' && 
              "Winter seasonal demand is driving increased interest in AWD and all-weather capable vehicles. "}
            {scenario.consumerConfidence === 'Low' && 
              "Low consumer confidence is suppressing demand for premium and luxury vehicles as buyers become more cautious with major purchases."}
            {scenario.consumerConfidence === 'High' && 
              "High consumer confidence is boosting demand across all segments, with particular strength in premium and luxury vehicles."}
          </p>
        </section>
      </div>

      <ScenarioOverlay />
    </AppLayout>
  );
}
