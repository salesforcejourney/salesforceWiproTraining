import { createElement } from "lwc";
import WelcomeToLearnLwc from "c/welcomeToLearnLwc";

describe("c-welcome-to-learn-lwc", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  beforeEach(() => {});

  it("TODO: test case generated by CLI command, please fill in test logic", () => {
    // Arrange
    const element = createElement("c-welcome-to-learn-lwc", {
      is: WelcomeToLearnLwc
    });

    // Act
    document.body.appendChild(element);
    const pElement = element.shadowRoot.querySelector("p");
    // Assert
    // const div = element.shadowRoot.querySelector('div');
    expect(pElement.textContent).toBe("Welcome to learn LWC");
  });

  it("Test Binding of welcomeToLearnLwc", () => {
    const element = createElement("c-welcome-to-learn-lwc", {
      is: WelcomeToLearnLwc
    });

    // Act
    document.body.appendChild(element);

    const inputElement = element.shadowRoot.querySelector("lightning-input");
    inputElement.value = "Welcome to learn LWC";

    inputElement.dispatchEvent(new CustomEvent("change"));
    const expectedOuput = "Welcome to learn LWC";

    return Promise.resolve().then(() => {
      const outputElement = element.shadowRoot.querySelector(".output");
      expect(outputElement.textContent).toBe(expectedOuput);
    });
  });
});
