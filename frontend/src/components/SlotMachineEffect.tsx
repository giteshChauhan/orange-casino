const symbols = ['🍒', '🍋', '⭐', '💎'];

const SlotMachineEffect = () => {
  return (
       <div className="flex space-x-2">
              {symbols.map((_, i) => {
                const duration = 1 + i * 0.5;
                const delay = i * 0.3;       
                return (
                  <div key={i} className="w-12 h-40 md:w-16 md:h-64 overflow-hidden bg-black rounded-lg">
                    <div
                      className="animate-reel space-y-4"
                      style={{
                        animationDuration: `${duration}s`,
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                        animationDelay: `${delay}s`,
                      }}
                    >
                      {symbols.concat(symbols).map((s, idx) => (
                        <div key={idx} className="text-3xl md:text-5xl text-center leading-tight">
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
  )
}

export default SlotMachineEffect