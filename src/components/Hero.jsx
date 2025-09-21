import React, { use, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({maxWidth:767});


    useGSAP(() => {
        const heroSplit = new SplitText('.title', {type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});
        const paragraphSplit2 = new SplitText('.sigma', {type: 'chars'});

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent:70,
            duration:1.8,
            ease: 'expo.out',
            stagger:0.04,
        });

        gsap.from(paragraphSplit.lines, {
            yPercent:100,
            duration:1.8,
            opacity:0,
            ease: 'expo.out',
            stagger:0.1,
            delay:0.5,
        });
        
        gsap.from(paragraphSplit2.chars, {
            yPercent:100,
            duration:1.8,
            opacity:0,
            ease: 'expo.out',
            stagger:0.02,
            delay:0.5,
        });


        const  startValue = isMobile? 'top 50%' : 'center 99%'
        const endValue = isMobile?'120% top' : 'bottom 99%'

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'v',
                start: startValue,
                end: endValue,
                scrub: true,
                pin:true,
            }
        })
videoRef.current.onloadedmetadata = () => {
  videoRef.current.currentTime = 0; // ✅ force start
  tl.fromTo(
    videoRef.current,
    { currentTime: 0 },
    { currentTime: videoRef.current.duration }
  );
};

        
    }, []);
  return (
    <>
    <section id="hero" className="noisy">
        <h1 className="title">POGANY</h1>
		<div className="body"> 
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p className='sigma'></p>
                    <p className="subtitle">
                        The modern face of timeless beauty
                    </p>
                </div>
                <div className="view-cocktails">
                    <p className="subtitle">
                        A masterpiece of modern sculpture that redefines simplicity and grace, capturing the delicate balance between timeless tradition and bold innovation
                    </p>
                    <a href="#cocktails" className='sigma'>Learn more</a>
                </div>
            </div>
        </div>
    </section>
<div className="fixed inset-0 -z-0 w-full h-full">
  <video 
    ref={videoRef}
    src="/videos/video (14).mp4"
    muted
    playsInline
    preload="auto"
    className="w-full h-full object-cover image-crisp"
  />
</div>

  </>
  )
  
}

export default Hero