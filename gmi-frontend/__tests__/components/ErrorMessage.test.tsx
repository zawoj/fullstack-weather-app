import React from "react";
import { render } from "@testing-library/react-native";
import ErrorMessage from "../../components/ErrorMessage";

jest.mock("../../components/LanguageSelector", () => ({
  i18n: {
    t: jest.fn().mockImplementation((key) => key),
  },
}));

describe("ErrorMessage", () => {
  it("renders the error message", () => {
    const error = JSON.stringify({ message: "Test error message" });
    const { getByText } = render(<ErrorMessage error={error} />);

    expect(getByText("error")).toBeTruthy();
    expect(getByText("Test error message")).toBeTruthy();
  });
});
