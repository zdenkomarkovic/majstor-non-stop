"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Clock, Star, Wrench } from "lucide-react";
import { type LucideIcon } from "lucide-react"

interface StatisticItem {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

const statistics: StatisticItem[] = [
  {
    icon: Users,
    value: 500,
    label: "Zadovoljnih Klijenata",
    color: "text-blue-600"
  },
  {
    icon: Clock,
    value: 15,
    label: "Minuta Prosečno Vreme Odgovora",
    suffix: "min",
    color: "text-green-600"
  },
  {
    icon: Star,
    value: 4,
    suffix: ".9",
    label: "Prosečna Ocena",
    color: "text-yellow-600"
  },
  {
    icon: Wrench,
    value: 1000,
    label: "Uspešno Rešenih Problema",
    color: "text-red-600"
  }
];

function AnimatedCounter({ 
  value, 
  duration = 2000, 
  suffix = "" 
}: { 
  value: number; 
  duration?: number; 
  suffix?: string; 
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (endValue - startValue) * easeOutQuart;
      
      setCount(Math.floor(currentValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Naši Rezultati Govore
          </h2>
          <p className="text-xl  max-w-3xl mx-auto">
            Brojke koje potvrđuju našu stručnost i posvećenost kvalitetu usluge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-gradient-to-bl from-gray-400 to-gray-300  rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className={`w-8 h-8 text-primary`} />
              </div>
              
              <div className={`text-primary mb-4`}>
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              
              <h3 className="text-lg font-semibold text-black mb-2">
                {stat.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

