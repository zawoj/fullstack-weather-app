import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LocationFilter from "../../components/LocationFilter";

// Mock i18n
jest.mock("../../components/LanguageSelector", () => ({
  i18n: {
    t: jest.fn().mockImplementation((key) => key),
  },
}));

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

// Mock useAppContext
jest.mock("../../context/use-app-context", () => ({
  useAppContext: () => ({
    setFilters: jest.fn(),
    filters: {},
  }),
}));

describe("LocationFilter", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(<LocationFilter />);
    expect(getByPlaceholderText("enter-name-location")).toBeTruthy();
  });

  it("allows text input and handles submit", () => {
    const { getByPlaceholderText } = render(<LocationFilter />);
    const input = getByPlaceholderText("enter-name-location");

    fireEvent.changeText(input, "New York");
    fireEvent(input, "onSubmitEditing");
  });
});
