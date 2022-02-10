import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../assets/scss/services.scss";

const Services = () => {
  let { service } = useParams();
  const carpet = useRef(null);
  const upholstery = useRef(null);
  const rug = useRef(null);
  const tile = useRef(null);
  const services = [
    {
      name: "Upholstery Cleaning",
      ref: upholstery,
      desc: "As with all of our services, we do much to ensure that your home is protected, by using drop cloths, we surround the floor around the piece that is to be cleaned. We will identify the fabric of your furniture pieces and clean accordingly. We will use either HWE(Hot Water Extraction) or VLM (Very Low Moisture) depending on the fabric type, the soil level, or both. We can clean your sofas, sectionals, arm chairs, and dining chairs too!",
    },
    {
      name: "Carpet Cleaning",
      ref: carpet,
      desc: "Before starting we pre-vacuum and ensure that all other surfaces have been covered. After a thorough vacuuming, we spray the carpet with surfactants and emulsifiers to break down dirt, dander and grime. We then pressure wash your carpets with a pressure range of 300-700psi. During the rinse, we treat all spots and stains, working on each one until it is gone or until it proves to be permanent. The water is being extracted in the same moment that it is being applied leaving the carpets lightly damp, like a morning dew. After thoroughly rinsing the detergents and neutralizing any residue, we groom the carpet which aids us in inspecting our work and allowing the fibers to stand tall and uniform for better dry times and even distribution of the rinse product. Standard dry times are 6 -10 hours but, we ask for 24 hours before heavy items are replaced.",
    },
    {
      name: "Area Rug Cleaning",
      ref: rug,
      desc: "No need to ask about your area rugs when you call because we provide those services in our client’s home.  I will spend a few moments admitting that the service that I offer is not as thorough as the service provided at a rug cleaning plant. The rug plant will bathe your rug and remove more dirt than I am able. However, if your rug is not saturated in puppy presents or exceedingly full of dirt and needs to be brought back to a like-new state, I am able to do that for you without the inconvenience and cost of having the rug shipped-out and shipped-back at half of the price the rug plant will charge. We will provide you with a firm quote over the phone in the form of a price per square foot. After we agree on a price and an appointment, I will arrive to test your rug to be sure that it can be cleaned. I will be ready to clean it but there are some materials that do not like to be wet - I am able to clean most non viscous rugs. Viscous is a product that makes rugs shine like silk but doesn't like to be wet. Rug Smack is a unique and versatile product with oxygen bleach that cleans brighter, is safe and smells great. With a neutral pH range, Rug Smack is safe on all natural rugs and  synthetic rugs. It contains special soil suspending agents for easy soil removal. Rug Smack is buffered to maintain pH for optimum cleaning even at low dilutions, plus it rinses out easily and completely. We will provide rug cleaning service within your home! ",
    },
    {
      name: "Tile Cleaning",
      ref: tile,
      desc: "We split up and begin the pre-vacuum process, as well as, covering your carpeted surfaces that lead to the tiled areas with drop cloths, and covering your wall-corners and banisters with towels and corner protectors to ensure that our hoses do not cause damage to your home. After a thorough vacuuming, we spray the tile with surfactants and emulsifiers to break down the dirt and grime. We then pressure wash your tile within a pressure range of 700-1000psi. During the rinse, we treat all spots and stains, working on each one until it is gone or until it proves to be permanent. The water is being extracted at the same moment that it is being applied and fans are installed for immediate dry times. ",
    },
  ];

  function scroller(service) {
    switch (service) {
      case "carpet":
        carpet.current.scrollIntoView();
        break;
      case "upholstery":
        upholstery.current.scrollIntoView();
        break;
      case "rug":
        rug.current.scrollIntoView();
        break;
      case "tile":
        tile.current.scrollIntoView();
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    scroller(service);
  });

  return (
    <div id="services">
      <div className="generalProcess text-container">
        <h1>Our Process</h1>
        <article>
          As a courtesy to our clients and their homes we apply shoe covers
          immediately upon entering homes. After we do introductions, we will
          ask you to escort us through your home to point out any areas of
          concern. A key to superior results when using pre-spray is to allow
          requisite dwell time (usually only 15 minutes but sometimes more than
          an hour. After applying the prespray, we agitate using manual or
          mechanical methods depending on your needs. After agitation, the tile
          is extracted using HWE (Hot Water Extraction). All products we use are
          Truck Mount Forum products and the Truck Mount that we use is a
          Hydramaster 4.8 with salsa which allows us to use 235* water (at the
          truck) to pressure wash your flooring within a varying pressure range.
          Upon completion, we provide shoe covers for you to come and inspect
          our work and encourage you to be critical!
        </article>
      </div>
      {services.map((service) => (
        <div key={service.name} ref={service.ref} className="text-container">
          <h1>{service.name}</h1>
          <article>
            <text>{service.desc}</text>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Services;
