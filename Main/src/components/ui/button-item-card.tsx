import { CheckIcon, ChevronRightIcon } from "lucide-react";
 
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
 
interface AnimatedButtonProps {
    beginText: string;
    endText: string;
    onClick?: () => void;
}

export function AnimatedButton({ beginText, endText, onClick }: AnimatedButtonProps) {
  return (
    <AnimatedSubscribeButton
      buttonColor="#000000"
      buttonTextColor="#ffffff"
      subscribeStatus={false}
      initialText={
        <span className="group inline-flex items-center">
          {beginText}{" "}
          <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <CheckIcon className="mr-2 size-4" />
          {endText}{" "}
        </span>
      }
      onClick={onClick}
    />
  );
}