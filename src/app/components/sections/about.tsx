'use client'

import { motion } from 'framer-motion'
import { Spotlight } from '@/components/ui/spotlight-aceternity'
import { SpotlightIbelick } from '@/components/ui/spotlight-ibelick'
import { Card } from '@/components/ui/card'

const skills = [
  { name: 'React.js', level: 92, color: 'from-blue-400 to-cyan-400' },
  { name: 'Next.js', level: 90, color: 'from-white to-neutral-400' },
  { name: 'Node.js', level: 88, color: 'from-green-400 to-emerald-400' },
  { name: 'Express.js', level: 87, color: 'from-gray-400 to-gray-600' },
  { name: 'MongoDB', level: 85, color: 'from-green-500 to-teal-500' },
  { name: 'PostgreSQL', level: 80, color: 'from-blue-600 to-indigo-600' },
  { name: 'Redux', level: 85, color: 'from-purple-400 to-pink-400' },
  { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-blue-400' },
  { name: 'TypeScript', level: 82, color: 'from-blue-500 to-indigo-500' },
  { name: 'AWS', level: 75, color: 'from-orange-400 to-yellow-400' },
  { name: 'Socket.IO', level: 80, color: 'from-purple-500 to-indigo-500' },
  { name: 'Git/GitHub', level: 88, color: 'from-gray-500 to-gray-700' },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900">
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
            About Me
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Forward-thinking MERN Stack Developer with hands-on experience building scalable web applications
            using React.js, Node.js, Express.js, and MongoDB. Strong foundation in REST APIs, authentication,
            clean architecture, and cloud deployments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-strong p-8 hover-lift h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text-purple">Who I Am</h3>
              <p className="text-neutral-300 leading-relaxed mb-4">
                I&apos;m a MERN Stack Developer from Kozhikode, Kerala, specializing in building
                scalable web applications. With proven ability to deliver performance-optimized features,
                reduce API latency, and collaborate across teams.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                My passion lies in solving real-world problems, writing clean code, and continuously
                learning modern technologies to create impactful digital solutions.
              </p>
            </Card>
          </motion.div>

          {/* Values Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-strong p-8 hover-lift h-full">
              <h3 className="text-2xl font-bold mb-4 gradient-text-purple">What I Value</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Clean, maintainable code architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>User-centric design and experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Continuous learning and innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>Performance and scalability</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-8 gradient-text text-center">Technical Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass p-6 hover-lift">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <span className="text-sm text-neutral-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

