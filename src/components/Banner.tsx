'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused] = useState(false);

  // 图片数据
  const images = [
    'https://picsum.photos/900/400?random=1',
    'https://picsum.photos/900/400?random=2',
    'https://picsum.photos/900/400?random=3'
  ];
  
  // 位置样式配置 - 修正Y轴方向，使后面的胶囊向上堆叠
  const positionStyles = [
    { transform: 'translate(0, 0)', zIndex: 30, opacity: 1 },         // 顶层
    { transform: 'translate(90px, -42px)', zIndex: 20, opacity: 0.6 }, // 中间层 - 向上偏移
    { transform: 'translate(180px, -84px)', zIndex: 10, opacity: 0.3 }, // 底层 - 向上偏移
    { transform: 'translate(270px, -126px)', zIndex: 5, opacity: 0 },   // 隐藏层 - 向上偏移
    { transform: 'translate(-100%, 0)', zIndex: 1, opacity: 0 }        // 移出层
  ];
  
  const goToNext = useCallback(() => {
    if (!isTransitioning && !isPaused) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, isPaused, images.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(goToNext, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused, goToNext]);
  
  // 计算当前显示的位置
  const currentPositions = [0, 1, 2, 3];
  
  return (
    <div className="relative w-full h-[500px] my-8 mt-20">
      <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-8">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 h-full">
          <div className="grid h-full items-center grid-cols-1 md:grid-cols-2 gap-6">
            {/* 左侧胶囊区域 - 增加垂直偏移量 */}
            <div className="flex items-center justify-start h-full">
              <div className="relative" style={{ transform: 'translateY(-180px)' }}>
                {/* 渲染四个位置的胶囊 */}
                {currentPositions.map((pos) => {
                  // 计算当前位置应该显示的图片索引
                  const imageIndex = (currentIndex + pos) % images.length;
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
                  
                  return (
                    <div 
                      key={`${pos}-${imageIndex}`}
                      className="absolute transition-all duration-1000 ease-in-out will-change-transform"
                      style={{
                        width: '855px',
                        height: '383px',
                        borderRadius: '9999px',
                        backgroundColor: 'white',
                        transform: style.transform,
                        zIndex: style.zIndex,
                        overflow: 'hidden',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        WebkitTransform: style.transform,
                        WebkitPerspective: 1000,
                        perspective: 1000
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={image}
                          alt={`Banner image ${imageIndex + 1}`}
                          fill
                          className="object-cover transition-opacity duration-1000 ease-in-out will-change-opacity"
                          style={{ 
                            opacity: style.opacity,
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden'
                          }}
                          unoptimized
                          priority
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* 右侧文字区域 */}
            <div className="z-40">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 [text-shadow:_0_0_42px_rgba(255,255,255,1),_0_0_82px_rgba(255,255,255,0.95),_0_0_122px_rgba(255,255,255,0.9)]">
                ZJU NEXT Lab
              </h1>
              <p className="text-black text-lg md:text-xl [text-shadow:_0_0_42px_rgba(255,255,255,1),_0_0_82px_rgba(255,255,255,1),_0_0_122px_rgba(255,255,255,1),_0_0_162px_rgba(255,255,255,0.95),_0_0_202px_rgba(255,255,255,0.9)]">
                Dedicated to research aimed at enhancing human well-being, 
                the main research directions include artificial intelligence, big 
                data, musical emotion computing, and information and 
                interaction design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}