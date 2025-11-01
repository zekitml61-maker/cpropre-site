# 🌐 Guide : Acheter un domaine chez Hostinger et le connecter à Vercel

## 📋 Vue d'ensemble

1. ✅ Acheter le domaine sur Hostinger (≈8-10€/an)
2. ✅ Déployer le site sur Vercel (gratuit)
3. ✅ Connecter le domaine à Vercel via DNS

---

## 🛒 Étape 1 : Acheter un nom de domaine chez Hostinger

### 1. Créer un compte Hostinger

1. Allez sur **https://www.hostinger.fr**
2. Cliquez sur **"Domaines"** dans le menu
3. Ou allez directement sur https://www.hostinger.fr/nom-de-domaine

### 2. Chercher votre nom de domaine

Dans la barre de recherche, tapez le nom que vous voulez :
- `cpropre.fr` ✅ (recommandé)
- `cproprepressing.fr`
- `cpropre-pressing.fr`
- `cpropre84.fr`
- etc.

**💡 Conseil :** Le `.fr` coûte environ **8-10€/an** et est parfait pour un service local français.

### 3. Ajouter au panier

1. Si le domaine est disponible, cliquez sur **"Ajouter au panier"**
2. **NE PAS** prendre d'hébergement (vous utilisez Vercel gratuitement)
3. Choisissez la durée (1 an minimum)
4. **Options à refuser** (économisez de l'argent) :
   - ❌ Protection WHOIS (pas nécessaire)
   - ❌ Email professionnel (vous pouvez le faire après)
   - ❌ Hébergement (vous utilisez Vercel)

### 4. Finaliser l'achat

1. Créez votre compte Hostinger
2. Entrez vos informations de paiement
3. Payez (environ **8-10€** pour un .fr)
4. Vous recevrez un email de confirmation

---

## 🚀 Étape 2 : Déployer sur Vercel (si pas déjà fait)

### 1. Pousser votre code sur GitHub

**Via GitHub Desktop** (le plus simple) :
1. Téléchargez GitHub Desktop : https://desktop.github.com
2. File → Add Local Repository
3. Sélectionnez le dossier `cpropre-landing`
4. Publish repository → Nommez-le `cpropre-landing`
5. Publish !

### 2. Déployer sur Vercel

1. Allez sur **https://vercel.com**
2. Sign Up avec GitHub
3. New Project → Import `cpropre-landing`
4. **⚠️ IMPORTANT : Ajoutez les variables d'environnement :**
   - `RESEND_API_KEY` = `re_isF1X9n9_ADG7YDc5ngYy7sdFcunvq3q2`
   - `NOTIFICATION_EMAIL` = `c.propre84@gmail.com`
5. Deploy !

Votre site sera sur : `https://cpropre-landing.vercel.app`

---

## 🔗 Étape 3 : Connecter le domaine Hostinger à Vercel

### A. Dans Vercel - Ajouter le domaine

1. Allez dans votre projet sur Vercel
2. Cliquez sur **"Settings"** → **"Domains"**
3. Entrez votre domaine (ex: `cpropre.fr`)
4. Cliquez sur **"Add"**

### B. Vercel vous donne les DNS à configurer

Vercel va afficher quelque chose comme :

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

**⚠️ Notez ces valeurs, vous en aurez besoin !**

### C. Dans Hostinger - Configurer les DNS

1. Connectez-vous sur **https://hpanel.hostinger.fr**
2. Cliquez sur **"Domaines"**
3. Cliquez sur votre domaine (ex: `cpropre.fr`)
4. Allez dans **"DNS / Serveurs de noms"**

### D. Ajouter les enregistrements DNS

#### Option 1 : DNS Records (Recommandé)

Cliquez sur **"Manage DNS Records"** et ajoutez :

**1. Enregistrement A** (pour cpropre.fr)
- Type : `A`
- Name : `@` (ou laissez vide)
- Value : `76.76.21.21` (l'IP que Vercel vous a donnée)
- TTL : `14400` (ou laisser par défaut)

**2. Enregistrement CNAME** (pour www.cpropre.fr)
- Type : `CNAME`
- Name : `www`
- Value : `cname.vercel-dns.com` (celui que Vercel vous a donné)
- TTL : `14400`

**⚠️ Supprimez les anciens enregistrements A et CNAME si présents !**

#### Option 2 : Si vous voulez utiliser un sous-domaine

Par exemple : `preinscription.cpropre.fr`

- Type : `CNAME`
- Name : `preinscription`
- Value : `cname.vercel-dns.com`
- TTL : `14400`

---

## ⏱️ Étape 4 : Attendre la propagation DNS

**Temps d'attente : 5 minutes à 48 heures**

En général, chez Hostinger, c'est rapide (15-30 minutes).

### Comment vérifier ?

1. Ouvrez https://dnschecker.org
2. Entrez votre domaine : `cpropre.fr`
3. Sélectionnez `A` ou `CNAME`
4. Si tout est vert ✅, c'est bon !

---

## ✅ Étape 5 : Vérifier dans Vercel

1. Retournez dans Vercel → Settings → Domains
2. Votre domaine devrait afficher **"Valid Configuration"** ✅
3. Vercel génère automatiquement un certificat SSL (HTTPS) 🔒

---

## 🎉 Votre site est en ligne !

Vous pouvez maintenant accéder à votre site sur :
- `https://cpropre.fr` ✅
- `https://www.cpropre.fr` ✅

---

## 📧 Bonus : Email professionnel avec votre domaine

Si vous voulez créer des emails comme `contact@cpropre.fr` :

### Option 1 : Google Workspace (Payant - 6€/mois)
- Gmail professionnel avec votre domaine
- https://workspace.google.com

### Option 2 : Hostinger Email (Moins cher - ≈1€/mois)
1. Dans Hostinger, allez dans "Email"
2. Créez une adresse email
3. Suivez les instructions

### Option 3 : ImprovMX (Gratuit - Redirection uniquement)
- Redirige `contact@cpropre.fr` vers `c.propre84@gmail.com`
- https://improvmx.com
- Gratuit et simple à configurer avec Hostinger

---

## 💰 Coût total

| Service | Prix | Fréquence |
|---------|------|-----------|
| **Domaine Hostinger** | 8-10€ | /an |
| **Vercel** | 0€ | Gratuit |
| **Resend (emails)** | 0€ | Gratuit (3000/mois) |
| **TOTAL** | **8-10€** | **/an** |

---

## 🆘 Problèmes courants

### "Le domaine ne fonctionne pas"
- Attendez 15-30 minutes (propagation DNS)
- Vérifiez les DNS sur dnschecker.org
- Vérifiez que les enregistrements sont corrects

### "Invalid Configuration" dans Vercel
- Les DNS ne sont pas encore propagés
- Vérifiez que vous avez bien supprimé les anciens enregistrements A/CNAME

### "Not Secure" (pas de HTTPS)
- Attendez quelques minutes, Vercel génère le certificat SSL automatiquement
- Peut prendre jusqu'à 24h dans de rares cas

---

## 📞 Support

- **Hostinger :** Chat 24/7 sur hpanel.hostinger.fr
- **Vercel :** https://vercel.com/support
- **Documentation DNS :** https://support.hostinger.fr/fr/articles/1583227-comment-modifier-les-enregistrements-dns

---

## 🎯 Résumé des étapes

1. ✅ Acheter `cpropre.fr` sur Hostinger (8-10€/an)
2. ✅ Pousser le code sur GitHub
3. ✅ Déployer sur Vercel avec les variables d'environnement
4. ✅ Dans Vercel : Ajouter le domaine
5. ✅ Dans Hostinger : Configurer les DNS (A et CNAME)
6. ✅ Attendre 15-30 minutes
7. ✅ Visiter https://cpropre.fr 🎉

---

**Bon courage ! Votre site sera en ligne très bientôt ! 🚀**
