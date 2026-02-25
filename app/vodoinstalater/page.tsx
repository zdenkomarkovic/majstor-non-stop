"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  Droplets,
  Shield,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Home,
  Building,
} from "lucide-react";
import Image from "next/image";

export default function VodoinstalaterPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vodoinstalater.jpg"
            alt="Vodoinstalater Niš - Hitne Intervencije"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative  text-center text-white flex flex-col items-center justify-end h-full text-white px-4 max-w-4xl mx-auto mb-5 md:mb-10 ">
          <motion.h1
            className="text-3xl md:text-6xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            VODOINSTALATER NIŠ
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl md:mb-8 mb-4 text-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hitne Intervencije u Nišu i okolini 24/7
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl md:mb-12 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Rešavamo sve probleme sa vodom - pucanje cevi, curenje, kvarovi u
            instalacijama. Brza i efikasna rešenja kada su najpotrebnija.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row md:gap-4 gap-2 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="tel:0607182300"
              onClick={() => (window as any).gtag_report_conversion?.('tel:0607182300')}
              className="bg-primary hover:bg-red-700 text-white md:px-8 md:py-4 px-4 py-2 rounded-full text-xl font-bold flex items-center gap-3 transition-colors"
            >
              <Phone className="w-6 h-6" />
              0607182300
            </a>

            <div className="flex items-center gap-2 text-yellow-400">
              <Clock className="w-5 h-5" />
              <span className="text-lg font-semibold">Dostupni 24/7</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-gradient-to-br from-gray-200 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Naše Vodoinstalaterske Usluge
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Pružamo kompletan spektar vodoinstalaterskih usluga u Nišu i
              okolini. Naš tim stručnjaka je uvek spreman da odgovori na hitne
              pozive. Hausmajstor u Nišu i okolini.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Hitne Intervencije */}
            <motion.div
              className="bg-white border border-red-200 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Hitne Intervencije
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Pucanje cevi - brza sanacija</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Curenje vode - trenutno rešavanje</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Blokada odvoda - hitno čišćenje</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Kvarovi u instalacijama</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Zamena ventila i slavina</span>
                </li>
              </ul>
            </motion.div>

            {/* Instalacije */}
            <motion.div
              className="bg-white border border-blue-200 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Instalacije
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Nova vodoinstalacija</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Renoviranje postojećih instalacija</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Instalacija bojlera</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Instalacija grejalica</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Instalacija WC-a i kupatila</span>
                </li>
              </ul>
            </motion.div>

            {/* Održavanje */}
            <motion.div
              className="bg-white border border-green-200 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Održavanje
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Redovno održavanje instalacija</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Čišćenje i dezinfekcija</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Zamena starih delova</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Preventivni pregledi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Savetovanje i konsultacije</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Types of Properties */}
          <motion.div
            className="bg-white rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Radimo na svim tipovima objekata
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4 justify-center">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Stambeni objekti
                  </h4>
                  <p className="text-gray-600">Stanovi, kuće, vikendice</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Komercijalni objekti
                  </h4>
                  <p className="text-gray-600">
                    Kancelarije, restorani, prodavnice
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Emergency CTA */}
      <section className="py-4 bg-gradient-to-br from-gray-900 to-gray-500 text-white">
        <div className="container mx-auto px-4 text-center flex flex-col-reverse md:flex-row gap-3 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Problem sa Vodom u Nišu i okolini?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ne čekajte! Pozovite nas odmah za hitnu vodoinstalatersku
              intervenciju. Naš tim je spreman da odgovori na vaš poziv 24 sata
              dnevno. Hausmajstor u Nišu i okolini.
            </p>
            <a
              href="tel:+381607182300"
              onClick={() => (window as any).gtag_report_conversion?.('tel:+381607182300')}
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-6 h-6 inline mr-2" />
              0607182300
            </a>
          </motion.div>
          <Image
            src="/cta2.jpg"
            alt="Vodoinstalater"
            width={300}
            height={200}
            className=" rounded-full"
          />
        </div>
      </section>

      {/* Why Choose Us for Plumbing */}
      <section className="py-20 bg-gradient-to-br from-gray-200 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold  mb-6">
              Zašto Birati Nas za Vodoinstalaterske Usluge?
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Naš tim vodoinstalatera sa višegodišnjim iskustvom garantuje
              kvalitet i brzinu
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Hitna Intervencija
              </h3>
              <p className="text-gray-600">Dolazimo u roku od 30 minuta</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Stručnost
              </h3>
              <p className="text-gray-600">Licencirani vodoinstalateri</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kvalitet</h3>
              <p className="text-gray-600">Korišćenje kvalitetnih materijala</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Garantija
              </h3>
              <p className="text-gray-600">Garantovana usluga i materijali</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
