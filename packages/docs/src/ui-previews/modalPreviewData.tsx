import { ComponentPreviewData } from "@/types";
import dedent from "dedent";

const modalPreviewData: ComponentPreviewData = {
  name: "modal",
  description:
    "Modals are like neon popups in the cityscape, focusing user attention on a single task or message without leaving the current page.",
  variants: [
    {
      title: "Modal",
      component: (
        <>
          <button
            className="btn"
            onClick={() =>
              (
                document.getElementById("neon-modal-1") as HTMLDialogElement
              ).showModal()
            }
          >
            OPEN MODAL
          </button>
          <dialog id="neon-modal-1" className="modal">
            <div className="modal-box">
              <h3 className="modal-head text-xl font-bold">THIS IS MODAL</h3>
              <p className="py-4">
                Press ESC key or click the button below to close.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">CLOSE</button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      ),
      htmlStr: dedent(`
        <button class="btn" onclick="document.getElementById('neon-modal-1').showModal()">
          OPEN MODAL
        </button>

        <dialog id="neon-modal-1" class="modal">
          <div class="modal-box">
            <h3 class="modal-head text-xl font-bold">
              THIS IS MODAL
            </h3>
            <p class="py-4">
              Press ESC key or click the button below to close.
            </p>
            <div class="modal-action">
              <form method="dialog">
                <button class="btn">CLOSE</button>
              </form>
            </div>
          </div>
        </dialog>`),
      jsxStr: dedent(`
        <button className="btn" onClick={() => document.getElementById("neon-modal-1")?.showModal()}>
          OPEN MODAL
        </button>

        <dialog id="neon-modal-1" className="modal">
          <div className="modal-box">
            <h3 className="modal-head text-xl font-bold">
              THIS IS MODAL
            </h3>
            <p className="py-4">
              Press ESC key or click the button below to close.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">CLOSE</button>
              </form>
            </div>
          </div>
        </dialog>`),
    },
  ],
};

export default modalPreviewData;
