<h1 align="center">
  FeedGet
</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=09090A">

 <img src="https://img.shields.io/static/v1?label=NLW&message=08&color=8257E5&labelColor=09090A" alt="NLW 08" />
</p>


![cover](.github/cover.png?style=flat)


## 💻 Projeto
Formulário para envio de feedback e screenshot da aplicação, com três categorias: problemas, ideias e outros.


## ✨ Tecnologias

### Back-end
- Node.js
- Express
- Prisma
- Nodemailer
- Jest

### Front-end
- Vite
- React.js
- Tailwind CSS
- Phosphor Icons
- Headless UI
- Axios

### Mobile
- React Native
- Expo
- Phosphor Icons
- React Native Bottom Sheet
- Axios


## 🛠️ Features 

- Botão para tirar um screenshot da página.
- Armazena o feedback no banco de dados.
- Envia o feedback para o e-mail do dono do site.


## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/1102912516166573468). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.


## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências dos projetos server, web e mobile.
Em seguida, inicie o projeto.

```cl
// Server
npm run dev

// Web
npm run dev

// Mobile
expo start
```

Lembre-se de definir no arquivo .env as configurações do seu Server (remova o example do arquivo .env.example).
 
 ```cl
DATABASE_URL=
```


## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/estherpeixoto/nlwreturn/blob/main/LICENSE) para mais detalhes.


## 🚀 Checklist: a milha extra
- [ ] Tema light/dark
- [ ] Em produção, usar algum serviço de e-mail
- [ ] Melhorar HTML/CSS do e-mail
- [ ] Dashboard de feedbacks
  - [ ] Autenticação (Firebase/OAuth)
- [ ] Validação de campos/erros
