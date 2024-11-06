import { cn } from "@/lib/utils";
import { HeartIcon, Text } from 'lucide-react';
import { AnimatedButton } from "./button-item-card";
import { toast } from "sonner";

interface CardItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export function CardItem({ id, title, description, image }: CardItemProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          `cursor-pointer overflow-hidden relative card h-104 rounded-xl shadow-xl max-w-sm mx-auto backgroundImage flex flex-col gap-2 justify-between p-4 bg-cover`
        )}
        // style={{ backgroundImage: `url(${image})` }}
      >
        
        <div className="flex flex-row justify-between">
            <Text/>
            <HeartIcon/>
        </div>
        
        <div className="flex flex-row items-center space-x-4 z-10">
            <div className="relative z-10">
                <picture>
                    <img
                        className="shadow-xl rounded-md"
                        src={image}
                        alt={title}
                    />
                </picture>
            </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-black-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-black-50 relative z-10 my-4">
            {description}
          </p>
        </div>
        <div className="w-full flex justify-center">
            <AnimatedButton
              beginText={"Add to cart"}
              endText={"Added"}
              onClick={
                async () =>
                {
                  console.log("Item added to cart");
                  
                  toast.success("Item added to cart");
                  await fetch("/api/cart", {
                    method: "POST",
                    body: JSON.stringify({
                      id: id,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                }
              }  
            />
        </div>
      </div>
    </div>
  );
}