// Component Name: HomePage

import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <section className=" md:px-24 md:py-18">
      <Hero />
    </section>
  );
}

/**
 * =====================================================================
 *   ORIGINAL DOCUMENTATION  (Append to end of component code block)
 * =====================================================================
 * File Name      : page.tsx
 * Component Name : HomePage
 * Component Type : HomePage Component
 * Date Created   : 30 June 2024
 * Dev Name       : Nihar Hegde
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer  :  To render the HomePage component.
 *
 * ------------------------------
 * Question: What does this component do?:
 * Answer  :  This component renders the HomePage component.
 *
 * ------------------------------
 * Footnote Comments: None  (Enter "none" if you have no comments)
 *
 * ------------------------------
 * Input Comments:  None   (Enter "none" if you have no comments)
 *
 * ------------------------------
 * Output Comments: None  (Enter "none" if you have no comments)
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer  : No
 *
 */

/**
 * =====================================================================
 *   REVISION DOCUMENTATION  (Append AFTER PREVIOUS documentation block(s) )
 * =====================================================================
 * Date Revised :  July 15 2024              (last date you made a code change)
 * Dev Name     :  Nihar Hegde
 * ------------------------------
 * Question: Why was it necessary to revise this component?
 * Answer  : To make it more mobile responsive
 *
 * ------------------------------
 * Describe Your Change(s):
 * md:px-24 md:py-18 add the following tailwind classes to the section tag to add padding only after the md breakpoint.
 *
 * ------------------------------
 * Footnote Comments: None   (Enter "none" if you have no Footnote comments)
 *
 * ------------------------------
 * Input Comments: None    (Enter "none" if you have no Input comments)
 *
 * ------------------------------
 * Output Comments: None    (Enter "none" if you have no Output comments)
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer  : NO
 *
 */
