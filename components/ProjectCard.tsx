"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  desc: string;
  tag: string;
  topClass: string; // Buat ngatur posisi sticky manual (misal: "top-24", "top-32")
  bgClass: string;  // Buat warna background
  children?: ReactNode; // Biar bisa diselipin elemen tambahan secara bebas (gambar, tombol, dll)
}

export default function ProjectCard({
  title,
  desc,
  tag,
  topClass,
  bgClass,
  children,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Menggunakan h-auto dan min-h supaya ukurannya akurat menyesuaikan isi
      className={`sticky ${topClass} p-8 rounded-2xl shadow-2xl border border-slate-700 h-[90vh] md:h-[80vh] md:overflow-hidden flex flex-col ${bgClass}`}
    >
      <div>
        <span className="text-xs uppercase tracking-wider text-slate-200 font-bold font-spaceg">
          {tag}
        </span>
        <h3 className="md:text-2xl text-xl font-[700px] mt-2">{title}</h3>
        <p className="text-slate-100 mt-3 leading-relaxed md:font-md text-sm">{desc}</p>
      </div>

      {/* Tempat bebas buat nyelipin tombol/tech stack khusus */}
      <div className="mt-8 pt-6 border-t border-slate-100/50 font-spaceg">
        {children}
      </div>
    </motion.div>
  );
}