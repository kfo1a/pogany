import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'




const Cocktails = () => {
  useGSAP(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".popular",
        start: "top 58%",
      }
    });

    const paralaxe = gsap.timeline({
        scrollTrigger:{
        trigger:'#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        }
    })

    // Animate the heading first
    tl.from(".zyg", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power2.out",
    })
    // Then animate the list items with stagger
    .from(".popular li", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out",
    }, "<0.3") // Start 0.3 seconds after the heading animation begins
    .from(".loved li", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out",
    }, "<0.3"); // Start 0.3 seconds after the heading animation begins

    paralaxe
    .from('#c-left-leaf', {
      x: -100, y:100
    })
    .from('#c-right-leaf', {
      x: 100, y:100
    })

  });
  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf"/>
      <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf"/>
    
      <div className="list">
        <div className='popular'>
          <h2 className='zyg'>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map(({name, country, detail, price}) =>(
            <li key={name}>
              <div className='md:me-28'>
                <h3>{name}</h3>
                <p>{country} | {detail}</p>
              </div>
              <span> {price}</span>
            </li>
            ))}
          </ul>
        </div>


      <div className='loved'>
          <h2 className='zyg'>Most loved cocktails:</h2>
          <ul>
            {mockTailLists.map(({name, country, detail, price}) =>(
            <li key={name}>
              <div className='me-28'>
                <h3>{name}</h3>
                <p>{country} | {detail}</p>
              </div>
              <span> {price}</span>
            </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  )
}



export default Cocktails