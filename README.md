# APLIST -  API de Listas para Jogos

<br />

## URL

URL para requisições:
```
https://aplist.vercel.app/
```


## Descrição

Esta API fornece listas de palavras e informações categorizadas que podem ser utilizadas em jogos como Forca, Trivia, Palavras Cruzadas e outros. As listas incluem categorias como animais, frutas, cidades, filmes e muito mais.

- A API suporta múltiplos idiomas, com endpoints disponíveis para `/ptbr` e `/en`.

<br />

## Endpoints

### 1. Obter todas as categorias

**GET** `/{idioma}/get/types`

*Resposta:*

```
{
  "types": ["animais", "frutas", "cidades", "filmes"]
}
```
<br />

### 2. Obter um item aleatório de uma categoria

**GET** `/{idioma}/get/random/{categoria}`

Parâmetros:

- `idioma` (string): O idioma da requisição (`ptbr` ou `en`).

- `categoria` (string): Nome da categoria desejada.


*Resposta:*
```
{
  word: "tigre"
}
```
<br />


# Uso

### 🚀 Facilidade de Uso
- Endpoints simples e bem estruturados para obter listas de palavras rapidamente.
- Retorno em formato JSON, facilitando a integração com qualquer tecnologia.

### 🌍 Suporte a Múltiplos Idiomas
- Disponível em Português e Inglês para atender diferentes públicos.
- Possibilidade de expandir para mais idiomas no futuro.

### 🎲 Versatilidade
- Pode ser usada em diversos jogos como Forca, Trivia, Palavras Cruzadas e Quebra-Cabeças.
- Suporte para várias categorias como animais, cidades, filmes, frutas e muito mais.
- Endpoint para pegar um item aleatório, ideal para jogos dinâmicos.

### 💨 Desempenho e Simplicidade
- Baseada em Node.js e Express, garantindo respostas rápidas e escalabilidade.
- API leve e eficiente, sem necessidade de configurações complexas.

<br />

# Contribuição

*Sinta-se à vontade para contribuir enviando um pull request ou sugerindo melhorias!*

Licença

Este projeto está sob a licença MIT.


