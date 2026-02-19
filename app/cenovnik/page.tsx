"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  Droplets,
  Zap,
  Key,
  CheckCircle,
  Info,
} from "lucide-react";
import type { Metadata } from "next";

const vodoUsluge = [
  { name: "Zamena ventila (virbla) i ek ventila", price: "2.000 din" },
  { name: "Zamena slavine", price: "2.000 din" },
  { name: "Zamena tuš baterije", price: "2.500 din" },
  { name: "Zamena sifona sudopere", price: "2.000 din" },
  { name: "Zamena sifona kade", price: "2.000 din" },
  { name: "Zamena kotlića", price: "3.000 din" },
  { name: "Zamena plovka u kotliću", price: "2.000 din" },
  { name: "Zamena brinox creva", price: "2.000 din" },
  { name: "Zamena bojlera", price: "5.000 – 6.000 din" },
  { name: "Zamena termostata bojlera", price: "3.000 din" },
  { name: "Zamena sigurnosnog ventila", price: "3.000 din" },
  {
    name: "Otpuštanje WC šolje, demontaža i montaža",
    price: "6.000 din",
  },
];

const bravarUsluge = [
  { name: "Otključavanje sigurnosnih / ulaznih vrata", price: "6.000 din" },
  { name: "Otvaranje sobnih vrata", price: "4.000 din" },
  { name: "Zamena brave (sigurnosna vrata)", price: "5.000 din" },
  { name: "Zamena cilindra", price: "1.800 – 4.000 din" },
  { name: "Zamena kvake (sigurnosna vrata)", price: "3.500 din" },
  { name: "Zamena brave sobnih vrata (drvena)", price: "2.500 din" },
  { name: "Zamena kvake (sobna vrata)", price: "1.500 – 3.000 din" },
];

const elektroUsluge = [
  { name: "Zamena prekidača / utičnice", price: "1.800 din" },
  { name: "Zamena indikatora", price: "2.500 din" },
  { name: "Zamena prekidača na indikatoru", price: "1.500 din / kom" },
  { name: "Zamena LED panela / lustera", price: "2.000 din" },
  { name: "Zamena automatskog osigurača", price: "2.500 din" },
];

export default function CenovnikPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="relative text-center text-white flex flex-col items-center justify-end h-full px-4 max-w-4xl mx-auto mb-10 md:mb-16 pt-28">
          <motion.h1
            className="text-3xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CENOVNIK USLUGA
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl mb-6 text-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hausmajstor Niš – Transparentne Cene
          </motion.h2>
          <motion.p
            className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cene su okvirne i odnose se isključivo na radnu snagu. Materijal se
            naplaćuje posebno po dogovoru.
          </motion.p>
          <motion.a
            href="tel:+381607182300"
            className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center gap-3 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Phone className="w-6 h-6" />
            0607182300
          </motion.a>
        </div>
      </section>

      {/* Napomena */}
      <section className="bg-yellow-50 border-b border-yellow-200 py-4 px-4">
        <div className="container mx-auto max-w-4xl flex items-start gap-3 text-yellow-800">
          <Info className="w-5 h-5 mt-1 flex-shrink-0" />
          <p className="text-sm md:text-base">
            <strong>Napomena:</strong> Sve navedene cene su okvirne i odnose se
            samo na radnu snagu. Cena materijala nije uključena i dogovara se
            posebno. Za tačnu procenu pozovite nas ili nas kontaktirajte putem
            telefona.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16 bg-gradient-to-br from-gray-200 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Vodoinstalaterske usluge */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Vodoinstalaterske Usluge
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {vodoUsluge.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-between px-6 py-4 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } border-b border-gray-100 last:border-0`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-800 font-medium">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-primary font-bold text-lg whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bravarske usluge */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                <Key className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Bravarske Usluge
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {bravarUsluge.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-between px-6 py-4 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } border-b border-gray-100 last:border-0`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-800 font-medium">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-primary font-bold text-lg whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Elektro usluge */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Elektro Usluge
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {elektroUsluge.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-between px-6 py-4 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } border-b border-gray-100 last:border-0`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-800 font-medium">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-primary font-bold text-lg whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Opšte / Dolazak */}
          <motion.div
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900 px-6 py-4">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Opšte
              </h2>
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <span className="text-gray-800 font-medium block">
                    Dolazak – utvrđivanje kvara / problema
                  </span>
                  <span className="text-gray-500 text-sm">
                    Uračunava se u cenu popravke
                  </span>
                </div>
              </div>
              <span className="text-primary font-bold text-lg whitespace-nowrap ml-4">
                1.500 din
              </span>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm md:text-base">
                  Za ostale usluge – cena se utvrđuje na licu mesta, pri
                  dolasku ili utvrđivanju problema. Pozovite nas za besplatnu
                  procenu.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gradient-to-br from-gray-900 to-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Pozovite nas za procenu!
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Dostupni smo 24/7. Brza reakcija, povoljne cene, kvalitetan rad.
              Hausmajstor Niš i okolina.
            </p>
            <a
              href="tel:+381607182300"
              className="inline-flex items-center gap-3 bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full text-xl font-bold transition-colors"
            >
              <Phone className="w-6 h-6" />
              0607182300
            </a>
            <div className="flex items-center justify-center gap-2 mt-4 text-yellow-400">
              <Clock className="w-5 h-5" />
              <span className="text-lg font-semibold">Dostupni 24/7</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
