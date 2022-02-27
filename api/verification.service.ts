export function verify(code: number) {
  const lastDigit = code.toString().slice(-1);

  if (isNaN(code)) {
    throw new Error("Must be a number");
  } else if (code.toString().length !== 6) {
    throw new Error("Verification code must be 6 digit long");
  } else if (lastDigit === "7") {
    throw new Error("Last digit cannot be 7");
  }
}
