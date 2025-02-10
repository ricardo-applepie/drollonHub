'use client';
import { Button, FormGroup, Grid2, TextField } from '@mui/material';
import Image from 'next/image';
import AccordionUsage from './components/accordion/Accordion';
import OutlinedCard from './components/card/Card';

export default function Home() {
  const icons = ['Neubauprojekte', 'Haus bauen', 'Gewerbeimmobilien', 'Auslandsimmobilien'];

  return (
    <main className="flex flex-col h-full w-full font-[family-name:var(--font-geist-sans)]">
      <section className="section section--full flex justify-center pt-8 md:pt-20">
        <div className="search">
          <h1 className="text-4xl md:text-5xl text-center text-white">Discover your new home.</h1>
          <h2  className="text-xl md:text-2xl text-center my-5 text-white">Rent a place and stay for months.</h2>
          <form className="search__form bg-white pt-10 pb-5 px-10">
            <div className="flex flex-col md:flex-row gap-2">
              <TextField placeholder="Where will you go ?" className="w-full md:w-2/5" />
              <div className="flex w-full md:w-2/5 gap-2">
                <TextField placeholder="Move-in date" className="w-1/2"  />
                <TextField placeholder="Move-out date" className="w-1/2 " />
              </div>
              <Button variant="contained" className="w-full md:w-1/5" >Search</Button>
            </div>
          </form>
        </div>
      </section>
      <section className="max-w-7xl mx-auto flex flex-wrap gap-4 px-5">
        {icons.map((text, index) => (
          <OutlinedCard text={text} iconIndex={index} key={`action_icon${index}`} className="w-full md:w-1/5"/>
        ))}
      </section>
      <section className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto items-center px-5">
        <img 
          src="/realty-agent-holding-keys-standing-near-building-isolated-flat-vector-illustration-cartoon-woman-house-sale_74855-8548.avif" 
          alt="finding appartments berlin" 
        />
        <div className="pt-4">
          <h3 className="font-bold text-5xl mb-7">DrollonHub best housing portal 2024*</h3>
          <p>
            Das Deutsche Institut für Service-Qualität und der Nachrichtensender ntv haben 13 Immobilienportale bewertet – und immowelt erhielt den 1. Platz! Die Auszeichnung bestätigt, dass Suchenden wie Immobilienprofis immowelt das beste Erlebnis bietet. Also: Wenn immo, dann immowelt.
          </p>
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto items-center px-5">
        <div className="pt-4">
          <h3 className="font-bold text-5xl mb-7">Stay safe with protected payments</h3>
          <p>
             When you pay to confirm the booking, your money is safe with us. We send it to the landlord only 48 hours after you move in unless you tell us the place isn't as promised. If you contact us, we'll help you.
            Protecting you against risks. Making your move safer.          
         </p>
        </div>
        <img 
          src="/realty-agent-holding-keys-standing-near-building-isolated-flat-vector-illustration-cartoon-woman-house-sale_74855-8548.avif" 
          alt="finding appartments berlin" 
        />
      </section>
      <section className="max-w-4xl mx-auto">
        <h3 className="font-bold text-center text-5xl mb-5">Here are the answers to your questions.</h3>
        <AccordionUsage />
      </section>
    </main>
  );
}
