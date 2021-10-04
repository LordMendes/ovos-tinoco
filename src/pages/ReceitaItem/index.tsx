import { match } from "react-router";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { HeaderController } from "../../components/Header/HeaderController";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";

import { Box, useBreakpointValue } from "@chakra-ui/react";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";
import { HeaderFooter } from "../../components/HeaderFooter";
import { useEffect, useState } from "react";
import { getRecipes } from "../../services/api";

type Params = {
  slug: string;
};

interface RecipeItemProps {
  match: match<Params>;
}

export default function RecipeItem({ match }: RecipeItemProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

  const [content, setContent] = useState<any>([]);
  console.log(content);

  useEffect(() => {
    getRecipes().then((res) => setContent(res));
  }, []);

  return (
    <Container>
      <NavbarMobileScreen />
      <HeaderController />
      <Box as="main" h="100%" width="100%" maxW="1920px" mb="28">
        <SubtitleImageCard
          title="CREPRE FRANCÊS"
          imageURL="/static/images/tinoco-maio05-crepefrances1.png"
        />
        {isWideScreen ? <HeaderFooter /> : null}
        {content.length > 0 && (
          <div
            dangerouslySetInnerHTML={{ __html: content[0].content.rendered }}
          />
        )}
      </Box>
      <Footer />
    </Container>
  );
}
