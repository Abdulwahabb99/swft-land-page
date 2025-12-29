import { assets } from "../data/assets";

export default function Header() {
  return (
    <header className="relative z-20 px-8 md:px-12 lg:px-16 py-6 md:py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={assets.swftLogo}
            alt="swft logo"
            width={121.31}
            height={50.2}
            className="h-[50px] w-auto object-contain"
          />
        </div>

        {/* Login Button */}
        <a
          href="https://web.swftmoney.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium transition-all duration-200 hover:bg-gray-100 inline-block"
        >
          Login
        </a>
      </div>
    </header>
  );
}
