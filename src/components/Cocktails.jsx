import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { useNavigate } from 'react-router-dom'
import Page3 from './Page3'

gsap.registerPlugin(SplitText);

const Cocktails = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Page3');
  }
  useGSAP(() => {
    // Animate each heading separately on scroll
    gsap.utils.toArray(".zyg").forEach((el) => {
      const container = el.closest("div"); // wrapper div with text + img
      const img = container.querySelector(".creator-img");

      // Animate heading text first
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power2.out",
      });

      // Animate image AFTER text
      if (img) {
        gsap.from(img, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.3, // show after heading
        });
      }
    });

    // Animate lists as a group
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".popular",
        start: "top 80%",
      }
    });

    tl.from(".popular li", {
      opacity: 0,
      y: 40,
      stagger: 0.01,
      duration: 0.4,
      ease: "power2.out",
    }, "<")
    .from(".loved li", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out",
    }, "<0.3");

    // Brancusi line animation
    const split = new SplitText("#brancusi-line", { type: "lines" });
    gsap.set(split.lines, { opacity: 0, y: 30 });
    tl.to(split.lines, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    }, "<");
  });

  return (
    <section id="cocktails" className="noisy">
      <div className="list">
        <div className='popular'>
          <ul>
            <li className="flex items-start gap-214">
              {/* First block */}
              <div>
                <div className="flex items-center gap-4">
                  <h3 className='text-4xl zyg'>The creator</h3>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Edward_Steichen_-_Brancusi.jpg"
                    className="creator-img w-20 h-24 rounded-full flex-shrink-0 outline outline-2 outline-[#505050]"
                    alt="Brancusi"
                  />
                </div>
                <p
                  className="break-words max-w-[35ch] mt-2 text-[16px]"
                  id='brancusi-line'
                >
                  Constantin Brâncuși (1876–1957) was a pioneering Romanian sculptor, renowned for his modernist approach that emphasized simplicity, elegance, and the essence of form. One of his most famous works, <i>Mademoiselle Pogany</i> (1912), exemplifies his ability to transform human features into smooth, abstract shapes while maintaining emotional expression. Brâncuși’s innovative style influenced 20th-century sculpture, merging traditional craftsmanship with avant-garde minimalism, and cementing his legacy as a master of modern art.
                </p>
              </div>

              {/* Second block */}
              <div className="mt-[400px]">
                <div className="flex items-center gap-4 relative">
                  <h3 className='text-4xl zyg'>The creation</h3>
                </div>
                <p
                  className="break-words max-w-[35ch] mt-2 text-[16px]"
                  id='brancusi-line'
                >
                  Constantin Brâncuși created Mademoiselle Pogany after meeting Margit Pogány, a Hungarian painter who inspired him deeply. Instead of making a realistic portrait, he sculpted her with large, dreamy eyes and smooth, flowing shapes. Using marble and later bronze, he captured her spirit in a simple, modern, and poetic way.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Button */}
      <div className="flex items-center justify-center w-full h-96">
        <button onClick={handleNavigate}
          className="bg-[#e7d393] text-black px-6 py-3 rounded-lg transition 
                     outline outline-2 outline-transparent 
                     hover:outline-[#505050]"
        >
          Buy tickets
        </button>
      </div>
    </section>
  )
}

export default Cocktails
