export function applyEffect() {
  const elements = document.querySelectorAll("[data-neon-blink-text]");
  if (!elements.length) return;

  elements.forEach((element) => {
    const text = element.textContent;
    if (!text) return;

    element.textContent = ""; // 一度中身を空にしてから再構築

    // 改行や空白も含めて文字ごとにspanでラップ
    Array.from(text).forEach((char) => {
      const span = document.createElement("span");

      // 空白の場合、そのまま表示
      if (char === " ") {
        span.textContent = " ";
        span.style.display = "inline-block"; // 空白をインラインブロックで扱う
      } else {
        span.textContent = char;
        span.classList.add("neon-letter");
        span.style.animationDelay = `${Math.random() * 4}s`; // 0〜4秒のランダム遅延
      }

      element.appendChild(span);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyEffect();
});

console.log('applyEffects');