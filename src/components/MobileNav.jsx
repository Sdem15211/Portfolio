"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <h2 className="text-mobnav font-medium uppercase">Menu</h2>
      </SheetTrigger>
    </Sheet>
  );
};

export default MobileNav;
