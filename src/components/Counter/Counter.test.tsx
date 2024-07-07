import { describe, it } from "vitest";
import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createStore, store } from "../../redux/store";

describe("Counter()", () => {
  it("increase the counter value by 1 upon clicking the increment button", async () => {
    user.setup();

    <Provider store={createStore()}>
      <Counter />
    </Provider>;
    // render(<Counter />, {
    //     wrapper: //any wrapper
    // });

    const counterValueElement = screen.getByText("0");
    const incrementButton = screen.getByText("Increment");

    await user.click(incrementButton);

    expect(counterValueElement).toHaveTextContent("1");
  });

  it("increase the counter value by 1 upon clicking the increment button", async () => {
    user.setup();
    render(
      <Provider store={createStore()}>
        <Counter />
      </Provider>
    );

    const counterValueElement = screen.getByText("0");
    const incrementButton = screen.getByText("Increment");

    await user.click(incrementButton);

    expect(counterValueElement).toHaveTextContent("1");
  });
});
