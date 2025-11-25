# 🦷 Platinum Odonto – Projeto Integrador

O **Platinum Odonto** é um website institucional desenvolvido como **Projeto Integrador (PI)**, com foco em apresentar uma clínica odontológica fictícia, seus serviços, profissionais e facilitar o **agendamento de consultas** de forma simples e organizada.

O projeto foi construído utilizando **HTML, CSS e JavaScript**, seguindo um **manual de identidade visual próprio** e boas práticas de layout e navegação.

---

## 👥 Equipe

- Robson Souza de Oliveira  
- Gustavo Maia de Souza
- Rulian Cacere Alvim  
- Tiago William Valeriano Pereira  
- Richard Gabriel dos Santos  

**Orientador(a):** Antonio Clementino Neto  
**Curso:** Desenvolvimento de Software Multiplataforma  
**Instituição:** Faculdade de Tecnologia de Franca "Dr. Thomaz Novelino" 
**Semestre:** 1º Semestre   

---

## 🎯 Objetivo do Projeto

Criar um website que:

- apresente a clínica **Platinum Odonto** de forma profissional;
- descreva **procedimentos odontológicos** de forma clara e acessível;
- destaque os **profissionais da equipe**;
- ofereça um **formulário de agendamento** de consultas (fluxo simulado);
- permita que pacientes registrem **avaliações e opiniões**;
- disponibilize uma área de **dúvidas frequentes (FAQ)** para orientar o usuário.

---

## 🧩 Funcionalidades

### 🌐 Página Inicial – `index.html`
- Apresentação da clínica e da marca **Platinum Odonto**.
- Seção **“Nossa História”**, com contextualização da clínica.
- Destaques com **números de pacientes, anos de experiência e satisfação**.
- Seção **“Onde nos encontrar”** com:
  - endereço da clínica;
  - informações de contato (telefone, WhatsApp, e-mail);
  - horários de funcionamento;
  - mapa embutido via **iframe**.
- Footer com direitos reservados.

---

### 📅 Agendamento – `agendamento.html`
- Formulário de **agendamento de consulta** contendo:
  - nome;
  - telefone;
  - e-mail;
  - seleção de **procedimento** (clareamento, implante, ortodontia, limpeza, etc.);
  - seleção de **profissional**;
  - data desejada;
  - horário.
- Layout em duas colunas, com:
  - formulário de um lado;
  - texto explicativo e orientações sobre o processo de agendamento do outro.

> O agendamento é **simulado** (não há backend), sendo utilizado apenas para fins acadêmicos e de demonstração de interface.

---

### 🦷 Procedimentos – `procedimentos.html`
- Lista dos principais procedimentos realizados na clínica, por exemplo:
  - Clareamento Dental  
  - Implante Dentário  
  - Ortodontia (Aparelho)  
  - Limpeza e Profilaxia  
- Cada procedimento possui:
  - breve descrição;
  - benefícios;
  - indicações gerais.

---

### 👨‍⚕️ Profissionais – `profissionais.html`
- Exibe a **equipe da clínica** com:
  - fotos dos profissionais;
  - nome;
  - especialidade;
  - breve descrição.
- Layout em cards, reforçando a humanização e confiança na equipe.

---

### ⭐ Avaliações dos Pacientes – `avaliacoes.html`
Página dedicada a **comentários e avaliações**:

- Formulário com campos de:
  - nome;
  - e-mail;
  - telefone;
  - texto da avaliação;
  - opção para marcar avaliação como **anônima**;
  - sistema de **avaliação por estrelas** (1 a 5 ⭐).

- Funcionalidades em JavaScript:
  - interação visual ao passar o mouse e clicar nas estrelas;
  - validação de campos obrigatórios (nome, e-mail, telefone, texto);
  - validação de formato de e-mail;
  - ao clicar em **“Publicar”**, a avaliação é adicionada dinamicamente na página como um novo card.

---

### ❓ FAQ – Dúvidas Frequentes – `faq.html`
- Widget de FAQ exibido como um **botão “?” fixo** na tela.
- Ao clicar no botão:
  - abre um painel com **perguntas e respostas** comuns sobre:
    - agendamento;
    - convênios;
    - tipos de procedimentos;
    - formas de contato.
- Implementado como **componente reaproveitável**:
  - o arquivo `faq.html` é carregado dinamicamente em cada página através de:
    ```js
    fetch("faq.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("faq-placeholder").innerHTML = html;
        // Lógica de abrir/fechar FAQ vem em seguida
      });
    ```
  - isso evita repetição de código e mantém o FAQ em um único lugar.

---

# 🖥️ Protótipo e Site Hospedado

🔗 **Protótipo no Figma**  
https://www.figma.com/design/xEElBj0KwG4nKUb8S2I8DE/Untitled?node-id=0-1&t=V3Q22xnTL9PNywKE-1 

🌐 **Site Hospedado**  
https://robsonsouza21.github.io/DSM-P1-G08-2025-2/agendamento.html

---

 # 🙏 Conclusão e Agradecimentos

Este projeto foi desenvolvido com o objetivo de facilitar o agendamento e procura de consultas medicas do dia a dia das pessoas: a dificuldade em marcar consultas e receber informações claras sobre atendimentos.

Agradecemos:

- à FATEC, pela oportunidade de aplicar na prática os conhecimentos aprendidos em sala;  
- aos colegas de turma e familiares, pelo incentivo e feedback durante o desenvolvimento.

O Platinum Odonto reforça a ideia de que a tecnologia pode ser uma aliada importante na melhoria dos serviços de saúde e da qualidade de vida da população, tanto para melhorar, quando para facilitar o uso de jovens e idosos.
