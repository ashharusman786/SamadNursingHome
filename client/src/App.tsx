import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TranslationProvider } from "@/hooks/use-translation";
import { ThemeProvider } from "@/components/ThemeProvider";
import NetworkStatusIndicator from "@/components/network-status-indicator";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";

// Import theme styles
import "@/components/ui/theme.css";
import "@/index.css";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <TranslationProvider>
            <NetworkStatusIndicator />
            <Toaster />
            <Router />
          </TranslationProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
