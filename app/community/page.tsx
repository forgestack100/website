import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Calendar, BookOpen, Users, ExternalLink } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Join Our
            <span className="block text-primary">Developer Community</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Connect with fellow developers, share experiences, get mentorship, and discover opportunities in a
            supportive environment.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="https://discord.gg/ACAVQcsYVS" target="_blank" rel="noopener noreferrer">
              Join Discord Server
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Discord Section */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Developer Home Base</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our Discord server is where the magic happens. It's more than just a chat room—it's a thriving community
                where developers support each other, share opportunities, and grow together.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Daily Discussions</h3>
                    <p className="text-muted-foreground text-sm">
                      Share code, ask questions, and get help from experienced developers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Job Opportunities</h3>
                    <p className="text-muted-foreground text-sm">
                      Get first access to job postings from startups in our network.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Learning Resources</h3>
                    <p className="text-muted-foreground text-sm">Access curated learning materials and study groups.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Events & Workshops</h3>
                    <p className="text-muted-foreground text-sm">
                      Join virtual events, coding sessions, and career workshops.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#5865F2]/10 p-8 rounded-lg border border-[#5865F2]/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#5865F2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Join 2,500+ Developers</h3>
                <p className="text-muted-foreground mb-6">
                  Be part of a growing community that's changing how developers find opportunities.
                </p>
                <Button asChild className="bg-[#5865F2] hover:bg-[#5865F2]/90">
                  <Link href="https://discord.gg/ACAVQcsYVS" target="_blank" rel="noopener noreferrer">
                    Join Discord
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Community Stories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "The Forgestack community helped me transition from bootcamp to my first dev job. The support and
                  encouragement made all the difference."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mike Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Frontend Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "I love how welcoming this community is. No judgment, just people helping people. It's rare to find
                  this in tech."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">LP</span>
                  </div>
                  <div>
                    <p className="font-semibold">Lisa Park</p>
                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  "The mentorship program connected me with a senior dev who helped me level up my skills. Now I'm
                  mentoring others too!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">TJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Taylor Johnson</p>
                    <p className="text-sm text-muted-foreground">Backend Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Upcoming Events</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Weekly Code Review Session</CardTitle>
                    <p className="text-muted-foreground">Every Friday at 3 PM EST</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Next Session</p>
                    <p className="font-semibold">Dec 15, 2024</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bring your code for constructive feedback from the community. Great for improving your skills and
                  getting different perspectives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Career Workshop: Interview Prep</CardTitle>
                    <p className="text-muted-foreground">Monthly workshop</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Next Workshop</p>
                    <p className="font-semibold">Dec 20, 2024</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Practice technical interviews, get tips on behavioral questions, and learn how to showcase your
                  projects effectively.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>New Year Networking Event</CardTitle>
                    <p className="text-muted-foreground">Special event</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Save the Date</p>
                    <p className="font-semibold">Jan 5, 2025</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start the year right! Meet fellow developers, share your goals, and connect with startups looking to
                  hire.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mentorship CTA */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Mentorship?</h2>
          <p className="text-muted-foreground mb-8">
            Get paired with an experienced developer who can guide your career growth and help you navigate the tech
            industry.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="https://chat.whatsapp.com/Hyy3Ik3IWkDCE7zvL6KGZw" target="_blank" rel="noopener noreferrer">
              Apply for Mentorship
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
