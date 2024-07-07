import { logRoles, render, screen, within } from "@testing-library/react";
import { describe, it } from "vitest";
import UserTable from "./UsersTable";
import { users } from "../../App";

describe("UsersTable()", () => {
  it("should render the welcome message after 5 ms", async () => {
    render(<UserTable users={users} />);

    const welcomeMessageEl = await screen.findByTestId(
      "welcome",
      {},
      { timeout: 2000 }
    );

    screen.logTestingPlaygroundURL();

    expect(welcomeMessageEl).toBeInTheDocument();
  });

  it("should render the table", async () => {
    const { container } = render(<UserTable users={users} />);

    logRoles(container);

    // const welcomeMessageEl = await screen.findByTestId(
    //   "welcome",
    //   {},
    //   { timeout: 2000 }
    // );

    const rows = within(screen.getByTestId("users")).getAllByRole("row");

    // screen.debug();

    expect(rows).toHaveLength(3);
  });
});
