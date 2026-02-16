import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    availability: string;
    hoursPerWeek: string;
    physicalActivities: boolean;
    skills: string[];
    hasVolunteered: boolean;
    volunteerExperience: string;
    portfolioUrl: string;
    motivation: string;
}

const GetInvolved = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        availability: '',
        hoursPerWeek: '',
        physicalActivities: false,
        skills: [],
        hasVolunteered: false,
        volunteerExperience: '',
        portfolioUrl: '',
        motivation: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skillOptions = [
        'Design',
        'Marketing',
        'Environmental Research',
        'Fundraising',
        'Tech',
        'Logistics',
        'Media',
        'Other'
    ];

    const handleInputChange = (field: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSkillToggle = (skill: string) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.includes(skill)
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill]
        }));
    };

    const isFormValid = () => {
        return (
            formData.fullName.trim() !== '' &&
            formData.email.trim() !== '' &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
            formData.location.trim() !== ''
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <section
            id="get-involved"
            ref={sectionRef}
            className="relative py-32 md:py-40 overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/cta-mountains.jpg"
                    alt="Ocean conservation"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/90 via-sage-dark/60 to-sage-dark/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <div
                    className={`transition-all duration-1000 custom-expo ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 bg-white/10 text-cream text-sm font-medium rounded-full mb-6 backdrop-blur-sm">
                            Get Involved
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-tight">
                            Join the Movement
                        </h2>

                        <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto">
                            Be part of the movement protecting our oceans. Join us and contribute your skills to create measurable impact.
                        </p>
                    </div>

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Basic Information */}
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6">
                                <h3 className="text-xl font-bold text-cream mb-4 font-primary">Basic Information</h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-cream/80 text-sm mb-2">
                                            Full Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                                            onFocus={() => setFocusedField('fullName')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full px-4 py-3 rounded-xl bg-white/90 text-sage-dark placeholder:text-sage/50 focus:outline-none transition-all duration-300 ${focusedField === 'fullName' ? 'ring-4 ring-white/30 scale-105' : ''
                                                }`}
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-cream/80 text-sm mb-2">
                                            Email Address <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full px-4 py-3 rounded-xl bg-white/90 text-sage-dark placeholder:text-sage/50 focus:outline-none transition-all duration-300 ${focusedField === 'email' ? 'ring-4 ring-white/30 scale-105' : ''
                                                }`}
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-cream/80 text-sm mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full px-4 py-3 rounded-xl bg-white/90 text-sage-dark placeholder:text-sage/50 focus:outline-none transition-all duration-300 ${focusedField === 'phone' ? 'ring-4 ring-white/30 scale-105' : ''
                                                }`}
                                            placeholder="+254 123 456"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-cream/80 text-sm mb-2">
                                            Location (City & Country) <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.location}
                                            onChange={(e) => handleInputChange('location', e.target.value)}
                                            onFocus={() => setFocusedField('location')}
                                            onBlur={() => setFocusedField(null)}
                                            className={`w-full px-4 py-3 rounded-xl bg-white/90 text-sage-dark placeholder:text-sage/50 focus:outline-none transition-all duration-300 ${focusedField === 'location' ? 'ring-4 ring-white/30 scale-105' : ''
                                                }`}
                                            placeholder="Nairobi, Kenya"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Commitment & Availability */}
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6">
                                <h3 className="text-xl font-bold text-cream mb-4 font-primary">Commitment & Availability</h3>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-cream/80 text-sm mb-2">Availability</label>
                                        <select
                                            value={formData.availability}
                                            onChange={(e) => handleInputChange('availability', e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-white/90 text-sage-dark focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                                        >
                                            <option value="">Select...</option>
                                            <option value="full-time">Full-time</option>
                                            <option value="part-time">Part-time</option>
                                            <option value="events-only">Events Only</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-cream/80 text-sm mb-2">Hours per Week</label>
                                        <select
                                            value={formData.hoursPerWeek}
                                            onChange={(e) => handleInputChange('hoursPerWeek', e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-white/90 text-sage-dark focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
                                        >
                                            <option value="">Select...</option>
                                            <option value="1-3">1–3 hours</option>
                                            <option value="3-5">3–5 hours</option>
                                            <option value="5-10">5–10 hours</option>
                                            <option value="10+">10+ hours</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={formData.physicalActivities}
                                            onChange={(e) => handleInputChange('physicalActivities', e.target.checked)}
                                            className="w-5 h-5 rounded border-2 border-white/50 text-sage focus:ring-2 focus:ring-white/30"
                                        />
                                        <span className="text-cream/90 group-hover:text-cream transition-colors">
                                            Willing to participate in physical cleanups or field activities?
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* Skills & Experience */}
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6">
                                <h3 className="text-xl font-bold text-cream mb-4 font-primary">Skills & Experience</h3>

                                <div>
                                    <label className="block text-cream/80 text-sm mb-3">What skills can you contribute?</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {skillOptions.map(skill => (
                                            <button
                                                key={skill}
                                                type="button"
                                                onClick={() => handleSkillToggle(skill)}
                                                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${formData.skills.includes(skill)
                                                    ? 'bg-cream text-sage-dark shadow-lg scale-105'
                                                    : 'bg-white/20 text-cream hover:bg-white/30'
                                                    }`}
                                            >
                                                {skill}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-cream/80 text-sm mb-2">Have you volunteered before?</label>
                                    <div className="flex gap-4">
                                        <button
                                            type="button"
                                            onClick={() => handleInputChange('hasVolunteered', true)}
                                            className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${formData.hasVolunteered
                                                ? 'bg-cream text-sage-dark shadow-lg'
                                                : 'bg-white/20 text-cream hover:bg-white/30'
                                                }`}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                handleInputChange('hasVolunteered', false);
                                                handleInputChange('volunteerExperience', '');
                                            }}
                                            className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${!formData.hasVolunteered
                                                ? 'bg-cream text-sage-dark shadow-lg'
                                                : 'bg-white/20 text-cream hover:bg-white/30'
                                                }`}
                                        >
                                            No
                                        </button>
                                    </div>
                                </div>

                                {formData.hasVolunteered && (
                                    <div className="animate-fade-in">
                                        <label className="block text-cream/80 text-sm mb-2">Briefly describe your experience</label>
                                        <textarea
                                            value={formData.volunteerExperience}
                                            onChange={(e) => handleInputChange('volunteerExperience', e.target.value)}
                                            onFocus={() => setFocusedField('volunteerExperience')}
                                            onBlur={() => setFocusedField(null)}
                                            rows={3}
                                            className={`w-full px-4 py-3 rounded-xl bg-white/90 text-sage-dark placeholder:text-sage/50 focus:outline-none transition-all duration-300 ${focusedField === 'volunteerExperience' ? 'ring-4 ring-white/30' : ''
                                                }`}
                                            placeholder="Tell us about your volunteer experience..."
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-cream/80 text-sm mb-2">LinkedIn or Portfolio URL</label>
                                    <input
                                        type="url"
                                        value={formData.portfolioUrl}
                                        onChange={(e) => handleInputChange('portfolioUrl', e.target.value)}
                                        onFocus={() => setFocusedField('portfolioUrl')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`w-full px-4 py-3 rounded-xl bg-white/90 text-sage-dark placeholder:text-sage/50 focus:outline-none transition-all duration-300 ${focusedField === 'portfolioUrl' ? 'ring-4 ring-white/30 scale-105' : ''
                                            }`}
                                        placeholder="https://linkedin.com/in/yourprofile"
                                    />
                                </div>
                            </div>

                            {/* Motivation */}
                            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 space-y-6">
                                <h3 className="text-xl font-bold text-cream mb-4 font-primary">Motivation</h3>

                                <div>
                                    <label className="block text-cream/80 text-sm mb-2">Why do you want to join this organization?</label>
                                    <textarea
                                        value={formData.motivation}
                                        onChange={(e) => handleInputChange('motivation', e.target.value)}
                                        onFocus={() => setFocusedField('motivation')}
                                        onBlur={() => setFocusedField(null)}
                                        rows={5}
                                        className={`w-full px-4 py-3 rounded-xl bg-white/90 text-sage-dark placeholder:text-sage/50 focus:outline-none transition-all duration-300 ${focusedField === 'motivation' ? 'ring-4 ring-white/30' : ''
                                            }`}
                                        placeholder="Share your passion for ocean conservation and what drives you to make a difference..."
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={!isFormValid() || isSubmitting}
                                    className={`group px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 ${isFormValid() && !isSubmitting
                                        ? 'bg-cream text-sage-dark hover:scale-105 hover:shadow-2xl'
                                        : 'bg-white/20 text-cream/50 cursor-not-allowed'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Join the Movement
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="bg-green-500/20 backdrop-blur-md rounded-3xl p-12 text-center animate-scale-in">
                            <div className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
                                <Check className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-cream mb-4 font-primary">Application Received!</h3>
                            <p className="text-cream/80 text-lg mb-6">
                                Thank you for joining our movement. We'll review your application and contact you within 3-5 business days.
                            </p>
                            <p className="text-cream/60 text-sm">
                                Check your email for a confirmation message.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
