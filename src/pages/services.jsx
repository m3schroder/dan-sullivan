import React from "react";

import "../assets/scss/services.scss";

const listOfServices = [
  "Carpet Cleaning",
  "Area Rug Cleaning",
  "Upholstery Cleaning",
  "Tile Cleaning",
  "Stain Removal",
  "Commercial Cleaning",
];
const descOfServices = [
  "We don shoe covers as we enter your home and introduce ourselves then ask you to escort us through your home to get us familiar with the layout and to have you point out anything that you can identify as problematic to you; next, we split up as one of us starts to pre-vacuum, the other covers your hard surfaces with drop cloths and your wall-corners and banisters with towels and corner protectors to ensure that our hoses have no opportunity to cause damage to your home. After a thorough vacuuming, we pre-spray the carpet with surfactants and emulsifiers to break down the dirt, dander, and grime. A key to superior results when using pre-spray is to allow requisite dwell time (usually only 15 minutes but sometimes more than an hour. After applying the prespray, we agitate using manual or mechanical methods depending on your needs. After agitation, the carpets are extracted using HWE (Hot Water Extraction), the only and required method for cleaning your carpets, mandated by all carpet manufacturers. The Truck Mount that we use is a Hydramaster 4.8 with salsa which allows us to use 235* water (at the truck) to pressure wash your carpets with a pressure range of 300-700psi. During the rinse, we treat all spots and stains, working on each one until it is gone or until it proves to be permanent. The water is being extracted in the same moment that it is being applied leaving the carpets lightly damp, like a morning dew. After thoroughly rinsing the detergents and neutralizing any residue, we groom the carpet which aids us in inspecting our work and allowing the fibers to stand tall and uniform for better dry times and even distribution of the rinse product. Upon completion, we provide shoe covers for you to come and inspect our work and encourage you to be critical! Standard dry times are 6 -10 hours but, we ask for 24 hours before heavy items are replaced.",
  " We clean your area rugs in your home! Please do ask about area rug cleaning when you call! I will spend a few moments admitting that the service that I offer is not as thorough as the service provided at a rug cleaning plant. The rug plant will bathe your rug and remove more dirt than I am able. However, if your rug is not saturated in puppy presents or exceedingly full of dirt and needs to be brought back to a like-new state, I am able to do that for you without the inconvenience and cost of having the rug shipped-out and shipped-back at half of the price the rug plant will charge. We will provide you with a firm quote over the phone in the form of a price per square foot. After we agree on a price and an appointment, I will arrive to test your rug to be sure that it can be cleaned. I will be ready to clean it but there are some materials that do not like to be wet - I am able to clean most non viscous rugs. Viscous is a product that makes rugs shine like silk but doesn't like to be wet. We clean your area rugs in your home! ",
  "Upholstery Cleaning",
  "We don shoe covers as we enter your home and introduce ourselves and ask you to escort us through your home to get us familiar with the layout and to have you point out anything that you can identify as problematic to you; next, we split up as one of us starts to pre-vacuum, the other covers your carpeted surfaces that lead to the tiled areas with drop cloths and your wall-corners and banisters with towels and corner protectors to ensure that our hoses have no opportunity to cause damage to your home. After a thorough vacuuming, we pre-spray the tile with surfactants and emulsifiers to break down the dirt and grime. A key to superior results when using pre-spray is to allow requisite dwell time (usually only 15 minutes but sometimes more than an hour. After applying the prespray, we agitate using manual or mechanical methods depending on your needs. After agitation, the tile is extracted using HWE (Hot Water Extraction). The Truck Mount that we use is a Hydramaster 4.8 with salsa which allows us to use 235* water (at the truck) to pressure wash your tile within a pressure range of 700-1000psi. During the rinse, we treat all spots and stains, working on each one until it is gone or until it proves to be permanent. The water is being extracted in the same moment that it is being applied, fans are installed for immediate dry times. Upon completion, we provide shoe covers for you to come and inspect our work and encourage you to be critical!",
  "Stain Removal desc",
  "Okay",
];
const Services = () => {
  return (
    <div id="services">
      {listOfServices.map((el, i) => (
        <section key={i} className="text-container" id="one">
          <h2>{el}</h2>
          <div>{descOfServices[i]}</div>
        </section>
      ))}
    </div>
  );
};

export default Services;
