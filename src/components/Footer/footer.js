import "tailwindcss/tailwind.css"
import PersonCard from "../PersonCard"

const Footer = () => {
  return (
    <div className="footer flex justify-between">
      <div className="mx-5">
        <img
          href="/"
          className="lg:w-[150px] lg:h-[100px] md:w-[120px] md:h-[70px] sm:w-[100px] sm:h-[60px]"
          src="https://cdn.discordapp.com/attachments/1219662142479794206/1221447209690730698/logo.png?ex=66129c5c&is=6600275c&hm=6a5607d59730e98280cc0f6c435af37e632490048e9f2460d3b7f53511dc80ca&"
          alt="Logo"
        />
        <div>
          <ul className="text-[#9344E3]  lg:text-2xl md:text-xl font-abc relative lg:left-8 lg:top-3  md:top-2 md:left-8 sm:left-4 ">
            <li className="mb-4">
              <a href="/">HOME</a>
            </li>
            <li className="mb-5">
              <a href="/movie?page=1&sort_by=popularit.dec">MOVIES</a>
            </li>
            <li className="mb-5">
              <a href="/actor">ACTORS</a>
            </li>
            <li className="mb-5">
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
            imageUrl="https://cdn.discordapp.com/attachments/1219361781407813713/1221446892286640189/meme.jpg?ex=66129c10&is=66002710&hm=17c93b24166aee3d49853a8e8f3cb1eb27278e8d6e68b1c467e7a949afd46657&"
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
