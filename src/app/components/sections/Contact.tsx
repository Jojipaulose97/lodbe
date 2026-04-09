"use client";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { MapPin, Mail } from "lucide-react"; // Import professional icons

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        await new Promise((res) => setTimeout(res, 1500));
        setStatus("success");
    };

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Left Side: Contact Info */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                            Let's build the <br />
                            <span className="text-brand-yellow">future together.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-md">
                            Whether you're looking for a strategic partnership or have a question about our ecosystem, our team is ready to connect.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Email Section - Using Lucide Mail Icon */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-brand-yellow group-hover:bg-zinc-700 transition-colors">
                                <Mail size={20} strokeWidth={2} />
                            </div>
                            <div>
                                <h4 className="font-semibold">Email us</h4>
                                <p className="text-zinc-400">corporate@lodbe.com</p>
                            </div>
                        </div>

                        {/* Address Section - Using Lucide MapPin Icon */}
                        <div className="flex items-start gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-brand-yellow group-hover:bg-zinc-700 transition-colors">
                                <MapPin size={20} strokeWidth={2} />
                            </div>
                            <div>
                                <h4 className="font-semibold">Our Office</h4>
                                <p className="text-zinc-400 max-w-sm leading-relaxed">
                                    Lodbe Private Limited,<br /> 
                                    Ponvayalil Complex, First Floor,<br /> 
                                    Kerala – 690514, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="First Name" placeholder="John" required />
                            <Input label="Last Name" placeholder="Doe" required />
                        </div>

                        <Input label="Email Address" type="email" placeholder="john@example.com" required />

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-300 ml-1">Message</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white outline-none transition-all focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow"
                                placeholder="How can we help you?"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-4 text-lg"
                            variant="secondary"
                            disabled={status === "loading"}
                        >
                            {status === "idle" && "Send Message"}
                            {status === "loading" && "Sending..."}
                            {status === "success" && "Message Sent! ✓"}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
