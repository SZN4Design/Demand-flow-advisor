import { Lightbulb, Users, Shield } from 'lucide-react';
import { CaseStudyOverlay } from './CaseStudyOverlay';

export function MethodologyOverlay() {
  const sections = [
    {
      icon: <Users className="w-4 h-4 text-primary" />,
      title: "Human-in-the-Loop Philosophy",
      content: (
        <div className="space-y-2">
          <p>
            The system <strong>augments</strong> dealer judgment — it does not replace it.
          </p>
          <p className="text-xs">
            AI predictions are powerful, but local expertise, customer relationships, and 
            market intuition remain essential to successful inventory management.
          </p>
        </div>
      ),
    },
    {
      icon: <Shield className="w-4 h-4 text-primary" />,
      title: "Trust Through Transparency",
      content: (
        <p>
          This page exists to build <strong>user confidence</strong>. By explaining how predictions 
          work, we reduce skepticism and encourage adoption.
        </p>
      ),
    },
    {
      icon: <Lightbulb className="w-4 h-4 text-primary" />,
      title: "Design Philosophy",
      content: (
        <p>
          Methodology pages are often overlooked, but in B2B tools they're 
          <strong> critical for enterprise sales</strong>. Decision-makers need to understand 
          and trust the system before buying.
        </p>
      ),
    },
  ];

  return <CaseStudyOverlay sections={sections} title="Methodology Design" />;
}
