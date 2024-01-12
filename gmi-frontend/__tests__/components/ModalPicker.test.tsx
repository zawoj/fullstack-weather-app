import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ModalPicker from "../../components/ModalPicker";
import { router } from "expo-router";

// Mock i18n
jest.mock("../../components/LanguageSelector", () => ({
  i18n: {
    t: jest.fn().mockImplementation((key) => key),
  },
}));

// Mock 'expo-router'
jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

// Mock useAppContext
jest.mock("../../context/use-app-context", () => ({
  useAppContext: () => ({
    filters: {}, // Mockowany stan filtrów, dostosuj w razie potrzeby
  }),
}));

describe("ModalPicker", () => {
  it("renders correctly", () => {
    const { getByText } = render(<ModalPicker />);
    expect(getByText("search-by-name")).toBeTruthy();
    expect(getByText("pick-from-map")).toBeTruthy();
  });

  it("opens filters modal on button press", () => {
    const { getByText } = render(<ModalPicker />);
    const filtersButton = getByText("search-by-name");

    fireEvent.press(filtersButton);
    expect(router.push).toHaveBeenCalledWith("/filters");
  });

  it("opens map modal on button press", () => {
    const { getByText } = render(<ModalPicker />);
    const mapButton = getByText("pick-from-map");

    fireEvent.press(mapButton);
    expect(router.push).toHaveBeenCalledWith("/map");
  });
});
