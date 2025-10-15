import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Twitter, Phone } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Mission</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Breaking down barriers in tech hiring and creating opportunities for developers who deserve a chance to
            shine.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Forgestack Exists</h2>
          </div>

          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              The tech industry has a problem. Too many talented developers are overlooked because they don't fit the
              traditional mold—they're self-taught, career changers, bootcamp grads, or simply don't have the "right"
              credentials on paper.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Meanwhile, startups struggle to find good developers without paying massive recruiter fees or navigating
              lengthy hiring processes that often miss the best candidates.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Forgestack bridges this gap. We believe that skills, passion, and potential matter more than pedigree. Our
              community-driven approach connects hungry developers with growing startups, creating opportunities that
              benefit everyone.
            </p>

            <div className="text-center mt-12">
              <blockquote className="text-2xl font-semibold text-foreground italic">
                "Every developer deserves a chance to prove their worth."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Meritocracy</h3>
                <p className="text-muted-foreground">
                  Skills and potential matter more than credentials or background. We judge developers by what they can
                  build, not where they went to school.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We believe in the power of developers helping developers. Our community is built on mutual support and
                  shared growth.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  No hidden fees, no gatekeepers, no black box processes. Everything we do is open and honest.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have questions, feedback, or just want to chat? We'd love to hear from you.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <Button asChild variant="outline" className="flex items-center gap-2 bg-transparent">
              <Link href="mailto:forgestack076@gmail.com">
                <Mail className="h-4 w-4" />
                Email Us
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex items-center gap-2 bg-transparent">
              <Link href="tel:+2348141970149">
                <Phone className="h-4 w-4" />
                Call Us
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex items-center gap-2 bg-transparent">
              <Link href="https://x.com/forgestack36138" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                Follow Us
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex items-center gap-2 bg-transparent">
              <Link href="https://discord.gg/ACAVQcsYVS" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                Join Discord
              </Link>
            </Button>
          </div>

          <div className="mt-8 p-6 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                <span>forgestack076@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+234 814 197 0149</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Twitter className="h-4 w-4" />
                <span>@forgestack36138</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
