"use client";

import Modal from "@/components/Modal";
import Image from "next/image";
import React from "react";
interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) {
    return null;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="">
      <div className="w-80 h-80">
        <Image src={src} alt="Image" className="object-cover" fill />
      </div>
    </Modal>
  );
};

export default ImageModal;
