"use client"
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordinCard() {

    return (
        <div className="pb-20">
            <Accordion variant="bordered">
                <AccordionItem key="1" aria-label="Accordion 1" title="Will Dream Finder integrate with job search platforms or company career pages?">
                    <p>Yes, Dream Finder integrates with popular job boards, allowing users to import job details directly into their tracker.</p>
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Will Dream Finder send notifications for application deadlines or interview schedules?">
                    <p>Absolutely. Users can set reminders for application deadlines, and Dream Finder sends notifications for important milestones.
                    </p>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Is Dream Finder accessible on mobile devices?">
                   <p>Dream Finder is designed with a responsive interface to ensure a seamless experience on both desktop and mobile platforms.</p>
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 3" title="How will users create accounts on Dream Finder?">
                   <p>Users can create accounts by providing essential details like name, email, and creating a password. We ensure security through encrypted connections and secure password practices.</p>
                </AccordionItem>
                <AccordionItem key="5" aria-label="Accordion 3" title="How intuitive and user-friendly is the interface for managing applications?">
                   <p>Dream Finder features an intuitive dashboard for a quick overview and a seamless interface for adding, updating, and organizing applications.</p>
                </AccordionItem>
                <AccordionItem key="6" aria-label="Accordion 3" title="Is Dream Finder accessible on mobile devices?">
                   <p>Dream Finder is designed with a responsive interface to ensure a seamless experience on both desktop and mobile platforms.</p>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
