import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SearchBar from "../../components/SearchBar";

describe("SearchBar", () => {
  it("triggers search and close button onPress", () => {
    const { getByTestId } = render(<SearchBar />);
    const searchButton = getByTestId("searchButton");
    const closeButton = getByTestId("closeButton");

    const consoleSpy = jest.spyOn(console, "log");

    // Simulate search button click
    fireEvent.press(searchButton);
    expect(consoleSpy).toHaveBeenCalledWith("Search clicked");

    // Simulate close button click
    fireEvent.press(closeButton);
    expect(consoleSpy).toHaveBeenCalledWith("Close clicked");

    consoleSpy.mockRestore();
  });

  // it("updates input text", () => {
  //   const { getByTestId } = render(<SearchBar />);
  //   const textInput = getByTestId("input");

  //   fireEvent.changeText(textInput, "Hello"); // Simulate change in input text

  //   // Check if the input text has been updated correctly
  //   expect(textInput.props.value).toBe("Hello");
  // });
});
