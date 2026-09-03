'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Mic, MicOff, X, Check, Loader2, Volume2 } from 'lucide-react';

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
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
        };

        recog.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          if (event.error !== 'no-speech') {
            setErrorMessage('Erreur du micro ou permission non accordée.');
          }
          setIsListening(false);
        };

        recog.onend = () => {
          setIsListening(false);
        };

        setRecognition(recog);
      } else {
        setErrorMessage('La reconnaissance vocale n\'est pas supportée sur ce navigateur.');
      }
    }
  }, []);

  const toggleListening = () => {
    if (!recognition) {
      setErrorMessage('Navigateur non compatible avec la synthèse vocale.');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setErrorMessage(null);
      setTranscription('');
      try {
        recognition.start();
        setIsListening(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleConfirmTranscription = () => {
    if (!transcription.trim()) return;
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      onClose();
      // Pass transcription to draft page via query param or session storage
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('soatga_voice_transcription', transcription);
      }
      router.push('/voice/draft?spoken=true');
    }, 800);
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
      <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl z-10 border border-stone-100 text-center space-y-6 animate-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mic Pulse Icon */}
        <div className="flex justify-center pt-2">
          <button
            onClick={toggleListening}
            className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all transform active:scale-95 shadow-xl ${
              isListening
                ? 'bg-brand-red text-white shadow-brand-red/50 animate-pulse'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {isListening ? <Mic className="w-10 h-10" /> : <MicOff className="w-10 h-10 text-stone-500" />}

            {isListening && (
              <span className="absolute inset-0 rounded-full border-4 border-brand-red animate-ping opacity-75" />
            )}
          </button>
        </div>

        {/* Status Heading */}
        <div>
          <h3 className="text-xl font-bold text-stone-900">
            {isListening ? 'SOATGA vous écoute...' : 'Cliquez sur le micro pour parler'}
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            {isListening
              ? 'Dictez votre vente (ex: "J\'ai vendu 10 sacs de ciment à Abdou...")'
              : 'Appuyez pour démarrer l\'enregistrement vocal.'}
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="bg-red-50 text-red-700 border border-red-200 rounded-xl p-3 text-xs font-semibold">
            {errorMessage}
          </div>
        )}

        {/* Real-time Transcription Speech Bubble */}
        <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-4 min-h-24 max-h-40 overflow-y-auto text-left">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
            Transcription en direct
          </span>
          {transcription ? (
            <p className="text-sm font-medium text-stone-800 italic">« {transcription} »</p>
          ) : (
            <p className="text-xs text-stone-400 italic">Parlez clairement au micro...</p>
          )}
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
