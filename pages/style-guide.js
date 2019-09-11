import { Styled } from "theme-ui";
import { withRouter } from "next/router";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";
import Layout from "../components/layouts/default";

function StyleGuide({ router }) {
  return (
    <Layout pageTitle="Blog" path={router.pathname}>
      <Styled.h1>Style Guide</Styled.h1>
      <ColorPalette />
      <TypeScale />
      <TypeStyle
        fontFamily="heading"
        fontWeight="heading"
        lineHeight="heading"
      />
      <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
    </Layout>
  );
}

export default withRouter(StyleGuide);
