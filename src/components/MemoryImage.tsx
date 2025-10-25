'use client';

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

interface MemoryImageProps {
  src: string;
  alt: string;
  className?: string;
  imageList?: string[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

export default function MemoryImage({ 
  src, 
  alt, 
  className,
  imageList = [],
  currentIndex = 0,
  onNavigate
}: MemoryImageProps) {
  const [thumbnailSrc] = useState(src); // Fixed thumbnail source - never changes
  const [modalImgSrc, setModalImgSrc] = useState(src); // Separate state for modal
  const [nextImgSrc, setNextImgSrc] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationState, setAnimationState] = useState<'closed' | 'opening' | 'open' | 'closing'>('closed');
  const [thumbnailRect, setThumbnailRect] = useState<DOMRect | null>(null);
  const [displayIndex, setDisplayIndex] = useState(currentIndex);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const [isSliding, setIsSliding] = useState(false);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const handleError = () => {
    // Only affects modal image, not thumbnail
  };

  const openModal = () => {
    if (thumbnailRef.current) {
      const rect = thumbnailRef.current.getBoundingClientRect();
      setThumbnailRect(rect);
    }
    
    // Set the correct image source for modal when opening
    setModalImgSrc(imageList[currentIndex] || src);
    setDisplayIndex(currentIndex);
    
    setIsModalOpen(true);
    setAnimationState('opening');
    
    // Transition to open state
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimationState('open');
      });
    });
  };

  const closeModal = () => {
    // Get the target thumbnail position based on current displayed image
    // If we've navigated to a different image, find its thumbnail
    const targetThumbnail = document.querySelector(`[data-memory-image][data-image-index="${displayIndex}"]`);
    let targetRect: DOMRect | null = null;
    
    if (targetThumbnail) {
      targetRect = targetThumbnail.getBoundingClientRect();
    }
    
    // Fallback to original thumbnail if target not found
    if (!targetRect && thumbnailRef.current) {
      targetRect = thumbnailRef.current.getBoundingClientRect();
    }
    
    if (targetRect) {
      setThumbnailRect(targetRect);
    }
    
    setAnimationState('closing');
    
    // Wait for animation to complete before closing
    setTimeout(() => {
      setIsModalOpen(false);
      setAnimationState('closed');
      setThumbnailRect(null);
    }, 350);
  };

  // Navigation functions with useCallback
  const navigatePrevious = useCallback(() => {
    if (imageList.length <= 1 || isSliding) return;
    
    const newIndex = displayIndex > 0 ? displayIndex - 1 : imageList.length - 1;
    setNextImgSrc(imageList[newIndex]);
    setSlideDirection('right'); // Sliding to right (previous image comes from left)
    setIsSliding(true);
    
    setTimeout(() => {
      setDisplayIndex(newIndex);
      setModalImgSrc(imageList[newIndex]);
      setIsSliding(false);
      setSlideDirection(null);
      setNextImgSrc(null);
      if (onNavigate) onNavigate(newIndex);
    }, 400);
  }, [imageList, onNavigate, isSliding, displayIndex]);

  const navigateNext = useCallback(() => {
    if (imageList.length <= 1 || isSliding) return;
    
    const newIndex = displayIndex < imageList.length - 1 ? displayIndex + 1 : 0;
    setNextImgSrc(imageList[newIndex]);
    setSlideDirection('left'); // Sliding to left (next image comes from right)
    setIsSliding(true);
    
    setTimeout(() => {
      setDisplayIndex(newIndex);
      setModalImgSrc(imageList[newIndex]);
      setIsSliding(false);
      setSlideDirection(null);
      setNextImgSrc(null);
      if (onNavigate) onNavigate(newIndex);
    }, 400);
  }, [imageList, onNavigate, isSliding, displayIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen || imageList.length <= 1) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigatePrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, imageList.length, navigatePrevious, navigateNext]);

  // Update display index when currentIndex changes (but only update modalImgSrc when modal is open)
  useEffect(() => {
    setDisplayIndex(currentIndex);
    if (isModalOpen) {
      setModalImgSrc(imageList[currentIndex] || src);
    }
  }, [currentIndex, imageList, src, isModalOpen]);

  const hasMultipleImages = imageList.length > 1;

  // Calculate transform for animation
  const getImageTransform = () => {
    if (!thumbnailRect) return {};
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate scale from thumbnail to full size viewport
    const scaleX = thumbnailRect.width / windowWidth;
    const scaleY = thumbnailRect.height / windowHeight;
    const scale = Math.max(scaleX, scaleY);
    
    // Calculate position offset
    const targetCenterX = windowWidth / 2;
    const targetCenterY = windowHeight / 2;
    const thumbnailCenterX = thumbnailRect.left + thumbnailRect.width / 2;
    const thumbnailCenterY = thumbnailRect.top + thumbnailRect.height / 2;
    
    const translateX = thumbnailCenterX - targetCenterX;
    const translateY = thumbnailCenterY - targetCenterY;
    
    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      borderRadius: '24px',
    };
  };

  // Determine if we should apply the initial transform
  const shouldApplyTransform = animationState === 'opening' || animationState === 'closing';

  return (
    <>
      <div 
        ref={thumbnailRef} 
        className="w-full h-full"
        data-memory-image
        data-image-index={currentIndex}
      >
        <Image
          src={thumbnailSrc}
          alt={alt}
          fill
          className={`${className} cursor-pointer transition-transform hover:scale-105`}
          onClick={openModal}
        />
      </div>
      
      {/* Modal for full-size image */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-8"
          onClick={closeModal}
          style={{
            backgroundColor: animationState === 'open' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0)',
            backdropFilter: animationState === 'open' ? 'blur(16px)' : 'blur(0px)',
            WebkitBackdropFilter: animationState === 'open' ? 'blur(16px)' : 'blur(0px)',
            transition: 'all 0.35s ease-out',
          }}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Close button - aligned with right button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 z-10 rounded-full p-3"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                opacity: animationState === 'open' ? 1 : 0,
                transform: animationState === 'open' ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.25s ease-out',
              }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            {hasMultipleImages && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-gray-600 z-10 rounded-full p-3"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                  opacity: animationState === 'open' ? 1 : 0,
                  transform: animationState === 'open' ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.8)',
                  transition: 'all 0.25s ease-out',
                }}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next button */}
            {hasMultipleImages && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-gray-600 z-10 rounded-full p-3"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                  opacity: animationState === 'open' ? 1 : 0,
                  transform: animationState === 'open' ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.8)',
                  transition: 'all 0.25s ease-out',
                }}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image counter */}
            {hasMultipleImages && (
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-800 z-10 rounded-full px-4 py-2 text-sm font-medium"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                  opacity: animationState === 'open' ? 1 : 0,
                  transition: 'all 0.25s ease-out',
                }}
              >
                {displayIndex + 1} / {imageList.length}
              </div>
            )}
            
            {/* Image container - wrapper for sliding cards */}
            <div 
              className="relative"
              style={{
                maxWidth: '95vw',
                maxHeight: '95vh',
              }}
            >
              {/* Current image card - slides out */}
              <div
                className="relative overflow-hidden shadow-2xl flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
                style={{
                  ...(shouldApplyTransform && !isSliding ? getImageTransform() : {}),
                  borderRadius: animationState === 'open' ? '48px' : '24px',
                  transform: isSliding 
                    ? slideDirection === 'left' 
                      ? 'translateX(-110%)' 
                      : 'translateX(110%)'
                    : (shouldApplyTransform ? getImageTransform().transform : 'translateX(0)'),
                  opacity: isSliding ? 0 : 1,
                  transitionProperty: isSliding ? 'transform, opacity' : (shouldApplyTransform ? 'all' : 'none'),
                  transitionDuration: isSliding ? '0.4s' : (shouldApplyTransform ? '0.35s' : '0s'),
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div style={{ 
                  maxWidth: '100%',
                  maxHeight: '95vh',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Image
                    src={modalImgSrc}
                    alt={`${alt} - ${displayIndex + 1}`}
                    width={2400}
                    height={2400}
                    className="w-auto h-auto max-w-full max-h-[95vh]"
                    style={{ 
                      objectFit: 'contain',
                      display: 'block',
                      width: 'auto',
                      height: 'auto',
                    }}
                    priority
                    quality={90}
                  />
                </div>
              </div>

              {/* Next image card - slides in */}
              {isSliding && nextImgSrc && (
                <div
                  className="absolute inset-0 overflow-hidden shadow-2xl flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    borderRadius: '48px',
                    transform: slideDirection === 'left' 
                      ? 'translateX(110%)' 
                      : 'translateX(-110%)',
                    opacity: 0,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onTransitionEnd={(e) => {
                    // Apply final state when transition ends
                    if (e.propertyName === 'transform') {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.opacity = '1';
                    }
                  }}
                  ref={(el) => {
                    if (el) {
                      // Trigger transition after mount
                      requestAnimationFrame(() => {
                        el.style.transform = 'translateX(0)';
                        el.style.opacity = '1';
                      });
                    }
                  }}
                >
                  <div style={{ 
                    maxWidth: '100%',
                    maxHeight: '95vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Image
                      src={nextImgSrc}
                      alt={`${alt} - next`}
                      width={2400}
                      height={2400}
                      className="w-auto h-auto max-w-full max-h-[95vh]"
                      style={{ 
                        objectFit: 'contain',
                        display: 'block',
                        width: 'auto',
                        height: 'auto',
                      }}
                      loading="eager"
                      quality={90}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
