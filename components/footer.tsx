import Link from "next/link"
import { Twitter, Github, MessageCircle, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/forgestack-logo.png"
                alt="Forgestack Logo"
                className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 transition-all duration-300 hover:scale-105"
              />
              <span className="font-bold text-2xl text-[#00B450]">Forgestack</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting developers with opportunities, building community, breaking down barriers.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:forgestack076@gmail.com" className="hover:text-primary transition-colors">
                  forgestack076@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link href="tel:+2348141970149" className="hover:text-primary transition-colors">
                  +234 814 197 0149
                </Link>
              </div>
            </div>
          </div>

          {/* For Developers */}
          <div className="space-y-4">
            <h3 className="font-semibold">For Developers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/developers" className="hover:text-primary transition-colors">
                  Join as Developer
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Developer Resources
                </Link>
              </li>
              <li>
                <Link
                  href="https://chat.whatsapp.com/Hyy3Ik3IWkDCE7zvL6KGZw"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mentorship Program
                </Link>
              </li>
            </ul>
          </div>

          {/* For Startups */}
          <div className="space-y-4">
            <h3 className="font-semibold">For Startups</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/startups" className="hover:text-primary transition-colors">
                  Hire Developers
                </Link>
              </li>
              <li>
                <Link href="/startups#contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="mailto:forgestack076@gmail.com" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Forgestack. All rights reserved.</p>

          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link
              href="https://discord.gg/ACAVQcsYVS"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link
              href="https://x.com/forgestack36138"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://github.com/forgestack"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:forgestack076@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
