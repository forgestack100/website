import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Twitter, Zap, Users, Heart, Target, ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative px-4 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="w-fit bg-primary/20 text-primary border-primary/30">About Forgestack</Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-pretty">
                Africa's Most Trusted
                <span className="block text-primary">Opportunity Pipeline</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                We're building a world where every developer and designer in Africa has access to real opportunities,
                fair compensation, and a supportive community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 border-t border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">The Problem We Solve</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-primary text-2xl font-bold">•</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">For Developers & Designers</h3>
                    <p className="text-muted-foreground">
                      Talented individuals overlooked due to lack of traditional credentials, forced to work through
                      expensive recruiters, or trapped in gatekeeping systems.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary text-2xl font-bold">•</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">For Companies</h3>
                    <p className="text-muted-foreground">
                      Struggling to find quality talent while paying excessive recruiter fees, dealing with lengthy
                      hiring processes, and missing out on amazing candidates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-primary/20 bg-card">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-6">Our Solution</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Direct Connections</p>
                      <p className="text-sm text-muted-foreground">
                        Cut out the middlemen. Direct access between talent and companies.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Skill-Based Matching</p>
                      <p className="text-sm text-muted-foreground">
                        AI-powered matching based on real skills, not credentials.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Fair Compensation</p>
                      <p className="text-sm text-muted-foreground">
                        No recruiter fees. Developers keep what they earn.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Community Support</p>
                      <p className="text-sm text-muted-foreground">
                        Mentorship, peer support, and continuous growth opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create Africa's most trusted opportunity pipeline for tech creatives—empowering developers,
                  designers, and digital creators with real work, mentorship, and pathways to income while helping
                  companies find vetted talent faster.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where geography, background, and credentials don't limit opportunity. Where every person with
                  skills has access to meaningful work, fair pay, and a community that supports their growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground mt-4">Everything we do is guided by these principles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Meritocracy</h3>
                <p className="text-muted-foreground">
                  Skill and potential matter more than credentials or background. We judge by capability, not pedigree.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  We believe in the power of people helping people. Growth happens together, not alone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  No hidden fees, no gatekeepers, no black boxes. Everything we do is open and honest.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-gradient-to-r from-primary/10 via-background to-primary/10 border-y">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Our Impact So Far</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Developers Matched" },
              { number: "50+", label: "Companies Hiring" },
              { number: "$2M+", label: "Income Generated" },
              { number: "200+", label: "Active Projects" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Meet the Team</h2>
            <p className="text-lg text-muted-foreground mt-4">Built by developers, for developers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Familua Victor",
                role: "CEO & Founder",
                bio: "Passionate about removing barriers in tech. Building the future of opportunity in Africa.",
                email: "familuavictor06@gmail.com",
                socials: [
                  { type: "x", url: "https://x.com/heritageolami", label: "@heritageolami" },
                  { type: "linkedin", url: "https://www.linkedin.com/in/victor-familua-9a8a74389/", label: "LinkedIn" },
                ],
              },
              {
                name: "Victor Faruna",
                role: "Co-Founder",
                bio: "Driving product vision and building solutions that empower the African tech community.",
                socials: [
                  { type: "linkedin", url: "https://www.linkedin.com/in/victor-faruna-53b20a306/", label: "LinkedIn" },
                ],
              },
              {
                name: "Ajayi Korede",
                role: "Marketing Lead",
                bio: "Building brand presence and connecting Forgestack with talent and companies.",
                socials: [],
              },
              {
                name: "Aneke Jesse",
                role: "Lead Brand Designer",
                bio: "Crafting the visual identity and design systems that define Forgestack.",
                socials: [],
              },
            ].map((member, idx) => (
              <Card key={idx} className="border-primary/20 bg-background">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-primary text-sm text-center font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-center text-sm mb-4">{member.bio}</p>

                  {member.socials && member.socials.length > 0 && (
                    <div className="flex justify-center gap-3 mt-4 pt-4 border-t border-primary/20">
                      {member.socials.map((social, socialIdx) => (
                        <a
                          key={socialIdx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors text-xs font-medium hover:underline"
                          title={social.label}
                        >
                          {social.type === "x" && <Twitter className="h-4 w-4 inline mr-1" />}
                          {social.label}
                        </a>
                      ))}
                    </div>
                  )}

                  {member.email && (
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-primary hover:text-primary/80 transition-colors text-xs font-medium flex items-center justify-center gap-2"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-card border border-primary/20 rounded-lg text-center">
            <p className="text-lg text-muted-foreground mb-4">
              We're hiring! Join us in building Africa's opportunity pipeline.
            </p>
            <Button asChild variant="outline">
              <Link href="mailto:forgestack076@gmail.com">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-card/50 border-t">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mt-4">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
            <Button asChild className="bg-primary hover:bg-primary/90 h-12">
              <Link href="mailto:forgestack076@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 h-12">
              <Link href="tel:+2348141970149">
                <Phone className="h-5 w-5 mr-2" />
                Call
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 bg-transparent">
              <Link href="https://x.com/forgestack36138" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 bg-transparent">
              <Link href="https://discord.gg/ACAVQcsYVS" target="_blank" rel="noopener noreferrer">
                Discord
              </Link>
            </Button>
          </div>

          <Card className="border-primary/20 bg-background">
            <CardContent className="pt-8">
              <h3 className="font-semibold text-lg mb-6 text-center">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 justify-center">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">forgestack076@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+234 814 197 0149</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Twitter className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">@forgestack36138</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-20 bg-gradient-to-r from-primary/10 via-background to-primary/10 border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Forgestack Movement</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Help us build Africa's most trusted opportunity pipeline for tech talent.
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
