
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function RotaPJHome() {
  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">RotaPJ</h1>
      <p className="text-muted-foreground">Controle de rotas, clientes, pedidos e propostas comerciais.</p>

      <Tabs defaultValue="propostas" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="propostas">Propostas</TabsTrigger>
          <TabsTrigger value="rotas">Rotas</TabsTrigger>
          <TabsTrigger value="clientes">Clientes</TabsTrigger>
          <TabsTrigger value="pedidos">Pedidos</TabsTrigger>
        </TabsList>

        <TabsContent value="propostas">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold">Criar Proposta Comercial</h2>
              <Input placeholder="Nome do cliente" />
              <Input placeholder="Produtos e quantidades (ex: 3x Sabonete, 2x Creme)" />
              <Input placeholder="Condições de pagamento (ex: 30/60 dias)" />
              <Input placeholder="Prazo de entrega (ex: 7 dias úteis)" />
              <Textarea placeholder="Observações adicionais (opcional)" />
              <Button className="w-full">Gerar PDF da Proposta</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rotas">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold">Planejar Rota do Dia</h2>
              <Input placeholder="Adicione cidades ou clientes para visitar hoje" />
              <Button className="w-full">Gerar Rota Otimizada</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clientes">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold">Cadastrar Cliente</h2>
              <Input placeholder="Nome da empresa / cliente" />
              <Input placeholder="Endereço / Cidade" />
              <Input placeholder="Contato (e-mail, telefone)" />
              <Button className="w-full">Salvar Cliente</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pedidos">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold">Criar Pedido</h2>
              <Input placeholder="Cliente" />
              <Input placeholder="Produtos e quantidades" />
              <Input placeholder="Forma de pagamento" />
              <Input placeholder="Observações do pedido" />
              <Button className="w-full">Salvar Pedido</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
