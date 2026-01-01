import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  SlidersHorizontal, 
  Bell, 
  Settings, 
  Info 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/simulator', label: 'Simulator', icon: SlidersHorizontal },
  { to: '/alerts', label: 'Alerts', icon: Bell },
  { to: '/settings', label: 'Settings', icon: Settings },
  { to: '/methodology', label: 'About', icon: Info },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="mobile-nav lg:hidden">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to || 
            (item.to === '/dashboard' && location.pathname.startsWith('/vehicle/'));
          
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                'flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-colors',
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
