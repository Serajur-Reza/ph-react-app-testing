import { describe, vi } from "vitest";
import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import FormComponent from "./Form";

describe("FormComponent()", () => {
  it("submits a form with correct user input", async () => {
    user.setup();

    const submitFn = vi.fn((data: any) => {
      console.log(data);
    });
    render(<FormComponent onSubmit={submitFn} />);

    const text = "Hello World";

    const inputEl = screen.getByRole("textbox");

    await user.type(inputEl, text);

    const headingEl = screen.getByRole("heading", {
      level: 2,
    });

    const submitButton = screen.getByRole("button", { name: "Submit" });

    await user.click(submitButton);

    expect(headingEl).toHaveTextContent(text);

    //test if submitfn is called
    expect(submitFn).toHaveBeenCalled();
    expect(submitFn).toHaveBeenCalledWith(text);
  });
});
