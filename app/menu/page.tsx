"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Café Expresso",
    description: "Café puro e forte",
    price: 3.5,
    category: "Bebidas",
    image: "/espresso.avif",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Café com leite e espuma",
    price: 5.0,
    category: "Bebidas",
    image: "/capuccino.avif",
  },
  {
    id: 3,
    name: "Sanduíche Natural",
    description: "Pão integral, frango, alface e tomate",
    price: 8.9,
    category: "Lanches",
    image: "/sanduiche.avif",
  },
  {
    id: 4,
    name: "Bolo de Cenoura",
    description: "Bolo caseiro com cobertura de chocolate",
    price: 5.0,
    category: "Doces",
    image: "/bolo.avif",
  },
  {
    id: 5,
    name: "Suco de Laranja",
    description: "Suco natural da fruta",
    price: 6.0,
    category: "Bebidas",
    image: "/suco.avif",
  },
  {
    id: 6,
    name: "Croissant",
    description: "Croissant folhado e crocante",
    price: 4.5,
    category: "Lanches",
    image: "/croi.avif",
  },
];

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [
    {
      /*cart*/
    },
    setCart,
  ] = useState<MenuItem[]>([]);

  const categories = [
    "Todos",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const filteredItems = menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Cardápio</h1>
      <div className="mb-4 relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar itens..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>
      <Tabs defaultValue="Todos" className="mb-6">
        <TabsList className="mb-4 flex flex-wrap">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="mb-2">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems
                .filter(
                  (item) => category === "Todos" || item.category === category
                )
                .map((item) => (
                  <Card key={item.id} className="flex flex-col h-full">
                    <CardHeader>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={1000}
                        height={1000}
                        className="w-full h-40 object-cover rounded-t"
                      />
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardTitle>{item.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <p className="font-bold mt-2">
                        R$ {item.price.toFixed(2)}
                      </p>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button
                        onClick={() => addToCart(item)}
                        className="w-full"
                      >
                        <Plus className="mr-2 h-4 w-4" /> Adicionar ao Carrinho
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
