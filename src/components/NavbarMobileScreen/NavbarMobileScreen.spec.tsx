import { fireEvent, render, screen } from "@testing-library/react";
import { NavbarMobileScreen } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        push: jest.fn(),
      };
    },
  };
});

jest.mock("../../contexts/NavbarDropdownMenuContext", () => {
  return {
    useNavbarDrawer() {
      return {
        isOpen: true,
        onClose: jest.fn(),
      };
    },
  };
});

describe("Navbar on mobile screen component", () => {
  it("renders correctly", () => {
    render(<NavbarMobileScreen />);

    expect(screen.getByText("início")).toBeInTheDocument();
    expect(screen.getByText("Institucional")).toBeInTheDocument();
    expect(screen.getByText("Ovos")).toBeInTheDocument();
    expect(screen.getByText("Receitas")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("redirects to other page", () => {
    render(<NavbarMobileScreen />);
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

  it("redirects to social media page", () => {
    render(<NavbarMobileScreen />);

    const handleClick = jest.fn();

    const facebookImageLink = screen.getByAltText("Facebook Logo").parentElement;
    const instagramImageLink = screen.getByAltText("Instagram Logo").parentElement;
    
    fireEvent.click(facebookImageLink);
    expect(handleClick).toBeCalled;

    fireEvent.click(instagramImageLink);
    expect(handleClick).toBeCalled;
  });
});
