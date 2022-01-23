module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      color: {
        basic: {
          'white': "var(--color-basic-white)",
          'black': "var(--color-basic-black)"
        },
        gray: {
          500: "var(--color-gray-500)"
        },
        primary: {
          100: "var(--color-primary-100)",
          500: "var(--color-primary-500)",
        },
        cta: {
          background: {
            primary: {
              'default': "var(--color-cta-background-primary-default)"
            }
          },
          text: {
            primary: {
              'default': "var(--color-cta-text-primary-default)"
            }
          }
        },
        inputfield: {
          background: {
            "default": "var(--color-inputfield-background-default)"
          },
          border: {
            "default": "var(--color-inputfield-border-default)"
          }
        }
      }
    },
    borderRadius: {
      default: "var(--radii-default)",
      round: "var(--radii-round)"
    },
    fontSize: {
      "font-heading-size-one": "var(--font-heading-size-one)"    
    },
    fontWeight: {
      "font-heading-weight-one": "var(--font-heading-weight-one)"
    },
    spacing: {
      sm: "var(--spacing-sm)",
      md: "var(--spacing-md)",
      lg: "var(--spacing-lg)",
      xl: "var(--spacing-xl)",  
      400: "400px"
    },
    extend: {
    },
  },
  plugins: [
  ]
}
