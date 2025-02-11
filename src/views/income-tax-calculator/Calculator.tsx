'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React, { useState } from 'react'
import slab from '@/data/shared/slab.json'
import { Button } from '@/components/ui/button'

const data = [
  {
    id: 'assensmentYear',
    header: 'Assessment year',
    content: [{ label: '2024 - 2025' }, { label: '2023 - 2024' }, { label: '2022 - 2023' }, { label: '2021 - 2020' }],
    isRadio: true
  },
  {
    header: 'Age category',
    content: [{ label: 'Below 60' }, { label: '60 or Above 60' }, { label: '80 or Above 80' }],
    isRadio: true
  },

  {
    id: 'ageCategory',
    header: 'Income',
    content: [
      { label: 'Gross salary income', amount: 0, id: 'grossSalaryIncome' },
      { label: 'Annual income from other sources', amount: 0, id: 'annualIncomeFromOtherSources' },
      { label: 'Annual income from interest', amount: 0, id: 'annualIncomeFromInterest' },
      {
        label: 'Annual income from let-out house property (rental income)',
        amount: 0,
        id: 'annualIncomeFromLetOutHouseProperty'
      },
      { label: 'Annual interest paid on home loan (self-occupied)', amount: 0, id: 'annualInterestPaidOnHomeLoan' },
      { label: 'Annual interest paid on home loan (let-out)', amount: 0, id: 'annualInterestPaidOnHomeLoanLetOut' }
    ],
    isRadio: false
  },
  {
    header: 'Deductions',
    content: [
      { label: 'Basic deductions u/s 80C', amount: 0, id: 'basicDeductions' },
      { label: 'Contribution to NPS u/s 80CCD(1B)', amount: 0, id: 'contributionToNPS' },
      { label: 'Medical Insurance Premium u/s 80D', amount: 0, id: 'medicalInsurancePremium' },
      { label: 'Donation to charity u/s 80G', amount: 0, id: 'donationToCharity' },
      { label: 'Interest on Educational Loan u/s 80E', amount: 0, id: 'interestOnEducationalLoan' },
      {
        label: 'Interest on deposits in saving account u/s 80TTA/TTB',
        amount: 0,
        id: 'interestOnDepositsInSavingAccount'
      }
    ],
    isRadio: false
  }
]

const Calculator = () => {
  const [totalTax, setTotalTax] = useState({
    oldRegimeTotal: 0,
    newRegimeTotal: 0
  })
  const [updatedData, setUpdatedData] = useState({
    assensmentYear: '2024 - 2025' as const,
    ageCategory: 'Below 60',
    grossSalaryIncome: 0,
    annualIncomeFromOtherSources: 0,
    annualIncomeFromInterest: 0,
    annualIncomeFromLetOutHouseProperty: 0,
    annualInterestPaidOnHomeLoan: 0,
    annualInterestPaidOnHomeLoanLetOut: 0,
    basicDeductions: 0,
    contributionToNPS: 0,
    medicalInsurancePremium: 0,
    donationToCharity: 0,
    interestOnEducationalLoan: 0,
    interestOnDepositsInSavingAccount: 0
  })

  const handleUpdate = (value: Record<string, number | string>, keyName: string) => {
    setUpdatedData(prevData => ({ ...prevData, [keyName]: value.value }))
  }

  type Slab = { min: number; max: number | null; rate: number; note?: string }

  const calculateTax = (income: number, slabs: Slab[]) => {
    let tax = 0
    for (const slab of slabs) {
      if (income > slab.min) {
        const taxableAmount = Math.min(income, slab.max ?? Infinity) - slab.min
        tax += (taxableAmount * slab.rate) / 100
      }
    }

    return tax
  }

  const handleCalculate = () => {
    let totalTaxNewRegime = 0
    let totalTaxOldRegime = 0
    const standardDeduction = 50000 // temp
    const FY_YEAR: '2024 - 2025' | '2023 - 2024' | '2022 - 2023' = updatedData.assensmentYear
    const grossSalary = updatedData.grossSalaryIncome

    if (grossSalary > 0) {
      const taxableIncome = grossSalary - standardDeduction
      if (FY_YEAR === '2024 - 2025') {
        const newRegimeTaxSlabs = slab.indian_tax_slabs.FY_2024_25.new_regime
        const oldRegimeTaxSlabs = slab.indian_tax_slabs.FY_2024_25.old_regime

        totalTaxNewRegime = calculateTax(taxableIncome, newRegimeTaxSlabs.slabs)
        totalTaxOldRegime = calculateTax(taxableIncome, oldRegimeTaxSlabs.slabs)
      }
    }

    setTotalTax({
      newRegimeTotal: totalTaxNewRegime,
      oldRegimeTotal: totalTaxOldRegime
    })
  }

  return (
    <div className='space-y-6'>
      <Accordion type='multiple' className='min-w-[500px]'>
        {data.map((entry, idx) => (
          <AccordionItem key={idx} value={entry.header}>
            <AccordionTrigger className='text-lg font-bold'>{entry.header}</AccordionTrigger>
            {!entry.isRadio ? (
              (entry.content as { label: string; amount: number; id: string }[]).map((subEntry, idx) => (
                <AccordionContent key={idx} className='flex justify-between gap-6'>
                  <p>{subEntry.label}</p>
                  <Input
                    type='number'
                    placeholder='0'
                    value={updatedData[subEntry.id as keyof typeof updatedData]}
                    className='w-[200px]'
                    onChange={e => handleUpdate({ value: e.target.value }, subEntry.id)}
                  />
                </AccordionContent>
              ))
            ) : (
              <RadioGroup>
                {entry.content.map((subEntry, idx) => (
                  <AccordionContent key={idx} className='flex justify-between gap-6'>
                    <p>{subEntry.label}</p>
                    <RadioGroupItem value={subEntry.label} />
                  </AccordionContent>
                ))}
              </RadioGroup>
            )}
          </AccordionItem>
        ))}
      </Accordion>

      <Button onClick={handleCalculate}>Calculate</Button>
      {/* result */}
      <div>
        old:{totalTax.oldRegimeTotal}
        new:{totalTax.newRegimeTotal}
      </div>
    </div>
  )
}

export default Calculator
