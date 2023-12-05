import Image from "next/image";
import LOGOIMG from 'public/image/logo.png';

const Logo = () => {
  return (
    <div className="Logo">
      <a href="/">
        <img src={LOGOIMG.src} alt="Happy umeus day" />
      </a>
    </div>
  )
}

export default Logo;