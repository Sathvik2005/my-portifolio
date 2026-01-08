import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kanithisathvik@gmail.com",
    href: "mailto:kanithisathvik@gmail.com",
    color: "from-primary to-accent",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9515136729",
    href: "tel:+919515136729",
    color: "from-accent to-secondary",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Anakapalle, AP",
    href: null,
    color: "from-secondary to-muted",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Sathvik2005",
    href: "https://github.com/Sathvik2005",
    color: "from-muted to-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sathvik",
    href: "https://linkedin.com/in/sathvik",
    color: "from-primary to-accent",
  },
];

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Final scene - closing credits animation
    gsap.from(".contact-header", {
      opacity: 0,
      y: -100,
      duration: 1.5,
      ease: "power3.out",
    });

    // Contact cards reveal like curtain opening
    gsap.from(".contact-card", {
      scaleY: 0,
      transformOrigin: "top",
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".contact-info-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Form fields spotlight entrance
    gsap.from(".form-field", {
      opacity: 0,
      x: -50,
      rotateY: -20,
      duration: 0.8,
      ease: "back.out(1.5)",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // Submit button glow effect
    gsap.to(".submit-button", {
      boxShadow: "0 0 20px rgba(var(--primary), 0.5)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Floating contact info
    gsap.to(".contact-card", {
      y: "random(-10, 10)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 5000);
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
      });
    },
  });

  const onSubmit = async (data: InsertContactMessage) => {
    await contactMutation.mutateAsync(data);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="contact-header text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-gradient" data-testid="text-contact-heading">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <h2 className="text-2xl font-display font-semibold text-foreground mb-6">Contact Information</h2>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const CardWrapper = info.href ? 'a' : 'div';
              const cardProps = info.href ? { href: info.href, target: info.href.startsWith('http') ? '_blank' : undefined, rel: info.href.startsWith('http') ? 'noopener noreferrer' : undefined } : {};
              
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <CardWrapper {...cardProps} className={info.href ? "block" : ""}>
                    <Card className="glass-panel hover-elevate active-elevate-2 transition-all group cursor-pointer" data-testid={`card-contact-info-${index}`}>
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 bg-gradient-to-br ${info.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-muted-foreground font-body mb-1">{info.label}</div>
                          <div className="text-foreground font-body truncate">{info.value}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </CardWrapper>
                </motion.div>
              );
            })}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    <span className="font-semibold text-primary">Open to opportunities:</span> I'm currently open to 
                    freelance projects, collaborations, and full-time opportunities in ML/AI and Data Science.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Card className="glass-panel">
              <CardContent className="p-8">
                {showSuccess ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                    data-testid="text-success-message"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-3xl font-display font-semibold text-foreground mb-3">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground font-body text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="mb-6">
                        <h2 className="text-2xl font-display font-semibold text-foreground mb-2">Send Me a Message</h2>
                        <p className="text-muted-foreground font-body">Fill out the form below and I'll respond within 24-48 hours.</p>
                      </div>

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-body">Your Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="John Doe"
                                className="bg-muted/20 border-border text-foreground placeholder:text-muted-foreground focus:border-primary font-body h-12"
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-body">Your Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="john@example.com"
                                className="bg-muted/20 border-border text-foreground placeholder:text-muted-foreground focus:border-primary font-body h-12"
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-body">Your Message</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Tell me about your project or how we can work together..."
                                rows={6}
                                className="bg-muted/20 border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none font-body"
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-stark hover:opacity-90 text-primary-foreground border-0 h-12 font-body font-medium"
                        disabled={contactMutation.isPending}
                        data-testid="button-submit"
                      >
                        {contactMutation.isPending ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
