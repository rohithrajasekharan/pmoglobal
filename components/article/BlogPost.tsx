import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

interface IconProps {
  className?: string;
}

const Bold = ({ children }: any) => <span className="bold">{children}</span>;
const Text = ({ children }: any) => <p className="align-center">{children}</p>;

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mb-4">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="text-3xl font-bold mb-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="text-2xl font-bold mb-4">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: any) => (
      <h4 className="text-xl font-bold mb-4">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: any) => (
      <h5 className="text-lg font-bold mb-4">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: any) => (
      <h6 className="text-base font-bold mb-4">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node: any, children: any) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote
        className="bg-[#2B2B2B] text-white text-2xl text-center p-16"
        style={{ margin: "30px auto" }}
      >
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      // Render embedded asset
      return (
        <img
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.description}
          className="mb-4"
        />
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: any) => <em>{text}</em>,
    // Add more node types as needed
  },
};

export default function BlogPost(props: any) {
  const { data } = props;

  return (
    <div className="p-8 mb-20 max-w-[1200px] flex flex-col self-start space-y-4 mx-[2%] sm:mx-[5%] md:mx-[10%] lg:mx-[10%] pb-4">
      {documentToReactComponents(data.fields.post, options)}
      <div className="border-y-2 border-[#D6D6D6] py-6 flex">
        <InstagramIcon className="mr-5" />
        <FacebookIcon className="mr-5" />
        <LinkedinIcon className="mr-5" />
      </div>
    </div>
  );
}

function LinkedinIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="28"
      height="28"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5243 0.910156H2.02117C1.28333 0.910156 0.638672 1.44105 0.638672 2.17022V15.7034C0.638672 16.4365 1.28333 17.0898 2.02117 17.0898H15.5204C16.2622 17.0898 16.8184 16.4322 16.8184 15.7034V2.17022C16.8227 1.44105 16.2622 0.910156 15.5243 0.910156ZM5.65401 14.3967H3.33613V7.1899H5.65401V14.3967ZM4.57525 6.09416H4.55863C3.81682 6.09416 3.33649 5.54195 3.33649 4.8507C3.33649 4.14682 3.82946 3.60761 4.58789 3.60761C5.34631 3.60761 5.81039 4.14284 5.827 4.8507C5.82664 5.54195 5.34631 6.09416 4.57525 6.09416ZM14.1252 14.3967H11.8073V10.4562C11.8073 9.51211 11.47 8.86709 10.6314 8.86709C9.99075 8.86709 9.61153 9.30048 9.44287 9.72267C9.37967 9.87435 9.3627 10.0809 9.3627 10.2918V14.3967H7.04482V7.1899H9.3627V8.19282C9.70002 7.71249 10.2269 7.02124 11.4531 7.02124C12.9746 7.02124 14.1256 8.02416 14.1256 10.1864L14.1252 14.3967Z"
        fill="black"
      />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="28"
      height="28"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7283 1.36109C12.6424 1.36372 13.5183 1.7143 14.1646 2.33629C14.811 2.95827 15.1753 3.80111 15.1781 4.68072V11.3193C15.1753 12.1989 14.811 13.0417 14.1646 13.6637C13.5183 14.2857 12.6424 14.6363 11.7283 14.6389H4.82947C3.91537 14.6363 3.03949 14.2857 2.39312 13.6637C1.74675 13.0417 1.38242 12.1989 1.37969 11.3193V4.68072C1.38242 3.80111 1.74675 2.95827 2.39312 2.33629C3.03949 1.7143 3.91537 1.36372 4.82947 1.36109H11.7283ZM11.7283 0.0334473H4.82947C2.1732 0.0334473 0 2.12467 0 4.68072V11.3193C0 13.8753 2.1732 15.9666 4.82947 15.9666H11.7283C14.3845 15.9666 16.5578 13.8753 16.5578 11.3193V4.68072C16.5578 2.12467 14.3845 0.0334473 11.7283 0.0334473Z"
        fill="black"
      />
      <path
        d="M12.7643 4.68134C12.5597 4.68134 12.3596 4.62293 12.1894 4.51351C12.0192 4.40409 11.8866 4.24856 11.8082 4.0666C11.7299 3.88464 11.7094 3.68441 11.7494 3.49124C11.7893 3.29807 11.8878 3.12063 12.0326 2.98137C12.1773 2.8421 12.3617 2.74726 12.5624 2.70883C12.7632 2.67041 12.9713 2.69013 13.1604 2.7655C13.3495 2.84087 13.5111 2.96851 13.6248 3.13227C13.7385 3.29603 13.7992 3.48856 13.7992 3.68552C13.7995 3.81637 13.7729 3.94599 13.721 4.06693C13.6691 4.18788 13.5929 4.29777 13.4967 4.3903C13.4006 4.48282 13.2864 4.55616 13.1607 4.60611C13.035 4.65605 12.9003 4.68162 12.7643 4.68134ZM8.28006 5.34498C8.82589 5.34498 9.35946 5.50073 9.8133 5.79254C10.2671 6.08434 10.6209 6.4991 10.8297 6.98435C11.0386 7.4696 11.0933 8.00356 10.9868 8.51871C10.8803 9.03385 10.6175 9.50704 10.2315 9.87844C9.84554 10.2498 9.3538 10.5028 8.81846 10.6052C8.28313 10.7077 7.72823 10.6551 7.22395 10.4541C6.71968 10.2531 6.28866 9.91273 5.98542 9.47601C5.68217 9.03929 5.52032 8.52585 5.52032 8.00062C5.5211 7.29653 5.81211 6.6215 6.32949 6.12363C6.84688 5.62576 7.54837 5.34573 8.28006 5.34498ZM8.28006 4.01734C7.46136 4.01734 6.66104 4.25095 5.98032 4.68864C5.29959 5.12633 4.76903 5.74843 4.45572 6.47628C4.14242 7.20413 4.06044 8.00504 4.22016 8.77772C4.37989 9.5504 4.77413 10.2601 5.35304 10.8172C5.93195 11.3743 6.66953 11.7537 7.4725 11.9074C8.27547 12.0611 9.10777 11.9822 9.86416 11.6807C10.6205 11.3792 11.267 10.8687 11.7219 10.2136C12.1767 9.55856 12.4195 8.78844 12.4195 8.00062C12.4195 6.94419 11.9834 5.93102 11.2071 5.18401C10.4308 4.437 9.37791 4.01734 8.28006 4.01734Z"
        fill="black"
      />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg
      {...props}
      width="28"
      height="28"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.6682 8.04809C17.6682 3.62309 13.8376 0.0351562 9.1134 0.0351562C4.38916 0.0351562 0.558594 3.62309 0.558594 8.04809C0.558594 12.0474 3.68644 15.3624 7.77671 15.9641V10.365H5.60402V8.04809H7.77671V6.28274C7.77671 4.27485 9.0542 3.16485 11.0081 3.16485C11.9441 3.16485 12.9233 3.32153 12.9233 3.32153V5.29364H11.8441C10.782 5.29364 10.4497 5.91107 10.4497 6.54566V8.04809H12.8221L12.4433 10.365H10.4501V15.9648C14.5403 15.3635 17.6682 12.0485 17.6682 8.04809Z"
        fill="black"
      />
    </svg>
  );
}
