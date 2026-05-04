import { motion } from "framer-motion";
const skills = [
    'Unity',
    'Android Studio',
    'Unreal Engine',
    'Construct',
    'Python',
    'Adobe Premiere Pro',
];

// Icon mapping (Same as before, simplified SVG paths)
const skillIcons: Record<string, React.ReactNode> = {
    'Unity': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-gray-900 dark:text-white">
            <path d="M4.3 9l3.5-2L4.3 5v4zm15.4 0l-3.5-2 3.5-2v4zm-7.7-6l3.5 2-3.5 1.9-3.5-1.9 3.5-2zm-6.4 8.6l1.2 6.6 5.2 3.8v-7l-6.4-3.4zm12.8 0l-6.4 3.4v7l5.2-3.8 1.2-6.6zM11 16.2l-3.5 1.9L4 16.2v-4.5l3.5 2 3.5-2v4.5zm2 0v-4.5l3.5 2 3.5-2v4.5l-3.5 1.9-3.5-1.9z" />
        </svg>
    ),
    'Unreal Engine': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-gray-900 dark:text-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 15.5c-4.14 0-7.5-3.36-7.5-7.5S12.36 2.5 16.5 2.5 24 5.86 24 10s-3.36 7.5-7.5 7.5z" />
            <text x="12" y="16" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor">U</text>
        </svg>
    ),
    'Construct': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-gray-900 dark:text-white">
            <path d="M12 2l-10 6 10 6 10-6-10-6zm0 12l-10-6v6l10 6 10-6v-6l-10 6z" />
        </svg>
    ),
    'Python': (
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-label="Python logo" role="img">
            <path fill="#3776AB" d="M32 6c-10 0-13 3-13 9v7h15v4H15c-6 0-10 4-10 12s4 12 10 12h7v-8c0-6 4-10 11-10h14c5 0 9-4 9-9v-8c0-6-4-9-14-9H32Zm-7 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
            <path fill="#FFD43B" d="M32 58c10 0 13-3 13-9v-7H30v-4h19c6 0 10-4 10-12s-4-12-10-12h-7v8c0 6-4 10-11 10H17c-5 0-9 4-9 9v8c0 6 4 9 14 9h10Zm7-8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
    ),
    'C# Programming': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-12 w-12 text-gray-900 dark:text-white">
            <path d="M16.5 22.5V13.5H7.5V22.5" />
            <text x="12" y="15" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">C#</text>
        </svg>
    ),
    'Canva': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-gray-900 dark:text-white">
            <circle cx="12" cy="12" r="10" className="opacity-20" />
            <text x="12" y="16" fontSize="12" fontWeight="bold" textAnchor="middle" fill="currentColor">Cv</text>
        </svg>
    ),
    'Adobe Premiere Pro': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-gray-900 dark:text-white">
            <rect x="2" y="2" width="20" height="20" rx="4" className="opacity-20" />
            <text x="12" y="16" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor">Pr</text>
        </svg>
    ),
    'Android Studio': (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-gray-900 dark:text-white">
            <path d="M17.5 6.5c0 .0-.5 1.5-.5 1.5l2.5 1.5-1.5 2.5c0 0 1.5.5 1.5.5v2.5h-2.5c0 0-.5 1.5-.5 1.5l-2.5-1.5-1.5 2.5c0 0-1.5-.5-1.5-.5v-2.5H8.5c0 0 .5-1.5.5-1.5l-2.5-1.5 1.5-2.5c0 0-1.5-.5-1.5-.5V8.5H6.5c0 0 .5-1.5.5-1.5l2.5-1.5 1.5-2.5v2.5h2.5V3l1.5 2.5z" />
        </svg>
    )
}

const skillData = skills.map((skill, index) => {
    const hue = (index * 360 / skills.length) % 360
    return {
        name: skill,
        hueA: hue,
        hueB: hue + 40,
        icon: skillIcons[skill] || (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-gray-900 dark:text-white">
                <circle cx="12" cy="12" r="8" />
            </svg>
        )
    }
})

// === Matt Perry's Provided Component & Styles (Converted to TSX/Framer Motion) ===

export function ScrollingSkills() {
    return (
        <div className="relative z-10">
            <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Technical <span className="gradient-text">Proficiency</span>
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    A focused overview of the tools and technologies I use.
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {skillData.map((data, i) => (
                    <Card i={i} data={data} key={data.name} />
                ))}
            </div>
        </div>
    )
}

interface CardProps {
    data: typeof skillData[0]
    i: number
}

function Card({ data, i }: CardProps) {
    const background = `linear-gradient(306deg, ${hue(data.hueA)}, ${hue(data.hueB)})`

    return (
        <motion.div
            className="group relative min-h-[220px] overflow-hidden rounded-lg border border-neon-cyan/20 bg-gray-50/80 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-neon-cyan/10 dark:bg-gray-900/80"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.25 }}
            variants={cardVariants}
            transition={{ delay: i * 0.06 }}
        >
            <div
                className="absolute inset-x-0 bottom-0 h-1 opacity-80"
                style={{ background }}
            />
            <div
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background }}
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-gray-100/80 text-gray-900 shadow-inner dark:bg-gray-800/80 dark:text-white">
                    {data.icon}
                </div>
                <div className="font-display text-xl font-bold text-gray-900 dark:text-white">
                    {data.name}
                </div>
            </div>
        </motion.div>
    )
}

const cardVariants = {
    offscreen: {
        opacity: 0,
        y: 30,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            bounce: 0.2,
            duration: 0.6,
        },
    },
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`
