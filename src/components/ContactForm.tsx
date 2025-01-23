import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companyUrl: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfhZ2NX6NyIX60KcUUL1j-l1zxO226F_5yPAMCJaU4LOqip-Q/formResponse";
    
    // Create form data object with the correct entry IDs from your form
    const formDataObj = new FormData();
    formDataObj.append("entry.1234567890", formData.name); // Replace with actual entry ID for name
    formDataObj.append("entry.1234567891", formData.email); // Replace with actual entry ID for email
    formDataObj.append("entry.1234567892", formData.company); // Replace with actual entry ID for company
    formDataObj.append("entry.1234567893", formData.companyUrl); // Replace with actual entry ID for company URL
    formDataObj.append("entry.1234567894", formData.message); // Replace with actual entry ID for message

    try {
      // Submit to Google Form
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataObj,
      });

      // Show success message
      toast({
        title: "Thanks for reaching out!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Clear form
      setFormData({ name: "", email: "", company: "", companyUrl: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up?</h2>
          <p className="text-gray-600">
            Let's discuss how we can help grow your business
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <Input
                required
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Your Company"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company Website</label>
              <Input
                type="url"
                value={formData.companyUrl}
                onChange={(e) =>
                  setFormData({ ...formData, companyUrl: e.target.value })
                }
                placeholder="https://example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full"
              rows={4}
              placeholder="Tell us about your goals"
            />
          </div>
          <Button type="submit" className="w-full">
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;