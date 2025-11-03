'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CreditCardProps {
  variant?: 'primary' | 'gold' | 'platinum' | 'black';
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  className?: string;
}

export function CreditCardComponent({
  variant = 'primary',
  cardNumber = '4532 1234 5678 9012',
  cardHolder = 'JOÃO SILVA',
  expiryDate = '12/28',
  className = '',
}: CreditCardProps) {
  const cardStyle = {
    primary: 'from-blue-600 via-blue-700 to-blue-800',
    gold: 'from-yellow-400 via-yellow-500 to-yellow-600',
    platinum: 'from-gray-300 via-gray-400 to-gray-500',
    black: 'from-gray-800 via-gray-900 to-black',
  };

  return (
    <motion.div
      className={`relative w-full max-w-[320px] h-[192px] sm:w-80 sm:h-48 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${cardStyle[variant]} shadow-2xl overflow-hidden`}>
        <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
          {/* Top Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/logo-picredi.png" 
                alt="Picredi Logo" 
                className="h-5 w-auto object-contain"
              />
              <div className="text-xs font-medium opacity-90">DIGITAL</div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-lg font-mono tracking-wider mb-2">
              {cardNumber}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium opacity-80">
                {cardHolder}
              </div>
              <div className="text-xs font-medium opacity-80">
                {expiryDate}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between">
            <div className="text-xs font-medium opacity-60">
              CREDIT CARD
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-4 bg-white rounded-sm flex items-center justify-center">
                <div className="w-4 h-2 bg-red-500 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CreditCardStack() {
  const cards = [
    { variant: 'black' as const, cardNumber: '4532 1234 5678 9012', cardHolder: 'JOÃO SILVA', expiryDate: '12/28' },
    { variant: 'gold' as const, cardNumber: '4532 1234 5678 9013', cardHolder: 'MARIA SANTOS', expiryDate: '10/29' },
    { variant: 'platinum' as const, cardNumber: '4532 1234 5678 9014', cardHolder: 'CARLOS OLIVEIRA', expiryDate: '08/30' },
  ];

  return (
    <div className="relative w-full max-w-[320px] h-[192px] sm:w-80 sm:h-48 mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ 
            y: index * 8, 
            x: index * 4, 
            rotateZ: index * 2,
            scale: 1 - (index * 0.05),
            zIndex: cards.length - index 
          }}
          animate={{ 
            y: index * 8, 
            x: index * 4, 
            rotateZ: index * 2,
            scale: 1 - (index * 0.05),
          }}
          whileHover={{ 
            y: 0, 
            x: 0, 
            rotateZ: 0,
            scale: 1.1,
            zIndex: 10,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <CreditCardComponent
            variant={card.variant}
            cardNumber={card.cardNumber}
            cardHolder={card.cardHolder}
            expiryDate={card.expiryDate}
          />
        </motion.div>
      ))}
    </div>
  );
}