"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function KontaktPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cta.jpg"
            alt="Kontakt - Majstor Non Stop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            KONTAKT
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trebate hitnu majstorsku pomoć? Kontaktirajte nas odmah!
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kontaktirajte Nas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naš tim je uvek spreman da odgovori na vaš poziv i pruži hitnu majstorsku pomoć
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <motion.div 
              className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Telefon</h3>
              <p className="text-gray-600 mb-4">
                Pozovite nas za hitne intervencije
              </p>
              <Link 
                href="tel:0607182300"
                className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
              >
                0607182300
              </Link>
            </motion.div>

            {/* Address */}
            <motion.div 
              className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Adresa</h3>
              <p className="text-gray-600 mb-4">
                Naša lokacija u Nišu
              </p>
              <address className="text-lg text-gray-800 not-italic">
                Rimska 9 br 5a<br />
                Brzi Brod, Niš
              </address>
            </motion.div>

            {/* Working Hours */}
            <motion.div 
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Radno Vreme</h3>
              <p className="text-gray-600 mb-4">
                Dostupni smo 24 sata dnevno
              </p>
              <div className="text-lg text-gray-800">
                <p className="font-bold text-green-600">24/7</p>
                <p className="text-sm">Hitne intervencije</p>
              </div>
            </motion.div>
          </div>

          {/* Services Overview */}
          <motion.div 
            className="bg-gray-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Naše Usluge
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Vodoinstalater</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Pucanje cevi</li>
                  <li>• Curenje vode</li>
                  <li>• Kvarovi u instalacijama</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Električar</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Nestanak struje</li>
                  <li>• Kratki spoj</li>
                  <li>• Kvarovi u instalacijama</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Bravar</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Izgubljeni kljucevi</li>
                  <li>• Polomljene brave</li>
                  <li>• Otključavanje</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trebate Hitnu Pomoc?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Pozovite nas odmah! Naš tim je spreman da odgovori na vaš poziv 24 sata dnevno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="tel:0607182300"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-6 h-6 inline mr-2" />
                0607182300
              </Link>
              
              <div className="flex items-center gap-2 text-yellow-300">
                <Clock className="w-5 h-5" />
                <span className="text-lg font-semibold">Dostupni 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Naša Lokacija
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nalazimo se u Brzom Brodu, Niš - lako dostupni za sve hitne intervencije
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rimska 9 br 5a, Brzi Brod, Niš
              </h3>
              <p className="text-gray-600 mb-6">
                Naša adresa je centar Niša, što nam omogućava brz odgovor na sve pozive u gradu i okolini.
              </p>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Mapa lokacije</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Rimska 9 br 5a, Brzi Brod, Niš
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}