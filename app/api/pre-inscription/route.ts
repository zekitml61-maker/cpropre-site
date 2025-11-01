import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('📥 Données reçues:', data);
    
    // Validation des données essentielles
    if (!data.email || !data.telephone) {
      console.log('❌ Validation échouée - champs manquants');
      return NextResponse.json({ error: 'Email et téléphone sont requis' }, { status: 400 });
    }
    
    console.log('✅ Validation OK, tentative envoi email...');
    
    // Envoyer l'email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    try {
      const result = await resend.emails.send({
        from: 'C\'Propre <onboarding@resend.dev>',
        to: process.env.NOTIFICATION_EMAIL || 'c.propre84@gmail.com',
        subject: `🎉 Nouvelle pré-inscription VIP`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; }
                .card { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
                .info { margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 5px; }
                .label { font-weight: bold; color: #667eea; }
                .value { margin-left: 10px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="card">
                  <div class="header">
                    <h1>🎉 Nouvelle Pré-inscription</h1>
                    <p>C'Propre - Pressing Professionnel</p>
                  </div>
                  <div class="info">
                    <p><span class="label">📧 Email :</span><span class="value">${data.email}</span></p>
                    <p><span class="label">📱 Téléphone :</span><span class="value">${data.telephone}</span></p>
                    <p><span class="label">👤 Nom :</span><span class="value">${data.nom || 'Non renseigné'}</span></p>
                    <p><span class="label">📍 Ville :</span><span class="value">${data.ville || 'Non renseigné'}</span></p>
                    <p><span class="label">🏠 Code postal :</span><span class="value">${data.codePostal || 'Non renseigné'}</span></p>
                    <p><span class="label">📅 Date :</span><span class="value">${new Date().toLocaleString('fr-FR')}</span></p>
                  </div>
                  <p style="text-align: center; color: #666; margin-top: 20px;">
                    <small>Ce client est en attente d'être contacté lors du lancement officiel.</small>
                  </p>
                </div>
              </div>
            </body>
          </html>
        `
      });
      
      console.log('✅ Email envoyé avec succès:', result);
    } catch (emailError: any) {
      console.error('❌ Erreur envoi email:', emailError);
      console.error('❌ Détails:', emailError.message);
      // On continue même si l'email échoue
    }
    
    console.log('✅ Inscription enregistrée');
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('❌ Erreur globale:', error);
    console.error('❌ Message:', error.message);
    return NextResponse.json({ 
      error: 'Erreur lors de l\'inscription', 
      details: error.message 
    }, { status: 500 });
  }
}
