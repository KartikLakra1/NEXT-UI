"use client";

import React from "react";
import { StickyScroll } from './ui/sticky-scroll-reveal';

const StickyScrol = () => {
    const content = [
        {
          "title": "Jazz Fusion: Exploring Musical Boundaries",
          "description": "This article delves into the genre of jazz fusion, examining its origins, key artists, and influential albums. From Miles Davis to Weather Report, discover the fusion of jazz with rock, funk, and other genres."
        },
        {
          "title": "The Evolution of Hip-Hop: From the Bronx to Global Phenomenon",
          "description": "Explore the rich history and cultural impact of hip-hop music. From its humble beginnings in the South Bronx to becoming a dominant force in mainstream culture worldwide, this article traces the evolution of hip-hop through its key milestones and iconic figures."
        },
        {
          "title": "Classical Music: A Timeless Journey Through Sound",
          "description": "Embark on a journey through the world of classical music, spanning centuries of masterpieces and musical innovation. From the symphonies of Beethoven to the operas of Mozart, discover the enduring beauty and complexity of classical compositions."
        },
        {
          "title": "Electronic Dance Music: Revolutionizing the Club Scene",
          "description": "Dive into the electrifying world of electronic dance music (EDM), where pulsating beats and infectious rhythms dominate the dance floor. From house to techno, explore the diverse subgenres and global impact of EDM on contemporary music culture."
        }
      ]


  return (
    <div className="p-10">
    <StickyScroll content={content} />
  </div>
  )
};

export default StickyScrol;
