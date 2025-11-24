import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Palette, Zap, Users, CheckCircle, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { NewsletterForm } from "@/components/newsletter-form"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative px-4 py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="w-fit bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                Africa's Trusted Opportunity Pipeline
              </Badge>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-pretty">
                Opportunities for
                <span className="block text-primary">Developers & Designers</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed text-pretty">
                Connect Africa's tech creatives with companies that trust our pipeline. Real work. Real mentorship. Real
                income.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link href="/developers">
                  Join as Developer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30"
              >
                <Link href="/developers">
                  Join as Designer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="/startups">
                  Hire Talent
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-card/50 border-t border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">How Forgestack Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent pipeline designed for creatives and companies alike
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* For Developers & Designers */}
            <div className="relative">
              <div className="absolute -top-6 left-6 flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                1
              </div>
              <Card className="border-primary/20 bg-background">
                <CardContent className="pt-12 pb-6">
                  <Code className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Showcase Your Skills</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete AI-powered skill assessments and build a verified portfolio
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -top-6 left-6 flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                2
              </div>
              <Card className="border-primary/20 bg-background">
                <CardContent className="pt-12 pb-6">
                  <Zap className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
                  <p className="text-muted-foreground text-sm">
                    Our AI matches you with companies and projects that fit your skills
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -top-6 left-6 flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                3
              </div>
              <Card className="border-primary/20 bg-background">
                <CardContent className="pt-12 pb-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Grow & Earn</h3>
                  <p className="text-muted-foreground text-sm">
                    Work on real projects, earn income, and get mentorship from industry leaders
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Why Trust Forgestack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for Africa's creative tech community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-card">
              <CardContent className="pt-8">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Verified Opportunities</h3>
                <p className="text-muted-foreground">
                  Every company and project goes through our vetting process. No fake gigs, no scams.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card">
              <CardContent className="pt-8">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community Support</h3>
                <p className="text-muted-foreground">
                  Join a thriving community of developers and designers supporting each other's growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card">
              <CardContent className="pt-8">
                <Palette className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Portfolio Builder</h3>
                <p className="text-muted-foreground">
                  Showcase your work with our portfolio tools designed for creative professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card">
              <CardContent className="pt-8">
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fast Matching</h3>
                <p className="text-muted-foreground">
                  Get matched with opportunities within hours, not weeks. Our AI does the heavy lifting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Success Stories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: "Forgestack helped me land my first dev job. The community support made all the difference.",
                author: "Alex S.",
                role: "Frontend Developer",
                icon: "AS",
              },
              {
                quote: "We found our lead designer through Forgestack. The quality of talent is exceptional.",
                author: "Maria K.",
                role: "Product Manager",
                icon: "MK",
              },
              {
                quote: "From zero to hired in 3 months. The mentorship program changed my career trajectory.",
                author: "Jordan D.",
                role: "Full Stack Developer",
                icon: "JD",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-primary/20 bg-background">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">{testimonial.icon}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 border-t">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Creatives */}
            <Card className="border-primary/20 bg-card">
              <CardContent className="pt-8">
                <Code className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Ready to Level Up?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of developers and designers already earning on Forgestack.
                </p>
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/developers">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* For Companies */}
            <Card className="border-primary/20 bg-card">
              <CardContent className="pt-8">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Looking to Hire?</h3>
                <p className="text-muted-foreground mb-6">
                  Access a vetted pipeline of top creative talent ready for your next project.
                </p>
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
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
      <section className="px-4 py-20 bg-gradient-to-r from-primary/10 via-background to-primary/10 border-t">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get weekly updates on new opportunities, mentorship programs, and community events.
          </p>
          <NewsletterForm source="homepage" placeholder="Enter your email" buttonText="Subscribe" />
        </div>
      </section>
    </div>
  )
}
