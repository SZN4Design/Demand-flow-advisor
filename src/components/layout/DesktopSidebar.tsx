import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Car, 
  SlidersHorizontal, 
  Bell, 
  Settings, 
  Info,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/simulator', label: 'Simulator', icon: SlidersHorizontal },
  { to: '/alerts', label: 'Alerts', icon: Bell },
  { to: '/settings', label: 'Settings', icon: Settings },
  { to: '/methodology', label: 'Methodology', icon: Info },
];

export function DesktopSidebar() {
  const location = useLocation();

  return (
    <aside className="desktop-sidebar">
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-foreground">Market Demand</h1>
            <p className="text-[10px] text-muted-foreground">Forecaster</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to || 
            (item.to === '/dashboard' && location.pathname.startsWith('/vehicle/'));
          
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                'nav-item',
                isActive && 'nav-item-active'
              )}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="text-[10px] text-muted-foreground">
          <p>Market Demand Forecaster</p>
          <p>v1.0.0 · Enterprise</p>
        </div>
      </div>
    </aside>
  );
}
