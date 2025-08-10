'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * Componente de tarjeta con efecto de inclinación 3D sutil
 * Basado en la librería de reactbits.dev para efectos suaves
 */
export default function TiltedCard({ 
  children, 
  className = "", 
  onClick,
  disabled = false 
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Valores de movimiento para el efecto 3D
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transformaciones suaves con spring - valores más sutiles
  const rotateX = useTransform(y, [-100, 100], [8, -8]); // Reducido de 30 a 8 grados
  const rotateY = useTransform(x, [-100, 100], [-8, 8]); // Reducido de 30 a 8 grados

  // Valores con spring para transiciones suaves - configuración más suave
  const springConfig = { damping: 25, stiffness: 150 }; // Más suave que antes
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springScale = useSpring(isHovered ? 1.02 : 1, springConfig); // Reducido de 1.05 a 1.02

  /**
   * Maneja el movimiento del mouse para el efecto de inclinación
   */
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    x.set(mouseX);
    y.set(mouseY);
  };

  /**
   * Resetea la posición cuando el mouse sale de la tarjeta
   */
  const handleMouseLeave = () => {
    if (disabled) return;
    
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  /**
   * Activa el hover cuando el mouse entra en la tarjeta
   */
  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        cursor: disabled ? 'default' : 'pointer'
      }}
      whileHover={!disabled ? { scale: 1.01 } : {}} // Reducido de 1.02 a 1.01
      whileTap={!disabled ? { scale: 0.99 } : {}} // Reducido de 0.98 a 0.99
      transition={{
        type: "spring",
        stiffness: 200, // Reducido de 300
        damping: 25 // Aumentado de 20
      }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale: springScale,
          transformStyle: 'preserve-3d'
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
