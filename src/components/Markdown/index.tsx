import fromMarkdown, { mdTypes, mdToken } from "mdast-util-from-span-markdown";

export type markdownProps = {
  text: string;
};

const obj2jsx = (token: mdToken, key: number): JSX.Element => {
  switch (token.type) {
    case mdTypes.INLINE_CODE:
      return <code key={key}>{token.value}</code>;
    case mdTypes.EMPHASIS:
      return (
        <em key={key}>
          {token.children.map((item: mdToken, index: number) =>
            obj2jsx(item, index),
          )}
        </em>
      );
    case mdTypes.STRONG:
      return (
        <span className="small" key={key}>
          {token.children.map((item: mdToken, index: number) =>
            obj2jsx(item, index),
          )}
        </span>
      );
    case mdTypes.LINK:
      return (
        <a key={key} href={token.url} target="_blank" rel="noreferrer">
          {token?.children.map((item: mdToken, index: number) =>
            obj2jsx(item, index),
          )}
        </a>
      );
    case mdTypes.TEXT:
      return (
        <span className="markdown__text" key={key}>
          {token.value}
        </span>
      );
    default:
      return <span>⚠️ no handling</span>;
  }
};

const Markdown = ({ text }: markdownProps) => {
  const tokens = fromMarkdown(text);
  return (
    <span className="markdown">
      {tokens &&
        tokens.map((token: mdToken, index: number) => obj2jsx(token, index))}
    </span>
  );
};
export default Markdown;
