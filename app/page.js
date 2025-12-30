import Header from "../components/Header";
import Hero from "../components/Hero";
import MainSwftIconSVG from "../components/MainSwftIconSVG";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background gradient with vignette */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        {/* Top left blurred background element */}
        <div 
          className="absolute top-0 left-0"
          style={{
            width: '900px',
            height: '682px',
            opacity: 0.2,
            boxShadow: '0 42.312px 126.937px 0 rgba(16, 24, 40, 0.10), 0 42.312px 84.625px 0 rgba(16, 24, 40, 0.06)',
            filter: 'blur(185.5150146484375px)',
            background: 'linear-gradient(153deg, #34A0FF 4.23%, #7134FF 57.26%)',
            pointerEvents: 'none',
            transform: 'translate(-30%, -30%)'
          }}
        ></div>
      </div>

      {/* Main Swft Icon on the right - decorative background element */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute right-[10%] top-1/3 -translate-y-1/2 w-[600px] h-[600px] opacity-100">
          <MainSwftIconSVG width="1000" height="1000" />
        </div>
        {/* Additional blurred version for depth */}
        {/* <div
          className="absolute right-[5%] top-1/4 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
          style={{ filter: "blur(60px)" }}
        >
          <MainSwftIconSVG width="1200" height="1200" />
        </div> */}
      </div>

      {/* Content */}
      <div className="relative z-20">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
