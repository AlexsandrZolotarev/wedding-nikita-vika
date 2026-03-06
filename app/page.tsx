import Calendar from "./sections/Calendar";
import DressCode from "./sections/DressCode";
import FeedbackForm from "./sections/FeedbackForm";
import Friends from "./sections/Friends";
import Hero from "./sections/hero";
import Location from "./sections/Location";
import MusicPlayer from "./sections/MusicPlayer";
import Times from "./sections/Times";
import Wishes from "./sections/Wishes";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Friends />
      <Calendar />
      <Location />
      <Times />
      <DressCode />
      <Wishes />
      <FeedbackForm />
      <MusicPlayer />
    </main>
  );
}
