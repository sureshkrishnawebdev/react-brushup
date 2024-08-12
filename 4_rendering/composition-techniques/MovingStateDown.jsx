import React from "react";

const Dialog = () => {
  return <div>Dialog</div>;
};

const SlowComponent = () => {
  // Simulate a slow component
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return <div>SlowComponent: {count}</div>;
};

const ButtonWithDialog = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Open dialog</button>
      {isOpen ? <Dialog /> : null}
    </>
  );
};

function MovingStateDown() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <section className="issue-block">
        <button onClick={() => setIsOpen(!isOpen)}>Open dialog</button>
        <SlowComponent />
        {isOpen ? <Dialog /> : null}
      </section>
      <section className="solution-block">
        <ButtonWithDialog />
        <SlowComponent />
      </section>
      <section className="reason">
        <h4>Unwanted re-render of slow component</h4>
        <ol>
          <li>
            On click of button, state changes which triggers component to
            re-render as it is parent for both "Dialog" and "SlowComponent" it
            re-renders both of them.
          </li>
          <li>
            It is not necessary to re-render "SlowComponent" on click of button.
          </li>
          <li>
            By moving state down the component, on button click only the
            "ButtonWithDialog" component renders and not "SlowComponent". As
            state change is local to that component and state never propagates
            top the chain(i.e. parent)
          </li>
        </ol>
      </section>
    </>
  );
}

export default MovingStateDown;
