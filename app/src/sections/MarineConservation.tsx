import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView, AnimatePresence } from 'framer-motion';
import MashujaaImg from '../assets/Mashujaa.png';
import ArtImg1 from '../assets/Art-1.jpg';
import ArtImg2 from '../assets/Art-2.jpg';
import ArtImg3 from '../assets/Art-3.jpg';
import PartnerLogo1 from '../assets/Partner-1.png';
import PartnerLogo2 from '../assets/Partner-2.png';
import PartnerLogo3 from '../assets/Partner-3.png';

interface StatCounterProps {
    value: number;
    suffix?: string;
    label: string;
    shapeClass: string;
    rotation: string;
    delay: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, suffix = "", label, shapeClass, rotation, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const count = useSpring(0, {
        duration: 2000,
        bounce: 0,
        damping: 30,
        stiffness: 100
    });

    const displayValue = useTransform(count, (latest) => Math.floor(latest).toLocaleString());

    useEffect(() => {
        if (isInView) {
            count.set(value);
        }
    }, [isInView, count, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-6"
        >
            <div className={`flex-shrink-0 w-28 h-28 md:w-32 md:h-32 bg-[#00608F] flex items-center justify-center text-white text-2xl md:text-3xl font-display ${shapeClass} shadow-lg transform ${rotation} overflow-hidden`}>
                <div className="flex flex-col items-center">
                    <motion.div className="flex items-center">
                        <motion.span>{displayValue}</motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: delay + 1.5, duration: 0.5 }}
                            className="text-teal-300 ml-0.5"
                        >
                            {suffix}
                        </motion.span>
                    </motion.div>

                    {/* Subtle pulse/glow effect when finished */}
                    <AnimatePresence>
                        {isInView && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    opacity: [0, 0.4, 0],
                                    scale: [0.8, 1.2, 1.3]
                                }}
                                transition={{
                                    delay: delay + 1.8,
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                }}
                                className="absolute inset-0 bg-teal-400 rounded-full blur-xl -z-10"
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className="text-[#00608F] text-2xl md:text-3xl font-bold leading-tight tracking-tight max-w-[200px]">
                {label}
            </div>
        </motion.div>
    );
};

