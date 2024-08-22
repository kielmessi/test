import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 text-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">
          Enjoy football in <span className="text-yellow-300">the Premier League</span>
        </h1>
        
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Image src="/man-utd-logo.png" alt="Manchester United" width={40} height={40} />
            <span className="text-3xl mx-4">1 : 1</span>
            <Image src="/man-city-logo.png" alt="Manchester City" width={40} height={40} />
          </div>
          <span className="bg-yellow-300 text-black px-2 py-1 rounded">Live</span>
        </div>

        <div className="flex justify-between mb-8">
          <div>
            <Image src="/player1.jpg" alt="Player 1" width={200} height={300} className="rounded" />
          </div>
          <div>
            <Image src="/player2.jpg" alt="Player 2" width={200} height={300} className="rounded" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Match Stats</h2>
            <div className="flex justify-between mb-2">
              <span>Attacks</span>
              <span>24 - 36</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shots</span>
              <span>8 - 20</span>
            </div>
            <div className="flex justify-between">
              <span>Possession</span>
              <span>56% - 44%</span>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Other Matches</h2>
            <div className="mb-2">West Ham 1 : 0 Leeds</div>
            <div className="mb-2">Crystal Palace 2 : 1 Fulham</div>
            <div>Leicester City 1 : 1 Brentford</div>
          </div>
        </div>
      </div>
    </main>
  );
}