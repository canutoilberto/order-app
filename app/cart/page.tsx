"use client";

import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Café Expresso",
      price: 3.5,
      quantity: 1,
      image: "/espresso.avif",
    },
    {
      id: 2,
      name: "Sanduíche Natural",
      price: 8.9,
      quantity: 2,
      image: "/sanduiche.avif",
    },
    {
      id: 3,
      name: "Bolo de Cenoura",
      price: 5.0,
      quantity: 1,
      image: "/bolo.avif",
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Seu Carrinho</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Seu carrinho está vazio.
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    R$ {item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="font-semibold">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))
          )}
        </CardContent>
        {cartItems.length > 0 && (
          <CardFooter className="flex flex-col items-end">
            <Separator className="my-4" />
            <div className="flex justify-between w-full">
              <span className="font-semibold">Total:</span>
              <span className="font-bold">R$ {total.toFixed(2)}</span>
            </div>
            <Button className="mt-4 w-full">Finalizar Pedido</Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
