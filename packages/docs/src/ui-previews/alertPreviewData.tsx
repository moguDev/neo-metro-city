import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const alertPreviewData: ComponentPreviewData = {
  name: "alert",
  description:
    "Alerts grab user attention with important information, flashing like warning signals in the neon cityscape.",
  variants: [
    // info color
    {
      title: "Info color",
      component: (
        <div role="alert" className="alert w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-6 overflow-visible"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="#D2ECFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="url(#glow)"
            />
          </svg>
          <span className="italic">THE FUTURE JUST ARRIVED!!</span>
        </div>
      ),
      htmlStr: dedent(`
        <div role="alert" class="alert">
          <!-- info icon -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6 overflow-visible">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#D2ECFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" filter="url(#glow)"></path>
          </svg>

          <span>
            <!-- CONTENT -->
          </span>
        </div>
      `),
      jsxStr: dedent(`
          <div role="alert" className="alert">
            {/* info icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 overflow-visible">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#D2ECFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)" />
            </svg>

            <span>
              {/* CONTENT*/}
            </span>
          </div>`),
    },
    // success color
    {
      title: "Success color",
      component: (
        <div role="alert" className="alert alert-success w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-6 overflow-visible"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              stroke="var(--neon-text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="url(#glow)"
            />
          </svg>
          <span className="italic">
            TRANSMISSION COMPLETE. DATA SYNC SUCCESSFUL.
          </span>
        </div>
      ),
      htmlStr: dedent(`
        <div role="alert" class="alert alert-success w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6 overflow-visible">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <path d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="var(--neon-text-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" filter="url(#glow)"></path>
          </svg>

          <span>
            <!-- CONTENT -->
          </span>
        </div>`),
      jsxStr: dedent(`
        <div role="alert" className="alert alert-success w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 overflow-visible">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="var(--neon-text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)" />
          </svg>

          <span>
            {/* CONTENT */}
          </span>
        </div>`),
    },
    // warning color
    {
      title: "Warning color",
      component: (
        <div role="alert" className="alert alert-warning w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-6 overflow-visible"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              stroke="var(--neon-text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="url(#glow)"
            />
          </svg>
          <span className="italic">
            SIGNAL DISRUPTED. RECONNECT RECOMMENDED.
          </span>
        </div>
      ),
      htmlStr: dedent(`
        <div role="alert" class="alert alert-warning w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6 overflow-visible">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke="var(--neon-text-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" filter="url(#glow)"></path>
          </svg>

          <span>
            <!-- CONTENT -->
          </span>
        </div>`),
      jsxStr: dedent(`
        <div role="alert" className="alert alert-warning w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-6 overflow-visible">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke="var(--neon-text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)" />
          </svg>

          <span>
            {/* CONTENT */}
          </span>
        </div>`),
    },
    // danger color
    {
      title: "Danger color",
      component: (
        <div role="alert" className="alert alert-danger w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="var(--neon-text-color)"
            fill="none"
            className="size-6 overflow-visible"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              filter="url(#glow)"
            />
          </svg>
          <span className="italic">
            CRITICAL FAULT. DISCONNECT FROM METRO-NET IMMEDIATELY.
          </span>
        </div>
      ),
      htmlStr: dedent(`
        <div role="alert" class="alert alert-danger w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="var(--neon-text-color)" fill="none" class="size-6 overflow-visible">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="coloredBlur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" filter="url(#glow)" ></path>
          </svg>

          <span>
            <!-- CONTENT -->
          </span>
        </div>`),
      jsxStr: dedent(`
        <div role="alert" className="alert alert-danger w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2} stroke="var(--neon-text-color)" fill="none" className="size-6 overflow-visible">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" filter="url(#glow)" />
          </svg>

          <span>
            {/* CONTENT */}
          </span>
        </div>`),
    },
  ],
};

export default alertPreviewData;
