import { GlassCard } from "@/components/GlassCard";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import {
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  Send,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const SOCIALS = [
  {
    Icon: Github,
    label: "GitHub",
    handle: "@alexdev",
    color: "hover:text-violet-400",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    handle: "in/alexdev",
    color: "hover:text-violet-400",
  },
  {
    Icon: Twitter,
    label: "Twitter",
    handle: "@alexdev",
    color: "hover:text-violet-400",
  },
  {
    Icon: Mail,
    label: "Email",
    handle: "alex@example.com",
    color: "hover:text-violet-400",
  },
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <SectionWrapper id="contact" data-ocid="contact.section">
      <SectionHeading
        label="Get In Touch"
        title="Let's"
        titleHighlight="Connect"
        description="Open to internships, junior roles, and collaborative projects. Let's build something together."
      />

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left: Info */}
        <div>
          <h3 className="font-display font-bold text-xl text-foreground mb-3">
            Ready to <span className="gradient-text">start a conversation</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            Whether you have an exciting project, a job opportunity, or just
            want to connect — my inbox is always open. I typically respond
            within 24 hours.
          </p>

          <div className="space-y-4">
            {SOCIALS.map(({ Icon, label, handle, color }) => (
              <button
                key={label}
                type="button"
                className={`flex items-center gap-4 p-4 glass glass-hover rounded-xl group transition-smooth w-full text-left ${color}`}
                data-ocid={`contact.${label.toLowerCase()}_link`}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="gradient-text" />
                </div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground">
                    {label}
                  </div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-300">
                    {handle}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <GlassCard className="p-6 sm:p-8" data-ocid="contact.form_card">
          {sent ? (
            <div
              className="flex flex-col items-center justify-center h-full py-12 text-center"
              data-ocid="contact.success_state"
            >
              <CheckCircle size={48} className="gradient-text mb-4" />
              <h4 className="font-display font-bold text-xl text-foreground mb-2">
                Message Sent!
              </h4>
              <p className="text-muted-foreground text-sm">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-ocid="contact.form"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-muted-foreground mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 glass rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition-smooth"
                    data-ocid="contact.name_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-muted-foreground mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 glass rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition-smooth"
                    data-ocid="contact.email_input"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono text-muted-foreground mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-2.5 glass rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition-smooth"
                  data-ocid="contact.subject_input"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-muted-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full px-4 py-2.5 glass rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition-smooth resize-none"
                  data-ocid="contact.message_textarea"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                data-ocid="contact.submit_button"
              >
                {loading ? (
                  <span
                    className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    data-ocid="contact.loading_state"
                  />
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
