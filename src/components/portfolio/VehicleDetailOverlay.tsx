import { Eye, Shield, Users } from 'lucide-react';
import { CaseStudyOverlay } from './CaseStudyOverlay';

export function VehicleDetailOverlay() {
  const sections = [
    {
      icon: <Eye className="w-4 h-4 text-primary" />,
      title: "Why This Screen Exists",
      content: (
        <p>
          Dealers don't trust black-box AI — this screen shows <strong>what factors influence the prediction</strong> so 
          users can validate recommendations against their own market knowledge.
        </p>
      ),
    },
    {
      icon: <Shield className="w-4 h-4 text-primary" />,
      title: "Why We Show Confidence",
      content: (
        <p>
          Inventory decisions are expensive — showing uncertainty reduces overcommitment risk. 
          <strong> High confidence</strong> means act decisively; <strong>low confidence</strong> means gather more data.
        </p>
      ),
    },
    {
      icon: <Users className="w-4 h-4 text-primary" />,
      title: "Why We Show Personas",
      content: (
        <p>
          Different buyer segments drive demand differently — aligning stock to local demographics 
          <strong> increases sell-through</strong> and helps tailor marketing messages.
        </p>
      ),
    },
  ];

  return <CaseStudyOverlay sections={sections} title="Design Rationale" />;
}
