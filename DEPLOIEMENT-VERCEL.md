# 🚀 Déploiement sur Vercel - Guide pas à pas

## ✅ Votre projet est prêt !

Le projet `cpropre-landing` contient uniquement la page de pré-inscription et l'API Resend.

---

## 📦 Étape 1 : Créer un repository GitHub

### Option A : Via GitHub Desktop (Le plus simple)

1. Téléchargez GitHub Desktop : https://desktop.github.com
2. Installez et connectez-vous avec votre compte GitHub
3. Cliquez sur "File" → "Add Local Repository"
4. Sélectionnez le dossier `cpropre-landing`
5. Cliquez sur "Publish repository"
6. Nommez-le `cpropre-landing`
7. Décochez "Keep this code private" si vous voulez qu'il soit public
8. Cliquez sur "Publish Repository"

### Option B : Via ligne de commande

```bash
# Dans le dossier cpropre-landing
git add .
git commit -m "Initial commit: Landing page C'Propre"

# Créez un nouveau repo sur GitHub.com
# Puis :
git remote add origin https://github.com/VOTRE_USERNAME/cpropre-landing.git
git branch -M main
git push -u origin main
```

---

## 🌐 Étape 2 : Déployer sur Vercel

### 1. Créer un compte Vercel

- Allez sur https://vercel.com
- Cliquez sur "Sign Up"
- Choisissez "Continue with GitHub"
- Autorisez Vercel à accéder à votre GitHub

### 2. Importer le projet

1. Sur le dashboard Vercel, cliquez sur **"Add New"** → **"Project"**
2. Vous verrez la liste de vos repositories GitHub
3. Trouvez **"cpropre-landing"** et cliquez sur **"Import"**

### 3. Configurer le projet

**Framework Preset :** Next.js (détecté automatiquement)
**Root Directory :** . (laisser par défaut)
**Build Command :** `npm run build` (par défaut)
**Output Directory :** `.next` (par défaut)

### 4. Ajouter les variables d'environnement ⚠️ IMPORTANT

Avant de cliquer sur "Deploy", ajoutez vos variables :

1. Cliquez sur **"Environment Variables"**
2. Ajoutez ces 2 variables :

| Name | Value |
|------|-------|
| `RESEND_API_KEY` | `re_isF1X9n9_ADG7YDc5ngYy7sdFcunvq3q2` |
| `NOTIFICATION_EMAIL` | `c.propre84@gmail.com` |

3. Cliquez sur **"Deploy"**

### 5. Attendre le déploiement

- Le build prend environ 1-2 minutes
- Vous verrez une animation de progression
- Une fois terminé, vous verrez "Congratulations! 🎉"

### 6. Récupérer l'URL

Vercel vous donne automatiquement une URL du type :
```
https://cpropre-landing.vercel.app
```

ou

```
https://cpropre-landing-votre-username.vercel.app
```

---

## ✅ C'est tout ! Votre site est en ligne ! 🎉

---

## 🌍 Étape 3 (Optionnel) : Ajouter un domaine personnalisé

### Si vous avez un domaine (ex: cpropre.fr)

1. Dans Vercel, allez dans votre projet
2. Cliquez sur **"Settings"** → **"Domains"**
3. Ajoutez votre domaine (ex: `preinscription.cpropre.fr`)
4. Suivez les instructions pour configurer les DNS

### Si vous n'avez pas de domaine

Vous pouvez :
- Utiliser l'URL Vercel gratuite (suffisant pour commencer)
- Acheter un domaine sur Vercel (≈10€/an)
- Acheter un domaine sur OVH, Gandi, etc.

---

## 🧪 Tester votre site

1. Ouvrez l'URL Vercel
2. Remplissez le formulaire de pré-inscription
3. Vérifiez votre email **c.propre84@gmail.com**
4. Vous devriez recevoir l'email avec les infos du client !

---

## 🔄 Mises à jour automatiques

Chaque fois que vous faites un `git push`, Vercel redéploie automatiquement ! 🚀

---

## 📊 Statistiques

Dans Vercel, vous pouvez voir :
- Nombre de visiteurs
- Performance du site
- Logs en temps réel
- Erreurs éventuelles

---

## 🆘 Problèmes courants

### "Build failed"
- Vérifiez que les variables d'environnement sont bien ajoutées
- Regardez les logs dans Vercel

### "Les emails ne sont pas reçus"
- Vérifiez que `RESEND_API_KEY` est correcte
- Vérifiez que `NOTIFICATION_EMAIL` est correcte
- Vérifiez vos SPAMS

### "Page 404"
- L'URL par défaut est `/` et redirige vers `/pre-inscription`
- Utilisez directement `/pre-inscription` si besoin

---

## 📞 Besoin d'aide ?

- Documentation Vercel : https://vercel.com/docs
- Support Vercel : https://vercel.com/support
