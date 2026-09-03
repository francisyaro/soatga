'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Mic, MicOff, X, Check, Loader2, Volume2, Sparkles, AlertCircle, Edit3 } from 'lucide-react';

interface VoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceModal({ isOpen, onClose }: VoiceModalProps) {
  const router = useRouter();
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const demoPhrases = [
    {
      label: 'Vente Ciment (Abdou)',
      text: "J'ai vendu dix sacs de ciment à Abdou à 6 500 francs. Il a payé 40 000 francs par Orange Money et paiera le reste vendredi.",
    },
    {
      label: 'Vente Nouveau Client (Oumarou)',
      text: "J'ai vendu 5 bidons d'huile à Oumarou Sawadogo. Il a payé l'intégralité en espèces.",
    },
    {
      label: 'Encaissement Crédit (Mariam)',
      text: 'Reçu un paiement de 50 000 francs de Mariam Kaboré en espèces pour son crédit.',
    },
    {
      label: 'Entrée Stock (Sucre)',
      text: 'Entrée en stock de 20 sacs de sucre de 1 kg acheté chez Fournisseur Diallo.',
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        try {
          const recog = new SpeechRecognition();
          recog.continuous = true;
          recog.interimResults = true;
          recog.lang = 'fr-FR';

          recog.onresult = (event: any) => {
            let currentTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
              currentTranscript += event.results[i][0].transcript;
            }
            setTranscription(currentTranscript);
            setErrorMessage(null);
          };

          recog.onerror = (event: any) => {
            console.error('Speech recognition error:', event.error);
            setIsListening(false);
            if (event.error === 'not-allowed') {
              setErrorMessage(
                'Permission micro refusée ou connexion HTTP non sécurisée. Utilisez les dictées rapides ci-dessous pour tester.'
              );
            } else if (event.error !== 'no-speech') {
              setErrorMessage(`Erreur de reconnaissance vocale (${event.error}). Utilisez les exemples ci-dessous.`);
            }
          };

          recog.onend = () => {
            setIsListening(false);
          };

          setRecognition(recog);
        } catch (e) {
          console.error(e);
        }
      } else {
        setErrorMessage(
          'Votre navigateur ne prend pas en charge l\'écoute directe du micro via HTTP. Choisissez une dictée de démo ci-dessous.'
        );
      }
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      if (recognition) recognition.stop();
      setIsListening(false);
      return;
    }

    setErrorMessage(null);
    setTranscription('');

    // Request browser audio media permissions
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(() => {
          if (recognition) {
            try {
              recognition.start();
              setIsListening(true);
            } catch (err) {
              console.error(err);
            }
          } else {
            // Fallback simulated dictation
            setIsListening(true);
            simulateSpeech();
          }
        })
        .catch((err) => {
          console.error('Microphone permission denied:', err);
          setErrorMessage(
            'Accès au micro refusé. Cliquez sur l\'un des exemples de voix ci-dessous pour tester !'
          );
          setIsListening(false);
        });
    } else if (recognition) {
      try {
        recognition.start();
        setIsListening(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      simulateSpeech();
    }
  };

  const simulateSpeech = () => {
    setIsListening(true);
    let index = 0;
    const text = demoPhrases[0].text;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTranscription(text.slice(0, index));
        index += 3;
      } else {
        clearInterval(interval);
        setIsListening(false);
      }
    }, 50);
  };

  const handleSelectDemoPhrase = (phrase: string) => {
    setErrorMessage(null);
    setTranscription(phrase);
  };

  const handleConfirmTranscription = () => {
    if (!transcription.trim()) return;
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      onClose();
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('soatga_voice_transcription', transcription);
      }
      router.push('/voice/draft?spoken=true');
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-stone-900/70 backdrop-blur-xs animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl z-10 border border-stone-100 text-center space-y-5 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="flex justify-center pt-1">
          <button
            onClick={toggleListening}
            className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all transform active:scale-95 shadow-xl ${
              isListening
                ? 'bg-brand-red text-white shadow-brand-red/50 animate-pulse'
                : 'bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            {isListening ? <Mic className="w-9 h-9" /> : <MicOff className="w-9 h-9 text-stone-500" />}

            {isListening && (
              <span className="absolute inset-0 rounded-full border-4 border-brand-red animate-ping opacity-75" />
            )}
          </button>
        </div>

        {/* Status Heading */}
        <div>
          <h3 className="text-lg font-bold text-stone-900">
            {isListening ? 'SOATGA écoute votre voix...' : 'Parler à SOATGA'}
          </h3>
          <p className="text-xs text-stone-500 mt-0.5">
            {isListening
              ? 'Parlez librement au micro de votre téléphone ou ordinateur.'
              : 'Cliquez sur le micro ou sélectionnez un exemple de voix ci-dessous.'}
          </p>
        </div>

        {/* Warning Alert if mic is denied on HTTP */}
        {errorMessage && (
          <div className="bg-amber-50 text-amber-900 border border-amber-200 rounded-xl p-3 text-xs text-left font-medium space-y-1">
            <div className="flex items-center space-x-1.5 font-bold text-amber-800">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Note de compatibilité micro</span>
            </div>
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Speech Input / Live Transcription Box */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-3.5 text-left space-y-1">
          <div className="flex justify-between items-center text-[10px] font-bold text-stone-400 uppercase tracking-wider">
            <span className="flex items-center space-x-1">
              <Edit3 className="w-3 h-3" />
              <span>Transcription Vocale (Modifiable)</span>
            </span>
            {transcription && (
              <button
                onClick={() => setTranscription('')}
                className="text-stone-400 hover:text-stone-600 font-semibold"
              >
                Effacer
              </button>
            )}
          </div>

          <textarea
            rows={3}
            value={transcription}
            onChange={(e) => setTranscription(e.target.value)}
            placeholder="Parlez au micro ou tapez/sélectionnez votre instruction ici..."
            className="w-full bg-transparent border-none text-stone-900 font-medium text-xs sm:text-sm focus:outline-none resize-none italic"
          />
        </div>

        {/* Fast Test Dictations (1-Click Presets) */}
        <div className="space-y-2 text-left pt-1">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Exemples de dictées vocales (Test rapide 1-clic)</span>
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {demoPhrases.map((phrase, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectDemoPhrase(phrase.text)}
                className="p-2.5 rounded-xl bg-stone-50 hover:bg-red-50 hover:border-brand-red border border-stone-200/80 text-stone-800 text-left font-semibold transition-all text-[11px]"
              >
                <div className="text-brand-red font-bold text-[10px] uppercase mb-0.5">
                  {phrase.label}
                </div>
                <div className="text-stone-600 line-clamp-2 italic">« {phrase.text} »</div>
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end space-x-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50"
          >
            Annuler
          </button>

          <button
            type="button"
            disabled={!transcription.trim() || isProcessing}
            onClick={handleConfirmTranscription}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-1.5 shadow-md transition-all ${
              transcription.trim() && !isProcessing
                ? 'bg-brand-red hover:bg-brand-red-hover text-white'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed'
            }`}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Analyse par l&apos;IA...</span>
              </>
            ) : (
              <>
                <Check className="w-4 h-4" />
                <span>Traiter l&apos;instruction</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
