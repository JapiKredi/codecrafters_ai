import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Team() {
  return (
    <section className="py-20" id="about">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Founding Team</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We combine technical skills with business strategy to create ROI driven software.
        </p>
        <div className="flex justify-center">
          <Card className="p-6 max-w-sm">
            <div className="flex flex-col items-center">
              <div className="relative h-48 w-48 mb-6">
                <Image
                  src="/foto Jasper linkedin.png"
                  alt="Jasper Bongers - Founder & CEO"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold">Jasper Bongers</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

