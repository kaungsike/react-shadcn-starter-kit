import { ScrollRestoration } from "react-router-dom";

const ScrollRestorationWrapper = ({ children }: React.ComponentProps<'div'>) => {
  return (
    <>
      <ScrollRestoration />
      {children}
    </>
  );
};

export default ScrollRestorationWrapper;