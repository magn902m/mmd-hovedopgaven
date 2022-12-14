import React from "react";
import { ProductCard } from "../ui/components/1-atoms/ProductCard";
import WebshopItems from "../data/terminals.json";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Products = () => {
  const navigate = useNavigate();

  const goToSingleview = (e: any, id: any) => {
    const url = `/product/${id}`;

    return navigate(url);
  };
  return (
    <>
      <Helmet>
        <title>
          Tag imod betalinger med den pakkeløsning, som passer din virksomhed best - Nets Denmark
        </title>
        <meta
          name="title"
          content="Tag imod betalinger med den pakkeløsning, som passer din virksomhed best - Nets Denmark"
        />
        <meta
          name="description"
          content="Uanset om du sælger børnetøj, reparerer cykler eller serverer kaffe til morgentrætte kunder, har vi en terminal, der passer til dine behov."
        />
        <meta name="keyword" content="Nets betalingsløsninger bæredygtighed betalingsterminal" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mmd-hovedopgaven.web.app/" />
        <meta
          property="og:title"
          content="Tag imod betalinger med den pakkeløsning, som passer din virksomhed best - Nets Denmark"
        />
        <meta
          property="og:description"
          content="Uanset om du sælger børnetøj, reparerer cykler eller serverer kaffe til morgentrætte kunder, har vi en terminal, der passer til dine behov."
        />
        <meta
          property="og:image"
          content={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mmd-hovedopgaven.web.app/" />
        <meta
          property="twitter:title"
          content="Tag imod betalinger når som helst, hvor som helstU+002d Nets Denmark"
        />
        <meta
          property="twitter:description"
          content="Uanset om du sælger børnetøj, reparerer cykler eller serverer kaffe til morgentrætte kunder, har vi en terminal, der passer til dine behov."
        />
        <meta
          property="twitter:image"
          content={process.env.PUBLIC_URL + "./images/payment_terminal.svg"}
        />
      </Helmet>

      <main id="main" className="nets_products">
        <header>
          <h1>Produkter</h1>
        </header>
        <section className="nets_products_overview">
          {WebshopItems.map((t) => (
            <ProductCard
              img={t.img}
              title={t.name}
              text={t.desc1}
              btnLabel={`${t.price} kr pr måned`}
              id={t.id}
              key={t.id}
              onClick={(e) => goToSingleview(e, t.id)}
            ></ProductCard>
          ))}
        </section>
      </main>
    </>
  );
};
