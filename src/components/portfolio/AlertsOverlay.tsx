import { Lightbulb, Clock, Zap } from 'lucide-react';
import { CaseStudyOverlay } from './CaseStudyOverlay';

export function AlertsOverlay() {
  const sections = [
    {
      icon: <Lightbulb className="w-4 h-4 text-primary" />,
      title: "Design Note",
      content: (
        <p>
          Real-time market alerts prevent dealers from <strong>reacting too late</strong> to demand shifts. 
          Early signals create competitive advantage.
        </p>
      ),
    },
    {
      icon: <Clock className="w-4 h-4 text-primary" />,
      title: "Timeliness Matters",
      content: (
        <p>
          Market conditions change faster than inventory decisions. Alerts bridge this gap by 
          surfacing <strong>actionable signals</strong> when they matter most.
        </p>
      ),
    },
    {
      icon: <Zap className="w-4 h-4 text-primary" />,
      title: "Severity Design",
      content: (
        <p>
          Three severity levels help dealers <strong>prioritize attention</strong> — high-severity 
          alerts demand immediate action, while low-severity alerts inform long-term planning.
        </p>
      ),
    },
  ];

  return <CaseStudyOverlay sections={sections} title="Alerts Design" />;
}
