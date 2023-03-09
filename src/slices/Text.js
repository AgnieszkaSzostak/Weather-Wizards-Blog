import { PrismicRichText } from "@prismicio/react";

export const Text = ({ slice }) => (
  <div className="post-part single container">
    <PrismicRichText field={slice.primary.text} />
  </div>
);
