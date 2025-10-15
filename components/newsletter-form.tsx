"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Check, AlertCircle } from "lucide-react"

interface NewsletterFormProps {
  source?: string
  placeholder?: string
  buttonText?: string
}

export function NewsletterForm({
  source = "homepage",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/subscribe-newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source }),
      })

      const responseData = await response.json()
      if (!response.ok || !responseData.success) {
        throw new Error(responseData.message ?? "Subscription failed.")
      }

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setEmail("")
      } else {
        setError(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setError("Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center gap-2 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
        <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
        <p className="text-sm text-green-800 dark:text-green-200 font-medium">
          Thanks for subscribing! Check your email.
        </p>
      </div>
    )
  }

  return (
    <div>
      {error && (
        <div className="mb-4 flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1"
          required
          disabled={isSubmitting}
        />
        <Button type="submit" disabled={isSubmitting || !email.trim()}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            buttonText
          )}
        </Button>
      </form>
    </div>
  )
}
