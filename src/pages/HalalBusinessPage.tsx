import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Star, Clock, Phone } from "lucide-react";

export function HalalBusinessPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Halal Business Directory</h1>
        <p className="text-muted-foreground">Find certified halal restaurants, grocery stores, and services in your area</p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Search for halal businesses..." className="flex-1" />
            <select className="px-3 py-2 border rounded-md">
              <option>All Categories</option>
              <option>Restaurants</option>
              <option>Grocery Stores</option>
              <option>Butcher Shops</option>
              <option>Catering Services</option>
            </select>
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Business Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Al-Barakah Restaurant",
            category: "Middle Eastern Cuisine",
            rating: 4.8,
            reviews: 124,
            address: "123 Halal Street, City Center",
            phone: "(555) 123-4567",
            hours: "Open until 10:00 PM",
            certification: "Halal Certified",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=200&fit=crop"
          },
          {
            name: "Crescent Grocery",
            category: "Halal Grocery Store",
            rating: 4.6,
            reviews: 89,
            address: "456 Market Avenue, Downtown",
            phone: "(555) 987-6543",
            hours: "Open until 9:00 PM",
            certification: "Halal Certified",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop"
          },
          {
            name: "Bismillah Butcher Shop",
            category: "Halal Meat",
            rating: 4.9,
            reviews: 67,
            address: "789 Meat Market Road, West Side",
            phone: "(555) 456-7890",
            hours: "Open until 7:00 PM",
            certification: "Halal Certified",
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=200&fit=crop"
          },
          {
            name: "Masjid Catering Services",
            category: "Event Catering",
            rating: 4.7,
            reviews: 45,
            address: "321 Service Lane, North District",
            phone: "(555) 234-5678",
            hours: "By appointment",
            certification: "Halal Certified",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=200&fit=crop"
          },
          {
            name: "Salam Sweets & Bakery",
            category: "Halal Bakery",
            rating: 4.5,
            reviews: 156,
            address: "654 Sweet Street, East Side",
            phone: "(555) 345-6789",
            hours: "Open until 8:00 PM",
            certification: "Halal Certified",
            image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=200&fit=crop"
          },
          {
            name: "Taqwa Tea House",
            category: "Halal Cafe",
            rating: 4.4,
            reviews: 78,
            address: "987 Brew Boulevard, Central Plaza",
            phone: "(555) 567-8901",
            hours: "Open until 11:00 PM",
            certification: "Halal Certified",
            image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=200&fit=crop"
          }
        ].map((business, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <img 
                src={business.image} 
                alt={business.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-emerald-500">
                {business.certification}
              </Badge>
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{business.name}</CardTitle>
              <Badge variant="outline" className="w-fit">
                {business.category}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-amber-500 fill-current" />
                <span className="font-semibold">{business.rating}</span>
                <span className="text-muted-foreground">({business.reviews} reviews)</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{business.address}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{business.phone}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <Clock className="h-4 w-4" />
                <span>{business.hours}</span>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button size="sm" className="flex-1">Call</Button>
                <Button size="sm" variant="outline" className="flex-1">Directions</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}