/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          600:"#3A3A3A1A",
          700:"#3A3A3A66",
          800: "#111C24",
          900: "#3A3A3A",
          Border:"#3A3A3A33"
        },
        Teal: "#1A8281",
        salte: "#FDF6EE",
        Bgslate:"#F9F9F9",
        Bgwhite: "rgba(255, 255, 255, 0.64)",
        Bgwhite10: "rgba(255, 255, 255, 0.10)",
        Border:"#EBEBEB",
        BgTeal:"#1A828180"
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          
          '2xl': "1670px",
          
        }
      },
      screens: {
        'xm':"540px",
        'xlg':'1350px',
        '4xl':"1680px",
        '3xl': "1770px"
      },
      fontFamily: {
        'primary-font': ['Roboto', 'sans-serif']
      },
      fontSize: {
        h1: ["46px", {
          fontWeight: "700"
        }],
        h2: ["33px", {
          fontWeight: "700"
        }],
        h3: ["28px", {
          fontWeight: "600"
        }],
        h4: ["23px", {
          fontWeight: "600"
        }],
        body: ["16px", {
          lineHeight: "26px",
          fontWeight: "400"
        }],
        a: ["18px", {
         fontWeight: "400"
        }]
      },
      backgroundImage: {
          // 'banner-img': "url('/images/banner-image.png')",
          'velly-svg': "url('/images/velly-green-svg.svg')",
          'Category-bg':"linear-gradient(rgba(33, 30, 28, 0.302) 0%, rgba(33, 30, 28, 0.302) 100%),url('/images/bg-flower.webp')",
          'slider-image': "linear-gradient(180deg, rgba(0, 0, 0, 0.085) 0%, rgba(0, 0, 0, 0.85) 100%),url('/images/bg-slider.webp')",
          'slider-bg':"linear-gradient(180deg, rgba(12, 65, 88, 0) 0%, rgba(26, 130, 129, 0.35) 35.5%, #1A8281 100%)",
          'left-arow':"url('/images/Vector(4).png')",
          'right-arow':"url('/images/vector5.png')",
          'background-svg':"url('/images/roundservicebg.svg')",
          // 'Line-up':"url('/images/Line2.png')",
          // 'Line-down':"url('/images/Line3.png')"
      },
      boxShadow:{
         "shadow":'0px 0px 16px 0px #54615426'
      }
    },
  },
  plugins: [],
};