import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// Mock blog data - same as in main blog page
const blogPosts = [
  {
    id: "getting-started-with-forgestack",
    title: "Getting Started with Forgestack: A Developer's Guide",
    excerpt: "Everything you need to know to join our community and start your journey to landing your next role.",
    author: "Alex Johnson",
    date: "2025-01-10",
    readTime: "5 min read",
    category: "Community",
    tags: ["getting-started", "community", "developers"],
  },
  {
    id: "5-interview-tips-junior-developers",
    title: "5 Interview Tips Every Junior Developer Should Know",
    excerpt: "Practical advice from senior developers who've been in your shoes and want to help you succeed.",
    author: "Sarah Chen",
    date: "2025-01-08",
    readTime: "7 min read",
    category: "Career",
    tags: ["interviews", "junior-developers", "career-advice"],
  },
  {
    id: "building-portfolio-that-stands-out",
    title: "Building a Portfolio That Actually Gets You Hired",
    excerpt: "Learn what hiring managers really look for in developer portfolios and how to showcase your best work.",
    author: "Mike Rodriguez",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "Career",
    tags: ["portfolio", "projects", "hiring"],
  },
  {
    id: "forgestack-community-november-highlights",
    title: "November Community Highlights: 50+ Developers Hired!",
    excerpt: "Celebrating our community's success stories and the amazing connections made this month.",
    author: "Forgestack Team",
    date: "2024-12-01",
    readTime: "3 min read",
    category: "Community",
    tags: ["community", "success-stories", "monthly-update"],
  },
]

const validCategories = ["community", "career", "technical", "resources"]

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category.toLowerCase()

  if (!validCategories.includes(category)) {
    notFound()
  }

  const categoryPosts = blogPosts.filter((post) => post.category.toLowerCase() === category)

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="text-center">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              {categoryTitle}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{categoryTitle} Articles</h1>
            <p className="text-xl text-muted-foreground">
              {category === "community" && "Updates, highlights, and stories from our developer community."}
              {category === "career" && "Career advice, interview tips, and professional development resources."}
              {category === "technical" && "Technical tutorials, best practices, and deep-dive guides."}
              {category === "resources" && "Tools, resources, and references to help you grow as a developer."}
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="px-4 py-8">
        <div className="container mx-auto max-w-6xl">
          {categoryPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
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
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">No articles found</h2>
              <p className="text-muted-foreground mb-8">
                We don't have any {category} articles yet, but we're working on it!
              </p>
              <Button asChild>
                <Link href="/blog">Browse All Articles</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
