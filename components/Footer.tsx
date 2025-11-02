"use client";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Wrench,
  Zap,
  Key,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-center">
              <Image
                src={Logo}
                alt="Majstor Non Stop"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="text-2xl font-bold">Majstor Non Stop</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Hitne majstorske usluge u Nišu i okolini. Dostupni 24 sata dnevno,
              7 dana u nedelji za sve vaše hitne potrebe.
            </p>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.instagram.com/majstor_nonstop/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Naše Usluge</h4>
            <ul className="space-y-3 mx-auto w-fit">
              <li>
                <Link
                  href="/vodoinstalater"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Wrench className="w-4 h-4" />
                  Vodoinstalater
                </Link>
              </li>
              <li>
                <Link
                  href="/elektricar"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Električar
                </Link>
              </li>
              <li>
                <Link
                  href="/bravar"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Key className="w-4 h-4" />
                  Bravar
                </Link>
              </li>
              <li className="text-gray-300">Hitne intervencije 24/7</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-fit mx-auto text-center">
            <h4 className="text-xl font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4 mx-auto w-fit">
              <li className=" ">
                <a
                  href="tel:0607182300"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-red-500" />
                  0607182300
                </a>
              </li>
              <li className=" ">
                <a
                  href="tel:0607182300"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-3"
                >
                  <MapPin className="w-5 h-5 text-red-500 mt-1" />
                  <div className="text-gray-300">
                    <p>Rimska 9 br 5a</p>
                    <p>Brzi Brod, Niš</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 ">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">Dostupni 24/7</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Brze Veze</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/vodoinstalater"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Vodoinstalater
                </Link>
              </li>
              <li>
                <Link
                  href="/elektricar"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Električar
                </Link>
              </li>
              <li>
                <Link
                  href="/bravar"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bravar
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency CTA */}

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-4 md:px-52">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-base">
                &copy; {new Date().getFullYear()} Majstor Non Stop. Sva prava
                zadržana.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Hitne majstorske usluge u Nišu i okolini
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-base">
                Izrada sajta:{" "}
                <a
                  href="https://www.manikamwebsolutions.com/"
                  target="_blank"
                  className="text-primary hover:text-white transition-colors"
                >
                  ManikamWebSolutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
