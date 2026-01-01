import { Lightbulb, BarChart3 } from 'lucide-react';
import { CaseStudyOverlay } from './CaseStudyOverlay';

export function ScenarioOverlay() {
  const sections = [
    {
      icon: <Lightbulb className="w-4 h-4 text-primary" />,
      title: "Design Note",
      content: (
        <p>
          This simulator was designed to support <strong>what-if decision planning</strong> — allowing 
          dealers to see how economic shifts affect demand <strong>before committing capital</strong>.
        </p>
      ),
    },
    {
      icon: <BarChart3 className="w-4 h-4 text-primary" />,
      title: "Strategic Value",
      content: (
        <div className="space-y-2">
          <p>
            By modeling scenarios, dealers can:
          </p>
          <ul className="space-y-1.5 text-xs">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Prepare for market volatility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Stress-test inventory strategies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Make proactive vs. reactive decisions</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return <CaseStudyOverlay sections={sections} title="Simulator Design" />;
}
