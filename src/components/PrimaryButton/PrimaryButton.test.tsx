import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton()", () => {
  it("should render a button", () => {
    render(<PrimaryButton />);

    const element = screen.getByText("Click to Add");

    expect(element).toBeInTheDocument();
  });

  it("should render a button if correct type is provided", () => {
    const actionType = "Post";
    render(<PrimaryButton actionType={actionType} />);

    const element = screen.getByText(`Click to ${actionType}`);

    expect(element).toBeInTheDocument();
  });
});
