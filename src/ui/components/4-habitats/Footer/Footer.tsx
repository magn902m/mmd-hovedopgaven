import React from "react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="sts_footer">
      <h3>Genveje links</h3>
      <ul className="sts_footer_menu">
        <li className="sts_footer_item">
          <a href="https://www.sts.eu/da-DK/payments/acquiring" className="sts_footer_links active">
            Indløsningsaftale
          </a>
        </li>
        <li className="sts_footer_item">
          <a href="https://www.sts.eu/da-DK/payments/online" className="sts_footer_links active">
            Betaling online
          </a>
        </li>
        <li className="sts_footer_item">
          <a
            href="https://www.sts.eu/da-DK/payments/value-added-services"
            className="sts_footer_links active"
          >
            Tillægsydelser
          </a>
        </li>
        <li className="sts_footer_item">
          <a
            href="https://www.sts.eu/da-DK/payments/value-added-services/financing"
            className="sts_footer_links active"
          >
            Sts Financing
          </a>
        </li>
        <li className="sts_footer_item">
          <a
            href="https://www.sts.eu/da-DK/payments/value-added-services/insights-and-reporting"
            className="sts_footer_links active"
          >
            Indsigt & rapportering
          </a>
        </li>
        <li className="sts_footer_item">
          <a
            href="https://www.sts.eu/Pages/Terms-and-conditions---Cookie-and-Privacy-Policy-DK.aspx"
            className="sts_footer_links active"
          >
            Cookiepolitik
          </a>
        </li>
        <li className="sts_footer_item">
          <a href="https://www.sts.eu/GDPR" className="sts_footer_links active">
            GDPR regulation
          </a>
        </li>
      </ul>
    </footer>
  );
};
