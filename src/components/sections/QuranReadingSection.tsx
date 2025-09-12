import { PhoneMockup } from "../PhoneMockup";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const QuranReadingSection = () => {
  return (
    <section id="slide12" className="min-h-screen flex flex-col lg:flex-row items-start justify-center gap-10 py-10">
      <div className="text-center lg:text-left lg:w-1/3 max-w-md">
        <h3 className="text-3xl font-bold text-primary mb-4">12. Quran Reader & Study</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          A comprehensive Quran reading experience with multiple translations, transliterations, bookmarks, and personal notes. Track your progress and compete with the community through achievement rankings.
        </p>
        
        {/* Achievement Banner */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              🏆 Weekly Champions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">🥇 Local:</span>
              <span className="text-sm text-primary">Ahmad K. (2,450 pts)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">🥈 State:</span>
              <span className="text-sm text-accent">Fatima M. (3,120 pts)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">🥉 National:</span>
              <span className="text-sm text-secondary">Ibrahim A. (4,890 pts)</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <PhoneMockup className="bg-background">
        <div className="p-0 h-full overflow-y-auto">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📖</span>
              <h2 className="font-bold">Quran Reader</h2>
            </div>
            <div className="flex gap-2">
              <button className="text-sm bg-primary-foreground/20 px-2 py-1 rounded">⭐</button>
              <button className="text-sm bg-primary-foreground/20 px-2 py-1 rounded">🔖</button>
            </div>
          </div>

          {/* Translation & Options */}
          <div className="p-4 bg-muted/50 border-b">
            <div className="flex gap-2 mb-2">
              <select className="text-xs bg-background border rounded px-2 py-1 flex-1">
                <option>Sahih International</option>
                <option>Pickthall</option>
                <option>Yusuf Ali</option>
                <option>Dr. Mustafa Khattab</option>
              </select>
              <select className="text-xs bg-background border rounded px-2 py-1 flex-1">
                <option>Show Transliteration</option>
                <option>Hide Transliteration</option>
              </select>
            </div>
            <div className="text-xs text-muted-foreground">
              📍 Last read: Surah Al-Baqarah, Ayah 255 • 3 hours ago
            </div>
          </div>

          {/* Surah Info */}
          <div className="p-4 text-center bg-gradient-to-b from-primary/5 to-transparent">
            <h3 className="font-bold text-lg mb-1">سورة الفاتحة</h3>
            <p className="text-sm text-muted-foreground">Surah Al-Fatihah (The Opening)</p>
            <p className="text-xs text-muted-foreground">Meccan • 7 Ayahs</p>
          </div>

          {/* Ayah Display */}
          <div className="p-4 space-y-6">
            {/* Ayah 1 */}
            <div className="border-l-4 border-primary/30 pl-4">
              <div className="flex items-start justify-between mb-2">
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">1</span>
                <div className="flex gap-1">
                  <button className="text-sm">⭐</button>
                  <button className="text-sm">📝</button>
                  <button className="text-sm">🔖</button>
                </div>
              </div>
              <p className="text-right text-lg leading-relaxed mb-2 font-arabic">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <p className="text-sm text-muted-foreground italic mb-2">
                Bis-mil-laa-hir-Rah-maa-nir-Ra-heem
              </p>
              <p className="text-sm leading-relaxed">
                In the name of Allah, the Entirely Merciful, the Especially Merciful.
              </p>
              
              {/* Personal Note */}
              <div className="mt-3 bg-accent/10 rounded-lg p-3">
                <p className="text-xs text-accent font-medium mb-1">📝 Your Note:</p>
                <p className="text-xs text-muted-foreground">
                  "This beautiful opening reminds me to always start with Allah's name in everything I do."
                </p>
              </div>
            </div>

            {/* Ayah 2 */}
            <div className="border-l-4 border-muted pl-4">
              <div className="flex items-start justify-between mb-2">
                <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">2</span>
                <div className="flex gap-1">
                  <button className="text-sm text-yellow-500">⭐</button>
                  <button className="text-sm">📝</button>
                  <button className="text-sm">🔖</button>
                </div>
              </div>
              <p className="text-right text-lg leading-relaxed mb-2 font-arabic">
                الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
              </p>
              <p className="text-sm text-muted-foreground italic mb-2">
                Al-ham-du lil-laa-hi Rab-bil-'aa-la-meen
              </p>
              <p className="text-sm leading-relaxed">
                [All] praise is [due] to Allah, Lord of the worlds -
              </p>
            </div>

            {/* Ayah 3 */}
            <div className="border-l-4 border-muted pl-4">
              <div className="flex items-start justify-between mb-2">
                <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">3</span>
                <div className="flex gap-1">
                  <button className="text-sm">⭐</button>
                  <button className="text-sm">📝</button>
                  <button className="text-sm text-primary">🔖</button>
                </div>
              </div>
              <p className="text-right text-lg leading-relaxed mb-2 font-arabic">
                الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <p className="text-sm text-muted-foreground italic mb-2">
                Ar-Rah-maa-nir-Ra-heem
              </p>
              <p className="text-sm leading-relaxed">
                The Entirely Merciful, the Especially Merciful,
              </p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="sticky bottom-0 bg-background border-t p-4">
            <div className="flex justify-between items-center">
              <button className="bg-muted text-muted-foreground px-4 py-2 rounded text-sm">
                ← Previous
              </button>
              <div className="text-xs text-center">
                <p>Ayah 1-3 of 7</p>
                <div className="w-24 h-1 bg-muted rounded-full mt-1">
                  <div className="w-1/3 h-full bg-primary rounded-full"></div>
                </div>
              </div>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm">
                Next →
              </button>
            </div>
          </div>
        </div>
      </PhoneMockup>
    </section>
  );
};