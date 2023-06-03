import Owners from "@sections/about/team";
import PageBanner from "@sections/pageBanner";
import WhoWeAre from "@sections/whoWeAre";

export default function About() {

    return (
      <main>
        <PageBanner /> 
        <WhoWeAre />
        <Owners name="Owners" team={['Kim', 'Scott']}/>
        <Owners name="Caregivers" team={['Aubrey', 'Chloe', 'Jennifer']}/>
      </main>
    )
  }
  