const MarineConservation: React.FC = () => {
    const stats = [
        { value: 1000, suffix: "+", label: "HEROES RECOGNISED", shape: "organic-shape-1", rotate: "-rotate-3" },
        { value: 50, suffix: "+", label: "Marine Species Protected.", shape: "organic-shape-2", rotate: "rotate-2" },
        { value: 5000, suffix: "+", label: "Mangroves Planted", shape: "organic-shape-3", rotate: "rotate-6" },
        { value: 20, suffix: "+", label: "Coastal Communities Empowered.", shape: "organic-shape-1", rotate: "-rotate-2" }
    ];

    return (
        <div id="marine-conservation" className="text-[#00608F] min-h-screen relative overflow-x-hidden selection:bg-teal-200">
            <div className="py-8 md:py-12">
                {/* Unified Section: Header + Impact + Spirit + Art */}
                <div className="relative overflow-hidden group">
                    {/* Shared Background Image Layer */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/about-background.jpg"
                            alt="Background"
                            className="w-full h-full object-cover opacity-100"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 space-y-16">
                        {/* Section 1: Top Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
                            {/* Card 1 */}
                            <div className="relative group/card">
                                <div
                                    className="relative bg-[#00608F] p-8 md:p-6 lg:p-8 min-h-[200px] flex flex-col justify-center items-center text-center text-white"
                                    style={{ borderRadius: '45% 55% 40% 60% / 55% 45% 65% 35%', boxShadow: '6px 8px 0px rgba(0,0,0,0.1)' }}
                                >
                                    <h3 className="text-2xl lg:text-3xl tracking-tight leading-none mb-3 drop-shadow-md font-display">MARINE PRESERVATION</h3>
                                    <p className="text-lg md:text-xl font-semibold leading-snug opacity-90">Protecting coral reefs and sea turtles.</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="relative group/card mt-4 md:mt-0">
                                <div
                                    className="relative bg-[#00608F] p-8 md:p-6 lg:p-8 min-h-[200px] flex flex-col justify-center items-center text-center text-white"
                                    style={{ borderRadius: '55% 45% 60% 40% / 40% 60% 35% 65%', boxShadow: '4px 8px 0px rgba(0,0,0,0.1)' }}
                                >
                                    <h3 className="text-2xl lg:text-3xl tracking-tight leading-none mb-3 drop-shadow-md font-display">COMMUNITY EMPOWERMENT</h3>
                                    <p className="text-lg md:text-xl font-semibold leading-snug opacity-90">Supporting coastal livelihoods.</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="relative group/card mt-4 md:mt-0">
                                <div
                                    className="relative bg-[#00608F] p-8 md:p-6 lg:p-8 min-h-[200px] flex flex-col justify-center items-center text-center text-white"
                                    style={{ borderRadius: '40% 60% 45% 55% / 55% 40% 60% 40%', boxShadow: '6px 6px 0px rgba(0,0,0,0.1)' }}
                                >
                                    <h3 className="text-2xl lg:text-3xl tracking-tight leading-none mb-3 drop-shadow-md font-display">YOUTH INNOVATION</h3>
                                    <p className="text-lg md:text-xl font-semibold leading-snug opacity-90">STEM and tech for marine tracking.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Our Impact */}
                        <div className="space-y-12">
                            <motion.h2
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl md:text-6xl text-center text-[#00608F] tracking-tight drop-shadow-sm font-display uppercase"
                            >
                                OUR IMPACT
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:px-12">
                                {stats.map((stat, index) => (
                                    <StatCounter
                                        key={index}
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        label={stat.label}
                                        shapeClass={stat.shape}
                                        rotation={stat.rotate}
                                        delay={index * 0.2}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Section 3: Mashujaa Spirit */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Branding Image */}
                            <div className="relative flex justify-center lg:justify-end p-2">
                                <div className="relative w-full max-w-lg aspect-square rounded-[3rem] overflow-hidden shadow-hover border-4 border-white/50 animate-float">
                                    <img
                                        src={MashujaaImg}
                                        alt="Mashujaa Spirit"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#00608F]/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Right: Text Content */}
                            <div className="space-y-6 lg:pl-6 text-center lg:text-left">
                                <h2 className="text-4xl md:text-5xl text-[#00608F] tracking-tight leading-none drop-shadow-sm font-display">
                                    THE MASHUJAA SPIRIT
                                </h2>
                                <div className="space-y-4 text-xl md:text-2xl text-[#00608F]/90 font-medium leading-relaxed">
                                    <p>
                                        <span className="font-bold text-[#00608F]">Mashujaa Bahari</span> is a unique marine conservation project that harnesses the transformative power of art visuals, storytelling, and community workshops to bridge the knowledge gap in coastal communities.
                                    </p>
                                    <p>
                                        We illuminate marine ecosystems, fostering a deep understanding and stewardship for our oceans among fishermen, youth, and women.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Art For Oceans Sake */}
                        <div className="space-y-12">
                            {/* Header Section */}
                            <div className="flex flex-col items-center space-y-10">
                                {/* Title with Organic Blue Background Shape */}
                                <div className="relative py-8 px-12 md:px-24 z-10 flex justify-center items-center">
                                    <svg className="absolute inset-0 w-full h-full text-[#00608F] fill-current -z-10 drop-shadow-lg transform scale-105" viewBox="0 0 500 100" preserveAspectRatio="none">
                                        <path d="M15,25 C60,5 150,30 250,15 C350,0 440,20 485,30 C495,32 500,45 490,60 C460,95 380,85 250,90 C120,95 40,85 10,65 C-5,55 0,35 15,25 Z"></path>
                                    </svg>
                                    <h1 className="text-3xl md:text-5xl text-white uppercase text-center tracking-wide leading-none drop-shadow-md pt-2 font-display">
                                        Art For Oceans Sake
                                    </h1>
                                </div>

                                {/* Intro Paragraph */}
                                <p className="text-[#00608F]/80 text-lg md:text-xl text-center max-w-5xl mx-auto leading-relaxed font-medium md:px-6">
                                    <span className="font-extrabold text-[#00608F]">Mashujaa Bahari</span> is a unique marine conservation project that harnesses the transformative power of art—visuals, storytelling, and community workshops—to bridge the knowledge gap in coastal communities. We illuminate marine ecosystems, fostering a deep understanding and stewardship for our oceans among fishermen, youth, and women.
                                </p>
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
                                {/* Card 1: Visual Education */}
                                <div className="bg-white rounded-[2rem] p-5 pb-8 shadow-soft flex flex-col items-center text-center group/art-card hover:-translate-y-2 transition-all duration-300">
                                    <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative shadow-inner">
                                        <img src={ArtImg1} alt="Mural Painting" className="w-full h-full object-cover group-hover/art-card:scale-110 transition-transform duration-700" />
                                    </div>
                                    <h3 className="text-sage-light text-xl font-bold uppercase tracking-tight mb-2 font-comic text-balance">Visual Education</h3>
                                    <div className="h-1 w-12 bg-sage-light/20 rounded-full mb-3"></div>
                                </div>

                                {/* Card 2: Creative Workshops */}
                                <div className="bg-white rounded-[2rem] p-5 pb-8 shadow-soft flex flex-col items-center text-center group/art-card hover:-translate-y-2 transition-all duration-300">
                                    <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative shadow-inner">
                                        <img src={ArtImg2} alt="Community Workshop" className="w-full h-full object-cover group-hover/art-card:scale-110 transition-transform duration-700" />
                                    </div>
                                    <h3 className="text-sage-light text-xl font-bold uppercase tracking-tight mb-3 font-comic text-balance">Creative Workshops</h3>
                                    <p className="text-[#00608F]/70 text-sm md:text-base font-semibold leading-relaxed px-2">
                                        Bringing fresh ideas, they lead beach cleanups, educate peers, and turn marine litter into art.
                                    </p>
                                </div>

                                {/* Card 3: Community Engagement */}
                                <div className="bg-white rounded-[2rem] p-5 pb-8 shadow-soft flex flex-col items-center text-center group/art-card hover:-translate-y-2 transition-all duration-300">
                                    <div className="w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative shadow-inner">
                                        <img src={ArtImg3} alt="Plastic Art on Beach" className="w-full h-full object-cover group-hover/art-card:scale-110 transition-transform duration-700" />
                                    </div>
                                    <h3 className="text-sage-light text-xl font-bold uppercase tracking-tight mb-3 font-comic text-balance">Community Engagement</h3>
                                    <p className="text-[#00608F]/70 text-sm md:text-base font-semibold leading-relaxed px-2">
                                        Empowering them to protect nesting sites, lead restoration, and promote marine ethics.
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Button */}
                            <div className="flex justify-center pt-8">
                                <button className="group relative bg-[#F0F9FB] border-[2.5px] border-sage-light text-sage-dark font-bold py-3.5 px-8 rounded-full uppercase tracking-wide transition-all duration-300 hover:bg-sage-light hover:text-white hover:shadow-lg hover:shadow-sage-light/30 text-sm md:text-base flex items-center gap-2">
                                    Learn More About Our Art Initiatives
                                </button>
                            </div>

                            {/* Section 5: Our Partners (Wavy Ribbon) */}
                            <div className="md:py-20 pt-12 pb-12 relative mt-16">
                                <div className="relative w-full mx-auto" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.15))' }}>
                                    {/* Wavy Ribbon Container */}
                                    <div
                                        className="relative w-full h-auto overflow-hidden bg-[#2a2a5a]"
                                        style={{ borderRadius: '40% 60% 45% 55% / 20% 60% 30% 70%', minHeight: '400px' }}
                                    >
                                        {/* Background Ocean Texture */}
                                        <img
                                            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                                            alt="Ocean Waves"
                                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                                        />

                                        {/* Color Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-blue-900/80 to-indigo-900/90 mix-blend-multiply"></div>

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 space-y-12 text-center h-full">
                                            {/* Header */}
                                            <div className="space-y-2">
                                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-display tracking-tight drop-shadow-md uppercase">
                                                    OUR PARTNERS
                                                </h2>
                                                <p className="text-white/90 text-lg md:text-xl font-medium font-sans tracking-wide max-w-2xl mx-auto drop-shadow-sm">
                                                    Organizations helping us achieve our mission.
                                                </p>
                                            </div>

                                            {/* Logos */}
                                            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 w-full max-w-5xl">
                                                {/* Logo 1: Bow Seat */}
                                                <div className="flex flex-col items-center justify-center group opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                                                    <img src={PartnerLogo1} alt="Bow Seat" className="h-24 md:h-32 w-auto object-contain" />
                                                </div>

                                                {/* Logo 2: The Nature Conservancy */}
                                                <div className="flex items-center gap-3 group opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                                                    <img src={PartnerLogo2} alt="The Nature Conservancy" className="h-24 md:h-32 w-auto object-contain" />
                                                </div>

                                                {/* Logo 3: Fellowship Badge */}
                                                <div className="relative group opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                                                    <img src={PartnerLogo3} alt="Fellowship Program" className="h-32 md:h-44 w-auto object-contain" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Decoration Bottom Right */}
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-t from-white to-transparent opacity-80 blur-3xl -z-10 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default MarineConservation;
