import HashAnchor from "@/components/HashAnchor";
import PagesWrapper from "@/components/PagesWrapper";

const DocsIntroductionPage = () => {
  return (
    <PagesWrapper>
      <div className="space-y-12">
        <h1 className="font-bold text-3xl uppercase italic tracking-wider border-neon-b border-neon-orange py-4 mb-12">
          Introduction
        </h1>
        <section id="what-is-neo-metro-city">
          <h2 className="text-2xl font-medium tracking-widest italic">
            <HashAnchor id="#what-is-neo-metro-city" />
            What is Neo Metro City?
          </h2>
          <div className="tracking-widest leading-8 text-sm p-2">
            <p>
              If you’re looking for something “modern,” “clean,” and “minimal” —
              there are plenty of libraries out there that will gladly put you
              to sleep. We get it. That’s just not what we’re into.
            </p>
            <p>
              Neo Metro City isn’t here to play nice. It’s for developers who
              build with taste, not templates. For those who craft interfaces
              with personality — not just code.
            </p>
            <p className="font-medium text-lg italic text-neon-yellow">
              Welcome to the noise in modern web development. <br />
              Sync to the City.
            </p>
          </div>
        </section>
        <section id="why-choose-neo-metro-city">
          <h2 className="text-2xl font-medium tracking-widest italic">
            <HashAnchor id="#why-choose-neo-metro-city" />
            Why Choose Neo Metro City?
          </h2>
          <div className="tracking-widest leading-8 text-sm p-2">
            <ul className="list-disc list-inside">
              <li>Say goodbye to class name chaos</li>
              <li>Build with meaning, not just syntax</li>
              <li>Your UI, consistently cyber and unapologetically geek</li>
              <li>No toggles, no compromises — it’s dark mode only</li>
              <li>Focus on what matters: the product, the vibe, the vision</li>
              <p>
                Not for you if you enjoy rebuilding buttons for every project.
              </p>
            </ul>
          </div>
        </section>
        <section id="tailwind-is-the-engine">
          <h2 className="text-2xl font-medium tracking-widest italic">
            <HashAnchor id="#tailwind-is-the-engine" />
            Tailwind Is the Engine.
          </h2>
          <div className="tracking-widest leading-8 text-sm p-2">
            Neo Metro City is not a replacement—it’s a booster. Use Tailwind
            utilities where needed, and Neo Metro City components where you want
            clarity and speed.
            <br />
            Tailwind for details. Neo Metro City for vision.
          </div>
        </section>
        <section id="mit-licensed-and-free">
          <h2 className="text-2xl font-medium tracking-widest italic">
            <HashAnchor id="#mit-licensed-and-free" />
            MIT-Licensed & Free.
          </h2>
          <div className="tracking-widest leading-8 text-sm p-2">
            Open-source. No paywall. No limitations. Whether it’s commercial or
            passion project, you’re free to use it. <br />
            This isn’t just a tool—it’s a design philosophy.
          </div>
        </section>
        <section id="more-than-a-library">
          <h2 className="text-2xl font-medium tracking-widest italic">
            <HashAnchor id="#more-than-a-library" />
            More Than a Library.
          </h2>
          <div className="tracking-widest leading-8 text-sm p-2">
            Neo Metro City isn’t just a collection of components. It’s a place —
            a mindset — for developers who care too much. <br />
            The kind who obsess over spacing, glow, and rhythm. Who see code not
            just as logic, but as language. <br />
            Who don’t copy trends — they write their own rules. This city is
            built by those who still get excited by details. Who sync not just
            their files, but their philosophies. <br />
            Neo Metro City is not for everyone. It’s for the ones who never
            settled. <br />
            <p className="italic text-neon-yellow text-lg">Welcome home.</p>
          </div>
        </section>
      </div>
    </PagesWrapper>
  );
};
export default DocsIntroductionPage;
