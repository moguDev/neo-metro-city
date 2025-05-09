"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import HashAnchor from "./HashAnchor";

const fetchContributors = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REPOSITORY_URL}/contributors`,
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_GITHUB_API_KEY as string,
      },
    }
  );
  const data = await res.json();
  return data;
};

const ContributorsSection = () => {
  const [contributors, setContributors] = useState<
    { html_url: string; avatar_url: string; login: string }[]
  >([]);

  useEffect(() => {
    const getContributors = async () => {
      const data = await fetchContributors();
      setContributors(data);
    };
    getContributors();
  }, []);

  return (
    <section className="my-8" id="contributors">
      <div className="bg-cyber-black sticky top-0 left-0 right-0 flex items-center justify-between border-neon-b border-neon-orange py-4">
        <p className="text-xl uppercase font-bold italic tracking-wider">
          <HashAnchor id="#contributors" />
          <span className="mr-1 text-2xl text-neon-yellow neon-glow-soft">
            {contributors.length}
          </span>
          Contributors
        </p>
      </div>
      <div className="mx-2 my-4">
        <div className="flex items-center flex-wrap gap-4">
          {contributors.map((contributor, i) => (
            <a
              key={i}
              href={contributor.html_url}
              className="cursor-pointer"
              target="_blank"
            >
              <Image
                src={contributor.avatar_url}
                alt={contributor.login}
                width={44}
                height={44}
                className="rounded-xl"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;
