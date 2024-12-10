import { Brain } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-6 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <Brain className="h-6 w-6" />
            <span className="font-bold">CodeCrafters</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 CodeCrafters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

