"use client";

import { motion } from "framer-motion";
import { Phone, Clock, Zap, Shield, CheckCircle, AlertTriangle, Wrench, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ElektricarPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/elektricar.jpg"
            alt="Električar Niš - Hitne Intervencije"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative text-center text-white flex flex-col items-center justify-end h-full text-white px-4 max-w-4xl mx-auto mb-10 ">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ELEKTRIČAR NIŠ
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl mb-8 text-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hitne Intervencije u Nišu i okolini 24/7
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Rešavamo sve električne probleme - nestanak struje, kratki spoj, kvarovi u instalacijama. 
            Sigurno i profesionalno kada je najpotrebnije.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              href="tel:0607182300"
              className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center gap-3 transition-colors"
            >
              <Phone className="w-6 h-6" />
              0607182300
            </Link>
            
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold  mb-6">
              Naše Električarske Usluge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pružamo kompletan spektar električarskih usluga u Nišu i okolini. 
              Naš tim stručnjaka je uvek spreman da odgovori na hitne pozive. Hausmajstor u Nišu i okolini.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Hitne Intervencije */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hitne Intervencije</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Nestanak struje - brza dijagnostika</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Kratki spoj - trenutno rešavanje</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Kvarovi u instalacijama</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Zamena osigurača</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Popravka prekidača i utičnica</span>
                </li>
              </ul>
            </motion.div>

            {/* Instalacije */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Instalacije</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Nova električna instalacija</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Renoviranje postojećih instalacija</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Instalacija osvetljenja</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Instalacija utičnica i prekidača</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Instalacija bojlera i grejalica</span>
                </li>
              </ul>
            </motion.div>

            {/* Održavanje */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Održavanje</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Redovno održavanje instalacija</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Pregled i testiranje instalacija</span>
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
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Savetovanje i konsultacije</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Specialized Services */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Specijalizovane Usluge
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Osvetljenje</h4>
                <p className="text-gray-600 text-sm">LED, halogen, fluorescentno</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Struja</h4>
                <p className="text-gray-600 text-sm">Instalacije, prekidači, utičnice</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Sigurnost</h4>
                <p className="text-gray-600 text-sm">Osigurači, RCD, uzemljenje</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Hitne</h4>
                <p className="text-gray-600 text-sm">24/7 intervencije</p>
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
            Problem sa Strujom u Nišu i okolini?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ne čekajte! Pozovite nas odmah za hitnu električarsku intervenciju. Naš tim je spreman da odgovori na vaš poziv 24 sata dnevno. Hausmajstor u Nišu i okolini.
            </p>
            <Link 
              href="tel:+381607182300"
              className="inline-block bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-6 h-6 inline mr-2" />
              0607182300
            </Link>
          </motion.div>
            <Image src="/cta2.jpg" alt="Vodoinstalater" width={300} height={200} className=" rounded-full" />
        </div>
      </section>
      {/* Why Choose Us for Electrical */}
      <section className="py-20 bg-gradient-to-br from-gray-200 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Zašto Birati Nas za Električarske Usluge?
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Naš tim električara sa višegodišnjim iskustvom garantuje kvalitet i sigurnost
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hitna Intervencija</h3>
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
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stručnost</h3>
              <p className="text-gray-600">Licencirani električari</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sigurnost</h3>
              <p className="text-gray-600">Korišćenje sigurnosnih standarda</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Garantija</h3>
              <p className="text-gray-600">Garantovana usluga i materijali</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
