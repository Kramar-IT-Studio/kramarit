import { useState } from 'react';

type CopyToClipboardHook = [(text: string) => void, boolean];

const useCopyToClipboard = (): CopyToClipboardHook => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        setIsCopied(successful);
        setTimeout(() => setIsCopied(false), 1500);
      } catch (err) {
        setIsCopied(false);
      }
      document.body.removeChild(textArea);
    }
  };

  return [copyToClipboard, isCopied];
};

export default useCopyToClipboard;
