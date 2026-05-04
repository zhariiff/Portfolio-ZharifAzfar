import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { PageShell } from '../components/layout/PageShell'
import { Card } from '../components/ui/Card'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal'
import { resumeData } from '../data/resumeText'
import { cn } from '../lib/cn'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Skills() {
    const reducedMotion = useReducedMotion()

    return (
        <PageShell
            title="Skills"
            subtitle="Technical proficiencies, soft skills, and language abilities."
        >
            <div className="space-y-16">
                {/* Proficiency Skills */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple" />
                            Proficiency
                        </h2>
                    </ScrollReveal>

                    <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {resumeData.skills.proficiency.map((skill, index) => (
                            <StaggerItem key={skill}>
                                <Card variant="hud" glow className="p-5 h-full">
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            'flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0',
                                            'bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20',
                                            'border border-neon-cyan/20'
                                        )}>
                                            <div className="h-8 w-8">
                                                {getSkillLogo(skill)}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-3">
                                                <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                                                    {skill}
                                                </h3>
                                                <span className="flex-shrink-0 font-mono text-sm text-neon-cyan">
                                                    {getSkillLevel(skill)}%
                                                </span>
                                            </div>
                                            <div className="mt-2 xp-bar">
                                                <motion.div
                                                    className="xp-bar-fill"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${getSkillLevel(skill)}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: reducedMotion ? 0.2 : 1,
                                                        delay: index * 0.05,
                                                        ease: 'easeOut'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Soft Skills */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink" />
                            Soft Skills
                        </h2>
                    </ScrollReveal>

                    <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                        {resumeData.skills.softSkills.map((skill, index) => (
                            <StaggerItem key={skill}>
                                <Card variant="glass" className="p-6 h-full">
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            className={cn(
                                                'flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0',
                                                'bg-gradient-to-br from-neon-purple to-neon-pink'
                                            )}
                                            whileHover={reducedMotion ? {} : { scale: 1.1 }}
                                        >
                                            <span className="text-white text-lg">{getSoftSkillIcon(index)}</span>
                                        </motion.div>
                                        <div>
                                            <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                                                {skill}
                                            </h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                {getSoftSkillDescription(skill)}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Language Proficiency */}
                <section>
                    <ScrollReveal>
                        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-neon-green to-neon-cyan" />
                            Language Proficiency
                        </h2>
                    </ScrollReveal>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {resumeData.skills.languageProficiency.map((lang, index) => (
                            <ScrollReveal key={lang.language} delay={index * 0.1}>
                                <Card variant="hud" glow className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                'flex h-10 w-10 items-center justify-center rounded-full',
                                                'bg-gradient-to-br from-neon-green/20 to-neon-cyan/20',
                                                'border border-neon-green/20'
                                            )}>
                                                <span className="text-xl">{getLanguageFlag(lang.language)}</span>
                                            </div>
                                            <h3 className="font-display font-semibold text-gray-900 dark:text-white">
                                                {lang.language}
                                            </h3>
                                        </div>
                                        <span className={cn(
                                            'px-3 py-1 rounded-full text-xs font-mono',
                                            lang.level === 'Excellent'
                                                ? 'bg-neon-green/10 text-neon-green border border-neon-green/30'
                                                : 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30'
                                        )}>
                                            {lang.level}
                                        </span>
                                    </div>

                                    {/* Language proficiency bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-mono text-gray-500 dark:text-gray-400">
                                            <span>PROFICIENCY</span>
                                            <span>{lang.level === 'Excellent' ? '95%' : '70%'}</span>
                                        </div>
                                        <div className="xp-bar h-2">
                                            <motion.div
                                                className="xp-bar-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: lang.level === 'Excellent' ? '95%' : '70%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: reducedMotion ? 0.2 : 1.2, ease: 'easeOut' }}
                                            />
                                        </div>
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Skills Summary */}
                <section>
                    <ScrollReveal>
                        <Card variant="glass" className="p-8">
                            <div className="text-center">
                                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    Skills Overview
                                </h3>
                                <div className="flex flex-wrap justify-center gap-6">
                                    {[
                                        { label: 'Technical Skills', count: resumeData.skills.proficiency.length, color: 'neon-cyan' },
                                        { label: 'Soft Skills', count: resumeData.skills.softSkills.length, color: 'neon-purple' },
                                        { label: 'Languages', count: resumeData.skills.languageProficiency.length, color: 'neon-green' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center">
                                            <motion.div
                                                className={cn(
                                                    'text-4xl font-display font-bold',
                                                    stat.color === 'neon-cyan' && 'text-neon-cyan',
                                                    stat.color === 'neon-purple' && 'text-neon-purple',
                                                    stat.color === 'neon-green' && 'text-neon-green'
                                                )}
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                            >
                                                {stat.count}
                                            </motion.div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>
                </section>
            </div>
        </PageShell>
    )
}

// Helper functions
function getSkillLogo(skill: string): ReactNode {
    const logos: Record<string, ReactNode> = {
        'Unity': (
            <svg viewBox="0 0 64 64" role="img" aria-label="Unity logo" className="h-full w-full">
                <path fill="#fff" d="M49.7 44.1V19.9L32 9.7l-7.2 12.5-9.8-.1v19.8l9.8-.1L32 54.3l17.7-10.2ZM30 16.4l12.1 7-12.1 7-4-7 4-7Zm-9.2 11.1h8.1l4 6.9-4 6.9h-8.1V27.5Zm9.2 20.1-4-7 4-7 12.1 7-12.1 7Zm7.1-13.2 6.6-3.8v7.6l-6.6-3.8Z" />
            </svg>
        ),
        'Android Studio': (
            <svg viewBox="0 0 64 64" role="img" aria-label="Android Studio logo" className="h-full w-full">
                <path fill="#3DDC84" d="M16 26h32v20a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V26Z" />
                <path stroke="#3DDC84" strokeLinecap="round" strokeWidth="4" d="m20 18-5-8m29 8 5-8" />
                <path fill="#fff" d="M24 35h5v5h-5zm11 0h5v5h-5z" />
                <path fill="#0F9D58" d="M24 16h16a8 8 0 0 1 8 8v2H16v-2a8 8 0 0 1 8-8Z" />
            </svg>
        ),
        'Unreal Engine': (
            <svg viewBox="0 0 64 64" role="img" aria-label="Unreal Engine logo" className="h-full w-full">
                <circle cx="32" cy="32" r="28" fill="#111827" stroke="#fff" strokeWidth="4" />
                <path fill="#fff" d="M18 24c4-6 12-10 24-10-4 2-5 6-5 11v15c0 4 2 6 5 8-6 2-12 2-18 0 3-2 5-5 5-9V24l-6 4v12c0 4 1 7 4 9-6-1-10-6-10-13V27l-4 3c1-3 2-5 5-6Z" />
            </svg>
        ),
        'Capcut': (
            <svg viewBox="0 0 64 64" role="img" aria-label="CapCut logo" className="h-full w-full">
                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M15 17h34L15 47h34M15 47 49 17M15 17l34 30" />
            </svg>
        ),
        'Construct': (
            <svg viewBox="0 0 64 64" role="img" aria-label="Construct logo" className="h-full w-full">
                <circle cx="32" cy="32" r="26" fill="#8FB6C5" />
                <path fill="#254653" d="M32 11a21 21 0 1 0 18 32H36a11 11 0 1 1 0-22h14A21 21 0 0 0 32 11Z" />
                <path fill="#F6FBFF" d="M39 25h13v14H39a7 7 0 0 1 0-14Z" />
            </svg>
        ),
        'HTML, CSS, XML': (
            <svg viewBox="0 0 64 64" role="img" aria-label="HTML CSS XML logo" className="h-full w-full">
                <path fill="#E44D26" d="M9 8h14l2 41-9 3-9-3 2-41Z" />
                <path fill="#1572B6" d="M25 8h14l2 41-9 3-9-3 2-41Z" />
                <path fill="#F7DF1E" d="M41 8h14l2 41-9 3-9-3 2-41Z" />
                <path fill="#fff" d="M15 18h4v24h-4zm16 0h4v24h-4zm16 0h4v24h-4z" />
            </svg>
        ),
        'C#': (
            <svg viewBox="0 0 64 64" role="img" aria-label="C sharp logo" className="h-full w-full">
                <path fill="#68217A" d="m32 4 24 14v28L32 60 8 46V18L32 4Z" />
                <path fill="#fff" d="M29 42a12 12 0 1 1 .2-20l-3.1 4.4a6.6 6.6 0 1 0-.1 11.2L29 42Zm7-17h3l.4-4h4l-.4 4h3l.4-4h4l-.4 4h3v4h-3.4l-.4 4H52v4h-3.2l-.4 4h-4l.4-4h-3l-.4 4h-4l.4-4H35v-4h3.2l.4-4H36v-4Zm6.2 8h3l.4-4h-3l-.4 4Z" />
            </svg>
        ),
        'C++': (
            <svg viewBox="0 0 64 64" role="img" aria-label="C plus plus logo" className="h-full w-full">
                <path fill="#00599C" d="m32 4 24 14v28L32 60 8 46V18L32 4Z" />
                <path fill="#fff" d="M31 42a12 12 0 1 1 .2-20l-3.1 4.4a6.6 6.6 0 1 0-.1 11.2L31 42Zm9-18h4v6h6v4h-6v6h-4v-6h-6v-4h6v-6Zm12 0h4v6h6v4h-6v6h-4v-6h-6v-4h6v-6Z" />
            </svg>
        ),
        'Python': (
            <svg viewBox="0 0 64 64" role="img" aria-label="Python logo" className="h-full w-full">
                <path fill="#3776AB" d="M32 6c-10 0-13 3-13 9v7h15v4H15c-6 0-10 4-10 12s4 12 10 12h7v-8c0-6 4-10 11-10h14c5 0 9-4 9-9v-8c0-6-4-9-14-9H32Zm-7 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                <path fill="#FFD43B" d="M32 58c10 0 13-3 13-9v-7H30v-4h19c6 0 10-4 10-12s-4-12-10-12h-7v8c0 6-4 10-11 10H17c-5 0-9 4-9 9v8c0 6 4 9 14 9h10Zm7-8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
        ),
        'Canva': (
            <svg viewBox="0 0 64 64" role="img" aria-label="Canva logo" className="h-full w-full">
                <defs>
                    <linearGradient id="canvaLogoGradient" x1="8" x2="56" y1="56" y2="8">
                        <stop stopColor="#00C4CC" />
                        <stop offset="0.5" stopColor="#7D2AE8" />
                        <stop offset="1" stopColor="#FF66C4" />
                    </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="27" fill="url(#canvaLogoGradient)" />
                <path fill="#fff" d="M42 38c-3 5-9 8-15 6-7-2-10-9-8-16 2-8 10-12 18-9 4 1 7 4 8 8l-7 1c-1-2-2-3-4-4-4-1-8 1-9 6-1 4 1 8 5 9 3 1 5 0 7-3l5 2Z" />
            </svg>
        ),
        'Adobe Premiere Pro': (
            <svg viewBox="0 0 64 64" role="img" aria-label="Adobe Premiere Pro logo" className="h-full w-full">
                <rect width="52" height="52" x="6" y="6" fill="#2A0634" stroke="#D566FF" strokeWidth="4" rx="8" />
                <path fill="#D566FF" d="M19 43V20h11c5 0 9 3 9 8s-4 8-9 8h-5v7h-6Zm6-12h4c2 0 4-1 4-3s-2-3-4-3h-4v6Zm17 12V27h5l.3 2c1-2 3-3 6-3v5c-4 0-6 2-6 6v6h-5.3Z" />
            </svg>
        ),
    }

    return logos[skill] || (
        <svg viewBox="0 0 64 64" role="img" aria-label="Skill logo" className="h-full w-full">
            <rect width="46" height="46" x="9" y="9" rx="10" fill="#00f5ff" opacity="0.25" />
            <path fill="#fff" d="M20 22h24v5H20zm0 15h24v5H20z" />
        </svg>
    )
}

function getSkillLevel(skill: string): number {
    const levels: Record<string, number> = {
        'Unity': 50,
        'Android Studio': 50,
        'Unreal Engine': 50,
        'Capcut': 85,
        'Construct': 65,
        'HTML, CSS, XML': 55,
        'C#': 50,
        'C++': 45,
        'Python': 56,
        'Canva': 90,
        'Adobe Premiere Pro': 65,
    }
    return levels[skill] || 75
}
function getSoftSkillIcon(index: number): string {
    const icons = ['🔍', '💬', '🔄', '🤝']
    return icons[index] || '⭐'
}

function getSoftSkillDescription(skill: string): string {
    const descriptions: Record<string, string> = {
        'Root Cause Analysis': 'Identifying underlying issues to solve problems effectively',
        'Effective Communication': 'Clear and concise interaction with team members and stakeholders',
        'Adaptability': 'Quick adjustment to new environments and challenges',
        'Supportive and Flexible in Team': 'Collaborative approach with willingness to help team succeed',
    }
    return descriptions[skill] || ''
}

function getLanguageFlag(language: string): string {
    const flags: Record<string, string> = {
        'Bahasa Malaysia': '🇲🇾',
        'English': '🇬🇧',
    }
    return flags[language] || '🌐'
}
