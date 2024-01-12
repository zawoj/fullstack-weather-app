import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { LanguageSelector } from "../../components/LanguageSelector";

// Mock i18n
jest.mock("../../i18n/config", () => ({
  locale: "en",
  t: jest.fn().mockImplementation((key) => key),
}));

// Mock useAppContext
jest.mock("../../context/use-app-context", () => ({
  useAppContext: () => ({
    setFilters: jest.fn(),
    filters: { lang: "en" },
  }),
}));

describe("LanguageSelector", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<LanguageSelector />);
    expect(getByTestId("language-picker")).toBeTruthy();
  });

  it("allows language change", () => {
    const { getByTestId } = render(<LanguageSelector />);
    const picker = getByTestId("language-picker");

    fireEvent(picker, "onValueChange", "de");
  });
});
