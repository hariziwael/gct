# Email Notifications pour les Candidatures

## ✅ Fonctionnalité Implémentée

Quand un admin accepte ou refuse une candidature, un email est automatiquement envoyé au candidat à l'adresse email qu'il a fournie lors de sa candidature.

## 📧 Comment ça fonctionne

### 1. Candidat Postule
- Le candidat remplit le formulaire sur `/services/appels`
- Il entre : Nom, Email, Téléphone, et télécharge son CV
- L'email est stocké dans la base de données Sanity

### 2. Admin Accepte/Refuse
- L'admin va sur `/admin/candidature`
- Il clique sur "Accepter" ou "Refuser"
- Le système :
  1. ✅ Met à jour le statut dans la base de données
  2. ✅ Envoie automatiquement un email au candidat
  3. ✅ Affiche un message de succès à l'admin

### 3. Candidat Reçoit l'Email
- L'email est envoyé à l'adresse email fournie
- Contient :
  - Notification d'acceptation ou de refus
  - Titre de l'appel d'offres
  - Message personnalisé selon le statut
  - Design professionnel avec le logo GCT

## 🔧 Configuration Requise

### Variables d'Environnement

Ajoutez ces variables dans votre fichier `.env.local` :

```env
# Clé API Resend (obtenez-la sur https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxx

# Email expéditeur (doit être vérifié dans Resend)
# Format: "Nom <email@domain.com>"
RESEND_EMAIL_FROM=GCT <noreply@yourdomain.com>
```

### Étapes de Configuration

1. **Créer un compte Resend**
   - Allez sur [resend.com](https://resend.com)
   - Créez un compte gratuit
   - Obtenez votre clé API

2. **Configurer l'email expéditeur**
   - Pour le développement : Utilisez `onboarding@resend.dev`
   - Pour la production : Vérifiez votre domaine dans Resend

3. **Ajouter les variables d'environnement**
   ```env
   RESEND_API_KEY=re_votre_cle_api
   RESEND_EMAIL_FROM=GCT <noreply@votredomaine.com>
   ```

## 📋 Fichiers Modifiés

1. **`lib/email.ts`** - Nouvelle fonction pour envoyer des emails
2. **`app/api/candidature/route.ts`** - Mise à jour pour envoyer l'email
3. **`app/admin/candidature/page.tsx`** - Message mis à jour pour confirmer l'envoi

## ✨ Fonctionnalités

- ✅ Email automatique lors de l'acceptation/refus
- ✅ Template HTML professionnel
- ✅ Messages personnalisés selon le statut
- ✅ Gestion d'erreurs (l'email ne bloque pas la mise à jour)
- ✅ Logs pour le débogage
- ✅ Design responsive et professionnel

## 🧪 Test

1. Créez une candidature de test avec votre email
2. Acceptez ou refusez-la dans le panel admin
3. Vérifiez votre boîte de réception
4. Vérifiez les logs du serveur pour confirmer l'envoi

## 📝 Format des Emails

### Email d'Acceptation
- **Sujet**: `✅ Candidature acceptée - [Titre Appel d'offres]`
- **Contenu**: Message de félicitations, prochaines étapes

### Email de Refus
- **Sujet**: `❌ Candidature refusée - [Titre Appel d'offres]`
- **Contenu**: Message de remerciement, encouragement

## 🚨 Dépannage

### L'email n'est pas envoyé ?
1. Vérifiez que `RESEND_API_KEY` est correct
2. Vérifiez que `RESEND_EMAIL_FROM` est au bon format
3. Vérifiez les logs du serveur
4. Vérifiez le dashboard Resend pour les erreurs

### L'email va dans les spams ?
1. Vérifiez votre domaine dans Resend
2. Ajoutez les enregistrements SPF et DKIM
3. Utilisez une adresse email professionnelle

## 🔒 Sécurité

- L'email est envoyé de manière asynchrone (non-bloquant)
- Les erreurs d'email n'empêchent pas la mise à jour du statut
- L'adresse email est validée avant l'envoi
- Les logs d'erreur sont enregistrés pour le débogage

