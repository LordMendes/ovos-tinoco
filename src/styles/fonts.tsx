import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: "Helvetica Neue";
      src: url("./static/fonts/HelveticaNeue-Light.woff") format("woff");
      font-weight: 300;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Helvetica Neue";
      src: url("./static/fonts/HelveticaNeue-Medium.woff") format("woff");
      font-weight: 400;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Helvetica Neue";
      src: url("./static/fonts/HelveticaNeue-Bold.woff") format("woff");
      font-weight: 700;
      font-style: normal;
    }
    
    @font-face {
      font-family: "Helvetica Neue";
      src: url("./static/fonts/HelveticaNeue-Black.woff") format("woff");
      font-weight: 900;
      font-style: normal;
    }
      `}
  />
)

export default Fonts