import { param } from "framer-motion/client";

type Props = {
  params: {
    name: string;
  };
};
const componentPage: React.FC<Props> = ({ params }) => {
  return (
    <div>
      <h2>{params.name}</h2>
    </div>
  );
};

export default componentPage;
