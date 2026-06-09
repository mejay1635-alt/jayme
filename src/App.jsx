import ASCIIText from './components/ASCIIText.jsx';
import Threads from './components/Threads.jsx';

export default function App() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      <Threads
        color={[0.12, 0.82, 1]}
        amplitude={1.35}
        distance={0.18}
        enableMouseInteraction
        aria-hidden="true"
      />
      <div className="relative z-10 h-[52vh] w-full max-w-6xl">
        <ASCIIText text="Jayme" asciiFontSize={8} textFontSize={220} textColor="#fdf9f3" enableWaves />
      </div>
    </main>
  );
}
