import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface IconProps {
  className?: string;
}

export default function Footer() {
  return (
    <footer key="1" className="bg-[#1a1a1a] text-white">
      <img
        alt="News image"
        className="w-full h-80"
        height="400"
        src="/footer_bg.png"
        style={{
          objectFit: "cover",
        }}
        width="150"
      />
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bottom-0">
        <div className="py-6 px-6">
          <a className="flex items-center" href="#">
            <img alt="PMO Global Logo" className="h-8 mb-10" src="/logo_main.png" />
          </a>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <MailboxIcon className="h-5 w-5 text-gray-400" />
              <span className="text-sm whitespace-pre-wrap ml-4">{`Email\ncontact@logistics.com`}</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-gray-400" />
              <span className="text-sm whitespace-pre-wrap ml-4">{`Call us:\n(00) 112 365 489`}</span>
            </div>
          </div>
        </div>
        <div className="py-6 px-6">
            <h2 className="mb-6 text-sm font-semibold">Sitemap</h2>
            <ul className="text-gray-400">
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Our Expertise
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Our Projects
                </a>
              </li>
              <li className="mb-4">
                <a className="hover:underline" href="#">
                  Spotlight
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="py-6 px-6">
            <h2 className="mb-6 text-sm font-semibold">Subscribe</h2>
            <form action="#" className="flex flex-col space-y-4" method="POST">
              <Input
                className=" max-w-[215px] px-4 py-2 leading-tight text-gray-700 bg-white border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline w-full"
                placeholder="Email here"
                type="email"
              />
              <div className="flex space-x-4">
                <Button className="bg-red-600 hover:bg-red-700">
                  Send Now
                </Button>
                <a className="text-gray-400 hover:text-white self-center" href="#">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a className="text-gray-400 hover:text-white self-center" href="#">
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a className="text-gray-400 hover:text-white self-center" href="#">
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </form>
          </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <p className="text-gray-400 text-sm text-center">
            Copyright © PMO Global 2024
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.2212 11.233C23.2212 5.28459 18.0719 0.461426 11.7212 0.461426C5.37052 0.461426 0.221191 5.28459 0.221191 11.233C0.221191 16.6092 4.42588 21.0654 9.92431 21.8743L9.92431 14.3476L7.00362 14.3476L7.00362 11.233L9.92431 11.233L9.92431 8.85988C9.92431 6.16074 11.6416 4.66859 14.2681 4.66859C15.5265 4.66859 16.8428 4.87921 16.8428 4.87921L16.8428 7.53027L15.3919 7.53027C13.9642 7.53027 13.5175 8.36026 13.5175 9.21333L13.5175 11.233L16.7067 11.233L16.1975 14.3476L13.5181 14.3476L13.5181 21.8752C19.0165 21.0669 23.2212 16.6106 23.2212 11.233Z"
        fill="white"
      />
    </svg>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0104 0.125L1.85845 0.125C0.866598 0.125 0 0.838669 0 1.81887L0 20.0111C0 20.9967 0.866598 21.8749 1.85845 21.8749L20.0051 21.8749C21.0023 21.8749 21.7499 20.9908 21.7499 20.0111L21.7499 1.81887C21.7557 0.838669 21.0023 0.125 20.0104 0.125ZM6.74199 18.2546L3.62612 18.2546L3.62612 8.56669L6.74199 8.56669L6.74199 18.2546ZM5.29183 7.09371H5.2695C4.27231 7.09371 3.62661 6.3514 3.62661 5.42217C3.62661 4.47596 4.2893 3.75112 5.30883 3.75112C6.32835 3.75112 6.95221 4.47062 6.97454 5.42217C6.97406 6.3514 6.32835 7.09371 5.29183 7.09371ZM18.1296 18.2546L15.0138 18.2546L15.0138 12.9575C15.0138 11.6884 14.5603 10.8213 13.433 10.8213C12.5717 10.8213 12.062 11.4039 11.8353 11.9714C11.7503 12.1753 11.7275 12.453 11.7275 12.7366L11.7275 18.2546L8.61161 18.2546L8.61161 8.56669L11.7275 8.56669L11.7275 9.91489C12.1809 9.26919 12.8893 8.33997 14.5375 8.33997C16.5829 8.33997 18.1301 9.68817 18.1301 12.5948L18.1296 18.2546Z"
        fill="white"
      />
    </svg>
  );
}

