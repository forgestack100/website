"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MessageSquare, Loader2, Check, AlertCircle, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/submit-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Server error: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setError(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
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
    <div className="flex flex-col min-h-screen">
      <section className="relative px-4 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="w-fit bg-primary/20 text-primary border-primary/30">Get In Touch</Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-pretty">Let's Talk</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                Have questions, feedback, or want to partner with Forgestack? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Get a response within 24 hours</p>
                <Link href="mailto:forgestack076@gmail.com" className="text-primary font-medium hover:underline">
                  forgestack076@gmail.com
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground mb-4">Call us during business hours</p>
                <Link href="tel:+2348141970149" className="text-primary font-medium hover:underline">
                  +234 814 197 0149
                </Link>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-background">
              <CardContent className="pt-8">
                <MessageSquare className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Chat</h3>
                <p className="text-muted-foreground mb-4">Join our Discord community</p>
                <Link
                  href="https://discord.gg/ACAVQcsYVS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  Discord Server
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary/20 bg-background">
            <CardHeader>
              <CardTitle className="text-2xl">{isSubmitted ? "Thank You!" : "Send us a Message"}</CardTitle>
              <p className="text-muted-foreground">
                {isSubmitted
                  ? "We've received your message and will get back to you soon."
                  : "Fill out the form below and we'll respond as quickly as we can."}
              </p>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-md flex items-start gap-3">
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
                    <h3 className="text-lg font-semibold">Message Received</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out! We typically respond to messages within 24 hours. Check your email for
                      our response.
                    </p>
                  </div>

                  <div className="pt-6 border-t">
                    <p className="text-sm text-muted-foreground mb-4">
                      In the meantime, feel free to explore more or join our community:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild variant="outline" size="sm">
                        <Link href="/">Back to Home</Link>
                      </Button>
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                        <Link href="https://discord.gg/ACAVQcsYVS" target="_blank">
                          Join Discord
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
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
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 py-20 bg-card/50 border-t">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to get matched?",
                answer:
                  "For developers: 2-7 days from profile completion. For companies: 24 hours from form submission.",
              },
              {
                question: "Is Forgestack free to use?",
                answer:
                  "Yes! For developers and designers, Forgestack is completely free. Companies pay on a project basis.",
              },
              {
                question: "Do I need prior experience to join?",
                answer:
                  "No. We welcome self-taught developers, bootcamp graduates, and career changers. We judge you by your skills, not credentials.",
              },
              {
                question: "How are payments handled?",
                answer:
                  "Payments are processed securely. Developers are paid directly for completed work with no recruiter middlemen taking cuts.",
              },
              {
                question: "Can I work part-time or as a contractor?",
                answer:
                  "We offer flexible arrangements including full-time, part-time, contract, and project-based opportunities.",
              },
              {
                question: "Is my data secure?",
                answer: "Yes. We use industry-standard encryption and security protocols to protect all user data.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="border-primary/20 bg-background">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-background to-primary/10 rounded-lg text-center border border-primary/20">
            <p className="text-lg font-semibold mb-4">Didn't find what you're looking for?</p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="https://discord.gg/ACAVQcsYVS" target="_blank">
                Ask in our Discord Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers and companies already using Forgestack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link href="/developers">
                Join as Developer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link href="/startups">
                Hire Talent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
