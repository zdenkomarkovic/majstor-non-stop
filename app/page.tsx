"use client";

import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Wrench, Zap, Key, Droplets, Shield, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Majstor Non Stop - Hitne Intervencije"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative text-center flex flex-col items-center justify-end h-full text-white px-4 max-w-4xl mx-auto mb-10 md:mb-20"   >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MAJSTOR NON STOP NIŠ
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-yellow-400"
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
            Vodoinstalater • Električar • Bravar
            <br />
            Dostupni 24 sata dnevno, 7 dana u nedelji
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              href="tel:+381607182300"
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

      {/* Services Overview */}
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
              Naše Usluge
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Pružamo hitne majstorske usluge u Nišu i okolini. 
              Naš tim stručnjaka je uvek spreman da odgovori na vaš poziv. Hausmajstor u Nišu i okolini.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vodoinstalater */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Droplets className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vodoinstalater</h3>
                <p className="text-gray-600 mb-6">
                  Hitne intervencije za sve probleme sa vodom - pucanje cevi, curenje, 
                  kvarovi u instalacijama. Brza i efikasna rešenja.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Pucanje cevi
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Curenje vode
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Kvarovi u instalacijama
                  </li>
                </ul>
                <Link 
                  href="/vodoinstalater"
                  className="inline-block bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Saznaj više
                </Link>
              </div>
            </motion.div>

            {/* Električar */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Električar</h3>
                <p className="text-gray-600 mb-6">
                  Rešavamo sve električne probleme - nestanak struje, kratki spoj, 
                  kvarovi u instalacijama. Sigurno i profesionalno.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Nestanak struje
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Kratki spoj
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Kvarovi u instalacijama
                  </li>
                </ul>
                <Link 
                  href="/elektricar"
                  className="inline-block bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Saznaj više
                </Link>
              </div>
            </motion.div>

            {/* Bravar */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="bg-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Key className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bravar</h3>
                <p className="text-gray-600 mb-6">
                  Hitne bravarske usluge - izgubljeni kljucevi, polomljene brave, 
                  otključavanje. Brza pomoć kada je najpotrebnija.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Izgubljeni kljucevi
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Polomljene brave
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Otključavanje
                  </li>
                </ul>
                <Link 
                  href="/bravar"
                  className="inline-block bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Saznaj više
                </Link>
              </div>
            </motion.div>
          </div>
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
            Trebate Hitno Majstora u Nišu i okolini?

            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pozovite nas odmah! Naš tim je spreman da odgovori na vaš poziv 24 sata dnevno. Hausmajstor u Nišu i okolini.
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Zašto Birati Nas?
            </h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Naš tim stručnjaka sa višegodišnjim iskustvom garantuje kvalitet i brzinu
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dostupni 24/7</h3>
              <p className="text-gray-600">Uvek tu kada nas trebate</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stručnost</h3>
              <p className="text-gray-600">Licencirani majstori</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lokalni</h3>
              <p className="text-gray-600">Brzi Brod, Niš</p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kvalitet</h3>
              <p className="text-gray-600">Garantovana usluga</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}

    </div>
  );
}

