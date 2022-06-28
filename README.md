# Heroku

### Passos

- `heroku local web`
  -  Se precisar por conflito de porta `heroku local web -p :porta-custom`
-  `heroku create :nome --remote homolog`
-  `heroku create :outro-nome --remote prod`

### Variáveis
- Setar `heroku config:set TEXTO="uma frase de prod" --app xp-mentoria-deploy-example`
- Listar `heroku config --app xp-mentoria-deploy-example`


### CRA

- `npx create-react-app $APP_NAME`
- `cd $APP_NAME`
- `git remote add origin https://github.com/$USER/$NOME-PROJETO.git`
- `heroku create $APP_NAME --buildpack mars/create-react-app`
- `git push heroku main`
- `heroku open`