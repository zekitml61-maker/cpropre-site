// Test simple de l'API Resend
const { Resend } = require('resend');

const resend = new Resend('re_isF1X9n9_ADG7YDc5ngYy7sdFcunvq3q2');

async function testResend() {
  console.log('🧪 Test de l\'API Resend...\n');
  
  try {
    const result = await resend.emails.send({
      from: 'Test <onboarding@resend.dev>',
      to: 'c.propre84@gmail.com',
      subject: 'Test API Resend - C\'Propre',
      html: '<h1>✅ Test réussi !</h1><p>Si vous recevez cet email, Resend fonctionne parfaitement.</p>'
    });
    
    console.log('✅ Email envoyé avec succès !');
    console.log('📧 Résultat:', result);
  } catch (error) {
    console.error('❌ Erreur:', error);
    console.error('❌ Message:', error.message);
    console.error('❌ Détails:', error.response?.data || error);
  }
}

testResend();
