import React from 'react';
import Link from 'next/link'
import me from '../public/assets/me.jpg';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am not your average developer
          </p>
          <p className='py-2 text-gray-600'>
            I'm Thabiso Sekhwela, Born and Raised in Tembisa, Gauteng. I'm a recent graduate from the University of Cape Town in Mechatronics Engineering because  it allows me to look at tech in three different angles from software to electrical and mechanical engineering. I am an individual who believes that technology can be used as an innstrument to change the world and influence peoples lives positively. I am philanthropist at heart, In my spare time I volunteer tutoring Mathematics and Physical Science in my community.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I am
            now spending my time building projects with React JS, Firebase, Next JS and
            learning new technologies.
          </p>
          <h2 className='py-4'>Why I want to be a developer at SovTech</h2>
          <p>
              Software engineering is the centre piece of the 4th industrial revolution. SovTech is a reputable company. South Africa has not reached its full potential in the 4th industrial revolution, I believe that the SovTech could help accelerate and catalyst South Africa's potential in the 4th industrial revolution. I am an innovation individual who will add value to the software industry, being a software developer at SovTech will increase the range of my development skills allows me to be of great substance to the team. As a person of Color I recognise that there's a shortage of programming skills in my community and I feel that by being given this opportunity my responsible will be to bridge this gap.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image
            className='rounded-xl'
            src={me}
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
