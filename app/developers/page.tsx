import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, Users, CheckCircle, Star, TrendingUp, Award } from "lucide-react"

export default function OpportunitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative px-4 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="w-fit bg-primary/20 text-primary border-primary/30">For Creatives & Builders</Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-pretty">
                Your Skills Matter.
                <span className="block text-primary">Your Potential Matters More.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Skip the gatekeepers. Get matched with real companies looking for your talent, get paid fairly, and grow
                with mentorship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link href="https://discord.gg/ACAVQcsYVS" target="_blank" rel="noopener noreferrer">
                  Join Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="#how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 border-t border-b bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What You'll Get</h2>
            <p className="text-lg text-muted-foreground">Tailored opportunities for developers and designers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Developers */}
            <Card className="border-primary/20 bg-background">
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-2xl">For Developers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">AI-Powered Skill Tests</p>
                      <p className="text-sm text-muted-foreground">
                        Showcase what you can do with real coding challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Project-Based Experience</p>
                      <p className="text-sm text-muted-foreground">Work on real projects and build your portfolio</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Verified by Companies</p>
                      <p className="text-sm text-muted-foreground">Companies trust your verified portfolio</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Direct Hiring Pipeline</p>
                      <p className="text-sm text-muted-foreground">Get matched with companies actively hiring</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90">
                  <Link href="https://discord.gg/ACAVQcsYVS" target="_blank">
                    Join as Developer
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Designers */}
            <Card className="border-primary/20 bg-background">
              <CardHeader>
                <Star className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-2xl">For Designers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">UI/UX Design Assessments</p>
                      <p className="text-sm text-muted-foreground">
                        Prove your design skills with real-world challenges
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Portfolio Builder</p>
                      <p className="text-sm text-muted-foreground">Showcase case studies and creative work</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Creative Community</p>
                      <p className="text-sm text-muted-foreground">Get feedback and collaborate with designers</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Real Design Projects</p>
                      <p className="text-sm text-muted-foreground">Work on meaningful projects for growing companies</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90">
                  <Link href="https://discord.gg/ACAVQcsYVS" target="_blank">
                    Join as Designer
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">The Forgestack Journey</h2>
            <p className="text-lg text-muted-foreground mt-4">From signup to your first paid opportunity</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Join & Verify",
                description: "Sign up on Discord, verify your identity, and complete your profile.",
                icon: Users,
              },
              {
                step: 2,
                title: "Showcase Skills",
                description: "Take skill assessments and build a portfolio showcasing your best work.",
                icon: Award,
              },
              {
                step: 3,
                title: "Get Matched",
                description: "Our AI matches you with opportunities that fit your skills and goals.",
                icon: Zap,
              },
              {
                step: 4,
                title: "Land & Earn",
                description: "Interview with companies and start earning on real projects.",
                icon: TrendingUp,
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -top-4 left-6 flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  {item.step}
                </div>
                <Card className="border-primary/20 bg-background pt-12">
                  <CardContent className="space-y-3">
                    <item.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Forgestack Exists</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-4">No</div>
                <h3 className="text-xl font-semibold mb-3">Gate Keepers</h3>
                <p className="text-muted-foreground">
                  We judge you by what you can do, not your credentials, background, or years of experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-4">Fair</div>
                <h3 className="text-xl font-semibold mb-3">Compensation</h3>
                <p className="text-muted-foreground">
                  Get paid fairly for your work without recruiter middlemen taking cuts from your earnings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-primary mb-4">Real</div>
                <h3 className="text-xl font-semibold mb-3">Opportunities</h3>
                <p className="text-muted-foreground">
                  Work on meaningful projects with growing companies that value your contribution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Platform Features</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Verified Skills Profile",
                description: "Build a profile that companies trust, backed by real assessments and project history.",
              },
              {
                title: "Smart Matching Engine",
                description: "Get matched with opportunities that align with your skills, interests, and career goals.",
              },
              {
                title: "Mentorship Network",
                description: "Connect with experienced professionals who guide you through your career journey.",
              },
              {
                title: "Portfolio Builder",
                description: "Create stunning portfolios showcasing your best work and case studies.",
              },
              {
                title: "Direct Company Access",
                description: "Interview directly with founders and hiring managers, no recruiters needed.",
              },
              {
                title: "Community Support",
                description: "Join a thriving community of creatives supporting each other's growth and success.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="border-primary/20 bg-background">
                <CardContent className="pt-8">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary font-bold flex items-center justify-center mb-4">
                    ✓
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-gradient-to-r from-primary/10 via-background to-primary/10 border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Take Control of Your Career?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers and designers building real opportunities in Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link href="https://discord.gg/ACAVQcsYVS" target="_blank">
                Join Forgestack
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Link href="/">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
