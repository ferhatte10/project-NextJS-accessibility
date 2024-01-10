// pages/hello.tsx
'use client'
import { Icons } from '@/components/icons';
import  {DataTableDemo} from '@/components/specials/TableDataSet';
import { Separator } from '@/components/ui/separator';
import { Label } from '@radix-ui/react-label';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import React from 'react';

import CustomRadioGroup from '@/components/forms/RadioGroup';

const ArticlePage = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <DataTableDemo />

    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">Welcome back Redeemer!</h1>
      <p className="max-w-[700px] text-lg text-muted-foreground">
      Please select the option that you are looking for
      </p>
    </div>
    <Separator />
    <RadioGroup defaultValue="QuitSmoking" className="grid grid-cols-3 gap-4">
          <div>
            <RadioGroupItem aria-label="Quit Smoking" value="QuitSmoking" id="QuitSmoking" className="peer sr-only" />
            <Label
              htmlFor="QuitSmoking"
              aria-label="Quit Smoking"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4  text-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >

              <Icons.quiteSmoking className="mb-3 h-6 w-6" />
              Quit<br/>Smoking
            </Label>
          </div>
          <div>
            <RadioGroupItem
              value="RelieveStress"
              aria-label="Relieve Stress"
              id="RelieveStress"
              className="peer sr-only"
            />
            <Label
              htmlFor="RelieveStress"
              aria-label="Relieve Stress"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 text-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Icons.relieveStress className="mb-3 h-6 w-6" />
              Relieve<br/>Stress
            </Label>
          </div>
          <div>
            <RadioGroupItem value="ImproveSleep" id="ImproveSleep" aria-label="Improve Sleep" className="peer sr-only" />
            <Label
              htmlFor="ImproveSleep"
              aria-label="Improve Sleep"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 text-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Icons.improveSleep className="mb-3 h-6 w-6" />
              Improve<br/>Sleep
            </Label>
          </div>
        </RadioGroup>


  </section>
  );
};

export default ArticlePage;
