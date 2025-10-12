'use client';

import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // 图片数据 - 使用本地图片而不是外部链接以提高性能
  const images = [
    '/images/banner-1.jpg',
    '/images/banner-2.jpg',
    '/images/banner-3.jpg'
  ];
  
  // 动态计算胶囊尺寸和位置
  const capsuleConfig = useMemo(() => {
    if (windowWidth === 0) return { width: 300, height: 135, spacing: 40, offset: 15 };
    
    // 定义断点
    const minWidth = 320; // 最小屏幕宽度
    const maxWidth = 1920; // 最大屏幕宽度
    const mobileBreakpoint = 768; // 移动端断点
    
    // 计算可用容器宽度（减去padding）
    const containerWidth = Math.max(windowWidth - 32, minWidth - 32);
    
    let capsuleWidth, capsuleHeight, spacing, offset;
    
    if (windowWidth <= mobileBreakpoint) {
      // 移动端：胶囊宽度为屏幕宽度的80%，但有最小和最大限制
      const minCapsuleWidth = 250; // 最小胶囊宽度
      const maxCapsuleWidth = Math.min(containerWidth * 0.8, 500); // 最大胶囊宽度
      
      // 使用线性插值计算胶囊宽度
      const progress = (windowWidth - minWidth) / (mobileBreakpoint - minWidth);
      capsuleWidth = minCapsuleWidth + (maxCapsuleWidth - minCapsuleWidth) * progress;
      
      // 保持宽高比
      capsuleHeight = capsuleWidth * (135 / 300);
      
      // 间距和偏移也随胶囊宽度变化
      spacing = capsuleWidth * 0.15;
      offset = spacing * 0.375;
    } else {
      // 桌面端：使用固定尺寸，但在断点处平滑过渡
      const desktopCapsuleWidth = 855;
      const desktopSpacing = 120;
      const desktopOffset = 42;
      
      // 在断点附近创建平滑过渡
      const transitionRange = 200; // 过渡范围
      const transitionProgress = Math.min((windowWidth - mobileBreakpoint) / transitionRange, 1);
      
      // 从移动端最大值平滑过渡到桌面端固定值
      const mobileMaxWidth = Math.min((mobileBreakpoint - 32) * 0.8, 500);
      capsuleWidth = mobileMaxWidth + (desktopCapsuleWidth - mobileMaxWidth) * transitionProgress;
      capsuleHeight = capsuleWidth * (383 / 855); // 使用桌面端比例
      
      const mobileMaxSpacing = mobileMaxWidth * 0.15;
      spacing = mobileMaxSpacing + (desktopSpacing - mobileMaxSpacing) * transitionProgress;
      
      const mobileMaxOffset = mobileMaxSpacing * 0.375;
      offset = mobileMaxOffset + (desktopOffset - mobileMaxOffset) * transitionProgress;
    }

    return { 
      width: Math.round(capsuleWidth), 
      height: Math.round(capsuleHeight), 
      spacing: Math.round(spacing), 
      offset: Math.round(offset) 
    };
  }, [windowWidth]);

  // 位置样式配置 - 使用 useMemo 避免不必要的重新计算
  const positionStyles = useMemo(() => [
    { 
      transform: `translate(0, 0)`, 
      zIndex: 30, 
      opacity: 1
    },         // 顶层
    { 
      transform: `translate(${capsuleConfig.spacing}px, -${capsuleConfig.offset}px)`, 
      zIndex: 20, 
      opacity: 0.6
    }, // 中间层
    { 
      transform: `translate(${capsuleConfig.spacing * 2}px, -${capsuleConfig.offset * 2}px)`, 
      zIndex: 10, 
      opacity: 0.3
    }, // 底层
    { 
      transform: `translate(${capsuleConfig.spacing * 3}px, -${capsuleConfig.offset * 3}px)`, 
      zIndex: 5, 
      opacity: 0
    },   // 隐藏层
    { 
      transform: 'translate(-100%, 0)', 
      zIndex: 1, 
      opacity: 0
    }        // 移出层
  ], [capsuleConfig]);
  
  // 使用 useCallback 优化函数定义
  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    
    // 在过渡完成后更新活动索引
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 1000);
  }, [images.length]);
  
  useEffect(() => {
    // 设置自动滚动
    intervalRef.current = setInterval(goToNext, 4000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [goToNext]);

  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 初始化窗口宽度
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 计算当前显示的位置 - 使用 useMemo 避免不必要的重新计算
  const currentPositions = useMemo(() => [0, 1, 2, 3], []);
  
  return (
    <div 
      className="relative w-full my-8 mt-20"
      style={{ 
        height: windowWidth === 0 ? 300 : 
               windowWidth <= 768 ? 300 + (windowWidth - 320) * 0.2 : 
               Math.min(500, 300 + (768 - 320) * 0.2 + (windowWidth - 768) * 0.1)
      }}
    >
      <div className="absolute inset-0">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 h-full">
          <div className="grid h-full items-center grid-cols-1 md:grid-cols-2 gap-6">
            {/* 左侧胶囊区域 */}
            <Link href="/introduction" className="flex items-center justify-start h-full pl-0 cursor-pointer">
              <div className="relative" style={{ transform: `translateY(-${capsuleConfig.offset * 4}px)` }}>
                {/* 渲染四个位置的胶囊 */}
                {currentPositions.map((pos) => {
                  // 计算当前位置应该显示的图片索引
                  const imageIndex = (activeIndex + pos) % images.length;
                  const image = images[imageIndex];
                  
                  // 根据位置和过渡状态设置样式
                  let style;
                  
                  if (isTransitioning) {
                    // 过渡期间的样式 - 每个胶囊移动到前一个位置
                    if (pos === 0) {
                      // 顶层向左移出
                      style = positionStyles[4]; // 使用移出层样式
                    } else {
                      // 其他层向上移动一层
                      style = positionStyles[pos - 1];
                    }
                  } else {
                    // 非过渡期间的正常样式
                    style = positionStyles[pos];
                  }
                  
                  // 使用动态计算的transform
                  const transform = style.transform;
                  
                  return (
                    <div 
                      key={`${pos}-${imageIndex}`}
                      className="absolute transition-all duration-1000 ease-in-out will-change-transform"
                      style={{
                        width: capsuleConfig.width,
                        height: capsuleConfig.height,
                        borderRadius: '9999px',
                        backgroundColor: 'white',
                        transform: transform,
                        zIndex: style.zIndex,
                        overflow: 'hidden',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        WebkitTransform: transform,
                        WebkitPerspective: 1000,
                        perspective: 1000,
                        willChange: 'transform, opacity'
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={image}
                          alt={`Banner image ${imageIndex + 1}`}
                          fill
                          className="object-cover transition-opacity duration-1000 ease-in-out"
                          style={{ 
                            opacity: style.opacity,
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            willChange: 'opacity'
                          }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={85}
                          priority={pos === 0} // 只对当前显示的图片使用 priority
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Link>
            
            {/* 右侧文字区域 */}
            <Link href="/introduction" className="z-40 cursor-pointer">
              <h1 className="text-3xl md:text-6xl font-bold text-black mb-2 md:mb-4 uppercase [text-shadow:_0_0_42px_rgba(255,255,255,1),_0_0_82px_rgba(255,255,255,0.95),_0_0_122px_rgba(255,255,255,0.9)]">
                ZJU NEXT LAB
              </h1>
              <p className="text-black text-sm md:text-xl [text-shadow:_0_0_42px_rgba(255,255,255,1),_0_0_82px_rgba(255,255,255,1),_0_0_122px_rgba(255,255,255,1),_0_0_162px_rgba(255,255,255,0.95),_0_0_202px_rgba(255,255,255,0.9)]">
                Dedicated to research aimed at enhancing human well-being, 
                the main research directions include artificial intelligence, big 
                data, musical emotion computing, and information and 
                interaction design.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 