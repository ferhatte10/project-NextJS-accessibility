// pages/hello.tsx
'use client'
import { Icons } from '@/components/icons';
import  {DataTableDemo} from '@/components/specials/TableDataSet';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from 'react';

import CustomRadioGroup from '@/components/forms/RadioGroup';
import Image from 'next/image';
import Link from 'next/link';

const ArticlePage = () => {
  return (
    <article className="container">

      <section className="flex flex-col items-center px-8 py-36 sm:flex-row-reverse sm:px-12">
        <Image
          width={200}
          height={200}
          alt="Absolutely no smoking"
          className="mb-8 w-full rounded-lg sm:mb-0 sm:ml-4 sm:w-1/2 dark:contrast-200"
          src="/no-smoke.jpeg"
          tabIndex={0}
        />

        <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h1 tabIndex={0} className="dark:text-dark-50 mb-4 text-3xl font-bold leading-tight md:text-4xl">
            Want to quit smoking
            <br /> As soon as possible ?
          </h1>
          <p id="programDescription" className="mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-400" tabIndex={0} >
            We&apos;ve got your back, enrolling in our program will give a load of tips from the basic to the advanced one.<br/>
            More than <strong> 40000 people got recovered</strong> using our program.
          </p>
          <Link
            className=" inline-block rounded-lg border-0 bg-pink-700 px-12 py-2 text-base text-white transition hover:bg-pink-800"
            href="#call-action"
          >
            Join our program
          </Link>
        </div>
      </section>

      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" tabIndex={0}>Introduction</h2>
          <p className="text-lg text-muted-foreground" tabIndex={0}>
          Smoking is a deeply ingrained habit that affects millions worldwide, posing severe health risks and
          addictive challenges. This comprehensive guide aims to outline effective strategies to help
          individuals quit smoking and embark on a journey toward a healthier lifestyle.
          </p>
          <Image
            width={200}
            height={340}
            alt="Absolutely no smoking"
            className="mb-8 h-64 w-full rounded-lg object-cover dark:contrast-200"
            src="/smoking-intro.jpeg"
            tabIndex={0}
          />

        </div>
      </section>

      <section className="container mx-auto flex flex-col items-center gap-10  sm:flex-row-reverse sm:px-0">

        <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left flex flex-col h-full">
          <h2 tabIndex={0} className="dark:text-dark-50 mb-4 text-3xl font-bold leading-tight md:text-4xl">
            Preparation Stage
          </h2>
          <p className="mb-8 text-left text-lg text-muted-foreground" tabIndex={0}>
            Before embarking on the journey to quit smoking, it&apos;s essential to prepare both mentally and practically.
            <br /> The Preparation Stage lays the foundation for a successful quit attempt.
            <br /> First and foremost, setting a quit date acts as a commitment and a starting point for this journey. It provides a tangible goal and allows time for mental preparation.
            <br /> Identifying triggers and habits associated with smoking is equally crucial. Recognizing situations, emotions, or routines that prompt smoking behavior helps in devising strategies to manage or avoid these triggers.
            <br /> Building a robust support system is another vital aspect. Whether it&apos;s seeking support from family, friends, or joining support groups, having people who understand and encourage your decision to quit can make a significant difference.
            <br /> Lastly, seeking professional guidance, such as consulting a healthcare provider or counselor, offers valuable insights and personalized strategies to navigate this challenging phase effectively.
          </p>
        </div>

        <Image
          width={200}
          height={200}
          alt="Absolutely no smoking"
          className="mb-8 w-full h-full rounded-lg object-cover sm:mb-0 sm:ml-4 sm:w-1/2 dark:contrast-200"
          src="/no-smoke.jpeg"
          tabIndex={0}
        />

      </section>

      <section aria-labelledby="preparationTitle" className="container grid items-center gap-6 pb-8  md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h2 id="preparationTitle" className="sr-only">Preparation Steps</h2>

          <p className="text-lg text-muted-foreground" tabIndex={0}>
            Follow these steps to prepare for your journey to quit smoking:
          </p>

          <ol className="list-decimal" aria-describedby="preparationTitle">
            <li tabIndex={0}>Set a Quit Date: Choose a specific date to quit smoking; it's a commitment and a starting point for your journey.</li>
            <li tabIndex={0}>Identify Triggers and Habits: Recognize situations, emotions, or routines that prompt smoking behavior; understand these triggers to devise strategies.</li>
            <li tabIndex={0}>Build a Support System: Seek support from family, friends, or join support groups; having understanding and encouraging people makes a significant difference.</li>
            <li tabIndex={0}>Seek Professional Guidance: Consult a healthcare provider or counselor for valuable insights and personalized strategies; it helps navigate the challenging phase effectively.</li>
            <li tabIndex={0}>Create a Quit Plan: Develop a personalized plan with coping strategies, alternative activities, and a support network.</li>
            <li tabIndex={0}>Adopt Healthy Lifestyle Changes: Focus on regular exercise, balanced nutrition, and stress-reducing activities for a healthier lifestyle.</li>
            <li tabIndex={0}>Use Positive Affirmations: Reinforce your commitment to quitting and boost self-confidence with positive affirmations.</li>
            <li tabIndex={0}>Establish a Reward System: Set up a system to celebrate milestones in your journey and acknowledge your achievements.</li>
          </ol>


          <Image
            width={200}
            height={340}
            alt="Absolutely no smoking"
            className="mb-8 h-64 w-full rounded-lg object-cover dark:contrast-200"
            src="/smoking-intro.jpeg"
            tabIndex={0}
          />

        </div>
      </section>


      <section className="container grid items-center gap-6 pb-8  md:py-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does smoking affect health?</AccordionTrigger>
            <AccordionContent >
              <span tabIndex={0}>
                Smoking is harmful to health and can lead to various diseases, including lung cancer and heart disease. It is a major cause of preventable deaths worldwide.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can quitting smoking improve health?</AccordionTrigger>
            <AccordionContent>
              <span tabIndex={0}>
              Absolutely. Quitting smoking has numerous health benefits, such as reducing the risk of diseases, improving lung function, and enhancing overall well-being.
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Are there resources to help quit smoking?</AccordionTrigger>
            <AccordionContent>
              <span tabIndex={0}>
              Yes. Many resources, including support groups, counseling, and medication, can assist in the quitting process. Consult with healthcare professionals for personalized guidance.
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </section>




      <section>
        <DataTableDemo />
        <Separator />
      </section>
  </article>
  );
};

export default ArticlePage;
