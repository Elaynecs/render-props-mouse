import MouseTracker from './components/MouseTracker';

function App() {
  return (
    <>
      <MouseTracker
        render={({ x, y }) => (
          <p>X: {x}, Y: {y}</p>
        )}
      />

      <MouseTracker
        render={({ x, y }) => (
          <div
            style={{
              position: 'absolute',
              top: y,
              left: x,
              width: 20,
              height: 20,
              backgroundColor: 'blue',
              borderRadius: '50%'
            }}
          />
        )}
      />
    </>
  );
}

export default App;

