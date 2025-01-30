import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

const data = [
  {
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
    header: 'Income',
    content: [
      { label: 'Gross salary income', amount: 0 },
      { label: 'Annual income from other sources', amount: 0 },
      { label: 'Annual income from interest', amount: 0 },
      { label: 'Annual income from let-out house property (rental income)', amount: 0 },
      { label: 'Annual interest paid on home loan (self-occupied)', amount: 0 },
      { label: 'Annual interest paid on home loan (let-out)', amount: 0 }
    ],
    isRadio: false
  },
  {
    header: 'Deductions',
    content: [
      { label: 'Basic deductions u/s 80C', amount: 0 },
      { label: 'Contribution to NPS u/s 80CCD(1B)', amount: 0 },
      { label: 'Medical Insurance Premium u/s 80D', amount: 0 },
      { label: 'Donation to charity u/s 80G', amount: 0 },
      { label: 'Interest on Educational Loan u/s 80E', amount: 0 },
      { label: 'Interest on deposits in saving account u/s 80TTA/TTB', amount: 0 }
    ],
    isRadio: false
  }
]

const Calculator = () => {
  return (
    // <Accordion type='multiple' defaultValue={data.map(val => val.header)}>
    <Accordion type='multiple' className='min-w-[500px]'>
      {data.map((entry, idx) => (
        <AccordionItem key={idx} value={entry.header}>
          <AccordionTrigger className='text-lg font-bold'>{entry.header}</AccordionTrigger>
          {!entry.isRadio ? (
            entry.content.map((subEntry, idx) => (
              <AccordionContent key={idx} className='flex justify-between gap-6'>
                <p>{subEntry.label}</p>
                <Input type='number' placeholder='0' className='w-[200px]' />
              </AccordionContent>
            ))
          ) : (
            <RadioGroup>
              {entry.content.map((subEntry, idx) => (
                <AccordionContent key={idx} className='flex justify-between gap-6'>
                  <p>{subEntry.label}</p>
                  <RadioGroupItem value={subEntry.label}  />
                </AccordionContent>
              ))}
            </RadioGroup>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default Calculator
