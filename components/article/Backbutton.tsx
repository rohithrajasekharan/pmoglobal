'use client';
import { useRouter } from 'next/navigation';
interface IconProps {
    className?: string;
  }
function BackButton({
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  const router = useRouter();
  return (
    <div onClick={() => router.back()}>
        <BackIcon className={className}/>
    </div>
  );
}

export default BackButton;

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
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6113 13.1388L8.08463 10.6121L10.6113 8.08541"
          stroke="#2B2B2B"
          stroke-width="0.758008"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }