import { Button } from "@/components/ui/button";
import logo from "../assets/images/pretty-prodesk-logo.png";

export default function ServicesPage() {
  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img src={logo} alt="Pretty Prodesk logo" className="h-auto max-w-[300px] w-full object-contain" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Where executive precision meets polished support.</h1>
        <p className="text-lg leading-relaxed mb-10">
          Premium Executive and Administrative Support for Modern Leaders. We help busy CEOs, C-Suite Executives,
          high-profile business owners, founders and service-based entrepreneurs stay organized, productive and ahead.
          At The Pretty ProDesk, we do not just assist — we elevate your operations with elegance, intention and
          structure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="rounded-2xl px-6 py-4 text-lg">Book a Discovery Call</Button>
          <Button className="rounded-2xl px-6 py-4 text-lg" variant="outline">View Service Packages</Button>
        </div>
      </section>

      {/* Signature Services Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-4">Our Signature Services Overview</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          A clean blend of high-level executive support and reliable administrative management — tailored to how you
          work. Choose a support level that matches your growth, your workload and your goals.
        </p>
      </section>

      {/* Services Sections */}
      <div className="max-w-5xl mx-auto px-6 space-y-24">
        {/* Executive Assistant Services */}
        <section className="border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-semibold mb-4">Executive Assistant Services</h3>
          <p className="text-lg leading-relaxed mb-6">
            Strategic support for leaders who need more than task handling. Our EA services help you stay organized,
            prepared and focused.
          </p>
          <ul className="space-y-2 text-base mb-6">
            <li>• Calendar management and schedule optimization</li>
            <li>• Priority-based inbox management</li>
            <li>• Meeting prep, agendas and follow-up</li>
            <li>• Travel planning and itinerary management</li>
            <li>• Stakeholder coordination</li>
            <li>• Light project oversight</li>
            <li>• Document creation</li>
            <li>• Workflow and productivity optimization</li>
          </ul>
          <Button className="rounded-2xl px-6 py-3 text-lg">Explore EA Packages</Button>
        </section>

        {/* Admin Support */}
        <section className="border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-semibold mb-4">Administrative Support Services</h3>
          <p className="text-lg leading-relaxed mb-6">
            Structured and seamless support for the daily tasks that keep your business running.
          </p>
          <ul className="space-y-2 text-base mb-6">
            <li>• Data entry and file organization</li>
            <li>• Email sorting and support replies</li>
            <li>• Appointment scheduling</li>
            <li>• CRM updates and system management</li>
            <li>• Research, templates and formatting</li>
            <li>• Backend admin tasks</li>
          </ul>
          <Button className="rounded-2xl px-6 py-3 text-lg">Explore Admin Packages</Button>
        </section>

        {/* Project Management */}
        <section className="border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-semibold mb-4">Project Management Support</h3>
          <p className="text-lg leading-relaxed mb-6">
            Support for planning, tracking and managing projects with clarity and structure.
          </p>
          <ul className="space-y-2 text-base mb-6">
            <li>• Project planning and timelines</li>
            <li>• Task tracking and progress updates</li>
            <li>• Team coordination</li>
            <li>• Workflow setup</li>
            <li>• Status reports and follow-up actions</li>
          </ul>
          <Button className="rounded-2xl px-6 py-3 text-lg">Learn More</Button>
        </section>

        {/* Customer Support */}
        <section className="border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-semibold mb-4">Customer Support Services</h3>
          <p className="text-lg leading-relaxed mb-6">
            Warm, professional and on-brand customer experience for your clients.
          </p>
          <ul className="space-y-2 text-base mb-6">
            <li>• Customer inquiry responses</li>
            <li>• Support ticket management</li>
            <li>• Handling complaints</li>
            <li>• FAQ responses</li>
            <li>• Order updates and customer communication</li>
            <li>• Friendly support experience</li>
          </ul>
          <Button className="rounded-2xl px-6 py-3 text-lg">View Customer Support Plans</Button>
        </section>

        {/* Brand Presence */}
        <section className="border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-semibold mb-4">Brand Presence and Online Visibility</h3>
          <p className="text-lg leading-relaxed mb-6">
            Helping your brand show up clean, consistent and professional online.
          </p>
          <ul className="space-y-2 text-base mb-6">
            <li>• Social media content scheduling</li>
            <li>• Captions and hashtag research</li>
            <li>• Community engagement</li>
            <li>• LinkedIn presence assistance</li>
            <li>• Content polishing and editing</li>
            <li>• Brand consistency monitoring</li>
          </ul>
          <Button className="rounded-2xl px-6 py-3 text-lg">Explore Brand Support</Button>
        </section>

        {/* Email Marketing */}
        <section className="border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-semibold mb-4">Email Marketing and CRM Support</h3>
          <p className="text-lg leading-relaxed mb-6">
            Stay consistent and visible with professional email support.
          </p>
          <ul className="space-y-2 text-base mb-6">
            <li>• Newsletter creation and formatting</li>
            <li>• Email sequence setup</li>
            <li>• Template design</li>
            <li>• CRM automation</li>
            <li>• Audience segmentation</li>
          </ul>
          <Button className="rounded-2xl px-6 py-3 text-lg">View Email Support</Button>
        </section>
      </div>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 text-center py-24 border-t border-gray-200 mt-24">
        <h3 className="text-3xl font-semibold mb-6">How It Works</h3>
        <div className="space-y-6 text-lg max-w-2xl mx-auto">
          <p>1. Book a Discovery Call</p>
          <p>2. Choose Your Support Plan</p>
          <p>3. Onboarding and Setup</p>
          <p>4. Begin Working Together</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto text-center px-6 py-24">
        <h3 className="text-3xl font-semibold mb-4">Let us elevate your operations — beautifully.</h3>
        <p className="text-lg mb-10">Ready for polished support that matches your ambition?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="rounded-2xl px-6 py-4 text-lg">Book a Discovery Call</Button>
          <Button className="rounded-2xl px-6 py-4 text-lg" variant="outline">Download Service Catalogue</Button>
        </div>
      </section>
    </div>
  );
}
