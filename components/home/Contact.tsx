import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface IconProps {
  className?: string;
}

export default function Contact() {
  return (
    <div className="bg-[#1e1e1e] w-full py-16 px-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="md:col-span-1">
        <div className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-gray-200 bg-opacity-10 border-l-4 border-[#DC1E00] mb-2">
          Contact
        </div>
          <h2 className="text-2xl font-semibold mb-4">Get in touch with us</h2>
          <p className="mb-4 text-sm">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MailboxIcon className="h-6 w-6" />
              <span className="text-sm whitespace-pre-wrap">{`Email\ncontact@logistics.com`}</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-6 w-6" />
              <span className="text-sm whitespace-pre-wrap">{`Call us:\n(00) 112 365 489`}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-6 w-6" />
              <span className="text-sm whitespace-pre-wrap">{`Mon - Sat 9.00 - 18.00\nSunday Closed`}</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                className="bg-[#1e1e1e] text-white border border-[#333333]"
                placeholder="Your name*"
              />
              <Input
                className="bg-[#1e1e1e] text-white border border-[#333333]"
                placeholder="Email*"
                type="email"
              />
              <Input
                className="bg-[#1e1e1e] text-white border border-[#333333]"
                placeholder="Phone Number*"
              />
              <Input
                className="bg-[#1e1e1e] text-white border border-[#333333]"
                placeholder="City*"
              />
            </div>
            <Textarea
              className="bg-[#1e1e1e] text-white border border-[#333333]"
              placeholder="Your Message"
            />
            <Button className="bg-[#DC1E00]
 hover:bg-red-700 rounded-none p-6">
              Submit Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function MailboxIcon(props: IconProps) {
  return (
    <svg
      width="64"
      height="63"
      viewBox="0 0 64 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="31.5" r="31" fill="#0E0E0E" stroke="black" />
      <path
        d="M41.496 23H23.504C22.9495 23 22.5 23.3755 22.5 23.8387V37.1613C22.5 37.6245 22.9495 38 23.504 38H41.496C42.0505 38 42.5 37.6245 42.5 37.1613V23.8387C42.5 23.3755 42.0505 23 41.496 23Z"
        stroke="#EAEAEA"
      />
      <path d="M22.5 23L32.9247 30L42.5 23.2294" stroke="#EAEAEA" />
    </svg>
  );
}

function MapPinIcon(props: IconProps) {
  return (
    <svg
      width="64"
      height="63"
      viewBox="0 0 64 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="31.5" r="31" fill="#0E0E0E" stroke="black" />
      <path
        d="M32.5 42C38.5751 42 43.5 37.0751 43.5 31C43.5 24.9249 38.5751 20 32.5 20C26.4249 20 21.5 24.9249 21.5 31C21.5 37.0751 26.4249 42 32.5 42Z"
        stroke="#EAEAEA"
      />
      <path d="M32.5 22V31.2058L37.5 35" stroke="#EAEAEA" />
    </svg>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <svg
      width="64"
      height="63"
      viewBox="0 0 64 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="31.5" r="31" fill="#0E0E0E" stroke="black" />
      <path
        d="M24.4741 22.1408C24.3394 22.1449 24.2071 22.1743 24.0848 22.2272C23.9625 22.28 23.8528 22.3554 23.7622 22.4487C23.6715 22.542 23.6018 22.6514 23.5571 22.7704C23.5124 22.8894 23.4936 23.0156 23.5019 23.1416C23.6364 25.3015 24.2704 30.5716 27.3059 33.8583C30.9409 37.8181 35.6748 39.1824 40.5317 38.9808C40.792 38.9662 41.0368 38.8596 41.2165 38.6826C41.3962 38.5055 41.4975 38.2712 41.5 38.0268V34.5674C41.497 34.2446 41.3783 33.9322 41.163 33.6802C40.9476 33.4282 40.6482 33.2513 40.3127 33.1779L37.8804 32.6739C37.5796 32.6138 37.2664 32.6397 36.9815 32.7481C36.6965 32.8566 36.4528 33.0427 36.2819 33.2823L35.744 34.0454C35.6946 34.1153 35.6208 34.1668 35.5352 34.1911C35.4496 34.2154 35.3577 34.211 35.2752 34.1786C34.0379 33.6783 29.1081 31.5184 28.5663 27.8753C28.5557 27.805 28.5675 27.7333 28.6003 27.6692C28.6332 27.6051 28.6855 27.5516 28.7507 27.5154L29.7267 26.9574C29.9944 26.802 30.2047 26.5732 30.3291 26.3022C30.4535 26.0311 30.486 25.7308 30.4222 25.4419L29.8881 23.1236C29.81 22.7988 29.6142 22.5093 29.3339 22.3045C29.0537 22.0998 28.7064 21.9923 28.3511 22.0004L24.4741 22.1408Z"
        stroke="#EAEAEA"
      />
    </svg>
  );
}
