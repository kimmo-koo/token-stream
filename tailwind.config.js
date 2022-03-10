module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    spacing: {
      '100': "var(--spacing-100)",
      '200': "var(--spacing-200)",
      '300': "var(--spacing-300)",
      '400': "var(--spacing-400)",
      '500': "var(--spacing-500)",
      '600': "var(--spacing-600)",
      'form' : '400px'
    },
    colors: {
      basic: {
        "white": "var(--color-basic-white)",
        "black": "var(--color-basic-black)"
      },
      neutral: {
        100: "var(--color-neutral-100)",
        500: "var(--color-neutral-500)",
        700: "var(--color-neutral-700)",
        900: "var(--color-neutral-900)",
        1000: "var(--color-neutral-1000)"
      },
      primary: {
        100: "var(--color-primary-100)",
        500: "var(--color-primary-500)",
        900: "var(--color-primary-900)"
      },
    },
    borderRadius: {
      "full": "var(--radii-full)",
      "sharp": "var(--radii-sharp)",
      "round": "var(--radii-round)"
    },
    fontSize: {
      "100": "var(--font-size-100)",
      "200": "var(--font-size-200)",
      "300": "var(--font-size-300)",
      "400": "var(--font-size-400)",
      "500": "var(--font-size-500)",
    },
    fontWeight: {
      "bold": "var(--font-weight-bold)",
      "regular": "var(--font-weight-regular)"
    },
    fontFamily: {
      "sans": "var(--font-family-sans)"
    },
    extend: {
    },
  },
  plugins: [
  ]
}
