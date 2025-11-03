'use client';

import { useState } from 'react';
import { Sparkles, Mail, Phone, MapPin, User, CheckCircle, Rocket, Star, Zap, Gift, Truck, Home, ArrowRight } from 'lucide-react';

export default function PreInscriptionPage() {
  const [formData, setFormData] = useState({
    email: '',
    telephone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Calcul de la deadline - 1 mois à partir d'aujourd'hui
  const today = new Date();
  const deadline = new Date(today);
  deadline.setMonth(deadline.getMonth() + 1);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Envoyer les données directement à Formspree
      const response = await fetch('https://formspree.io/f/xvgvjaok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          telephone: formData.telephone,
          message: `Nouvelle pré-inscription VIP C'Propre\n\nEmail: ${formData.email}\nTéléphone: ${formData.telephone}\nDate: ${new Date().toLocaleString('fr-FR')}\nZone: Vaison + 10 km`,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'inscription');
      }

      // Sauvegarder aussi dans localStorage en backup
      const preInscrits = JSON.parse(localStorage.getItem('cpropre_preinscrits') || '[]');
      const newEntry = {
        ...formData,
        date: new Date().toISOString(),
        id: Date.now().toString()
      };
      preInscrits.push(newEntry);
      localStorage.setItem('cpropre_preinscrits', JSON.stringify(preInscrits));

      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      console.error('Erreur:', error);
      setError('Une erreur est survenue. Veuillez réessayer.');
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-600 via-blue-600 to-primary-700 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Merci pour votre inscription !
          </h2>
          <p className="text-gray-600 mb-4">
            Vous faites partie des <strong className="text-primary-600">premiers inscrits VIP</strong> pour découvrir <strong>C'Propre</strong> !
          </p>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-5 mb-6">
            <p className="text-sm text-green-900 font-bold mb-3">
              Vous serez contacté dès le lancement officiel avec :
            </p>
            <ul className="text-sm text-green-800 space-y-2 text-left">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                <span>Une offre exclusive de -10%</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                <span>Des cadeaux de bienvenue</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                <span>Un accès prioritaire au service</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-sm text-gray-700">
              Le site sera bientôt disponible.<br />
              <strong className="text-gray-900">À très vite !</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Vidéo en arrière-plan - Visible uniquement sur PC (md et plus) */}
      <div className="hidden md:block absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/5535856-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-black/70"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-2 sm:p-4 py-4 sm:py-12">
        {/* Logo en haut avec effets K2000 - Optimisé mobile */}
        <div className="mb-2 md:mb-10 text-center relative px-2 w-full">
          {/* Effet glow derrière le logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-24 md:w-96 md:h-32 bg-gradient-to-r from-primary-500/30 via-blue-500/30 to-primary-500/30 blur-3xl animate-pulse"></div>
          </div>
          
          <h1 className="relative text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-1 md:mb-4">
            <span className="inline-block relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl animate-gradient-x" style={{
                backgroundSize: '200% auto'
              }}>
                C'Propre
              </span>
              {/* Ligne K2000 en dessous */}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white/20 overflow-hidden">
                <span className="absolute inset-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent animate-[k2000_2s_linear_infinite]"></span>
              </span>
            </span>
          </h1>
        </div>

        <div className="max-w-6xl w-full px-2 mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-8">
            {/* Partie gauche - Texte marketing AMÉLIORÉ - Optimisé mobile */}
            <div className="text-white space-y-2 md:space-y-6 order-1 md:order-1">
              <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                Le pressing qui vient<br />
                <span className="text-yellow-300">à vous</span>
              </h2>

              {/* Barre de progression deadline */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-white">Lancement prévu</span>
                  <span className="text-xs font-bold text-yellow-300">{formatDate(deadline)}</span>
                </div>
                <div className="relative w-full h-3 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-full transition-all duration-1000"
                    style={{ width: '45%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[k2000_2s_linear_infinite]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-1.5">
                  <span className="text-[10px] text-white/70">Préparation en cours</span>
                  <span className="text-xs font-black text-white">45%</span>
                </div>
              </div>

              <p className="text-xs sm:text-lg md:text-xl text-white/90 leading-snug">
                Plus besoin de vous déplacer ! <strong>C'Propre</strong> révolutionne le pressing avec la collecte et livraison à domicile.
              </p>

              <div className="flex items-center justify-center gap-1 md:flex-col md:space-y-4">
                {/* Collecte */}
                <div className="group flex flex-col items-center gap-1.5 md:flex-row md:items-start md:gap-4 transition-all duration-300 animate-fadeIn hover:scale-[1.02]" style={{ animationDelay: '0.1s', opacity: 0 }}>
                  <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 p-2 md:p-3 rounded-xl shadow-lg hover:shadow-xl group-hover:shadow-yellow-400/50 transition-all duration-500">
                    <Truck className="text-white transition-transform duration-500 group-hover:scale-110" size={22} />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-black text-xs md:text-xl text-white leading-tight">Collecte</h3>
                  </div>
                </div>

                {/* Flèche 1 */}
                <ArrowRight className="text-yellow-300 opacity-60" size={20} strokeWidth={3} />

                {/* Nettoyage */}
                <div className="group flex flex-col items-center gap-1.5 md:flex-row md:items-start md:gap-4 transition-all duration-300 animate-fadeIn hover:scale-[1.02]" style={{ animationDelay: '0.2s', opacity: 0 }}>
                  <div className="bg-gradient-to-br from-blue-300 to-blue-500 p-2 md:p-3 rounded-xl shadow-lg hover:shadow-xl group-hover:shadow-blue-400/50 transition-all duration-500">
                    <Sparkles className="text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-180" size={22} />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-black text-xs md:text-xl text-white leading-tight">Nettoyage</h3>
                  </div>
                </div>

                {/* Flèche 2 */}
                <ArrowRight className="text-blue-300 opacity-60" size={20} strokeWidth={3} />

                {/* Livraison */}
                <div className="group flex flex-col items-center gap-1.5 md:flex-row md:items-start md:gap-4 transition-all duration-300 animate-fadeIn hover:scale-[1.02]" style={{ animationDelay: '0.3s', opacity: 0 }}>
                  <div className="bg-gradient-to-br from-green-300 to-green-500 p-2 md:p-3 rounded-xl shadow-lg hover:shadow-xl group-hover:shadow-green-400/50 transition-all duration-500">
                    <Home className="text-white transition-transform duration-500 group-hover:scale-110" size={22} />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-black text-xs md:text-xl text-white leading-tight">Livraison</h3>
                  </div>
                </div>
              </div>


            </div>

            {/* Partie droite - Formulaire AMÉLIORÉ - Optimisé mobile */}
            <div className="bg-white rounded-xl md:rounded-3xl shadow-2xl p-2 sm:p-4 md:p-6 lg:p-8 border-2 md:border-4 border-primary-500/20 w-full max-w-full mx-auto order-2 md:order-2">
              <div className="text-center mb-2 md:mb-5">
                <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-0.5 md:px-4 md:py-2 rounded-full mb-1 md:mb-3">
                  <CheckCircle size={12} className="md:w-5 md:h-5" />
                  <span className="font-bold text-[10px] md:text-sm">Gratuit</span>
                </div>
                <h2 className="text-base md:text-3xl font-black text-gray-900 mb-1 md:mb-2">
                  Liste VIP
                </h2>
                <p className="text-[10px] md:text-sm text-gray-600 font-semibold">
                  Soyez notifié du lancement !
                </p>
              </div>

              {/* Zone de service */}
              <div className="bg-gradient-to-r from-blue-50 to-primary-50 border-2 border-blue-200 rounded-xl p-2 md:p-4 mb-2 md:mb-4 text-center">
                <p className="text-[10px] md:text-sm text-blue-900 font-bold flex items-center justify-center gap-1">
                  <MapPin className="text-blue-600" size={14} />
                  <span>Zone : Vaison + 10 km</span>
                </p>
              </div>

              {/* Message d'erreur */}
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-4">
                  <p className="text-sm text-red-800 font-semibold">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition text-sm"
                      placeholder="jean@email.fr"
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Téléphone *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="w-full pl-10 pr-3 py-2 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition text-sm"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                {/* Bouton submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary-600 to-blue-600 text-white py-2.5 rounded-xl font-bold text-sm hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Inscription en cours...
                    </span>
                  ) : (
                    "M'inscrire gratuitement"
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                En vous inscrivant, vous acceptez de recevoir nos communications marketing. Aucun spam, promis !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
