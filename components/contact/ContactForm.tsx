"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface IconProps {
  className?: string;
}

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    })
  };
  return (
    <div className="bg-[#1e1e1e] w-full py-16 px-8 text-white max-w-[900px] m-10">
      <div className="text-center">
        <div className="md:col-span-1">
          <div className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-gray-200 bg-opacity-10 border-l-4 border-[#DC1E00] mb-2">
            Contact
          </div>
          <h2 className="text-2xl font-semibold mb-4">Get in touch with us</h2>
          <p className="mb-4 text-sm max-w-[500px] mx-auto">
            Whether you have a question, need more information about our
            services, or want to discuss a potential collaboration, our team is
            here to assist you. Reach out to us via the contact details provided
            or simply fill out the contact form below, and we will get back to
            you promptly. Let us connect and explore the possibilities together!
          </p>
          <div className="space-x-4 justify-center grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center sm:text-center">
              <MailboxIcon className="mx-auto my-4" />
              <span className="text-sm whitespace-pre-wrap">{`enquiries@pmo-global.com`}</span>
            </div>
            {/* <div className="text-center sm:text-center">
              <PhoneIcon className="mx-auto my-4" />
              <span className="text-sm whitespace-pre-wrap">{`(00) 112 365 489`}</span>
            </div> */}
            <div className="text-center sm:text-center">
              <MapPinIcon className="mx-auto my-4" />
              <span className="text-sm whitespace-pre-wrap">{`PMO Global, Office 906,\nCapital Golden Tower,\nBusiness Bay, P.O. Box\n393317, Dubai-UAE`}</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                value={data.name}
                name="name"
                onChange={handleChange}
                className="bg-[#1e1e1e] text-white border border-[#333333]"
                placeholder="Your name*"
              />
              <Input
                value={data.email}
                name="email"
                onChange={handleChange}
                className="bg-[#1e1e1e] text-white border border-[#333333]"
                placeholder="Email*"
                type="email"
              />
              <Input
                value={data.phone}
                name="phone"
                onChange={handleChange}
                className="bg-[#1e1e1e] text-white border border-[#333333]"
                placeholder="Phone Number*"
              />
              <Input
                value={data.city}
                name="city"
                onChange={handleChange}
                className="bg-[#1e1e1e] text-white border border-[#333333]"
                placeholder="City*"
              />
            </div>
            <Textarea
              value={data.message}
              name="message"
              onChange={handleChange}
              className="bg-[#1e1e1e] text-white border border-[#333333]"
              placeholder="Your Message"
            />
            <Button
              className="bg-[#DC1E00]
 hover:bg-red-700 border-none rounded-none min-w-[160px] p-6"
              onClick={handleSubmit}
            >
              Submit
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
      {...props}
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
      {...props}
      width="63"
      height="63"
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31.5" cy="31.5" r="31" fill="#0E0E0E" stroke="black" />
      <path
        d="M31.875 21C27.526 21 24 24.526 24 28.875C24 30.5875 24.5614 32.1589 25.4946 33.4458C25.5113 33.4766 25.514 33.5111 25.533 33.5406L30.783 41.4156C31.0265 41.7808 31.4366 42 31.875 42C32.3134 42 32.7235 41.7808 32.967 41.4156L38.217 33.5406C38.2364 33.5111 38.2387 33.4766 38.2554 33.4458C39.1886 32.1589 39.75 30.5875 39.75 28.875C39.75 24.526 36.224 21 31.875 21ZM31.875 31.5C30.4253 31.5 29.25 30.3247 29.25 28.875C29.25 27.4253 30.4253 26.25 31.875 26.25C33.3247 26.25 34.5 27.4253 34.5 28.875C34.5 30.3247 33.3247 31.5 31.875 31.5Z"
        stroke="#EAEAEA"
      />
    </svg>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <svg
      {...props}
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
