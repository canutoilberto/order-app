import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Coffee, Utensils, Clock, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Bem-vindo ao nosso Sistema de Pedidos
          </CardTitle>
          <CardDescription>
            Faça seu pedido de forma rápida e fácil
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Explore nosso cardápio variado e faça seu pedido com apenas alguns
            cliques.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <FeatureCard
              icon={<Coffee className="h-6 w-6" />}
              title="Café Fresco"
              description="Grãos selecionados e torrados diariamente"
            />
            <FeatureCard
              icon={<Utensils className="h-6 w-6" />}
              title="Comida Deliciosa"
              description="Pratos preparados com ingredientes de qualidade"
            />
            <FeatureCard
              icon={<Clock className="h-6 w-6" />}
              title="Entrega Rápida"
              description="Seu pedido entregue em até 30 minutos"
            />
            <FeatureCard
              icon={<Star className="h-6 w-6" />}
              title="Avaliações 5 Estrelas"
              description="Clientes satisfeitos com nosso serviço"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/menu">Ver Cardápio</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Promoções do Dia</CardTitle>
          <CardDescription>Aproveite nossas ofertas especiais</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <PromotionItem
              name="Combo Café da Manhã"
              description="Café, pão na chapa e suco de laranja"
              price={12.9}
              originalPrice={15.9}
            />
            <PromotionItem
              name="Sanduíche + Bebida"
              description="Escolha entre nossos sanduíches artesanais + refrigerante ou suco"
              price={18.9}
              originalPrice={22.9}
            />
            <PromotionItem
              name="Sobremesa do Dia"
              description="Experimente nossa sobremesa especial com 20% de desconto"
              price={6.9}
              originalPrice={8.9}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className="w-full">
            <Link href="/menu">Ver Todas as Promoções</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-2 p-4">
        {icon}
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function PromotionItem({
  name,
  description,
  price,
  originalPrice,
}: {
  name: string;
  description: string;
  price: number;
  originalPrice: number;
}) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="text-right">
        <p className="font-bold">R$ {price.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground line-through">
          R$ {originalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
