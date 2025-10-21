'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnnouncementBar from '../components/AnnouncementBar';
import styles from './LayoutContent.module.css';

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  return (
    <div className={styles.layout}>
      <AnnouncementBar />
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
