import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="nets_footer">
      <h3>Genveje links</h3>
      <ul className="nets_footer_menu">
        <li className="nets_footer_item">
          <a
            href="https://www.nets.eu/da-DK/payments/acquiring"
            className="nets_footer_links active"
          >
            Inløsningsaftale
          </a>
        </li>
        <li className="nets_footer_item">
          <a
            href="https://www.nets.eu/da-DK/payments/online"
            className="nets_footer_links active"
          >
            Betaling online
          </a>
        </li>
        <li className="nets_footer_item">
          <a
            href="https://www.nets.eu/da-DK/payments/value-added-services"
            className="nets_footer_links active"
          >
            Tillægsydelser
          </a>
        </li>
        <li className="nets_footer_item">
          <a
            href="https://www.nets.eu/da-DK/payments/value-added-services/financing"
            className="nets_footer_links active"
          >
            Nets Financing
          </a>
        </li>
        <li className="nets_footer_item">
          <a
            href="https://www.nets.eu/da-DK/payments/value-added-services/insights-and-reporting"
            className="nets_footer_links active"
          >
            Indsigt & rapportering
          </a>
        </li>
        <li className="nets_footer_item">
          <a
            href="https://www.nets.eu/Pages/Terms-and-conditions---Cookie-and-Privacy-Policy-DK.aspx"
            className="nets_footer_links active"
          >
            Cookiepolitik
          </a>
        </li>
        <li className="nets_footer_item">
          <a
            href="https://www.nets.eu/GDPR"
            className="nets_footer_links active"
          >
            GDPR regulation
          </a>
        </li>
      </ul>
    </footer>
  );
};
