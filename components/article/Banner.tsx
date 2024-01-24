import Link from "next/link";
import Navbar from "../Navbar";

interface BlogProps {
  data: any
}
interface IconProps {
  className?: string;
}

function getMonthName(monthIndex: any) {
  if (/^(0[1-9]|1[0-2])$/.test(monthIndex)) {
    const date = new Date(`2022-${monthIndex}-01`);
    const options: any = { month: "long" };
    return date.toLocaleDateString("en-US", options);
  } else {
    return "Invalid month index";
  }
}

const Banner: React.FC<BlogProps> = async ({ data }) => {
  return (
    <main
      className="w-full h-[500px] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url(/spotlight_banner_bg.png)",
      }}
    >
      <Navbar/>
        <div className="flex items-center mt-[2rem]">
          <div className="max-w-[1200px] container items-start space-y-8 mx-[2%] sm:mx-[5%] md:mx-[10%] lg:mx-[10%] pb-4">
          <Link href="/spotlight"><BackIcon/></Link>
          <div className="space-y-2">
          <DateIcon/>
          <h6 className="font-semibold text-white text-2xl">
                  {data.fields.publishedOn.split("-")[2]}
                </h6>
                <h6 className="text-lg text-white">
                  {getMonthName(data.fields.publishedOn.split("-")[1])}
                </h6>
          </div>
            <h1 className="text-3xl lg:text-5xl text-white font-bold">
             {data.fields.title}
            </h1>
          </div>
        </div>
    </main>
  );
}

function BackIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="11"
        transform="matrix(-1 0 0 1 22 0)"
        fill="#ECECEC"
      />
      <path
        d="M14.1484 10.6121L8.08437 10.6121"
        stroke="#2B2B2B"
        stroke-width="0.758008"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6113 13.1388L8.08463 10.6121L10.6113 8.08541"
        stroke="#2B2B2B"
        stroke-width="0.758008"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function DateIcon(props: IconProps) {
  return (
    <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5.5" y="14.5" width="3" height="3" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="5.5" y="21" width="3" height="3" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="12" y="14.5" width="3" height="3" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="12" y="21" width="3" height="3" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="18" y="14.5" width="3" height="3" fill="#DC1E00" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="18" y="21" width="3" height="3" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M26 10.5H0.5V5C0.5 4.17157 1.17157 3.5 2 3.5H24.5C25.3284 3.5 26 4.17157 26 5V10.5Z" fill="#DC1E00"/>
    <path d="M25 3.3335H1.66667C1.02233 3.3335 0.5 3.85583 0.5 4.50016V27.8335C0.5 28.4778 1.02233 29.0002 1.66667 29.0002H25C25.6443 29.0002 26.1667 28.4778 26.1667 27.8335V4.50016C26.1667 3.85583 25.6443 3.3335 25 3.3335Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.334 1V5.66667" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.33398 1V5.66667" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M0.5 10.3335H26.1667" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
  );
}

export default Banner;