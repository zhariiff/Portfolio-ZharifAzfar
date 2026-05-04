import { motion } from 'framer-motion'
import { PageShell } from '../components/layout/PageShell'
import { Card } from '../components/ui/Card'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { resumeData } from '../data/resumeText'
import { cn } from '../lib/cn'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Contact() {
    const reducedMotion = useReducedMotion()
    const linkedinUrl = 'https://www.linkedin.com/in/muhammad-zharif-azfar-bin-norhasli-786751252'

    const contactInfo = [
        {
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: 'Address',
            value: resumeData.personal.address,
            href: null,
            color: 'neon-cyan',
        },
        {
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: 'Mobile',
            value: resumeData.personal.mobile,
            href: `tel:${resumeData.personal.mobile}`,
            color: 'neon-purple',
        },
        {
            icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: 'Email',
            value: resumeData.personal.email,
            href: `mailto:${resumeData.personal.email}`,
            color: 'neon-pink',
        },
    ]

    return (
        <PageShell
            title="Contact"
            subtitle="Let's connect and discuss opportunities."
        >
            <div className="space-y-12">
                {/* Contact Cards */}
                <section>
                    <div className="grid gap-6 md:grid-cols-3">
                        {contactInfo.map((info, index) => (
                            <ScrollReveal key={info.label} delay={index * 0.1}>
                                <Card variant="hud" glow className="p-6 h-full">
                                    <div className="flex flex-col items-center text-center">
                                        <motion.div
                                            className={cn(
                                                'flex h-14 w-14 items-center justify-center rounded-xl mb-4',
                                                info.color === 'neon-cyan' && 'bg-neon-cyan/20 text-neon-cyan',
                                                info.color === 'neon-purple' && 'bg-neon-purple/20 text-neon-purple',
                                                info.color === 'neon-pink' && 'bg-neon-pink/20 text-neon-pink'
                                            )}
                                            whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                                        >
                                            {info.icon}
                                        </motion.div>
                                        <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2">
                                            {info.label}
                                        </h3>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className={cn(
                                                    'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-neon-cyan',
                                                    'transition-colors break-all'
                                                )}
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* LinkedIn CTA */}
                <section>
                    <ScrollReveal>
                        <div className="mx-auto max-w-2xl">
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="group block"
                                aria-label="Open LinkedIn profile in a new tab"
                            >
                                <Card
                                    variant="hud"
                                    glow
                                    className={cn(
                                        'relative overflow-hidden p-0 transition-all duration-300',
                                        'hover:-translate-y-1 hover:border-neon-cyan/60 hover:shadow-2xl hover:shadow-neon-cyan/10'
                                    )}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10 opacity-70" />
                                    <div className="relative flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#0A66C2] text-white shadow-lg shadow-neon-cyan/20">
                                                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.53V9H7.1v11.45ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs font-mono uppercase tracking-wider text-neon-cyan">
                                                    Professional Network
                                                </p>
                                                <h3 className="mt-1 font-display text-xl font-bold text-gray-900 dark:text-white">
                                                    Connect with me on LinkedIn
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                                    View my profile, projects, and professional background.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center justify-center gap-2 rounded-lg border border-neon-cyan/40 bg-neon-cyan/10 px-4 py-2 text-sm font-semibold text-neon-cyan transition-colors group-hover:bg-neon-cyan group-hover:text-gray-950">
                                            View Profile
                                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M9 7h8v8" />
                                            </svg>
                                        </div>
                                    </div>
                                </Card>
                            </a>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </PageShell>
    )
}
