// pages/hello.tsx
'use client'
import  {DataTableDemo} from '@/components/specials/TableDataSet';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import PdfViewer from '@/components/specials/PdfViewer';

const ArticlePage = () => {
  return (
    <article className="container">

      <section className="flex flex-col items-center py-20 sm:flex-row-reverse ">
        <Image
          width={200}
          height={200}
          alt="A puzzle depicting the interconnection of power and reputation, symbolizing their inseparable nature in personal and professional growth."
          className="mb-8 w-full rounded-lg sm:mb-0 sm:ml-4 sm:w-1/2 dark:contrast-200"
          src="/no-smoke.jpeg"
          tabIndex={0}
        />

        <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
          <h1 tabIndex={0} className="dark:text-dark-50 mb-4 text-3xl font-bold leading-tight md:text-4xl">
          Mastering the Triad of Success <br /> in a Complex World

          </h1>
          <p id="programDescription" className="mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-400" tabIndex={0} >
          Embark on a journey where power, reputation, and strategic communication converge to unlock the gates of personal and professional triumph. <br/>
          In this hero section, we navigate the intricate landscape of life&apos;s challenges,  <br/>
          exploring how the interplay of these dynamic forces can shape destinies and leave an indelible mark on the fabric of society.
          </p>
          <Link
            className=" inline-block rounded-lg border-0 bg-pink-700 px-12 py-2 text-base text-white transition hover:bg-pink-800"
            href="#call-action"
          >
            Reach Out
          </Link>
        </div>
      </section>
      <section className="container mx-auto flex flex-col items-center gap-10  sm:flex-row-reverse sm:px-0">

        <div className="mr-4 flex h-full w-full flex-col text-center sm:w-1/2 sm:text-left">
          <h2 tabIndex={0} className="dark:text-dark-50 mb-4 text-3xl font-bold leading-tight md:text-4xl">
          The Strategic Art of Communication
          </h2>
          <p className="mb-8 text-left text-lg text-muted-foreground" tabIndex={0}>
          Communication stands out as a key to power, exemplified by historical declarations like Louis XIV&apos;s &quot;I am the State&quot; and Hannibal&apos;s bold tactics.<br /> This section explores the historical significance of words and staging in maintaining authority and destabilizing adversaries.<br /> It highlights the role of strategic communication as an essential element in the pursuit of power, providing examples that showcase the impact of eloquence and theatricality.
            </p>
        </div>

        <Image
          width={200}
          height={200}
          alt="A person standing on a podium, symbolizing the power of effective communication in influencing others."
          className="mb-8 h-full w-full rounded-lg object-cover sm:mb-0 sm:ml-4 sm:w-1/2 dark:contrast-200"
          src="/no-smoke.jpeg"
          tabIndex={0}
        />

        </section>
      <section className="container grid items-center gap-6 pt-6 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl" tabIndex={0}>Navigating the Paradox of Modern Power</h2>
          <p className="text-lg text-muted-foreground" tabIndex={0}>
          Despite the modern quest for justice and equality, the primal instincts of power persist within each of us. This paragraph delves into the paradox of our dual nature and the importance of emotional intelligence in mastering the art of transforming adversaries into allies.<br />
          By strategically managing reactions and turning adversities into mutually beneficial collaborations, individuals can harness the seemingly conflicting forces within and achieve success in a balanced manner.
          </p>
          <ol className="list-disc" aria-describedby="cTitle">
            <li tabIndex={0}>The Essence of Power and Reputation</li>
            <li tabIndex={0}>Navigating the Paradox of Modern Power</li>
            <li tabIndex={0}>The Strategic Art of Communication</li>
            <li tabIndex={0}>Building Strategic Networks for Professional Success</li>


         </ol>

          <Image
            width={200}
            height={340}
            alt="Yin and yang symbolizing the balance between primal power instincts and the quest for justice and equality."
            className=" h-64 w-full rounded-lg object-cover dark:contrast-200"
            src="/smoking-intro.jpeg"
            tabIndex={0}
          />

        </div>
      </section>





      <section className="container grid items-center gap-6 pb-8  md:py-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How important is reputation in the pursuit of power and success?</AccordionTrigger>
            <AccordionContent >
              <span tabIndex={0}>
              Reputation is crucial, serving as the cornerstone of power.<br /> It influences how others perceive and interact with an individual, playing a vital role in professional success and societal positioning.              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can one navigate the paradox of power in the modern world?</AccordionTrigger>
            <AccordionContent>
              <span tabIndex={0}>
              Emotional intelligence is key.<br /> By mastering emotional responses and transforming adversaries into allies, individuals can balance primal power instincts with the contemporary pursuit of justice and equality.              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger> What role does strategic communication play in achieving power?</AccordionTrigger>
            <AccordionContent>
              <span tabIndex={0}>
              Strategic communication, as exemplified by historical declarations and tactics, is instrumental in maintaining authority and influencing others.<br /> It is a powerful tool for achieving and sustaining power.              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Why is strategic networking essential for professional success?</AccordionTrigger>
            <AccordionContent>
              <span tabIndex={0}>
              Strategic networking, as highlighted in &quot;Never Eat Alone,&quot; is crucial for personal and professional growth.<br /> It involves fostering meaningful connections, transforming contacts into allies, and building a network that proves invaluable when opportunities arise.
              </span>
              </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section>
        <PdfViewer pdfUrl='/essai-abir.pdf'></PdfViewer>
      </section>


  </article>
  );
};

export default ArticlePage;
