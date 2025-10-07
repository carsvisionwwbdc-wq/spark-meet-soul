import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Users, TrendingUp, Phone, Calendar, BarChart3, Zap } from "lucide-react";

const SalesBDC = () => {
  const features = [
    {
      icon: Users,
      title: "All CRM's",
      description: "100% of appointments & activity will be in your CRM",
    },
    {
      icon: CheckCircle2,
      title: "Quality Appointments",
      description: "All appointments are booked for a specific day & time",
    },
    {
      icon: Clock,
      title: "3-Minutes Response Time",
      description: "Industry leading response time for new leads",
    },
    {
      icon: Calendar,
      title: "Appointment Alerts",
      description: "Real-time text notifications for your staff on every appointment",
    },
    {
      icon: Phone,
      title: "Communication",
      description: "Direct Access to our managers for your staff",
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Fast and easy implementation when you sign up",
    },
    {
      icon: TrendingUp,
      title: "Aggressive Follow Up",
      description: "30 days of phone calls, emails and text",
    },
    {
      icon: BarChart3,
      title: "Performance",
      description: "50% Appointments to Lead Ratio & 50% Show Ratio",
    },
  ];

  const benefits = [
    "No pricing discussed & no gimmicks",
    "Weekly reporting",
    "All calls available on request",
    "7 days a week: 8am-8pm Mon-Sat, 9am-5pm Sun",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Worldwide BDC</span>
            </div>
            <Button variant="hero" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Plug & Play Virtual BDC Solution
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Sales BDC
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our Sales BDC package is a plug & play, high performing and full service virtual BDC
          </p>

          <Button variant="hero" size="xl" className="mb-16">
            Book a Demo
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50%</div>
              <div className="text-sm text-muted-foreground">Appointments to Lead Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">50%</div>
              <div className="text-sm text-muted-foreground">Show Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">3min</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Everything You Need to Succeed
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Additional Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Sell More Cars?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            More Appointments. <span className="font-bold text-foreground">More Sales.</span>
          </p>
          <Button variant="hero" size="xl">
            Book a Demo Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">Worldwide BDC</span>
          </div>
          <p className="text-muted-foreground mb-8">
            We help dealerships to sell more cars.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Worldwide BDC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SalesBDC;
