import React from 'react';
import 'tailwindcss/tailwind.css';
import PersonCard from './PersonCard';

const Footer = () => {
    return (
      <div className="footer flex justify-between">
        <div className="mx-5">
          <img className='lg:w-[180px] lg:h-[70px] md:w-[150px] md:h-[50px] sm:w-[130px] sm:h-[35px]' src="https://cdn.discordapp.com/attachments/1219662142479794206/1221290796486234152/image.png?ex=66120ab0&is=65ff95b0&hm=cebb8c5f03e3af331c6073401394b8b90078f6e35ede4c30bd1646ae38c68212&" alt="Logo" />
          <div>
            <ul className="text-[#9344E3]  lg:text-2xl md:text-xl font-abc relative lg:left-8 lg:top-3  md:top-2 md:left-8 ">
              <li className='mb-5'>
                <a href="/">HOME</a>
              </li>
              <li className='mb-5'>
                <a href="/Movie?page=1&sort_by=popularity">MOVIES</a>
              </li>
              <li className='mb-5'>
                <a href="/actor">ACTORS</a>
              </li>
              <li className='mb-5'>
                <a href="/tv">TV SHOWS</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 ml-8">

          <div>  
        <PersonCard   
  name="Hana Abdulla"
  imageUrl="https://images-ext-1.discordapp.net/external/R7vqoLY5mLGWPjwesJ5kwsFz06U07mEcnNrUv_Kqx10/%3Fe%3D1716422400%26v%3Dbeta%26t%3DXVG9nEpJJd0eZy_qhdEJXqtp7JK5afygxZVXAwMWJNQ/https/media.licdn.com/dms/image/D4E03AQEymTqMvVpM_A/profile-displayphoto-shrink_400_400/0/1704915428727?format=webp&width=500&height=500"
  linkedinUrl="https://www.linkedin.com/in/hana-abdulla-70ab181b8/"
  githubUrl="https://github.com/hanaMohammedAbdullah"
/>
</div>

<div>
<PersonCard   
  name="Aya Hassan"
  imageUrl="https://avatars.githubusercontent.com/u/147654234?v=4"
  linkedinUrl="https://www.linkedin.com/in/aya-hasan-17598328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  githubUrl="https://github.com/ayaHSE"
/>
</div>

<div>
<PersonCard   
  name="Vinos Sarhad"
  imageUrl="https://avatars.githubusercontent.com/u/60324410?v=4"
  linkedinUrl="https://www.linkedin.com/in/aya-hasan-17598328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  githubUrl="https://github.com/vinos-sarhad"
/>
</div>

<div>
<PersonCard   
  name="Lava Ahmed"
  imageUrl="https://i.pinimg.com/564x/36/77/44/367744454d53053aa16a90c76d5ffd6f.jpg"
  linkedinUrl="linkedin : https://www.linkedin.com/in/hana-abdulla-70ab181b8/ 
  img : https://media.licdn.com/dms/image/D4E03AQEymTqMvVpM_A/profile-displayphoto-shrink_400_400/0/1704915428727?e=1716422400&v=beta&t=XVG9nEpJJd0eZy_qhdEJXqtp7JK5afygxZVXAwMWJNQ"
  githubUrl="https://github.com/eruptinglava"
/>
</div>
        </div>
      </div>
    )
  }
  
  export default Footer