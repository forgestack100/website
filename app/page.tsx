import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Zap, Shield, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { NewsletterForm } from "@/components/newsletter-form"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Helping Devs Get Hired
                <span className="block text-primary">Without Gatekeepers</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Connect overlooked developers with startups that value talent over credentials. No recruiters, no
                gatekeeping—just real opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/developers">
                  Join as Developer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="/startups">
                  Hire a Dev
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Breaking Down Barriers in Tech Hiring</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Too many talented developers are overlooked because they don't fit the traditional mold. Forgestack
              bridges the gap between hungry talent and growing startups, creating opportunities that benefit everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Matching</h3>
                <p className="text-muted-foreground">
                  Skip the lengthy interview processes. Get matched based on skills and culture fit.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pre-vetted Talent</h3>
                <p className="text-muted-foreground">
                  Every developer in our community is verified and supported by our mentorship network.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  Join a supportive community where developers help each other grow and succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Community Says</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "Forgestack helped me land my first dev job after months of rejections. The community support made all
                  the difference."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Alex S.</p>
                    <p className="text-sm text-muted-foreground">Junior Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "We found our lead frontend developer through Forgestack. No recruiter fees, just great talent."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">MK</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria K.</p>
                    <p className="text-sm text-muted-foreground">Startup Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "The mentorship program gave me confidence to apply for senior roles. Now I'm helping other devs do
                  the same."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jordan D.</p>
                    <p className="text-sm text-muted-foreground">Senior Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
            <p className="text-muted-foreground">
              Career advice, community updates, and resources to help you grow as a developer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Badge variant="secondary" className="mb-3">
                  Community
                </Badge>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/blog/getting-started-with-forgestack">
                    Getting Started with Forgestack: A Developer's Guide
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Everything you need to know to join our community and start your journey.
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Alex Johnson</span>
                  <span>5 min read</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Badge variant="secondary" className="mb-3">
                  Career
                </Badge>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/blog/5-interview-tips-junior-developers">
                    5 Interview Tips Every Junior Developer Should Know
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Practical advice from senior developers who want to help you succeed.
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Sarah Chen</span>
                  <span>7 min read</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Badge variant="secondary" className="mb-3">
                  Career
                </Badge>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  <Link href="/blog/building-portfolio-that-stands-out">
                    Building a Portfolio That Actually Gets You Hired
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn what hiring managers really look for in developer portfolios.
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Mike Rodriguez</span>
                  <span>10 min read</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-muted-foreground mb-8">
            Get updates on new opportunities, community events, and platform features.
          </p>

          <NewsletterForm source="homepage" placeholder="Enter your email" buttonText="Subscribe" />
        </div>
      </section>
    </div>
  )
}
