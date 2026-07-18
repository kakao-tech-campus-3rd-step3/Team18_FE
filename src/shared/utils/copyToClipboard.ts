// HTTPS가 아니거나 구형 브라우저라 navigator.clipboard를 쓸 수 없을 때의 fallback.
const copyWithExecCommand = (text: string): boolean => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'absolute';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();

  try {
    return document.execCommand('copy');
  } catch {
    return false;
  } finally {
    document.body.removeChild(textArea);
  }
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  if (!navigator.clipboard || !window.isSecureContext) {
    return copyWithExecCommand(text);
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return copyWithExecCommand(text);
  }
};
