"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, DollarSign, Clock, Shield, Users, Loader2, Check, AlertCircle } from "lucide-react"
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
      <section className="px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Hire Great Developers
            <span className="block text-primary">Without the Hassle</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Access pre-vetted developers who are hungry to contribute to your startup's success. No recruiter fees, no
            lengthy processes.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="#contact" className="scroll-smooth">
              Start Hiring Today
            </Link>
          </Button>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Startups Choose Forgestack</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Recruiter Fees</h3>
                <p className="text-muted-foreground text-sm">
                  Save thousands on hiring costs. Pay only for the talent you hire.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fast Matching</h3>
                <p className="text-muted-foreground text-sm">
                  Get matched with qualified candidates in days, not weeks.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Pre-vetted Talent</h3>
                <p className="text-muted-foreground text-sm">
                  Every developer is verified and supported by our community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Culture Fit</h3>
                <p className="text-muted-foreground text-sm">
                  Find developers who align with your startup's values and mission.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need to Hire Smart</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Skill-based Matching</h3>
                    <p className="text-muted-foreground text-sm">
                      Find developers with the exact technical skills your project needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Portfolio Reviews</h3>
                    <p className="text-muted-foreground text-sm">
                      See real projects and code samples before making contact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Direct Communication</h3>
                    <p className="text-muted-foreground text-sm">
                      Talk directly with candidates without middlemen or gatekeepers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Community Backing</h3>
                    <p className="text-muted-foreground text-sm">
                      Developers come with community support and ongoing mentorship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Flexible Arrangements</h3>
                    <p className="text-muted-foreground text-sm">
                      Full-time, part-time, contract, or project-based work options.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Success Story</h3>
              <blockquote className="text-muted-foreground italic mb-4">
                "We hired our entire frontend team through Forgestack. The developers were not only skilled but also
                genuinely excited about our mission. Best hiring decision we've made."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">SC</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">CTO, TechFlow</p>
                </div>
              </div>
            </div>
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
