import { AppLayout } from '@/components/layout/AppLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Target, BarChart3, Brain, Users, AlertCircle, ArrowRight } from 'lucide-react';

export default function Methodology() {
  return (
    <AppLayout>
      <PageHeader title="Methodology" showControls={false} />

      <div className="px-4 lg:px-6 py-6 space-y-8">
        {/* Hero */}
        <section className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-3">
            How We Predict Demand
          </h1>
          <p className="text-muted-foreground">
            Our forecasting engine combines multiple data signals to predict which vehicles 
            will sell fastest in your market. Here's how it works.
          </p>
        </section>

        {/* Process Flow */}
        <section className="card-elevated p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">1. Forecast</h3>
              <p className="text-sm text-muted-foreground">
                Analyze market signals, economic factors, and local demand patterns
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">2. Explain</h3>
              <p className="text-sm text-muted-foreground">
                Show the "why" behind each prediction with transparent factor weights
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">3. Act</h3>
              <p className="text-sm text-muted-foreground">
                Provide actionable recommendations for inventory decisions
              </p>
            </div>
          </div>
        </section>

        {/* What We Predict */}
        <section className="card-elevated p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            What the Model Predicts
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-primary">%</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">
                  Sell Probability
                </h3>
                <p className="text-sm text-muted-foreground">
                  The likelihood (0-100%) that a vehicle of this make/model/year will sell 
                  within the next 30 days in your market, based on current conditions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-primary">📅</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">
                  Days to Sell
                </h3>
                <p className="text-sm text-muted-foreground">
                  The expected number of days a properly-priced unit will remain on your lot 
                  before selling, based on market velocity and demand signals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Confidence Scoring */}
        <section className="card-elevated p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Confidence Scoring
          </h2>
          
          <p className="text-sm text-muted-foreground mb-4">
            Each prediction comes with a confidence level based on data quality and consistency:
          </p>
          
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-4 bg-success/5 rounded-lg border border-success/10">
              <span className="chip chip-success mb-2">High</span>
              <p className="text-xs text-muted-foreground">
                Strong, consistent signals across multiple data sources
              </p>
            </div>
            <div className="p-4 bg-warning/5 rounded-lg border border-warning/10">
              <span className="chip chip-warning mb-2">Medium</span>
              <p className="text-xs text-muted-foreground">
                Good signal strength with some variability in data
              </p>
            </div>
            <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/10">
              <span className="chip chip-danger mb-2">Low</span>
              <p className="text-xs text-muted-foreground">
                Limited data or conflicting signals; use with caution
              </p>
            </div>
          </div>
        </section>

        {/* Top Factors */}
        <section className="card-elevated p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Key Factors We Analyze
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'Search Interest', desc: 'Google Trends and marketplace search volume' },
              { name: 'Fuel Prices', desc: 'Regional gas prices and their trends' },
              { name: 'Interest Rates', desc: 'Current financing rates and their impact' },
              { name: 'Seasonality', desc: 'Time of year and weather patterns' },
              { name: 'Supply Levels', desc: 'Available inventory in the market' },
              { name: 'Lease Expirations', desc: 'Volume of leases ending in the area' },
              { name: 'Income Demographics', desc: 'Local income distribution data' },
              { name: 'Competitor Pricing', desc: 'Market pricing trends and benchmarks' },
            ].map((factor, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[10px] font-bold text-primary">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">{factor.name}</h4>
                  <p className="text-xs text-muted-foreground">{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Human Override Philosophy */}
        <section className="card-elevated p-6">
          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Human Override Philosophy
              </h2>
              <p className="text-sm text-muted-foreground mb-3">
                Our forecasts are designed to augment dealer expertise, not replace it. 
                You know your customers, your lot, and your market better than any algorithm.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Use predictions as one input among many in your decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Override when you have local knowledge the model doesn't</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Trust low-confidence predictions less than high-confidence ones</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-accent/50 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Important Disclaimer
              </h3>
              <p className="text-sm text-muted-foreground">
                Market Demand Forecaster provides predictions based on available data and 
                statistical models. These predictions are meant to support—not replace—your 
                professional judgment. Past performance does not guarantee future results. 
                Market conditions can change rapidly due to unforeseen circumstances. 
                Always combine data-driven insights with your own expertise and local 
                market knowledge.
              </p>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
