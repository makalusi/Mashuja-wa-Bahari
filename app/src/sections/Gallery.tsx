import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AboutBg from '../assets/about-background.jpg';
import Art1 from '../assets/art/art-01.jpg';
import Art2 from '../assets/art/art-02.jpg';
import Art3 from '../assets/art/art-03.jpg';
import Art4 from '../assets/art/art-04.jpg';
import Art5 from '../assets/art/art-05.jpg';
import Art6 from '../assets/art/art-06.jpg';
import Art7 from '../assets/art/art-07.jpg';
import Art8 from '../assets/art/art-08.jpg';
import Art9 from '../assets/art/art-09.jpg';
import Art10 from '../assets/art/art-10.jpg';
import Art11 from '../assets/art/art-11.jpg';
import Art12 from '../assets/art/art-12.jpg';
import Art13 from '../assets/art/art-13.jpg';
import Art14 from '../assets/art/art-14.jpg';
import Art15 from '../assets/art/art-15.jpg';

const Gallery = () => {
    const [selectedArtwork, setSelectedArtwork] = useState<any>(null);

    const artworks = [
        { id: 1, title: 'Whale Shark', artist: 'Elena Marine', image: Art1, description: 'A majestic relative of the shark, the whale shark is the largest fish in the sea. This piece captures its gentle grace through deep indigo tones and bioluminescent speckles.' },
        { id: 2, title: 'Coral Reef', artist: 'Julian Reef', image: Art2, description: 'A vibrant metropolis of the ocean floor, showcasing the intricate balance of life. This artwork highlights the rich textures and kaleidoscopic colors of flourishing coral gardens.' },
        { id: 3, title: 'Deep Diver', artist: 'Marco Abyss', image: Art3, description: 'Exploring the silent mysteries of the abyss. This composition focuses on the contrast between the lone explorer and the vast, formidable unknown of the deep ocean.' },
        { id: 4, title: 'Sea Turtle', artist: 'Sarah Tide', image: Art4, description: 'The ancient mariner of the currents. This piece celebrates the endurance and wisdom of the sea turtle, rendered with fluid brushstrokes and natural sea tones.' },
        { id: 5, title: 'Pacific Jellyfish', artist: 'Lila Drift', image: Art5, description: 'Ethereal spirits of the water, drifting effortlessly. This work utilizes light and transparency to mimic the hypnotic pulsing of Pacific jellyfish in the dark currents.' },
        { id: 6, title: 'Orca Pod', artist: 'Finn North', image: Art6, description: 'Strength in community. This artwork depicts the powerful bond of an orca family, emphasizing their sleek forms and the rhythmic splashing of the northern seas.' },
        { id: 7, title: 'Hammerhead', artist: 'Kai Tropical', image: Art7, description: 'A silhouette like no other. This dramatic piece captures the unique profile of the hammerhead shark as it patrols the sun-dappled shallows of tropical reefs.' },
        { id: 8, title: 'Blue Glaucus', artist: 'Maya Sapphire', image: Art8, description: 'Small but stunning. This macro-inspired piece brings the tiny, sapphire-hued Blue Glaucus to life, showcasing the unexpected beauty found in the ocean\'s smallest inhabitants.' },
        { id: 9, title: 'Manta Ray', artist: 'Owen Wing', image: Art9, description: 'Giant wings beneath the waves. This artwork focuses on the majestic, bird-like flight of the manta ray, emphasizing its sweeping silhouette and gentle nature.' },
        { id: 10, title: 'Anemone', artist: 'Chloe Soft', image: Art10, description: 'A protective home in a dangerous world. This piece explores the symbiotic relationship between anemones and their tiny inhabitants through soft, waving textures and warm lighting.' },
        { id: 11, title: 'Seahorse', artist: 'Leo Anchor', image: Art11, description: 'A master of camouflage. This delicate study highlights the intricate anatomy and quiet dignity of the seahorse as it anchors itself to swaying seagrasses.' },
        { id: 12, title: 'Clownfish', artist: 'Nemo Reef', image: Art12, description: 'The bright sentinel of the reef. This playful artwork captures the vibrant spirit and curiosity of the clownfish as it navigates its colorful and complex home.' },
        { id: 13, title: 'Octopus Garden', artist: 'Octavia Ink', image: Art13, description: 'The intelligent master of disguise. This complex composition reveals the hidden world of the octopus, emphasizing its fluid form and the tools of its resourceful hideaway.' },
        { id: 14, title: 'Kelp Forest', artist: 'Grace Canopy', image: Art14, description: 'An underwater canopy of life. This vertical piece uses light filtering through towering kelp fronds to create a serene, cathedral-like atmosphere of the coastal depths.' },
        { id: 15, title: 'Sunken Treasure', artist: 'Arthur Wreck', image: Art15, description: 'Secrets of the ocean floor. This atmospheric piece explores the quiet beauty of ruins being reclaimed by the sea, where history and biology merge under a thick layer of time.' },
    ];

    // Disable background scroll when modal is active
    useEffect(() => {
        if (selectedArtwork) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedArtwork]);

    // ESC key listener for closing modal
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedArtwork(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className="bg-slate-900 text-white min-h-screen relative overflow-x-hidden selection:bg-cyan-500 selection:text-white">
            {/* Background Image with Overlay */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <img
                    src={AboutBg}
                    alt="Underwater background"
                    className="w-full h-full object-cover opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-800/20 to-slate-900/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900/40 to-slate-900/80"></div>
            </div>

            {/* Main Content */}
            <main className="relative z-10 container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 max-w-7xl">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    {/* Header Section */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="text-center max-w-4xl mx-auto mb-20 space-y-8"
                    >
                        <h1 className="font-stylish text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white drop-shadow-xl max-w-5xl mx-auto">
                            Where Art Meets the Ocean’s Fight for Survival. Explore marine-inspired works that give back to the waters that inspire them.
                        </h1>

                        <div className="pt-4">

                        </div>
                    </motion.div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        {artworks.map((artwork) => (
                            <motion.div
                                key={artwork.id}
                                layoutId={`artwork-${artwork.id}`}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                                }}
                                onClick={() => setSelectedArtwork(artwork)}
                                className="wavy-card bg-white p-3 group cursor-pointer rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]"
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                <div className="relative overflow-hidden rounded-[1.5rem] bg-blue-100 aspect-[4/3]">
                                    <motion.img
                                        src={artwork.image}
                                        alt={artwork.title}
                                        className="w-full h-full object-cover saturate-150 contrast-125"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 z-10">
                                        <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            {artwork.title}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-end pt-3 pb-1 px-2">
                                    <div className="inline-flex items-center gap-1 text-base font-semibold text-cyan-600 group-hover:text-cyan-500 transition-colors">
                                        Learn more
                                        <svg
                                            className="w-5 h-5 mt-0.5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </main>

            {/* Interactive Lightbox */}
            <AnimatePresence>
                {selectedArtwork && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Semi-transparent Overlay with Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedArtwork(null)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl cursor-zoom-out"
                        />

                        {/* Expanded Card */}
                        <motion.div
                            layoutId={`artwork-${selectedArtwork.id}`}
                            className="relative bg-white rounded-[2.5rem] overflow-hidden w-full max-w-5xl shadow-2xl flex flex-col md:flex-row pointer-events-auto"
                            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedArtwork(null);
                                }}
                                className="absolute top-6 right-6 z-20 p-2 bg-slate-100/50 hover:bg-slate-200 rounded-full transition-colors text-slate-900"
                                aria-label="Close details"
                            >
                                <X size={24} />
                            </button>

                            {/* Image Part */}
                            <div className="md:w-3/5 relative overflow-hidden bg-blue-50">
                                <img
                                    src={selectedArtwork.image}
                                    alt={selectedArtwork.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Part */}
                            <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-display text-slate-900 leading-tight mb-2">
                                        {selectedArtwork.title}
                                    </h2>
                                    <div className="h-1 w-12 bg-cyan-500 rounded-full mb-6"></div>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                        {selectedArtwork.description}
                                    </p>
                                    <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                                        <div className="w-8 h-px bg-slate-300"></div>
                                        <p className="text-slate-500 font-medium italic">
                                            Art by <span className="text-cyan-600 not-italic font-semibold">{selectedArtwork.artist}</span>
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="pt-6"
                                >
                                    <button
                                        onClick={() => setSelectedArtwork(null)}
                                        className="w-full py-4 px-6 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                                    >
                                        Return to Gallery
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
