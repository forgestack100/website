import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Users, Award, TrendingUp, Lock, Gauge, Lightbulb } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative px-4 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="w-fit bg-primary/20 text-primary border-primary/30">Platform Features</Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-pretty">
                Everything Built for Africa's
                <span className="block text-primary">Tech Creatives</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                A complete platform designed to connect talent with opportunity. Powered by AI, backed by community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link href="/developers">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="/">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Core Platform Features</h2>
            <p className="text-lg text-muted-foreground mt-4">Everything you need to succeed</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Award,
                title: "AI-Powered Skill Assessment",
                description:
                  "Real-world coding challenges and design assessments that accurately measure capabilities, not credentials.",
              },
              {
                icon: Zap,
                title: "Smart Matching Engine",
                description:
                  "Advanced AI matches you with opportunities that align perfectly with your skills, experience, and goals.",
              },
              {
                icon: Users,
                title: "Community Support Network",
                description:
                  "Join a thriving community of developers and designers. Collaborate, learn, and grow together.",
              },
              {
                icon: TrendingUp,
                title: "Portfolio Builder",
                description:
                  "Create stunning portfolios with case studies, projects, and verified skills. Companies love what they see.",
              },
              {
                icon: Gauge,
                title: "Performance Analytics",
                description: "Track your progress, see how you rank in the community, and identify areas for growth.",
              },
              {
                icon: Lock,
                title: "Secure & Verified",
                description:
                  "Every profile is verified. Companies trust the talent on Forgestack because we do the vetting.",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="border-primary/20 bg-background">
                <CardContent className="pt-8">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-card/50 border-y">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">For Developers</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Skill Tests</h3>
                <p className="text-muted-foreground">
                  Complete AI-powered coding challenges in your preferred languages. Show companies what you can really
                  do, not just what's on your resume.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Project-Based Experience</h3>
                <p className="text-muted-foreground">
                  Work on real projects with real companies. Build your portfolio while earning income. Every project
                  counts.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Verified Portfolio</h3>
                <p className="text-muted-foreground">
                  Your portfolio is backed by verified assessments and completed projects. Companies trust it because
                  we've verified you.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Mentorship Access</h3>
                <p className="text-muted-foreground">
                  Get guidance from experienced developers. One-on-one mentorship, peer learning, and career guidance
                  from day one.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="border-primary/20 bg-background">
                <CardContent className="pt-8">
                  <h4 className="font-semibold mb-4">What Developers Get</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Direct access to job opportunities</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Fair compensation without middlemen</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Remote-friendly opportunities</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Career growth and mentorship</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Community and peer support</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Portfolio visibility to companies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">For Designers</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1 space-y-4">
              <Card className="border-primary/20 bg-background">
                <CardContent className="pt-8">
                  <h4 className="font-semibold mb-4">What Designers Get</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>UI/UX design assessments</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Creative project opportunities</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Portfolio showcase for case studies</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Design community reviews</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Direct client access</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Creative collaboration opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Design Assessments</h3>
                <p className="text-muted-foreground">
                  Showcase your design skills through real-world UI/UX challenges. Prove your capabilities with actual
                  work.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Case Study Portfolio</h3>
                <p className="text-muted-foreground">
                  Build a professional portfolio with detailed case studies. Show companies your design thinking and
                  creative process.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Creative Community</h3>
                <p className="text-muted-foreground">
                  Connect with other designers, get feedback on your work, and collaborate on exciting projects.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Real Design Projects</h3>
                <p className="text-muted-foreground">
                  Work on meaningful design projects for growing companies. Build real portfolio pieces while earning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-card/50 border-y">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">For Companies</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Verified Talent Pipeline</h3>
                <p className="text-muted-foreground">
                  Access pre-vetted developers and designers with verified skills. No more guessing. Only qualified
                  candidates.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">AI Matching System</h3>
                <p className="text-muted-foreground">
                  Our AI matches you with the perfect fit for your specific needs. Technical skills, experience level,
                  and culture fit all considered.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Performance Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor developer performance, track project progress, and measure quality in real-time with our
                  dashboards.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">Flexible Arrangements</h3>
                <p className="text-muted-foreground">
                  Full-time, part-time, contract, or project-based. Scale up or down based on your business needs.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="border-primary/20 bg-background">
                <CardContent className="pt-8">
                  <h4 className="font-semibold mb-4">What Companies Get</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>No recruiter fees or commissions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>24-hour matching turnaround</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Pre-vetted talent only</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Direct candidate communication</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Performance dashboards</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span>Scalable hiring solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Built on Trust & Technology</h2>
            <p className="text-lg text-muted-foreground mt-4">Your data is secure, your opportunities are verified</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <Lock className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Security First</h3>
                <p className="text-muted-foreground">
                  All data is encrypted and securely stored. We comply with international security standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <Lightbulb className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">AI-Powered</h3>
                <p className="text-muted-foreground">
                  Advanced machine learning ensures accurate matching and continuous improvement of the platform.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Community Verified</h3>
                <p className="text-muted-foreground">
                  Every profile is backed by community reviews, assessments, and verified work history.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-gradient-to-r from-primary/10 via-background to-primary/10 border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience the Platform?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're looking for opportunities or talent, Forgestack has everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link href="/developers">
                Join as Creative
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link href="/startups">
                Start Hiring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
