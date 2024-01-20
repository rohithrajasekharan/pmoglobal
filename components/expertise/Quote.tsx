interface IconProps {
  className?: string;
}

export default function Quote() {
  return (
    <section className="w-full py-8 md:py-18 lg:py-20 items-center justify-center flex flex-wrap">
      <QuoteIcon />
      <div>
        <h2 className="text-black max-w-[600px] m-10">
          Our mission is clear: to provide engineering solutions precisely
          customized to your project’s unique requirements. With extensive
          expertise spanning various disciplines and sectors, you can trust us
          to bring your vision to life with utmost professionalism and
          efficiency. Your success is our priority, and we are here to make it
          happen.
        </h2>
      </div>
    </section>
  );
}

function QuoteIcon(props: IconProps) {
  return (
    <svg
      width="86"
      height="86"
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.9893 41.6742H12.1835C12.4702 24.9399 15.7668 22.1807 26.051 16.0891C27.2335 15.3724 27.6276 13.8674 26.9109 12.6491C26.1943 11.4666 24.6892 11.0724 23.4709 11.7891C11.3592 18.9558 7.13086 23.3274 7.13086 44.1826V63.4967C7.13086 69.6242 12.1118 74.5692 18.2035 74.5692H28.9535C35.2601 74.5692 40.0258 69.8034 40.0258 63.4967V52.7467C40.0616 46.4401 35.296 41.6742 28.9893 41.6742Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M67.7626 41.6742H50.9568C51.2435 24.9399 54.5405 22.1807 64.8246 16.0891C66.0071 15.3724 66.4013 13.8674 65.6847 12.6491C64.968 11.4666 63.4626 11.0724 62.2443 11.7891C50.1326 18.9558 45.9043 23.3274 45.9043 44.1826V63.4967C45.9043 69.6242 50.8855 74.5692 56.9772 74.5692H67.7272C74.0338 74.5692 78.7993 69.8034 78.7993 63.4967V52.7467C78.8351 46.4401 74.0693 41.6742 67.7626 41.6742Z"
        fill="#292D32"
      />
    </svg>
  );
}
