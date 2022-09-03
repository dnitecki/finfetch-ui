import React from "react";
import "./Dropdown.scss";
import { Accordion, AccordionTab } from "primereact/accordion";
import key from "../../../../assets/Key-icon.png";

export default function Dropdown({ tryItOut }) {
  return (
    <>
      <Accordion>
        <AccordionTab
          header={
            <div className="tryitout-header">
              Try it out!
              <img src={key} className="header-icon" alt="key" />
            </div>
          }
          headerClassName="accordion-header"
          contentClassName="accordion-content"
        >
          {tryItOut}
        </AccordionTab>
      </Accordion>
    </>
  );
}
