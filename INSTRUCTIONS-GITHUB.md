# 📦 Mettre votre code sur GitHub - Guide Simple

## Option 1 : GitHub Desktop (Recommandé - Super simple)

### Étape 1 : Télécharger GitHub Desktop
1. Allez sur **https://desktop.github.com**
2. Téléchargez et installez
3. Ouvrez GitHub Desktop

### Étape 2 : Se connecter
1. Cliquez sur **"Sign in to GitHub.com"**
2. Entrez vos identifiants GitHub
3. (Si vous n'avez pas de compte, créez-en un sur **https://github.com/signup**)

### Étape 3 : Ajouter votre projet
1. Dans GitHub Desktop, cliquez sur **"File"** → **"Add Local Repository"**
2. Cliquez sur **"Choose..."**
3. Naviguez vers : `C:\Users\apfac\Desktop\laverie proffesionele\cpropre-landing`
4. Cliquez sur **"Add Repository"**

### Étape 4 : Faire le commit initial
1. Vous verrez tous les fichiers dans la liste
2. En bas à gauche, dans "Summary", écrivez : `Initial commit`
3. Cliquez sur **"Commit to main"**

### Étape 5 : Publier sur GitHub
1. Cliquez sur **"Publish repository"** (bouton bleu en haut)
2. Nom : `cpropre-landing` (laissez par défaut)
3. Description : `Landing page pré-inscription C'Propre`
4. **Décochez** "Keep this code private" (pour que Vercel puisse y accéder)
5. Cliquez sur **"Publish Repository"**

✅ **C'est tout ! Votre code est sur GitHub !**

---

## Option 2 : Ligne de commande (Pour les utilisateurs avancés)

```bash
cd "C:\Users\apfac\Desktop\laverie proffesionele\cpropre-landing"

# Créer le commit
git add .
git commit -m "Initial commit: Landing page C'Propre"

# Créer un nouveau repo sur GitHub.com d'abord, puis :
git remote add origin https://github.com/VOTRE_USERNAME/cpropre-landing.git
git branch -M main
git push -u origin main
```

---

## 🎯 Prochaine étape

Une fois que c'est sur GitHub, on passe à Vercel !
