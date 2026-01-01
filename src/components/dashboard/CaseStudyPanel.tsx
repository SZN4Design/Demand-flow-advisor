import { useApp } from '@/contexts/AppContext';

export function CaseStudyPanel() {
  const { portfolioMode } = useApp();

  if (!portfolioMode) return null;

  return (
    <div className="card-elevated p-4 mb-6 border-l-4 border-l-primary">
      <h3 className="text-sm font-semibold text-foreground mb-3">
        📊 Case Study Summary
      </h3>
      
      <div className="space-y-3">
        <div>
          <p className="text-xs font-medium text-primary mb-1">Problem</p>
          <p className="text-sm text-muted-foreground">
            Car dealers struggle to predict which vehicles will sell fastest, leading to 
            suboptimal inventory decisions and missed revenue opportunities.
          </p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-primary mb-1">Solution</p>
          <p className="text-sm text-muted-foreground">
            AI-powered demand forecasting combining marketplace signals, economic factors, 
            and local market dynamics to predict vehicle demand with actionable recommendations.
          </p>
        </div>
        
        <div>
          <p className="text-xs font-medium text-primary mb-1">Impact</p>
          <p className="text-sm text-muted-foreground">
            Dealers using the platform see 15-25% faster inventory turnover and 
            improved lead generation through optimized stock decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