function MailboxIcon(props: IconProps) {
  return (
    <svg
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31.5" cy="31.5" r="31" fill="#1B1B1B" stroke="black" />
      <path
        d="M40.996 23H23.004C22.4495 23 22 23.3755 22 23.8387V37.1613C22 37.6245 22.4495 38 23.004 38H40.996C41.5505 38 42 37.6245 42 37.1613V23.8387C42 23.3755 41.5505 23 40.996 23Z"
        stroke="#EAEAEA"
      />
      <path d="M22 23L32.4247 30L42 23.2294" stroke="#EAEAEA" />
    </svg>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <svg
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31.5" cy="31.5" r="31" fill="#1B1B1B" stroke="black" />
      <path
        d="M23.9741 22.1408C23.8394 22.1449 23.7071 22.1743 23.5848 22.2272C23.4625 22.28 23.3528 22.3554 23.2622 22.4487C23.1715 22.542 23.1018 22.6514 23.0571 22.7704C23.0124 22.8894 22.9936 23.0156 23.0019 23.1416C23.1364 25.3015 23.7704 30.5716 26.8059 33.8583C30.4409 37.8181 35.1748 39.1824 40.0317 38.9808C40.292 38.9662 40.5368 38.8596 40.7165 38.6826C40.8962 38.5055 40.9975 38.2712 41 38.0268V34.5674C40.997 34.2446 40.8783 33.9322 40.663 33.6802C40.4476 33.4282 40.1482 33.2513 39.8127 33.1779L37.3804 32.6739C37.0796 32.6138 36.7664 32.6397 36.4815 32.7481C36.1965 32.8566 35.9528 33.0427 35.7819 33.2823L35.244 34.0454C35.1946 34.1153 35.1208 34.1668 35.0352 34.1911C34.9496 34.2154 34.8577 34.211 34.7752 34.1786C33.5379 33.6783 28.6081 31.5184 28.0663 27.8753C28.0557 27.805 28.0675 27.7333 28.1003 27.6692C28.1332 27.6051 28.1855 27.5516 28.2507 27.5154L29.2267 26.9574C29.4944 26.802 29.7047 26.5732 29.8291 26.3022C29.9535 26.0311 29.986 25.7308 29.9222 25.4419L29.3881 23.1236C29.31 22.7988 29.1142 22.5093 28.8339 22.3045C28.5537 22.0998 28.2064 21.9923 27.8511 22.0004L23.9741 22.1408Z"
        stroke="#EAEAEA"
      />
    </svg>
  );
}

function TwitterIcon(props: IconProps) {
  return (
    <svg
      width="23"
      height="18"
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.2211 2.74428C21.4156 3.09399 20.5635 3.32438 19.6915 3.42818C20.6079 2.89196 21.297 2.04007 21.6297 1.03229C20.7633 1.53855 19.817 1.89377 18.8313 2.08273C18.4162 1.64804 17.9171 1.30223 17.3641 1.06633C16.8111 0.830423 16.2159 0.709346 15.6147 0.710457C13.1804 0.710457 11.2104 2.65041 11.2104 5.04183C11.2087 5.37446 11.2468 5.70611 11.324 6.02968C9.57849 5.94791 7.86923 5.50294 6.30563 4.72324C4.74202 3.94353 3.3585 2.84626 2.24358 1.50164C1.85244 2.16056 1.64558 2.91237 1.64463 3.6785C1.64463 5.1804 2.42877 6.50797 3.61281 7.28574C2.9113 7.2691 2.22416 7.08356 1.60974 6.74487V6.79851C1.60974 8.89938 3.1306 10.6471 5.14351 11.045C4.76499 11.1458 4.37493 11.1969 3.98318 11.1969C3.70521 11.1974 3.42787 11.1705 3.15521 11.1165C3.71479 12.8374 5.34346 14.089 7.27273 14.1247C5.70506 15.332 3.78038 15.9846 1.80119 15.9798C1.44987 15.9792 1.09889 15.9584 0.75 15.9172C2.76344 17.2019 5.1039 17.8815 7.4928 17.875C15.6053 17.875 20.0373 11.2729 20.0373 5.54693C20.0373 5.35919 20.0323 5.17146 20.0234 4.98819C20.8836 4.37673 21.6278 3.61686 22.2211 2.74428Z"
        fill="white"
      />
    </svg>
  );
}
