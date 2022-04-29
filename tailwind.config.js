const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
// const zephyrTokens = require('./zephyr/tailwind-variables')

module.exports = {
  content: ['./src/components/**/*.{vue,js,ts}'],
  darkMode: false,
  theme: {
    // colors: {
    //   ...zephyrTokens.colors
    // },
    container: {
      padding: {
        DEFAULT: '0rem',
        sm: '1rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '5rem'
      }
    },
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ]
    },
    gradients: (theme) => ({
      ocean: [
        '98.66deg',
        `${theme('colors.sea-glass')} 9.7%`,
        `${theme('colors.aqua.DEFAULT')} 96.6%`
      ],
      galaxy: {
        type: 'radial',
        colors: [
          '60.53% 61.06% at 68.85% 57.59%',
          `${theme('colors.robin.DEFAULT')}75 0%`,
          `${theme('colors.lilac')}29 55.73%`,
          `${theme('colors.vanilla.100')}00 100%`
        ]
      },
      dawn: [
        '98.66deg',
        `${theme('colors.robin.DEFAULT')} 4.42%`,
        `${theme('colors.lilac')} 96.6%`
      ],
      'dark-dawn': {
        custom: `linear-gradient(180deg, ${theme(
          'colors.ink.400'
        )} 0%, rgba(22, 24, 29, 0.7) 100%), 
          linear-gradient(98.66deg, ${theme('colors.robin.DEFAULT')} 4.42%, ${theme(
          'colors.lilac'
        )} 96.6%)`
      },
      splash: ['98.66deg', `${theme('colors.robin.DEFAULT')} 4.42%`, '#3450AF 96.6%'],
      skeleton: [
        '104.58deg',
        `${theme('colors.ink.300')} 0%`,
        `${theme('colors.ink.200')} 40.08%`,
        `${theme('colors.ink.300')} 60.32%`
      ],
      juniper: [
        '0deg',
        `${theme('colors.transparent')} 0%`,
        `${theme('colors.juniper.DEFAULT')} 100%`
      ]
    }),
    screens: {
      xs: '321px',
      ...defaultTheme.screens
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s',
        fadeInFast: 'fadeIn 0.5s',
        expand: 'expand 1s',
        'first-half-spin': 'first-half-spin 0.5s',
        'reverse-half-spin': 'reverse-half-spin 0.5s',
        'first-quarter-spin': 'first-quarter-spin 0.5s',
        'reverse-quarter-spin': 'reverse-quarter-spin 0.5s',
        gradient: 'gradient 30s ease infinite',
        'slide-left-enter-active': 'slide-left-in 0.5s ease-out',
        'slide-left-leave-active': 'slide-left-out 0.5s ease-out',
        'slide-right-enter-active': 'slide-right-in 0.5s ease-out',
        'slide-right-leave-active': 'slide-right-out 0.5s ease-out',
        'slide-bottom-enter-active': 'slide-bottom-in 0.2s ease-out',
        'slide-bottom-leave-active': 'slide-bottom-out 0.2s ease-out',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        expand: {
          from: {
            height: '0px'
          },
          to: {
            height: 'auto'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'first-quarter-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(90deg)' }
        },
        'reverse-quarter-spin': {
          from: { transform: 'rotate(90deg)' },
          to: { transform: 'rotate(0deg)' }
        },
        gradient: {
          '0%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
          '100%': {
            'background-position': '0% 50%'
          }
        },
        'first-half-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(180deg)' }
        },
        'reverse-half-spin': {
          from: { transform: 'rotate(180deg)' },
          to: { transform: 'rotate(0deg)' }
        },

        'slide-right-out': {
          from: {
            transform: 'translateX(0%)'
          },
          to: {
            transform: 'translateX(-100%)'
          }
        },
        'slide-right-in': {
          from: {
            transform: 'translateX(100%)'
          },
          to: {
            transform: 'translateX(0%)'
          }
        },
        'slide-left-in': {
          from: {
            transform: 'translateX(-100%)'
          },
          to: {
            transform: 'translateX(0%)'
          }
        },
        'slide-left-out': {
          from: {
            transform: 'translateX(0%)'
          },
          to: {
            transform: 'translateX(100%)'
          }
        },
        'slide-bottom-in': {
          from: {
            transform: 'translateY(100%)'
          },
          to: {
            transform: 'translateY(0%)'
          }
        },
        'slide-bottom-out': {
          from: {
            transform: 'translateY(0%)'
          },
          to: {
            transform: 'translateY(100%)'
          }
        },
        float: {
          '0%': {
            transform: 'translate(0,  0px)'
          },
          '50%': {
            transform: 'translate(0, 30px)'
          },
          '100%': {
            transform: 'translate(0, -0px)'
          }
        }
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        'double-dark':
          '0px 18px 51px rgba(0, 0, 0, 0.26), 0px 2.25388px 6.38599px rgba(0, 0, 0, 0.13)'
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '0.875rem' }]
      },
      gridTemplateColumns: {
        'fr-fr-8': '1fr 1fr minmax(auto, 8rem)',
        'fr-fr-10': '1fr 1fr minmax(auto, 10rem)',
        'fr-fr-12': '1fr 1fr minmax(auto, 12rem)',
        'fr-fr-16': '1fr 1fr minmax(auto, 16rem)',
        'fr-fr-20': '1fr 1fr minmax(auto, 20rem)',
        'fr-fr-22': '1fr 1fr minmax(auto, 22rem)',
        'fr-fr-24': '1fr 1fr minmax(auto, 24rem)',
        'fr-8': '1fr minmax(auto, 8rem)',
        'fr-10': '1fr minmax(auto, 10rem)',
        'fr-12': '1fr minmax(auto, 12rem)',
        'fr-16': '1fr minmax(auto, 16rem)',
        'fr-20': '1fr minmax(auto, 20rem)',
        'fr-22': '1fr minmax(auto, 22rem)',
        'fr-24': '1fr minmax(auto, 24rem)',

        '8-fr': 'minmax(auto, 8rem) 1fr',
        '12-fr': 'minmax(auto, 12rem) 1fr',
        '16-fr': 'minmax(auto, 16rem) 1fr',
        '20-fr': 'minmax(auto, 20rem) 1fr',
        '22-fr': 'minmax(auto, 22rem) 1fr',
        '24-fr': 'minmax(auto, 24rem) 1fr',
        footer: 'repeat(5, 1fr) 2fr 1.5fr'
      },
      letterSpacing: {
        'widest-lg': '0.15em'
      },
      spacing: {
        102: '32rem'
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.05)'
      },
      width: {
        halfScreen: '50vw'
      },
      zIndex: {
        1000: '1000'
      }
    }
  },
  plugins: [
    plugin(
      /**
       * Plugin to add fallback for browsers that don't support [backdrop-filter]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter} CSS property.
       *
       * @example
       * // Adds `bg-slate-100` class when `backdrop-filter` isn't supported.
       * "no-filter:bg-slate-100"
       */
      ({ addVariant, e, postcss }) => {
        addVariant('no-filter', ({ container, separator }) => {
          const supportsRule = postcss.atRule({
            name: 'supports',
            params: 'not (backdrop-filter: blur(1px))'
          })
          supportsRule.append(container.nodes)
          container.append(supportsRule)
          supportsRule.walkRules((rule) => {
            rule.selector = `.${e(`no-filter${separator}${rule.selector.slice(1)}`)}`
          })
        })
      }
    ),
    plugin(
      /**
       * Plugin to add few built-in gradient types to Zeal.
       * @see {@link module.exports.theme.gradients}
       */
      ({ addUtilities, e, theme, variants }) => {
        const utilities = Object.keys(theme('gradients')).map((name) => {
          const gradient = theme('gradients')[name]
          let background = ''
          if (Object.prototype.hasOwnProperty.call(gradient, 'custom')) {
            background = gradient.custom
          } else {
            const type = Object.prototype.hasOwnProperty.call(gradient, 'type')
              ? gradient.type
              : 'linear'
            const gradientColors = Object.prototype.hasOwnProperty.call(gradient, 'colors')
              ? gradient.colors
              : gradient
            background = `${type}-gradient(${gradientColors.join(', ')})`
          }

          return {
            [`.z-gradient-${e(name)}`]: {
              backgroundImage: background
            }
          }
        })

        addUtilities(utilities, variants('gradients', []))
      }
    )
  ]
}
