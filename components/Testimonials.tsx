"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marko Petrović",
    location: "Niš, Medijana",
    rating: 5,
    text: "Odličan servis! Došli su za 10 minuta kada je pukla cev u kuhinji. Brzo su rešili problem i sve je bilo profesionalno. Preporučujem svima!",
    service: "Vodoinstalater"
  },
  {
    id: 2,
    name: "Ana Stojanović",
    location: "Niš, Pantelej",
    rating: 5,
    text: "U 2 ujutru je nestala struja u celom stanu. Pozvala sam ih i za 15 minuta su bili tu. Stručno i brzo rešili problem. Hvala!",
    service: "Električar"
  },
  {
    id: 3,
    name: "Petar Nikolić",
    location: "Niš, Palilula",
    rating: 5,
    text: "Izgubio sam ključeve od stana uveče. Došli su brzo i otključali vrata bez oštećenja. Cena je bila fer i usluga odlična.",
    service: "Bravar"
  },
  {
    id: 4,
    name: "Milica Jovanović",
    location: "Niš, Crveni Krst",
    rating: 5,
    text: "Majstori su stvarno non-stop! U subotu uveče je počelo da curi voda ispod sudopere. Došli su za 20 minuta i sve rešili.",
    service: "Vodoinstalater"
  },
  {
    id: 5,
    name: "Stefan Đorđević",
    location: "Niš, Niška Banja",
    rating: 5,
    text: "Kvalitet rada je odličan, cene su pristupačne, a najvažnije - dostupni su 24/7. Kada treba hitna pomoć, zovem samo njih.",
    service: "Električar"
  },
  {
    id: 6,
    name: "Jelena Milosavljević",
    location: "Niš, Palilula",
    rating: 5,
    text: "Profesionalni pristup, brza intervencija i kvalitetan rad. Polomila se brava na ulaznim vratima, a oni su sve rešili za sat vremena.",
    service: "Bravar"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Šta Kažu Naši Klijenti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Iskustva naših zadovoljnih klijenata koji su se oslonili na našu stručnost
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Quote className="w-8 h-8 text-red-600 mb-4" />
              
              <StarRating rating={testimonial.rating} />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
              &quot;{testimonial.text}&quot;
              </p>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
              Postanite i Vi deo naše priče!
            </h3>
            <p className="text-lg mb-6 ">
              Pozovite nas danas i uverite se zašto nas klijenti preporučuju
            </p>
            <a
              href="tel:+381607182300"
              onClick={() => window.gtag_report_conversion?.('tel:+381607182300')}
              className="inline-block bg-white text-primary px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors"
            >
              0607182300
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

