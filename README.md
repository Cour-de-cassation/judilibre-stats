# UI de stats pour l'API judilibre

Page de statistiques générée avec Svelte. Appelle l'API monitor qui requête l'elasticsearch de log pour obtenir les aggrégations pertinentes.

### Prérequis

npm 16.x est un prérequis - pour l'installer (ubuntu ou debian)

```
sudo curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
```

### Développer

```
npm run dev
```

### Compiler

```
npm run build
```

# CI/CD : Github Actions & Github Pages
cf .github/workflow/gh-pages
