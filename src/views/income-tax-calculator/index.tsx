import React from 'react'
import Calculator from './Calculator'
import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

const IncomeTaxCalculator = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-1 text-sm text-gray-500">
        <Link 
          href="/" 
          className="flex items-center hover:text-gray-900"
        >
          <Home className="size-4" />
          <span className="sr-only">Home</span>
        </Link>
        <ChevronRight className="size-4" />
        <Link 
          href="/finance-calculators" 
          className="hover:text-gray-900"
        >
          Finance Calculators
        </Link>
        <ChevronRight className="size-4" />
        <span className="text-gray-900">Income Tax Calculator</span>
      </nav>

      {/* Calculator */}
      <Calculator />
    </div>
  )
}

export default IncomeTaxCalculator