"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle,
  DollarSign,
  Clock,
  Shield,
  Users,
  Loader2,
  Check,
  AlertCircle,
  ArrowRight,
  Badge,
} from "lucide-react"
import { useState } from "react"

export default function StartupsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    skills: "",
    roleDescription: "",
    timeline: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    console.log("Form data being submitted:", formData)

    try {
      const response = await fetch("/api/submit-startup-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("Response status:", response.status)
      console.log("Response headers:", response.headers)

      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        const errorText = await response.text()
        console.error("Server error response:", errorText)
        throw new Error(`Server error: ${response.status} - ${errorText}`)
      }

      const result = await response.json()
      console.log("Parsed result:", result)

      if (result.success) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          skills: "",
          roleDescription: "",
          timeline: "",
        })
      } else {
        setError(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Full error details:", error)
      if (error instanceof Error) {
        setError(`Error: ${error.message}`)
      } else {
        setError("Network error. Please check your connection and try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="w-fit bg-primary/20 text-primary border-primary/30">For Companies & Startups</Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-pretty">
                Hire Vetted Developers
                <span className="block text-primary">Without the Recruiter Fees</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Access Africa's most talented developers and designers. Pre-vetted, ready to work, and aligned with your
                mission.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link href="#contact">
                  Start Hiring Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="px-4 py-20 bg-card/50 border-t border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Why Companies Choose Forgestack</h2>
            <p className="text-lg text-muted-foreground mt-4">Cut costs, cut timelines, cut the hassle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "No Recruiter Fees",
                description: "Save 20-30% on hiring costs. Only pay for talent you hire, not for the process.",
              },
              {
                icon: Clock,
                title: "Fast Matching",
                description: "Get matched with qualified candidates in days, not weeks of traditional recruiting.",
              },
              {
                icon: Shield,
                title: "Pre-Vetted Talent",
                description: "Every developer is verified with real assessments and community backing.",
              },
              {
                icon: Users,
                title: "Direct Access",
                description: "Interview candidates directly. No middlemen, no gatekeepers, just talent.",
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="border-primary/20 bg-background">
                <CardContent className="pt-8">
                  <benefit.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">The Hiring Process</h2>
            <p className="text-lg text-muted-foreground mt-4">From request to onboarded in 7 days</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Submit Request",
                description: "Tell us about the role, required skills, and timeline.",
                icon: CheckCircle,
              },
              {
                step: 2,
                title: "Get Matches",
                description: "Receive 3-5 pre-vetted developer profiles with portfolios.",
                icon: Users,
              },
              {
                step: 3,
                title: "Interview",
                description: "Schedule and conduct interviews directly with candidates.",
                icon: Clock,
              },
              {
                step: 4,
                title: "Onboard",
                description: "Start working with your selected developer immediately.",
                icon: CheckCircle,
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

      {/* Features List */}
      <section className="px-4 py-20 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What You Get</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Verified Skills Portfolio",
                description: "Review developer portfolios backed by real skill assessments and project history.",
              },
              {
                title: "Transparent Pricing",
                description: "No hidden fees. Simple, straightforward pricing with no recruiter commissions.",
              },
              {
                title: "Flexible Arrangements",
                description: "Full-time, part-time, contract, or project-based work options to fit your needs.",
              },
              {
                title: "Community Support",
                description: "Developers are backed by our mentorship network and community, ensuring quality.",
              },
              {
                title: "Performance Tracking",
                description: "Transparent communication and collaboration tools to track progress.",
              },
              {
                title: "Scalable Hiring",
                description: "Hire one developer or a whole team. We scale with your growth needs.",
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

      {/* Success Stories */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Success Stories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "We found our entire frontend team through Forgestack. Quality is exceptional.",
                author: "Sarah Chen",
                role: "CTO, TechFlow",
                icon: "SC",
              },
              {
                quote: "Saved 25% on hiring costs and found talent faster than traditional recruiting.",
                author: "Marcus O.",
                role: "Founder, StartupXYZ",
                icon: "MO",
              },
              {
                quote: "The developers are not just skilled, they're genuinely invested in our mission.",
                author: "Amara K.",
                role: "CEO, Design House",
                icon: "AK",
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-primary/20 bg-background">
                <CardContent className="pt-8">
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

      {/* Contact Form */}
      <section id="contact" className="px-4 py-16 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">{isSubmitted ? "Thank You!" : "Ready to Hire?"}</CardTitle>
              <p className="text-center text-muted-foreground">
                {isSubmitted
                  ? "We've received your request and will be in touch within 24 hours with potential matches."
                  : "Tell us about your hiring needs and we'll connect you with the right developers."}
              </p>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="mb-4 p-4 bg-destructive/10 border border-destructive/20 rounded-md flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-destructive font-medium">Submission Failed</p>
                    <p className="text-sm text-destructive/80">{error}</p>
                  </div>
                </div>
              )}

              {isSubmitted ? (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8 text-primary" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">What happens next?</h3>
                    <div className="space-y-3 text-sm text-muted-foreground text-left">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-primary">1</span>
                        </div>
                        <p>
                          We'll review your requirements and match you with 3-5 qualified developers from our community
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-primary">2</span>
                        </div>
                        <p>
                          You'll receive developer profiles with portfolios, skills, and availability within 24 hours
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-primary">3</span>
                        </div>
                        <p>Schedule interviews directly with candidates you're interested in - no middleman involved</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        📧 <strong>Check your email!</strong> We've sent you a confirmation with all the details.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <p className="text-sm text-muted-foreground mb-4">
                      Need immediate assistance? Contact us directly:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="mailto:forgestack076@gmail.com">Email Us</Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://chat.whatsapp.com/Hyy3Ik3IWkDCE7zvL6KGZw"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Your Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jane Smith"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company *</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Startup"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@acme.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">What skills are you looking for? *</label>
                    <Input
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      placeholder="React, Node.js, Python, etc."
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Tell us about the role *</label>
                    <Textarea
                      name="roleDescription"
                      value={formData.roleDescription}
                      onChange={handleInputChange}
                      placeholder="Describe the position, your company, and what you're looking for in a candidate."
                      rows={4}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Timeline</label>
                    <Input
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      placeholder="When do you need to fill this role?"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Get Matched with Developers"
                    )}
                  </Button>
                </form>
              )}

              {!isSubmitted && (
                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-sm text-muted-foreground mb-4">Prefer to talk directly? Reach out to us:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="mailto:forgestack076@gmail.com">Email: forgestack076@gmail.com</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="tel:+2348141970149">Call: +234 814 197 0149</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
