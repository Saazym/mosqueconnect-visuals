import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Star } from "lucide-react";

export function IslamicLearningPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Islamic Learning Center</h1>
        <p className="text-muted-foreground">Explore authentic Hadith, learn about the Prophet's life, and deepen your Islamic knowledge</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hadith of the Day */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Hadith of the Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="text-lg italic mb-4 border-l-4 border-primary pl-4">
              "The believer who eats his fill while his neighbor goes hungry is not one of us."
            </blockquote>
            <div className="text-sm text-muted-foreground">
              <p><strong>Narrator:</strong> Abu Hurairah (RA)</p>
              <p><strong>Source:</strong> Sahih Bukhari</p>
            </div>
          </CardContent>
        </Card>

        {/* Hadith Collections */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Hadith Collections
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Sahih Bukhari", count: "7,563 Hadiths", level: "Authentic" },
              { name: "Sahih Muslim", count: "7,190 Hadiths", level: "Authentic" },
              { name: "Sunan Abu Dawud", count: "4,800 Hadiths", level: "Good" },
              { name: "Jami' at-Tirmidhi", count: "3,956 Hadiths", level: "Good" }
            ].map((collection, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                <div>
                  <h3 className="font-semibold">{collection.name}</h3>
                  <p className="text-sm text-muted-foreground">{collection.count}</p>
                </div>
                <Badge variant={collection.level === "Authentic" ? "default" : "secondary"}>
                  {collection.level}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Prophet Stories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Life of Prophet Muhammad (PBUH)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "The Night Journey (Isra and Mi'raj)", category: "Miracle", duration: "5 min read" },
              { title: "The First Revelation", category: "Prophetic Mission", duration: "3 min read" },
              { title: "The Conquest of Mecca", category: "Victory", duration: "8 min read" },
              { title: "The Farewell Pilgrimage", category: "Final Message", duration: "6 min read" }
            ].map((story, index) => (
              <div key={index} className="p-3 border rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                <h3 className="font-semibold mb-1">{story.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <Badge variant="outline">{story.category}</Badge>
                  <span>{story.duration}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Learning Progress */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Your Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-primary">47</div>
                <div className="text-sm text-muted-foreground">Hadiths Read</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-amber-500">12</div>
                <div className="text-sm text-muted-foreground">Stories Completed</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-emerald-500">5</div>
                <div className="text-sm text-muted-foreground">Days Streak</div>
              </div>
            </div>
            <Button className="w-full mt-4">Continue Learning Journey</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}