import { RefreshCw, ChevronDown, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { cities } from '@/data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface PageHeaderProps {
  title: string;
  showControls?: boolean;
}

export function PageHeader({ title, showControls = true }: PageHeaderProps) {
  const { selectedCity, setSelectedCity, lastUpdated, refreshForecast } = useApp();

  return (
    <header className="page-header">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3 lg:hidden">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary-foreground" />
          </div>
          <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        </div>
        
        <h1 className="hidden lg:block text-xl font-semibold text-foreground">{title}</h1>

        {showControls && (
          <div className="flex flex-wrap items-center gap-2">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-[140px] h-9 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.id} value={city.id}>
                    {city.name}, {city.province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select defaultValue="30">
              <SelectTrigger className="w-[120px] h-9 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">Next 30 days</SelectItem>
                <SelectItem value="60">Next 60 days</SelectItem>
                <SelectItem value="90">Next 90 days</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              size="sm"
              onClick={refreshForecast}
              className="h-9 gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Refresh</span>
            </Button>

            <span className="text-xs text-muted-foreground ml-1">
              Updated {lastUpdated}
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
