import ASCIIText from './components/ASCIIText.jsx';

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      <div className="relative h-[52vh] w-full max-w-6xl">
        <ASCIIText text="Jayme" asciiFontSize={8} textFontSize={220} textColor="#fdf9f3" enableWaves />
      </div>
    </main>
  );
}
