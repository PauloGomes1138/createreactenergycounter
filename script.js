

function EnergyCounter() {
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy(energy => energy + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="energy-counter">
      <h2>Contador de Energia</h2>
      <p>{energy} kWh</p>
    </div>
  );
}

export default EnergyCounter;
