import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
import { FileText, Map, ShoppingCart, Users, BarChart2 } from 'lucide-react';

export default function RotaPJHome() {
  const [cliente, setCliente] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [clientePedido, setClientePedido] = useState('');
  const [produtos, setProdutos] = useState('');
  const [pagamento, setPagamento] = useState('');
  const [obsPedido, setObsPedido] = useState('');

  const handlePDF = () => alert('PDF gerado com sucesso (futuro)!');

  const handleSalvarCliente = () => {
    alert(`Cliente "${nomeEmpresa}" salvo!`);
    setNomeEmpresa(''); setEndereco(''); setContato('');
  };

  const handleSalvarPedido = () => {
    alert(`Pedido para "${clientePedido}" salvo!`);
    setClientePedido(''); setProdutos(''); setPagamento(''); setObsPedido('');
  };

  return (
    <div className="min-h-screen p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">RotaPJ</h1>
      <Tabs defaultValue="propostas">
        <TabsList className="flex gap-2 mb-4">
          <TabsTrigger value="propostas"><FileText /> Propostas</TabsTrigger>
          <TabsTrigger value="rotas"><Map /> Rotas</TabsTrigger>
          <TabsTrigger value="clientes"><Users /> Clientes</TabsTrigger>
          <TabsTrigger value="pedidos"><ShoppingCart /> Pedidos</TabsTrigger>
          <TabsTrigger value="admin"><BarChart2 /> Admin</TabsTrigger>
        </TabsList>
        <TabsContent value="propostas">
          <Card>
            <CardContent className="space-y-3">
              <Input value={cliente} onChange={e => setCliente(e.target.value)} placeholder="Cliente" />
              <Textarea value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Descrição" />
              <Button onClick={handlePDF}>Gerar PDF</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
); }