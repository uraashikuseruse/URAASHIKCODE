import type { Metadata } from "next";
import { NoorPageFrame } from "../../components/NoorPageFrame";
import { CollectionsView } from "../../components/CollectionsView";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Your saved ayahs, grouped into collections with personal notes — kept privately on your device.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <NoorPageFrame
      title="Collections"
      sub="Saved ayahs & notes"
      glyph="❑"
      back="/"
    >
      <CollectionsView />
    </NoorPageFrame>
  );
}
