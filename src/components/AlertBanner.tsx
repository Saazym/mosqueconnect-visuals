import { useState } from "react";
import { X, Star, Trophy, Calendar } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const alerts = [
  {
    id: 1,
    icon: <Star className="h-4 w-4" />,
    message: "🎉 New Achievement Unlocked: 'Consistent Prayer' - Complete 5 prayers in a row!",
    type: "achievement" as const
  },
  {
    id: 2,
    icon: <Trophy className="h-4 w-4" />,
    message: "🏆 Weekly Champion: Ahmad scored highest in Emaan Assessment this week!",
    type: "champion" as const
  },
  {
    id: 3,
    icon: <Calendar className="h-4 w-4" />,
    message: "📅 Upcoming Event: Community Iftar at Central Mosque - Tomorrow 7:30 PM",
    type: "event" as const
  }
];

export function AlertBanner() {
  const [currentAlert, setCurrentAlert] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const alert = alerts[currentAlert];

  const getAlertStyle = (type: string) => {
    switch (type) {
      case 'achievement':
        return 'border-amber-200 bg-amber-50 text-amber-800';
      case 'champion':
        return 'border-emerald-200 bg-emerald-50 text-emerald-800';
      case 'event':
        return 'border-blue-200 bg-blue-50 text-blue-800';
      default:
        return 'border-gray-200 bg-gray-50 text-gray-800';
    }
  };

  const nextAlert = () => {
    setCurrentAlert((prev) => (prev + 1) % alerts.length);
  };

  const closeAlert = () => {
    setIsVisible(false);
  };

  return (
    <div className="animate-slide-down">
      <Alert className={`mx-4 mt-4 ${getAlertStyle(alert.type)} relative cursor-pointer`} onClick={nextAlert}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {alert.icon}
            <AlertDescription className="font-medium">
              {alert.message}
            </AlertDescription>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeAlert();
            }}
            className="ml-2 hover:opacity-70 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        {/* Progress indicators */}
        <div className="flex gap-1 mt-2">
          {alerts.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-8 rounded-full transition-colors ${
                index === currentAlert ? 'bg-current opacity-100' : 'bg-current opacity-30'
              }`}
            />
          ))}
        </div>
      </Alert>
    </div>
  );
}