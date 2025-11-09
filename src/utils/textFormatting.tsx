export const formatTextWithNewlines = (text: string) => {
  return <span dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br/>') }} />;
};
