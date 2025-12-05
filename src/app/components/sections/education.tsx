'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight-aceternity'
import { SpotlightIbelick } from '@/components/ui/spotlight-ibelick'

interface Education {
  degree: string
  institution: string
  period: string
  description?: string
}

const education: Education[] = [
  {
    degree: 'MERN Stack Development',
    institution: 'Brototype',
    period: '2024 – 2025',
    description: 'Comprehensive full-stack development program covering React.js, Node.js, Express.js, MongoDB, and modern web development practices.'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University of Calicut',
    period: '2022',
    description: 'Foundation in computer science, programming, database management, and software engineering principles.'
  },
]

export function EducationSection() {
  return (
    <section id="education" className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <SpotlightIbelick 
        className="absolute inset-0 z-0" 
        spotlightColor="rgba(59, 130, 246, 0.1)"
        size={600}
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
            Education
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Academic foundation and professional training that shaped my expertise
            in modern web development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="glass-strong p-8 hover-lift relative overflow-hidden">
                {index < education.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent" />
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text-purple mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-neutral-400 mb-4">
                        <span className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-blue-400" />
                          {edu.institution}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    {edu.description && (
                      <p className="text-neutral-300 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

