function typewriter (
  text: string,
  element: HTMLElement,
  delay: number = 100
): void {
  let index = 0;

  function typeNextChar (): void {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeNextChar, delay);
    }
  }

  element.textContent = ''; // Clear the element before typing
  typeNextChar();
}

export default typewriter;
