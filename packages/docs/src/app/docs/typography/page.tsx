import HashAnchor from "@/components/HashAnchor";
import PagesWrapper from "@/components/PagesWrapper";

const DocsColorsPage = () => {
  return (
    <PagesWrapper>
      <div className="space-y-12">
        <h1 className="font-bold text-3xl uppercase italic tracking-wider border-neon-b border-neon-orange py-4 mb-12">
          Typography
        </h1>
        <section id="what-is-neo-metro-city">
          <h2 className="text-2xl font-medium tracking-widest italic">
            <HashAnchor id="#what-is-neo-metro-city" />
            List of all Neo Metro City text color
          </h2>
          <div className="tracking-widest leading-8 text-sm p-2">
            <p>
              You can use these color names in utility classes.
            </p>
            <div className="overflow-x-auto shadow-lg rounded-lg border border-neon-blue/20">
              <div className="whitespace-nowrap">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-cyber-dark/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-neon-blue uppercase tracking-wider border-b border-neon-blue/20">Class</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-neon-blue uppercase tracking-wider border-b border-neon-blue/20">Style</th>
                    </tr>
                  </thead>
                  <tbody className="bg-cyber-black/30 divide-y divide-neon-blue/10">
                    <tr className="hover:bg-cyber-dark/30 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-neon-none">text-neon-none</td>
                      <td className="px-6 py-4 text-sm font-medium">text-shadow: none !important;<span className="text-gray-400"></span></td>
                    </tr>
                    <tr className="hover:bg-cyber-dark/30 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-neon-blue">text-primary</td>
                      <td className="px-6 py-4 text-sm font-medium">color: var(--neon-blue)</td>
                    </tr>
                    <tr className="hover:bg-cyber-dark/30 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-neon-orange">text-accent</td>
                      <td className="px-6 py-4 text-sm font-medium">color: var(--neon-orange)</td>
                    </tr>
                    <tr className="hover:bg-cyber-dark/30 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-neon-blue">text-neon-blue</td>
                      <td className="px-6 py-4 text-sm font-medium">color: var(--neon-blue)</td>
                    </tr>
                    <tr className="hover:bg-cyber-dark/30 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-neon-orange">neon-orange</td>
                      <td className="px-6 py-4 text-sm font-medium">color: var(--neon-orange)</td>
                    </tr>
                    <tr className="hover:bg-cyber-dark/30 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-neon-red">neon-red</td>
                      <td className="px-6 py-4 text-sm font-medium">color: var(--neon-red)</td>
                    </tr>
                    <tr className="hover:bg-cyber-dark/30 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-neon-pink">neon-pink</td>
                      <td className="px-6 py-4 text-sm font-medium">color: var(--neon-pink)</td>
                    </tr>
                    <tr className="hover:bg-cyber-dark/30 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-neon-purple">neon-purple</td>
                      <td className="px-6 py-4 text-sm font-medium">color: var(--neon-purple)</td>
                    </tr>
                    <tr className="hover:bg-cyber-dark/30 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-neon-green">neon-green</td>
                      <td className="px-6 py-4 text-sm font-medium">color: var(--neon-green)</td>
                    </tr>
                    <tr className="hover:bg-cyber-dark/30 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm font-medium text-neon-yellow">neon-yellow</td>
                      <td className="px-6 py-4 text-sm font-medium">color: var(--neon-yellow)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PagesWrapper>
  );
};
export default DocsColorsPage;
