"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export type ComboBoxItem = {
  label: string;
  value: string;
};

interface ComboBoxResponsiveProps {
  label?: string;
  placeholder?: string;
  items: ComboBoxItem[];
  value: ComboBoxItem | null;
  onChangeAction: (item: ComboBoxItem | null) => void;
  className?: string;
}

export function ComboBox({
  label = "+ Select option",
  placeholder = "Filter...",
  items,
  value,
  onChangeAction,
  className,
}: ComboBoxResponsiveProps) {
  const [open, setOpen] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(true);

  // Detect screen size on mount + resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const TriggerButton = (
    <Button variant="outline" className={className || "w-[150px] justify-start"}>
      {value ? value.label : label}
    </Button>
  );

  const List = (
    <Command>
      <CommandInput placeholder={placeholder} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {items.map((item) => (
            <CommandItem
              key={item.value}
              value={item.value}
              onSelect={(val) => {
                const selected = items.find((i) => i.value === val) || null;
                onChangeAction(selected);
                setOpen(false);
              }}
            >
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );

  return isDesktop ? (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{TriggerButton}</PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        {List}
      </PopoverContent>
    </Popover>
  ) : (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{TriggerButton}</DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">{List}</div>
      </DrawerContent>
    </Drawer>
  );
}
