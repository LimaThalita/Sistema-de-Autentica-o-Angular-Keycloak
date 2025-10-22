# Sistema de Autenticação Angular + Keycloak 

Este projeto é um sistema de autenticação de usuários utilizando Angular no front-end e Keycloak como servidor de identidade, garantindo segurança, registro de usuários e login com JWT.

---

##  Tecnologias Utilizadas

| Tecnologia     | Versão       |
| -------------- | ------------ |
|   Angular      |    18        |
|    Java        |    21        |
| Spring Boot    | 3.4.2        |
| PostgreSQL     | Mais recente |
| Keycloak       | 26.1.0       |
| Docker Compose | Sim          |

## Como Executar

### 1️⃣ Clonando o repositório

```sh
 git clone https://github.com/LimaThalita/Sistema-de-Autentica-o-Angular-Keycloak.git
 cd keycloak-xp
```

### 2️⃣ Configuração do Keycloak com Docker

O projeto contém um arquivo `docker-compose.yml` na raiz para criar contêineres do **PostgreSQL** e **Keycloak**.

1. Acesse `src/main/resources/` e copie `init-keycloak-database.sql` para o mesmo diretório onde colocar o `docker-compose.yml`.
2. Inicie os contêineres:

```sh
docker-compose up -d
```

### 3️⃣ Acessando o Keycloak

- URL: [http://localhost:8181](http://localhost:8181)
- Usuário: `admin`
- Senha: `admin`

### 4️⃣ Criando um Realm e Configurando um Client

1. **Criar um novo Realm**: `keycloakxp`
2. **Configurar um Client**:

| Configuração           | Valor                                                      |
| ---------------------- | ---------------------------------------------------------- |
| Client ID              | keycloakxp                                                 |
| Client Authentication  | Desabilitado                                               |
| Fluxos de Autenticação | Standard Flow                                              |  
| Root URL               | http://localhost:4200                                      |     
| Valid redirect URIs    | http://localhost:4200/*                                    |             
| Web origins            | *                                                          |

### 5️⃣ Front-end

Execute esses comandos para subir o front:

```sh
cd front/keycloak-frontend
   npm install
   ng serve
```
Abra http://localhost:4200

### 6️⃣ Executando a API

```sh
mvn spring-boot:run
```

## Importante

Confira se as tecnologias foram baixadas nas versões corretas.

### Repositórios de auxílio

https://github.com/ronny-souza/keycloak-xp.git

---
