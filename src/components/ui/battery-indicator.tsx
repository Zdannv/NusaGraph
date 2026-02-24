
"use client";

import { motion } from "framer-motion";

interface BatteryIndicatorProps {
  energy: number;
  maxEnergy: number;
}

export function BatteryIndicator({ energy, maxEnergy }: BatteryIndicatorProps) {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: maxEnergy }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: i < energy ? 1 : 0.2,
            scale: i < energy ? 1 : 0.9,
            backgroundColor: i < energy ? "#ECAD1B" : "#444" 
          }}
          className={`h-6 w-3 rounded-sm ${i < energy ? 'shadow-[0_0_8px_#ECAD1B]' : ''}`}
        />
      ))}
    </div>
  );
}
