import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import "../styles/solutions-theme.css"; // Uses your existing theme vars

export default function ContactPage()
{
    return (
        <motion.main
            className="min-h-screen pt-32 pb-20 px-6 theme-emerging" // Defaulting to Dark Theme
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        Start a Project
                    </h1>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        Ready to automate operations or build new AI infrastructure?
                        Tell us about your vision. We typically respond within 24 hours.
                    </p>
                </header>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group">
                            <label className="block text-sm font-medium text-zinc-500 mb-2">Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors text-lg placeholder-white/10" placeholder="John Doe" />
                        </div>
                        <div className="group">
                            <label className="block text-sm font-medium text-zinc-500 mb-2">Work Email</label>
                            <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors text-lg placeholder-white/10" placeholder="john@company.com" />
                        </div>
                    </div>

                    {/* Interest Selection */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-500 mb-4">I'm interested in...</label>
                        <div className="flex flex-wrap gap-3">
                            {["Generative AI", "Data Infrastructure", "Computer Vision", "Web/Mobile App", "Consulting"].map((tag) => (
                                <label key={tag} className="cursor-pointer">
                                    <input type="checkbox" className="peer sr-only" />
                                    <span className="inline-block px-4 py-2 rounded-full border border-white/10 text-zinc-400 hover:border-white/30 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all text-sm font-medium">
                                        {tag}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Budget Range */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-500 mb-4">Estimated Budget (USD)</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {["< $10k", "$10k - $50k", "$50k - $100k", "$100k +"].map((range) => (
                                <label key={range} className="cursor-pointer">
                                    <input type="radio" name="budget" className="peer sr-only" />
                                    <div className="text-center py-3 rounded-lg border border-white/10 text-zinc-400 hover:bg-white/5 peer-checked:border-white peer-checked:text-white transition-all text-sm">
                                        {range}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Project Details */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-500 mb-2">Project Details</label>
                        <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors text-lg placeholder-white/10 resize-none" placeholder="Tell us about the problem you are solving..." />
                    </div>

                    {/* Submit */}
                    <div className="pt-8">
                        <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-200 transition-colors">
                            Send Request
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </form>
            </div>
        </motion.main>
    );
}