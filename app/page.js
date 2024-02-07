import Register from "./Components/Register"
import Speakers from "./Components/Speakers";
import Overview from "./Components/Overview";
import Partners from "./Components/Partners";
import KeyHighlight from "./Components/KeyHighlight";
import KeyDiscussionPoints from "./Components/KeyDiscussionPoints";
import Participate from "./Components/Participate";
import Meet from "./Components/Meet";
import Registration from "./Components/Registration";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Venue from "./Components/Venue";
 import ImageGallery from "./Components/ImageGallery";
import EventSchedule from "./Components/EventSchedue";



export default function Home() {
  return (
    <>
 <Register/>
 <Speakers/>
 <Overview/>
 <Partners/>
<KeyHighlight/>
 <KeyDiscussionPoints/>
 <Participate/>
 <EventSchedule/>
 <Meet/>
<Registration/>
 <FAQ/>
 <Contact/>
 <Venue/> 
<ImageGallery/>

    </>
  )
}
