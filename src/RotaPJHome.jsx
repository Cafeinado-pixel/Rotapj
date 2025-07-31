// RotaPJ App – Interface profissional responsiva com salvamento local de clientes e pedidos

import React, { useState } from 'react';
- import { Card, CardContent } from '@/components/ui/card';
+ import { Card, CardContent } from './components/ui/card';

- import { Button } from '@/components/ui/button';
+ import { Button } from './components/ui/button';

- import { Input } from '@/components/ui/input';
+ import { Input } from './components/ui/input';

- import { Textarea } from '@/components/ui/textarea';
+ import { Textarea } from './components/ui/textarea';

- import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
+ import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';

import { Home, FileText, Map, ShoppingCart, Users, BarChart2 } from 'lucide-react';

export default function RotaPJHome() {
  const [cliente, setCliente] = useState('');
  const [descricao, setDescricao] = useState('');

  const [clientes, setClientes] = useState([]);
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');

  const [pedidos, setPedidos] = useState([]);
  const [clientePedido, setClientePedido] = useState('');
  const [produtos, setProdutos] = useState('');
  const [pagamento, setPagamento] = useState('');
  const [obsPedido, setObsPedido] = useState('');

  const handlePDF = () => {
    alert('PDF gerado com sucesso (funcionalidade futura)!');
  };

  const handleSalvarCliente = () => {
    const novoCliente = {
      nome: nomeEmpresa,
      endereco,
      contato
    };
    setClientes([...clientes, novoCliente]);
    setNomeEmpresa('');
    setEndereco('');
    setContato('');
    alert('Cliente salvo com sucesso!');
  };

  const handleSalvarPedido = () => {
    const novoPedido = {
      cliente: clientePedido,
      produtos,
      pagamento,
      observacoes: obsPedido
    };
    setPedidos([...pedidos, novoPedido]);
    setClientePedido('');
    setProdutos('');
    setPagamento('');
    setObsPedido('');
    alert('Pedido salvo com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-center text-primary">RotaPJ</h1>
      <p className="text-center text-muted-foreground mb-6">
        O app do representante comercial moderno: prático, rápido e inteligente.
      </p>

      <Tabs defaultValue="propostas" className="w-full">
        <TabsList className="grid grid-cols-5 mb-4 gap-2 text-xs sm:text-sm">
          <TabsTrigger value="propostas"><FileText size={16}/> Propostas</TabsTrigger>
          <TabsTrigger value="rotas"><Map size={16}/> Rotas</TabsTrigger>
          <TabsTrigger value="clientes"><Users size={16}/> Clientes</TabsTrigger>
          <TabsTrigger value="pedidos"><ShoppingCart size={16}/> Pedidos</TabsTrigger>
          <TabsTrigger value="admin"><BarChart2 size={16}/> Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="propostas">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold">📋 Criar Proposta Comercial</h2>
              <Input value={cliente} onChange={(e) => setCliente(e.target.value)} placeholder="Nome do cliente" />
              <Textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição da proposta" />
              <Button className="w-full" onClick={handlePDF}>Gerar PDF</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rotas">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold">🗺️ Planejar Rota do Dia</h2>
              <Input placeholder="Cidades ou clientes para visitar hoje" />
              <Button className="w-full" onClick={() => alert('Rota gerada!')}>Gerar Rota</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="clientes">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold">👥 Cadastrar Cliente</h2>
              <Input value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} placeholder="Nome da empresa" />
              <Input value={endereco} onChange={(e) => setEndereco(e.target.value)} placeholder="Endereço" />
              <Input value={contato} onChange={(e) => setContato(e.target.value)} placeholder="Telefone ou e-mail" />
              <Button className="w-full" onClick={handleSalvarCliente}>Salvar Cliente</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pedidos">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h2 className="text-xl font-semibold">🧾 Criar Pedido</h2>
              <Input value={clientePedido} onChange={(e) => setClientePedido(e.target.value)} placeholder="Cliente" />
              <Input value={produtos} onChange={(e) => setProdutos(e.target.value)} placeholder="Produtos e quantidades" />
              <Input value={pagamento} onChange={(e) => setPagamento(e.target.value)} placeholder="Forma de pagamento" />
              <Textarea value={obsPedido} onChange={(e) => setObsPedido(e.target.value)} placeholder="Observações" />
              <Button className="w-full" onClick={handleSalvarPedido}>Salvar Pedido</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="admin">
          <Card>
            <CardContent className="space-y-4 pt-6 text-center">
              <h2 className="text-2xl font-semibold">📊 Painel Administrativo</h2>
              <p>Visualização de relatórios, metas, desempenho e dados em tempo real (em breve).</p>
              <Button className="mt-4">Acessar Relatórios</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
