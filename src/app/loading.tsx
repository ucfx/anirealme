"use client";
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="shuriken bg-foreground"></div>
      <style jsx>{`
        .shuriken {
          width: 80px;
          aspect-ratio: 1;
          clip-path: polygon(
            100% 50%,
            64.14% 64.14%,
            50% 100%,
            35.86% 64.14%,
            0% 50%,
            35.86% 35.86%,
            50% 0%,
            64.14% 35.86%
          );
          -webkit-mask: radial-gradient(circle 5px, #0000 90%, #000);
          animation: shuriken-spin 2s infinite linear;
        }

        @keyframes shuriken-spin {
          100% {
            transform: rotate(1turn);
          }
        }
      `}</style>
    </div>
  );
}
