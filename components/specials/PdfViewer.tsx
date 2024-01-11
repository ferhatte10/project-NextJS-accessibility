// PdfViewer.tsx
import React, { useRef, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import { usePdf } from '@react-pdf-viewer';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const { pdfDocument } = usePdf({ fileUrl: pdfUrl });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = `Page ${currentPage}. ${pdfDocument?.getPage(currentPage).getTextContent()}`;
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.onend = () => {
      setIsPlaying(false);
    };
    speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex + 1);
    if (isPlaying) {
      stopAudio();
      playAudio();
    }
  };

  return (
    <div>
      <button onClick={playAudio} disabled={isPlaying}>
        Play Audio
      </button>
      <button onClick={stopAudio} disabled={!isPlaying}>
        Stop Audio
      </button>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfUrl} onPageChange={handlePageChange} />
      </Worker>
      <audio ref={audioRef}></audio>
    </div>
  );
};

export default PdfViewer;
