const HashAnchor: React.FC<{ id: string }> = ({ id }) => (
  <a
    href={id}
    className="font-bold turnoff hover:turnon cursor-pointer transition duration-700 inline h-full mr-2"
    role="link"
    aria-label="Jump to this section"
  >
    #
  </a>
);

export default HashAnchor;
