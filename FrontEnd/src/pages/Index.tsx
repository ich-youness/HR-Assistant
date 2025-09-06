import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mic, Users, Calendar, FileText } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: "Holiday Management",
      description: "Check vacation balance and request time off"
    },
    {
      icon: FileText,
      title: "Project Information",
      description: "View current and upcoming project assignments"
    },
    {
      icon: Users,
      title: "HR Policies",
      description: "Get answers about company policies and procedures"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-float">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Welcome to the HR Assistant</h1>
          <p className="text-xl text-hr-text-light">How would you like to interact?</p>
        </div>

        {/* Chat Mode Selection */}
        <Card className="shadow-card border-0 mb-8">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-lg">Choose Your Communication Method</CardTitle>
            <CardDescription>Select how you'd like to get help today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="hr"
              size="xl"
              className="w-full justify-start gap-4 h-16"
              onClick={() => navigate("/chat")}
            >
              <MessageSquare className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold">Asking holidays & updating plannings</div>
                <div className="text-sm opacity-90">Start a conversation with our HR bot</div>
              </div>
            </Button>
            
            <Button
              variant="hr"
              size="xl"
              className="w-full justify-start gap-4 h-16"
              onClick={() => navigate("/voice")}
            >
              <MessageSquare className="h-6 w-6" />
              <div className="text-left">
                <div className="font-semibold">Onboarding Chat</div>
                <div className="text-sm opacity-70">Start a conversation with our Onboarding bot</div>
              </div>
            </Button>
          </CardContent>
        </Card>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-4 shadow-soft border-hr-primary/10 hover:shadow-card transition-all duration-200">
              <feature.icon className="h-8 w-8 mx-auto mb-3 text-hr-primary" />
              <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-hr-text-light">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-hr-text-light">
            Need help? Just ask about holidays, projects, or company policies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
