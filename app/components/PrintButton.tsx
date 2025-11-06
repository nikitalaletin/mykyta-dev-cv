import { Printer } from "lucide-react";
import { Button } from "./ui/button";

export function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      onClick={handlePrint}
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg print:hidden"
      size="icon"
      aria-label="Print resume"
    >
      <Printer className="h-5 w-5" />
    </Button>
  );
}
