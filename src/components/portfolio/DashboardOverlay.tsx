import { AlertTriangle, Lightbulb, Target, Zap, CheckCircle, TrendingUp, Eye } from 'lucide-react';
import { CaseStudyOverlay } from './CaseStudyOverlay';

export function DashboardOverlay() {
  const sections = [
    {
      icon: <AlertTriangle className="w-4 h-4 text-primary" />,
      title: "The Problem",
      content: (
        <p>
          Inventory decisions are high-risk and data is fragmented. Dealers have traffic, 
          listings, and market metrics — but no clear guidance on <strong>what to stock now</strong> to sell fast.
        </p>
      ),
    },
    {
      icon: <Lightbulb className="w-4 h-4 text-primary" />,
      title: "Product Insight",
      content: (
        <p>
          Most revenue loss comes from <strong>stocking misalignment</strong> — not poor sales execution. 
          Demand is driven by a mix of local economics, seasonality, and buyer behavior that sellers can't synthesize manually.
        </p>
      ),
    },
    {
      icon: <Target className="w-4 h-4 text-primary" />,
      title: "Design Hypothesis",
      content: (
        <p>
          If we unify marketplace demand signals with local economic indicators and present them as 
          <strong> ranked, explainable predictions</strong>, dealers will make faster, more confident stocking decisions.
        </p>
      ),
    },
    {
      icon: <Zap className="w-4 h-4 text-primary" />,
      title: "Solution Snapshot",
      content: (
        <div className="space-y-2">
          <p className="font-medium text-foreground">Market Demand Forecaster</p>
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Predicts fast-moving vehicles by city</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Explains demand drivers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Converts forecasts into action plans</span>
            </li>
          </ul>
          <p className="text-xs italic text-primary/80 pt-1">
            This reframes analytics into decisions.
          </p>
        </div>
      ),
    },
    {
      icon: <Eye className="w-4 h-4 text-primary" />,
      title: "Why This Design Works",
      content: (
        <div className="space-y-2">
          {[
            { label: "Explainability builds trust", desc: "predictions are always paired with 'why'" },
            { label: "Confidence scoring reduces risk", desc: "shows uncertainty upfront" },
            { label: "Action-first layout", desc: "turns insight into next steps" },
            { label: "Live signals keep it reactive", desc: "gas, rates, seasonality" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2 bg-muted/50 rounded-md">
              <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-medium text-foreground">{item.label}</span>
                <span className="text-xs text-muted-foreground"> — {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-primary" />,
      title: "Impact (Conceptual)",
      content: (
        <p className="font-medium text-foreground text-sm">
          Faster sell-through, less discounting, and higher inventory confidence.
        </p>
      ),
    },
  ];

  return <CaseStudyOverlay sections={sections} title="Case Study Summary" />;
}
