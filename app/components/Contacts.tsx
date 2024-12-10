import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section className="py-20 bg-black text-white" id="contact">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Ready to unlock the power of AI for your business? Get in touch with us today.
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Contact Us
          </Button>
        </div>
        <p className="mt-8">info@codecrafters.ai</p>
      </div>
    </section>
  )
}

