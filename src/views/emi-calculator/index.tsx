import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const EmiCalculator = () => {
  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label htmlFor='loan-amount'>Loan Amount</Label>
          <Input id='loan-amount' placeholder='100000' />
        </div>
      </CardContent>
    </Card>
  )
}

export default EmiCalculator
