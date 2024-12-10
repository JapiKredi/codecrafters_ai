import { Card } from "@/components/ui/card"
import { Brain, Users, Zap } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Custom Built AI Solutions</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We build production ready AI solutions across a wide range of use cases.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Zap className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Intelligent Automation</h3>
            <p className="text-muted-foreground">
              Streamline your operations with AI-powered automation.
            </p>
          </Card>
          <Card className="p-6">
            <Users className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Customer Delight</h3>
            <p className="text-muted-foreground">
              Create new features and experiences to surprise and delight users.
            </p>
          </Card>
          <Card className="p-6">
            <Brain className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">AI-Driven Innovation</h3>
            <p className="text-muted-foreground">
              Leverage AI to drive innovation and stay ahead of the curve.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}

