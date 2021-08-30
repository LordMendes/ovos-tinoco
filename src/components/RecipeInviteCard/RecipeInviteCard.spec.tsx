import { render, screen } from "@testing-library/react";
import React from "react";
import { RecipeInviteCard } from ".";

describe("Recipe invite card component", () => {
  it("renders correctly", () => {
    render(<RecipeInviteCard />);

    expect(
      screen.getByText("Clique aqui e confira receitas deliciosas!")
    ).toBeInTheDocument();
  });

  it("redirects to recipes page", () => {
    render(<RecipeInviteCard />);

    const accessNowButton = screen.getByText("Acesse agora");

    expect(accessNowButton).toHaveAttribute("href", "/receitas");
  }); 
});
