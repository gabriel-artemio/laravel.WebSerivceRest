# Dotnet  8 - Autenticação e Autorização

Este aplicativo foi criado para utilizar o Identity e apresentar um novo conjunto de endpoints de API de identidade e suporte para autenticação baseada em token, este projeto define dois endpoints de API:

* 1- O endpoint /login que cria um objeto de usuário ClaimsPrincipal com base no nome de usuário enviado na solicitação HTTP e retorna o resultado do login;
* 2- O endpoint /user que retorna o nome de usuário do usuário autenticado;

## Tecnologias utilizadas no projeto:
* Dotnet 8
* ASP.NET Core Identity
