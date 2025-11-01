# C'Propre - Site de Pré-inscription

Landing page minimaliste pour collecter les pré-inscriptions pour C'Propre - Pressing professionnel à domicile.

## 🚀 Fonctionnalités

- Page de pré-inscription avec formulaire
- Validation géographique (Vaison-la-Romaine et environs 10km)
- Envoi automatique d'emails via Resend
- Design responsive (mobile + desktop)
- Animations K2000 et fadeInUp
- Vidéo background (PC uniquement)

## 📦 Installation

```bash
npm install
```

## ⚙️ Configuration

1. Créez un fichier `.env.local` à la racine :

```
RESEND_API_KEY=re_votre_cle_api
NOTIFICATION_EMAIL=votre-email@exemple.com
```

2. Obtenez votre clé API sur https://resend.com

## 🏃 Lancer en local

```bash
npm run dev
```

Ouvrez http://localhost:3000

## 📤 Déploiement sur Vercel

1. Créez un compte sur https://vercel.com
2. Importez ce repository
3. Ajoutez les variables d'environnement :
   - `RESEND_API_KEY`
   - `NOTIFICATION_EMAIL`
4. Déployez !

## 📧 Emails

Chaque inscription envoie un email stylisé avec :
- Nom du client
- Email
- Téléphone
- Ville et code postal
- Date d'inscription

## 🗺️ Zone de service

16 villes autour de Vaison-la-Romaine (rayon 10 km).
