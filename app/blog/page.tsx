import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: "getting-started-with-forgestack",
    title: "Getting Started with Forgestack: A Developer's Guide",
    excerpt: "Everything you need to know to join our community and start your journey to landing your next role.",
    content: "Full blog post content would go here...",
    author: "Alex Johnson",
    date: "2025-01-10",
    readTime: "5 min read",
    category: "Community",
    tags: ["getting-started", "community", "developers"],
    featured: true,
  },
  {
    id: "5-interview-tips-junior-developers",
    title: "5 Interview Tips Every Junior Developer Should Know",
    excerpt: "Practical advice from senior developers who've been in your shoes and want to help you succeed.",
    content: "Full blog post content would go here...",
    author: "Sarah Chen",
    date: "2025-01-08",
    readTime: "7 min read",
    category: "Career",
    tags: ["interviews", "junior-developers", "career-advice"],
    featured: false,
  },
  {
    id: "building-portfolio-that-stands-out",
    title: "Building a Portfolio That Actually Gets You Hired",
    excerpt: "Learn what hiring managers really look for in developer portfolios and how to showcase your best work.",
    content: "Full blog post content would go here...",
    author: "Mike Rodriguez",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "Career",
    tags: ["portfolio", "projects", "hiring"],
    featured: true,
  },
  {
    id: "forgestack-community-november-highlights",
    title: "November Community Highlights: 50+ Developers Hired!",
    excerpt: "Celebrating our community's success stories and the amazing connections made this month.",
    content: "Full blog post content would go here...",
    author: "Forgestack Team",
    date: "2024-12-01",
    readTime: "3 min read",
    category: "Community",
    tags: ["community", "success-stories", "monthly-update"],
    featured: false,
  },
  {
    id: "mastering-technical-interviews",
    title: "Mastering Technical Interviews: A Complete Guide",
    excerpt: "From coding challenges to system design, everything you need to ace your next technical interview.",
    content: "Full blog post content would go here...",
    author: "Jordan Davis",
    date: "2024-12-28",
    readTime: "12 min read",
    category: "Career",
    tags: ["technical-interviews", "coding-challenges", "preparation"],
    featured: false,
  },
  {
    id: "remote-work-tips-developers",
    title: "Remote Work Success: Tips from Distributed Teams",
    excerpt: "How to thrive as a remote developer and build strong relationships with your distributed team.",
    content: "Full blog post content would go here...",
    author: "Lisa Park",
    date: "2024-12-25",
    readTime: "8 min read",
    category: "Career",
    tags: ["remote-work", "productivity", "communication"],
    featured: false,
  },
]

const categories = ["All", "Community", "Career", "Technical", "Resources"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Developer
            <span className="block text-primary">Resources & Updates</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Career advice, community updates, technical guides, and everything you need to level up as a developer.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-4 py-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="px-4 py-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest developer resources, community updates, and career tips delivered to your inbox.
          </p>

          <NewsletterForm source="blog" placeholder="Enter your email" buttonText="Subscribe" />
        </div>
      </section>
    </div>
  )
}
