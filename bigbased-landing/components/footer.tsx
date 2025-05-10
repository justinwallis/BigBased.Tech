import Link from "next/link"
import { Code, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-black/20 dark:border-primary/20 pt-12 pb-6 relative transition-colors duration-300">
      {/* Diagonal grid pattern */}
      <div className="diagonal-grid-pattern"></div>

      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/5 dark:from-primary/5 to-transparent transition-colors duration-300"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-black/10 dark:bg-primary/10 transition-colors duration-300"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-black dark:text-primary font-bold text-lg">B</div>
                </div>
                <svg viewBox="0 0 40 40" className="w-full h-full text-black dark:text-primary">
                  <path d="M20 0L0 10v20l20 10 20-10V10L20 0z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 5L20 0l10 5-10 5-10-5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-black dark:text-primary font-serif text-xl">BigBased</span>
            </div>
            <p className="text-sm text-black/80 dark:text-primary/80 max-w-xs">
              Building sovereign technology for a decentralized future. Break the Matrix. Build the Kingdom.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="#"
                className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-black dark:text-primary font-serif text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors text-sm"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-black dark:text-primary font-serif text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors text-sm"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-black dark:text-primary font-serif text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-black dark:text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@bigbased.tech"
                  className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors text-sm"
                >
                  contact@bigbased.tech
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-black dark:text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-black/70 dark:text-primary/70 hover:text-black dark:hover:text-primary transition-colors text-sm"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="mt-4 text-sm text-black/80 dark:text-primary/80">
                <p>650+ Sovereign Domains</p>
                <p>Decentralized Tech</p>
                <p>Based to the Bone</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10 dark:border-primary/10 my-6 relative z-10"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="w-4 h-4 text-black dark:text-primary mr-2" strokeWidth={1} />
            <span className="text-xs text-black/70 dark:text-primary/70">Coded by Sovereigns, For Sovereigns</span>
          </div>
          <div className="text-xs text-black/70 dark:text-primary/70">
            &copy; {currentYear} BigBased. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
