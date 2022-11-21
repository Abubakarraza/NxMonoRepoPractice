// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Footer } from '@raza/footer';
import LandingPage from './landing-page/LandingPage';
import { Pages } from '@raza/pages';
import { HomePage } from '@raza/home-page';
export function App() {
  return (
    <>
      <NxWelcome title="raza" />
      <Footer />
      <LandingPage />
      <Pages />
      <HomePage />

      <div />
    </>
  );
}

export default App;
