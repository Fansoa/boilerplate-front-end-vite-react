import { test, expect } from "vitest";
import noop from ".";

test("Should return null", () => {
  expect(noop()).toBe(null);
});
