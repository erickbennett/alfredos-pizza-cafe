export const theme = {
  maxHeight: '768px',
  maxWidth: '1024px',

  white: '#ffffff',
  black: '#393939',
  red: '#eb2226',

  bsNav: '0 0 15px 0 rgba(0, 0, 0, 0.22)',

  fontBlack: 'Lato-Black',
  fontBlackItalic: 'Lato-BlackItalic',
  fontBold: 'Lato-Bold',
  fontBoldItalic: 'Lato-BoldItalic',
  fontHairline: 'Lato-Hairline',
  fontHairlineItalic: 'Lato-HairlineItalic',
  fontHeavy: 'Lato-Heavy',
  fontHeavyItalic: 'Lato-HeavyItalic',
  fontItalic: 'Lato-Italic',
  fontLight: 'Lato-Light',
  fontLightItalic: 'Lato-LightItalic',
  fontMedium: 'Lato-Medium',
  fontMediumItalic: 'Lato-MediumItalic',
  fontRegular: 'Lato-Regular',
  fontSemibold: 'Lato-Semibold',
  fontSemiboldItalic: 'Lato-SemiboldItalic',
  fontThin: 'Lato-Thin',
  fontThinItalic: 'Lato-ThinItalic'
};

export const globals = `
  @font-face {
	  font-family:"Lato-Black";
	  src:url("/fonts/Lato-Black.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-BlackItalic";
	  src:url("/fonts/Lato-BlackItalic.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-Bold";
	  src:url("/fonts/Lato-Bold.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-BoldItalic";
	  src:url("/fonts/Lato-BoldItalic.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-Hairline";
	  src:url("/fonts/Lato-Hairline.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-HairlineItalic";
	  src:url("/fonts/Lato-HairlineItalic.ttf")  format("truetype");
    font-display: fallback;
  }

   @font-face {
	  font-family:"Lato-Heavy";
	  src:url("/fonts/Lato-Heavy.ttf")  format("truetype");
    font-display: fallback;
  }

   @font-face {
	  font-family:"Lato-HeavyItalic";
	  src:url("/fonts/Lato-HeavyItalic.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-Italic";
	  src:url("/fonts/Lato-Italic.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-Light";
	  src:url("/fonts/Lato-Light.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-LightItalic";
	  src:url("/fonts/Lato-LightItalic.ttf")  format("truetype");
    font-display: fallback;
  }


  @font-face {
	  font-family:"Lato-Medium";
	  src:url("/fonts/Lato-Medium.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-MediumItalic";
	  src:url("/fonts/Lato-MediumItalic.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-Regular";
	  src:url("/fonts/Lato-Regular.ttf")  format("truetype");
    font-display: fallback;
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
	  font-family:"Lato-Semibold";
	  src:url("/fonts/Lato-Semibold.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-SemiboldItalic";
	  src:url("/fonts/Lato-SemiboldItalic.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-Thin";
	  src:url("/fonts/Lato-Thin.ttf")  format("truetype");
    font-display: fallback;
  }

  @font-face {
	  font-family:"Lato-ThinItalic";
	  src:url("/fonts/Lato-ThinItalic.ttf")  format("truetype");
    font-display: fallback;
  }

  html{
    box-sizing: border-box;
    font-size: 10px;
    background-color: ${theme.white};
    -webkit-tap-highlight-color: transparent;

    @media (min-height: ${theme.maxHeight}) {
      overflow: hidden;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: ${theme.fontRegular};
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
    background-color: transparent;
  }
`;
