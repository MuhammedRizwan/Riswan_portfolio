'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight-aceternity'
import { SpotlightIbelick } from '@/components/ui/spotlight-ibelick'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/MuhammedRizwan', color: 'hover:text-gray-400' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/muhammedrizwan-pannicode/', color: 'hover:text-blue-400' },
  { name: 'Email', icon: Mail, href: 'mailto:mhdrizwanpkd@gmail.com', color: 'hover:text-purple-400' },
]

export function ContactSection() {

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
      <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="white" />
      <SpotlightIbelick 
        className="absolute inset-0 z-0" 
        spotlightColor="rgba(168, 85, 247, 0.15)"
        size={800}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s collaborate on your next project. I&apos;m always open to discussing
            new opportunities and innovative ideas.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="glass-strong p-8 hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text-purple mb-6">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a
                      href="mailto:mhdrizwanpkd@gmail.com"
                      className="text-neutral-400 hover:text-purple-400 transition-colors"
                    >
                      mhdrizwanpkd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <a
                      href="tel:+918129978459"
                      className="text-neutral-400 hover:text-blue-400 transition-colors"
                    >
                      +91 8129978459
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-neutral-400">Kozhikode, Kerala, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-strong p-8 hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text-purple mb-6">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-14 h-14 rounded-full glass flex items-center justify-center text-neutral-400 transition-colors ${social.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

