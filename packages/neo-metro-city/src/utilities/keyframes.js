const keyframes = {
  "@keyframes loading-dot": {
    "0%, 100%": {
      filter: "brightness(0.3)",
      boxShadow: "none",
    },
    "50%": {
      filter: "brightness(1)",
      boxShadow: `
        0 0 4px var(--neon-blue),
        0 0 10px var(--neon-blue)
      `,
    },
  },
  "@keyframes status": {
    "0%, 100%": {
      filter: "brightness(0.4)",
    },
    "50%": {
      filter: "brightness(1.2)",
    },
  },
  "@keyframes neon-blink": {
    "0%, 100%": {
      filter: "brightness(0.9)",
    },
    "49%": {
      filter: "brightness(0.92)",
    },
    "50%": {
      filter: "brightness(0.3)",
    },
    "51%": {
      filter: "brightness(0.95)",
    },
    "90%": {
      filter: "brightness(0.92)",
    },
    "95%": {
      filter: "brightness(0.85)",
    },
    "96%": {
      filter: "brightness(0.9)",
    },
  },
  "@keyframes neon-glow-soft": {
    "0%": {
      filter: "brightness(0.65)",
    },
    "10%": {
      filter: "brightness(1.05)",
    },
    "20%": {
      filter: "brightness(0.7)",
    },
    "30%": {
      filter: "brightness(1.1)",
    },
    "40%": {
      filter: "brightness(0.72)",
    },
    "50%": {
      filter: "brightness(1.08)",
    },
    "60%": {
      filter: "brightness(0.85)",
    },
    "70%": {
      filter: "brightness(1.0)",
    },
    "80%": {
      filter: "brightness(0.68)",
    },
    "90%": {
      filter: "brightness(1.03)",
    },
    "100%": {
      filter: "brightness(0.75)",
    },
  },
  "@keyframes neon-fade": {
    "0%": {
      filter: "brightness(1.0)",
    },
    "2%": {
      filter: "brightness(0.98)",
    },
    "4%": {
      filter: "brightness(0.96)",
    },
    "6%": {
      filter: "brightness(0.94)",
    },
    "8%": {
      filter: "brightness(0.92)",
    },
    "10%": {
      filter: "brightness(0.90)",
    },
    "12%": {
      filter: "brightness(0.88)",
    },
    "14%": {
      filter: "brightness(0.86)",
    },
    "16%": {
      filter: "brightness(0.84)",
    },
    "18%": {
      filter: "brightness(0.82)",
    },
    "20%": {
      filter: "brightness(0.80)",
    },
    "22%": {
      filter: "brightness(0.78)",
    },
    "24%": {
      filter: "brightness(0.76)",
    },
    "26%": {
      filter: "brightness(0.74)",
    },
    "28%": {
      filter: "brightness(0.72)",
    },
    "30%": {
      filter: "brightness(0.70)",
    },
    "32%": {
      filter: "brightness(0.68)",
    },
    "34%": {
      filter: "brightness(0.66)",
    },
    "36%": {
      filter: "brightness(0.64)",
    },
    "38%": {
      filter: "brightness(0.62)",
    },
    "40%": {
      filter: "brightness(0.60)",
    },
    "42%": {
      filter: "brightness(0.58)",
    },
    "44%": {
      filter: "brightness(0.56)",
    },
    "46%": {
      filter: "brightness(0.54)",
    },
    "48%": {
      filter: "brightness(0.52)",
    },
    "50%": {
      filter: "brightness(0.50)",
    },
    "52%": {
      filter: "brightness(0.48)",
    },
    "54%": {
      filter: "brightness(0.46)",
    },
    "56%": {
      filter: "brightness(0.44)",
    },
    "58%": {
      filter: "brightness(0.42)",
    },
    "60%": {
      filter: "brightness(0.40)",
    },
    "62%": {
      filter: "brightness(0.38)",
    },
    "64%": {
      filter: "brightness(0.36)",
    },
    "66%": {
      filter: "brightness(0.34)",
    },
    "68%": {
      filter: "brightness(0.32)",
    },
    "70%": {
      filter: "brightness(0.30)",
    },
    "72%": {
      filter: "brightness(0.28)",
    },
    "74%": {
      filter: "brightness(0.26)",
    },
    "76%": {
      filter: "brightness(0.24)",
    },
    "78%": {
      filter: "brightness(0.22)",
    },
    "80%": {
      filter: "brightness(0.20)",
    },
    "82%": {
      filter: "brightness(0.18)",
    },
    "84%": {
      filter: "brightness(0.16)",
    },
    "86%": {
      filter: "brightness(0.14)",
    },
    "88%": {
      filter: "brightness(0.12)",
    },
    "90%": {
      filter: "brightness(0.10)",
    },
    "92%": {
      filter: "brightness(0.08)",
    },
    "94%": {
      filter: "brightness(0.06)",
    },
    "96%": {
      filter: "brightness(0.04)",
    },
    "98%": {
      filter: "brightness(0.02)",
    },
    "100%": {
      filter: "brightness(0.0)",
    },
  },
  "@keyframes neon-flicker": {
    "0%": {
      opacity: "0",
      boxShadow: "none",
      filter: "brightness(0.3)",
    },
    "3%": {
      opacity: "1",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(1)",
    },
    "7%": {
      opacity: "0",
      boxShadow: "none",
      filter: "brightness(0.3)",
    },
    "10%": {
      opacity: "1",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(1)",
    },
    "14%": {
      opacity: "0",
      filter: "brightness(0.3)",
    },
    "18%": {
      opacity: "1",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(1)",
    },
    "22%": {
      opacity: "0.7",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(0.7)",
    },
    "26%": {
      opacity: "0.9",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(0.9)",
    },
    "30%": {
      opacity: "0.2",
      boxShadow: "none",
      filter: "brightness(0.3)",
    },
    "34%": {
      opacity: "1",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(1)",
    },
    "38%": {
      opacity: "0.5",
      boxShadow: "none",
      filter: "brightness(0.5)",
    },
    "42%": {
      opacity: "1",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(1)",
    },
    "46%": {
      opacity: "0.8",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(0.8)",
    },
    "50%": {
      opacity: "1",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(1)",
    },
    "60%": {
      opacity: "0.9",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(0.9)",
    },
    "70%": {
      opacity: "1",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(1)",
    },
    "80%": {
      opacity: "1",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(1)",
    },
    "90%": {
      opacity: "1",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 2px currentColor, inset 0 0 8px currentColor",
      filter: "brightness(1)",
    },
    "100%": {
      opacity: "1",
      boxShadow:
        "0 0 2px currentColor, 0 0 8px currentColor, inset 0 0 currentColor, inset 0 0 currentColor",
      filter: "brightness(0.3)",
    },
  },
};

module.exports = keyframes;
