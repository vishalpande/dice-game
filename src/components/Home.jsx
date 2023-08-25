export default function Home({toggle}) {
  return (
    <main className="container">
      <div className="main-img">
        <img src="src/assets/dices 1.jpg" alt="dice-image" />
      </div>

      <div className="main-text">
        <h1>DICE GAME</h1>

        <div className="main-btn">
          <button 
          onClick={toggle}
          >
            Play Now
          </button>
        </div>
      </div>
    </main>
  );
}
