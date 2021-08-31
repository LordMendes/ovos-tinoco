import { render, screen } from "@testing-library/react";
import React from "react";
import { NavbarWideScreen } from ".";

describe("Navbar on wide screen component", () => {
  it("renders correctly", () => {
    render(<NavbarWideScreen />);

    expect(
      screen.getByText("início")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Institucional")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Ovos")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Receitas")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Contato")
    ).toBeInTheDocument();
  });

  it("redirects to other page", () => {
    render(<NavbarWideScreen />);

    const homeAnchorNav = screen.getByText("início").parentNode;
    const institutionalAnchorNav = screen.getByText("Institucional").parentNode;
    const productsAnchorNav = screen.getByText("Ovos").parentNode;
    const recipesAnchorNav = screen.getByText("Receitas").parentNode;
    const contactAnchorNav = screen.getByText("Contato").parentNode;

    expect(homeAnchorNav).toHaveAttribute("href", "/");
    expect(institutionalAnchorNav).toHaveAttribute("href", "/institucional");
    expect(productsAnchorNav).toHaveAttribute("href", "/produtos");
    expect(recipesAnchorNav).toHaveAttribute("href", "/receitas");
    expect(contactAnchorNav).toHaveAttribute("href", "/contato");
  }); 
});
