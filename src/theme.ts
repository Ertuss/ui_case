import { extendTheme } from "@mui/joy";

export default extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
          },
          neutral: {
            100: "#E1E8F0",
            300: '#94A3B8',
          },
          text: {
            icon: "#FFF",
            secondary: "#475669",
            tertiary: "#64748B"
          }
        },
      },
    },
    components: {
      JoyChipDelete: {
        defaultProps: {
          color: "neutral",
        },
        styleOverrides: {
          root: {
            borderRadius: 5,
            marginLeft: 1,
            marginRight: 1,
            backgroundColor: "var(--joy-palette-neutral-300)",
            // color: "var(--joy-palette-common-white)",
          },

        }
      },
      JoyChip: {
        styleOverrides: {
          root: {
            borderRadius: 7,
            paddingTop: 3,
            paddingBottom: 3
          },
          label: {
            color: "#334155"
          },
          endDecorator: {

          },

        },
      },
      JoyAutocomplete: {
        defaultProps: {
          slotProps: {
            listbox: {
              style: {
                padding: 0,
                borderRadius: 10
              }
            }
          }
        },
        styleOverrides: {
          root: {
            borderRadius: 10,
            boxShadow: "",
          },
        },
      }
    }
  });