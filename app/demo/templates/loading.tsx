import { VscLoading } from "react-icons/vsc";

export default function Loading() {
  return (
    <p className="flex flex-row gap-x-3">
      <VscLoading className="animate-spin"></VscLoading>
      Loading...
    </p>
  );
}
