
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiMail, HiPhone, HiLocationMarker, HiOutlinePaperAirplane, HiRefresh } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact: React.FC = () => {
  const { personal, social } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [charCount, setCharCount] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!EMAIL_REGEX.test(form.email)) errs.email = 'Invalid email address.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'message') setCharCount(e.target.value.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSuccess('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
      setCharCount(0);
      setTimeout(() => setSuccess(''), 5000);
      // Smooth scroll to top of form
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Failed to send message. Please try again.');
      setTimeout(() => setError(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-dark-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN - Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-8">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-dark-primary p-4 rounded-lg">
                  <HiMail className="text-primary text-2xl" />
                </div>
                <div>
                  <div className="text-text-secondary text-sm">Email</div>
                  <div className="text-text-primary font-medium">{personal.email}</div>
                </div>
              </div>
              {/* Phone */}
              {personal.phone && (
                <div className="flex items-start gap-4">
                  <div className="bg-dark-primary p-4 rounded-lg">
                    <HiPhone className="text-primary text-2xl" />
                  </div>
                  <div>
                    <div className="text-text-secondary text-sm">Phone</div>
                    <div className="text-text-primary font-medium">{personal.phone}</div>
                  </div>
                </div>
              )}
              {/* Location */}
              {personal.location && (
                <div className="flex items-start gap-4">
                  <div className="bg-dark-primary p-4 rounded-lg">
                    <HiLocationMarker className="text-primary text-2xl" />
                  </div>
                  <div>
                    <div className="text-text-secondary text-sm">Location</div>
                    <div className="text-text-primary font-medium">{personal.location}</div>
                  </div>
                </div>
              )}
            </div>
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {social.github && (
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="bg-dark-primary p-3 rounded-lg text-primary hover:bg-primary hover:text-dark-primary transition-colors" aria-label="GitHub">
                  <FaGithub size={22} />
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-dark-primary p-3 rounded-lg text-primary hover:bg-primary hover:text-dark-primary transition-colors" aria-label="LinkedIn">
                  <FaLinkedin size={22} />
                </a>
              )}
            </div>
          </div>
          {/* RIGHT COLUMN - Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-text-primary mb-8">Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  className={`w-full bg-dark-primary border border-primary/20 rounded-lg p-4 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.name ? 'border-red-500' : ''}`}
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                  autoComplete="off"
                />
                {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
              </div>
              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="What's your email?"
                  className={`w-full bg-dark-primary border border-primary/20 rounded-lg p-4 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.email ? 'border-red-500' : ''}`}
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                  autoComplete="off"
                />
                {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>
              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="What would you like to say?"
                  rows={6}
                  className={`w-full bg-dark-primary border border-primary/20 rounded-lg p-4 text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${errors.message ? 'border-red-500' : ''}`}
                  value={form.message}
                  onChange={handleChange}
                  disabled={loading}
                  maxLength={1000}
                />
                <div className="flex justify-between mt-1">
                  {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
                  <div className="text-text-secondary text-xs ml-auto">{charCount}/1000</div>
                </div>
              </div>
              {/* Success/Error Messages */}
              {success && (
                <div className="bg-green-500/10 text-green-500 border border-green-500/20 rounded-lg p-4 text-center text-sm">{success}</div>
              )}
              {error && (
                <div className="bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg p-4 text-center text-sm">{error}</div>
              )}
              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={loading || Object.keys(errors).length > 0 || !form.name || !form.email || !form.message}
              >
                {loading ? (
                  <>
                    <HiRefresh className="animate-spin text-xl" /> Sending...
                  </>
                ) : (
                  <>
                    <HiOutlinePaperAirplane className="text-xl" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
