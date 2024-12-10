import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-24 pb-12 bg-black text-white">
      <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Fast, Lean & Reliable AI Solutions
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              We build custom AI solutions that deliver clear ROI. Partner with us to define business objectives and create software that drives your key metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button size="lg" className="bg-white text-black hover:bg-black hover:text-white transition-colors">
                Get Started
              </Button>
              <Button size="lg" className="bg-white text-black hover:bg-black hover:text-white transition-colors">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative h-[400px] w-full">
              {/* Use the next/image component for optimized image handling */}
              <Image
                src="/Logo CodeCrafters.png"
                alt="CodeCrafters AI Agency Logo"
                layout="fill"
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}