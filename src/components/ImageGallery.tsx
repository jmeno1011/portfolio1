"use client"
import { useState } from 'react'
import Image from "next/image"
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps{ images: string[]; projectTitle: string };
export default function ImageGallery({ images, projectTitle }:ImageGalleryProps ) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative group overflow-hidden rounded-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={images?.[currentImage] || "/placeholder.svg"}
          alt={`${projectTitle} screenshot ${currentImage + 1}`}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          priority={currentImage === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="outline"
          size="icon"
          onClick={prevImage}
          className="bg-white/90 hover:bg-white backdrop-blur-sm border-white/20 shadow-lg transform hover:scale-110 transition-all duration-200"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextImage}
          className="bg-white/90 hover:bg-white backdrop-blur-sm border-white/20 shadow-lg transform hover:scale-110 transition-all duration-200"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white scale-125 shadow-lg" : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
