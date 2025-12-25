import { useLocation } from "wouter";
import { Home, User, Code, Briefcase, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: User },
  { path: "/skills", label: "Skills", icon: Code },
  { path: "/projects", label: "Projects", icon: Briefcase },
  { path: "/contact", label: "Contact", icon: Mail },
];

export default function Navigation() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer" 
              onClick={() => setLocation("/")}
              data-testid="link-logo"
            >
              <div className="w-8 h-8 bg-gradient-stark rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">KS</span>
              </div>
              <span className="text-foreground font-display font-semibold text-lg hidden sm:block">
                Kanithi Sathvik
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location === item.path;
                const Icon = item.icon;
                return (
                  <Button
                    key={item.path}
                    variant="ghost"
                    className={`
                      relative px-4 py-2 text-sm font-medium transition-all
                      ${isActive 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                    onClick={() => setLocation(item.path)}
                    data-testid={`nav-${item.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-stark"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = location === item.path;
                const Icon = item.icon;
                return (
                  <Button
                    key={item.path}
                    variant="ghost"
                    className={`
                      w-full justify-start px-4 py-3 text-base font-medium
                      ${isActive 
                        ? "bg-accent/10 text-primary" 
                        : "text-muted-foreground hover:bg-accent/5 hover:text-foreground"
                      }
                    `}
                    onClick={() => {
                      setLocation(item.path);
                      setMobileMenuOpen(false);
                    }}
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  );
}
