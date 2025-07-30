import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';

export default function RotaPJHome() {
  return (
    <div style={{ padding: 20 }}>
      <h1>RotaPJ</h1>
      <Card>
        <CardContent>
          <h2>📋 Criar Proposta</h2>
          <Input placeholder="Nome do cliente" />
          <Textarea placeholder="Detalhes da proposta" />
          <Button>Gerar PDF</Button>
        </CardContent>
      </Card>
    </div>
  );
}
