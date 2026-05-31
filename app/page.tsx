import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Zap, Users, CheckCircle, ArrowUpRight, Palette } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { NewsletterForm } from "@/components/newsletter-form"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 lg:py-48 overflow-hidden bg-gradient-to-b from-background via-background to-card/20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="w-fit bg-primary/20 text-primary border-primary/40 hover:bg-primary/30 rounded-full">
                <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2" />
                Africa's Trusted Opportunity Pipeline
              </Badge>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-pretty leading-tight">
                  Connect with Africa's Best Tech Talent
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-pretty">
                Forgestack is the trusted pipeline connecting verified developers and designers with companies looking for real talent. No gatekeepers. Just opportunity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-wrap pt-4">
              <Button asChild size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/developers">
                  I'm a Developer/Designer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="text-base px-8 py-6 bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/startups">
                  I'm Hiring Talent
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-primary/20 pt-8">
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">5,000+</div>
                <p className="text-sm text-muted-foreground">Verified Talents</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">200+</div>
                <p className="text-sm text-muted-foreground">Companies Hiring</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-primary">$10M+</div>
                <p className="text-sm text-muted-foreground">Earned by Talent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20 md:py-32 border-t border-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-20">
            <Badge className="w-fit mx-auto bg-primary/20 text-primary border-primary/40 hover:bg-primary/30 rounded-full">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2" />
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Simple. Transparent. Fair.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From signup to earning in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Pipeline connector lines */}
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary via-secondary to-primary/0" />

            {/* For Developers & Designers */}
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-xl shadow-lg">
                1
              </div>
              <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all pt-16">
                <CardContent className="pb-6">
                  <Code className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Build Your Profile</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Complete skill assessments, showcase your portfolio, and let companies discover your best work
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary text-white font-bold text-xl shadow-lg">
                2
              </div>
              <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all pt-16">
                <CardContent className="pb-6">
                  <Zap className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our AI engine matches you with opportunities that align with your skills and goals
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-xl shadow-lg">
                3
              </div>
              <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all pt-16">
                <CardContent className="pb-6">
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Earn & Grow</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Start working, earn competitive rates, and get mentorship from industry experts
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Trust */}
      <section className="px-4 py-20 md:py-32 bg-gradient-to-b from-card/20 to-background border-t border-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-20">
            <Badge className="w-fit mx-auto bg-secondary/20 text-secondary border-secondary/40 hover:bg-secondary/30 rounded-full">
              <span className="inline-block w-2 h-2 bg-secondary rounded-full mr-2" />
              Why Forgestack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Built on Trust & Transparency</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're changing how Africa's tech talent finds opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Verified Opportunities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every company and project is thoroughly vetted. No scams, no ghosting. Just real opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Thriving Community</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join 5,000+ developers and designers. Share knowledge, collaborate, and grow together.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Portfolio Builder</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create a stunning portfolio with our tools. Companies see your best work instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Matching</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get matched with opportunities within hours. Our AI understands what you need.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 md:py-32 border-t border-primary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-20">
            <Badge className="w-fit mx-auto bg-primary/20 text-primary border-primary/40 hover:bg-primary/30 rounded-full">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2" />
              Real Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Success Stories from Our Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how talent and companies are winning on Forgestack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "Got my first freelance gig within 2 weeks. The platform made it so easy to showcase my work.",
                author: "Alex S.",
                role: "Frontend Developer",
                icon: "AS",
                highlight: "Developer",
              },
              {
                quote: "Found our entire design team through Forgestack. Quality is consistently excellent.",
                author: "Maria K.",
                role: "Product Manager, TechCo",
                icon: "MK",
                highlight: "Company",
              },
              {
                quote: "The mentorship program paired me with an experienced dev. Changed my career completely.",
                author: "Jordan D.",
                role: "Full Stack Developer",
                icon: "JD",
                highlight: "Developer",
              },
              {
                quote: "Hiring used to take 3 months. Now we find great talent in weeks.",
                author: "Sarah L.",
                role: "Founder, StartupXYZ",
                icon: "SL",
                highlight: "Company",
              },
              {
                quote: "Earned $15K in my first 6 months. This platform really values creative work.",
                author: "Tunde O.",
                role: "UI/UX Designer",
                icon: "TO",
                highlight: "Designer",
              },
              {
                quote: "The vetting process is rigorous. We only work with pre-qualified talent.",
                author: "Chioma E.",
                role: "CTO, FinTech Startup",
                icon: "CE",
                highlight: "Company",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all group">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-primary">★</span>
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary/80">{testimonial.highlight}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold text-white">{testimonial.icon}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="px-4 py-20 md:py-32 border-t border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Creatives */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card hover:border-primary/40 transition-all">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Ready to Level Up?</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Join thousands of developers and designers earning real income with real companies. Start today.
                </p>
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 shadow-lg">
                  <Link href="/developers">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* For Companies */}
            <Card className="border-secondary/20 bg-gradient-to-br from-secondary/10 via-card to-card hover:border-secondary/40 transition-all">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Hiring Verified Talent?</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Access pre-vetted developers and designers. No recruiter fees. Save time and money.
                </p>
                <Button asChild size="lg" className="w-full bg-secondary hover:bg-secondary/90 shadow-lg">
                  <Link href="/startups">
                    Find Talent Now
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 py-20 md:py-32 bg-gradient-to-b from-primary/5 via-secondary/5 to-background border-t border-primary/10">
        <div className="container mx-auto max-w-2xl text-center">
          <Badge className="w-fit mx-auto mb-4 bg-primary/20 text-primary border-primary/40 hover:bg-primary/30 rounded-full">
            <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2" />
            Join Our Newsletter
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Get weekly updates on new opportunities, mentorship programs, industry insights, and exclusive community events.
          </p>
          <NewsletterForm source="homepage" placeholder="your@email.com" buttonText="Subscribe" />
          <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  )
}
