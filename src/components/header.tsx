"use client";

import { useState } from "react";
import { Minus, Plus, Search, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from "./ui/sheet";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isOpen, setIsOpen, items, updateQuantity, cartTotal, removeItem } =
    useCart();

  console.log(items);

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-green-700">BookPasal</div>
            </Link>

            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-80"
              />
            </div>

            <div className="flex items-center space-x-4">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button className="flex relative">
                    <ShoppingCart className="h-6 w-6" />
                    <span className="absolute bottom-4 left-5 text-sm bg-green-600 text-white w-4 h-4 flex items-center justify-center rounded-full">
                      {items.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  </button>
                </SheetTrigger>
                <SheetContent className="w-full md:w-1/2">
                  <SheetHeader>
                    <SheetTitle>Cart</SheetTitle>
                  </SheetHeader>

                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-svh">
                      <ShoppingCart className="size-12 text-green-500 mb-4" />
                      <p className="text-gray-500">No Items in cart</p>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="flex-1 overflow-auto py-6">
                        <ul className="space-y-6">
                          {items.map((item) => (
                            <li className="flex gap-4 px-6" key={item.id}>
                              <div className="size-24 shrink-0 overflow-hidden rounded-md border">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  width={96}
                                  height={96}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="flex flex-1 flex-col">
                                <div className="flex justify-between text-base font-medium">
                                  <h3>{item.title}</h3>
                                  <p className="mr-8">${item.price}</p>
                                </div>

                                <div className="flex items-center mt-2">
                                  <button
                                    className="bg-transparent border"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                  >
                                    <Plus className="size-4" />
                                  </button>
                                  <span className="mx-2 w-8 text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    className="bg-transparent border"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                  >
                                    <Minus className="size-4" />
                                  </button>
                                  <button
                                    onClick={() => removeItem(item.id)}
                                    className="ml-22 text-gray-400 hover:text-gray-600"
                                  >
                                    <X className="size-5" />
                                    <span className="sr-only">Remove</span>
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-gray-200 py-6">
                        <div className="flex justify-between text-base font-medium text-gray-900 mb-4 px-6">
                          <p>Subtotal</p>
                          <p>${cartTotal}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </SheetContent>
              </Sheet>
              <Button className="bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
