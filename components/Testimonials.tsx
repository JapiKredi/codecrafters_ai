import { Card } from "@/components/ui/card"

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Clients love working with us because we operate with AI-native efficiency leveraging all of the latest
          technology and the highest level of care.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <p className="mb-4">
              "CodeCrafters delivered our AI solution in record time. Their expertise and professionalism exceeded our expectations."
            </p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-sm text-muted-foreground">CTO, TechFlow Inc</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <p className="mb-4">
              "Working with CodeCrafters transformed our business processes. Their AI solutions are truly cutting-edge."
            </p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-semibold">Michael Ross</p>
                <p className="text-sm text-muted-foreground">CEO, InnovateAI</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <p className="mb-4">
              "The team at CodeCrafters brought our vision to life with their technical expertise and innovative approach."
            </p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-semibold">Lisa Wong</p>
                <p className="text-sm text-muted-foreground">Product Lead, FutureScale</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

