# 🚀 Déployer sur Vercel - Guide pas à pas

## Étape 1 : Créer un compte Vercel

1. Allez sur **https://vercel.com**
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à vos repositories
5. Vous êtes connecté ! ✅

---

## Étape 2 : Importer votre projet

1. Sur le dashboard Vercel, cliquez sur **"Add New..."** → **"Project"**
2. Vous verrez la liste de vos repositories GitHub
3. Cherchez **"cpropre-landing"**
4. Cliquez sur **"Import"** à côté

---

## Étape 3 : Configuration du projet

### Build Settings (laissez par défaut)
- **Framework Preset:** Next.js ✅ (détecté automatiquement)
- **Root Directory:** `./` (par défaut)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

### ⚠️ IMPORTANT : Variables d'environnement

**AVANT de cliquer sur "Deploy"**, ajoutez vos variables :

1. Descendez jusqu'à **"Environment Variables"**
2. Ajoutez ces 2 variables :

#### Variable 1 : RESEND_API_KEY
- **Name:** `RESEND_API_KEY`
- **Value:** `re_isF1X9n9_ADG7YDc5ngYy7sdFcunvq3q2`
- Cliquez sur **"Add"**

#### Variable 2 : NOTIFICATION_EMAIL
- **Name:** `NOTIFICATION_EMAIL`
- **Value:** `c.propre84@gmail.com`
- Cliquez sur **"Add"**

3. Vérifiez que les 2 variables apparaissent dans la liste

---

## Étape 4 : Déployer !

1. Cliquez sur le gros bouton bleu **"Deploy"**
2. Attendez 1-2 minutes (vous verrez une animation de build)
3. 🎉 **Congratulations!** s'affiche

---

## Étape 5 : Voir votre site

1. Vercel vous donne une URL automatique :
   ```
   https://cpropre-landing.vercel.app
   ```
   (ou similaire)

2. Cliquez dessus pour voir votre site en ligne ! ✅

---

## Étape 6 : Tester le formulaire

1. Ouvrez votre site
2. Remplissez le formulaire avec de fausses données
3. Cliquez sur "Rejoindre la liste VIP"
4. Allez vérifier votre email **c.propre84@gmail.com**
5. Vous devriez avoir reçu l'email ! 📧

---

## Étape 7 : Connecter votre domaine cpropre84.fr

### A. Dans Vercel - Ajouter le domaine

1. Dans votre projet, cliquez sur **"Settings"** (en haut)
2. Dans le menu de gauche, cliquez sur **"Domains"**
3. Dans le champ, tapez : `cpropre84.fr`
4. Cliquez sur **"Add"**

### B. Vercel affiche les DNS à configurer

Vous verrez quelque chose comme :

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

**⚠️ NOTEZ CES VALEURS !**

### C. Dans Hostinger - Configurer les DNS

1. Allez sur **https://hpanel.hostinger.fr**
2. Connectez-vous
3. Cliquez sur **"Domaines"**
4. Cliquez sur **"cpropre84.fr"**
5. Cliquez sur **"DNS / Serveurs de noms"**
6. Cliquez sur **"Gérer les enregistrements DNS"**

### D. Ajouter les enregistrements DNS

#### ❌ D'abord, SUPPRIMEZ les anciens enregistrements :
- Supprimez l'enregistrement `A` existant (s'il y en a)
- Supprimez l'enregistrement `CNAME` pour `www` (s'il y en a)

#### ✅ Ensuite, AJOUTEZ les nouveaux :

**1. Enregistrement A (pour cpropre84.fr)**
- Cliquez sur **"Ajouter un enregistrement"**
- Type : `A`
- Name : `@` (ou laissez vide)
- Points to : `76.76.21.21` (l'IP que Vercel vous a donnée)
- TTL : `14400` (ou par défaut)
- Cliquez sur **"Ajouter"**

**2. Enregistrement CNAME (pour www.cpropre84.fr)**
- Cliquez sur **"Ajouter un enregistrement"**
- Type : `CNAME`
- Name : `www`
- Target : `cname.vercel-dns.com` (celui donné par Vercel)
- TTL : `14400`
- Cliquez sur **"Ajouter"**

### E. Sauvegarder
Cliquez sur **"Enregistrer les modifications"**

---

## Étape 8 : Attendre la propagation DNS

**Temps d'attente : 15-30 minutes** (parfois jusqu'à 48h, mais rare)

### Comment vérifier ?

1. Ouvrez **https://dnschecker.org**
2. Tapez : `cpropre84.fr`
3. Sélectionnez `A Record`
4. Si c'est vert partout ✅, c'est bon !

---

## Étape 9 : Vérifier dans Vercel

1. Retournez dans Vercel → Settings → Domains
2. Actualisez la page
3. Vous devriez voir **"Valid Configuration"** ✅ à côté de `cpropre84.fr`

Vercel génère automatiquement un certificat SSL (HTTPS) 🔒

---

## 🎉 Votre site est en ligne !

Vous pouvez maintenant accéder à :
- **https://cpropre84.fr** ✅
- **https://www.cpropre84.fr** ✅

---

## 🔄 Mises à jour futures

Pour mettre à jour votre site :
1. Modifiez les fichiers localement
2. Dans GitHub Desktop : Commit → Push
3. Vercel redéploie automatiquement ! 🚀

---

## 📊 Dashboard Vercel

Dans Vercel, vous pouvez :
- Voir le nombre de visiteurs
- Voir les logs en temps réel
- Voir les erreurs
- Voir les performances

---

## 🆘 Problèmes courants

### "Build failed"
- Vérifiez les variables d'environnement
- Regardez les logs dans Vercel

### "Les emails ne sont pas reçus"
- Vérifiez les variables d'environnement
- Vérifiez vos SPAMS
- Testez en local d'abord

### "Le domaine ne fonctionne pas"
- Attendez 30 minutes
- Vérifiez les DNS sur dnschecker.org
- Vérifiez que vous avez bien supprimé les anciens enregistrements

---

## ✅ Checklist finale

- [ ] Code sur GitHub
- [ ] Déployé sur Vercel
- [ ] Variables d'environnement ajoutées
- [ ] Site Vercel fonctionne
- [ ] DNS configurés dans Hostinger
- [ ] cpropre84.fr accessible
- [ ] HTTPS actif
- [ ] Formulaire testé
- [ ] Email reçu

---

**Bravo ! Votre site est en ligne ! 🎉🚀**
