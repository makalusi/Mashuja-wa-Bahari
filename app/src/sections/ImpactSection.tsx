import React from 'react';
import { ArrowUpRight, Users, Droplet, Home, HeartHandshake, Quote } from 'lucide-react';

const ImpactSection: React.FC = () => {
    return (
        <section id="impact-section" className="relative bg-black z-20 pb-32">
            {/* Subtle Gradient Separator */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
            <div className="container mx-auto px-6 md:px-10 relative z-20">
                {/* 1. Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 md:mb-32">
                    {/* Card 1 */}
                    <div className="scroll-animate scroll-card-1 group relative h-[280px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 transition-colors">
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            alt="Nature"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                            <div>
                                <p className="text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Who We Are</p>
                                <h3 className="text-white text-2xl font-medium font-['Oswald'] tracking-wide">Companies House</h3>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-amber-500 transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5 stroke-[1.5]" />
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="scroll-animate scroll-card-2 group relative h-[280px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 transition-colors">
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            alt="Volunteer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                            <div>
                                <p className="text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Volunteer</p>
                                <h3 className="text-white text-2xl font-medium font-['Oswald'] tracking-wide">Take Action</h3>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-amber-500 transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5 stroke-[1.5]" />
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="scroll-animate scroll-card-3 group relative h-[280px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 transition-colors">
                        <img
                            src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=1000&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            alt="Africa"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                            <div>
                                <p className="text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Stories</p>
                                <h3 className="text-white text-2xl font-medium font-['Oswald'] tracking-wide leading-tight">Building A Future<br />In Africa</h3>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-amber-500 transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5 stroke-[1.5]" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2. Partners / Logos */}
                <div className="flex flex-col items-center mb-32">
                    <span className="scroll-animate scroll-partners-title text-amber-500/60 text-[10px] font-bold tracking-[0.25em] uppercase mb-12 border-b border-amber-500/20 pb-4">Non-Profit Charity</span>
                    <div className="w-full flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 text-white">
                        {/* Logo 1: Unity */}
                        <div className="scroll-logo flex flex-col items-center gap-1 group">
                            <Users className="w-8 h-8 stroke-1 mb-1" />
                            <span className="text-xs tracking-[0.2em] font-semibold">UNITY</span>
                        </div>
                        {/* Logo 2: Art Academy */}
                        <div className="scroll-logo flex items-center gap-2 font-serif italic text-xl font-bold">
                            <span className="not-italic font-sans font-black text-2xl">ART.</span>academy
                        </div>
                        {/* Logo 3: World Blood */}
                        <div className="scroll-logo flex flex-col items-center leading-none">
                            <div className="flex items-center gap-1 font-black text-lg tracking-tighter">
                                WORLD <Droplet className="w-4 h-4 fill-current" />
                            </div>
                            <span className="text-[8px] tracking-widest text-center">BLOOD DONOR DAY</span>
                        </div>
                        {/* Logo 4: Sweethome */}
                        <div className="scroll-logo flex flex-col items-center gap-1">
                            <Home className="w-7 h-7 stroke-[1.5]" />
                            <span className="text-[10px] tracking-[0.2em] font-bold">SWEETHOME</span>
                        </div>
                        {/* Logo 5: Goodie Giving */}
                        <div className="scroll-logo flex items-center gap-2">
                            <HeartHandshake className="w-8 h-8 stroke-1" />
                            <div className="flex flex-col text-[9px] font-bold tracking-wider uppercase leading-tight">
                                <span>Goodie</span>
                                <span>Giving</span>
                            </div>
                        </div>
                        {/* Logo 6: Findr */}
                        <div className="scroll-logo flex items-center gap-2 text-xl font-bold tracking-tight">
                            <div className="w-2 h-2 bg-current rounded-sm rotate-45" />
                            Findr
                        </div>
                    </div>
                </div>
                {/* 3. About Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image Grid */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6 text-white">
                        <div className="flex flex-col gap-4 md:gap-6 lg:mt-12">
                            {/* Drinking Water */}
                            <div className="scroll-animate scroll-image-left rounded-3xl overflow-hidden h-48 md:h-56 border border-white/5 relative group">
                                <img src="https://images.unsplash.com/photo-1594498259353-90040bc100dc?q=80&w=1000&auto=format&fit=crop" alt="Drinking Water" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>
                            {/* Testimonial Card */}
                            <div className="scroll-animate scroll-testimonial bg-zinc-900/50 border border-white/5 p-6 rounded-3xl backdrop-blur-sm flex flex-col justify-between flex-grow">
                                <div className="mb-4">
                                    <Quote className="w-6 h-6 text-amber-500/50 fill-amber-500/20 rotate-180 mb-2" />
                                    <p className="text-zinc-400 text-sm leading-relaxed italic">
                                        "This place is awesome and huge! Michael was super cool and very pleasant. If you want someone to deliver the sound to your project."
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold text-xs border border-amber-500/30">HM</div>
                                    <div>
                                        <p className="text-white text-sm font-medium tracking-wide">Huyre Merry</p>
                                        <p className="text-zinc-600 text-xs font-medium">Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Portrait */}
                        <div className="scroll-animate scroll-image-right rounded-3xl overflow-hidden h-[450px] md:h-[500px] border border-white/5 relative group">
                            <img src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=1000&auto=format&fit=crop" alt="School Boy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                    </div>
                    {/* Right: Text Content */}
                    <div className="pl-0 lg:pl-10 space-y-10">
                        <div className="space-y-6 text-white">
                            <span className="scroll-animate scroll-text-badge text-amber-500 text-xs font-semibold tracking-[0.2em] uppercase inline-block border border-amber-500/20 px-3 py-1 rounded-full bg-amber-500/5">Gift of $36</span>
                            <h2 className="scroll-animate scroll-text-heading text-5xl md:text-6xl font-['Oswald'] uppercase leading-[0.9] tracking-tight">
                                Helping Others <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Improves World</span>
                            </h2>
                            <p className="scroll-animate scroll-text-description text-zinc-400 text-lg font-light leading-relaxed">
                                Ensures that kids living in poverty have access to life-changing benefits like medical care, educational support, life skills and job-training before they graduate.
                            </p>
                        </div>
                        {/* Progress Bars */}
                        <div className="scroll-animate scroll-progress-container space-y-8">
                            <div className="group">
                                <div className="flex justify-between text-sm font-medium text-zinc-300 mb-3">
                                    <span className="tracking-wide">Save Water</span>
                                    <span className="text-amber-500">59%</span>
                                </div>
                                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all duration-1000 ease-out" style={{ width: '59%' }} />
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex justify-between text-sm font-medium text-zinc-300 mb-3">
                                    <span className="tracking-wide">Education</span>
                                    <span className="text-amber-500">98%</span>
                                </div>
                                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" style={{ width: '98%' }} />
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <button className="scroll-animate scroll-button rounded-full border border-zinc-700 text-zinc-300 px-10 py-3.5 text-xs font-semibold hover:bg-white hover:text-black hover:border-white transition-all uppercase tracking-[0.15em]">
                                About Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
