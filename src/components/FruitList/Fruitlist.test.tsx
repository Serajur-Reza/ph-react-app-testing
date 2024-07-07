import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import FruitList from "./FruitList";

const fruits = ["apple", "banana", "orange", "mango", "pineapple"];

describe("FruitList()", () => {
  it("should render a list of fruits", () => {
    render(<FruitList fruits={fruits} />);

    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(fruits.length);
  });
});
