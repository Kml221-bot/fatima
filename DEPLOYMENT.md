# Guide de Déploiement sur Vercel

Ce guide vous explique comment déployer votre portfolio Fatoumata Thioune sur Vercel.

## Prérequis

- Un compte GitHub avec votre projet
- Un compte Vercel (gratuit sur https://vercel.com)

## Étapes de déploiement

### 1. Préparer votre projet

Assurez-vous que tous vos fichiers sont commités sur GitHub :

```bash
git add .
git commit -m "Configuration pour déploiement Vercel"
git push origin main
```

### 2. Connecter votre dépôt à Vercel

1. Allez sur [https://vercel.com](https://vercel.com)
2. Cliquez sur **"New Project"**
3. Sélectionnez **"Import Git Repository"**
4. Connectez votre compte GitHub et sélectionnez votre dépôt `portfolio_fatoumata`
5. Cliquez sur **"Import"**

### 3. Configurer le projet

Vercel devrait détecter automatiquement :
- **Framework Preset** : Vite
- **Build Command** : `pnpm build`
- **Output Directory** : `dist/public`
- **Install Command** : `pnpm install`

Si ces paramètres ne sont pas détectés, configurez-les manuellement.

### 4. Ajouter les variables d'environnement (si nécessaire)

Si votre projet utilise des variables d'environnement, ajoutez-les dans :
**Settings → Environment Variables**

### 5. Déployer

Cliquez sur **"Deploy"** et attendez que le déploiement se termine.

Une fois terminé, vous recevrez une URL publique pour accéder à votre portfolio.

## Après le déploiement

### Ajouter un domaine personnalisé

1. Allez dans **Settings → Domains**
2. Cliquez sur **"Add Domain"**
3. Entrez votre domaine personnalisé
4. Suivez les instructions pour configurer les DNS

### Redéployer après des modifications

Chaque fois que vous poussez des modifications sur GitHub :

```bash
git add .
git commit -m "Description des modifications"
git push origin main
```

Vercel redéploiera automatiquement votre site.

### Ajouter vos images

1. Créez un dossier `client/public/images/`
2. Placez vos images dans ce dossier
3. Mettez à jour les chemins dans `client/src/pages/Home.tsx`
4. Commitez et poussez les modifications

```bash
git add .
git commit -m "Ajout des images du portfolio"
git push origin main
```

## Dépannage

### Le build échoue

- Vérifiez que `pnpm` est installé localement
- Assurez-vous que tous les fichiers sont commités
- Vérifiez les logs de build dans le dashboard Vercel

### Les images ne s'affichent pas

- Vérifiez que les images sont dans `client/public/images/`
- Vérifiez les chemins dans `Home.tsx` (doivent commencer par `/images/`)
- Vérifiez la console du navigateur pour les erreurs 404

### Les animations ne fonctionnent pas

- Vérifiez que le fichier `client/src/index.css` contient les animations
- Vérifiez que les classes CSS sont correctement appliquées dans `Home.tsx`

## Support

Pour plus d'informations sur Vercel, consultez la [documentation officielle](https://vercel.com/docs).
