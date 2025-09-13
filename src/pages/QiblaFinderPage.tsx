import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation, Clock, MapPin, Compass } from "lucide-react";
import { useState, useEffect } from "react";

export function QiblaFinderPage() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [qiblaDirection, setQiblaDirection] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation({ lat, lng });
          
          // Calculate Qibla direction (simplified calculation to Kaaba coordinates)
          const kaabaLat = 21.4225;
          const kaabaLng = 39.8262;
          
          const deltaLng = kaabaLng - lng;
          const y = Math.sin(deltaLng * Math.PI / 180) * Math.cos(kaabaLat * Math.PI / 180);
          const x = Math.cos(lat * Math.PI / 180) * Math.sin(kaabaLat * Math.PI / 180) - 
                   Math.sin(lat * Math.PI / 180) * Math.cos(kaabaLat * Math.PI / 180) * Math.cos(deltaLng * Math.PI / 180);
          
          let bearing = Math.atan2(y, x) * 180 / Math.PI;
          bearing = (bearing + 360) % 360;
          setQiblaDirection(Math.round(bearing));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const prayerTimes = [
    { name: "Fajr", time: "05:30", status: "completed" },
    { name: "Dhuhr", time: "12:45", status: "current" },
    { name: "Asr", time: "15:30", status: "upcoming" },
    { name: "Maghrib", time: "18:15", status: "upcoming" },
    { name: "Isha", time: "19:45", status: "upcoming" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-emerald-100 text-emerald-800';
      case 'current': return 'bg-amber-100 text-amber-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Qibla Finder & Prayer Times</h1>
        <p className="text-muted-foreground">Find the direction of Kaaba and stay updated with prayer times</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Qibla Direction */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Compass className="h-5 w-5" />
              Qibla Direction
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-6 border-4 border-primary rounded-full">
              <div className="absolute inset-4 border-2 border-dashed border-primary/50 rounded-full">
                {qiblaDirection !== null && (
                  <div
                    className="absolute top-1/2 left-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-red-500 transform -translate-x-1/2 -translate-y-full"
                    style={{ 
                      transform: `translate(-50%, -100%) rotate(${qiblaDirection}deg)`,
                      transformOrigin: '50% 100%'
                    }}
                  />
                )}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                🕋
              </div>
            </div>
            
            {location ? (
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">
                  {qiblaDirection}° NE
                </div>
                <div className="text-sm text-muted-foreground">
                  Direction to Kaaba from your location
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Lat: {location.lat.toFixed(4)}, Lng: {location.lng.toFixed(4)}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-muted-foreground">Enable location to find Qibla direction</p>
                <Button onClick={getLocation} className="w-full">
                  <Navigation className="h-4 w-4 mr-2" />
                  Get My Location
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Prayer Times */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Today's Prayer Times
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {prayerTimes.map((prayer, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold">{prayer.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {prayer.time}
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(prayer.status)}>
                    {prayer.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Time */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Current Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-muted-foreground">
                Next prayer: Asr at 15:30 (in 2 hours 15 minutes)
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}