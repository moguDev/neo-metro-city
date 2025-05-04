import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const accordionPreviewData: ComponentPreviewData = {
  name: "accordion",
  description:
    "Accordions organize content into expandable sections, like unfolding secret panels in a futuristic building.",
  variants: [
    {
      title: "Accordion",
      component: (
        <div className="join w-xl">
          <div className="neon-accordion border-neon-b">
            <input type="radio" name="neon-accordion" />
            <div className="neon-accordion-title font-bold">
              ACCESS THE GRID
            </div>
            <div className="neon-accordion-content">
              Connect your citizen ID to the central CityCore system of Neo
              Metro City to unlock encrypted infrastructure modules. Once access
              is granted, you’ll be able to infiltrate closed sectors and
              navigate hidden digital layers normally concealed from public
              view.
            </div>
          </div>

          <div className="neon-accordion border-neon-b">
            <input type="radio" name="neon-accordion" />
            <div className="neon-accordion-title text-neon-orange font-bold">
              INITIATE PROTOCOL
            </div>
            <div className="neon-accordion-content">
              Activate your neural link and calibrate your personal system
              environment. By syncing your cognitive waveform with the citywide
              MetroNet, your reaction speed and information throughput will
              significantly improve.
            </div>
          </div>

          <div className="neon-accordion text-neon-blue">
            <input type="radio" name="neon-accordion" />
            <div className="neon-accordion-title text-neon-pink font-bold">
              CONNECT TO SKYLINE
            </div>
            <div className="neon-accordion-content">
              The Skyline Archive stores the city’s lost history, hidden
              records, and encrypted memories. Connecting grants you access to
              deleted datasets and partially reconstructed visual logs.
            </div>
          </div>
        </div>
      ),
      htmlStr: dedent(`
        <div class="join w-xl">
          <div class="neon-accordion border-neon-b">
            <input type="radio" name="neon-accordion">
            <div class="neon-accordion-title font-bold">
              ACCESS THE GRID
            </div>
            <div class="neon-accordion-content">
              Connect your citizen ID to the central CityCore system of Neo
              Metro City to unlock encrypted infrastructure modules. Once access
              is granted, you’ll be able to infiltrate closed sectors and
              navigate hidden digital layers normally concealed from public
              view.
            </div>
          </div>

          <div class="neon-accordion border-neon-b">
            <input type="radio" name="neon-accordion">
            <div class="neon-accordion-title text-neon-orange font-bold">
              INITIATE PROTOCOL
            </div>
            <div class="neon-accordion-content">
              Activate your neural link and calibrate your personal system
              environment. By syncing your cognitive waveform with the citywide
              MetroNet, your reaction speed and information throughput will
              significantly improve.
            </div>
          </div>

          <div class="neon-accordion text-neon-blue">
            <input type="radio" name="neon-accordion">
            <div class="neon-accordion-title text-neon-pink font-bold">
              CONNECT TO SKYLINE
            </div>
            <div class="neon-accordion-content">
              The Skyline Archive stores the city’s lost history, hidden
              records, and encrypted memories. Connecting grants you access to
              deleted datasets and partially reconstructed visual logs.
            </div>
          </div>
        </div>`),
      jsxStr: dedent(`
        <div className="join w-xl">
          <div className="neon-accordion border-neon-b">
            <input type="radio" name="neon-accordion" />
            <div className="neon-accordion-title font-bold">
              ACCESS THE GRID
            </div>
            <div className="neon-accordion-content">
              Connect your citizen ID to the central CityCore system of Neo
              Metro City to unlock encrypted infrastructure modules. Once access
              is granted, you’ll be able to infiltrate closed sectors and
              navigate hidden digital layers normally concealed from public
              view.
            </div>
          </div>

          <div className="neon-accordion border-neon-b">
            <input type="radio" name="neon-accordion" />
            <div className="neon-accordion-title text-neon-orange font-bold">
              INITIATE PROTOCOL
            </div>
            <div className="neon-accordion-content">
              Activate your neural link and calibrate your personal system
              environment. By syncing your cognitive waveform with the citywide
              MetroNet, your reaction speed and information throughput will
              significantly improve.
            </div>
          </div>

          <div className="neon-accordion text-neon-blue">
            <input type="radio" name="neon-accordion" />
            <div className="neon-accordion-title text-neon-pink font-bold">
              CONNECT TO SKYLINE
            </div>
            <div className="neon-accordion-content">
              The Skyline Archive stores the city’s lost history, hidden
              records, and encrypted memories. Connecting grants you access to
              deleted datasets and partially reconstructed visual logs.
            </div>
          </div>
        </div>`),
    },
  ],
};

export default accordionPreviewData;
