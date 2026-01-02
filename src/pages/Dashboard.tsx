import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { PageHeader } from '@/components/layout/PageHeader';
import { StatCard } from '@/components/dashboard/StatCard';
import { VehicleCard } from '@/components/dashboard/VehicleCard';
import { WhyDrawer } from '@/components/dashboard/WhyDrawer';
import { DemandDriverCard } from '@/components/dashboard/DemandDriverCard';
import { ActionPlanCard } from '@/components/dashboard/ActionPlanCard';
import { DashboardOverlay } from '@/components/portfolio/DashboardOverlay';
import { 
  forecastSummary, 
  vehicles, 
  demandDrivers, 
  actionPlan,
  Vehicle 
} from '@/data/mockData';
import { useApp } from '@/contexts/AppContext';
import { cities } from '@/data/mockData';
import { toast } from 'sonner';

export default function Dashboard() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { selectedCity, portfolioMode } = useApp();

  const cityName = cities.find(c => c.id === selectedCity)?.name || 'Toronto';

  const handleWhyClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsDrawerOpen(true);
  };

  const handleActionView = (action: typeof actionPlan[0]) => {
    toast.info(`Opening recommendation: ${action.action}`);
  };

  return (
    <AppLayout>
      <PageHeader title="City Forecast Overview" />
      
      <div className={`px-4 lg:px-6 py-6 space-y-8 ${portfolioMode ? 'lg:pr-96' : ''}`}>
        {/* Summary Cards */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatCard 
              label="Demand Index" 
              value={forecastSummary.demandIndex}
              subValue="0-100 scale"
              variant="success"
            />
            <StatCard 
              label="Inventory Risk" 
              value={forecastSummary.inventoryRisk}
              variant={forecastSummary.inventoryRisk === 'Medium' ? 'warning' : 'success'}
            />
            <StatCard 
              label="Top Segment" 
              value={forecastSummary.topSegment}
              trend="up"
            />
            <StatCard 
              label="Confidence" 
              value={forecastSummary.confidence}
              variant="success"
            />
          </div>
        </section>

        {/* Top 10 Fast Movers */}
        <section>
          <h2 className="section-title">Top 10 Predicted Fast Movers</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {vehicles.slice(0, 10).map((vehicle, idx) => (
              <VehicleCard 
                key={vehicle.id}
                vehicle={vehicle}
                rank={idx + 1}
                onWhyClick={handleWhyClick}
              />
            ))}
          </div>
        </section>

        {/* Demand Drivers */}
        <section>
          <h2 className="section-title">What's Driving Demand in {cityName}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {demandDrivers.map((driver) => (
              <DemandDriverCard key={driver.id} driver={driver} />
            ))}
          </div>
        </section>

        {/* Action Plan */}
        <section>
          <h2 className="section-title">Recommended Inventory Moves This Month</h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {actionPlan.map((action) => (
              <ActionPlanCard 
                key={action.id} 
                action={action}
                onView={() => handleActionView(action)}
              />
            ))}
          </div>
        </section>
      </div>

      <WhyDrawer 
        vehicle={selectedVehicle}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <DashboardOverlay />
    </AppLayout>
  );
}
