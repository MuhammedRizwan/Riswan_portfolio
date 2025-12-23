'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight-aceternity'
import { SpotlightIbelick } from '@/components/ui/spotlight-ibelick'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  techStack: string[]
  liveLink?: string
  githubLink?: string
  image: string
}

// Major Projects
const majorProjects: Project[] = [
  {
    title: 'Heaven Finder',
    description: 'Travel package system with admin automation, user/agent flow, real-time chat using Socket.IO, reviews, and Razorpay payments. Built with clean architecture and scalable API layers. Full-stack with separate client and server repositories.',
    techStack: ['Next.js', 'Redux', 'MongoDB', 'TypeScript', 'Tailwind', 'Socket.IO', 'AWS'],
    liveLink: 'https://heaven-finder.riswan.space/',
    githubLink: 'https://github.com/MuhammedRizwan/project-client',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    title: 'NextTick',
    description: 'E-Commerce platform for watches with admin dashboard for products, orders, and coupons. Features OTP login, JWT authentication, Razorpay integration. Deployed with Nginx + AWS EC2.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'AWS', 'Nginx'],
    liveLink: 'https://next-tick.riswan.space/',
    githubLink: 'https://github.com/MuhammedRizwan/NextTick',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop'
  },
]

// Mini Projects
const miniProjects: Project[] = [
  {
    title: 'Quiz Application',
    description: 'Interactive quiz platform built with Next.js Server-Side Rendering for optimal performance and SEO.',
    techStack: ['Next.js', 'SSR', 'React'],
    liveLink: 'https://quiz.riswan.space/',
    githubLink: 'https://github.com/MuhammedRizwan/Quiz-app-next-js',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop'
  },
  {
    title: 'Inventory App',
    description: 'Complete inventory management system with real-time updates, product tracking, and analytics dashboard. Full-stack application with separate frontend and backend repositories.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/MuhammedRizwan/inventory_frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    title: 'Article Management Platform',
    description: 'Content management system for creating, editing, and publishing articles with rich text editor and categorization. Full-stack application with separate frontend and backend.',
    techStack: ['Next.js', 'React', 'MongoDB'],
    githubLink: 'https://github.com/MuhammedRizwan/article-frontend',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop'
  },
  {
    title: 'OLX Clone',
    description: 'Marketplace platform for buying and selling products with user authentication, product listings, and messaging system.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/MuhammedRizwan/Olx-Clone',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
      <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="white" />
      <SpotlightIbelick 
        className="absolute inset-0 z-0" 
        spotlightColor="rgba(236, 72, 153, 0.1)"
        size={700}
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
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            A collection of premium projects showcasing modern web development
            and innovative solutions.
          </p>
        </motion.div>

        {/* Major Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 gradient-text-purple text-center"
          >
            Major Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {majorProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="glass-strong overflow-hidden hover-lift h-full flex flex-col group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl gradient-text-purple">{project.title}</CardTitle>
                    <CardDescription className="text-neutral-400 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full glass text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-4">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors group/link"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        <span className="text-sm">Live</span>
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors group/link"
                      >
                        <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                        <span className="text-sm">Code</span>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mini Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8 gradient-text-purple text-center"
          >
            Mini Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {miniProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="glass-strong overflow-hidden hover-lift h-full flex flex-col group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl gradient-text-purple">{project.title}</CardTitle>
                    <CardDescription className="text-neutral-400 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full glass text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-4">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors group/link"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        <span className="text-sm">Live</span>
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors group/link"
                      >
                        <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                        <span className="text-sm">Code</span>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
